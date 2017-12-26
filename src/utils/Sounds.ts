/**
 * 播放声音
 */
class Sound {
    // 播放声音的文件名（后缀统一为mp3）
    private name:string = 'err';
    // 播放的类型 音效/音乐
    private isSound:boolean;
    // 循环次数  （0为无线循环）
    private loop:number;
    constructor(name?:string, _isSound:boolean = true, loop:number = 1) {
        this.name = name;
        this.isSound = _isSound;
        this.loop = loop;
        this.paly();
    }
    // 播放
    private paly():any {
        if (this.isSound) {
            return Laya.SoundManager.playSound(`./res/sounds/${this.name}.mp3`, this.loop);
        }
        Laya.SoundManager.playMusic(`./res/sounds/${this.name}.mp3`, this.loop);
    }
}