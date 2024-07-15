goog.provide('app.db.utils');
app.db.utils.calc_real_high_point = (function app$db$utils$calc_real_high_point(high_point,cal_p){
var value = ((high_point / cal_p) * (100));
if((value > new cljs.core.Keyword(null,"max-high","max-high",-836955776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(app.db.constants.LEVEL_CALIBRATION)))){
return new cljs.core.Keyword(null,"max-high","max-high",-836955776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(app.db.constants.LEVEL_CALIBRATION));
} else {
return value;
}
});

//# sourceMappingURL=app.db.utils.js.map
