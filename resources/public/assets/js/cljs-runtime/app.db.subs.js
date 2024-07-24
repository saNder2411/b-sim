goog.provide('app.db.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"screen","screen",1990059748),(function (db,_){
return new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"screen-w","screen-w",462794367),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748)], null),(function (screen,_){
return new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(screen);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"screen-h","screen-h",624845276),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748)], null),(function (screen,_){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(screen);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748)], null),(function (screen,_){
return new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029).cljs$core$IFn$_invoke$arity$1(screen);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user","user",1532431356),(function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"user-full-name","user-full-name",-2030076885),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),(function (p__42340,_){
var map__42341 = p__42340;
var map__42341__$1 = cljs.core.__destructure_map(map__42341);
var firstname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42341__$1,new cljs.core.Keyword(null,"firstname","firstname",1659984849));
var lastname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42341__$1,new cljs.core.Keyword(null,"lastname","lastname",-265181465));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(firstname)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lastname)].join('');
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kit","kit",-1785767367),(function (db,_){
return new cljs.core.Keyword(null,"kit","kit",-1785767367).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kit-data","kit-data",210358620),(function (p__42342,_){
var map__42343 = p__42342;
var map__42343__$1 = cljs.core.__destructure_map(map__42343);
var db = map__42343__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42343__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,kit);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (kit_data,p__42344){
var vec__42345 = p__42344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42345,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42345,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kit_data,path);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sim","sim",-1444922721),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42348,_){
var map__42349 = p__42348;
var map__42349__$1 = cljs.core.__destructure_map(map__42349);
var sim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42349__$1,new cljs.core.Keyword(null,"sim","sim",-1444922721));
return sim;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"modal-info","modal-info",1282904358),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42350,_){
var map__42351 = p__42350;
var map__42351__$1 = cljs.core.__destructure_map(map__42351);
var modal_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42351__$1,new cljs.core.Keyword(null,"modal-info","modal-info",1282904358));
return modal_info;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"modal-info-show","modal-info-show",-922250939),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),(function (p__42352,_){
var map__42353 = p__42352;
var map__42353__$1 = cljs.core.__destructure_map(map__42353);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42353__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42353__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return (((!(cljs.core.empty_QMARK_(title)))) || ((!(cljs.core.empty_QMARK_(text)))));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"notifications","notifications",1685638001),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42354,_){
var map__42355 = p__42354;
var map__42355__$1 = cljs.core.__destructure_map(map__42355);
var notifications = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42355__$1,new cljs.core.Keyword(null,"notifications","notifications",1685638001));
return notifications;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42356,_){
var map__42357 = p__42356;
var map__42357__$1 = cljs.core.__destructure_map(map__42357);
var hotspots = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42357__$1,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410));
return hotspots;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hotspots","hotspots",2078718410)], null),(function (p__42358,_){
var map__42359 = p__42358;
var map__42359__$1 = cljs.core.__destructure_map(map__42359);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42359__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
return highlight;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hotspots","hotspots",2078718410)], null),(function (p__42360,_){
var map__42361 = p__42360;
var map__42361__$1 = cljs.core.__destructure_map(map__42361);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42361__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
return current;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42362,_){
var map__42363 = p__42362;
var map__42363__$1 = cljs.core.__destructure_map(map__42363);
var general_settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42363__$1,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710));
return general_settings;
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),(function (p__42364,_){
var vec__42365 = p__42364;
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42365,(0),null);
var general_settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42365,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"intended-use","intended-use",2081554370).cljs$core$IFn$_invoke$arity$1(general_settings),"demonstration")));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"steam-value","steam-value",685706720),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),(function (p__42368,_){
var map__42369 = p__42368;
var map__42369__$1 = cljs.core.__destructure_map(map__42369);
var steam = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42369__$1,new cljs.core.Keyword(null,"steam","steam",2010684664));
var map__42370 = steam;
var map__42370__$1 = cljs.core.__destructure_map(map__42370);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42370__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42370__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__42371 = value;
var G__42371__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__42371)], 0))):G__42371);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__42371__$1], 0)));
} else {
return G__42371__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"steam-max-value","steam-max-value",-386447548),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),(function (p__42372,_){
var map__42373 = p__42372;
var map__42373__$1 = cljs.core.__destructure_map(map__42373);
var steam = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42373__$1,new cljs.core.Keyword(null,"steam","steam",2010684664));
var map__42374 = steam;
var map__42374__$1 = cljs.core.__destructure_map(map__42374);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42374__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42374__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__42375 = max_value;
var G__42375__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__42375)], 0))):G__42375);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__42375__$1], 0)));
} else {
return G__42375__$1;
}
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"steam-%","steam-%",259510548),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-value","steam-value",685706720)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-max-value","steam-max-value",-386447548)], null),(function (p__42376,_){
var vec__42377 = p__42376;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42377,(0),null);
var max_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42377,(1),null);
var value__$1 = ((100) * (value / max_value));
if((value__$1 < (0))){
return (0);
} else {
return value__$1;
}
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42380,_){
var map__42381 = p__42380;
var map__42381__$1 = cljs.core.__destructure_map(map__42381);
var system_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42381__$1,new cljs.core.Keyword(null,"system-config","system-config",814819577));
return system_config;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__42382,_){
var map__42383 = p__42382;
var map__42383__$1 = cljs.core.__destructure_map(map__42383);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42383__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(low_limiter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"low-level-prop-I-id","low-level-prop-I-id",753898157),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__42384,_){
var map__42385 = p__42384;
var map__42385__$1 = cljs.core.__destructure_map(map__42385);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42385__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(low_limiter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"low-level-prop-II-id","low-level-prop-II-id",-1333563925),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__42386,_){
var map__42387 = p__42386;
var map__42387__$1 = cljs.core.__destructure_map(map__42387);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42387__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(low_limiter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(1)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"high-limiter-id","high-limiter-id",1297275918),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__42388,_){
var map__42389 = p__42388;
var map__42389__$1 = cljs.core.__destructure_map(map__42389);
var high_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42389__$1,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(high_limiter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"high-level-probe-id","high-level-probe-id",1801472763),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__42390,_){
var map__42391 = p__42390;
var map__42391__$1 = cljs.core.__destructure_map(map__42391);
var high_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42391__$1,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(high_limiter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__42392,_){
var map__42393 = p__42392;
var map__42393__$1 = cljs.core.__destructure_map(map__42393);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42393__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(cond);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"cond-probe-id","cond-probe-id",2056183324),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__42394,_){
var map__42395 = p__42394;
var map__42395__$1 = cljs.core.__destructure_map(map__42395);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42395__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cond,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__42396,_){
var map__42397 = p__42396;
var map__42397__$1 = cljs.core.__destructure_map(map__42397);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42397__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(level);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__42398,_){
var map__42399 = p__42398;
var map__42399__$1 = cljs.core.__destructure_map(map__42399);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42399__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"temperature-probe-id","temperature-probe-id",2062266207),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__42400,_){
var map__42401 = p__42400;
var map__42401__$1 = cljs.core.__destructure_map(map__42401);
var temperature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42401__$1,new cljs.core.Keyword(null,"temperature","temperature",899018429));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(temperature,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"converter-controller-id","converter-controller-id",247256759),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__42402,_){
var map__42403 = p__42402;
var map__42403__$1 = cljs.core.__destructure_map(map__42403);
var converter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42403__$1,new cljs.core.Keyword(null,"converter","converter",-34185411));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(converter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"low-limiter-controllers","low-limiter-controllers",705214366),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42404,_){
var map__42405 = p__42404;
var map__42405__$1 = cljs.core.__destructure_map(map__42405);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42405__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(low_limiter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"low-limiter-probes","low-limiter-probes",-911505493),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42406,_){
var map__42407 = p__42406;
var map__42407__$1 = cljs.core.__destructure_map(map__42407);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42407__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return new cljs.core.Keyword(null,"probes","probes",-541753203).cljs$core$IFn$_invoke$arity$1(low_limiter);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-low-limiter-data-by-path","current-low-limiter-data-by-path",-410595920),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter-controllers","low-limiter-controllers",705214366)], null),(function (p__42408,p__42409){
var vec__42410 = p__42408;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42410,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42410,(1),null);
var vec__42413 = p__42409;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42413,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42413,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"high-limiter-controllers","high-limiter-controllers",-2080559399),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42416,_){
var map__42417 = p__42416;
var map__42417__$1 = cljs.core.__destructure_map(map__42417);
var high_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42417__$1,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(high_limiter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"high-limiter-probes","high-limiter-probes",-980585397),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42418,_){
var map__42419 = p__42418;
var map__42419__$1 = cljs.core.__destructure_map(map__42419);
var high_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42419__$1,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404));
return new cljs.core.Keyword(null,"probes","probes",-541753203).cljs$core$IFn$_invoke$arity$1(high_limiter);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-high-limiter-data-by-path","current-high-limiter-data-by-path",-1991404189),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter-id","high-limiter-id",1297275918)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter-controllers","high-limiter-controllers",-2080559399)], null),(function (p__42420,p__42421){
var vec__42422 = p__42420;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42422,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42422,(1),null);
var vec__42425 = p__42421;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42425,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42425,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"cond-controllers","cond-controllers",-1897268180),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42428,_){
var map__42429 = p__42428;
var map__42429__$1 = cljs.core.__destructure_map(map__42429);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42429__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(cond);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"cond-probes","cond-probes",-2066276965),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42430,_){
var map__42431 = p__42430;
var map__42431__$1 = cljs.core.__destructure_map(map__42431);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42431__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return new cljs.core.Keyword(null,"probes","probes",-541753203).cljs$core$IFn$_invoke$arity$1(cond);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-cond-controller-data-by-path","current-cond-controller-data-by-path",2025109911),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controllers","cond-controllers",-1897268180)], null),(function (p__42432,p__42433){
var vec__42434 = p__42432;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42434,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42434,(1),null);
var vec__42437 = p__42433;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42437,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42437,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-cond-probe-data-by-path","current-cond-probe-data-by-path",565225146),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-probe-id","cond-probe-id",2056183324)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-probes","cond-probes",-2066276965)], null),(function (p__42440,p__42441){
var vec__42442 = p__42440;
var probe_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42442,(0),null);
var vec__42445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42442,(1),null);
var probe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42445,(0),null);
var vec__42448 = p__42441;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42448,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42448,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(probe,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [probe_id], null),path));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"level-controllers","level-controllers",-641639630),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42451,_){
var map__42452 = p__42451;
var map__42452__$1 = cljs.core.__destructure_map(map__42452);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42452__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(level);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"level-probes","level-probes",-1123520662),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42453,_){
var map__42454 = p__42453;
var map__42454__$1 = cljs.core.__destructure_map(map__42454);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42454__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.Keyword(null,"probes","probes",-541753203).cljs$core$IFn$_invoke$arity$1(level);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-level-controller-data-by-path","current-level-controller-data-by-path",1144191062),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controllers","level-controllers",-641639630)], null),(function (p__42455,p__42456){
var vec__42457 = p__42455;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42457,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42457,(1),null);
var vec__42460 = p__42456;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42460,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42460,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-level-controller-actuator-type","current-level-controller-actuator-type",-27918015),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controllers","level-controllers",-641639630)], null),(function (p__42463,_){
var vec__42464 = p__42463;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42464,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42464,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-feed-actuator-data-by-path","current-feed-actuator-data-by-path",-2035634407),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-controller-actuator-type","current-level-controller-actuator-type",-27918015)], null),(function (p__42467,p__42468){
var vec__42469 = p__42467;
var kit_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42469,(0),null);
var actuator_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42469,(1),null);
var vec__42472 = p__42468;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42472,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42472,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kit_data,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-level-probe-data-by-path","current-level-probe-data-by-path",-800493810),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-probes","level-probes",-1123520662)], null),(function (p__42475,p__42476){
var vec__42477 = p__42475;
var probe_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42477,(0),null);
var vec__42480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42477,(1),null);
var probe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42480,(0),null);
var vec__42483 = p__42476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42483,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42483,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(probe,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [probe_id], null),path));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"converter-controllers","converter-controllers",1982354192),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__42486,_){
var map__42487 = p__42486;
var map__42487__$1 = cljs.core.__destructure_map(map__42487);
var converter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42487__$1,new cljs.core.Keyword(null,"converter","converter",-34185411));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(converter);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-converter-data-by-path","current-converter-data-by-path",-227281443),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter-controller-id","converter-controller-id",247256759)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter-controllers","converter-controllers",1982354192)], null),(function (p__42488,p__42489){
var vec__42490 = p__42488;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42490,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42490,(1),null);
var vec__42493 = p__42489;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42493,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42493,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-low-limiter-hot-spot","show-low-limiter-hot-spot",-909061148),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__42496,_){
var vec__42497 = p__42496;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42497,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42497,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-high-limiter-hot-spot","show-high-limiter-hot-spot",361134266),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter-id","high-limiter-id",1297275918)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__42500,_){
var vec__42501 = p__42500;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42501,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42501,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__42504,_){
var vec__42505 = p__42504;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42505,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42505,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__42508,_){
var vec__42509 = p__42508;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42509,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42509,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"show-converter-hot-spot","show-converter-hot-spot",1180150542),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null),(function (id,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,"NRGT 26-2");
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"show-feed-valve-hot-spot","show-feed-valve-hot-spot",-1314233468),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-controller-actuator-type","current-level-controller-actuator-type",-27918015)], null),(function (actuator_type,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(actuator_type,new cljs.core.Keyword(null,"pump","pump",-453885150));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"show-feed-pump-hot-spot","show-feed-pump-hot-spot",-734197639),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-controller-actuator-type","current-level-controller-actuator-type",-27918015)], null),(function (actuator_type,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(actuator_type,new cljs.core.Keyword(null,"pump","pump",-453885150));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"show-toolbar","show-toolbar",-2078087801),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"none");
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"level-calibration-boiler-view-subs","level-calibration-boiler-view-subs",-1283277188),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),(function (p__42512,_){
var vec__42513 = p__42512;
var kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42513,(0),null);
var level_controller_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42513,(1),null);
var controller_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none"))?"NRR 2-60":level_controller_id);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kit),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(controller_id),"/calibration-boiler-view"].join('');
})], 0));

//# sourceMappingURL=app.db.subs.js.map
