goog.provide('app.db.kits.connect.LRG_16_61.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),(function (p__38105,p__38106){
var map__38125 = p__38105;
var map__38125__$1 = cljs.core.__destructure_map(map__38125);
var db = map__38125__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38125__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38134 = p__38106;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38134,(0),null);
var vec__38140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38134,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38140,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38140,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-LRG-16-61-settings","apply-LRG-16-61-settings",-1423821348),(function (p__38185,_){
var map__38204 = p__38185;
var map__38204__$1 = cljs.core.__destructure_map(map__38204);
var db = map__38204__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38204__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-LRG-16-61-settings","restore-defaults-LRG-16-61-settings",-2093759401),(function (p__38247,_){
var map__38251 = p__38247;
var map__38251__$1 = cljs.core.__destructure_map(map__38251);
var db = map__38251__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38251__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.LRG_16_61,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.LRG_16_61.events.js.map
