goog.provide('app.db.kits.connect.LRG_16_60.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("LRG-16-60","change","LRG-16-60/change",1150022472),(function (p__43511,p__43512){
var map__43515 = p__43511;
var map__43515__$1 = cljs.core.__destructure_map(map__43515);
var db = map__43515__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43515__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43516 = p__43512;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43516,(0),null);
var vec__43519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43516,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43519,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43519,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("LRG-16-60","apply-settings","LRG-16-60/apply-settings",739284280),(function (p__43581,_){
var map__43584 = p__43581;
var map__43584__$1 = cljs.core.__destructure_map(map__43584);
var db = map__43584__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43584__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("LRG-16-60","restore-defaults-settings","LRG-16-60/restore-defaults-settings",-1850633711),(function (p__43619,_){
var map__43630 = p__43619;
var map__43630__$1 = cljs.core.__destructure_map(map__43630);
var db = map__43630__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43630__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.LRG_16_60,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.LRG_16_60.events.js.map
