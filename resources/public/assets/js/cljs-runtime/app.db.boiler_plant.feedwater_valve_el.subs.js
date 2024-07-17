goog.provide('app.db.boiler_plant.feedwater_valve_el.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910),(function (p__38444,_){
var map__38445 = p__38444;
var map__38445__$1 = cljs.core.__destructure_map(map__38445);
var db = map__38445__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38445__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feedwater-valve-el-flow-rate-max-converted-value","feedwater-valve-el-flow-rate-max-converted-value",-171429588),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910)], null),(function (p__38447,_){
var map__38449 = p__38447;
var map__38449__$1 = cljs.core.__destructure_map(map__38449);
var flow_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38449__$1,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309));
var map__38451 = flow_rate;
var map__38451__$1 = cljs.core.__destructure_map(map__38451);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38451__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38451__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__38453 = max_value;
var G__38453__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__38453)], 0))):G__38453);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__38453__$1], 0)));
} else {
return G__38453__$1;
}
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"feedwater-valve-el-show-toolbar-panel","feedwater-valve-el-show-toolbar-panel",-1174572661),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-actuator-type","level-controller-actuator-type",991135900)], null),(function (p__38459,_){
var vec__38463 = p__38459;
var current_hotspot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38463,(0),null);
var level_controller_actuator_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38463,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"feedwater-valve")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_actuator_type,new cljs.core.Keyword(null,"feedwater-valve-el","feedwater-valve-el",-946567910))));
})], 0));

//# sourceMappingURL=app.db.boiler_plant.feedwater_valve_el.subs.js.map
