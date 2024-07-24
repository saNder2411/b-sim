goog.provide('app.db.boiler_plant.feedwater.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),(function (p__43402,p__43403){
var map__43424 = p__43402;
var map__43424__$1 = cljs.core.__destructure_map(map__43424);
var db = map__43424__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43424__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43426 = p__43403;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43426,(0),null);
var vec__43431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43426,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43431,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43431,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-feedwater-conductivity-value","change-feedwater-conductivity-value",-765973140),(function (p__43514,p__43516){
var map__43525 = p__43514;
var map__43525__$1 = cljs.core.__destructure_map(map__43525);
var db = map__43525__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43525__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43528 = p__43516;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43528,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43528,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43572 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__43572 * (2));
} else {
return G__43572;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-feedwater-settings","apply-feedwater-settings",595883518),(function (p__43591,_){
var map__43594 = p__43591;
var map__43594__$1 = cljs.core.__destructure_map(map__43594);
var db = map__43594__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43594__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-feedwater-settings","restore-defaults-feedwater-settings",-753838139),(function (p__43616,_){
var map__43621 = p__43616;
var map__43621__$1 = cljs.core.__destructure_map(map__43621);
var db = map__43621__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43621__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.feedwater.events.js.map
