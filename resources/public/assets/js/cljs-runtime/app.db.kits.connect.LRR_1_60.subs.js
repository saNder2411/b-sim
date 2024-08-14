goog.provide('app.db.kits.connect.LRR_1_60.subs');
refx.alpha.reg_sub(new cljs.core.Keyword(null,"LRR-1-60","LRR-1-60",-1066321763),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__36990,_){
var map__36993 = p__36990;
var map__36993__$1 = cljs.core.__destructure_map(map__36993);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36993__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cond,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60"], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"LRR-1-60-show-toolbar","LRR-1-60-show-toolbar",897532328),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null),(function (p__37001,_){
var vec__37002 = p__37001;
var current_hotspot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37002,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37002,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"cond-controller")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,"LRR 1-60")));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"LRR-1-60-node-id","LRR-1-60-node-id",1569487987),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRR-1-60","LRR-1-60",-1066321763)], null),(function (p__37005,_){
var map__37006 = p__37005;
var map__37006__$1 = cljs.core.__destructure_map(map__37006);
var switches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37006__$1,new cljs.core.Keyword(null,"switches","switches",2013040888));
var switch_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(switches,(1));
var switch_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(switches,(2));
if(((cljs.core.not(switch_1)) && (cljs.core.not(switch_2)))){
return (50);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(switch_1);
if(and__5043__auto__){
return switch_2;
} else {
return and__5043__auto__;
}
})())){
return (55);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = switch_1;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(switch_2);
} else {
return and__5043__auto__;
}
})())){
return (70);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = switch_1;
if(cljs.core.truth_(and__5043__auto__)){
return switch_2;
} else {
return and__5043__auto__;
}
})())){
return (75);
} else {
return (50);

}
}
}
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"LRR-1-60-group","LRR-1-60-group",-1043388111),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRR-1-60-node-id","LRR-1-60-node-id",1569487987)], null),(function (node_id,_){
var groups_bi_node_id = new cljs.core.PersistentArrayMap(null, 4, [(50),(1),(55),(2),(70),(3),(75),(4)], null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups_bi_node_id,node_id);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"LRR-1-60-baud-rate","LRR-1-60-baud-rate",-1279084417),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRR-1-60","LRR-1-60",-1066321763)], null),(function (p__37007,_){
var map__37008 = p__37007;
var map__37008__$1 = cljs.core.__destructure_map(map__37008);
var switches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37008__$1,new cljs.core.Keyword(null,"switches","switches",2013040888));
var switch_3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(switches,(3));
if(cljs.core.truth_(switch_3)){
return (250);
} else {
return (50);
}
}));

//# sourceMappingURL=app.db.kits.connect.LRR_1_60.subs.js.map
