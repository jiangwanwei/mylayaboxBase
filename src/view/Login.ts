/**
 * 登陆
 */
class Login extends ui.LoginUI {
    constructor() {
        super();
        this.closeEffect = null;
        this.btn.on(Laya.Event.CLICK, this, this.loginHandle);
        this.tipText.text = '为了方便您领取奖励，请提交您的手机号，奖品会直接发放到您的账户中。';
    }
    // 登陆
    private loginHandle():any {
        var data:any = {
                mobile: this.mobile.text,
                wx_openid: Game.OPPEN_ID,
            },
            errmsg:string = !Laya.Browser.window.mobileReg.test(data.mobile) && '请输入正确的手机号' || !data.wx_openid && 'OPENID有误' || null;
        if (errmsg) return new Tips(errmsg);
        Game.LOADING.http('登录中');
        Laya.stage.addChild(Game.LOADING);
        Game.http.open(API.BIND_USER, 'get', data, ({data}) => {
            Laya.Browser.window.setCookie('token', data.token, 30);
            location.href = <string>(location.origin + location.pathname + '?token=' + data.token + '&member_id=' + data.member_id);
        }, a => {
            Game.LOADING.removeSelf();
        })
    }
}