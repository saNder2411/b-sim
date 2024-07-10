goog.provide('app.db.burner.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),(function (p__61243,p__61244){
var map__61247 = p__61243;
var map__61247__$1 = cljs.core.__destructure_map(map__61247);
var db = map__61247__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61247__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61252 = p__61244;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61252,(0),null);
var vec__61263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61252,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61263,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61263,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),(function (p__61272,p__61273){
var map__61282 = p__61272;
var map__61282__$1 = cljs.core.__destructure_map(map__61282);
var db = map__61282__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61282__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61283 = p__61273;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61283,(0),null);
var vec__61286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61283,(1),null);
var v_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61286,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61286,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__61291 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__61291 * 0.06894744825494);
} else {
return G__61291;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217),v_key], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),(function (p__61295,p__61296){
var map__61299 = p__61295;
var map__61299__$1 = cljs.core.__destructure_map(map__61299);
var db = map__61299__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61299__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61303 = p__61296;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61303,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61303,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__61307 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__61307 * (1000));
} else {
return G__61307;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),(function (p__61313,p__61314){
var map__61316 = p__61313;
var map__61316__$1 = cljs.core.__destructure_map(map__61316);
var db = map__61316__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61316__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61320 = p__61314;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61320,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61320,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__61323 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s")){
return (G__61323 * 2.7777777E-4);
} else {
return G__61323;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724),(function (p__61325,_){
var map__61326 = p__61325;
var map__61326__$1 = cljs.core.__destructure_map(map__61326);
var db = map__61326__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61326__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__61333 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__61333__$1 = cljs.core.__destructure_map(map__61333);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61333__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.merge,status),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801),(function (p__61335,_){
var map__61336 = p__61335;
var map__61336__$1 = cljs.core.__destructure_map(map__61336);
var db = map__61336__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61336__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BURNER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379)], null),default_values);
}));

//# sourceMappingURL=app.db.burner.events.js.map
