goog.provide('app.db.kits.connect.LRG_16_61.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),(function (p__28188,p__28189){
var map__28190 = p__28188;
var map__28190__$1 = cljs.core.__destructure_map(map__28190);
var db = map__28190__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28191 = p__28189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28191,(0),null);
var vec__28194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28191,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28194,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28194,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-LRG-16-61-settings","apply-LRG-16-61-settings",-1423821348),(function (p__28219,_){
var map__28221 = p__28219;
var map__28221__$1 = cljs.core.__destructure_map(map__28221);
var db = map__28221__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28221__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-LRG-16-61-settings","restore-defaults-LRG-16-61-settings",-2093759401),(function (p__28222,_){
var map__28223 = p__28222;
var map__28223__$1 = cljs.core.__destructure_map(map__28223);
var db = map__28223__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28223__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.LRG_16_61,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.LRG_16_61.events.js.map
