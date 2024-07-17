goog.provide('app.db.boiler_plant.feedwater_valve_el.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-valve-el","change-feedwater-valve-el",46028929),(function (p__38482,p__38483){
var map__38486 = p__38482;
var map__38486__$1 = cljs.core.__destructure_map(map__38486);
var db = map__38486__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38487 = p__38483;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38487,(0),null);
var vec__38490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38487,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38490,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38490,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-valve-el-flow-rate-max-value","change-feedwater-valve-el-flow-rate-max-value",-1541505768),(function (p__38567,p__38568){
var map__38570 = p__38567;
var map__38570__$1 = cljs.core.__destructure_map(map__38570);
var db = map__38570__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38570__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38571 = p__38568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38571,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38571,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38591 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__38591 * 1.016260162601626);
} else {
return G__38591;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-valve-el-settings","apply-feedwater-valve-el-settings",-1446268320),(function (p__38633,_){
var map__38634 = p__38633;
var map__38634__$1 = cljs.core.__destructure_map(map__38634);
var db = map__38634__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__38640 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__38640__$1 = cljs.core.__destructure_map(map__38640);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38640__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
var transition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38640__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
var potentiometer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38640__$1,new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910),new cljs.core.Keyword(null,"transition","transition",765692007)], null),cljs.core.merge,transition),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614)], null),cljs.core.merge,potentiometer),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-valve-el-settings","restore-defaults-feedwater-valve-el-settings",1040063470),(function (p__38671,_){
var map__38672 = p__38671;
var map__38672__$1 = cljs.core.__destructure_map(map__38672);
var db = map__38672__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38672__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE_ELECTRIC,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.feedwater_valve_el.events.js.map
