goog.provide('app.db.feedwater_valve_pn.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-valve-pn","change-feedwater-valve-pn",470650960),(function (p__82786,p__82788){
var map__82810 = p__82786;
var map__82810__$1 = cljs.core.__destructure_map(map__82810);
var db = map__82810__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82810__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__82811 = p__82788;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82811,(0),null);
var vec__82814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82811,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82814,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82814,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-valve-pn-flow-rate-max-value","change-feedwater-valve-pn-flow-rate-max-value",-1036211830),(function (p__82853,p__82855){
var map__82861 = p__82853;
var map__82861__$1 = cljs.core.__destructure_map(map__82861);
var db = map__82861__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82861__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__82865 = p__82855;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82865,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82865,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__82882 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__82882 * 1.016260162601626);
} else {
return G__82882;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-valve-pn-settings","apply-feedwater-valve-pn-settings",1504273027),(function (p__82891,_){
var map__82895 = p__82891;
var map__82895__$1 = cljs.core.__destructure_map(map__82895);
var db = map__82895__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82895__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__82902 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__82902__$1 = cljs.core.__destructure_map(map__82902);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82902__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-valve-pn-settings","restore-defaults-feedwater-valve-pn-settings",-1016780260),(function (p__82915,_){
var map__82917 = p__82915;
var map__82917__$1 = cljs.core.__destructure_map(map__82917);
var db = map__82917__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82917__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE_PNEUMATIC,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-pn","feedwater-valve-pn",1216148461)], null),default_values);
}));

//# sourceMappingURL=app.db.feedwater_valve_pn.events.js.map
