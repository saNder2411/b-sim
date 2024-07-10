goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__56879){
var map__56880 = p__56879;
var map__56880__$1 = cljs.core.__destructure_map(map__56880);
var screen__$1 = map__56880__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56880__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__56881){
var vec__56882 = p__56881;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56882,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56882,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56882,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__56885){
var vec__56886 = p__56885;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56886,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56886,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56886,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__56889){
var vec__56890 = p__56889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56890,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56890,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__56893,p__56894){
var map__56895 = p__56893;
var map__56895__$1 = cljs.core.__destructure_map(map__56895);
var db = map__56895__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56895__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56896 = p__56894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56896,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56896,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__56899,p__56900){
var map__56901 = p__56899;
var map__56901__$1 = cljs.core.__destructure_map(map__56901);
var db = map__56901__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56901__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56902 = p__56900;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56902,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56902,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__56905,p__56906){
var map__56907 = p__56905;
var map__56907__$1 = cljs.core.__destructure_map(map__56907);
var db = map__56907__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56907__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56908 = p__56906;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56908,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56908,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__56911,p__56912){
var map__56913 = p__56911;
var map__56913__$1 = cljs.core.__destructure_map(map__56913);
var db = map__56913__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56913__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56914 = p__56912;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56914,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56914,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-ctrl-panel-view","change-ctrl-panel-view",507855434),(function (p__56917,p__56918){
var map__56919 = p__56917;
var map__56919__$1 = cljs.core.__destructure_map(map__56919);
var db = map__56919__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56919__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56920 = p__56918;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56920,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56920,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-settings-modal-view","change-settings-modal-view",-1698564525),(function (p__56923,p__56924){
var map__56925 = p__56923;
var map__56925__$1 = cljs.core.__destructure_map(map__56925);
var db = map__56925__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56925__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56926 = p__56924;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56926,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56926,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__56929,p__56930){
var map__56931 = p__56929;
var map__56931__$1 = cljs.core.__destructure_map(map__56931);
var db = map__56931__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56931__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56932 = p__56930;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56932,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56932,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__56935,p__56936){
var map__56937 = p__56935;
var map__56937__$1 = cljs.core.__destructure_map(map__56937);
var db = map__56937__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56937__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56938 = p__56936;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56938,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56938,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),(function (p__56941,p__56942){
var map__56943 = p__56941;
var map__56943__$1 = cljs.core.__destructure_map(map__56943);
var db = map__56943__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56943__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56944 = p__56942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56944,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56944,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_low_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level","limiter-low-level",535587139),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_low_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-high-level-full-screen","change-limiter-high-level-full-screen",372169192),(function (p__56947,p__56948){
var map__56949 = p__56947;
var map__56949__$1 = cljs.core.__destructure_map(map__56949);
var db = map__56949__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56949__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56950 = p__56948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56950,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56950,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_high_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level","limiter-high-level",230189158),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_high_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__56953,p__56954){
var map__56955 = p__56953;
var map__56955__$1 = cljs.core.__destructure_map(map__56955);
var db = map__56955__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56955__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56956 = p__56954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56956,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56956,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cond_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__56959,p__56960){
var map__56961 = p__56959;
var map__56961__$1 = cljs.core.__destructure_map(map__56961);
var db = map__56961__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56961__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56962 = p__56960;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__56965,p__56966){
var map__56967 = p__56965;
var map__56967__$1 = cljs.core.__destructure_map(map__56967);
var db = map__56967__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56967__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56968 = p__56966;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56968,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56968,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__56971,p__56972){
var map__56973 = p__56971;
var map__56973__$1 = cljs.core.__destructure_map(map__56973);
var db = map__56973__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56973__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56974 = p__56972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56974,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56974,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var converter_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),converter_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__56977,p__56978){
var map__56979 = p__56977;
var map__56979__$1 = cljs.core.__destructure_map(map__56979);
var db = map__56979__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56979__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56980 = p__56978;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56980,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56980,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__56983,p__56984){
var map__56985 = p__56983;
var map__56985__$1 = cljs.core.__destructure_map(map__56985);
var db = map__56985__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56985__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56986 = p__56984;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56986,(0),null);
var map__56989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56986,(1),null);
var map__56989__$1 = cljs.core.__destructure_map(map__56989);
var notification = map__56989__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56989__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__56990,p__56991){
var map__56992 = p__56990;
var map__56992__$1 = cljs.core.__destructure_map(map__56992);
var db = map__56992__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56992__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__56993 = p__56991;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56993,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56993,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
