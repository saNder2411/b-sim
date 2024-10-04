goog.provide('app.db.boiler_plant.actuators.feed.electric_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-electric-valve","change","feed-electric-valve/change",1788394127),(function (p__39123,p__39124){
var map__39169 = p__39123;
var map__39169__$1 = cljs.core.__destructure_map(map__39169);
var db = map__39169__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39169__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39170 = p__39124;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39170,(0),null);
var vec__39173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39170,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39173,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39173,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-electric-valve","change-flow-rate-max-value","feed-electric-valve/change-flow-rate-max-value",-1873788271),(function (p__39249,p__39250){
var map__39255 = p__39249;
var map__39255__$1 = cljs.core.__destructure_map(map__39255);
var db = map__39255__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39255__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39256 = p__39250;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39256,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39256,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39265 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__39265 * 1.016260162601626);
} else {
return G__39265;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max","max",61366548)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-electric-valve","apply-settings","feed-electric-valve/apply-settings",98846225),(function (p__39280,_){
var map__39281 = p__39280;
var map__39281__$1 = cljs.core.__destructure_map(map__39281);
var db = map__39281__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39281__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__39283 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__39283__$1 = cljs.core.__destructure_map(map__39283);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39283__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
var transition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39283__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
var potentiometer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39283__$1,new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"transition","transition",765692007)], null),cljs.core.merge,transition),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614)], null),cljs.core.merge,potentiometer),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feed-electric-valve","restore-defaults-settings","feed-electric-valve/restore-defaults-settings",933673692),(function (p__39289,_){
var map__39290 = p__39289;
var map__39290__$1 = cljs.core.__destructure_map(map__39290);
var db = map__39290__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39290__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE_ELECTRIC,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.electric_valve.events.js.map
