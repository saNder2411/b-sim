goog.provide('app.db.kits.connect.NRR_2_61.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),(function (p__38109,p__38110){
var map__38121 = p__38109;
var map__38121__$1 = cljs.core.__destructure_map(map__38121);
var db = map__38121__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38121__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38131 = p__38110;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38131,(0),null);
var vec__38137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38131,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38137,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38137,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-NRR-2-61-settings","apply-NRR-2-61-settings",875972255),(function (p__38180,_){
var map__38187 = p__38180;
var map__38187__$1 = cljs.core.__destructure_map(map__38187);
var db = map__38187__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38187__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-NRR-2-61-settings","restore-defaults-NRR-2-61-settings",-745008871),(function (p__38235,_){
var map__38240 = p__38235;
var map__38240__$1 = cljs.core.__destructure_map(map__38240);
var db = map__38240__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38240__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_61,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_61.events.js.map
