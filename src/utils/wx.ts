class WxJs {
    constructor() {
        Game.http.open(API.SHARE_PARAMS, '',{url: location.href.replace(/\&/g, '|')}, this.init);
    }
    init(data):void {
        //通过config接口注入权限验证配置
        Laya.Browser.window.wx.config({
            debug: data.debug || false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: data.appId, // 必填，公众号的唯一标识
            timestamp: data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.nonceStr, // 必填，生成签名的随机串
            signature: data.signature,// 必填，签名，见附录1
            jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        let title:string = GameView.WX_SHARE_INFO.title,
            // link:string = location.protocol + '//' + location.hostname + '/card/dump.html',
            link:string = location.protocol + '//' + location.hostname + '/fruit/dump.html?member_id=1',
            imgUrl:string = GameView.WX_SHARE_INFO.imgUrl, 
            desc = GameView.WX_SHARE_INFO.desc;
        Laya.Browser.window.wx.ready(function(){
            Laya.Browser.window.wx.onMenuShareTimeline({
                title: title, // 分享标题
                link: link, // 分享链接'
                imgUrl: imgUrl, // 分享图标
                success: a => {

                },
            });
            Laya.Browser.window.wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: a => {

                },
            });
        });
        Laya.Browser.window.wx.error(function(a){
            new Tips(JSON.stringify(a));
        })
    }
}