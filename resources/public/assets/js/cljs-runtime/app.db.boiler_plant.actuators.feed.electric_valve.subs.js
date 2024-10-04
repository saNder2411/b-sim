goog.provide('app.db.boiler_plant.actuators.feed.electric_valve.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-electric-valve","feed-electric-valve",-1147515949),(function (p__40742,_){
var map__40748 = p__40742;
var map__40748__$1 = cljs.core.__destructure_map(map__40748);
var db = map__40748__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40748__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("feed-electric-valve","flow-rate-converted-value-max","feed-electric-valve/flow-rate-converted-value-max",-119337462),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feed-electric-valve","feed-electric-valve",-1147515949)], null),(function (p__40755,_){
var map__40757 = p__40755;
var map__40757__$1 = cljs.core.__destructure_map(map__40757);
var flow_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40757__$1,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309));
var map__40762 = flow_rate;
var map__40762__$1 = cljs.core.__destructure_map(map__40762);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40762__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40762__$1,new cljs.core.Keyword(null,"max","max",61366548));
var G__40765 = max;
var G__40765__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__40765)], 0))):G__40765);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40765__$1], 0)));
} else {
return G__40765__$1;
}
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("feed-electric-valve","show-toolbar-panel","feed-electric-valve/show-toolbar-panel",-1179755807),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-level-controller","actuator-type","current-level-controller/actuator-type",-1259504431)], null),(function (p__40776,_){
var vec__40777 = p__40776;
var current_hotspot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40777,(0),null);
var actuator_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40777,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"feed-valve")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(actuator_type,new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077))));
})], 0));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.electric_valve.subs.js.map
