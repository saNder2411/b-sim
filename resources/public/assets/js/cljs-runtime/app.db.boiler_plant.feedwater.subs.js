goog.provide('app.db.boiler_plant.feedwater.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),(function (p__28157,_){
var map__28158 = p__28157;
var map__28158__$1 = cljs.core.__destructure_map(map__28158);
var db = map__28158__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28158__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feedwater-conductivity-converted-value","feedwater-conductivity-converted-value",-429769709),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413)], null),(function (feedwater,_){
var map__28164 = new cljs.core.Keyword(null,"conductivity","conductivity",-431850496).cljs$core$IFn$_invoke$arity$1(feedwater);
var map__28164__$1 = cljs.core.__destructure_map(map__28164);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28164__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28164__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__28179 = value;
var G__28179__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm"))?Math.round((G__28179 * 0.5)):G__28179);
return Math.round(G__28179__$1);

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"feedwater-show-toolbar-panel","feedwater-show-toolbar-panel",1348116306),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"feedwater");
}));

//# sourceMappingURL=app.db.boiler_plant.feedwater.subs.js.map
