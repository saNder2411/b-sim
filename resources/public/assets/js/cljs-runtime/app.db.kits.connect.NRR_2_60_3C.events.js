goog.provide('app.db.kits.connect.NRR_2_60_3C.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("NRR-2-60-3C","change","NRR-2-60-3C/change",-1195171215),(function (p__43523,p__43524){
var map__43536 = p__43523;
var map__43536__$1 = cljs.core.__destructure_map(map__43536);
var db = map__43536__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43536__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43537 = p__43524;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43537,(0),null);
var vec__43540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43537,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43540,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43540,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("NRR-2-60-3C","apply-settings","NRR-2-60-3C/apply-settings",1731878379),(function (p__43598,_){
var map__43601 = p__43598;
var map__43601__$1 = cljs.core.__destructure_map(map__43601);
var db = map__43601__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43601__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("NRR-2-60-3C","restore-defaults-settings","NRR-2-60-3C/restore-defaults-settings",-708238522),(function (p__43645,_){
var map__43649 = p__43645;
var map__43649__$1 = cljs.core.__destructure_map(map__43649);
var db = map__43649__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43649__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_60_3C,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_60_3C.events.js.map
