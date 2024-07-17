goog.provide('app.db.boiler_plant.burner.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),(function (p__38059,p__38060){
var map__38069 = p__38059;
var map__38069__$1 = cljs.core.__destructure_map(map__38069);
var db = map__38069__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38069__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38071 = p__38060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38071,(0),null);
var vec__38077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38071,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),(function (p__38172,p__38173){
var map__38192 = p__38172;
var map__38192__$1 = cljs.core.__destructure_map(map__38192);
var db = map__38192__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38192__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38195 = p__38173;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38195,(0),null);
var vec__38198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38195,(1),null);
var v_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38198,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38198,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38243 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__38243 * 0.06894744825494);
} else {
return G__38243;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217),v_key], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),(function (p__38262,p__38263){
var map__38270 = p__38262;
var map__38270__$1 = cljs.core.__destructure_map(map__38270);
var db = map__38270__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38270__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38271 = p__38263;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38271,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38271,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38285 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__38285 * (1000));
} else {
return G__38285;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),(function (p__38302,p__38303){
var map__38304 = p__38302;
var map__38304__$1 = cljs.core.__destructure_map(map__38304);
var db = map__38304__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38304__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38305 = p__38303;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38305,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38305,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38309 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s")){
return (G__38309 * 2.7777777E-4);
} else {
return G__38309;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724),(function (p__38316,_){
var map__38317 = p__38316;
var map__38317__$1 = cljs.core.__destructure_map(map__38317);
var db = map__38317__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38317__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__38318 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__38318__$1 = cljs.core.__destructure_map(map__38318);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38318__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.merge,status),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801),(function (p__38320,_){
var map__38321 = p__38320;
var map__38321__$1 = cljs.core.__destructure_map(map__38321);
var db = map__38321__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38321__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BURNER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.burner.events.js.map
