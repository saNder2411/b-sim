goog.provide('app.db.NRR_2_60_3C.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),(function (p__33309,p__33310){
var map__33319 = p__33309;
var map__33319__$1 = cljs.core.__destructure_map(map__33319);
var db = map__33319__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33319__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33320 = p__33310;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33320,(0),null);
var vec__33323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33320,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33323,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33323,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-NRR-2-60-3C-settings","apply-NRR-2-60-3C-settings",153031786),(function (p__33329,_){
var map__33334 = p__33329;
var map__33334__$1 = cljs.core.__destructure_map(map__33334);
var db = map__33334__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33334__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-NRR-2-60-3C-settings","restore-defaults-NRR-2-60-3C-settings",736923866),(function (p__33336,_){
var map__33339 = p__33336;
var map__33339__$1 = cljs.core.__destructure_map(map__33339);
var db = map__33339__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33339__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_60_3C,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C"], null),default_values);
}));

//# sourceMappingURL=app.db.NRR_2_60_3C.events.js.map
