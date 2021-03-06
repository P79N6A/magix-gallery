let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@icon.html',
    render() {
        let options = [{
            key: 'mode',
            desc: 'icon类型，可选实心打标（solid），空心打标（hollow）',
            type: 'string',
            def: 'solid'
        }, {
            key: 'type',
            desc: [
                '展示类型',
                'error：红色错误类型提示',
                'warn：黄色警告类型提示',
                'highlight：品牌色图标强调提示'
            ].join('<br>'),
            type: 'string',
            def: '默认灰色提示'
        }, {
            key: 'color',
            desc: '自定义颜色',
            type: 'hex格式色号',
            def: ''
        }, {
            key: 'tip',
            desc: 'hover提示信息',
            type: 'string',
            def: ''
        }]

        this.updater.digest({
            options
        });
    }
});