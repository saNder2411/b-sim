goog.provide('app.db.boiler_plant.actuators.blowdown.continuous_valve.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),(function (p__40743,_){
var map__40752 = p__40743;
var map__40752__$1 = cljs.core.__destructure_map(map__40752);
var db = map__40752__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40752__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("continuous-valve","flow-rate-converted-max-value","continuous-valve/flow-rate-converted-max-value",-1083840441),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611)], null),(function (continuous_valve,_){
var map__40758 = new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309).cljs$core$IFn$_invoke$arity$1(continuous_valve);
var map__40758__$1 = cljs.core.__destructure_map(map__40758);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40758__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40758__$1,new cljs.core.Keyword(null,"max","max",61366548));
var G__40763 = max;
var G__40763__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__40763)], 0))):G__40763);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40763__$1], 0)));
} else {
return G__40763__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword("continuous-valve","show-toolbar-panel","continuous-valve/show-toolbar-panel",2116068164),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"continuous-valve");
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.blowdown.continuous_valve.subs.js.map
