goog.provide('app.db.boiler_plant.actuators.feed.pump.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-pump","feed-pump",-1276916627),(function (p__40746,_){
var map__40750 = p__40746;
var map__40750__$1 = cljs.core.__destructure_map(map__40750);
var db = map__40750__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40750__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("feed-pump","flow-rate-converted-max-value","feed-pump/flow-rate-converted-max-value",755428430),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feed-pump","feed-pump",-1276916627)], null),(function (p__40753,_){
var map__40756 = p__40753;
var map__40756__$1 = cljs.core.__destructure_map(map__40756);
var flow_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40756__$1,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309));
var map__40761 = flow_rate;
var map__40761__$1 = cljs.core.__destructure_map(map__40761);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40761__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40761__$1,new cljs.core.Keyword(null,"max","max",61366548));
var G__40764 = max;
var G__40764__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__40764)], 0))):G__40764);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40764__$1], 0)));
} else {
return G__40764__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword("feed-pump","show-toolbar-panel","feed-pump/show-toolbar-panel",352694057),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"feed-pump");
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pump.subs.js.map
