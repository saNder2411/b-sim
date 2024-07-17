goog.provide('app.db.boiler_plant.continuous_valve.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),(function (p__36200,_){
var map__36226 = p__36200;
var map__36226__$1 = cljs.core.__destructure_map(map__36226);
var db = map__36226__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36226__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"continuous-valve-flow-rate-max-converted-value","continuous-valve-flow-rate-max-converted-value",847366446),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611)], null),(function (continuous_valve,_){
var map__36315 = new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309).cljs$core$IFn$_invoke$arity$1(continuous_valve);
var map__36315__$1 = cljs.core.__destructure_map(map__36315);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36315__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36315__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__36329 = max_value;
var G__36329__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__36329)], 0))):G__36329);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__36329__$1], 0)));
} else {
return G__36329__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"continuous-valve-show-toolbar-panel","continuous-valve-show-toolbar-panel",-1191947348),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"continuous-valve");
}));

//# sourceMappingURL=app.db.boiler_plant.continuous_valve.subs.js.map
