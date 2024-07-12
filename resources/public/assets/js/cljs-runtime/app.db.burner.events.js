goog.provide('app.db.burner.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),(function (p__73095,p__73096){
var map__73108 = p__73095;
var map__73108__$1 = cljs.core.__destructure_map(map__73108);
var db = map__73108__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73108__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__73109 = p__73096;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73109,(0),null);
var vec__73112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73109,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73112,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73112,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),(function (p__73140,p__73141){
var map__73150 = p__73140;
var map__73150__$1 = cljs.core.__destructure_map(map__73150);
var db = map__73150__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73150__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__73151 = p__73141;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73151,(0),null);
var vec__73154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73151,(1),null);
var v_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73154,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73154,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__73175 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__73175 * 0.06894744825494);
} else {
return G__73175;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217),v_key], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),(function (p__73199,p__73200){
var map__73201 = p__73199;
var map__73201__$1 = cljs.core.__destructure_map(map__73201);
var db = map__73201__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73201__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__73202 = p__73200;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73202,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73202,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__73210 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__73210 * (1000));
} else {
return G__73210;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),(function (p__73231,p__73232){
var map__73236 = p__73231;
var map__73236__$1 = cljs.core.__destructure_map(map__73236);
var db = map__73236__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73236__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__73237 = p__73232;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73237,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73237,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__73246 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s")){
return (G__73246 * 2.7777777E-4);
} else {
return G__73246;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724),(function (p__73261,_){
var map__73263 = p__73261;
var map__73263__$1 = cljs.core.__destructure_map(map__73263);
var db = map__73263__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73263__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__73265 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__73265__$1 = cljs.core.__destructure_map(map__73265);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73265__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.merge,status),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801),(function (p__73272,_){
var map__73275 = p__73272;
var map__73275__$1 = cljs.core.__destructure_map(map__73275);
var db = map__73275__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73275__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BURNER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379)], null),default_values);
}));

//# sourceMappingURL=app.db.burner.events.js.map
