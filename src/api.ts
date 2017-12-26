class API {
    // static HOST             = location.protocol + '//' + location.hostname.replace(/^game/, 'a');
    static HOST             = 'http://a.maixiaobu.com';
    static SHARE_PARAMS     = '/game/wechat-share';                    // 分享参数获取
    static BIND_USER        = '/game/bind-wx-openid';             // 绑定手机号
    static GAME_PARAMS      = '/game/tools-fans.seed';            // 游戏配置（商店信息、仓库卖价、商人配置）
    static EXCHANGE_PIC     = '/game/tools-fans.seed/mystical-pic';   // 兑换的商品图片
    static MY_SEED          = '/game/tools-fans.seed/user-seed';  // 我的种子
    static SEED_BUY         = '/game/tools-fans.seed/buy';        // 购买种子
    static SEED_SELL        = '/game/tools-fans.seed/sell';       // 出售种子
    static SOIL_AREA_INFO   = '/game/tools-fans.seed/grow-info';  // 种植区域信息
    static PLANTION         = '/game/tools-fans.seed/grow';       // 种植、收获操作（id：种植的土地id） make='grow' 种植种子  make='edit' 修改种植状态 make='foison' 收割水果
    static EXCHANGE         = '/game/tools-fans.seed/exchange';   // 神秘商店兑换礼品
}