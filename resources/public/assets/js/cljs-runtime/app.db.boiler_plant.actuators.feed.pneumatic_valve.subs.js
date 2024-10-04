goog.provide('app.db.boiler_plant.actuators.feed.pneumatic_valve.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-pneumatic-valve","feed-pneumatic-valve",-2138713111),(function (p__40745,_){
var map__40751 = p__40745;
var map__40751__$1 = cljs.core.__destructure_map(map__40751);
var db = map__40751__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40751__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("feed-pneumatic-valve","flow-rate-converted-max-value","feed-pneumatic-valve/flow-rate-converted-max-value",994222453),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feed-pneumatic-valve","feed-pneumatic-valve",-2138713111)], null),(function (p__40766,_){
var map__40767 = p__40766;
var map__40767__$1 = cljs.core.__destructure_map(map__40767);
var flow_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40767__$1,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309));
var map__40769 = flow_rate;
var map__40769__$1 = cljs.core.__destructure_map(map__40769);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40769__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40769__$1,new cljs.core.Keyword(null,"max","max",61366548));
var G__40771 = max;
var G__40771__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__40771)], 0))):G__40771);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40771__$1], 0)));
} else {
return G__40771__$1;
}
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("feed-pneumatic-valve","show-toolbar-panel","feed-pneumatic-valve/show-toolbar-panel",-1581424558),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-level-controller","actuator-type","current-level-controller/actuator-type",-1259504431)], null),(function (p__40781,_){
var vec__40783 = p__40781;
var current_hotspot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40783,(0),null);
var actuator_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40783,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"feed-valve")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(actuator_type,new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633))));
})], 0));

//# sourceMappingURL=app.db.boiler_plant.actuators.feed.pneumatic_valve.subs.js.map
