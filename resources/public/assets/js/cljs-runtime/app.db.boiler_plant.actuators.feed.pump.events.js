goog.provide('app.db.boiler_plant.actuators.feed.pump.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),(function (p__43543,p__43544){
var map__43550 = p__43543;
var map__43550__$1 = cljs.core.__destructure_map(map__43550);
var db = map__43550__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43550__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43557 = p__43544;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43557,(0),null);
var vec__43560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43557,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43560,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43560,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pump","change-flow-rate-max-value","feed-pump/change-flow-rate-max-value",-2045249959),(function (p__43626,p__43627){
var map__43633 = p__43626;
var map__43633__$1 = cljs.core.__destructure_map(map__43633);
var db = map__43633__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43633__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43634 = p__43627;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43634,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43634,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43658 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__43658 * 1.016260162601626);
} else {
return G__43658;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max","max",61366548)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pump","apply-settings","feed-pump/apply-settings",243194329),(function (p__43676,_){
var map__43682 = p__43676;
var map__43682__$1 = cljs.core.__destructure_map(map__43682);
var db = map__43682__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43682__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__43690 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__43690__$1 = cljs.core.__destructure_map(map__43690);
var performance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43690__$1,new cljs.core.Keyword(null,"performance","performance",1987578184));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"performance","performance",1987578184)], null),cljs.core.merge,performance),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pump","restore-defaults-settings","feed-pump/restore-defaults-settings",722183988),(function (p__43701,_){
var map__43702 = p__43701;
var map__43702__$1 = cljs.core.__destructure_map(map__43702);
var db = map__43702__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43702__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_PUMP,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pump.events.js.map
