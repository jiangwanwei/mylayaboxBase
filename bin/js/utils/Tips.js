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
* 提示
*/
var Tips = /** @class */ (function (_super) {
    __extends(Tips, _super);
    function Tips(txt, time) {
        var _this = _super.call(this) || this;
        // 自动隐藏事件
        _this.hideTime = 1000;
        if (time)
            _this.hideTime = time;
        _this.text = txt;
        _this.init();
        return _this;
    }
    // 初始化
    Tips.prototype.init = function () {
        var _this = this;
        this.bgColor = '#000000';
        this.alpha = .9;
        this.wordWrap = false;
        this.padding = [0, 10, 0, 10];
        this.height = 30;
        this.valign = 'middle';
        this.color = '#ffffff';
        this.fontSize = 18;
        this.pos((Laya.stage.width) >> 1, 70);
        this.zOrder = 10005;
        this.pivotX = this.width >> 1;
        this.skewX = 0;
        Laya.stage.addChild(this);
        Laya.Tween.from(this, { skewX: 20 }, 300, Laya.Ease.backOut, Laya.Handler.create(null, function (a) {
            Laya.timer.once(_this.hideTime, _this, _this.hide);
        }));
    };
    // 销毁
    Tips.prototype.hide = function () {
        Laya.Tween.to(this, { alpha: 0 }, 300, Laya.Ease.bounceIn, Laya.Handler.create(this, this.destroy));
    };
    return Tips;
}(Laya.Text));
//# sourceMappingURL=Tips.js.map