goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__28673){
var map__28674 = p__28673;
var map__28674__$1 = cljs.core.__destructure_map(map__28674);
var screen__$1 = map__28674__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28674__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__28675){
var vec__28676 = p__28675;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28676,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28676,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28676,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__28679){
var vec__28680 = p__28679;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28680,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28680,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28680,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__28683){
var vec__28684 = p__28683;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28684,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28684,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__28687,p__28688){
var map__28689 = p__28687;
var map__28689__$1 = cljs.core.__destructure_map(map__28689);
var db = map__28689__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28689__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28690 = p__28688;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28690,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28690,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__28693,p__28694){
var map__28695 = p__28693;
var map__28695__$1 = cljs.core.__destructure_map(map__28695);
var db = map__28695__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28695__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28696 = p__28694;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28696,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28696,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-ctrl-panel-view","set-ctrl-panel-view",1352275081),(function (p__28699,p__28700){
var map__28701 = p__28699;
var map__28701__$1 = cljs.core.__destructure_map(map__28701);
var db = map__28701__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28701__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28702 = p__28700;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28702,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28702,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-settings-modal-view","set-settings-modal-view",1119075276),(function (p__28705,p__28706){
var map__28707 = p__28705;
var map__28707__$1 = cljs.core.__destructure_map(map__28707);
var db = map__28707__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28707__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28708 = p__28706;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28708,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28708,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-highlight-hotspots","set-highlight-hotspots",1813720726),(function (p__28711,p__28712){
var map__28713 = p__28711;
var map__28713__$1 = cljs.core.__destructure_map(map__28713);
var db = map__28713__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28713__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28714 = p__28712;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28714,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28714,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__28717,p__28718){
var map__28719 = p__28717;
var map__28719__$1 = cljs.core.__destructure_map(map__28719);
var db = map__28719__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28719__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28720 = p__28718;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28720,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28720,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (db,p__28723){
var vec__28724 = p__28723;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28724,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28724,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (db,p__28727){
var vec__28728 = p__28727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28728,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28728,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__28731,p__28732){
var map__28733 = p__28731;
var map__28733__$1 = cljs.core.__destructure_map(map__28733);
var db = map__28733__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28733__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28734 = p__28732;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28734,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28734,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-limiter-full-screen","change-burner-limiter-full-screen",2051559587),(function (p__28737,p__28738){
var map__28739 = p__28737;
var map__28739__$1 = cljs.core.__destructure_map(map__28739);
var db = map__28739__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28739__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28740 = p__28738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28740,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28740,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner-limiter-full-screen","burner-limiter-full-screen",-868941454)], null),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
