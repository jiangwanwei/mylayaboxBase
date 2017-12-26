/**
 * http模块
 */
const codeState = {
    10000: '用户名或密码有误',
	10001: '用户未登录或登录过期',
    20000: '参数错误',
    21002: '用户已绑定',
    70004: '兑换条件不足',
}
class Http {
    // 请求地址
    private url: string;
    // 请求参数
    private data: string = '';
    // 请求类型
    private type: string;
    // 发送请求
    open(url:string, type:string, data:any, _complete ?:Function, _err ?:Function):void {
        this.data = data ? JSON.stringify(data) : '';
        this.url = API.HOST + url;
        this.type = type || 'get';
        var xhr:Laya.HttpRequest = new Laya.HttpRequest();
        xhr.once(Laya.Event.ERROR, this, this.errHandle);
        xhr.once(Laya.Event.COMPLETE, null, (data:any) => {
            data = JSON.parse(data);
            Game.LOADING.removeSelf();
            var cover = Laya.Browser.window.document.getElementById('cover');
            if (cover) {
                cover.style.display = 'none';
            }
            if (data.code) {
                new Sound('err');
                new Tips(codeState[data.code] || data.code);
                // alert(codeState[data.code] || data.code);
                if (data.code === 10001) {
                    Laya.Browser.window.delCookie('token');
                    location.href = API.HOST + '/game/wx-web-login?url=' + encodeURIComponent(API.HOST.replace(/^a\./, 'game.') + location.pathname);
                    return;
                }                
                _err && _err(data);
            } else {
                _complete && _complete(data); 
            }                     
        });
        if (this.type === 'get' && data) {
            this.url += '?';
            for (var k in data) {
                this.url += `${k}=${data[k]}&`;
            }
            this.url = this.url.replace(/&$/, '');
        }
        xhr.send(
            this.url, 
            this.data || '',  
            this.type || 'get',  
            'text', 
            [ 
                "Authorization", Game.TOKEN, 
                "Content-Type", 'application/json;charset=UTF-8',
            ]
        );
    }
    // 请求错误
    private errHandle():void {
        new Tips('请求出错');
    }
}