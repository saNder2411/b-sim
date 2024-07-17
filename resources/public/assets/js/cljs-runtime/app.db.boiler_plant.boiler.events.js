goog.provide('app.db.boiler_plant.boiler.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),(function (p__38066,p__38067){
var map__38096 = p__38066;
var map__38096__$1 = cljs.core.__destructure_map(map__38096);
var db = map__38096__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38097 = p__38067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38097,(0),null);
var vec__38100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38097,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38100,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38100,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-pressure-value","change-boiler-pressure-value",1251251672),(function (p__38174,p__38175){
var map__38188 = p__38174;
var map__38188__$1 = cljs.core.__destructure_map(map__38188);
var db = map__38188__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38188__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38189 = p__38175;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38189,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38189,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38230 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__38230 * 0.06894744825494);
} else {
return G__38230;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-init-sim-output-pressure-value","change-boiler-init-sim-output-pressure-value",-898839490),(function (p__38256,p__38257){
var map__38264 = p__38256;
var map__38264__$1 = cljs.core.__destructure_map(map__38264);
var db = map__38264__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38264__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38265 = p__38257;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38265,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38265,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38282 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__38282 * 0.06894744825494);
} else {
return G__38282;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-conductivity-value","change-boiler-conductivity-value",-17698143),(function (p__38291,p__38292){
var map__38298 = p__38291;
var map__38298__$1 = cljs.core.__destructure_map(map__38298);
var db = map__38298__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38298__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38299 = p__38292;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38299,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38299,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38308 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__38308 * (2));
} else {
return G__38308;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-init-sim-output-conductivity-value","change-boiler-init-sim-output-conductivity-value",420283157),(function (p__38310,p__38311){
var map__38312 = p__38310;
var map__38312__$1 = cljs.core.__destructure_map(map__38312);
var db = map__38312__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38312__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38313 = p__38311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38313,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38313,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38319 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__38319 * (2));
} else {
return G__38319;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-boiler-settings","apply-boiler-settings",1704610382),(function (p__38322,_){
var map__38323 = p__38322;
var map__38323__$1 = cljs.core.__destructure_map(map__38323);
var db = map__38323__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38323__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__38324 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__38324__$1 = cljs.core.__destructure_map(map__38324);
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38324__$1,new cljs.core.Keyword(null,"water-level","water-level",-285016653));
var pressure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38324__$1,new cljs.core.Keyword(null,"pressure","pressure",505343747));
var conductivity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38324__$1,new cljs.core.Keyword(null,"conductivity","conductivity",-431850496));
var temperature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38324__$1,new cljs.core.Keyword(null,"temperature","temperature",899018429));
var sludge_mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38324__$1,new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null),cljs.core.merge,water_level),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747)], null),cljs.core.merge,pressure),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"prev-value","prev-value",-1627897048)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(pressure)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496)], null),cljs.core.merge,conductivity),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"temperature","temperature",899018429)], null),cljs.core.merge,temperature),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775)], null),cljs.core.merge,sludge_mass),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-boiler-settings","restore-defaults-boiler-settings",-1306485599),(function (p__38325,_){
var map__38326 = p__38325;
var map__38326__$1 = cljs.core.__destructure_map(map__38326);
var db = map__38326__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38326__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BOILER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.boiler.events.js.map
