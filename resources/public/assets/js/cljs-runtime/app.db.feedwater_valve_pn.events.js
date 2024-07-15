goog.provide('app.db.feedwater_valve_pn.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-valve-pn","change-feedwater-valve-pn",470650960),(function (p__33357,p__33358){
var map__33417 = p__33357;
var map__33417__$1 = cljs.core.__destructure_map(map__33417);
var db = map__33417__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33417__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33418 = p__33358;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33418,(0),null);
var vec__33421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33418,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33421,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33421,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-valve-pn-flow-rate-max-value","change-feedwater-valve-pn-flow-rate-max-value",-1036211830),(function (p__33439,p__33440){
var map__33456 = p__33439;
var map__33456__$1 = cljs.core.__destructure_map(map__33456);
var db = map__33456__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33456__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33458 = p__33440;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33458,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33458,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__33485 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__33485 * 1.016260162601626);
} else {
return G__33485;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-valve-pn-settings","apply-feedwater-valve-pn-settings",1504273027),(function (p__33498,_){
var map__33501 = p__33498;
var map__33501__$1 = cljs.core.__destructure_map(map__33501);
var db = map__33501__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33501__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__33512 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__33512__$1 = cljs.core.__destructure_map(map__33512);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33512__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-valve-pn-settings","restore-defaults-feedwater-valve-pn-settings",-1016780260),(function (p__33531,_){
var map__33534 = p__33531;
var map__33534__$1 = cljs.core.__destructure_map(map__33534);
var db = map__33534__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33534__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE_PNEUMATIC,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461)], null),default_values);
}));

//# sourceMappingURL=app.db.feedwater_valve_pn.events.js.map
