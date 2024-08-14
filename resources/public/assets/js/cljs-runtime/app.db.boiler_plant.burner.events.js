goog.provide('app.db.boiler_plant.burner.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),(function (p__31385,p__31386){
var map__31413 = p__31385;
var map__31413__$1 = cljs.core.__destructure_map(map__31413);
var db = map__31413__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31413__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31414 = p__31386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31414,(0),null);
var vec__31417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31414,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31417,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31417,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),(function (p__31439,p__31440){
var map__31445 = p__31439;
var map__31445__$1 = cljs.core.__destructure_map(map__31445);
var db = map__31445__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31445__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31446 = p__31440;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31446,(0),null);
var vec__31449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31446,(1),null);
var v_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31449,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31449,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__31467 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__31467 * 0.06894744825494);
} else {
return G__31467;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217),v_key], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),(function (p__31480,p__31481){
var map__31484 = p__31480;
var map__31484__$1 = cljs.core.__destructure_map(map__31484);
var db = map__31484__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31484__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31486 = p__31481;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31486,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31486,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__31495 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__31495 * (1000));
} else {
return G__31495;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),(function (p__31501,p__31502){
var map__31504 = p__31501;
var map__31504__$1 = cljs.core.__destructure_map(map__31504);
var db = map__31504__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31504__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31505 = p__31502;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31505,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31505,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__31515 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s")){
return (G__31515 * 2.7777777E-4);
} else {
return G__31515;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724),(function (p__31521,_){
var map__31522 = p__31521;
var map__31522__$1 = cljs.core.__destructure_map(map__31522);
var db = map__31522__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31522__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__31523 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__31523__$1 = cljs.core.__destructure_map(map__31523);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31523__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.merge,status),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801),(function (p__31528,_){
var map__31529 = p__31528;
var map__31529__$1 = cljs.core.__destructure_map(map__31529);
var db = map__31529__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31529__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BURNER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.burner.events.js.map
