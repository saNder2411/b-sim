goog.provide('app.db.boiler_events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-water-level","change-boiler-water-level",273919073),(function (p__31629,p__31630){
var map__31631 = p__31629;
var map__31631__$1 = cljs.core.__destructure_map(map__31631);
var db = map__31631__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31631__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31632 = p__31630;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31632,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31632,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),(function (p__31635,p__31636){
var map__31637 = p__31635;
var map__31637__$1 = cljs.core.__destructure_map(map__31637);
var db = map__31637__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31637__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31638 = p__31636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31638,(0),null);
var vec__31641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31638,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31641,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31641,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-settings-pressure-value","change-boiler-settings-pressure-value",-383203721),(function (p__31644,p__31645){
var map__31646 = p__31644;
var map__31646__$1 = cljs.core.__destructure_map(map__31646);
var db = map__31646__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31646__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31647 = p__31645;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31647,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31647,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__31650 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__31650 * 0.06894744825494);
} else {
return G__31650;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-settings-conductivity-value","change-boiler-settings-conductivity-value",1285073760),(function (p__31651,p__31652){
var map__31653 = p__31651;
var map__31653__$1 = cljs.core.__destructure_map(map__31653);
var db = map__31653__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31653__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31654 = p__31652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31654,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31654,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__31657 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__31657 * (2));
} else {
return G__31657;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-boiler-settings","apply-boiler-settings",1704610382),(function (p__31658,_){
var map__31659 = p__31658;
var map__31659__$1 = cljs.core.__destructure_map(map__31659);
var db = map__31659__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31659__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__31660 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875)], null));
var map__31660__$1 = cljs.core.__destructure_map(map__31660);
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31660__$1,new cljs.core.Keyword(null,"water-level","water-level",-285016653));
var pressure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31660__$1,new cljs.core.Keyword(null,"pressure","pressure",505343747));
var conductivity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31660__$1,new cljs.core.Keyword(null,"conductivity","conductivity",-431850496));
var temperature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31660__$1,new cljs.core.Keyword(null,"temperature","temperature",899018429));
var sludge_mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31660__$1,new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(water_level)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(pressure)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"prev-pressure","prev-pressure",-888039001)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(pressure)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(conductivity)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"temperature","temperature",899018429)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(temperature)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(sludge_mass)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"view","view",1247994814)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-boiler-settings","restore-defaults-boiler-settings",-1306485599),(function (p__31661,_){
var map__31662 = p__31661;
var map__31662__$1 = cljs.core.__destructure_map(map__31662);
var db = map__31662__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31662__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_settings = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(app.db.defaults.BOILER),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875)], null),default_settings);
}));

//# sourceMappingURL=app.db.boiler_events.js.map
