let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@5.html',
    render() {
        let fields = [{
            text: '消耗', value: 'cost', tip: '提示文案'
        }, {
            text: '展现量', value: 'impression'
        }, {
            text: '点击量', value: 'click', 
        }, {
            text: '点击率', value: 'ctr'
        }, {
            text: '平均点击单价', value: 'cpc'
        }, {
            text: '点击转化率', value: 'coverage'
        }, {
            text: '成交笔数', value: 'transaction'
        }]

        let map = {};
        fields.forEach(item => {
            map[item.value] = item.text;
        })
        
        this.updater.digest({
            map,
            defaults: ['click', 'ctr', 'coverage']
        });
    },
    'change<change>'(e){
        // defaults：默认指标
        // custom：true or false，是否为自定义指标
        // customs：用户自定义的指标
        this.updater.digest({
            custom1: e.custom,
            customs1: e.customs
        });
    }
});