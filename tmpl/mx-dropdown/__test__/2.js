let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@2.html',
    render() {
        let list = [{
            value: '1',
            text: '单选带搜索框1'
        }, {
            value: '2',
            text: '单选带搜索框2'
        }];
        let item = list[1];
        this.updater.digest({
            list: list,
            selectedValue: item.value,
            selectedText: item.text
        });
    },
    'select<change>' (event) {
        // event.value 当前选中值
        // event.text 当前选中文案
        this.updater.digest({
            selectedValue: event.value,
            selectedText: event.text
        });
    },
});