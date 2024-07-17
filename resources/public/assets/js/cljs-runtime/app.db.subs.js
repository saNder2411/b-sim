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
refx.alpha.reg_sub(new cljs.core.Keyword(null,"user-full-name","user-full-name",-2030076885),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),(function (p__35363,_){
var map__35364 = p__35363;
var map__35364__$1 = cljs.core.__destructure_map(map__35364);
var firstname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35364__$1,new cljs.core.Keyword(null,"firstname","firstname",1659984849));
var lastname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35364__$1,new cljs.core.Keyword(null,"lastname","lastname",-265181465));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(firstname)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lastname)].join('');
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kit","kit",-1785767367),(function (db,_){
return new cljs.core.Keyword(null,"kit","kit",-1785767367).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sim","sim",-1444922721),(function (p__35378,_){
var map__35379 = p__35378;
var map__35379__$1 = cljs.core.__destructure_map(map__35379);
var db = map__35379__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),(function (p__35386,p__35387){
var map__35390 = p__35386;
var map__35390__$1 = cljs.core.__destructure_map(map__35390);
var db = map__35390__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35390__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35393 = p__35387;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35393,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35393,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit], null),path));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929),(function (p__35402,_){
var map__35405 = p__35402;
var map__35405__$1 = cljs.core.__destructure_map(map__35405);
var db = map__35405__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35405__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var sim = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var intended_use = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"intended-use","intended-use",2081554370)], null));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(intended_use,"demonstration")));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494),(function (p__35412,_){
var map__35413 = p__35412;
var map__35413__$1 = cljs.core.__destructure_map(map__35413);
var db = map__35413__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35413__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237),(function (p__35415,_){
var map__35416 = p__35415;
var map__35416__$1 = cljs.core.__destructure_map(map__35416);
var db = map__35416__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35416__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"current","current",-1088038603)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"steam-value","steam-value",685706720),(function (p__35417,_){
var map__35418 = p__35417;
var map__35418__$1 = cljs.core.__destructure_map(map__35418);
var db = map__35418__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35418__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"value","value",305978217)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"steam-max-value","steam-max-value",-386447548),(function (p__35419,_){
var map__35420 = p__35419;
var map__35420__$1 = cljs.core.__destructure_map(map__35420);
var db = map__35420__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35420__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"steam-%","steam-%",259510548),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-value","steam-value",685706720)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-max-value","steam-max-value",-386447548)], null),(function (p__35421,_){
var vec__35422 = p__35421;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35422,(0),null);
var max_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35422,(1),null);
var value__$1 = ((100) * (value / max_value));
if((value__$1 < (0))){
return (0);
} else {
return value__$1;
}
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modal-info","modal-info",1282904358),(function (p__35425,_){
var map__35426 = p__35425;
var map__35426__$1 = cljs.core.__destructure_map(map__35426);
var db = map__35426__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35426__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"modal-info-show","modal-info-show",-922250939),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),(function (p__35427,_){
var map__35428 = p__35427;
var map__35428__$1 = cljs.core.__destructure_map(map__35428);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35428__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35428__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return (((!(cljs.core.empty_QMARK_(title)))) || ((!(cljs.core.empty_QMARK_(text)))));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notifications","notifications",1685638001),(function (p__35429,_){
var map__35430 = p__35429;
var map__35430__$1 = cljs.core.__destructure_map(map__35430);
var db = map__35430__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35430__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853),(function (p__35431,_){
var map__35432 = p__35431;
var map__35432__$1 = cljs.core.__destructure_map(map__35432);
var db = map__35432__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35432__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-low-limiter-data-by-path","current-low-limiter-data-by-path",-410595920),(function (p__35434,p__35435){
var map__35437 = p__35434;
var map__35437__$1 = cljs.core.__destructure_map(map__35437);
var db = map__35437__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35437__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35438 = p__35435;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35438,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35438,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var controller = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controller,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"low-level-prop-I-id","low-level-prop-I-id",753898157),(function (p__35450,_){
var map__35453 = p__35450;
var map__35453__$1 = cljs.core.__destructure_map(map__35453);
var db = map__35453__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35453__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"low-level-prop-II-id","low-level-prop-II-id",-1333563925),(function (p__35460,_){
var map__35461 = p__35460;
var map__35461__$1 = cljs.core.__destructure_map(map__35461);
var db = map__35461__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35461__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(1)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"high-limiter-id","high-limiter-id",1297275918),(function (p__35468,_){
var map__35471 = p__35468;
var map__35471__$1 = cljs.core.__destructure_map(map__35471);
var db = map__35471__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35471__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-high-limiter-data-by-path","current-high-limiter-data-by-path",-1991404189),(function (p__35480,p__35481){
var map__35484 = p__35480;
var map__35484__$1 = cljs.core.__destructure_map(map__35484);
var db = map__35484__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35484__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35485 = p__35481;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35485,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35485,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var controller = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controller,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"high-level-probe-id","high-level-probe-id",1801472763),(function (p__35498,_){
var map__35499 = p__35498;
var map__35499__$1 = cljs.core.__destructure_map(map__35499);
var db = map__35499__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35499__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778),(function (p__35508,_){
var map__35509 = p__35508;
var map__35509__$1 = cljs.core.__destructure_map(map__35509);
var db = map__35509__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35509__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-cond-controller-data-by-path","current-cond-controller-data-by-path",2025109911),(function (p__35513,p__35514){
var map__35515 = p__35513;
var map__35515__$1 = cljs.core.__destructure_map(map__35515);
var db = map__35515__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35515__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35516 = p__35514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35516,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var controller = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controller,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-id","cond-probe-id",2056183324),(function (p__35519,_){
var map__35520 = p__35519;
var map__35520__$1 = cljs.core.__destructure_map(map__35520);
var db = map__35520__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35520__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-cond-probe-data-by-path","current-cond-probe-data-by-path",565225146),(function (p__35521,p__35522){
var map__35523 = p__35521;
var map__35523__$1 = cljs.core.__destructure_map(map__35523);
var db = map__35523__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35523__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35524 = p__35522;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35524,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35524,(1),null);
var probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
var probe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),probe_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(probe,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219),(function (p__35527,_){
var map__35528 = p__35527;
var map__35528__$1 = cljs.core.__destructure_map(map__35528);
var db = map__35528__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35528__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-level-controller-data-by-path","current-level-controller-data-by-path",1144191062),(function (p__35529,p__35530){
var map__35531 = p__35529;
var map__35531__$1 = cljs.core.__destructure_map(map__35531);
var db = map__35531__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35531__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35532 = p__35530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var controller = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controller,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-level-controller-actuator-type","current-level-controller-actuator-type",-27918015),(function (p__35535,_){
var map__35536 = p__35535;
var map__35536__$1 = cljs.core.__destructure_map(map__35536);
var db = map__35536__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35536__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835),(function (p__35537,_){
var map__35538 = p__35537;
var map__35538__$1 = cljs.core.__destructure_map(map__35538);
var db = map__35538__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35538__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-level-probe-data-by-path","current-level-probe-data-by-path",-800493810),(function (p__35539,p__35540){
var map__35541 = p__35539;
var map__35541__$1 = cljs.core.__destructure_map(map__35541);
var db = map__35541__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35541__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35542 = p__35540;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35542,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35542,(1),null);
var probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
var probe = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),probe_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(probe,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"temperature-probe-id","temperature-probe-id",2062266207),(function (p__35545,_){
var map__35546 = p__35545;
var map__35546__$1 = cljs.core.__destructure_map(map__35546);
var db = map__35546__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35546__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"converter-id","converter-id",1254191491),(function (p__35547,_){
var map__35548 = p__35547;
var map__35548__$1 = cljs.core.__destructure_map(map__35548);
var db = map__35548__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35548__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-converter-data-by-path","current-converter-data-by-path",-227281443),(function (p__35549,p__35550){
var map__35551 = p__35549;
var map__35551__$1 = cljs.core.__destructure_map(map__35551);
var db = map__35551__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35551__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__35552 = p__35550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35552,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35552,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var controller = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(controller,path);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-low-limiter-hot-spot","show-low-limiter-hot-spot",-909061148),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__35555,_){
var vec__35556 = p__35555;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35556,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35556,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-high-limiter-hot-spot","show-high-limiter-hot-spot",361134266),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter-id","high-limiter-id",1297275918)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__35559,_){
var vec__35560 = p__35559;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35560,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35560,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__35563,_){
var vec__35564 = p__35563;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35564,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35564,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__35567,_){
var vec__35568 = p__35567;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35568,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35568,(1),null);
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
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"level-calibration-boiler-view-subs","level-calibration-boiler-view-subs",-1283277188),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),(function (p__35571,_){
var vec__35572 = p__35571;
var kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35572,(0),null);
var level_controller_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35572,(1),null);
var controller_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none"))?"NRR 2-60":level_controller_id);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kit),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(controller_id),"/calibration-boiler-view"].join('');
})], 0));

//# sourceMappingURL=app.db.subs.js.map
