goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__47830){
var map__47831 = p__47830;
var map__47831__$1 = cljs.core.__destructure_map(map__47831);
var screen__$1 = map__47831__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47831__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__47832){
var vec__47833 = p__47832;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47833,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47833,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47833,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__47836){
var vec__47837 = p__47836;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47837,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47837,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47837,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__47840){
var vec__47841 = p__47840;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47841,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47841,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__47844,p__47845){
var map__47846 = p__47844;
var map__47846__$1 = cljs.core.__destructure_map(map__47846);
var db = map__47846__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47846__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__47847 = p__47845;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__47850,p__47851){
var map__47852 = p__47850;
var map__47852__$1 = cljs.core.__destructure_map(map__47852);
var db = map__47852__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47852__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__47853 = p__47851;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47853,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47853,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-ctrl-panel-view","set-ctrl-panel-view",1352275081),(function (p__47856,p__47857){
var map__47858 = p__47856;
var map__47858__$1 = cljs.core.__destructure_map(map__47858);
var db = map__47858__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47858__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__47859 = p__47857;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47859,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47859,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-settings-modal-view","set-settings-modal-view",1119075276),(function (p__47862,p__47863){
var map__47864 = p__47862;
var map__47864__$1 = cljs.core.__destructure_map(map__47864);
var db = map__47864__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47864__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__47865 = p__47863;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47865,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47865,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-highlight-hotspots","set-highlight-hotspots",1813720726),(function (p__47868,p__47869){
var map__47870 = p__47868;
var map__47870__$1 = cljs.core.__destructure_map(map__47870);
var db = map__47870__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47870__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__47871 = p__47869;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47871,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47871,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__47874,p__47875){
var map__47876 = p__47874;
var map__47876__$1 = cljs.core.__destructure_map(map__47876);
var db = map__47876__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47876__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__47877 = p__47875;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47877,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47877,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (db,p__47880){
var vec__47881 = p__47880;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47881,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47881,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (db,p__47884){
var vec__47885 = p__47884;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47885,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47885,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__47888,p__47889){
var map__47890 = p__47888;
var map__47890__$1 = cljs.core.__destructure_map(map__47890);
var db = map__47890__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47890__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__47891 = p__47889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47891,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47891,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
