goog.provide('app.db.boiler_plant.actuators.blowdown.continuous_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),(function (p__39109,p__39110){
var map__39126 = p__39109;
var map__39126__$1 = cljs.core.__destructure_map(map__39126);
var db = map__39126__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39126__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39133 = p__39110;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39133,(0),null);
var vec__39146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39133,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39146,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39146,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("continuous-valve","change-flow-rate-max-value","continuous-valve/change-flow-rate-max-value",750647924),(function (p__39222,p__39223){
var map__39299 = p__39222;
var map__39299__$1 = cljs.core.__destructure_map(map__39299);
var db = map__39299__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39299__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39300 = p__39223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39300,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39300,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39303 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__39303 * 1.016260162601626);
} else {
return G__39303;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max","max",61366548)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("continuous-valve","apply-settings","continuous-valve/apply-settings",2036198900),(function (p__39312,_){
var map__39317 = p__39312;
var map__39317__$1 = cljs.core.__destructure_map(map__39317);
var db = map__39317__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39317__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__39319 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__39319__$1 = cljs.core.__destructure_map(map__39319);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39319__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
var transition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39319__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"transition","transition",765692007)], null),cljs.core.merge,transition),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("continuous-valve","restore-defaults-settings","continuous-valve/restore-defaults-settings",-1003703491),(function (p__39327,_){
var map__39328 = p__39327;
var map__39328__$1 = cljs.core.__destructure_map(map__39328);
var db = map__39328__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39328__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.CONTINUOUS_VALVE,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.blowdown.continuous_valve.events.js.map
