goog.provide('app.db.boiler_plant.actuators.feed.pneumatic_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),(function (p__39113,p__39114){
var map__39128 = p__39113;
var map__39128__$1 = cljs.core.__destructure_map(map__39128);
var db = map__39128__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39128__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39134 = p__39114;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39134,(0),null);
var vec__39147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39134,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39147,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39147,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pneumatic-valve","change-flow-rate-max-value","feed-pneumatic-valve/change-flow-rate-max-value",-1730329342),(function (p__39218,p__39219){
var map__39230 = p__39218;
var map__39230__$1 = cljs.core.__destructure_map(map__39230);
var db = map__39230__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39230__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39231 = p__39219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39231,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39231,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39253 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__39253 * 1.016260162601626);
} else {
return G__39253;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max","max",61366548)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pneumatic-valve","apply-settings","feed-pneumatic-valve/apply-settings",225619074),(function (p__39268,_){
var map__39270 = p__39268;
var map__39270__$1 = cljs.core.__destructure_map(map__39270);
var db = map__39270__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39270__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__39278 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__39278__$1 = cljs.core.__destructure_map(map__39278);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39278__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-pneumatic-valve","restore-defaults-settings","feed-pneumatic-valve/restore-defaults-settings",802142795),(function (p__39285,_){
var map__39287 = p__39285;
var map__39287__$1 = cljs.core.__destructure_map(map__39287);
var db = map__39287__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39287__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE_PNEUMATIC,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pneumatic_valve.events.js.map
