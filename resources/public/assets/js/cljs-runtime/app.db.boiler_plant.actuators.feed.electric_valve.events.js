goog.provide('app.db.boiler_plant.actuators.feed.electric_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),(function (p__31256,p__31259){
var map__31268 = p__31256;
var map__31268__$1 = cljs.core.__destructure_map(map__31268);
var db = map__31268__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31268__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31271 = p__31259;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31271,(0),null);
var vec__31282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31271,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31282,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31282,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-electric-valve-flow-rate-max-value","change-feed-electric-valve-flow-rate-max-value",1245312477),(function (p__31355,p__31356){
var map__31368 = p__31355;
var map__31368__$1 = cljs.core.__destructure_map(map__31368);
var db = map__31368__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31368__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31369 = p__31356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31369,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31369,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__31407 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__31407 * 1.016260162601626);
} else {
return G__31407;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feed-electric-valve-settings","apply-feed-electric-valve-settings",-448696509),(function (p__31444,_){
var map__31460 = p__31444;
var map__31460__$1 = cljs.core.__destructure_map(map__31460);
var db = map__31460__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__31464 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__31464__$1 = cljs.core.__destructure_map(map__31464);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31464__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
var transition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31464__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
var potentiometer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31464__$1,new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"transition","transition",765692007)], null),cljs.core.merge,transition),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614)], null),cljs.core.merge,potentiometer),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feed-electric-valve-settings","restore-defaults-feed-electric-valve-settings",-824392428),(function (p__31485,_){
var map__31489 = p__31485;
var map__31489__$1 = cljs.core.__destructure_map(map__31489);
var db = map__31489__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31489__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE_ELECTRIC,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.electric_valve.events.js.map
