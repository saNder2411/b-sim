goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__35405){
var map__35406 = p__35405;
var map__35406__$1 = cljs.core.__destructure_map(map__35406);
var screen__$1 = map__35406__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35406__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__35407){
var vec__35408 = p__35407;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35408,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35408,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35408,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__35411){
var vec__35412 = p__35411;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35412,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35412,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35412,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__35415){
var vec__35416 = p__35415;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35416,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35416,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__35419,p__35420){
var map__35421 = p__35419;
var map__35421__$1 = cljs.core.__destructure_map(map__35421);
var db = map__35421__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35421__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35422 = p__35420;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35422,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35422,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__35425,p__35426){
var map__35427 = p__35425;
var map__35427__$1 = cljs.core.__destructure_map(map__35427);
var db = map__35427__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35427__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35428 = p__35426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35428,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35428,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-ctrl-panel-view","set-ctrl-panel-view",1352275081),(function (p__35431,p__35432){
var map__35433 = p__35431;
var map__35433__$1 = cljs.core.__destructure_map(map__35433);
var db = map__35433__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35433__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35434 = p__35432;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35434,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35434,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-settings-modal-view","set-settings-modal-view",1119075276),(function (p__35437,p__35438){
var map__35439 = p__35437;
var map__35439__$1 = cljs.core.__destructure_map(map__35439);
var db = map__35439__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35439__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35440 = p__35438;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35440,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35440,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-highlight-hotspots","set-highlight-hotspots",1813720726),(function (p__35443,p__35444){
var map__35445 = p__35443;
var map__35445__$1 = cljs.core.__destructure_map(map__35445);
var db = map__35445__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35446 = p__35444;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35446,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35446,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__35449,p__35450){
var map__35451 = p__35449;
var map__35451__$1 = cljs.core.__destructure_map(map__35451);
var db = map__35451__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35452 = p__35450;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35452,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35452,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (db,p__35455){
var vec__35456 = p__35455;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35456,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35456,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (db,p__35459){
var vec__35460 = p__35459;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35460,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35460,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__35463,p__35464){
var map__35465 = p__35463;
var map__35465__$1 = cljs.core.__destructure_map(map__35465);
var db = map__35465__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35465__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35466 = p__35464;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35466,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-limiter-full-screen","change-burner-limiter-full-screen",2051559587),(function (p__35469,p__35470){
var map__35471 = p__35469;
var map__35471__$1 = cljs.core.__destructure_map(map__35471);
var db = map__35471__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35471__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35472 = p__35470;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35472,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35472,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner-limiter-full-screen","burner-limiter-full-screen",-868941454)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-pump-limiter-full-screen","change-pump-limiter-full-screen",2015787077),(function (p__35475,p__35476){
var map__35477 = p__35475;
var map__35477__$1 = cljs.core.__destructure_map(map__35477);
var db = map__35477__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35477__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35478 = p__35476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35478,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35478,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"pump-limiter-full-screen","pump-limiter-full-screen",1764116550)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__35481,p__35482){
var map__35483 = p__35481;
var map__35483__$1 = cljs.core.__destructure_map(map__35483);
var db = map__35483__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35483__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35484 = p__35482;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35484,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35484,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__35487,p__35488){
var map__35489 = p__35487;
var map__35489__$1 = cljs.core.__destructure_map(map__35489);
var db = map__35489__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35489__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35490 = p__35488;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__35493,p__35494){
var map__35495 = p__35493;
var map__35495__$1 = cljs.core.__destructure_map(map__35495);
var db = map__35495__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35495__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35496 = p__35494;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35496,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35496,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-probe-full-screen","level-probe-full-screen",1985358396)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__35499,p__35500){
var map__35501 = p__35499;
var map__35501__$1 = cljs.core.__destructure_map(map__35501);
var db = map__35501__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35501__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35502 = p__35500;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35502,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35502,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"converter-full-screen","converter-full-screen",-1003770390)], null),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
