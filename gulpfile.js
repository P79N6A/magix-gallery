let gulp = require('gulp');
let combineTool = require('magix-combine');
let watch = require('gulp-watch');
let del = require('del');
let fs = require('fs');
let pkg = require('./package.json');
let uglify = require('gulp-uglify-es').default;
let ts = require('typescript');
let classReg = /\bclass\s*=\s*"[^"]+/;

combineTool.config({
    debug: true,
    srcFolder: 'build/src',
    loaderType: 'cmd_es',
    projectName: '_',
    tmplAddViewsToDependencies: true,
    tmplMultiBindEvents: true,
    magixUpdaterIncrement: true,
    galleries: {
        mxRoot: '',
        mxMap: {  //配置到 https://github.com/thx/magix-combine-tool-config/blob/master/index.js
            'mx-popover': {
                tag: 'span'
            },
            'mx-calendar.rangepicker': {
                tag: 'div'
            },
            'mx-switch': {
                tag: 'span'
            },
            'mx-loading'() {
                return `<div class="loading">
                        <span class="loading-anim"></span>
                    </div>`;
            },
            'mx-dropdown.item'(tag) {
                return `<i ${tag.attrs} class="none">${tag.content}</i>`;
            }
        }
    },
    revisableStringSplitter: '',
    //cssSourceMap: true,
    cssSelectorPrefix: '_zs_gallery',
    scopedCss: [
        './tmpl/__test__/base.less'
    ],
    compileTmplCommand(content) {
        var str = ts.transpileModule(content, {
            compilerOptions: {
                lib: ['es7'],
                target: 'es3',
                module: ts.ModuleKind.None
            }
        });
        //console.log(content,str);
        str = str.outputText;
        return str;
    },
    compileJSStart(content, from) {
        var str = ts.transpileModule(content, {
            compilerOptions: {
                lib: ['es7'],
                target: 'es3',
                module: ts.ModuleKind.None
            }
        });
        str = str.outputText;
        return str;
    }
});

gulp.task('cleanSrc', () => {
    return del('./build/src');
});

gulp.task('combine', ['cleanSrc'], () => {
    return combineTool.combine().then(() => {
        console.log('complete');
    }).catch(ex => {
        console.log('gulpfile:', ex);
    });
});

gulp.task('watch', ['combine'], () => {
    watch('./tmpl/**/*', e => {
        if (fs.existsSync(e.path)) {
            combineTool.processFile(e.path).catch(ex => {
                console.log('ex', ex);
            });
        } else {
            combineTool.removeFile(e.path);
        }
    });
});

gulp.task('turnOffDebug', () => {
    combineTool.config({
        debug: false
    });
});

gulp.task('compress', ['turnOffDebug', 'combine', 'ver'], () => {
    return gulp.src('./build/src/**/*.js')
        .pipe(uglify({
            compress: {
                drop_console: true,
                drop_debugger: true,
                global_defs: {
                    DEBUG: false
                }
            }
        }))
        .pipe(gulp.dest('./build/src/'));
});


const { exec, execSync, spawn, spawnSync } = require('child_process');
let  spawnCommand = (command, args, options) => {
    //默认stdio: inherit可传入自定义options
    const _options = {
        stdio: 'inherit',
        shell: process.platform === 'win32' //win下需要设置shell为true
    }
 
    Object.assign(_options, options)
 
    return new Promise((resolve, reject) => {
        const sp = spawn(command, args, _options)
 
        sp.on('close', code => {
            resolve()
        })
 
        sp.on('error', err => {
            console.log(err)
        })
    })
 };
 
 let execCommandReturn = (command) => {
     return new Promise((resolve, reject) => {
         const child = exec(command, {
             maxBuffer: 20000 * 1024
         })
         child.stdout.on('data', data => {
             resolve(data)
         })
 
         child.on('close', () => {
             resolve()
         })
     })
};

gulp.task('release', async () => {
    //先更新远程分支数据 
    await spawnCommand('git', ['pull']);

    // 替换index的版本号为最新
    let ver = pkg.version;
    let index = fs.readFileSync('./index.html').toString();
    index = index.replace(/(?<=zs_gallery\/).*?(?=\/)/g, ver);
    fs.writeFileSync('./index.html', index);

    await spawnCommand('git', ['add', '.']);
    await spawnCommand('git', ['commit', '-m', 'start update version']);

    // tag发布版本
    let dailyVer = 'daily/' + ver,
        publishVer = 'publish/' + ver;
    await spawnCommand('git', ['checkout', '-b', dailyVer]);
    await spawnCommand('git', ['push', 'origin', dailyVer]);
    await spawnCommand('git', ['tag', publishVer]);
    await spawnCommand('git', ['push', 'origin', publishVer]);

    // 提交master
    await spawnCommand('git', ['checkout', 'master']);
    await spawnCommand('git', ['pull']);
    await spawnCommand('git', ['add', '.']);
    await spawnCommand('git', ['commit', '-m', 'finish update version']);
    await spawnCommand('git', ['push', 'origin', 'master']);
    await spawnCommand('tnpm', ['pub']);
    await spawnCommand('git', ['branch', '-D', dailyVer]);
})
