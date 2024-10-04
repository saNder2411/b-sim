goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__39345){
var map__39346 = p__39345;
var map__39346__$1 = cljs.core.__destructure_map(map__39346);
var screen__$1 = map__39346__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39346__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","initialize","db/initialize",609949715),(function (_,p__39355){
var vec__39364 = p__39355;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39364,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39364,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39364,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("screen","resize","screen/resize",-600623550),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__39368){
var vec__39370 = p__39368;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39370,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39370,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39370,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","connected","ws/connected",-169836913),(function (db,p__39373){
var vec__39374 = p__39373;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39374,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39374,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"connected","connected",-169833045)], null),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","connect","ws/connect",1232825645),(function (_,___$1){
app.ws.socket.start_BANG_();

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","connected","ws/connected",-169836913),true], null));
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","send!","ws/send!",480080966),(function (db,p__39377){
var vec__39378 = p__39377;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39378,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39378,(1),null);
app.ws.socket.send_BANG_(event);

return db;
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kit","change","kit/change",-1163136888),(function (db,p__39381){
var vec__39382 = p__39381;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39382,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39382,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sim","change","sim/change",-1163161977),(function (p__39385,p__39386){
var map__39387 = p__39385;
var map__39387__$1 = cljs.core.__destructure_map(map__39387);
var db = map__39387__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39387__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39388 = p__39386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39388,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39388,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sim","reset","sim/reset",-801339251),(function (p__39391,_){
var map__39392 = p__39391;
var map__39392__$1 = cljs.core.__destructure_map(map__39392);
var db = map__39392__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39392__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
console.log("reset sim - stop sim and prevent to default all sim modules","stop");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stop");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kit-data-by-path","change","kit-data-by-path/change",97342319),(function (p__39393,p__39394){
var map__39404 = p__39393;
var map__39404__$1 = cljs.core.__destructure_map(map__39404);
var db = map__39404__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39404__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39405 = p__39394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39405,(0),null);
var vec__39408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39405,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39408,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39408,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("general-settings","open","general-settings/open",1296755448),(function (p__39413,_){
var map__39414 = p__39413;
var map__39414__$1 = cljs.core.__destructure_map(map__39414);
var db = map__39414__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39414__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"view","view",1247994814)], null),true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("steam-value","change","steam-value/change",1132333798),(function (p__39415,p__39416){
var map__39417 = p__39415;
var map__39417__$1 = cljs.core.__destructure_map(map__39417);
var db = map__39417__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39417__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39418 = p__39416;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39418,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39418,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39421 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__39421 * 1.016260162601626);
} else {
return G__39421;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("general-settings","restore-defaults","general-settings/restore-defaults",981861365),(function (p__39422,_){
var map__39423 = p__39422;
var map__39423__$1 = cljs.core.__destructure_map(map__39423);
var db = map__39423__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39423__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var actuator_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.GENERAL_SETTINGS,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),true], null)], 0));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),"t/h"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),default_values);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-hotspot","change","current-hotspot/change",80910115),(function (p__39428,p__39429){
var map__39437 = p__39428;
var map__39437__$1 = cljs.core.__destructure_map(map__39437);
var db = map__39437__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39437__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39438 = p__39429;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39438,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39438,(1),null);
var kit_kw = kit;
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-low-limiter","change","current-low-limiter/change",-1735296125),(function (p__39442,p__39443){
var map__39445 = p__39442;
var map__39445__$1 = cljs.core.__destructure_map(map__39445);
var db = map__39445__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39445__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39446 = p__39443;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39446,(0),null);
var vec__39449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39446,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39449,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39449,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-high-limiter","change","current-high-limiter/change",-1635841687),(function (p__39454,p__39455){
var map__39458 = p__39454;
var map__39458__$1 = cljs.core.__destructure_map(map__39458);
var db = map__39458__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39458__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39459 = p__39455;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39459,(0),null);
var vec__39462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39459,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39462,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39462,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-cond-controller","change","current-cond-controller/change",-291388693),(function (p__39479,p__39480){
var map__39483 = p__39479;
var map__39483__$1 = cljs.core.__destructure_map(map__39483);
var db = map__39483__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39483__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39484 = p__39480;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39484,(0),null);
var vec__39487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39484,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39487,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39487,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-level-controller","change","current-level-controller/change",1162658817),(function (p__39493,p__39494){
var map__39495 = p__39493;
var map__39495__$1 = cljs.core.__destructure_map(map__39495);
var db = map__39495__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39495__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39496 = p__39494;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39496,(0),null);
var vec__39499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39496,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39499,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39499,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-feed-actuator","change","current-feed-actuator/change",-1435356762),(function (p__39518,p__39519){
var map__39520 = p__39518;
var map__39520__$1 = cljs.core.__destructure_map(map__39520);
var db = map__39520__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39520__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39521 = p__39519;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39521,(0),null);
var vec__39524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39521,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39524,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39524,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var actuator_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-level-probe","change","current-level-probe/change",-940636693),(function (p__39531,p__39532){
var map__39536 = p__39531;
var map__39536__$1 = cljs.core.__destructure_map(map__39536);
var db = map__39536__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39536__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39537 = p__39532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39537,(0),null);
var vec__39540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39537,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39540,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39540,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("current-converter","change","current-converter/change",-1883715730),(function (p__39552,p__39554){
var map__39557 = p__39552;
var map__39557__$1 = cljs.core.__destructure_map(map__39557);
var db = map__39557__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39557__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39558 = p__39554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39558,(0),null);
var vec__39561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39558,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39561,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39561,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),(function (p__39567,p__39568){
var map__39570 = p__39567;
var map__39570__$1 = cljs.core.__destructure_map(map__39570);
var db = map__39570__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39570__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39571 = p__39568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39571,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39571,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("notifications","push","notifications/push",-54901957),(function (p__39581,p__39582){
var map__39585 = p__39581;
var map__39585__$1 = cljs.core.__destructure_map(map__39585);
var db = map__39585__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39585__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39588 = p__39582;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39588,(0),null);
var map__39591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39588,(1),null);
var map__39591__$1 = cljs.core.__destructure_map(map__39591);
var notification = map__39591__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39591__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("notifications","delete","notifications/delete",-757483500),(function (p__39596,p__39597){
var map__39599 = p__39596;
var map__39599__$1 = cljs.core.__destructure_map(map__39599);
var db = map__39599__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39599__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39600 = p__39597;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39600,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39600,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
