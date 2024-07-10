goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__61992){
var map__61993 = p__61992;
var map__61993__$1 = cljs.core.__destructure_map(map__61993);
var screen__$1 = map__61993__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61993__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__61994){
var vec__61995 = p__61994;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61995,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61995,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61995,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__61998){
var vec__61999 = p__61998;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61999,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61999,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61999,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__62002){
var vec__62003 = p__62002;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62003,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62003,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__62006,p__62007){
var map__62008 = p__62006;
var map__62008__$1 = cljs.core.__destructure_map(map__62008);
var db = map__62008__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62008__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62009 = p__62007;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62009,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62009,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__62012,p__62013){
var map__62014 = p__62012;
var map__62014__$1 = cljs.core.__destructure_map(map__62014);
var db = map__62014__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62014__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62015 = p__62013;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62015,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62015,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__62018,p__62019){
var map__62020 = p__62018;
var map__62020__$1 = cljs.core.__destructure_map(map__62020);
var db = map__62020__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62020__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62021 = p__62019;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62021,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62021,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__62024,p__62025){
var map__62026 = p__62024;
var map__62026__$1 = cljs.core.__destructure_map(map__62026);
var db = map__62026__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62026__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62027 = p__62025;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62027,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62027,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-ctrl-panel-view","change-ctrl-panel-view",507855434),(function (p__62030,p__62031){
var map__62032 = p__62030;
var map__62032__$1 = cljs.core.__destructure_map(map__62032);
var db = map__62032__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62032__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62033 = p__62031;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62033,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62033,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-settings-modal-view","change-settings-modal-view",-1698564525),(function (p__62036,p__62037){
var map__62038 = p__62036;
var map__62038__$1 = cljs.core.__destructure_map(map__62038);
var db = map__62038__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62038__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62039 = p__62037;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62039,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62039,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__62042,p__62043){
var map__62044 = p__62042;
var map__62044__$1 = cljs.core.__destructure_map(map__62044);
var db = map__62044__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62044__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62045 = p__62043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62045,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62045,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__62048,p__62049){
var map__62050 = p__62048;
var map__62050__$1 = cljs.core.__destructure_map(map__62050);
var db = map__62050__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62050__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62051 = p__62049;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62051,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62051,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),(function (p__62054,p__62055){
var map__62056 = p__62054;
var map__62056__$1 = cljs.core.__destructure_map(map__62056);
var db = map__62056__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62056__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62057 = p__62055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62057,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62057,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_low_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level","limiter-low-level",535587139),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_low_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-high-level-full-screen","change-limiter-high-level-full-screen",372169192),(function (p__62060,p__62061){
var map__62062 = p__62060;
var map__62062__$1 = cljs.core.__destructure_map(map__62062);
var db = map__62062__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62062__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62063 = p__62061;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62063,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62063,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_high_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level","limiter-high-level",230189158),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_high_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__62066,p__62067){
var map__62068 = p__62066;
var map__62068__$1 = cljs.core.__destructure_map(map__62068);
var db = map__62068__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62068__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62069 = p__62067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62069,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62069,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cond_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__62072,p__62073){
var map__62074 = p__62072;
var map__62074__$1 = cljs.core.__destructure_map(map__62074);
var db = map__62074__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62074__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62075 = p__62073;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62075,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62075,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__62078,p__62079){
var map__62080 = p__62078;
var map__62080__$1 = cljs.core.__destructure_map(map__62080);
var db = map__62080__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62080__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62081 = p__62079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62081,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62081,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__62084,p__62085){
var map__62086 = p__62084;
var map__62086__$1 = cljs.core.__destructure_map(map__62086);
var db = map__62086__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62086__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62087 = p__62085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62087,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62087,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var converter_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),converter_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__62090,p__62091){
var map__62092 = p__62090;
var map__62092__$1 = cljs.core.__destructure_map(map__62092);
var db = map__62092__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62092__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62093 = p__62091;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62093,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62093,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__62096,p__62097){
var map__62098 = p__62096;
var map__62098__$1 = cljs.core.__destructure_map(map__62098);
var db = map__62098__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62098__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62099 = p__62097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62099,(0),null);
var map__62102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62099,(1),null);
var map__62102__$1 = cljs.core.__destructure_map(map__62102);
var notification = map__62102__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62102__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__62103,p__62104){
var map__62105 = p__62103;
var map__62105__$1 = cljs.core.__destructure_map(map__62105);
var db = map__62105__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62105__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__62106 = p__62104;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62106,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62106,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
