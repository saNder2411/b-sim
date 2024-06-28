goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__36865){
var map__36866 = p__36865;
var map__36866__$1 = cljs.core.__destructure_map(map__36866);
var screen__$1 = map__36866__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36866__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__36867){
var vec__36868 = p__36867;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36868,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36868,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36868,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__36871){
var vec__36872 = p__36871;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36872,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36872,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36872,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__36875){
var vec__36876 = p__36875;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36876,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36876,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__36879,p__36880){
var map__36881 = p__36879;
var map__36881__$1 = cljs.core.__destructure_map(map__36881);
var db = map__36881__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36881__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36882 = p__36880;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36882,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36882,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__36885,p__36886){
var map__36887 = p__36885;
var map__36887__$1 = cljs.core.__destructure_map(map__36887);
var db = map__36887__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36887__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36888 = p__36886;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36888,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36888,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__36891,p__36892){
var map__36893 = p__36891;
var map__36893__$1 = cljs.core.__destructure_map(map__36893);
var db = map__36893__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36893__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36894 = p__36892;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36894,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36894,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__36897,p__36898){
var map__36899 = p__36897;
var map__36899__$1 = cljs.core.__destructure_map(map__36899);
var db = map__36899__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36899__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36900 = p__36898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36900,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36900,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-ctrl-panel-view","change-ctrl-panel-view",507855434),(function (p__36903,p__36904){
var map__36905 = p__36903;
var map__36905__$1 = cljs.core.__destructure_map(map__36905);
var db = map__36905__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36905__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36906 = p__36904;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36906,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36906,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-settings-modal-view","change-settings-modal-view",-1698564525),(function (p__36909,p__36910){
var map__36911 = p__36909;
var map__36911__$1 = cljs.core.__destructure_map(map__36911);
var db = map__36911__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36911__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36912 = p__36910;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36912,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36912,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__36915,p__36916){
var map__36917 = p__36915;
var map__36917__$1 = cljs.core.__destructure_map(map__36917);
var db = map__36917__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36917__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36918 = p__36916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36918,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36918,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__36921,p__36922){
var map__36923 = p__36921;
var map__36923__$1 = cljs.core.__destructure_map(map__36923);
var db = map__36923__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36923__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36924 = p__36922;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36924,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36924,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),(function (p__36927,p__36928){
var map__36929 = p__36927;
var map__36929__$1 = cljs.core.__destructure_map(map__36929);
var db = map__36929__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36929__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36930 = p__36928;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36930,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36930,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_low_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level","limiter-low-level",535587139),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_low_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-high-level-full-screen","change-limiter-high-level-full-screen",372169192),(function (p__36933,p__36934){
var map__36935 = p__36933;
var map__36935__$1 = cljs.core.__destructure_map(map__36935);
var db = map__36935__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36935__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36936 = p__36934;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36936,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36936,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_high_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level","limiter-high-level",230189158),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_high_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__36939,p__36940){
var map__36941 = p__36939;
var map__36941__$1 = cljs.core.__destructure_map(map__36941);
var db = map__36941__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36941__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36942 = p__36940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36942,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36942,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cond_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__36945,p__36946){
var map__36947 = p__36945;
var map__36947__$1 = cljs.core.__destructure_map(map__36947);
var db = map__36947__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36947__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36948 = p__36946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36948,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36948,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__36951,p__36952){
var map__36953 = p__36951;
var map__36953__$1 = cljs.core.__destructure_map(map__36953);
var db = map__36953__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36953__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36954 = p__36952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36954,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36954,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__36957,p__36958){
var map__36959 = p__36957;
var map__36959__$1 = cljs.core.__destructure_map(map__36959);
var db = map__36959__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36959__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36960 = p__36958;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36960,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36960,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var converter_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),converter_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__36963,p__36964){
var map__36965 = p__36963;
var map__36965__$1 = cljs.core.__destructure_map(map__36965);
var db = map__36965__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36965__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36966 = p__36964;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36966,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36966,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__36969,p__36970){
var map__36971 = p__36969;
var map__36971__$1 = cljs.core.__destructure_map(map__36971);
var db = map__36971__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36971__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36972 = p__36970;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972,(0),null);
var map__36975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36972,(1),null);
var map__36975__$1 = cljs.core.__destructure_map(map__36975);
var notification = map__36975__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36975__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__36976,p__36977){
var map__36978 = p__36976;
var map__36978__$1 = cljs.core.__destructure_map(map__36978);
var db = map__36978__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36978__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36979 = p__36977;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36979,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36979,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
