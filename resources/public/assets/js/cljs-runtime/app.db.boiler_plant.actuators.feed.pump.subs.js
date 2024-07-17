goog.provide('app.db.boiler_plant.actuators.feed.pump.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-pump","feed-pump",-1276916627),(function (p__28107,_){
var map__28108 = p__28107;
var map__28108__$1 = cljs.core.__destructure_map(map__28108);
var db = map__28108__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28108__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feed-pump-flow-rate-max-converted-value","feed-pump-flow-rate-max-converted-value",1376840154),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feed-pump","feed-pump",-1276916627)], null),(function (p__28109,_){
var map__28110 = p__28109;
var map__28110__$1 = cljs.core.__destructure_map(map__28110);
var flow_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28110__$1,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309));
var map__28111 = flow_rate;
var map__28111__$1 = cljs.core.__destructure_map(map__28111);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28111__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28111__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__28116 = max_value;
var G__28116__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__28116)], 0))):G__28116);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__28116__$1], 0)));
} else {
return G__28116__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feed-pump-show-toolbar-panel","feed-pump-show-toolbar-panel",595897436),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"feed-pump");
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pump.subs.js.map
