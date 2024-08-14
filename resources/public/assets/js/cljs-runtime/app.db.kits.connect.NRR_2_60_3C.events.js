goog.provide('app.db.kits.connect.NRR_2_60_3C.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),(function (p__31264,p__31265){
var map__31298 = p__31264;
var map__31298__$1 = cljs.core.__destructure_map(map__31298);
var db = map__31298__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31298__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31300 = p__31265;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31300,(0),null);
var vec__31306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31300,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31306,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31306,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-NRR-2-60-3C-settings","apply-NRR-2-60-3C-settings",153031786),(function (p__31348,_){
var map__31357 = p__31348;
var map__31357__$1 = cljs.core.__destructure_map(map__31357);
var db = map__31357__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31357__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-NRR-2-60-3C-settings","restore-defaults-NRR-2-60-3C-settings",736923866),(function (p__31411,_){
var map__31421 = p__31411;
var map__31421__$1 = cljs.core.__destructure_map(map__31421);
var db = map__31421__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31421__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_60_3C,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_60_3C.events.js.map
