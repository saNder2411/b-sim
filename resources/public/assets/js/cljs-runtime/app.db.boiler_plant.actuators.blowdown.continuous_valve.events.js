goog.provide('app.db.boiler_plant.actuators.blowdown.continuous_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),(function (p__38062,p__38063){
var map__38070 = p__38062;
var map__38070__$1 = cljs.core.__destructure_map(map__38070);
var db = map__38070__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38070__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38083 = p__38063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(0),null);
var vec__38086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38086,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38086,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-continuous-valve-flow-rate-max-value","change-continuous-valve-flow-rate-max-value",637447126),(function (p__38170,p__38171){
var map__38181 = p__38170;
var map__38181__$1 = cljs.core.__destructure_map(map__38181);
var db = map__38181__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38181__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38182 = p__38171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38182,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38182,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38220 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__38220 * 1.016260162601626);
} else {
return G__38220;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-continuous-valve-settings","apply-continuous-valve-settings",541401155),(function (p__38252,_){
var map__38253 = p__38252;
var map__38253__$1 = cljs.core.__destructure_map(map__38253);
var db = map__38253__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38253__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__38259 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__38259__$1 = cljs.core.__destructure_map(map__38259);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38259__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
var transition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38259__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"transition","transition",765692007)], null),cljs.core.merge,transition),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-continuous-valve-settings","restore-defaults-continuous-valve-settings",1964427588),(function (p__38287,_){
var map__38289 = p__38287;
var map__38289__$1 = cljs.core.__destructure_map(map__38289);
var db = map__38289__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38289__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.CONTINUOUS_VALVE,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.blowdown.continuous_valve.events.js.map
