goog.provide('app.db.kits.connect.NRR_2_61.subs');
refx.alpha.reg_sub(new cljs.core.Keyword(null,"NRR-2-61","NRR-2-61",-2090522858),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__36923,_){
var map__36924 = p__36923;
var map__36924__$1 = cljs.core.__destructure_map(map__36924);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36924__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61"], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"NRR-2-61-calibration","NRR-2-61-calibration",-1329914427),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61","NRR-2-61",-2090522858)], null),(function (p__36927,_){
var map__36928 = p__36927;
var map__36928__$1 = cljs.core.__destructure_map(map__36928);
var calibration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36928__$1,new cljs.core.Keyword(null,"calibration","calibration",1895019353));
var map__36929 = calibration;
var map__36929__$1 = cljs.core.__destructure_map(map__36929);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36929__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var cal_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36929__$1,new cljs.core.Keyword(null,"cal-p","cal-p",-565809412));
var next_real_high = app.db.utils.calc_real_high_point(new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(points),new cljs.core.Keyword(null,"next-value","next-value",-97485952).cljs$core$IFn$_invoke$arity$1(cal_p));
var next_high_by_boiler = (new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510).cljs$core$IFn$_invoke$arity$1(app.db.constants.LEVEL_CALIBRATION)) + (next_real_high * new cljs.core.Keyword(null,"%-in-digital-unit","%-in-digital-unit",638391343).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510).cljs$core$IFn$_invoke$arity$1(app.db.constants.LEVEL_CALIBRATION))));
return cljs.core.assoc_in(cljs.core.assoc_in(calibration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"next-real-high","next-real-high",-818938067)], null),next_real_high),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510),new cljs.core.Keyword(null,"next-high","next-high",1317668914)], null),next_high_by_boiler);
}));
refx.alpha.reg_sub(":connect/NRR 2-61/calibration-boiler-view",new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-calibration","NRR-2-61-calibration",-1329914427)], null),(function (cal,_){
return cljs.core.select_keys(cal,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"NRR-2-61-show-toolbar","NRR-2-61-show-toolbar",-1427340718),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),(function (p__36933,_){
var vec__36934 = p__36933;
var current_hotspot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36934,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36934,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"level-controller")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,"NRR 2-61")));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"NRR-2-61-node-id","NRR-2-61-node-id",608874032),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61","NRR-2-61",-2090522858)], null),(function (p__36941,_){
var map__36942 = p__36941;
var map__36942__$1 = cljs.core.__destructure_map(map__36942);
var switches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36942__$1,new cljs.core.Keyword(null,"switches","switches",2013040888));
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
refx.alpha.reg_sub(new cljs.core.Keyword(null,"NRR-2-61-group","NRR-2-61-group",-291807693),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-node-id","NRR-2-61-node-id",608874032)], null),(function (node_id,_){
var groups_bi_node_id = new cljs.core.PersistentArrayMap(null, 4, [(40),(1),(45),(2),(60),(3),(65),(4)], null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups_bi_node_id,node_id);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"NRR-2-61-baud-rate","NRR-2-61-baud-rate",-467320050),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61","NRR-2-61",-2090522858)], null),(function (p__36945,_){
var map__36946 = p__36945;
var map__36946__$1 = cljs.core.__destructure_map(map__36946);
var switches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword(null,"switches","switches",2013040888));
var switch_3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(switches,(3));
if(cljs.core.truth_(switch_3)){
return (250);
} else {
return (50);
}
}));

//# sourceMappingURL=app.db.kits.connect.NRR_2_61.subs.js.map
