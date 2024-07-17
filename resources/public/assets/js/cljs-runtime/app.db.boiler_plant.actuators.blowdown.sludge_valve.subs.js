goog.provide('app.db.boiler_plant.actuators.blowdown.sludge_valve.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),(function (p__27678,_){
var map__27683 = p__27678;
var map__27683__$1 = cljs.core.__destructure_map(map__27683);
var db = map__27683__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27683__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sludge-valve-init-countdown-converted-value","sludge-valve-init-countdown-converted-value",429137117),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null),(function (p__27763,_){
var map__27765 = p__27763;
var map__27765__$1 = cljs.core.__destructure_map(map__27765);
var init_sim_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27765__$1,new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841));
var map__27769 = new cljs.core.Keyword(null,"countdown","countdown",-1468813996).cljs$core$IFn$_invoke$arity$1(init_sim_output);
var map__27769__$1 = cljs.core.__destructure_map(map__27769);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27769__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27769__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__27773 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"m")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.01666666667 * G__27773)], 0)));
} else {
return G__27773;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sludge-valve-show-toolbar-panel","sludge-valve-show-toolbar-panel",-26377558),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"sludge-valve");
}));

//# sourceMappingURL=app.db.boiler_plant.actuators.blowdown.sludge_valve.subs.js.map
