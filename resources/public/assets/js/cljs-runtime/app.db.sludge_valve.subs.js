goog.provide('app.db.sludge_valve.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),(function (p__64106,_){
var map__64107 = p__64106;
var map__64107__$1 = cljs.core.__destructure_map(map__64107);
var db = map__64107__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64107__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sludge-valve-init-countdown-converted-value","sludge-valve-init-countdown-converted-value",429137117),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924)], null),(function (p__64108,_){
var map__64109 = p__64108;
var map__64109__$1 = cljs.core.__destructure_map(map__64109);
var init_sim_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64109__$1,new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841));
var map__64110 = new cljs.core.Keyword(null,"countdown","countdown",-1468813996).cljs$core$IFn$_invoke$arity$1(init_sim_output);
var map__64110__$1 = cljs.core.__destructure_map(map__64110);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64110__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64110__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__64111 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"m")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.01666666667 * G__64111)], 0)));
} else {
return G__64111;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sludge-valve-show-toolbar-panel","sludge-valve-show-toolbar-panel",-26377558),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"sludge-valve");
}));

//# sourceMappingURL=app.db.sludge_valve.subs.js.map
