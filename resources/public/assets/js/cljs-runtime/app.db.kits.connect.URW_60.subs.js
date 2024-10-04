goog.provide('app.db.kits.connect.URW_60.subs');
refx.alpha.reg_sub(new cljs.core.Keyword(null,"URW-60","URW-60",-1572194368),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__36034,_){
var map__36040 = p__36034;
var map__36040__$1 = cljs.core.__destructure_map(map__36040);
var converter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36040__$1,new cljs.core.Keyword(null,"converter","converter",-34185411));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(converter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60"], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("URW-60","show-toolbar","URW-60/show-toolbar",-296045188),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("converter","controller-id","converter/controller-id",-813580551)], null),(function (p__36069,_){
var vec__36073 = p__36069;
var current_hotspot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073,(0),null);
var converter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"converter")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(converter_id,"URW 60")));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword("URW-60","node-id","URW-60/node-id",204317831),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URW-60","URW-60",-1572194368)], null),(function (p__36086,_){
var map__36088 = p__36086;
var map__36088__$1 = cljs.core.__destructure_map(map__36088);
var switches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36088__$1,new cljs.core.Keyword(null,"switches","switches",2013040888));
var switch_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(switches,(1));
var switch_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(switches,(2));
if(((cljs.core.not(switch_1)) && (cljs.core.not(switch_2)))){
return (41);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(switch_1);
if(and__5043__auto__){
return switch_2;
} else {
return and__5043__auto__;
}
})())){
return (46);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = switch_1;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(switch_2);
} else {
return and__5043__auto__;
}
})())){
return (61);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = switch_1;
if(cljs.core.truth_(and__5043__auto__)){
return switch_2;
} else {
return and__5043__auto__;
}
})())){
return (66);
} else {
return (41);

}
}
}
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword("URW-60","group","URW-60/group",-1862154707),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URW-60","node-id","URW-60/node-id",204317831)], null),(function (node_id,_){
var groups_bi_node_id = new cljs.core.PersistentArrayMap(null, 4, [(41),(1),(46),(2),(61),(3),(66),(4)], null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups_bi_node_id,node_id);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("URW-60","baud-rate","URW-60/baud-rate",-517840178),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URW-60","URW-60",-1572194368)], null),(function (p__36103,_){
var map__36105 = p__36103;
var map__36105__$1 = cljs.core.__destructure_map(map__36105);
var switches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36105__$1,new cljs.core.Keyword(null,"switches","switches",2013040888));
var switch_3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(switches,(3));
if(cljs.core.truth_(switch_3)){
return (250);
} else {
return (50);
}
}));

//# sourceMappingURL=app.db.kits.connect.URW_60.subs.js.map
