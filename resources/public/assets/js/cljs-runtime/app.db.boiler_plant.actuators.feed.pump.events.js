goog.provide('app.db.boiler_plant.actuators.feed.pump.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),(function (p__31296,p__31297){
var map__31314 = p__31296;
var map__31314__$1 = cljs.core.__destructure_map(map__31314);
var db = map__31314__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31314__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31315 = p__31297;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31315,(0),null);
var vec__31318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31315,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31318,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31318,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-pump-flow-rate-max-value","change-feed-pump-flow-rate-max-value",-637364524),(function (p__31383,p__31384){
var map__31405 = p__31383;
var map__31405__$1 = cljs.core.__destructure_map(map__31405);
var db = map__31405__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31405__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31408 = p__31384;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31408,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31408,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__31423 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__31423 * 1.016260162601626);
} else {
return G__31423;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feed-pump-settings","apply-feed-pump-settings",-216900434),(function (p__31458,_){
var map__31461 = p__31458;
var map__31461__$1 = cljs.core.__destructure_map(map__31461);
var db = map__31461__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31461__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__31463 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__31463__$1 = cljs.core.__destructure_map(map__31463);
var performance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31463__$1,new cljs.core.Keyword(null,"performance","performance",1987578184));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"performance","performance",1987578184)], null),cljs.core.merge,performance),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feed-pump-settings","restore-defaults-feed-pump-settings",-144854733),(function (p__31478,_){
var map__31482 = p__31478;
var map__31482__$1 = cljs.core.__destructure_map(map__31482);
var db = map__31482__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31482__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_PUMP,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pump.events.js.map
