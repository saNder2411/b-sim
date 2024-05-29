goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__31564){
var map__31565 = p__31564;
var map__31565__$1 = cljs.core.__destructure_map(map__31565);
var screen__$1 = map__31565__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31565__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__31566){
var vec__31567 = p__31566;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31567,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31567,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31567,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__31570){
var vec__31571 = p__31570;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31571,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31571,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31571,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__31574){
var vec__31575 = p__31574;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31575,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31575,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__31578,p__31579){
var map__31580 = p__31578;
var map__31580__$1 = cljs.core.__destructure_map(map__31580);
var db = map__31580__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31580__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31581 = p__31579;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31581,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31581,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__31584,p__31585){
var map__31586 = p__31584;
var map__31586__$1 = cljs.core.__destructure_map(map__31586);
var db = map__31586__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31586__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31587 = p__31585;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31587,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31587,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-ctrl-panel-view","set-ctrl-panel-view",1352275081),(function (p__31590,p__31591){
var map__31592 = p__31590;
var map__31592__$1 = cljs.core.__destructure_map(map__31592);
var db = map__31592__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31592__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31593 = p__31591;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31593,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31593,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-settings-modal-view","set-settings-modal-view",1119075276),(function (p__31596,p__31597){
var map__31598 = p__31596;
var map__31598__$1 = cljs.core.__destructure_map(map__31598);
var db = map__31598__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31598__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31599 = p__31597;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31599,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31599,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-highlight-hotspots","set-highlight-hotspots",1813720726),(function (p__31602,p__31603){
var map__31604 = p__31602;
var map__31604__$1 = cljs.core.__destructure_map(map__31604);
var db = map__31604__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31604__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31605 = p__31603;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31605,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31605,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__31608,p__31609){
var map__31610 = p__31608;
var map__31610__$1 = cljs.core.__destructure_map(map__31610);
var db = map__31610__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31610__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31611 = p__31609;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31611,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31611,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (db,p__31614){
var vec__31615 = p__31614;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31615,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31615,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (db,p__31618){
var vec__31619 = p__31618;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31619,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31619,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__31622,p__31623){
var map__31624 = p__31622;
var map__31624__$1 = cljs.core.__destructure_map(map__31624);
var db = map__31624__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31624__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31625 = p__31623;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31625,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31625,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-limiter-full-screen","change-burner-limiter-full-screen",2051559587),(function (p__31628,p__31629){
var map__31630 = p__31628;
var map__31630__$1 = cljs.core.__destructure_map(map__31630);
var db = map__31630__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31630__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31631 = p__31629;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31631,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31631,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner-limiter-full-screen","burner-limiter-full-screen",-868941454)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-pump-limiter-full-screen","change-pump-limiter-full-screen",2015787077),(function (p__31634,p__31635){
var map__31636 = p__31634;
var map__31636__$1 = cljs.core.__destructure_map(map__31636);
var db = map__31636__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31636__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31637 = p__31635;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31637,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31637,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"pump-limiter-full-screen","pump-limiter-full-screen",1764116550)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__31640,p__31641){
var map__31642 = p__31640;
var map__31642__$1 = cljs.core.__destructure_map(map__31642);
var db = map__31642__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31642__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31643 = p__31641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31643,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31643,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__31646,p__31647){
var map__31648 = p__31646;
var map__31648__$1 = cljs.core.__destructure_map(map__31648);
var db = map__31648__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31648__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31649 = p__31647;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31649,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31649,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850)], null),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
