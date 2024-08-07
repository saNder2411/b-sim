goog.provide('app.db.boiler_plant.continuous_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),(function (p__38514,p__38515){
var map__38547 = p__38514;
var map__38547__$1 = cljs.core.__destructure_map(map__38547);
var db = map__38547__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38547__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38552 = p__38515;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38552,(0),null);
var vec__38562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38552,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38562,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38562,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-continuous-valve-flow-rate-max-value","change-continuous-valve-flow-rate-max-value",637447126),(function (p__38587,p__38590){
var map__38599 = p__38587;
var map__38599__$1 = cljs.core.__destructure_map(map__38599);
var db = map__38599__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38607 = p__38590;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38607,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38607,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38628 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__38628 * 1.016260162601626);
} else {
return G__38628;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-continuous-valve-settings","apply-continuous-valve-settings",541401155),(function (p__38645,_){
var map__38650 = p__38645;
var map__38650__$1 = cljs.core.__destructure_map(map__38650);
var db = map__38650__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38650__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__38658 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__38658__$1 = cljs.core.__destructure_map(map__38658);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
var transition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"transition","transition",765692007)], null),cljs.core.merge,transition),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-continuous-valve-settings","restore-defaults-continuous-valve-settings",1964427588),(function (p__38682,_){
var map__38683 = p__38682;
var map__38683__$1 = cljs.core.__destructure_map(map__38683);
var db = map__38683__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38683__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.CONTINUOUS_VALVE,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.continuous_valve.events.js.map
