goog.provide('app.db.kits.connect.NRR_2_61.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("NRR-2-61","change","NRR-2-61/change",-443288123),(function (p__39395,p__39396){
var map__39397 = p__39395;
var map__39397__$1 = cljs.core.__destructure_map(map__39397);
var db = map__39397__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39397__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39398 = p__39396;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39398,(0),null);
var vec__39401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39398,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39401,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39401,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("NRR-2-61","apply-settings","NRR-2-61/apply-settings",-1962370633),(function (p__39411,_){
var map__39412 = p__39411;
var map__39412__$1 = cljs.core.__destructure_map(map__39412);
var db = map__39412__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39412__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("NRR-2-61","restore-defaults-settings","NRR-2-61/restore-defaults-settings",-1367765102),(function (p__39424,_){
var map__39425 = p__39424;
var map__39425__$1 = cljs.core.__destructure_map(map__39425);
var db = map__39425__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39425__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_61,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_61.events.js.map
