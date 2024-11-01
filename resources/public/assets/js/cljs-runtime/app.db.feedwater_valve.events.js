goog.provide('app.db.feedwater_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),(function (p__27689,p__27690){
var map__27714 = p__27689;
var map__27714__$1 = cljs.core.__destructure_map(map__27714);
var db = map__27714__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27714__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__27748 = p__27690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748,(0),null);
var vec__27754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27754,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27754,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-valve-flow-rate-max-value","change-feedwater-valve-flow-rate-max-value",-168488603),(function (p__27799,p__27800){
var map__27822 = p__27799;
var map__27822__$1 = cljs.core.__destructure_map(map__27822);
var db = map__27822__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27822__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__27824 = p__27800;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27824,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__27856 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__27856 * 1.016260162601626);
} else {
return G__27856;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-valve-settings","apply-feedwater-valve-settings",764907300),(function (p__27884,_){
var map__27890 = p__27884;
var map__27890__$1 = cljs.core.__destructure_map(map__27890);
var db = map__27890__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27890__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__27896 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__27896__$1 = cljs.core.__destructure_map(map__27896);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27896__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
var transition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27896__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
var potentiometer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27896__$1,new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"transition","transition",765692007)], null),cljs.core.merge,transition),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614)], null),cljs.core.merge,potentiometer),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-valve-settings","restore-defaults-feedwater-valve-settings",599174434),(function (p__27917,_){
var map__27918 = p__27917;
var map__27918__$1 = cljs.core.__destructure_map(map__27918);
var db = map__27918__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27918__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912)], null),default_values);
}));

//# sourceMappingURL=app.db.feedwater_valve.events.js.map
