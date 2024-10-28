goog.provide('app.db.boiler_plant.actuators.feed.pneumatic_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),(function (p__43443,p__43446){
var map__43449 = p__43443;
var map__43449__$1 = cljs.core.__destructure_map(map__43449);
var db = map__43449__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43449__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43452 = p__43446;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(0),null);
var vec__43463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43463,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43463,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pneumatic-valve","change-flow-rate-max-value","feed-pneumatic-valve/change-flow-rate-max-value",-1730329342),(function (p__43472,p__43473){
var map__43482 = p__43472;
var map__43482__$1 = cljs.core.__destructure_map(map__43482);
var db = map__43482__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43482__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43483 = p__43473;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43483,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43483,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43488 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__43488 * 1.016260162601626);
} else {
return G__43488;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max","max",61366548)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pneumatic-valve","apply-settings","feed-pneumatic-valve/apply-settings",225619074),(function (p__43491,_){
var map__43494 = p__43491;
var map__43494__$1 = cljs.core.__destructure_map(map__43494);
var db = map__43494__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43494__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__43499 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__43499__$1 = cljs.core.__destructure_map(map__43499);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43499__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pneumatic-valve","restore-defaults-settings","feed-pneumatic-valve/restore-defaults-settings",802142795),(function (p__43503,_){
var map__43504 = p__43503;
var map__43504__$1 = cljs.core.__destructure_map(map__43504);
var db = map__43504__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43504__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE_PNEUMATIC,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pneumatic_valve.events.js.map
