goog.provide('app.db.LRG_16_60.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),(function (p__36947,p__36948){
var map__36949 = p__36947;
var map__36949__$1 = cljs.core.__destructure_map(map__36949);
var db = map__36949__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36949__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36950 = p__36948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36950,(0),null);
var vec__36953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36950,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36953,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36953,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-LRG-16-60-settings","apply-LRG-16-60-settings",-1842022009),(function (p__36960,_){
var map__36961 = p__36960;
var map__36961__$1 = cljs.core.__destructure_map(map__36961);
var db = map__36961__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36961__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-LRG-16-60-settings","restore-defaults-LRG-16-60-settings",84434025),(function (p__36962,_){
var map__36963 = p__36962;
var map__36963__$1 = cljs.core.__destructure_map(map__36963);
var db = map__36963__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36963__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.LRG_16_60,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60"], null),default_values);
}));

//# sourceMappingURL=app.db.LRG_16_60.events.js.map
