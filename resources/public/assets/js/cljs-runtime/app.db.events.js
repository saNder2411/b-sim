goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__31668){
var map__31669 = p__31668;
var map__31669__$1 = cljs.core.__destructure_map(map__31669);
var screen__$1 = map__31669__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31669__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__31670){
var vec__31671 = p__31670;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31671,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31671,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31671,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__31674){
var vec__31675 = p__31674;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31675,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31675,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31675,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__31678){
var vec__31679 = p__31678;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31679,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31679,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__31682,p__31683){
var map__31684 = p__31682;
var map__31684__$1 = cljs.core.__destructure_map(map__31684);
var db = map__31684__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31684__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31685 = p__31683;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31685,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31685,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__31688,_){
var map__31689 = p__31688;
var map__31689__$1 = cljs.core.__destructure_map(map__31689);
var db = map__31689__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31689__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit-data-by-path","change-kit-data-by-path",1988332051),(function (p__31690,p__31691){
var map__31692 = p__31690;
var map__31692__$1 = cljs.core.__destructure_map(map__31692);
var db = map__31692__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31692__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31693 = p__31691;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31693,(0),null);
var vec__31696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31693,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31696,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31696,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__31699,_){
var map__31700 = p__31699;
var map__31700__$1 = cljs.core.__destructure_map(map__31700);
var db = map__31700__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31700__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"view","view",1247994814)], null),true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-steam-value","change-steam-value",-2091189212),(function (p__31701,p__31702){
var map__31703 = p__31701;
var map__31703__$1 = cljs.core.__destructure_map(map__31703);
var db = map__31703__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31703__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31704 = p__31702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31704,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31704,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__31707 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__31707 * 1.016260162601626);
} else {
return G__31707;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-general-settings","restore-defaults-general-settings",1552850321),(function (p__31708,_){
var map__31709 = p__31708;
var map__31709__$1 = cljs.core.__destructure_map(map__31709);
var db = map__31709__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31709__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var actuator_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.GENERAL_SETTINGS,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),true], null)], 0));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),"t/h"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),default_values);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__31710,p__31711){
var map__31712 = p__31710;
var map__31712__$1 = cljs.core.__destructure_map(map__31712);
var db = map__31712__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31712__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31713 = p__31711;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31713,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31713,(1),null);
var kit_kw = kit;
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-low-limiter","change-current-low-limiter",-57143546),(function (p__31716,p__31717){
var map__31718 = p__31716;
var map__31718__$1 = cljs.core.__destructure_map(map__31718);
var db = map__31718__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31718__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31719 = p__31717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31719,(0),null);
var vec__31722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31719,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31722,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31722,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-high-limiter","change-current-high-limiter",-1478754059),(function (p__31725,p__31726){
var map__31727 = p__31725;
var map__31727__$1 = cljs.core.__destructure_map(map__31727);
var db = map__31727__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31727__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31728 = p__31726;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31728,(0),null);
var vec__31731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31728,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31731,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31731,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-cond-controller","change-current-cond-controller",899229912),(function (p__31734,p__31735){
var map__31736 = p__31734;
var map__31736__$1 = cljs.core.__destructure_map(map__31736);
var db = map__31736__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31736__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31737 = p__31735;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31737,(0),null);
var vec__31740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31737,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31740,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31740,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-level-controller","change-current-level-controller",809952572),(function (p__31743,p__31744){
var map__31745 = p__31743;
var map__31745__$1 = cljs.core.__destructure_map(map__31745);
var db = map__31745__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31745__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31746 = p__31744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31746,(0),null);
var vec__31749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31746,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31749,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31749,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-feed-actuator","change-current-feed-actuator",-143362936),(function (p__31752,p__31753){
var map__31754 = p__31752;
var map__31754__$1 = cljs.core.__destructure_map(map__31754);
var db = map__31754__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31754__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31755 = p__31753;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31755,(0),null);
var vec__31758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31755,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31758,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31758,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var actuator_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-level-probe","change-current-level-probe",-11582907),(function (p__31761,p__31762){
var map__31763 = p__31761;
var map__31763__$1 = cljs.core.__destructure_map(map__31763);
var db = map__31763__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31763__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31764 = p__31762;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31764,(0),null);
var vec__31767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31764,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31767,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31767,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-converter","change-current-converter",-654776456),(function (p__31770,p__31771){
var map__31772 = p__31770;
var map__31772__$1 = cljs.core.__destructure_map(map__31772);
var db = map__31772__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31772__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31773 = p__31771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31773,(0),null);
var vec__31776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31773,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31776,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31776,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__31779,p__31780){
var map__31781 = p__31779;
var map__31781__$1 = cljs.core.__destructure_map(map__31781);
var db = map__31781__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31781__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31782 = p__31780;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31782,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31782,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__31785,p__31786){
var map__31787 = p__31785;
var map__31787__$1 = cljs.core.__destructure_map(map__31787);
var db = map__31787__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31787__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31788 = p__31786;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31788,(0),null);
var map__31791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31788,(1),null);
var map__31791__$1 = cljs.core.__destructure_map(map__31791);
var notification = map__31791__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31791__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__31792,p__31793){
var map__31794 = p__31792;
var map__31794__$1 = cljs.core.__destructure_map(map__31794);
var db = map__31794__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31794__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31795 = p__31793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31795,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31795,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
