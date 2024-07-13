goog.provide('app.db.feedwater.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),(function (p__82768,p__82769){
var map__82776 = p__82768;
var map__82776__$1 = cljs.core.__destructure_map(map__82776);
var db = map__82776__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82776__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__82777 = p__82769;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82777,(0),null);
var vec__82780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82777,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82780,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82780,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-conductivity-value","change-feedwater-conductivity-value",-765973140),(function (p__82831,p__82832){
var map__82835 = p__82831;
var map__82835__$1 = cljs.core.__destructure_map(map__82835);
var db = map__82835__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82835__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__82836 = p__82832;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82836,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82836,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__82851 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__82851 * (2));
} else {
return G__82851;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-settings","apply-feedwater-settings",595883518),(function (p__82879,_){
var map__82881 = p__82879;
var map__82881__$1 = cljs.core.__destructure_map(map__82881);
var db = map__82881__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82881__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-settings","restore-defaults-feedwater-settings",-753838139),(function (p__82890,_){
var map__82892 = p__82890;
var map__82892__$1 = cljs.core.__destructure_map(map__82892);
var db = map__82892__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82892__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),default_values);
}));

//# sourceMappingURL=app.db.feedwater.events.js.map
