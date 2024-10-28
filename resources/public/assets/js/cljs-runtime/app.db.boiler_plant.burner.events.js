goog.provide('app.db.boiler_plant.burner.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("burner","change","burner/change",1821116126),(function (p__43513,p__43514){
var map__43525 = p__43513;
var map__43525__$1 = cljs.core.__destructure_map(map__43525);
var db = map__43525__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43525__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43526 = p__43514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43526,(0),null);
var vec__43529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43526,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43529,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43529,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("burner","change-pressure-value","burner/change-pressure-value",-443660491),(function (p__43599,p__43600){
var map__43610 = p__43599;
var map__43610__$1 = cljs.core.__destructure_map(map__43610);
var db = map__43610__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43610__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43611 = p__43600;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43611,(0),null);
var vec__43614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43611,(1),null);
var v_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43614,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43614,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43648 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__43648 * 0.06894744825494);
} else {
return G__43648;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217),v_key], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("burner","change-power-max-value","burner/change-power-max-value",-1301084469),(function (p__43665,p__43666){
var map__43670 = p__43665;
var map__43670__$1 = cljs.core.__destructure_map(map__43670);
var db = map__43670__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43670__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43671 = p__43666;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43671,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43671,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43692 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__43692 * (1000));
} else {
return G__43692;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max","max",61366548)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("burner","change-fuel-consumption-coeff-value","burner/change-fuel-consumption-coeff-value",2130582804),(function (p__43703,p__43704){
var map__43707 = p__43703;
var map__43707__$1 = cljs.core.__destructure_map(map__43707);
var db = map__43707__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43707__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43710 = p__43704;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43710,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43710,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43714 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s")){
return (G__43714 * 2.7777777E-4);
} else {
return G__43714;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("burner","apply-settings","burner/apply-settings",68225118),(function (p__43727,_){
var map__43728 = p__43727;
var map__43728__$1 = cljs.core.__destructure_map(map__43728);
var db = map__43728__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43728__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__43729 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__43729__$1 = cljs.core.__destructure_map(map__43729);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43729__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core.merge,state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("burner","restore-defaults-settings","burner/restore-defaults-settings",967966391),(function (p__43736,_){
var map__43737 = p__43736;
var map__43737__$1 = cljs.core.__destructure_map(map__43737);
var db = map__43737__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43737__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BURNER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.burner.events.js.map
