goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__93606){
var map__93607 = p__93606;
var map__93607__$1 = cljs.core.__destructure_map(map__93607);
var screen__$1 = map__93607__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93607__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__93608){
var vec__93609 = p__93608;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93609,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93609,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93609,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__93612){
var vec__93613 = p__93612;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93613,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93613,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93613,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__93616){
var vec__93617 = p__93616;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93617,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93617,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__93620,p__93621){
var map__93622 = p__93620;
var map__93622__$1 = cljs.core.__destructure_map(map__93622);
var db = map__93622__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93622__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__93623 = p__93621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93623,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93623,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__93626,p__93627){
var map__93628 = p__93626;
var map__93628__$1 = cljs.core.__destructure_map(map__93628);
var db = map__93628__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93628__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__93629 = p__93627;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93629,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93629,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-ctrl-panel-view","set-ctrl-panel-view",1352275081),(function (p__93632,p__93633){
var map__93634 = p__93632;
var map__93634__$1 = cljs.core.__destructure_map(map__93634);
var db = map__93634__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93634__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__93635 = p__93633;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93635,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93635,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-settings-modal-view","set-settings-modal-view",1119075276),(function (p__93638,p__93639){
var map__93640 = p__93638;
var map__93640__$1 = cljs.core.__destructure_map(map__93640);
var db = map__93640__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93640__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__93641 = p__93639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93641,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93641,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-highlight-hotspots","set-highlight-hotspots",1813720726),(function (p__93644,p__93645){
var map__93646 = p__93644;
var map__93646__$1 = cljs.core.__destructure_map(map__93646);
var db = map__93646__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93646__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__93647 = p__93645;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93647,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93647,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__93650,p__93651){
var map__93652 = p__93650;
var map__93652__$1 = cljs.core.__destructure_map(map__93652);
var db = map__93652__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93652__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__93653 = p__93651;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93653,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93653,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (db,p__93656){
var vec__93657 = p__93656;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93657,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93657,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (db,p__93660){
var vec__93661 = p__93660;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93661,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93661,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__93664,p__93665){
var map__93666 = p__93664;
var map__93666__$1 = cljs.core.__destructure_map(map__93666);
var db = map__93666__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93666__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__93667 = p__93665;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93667,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93667,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
