goog.provide('app.db.boiler_plant.boiler.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler","boiler",1907528372),(function (p__40741,_){
var map__40749 = p__40741;
var map__40749__$1 = cljs.core.__destructure_map(map__40749);
var db = map__40749__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40749__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("boiler","init-sim-output-pressure-converted-value","boiler/init-sim-output-pressure-converted-value",-1123373723),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
var unit = new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(boiler));
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841).cljs$core$IFn$_invoke$arity$1(boiler)));
var G__40759 = value;
var G__40759__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__40759 * 14.5037738)):G__40759);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40759__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword("boiler","pressure-converted-value","boiler/pressure-converted-value",-1483474638),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
var map__40772 = new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(boiler);
var map__40772__$1 = cljs.core.__destructure_map(map__40772);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40772__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40772__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__40774 = value;
var G__40774__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__40774 * 14.5037738)):G__40774);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40774__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword("boiler","conductivity-converted-value","boiler/conductivity-converted-value",-582991846),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
var map__40788 = new cljs.core.Keyword(null,"conductivity","conductivity",-431850496).cljs$core$IFn$_invoke$arity$1(boiler);
var map__40788__$1 = cljs.core.__destructure_map(map__40788);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40788__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40788__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__40793 = value;
var G__40793__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm"))?Math.round((G__40793 * 0.5)):G__40793);
return Math.round(G__40793__$1);

}));
refx.alpha.reg_sub(new cljs.core.Keyword("boiler","init-sim-output-conductivity-converted-value","boiler/init-sim-output-conductivity-converted-value",479320578),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
var unit = new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"conductivity","conductivity",-431850496).cljs$core$IFn$_invoke$arity$1(boiler));
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"conductivity","conductivity",-431850496).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841).cljs$core$IFn$_invoke$arity$1(boiler)));
var G__40800 = value;
var G__40800__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm"))?Math.round((G__40800 * 0.5)):G__40800);
return Math.round(G__40800__$1);

}));
refx.alpha.reg_sub(new cljs.core.Keyword("boiler","sludge-mass-%","boiler/sludge-mass-%",1101663461),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (p__40805,_){
var map__40806 = p__40805;
var map__40806__$1 = cljs.core.__destructure_map(map__40806);
var sludge_mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40806__$1,new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775));
var map__40807 = sludge_mass;
var map__40807__$1 = cljs.core.__destructure_map(map__40807);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40807__$1,new cljs.core.Keyword(null,"value","value",305978217));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40807__$1,new cljs.core.Keyword(null,"max","max",61366548));
var value__PERCENT_ = ((100) * (value / max));
if((value__PERCENT_ < (0))){
return (0);
} else {
return value__PERCENT_;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword("boiler","sludge-svg-height","boiler/sludge-svg-height",-6135760),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boiler","sludge-mass-%","boiler/sludge-mass-%",1101663461)], null),(function (sludge_mass__PERCENT_,_){
var max_svg_height = 20.587;
return ((max_svg_height / (100)) * sludge_mass__PERCENT_);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("boiler","show-water-foam","boiler/show-water-foam",327430060),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (p__40812,_){
var map__40813 = p__40812;
var map__40813__$1 = cljs.core.__destructure_map(map__40813);
var pressure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40813__$1,new cljs.core.Keyword(null,"pressure","pressure",505343747));
var conductivity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40813__$1,new cljs.core.Keyword(null,"conductivity","conductivity",-431850496));
return ((((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(pressure) - new cljs.core.Keyword(null,"prev-value","prev-value",-1627897048).cljs$core$IFn$_invoke$arity$1(pressure)) < -0.027)) && ((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(conductivity) > (2500))));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("boiler","show-toolbar-panel","boiler/show-toolbar-panel",-1563791153),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"boiler");
}));

//# sourceMappingURL=app.db.boiler_plant.boiler.subs.js.map
