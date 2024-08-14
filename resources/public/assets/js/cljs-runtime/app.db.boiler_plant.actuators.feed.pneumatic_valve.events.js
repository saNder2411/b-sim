goog.provide('app.db.boiler_plant.actuators.feed.pneumatic_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-pneumatic-valve","change-feed-pneumatic-valve",-225627217),(function (p__31358,p__31360){
var map__31374 = p__31358;
var map__31374__$1 = cljs.core.__destructure_map(map__31374);
var db = map__31374__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31374__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31375 = p__31360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31375,(0),null);
var vec__31378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31375,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31378,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31378,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-pneumatic-valve-flow-rate-max-value","change-feed-pneumatic-valve-flow-rate-max-value",-816044593),(function (p__31427,p__31428){
var map__31435 = p__31427;
var map__31435__$1 = cljs.core.__destructure_map(map__31435);
var db = map__31435__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31435__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31436 = p__31428;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31436,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31436,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__31462 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__31462 * 1.016260162601626);
} else {
return G__31462;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feed-pneumatic-valve-settings","apply-feed-pneumatic-valve-settings",-1251111718),(function (p__31479,_){
var map__31483 = p__31479;
var map__31483__$1 = cljs.core.__destructure_map(map__31483);
var db = map__31483__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31483__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__31490 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__31490__$1 = cljs.core.__destructure_map(map__31490);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31490__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feed-pneumatic-valve-settings","restore-defaults-feed-pneumatic-valve-settings",1038526265),(function (p__31498,_){
var map__31499 = p__31498;
var map__31499__$1 = cljs.core.__destructure_map(map__31499);
var db = map__31499__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE_PNEUMATIC,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pneumatic_valve.events.js.map
