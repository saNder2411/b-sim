goog.provide('app.db.boiler_plant.burner.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner","burner",-712918379),(function (p__40744,_){
var map__40747 = p__40744;
var map__40747__$1 = cljs.core.__destructure_map(map__40747);
var db = map__40747__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40747__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("burner","pressure-converted-value-on","burner/pressure-converted-value-on",22829571),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__40754 = new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(burner);
var map__40754__$1 = cljs.core.__destructure_map(map__40754);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40754__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40754__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__40760 = new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(value);
var G__40760__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__40760 * 14.5037738)):G__40760);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40760__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword("burner","pressure-converted-value-off","burner/pressure-converted-value-off",-1463727669),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__40773 = new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(burner);
var map__40773__$1 = cljs.core.__destructure_map(map__40773);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40773__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40773__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__40775 = new cljs.core.Keyword(null,"off","off",606440789).cljs$core$IFn$_invoke$arity$1(value);
var G__40775__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__40775 * 14.5037738)):G__40775);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40775__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword("burner","power-max-converted-value","burner/power-max-converted-value",1674333359),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__40786 = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(burner);
var map__40786__$1 = cljs.core.__destructure_map(map__40786);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40786__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40786__$1,new cljs.core.Keyword(null,"max","max",61366548));
var G__40787 = max;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__40787 * 0.001);
} else {
return G__40787;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword("burner","power-converted-value","burner/power-converted-value",-789982656),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__40794 = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(burner);
var map__40794__$1 = cljs.core.__destructure_map(map__40794);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40794__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40794__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__40797 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__40797 * 0.001);
} else {
return G__40797;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword("burner","fuel-consumption-coeff-converted-value","burner/fuel-consumption-coeff-converted-value",-1231090231),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
var map__40801 = new cljs.core.Keyword(null,"coeff","coeff",-914800710).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586).cljs$core$IFn$_invoke$arity$1(burner));
var map__40801__$1 = cljs.core.__destructure_map(map__40801);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40801__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40801__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__40802 = value;
var G__40802__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((3600) * G__40802)], 0))):G__40802);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40802__$1], 0)));
} else {
return G__40802__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword("burner","show-toolbar-panel","burner/show-toolbar-panel",-1549591378),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"burner");
}));

//# sourceMappingURL=app.db.boiler_plant.burner.subs.js.map
