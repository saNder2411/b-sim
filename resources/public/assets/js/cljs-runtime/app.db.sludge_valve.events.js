goog.provide('app.db.sludge_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),(function (p__27684,p__27685){
var map__27713 = p__27684;
var map__27713__$1 = cljs.core.__destructure_map(map__27713);
var db = map__27713__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27713__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__27760 = p__27685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27760,(0),null);
var vec__27766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27760,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27766,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27766,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sludge-valve-init-countdown-value","change-sludge-valve-init-countdown-value",652007406),(function (p__27801,p__27802){
var map__27823 = p__27801;
var map__27823__$1 = cljs.core.__destructure_map(map__27823);
var db = map__27823__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27823__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__27828 = p__27802;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27828,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27828,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__27852 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"m")){
return (G__27852 * (60));
} else {
return G__27852;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-sludge-valve-settings","apply-sludge-valve-settings",1278915756),(function (p__27871,_){
var map__27880 = p__27871;
var map__27880__$1 = cljs.core.__destructure_map(map__27880);
var db = map__27880__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27880__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"value","value",305978217)], null),value),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-sludge-valve-settings","restore-defaults-sludge-valve-settings",-406134008),(function (p__27902,_){
var map__27903 = p__27902;
var map__27903__$1 = cljs.core.__destructure_map(map__27903);
var db = map__27903__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27903__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.SLUDGE_VALVE,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null),default_values);
}));

//# sourceMappingURL=app.db.sludge_valve.events.js.map
