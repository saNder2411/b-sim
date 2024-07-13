goog.provide('app.db.feedwater_pump.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),(function (p__82952,_){
var map__82953 = p__82952;
var map__82953__$1 = cljs.core.__destructure_map(map__82953);
var db = map__82953__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82953__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feedwater-pump-flow-rate-max-converted-value","feedwater-pump-flow-rate-max-converted-value",1308731877),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078)], null),(function (p__82955,_){
var map__82956 = p__82955;
var map__82956__$1 = cljs.core.__destructure_map(map__82956);
var flow_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82956__$1,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309));
var map__82957 = flow_rate;
var map__82957__$1 = cljs.core.__destructure_map(map__82957);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82957__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82957__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__82961 = max_value;
var G__82961__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__82961)], 0))):G__82961);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__82961__$1], 0)));
} else {
return G__82961__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feedwater-pump-show-toolbar-panel","feedwater-pump-show-toolbar-panel",-123747195),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"feedwater-pump");
}));

//# sourceMappingURL=app.db.feedwater_pump.subs.js.map
