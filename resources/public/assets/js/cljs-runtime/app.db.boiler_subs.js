goog.provide('app.db.boiler_subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler","boiler",1907528372),(function (db,_){
return new cljs.core.Keyword(null,"boiler","boiler",1907528372).cljs$core$IFn$_invoke$arity$1(db);
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
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sludge-mass-%","sludge-mass-%",1882296776),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass-max","sludge-mass-max",-2114675205)], null),(function (p__43106,_){
var vec__43109 = p__43106;
var sludge_mass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43109,(0),null);
var sludge_mass_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43109,(1),null);
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
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-water-foam","show-water-foam",1225501325),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-pressure","prev-pressure",-888039001)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496)], null),(function (p__43119,_){
var vec__43120 = p__43119;
var pressure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43120,(0),null);
var prev_pressure = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43120,(1),null);
var conductivity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43120,(2),null);
return ((((pressure - prev_pressure) < -0.027)) && ((conductivity > (2500))));
})], 0));

//# sourceMappingURL=app.db.boiler_subs.js.map
