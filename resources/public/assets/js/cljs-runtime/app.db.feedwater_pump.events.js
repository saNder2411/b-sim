goog.provide('app.db.feedwater_pump.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),(function (p__27687,p__27688){
var map__27712 = p__27687;
var map__27712__$1 = cljs.core.__destructure_map(map__27712);
var db = map__27712__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27712__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__27724 = p__27688;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27724,(0),null);
var vec__27733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27724,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-pump-flow-rate-max-value","change-feedwater-pump-flow-rate-max-value",-585911599),(function (p__27831,p__27832){
var map__27841 = p__27831;
var map__27841__$1 = cljs.core.__destructure_map(map__27841);
var db = map__27841__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27841__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__27842 = p__27832;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27842,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27842,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__27855 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__27855 * 1.016260162601626);
} else {
return G__27855;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-pump-settings","apply-feedwater-pump-settings",-1556512642),(function (p__27882,_){
var map__27889 = p__27882;
var map__27889__$1 = cljs.core.__destructure_map(map__27889);
var db = map__27889__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27889__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__27897 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__27897__$1 = cljs.core.__destructure_map(map__27897);
var performance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27897__$1,new cljs.core.Keyword(null,"performance","performance",1987578184));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"performance","performance",1987578184)], null),cljs.core.merge,performance),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-pump-settings","restore-defaults-feedwater-pump-settings",-1194333909),(function (p__27905,_){
var map__27909 = p__27905;
var map__27909__$1 = cljs.core.__destructure_map(map__27909);
var db = map__27909__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27909__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_PUMP,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078)], null),default_values);
}));

//# sourceMappingURL=app.db.feedwater_pump.events.js.map
