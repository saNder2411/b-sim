goog.provide('app.db.NRR_2_60.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),(function (p__33739,p__33740){
var map__33741 = p__33739;
var map__33741__$1 = cljs.core.__destructure_map(map__33741);
var db = map__33741__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33741__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33742 = p__33740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33742,(0),null);
var vec__33745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33742,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33745,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33745,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-NRR-2-60-settings","apply-NRR-2-60-settings",1367952058),(function (p__33748,_){
var map__33749 = p__33748;
var map__33749__$1 = cljs.core.__destructure_map(map__33749);
var db = map__33749__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33749__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-NRR-2-60-settings","restore-defaults-NRR-2-60-settings",-33142366),(function (p__33750,_){
var map__33751 = p__33750;
var map__33751__$1 = cljs.core.__destructure_map(map__33751);
var db = map__33751__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33751__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_60,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60"], null),default_values);
}));

//# sourceMappingURL=app.db.NRR_2_60.events.js.map
