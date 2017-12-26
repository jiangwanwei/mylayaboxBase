var WxJs = /** @class */ (function () {
    function WxJs() {
        Game.http.open(API.SHARE_PARAMS, '', { url: location.href.replace(/\&/g, '|') }, this.init);
    }
    WxJs.prototype.init = function (data) {
        //通过config接口注入权限验证配置
        Laya.Browser.window.wx.config({
            debug: data.debug || false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        var title = GameView.WX_SHARE_INFO.title, 
        // link:string = location.protocol + '//' + location.hostname + '/card/dump.html',
        link = location.protocol + '//' + location.hostname + '/fruit/dump.html?member_id=1', imgUrl = GameView.WX_SHARE_INFO.imgUrl, desc = GameView.WX_SHARE_INFO.desc;
        Laya.Browser.window.wx.ready(function () {
            Laya.Browser.window.wx.onMenuShareTimeline({
                title: title,
                link: link,
                imgUrl: imgUrl,
                success: function (a) {
                },
            });
            Laya.Browser.window.wx.onMenuShareAppMessage({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                type: 'link',
                dataUrl: '',
                success: function (a) {
                },
            });
        });
        Laya.Browser.window.wx.error(function (a) {
            new Tips(JSON.stringify(a));
        });
    };
    return WxJs;
}());
//# sourceMappingURL=wx.js.map