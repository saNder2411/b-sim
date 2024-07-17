goog.provide('app.db.kits.connect.LRG_16_60.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),(function (p__28161,p__28162){
var map__28163 = p__28161;
var map__28163__$1 = cljs.core.__destructure_map(map__28163);
var db = map__28163__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28163__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28165 = p__28162;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165,(0),null);
var vec__28168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28165,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28168,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-LRG-16-60-settings","apply-LRG-16-60-settings",-1842022009),(function (p__28203,_){
var map__28204 = p__28203;
var map__28204__$1 = cljs.core.__destructure_map(map__28204);
var db = map__28204__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28204__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-LRG-16-60-settings","restore-defaults-LRG-16-60-settings",84434025),(function (p__28210,_){
var map__28211 = p__28210;
var map__28211__$1 = cljs.core.__destructure_map(map__28211);
var db = map__28211__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28211__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.LRG_16_60,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.LRG_16_60.events.js.map
