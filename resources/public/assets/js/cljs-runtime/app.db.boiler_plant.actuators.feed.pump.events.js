goog.provide('app.db.boiler_plant.actuators.feed.pump.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),(function (p__39176,p__39178){
var map__39187 = p__39176;
var map__39187__$1 = cljs.core.__destructure_map(map__39187);
var db = map__39187__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39187__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39188 = p__39178;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39188,(0),null);
var vec__39191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39188,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39191,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39191,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pump","change-flow-rate-max-value","feed-pump/change-flow-rate-max-value",-2045249959),(function (p__39235,p__39236){
var map__39245 = p__39235;
var map__39245__$1 = cljs.core.__destructure_map(map__39245);
var db = map__39245__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39245__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39246 = p__39236;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39246,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39246,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39263 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__39263 * 1.016260162601626);
} else {
return G__39263;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max","max",61366548)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pump","apply-settings","feed-pump/apply-settings",243194329),(function (p__39271,_){
var map__39275 = p__39271;
var map__39275__$1 = cljs.core.__destructure_map(map__39275);
var db = map__39275__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39275__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__39279 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__39279__$1 = cljs.core.__destructure_map(map__39279);
var performance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39279__$1,new cljs.core.Keyword(null,"performance","performance",1987578184));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"performance","performance",1987578184)], null),cljs.core.merge,performance),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pump","restore-defaults-settings","feed-pump/restore-defaults-settings",722183988),(function (p__39286,_){
var map__39288 = p__39286;
var map__39288__$1 = cljs.core.__destructure_map(map__39288);
var db = map__39288__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39288__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_PUMP,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pump.events.js.map
