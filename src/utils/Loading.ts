/**
 * Loading加载
 */
class Loading extends ui.LoadingUI {
    constructor() {
        super();
        this.progress.text = '0%';        
    }
    // http 交互 隐藏迈小步
    http(text:string = ''):void {
        var cover = Laya.Browser.window.document.getElementById('cover');
        if (cover) {
            cover.style.display = 'block';
            console.log(cover.style.display);
        }
        this.bg.alpha = .3;
        this.mxb.text = text;
        this.progress.visible = false;
        this.zOrder = 10001;
    }
}