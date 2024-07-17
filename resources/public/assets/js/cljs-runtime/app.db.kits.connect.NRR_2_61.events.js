goog.provide('app.db.kits.connect.NRR_2_61.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),(function (p__28256,p__28257){
var map__28258 = p__28256;
var map__28258__$1 = cljs.core.__destructure_map(map__28258);
var db = map__28258__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28258__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28259 = p__28257;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28259,(0),null);
var vec__28262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28259,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28262,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28262,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61"], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-NRR-2-61-settings","apply-NRR-2-61-settings",875972255),(function (p__28270,_){
var map__28271 = p__28270;
var map__28271__$1 = cljs.core.__destructure_map(map__28271);
var db = map__28271__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28271__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-NRR-2-61-settings","restore-defaults-NRR-2-61-settings",-745008871),(function (p__28313,_){
var map__28314 = p__28313;
var map__28314__$1 = cljs.core.__destructure_map(map__28314);
var db = map__28314__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28314__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.NRR_2_61,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61"], null),default_values);
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_61.events.js.map
