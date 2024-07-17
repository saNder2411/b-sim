goog.provide('app.db.boiler_plant.feedwater_valve_pn.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-valve-pn","change-feedwater-valve-pn",470650960),(function (p__38503,p__38504){
var map__38539 = p__38503;
var map__38539__$1 = cljs.core.__destructure_map(map__38539);
var db = map__38539__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38539__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38540 = p__38504;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38540,(0),null);
var vec__38543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38540,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38543,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38543,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-valve-pn-flow-rate-max-value","change-feedwater-valve-pn-flow-rate-max-value",-1036211830),(function (p__38593,p__38595){
var map__38614 = p__38593;
var map__38614__$1 = cljs.core.__destructure_map(map__38614);
var db = map__38614__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38614__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38615 = p__38595;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38615,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38615,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38631 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__38631 * 1.016260162601626);
} else {
return G__38631;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-valve-pn-settings","apply-feedwater-valve-pn-settings",1504273027),(function (p__38651,_){
var map__38656 = p__38651;
var map__38656__$1 = cljs.core.__destructure_map(map__38656);
var db = map__38656__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38656__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__38659 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__38659__$1 = cljs.core.__destructure_map(map__38659);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38659__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-valve-pn-settings","restore-defaults-feedwater-valve-pn-settings",-1016780260),(function (p__38678,_){
var map__38681 = p__38678;
var map__38681__$1 = cljs.core.__destructure_map(map__38681);
var db = map__38681__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38681__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE_PNEUMATIC,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.feedwater_valve_pn.events.js.map
