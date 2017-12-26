/**
* 提示 
*/
class Tips extends Laya.Text{
	// 自动隐藏事件
	private hideTime: number = 1000;
	constructor(txt: string, time?: number){
		super();
		if (time) this.hideTime = time;
		this.text = txt;
		this.init();
	}
	// 初始化
	private init():void {
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
		Laya.Tween.from(this, {skewX: 20}, 300, Laya.Ease.backOut, Laya.Handler.create(null, a => {
			Laya.timer.once(this.hideTime, this, this.hide);
		}));		
	}
	// 销毁
	private hide():void {
		Laya.Tween.to(this, {alpha: 0}, 300, Laya.Ease.bounceIn, Laya.Handler.create(this, this.destroy));
	}
}