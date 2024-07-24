goog.provide('app.db.kits.connect.NRR_2_60.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),(function (p__43495,p__43496){
var map__43499 = p__43495;
var map__43499__$1 = cljs.core.__destructure_map(map__43499);
var db = map__43499__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43499__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43500 = p__43496;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43500,(0),null);
var vec__43503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43500,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43503,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43503,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-NRR-2-60-settings","apply-NRR-2-60-settings",1367952058),(function (p__43574,_){
var map__43578 = p__43574;
var map__43578__$1 = cljs.core.__destructure_map(map__43578);
var db = map__43578__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43578__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-NRR-2-60-settings","restore-defaults-NRR-2-60-settings",-33142366),(function (p__43590,_){
var map__43593 = p__43590;
var map__43593__$1 = cljs.core.__destructure_map(map__43593);
var db = map__43593__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43593__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_60,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_60.events.js.map
