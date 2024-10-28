goog.provide('app.db.kits.connect.NRR_2_61_3C.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("NRR-2-61-3C","change","NRR-2-61-3C/change",-1195207214),(function (p__43760,p__43761){
var map__43764 = p__43760;
var map__43764__$1 = cljs.core.__destructure_map(map__43764);
var db = map__43764__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43764__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43765 = p__43761;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43765,(0),null);
var vec__43768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43765,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43768,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43768,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("NRR-2-61-3C","apply-settings","NRR-2-61-3C/apply-settings",1731852618),(function (p__43775,_){
var map__43776 = p__43775;
var map__43776__$1 = cljs.core.__destructure_map(map__43776);
var db = map__43776__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43776__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("NRR-2-61-3C","restore-defaults-settings","NRR-2-61-3C/restore-defaults-settings",-708268125),(function (p__43786,_){
var map__43787 = p__43786;
var map__43787__$1 = cljs.core.__destructure_map(map__43787);
var db = map__43787__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43787__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_61_3C,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_61_3C.events.js.map
