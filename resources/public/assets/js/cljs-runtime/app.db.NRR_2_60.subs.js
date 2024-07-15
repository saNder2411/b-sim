goog.provide('app.db.NRR_2_60.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NRR-2-60","NRR-2-60",1501996277),(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connect","connect",1232828233),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60"], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"NRR-2-60-calibration","NRR-2-60-calibration",-134434179),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60","NRR-2-60",1501996277)], null),(function (p__33149,_){
var map__33150 = p__33149;
var map__33150__$1 = cljs.core.__destructure_map(map__33150);
var calibration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33150__$1,new cljs.core.Keyword(null,"calibration","calibration",1895019353));
var map__33152 = calibration;
var map__33152__$1 = cljs.core.__destructure_map(map__33152);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33152__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var cal_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33152__$1,new cljs.core.Keyword(null,"cal-p","cal-p",-565809412));
var next_real_high = app.db.utils.calc_real_high_point(new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(points),new cljs.core.Keyword(null,"next-value","next-value",-97485952).cljs$core$IFn$_invoke$arity$1(cal_p));
var next_high_by_boiler = (new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510).cljs$core$IFn$_invoke$arity$1(app.db.constants.LEVEL_CALIBRATION)) + (next_real_high * new cljs.core.Keyword(null,"%-in-digital-unit","%-in-digital-unit",638391343).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510).cljs$core$IFn$_invoke$arity$1(app.db.constants.LEVEL_CALIBRATION))));
return cljs.core.assoc_in(cljs.core.assoc_in(calibration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"next-real-high","next-real-high",-818938067)], null),next_real_high),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510),new cljs.core.Keyword(null,"next-high","next-high",1317668914)], null),next_high_by_boiler);
}));
refx.alpha.reg_sub("connect-NRR 2-60-calibration-boiler-view",new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-calibration","NRR-2-60-calibration",-134434179)], null),(function (calibration,_){
return cljs.core.select_keys(calibration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"NRR-2-60-show-toolbar","NRR-2-60-show-toolbar",-1378612021),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),(function (p__33154,_){
var vec__33156 = p__33154;
var current_hotspot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33156,(0),null);
var level_controller_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33156,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"level-controller")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"NRR 2-60")));
})], 0));

//# sourceMappingURL=app.db.NRR_2_60.subs.js.map
