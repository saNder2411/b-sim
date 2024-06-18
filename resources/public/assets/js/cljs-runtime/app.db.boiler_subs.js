goog.provide('app.db.boiler_subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler","boiler",1907528372),(function (p__50571,_){
var map__50573 = p__50571;
var map__50573__$1 = cljs.core.__destructure_map(map__50573);
var db = map__50573__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50573__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-init-settings","boiler-init-settings",411676225),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
return new cljs.core.Keyword(null,"init-settings","init-settings",737587005).cljs$core$IFn$_invoke$arity$1(boiler);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
return new cljs.core.Keyword(null,"water-level","water-level",-285016653).cljs$core$IFn$_invoke$arity$1(boiler);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372)], null),(function (boiler,_){
return new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775).cljs$core$IFn$_invoke$arity$1(boiler);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sludge-mass-max","sludge-mass-max",-2114675205),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-init-settings","boiler-init-settings",411676225)], null),(function (boiler_init_settings,_){
return new cljs.core.Keyword(null,"sludge-mass-max","sludge-mass-max",-2114675205).cljs$core$IFn$_invoke$arity$1(boiler_init_settings);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sludge-mass-%","sludge-mass-%",1882296776),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass-max","sludge-mass-max",-2114675205)], null),(function (p__50620,_){
var vec__50623 = p__50620;
var sludge_mass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50623,(0),null);
var sludge_mass_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50623,(1),null);
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
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-water-foam","show-water-foam",1225501325),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-pressure","prev-pressure",-888039001)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496)], null),(function (p__50638,_){
var vec__50639 = p__50638;
var pressure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50639,(0),null);
var prev_pressure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50639,(1),null);
var conductivity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50639,(2),null);
return ((((pressure - prev_pressure) < -0.027)) && ((conductivity > (2500))));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"boiler-show-toolbar-panel","boiler-show-toolbar-panel",1953728868),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"boiler");
}));

//# sourceMappingURL=app.db.boiler_subs.js.map
