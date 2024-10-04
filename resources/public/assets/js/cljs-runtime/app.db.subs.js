goog.provide('app.db.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"screen","screen",1990059748),(function (db,_){
return new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("screen","w","screen/w",1057353813),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748)], null),(function (screen,_){
return new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(screen);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("screen","h","screen/h",-138883872),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748)], null),(function (screen,_){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(screen);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("screen","zoom","screen/zoom",1289259126),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen","screen",1990059748)], null),(function (screen,_){
return new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(screen);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user","user",1532431356),(function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("user","full-name","user/full-name",420262817),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),(function (p__40768,_){
var map__40770 = p__40768;
var map__40770__$1 = cljs.core.__destructure_map(map__40770);
var firstname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40770__$1,new cljs.core.Keyword(null,"firstname","firstname",1659984849));
var lastname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40770__$1,new cljs.core.Keyword(null,"lastname","lastname",-265181465));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(firstname)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lastname)].join('');
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","connected","ws/connected",-169836913),(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"connected","connected",-169833045)], null)) === true;
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kit","kit",-1785767367),(function (db,_){
return new cljs.core.Keyword(null,"kit","kit",-1785767367).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kit","data","kit/data",-232776087),(function (p__40780,_){
var map__40782 = p__40780;
var map__40782__$1 = cljs.core.__destructure_map(map__40782);
var db = map__40782__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40782__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,kit);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (kit_data,p__40789){
var vec__40790 = p__40789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40790,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40790,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kit_data,path);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"sim","sim",-1444922721),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40795,_){
var map__40796 = p__40795;
var map__40796__$1 = cljs.core.__destructure_map(map__40796);
var sim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40796__$1,new cljs.core.Keyword(null,"sim","sim",-1444922721));
return sim;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"modal-info","modal-info",1282904358),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40798,_){
var map__40799 = p__40798;
var map__40799__$1 = cljs.core.__destructure_map(map__40799);
var modal_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40799__$1,new cljs.core.Keyword(null,"modal-info","modal-info",1282904358));
return modal_info;
}));
refx.alpha.reg_sub(new cljs.core.Keyword("modal-info","show","modal-info/show",-230278515),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),(function (p__40803,_){
var map__40804 = p__40803;
var map__40804__$1 = cljs.core.__destructure_map(map__40804);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40804__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40804__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return (((!(cljs.core.empty_QMARK_(title)))) || ((!(cljs.core.empty_QMARK_(text)))));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"notifications","notifications",1685638001),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40808,_){
var map__40809 = p__40808;
var map__40809__$1 = cljs.core.__destructure_map(map__40809);
var notifications = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40809__$1,new cljs.core.Keyword(null,"notifications","notifications",1685638001));
return notifications;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40810,_){
var map__40811 = p__40810;
var map__40811__$1 = cljs.core.__destructure_map(map__40811);
var hotspots = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40811__$1,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410));
return hotspots;
}));
refx.alpha.reg_sub(new cljs.core.Keyword("hotspots","highlight","hotspots/highlight",-1064861589),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hotspots","hotspots",2078718410)], null),(function (p__40814,_){
var map__40815 = p__40814;
var map__40815__$1 = cljs.core.__destructure_map(map__40815);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40815__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
return highlight;
}));
refx.alpha.reg_sub(new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hotspots","hotspots",2078718410)], null),(function (p__40816,_){
var map__40817 = p__40816;
var map__40817__$1 = cljs.core.__destructure_map(map__40817);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40817__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
return current;
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40818,_){
var map__40819 = p__40818;
var map__40819__$1 = cljs.core.__destructure_map(map__40819);
var general_settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40819__$1,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710));
return general_settings;
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),(function (p__40820,_){
var vec__40821 = p__40820;
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40821,(0),null);
var general_settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40821,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stop")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"intended-use","intended-use",2081554370).cljs$core$IFn$_invoke$arity$1(general_settings),"demonstration")));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword("steam","value","steam/value",466209977),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),(function (p__40824,_){
var map__40825 = p__40824;
var map__40825__$1 = cljs.core.__destructure_map(map__40825);
var steam = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40825__$1,new cljs.core.Keyword(null,"steam","steam",2010684664));
var map__40826 = steam;
var map__40826__$1 = cljs.core.__destructure_map(map__40826);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40826__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40826__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__40827 = value;
var G__40827__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__40827)], 0))):G__40827);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40827__$1], 0)));
} else {
return G__40827__$1;
}
}));
refx.alpha.reg_sub(new cljs.core.Keyword("steam","max","steam/max",958238564),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),(function (p__40828,_){
var map__40829 = p__40828;
var map__40829__$1 = cljs.core.__destructure_map(map__40829);
var steam = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40829__$1,new cljs.core.Keyword(null,"steam","steam",2010684664));
var map__40830 = steam;
var map__40830__$1 = cljs.core.__destructure_map(map__40830);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40830__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40830__$1,new cljs.core.Keyword(null,"max","max",61366548));
var G__40831 = max;
var G__40831__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__40831)], 0))):G__40831);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40831__$1], 0)));
} else {
return G__40831__$1;
}
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"steam-%","steam-%",259510548),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("steam","value","steam/value",466209977)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("steam","max","steam/max",958238564)], null),(function (p__40832,_){
var vec__40833 = p__40832;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40833,(0),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40833,(1),null);
var value__$1 = ((100) * (value / max));
if((value__$1 < (0))){
return (0);
} else {
return value__$1;
}
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40836,_){
var map__40837 = p__40836;
var map__40837__$1 = cljs.core.__destructure_map(map__40837);
var system_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40837__$1,new cljs.core.Keyword(null,"system-config","system-config",814819577));
return system_config;
}));
refx.alpha.reg_sub(new cljs.core.Keyword("low-limiter","id","low-limiter/id",-654315003),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__40838,_){
var map__40839 = p__40838;
var map__40839__$1 = cljs.core.__destructure_map(map__40839);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40839__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(low_limiter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("low-level-prop-I","id","low-level-prop-I/id",-1280101965),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__40840,_){
var map__40841 = p__40840;
var map__40841__$1 = cljs.core.__destructure_map(map__40841);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40841__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(low_limiter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("low-level-prop-II","id","low-level-prop-II/id",-470462836),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__40842,_){
var map__40843 = p__40842;
var map__40843__$1 = cljs.core.__destructure_map(map__40843);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40843__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(low_limiter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(1)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("high-limiter","id","high-limiter/id",-1439627817),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__40844,_){
var map__40845 = p__40844;
var map__40845__$1 = cljs.core.__destructure_map(map__40845);
var high_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40845__$1,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(high_limiter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("high-level-probe","id","high-level-probe/id",-229901864),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__40846,_){
var map__40847 = p__40846;
var map__40847__$1 = cljs.core.__destructure_map(map__40847);
var high_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40847__$1,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(high_limiter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("cond","controller-id","cond/controller-id",-1029121401),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__40848,_){
var map__40849 = p__40848;
var map__40849__$1 = cljs.core.__destructure_map(map__40849);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40849__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(cond);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("cond","probe-id","cond/probe-id",828223705),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__40850,_){
var map__40851 = p__40850;
var map__40851__$1 = cljs.core.__destructure_map(map__40851);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40851__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cond,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("level","controller-id","level/controller-id",-864292571),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__40852,_){
var map__40853 = p__40852;
var map__40853__$1 = cljs.core.__destructure_map(map__40853);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40853__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(level);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("level","probe-id","level/probe-id",-1957935785),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__40854,_){
var map__40855 = p__40854;
var map__40855__$1 = cljs.core.__destructure_map(map__40855);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40855__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(level,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("temperature","probe-id","temperature/probe-id",-1671456953),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__40856,_){
var map__40857 = p__40856;
var map__40857__$1 = cljs.core.__destructure_map(map__40857);
var temperature = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40857__$1,new cljs.core.Keyword(null,"temperature","temperature",899018429));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(temperature,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("converter","controller-id","converter/controller-id",-813580551),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"system-config","system-config",814819577)], null),(function (p__40858,_){
var map__40859 = p__40858;
var map__40859__$1 = cljs.core.__destructure_map(map__40859);
var converter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40859__$1,new cljs.core.Keyword(null,"converter","converter",-34185411));
return new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751).cljs$core$IFn$_invoke$arity$1(converter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("low-limiter","controllers","low-limiter/controllers",-1022972977),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40860,_){
var map__40861 = p__40860;
var map__40861__$1 = cljs.core.__destructure_map(map__40861);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40861__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(low_limiter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("low-limiter","probes","low-limiter/probes",-185714530),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40862,_){
var map__40863 = p__40862;
var map__40863__$1 = cljs.core.__destructure_map(map__40863);
var low_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40863__$1,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558));
return new cljs.core.Keyword(null,"probes","probes",-541753203).cljs$core$IFn$_invoke$arity$1(low_limiter);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("current-low-limiter","data-by-path","current-low-limiter/data-by-path",633729601),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("low-limiter","id","low-limiter/id",-654315003)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("low-limiter","controllers","low-limiter/controllers",-1022972977)], null),(function (p__40864,p__40865){
var vec__40866 = p__40864;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40866,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40866,(1),null);
var vec__40869 = p__40865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40869,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40869,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword("high-limiter","controllers","high-limiter/controllers",-1309312135),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40872,_){
var map__40873 = p__40872;
var map__40873__$1 = cljs.core.__destructure_map(map__40873);
var high_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40873__$1,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(high_limiter);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("high-limiter","probes","high-limiter/probes",-469949168),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40874,_){
var map__40875 = p__40874;
var map__40875__$1 = cljs.core.__destructure_map(map__40875);
var high_limiter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40875__$1,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404));
return new cljs.core.Keyword(null,"probes","probes",-541753203).cljs$core$IFn$_invoke$arity$1(high_limiter);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("current-high-limiter","data-by-path","current-high-limiter/data-by-path",-809667541),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("high-limiter","id","high-limiter/id",-1439627817)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("high-limiter","controllers","high-limiter/controllers",-1309312135)], null),(function (p__40876,p__40877){
var vec__40878 = p__40876;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40878,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40878,(1),null);
var vec__40881 = p__40877;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40881,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40881,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword("cond","controllers","cond/controllers",-1104259874),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40884,_){
var map__40885 = p__40884;
var map__40885__$1 = cljs.core.__destructure_map(map__40885);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40885__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(cond);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("cond","probes","cond/probes",-540717149),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40886,_){
var map__40887 = p__40886;
var map__40887__$1 = cljs.core.__destructure_map(map__40887);
var cond = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40887__$1,new cljs.core.Keyword(null,"cond","cond",-33823472));
return new cljs.core.Keyword(null,"probes","probes",-541753203).cljs$core$IFn$_invoke$arity$1(cond);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("current-cond-controller","data-by-path","current-cond-controller/data-by-path",-2770519),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cond","controller-id","cond/controller-id",-1029121401)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cond","controllers","cond/controllers",-1104259874)], null),(function (p__40888,p__40889){
var vec__40890 = p__40888;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40890,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40890,(1),null);
var vec__40893 = p__40889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40893,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40893,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("current-cond-probe","data-by-path","current-cond-probe/data-by-path",-1073104381),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cond","probe-id","cond/probe-id",828223705)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cond","probes","cond/probes",-540717149)], null),(function (p__40896,p__40897){
var vec__40898 = p__40896;
var probe_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40898,(0),null);
var vec__40901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40898,(1),null);
var probe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40901,(0),null);
var vec__40904 = p__40897;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40904,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40904,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(probe,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [probe_id], null),path));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword("level","controllers","level/controllers",-1273411452),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40907,_){
var map__40908 = p__40907;
var map__40908__$1 = cljs.core.__destructure_map(map__40908);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40908__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(level);
}));
refx.alpha.reg_sub(new cljs.core.Keyword("level","probes","level/probes",-439329791),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40909,_){
var map__40910 = p__40909;
var map__40910__$1 = cljs.core.__destructure_map(map__40910);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40910__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.Keyword(null,"probes","probes",-541753203).cljs$core$IFn$_invoke$arity$1(level);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("current-level-controller","data-by-path","current-level-controller/data-by-path",151959747),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("level","controller-id","level/controller-id",-864292571)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("level","controllers","level/controllers",-1273411452)], null),(function (p__40911,p__40912){
var vec__40913 = p__40911;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40913,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40913,(1),null);
var vec__40916 = p__40912;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40916,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40916,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("current-level-controller","actuator-type","current-level-controller/actuator-type",-1259504431),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("level","controller-id","level/controller-id",-864292571)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("level","controllers","level/controllers",-1273411452)], null),(function (p__40919,_){
var vec__40920 = p__40919;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40920,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40920,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("current-feed-actuator","data-by-path","current-feed-actuator/data-by-path",-748274584),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-level-controller","actuator-type","current-level-controller/actuator-type",-1259504431)], null),(function (p__40923,p__40924){
var vec__40925 = p__40923;
var kit_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40925,(0),null);
var actuator_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40925,(1),null);
var vec__40928 = p__40924;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40928,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40928,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(kit_data,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("current-level-probe","data-by-path","current-level-probe/data-by-path",2045605545),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("level","probe-id","level/probe-id",-1957935785)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("level","probes","level/probes",-439329791)], null),(function (p__40931,p__40932){
var vec__40933 = p__40931;
var probe_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40933,(0),null);
var vec__40936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40933,(1),null);
var probe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40936,(0),null);
var vec__40939 = p__40932;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40939,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40939,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(probe,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [probe_id], null),path));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword("converter","controllers","converter/controllers",-919112096),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data","kit/data",-232776087)], null),(function (p__40942,_){
var map__40943 = p__40942;
var map__40943__$1 = cljs.core.__destructure_map(map__40943);
var converter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40943__$1,new cljs.core.Keyword(null,"converter","converter",-34185411));
return new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(converter);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("current-converter","data-by-path","current-converter/data-by-path",515028528),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("converter","controller-id","converter/controller-id",-813580551)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("converter","controllers","converter/controllers",-919112096)], null),(function (p__40944,p__40945){
var vec__40946 = p__40944;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40946,(0),null);
var controllers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40946,(1),null);
var vec__40949 = p__40945;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40949,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40949,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controllers,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("low-limiter","show-hot-spot","low-limiter/show-hot-spot",-1386256895),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("low-limiter","id","low-limiter/id",-654315003)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__40952,_){
var vec__40953 = p__40952;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40953,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40953,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("high-limiter","show-hot-spot","high-limiter/show-hot-spot",-1104250545),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("high-limiter","id","high-limiter/id",-1439627817)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__40956,_){
var vec__40957 = p__40956;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40957,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40957,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("cond-controller","show-hot-spot","cond-controller/show-hot-spot",867079929),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cond","controller-id","cond/controller-id",-1029121401)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__40960,_){
var vec__40961 = p__40960;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40961,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40961,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("level-controller","show-hot-spot","level-controller/show-hot-spot",1550955607),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("level","controller-id","level/controller-id",-864292571)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__40964,_){
var vec__40965 = p__40964;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40965,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40965,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword("converter","show-hot-spot","converter/show-hot-spot",-680614798),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("level","probe-id","level/probe-id",-1957935785)], null),(function (id,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,"NRGT 26-2");
}));
refx.alpha.reg_sub(new cljs.core.Keyword("feed-valve","show-hot-spot","feed-valve/show-hot-spot",-1020837517),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-level-controller","actuator-type","current-level-controller/actuator-type",-1259504431)], null),(function (actuator_type,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(actuator_type,new cljs.core.Keyword(null,"pump","pump",-453885150));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("feed-pump","show-hot-spot","feed-pump/show-hot-spot",122347785),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-level-controller","actuator-type","current-level-controller/actuator-type",-1259504431)], null),(function (actuator_type,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(actuator_type,new cljs.core.Keyword(null,"pump","pump",-453885150));
}));
refx.alpha.reg_sub(new cljs.core.Keyword("toolbar","show","toolbar/show",431398428),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null),(function (current_hotspot,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"none");
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("boiler","level-calibration-subs","boiler/level-calibration-subs",-2123117149),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("level","controller-id","level/controller-id",-864292571)], null),(function (p__40968,_){
var vec__40969 = p__40968;
var kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40969,(0),null);
var level_controller_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40969,(1),null);
var controller_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none"))?"NRR 2-60":level_controller_id);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kit),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(controller_id),"/calibration-boiler-view"].join('');
})], 0));

//# sourceMappingURL=app.db.subs.js.map
