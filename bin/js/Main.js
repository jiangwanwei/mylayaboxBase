// 程序入口
var Loader = Laya.Loader;
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        /*设置资源配置文件的地址，这里加了随机参数，保证每次加载的都是新的*/
        this.configUrl = "manifest.json?" + Math.random();
        Laya.init(640, 1009, Laya.WebGL);
        // 性能监控
        // Laya.Stat.show();
        // 适配设置
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        // 在bin目录下打开命令行输入layacmd resourceVersion -i res -o . -n 1.0.0这里-i代表资源路径，-o . 代表版本资源输出路径为当前路径，当然开发者也可以自定义输出路径，比如定义路径为version文件夹
        Laya.ResourceVersion.enable(this.configUrl, Laya.Handler.create(null, function (a) {
            // 加载loading资源
            var loadingRes = [{ url: 'res/atlas/loading.atlas', type: Loader.ATLAS, }];
            Laya.loader.load(loadingRes, Laya.Handler.create(_this, _this.loadLoading));
        }));
        Game.http = new Http();
        // 获取openid 和 token
        Game.OPPEN_ID = Game.GetQueryString('openid');
        Game.TOKEN = Game.GetQueryString('token') || Laya.Browser.window.getCookie('token');
    }
    // 显示loading 并加载 游戏资源文件
    Game.prototype.loadLoading = function () {
        Game.LOADING = new Loading();
        Laya.stage.addChild(Game.LOADING);
        var resArr = [
            { url: 'res/atlas/ui.atlas', type: Loader.ATLAS },
            { url: 'ui/game_bg.jpg', type: Loader.IMAGE },
        ];
        Laya.loader.load(resArr, Laya.Handler.create(this, this.resLoadComplete), Laya.Handler.create(this, this.resLoadProgress));
    };
    // 资源加载进度
    Game.prototype.resLoadProgress = function (num) {
        Game.LOADING.progress.text = (num * 100).toFixed(0) + '%';
    };
    // 游戏资源加载完成
    Game.prototype.resLoadComplete = function () {
        Game.LOADING.removeSelf();
        document.body.style.background = '#1c0b20';
        Game.MAIN_VIEW = new GameView();
        Laya.stage.addChild(Game.MAIN_VIEW);
        // 未登录
        if (!Game.TOKEN) {
            Laya.stage.addChild(new Login());
        }
    };
    // 获取url参数
    Game.GetQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return decodeURIComponent(r[2]);
        return null;
    };
    return Game;
}());
new Game();
//# sourceMappingURL=Main.js.map