goog.provide('app.db.kits.connect.LRG_16_60.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("LRG-16-60","change","LRG-16-60/change",1150022472),(function (p__39185,p__39186){
var map__39201 = p__39185;
var map__39201__$1 = cljs.core.__destructure_map(map__39201);
var db = map__39201__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39201__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39202 = p__39186;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39202,(0),null);
var vec__39205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39202,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39205,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39205,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("LRG-16-60","apply-settings","LRG-16-60/apply-settings",739284280),(function (p__39229,_){
var map__39244 = p__39229;
var map__39244__$1 = cljs.core.__destructure_map(map__39244);
var db = map__39244__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39244__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("LRG-16-60","restore-defaults-settings","LRG-16-60/restore-defaults-settings",-1850633711),(function (p__39276,_){
var map__39277 = p__39276;
var map__39277__$1 = cljs.core.__destructure_map(map__39277);
var db = map__39277__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39277__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.LRG_16_60,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.LRG_16_60.events.js.map
