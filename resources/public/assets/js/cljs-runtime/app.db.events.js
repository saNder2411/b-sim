goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__31663){
var map__31664 = p__31663;
var map__31664__$1 = cljs.core.__destructure_map(map__31664);
var screen__$1 = map__31664__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31664__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__31665){
var vec__31666 = p__31665;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31666,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31666,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31666,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__31669){
var vec__31670 = p__31669;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31670,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31670,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31670,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__31673){
var vec__31674 = p__31673;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31674,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31674,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__31677,p__31678){
var map__31679 = p__31677;
var map__31679__$1 = cljs.core.__destructure_map(map__31679);
var db = map__31679__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31679__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31680 = p__31678;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31680,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31680,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__31683,p__31684){
var map__31685 = p__31683;
var map__31685__$1 = cljs.core.__destructure_map(map__31685);
var db = map__31685__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31685__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31686 = p__31684;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31686,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31686,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__31689,p__31690){
var map__31691 = p__31689;
var map__31691__$1 = cljs.core.__destructure_map(map__31691);
var db = map__31691__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31691__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31692 = p__31690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31692,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31692,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__31695,p__31696){
var map__31697 = p__31695;
var map__31697__$1 = cljs.core.__destructure_map(map__31697);
var db = map__31697__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31697__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31698 = p__31696;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31698,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31698,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-ctrl-panel-view","change-ctrl-panel-view",507855434),(function (p__31701,p__31702){
var map__31703 = p__31701;
var map__31703__$1 = cljs.core.__destructure_map(map__31703);
var db = map__31703__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31703__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31704 = p__31702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31704,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31704,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-settings-modal-view","change-settings-modal-view",-1698564525),(function (p__31707,p__31708){
var map__31709 = p__31707;
var map__31709__$1 = cljs.core.__destructure_map(map__31709);
var db = map__31709__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31709__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31710 = p__31708;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31710,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31710,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__31713,p__31714){
var map__31715 = p__31713;
var map__31715__$1 = cljs.core.__destructure_map(map__31715);
var db = map__31715__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31715__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31716 = p__31714;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31716,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31716,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__31719,p__31720){
var map__31721 = p__31719;
var map__31721__$1 = cljs.core.__destructure_map(map__31721);
var db = map__31721__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31721__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31722 = p__31720;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31722,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31722,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),(function (p__31725,p__31726){
var map__31727 = p__31725;
var map__31727__$1 = cljs.core.__destructure_map(map__31727);
var db = map__31727__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31727__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31728 = p__31726;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31728,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31728,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_low_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level","limiter-low-level",535587139),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_low_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-high-level-full-screen","change-limiter-high-level-full-screen",372169192),(function (p__31731,p__31732){
var map__31733 = p__31731;
var map__31733__$1 = cljs.core.__destructure_map(map__31733);
var db = map__31733__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31733__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31734 = p__31732;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31734,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31734,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_high_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level","limiter-high-level",230189158),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_high_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__31737,p__31738){
var map__31739 = p__31737;
var map__31739__$1 = cljs.core.__destructure_map(map__31739);
var db = map__31739__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31739__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31740 = p__31738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31740,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31740,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cond_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__31743,p__31744){
var map__31745 = p__31743;
var map__31745__$1 = cljs.core.__destructure_map(map__31745);
var db = map__31745__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31745__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31746 = p__31744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31746,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31746,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__31749,p__31750){
var map__31751 = p__31749;
var map__31751__$1 = cljs.core.__destructure_map(map__31751);
var db = map__31751__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31751__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31752 = p__31750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31752,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31752,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__31755,p__31756){
var map__31757 = p__31755;
var map__31757__$1 = cljs.core.__destructure_map(map__31757);
var db = map__31757__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31757__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31758 = p__31756;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31758,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31758,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var converter_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),converter_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__31761,p__31762){
var map__31763 = p__31761;
var map__31763__$1 = cljs.core.__destructure_map(map__31763);
var db = map__31763__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31763__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31764 = p__31762;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31764,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31764,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__31767,p__31768){
var map__31769 = p__31767;
var map__31769__$1 = cljs.core.__destructure_map(map__31769);
var db = map__31769__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31769__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31770 = p__31768;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31770,(0),null);
var map__31773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31770,(1),null);
var map__31773__$1 = cljs.core.__destructure_map(map__31773);
var notification = map__31773__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31773__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__31774,p__31775){
var map__31776 = p__31774;
var map__31776__$1 = cljs.core.__destructure_map(map__31776);
var db = map__31776__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31776__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31777 = p__31775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31777,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31777,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
