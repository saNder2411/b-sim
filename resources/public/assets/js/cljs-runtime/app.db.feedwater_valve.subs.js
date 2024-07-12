goog.provide('app.db.feedwater_valve.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),(function (p__69479,_){
var map__69480 = p__69479;
var map__69480__$1 = cljs.core.__destructure_map(map__69480);
var db = map__69480__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69480__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feedwater-valve-flow-rate-max-converted-value","feedwater-valve-flow-rate-max-converted-value",-1099033612),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912)], null),(function (feedwater_valve,_){
var map__69481 = new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309).cljs$core$IFn$_invoke$arity$1(feedwater_valve);
var map__69481__$1 = cljs.core.__destructure_map(map__69481);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69481__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69481__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__69482 = max_value;
var G__69482__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__69482)], 0))):G__69482);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__69482__$1], 0)));
} else {
return G__69482__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feedwater-valve-conductivity-converted-value","feedwater-valve-conductivity-converted-value",580424031),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912)], null),(function (feedwater_valve,_){
var map__69483 = new cljs.core.Keyword(null,"conductivity","conductivity",-431850496).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"feedwater","feedwater",-18185413).cljs$core$IFn$_invoke$arity$1(feedwater_valve));
var map__69483__$1 = cljs.core.__destructure_map(map__69483);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69483__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69483__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__69484 = value;
var G__69484__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm"))?Math.round((G__69484 * 0.5)):G__69484);
return Math.round(G__69484__$1);

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feedwater-valve-show-toolbar-panel","feedwater-valve-show-toolbar-panel",1796498686),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"feedwater-valve");
}));

//# sourceMappingURL=app.db.feedwater_valve.subs.js.map
