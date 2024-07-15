goog.provide('app.db.continuous_valve.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),(function (p__33343,p__33346){
var map__33360 = p__33343;
var map__33360__$1 = cljs.core.__destructure_map(map__33360);
var db = map__33360__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33360__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33368 = p__33346;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33368,(0),null);
var vec__33375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33368,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33375,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33375,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-continuous-valve-flow-rate-max-value","change-continuous-valve-flow-rate-max-value",637447126),(function (p__33437,p__33438){
var map__33464 = p__33437;
var map__33464__$1 = cljs.core.__destructure_map(map__33464);
var db = map__33464__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33464__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33465 = p__33438;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33465,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33465,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__33486 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__33486 * 1.016260162601626);
} else {
return G__33486;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-continuous-valve-settings","apply-continuous-valve-settings",541401155),(function (p__33506,_){
var map__33508 = p__33506;
var map__33508__$1 = cljs.core.__destructure_map(map__33508);
var db = map__33508__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33508__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__33519 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__33519__$1 = cljs.core.__destructure_map(map__33519);
var damper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33519__$1,new cljs.core.Keyword(null,"damper","damper",870664161));
var transition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33519__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"damper","damper",870664161)], null),cljs.core.merge,damper),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"transition","transition",765692007)], null),cljs.core.merge,transition),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-continuous-valve-settings","restore-defaults-continuous-valve-settings",1964427588),(function (p__33537,_){
var map__33538 = p__33537;
var map__33538__$1 = cljs.core.__destructure_map(map__33538);
var db = map__33538__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33538__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.CONTINUOUS_VALVE,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611)], null),default_values);
}));

//# sourceMappingURL=app.db.continuous_valve.events.js.map
