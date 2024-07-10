goog.provide('app.db.burner.events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),(function (p__64112,p__64113){
var map__64120 = p__64112;
var map__64120__$1 = cljs.core.__destructure_map(map__64120);
var db = map__64120__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64120__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__64121 = p__64113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64121,(0),null);
var vec__64124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64121,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64124,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64124,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner","burner",-712918379)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),(function (p__64150,p__64151){
var map__64168 = p__64150;
var map__64168__$1 = cljs.core.__destructure_map(map__64168);
var db = map__64168__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64168__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__64169 = p__64151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64169,(0),null);
var vec__64172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64169,(1),null);
var v_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64172,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64172,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__64178 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__64178 * 0.06894744825494);
} else {
return G__64178;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217),v_key], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),(function (p__64185,p__64186){
var map__64192 = p__64185;
var map__64192__$1 = cljs.core.__destructure_map(map__64192);
var db = map__64192__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64192__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__64193 = p__64186;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64193,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64193,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__64197 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__64197 * (1000));
} else {
return G__64197;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),(function (p__64202,p__64203){
var map__64206 = p__64202;
var map__64206__$1 = cljs.core.__destructure_map(map__64206);
var db = map__64206__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64206__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__64207 = p__64203;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64207,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64207,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__64214 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s")){
return (G__64214 * 2.7777777E-4);
} else {
return G__64214;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724),(function (p__64216,_){
var map__64217 = p__64216;
var map__64217__$1 = cljs.core.__destructure_map(map__64217);
var db = map__64217__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64217__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var map__64220 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841)], null));
var map__64220__$1 = cljs.core.__destructure_map(map__64220);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64220__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.merge,status),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801),(function (p__64226,_){
var map__64227 = p__64226;
var map__64227__$1 = cljs.core.__destructure_map(map__64227);
var db = map__64227__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64227__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.BURNER,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038),true], null)], 0));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"burner","burner",-712918379)], null),default_values);
}));

//# sourceMappingURL=app.db.burner.events.js.map
