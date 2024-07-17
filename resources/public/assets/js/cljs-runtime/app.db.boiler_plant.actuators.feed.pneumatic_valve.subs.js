goog.provide('app.db.boiler_plant.actuators.feed.pneumatic_valve.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-pneumatic-valve","feed-pneumatic-valve",-2138713111),(function (p__34859,_){
var map__34860 = p__34859;
var map__34860__$1 = cljs.core.__destructure_map(map__34860);
var db = map__34860__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34860__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feed-pneumatic-valve-flow-rate-max-converted-value","feed-pneumatic-valve-flow-rate-max-converted-value",928733337),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feed-pneumatic-valve","feed-pneumatic-valve",-2138713111)], null),(function (p__34861,_){
var map__34862 = p__34861;
var map__34862__$1 = cljs.core.__destructure_map(map__34862);
var flow_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34862__$1,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309));
var map__34863 = flow_rate;
var map__34863__$1 = cljs.core.__destructure_map(map__34863);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34863__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34863__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__34864 = max_value;
var G__34864__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__34864)], 0))):G__34864);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__34864__$1], 0)));
} else {
return G__34864__$1;
}
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"feed-pneumatic-valve-show-toolbar-panel","feed-pneumatic-valve-show-toolbar-panel",-1436002987),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-controller-actuator-type","current-level-controller-actuator-type",-27918015)], null),(function (p__34867,_){
var vec__34868 = p__34867;
var current_hotspot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34868,(0),null);
var actuator_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34868,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"feed-valve")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(actuator_type,new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633))));
})], 0));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pneumatic_valve.subs.js.map
