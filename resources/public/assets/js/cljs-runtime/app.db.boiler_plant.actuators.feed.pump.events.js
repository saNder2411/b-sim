goog.provide('app.db.boiler_plant.actuators.feed.pump.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),(function (p__28125,p__28126){
var map__28127 = p__28125;
var map__28127__$1 = cljs.core.__destructure_map(map__28127);
var db = map__28127__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28127__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28128 = p__28126;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28128,(0),null);
var vec__28131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28128,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28131,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28131,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-pump-flow-rate-max-value","change-feed-pump-flow-rate-max-value",-637364524),(function (p__28134,p__28135){
var map__28136 = p__28134;
var map__28136__$1 = cljs.core.__destructure_map(map__28136);
var db = map__28136__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28136__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28137 = p__28135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28137,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28137,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__28140 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__28140 * 1.016260162601626);
} else {
return G__28140;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feed-pump-settings","apply-feed-pump-settings",-216900434),(function (p__28141,_){
var map__28142 = p__28141;
var map__28142__$1 = cljs.core.__destructure_map(map__28142);
var db = map__28142__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28142__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__28147 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__28147__$1 = cljs.core.__destructure_map(map__28147);
var performance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28147__$1,new cljs.core.Keyword(null,"performance","performance",1987578184));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"performance","performance",1987578184)], null),cljs.core.merge,performance),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feed-pump-settings","restore-defaults-feed-pump-settings",-144854733),(function (p__28159,_){
var map__28160 = p__28159;
var map__28160__$1 = cljs.core.__destructure_map(map__28160);
var db = map__28160__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28160__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_PUMP,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pump.events.js.map
