goog.provide('app.db.burner.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),(function (p__33341,p__33342){
var map__33359 = p__33341;
var map__33359__$1 = cljs.core.__destructure_map(map__33359);
var db = map__33359__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33359__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33362 = p__33342;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33362,(0),null);
var vec__33365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33362,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33365,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33365,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),(function (p__33434,p__33436){
var map__33469 = p__33434;
var map__33469__$1 = cljs.core.__destructure_map(map__33469);
var db = map__33469__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33469__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33473 = p__33436;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33473,(0),null);
var vec__33476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33473,(1),null);
var v_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33476,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33476,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__33490 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__33490 * 0.06894744825494);
} else {
return G__33490;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217),v_key], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),(function (p__33510,p__33511){
var map__33515 = p__33510;
var map__33515__$1 = cljs.core.__destructure_map(map__33515);
var db = map__33515__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33515__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33516 = p__33511;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33516,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33516,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__33528 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__33528 * (1000));
} else {
return G__33528;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),(function (p__33547,p__33548){
var map__33549 = p__33547;
var map__33549__$1 = cljs.core.__destructure_map(map__33549);
var db = map__33549__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33549__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33550 = p__33548;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33550,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33550,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__33558 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s")){
return (G__33558 * 2.7777777E-4);
} else {
return G__33558;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724),(function (p__33565,_){
var map__33572 = p__33565;
var map__33572__$1 = cljs.core.__destructure_map(map__33572);
var db = map__33572__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33572__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__33573 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__33573__$1 = cljs.core.__destructure_map(map__33573);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33573__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.merge,status),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801),(function (p__33585,_){
var map__33586 = p__33585;
var map__33586__$1 = cljs.core.__destructure_map(map__33586);
var db = map__33586__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33586__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BURNER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379)], null),default_values);
}));

//# sourceMappingURL=app.db.burner.events.js.map
