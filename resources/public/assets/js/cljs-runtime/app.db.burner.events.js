goog.provide('app.db.burner.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),(function (p__82802,p__82803){
var map__82824 = p__82802;
var map__82824__$1 = cljs.core.__destructure_map(map__82824);
var db = map__82824__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82824__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__82825 = p__82803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82825,(0),null);
var vec__82828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82825,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82828,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82828,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),(function (p__82858,p__82859){
var map__82872 = p__82858;
var map__82872__$1 = cljs.core.__destructure_map(map__82872);
var db = map__82872__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82872__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__82873 = p__82859;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82873,(0),null);
var vec__82876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82873,(1),null);
var v_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82876,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82876,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__82888 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__82888 * 0.06894744825494);
} else {
return G__82888;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217),v_key], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),(function (p__82903,p__82904){
var map__82908 = p__82903;
var map__82908__$1 = cljs.core.__destructure_map(map__82908);
var db = map__82908__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82908__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__82909 = p__82904;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82909,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82909,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__82916 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__82916 * (1000));
} else {
return G__82916;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),(function (p__82924,p__82925){
var map__82926 = p__82924;
var map__82926__$1 = cljs.core.__destructure_map(map__82926);
var db = map__82926__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82926__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__82928 = p__82925;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82928,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82928,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__82933 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s")){
return (G__82933 * 2.7777777E-4);
} else {
return G__82933;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724),(function (p__82940,_){
var map__82941 = p__82940;
var map__82941__$1 = cljs.core.__destructure_map(map__82941);
var db = map__82941__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82941__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__82943 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__82943__$1 = cljs.core.__destructure_map(map__82943);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82943__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.merge,status),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801),(function (p__82946,_){
var map__82948 = p__82946;
var map__82948__$1 = cljs.core.__destructure_map(map__82948);
var db = map__82948__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82948__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BURNER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379)], null),default_values);
}));

//# sourceMappingURL=app.db.burner.events.js.map
