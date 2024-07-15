goog.provide('app.db.boiler.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),(function (p__33349,p__33350){
var map__33381 = p__33349;
var map__33381__$1 = cljs.core.__destructure_map(map__33381);
var db = map__33381__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33381__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33385 = p__33350;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33385,(0),null);
var vec__33391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33385,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-pressure-value","change-boiler-pressure-value",1251251672),(function (p__33427,p__33428){
var map__33448 = p__33427;
var map__33448__$1 = cljs.core.__destructure_map(map__33448);
var db = map__33448__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33448__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33449 = p__33428;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33449,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33449,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__33479 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__33479 * 0.06894744825494);
} else {
return G__33479;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-init-sim-output-pressure-value","change-boiler-init-sim-output-pressure-value",-898839490),(function (p__33495,p__33496){
var map__33502 = p__33495;
var map__33502__$1 = cljs.core.__destructure_map(map__33502);
var db = map__33502__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33502__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33503 = p__33496;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33503,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33503,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__33520 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__33520 * 0.06894744825494);
} else {
return G__33520;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-conductivity-value","change-boiler-conductivity-value",-17698143),(function (p__33535,p__33536){
var map__33540 = p__33535;
var map__33540__$1 = cljs.core.__destructure_map(map__33540);
var db = map__33540__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33540__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33541 = p__33536;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33541,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33541,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__33553 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__33553 * (2));
} else {
return G__33553;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-init-sim-output-conductivity-value","change-boiler-init-sim-output-conductivity-value",420283157),(function (p__33559,p__33560){
var map__33567 = p__33559;
var map__33567__$1 = cljs.core.__destructure_map(map__33567);
var db = map__33567__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33567__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33568 = p__33560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33568,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33568,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__33574 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__33574 * (2));
} else {
return G__33574;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-boiler-settings","apply-boiler-settings",1704610382),(function (p__33581,_){
var map__33582 = p__33581;
var map__33582__$1 = cljs.core.__destructure_map(map__33582);
var db = map__33582__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33582__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__33593 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__33593__$1 = cljs.core.__destructure_map(map__33593);
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33593__$1,new cljs.core.Keyword(null,"water-level","water-level",-285016653));
var pressure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33593__$1,new cljs.core.Keyword(null,"pressure","pressure",505343747));
var conductivity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33593__$1,new cljs.core.Keyword(null,"conductivity","conductivity",-431850496));
var temperature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33593__$1,new cljs.core.Keyword(null,"temperature","temperature",899018429));
var sludge_mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33593__$1,new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null),cljs.core.merge,water_level),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747)], null),cljs.core.merge,pressure),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"prev-value","prev-value",-1627897048)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(pressure)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496)], null),cljs.core.merge,conductivity),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"temperature","temperature",899018429)], null),cljs.core.merge,temperature),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775)], null),cljs.core.merge,sludge_mass),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-boiler-settings","restore-defaults-boiler-settings",-1306485599),(function (p__33603,_){
var map__33605 = p__33603;
var map__33605__$1 = cljs.core.__destructure_map(map__33605);
var db = map__33605__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33605__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BOILER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler.events.js.map
