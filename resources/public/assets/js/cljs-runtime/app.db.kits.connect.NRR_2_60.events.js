goog.provide('app.db.kits.connect.NRR_2_60.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),(function (p__31330,p__31331){
var map__31339 = p__31330;
var map__31339__$1 = cljs.core.__destructure_map(map__31339);
var db = map__31339__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31339__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31340 = p__31331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31340,(0),null);
var vec__31343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31340,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31343,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31343,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-NRR-2-60-settings","apply-NRR-2-60-settings",1367952058),(function (p__31387,_){
var map__31401 = p__31387;
var map__31401__$1 = cljs.core.__destructure_map(map__31401);
var db = map__31401__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31401__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-NRR-2-60-settings","restore-defaults-NRR-2-60-settings",-33142366),(function (p__31471,_){
var map__31473 = p__31471;
var map__31473__$1 = cljs.core.__destructure_map(map__31473);
var db = map__31473__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31473__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_60,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_60.events.js.map
