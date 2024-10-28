goog.provide('app.db.boiler_plant.feedwater.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feedwater","change","feedwater/change",-1644588191),(function (p__43545,p__43546){
var map__43564 = p__43545;
var map__43564__$1 = cljs.core.__destructure_map(map__43564);
var db = map__43564__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43564__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43565 = p__43546;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43565,(0),null);
var vec__43571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43565,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43571,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43571,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feedwater","change-conductivity-value","feedwater/change-conductivity-value",504856167),(function (p__43628,p__43629){
var map__43637 = p__43628;
var map__43637__$1 = cljs.core.__destructure_map(map__43637);
var db = map__43637__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43637__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43640 = p__43629;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43640,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43640,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43661 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__43661 * (2));
} else {
return G__43661;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feedwater","apply-settings","feedwater/apply-settings",310572251),(function (p__43675,_){
var map__43683 = p__43675;
var map__43683__$1 = cljs.core.__destructure_map(map__43683);
var db = map__43683__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43683__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feedwater","restore-defaults-settings","feedwater/restore-defaults-settings",654291510),(function (p__43695,_){
var map__43696 = p__43695;
var map__43696__$1 = cljs.core.__destructure_map(map__43696);
var db = map__43696__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43696__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.feedwater.events.js.map
