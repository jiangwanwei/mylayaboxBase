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
 * 登陆
 */
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super.call(this) || this;
        _this.closeEffect = null;
        _this.btn.on(Laya.Event.CLICK, _this, _this.loginHandle);
        _this.tipText.text = '为了方便您领取奖励，请提交您的手机号，奖品会直接发放到您的账户中。';
        return _this;
    }
    // 登陆
    Login.prototype.loginHandle = function () {
        var data = {
            mobile: this.mobile.text,
            wx_openid: Game.OPPEN_ID,
        }, errmsg = !Laya.Browser.window.mobileReg.test(data.mobile) && '请输入正确的手机号' || !data.wx_openid && 'OPENID有误' || null;
        if (errmsg)
            return new Tips(errmsg);
        Game.LOADING.http('登录中');
        Laya.stage.addChild(Game.LOADING);
        Game.http.open(API.BIND_USER, 'get', data, function (_a) {
            var data = _a.data;
            Laya.Browser.window.setCookie('token', data.token, 30);
            location.href = (location.origin + location.pathname + '?token=' + data.token + '&member_id=' + data.member_id);
        }, function (a) {
            Game.LOADING.removeSelf();
        });
    };
    return Login;
}(ui.LoginUI));
//# sourceMappingURL=Login.js.map