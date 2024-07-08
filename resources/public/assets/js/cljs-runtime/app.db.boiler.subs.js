goog.provide('app.db.boiler.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler","boiler",1907528372),(function (p__31816,_){
var map__31817 = p__31816;
var map__31817__$1 = cljs.core.__destructure_map(map__31817);
var db = map__31817__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31817__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-settings","boiler-settings",1557861901),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
return new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(boiler);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-settings-view","boiler-settings-view",1221821061),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings","boiler-settings",1557861901)], null),(function (settings,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(settings);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-settings-pressure-converted-value","boiler-settings-pressure-converted-value",1239412665),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings","boiler-settings",1557861901)], null),(function (settings,_){
var map__31818 = new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(settings);
var map__31818__$1 = cljs.core.__destructure_map(map__31818);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31818__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31818__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__31819 = value;
var G__31819__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__31819 * 14.5037738)):G__31819);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__31819__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-settings-conductivity-converted-value","boiler-settings-conductivity-converted-value",123551450),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings","boiler-settings",1557861901)], null),(function (settings,_){
var map__31820 = new cljs.core.Keyword(null,"conductivity","conductivity",-431850496).cljs$core$IFn$_invoke$arity$1(settings);
var map__31820__$1 = cljs.core.__destructure_map(map__31820);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31820__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31820__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__31821 = value;
var G__31821__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm"))?Math.round((G__31821 * 0.5)):G__31821);
return Math.round(G__31821__$1);

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
return new cljs.core.Keyword(null,"water-level","water-level",-285016653).cljs$core$IFn$_invoke$arity$1(boiler);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
return new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775).cljs$core$IFn$_invoke$arity$1(boiler);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sludge-mass-max","sludge-mass-max",-2114675205),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings","boiler-settings",1557861901)], null),(function (boiler_settings,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(boiler_settings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max","max",61366548)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sludge-mass-%","sludge-mass-%",1882296776),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass-max","sludge-mass-max",-2114675205)], null),(function (p__31822,_){
var vec__31823 = p__31822;
var sludge_mass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31823,(0),null);
var sludge_mass_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31823,(1),null);
var value = ((100) * (sludge_mass / sludge_mass_max));
if((value < (0))){
return (0);
} else {
return value;
}
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sludge-svg-height","sludge-svg-height",757790289),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass-%","sludge-mass-%",1882296776)], null),(function (sludge_mass__PERCENT_,_){
var max_svg_height = 20.587;
return ((max_svg_height / (100)) * sludge_mass__PERCENT_);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
return new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(boiler);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"prev-pressure","prev-pressure",-888039001),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
return new cljs.core.Keyword(null,"prev-pressure","prev-pressure",-888039001).cljs$core$IFn$_invoke$arity$1(boiler);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
return new cljs.core.Keyword(null,"conductivity","conductivity",-431850496).cljs$core$IFn$_invoke$arity$1(boiler);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-water-foam","show-water-foam",1225501325),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-pressure","prev-pressure",-888039001)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496)], null),(function (p__31826,_){
var vec__31827 = p__31826;
var pressure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31827,(0),null);
var prev_pressure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31827,(1),null);
var conductivity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31827,(2),null);
return ((((pressure - prev_pressure) < -0.027)) && ((conductivity > (2500))));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-show-toolbar-panel","boiler-show-toolbar-panel",1953728868),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"boiler");
}));

//# sourceMappingURL=app.db.boiler.subs.js.map
