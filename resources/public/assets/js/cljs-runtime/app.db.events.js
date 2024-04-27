goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__65706){
var map__65707 = p__65706;
var map__65707__$1 = cljs.core.__destructure_map(map__65707);
var screen__$1 = map__65707__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65707__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__65708){
var vec__65709 = p__65708;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65709,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65709,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65709,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__65712){
var vec__65713 = p__65712;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65713,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65713,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65713,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__65716){
var vec__65717 = p__65716;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65717,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65717,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (db,p__65720){
var vec__65721 = p__65720;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65721,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65721,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"lang","lang",-1819677104),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (db,p__65724){
var vec__65725 = p__65724;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65725,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65725,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-show-ctrl-panel","set-show-ctrl-panel",-1988924617),(function (db,p__65728){
var vec__65729 = p__65728;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65729,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65729,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"show-ctrl-panel","show-ctrl-panel",-1185529327),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-show-general-settings","set-show-general-settings",-877753355),(function (db,p__65732){
var vec__65733 = p__65732;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65733,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65733,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-highlight-hotspots","set-highlight-hotspots",1813720726),(function (db,p__65736){
var vec__65737 = p__65736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65737,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65737,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (db,p__65740){
var vec__65741 = p__65740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65741,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65741,(1),null);
console.log("open gen settings",db);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494),false], 0));
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (db,p__65744){
var vec__65745 = p__65744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65745,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65745,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules",db);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (db,p__65748){
var vec__65749 = p__65748;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65749,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65749,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (db,p__65752){
var vec__65753 = p__65752;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65753,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65753,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
