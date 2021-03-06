let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@multiple.html',
    render() {
        let options = [{
            key: 'list',
            desc: '列表数组<br/>可为简单数组或[1,2,3]<br/>或对象数组，如[{value:1,text:"a"}]',
            type: 'array'
        }, {
            key: 'selected',
            desc: '当前选中值',
            type: 'string',
            def: '选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔'
        }, {
            key: 'trigger-type',
            desc: '浮层唤起方式，可选值：<br/>点击（click）<br/>鼠标悬浮展开（hover）',
            type: 'string',
            def: 'click'
        }, {
            key: 'text-key',
            desc: '渲染text时读取的key',
            type: 'string',
            def: 'text'
        }, {
            key: 'value-key',
            desc: '渲染value时读取的key',
            type: 'string',
            def: 'value'
        }, {
            key: 'max',
            desc: '选择个数上限',
            type: 'number',
            def: ''
        }, {
            key: 'searchbox',
            desc: '是否开启搜索框',
            type: 'boolean',
            def: 'false'
        }, {
            key: 'need-all',
            desc: '多选下拉框是否需要全选功能，默认true',
            type: 'boolean',
            def: 'true'
        }, {
            key: 'height',
            desc: '下拉框最大高度',
            type: 'number',
            def: '400'
        }, {
            key: 'mx-disabled',
            desc: '是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-dropdown mx-disabled&gt;&lt;/mx-dropdown&gt;',
            type: '',
            def: ''
        }, {
            key: 'name',
            desc: '全选时候的提示文案，比如“全部XX”',
            type: 'string',
            def: ''
        }, {
            key: 'empty-text',
            desc: '没有选择时的提示文案',
            type: 'string',
            def: ''
        }, {
            key: 'placement',
            desc: '可选内容展示方向，bottom（下方），top（上方）',
            type: 'string',
            def: 'bottom'
        }]

        let events = [{
            type: 'change',
            desc: '点击下拉框中“确定”按钮时触发',
            params: [{
                key: 'selected',
                desc: '当前选中value值，初始化selected是数组则返回数组，否则为逗号分隔',
                type: 'array or string'
            }, {
                key: 'values',
                desc: '当前选中value',
                type: 'array'
            }, {
                key: 'texts',
                desc: '当前选中text，顺序同values',
                type: 'array'
            }]
        }]

        this.updater.digest({
            viewId: this.id,
            options,
            events
        });
    }
});