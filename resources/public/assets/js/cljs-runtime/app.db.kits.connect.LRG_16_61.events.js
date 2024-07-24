goog.provide('app.db.kits.connect.LRG_16_61.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),(function (p__43456,p__43457){
var map__43481 = p__43456;
var map__43481__$1 = cljs.core.__destructure_map(map__43481);
var db = map__43481__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43481__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43482 = p__43457;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43482,(0),null);
var vec__43485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43482,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43485,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43485,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-LRG-16-61-settings","apply-LRG-16-61-settings",-1423821348),(function (p__43558,_){
var map__43564 = p__43558;
var map__43564__$1 = cljs.core.__destructure_map(map__43564);
var db = map__43564__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43564__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-LRG-16-61-settings","restore-defaults-LRG-16-61-settings",-2093759401),(function (p__43586,_){
var map__43588 = p__43586;
var map__43588__$1 = cljs.core.__destructure_map(map__43588);
var db = map__43588__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43588__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.LRG_16_61,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.LRG_16_61.events.js.map
