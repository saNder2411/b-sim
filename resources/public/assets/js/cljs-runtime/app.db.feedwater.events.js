goog.provide('app.db.feedwater.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),(function (p__27681,p__27682){
var map__27715 = p__27681;
var map__27715__$1 = cljs.core.__destructure_map(map__27715);
var db = map__27715__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27715__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__27749 = p__27682;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27749,(0),null);
var vec__27757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27749,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-conductivity-value","change-feedwater-conductivity-value",-765973140),(function (p__27797,p__27798){
var map__27813 = p__27797;
var map__27813__$1 = cljs.core.__destructure_map(map__27813);
var db = map__27813__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27813__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__27817 = p__27798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27817,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27817,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__27850 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__27850 * (2));
} else {
return G__27850;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-settings","apply-feedwater-settings",595883518),(function (p__27872,_){
var map__27879 = p__27872;
var map__27879__$1 = cljs.core.__destructure_map(map__27879);
var db = map__27879__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27879__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-settings","restore-defaults-feedwater-settings",-753838139),(function (p__27901,_){
var map__27907 = p__27901;
var map__27907__$1 = cljs.core.__destructure_map(map__27907);
var db = map__27907__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27907__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),default_values);
}));

//# sourceMappingURL=app.db.feedwater.events.js.map
