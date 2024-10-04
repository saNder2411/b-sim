goog.provide('app.db.boiler_plant.actuators.blowdown.sludge_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),(function (p__39129,p__39130){
var map__39194 = p__39129;
var map__39194__$1 = cljs.core.__destructure_map(map__39194);
var db = map__39194__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39194__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39195 = p__39130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39195,(0),null);
var vec__39198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39195,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39198,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39198,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sludge-valve","change-init-countdown-value","sludge-valve/change-init-countdown-value",754770684),(function (p__39304,p__39305){
var map__39306 = p__39304;
var map__39306__$1 = cljs.core.__destructure_map(map__39306);
var db = map__39306__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39306__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39307 = p__39305;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39307,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39307,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39318 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"m")){
return (G__39318 * (60));
} else {
return G__39318;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sludge-valve","apply-settings","sludge-valve/apply-settings",-697771861),(function (p__39324,_){
var map__39325 = p__39324;
var map__39325__$1 = cljs.core.__destructure_map(map__39325);
var db = map__39325__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39325__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null),value),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sludge-valve","restore-defaults-settings","sludge-valve/restore-defaults-settings",-489337210),(function (p__39331,_){
var map__39333 = p__39331;
var map__39333__$1 = cljs.core.__destructure_map(map__39333);
var db = map__39333__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39333__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.SLUDGE_VALVE,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.blowdown.sludge_valve.events.js.map
