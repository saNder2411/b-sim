goog.provide('app.db.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),(function (db,_){
return db;
}));
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
refx.alpha.reg_sub(new cljs.core.Keyword(null,"user-full-name","user-full-name",-2030076885),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),(function (p__39793,_){
var map__39794 = p__39793;
var map__39794__$1 = cljs.core.__destructure_map(map__39794);
var firstname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39794__$1,new cljs.core.Keyword(null,"firstname","firstname",1659984849));
var lastname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39794__$1,new cljs.core.Keyword(null,"lastname","lastname",-265181465));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(firstname)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lastname)].join('');
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kit","kit",-1785767367),(function (db,_){
return new cljs.core.Keyword(null,"kit","kit",-1785767367).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sim","sim",-1444922721),(function (p__39799,_){
var map__39800 = p__39799;
var map__39800__$1 = cljs.core.__destructure_map(map__39800);
var db = map__39800__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39800__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),(function (p__39805,p__39806){
var map__39809 = p__39805;
var map__39809__$1 = cljs.core.__destructure_map(map__39809);
var db = map__39809__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39809__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39812 = p__39806;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39812,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39812,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit], null),path));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929),(function (p__39823,_){
var map__39824 = p__39823;
var map__39824__$1 = cljs.core.__destructure_map(map__39824);
var db = map__39824__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39824__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var sim = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var intended_use = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"intended-use","intended-use",2081554370)], null));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(intended_use,"demonstration")));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494),(function (p__39835,_){
var map__39838 = p__39835;
var map__39838__$1 = cljs.core.__destructure_map(map__39838);
var db = map__39838__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39838__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237),(function (p__39845,_){
var map__39848 = p__39845;
var map__39848__$1 = cljs.core.__destructure_map(map__39848);
var db = map__39848__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39848__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"steam-value","steam-value",685706720),(function (p__39853,_){
var map__39854 = p__39853;
var map__39854__$1 = cljs.core.__destructure_map(map__39854);
var db = map__39854__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39854__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__39857 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664)], null));
var map__39857__$1 = cljs.core.__destructure_map(map__39857);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39857__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39857__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__39859 = value;
var G__39859__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__39859)], 0))):G__39859);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__39859__$1], 0)));
} else {
return G__39859__$1;
}
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"steam-max-value","steam-max-value",-386447548),(function (p__39860,_){
var map__39861 = p__39860;
var map__39861__$1 = cljs.core.__destructure_map(map__39861);
var db = map__39861__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39861__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var map__39862 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664)], null));
var map__39862__$1 = cljs.core.__destructure_map(map__39862);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39862__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39862__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var G__39863 = max_value;
var G__39863__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h"))?parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0.984 * G__39863)], 0))):G__39863);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"t/h")){
return parseFloat(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~,2f",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__39863__$1], 0)));
} else {
return G__39863__$1;
}
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"steam-%","steam-%",259510548),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-value","steam-value",685706720)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-max-value","steam-max-value",-386447548)], null),(function (p__39864,_){
var vec__39865 = p__39864;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39865,(0),null);
var max_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39865,(1),null);
var value__$1 = ((100) * (value / max_value));
if((value__$1 < (0))){
return (0);
} else {
return value__$1;
}
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modal-info","modal-info",1282904358),(function (p__39868,_){
var map__39869 = p__39868;
var map__39869__$1 = cljs.core.__destructure_map(map__39869);
var db = map__39869__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39869__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"modal-info-show","modal-info-show",-922250939),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),(function (p__39870,_){
var map__39871 = p__39870;
var map__39871__$1 = cljs.core.__destructure_map(map__39871);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39871__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39871__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return (((!(cljs.core.empty_QMARK_(title)))) || ((!(cljs.core.empty_QMARK_(text)))));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notifications","notifications",1685638001),(function (p__39872,_){
var map__39873 = p__39872;
var map__39873__$1 = cljs.core.__destructure_map(map__39873);
var db = map__39873__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39873__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853),(function (p__39874,_){
var map__39875 = p__39874;
var map__39875__$1 = cljs.core.__destructure_map(map__39875);
var db = map__39875__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39875__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-low-limiter-data-by-path","current-low-limiter-data-by-path",-410595920),(function (p__39876,p__39877){
var map__39878 = p__39876;
var map__39878__$1 = cljs.core.__destructure_map(map__39878);
var db = map__39878__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39878__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39879 = p__39877;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39879,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39879,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var controller = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controller,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"low-level-prop-I-id","low-level-prop-I-id",753898157),(function (p__39882,_){
var map__39883 = p__39882;
var map__39883__$1 = cljs.core.__destructure_map(map__39883);
var db = map__39883__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39883__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"low-level-prop-II-id","low-level-prop-II-id",-1333563925),(function (p__39884,_){
var map__39885 = p__39884;
var map__39885__$1 = cljs.core.__destructure_map(map__39885);
var db = map__39885__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39885__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(1)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"high-limiter-id","high-limiter-id",1297275918),(function (p__39886,_){
var map__39887 = p__39886;
var map__39887__$1 = cljs.core.__destructure_map(map__39887);
var db = map__39887__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39887__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-high-limiter-data-by-path","current-high-limiter-data-by-path",-1991404189),(function (p__39888,p__39889){
var map__39890 = p__39888;
var map__39890__$1 = cljs.core.__destructure_map(map__39890);
var db = map__39890__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39890__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39891 = p__39889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39891,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39891,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var controller = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controller,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"high-level-probe-id","high-level-probe-id",1801472763),(function (p__39894,_){
var map__39895 = p__39894;
var map__39895__$1 = cljs.core.__destructure_map(map__39895);
var db = map__39895__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39895__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778),(function (p__39896,_){
var map__39897 = p__39896;
var map__39897__$1 = cljs.core.__destructure_map(map__39897);
var db = map__39897__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39897__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-cond-controller-data-by-path","current-cond-controller-data-by-path",2025109911),(function (p__39898,p__39899){
var map__39900 = p__39898;
var map__39900__$1 = cljs.core.__destructure_map(map__39900);
var db = map__39900__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39900__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39901 = p__39899;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39901,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39901,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var controller = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controller,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-id","cond-probe-id",2056183324),(function (p__39904,_){
var map__39905 = p__39904;
var map__39905__$1 = cljs.core.__destructure_map(map__39905);
var db = map__39905__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39905__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-cond-probe-data-by-path","current-cond-probe-data-by-path",565225146),(function (p__39906,p__39907){
var map__39908 = p__39906;
var map__39908__$1 = cljs.core.__destructure_map(map__39908);
var db = map__39908__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39908__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39909 = p__39907;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39909,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39909,(1),null);
var probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
var probe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),probe_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(probe,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219),(function (p__39912,_){
var map__39913 = p__39912;
var map__39913__$1 = cljs.core.__destructure_map(map__39913);
var db = map__39913__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39913__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-level-controller-data-by-path","current-level-controller-data-by-path",1144191062),(function (p__39914,p__39915){
var map__39916 = p__39914;
var map__39916__$1 = cljs.core.__destructure_map(map__39916);
var db = map__39916__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39916__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39917 = p__39915;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39917,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39917,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var controller = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controller,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-level-controller-actuator-type","current-level-controller-actuator-type",-27918015),(function (p__39920,_){
var map__39921 = p__39920;
var map__39921__$1 = cljs.core.__destructure_map(map__39921);
var db = map__39921__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39921__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-feed-actuator-data-by-path","current-feed-actuator-data-by-path",-2035634407),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-controller-actuator-type","current-level-controller-actuator-type",-27918015)], null),(function (p__39922,p__39923){
var vec__39924 = p__39922;
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39924,(0),null);
var kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39924,(1),null);
var actuator_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39924,(2),null);
var vec__39927 = p__39923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39927,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39927,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type], null),path));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835),(function (p__39930,_){
var map__39931 = p__39930;
var map__39931__$1 = cljs.core.__destructure_map(map__39931);
var db = map__39931__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39931__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-level-probe-data-by-path","current-level-probe-data-by-path",-800493810),(function (p__39932,p__39933){
var map__39934 = p__39932;
var map__39934__$1 = cljs.core.__destructure_map(map__39934);
var db = map__39934__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39934__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39935 = p__39933;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39935,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39935,(1),null);
var probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
var probe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),probe_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(probe,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"temperature-probe-id","temperature-probe-id",2062266207),(function (p__39938,_){
var map__39939 = p__39938;
var map__39939__$1 = cljs.core.__destructure_map(map__39939);
var db = map__39939__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39939__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"converter-id","converter-id",1254191491),(function (p__39941,_){
var map__39942 = p__39941;
var map__39942__$1 = cljs.core.__destructure_map(map__39942);
var db = map__39942__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39942__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-converter-data-by-path","current-converter-data-by-path",-227281443),(function (p__39947,p__39948){
var map__39951 = p__39947;
var map__39951__$1 = cljs.core.__destructure_map(map__39951);
var db = map__39951__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39951__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39952 = p__39948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39952,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39952,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var controller = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controller,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-low-limiter-hot-spot","show-low-limiter-hot-spot",-909061148),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__39969,_){
var vec__39970 = p__39969;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39970,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39970,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-high-limiter-hot-spot","show-high-limiter-hot-spot",361134266),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter-id","high-limiter-id",1297275918)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__39981,_){
var vec__39986 = p__39981;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39986,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39986,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__39997,_){
var vec__40000 = p__39997;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40000,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40000,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__40013,_){
var vec__40016 = p__40013;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40016,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40016,(1),null);
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
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"level-calibration-boiler-view-subs","level-calibration-boiler-view-subs",-1283277188),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),(function (p__40034,_){
var vec__40035 = p__40034;
var kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40035,(0),null);
var level_controller_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40035,(1),null);
var controller_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none"))?"NRR 2-60":level_controller_id);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kit),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(controller_id),"/calibration-boiler-view"].join('');
})], 0));

//# sourceMappingURL=app.db.subs.js.map
