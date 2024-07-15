goog.provide('app.db.feedwater.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),(function (p__33347,p__33348){
var map__33376 = p__33347;
var map__33376__$1 = cljs.core.__destructure_map(map__33376);
var db = map__33376__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33376__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33382 = p__33348;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33382,(0),null);
var vec__33388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33382,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33388,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33388,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-conductivity-value","change-feedwater-conductivity-value",-765973140),(function (p__33425,p__33426){
var map__33442 = p__33425;
var map__33442__$1 = cljs.core.__destructure_map(map__33442);
var db = map__33442__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33445 = p__33426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33445,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33445,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__33480 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__33480 * (2));
} else {
return G__33480;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-settings","apply-feedwater-settings",595883518),(function (p__33491,_){
var map__33494 = p__33491;
var map__33494__$1 = cljs.core.__destructure_map(map__33494);
var db = map__33494__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33494__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-settings","restore-defaults-feedwater-settings",-753838139),(function (p__33521,_){
var map__33523 = p__33521;
var map__33523__$1 = cljs.core.__destructure_map(map__33523);
var db = map__33523__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33523__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),default_values);
}));

//# sourceMappingURL=app.db.feedwater.events.js.map
