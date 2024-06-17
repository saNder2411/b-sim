goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__44317){
var map__44318 = p__44317;
var map__44318__$1 = cljs.core.__destructure_map(map__44318);
var screen__$1 = map__44318__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44318__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__44326){
var vec__44329 = p__44326;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44329,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44329,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44329,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__44342){
var vec__44344 = p__44342;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44344,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44344,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44344,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__44351){
var vec__44353 = p__44351;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44353,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44353,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__44356,p__44357){
var map__44358 = p__44356;
var map__44358__$1 = cljs.core.__destructure_map(map__44358);
var db = map__44358__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44358__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__44359 = p__44357;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44359,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44359,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__44364,p__44365){
var map__44366 = p__44364;
var map__44366__$1 = cljs.core.__destructure_map(map__44366);
var db = map__44366__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44366__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__44367 = p__44365;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44367,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44367,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-ctrl-panel-view","set-ctrl-panel-view",1352275081),(function (p__44370,p__44371){
var map__44372 = p__44370;
var map__44372__$1 = cljs.core.__destructure_map(map__44372);
var db = map__44372__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44372__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__44373 = p__44371;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44373,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44373,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-settings-modal-view","set-settings-modal-view",1119075276),(function (p__44376,p__44377){
var map__44378 = p__44376;
var map__44378__$1 = cljs.core.__destructure_map(map__44378);
var db = map__44378__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44378__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__44379 = p__44377;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44379,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44379,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-highlight-hotspots","set-highlight-hotspots",1813720726),(function (p__44382,p__44383){
var map__44384 = p__44382;
var map__44384__$1 = cljs.core.__destructure_map(map__44384);
var db = map__44384__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44384__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__44385 = p__44383;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44385,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44385,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__44388,p__44389){
var map__44390 = p__44388;
var map__44390__$1 = cljs.core.__destructure_map(map__44390);
var db = map__44390__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44390__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__44391 = p__44389;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44391,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44391,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (db,p__44394){
var vec__44395 = p__44394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44395,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44395,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (db,p__44399){
var vec__44401 = p__44399;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44401,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44401,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__44411,p__44412){
var map__44415 = p__44411;
var map__44415__$1 = cljs.core.__destructure_map(map__44415);
var db = map__44415__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44415__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__44416 = p__44412;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44416,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44416,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),(function (p__44431,p__44432){
var map__44433 = p__44431;
var map__44433__$1 = cljs.core.__destructure_map(map__44433);
var db = map__44433__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44433__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var limiter_low_level_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44433__$1,new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090));
var vec__44434 = p__44432;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44434,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44434,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"limiter-low-level","limiter-low-level",535587139),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_low_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-high-level-full-screen","change-limiter-high-level-full-screen",372169192),(function (p__44438,p__44439){
var map__44440 = p__44438;
var map__44440__$1 = cljs.core.__destructure_map(map__44440);
var db = map__44440__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44440__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var limiter_high_level_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44440__$1,new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350));
var vec__44441 = p__44439;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44441,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44441,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"limiter-high-level","limiter-high-level",230189158),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_high_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__44444,p__44445){
var map__44446 = p__44444;
var map__44446__$1 = cljs.core.__destructure_map(map__44446);
var db = map__44446__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44446__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var cond_controller_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44446__$1,new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778));
var vec__44447 = p__44445;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44447,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44447,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cond_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__44450,p__44451){
var map__44452 = p__44450;
var map__44452__$1 = cljs.core.__destructure_map(map__44452);
var db = map__44452__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44452__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var level_controller_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44452__$1,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219));
var vec__44453 = p__44451;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44453,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44453,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__44456,p__44457){
var map__44458 = p__44456;
var map__44458__$1 = cljs.core.__destructure_map(map__44458);
var db = map__44458__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44458__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var level_probe_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44458__$1,new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835));
var vec__44459 = p__44457;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44459,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44459,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),level_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__44462,p__44463){
var map__44464 = p__44462;
var map__44464__$1 = cljs.core.__destructure_map(map__44464);
var db = map__44464__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44464__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var converter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44464__$1,new cljs.core.Keyword(null,"converter-id","converter-id",1254191491));
var vec__44465 = p__44463;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44465,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44465,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"converter","converter",-34185411),converter_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
