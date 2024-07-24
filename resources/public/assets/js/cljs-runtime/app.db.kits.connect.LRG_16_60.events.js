goog.provide('app.db.kits.connect.LRG_16_60.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),(function (p__43427,p__43430){
var map__43467 = p__43427;
var map__43467__$1 = cljs.core.__destructure_map(map__43467);
var db = map__43467__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43467__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43468 = p__43430;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43468,(0),null);
var vec__43471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43468,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43471,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43471,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-LRG-16-60-settings","apply-LRG-16-60-settings",-1842022009),(function (p__43523,_){
var map__43524 = p__43523;
var map__43524__$1 = cljs.core.__destructure_map(map__43524);
var db = map__43524__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43524__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-LRG-16-60-settings","restore-defaults-LRG-16-60-settings",84434025),(function (p__43576,_){
var map__43579 = p__43576;
var map__43579__$1 = cljs.core.__destructure_map(map__43579);
var db = map__43579__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43579__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.LRG_16_60,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.LRG_16_60.events.js.map
