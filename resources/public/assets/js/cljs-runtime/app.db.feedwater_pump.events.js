goog.provide('app.db.feedwater_pump.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),(function (p__33351,p__33352){
var map__33395 = p__33351;
var map__33395__$1 = cljs.core.__destructure_map(map__33395);
var db = map__33395__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33395__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33396 = p__33352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33396,(0),null);
var vec__33399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33396,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33399,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33399,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-pump-flow-rate-max-value","change-feedwater-pump-flow-rate-max-value",-585911599),(function (p__33433,p__33435){
var map__33457 = p__33433;
var map__33457__$1 = cljs.core.__destructure_map(map__33457);
var db = map__33457__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33457__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33459 = p__33435;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33459,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33459,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__33484 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__33484 * 1.016260162601626);
} else {
return G__33484;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-pump-settings","apply-feedwater-pump-settings",-1556512642),(function (p__33493,_){
var map__33497 = p__33493;
var map__33497__$1 = cljs.core.__destructure_map(map__33497);
var db = map__33497__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33497__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__33509 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__33509__$1 = cljs.core.__destructure_map(map__33509);
var performance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33509__$1,new cljs.core.Keyword(null,"performance","performance",1987578184));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"performance","performance",1987578184)], null),cljs.core.merge,performance),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-pump-settings","restore-defaults-feedwater-pump-settings",-1194333909),(function (p__33530,_){
var map__33533 = p__33530;
var map__33533__$1 = cljs.core.__destructure_map(map__33533);
var db = map__33533__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33533__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_PUMP,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078)], null),default_values);
}));

//# sourceMappingURL=app.db.feedwater_pump.events.js.map
