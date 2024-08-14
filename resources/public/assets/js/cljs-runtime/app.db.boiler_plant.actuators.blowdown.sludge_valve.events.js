goog.provide('app.db.boiler_plant.actuators.blowdown.sludge_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),(function (p__31372,p__31373){
var map__31388 = p__31372;
var map__31388__$1 = cljs.core.__destructure_map(map__31388);
var db = map__31388__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31388__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31390 = p__31373;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31390,(0),null);
var vec__31393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31390,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31393,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31393,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sludge-valve-init-countdown-value","change-sludge-valve-init-countdown-value",652007406),(function (p__31442,p__31443){
var map__31452 = p__31442;
var map__31452__$1 = cljs.core.__destructure_map(map__31452);
var db = map__31452__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31452__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31454 = p__31443;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31454,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31454,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__31465 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"m")){
return (G__31465 * (60));
} else {
return G__31465;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-sludge-valve-settings","apply-sludge-valve-settings",1278915756),(function (p__31474,_){
var map__31477 = p__31474;
var map__31477__$1 = cljs.core.__destructure_map(map__31477);
var db = map__31477__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31477__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null),value),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-sludge-valve-settings","restore-defaults-sludge-valve-settings",-406134008),(function (p__31496,_){
var map__31497 = p__31496;
var map__31497__$1 = cljs.core.__destructure_map(map__31497);
var db = map__31497__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31497__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.SLUDGE_VALVE,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.blowdown.sludge_valve.events.js.map
