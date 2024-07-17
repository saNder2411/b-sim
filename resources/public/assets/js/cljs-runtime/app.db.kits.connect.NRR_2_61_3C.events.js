goog.provide('app.db.kits.connect.NRR_2_61_3C.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),(function (p__28281,p__28283){
var map__28285 = p__28281;
var map__28285__$1 = cljs.core.__destructure_map(map__28285);
var db = map__28285__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28285__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28286 = p__28283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28286,(0),null);
var vec__28289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28286,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28289,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28289,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-NRR-2-61-3C-settings","apply-NRR-2-61-3C-settings",2083320386),(function (p__28293,_){
var map__28294 = p__28293;
var map__28294__$1 = cljs.core.__destructure_map(map__28294);
var db = map__28294__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28294__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-NRR-2-61-3C-settings","restore-defaults-NRR-2-61-3C-settings",1429574037),(function (p__28300,_){
var map__28304 = p__28300;
var map__28304__$1 = cljs.core.__destructure_map(map__28304);
var db = map__28304__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28304__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_61_3C,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_61_3C.events.js.map
