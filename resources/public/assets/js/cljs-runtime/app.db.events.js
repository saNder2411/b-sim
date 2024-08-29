goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__41465){
var map__41466 = p__41465;
var map__41466__$1 = cljs.core.__destructure_map(map__41466);
var screen__$1 = map__41466__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41466__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__41479){
var vec__41480 = p__41479;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41480,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41480,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41480,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__41496){
var vec__41497 = p__41496;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41497,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41497,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41497,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","connected","ws/connected",-169836913),(function (db,p__41504){
var vec__41505 = p__41504;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41505,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41505,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"connected","connected",-169833045)], null),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","connect","ws/connect",1232825645),(function (_,___$1){
app.ws.socket.start_BANG_();

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","connected","ws/connected",-169836913),true], null));
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","send!","ws/send!",480080966),(function (db,p__41511){
var vec__41512 = p__41511;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41512,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41512,(1),null);
app.ws.socket.send_BANG_(event);

return db;
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__41517){
var vec__41520 = p__41517;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41520,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41520,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__41530,p__41531){
var map__41532 = p__41530;
var map__41532__$1 = cljs.core.__destructure_map(map__41532);
var db = map__41532__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41532__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41533 = p__41531;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41533,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41533,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__41540,_){
var map__41541 = p__41540;
var map__41541__$1 = cljs.core.__destructure_map(map__41541);
var db = map__41541__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41541__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
console.log("reset sim - stop sim and prevent to default all sim modules","stop");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stop");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit-data-by-path","change-kit-data-by-path",1988332051),(function (p__41545,p__41546){
var map__41547 = p__41545;
var map__41547__$1 = cljs.core.__destructure_map(map__41547);
var db = map__41547__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41547__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41548 = p__41546;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41548,(0),null);
var vec__41551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41548,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41551,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41551,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__41555,_){
var map__41556 = p__41555;
var map__41556__$1 = cljs.core.__destructure_map(map__41556);
var db = map__41556__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41556__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"view","view",1247994814)], null),true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-steam-value","change-steam-value",-2091189212),(function (p__41558,p__41559){
var map__41560 = p__41558;
var map__41560__$1 = cljs.core.__destructure_map(map__41560);
var db = map__41560__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41560__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41561 = p__41559;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41561,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41561,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__41564 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__41564 * 1.016260162601626);
} else {
return G__41564;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-general-settings","restore-defaults-general-settings",1552850321),(function (p__41565,_){
var map__41566 = p__41565;
var map__41566__$1 = cljs.core.__destructure_map(map__41566);
var db = map__41566__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41566__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var actuator_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.GENERAL_SETTINGS,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),true], null)], 0));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),"t/h"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),default_values);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__41569,p__41570){
var map__41571 = p__41569;
var map__41571__$1 = cljs.core.__destructure_map(map__41571);
var db = map__41571__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41571__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41572 = p__41570;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41572,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41572,(1),null);
var kit_kw = kit;
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-low-limiter","change-current-low-limiter",-57143546),(function (p__41575,p__41576){
var map__41577 = p__41575;
var map__41577__$1 = cljs.core.__destructure_map(map__41577);
var db = map__41577__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41577__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41578 = p__41576;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41578,(0),null);
var vec__41581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41578,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-high-limiter","change-current-high-limiter",-1478754059),(function (p__41584,p__41585){
var map__41586 = p__41584;
var map__41586__$1 = cljs.core.__destructure_map(map__41586);
var db = map__41586__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41586__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41587 = p__41585;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41587,(0),null);
var vec__41590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41587,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41590,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41590,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-cond-controller","change-current-cond-controller",899229912),(function (p__41594,p__41595){
var map__41597 = p__41594;
var map__41597__$1 = cljs.core.__destructure_map(map__41597);
var db = map__41597__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41597__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41599 = p__41595;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41599,(0),null);
var vec__41602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41599,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41602,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41602,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-level-controller","change-current-level-controller",809952572),(function (p__41607,p__41608){
var map__41609 = p__41607;
var map__41609__$1 = cljs.core.__destructure_map(map__41609);
var db = map__41609__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41609__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41610 = p__41608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41610,(0),null);
var vec__41613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41610,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41613,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41613,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-feed-actuator","change-current-feed-actuator",-143362936),(function (p__41618,p__41619){
var map__41620 = p__41618;
var map__41620__$1 = cljs.core.__destructure_map(map__41620);
var db = map__41620__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41620__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41621 = p__41619;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41621,(0),null);
var vec__41624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41621,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41624,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41624,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var actuator_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-level-probe","change-current-level-probe",-11582907),(function (p__41633,p__41634){
var map__41635 = p__41633;
var map__41635__$1 = cljs.core.__destructure_map(map__41635);
var db = map__41635__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41635__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41636 = p__41634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41636,(0),null);
var vec__41639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41636,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41639,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41639,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-converter","change-current-converter",-654776456),(function (p__41650,p__41651){
var map__41652 = p__41650;
var map__41652__$1 = cljs.core.__destructure_map(map__41652);
var db = map__41652__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41652__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41653 = p__41651;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41653,(0),null);
var vec__41656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41653,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41656,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41656,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__41666,p__41667){
var map__41668 = p__41666;
var map__41668__$1 = cljs.core.__destructure_map(map__41668);
var db = map__41668__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41668__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41669 = p__41667;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41669,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41669,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__41675,p__41676){
var map__41678 = p__41675;
var map__41678__$1 = cljs.core.__destructure_map(map__41678);
var db = map__41678__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41678__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41680 = p__41676;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41680,(0),null);
var map__41683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41680,(1),null);
var map__41683__$1 = cljs.core.__destructure_map(map__41683);
var notification = map__41683__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41683__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__41684,p__41685){
var map__41686 = p__41684;
var map__41686__$1 = cljs.core.__destructure_map(map__41686);
var db = map__41686__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41686__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__41687 = p__41685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41687,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41687,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
