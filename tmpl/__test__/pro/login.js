let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@login.html',
    render() {
        this.updater.digest();
    }
});