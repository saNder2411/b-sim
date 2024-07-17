goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__36176){
var map__36177 = p__36176;
var map__36177__$1 = cljs.core.__destructure_map(map__36177);
var screen__$1 = map__36177__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36177__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__36178){
var vec__36179 = p__36178;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36179,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36179,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36179,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__36182){
var vec__36183 = p__36182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36183,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36183,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36183,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__36186){
var vec__36187 = p__36186;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36187,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36187,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__36190,p__36191){
var map__36192 = p__36190;
var map__36192__$1 = cljs.core.__destructure_map(map__36192);
var db = map__36192__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36193 = p__36191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36193,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36193,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__36196,_){
var map__36197 = p__36196;
var map__36197__$1 = cljs.core.__destructure_map(map__36197);
var db = map__36197__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36197__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit-data-by-path","change-kit-data-by-path",1988332051),(function (p__36198,p__36199){
var map__36200 = p__36198;
var map__36200__$1 = cljs.core.__destructure_map(map__36200);
var db = map__36200__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36200__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36201 = p__36199;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36201,(0),null);
var vec__36204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36201,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36204,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36204,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__36207,_){
var map__36208 = p__36207;
var map__36208__$1 = cljs.core.__destructure_map(map__36208);
var db = map__36208__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36208__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"view","view",1247994814)], null),true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__36209,p__36210){
var map__36211 = p__36209;
var map__36211__$1 = cljs.core.__destructure_map(map__36211);
var db = map__36211__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36211__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36212 = p__36210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36212,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36212,(1),null);
var kit_kw = kit;
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"hotspots","hotspots",2078718410),new cljs.core.Keyword(null,"current","current",-1088038603)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-low-limiter","change-current-low-limiter",-57143546),(function (p__36215,p__36216){
var map__36217 = p__36215;
var map__36217__$1 = cljs.core.__destructure_map(map__36217);
var db = map__36217__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36217__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36218 = p__36216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36218,(0),null);
var vec__36221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36218,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36221,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36221,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-high-limiter","change-current-high-limiter",-1478754059),(function (p__36224,p__36225){
var map__36226 = p__36224;
var map__36226__$1 = cljs.core.__destructure_map(map__36226);
var db = map__36226__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36226__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36227 = p__36225;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36227,(0),null);
var vec__36230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36227,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36230,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36230,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-cond-controller","change-current-cond-controller",899229912),(function (p__36233,p__36234){
var map__36235 = p__36233;
var map__36235__$1 = cljs.core.__destructure_map(map__36235);
var db = map__36235__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36235__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36236 = p__36234;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36236,(0),null);
var vec__36239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36236,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36239,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36239,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-level-controller","change-current-level-controller",809952572),(function (p__36242,p__36243){
var map__36244 = p__36242;
var map__36244__$1 = cljs.core.__destructure_map(map__36244);
var db = map__36244__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36244__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36245 = p__36243;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36245,(0),null);
var vec__36248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36245,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36248,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36248,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-level-probe","change-current-level-probe",-11582907),(function (p__36251,p__36252){
var map__36253 = p__36251;
var map__36253__$1 = cljs.core.__destructure_map(map__36253);
var db = map__36253__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36253__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36254 = p__36252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36254,(0),null);
var vec__36257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36254,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36257,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36257,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probe-ids","probe-ids",464573372),(0)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-converter","change-current-converter",-654776456),(function (p__36260,p__36261){
var map__36262 = p__36260;
var map__36262__$1 = cljs.core.__destructure_map(map__36262);
var db = map__36262__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36262__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36263 = p__36261;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36263,(0),null);
var vec__36266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36263,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36266,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36266,(1),null);
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"system-config","system-config",814819577),new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controller-id","controller-id",-1034203751)], null));
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),id], null),path),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__36269,p__36270){
var map__36271 = p__36269;
var map__36271__$1 = cljs.core.__destructure_map(map__36271);
var db = map__36271__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36271__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36272 = p__36270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36272,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__36275,p__36276){
var map__36277 = p__36275;
var map__36277__$1 = cljs.core.__destructure_map(map__36277);
var db = map__36277__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36278 = p__36276;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(0),null);
var map__36281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36278,(1),null);
var map__36281__$1 = cljs.core.__destructure_map(map__36281);
var notification = map__36281__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36281__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__36282,p__36283){
var map__36284 = p__36282;
var map__36284__$1 = cljs.core.__destructure_map(map__36284);
var db = map__36284__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36284__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__36285 = p__36283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36285,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36285,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit,new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
