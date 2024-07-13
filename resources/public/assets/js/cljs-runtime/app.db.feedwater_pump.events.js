goog.provide('app.db.feedwater_pump.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),(function (p__83065,p__83066){
var map__83067 = p__83065;
var map__83067__$1 = cljs.core.__destructure_map(map__83067);
var db = map__83067__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83067__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__83068 = p__83066;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83068,(0),null);
var vec__83071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83068,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83071,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83071,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-pump-flow-rate-max-value","change-feedwater-pump-flow-rate-max-value",-585911599),(function (p__83074,p__83075){
var map__83076 = p__83074;
var map__83076__$1 = cljs.core.__destructure_map(map__83076);
var db = map__83076__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83076__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__83077 = p__83075;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83077,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83077,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__83080 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__83080 * 1.016260162601626);
} else {
return G__83080;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-pump-settings","apply-feedwater-pump-settings",-1556512642),(function (p__83081,_){
var map__83082 = p__83081;
var map__83082__$1 = cljs.core.__destructure_map(map__83082);
var db = map__83082__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83082__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__83083 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__83083__$1 = cljs.core.__destructure_map(map__83083);
var performance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83083__$1,new cljs.core.Keyword(null,"performance","performance",1987578184));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"performance","performance",1987578184)], null),cljs.core.merge,performance),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-pump-settings","restore-defaults-feedwater-pump-settings",-1194333909),(function (p__83084,_){
var map__83085 = p__83084;
var map__83085__$1 = cljs.core.__destructure_map(map__83085);
var db = map__83085__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83085__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_PUMP,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078)], null),default_values);
}));

//# sourceMappingURL=app.db.feedwater_pump.events.js.map
