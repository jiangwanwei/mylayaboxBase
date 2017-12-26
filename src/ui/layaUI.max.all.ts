
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class LoadingUI extends View {
		public loading:Laya.FrameAnimation;
		public bg:Laya.Label;
		public mxb:laya.display.Text;
		public progress:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1009},"child":[{"type":"Label","props":{"y":0,"x":0,"width":640,"var":"bg","height":1009,"bgColor":"#000000"}},{"type":"Text","props":{"y":484,"x":235,"width":378,"var":"mxb","text":"迈小步科技制作","pivotX":104,"height":74,"fontSize":20,"color":"#ffffff","align":"center"},"compId":4},{"type":"Text","props":{"y":403,"x":320,"width":108,"var":"progress","text":"10%","pivotX":54,"height":91,"fontSize":28,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":416,"x":320,"skin":"loading/loading.png","anchorY":0.5,"anchorX":0.5},"compId":6}],"animations":[{"nodes":[{"target":4,"keyframes":{"fontSize":[{"value":24,"tweenMethod":"linearNone","tween":true,"target":4,"key":"fontSize","index":0},{"value":24,"tweenMethod":"linearNone","tween":true,"target":4,"key":"fontSize","index":30}]}},{"target":6,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":30}]}}],"name":"loading","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.LoadingUI.uiView);

        }

    }
}

module ui {
    export class LoginUI extends Dialog {
		public mobile:Laya.TextInput;
		public btn:Laya.Button;
		public tipText:Laya.Label;

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"height":1009},"child":[{"type":"Label","props":{"y":0,"x":3,"width":640,"text":"label","height":1009,"bgColor":"#000000","alpha":0.1}},{"type":"Image","props":{"y":321,"x":76,"width":526,"skin":"ui/dialogbg.png","height":366,"sizeGrid":"12,18,15,17"},"child":[{"type":"TextInput","props":{"y":54,"x":51,"width":424,"var":"mobile","type":"text","skin":"ui/input_bg.png","restrict":"0123456789","promptColor":"#939090","prompt":"请输入\b您的手机号码","padding":"0,10,0,10","maxChars":11,"height":73,"fontSize":26,"align":"center","sizeGrid":"12,14,13,16"}},{"type":"Button","props":{"y":162,"x":130,"width":265,"var":"btn","skin":"ui/btn_green.png","labelSize":26,"labelColors":"#fff","label":"提  交","height":63,"stateNum":1,"sizeGrid":"12,12,14,16"}},{"type":"Box","props":{"y":253.13291139240516,"x":19},"child":[{"type":"Label","props":{"y":30,"x":0,"wordWrap":true,"width":491,"var":"tipText","leading":12,"height":69,"fontSize":22,"color":"#626161"}},{"type":"Line","props":{"y":3.8670886075948374,"x":2,"toY":0.6329113924051626,"toX":482.02531645569616,"lineWidth":2,"lineColor":"#c1bdbd"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoginUI.uiView);

        }

    }
}

module ui {
    export class MainUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1009},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/game_bg.jpg"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.MainUI.uiView);

        }

    }
}
