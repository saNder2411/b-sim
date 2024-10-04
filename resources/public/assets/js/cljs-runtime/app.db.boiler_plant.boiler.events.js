goog.provide('app.db.boiler_plant.boiler.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","change","boiler/change",1606732925),(function (p__39121,p__39122){
var map__39162 = p__39121;
var map__39162__$1 = cljs.core.__destructure_map(map__39162);
var db = map__39162__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39162__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39163 = p__39122;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39163,(0),null);
var vec__39166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39163,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39166,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39166,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","change-pressure-value","boiler/change-pressure-value",-453668072),(function (p__39220,p__39221){
var map__39234 = p__39220;
var map__39234__$1 = cljs.core.__destructure_map(map__39234);
var db = map__39234__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39234__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39237 = p__39221;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39237,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39237,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39260 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__39260 * 0.06894744825494);
} else {
return G__39260;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","change-init-sim-output-pressure-value","boiler/change-init-sim-output-pressure-value",-674930872),(function (p__39273,p__39274){
var map__39320 = p__39273;
var map__39320__$1 = cljs.core.__destructure_map(map__39320);
var db = map__39320__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39320__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39321 = p__39274;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39321,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39321,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39326 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__39326 * 0.06894744825494);
} else {
return G__39326;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","change-conductivity-value","boiler/change-conductivity-value",-338670213),(function (p__39329,p__39330){
var map__39332 = p__39329;
var map__39332__$1 = cljs.core.__destructure_map(map__39332);
var db = map__39332__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39332__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39334 = p__39330;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39334,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39334,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39337 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__39337 * (2));
} else {
return G__39337;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","change-init-sim-output-conductivity-value","boiler/change-init-sim-output-conductivity-value",1209338719),(function (p__39338,p__39339){
var map__39340 = p__39338;
var map__39340__$1 = cljs.core.__destructure_map(map__39340);
var db = map__39340__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39340__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39341 = p__39339;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39341,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39341,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39347 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__39347 * (2));
} else {
return G__39347;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","apply-settings","boiler/apply-settings",3644415),(function (p__39354,_){
var map__39356 = p__39354;
var map__39356__$1 = cljs.core.__destructure_map(map__39356);
var db = map__39356__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39356__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__39358 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__39358__$1 = cljs.core.__destructure_map(map__39358);
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"water-level","water-level",-285016653));
var pressure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"pressure","pressure",505343747));
var conductivity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"conductivity","conductivity",-431850496));
var temperature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"temperature","temperature",899018429));
var sludge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39358__$1,new cljs.core.Keyword(null,"sludge","sludge",1916608912));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null),cljs.core.merge,water_level),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747)], null),cljs.core.merge,pressure),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"prev-value","prev-value",-1627897048)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(pressure)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496)], null),cljs.core.merge,conductivity),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"temperature","temperature",899018429)], null),cljs.core.merge,temperature),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge","sludge",1916608912)], null),cljs.core.merge,sludge),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","restore-defaults-settings","boiler/restore-defaults-settings",952822986),(function (p__39362,_){
var map__39363 = p__39362;
var map__39363__$1 = cljs.core.__destructure_map(map__39363);
var db = map__39363__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39363__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BOILER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.boiler.events.js.map
