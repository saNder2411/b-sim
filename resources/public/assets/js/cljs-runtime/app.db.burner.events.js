goog.provide('app.db.burner.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),(function (p__27691,p__27692){
var map__27718 = p__27691;
var map__27718__$1 = cljs.core.__destructure_map(map__27718);
var db = map__27718__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27718__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__27725 = p__27692;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27725,(0),null);
var vec__27745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27725,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27745,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27745,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),(function (p__27793,p__27794){
var map__27806 = p__27793;
var map__27806__$1 = cljs.core.__destructure_map(map__27806);
var db = map__27806__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__27807 = p__27794;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27807,(0),null);
var vec__27814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27807,(1),null);
var v_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27814,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27814,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__27858 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__27858 * 0.06894744825494);
} else {
return G__27858;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217),v_key], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),(function (p__27877,p__27878){
var map__27891 = p__27877;
var map__27891__$1 = cljs.core.__destructure_map(map__27891);
var db = map__27891__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__27892 = p__27878;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27892,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27892,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__27900 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__27900 * (1000));
} else {
return G__27900;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),(function (p__27919,p__27920){
var map__27921 = p__27919;
var map__27921__$1 = cljs.core.__destructure_map(map__27921);
var db = map__27921__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27921__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__27922 = p__27920;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27922,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27922,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__27926 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s")){
return (G__27926 * 2.7777777E-4);
} else {
return G__27926;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724),(function (p__27940,_){
var map__27941 = p__27940;
var map__27941__$1 = cljs.core.__destructure_map(map__27941);
var db = map__27941__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27941__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__27942 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__27942__$1 = cljs.core.__destructure_map(map__27942);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27942__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.merge,status),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801),(function (p__27950,_){
var map__27951 = p__27950;
var map__27951__$1 = cljs.core.__destructure_map(map__27951);
var db = map__27951__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27951__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BURNER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379)], null),default_values);
}));

//# sourceMappingURL=app.db.burner.events.js.map
