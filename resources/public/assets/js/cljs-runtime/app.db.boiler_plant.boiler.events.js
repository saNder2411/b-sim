goog.provide('app.db.boiler_plant.boiler.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","change","boiler/change",1606732925),(function (p__43441,p__43445){
var map__43447 = p__43441;
var map__43447__$1 = cljs.core.__destructure_map(map__43447);
var db = map__43447__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43447__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43451 = p__43445;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43451,(0),null);
var vec__43462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43451,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43462,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43462,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","change-pressure-value","boiler/change-pressure-value",-453668072),(function (p__43468,p__43469){
var map__43474 = p__43468;
var map__43474__$1 = cljs.core.__destructure_map(map__43474);
var db = map__43474__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43474__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43476 = p__43469;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43476,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43476,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43486 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__43486 * 0.06894744825494);
} else {
return G__43486;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","change-init-sim-output-pressure-value","boiler/change-init-sim-output-pressure-value",-674930872),(function (p__43492,p__43493){
var map__43495 = p__43492;
var map__43495__$1 = cljs.core.__destructure_map(map__43495);
var db = map__43495__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43495__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43496 = p__43493;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43496,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43496,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43500 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__43500 * 0.06894744825494);
} else {
return G__43500;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","change-conductivity-value","boiler/change-conductivity-value",-338670213),(function (p__43505,p__43506){
var map__43507 = p__43505;
var map__43507__$1 = cljs.core.__destructure_map(map__43507);
var db = map__43507__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43507__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43508 = p__43506;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43508,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43508,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43522 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__43522 * (2));
} else {
return G__43522;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","change-init-sim-output-conductivity-value","boiler/change-init-sim-output-conductivity-value",1209338719),(function (p__43582,p__43583){
var map__43594 = p__43582;
var map__43594__$1 = cljs.core.__destructure_map(map__43594);
var db = map__43594__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43594__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43595 = p__43583;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43595,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43595,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43659 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__43659 * (2));
} else {
return G__43659;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","apply-settings","boiler/apply-settings",3644415),(function (p__43688,_){
var map__43689 = p__43688;
var map__43689__$1 = cljs.core.__destructure_map(map__43689);
var db = map__43689__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43689__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__43693 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__43693__$1 = cljs.core.__destructure_map(map__43693);
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43693__$1,new cljs.core.Keyword(null,"water-level","water-level",-285016653));
var pressure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43693__$1,new cljs.core.Keyword(null,"pressure","pressure",505343747));
var conductivity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43693__$1,new cljs.core.Keyword(null,"conductivity","conductivity",-431850496));
var temperature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43693__$1,new cljs.core.Keyword(null,"temperature","temperature",899018429));
var sludge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43693__$1,new cljs.core.Keyword(null,"sludge","sludge",1916608912));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null),cljs.core.merge,water_level),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747)], null),cljs.core.merge,pressure),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"prev-value","prev-value",-1627897048)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(pressure)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496)], null),cljs.core.merge,conductivity),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"temperature","temperature",899018429)], null),cljs.core.merge,temperature),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge","sludge",1916608912)], null),cljs.core.merge,sludge),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("boiler","restore-defaults-settings","boiler/restore-defaults-settings",952822986),(function (p__43715,_){
var map__43717 = p__43715;
var map__43717__$1 = cljs.core.__destructure_map(map__43717);
var db = map__43717__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43717__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BOILER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.boiler.events.js.map
