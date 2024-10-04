goog.provide('app.db.kits.connect.LRG_16_61.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("LRG-16-61","change","LRG-16-61/change",1150022471),(function (p__39111,p__39112){
var map__39125 = p__39111;
var map__39125__$1 = cljs.core.__destructure_map(map__39125);
var db = map__39125__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39125__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39132 = p__39112;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39132,(0),null);
var vec__39148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39132,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39148,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39148,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("LRG-16-61","apply-settings","LRG-16-61/apply-settings",739284153),(function (p__39217,_){
var map__39226 = p__39217;
var map__39226__$1 = cljs.core.__destructure_map(map__39226);
var db = map__39226__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39226__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("LRG-16-61","restore-defaults-settings","LRG-16-61/restore-defaults-settings",-1850633708),(function (p__39261,_){
var map__39264 = p__39261;
var map__39264__$1 = cljs.core.__destructure_map(map__39264);
var db = map__39264__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39264__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.LRG_16_61,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.LRG_16_61.events.js.map
