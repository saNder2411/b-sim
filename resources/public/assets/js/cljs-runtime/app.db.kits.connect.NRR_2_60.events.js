goog.provide('app.db.kits.connect.NRR_2_60.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),(function (p__28224,p__28225){
var map__28226 = p__28224;
var map__28226__$1 = cljs.core.__destructure_map(map__28226);
var db = map__28226__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28226__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28227 = p__28225;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28227,(0),null);
var vec__28230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28227,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28230,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28230,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-NRR-2-60-settings","apply-NRR-2-60-settings",1367952058),(function (p__28233,_){
var map__28234 = p__28233;
var map__28234__$1 = cljs.core.__destructure_map(map__28234);
var db = map__28234__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28234__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-NRR-2-60-settings","restore-defaults-NRR-2-60-settings",-33142366),(function (p__28235,_){
var map__28236 = p__28235;
var map__28236__$1 = cljs.core.__destructure_map(map__28236);
var db = map__28236__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28236__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_60,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_60.events.js.map
