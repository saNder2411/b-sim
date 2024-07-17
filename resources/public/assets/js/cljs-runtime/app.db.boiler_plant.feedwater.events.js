goog.provide('app.db.boiler_plant.feedwater.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),(function (p__28148,p__28149){
var map__28150 = p__28148;
var map__28150__$1 = cljs.core.__destructure_map(map__28150);
var db = map__28150__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28150__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28151 = p__28149;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(0),null);
var vec__28154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28154,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28154,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-conductivity-value","change-feedwater-conductivity-value",-765973140),(function (p__28197,p__28198){
var map__28199 = p__28197;
var map__28199__$1 = cljs.core.__destructure_map(map__28199);
var db = map__28199__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28199__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__28200 = p__28198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28200,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28200,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__28209 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__28209 * (2));
} else {
return G__28209;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-settings","apply-feedwater-settings",595883518),(function (p__28212,_){
var map__28213 = p__28212;
var map__28213__$1 = cljs.core.__destructure_map(map__28213);
var db = map__28213__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28213__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-settings","restore-defaults-feedwater-settings",-753838139),(function (p__28218,_){
var map__28220 = p__28218;
var map__28220__$1 = cljs.core.__destructure_map(map__28220);
var db = map__28220__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28220__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.feedwater.events.js.map
