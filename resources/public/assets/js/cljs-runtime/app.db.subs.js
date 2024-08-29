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
refx.alpha.reg_sub(new cljs.core.Keyword(null,"user-full-name","user-full-name",-2030076885),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),(function (p__27734,_){
var map__27735 = p__27734;
var map__27735__$1 = cljs.core.__destructure_map(map__27735);
var firstname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27735__$1,new cljs.core.Keyword(null,"firstname","firstname",1659984849));
var lastname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27735__$1,new cljs.core.Keyword(null,"lastname","lastname",-265181465));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(firstname)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lastname)].join('');
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","connected","ws/connected",-169836913),(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"connected","connected",-169833045)], null)) === true;
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kit","kit",-1785767367),(function (db,_){
return new cljs.core.Keyword(null,"kit","kit",-1785767367).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kit-data","kit-data",210358620),(function (p__27736,_){
var map__27737 = p__27736;
var map__27737__$1 = cljs.core.__destructure_map(map__27737);
var db = map__27737__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27737__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,kit);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (kit_data,p__27738){
var vec__27739 = p__27738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27739,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27739,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kit_data,path);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sim","sim",-1444922721),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27742,_){
var map__27743 = p__27742;
var map__27743__$1 = cljs.core.__destructure_map(map__27743);
var sim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27743__$1,new cljs.core.Keyword(null,"sim","sim",-1444922721));
return sim;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"modal-info","modal-info",1282904358),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27744,_){
var map__27745 = p__27744;
var map__27745__$1 = cljs.core.__destructure_map(map__27745);
var modal_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27745__$1,new cljs.core.Keyword(null,"modal-info","modal-info",1282904358));
return modal_info;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"modal-info-show","modal-info-show",-922250939),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),(function (p__27746,_){
var map__27747 = p__27746;
var map__27747__$1 = cljs.core.__destructure_map(map__27747);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27747__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27747__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return (((!(cljs.core.empty_QMARK_(title)))) || ((!(cljs.core.empty_QMARK_(text)))));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"notifications","notifications",1685638001),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27749,_){
var map__27751 = p__27749;
var map__27751__$1 = cljs.core.__destructure_map(map__27751);
var notifications = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27751__$1,new cljs.core.Keyword(null,"notifications","notifications",1685638001));
return notifications;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27752,_){
var map__27753 = p__27752;
var map__27753__$1 = cljs.core.__destructure_map(map__27753);
var hotspots = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27753__$1,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410));
return hotspots;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hotspots","hotspots",2078718410)], null),(function (p__27754,_){
var map__27756 = p__27754;
var map__27756__$1 = cljs.core.__destructure_map(map__27756);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27756__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
return highlight;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hotspots","hotspots",2078718410)], null),(function (p__27758,_){
var map__27760 = p__27758;
var map__27760__$1 = cljs.core.__destructure_map(map__27760);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27760__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
return current;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27762,_){
var map__27763 = p__27762;
var map__27763__$1 = cljs.core.__destructure_map(map__27763);
var general_settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27763__$1,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710));
return general_settings;
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),(function (p__27772,_){
var vec__27774 = p__27772;
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27774,(0),null);
var general_settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27774,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stop")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"intended-use","intended-use",2081554370).cljs$core$IFn$_invoke$arity$1(general_settings),"demonstration")));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"steam-value","steam-value",685706720),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),(function (p__27786,_){
var map__27790 = p__27786;
var map__27790__$1 = cljs.core.__destructure_map(map__27790);
var steam = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27790__$1,new cljs.core.Keyword(null,"steam","steam",2010684664));
var map__27795 = steam;
var map__27795__$1 = cljs.core.__destructure_map(map__27795);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27795__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27795__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__27797 = value;
var G__27797__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__27797)], 0))):G__27797);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__27797__$1], 0)));
} else {
return G__27797__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"steam-max-value","steam-max-value",-386447548),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),(function (p__27807,_){
var map__27808 = p__27807;
var map__27808__$1 = cljs.core.__destructure_map(map__27808);
var steam = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27808__$1,new cljs.core.Keyword(null,"steam","steam",2010684664));
var map__27809 = steam;
var map__27809__$1 = cljs.core.__destructure_map(map__27809);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27809__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27809__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__27810 = max_value;
var G__27810__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__27810)], 0))):G__27810);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__27810__$1], 0)));
} else {
return G__27810__$1;
}
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"steam-%","steam-%",259510548),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-value","steam-value",685706720)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-max-value","steam-max-value",-386447548)], null),(function (p__27816,_){
var vec__27817 = p__27816;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27817,(0),null);
var max_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27817,(1),null);
var value__$1 = ((100) * (value / max_value));
if((value__$1 < (0))){
return (0);
} else {
return value__$1;
}
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27820,_){
var map__27821 = p__27820;
var map__27821__$1 = cljs.core.__destructure_map(map__27821);
var system_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27821__$1,new cljs.core.Keyword(null,"system-config","system-config",814819577));
return system_config;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__27823,_){
var map__27824 = p__27823;
var map__27824__$1 = cljs.core.__destructure_map(map__27824);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27824__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(low_limiter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"low-level-prop-I-id","low-level-prop-I-id",753898157),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__27827,_){
var map__27830 = p__27827;
var map__27830__$1 = cljs.core.__destructure_map(map__27830);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27830__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(low_limiter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"low-level-prop-II-id","low-level-prop-II-id",-1333563925),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__27833,_){
var map__27835 = p__27833;
var map__27835__$1 = cljs.core.__destructure_map(map__27835);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27835__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(low_limiter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(1)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"high-limiter-id","high-limiter-id",1297275918),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__27840,_){
var map__27841 = p__27840;
var map__27841__$1 = cljs.core.__destructure_map(map__27841);
var high_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27841__$1,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(high_limiter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"high-level-probe-id","high-level-probe-id",1801472763),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__27845,_){
var map__27846 = p__27845;
var map__27846__$1 = cljs.core.__destructure_map(map__27846);
var high_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27846__$1,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(high_limiter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__27849,_){
var map__27850 = p__27849;
var map__27850__$1 = cljs.core.__destructure_map(map__27850);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27850__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(cond);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"cond-probe-id","cond-probe-id",2056183324),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__27853,_){
var map__27855 = p__27853;
var map__27855__$1 = cljs.core.__destructure_map(map__27855);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27855__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cond,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__27861,_){
var map__27864 = p__27861;
var map__27864__$1 = cljs.core.__destructure_map(map__27864);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27864__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(level);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__27870,_){
var map__27871 = p__27870;
var map__27871__$1 = cljs.core.__destructure_map(map__27871);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27871__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"temperature-probe-id","temperature-probe-id",2062266207),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__27875,_){
var map__27876 = p__27875;
var map__27876__$1 = cljs.core.__destructure_map(map__27876);
var temperature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27876__$1,new cljs.core.Keyword(null,"temperature","temperature",899018429));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(temperature,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"converter-controller-id","converter-controller-id",247256759),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__27883,_){
var map__27884 = p__27883;
var map__27884__$1 = cljs.core.__destructure_map(map__27884);
var converter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27884__$1,new cljs.core.Keyword(null,"converter","converter",-34185411));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(converter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"low-limiter-controllers","low-limiter-controllers",705214366),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27885,_){
var map__27886 = p__27885;
var map__27886__$1 = cljs.core.__destructure_map(map__27886);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27886__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(low_limiter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"low-limiter-probes","low-limiter-probes",-911505493),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27889,_){
var map__27891 = p__27889;
var map__27891__$1 = cljs.core.__destructure_map(map__27891);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27891__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return new cljs.core.Keyword(null,"probes","probes",-541753203).cljs$core$IFn$_invoke$arity$1(low_limiter);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-low-limiter-data-by-path","current-low-limiter-data-by-path",-410595920),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter-controllers","low-limiter-controllers",705214366)], null),(function (p__27893,p__27894){
var vec__27900 = p__27893;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27900,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27900,(1),null);
var vec__27903 = p__27894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27903,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27903,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"high-limiter-controllers","high-limiter-controllers",-2080559399),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27906,_){
var map__27907 = p__27906;
var map__27907__$1 = cljs.core.__destructure_map(map__27907);
var high_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27907__$1,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(high_limiter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"high-limiter-probes","high-limiter-probes",-980585397),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27908,_){
var map__27912 = p__27908;
var map__27912__$1 = cljs.core.__destructure_map(map__27912);
var high_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27912__$1,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404));
return new cljs.core.Keyword(null,"probes","probes",-541753203).cljs$core$IFn$_invoke$arity$1(high_limiter);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-high-limiter-data-by-path","current-high-limiter-data-by-path",-1991404189),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter-id","high-limiter-id",1297275918)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter-controllers","high-limiter-controllers",-2080559399)], null),(function (p__27914,p__27915){
var vec__27916 = p__27914;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27916,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27916,(1),null);
var vec__27919 = p__27915;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27919,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27919,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"cond-controllers","cond-controllers",-1897268180),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27936,_){
var map__27937 = p__27936;
var map__27937__$1 = cljs.core.__destructure_map(map__27937);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27937__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(cond);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"cond-probes","cond-probes",-2066276965),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27939,_){
var map__27940 = p__27939;
var map__27940__$1 = cljs.core.__destructure_map(map__27940);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27940__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return new cljs.core.Keyword(null,"probes","probes",-541753203).cljs$core$IFn$_invoke$arity$1(cond);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-cond-controller-data-by-path","current-cond-controller-data-by-path",2025109911),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controllers","cond-controllers",-1897268180)], null),(function (p__27945,p__27946){
var vec__27947 = p__27945;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27947,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27947,(1),null);
var vec__27950 = p__27946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27950,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27950,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-cond-probe-data-by-path","current-cond-probe-data-by-path",565225146),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-probe-id","cond-probe-id",2056183324)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-probes","cond-probes",-2066276965)], null),(function (p__27953,p__27954){
var vec__27955 = p__27953;
var probe_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27955,(0),null);
var vec__27958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27955,(1),null);
var probe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27958,(0),null);
var vec__27961 = p__27954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27961,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27961,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(probe,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [probe_id], null),path));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"level-controllers","level-controllers",-641639630),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27968,_){
var map__27971 = p__27968;
var map__27971__$1 = cljs.core.__destructure_map(map__27971);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27971__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(level);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"level-probes","level-probes",-1123520662),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__27973,_){
var map__27974 = p__27973;
var map__27974__$1 = cljs.core.__destructure_map(map__27974);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27974__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.Keyword(null,"probes","probes",-541753203).cljs$core$IFn$_invoke$arity$1(level);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-level-controller-data-by-path","current-level-controller-data-by-path",1144191062),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controllers","level-controllers",-641639630)], null),(function (p__27977,p__27978){
var vec__27980 = p__27977;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27980,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27980,(1),null);
var vec__27983 = p__27978;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27983,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27983,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-level-controller-actuator-type","current-level-controller-actuator-type",-27918015),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controllers","level-controllers",-641639630)], null),(function (p__27989,_){
var vec__27990 = p__27989;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-feed-actuator-data-by-path","current-feed-actuator-data-by-path",-2035634407),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-controller-actuator-type","current-level-controller-actuator-type",-27918015)], null),(function (p__28003,p__28004){
var vec__28005 = p__28003;
var kit_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28005,(0),null);
var actuator_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28005,(1),null);
var vec__28008 = p__28004;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28008,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28008,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kit_data,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-level-probe-data-by-path","current-level-probe-data-by-path",-800493810),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-probes","level-probes",-1123520662)], null),(function (p__28017,p__28018){
var vec__28019 = p__28017;
var probe_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28019,(0),null);
var vec__28022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28019,(1),null);
var probe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28022,(0),null);
var vec__28025 = p__28018;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28025,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28025,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(probe,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [probe_id], null),path));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"converter-controllers","converter-controllers",1982354192),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data","kit-data",210358620)], null),(function (p__28029,_){
var map__28030 = p__28029;
var map__28030__$1 = cljs.core.__destructure_map(map__28030);
var converter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28030__$1,new cljs.core.Keyword(null,"converter","converter",-34185411));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(converter);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-converter-data-by-path","current-converter-data-by-path",-227281443),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter-controller-id","converter-controller-id",247256759)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter-controllers","converter-controllers",1982354192)], null),(function (p__28031,p__28032){
var vec__28033 = p__28031;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28033,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28033,(1),null);
var vec__28036 = p__28032;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28036,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28036,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-low-limiter-hot-spot","show-low-limiter-hot-spot",-909061148),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__28047,_){
var vec__28048 = p__28047;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28048,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28048,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-high-limiter-hot-spot","show-high-limiter-hot-spot",361134266),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter-id","high-limiter-id",1297275918)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__28054,_){
var vec__28057 = p__28054;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__28070,_){
var vec__28071 = p__28070;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28071,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28071,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__28078,_){
var vec__28079 = p__28078;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28079,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28079,(1),null);
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
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"level-calibration-boiler-view-subs","level-calibration-boiler-view-subs",-1283277188),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),(function (p__28098,_){
var vec__28099 = p__28098;
var kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28099,(0),null);
var level_controller_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28099,(1),null);
var controller_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none"))?"NRR 2-60":level_controller_id);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kit),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(controller_id),"/calibration-boiler-view"].join('');
})], 0));

//# sourceMappingURL=app.db.subs.js.map
