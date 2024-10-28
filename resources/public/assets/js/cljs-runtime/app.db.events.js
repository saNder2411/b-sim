goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__43577){
var map__43578 = p__43577;
var map__43578__$1 = cljs.core.__destructure_map(map__43578);
var screen__$1 = map__43578__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43578__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","initialize","db/initialize",609949715),(function (_,p__43647){
var vec__43653 = p__43647;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43653,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43653,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43653,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("screen","resize","screen/resize",-600623550),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__43674){
var vec__43684 = p__43674;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43684,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43684,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43684,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","connected","ws/connected",-169836913),(function (db,p__43697){
var vec__43698 = p__43697;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43698,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43698,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"connected","connected",-169833045)], null),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","connect","ws/connect",1232825645),(function (_,___$1){
app.ws.socket.start_BANG_();

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","connected","ws/connected",-169836913),true], null));
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","send!","ws/send!",480080966),(function (db,p__43716){
var vec__43718 = p__43716;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43718,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43718,(1),null);
app.ws.socket.send_BANG_(event);

return db;
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kit","change","kit/change",-1163136888),(function (db,p__43722){
var vec__43724 = p__43722;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43724,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43724,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sim","change","sim/change",-1163161977),(function (p__43730,p__43731){
var map__43732 = p__43730;
var map__43732__$1 = cljs.core.__destructure_map(map__43732);
var db = map__43732__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43732__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43733 = p__43731;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43733,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43733,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sim","reset","sim/reset",-801339251),(function (p__43738,_){
var map__43739 = p__43738;
var map__43739__$1 = cljs.core.__destructure_map(map__43739);
var db = map__43739__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43739__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
console.log("reset sim - stop sim and prevent to default all sim modules","stop");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stop");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kit-data-by-path","change","kit-data-by-path/change",97342319),(function (p__43740,p__43741){
var map__43742 = p__43740;
var map__43742__$1 = cljs.core.__destructure_map(map__43742);
var db = map__43742__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43742__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43743 = p__43741;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43743,(0),null);
var vec__43746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43743,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43746,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43746,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("general-settings","open","general-settings/open",1296755448),(function (p__43749,_){
var map__43750 = p__43749;
var map__43750__$1 = cljs.core.__destructure_map(map__43750);
var db = map__43750__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43750__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"view","view",1247994814)], null),true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("steam-value","change","steam-value/change",1132333798),(function (p__43751,p__43752){
var map__43753 = p__43751;
var map__43753__$1 = cljs.core.__destructure_map(map__43753);
var db = map__43753__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43753__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43754 = p__43752;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43754,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43754,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43757 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__43757 * 1.016260162601626);
} else {
return G__43757;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("general-settings","restore-defaults","general-settings/restore-defaults",981861365),(function (p__43758,_){
var map__43759 = p__43758;
var map__43759__$1 = cljs.core.__destructure_map(map__43759);
var db = map__43759__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43759__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var actuator_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.GENERAL_SETTINGS,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),true], null)], 0));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),"t/h"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),default_values);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-hotspot","change","current-hotspot/change",80910115),(function (p__43762,p__43763){
var map__43771 = p__43762;
var map__43771__$1 = cljs.core.__destructure_map(map__43771);
var db = map__43771__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43771__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43772 = p__43763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43772,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43772,(1),null);
var kit_kw = kit;
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-low-limiter","change","current-low-limiter/change",-1735296125),(function (p__43777,p__43778){
var map__43779 = p__43777;
var map__43779__$1 = cljs.core.__destructure_map(map__43779);
var db = map__43779__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43779__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43780 = p__43778;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43780,(0),null);
var vec__43783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43780,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43783,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43783,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-high-limiter","change","current-high-limiter/change",-1635841687),(function (p__43788,p__43789){
var map__43790 = p__43788;
var map__43790__$1 = cljs.core.__destructure_map(map__43790);
var db = map__43790__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43790__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43791 = p__43789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43791,(0),null);
var vec__43794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43791,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43794,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43794,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-cond-controller","change","current-cond-controller/change",-291388693),(function (p__43797,p__43798){
var map__43799 = p__43797;
var map__43799__$1 = cljs.core.__destructure_map(map__43799);
var db = map__43799__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43799__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43800 = p__43798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43800,(0),null);
var vec__43803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43800,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-level-controller","change","current-level-controller/change",1162658817),(function (p__43806,p__43807){
var map__43808 = p__43806;
var map__43808__$1 = cljs.core.__destructure_map(map__43808);
var db = map__43808__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43808__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43809 = p__43807;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43809,(0),null);
var vec__43812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43809,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43812,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43812,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-feed-actuator","change","current-feed-actuator/change",-1435356762),(function (p__43815,p__43816){
var map__43817 = p__43815;
var map__43817__$1 = cljs.core.__destructure_map(map__43817);
var db = map__43817__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43817__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43818 = p__43816;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43818,(0),null);
var vec__43821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43818,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43821,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43821,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var actuator_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-level-probe","change","current-level-probe/change",-940636693),(function (p__43824,p__43825){
var map__43826 = p__43824;
var map__43826__$1 = cljs.core.__destructure_map(map__43826);
var db = map__43826__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43826__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43827 = p__43825;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43827,(0),null);
var vec__43830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43827,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43830,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43830,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-converter","change","current-converter/change",-1883715730),(function (p__43833,p__43834){
var map__43835 = p__43833;
var map__43835__$1 = cljs.core.__destructure_map(map__43835);
var db = map__43835__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43835__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43836 = p__43834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(0),null);
var vec__43839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43836,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43839,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43839,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),(function (p__43842,p__43843){
var map__43844 = p__43842;
var map__43844__$1 = cljs.core.__destructure_map(map__43844);
var db = map__43844__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43844__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43845 = p__43843;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43845,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43845,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("notifications","push","notifications/push",-54901957),(function (p__43848,p__43849){
var map__43850 = p__43848;
var map__43850__$1 = cljs.core.__destructure_map(map__43850);
var db = map__43850__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43850__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43851 = p__43849;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43851,(0),null);
var map__43854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43851,(1),null);
var map__43854__$1 = cljs.core.__destructure_map(map__43854);
var notification = map__43854__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43854__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("notifications","delete","notifications/delete",-757483500),(function (p__43855,p__43856){
var map__43857 = p__43855;
var map__43857__$1 = cljs.core.__destructure_map(map__43857);
var db = map__43857__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43857__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43858 = p__43856;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43858,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43858,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
