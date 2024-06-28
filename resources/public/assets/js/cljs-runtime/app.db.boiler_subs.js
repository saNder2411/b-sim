goog.provide('app.db.boiler_subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler","boiler",1907528372),(function (p__44731,_){
var map__44732 = p__44731;
var map__44732__$1 = cljs.core.__destructure_map(map__44732);
var db = map__44732__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44732__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-settings","boiler-settings",1557861901),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
return new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(boiler);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-settings-form","boiler-settings-form",1143812780),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
return new cljs.core.Keyword(null,"settings-form","settings-form",1258607662).cljs$core$IFn$_invoke$arity$1(boiler);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-settings-form-view","boiler-settings-form-view",1860359796),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings-form","boiler-settings-form",1143812780)], null),(function (settings_form,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(settings_form);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-settings-form-pressure-converted-value","boiler-settings-form-pressure-converted-value",-518045220),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings-form","boiler-settings-form",1143812780)], null),(function (settings_form,_){
var map__44733 = new cljs.core.Keyword(null,"pressure","pressure",505343747).cljs$core$IFn$_invoke$arity$1(settings_form);
var map__44733__$1 = cljs.core.__destructure_map(map__44733);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44733__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44733__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__44734 = value;
var G__44734__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi"))?Math.round((G__44734 * 14.5037738)):G__44734);
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,1f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__44734__$1], 0)));

}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-settings-form-conductivity-converted-value","boiler-settings-form-conductivity-converted-value",1937546719),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings-form","boiler-settings-form",1143812780)], null),(function (settings_form,_){
var map__44735 = new cljs.core.Keyword(null,"conductivity","conductivity",-431850496).cljs$core$IFn$_invoke$arity$1(settings_form);
var map__44735__$1 = cljs.core.__destructure_map(map__44735);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44735__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44735__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__44736 = value;
var G__44736__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm"))?Math.round((G__44736 * 0.5)):G__44736);
return Math.round(G__44736__$1);

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
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sludge-mass-%","sludge-mass-%",1882296776),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass-max","sludge-mass-max",-2114675205)], null),(function (p__44737,_){
var vec__44738 = p__44737;
var sludge_mass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44738,(0),null);
var sludge_mass_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44738,(1),null);
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
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-water-foam","show-water-foam",1225501325),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-pressure","prev-pressure",-888039001)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496)], null),(function (p__44741,_){
var vec__44742 = p__44741;
var pressure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44742,(0),null);
var prev_pressure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44742,(1),null);
var conductivity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44742,(2),null);
return ((((pressure - prev_pressure) < -0.027)) && ((conductivity > (2500))));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-show-toolbar-panel","boiler-show-toolbar-panel",1953728868),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"boiler");
}));

//# sourceMappingURL=app.db.boiler_subs.js.map
