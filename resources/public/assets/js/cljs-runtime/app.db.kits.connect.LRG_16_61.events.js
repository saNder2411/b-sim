goog.provide('app.db.kits.connect.LRG_16_61.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("LRG-16-61","change","LRG-16-61/change",1150022471),(function (p__43532,p__43535){
var map__43549 = p__43532;
var map__43549__$1 = cljs.core.__destructure_map(map__43549);
var db = map__43549__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43549__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43551 = p__43535;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43551,(0),null);
var vec__43554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43551,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43554,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43554,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("LRG-16-61","apply-settings","LRG-16-61/apply-settings",739284153),(function (p__43609,_){
var map__43617 = p__43609;
var map__43617__$1 = cljs.core.__destructure_map(map__43617);
var db = map__43617__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43617__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("LRG-16-61","restore-defaults-settings","LRG-16-61/restore-defaults-settings",-1850633708),(function (p__43651,_){
var map__43656 = p__43651;
var map__43656__$1 = cljs.core.__destructure_map(map__43656);
var db = map__43656__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43656__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.LRG_16_61,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.LRG_16_61.events.js.map
