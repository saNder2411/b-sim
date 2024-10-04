goog.provide('app.db.kits.connect.NRR_2_60.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("NRR-2-60","change","NRR-2-60/change",-443288122),(function (p__39115,p__39116){
var map__39177 = p__39115;
var map__39177__$1 = cljs.core.__destructure_map(map__39177);
var db = map__39177__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39177__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39179 = p__39116;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39179,(0),null);
var vec__39182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39179,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39182,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39182,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("NRR-2-60","apply-settings","NRR-2-60/apply-settings",-1962370634),(function (p__39215,_){
var map__39216 = p__39215;
var map__39216__$1 = cljs.core.__destructure_map(map__39216);
var db = map__39216__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39216__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("NRR-2-60","restore-defaults-settings","NRR-2-60/restore-defaults-settings",-1367765121),(function (p__39252,_){
var map__39259 = p__39252;
var map__39259__$1 = cljs.core.__destructure_map(map__39259);
var db = map__39259__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39259__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_60,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_60.events.js.map
