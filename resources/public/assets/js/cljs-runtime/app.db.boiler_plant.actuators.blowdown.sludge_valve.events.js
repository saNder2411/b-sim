goog.provide('app.db.boiler_plant.actuators.blowdown.sludge_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),(function (p__43442,p__43444){
var map__43448 = p__43442;
var map__43448__$1 = cljs.core.__destructure_map(map__43448);
var db = map__43448__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43448__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43450 = p__43444;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43450,(0),null);
var vec__43459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43450,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43459,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43459,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sludge-valve","change-init-countdown-value","sludge-valve/change-init-countdown-value",754770684),(function (p__43470,p__43471){
var map__43475 = p__43470;
var map__43475__$1 = cljs.core.__destructure_map(map__43475);
var db = map__43475__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43475__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43479 = p__43471;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43479,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43479,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43487 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"m")){
return (G__43487 * (60));
} else {
return G__43487;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sludge-valve","apply-settings","sludge-valve/apply-settings",-697771861),(function (p__43489,_){
var map__43490 = p__43489;
var map__43490__$1 = cljs.core.__destructure_map(map__43490);
var db = map__43490__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43490__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null),value),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sludge-valve","restore-defaults-settings","sludge-valve/restore-defaults-settings",-489337210),(function (p__43501,_){
var map__43502 = p__43501;
var map__43502__$1 = cljs.core.__destructure_map(map__43502);
var db = map__43502__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43502__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.SLUDGE_VALVE,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.blowdown.sludge_valve.events.js.map
