goog.provide('app.db.boiler_plant.burner.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("burner","change","burner/change",1821116126),(function (p__39119,p__39120){
var map__39155 = p__39119;
var map__39155__$1 = cljs.core.__destructure_map(map__39155);
var db = map__39155__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39155__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39156 = p__39120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39156,(0),null);
var vec__39159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39156,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39159,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39159,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("burner","change-pressure-value","burner/change-pressure-value",-443660491),(function (p__39227,p__39228){
var map__39291 = p__39227;
var map__39291__$1 = cljs.core.__destructure_map(map__39291);
var db = map__39291__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39291__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39292 = p__39228;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39292,(0),null);
var vec__39295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39292,(1),null);
var v_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39295,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39295,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39298 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__39298 * 0.06894744825494);
} else {
return G__39298;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217),v_key], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("burner","change-power-max-value","burner/change-power-max-value",-1301084469),(function (p__39310,p__39311){
var map__39313 = p__39310;
var map__39313__$1 = cljs.core.__destructure_map(map__39313);
var db = map__39313__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39313__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39314 = p__39311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39314,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39314,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39344 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__39344 * (1000));
} else {
return G__39344;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max","max",61366548)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("burner","change-fuel-consumption-coeff-value","burner/change-fuel-consumption-coeff-value",2130582804),(function (p__39348,p__39349){
var map__39350 = p__39348;
var map__39350__$1 = cljs.core.__destructure_map(map__39350);
var db = map__39350__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39350__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39351 = p__39349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39351,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39351,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39357 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s")){
return (G__39357 * 2.7777777E-4);
} else {
return G__39357;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("burner","apply-settings","burner/apply-settings",68225118),(function (p__39359,_){
var map__39360 = p__39359;
var map__39360__$1 = cljs.core.__destructure_map(map__39360);
var db = map__39360__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39360__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__39361 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__39361__$1 = cljs.core.__destructure_map(map__39361);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39361__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core.merge,state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("burner","restore-defaults-settings","burner/restore-defaults-settings",967966391),(function (p__39367,_){
var map__39369 = p__39367;
var map__39369__$1 = cljs.core.__destructure_map(map__39369);
var db = map__39369__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39369__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BURNER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.burner.events.js.map
