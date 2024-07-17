goog.provide('app.db.boiler_plant.actuators.feed.electric_valve.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-electric-valve","feed-electric-valve",-1147515949),(function (p__27679,_){
var map__27686 = p__27679;
var map__27686__$1 = cljs.core.__destructure_map(map__27686);
var db = map__27686__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27686__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feed-electric-valve-flow-rate-max-converted-value","feed-electric-valve-flow-rate-max-converted-value",551544300),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feed-electric-valve","feed-electric-valve",-1147515949)], null),(function (p__27756,_){
var map__27761 = p__27756;
var map__27761__$1 = cljs.core.__destructure_map(map__27761);
var flow_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27761__$1,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309));
var map__27767 = flow_rate;
var map__27767__$1 = cljs.core.__destructure_map(map__27767);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__27771 = max_value;
var G__27771__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__27771)], 0))):G__27771);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__27771__$1], 0)));
} else {
return G__27771__$1;
}
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"feed-electric-valve-show-toolbar-panel","feed-electric-valve-show-toolbar-panel",-1092025103),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-controller-actuator-type","current-level-controller-actuator-type",-27918015)], null),(function (p__27838,_){
var vec__27844 = p__27838;
var current_hotspot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27844,(0),null);
var actuator_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27844,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"feed-valve")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(actuator_type,new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077))));
})], 0));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.electric_valve.subs.js.map
