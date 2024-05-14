goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__85351){
var map__85352 = p__85351;
var map__85352__$1 = cljs.core.__destructure_map(map__85352);
var screen__$1 = map__85352__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85352__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__85353){
var vec__85354 = p__85353;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85354,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85354,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85354,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__85357){
var vec__85358 = p__85357;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85358,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85358,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85358,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__85361){
var vec__85362 = p__85361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85362,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85362,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__85365,p__85366){
var map__85367 = p__85365;
var map__85367__$1 = cljs.core.__destructure_map(map__85367);
var db = map__85367__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85367__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85368 = p__85366;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85368,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85368,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__85371,p__85372){
var map__85373 = p__85371;
var map__85373__$1 = cljs.core.__destructure_map(map__85373);
var db = map__85373__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85373__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85374 = p__85372;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85374,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85374,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-ctrl-panel-view","set-ctrl-panel-view",1352275081),(function (p__85377,p__85378){
var map__85379 = p__85377;
var map__85379__$1 = cljs.core.__destructure_map(map__85379);
var db = map__85379__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85379__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85380 = p__85378;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85380,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85380,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-settings-modal-view","set-settings-modal-view",1119075276),(function (p__85383,p__85384){
var map__85385 = p__85383;
var map__85385__$1 = cljs.core.__destructure_map(map__85385);
var db = map__85385__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85385__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85386 = p__85384;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85386,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85386,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-highlight-hotspots","set-highlight-hotspots",1813720726),(function (p__85389,p__85390){
var map__85391 = p__85389;
var map__85391__$1 = cljs.core.__destructure_map(map__85391);
var db = map__85391__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85391__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85392 = p__85390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85392,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85392,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__85395,p__85396){
var map__85397 = p__85395;
var map__85397__$1 = cljs.core.__destructure_map(map__85397);
var db = map__85397__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85397__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85398 = p__85396;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85398,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85398,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (db,p__85401){
var vec__85402 = p__85401;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85402,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85402,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (db,p__85405){
var vec__85406 = p__85405;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85406,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85406,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__85409,p__85410){
var map__85411 = p__85409;
var map__85411__$1 = cljs.core.__destructure_map(map__85411);
var db = map__85411__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85411__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85412 = p__85410;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85412,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85412,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
