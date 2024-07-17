goog.provide('app.db.boiler_plant.feedwater_valve.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),(function (p__36205,_){
var map__36224 = p__36205;
var map__36224__$1 = cljs.core.__destructure_map(map__36224);
var db = map__36224__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36224__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feedwater-valve-flow-rate-max-converted-value","feedwater-valve-flow-rate-max-converted-value",-1099033612),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912)], null),(function (feedwater_valve,_){
var map__36341 = new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309).cljs$core$IFn$_invoke$arity$1(feedwater_valve);
var map__36341__$1 = cljs.core.__destructure_map(map__36341);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36341__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36341__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__36353 = max_value;
var G__36353__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__36353)], 0))):G__36353);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__36353__$1], 0)));
} else {
return G__36353__$1;
}
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"feedwater-valve-show-toolbar-panel","feedwater-valve-show-toolbar-panel",1796498686),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-actuator-type","level-controller-actuator-type",991135900)], null),(function (p__36385,_){
var vec__36389 = p__36385;
var current_hotspot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36389,(0),null);
var level_controller_actuator_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36389,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"feedwater-valve")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_actuator_type,"ELECTRIC_VALVE")));
})], 0));

//# sourceMappingURL=app.db.boiler_plant.feedwater_valve.subs.js.map
