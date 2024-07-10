goog.provide('app.db.boiler.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),(function (p__61242,p__61245){
var map__61249 = p__61242;
var map__61249__$1 = cljs.core.__destructure_map(map__61249);
var db = map__61249__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61249__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61251 = p__61245;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61251,(0),null);
var vec__61259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61251,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61259,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61259,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-pressure-value","change-boiler-pressure-value",1251251672),(function (p__61268,p__61269){
var map__61274 = p__61268;
var map__61274__$1 = cljs.core.__destructure_map(map__61274);
var db = map__61274__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61274__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61275 = p__61269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61275,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61275,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__61289 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__61289 * 0.06894744825494);
} else {
return G__61289;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-init-sim-output-pressure-value","change-boiler-init-sim-output-pressure-value",-898839490),(function (p__61293,p__61294){
var map__61298 = p__61293;
var map__61298__$1 = cljs.core.__destructure_map(map__61298);
var db = map__61298__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61298__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61300 = p__61294;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61300,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61300,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__61308 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__61308 * 0.06894744825494);
} else {
return G__61308;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-conductivity-value","change-boiler-conductivity-value",-17698143),(function (p__61311,p__61312){
var map__61315 = p__61311;
var map__61315__$1 = cljs.core.__destructure_map(map__61315);
var db = map__61315__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61315__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61317 = p__61312;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61317,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61317,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__61324 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__61324 * (2));
} else {
return G__61324;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-init-sim-output-conductivity-value","change-boiler-init-sim-output-conductivity-value",420283157),(function (p__61327,p__61328){
var map__61329 = p__61327;
var map__61329__$1 = cljs.core.__destructure_map(map__61329);
var db = map__61329__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61329__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61330 = p__61328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61330,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61330,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__61334 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__61334 * (2));
} else {
return G__61334;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-boiler-settings","apply-boiler-settings",1704610382),(function (p__61337,_){
var map__61338 = p__61337;
var map__61338__$1 = cljs.core.__destructure_map(map__61338);
var db = map__61338__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61338__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__61339 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__61339__$1 = cljs.core.__destructure_map(map__61339);
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61339__$1,new cljs.core.Keyword(null,"water-level","water-level",-285016653));
var pressure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61339__$1,new cljs.core.Keyword(null,"pressure","pressure",505343747));
var conductivity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61339__$1,new cljs.core.Keyword(null,"conductivity","conductivity",-431850496));
var temperature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61339__$1,new cljs.core.Keyword(null,"temperature","temperature",899018429));
var sludge_mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61339__$1,new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null),cljs.core.merge,water_level),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747)], null),cljs.core.merge,pressure),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"prev-value","prev-value",-1627897048)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(pressure)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496)], null),cljs.core.merge,conductivity),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"temperature","temperature",899018429)], null),cljs.core.merge,temperature),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775)], null),cljs.core.merge,sludge_mass),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-boiler-settings","restore-defaults-boiler-settings",-1306485599),(function (p__61340,_){
var map__61341 = p__61340;
var map__61341__$1 = cljs.core.__destructure_map(map__61341);
var db = map__61341__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61341__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BOILER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler.events.js.map
