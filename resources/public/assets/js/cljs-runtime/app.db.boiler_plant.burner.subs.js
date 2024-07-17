goog.provide('app.db.boiler_plant.burner.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner","burner",-712918379),(function (p__27721,_){
var map__27722 = p__27721;
var map__27722__$1 = cljs.core.__destructure_map(map__27722);
var db = map__27722__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27722__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-pressure-converted-value-on","burner-pressure-converted-value-on",646734526),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__27764 = new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(burner);
var map__27764__$1 = cljs.core.__destructure_map(map__27764);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27764__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27764__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__27770 = new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(value);
var G__27770__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__27770 * 14.5037738)):G__27770);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__27770__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-pressure-converted-value-off","burner-pressure-converted-value-off",-558773916),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__27800 = new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(burner);
var map__27800__$1 = cljs.core.__destructure_map(map__27800);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27800__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27800__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__27809 = new cljs.core.Keyword(null,"off","off",606440789).cljs$core$IFn$_invoke$arity$1(value);
var G__27809__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__27809 * 14.5037738)):G__27809);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__27809__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-power-max-converted-value","burner-power-max-converted-value",255123063),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__27827 = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(burner);
var map__27827__$1 = cljs.core.__destructure_map(map__27827);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27827__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27827__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__27835 = max_value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__27835 * 0.001);
} else {
return G__27835;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-power-converted-value","burner-power-converted-value",-927051365),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__27853 = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(burner);
var map__27853__$1 = cljs.core.__destructure_map(map__27853);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27853__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27853__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__27858 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__27858 * 0.001);
} else {
return G__27858;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-fuel-consumption-coeff-converted-value","burner-fuel-consumption-coeff-converted-value",86432573),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__27867 = new cljs.core.Keyword(null,"coeff","coeff",-914800710).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586).cljs$core$IFn$_invoke$arity$1(burner));
var map__27867__$1 = cljs.core.__destructure_map(map__27867);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27867__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27867__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__27872 = value;
var G__27872__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((3600) * G__27872)], 0))):G__27872);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__27872__$1], 0)));
} else {
return G__27872__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-show-toolbar-panel","burner-show-toolbar-panel",-923534479),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"burner");
}));

//# sourceMappingURL=app.db.boiler_plant.burner.subs.js.map
