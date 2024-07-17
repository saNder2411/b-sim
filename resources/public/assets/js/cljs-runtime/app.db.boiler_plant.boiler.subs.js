goog.provide('app.db.boiler_plant.boiler.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler","boiler",1907528372),(function (p__27732,_){
var map__27733 = p__27732;
var map__27733__$1 = cljs.core.__destructure_map(map__27733);
var db = map__27733__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27733__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-init-sim-output-pressure-converted-value","boiler-init-sim-output-pressure-converted-value",362703093),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
var unit = new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(boiler));
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841).cljs$core$IFn$_invoke$arity$1(boiler)));
var G__27786 = value;
var G__27786__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__27786 * 14.5037738)):G__27786);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__27786__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-pressure-converted-value","boiler-pressure-converted-value",948186435),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
var map__27803 = new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(boiler);
var map__27803__$1 = cljs.core.__destructure_map(map__27803);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27803__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27803__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__27822 = value;
var G__27822__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__27822 * 14.5037738)):G__27822);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__27822__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-conductivity-converted-value","boiler-conductivity-converted-value",1200630234),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
var map__27836 = new cljs.core.Keyword(null,"conductivity","conductivity",-431850496).cljs$core$IFn$_invoke$arity$1(boiler);
var map__27836__$1 = cljs.core.__destructure_map(map__27836);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27836__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27836__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__27843 = value;
var G__27843__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm"))?Math.round((G__27843 * 0.5)):G__27843);
return Math.round(G__27843__$1);

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-init-sim-output-conductivity-converted-value","boiler-init-sim-output-conductivity-converted-value",-712351185),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
var unit = new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"conductivity","conductivity",-431850496).cljs$core$IFn$_invoke$arity$1(boiler));
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"conductivity","conductivity",-431850496).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841).cljs$core$IFn$_invoke$arity$1(boiler)));
var G__27876 = value;
var G__27876__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm"))?Math.round((G__27876 * 0.5)):G__27876);
return Math.round(G__27876__$1);

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sludge-mass-%","sludge-mass-%",1882296776),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (p__27890,_){
var map__27892 = p__27890;
var map__27892__$1 = cljs.core.__destructure_map(map__27892);
var sludge_mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27892__$1,new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775));
var map__27896 = sludge_mass;
var map__27896__$1 = cljs.core.__destructure_map(map__27896);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27896__$1,new cljs.core.Keyword(null,"value","value",305978217));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27896__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var value__PERCENT_ = ((100) * (value / max_value));
if((value__PERCENT_ < (0))){
return (0);
} else {
return value__PERCENT_;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sludge-svg-height","sludge-svg-height",757790289),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass-%","sludge-mass-%",1882296776)], null),(function (sludge_mass__PERCENT_,_){
var max_svg_height = 20.587;
return ((max_svg_height / (100)) * sludge_mass__PERCENT_);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"show-water-foam","show-water-foam",1225501325),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (p__27909,_){
var map__27910 = p__27909;
var map__27910__$1 = cljs.core.__destructure_map(map__27910);
var pressure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27910__$1,new cljs.core.Keyword(null,"pressure","pressure",505343747));
var conductivity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27910__$1,new cljs.core.Keyword(null,"conductivity","conductivity",-431850496));
return ((((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(pressure) - new cljs.core.Keyword(null,"prev-value","prev-value",-1627897048).cljs$core$IFn$_invoke$arity$1(pressure)) < -0.027)) && ((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(conductivity) > (2500))));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-show-toolbar-panel","boiler-show-toolbar-panel",1953728868),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"boiler");
}));

//# sourceMappingURL=app.db.boiler_plant.boiler.subs.js.map
