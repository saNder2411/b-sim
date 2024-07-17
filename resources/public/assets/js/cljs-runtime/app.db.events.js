goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__39660){
var map__39661 = p__39660;
var map__39661__$1 = cljs.core.__destructure_map(map__39661);
var screen__$1 = map__39661__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39661__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__39662){
var vec__39663 = p__39662;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39663,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39663,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39663,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__39666){
var vec__39667 = p__39666;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39667,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39667,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39667,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__39670){
var vec__39671 = p__39670;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39671,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39671,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__39674,p__39675){
var map__39676 = p__39674;
var map__39676__$1 = cljs.core.__destructure_map(map__39676);
var db = map__39676__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39676__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39677 = p__39675;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39677,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39677,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__39680,_){
var map__39681 = p__39680;
var map__39681__$1 = cljs.core.__destructure_map(map__39681);
var db = map__39681__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39681__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit-data-by-path","change-kit-data-by-path",1988332051),(function (p__39682,p__39683){
var map__39684 = p__39682;
var map__39684__$1 = cljs.core.__destructure_map(map__39684);
var db = map__39684__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39684__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39685 = p__39683;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39685,(0),null);
var vec__39688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39685,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39688,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39688,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__39691,_){
var map__39692 = p__39691;
var map__39692__$1 = cljs.core.__destructure_map(map__39692);
var db = map__39692__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39692__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"view","view",1247994814)], null),true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-steam-value","change-steam-value",-2091189212),(function (p__39693,p__39694){
var map__39695 = p__39693;
var map__39695__$1 = cljs.core.__destructure_map(map__39695);
var db = map__39695__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39695__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39696 = p__39694;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39696,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39696,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__39699 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__39699 * 1.016260162601626);
} else {
return G__39699;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-general-settings","restore-defaults-general-settings",1552850321),(function (p__39700,_){
var map__39701 = p__39700;
var map__39701__$1 = cljs.core.__destructure_map(map__39701);
var db = map__39701__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39701__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var actuator_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.GENERAL_SETTINGS,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),true], null)], 0));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),"t/h"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),default_values);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__39702,p__39703){
var map__39704 = p__39702;
var map__39704__$1 = cljs.core.__destructure_map(map__39704);
var db = map__39704__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39704__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39705 = p__39703;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39705,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39705,(1),null);
var kit_kw = kit;
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-low-limiter","change-current-low-limiter",-57143546),(function (p__39708,p__39709){
var map__39710 = p__39708;
var map__39710__$1 = cljs.core.__destructure_map(map__39710);
var db = map__39710__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39710__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39711 = p__39709;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39711,(0),null);
var vec__39714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39711,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39714,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39714,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-high-limiter","change-current-high-limiter",-1478754059),(function (p__39717,p__39718){
var map__39719 = p__39717;
var map__39719__$1 = cljs.core.__destructure_map(map__39719);
var db = map__39719__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39719__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39720 = p__39718;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39720,(0),null);
var vec__39723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39720,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39723,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39723,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-cond-controller","change-current-cond-controller",899229912),(function (p__39726,p__39727){
var map__39728 = p__39726;
var map__39728__$1 = cljs.core.__destructure_map(map__39728);
var db = map__39728__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39728__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39729 = p__39727;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39729,(0),null);
var vec__39732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39729,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39732,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39732,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-level-controller","change-current-level-controller",809952572),(function (p__39735,p__39736){
var map__39737 = p__39735;
var map__39737__$1 = cljs.core.__destructure_map(map__39737);
var db = map__39737__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39737__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39738 = p__39736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39738,(0),null);
var vec__39741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39738,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39741,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39741,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-feed-actuator","change-current-feed-actuator",-143362936),(function (p__39744,p__39745){
var map__39746 = p__39744;
var map__39746__$1 = cljs.core.__destructure_map(map__39746);
var db = map__39746__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39746__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39747 = p__39745;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39747,(0),null);
var vec__39750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39747,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39750,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39750,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var actuator_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-level-probe","change-current-level-probe",-11582907),(function (p__39753,p__39754){
var map__39755 = p__39753;
var map__39755__$1 = cljs.core.__destructure_map(map__39755);
var db = map__39755__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39755__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39756 = p__39754;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39756,(0),null);
var vec__39759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39756,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39759,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39759,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-converter","change-current-converter",-654776456),(function (p__39762,p__39763){
var map__39764 = p__39762;
var map__39764__$1 = cljs.core.__destructure_map(map__39764);
var db = map__39764__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39764__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39765 = p__39763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39765,(0),null);
var vec__39768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39765,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39768,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39768,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__39771,p__39772){
var map__39773 = p__39771;
var map__39773__$1 = cljs.core.__destructure_map(map__39773);
var db = map__39773__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39773__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39774 = p__39772;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39774,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39774,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__39777,p__39778){
var map__39779 = p__39777;
var map__39779__$1 = cljs.core.__destructure_map(map__39779);
var db = map__39779__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39779__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39780 = p__39778;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39780,(0),null);
var map__39783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39780,(1),null);
var map__39783__$1 = cljs.core.__destructure_map(map__39783);
var notification = map__39783__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39783__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__39784,p__39785){
var map__39786 = p__39784;
var map__39786__$1 = cljs.core.__destructure_map(map__39786);
var db = map__39786__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39786__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__39787 = p__39785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39787,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39787,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
