goog.provide('app.db.boiler.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-water-level","change-boiler-water-level",273919073),(function (p__45348,p__45349){
var map__45354 = p__45348;
var map__45354__$1 = cljs.core.__destructure_map(map__45354);
var db = map__45354__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45354__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__45355 = p__45349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45355,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45355,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),(function (p__45373,p__45374){
var map__45377 = p__45373;
var map__45377__$1 = cljs.core.__destructure_map(map__45377);
var db = map__45377__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45377__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__45378 = p__45374;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45378,(0),null);
var vec__45381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45378,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45381,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45381,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-settings-pressure-value","change-boiler-settings-pressure-value",-383203721),(function (p__45396,p__45397){
var map__45399 = p__45396;
var map__45399__$1 = cljs.core.__destructure_map(map__45399);
var db = map__45399__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45399__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__45400 = p__45397;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45400,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45400,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__45404 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__45404 * 0.06894744825494);
} else {
return G__45404;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-settings-conductivity-value","change-boiler-settings-conductivity-value",1285073760),(function (p__45416,p__45417){
var map__45423 = p__45416;
var map__45423__$1 = cljs.core.__destructure_map(map__45423);
var db = map__45423__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45423__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__45424 = p__45417;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45424,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45424,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__45429 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__45429 * (2));
} else {
return G__45429;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-boiler-settings","apply-boiler-settings",1704610382),(function (p__45437,_){
var map__45439 = p__45437;
var map__45439__$1 = cljs.core.__destructure_map(map__45439);
var db = map__45439__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45439__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__45440 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875)], null));
var map__45440__$1 = cljs.core.__destructure_map(map__45440);
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45440__$1,new cljs.core.Keyword(null,"water-level","water-level",-285016653));
var pressure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45440__$1,new cljs.core.Keyword(null,"pressure","pressure",505343747));
var conductivity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45440__$1,new cljs.core.Keyword(null,"conductivity","conductivity",-431850496));
var temperature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45440__$1,new cljs.core.Keyword(null,"temperature","temperature",899018429));
var sludge_mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45440__$1,new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(water_level)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(pressure)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"prev-pressure","prev-pressure",-888039001)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(pressure)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(conductivity)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"temperature","temperature",899018429)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(temperature)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(sludge_mass)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"view","view",1247994814)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-boiler-settings","restore-defaults-boiler-settings",-1306485599),(function (p__45446,_){
var map__45447 = p__45446;
var map__45447__$1 = cljs.core.__destructure_map(map__45447);
var db = map__45447__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45447__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_settings = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(app.db.defaults.BOILER),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875)], null),default_settings);
}));

//# sourceMappingURL=app.db.boiler.events.js.map
