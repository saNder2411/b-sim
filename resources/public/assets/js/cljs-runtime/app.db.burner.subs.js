goog.provide('app.db.burner.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner","burner",-712918379),(function (p__47256,_){
var map__47257 = p__47256;
var map__47257__$1 = cljs.core.__destructure_map(map__47257);
var db = map__47257__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47257__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner","burner",-712918379)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-status","burner-status",-2088741662),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(burner);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-settings","burner-settings",1062662198),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
return new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(burner);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-settings-view","burner-settings-view",-962368094),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-settings","burner-settings",1062662198)], null),(function (settings,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(settings);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-settings-pressure-converted-value-on","burner-settings-pressure-converted-value-on",2056202056),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-settings","burner-settings",1062662198)], null),(function (settings,_){
var map__47258 = new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(settings);
var map__47258__$1 = cljs.core.__destructure_map(map__47258);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47258__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47258__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__47259 = new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(value);
var G__47259__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__47259 * 14.5037738)):G__47259);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__47259__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-settings-pressure-converted-value-off","burner-settings-pressure-converted-value-off",943067971),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-settings","burner-settings",1062662198)], null),(function (settings,_){
var map__47260 = new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(settings);
var map__47260__$1 = cljs.core.__destructure_map(map__47260);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47260__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47260__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__47261 = new cljs.core.Keyword(null,"off","off",606440789).cljs$core$IFn$_invoke$arity$1(value);
var G__47261__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__47261 * 14.5037738)):G__47261);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__47261__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-settings-power-max-converted-value","burner-settings-power-max-converted-value",1915146318),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-settings","burner-settings",1062662198)], null),(function (settings,_){
var map__47262 = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(settings));
var map__47262__$1 = cljs.core.__destructure_map(map__47262);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47262__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47262__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__47263 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"MW")){
return (G__47263 * 0.001);
} else {
return G__47263;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-settings-fuel-consumption-coeff-converted-value","burner-settings-fuel-consumption-coeff-converted-value",-1047866955),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-settings","burner-settings",1062662198)], null),(function (settings,_){
var map__47264 = new cljs.core.Keyword(null,"coeff","coeff",-914800710).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586).cljs$core$IFn$_invoke$arity$1(settings));
var map__47264__$1 = cljs.core.__destructure_map(map__47264);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47264__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47264__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__47265 = value;
var G__47265__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*s"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((3600) * G__47265)], 0))):G__47265);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"nm\u00B3/kW*h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,3f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__47265__$1], 0)));
} else {
return G__47265__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-show-toolbar-panel","burner-show-toolbar-panel",-923534479),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"burner");
}));

//# sourceMappingURL=app.db.burner.subs.js.map
