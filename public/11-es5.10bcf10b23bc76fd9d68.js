!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{uMfO:function(n,r,a){"use strict";a.r(r),a.d(r,"Tab1PageModule",(function(){return g}));var o,i,c,l=a("TEn/"),s=a("ofXK"),u=a("3Pt+"),b=a("qtYk"),d=a("tyNb"),f=a("mrSG"),h=a("fXoL"),p=a("LzXR"),v=a("VnTo"),m=[{path:"",component:(o=function(){function n(e,r,a){t(this,n),this.wishesSvc=e,this.router=r,this.alertCtl=a}var r,a,o;return r=n,(a=[{key:"agregarLista",value:function(){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertCtl.create({header:"Nueva Lista",inputs:[{name:"titulo",type:"text",placeholder:"Nombre de la lista"}],buttons:[{text:"Cancelar",role:"cancel",handler:function(){console.log("Cancelar")}},{text:"Crear",handler:function(t){if(0!==t.titulo.length){var n=e.wishesSvc.crearLista(t.titulo);e.router.navigateByUrl("/tabs/tab1/add/ "+n)}}}]});case 2:t.sent.present();case 3:case"end":return t.stop()}}),t,this)})))}},{key:"listaSeleccionada",value:function(t){this.router.navigateByUrl("/tabs/tab1/add/ "+t.id)}}])&&e(r.prototype,a),o&&e(r,o),n}(),o.\u0275fac=function(t){return new(t||o)(h.Hb(p.a),h.Hb(d.g),h.Hb(l.a))},o.\u0275cmp=h.Bb({type:o,selectors:[["app-tab1"]],decls:9,vars:2,consts:[[1,"ion-no-border"],["color","dark"],["color","dark",3,"fullscreen"],["color","dark",3,"terminada"],["vertical","bottom","horizontal","end","slot","fixed"],["color","tertiary",3,"click"],["name","add"]],template:function(t,e){1&t&&(h.Kb(0,"ion-header",0),h.Kb(1,"ion-toolbar",1),h.Kb(2,"ion-title"),h.fc(3," Pendientes "),h.Jb(),h.Jb(),h.Jb(),h.Kb(4,"ion-content",2),h.Ib(5,"app-listas",3),h.Kb(6,"ion-fab",4),h.Kb(7,"ion-fab-button",5),h.Sb("click",(function(){return e.agregarLista()})),h.Ib(8,"ion-icon",6),h.Jb(),h.Jb(),h.Jb()),2&t&&(h.xb(4),h.Zb("fullscreen",!0),h.xb(1),h.Zb("terminada",!1))},directives:[l.k,l.A,l.z,l.h,v.a,l.i,l.j,l.l],styles:[""]}),o)},{path:"add/:listaId",loadChildren:function(){return a.e(2).then(a.bind(null,"D453")).then((function(t){return t.AddPageModule}))}}],y=((i=function e(){t(this,e)}).\u0275mod=h.Fb({type:i}),i.\u0275inj=h.Eb({factory:function(t){return new(t||i)},imports:[[d.i.forChild(m)],d.i]}),i),w=a("j1ZV"),g=((c=function e(){t(this,e)}).\u0275mod=h.Fb({type:c}),c.\u0275inj=h.Eb({factory:function(t){return new(t||c)},imports:[[l.B,s.b,u.a,b.a,y,w.a]]}),c)}}])}();