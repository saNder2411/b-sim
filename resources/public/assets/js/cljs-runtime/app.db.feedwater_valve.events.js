goog.provide('app.db.feedwater_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),(function (p__82772,p__82773){
var map__82794 = p__82772;
var map__82794__$1 = cljs.core.__destructure_map(map__82794);
var db = map__82794__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82794__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__82795 = p__82773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82795,(0),null);
var vec__82798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82795,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82798,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82798,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-valve-flow-rate-max-value","change-feedwater-valve-flow-rate-max-value",-168488603),(function (p__82843,p__82844){
var map__82845 = p__82843;
var map__82845__$1 = cljs.core.__destructure_map(map__82845);
var db = map__82845__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82845__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__82846 = p__82844;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82846,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82846,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__82857 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__82857 * 1.016260162601626);
} else {
return G__82857;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-valve-settings","apply-feedwater-valve-settings",764907300),(function (p__82884,_){
var map__82886 = p__82884;
var map__82886__$1 = cljs.core.__destructure_map(map__82886);
var db = map__82886__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82886__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__82889 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__82889__$1 = cljs.core.__destructure_map(map__82889);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82889__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
var transition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82889__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
var potentiometer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82889__$1,new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"transition","transition",765692007)], null),cljs.core.merge,transition),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614)], null),cljs.core.merge,potentiometer),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-valve-settings","restore-defaults-feedwater-valve-settings",599174434),(function (p__82907,_){
var map__82912 = p__82907;
var map__82912__$1 = cljs.core.__destructure_map(map__82912);
var db = map__82912__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82912__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER_VALVE,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912)], null),default_values);
}));

//# sourceMappingURL=app.db.feedwater_valve.events.js.map
