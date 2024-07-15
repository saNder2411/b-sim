goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__33525){
var map__33532 = p__33525;
var map__33532__$1 = cljs.core.__destructure_map(map__33532);
var screen__$1 = map__33532__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33532__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__33554){
var vec__33555 = p__33554;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33555,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33555,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33555,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__33561){
var vec__33562 = p__33561;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33562,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__33575){
var vec__33577 = p__33575;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33577,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33577,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__33583,p__33584){
var map__33588 = p__33583;
var map__33588__$1 = cljs.core.__destructure_map(map__33588);
var db = map__33588__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33588__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33589 = p__33584;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33589,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33589,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__33596,p__33597){
var map__33598 = p__33596;
var map__33598__$1 = cljs.core.__destructure_map(map__33598);
var db = map__33598__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33598__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33599 = p__33597;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__33606,p__33607){
var map__33608 = p__33606;
var map__33608__$1 = cljs.core.__destructure_map(map__33608);
var db = map__33608__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33608__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33610 = p__33607;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33610,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33610,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__33614,p__33615){
var map__33617 = p__33614;
var map__33617__$1 = cljs.core.__destructure_map(map__33617);
var db = map__33617__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33618 = p__33615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33618,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33618,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-ctrl-panel-view","change-ctrl-panel-view",507855434),(function (p__33622,p__33623){
var map__33625 = p__33622;
var map__33625__$1 = cljs.core.__destructure_map(map__33625);
var db = map__33625__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33625__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33626 = p__33623;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33626,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33626,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-settings-modal-view","change-settings-modal-view",-1698564525),(function (p__33631,p__33632){
var map__33634 = p__33631;
var map__33634__$1 = cljs.core.__destructure_map(map__33634);
var db = map__33634__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33634__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33635 = p__33632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33635,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33635,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__33640,p__33641){
var map__33642 = p__33640;
var map__33642__$1 = cljs.core.__destructure_map(map__33642);
var db = map__33642__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33642__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33643 = p__33641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33643,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33643,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__33648,p__33649){
var map__33650 = p__33648;
var map__33650__$1 = cljs.core.__destructure_map(map__33650);
var db = map__33650__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33650__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33651 = p__33649;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33651,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33651,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),(function (p__33656,p__33657){
var map__33659 = p__33656;
var map__33659__$1 = cljs.core.__destructure_map(map__33659);
var db = map__33659__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33659__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33660 = p__33657;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33660,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33660,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_low_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level","limiter-low-level",535587139),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_low_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-high-level-full-screen","change-limiter-high-level-full-screen",372169192),(function (p__33666,p__33667){
var map__33668 = p__33666;
var map__33668__$1 = cljs.core.__destructure_map(map__33668);
var db = map__33668__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33668__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33669 = p__33667;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33669,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33669,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_high_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level","limiter-high-level",230189158),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_high_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__33674,p__33675){
var map__33676 = p__33674;
var map__33676__$1 = cljs.core.__destructure_map(map__33676);
var db = map__33676__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33676__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33677 = p__33675;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33677,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33677,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cond_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__33684,p__33685){
var map__33686 = p__33684;
var map__33686__$1 = cljs.core.__destructure_map(map__33686);
var db = map__33686__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33686__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33687 = p__33685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33687,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33687,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__33694,p__33695){
var map__33696 = p__33694;
var map__33696__$1 = cljs.core.__destructure_map(map__33696);
var db = map__33696__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33696__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33697 = p__33695;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33697,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33697,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__33704,p__33705){
var map__33706 = p__33704;
var map__33706__$1 = cljs.core.__destructure_map(map__33706);
var db = map__33706__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33706__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33707 = p__33705;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33707,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33707,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var converter_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),converter_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__33714,p__33715){
var map__33716 = p__33714;
var map__33716__$1 = cljs.core.__destructure_map(map__33716);
var db = map__33716__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33716__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33717 = p__33715;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33717,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33717,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__33720,p__33721){
var map__33723 = p__33720;
var map__33723__$1 = cljs.core.__destructure_map(map__33723);
var db = map__33723__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33723__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33724 = p__33721;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33724,(0),null);
var map__33727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33724,(1),null);
var map__33727__$1 = cljs.core.__destructure_map(map__33727);
var notification = map__33727__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33727__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__33731,p__33732){
var map__33733 = p__33731;
var map__33733__$1 = cljs.core.__destructure_map(map__33733);
var db = map__33733__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33733__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33734 = p__33732;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33734,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33734,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
