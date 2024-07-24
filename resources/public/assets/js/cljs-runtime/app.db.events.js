goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__43663){
var map__43664 = p__43663;
var map__43664__$1 = cljs.core.__destructure_map(map__43664);
var screen__$1 = map__43664__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43664__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__43665){
var vec__43666 = p__43665;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43666,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43666,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43666,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__43671){
var vec__43672 = p__43671;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__43675){
var vec__43676 = p__43675;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43676,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43676,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__43679,p__43680){
var map__43681 = p__43679;
var map__43681__$1 = cljs.core.__destructure_map(map__43681);
var db = map__43681__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43681__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43682 = p__43680;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43682,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43682,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__43685,_){
var map__43686 = p__43685;
var map__43686__$1 = cljs.core.__destructure_map(map__43686);
var db = map__43686__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43686__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit-data-by-path","change-kit-data-by-path",1988332051),(function (p__43687,p__43688){
var map__43689 = p__43687;
var map__43689__$1 = cljs.core.__destructure_map(map__43689);
var db = map__43689__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43689__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43690 = p__43688;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43690,(0),null);
var vec__43693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43690,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43693,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43693,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__43696,_){
var map__43697 = p__43696;
var map__43697__$1 = cljs.core.__destructure_map(map__43697);
var db = map__43697__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43697__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"view","view",1247994814)], null),true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-steam-value","change-steam-value",-2091189212),(function (p__43698,p__43699){
var map__43700 = p__43698;
var map__43700__$1 = cljs.core.__destructure_map(map__43700);
var db = map__43700__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43700__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43701 = p__43699;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43701,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43701,(1),null);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__43704 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"T/h")){
return (G__43704 * 1.016260162601626);
} else {
return G__43704;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-defaults-general-settings","restore-defaults-general-settings",1552850321),(function (p__43705,_){
var map__43706 = p__43705;
var map__43706__$1 = cljs.core.__destructure_map(map__43706);
var db = map__43706__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43706__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var actuator_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
var default_values = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.db.defaults.GENERAL_SETTINGS,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),true], null)], 0));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type,new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),"t/h"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710)], null),default_values);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__43707,p__43708){
var map__43709 = p__43707;
var map__43709__$1 = cljs.core.__destructure_map(map__43709);
var db = map__43709__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43709__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43710 = p__43708;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43710,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43710,(1),null);
var kit_kw = kit;
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-low-limiter","change-current-low-limiter",-57143546),(function (p__43713,p__43714){
var map__43715 = p__43713;
var map__43715__$1 = cljs.core.__destructure_map(map__43715);
var db = map__43715__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43715__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43716 = p__43714;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43716,(0),null);
var vec__43719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43716,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43719,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43719,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-high-limiter","change-current-high-limiter",-1478754059),(function (p__43722,p__43723){
var map__43724 = p__43722;
var map__43724__$1 = cljs.core.__destructure_map(map__43724);
var db = map__43724__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43724__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43725 = p__43723;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43725,(0),null);
var vec__43728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43725,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43728,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43728,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-cond-controller","change-current-cond-controller",899229912),(function (p__43731,p__43732){
var map__43733 = p__43731;
var map__43733__$1 = cljs.core.__destructure_map(map__43733);
var db = map__43733__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43733__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43734 = p__43732;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43734,(0),null);
var vec__43737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43734,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43737,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43737,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-level-controller","change-current-level-controller",809952572),(function (p__43740,p__43741){
var map__43742 = p__43740;
var map__43742__$1 = cljs.core.__destructure_map(map__43742);
var db = map__43742__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43742__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43743 = p__43741;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43743,(0),null);
var vec__43746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43743,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43746,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43746,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-feed-actuator","change-current-feed-actuator",-143362936),(function (p__43749,p__43750){
var map__43751 = p__43749;
var map__43751__$1 = cljs.core.__destructure_map(map__43751);
var db = map__43751__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43751__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43752 = p__43750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43752,(0),null);
var vec__43755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43752,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43755,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43755,(1),null);
var controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
var actuator_type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),actuator_type], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-level-probe","change-current-level-probe",-11582907),(function (p__43758,p__43759){
var map__43760 = p__43758;
var map__43760__$1 = cljs.core.__destructure_map(map__43760);
var db = map__43760__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43760__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43761 = p__43759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43761,(0),null);
var vec__43764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43761,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43764,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43764,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-converter","change-current-converter",-654776456),(function (p__43767,p__43768){
var map__43769 = p__43767;
var map__43769__$1 = cljs.core.__destructure_map(map__43769);
var db = map__43769__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43769__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43770 = p__43768;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43770,(0),null);
var vec__43773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43770,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43773,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43773,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__43776,p__43777){
var map__43778 = p__43776;
var map__43778__$1 = cljs.core.__destructure_map(map__43778);
var db = map__43778__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43778__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43779 = p__43777;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43779,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43779,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__43782,p__43783){
var map__43784 = p__43782;
var map__43784__$1 = cljs.core.__destructure_map(map__43784);
var db = map__43784__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43784__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43785 = p__43783;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43785,(0),null);
var map__43788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43785,(1),null);
var map__43788__$1 = cljs.core.__destructure_map(map__43788);
var notification = map__43788__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43788__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__43789,p__43790){
var map__43791 = p__43789;
var map__43791__$1 = cljs.core.__destructure_map(map__43791);
var db = map__43791__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43791__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__43792 = p__43790;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43792,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43792,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
