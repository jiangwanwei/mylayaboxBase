var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Loading加载
 */
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super.call(this) || this;
        _this.progress.text = '0%';
        return _this;
    }
    // http 交互 隐藏迈小步
    Loading.prototype.http = function (text) {
        if (text === void 0) { text = ''; }
        var cover = Laya.Browser.window.document.getElementById('cover');
        if (cover) {
            cover.style.display = 'block';
            console.log(cover.style.display);
        }
        this.bg.alpha = .3;
        this.mxb.text = text;
        this.progress.visible = false;
        this.zOrder = 10001;
    };
    return Loading;
}(ui.LoadingUI));
//# sourceMappingURL=Loading.js.map