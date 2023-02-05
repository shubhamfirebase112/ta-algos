"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1009],{1009:(y,d,c)=>{c.r(d),c.d(d,{HomePageModule:()=>M});var r=c(6895),o=c(4556),g=c(433),p=c(2598);class l{constructor(i,t,s,u){this.open=i,this.close=t,this.high=s,this.low=u,this.type=this.open>this.close?"Bearish":"Bullish"}}class h{static getCandlePatterns(){return[{id:1,title:"Bearish Engulfing",priority:"High",candleLength:3,matched:!1,candles:[],resistances:[],supports:[],distances:{resistanceDistance:null,resistanceDistanceInPercent:null,supportDistance:null,supportDistanceInPercent:null,resistanceToSupportDistance:null},rules:[{rule:"First candle should be bullish/Doji and Second candle should be bearish.",priority:"High",matched:!1},{rule:"Second candle should be engulfing first candle.",priority:"High",matched:!1},{rule:"Bearish engulfing pattern forming at or near resistance level.",priority:"High",matched:!1}],analyse:function(){const i=this.candles[0],t=this.candles[1];i&&t&&this.candles[2]&&(this.rules[0].matched="Bullish"===i.type&&"Bearish"===t.type,this.rules[1].matched=(t.open>=i.close||t.open<i.close)&&t.close<i.open,this.distances.resistanceDistance=this.resistances[0]-t.open,this.distances.supportDistance=this.supports[0]-t.open,this.distances.resistanceToSupportDistance=this.resistances[0]-this.supports[0],this.distances.resistanceDistanceInPercent=this.distances.resistanceDistance/this.distances.resistanceToSupportDistance*100,this.distances.supportDistanceInPercent=this.distances.supportDistance/this.distances.resistanceToSupportDistance*100,this.rules[2].matched=this.distances.resistanceDistanceInPercent<=20)}}]}}var e=c(8256);function m(n,i){1&n&&e._UZ(0,"ion-icon",11)}function f(n,i){1&n&&e._UZ(0,"ion-icon",12)}function P(n,i){if(1&n&&(e.TgZ(0,"ion-item-group",6)(1,"ion-item-divider",7)(2,"ion-label"),e.YNc(3,m,1,0,"ion-icon",8),e.YNc(4,f,1,0,"ion-icon",9),e._uU(5),e.qZA()(),e.TgZ(6,"ion-item",10),e._uU(7),e.qZA()()),2&n){const t=i.$implicit,s=i.index;e.xp6(3),e.Q6J("ngIf",t.matched),e.xp6(1),e.Q6J("ngIf",!t.matched),e.xp6(1),e.hij(" Rule ",s+1," "),e.xp6(2),e.hij(" ",t.rule," ")}}function _(n,i){if(1&n&&(e.TgZ(0,"ion-col",3)(1,"ion-card",4)(2,"ion-card-header")(3,"ion-card-title"),e._uU(4),e.qZA(),e.TgZ(5,"ion-card-subtitle"),e._uU(6),e.qZA()(),e.TgZ(7,"ion-card-content")(8,"ion-list"),e.YNc(9,P,8,4,"ion-item-group",5),e.qZA()()()()),2&n){const t=i.$implicit;e.xp6(4),e.Oqu(t.title),e.xp6(2),e.Oqu(t.priority),e.xp6(3),e.Q6J("ngForOf",t.rules)}}const O=[{path:"",component:(()=>{class n{constructor(){this.candlePatterns=[]}ngOnInit(){this.execute()}execute(){let t=[new l(168,168.55,168.75,167.95),new l(169.55,166.7,169.55,166.65),new l(166.8,166.05,167.5,166)],s=[170.95,178.54,182.18],u=[154];this.candlePatterns=h.getCandlePatterns(),this.candlePatterns.forEach(a=>{a.candles=[...t],a.resistances=[...s],a.supports=[...u],a.analyse(),console.log(Object.assign({},a))})}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:8,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["size-sm","12","size-lg","6",4,"ngFor","ngForOf"],["size-sm","12","size-lg","6"],["color","primary"],["mode","ios",4,"ngFor","ngForOf"],["mode","ios"],["color","light"],["color","success","name","checkmark-circle",4,"ngIf"],["color","danger","name","close-circle",4,"ngIf"],["lines","none"],["color","success","name","checkmark-circle"],["color","danger","name","close-circle"]],template:function(t,s){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Trading Analysis Algorithms "),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-grid")(6,"ion-row"),e.YNc(7,_,10,3,"ion-col",2),e.qZA()()()),2&t&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(3),e.Q6J("ngForOf",s.candlePatterns))},dependencies:[r.sg,r.O5,o.PM,o.FN,o.Zi,o.tO,o.Dq,o.wI,o.W2,o.jY,o.Gu,o.gu,o.Ie,o.rH,o.Ub,o.Q$,o.q_,o.Nd,o.wd,o.sr],styles:["ion-card-header.ios[_ngcontent-%COMP%]{display:flex;flex-flow:column-reverse}ion-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:22px}ion-card[_ngcontent-%COMP%]   ion-item-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], ion-card[_ngcontent-%COMP%]   ion-item-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:22px}ion-card[_ngcontent-%COMP%]   ion-item-group[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:absolute;left:10px;top:3px}"]}),n})()}];let H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(O),p.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.ez,g.u5,o.Pc,H]}),n})()}}]);