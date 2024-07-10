goog.provide('app.db.burner.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner","burner",-712918379),(function (p__54251,_){
var map__54254 = p__54251;
var map__54254__$1 = cljs.core.__destructure_map(map__54254);
var db = map__54254__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54254__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner","burner",-712918379)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-pressure-converted-value-on","burner-pressure-converted-value-on",646734526),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__54269 = new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(burner);
var map__54269__$1 = cljs.core.__destructure_map(map__54269);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54269__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54269__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__54276 = new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(value);
var G__54276__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__54276 * 14.5037738)):G__54276);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__54276__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-pressure-converted-value-off","burner-pressure-converted-value-off",-558773916),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__54319 = new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(burner);
var map__54319__$1 = cljs.core.__destructure_map(map__54319);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54319__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54319__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__54330 = new cljs.core.Keyword(null,"off","off",606440789).cljs$core$IFn$_invoke$arity$1(value);
var G__54330__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__54330 * 14.5037738)):G__54330);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__54330__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-power-max-converted-value","burner-power-max-converted-value",255123063),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__54361 = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(burner);
var map__54361__$1 = cljs.core.__destructure_map(map__54361);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54361__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54361__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__54370 = max_value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__54370 * 0.001);
} else {
return G__54370;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-power-converted-value","burner-power-converted-value",-927051365),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__54389 = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(burner);
var map__54389__$1 = cljs.core.__destructure_map(map__54389);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54389__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54389__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__54395 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__54395 * 0.001);
} else {
return G__54395;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-fuel-consumption-coeff-converted-value","burner-fuel-consumption-coeff-converted-value",86432573),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__54417 = new cljs.core.Keyword(null,"coeff","coeff",-914800710).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586).cljs$core$IFn$_invoke$arity$1(burner));
var map__54417__$1 = cljs.core.__destructure_map(map__54417);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54417__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54417__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__54418 = value;
var G__54418__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((3600) * G__54418)], 0))):G__54418);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__54418__$1], 0)));
} else {
return G__54418__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-show-toolbar-panel","burner-show-toolbar-panel",-923534479),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"burner");
}));

//# sourceMappingURL=app.db.burner.subs.js.map
