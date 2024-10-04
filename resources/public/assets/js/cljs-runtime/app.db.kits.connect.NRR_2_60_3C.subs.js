goog.provide('app.db.kits.connect.NRR_2_60_3C.subs');
refx.alpha.reg_sub(new cljs.core.Keyword(null,"NRR-2-60-3C","NRR-2-60-3C",-1248418825),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__31596,_){
var map__31597 = p__31596;
var map__31597__$1 = cljs.core.__destructure_map(map__31597);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31597__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C"], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("NRR-2-60-3C","calibration","NRR-2-60-3C/calibration",1852995874),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-3C","NRR-2-60-3C",-1248418825)], null),(function (p__31603,_){
var map__31604 = p__31603;
var map__31604__$1 = cljs.core.__destructure_map(map__31604);
var calibration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31604__$1,new cljs.core.Keyword(null,"calibration","calibration",1895019353));
var map__31606 = calibration;
var map__31606__$1 = cljs.core.__destructure_map(map__31606);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31606__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var cal_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31606__$1,new cljs.core.Keyword(null,"cal-p","cal-p",-565809412));
var next_real_high = app.db.utils.calc_real_high_point(new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(points),new cljs.core.Keyword(null,"next-value","next-value",-97485952).cljs$core$IFn$_invoke$arity$1(cal_p));
var next_high_by_boiler = (new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510).cljs$core$IFn$_invoke$arity$1(app.db.constants.LEVEL_CALIBRATION)) + (next_real_high * new cljs.core.Keyword(null,"%-in-digital-unit","%-in-digital-unit",638391343).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510).cljs$core$IFn$_invoke$arity$1(app.db.constants.LEVEL_CALIBRATION))));
return cljs.core.assoc_in(cljs.core.assoc_in(calibration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"next-real-high","next-real-high",-818938067)], null),next_real_high),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510),new cljs.core.Keyword(null,"next-high","next-high",1317668914)], null),next_high_by_boiler);
}));
refx.alpha.reg_sub(":connect/NRR 2-60 3C/calibration-boiler-view",new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60-3C","calibration","NRR-2-60-3C/calibration",1852995874)], null),(function (calibration,_){
return cljs.core.select_keys(calibration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("NRR-2-60-3C","show-toolbar","NRR-2-60-3C/show-toolbar",-2052774848),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("level","controller-id","level/controller-id",-864292571)], null),(function (p__31620,_){
var vec__31621 = p__31620;
var current_hotspot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31621,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31621,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"level-controller")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,"NRR 2-60 3C")));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword("NRR-2-60-3C","node-id","NRR-2-60-3C/node-id",819475819),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-3C","NRR-2-60-3C",-1248418825)], null),(function (p__31629,_){
var map__31632 = p__31629;
var map__31632__$1 = cljs.core.__destructure_map(map__31632);
var switches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31632__$1,new cljs.core.Keyword(null,"switches","switches",2013040888));
var switch_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(switches,(1));
var switch_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(switches,(2));
if(((cljs.core.not(switch_1)) && (cljs.core.not(switch_2)))){
return (40);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(switch_1);
if(and__5043__auto__){
return switch_2;
} else {
return and__5043__auto__;
}
})())){
return (45);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = switch_1;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(switch_2);
} else {
return and__5043__auto__;
}
})())){
return (60);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = switch_1;
if(cljs.core.truth_(and__5043__auto__)){
return switch_2;
} else {
return and__5043__auto__;
}
})())){
return (65);
} else {
return (40);

}
}
}
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword("NRR-2-60-3C","group","NRR-2-60-3C/group",609450217),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60-3C","node-id","NRR-2-60-3C/node-id",819475819)], null),(function (node_id,_){
var groups_bi_node_id = new cljs.core.PersistentArrayMap(null, 4, [(40),(1),(45),(2),(60),(3),(65),(4)], null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups_bi_node_id,node_id);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("NRR-2-60-3C","baud-rate","NRR-2-60-3C/baud-rate",-1877806454),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-3C","NRR-2-60-3C",-1248418825)], null),(function (p__31642,_){
var map__31643 = p__31642;
var map__31643__$1 = cljs.core.__destructure_map(map__31643);
var switches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31643__$1,new cljs.core.Keyword(null,"switches","switches",2013040888));
var switch_3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(switches,(3));
if(cljs.core.truth_(switch_3)){
return (250);
} else {
return (50);
}
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_60_3C.subs.js.map
