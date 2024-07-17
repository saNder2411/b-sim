goog.provide('app.db.boiler_plant.actuators.blowdown.sludge_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),(function (p__38103,p__38104){
var map__38113 = p__38103;
var map__38113__$1 = cljs.core.__destructure_map(map__38113);
var db = map__38113__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38113__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38115 = p__38104;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38115,(0),null);
var vec__38122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38115,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38122,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38122,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sludge-valve-init-countdown-value","change-sludge-valve-init-countdown-value",652007406),(function (p__38193,p__38194){
var map__38207 = p__38193;
var map__38207__$1 = cljs.core.__destructure_map(map__38207);
var db = map__38207__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38207__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38208 = p__38194;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38208,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38208,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38242 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"m")){
return (G__38242 * (60));
} else {
return G__38242;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-sludge-valve-settings","apply-sludge-valve-settings",1278915756),(function (p__38258,_){
var map__38260 = p__38258;
var map__38260__$1 = cljs.core.__destructure_map(map__38260);
var db = map__38260__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38260__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null),value),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-sludge-valve-settings","restore-defaults-sludge-valve-settings",-406134008),(function (p__38286,_){
var map__38288 = p__38286;
var map__38288__$1 = cljs.core.__destructure_map(map__38288);
var db = map__38288__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.SLUDGE_VALVE,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.blowdown.sludge_valve.events.js.map
