goog.provide('app.db.boiler_plant.actuators.feed.pump.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),(function (p__38143,p__38144){
var map__38159 = p__38143;
var map__38159__$1 = cljs.core.__destructure_map(map__38159);
var db = map__38159__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38159__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38160 = p__38144;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38160,(0),null);
var vec__38163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38160,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38163,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38163,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feed-pump-flow-rate-max-value","change-feed-pump-flow-rate-max-value",-637364524),(function (p__38228,p__38229){
var map__38236 = p__38228;
var map__38236__$1 = cljs.core.__destructure_map(map__38236);
var db = map__38236__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38236__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38237 = p__38229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38237,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38237,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38250 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__38250 * 1.016260162601626);
} else {
return G__38250;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feed-pump-settings","apply-feed-pump-settings",-216900434),(function (p__38278,_){
var map__38280 = p__38278;
var map__38280__$1 = cljs.core.__destructure_map(map__38280);
var db = map__38280__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38280__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__38284 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__38284__$1 = cljs.core.__destructure_map(map__38284);
var performance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38284__$1,new cljs.core.Keyword(null,"performance","performance",1987578184));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"performance","performance",1987578184)], null),cljs.core.merge,performance),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feed-pump-settings","restore-defaults-feed-pump-settings",-144854733),(function (p__38295,_){
var map__38297 = p__38295;
var map__38297__$1 = cljs.core.__destructure_map(map__38297);
var db = map__38297__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_PUMP,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pump.events.js.map
