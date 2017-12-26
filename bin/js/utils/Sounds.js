/**
 * 播放声音
 */
var Sound = /** @class */ (function () {
    function Sound(name, _isSound, loop) {
        if (_isSound === void 0) { _isSound = true; }
        if (loop === void 0) { loop = 1; }
        // 播放声音的文件名（后缀统一为mp3）
        this.name = 'err';
        this.name = name;
        this.isSound = _isSound;
        this.loop = loop;
        this.paly();
    }
    // 播放
    Sound.prototype.paly = function () {
        if (this.isSound) {
            return Laya.SoundManager.playSound("./res/sounds/" + this.name + ".mp3", this.loop);
        }
        Laya.SoundManager.playMusic("./res/sounds/" + this.name + ".mp3", this.loop);
    };
    return Sound;
}());
//# sourceMappingURL=Sounds.js.map