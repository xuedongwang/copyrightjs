class Copyright {
  constructor (config = {}) {
    this.config = config;
    this.init();
  }
  init () {
    document.oncopy = (event) => {
      this.ininClipboard(event);
    };
  }
  ininClipboard (event) {
    event.preventDefault();
    const defaltTpl = `
\n作者：Xuedong Wang
邮箱：npm@wangxuedong.com
Npm地址：https://www.npmjs.com/package/copyrightjs
Github地址：https://github.com/xuedongwang/copyrightjs`;
    const content = window.getSelection().getRangeAt(0).cloneContents().textContent;
    const tpl = this.config.template || defaltTpl;
    event.clipboardData.setData('text/plain', content + tpl);
  }
  destroyed () {
    document.oncopy = null;
  }
}

export default Copyright;
