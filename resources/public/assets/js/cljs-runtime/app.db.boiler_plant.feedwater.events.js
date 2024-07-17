goog.provide('app.db.boiler_plant.feedwater.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),(function (p__38064,p__38065){
var map__38089 = p__38064;
var map__38089__$1 = cljs.core.__destructure_map(map__38089);
var db = map__38089__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38089__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38090 = p__38065;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38090,(0),null);
var vec__38093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38090,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38093,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38093,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-conductivity-value","change-feedwater-conductivity-value",-765973140),(function (p__38168,p__38169){
var map__38176 = p__38168;
var map__38176__$1 = cljs.core.__destructure_map(map__38176);
var db = map__38176__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38176__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__38177 = p__38169;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38177,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38177,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__38218 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__38218 * (2));
} else {
return G__38218;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-settings","apply-feedwater-settings",595883518),(function (p__38246,_){
var map__38249 = p__38246;
var map__38249__$1 = cljs.core.__destructure_map(map__38249);
var db = map__38249__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38249__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-settings","restore-defaults-feedwater-settings",-753838139),(function (p__38269,_){
var map__38274 = p__38269;
var map__38274__$1 = cljs.core.__destructure_map(map__38274);
var db = map__38274__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38274__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.feedwater.events.js.map
