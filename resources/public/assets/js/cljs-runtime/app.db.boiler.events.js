goog.provide('app.db.boiler.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),(function (p__64118,p__64119){
var map__64141 = p__64118;
var map__64141__$1 = cljs.core.__destructure_map(map__64141);
var db = map__64141__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64141__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__64142 = p__64119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64142,(0),null);
var vec__64145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64142,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64145,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64145,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-pressure-value","change-boiler-pressure-value",1251251672),(function (p__64152,p__64153){
var map__64160 = p__64152;
var map__64160__$1 = cljs.core.__destructure_map(map__64160);
var db = map__64160__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64160__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__64161 = p__64153;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64161,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64161,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__64176 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__64176 * 0.06894744825494);
} else {
return G__64176;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-init-sim-output-pressure-value","change-boiler-init-sim-output-pressure-value",-898839490),(function (p__64181,p__64182){
var map__64187 = p__64181;
var map__64187__$1 = cljs.core.__destructure_map(map__64187);
var db = map__64187__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64187__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__64188 = p__64182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64188,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64188,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__64196 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__64196 * 0.06894744825494);
} else {
return G__64196;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-conductivity-value","change-boiler-conductivity-value",-17698143),(function (p__64204,p__64205){
var map__64210 = p__64204;
var map__64210__$1 = cljs.core.__destructure_map(map__64210);
var db = map__64210__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64210__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__64211 = p__64205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64211,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64211,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__64215 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__64215 * (2));
} else {
return G__64215;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-init-sim-output-conductivity-value","change-boiler-init-sim-output-conductivity-value",420283157),(function (p__64218,p__64219){
var map__64221 = p__64218;
var map__64221__$1 = cljs.core.__destructure_map(map__64221);
var db = map__64221__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64221__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__64222 = p__64219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64222,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64222,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__64225 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__64225 * (2));
} else {
return G__64225;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-boiler-settings","apply-boiler-settings",1704610382),(function (p__64228,_){
var map__64229 = p__64228;
var map__64229__$1 = cljs.core.__destructure_map(map__64229);
var db = map__64229__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64229__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__64230 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__64230__$1 = cljs.core.__destructure_map(map__64230);
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64230__$1,new cljs.core.Keyword(null,"water-level","water-level",-285016653));
var pressure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64230__$1,new cljs.core.Keyword(null,"pressure","pressure",505343747));
var conductivity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64230__$1,new cljs.core.Keyword(null,"conductivity","conductivity",-431850496));
var temperature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64230__$1,new cljs.core.Keyword(null,"temperature","temperature",899018429));
var sludge_mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64230__$1,new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null),cljs.core.merge,water_level),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747)], null),cljs.core.merge,pressure),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"prev-value","prev-value",-1627897048)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(pressure)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496)], null),cljs.core.merge,conductivity),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"temperature","temperature",899018429)], null),cljs.core.merge,temperature),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775)], null),cljs.core.merge,sludge_mass),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-boiler-settings","restore-defaults-boiler-settings",-1306485599),(function (p__64231,_){
var map__64232 = p__64231;
var map__64232__$1 = cljs.core.__destructure_map(map__64232);
var db = map__64232__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64232__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BOILER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler.events.js.map
