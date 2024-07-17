goog.provide('app.db.boiler_plant.actuators.feed.pneumatic_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-pneumatic-valve","change-feed-pneumatic-valve",-225627217),(function (p__38126,p__38130){
var map__38152 = p__38126;
var map__38152__$1 = cljs.core.__destructure_map(map__38152);
var db = map__38152__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38153 = p__38130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38153,(0),null);
var vec__38156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38153,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38156,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38156,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-pneumatic-valve-flow-rate-max-value","change-feed-pneumatic-valve-flow-rate-max-value",-816044593),(function (p__38216,p__38217){
var map__38231 = p__38216;
var map__38231__$1 = cljs.core.__destructure_map(map__38231);
var db = map__38231__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38231__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38232 = p__38217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38232,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38232,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38248 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__38248 * 1.016260162601626);
} else {
return G__38248;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feed-pneumatic-valve-settings","apply-feed-pneumatic-valve-settings",-1251111718),(function (p__38275,_){
var map__38277 = p__38275;
var map__38277__$1 = cljs.core.__destructure_map(map__38277);
var db = map__38277__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38277__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__38283 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__38283__$1 = cljs.core.__destructure_map(map__38283);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38283__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feed-pneumatic-valve-settings","restore-defaults-feed-pneumatic-valve-settings",1038526265),(function (p__38290,_){
var map__38293 = p__38290;
var map__38293__$1 = cljs.core.__destructure_map(map__38293);
var db = map__38293__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38293__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE_PNEUMATIC,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pneumatic_valve.events.js.map
