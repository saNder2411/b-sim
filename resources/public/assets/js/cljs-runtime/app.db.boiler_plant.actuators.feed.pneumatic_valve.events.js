goog.provide('app.db.boiler_plant.actuators.feed.pneumatic_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-pneumatic-valve","change-feed-pneumatic-valve",-225627217),(function (p__43396,p__43397){
var map__43410 = p__43396;
var map__43410__$1 = cljs.core.__destructure_map(map__43410);
var db = map__43410__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43410__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43412 = p__43397;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43412,(0),null);
var vec__43418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43412,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43418,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43418,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-pneumatic-valve-flow-rate-max-value","change-feed-pneumatic-valve-flow-rate-max-value",-816044593),(function (p__43519,p__43520){
var map__43557 = p__43519;
var map__43557__$1 = cljs.core.__destructure_map(map__43557);
var db = map__43557__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43557__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43559 = p__43520;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43559,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43559,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43584 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__43584 * 1.016260162601626);
} else {
return G__43584;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feed-pneumatic-valve-settings","apply-feed-pneumatic-valve-settings",-1251111718),(function (p__43602,_){
var map__43609 = p__43602;
var map__43609__$1 = cljs.core.__destructure_map(map__43609);
var db = map__43609__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43609__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__43614 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__43614__$1 = cljs.core.__destructure_map(map__43614);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43614__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feed-pneumatic-valve-settings","restore-defaults-feed-pneumatic-valve-settings",1038526265),(function (p__43627,_){
var map__43631 = p__43627;
var map__43631__$1 = cljs.core.__destructure_map(map__43631);
var db = map__43631__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43631__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE_PNEUMATIC,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pneumatic_valve.events.js.map
