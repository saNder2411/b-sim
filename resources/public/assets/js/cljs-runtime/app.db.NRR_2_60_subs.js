goog.provide('app.db.NRR_2_60_subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"NRR-2-60","NRR-2-60",1501996277),(function (db,_){
return new cljs.core.Keyword(null,"NRR-2-60","NRR-2-60",1501996277).cljs$core$IFn$_invoke$arity$1(db);
}));
app.db.NRR_2_60_subs.max_high_point_by_cal_p = (32767);
app.db.NRR_2_60_subs.min_high_point_by_cal_p = 8191.75;
app.db.NRR_2_60_subs.min_level_by_boiler = 78.21877;
app.db.NRR_2_60_subs.max_level_by_boiler = 97.86859;
app.db.NRR_2_60_subs.max_range_by_boiler = 19.64982;
app.db.NRR_2_60_subs._PERCENT__in_digital_unit = 5.996832179E-4;
app.db.NRR_2_60_subs.calc_real_high_point = (function app$db$NRR_2_60_subs$calc_real_high_point(h_point_by_cal_p,cal_p){
var value = ((h_point_by_cal_p / cal_p) * (100));
if((value > app.db.NRR_2_60_subs.max_high_point_by_cal_p)){
return app.db.NRR_2_60_subs.max_high_point_by_cal_p;
} else {
return value;
}
});
refx.alpha.reg_sub(new cljs.core.Keyword(null,"NRR-2-60-calibration","NRR-2-60-calibration",-134434179),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60","NRR-2-60",1501996277)], null),(function (NRR_2_60,_){
var map__66353 = new cljs.core.Keyword(null,"calibration","calibration",1895019353).cljs$core$IFn$_invoke$arity$1(NRR_2_60);
var map__66353__$1 = cljs.core.__destructure_map(map__66353);
var calibration = map__66353__$1;
var high_point_by_cal_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66353__$1,new cljs.core.Keyword(null,"high-point-by-cal-p","high-point-by-cal-p",-1957616222));
var next_cal_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66353__$1,new cljs.core.Keyword(null,"next-cal-p","next-cal-p",1312212854));
var next_real_high_point = app.db.NRR_2_60_subs.calc_real_high_point(high_point_by_cal_p,next_cal_p);
var next_high_point_by_boiler = (app.db.NRR_2_60_subs.min_level_by_boiler + (next_real_high_point * app.db.NRR_2_60_subs._PERCENT__in_digital_unit));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(calibration,new cljs.core.Keyword(null,"next-real-high-point","next-real-high-point",600051673),next_real_high_point,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"next-high-point-by-boiler","next-high-point-by-boiler",-2082404481),next_high_point_by_boiler], 0));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"NRR-2-60-calibration-level-cal-view","NRR-2-60-calibration-level-cal-view",1904344003),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-calibration","NRR-2-60-calibration",-134434179)], null),(function (cal,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cal,new cljs.core.Keyword(null,"high-point-by-cal-p","high-point-by-cal-p",-1957616222),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cal-p","cal-p",-565809412),new cljs.core.Keyword(null,"opt-cal-p-from-modal","opt-cal-p-from-modal",1451782243),new cljs.core.Keyword(null,"low-point->probe-value","low-point->probe-value",-1750702120),new cljs.core.Keyword(null,"high-point-by-cal-p->probe-value","high-point-by-cal-p->probe-value",1872385408),new cljs.core.Keyword(null,"cal-p->probe-value","cal-p->probe-value",-263861147),new cljs.core.Keyword(null,"next-cal-p","next-cal-p",1312212854)], 0));
}));

//# sourceMappingURL=app.db.NRR_2_60_subs.js.map
