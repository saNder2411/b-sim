goog.provide('app.db.NRR_2_61.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),(function (p__33355,p__33356){
var map__33402 = p__33355;
var map__33402__$1 = cljs.core.__destructure_map(map__33402);
var db = map__33402__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33403 = p__33356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33403,(0),null);
var vec__33407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33403,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33407,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33407,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-NRR-2-61-settings","apply-NRR-2-61-settings",875972255),(function (p__33424,_){
var map__33432 = p__33424;
var map__33432__$1 = cljs.core.__destructure_map(map__33432);
var db = map__33432__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33432__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-NRR-2-61-settings","restore-defaults-NRR-2-61-settings",-745008871),(function (p__33483,_){
var map__33488 = p__33483;
var map__33488__$1 = cljs.core.__destructure_map(map__33488);
var db = map__33488__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33488__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_61,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61"], null),default_values);
}));

//# sourceMappingURL=app.db.NRR_2_61.events.js.map
