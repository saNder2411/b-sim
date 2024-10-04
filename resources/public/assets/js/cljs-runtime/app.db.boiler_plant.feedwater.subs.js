goog.provide('app.db.boiler_plant.feedwater.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),(function (p__30535,_){
var map__30548 = p__30535;
var map__30548__$1 = cljs.core.__destructure_map(map__30548);
var db = map__30548__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30548__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("feedwater","conductivity-converted-value","feedwater/conductivity-converted-value",-855934586),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),(function (feedwater,_){
var map__30586 = new cljs.core.Keyword(null,"conductivity","conductivity",-431850496).cljs$core$IFn$_invoke$arity$1(feedwater);
var map__30586__$1 = cljs.core.__destructure_map(map__30586);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30586__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30586__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__30602 = value;
var G__30602__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm"))?Math.round((G__30602 * 0.5)):G__30602);
return Math.round(G__30602__$1);

}));
refx.alpha.reg_sub(new cljs.core.Keyword("feedwater","show-toolbar-panel","feedwater/show-toolbar-panel",-1458460629),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"feedwater");
}));

//# sourceMappingURL=app.db.boiler_plant.feedwater.subs.js.map
