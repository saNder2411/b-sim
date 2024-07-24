goog.provide('app.db.boiler_plant.burner.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),(function (p__43447,p__43448){
var map__43474 = p__43447;
var map__43474__$1 = cljs.core.__destructure_map(map__43474);
var db = map__43474__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43474__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43475 = p__43448;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43475,(0),null);
var vec__43478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43475,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43478,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43478,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),(function (p__43547,p__43548){
var map__43563 = p__43547;
var map__43563__$1 = cljs.core.__destructure_map(map__43563);
var db = map__43563__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43563__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43565 = p__43548;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43565,(0),null);
var vec__43568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43565,(1),null);
var v_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43568,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43568,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43585 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__43585 * 0.06894744825494);
} else {
return G__43585;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217),v_key], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),(function (p__43612,p__43613){
var map__43617 = p__43612;
var map__43617__$1 = cljs.core.__destructure_map(map__43617);
var db = map__43617__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43617__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43618 = p__43613;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43618,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43618,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43625 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__43625 * (1000));
} else {
return G__43625;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),(function (p__43640,p__43641){
var map__43642 = p__43640;
var map__43642__$1 = cljs.core.__destructure_map(map__43642);
var db = map__43642__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43642__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43643 = p__43641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43643,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43643,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43647 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s")){
return (G__43647 * 2.7777777E-4);
} else {
return G__43647;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724),(function (p__43654,_){
var map__43655 = p__43654;
var map__43655__$1 = cljs.core.__destructure_map(map__43655);
var db = map__43655__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43655__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__43656 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__43656__$1 = cljs.core.__destructure_map(map__43656);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43656__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.merge,status),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801),(function (p__43658,_){
var map__43659 = p__43658;
var map__43659__$1 = cljs.core.__destructure_map(map__43659);
var db = map__43659__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43659__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BURNER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.burner.events.js.map
