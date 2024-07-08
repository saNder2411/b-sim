goog.provide('app.db.burner.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),(function (p__46928,p__46929){
var map__46931 = p__46928;
var map__46931__$1 = cljs.core.__destructure_map(map__46931);
var db = map__46931__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46931__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__46932 = p__46929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46932,(0),null);
var vec__46935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46932,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46935,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46935,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-settings-pressure-value","change-burner-settings-pressure-value",-781351115),(function (p__46942,p__46943){
var map__46946 = p__46942;
var map__46946__$1 = cljs.core.__destructure_map(map__46946);
var db = map__46946__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46946__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__46949 = p__46943;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46949,(0),null);
var vec__46952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46949,(1),null);
var v_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46952,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46952,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__46961 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__46961 * 0.06894744825494);
} else {
return G__46961;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217),v_key], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-settings-power-max-value","change-burner-settings-power-max-value",1222236293),(function (p__46968,p__46969){
var map__46970 = p__46968;
var map__46970__$1 = cljs.core.__destructure_map(map__46970);
var db = map__46970__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46970__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__46971 = p__46969;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46971,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46971,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__46977 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__46977 * (1000));
} else {
return G__46977;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-settings-fuel-consumption-coeff-value","change-burner-settings-fuel-consumption-coeff-value",-123664681),(function (p__46986,p__46987){
var map__46990 = p__46986;
var map__46990__$1 = cljs.core.__destructure_map(map__46990);
var db = map__46990__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46990__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__46991 = p__46987;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46991,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46991,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__47000 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s")){
return (G__47000 * 2.7777777E-4);
} else {
return G__47000;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724),(function (p__47006,_){
var map__47008 = p__47006;
var map__47008__$1 = cljs.core.__destructure_map(map__47008);
var db = map__47008__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47008__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__47010 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875)], null));
var map__47010__$1 = cljs.core.__destructure_map(map__47010);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47010__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47010__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(mode)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(status)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"view","view",1247994814)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801),(function (p__47015,_){
var map__47018 = p__47015;
var map__47018__$1 = cljs.core.__destructure_map(map__47018);
var db = map__47018__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47018__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_settings = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(app.db.defaults.BURNER),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875)], null),default_settings);
}));

//# sourceMappingURL=app.db.burner.events.js.map
