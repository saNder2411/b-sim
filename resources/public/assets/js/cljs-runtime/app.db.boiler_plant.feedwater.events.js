goog.provide('app.db.boiler_plant.feedwater.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feedwater","change","feedwater/change",-1644588191),(function (p__39117,p__39118){
var map__39127 = p__39117;
var map__39127__$1 = cljs.core.__destructure_map(map__39127);
var db = map__39127__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39127__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39131 = p__39118;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39131,(0),null);
var vec__39143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39131,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39143,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39143,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feedwater","change-conductivity-value","feedwater/change-conductivity-value",504856167),(function (p__39224,p__39225){
var map__39240 = p__39224;
var map__39240__$1 = cljs.core.__destructure_map(map__39240);
var db = map__39240__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39240__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39241 = p__39225;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39241,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39241,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39262 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__39262 * (2));
} else {
return G__39262;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feedwater","apply-settings","feedwater/apply-settings",310572251),(function (p__39269,_){
var map__39272 = p__39269;
var map__39272__$1 = cljs.core.__destructure_map(map__39272);
var db = map__39272__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39272__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("feedwater","restore-defaults-settings","feedwater/restore-defaults-settings",654291510),(function (p__39282,_){
var map__39284 = p__39282;
var map__39284__$1 = cljs.core.__destructure_map(map__39284);
var db = map__39284__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39284__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.FEEDWATER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),default_values);
}));

//# sourceMappingURL=app.db.boiler_plant.feedwater.events.js.map
