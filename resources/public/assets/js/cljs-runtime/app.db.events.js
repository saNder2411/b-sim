goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__30047){
var map__30048 = p__30047;
var map__30048__$1 = cljs.core.__destructure_map(map__30048);
var screen__$1 = map__30048__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30048__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__30049){
var vec__30050 = p__30049;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30050,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30050,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30050,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__30053){
var vec__30054 = p__30053;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30054,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30054,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30054,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__30057){
var vec__30058 = p__30057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30058,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30058,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__30061,p__30062){
var map__30063 = p__30061;
var map__30063__$1 = cljs.core.__destructure_map(map__30063);
var db = map__30063__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30063__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30064 = p__30062;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30064,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30064,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__30067,p__30068){
var map__30069 = p__30067;
var map__30069__$1 = cljs.core.__destructure_map(map__30069);
var db = map__30069__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30069__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30070 = p__30068;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30070,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30070,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-ctrl-panel-view","set-ctrl-panel-view",1352275081),(function (p__30073,p__30074){
var map__30075 = p__30073;
var map__30075__$1 = cljs.core.__destructure_map(map__30075);
var db = map__30075__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30075__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30076 = p__30074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30076,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30076,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-settings-modal-view","set-settings-modal-view",1119075276),(function (p__30079,p__30080){
var map__30081 = p__30079;
var map__30081__$1 = cljs.core.__destructure_map(map__30081);
var db = map__30081__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30081__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30082 = p__30080;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30082,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30082,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-highlight-hotspots","set-highlight-hotspots",1813720726),(function (p__30085,p__30086){
var map__30087 = p__30085;
var map__30087__$1 = cljs.core.__destructure_map(map__30087);
var db = map__30087__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30087__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30088 = p__30086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30088,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30088,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__30091,p__30092){
var map__30093 = p__30091;
var map__30093__$1 = cljs.core.__destructure_map(map__30093);
var db = map__30093__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30093__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30094 = p__30092;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30094,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30094,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (db,p__30097){
var vec__30098 = p__30097;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30098,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30098,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (db,p__30101){
var vec__30102 = p__30101;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30102,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30102,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__30105,p__30106){
var map__30107 = p__30105;
var map__30107__$1 = cljs.core.__destructure_map(map__30107);
var db = map__30107__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30107__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30108 = p__30106;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-limiter-full-screen","change-burner-limiter-full-screen",2051559587),(function (p__30111,p__30112){
var map__30113 = p__30111;
var map__30113__$1 = cljs.core.__destructure_map(map__30113);
var db = map__30113__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30113__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30114 = p__30112;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30114,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30114,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner-limiter-full-screen","burner-limiter-full-screen",-868941454)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-pump-limiter-full-screen","change-pump-limiter-full-screen",2015787077),(function (p__30117,p__30118){
var map__30119 = p__30117;
var map__30119__$1 = cljs.core.__destructure_map(map__30119);
var db = map__30119__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30119__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30120 = p__30118;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30120,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30120,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"pump-limiter-full-screen","pump-limiter-full-screen",1764116550)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__30123,p__30124){
var map__30125 = p__30123;
var map__30125__$1 = cljs.core.__destructure_map(map__30125);
var db = map__30125__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30125__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30126 = p__30124;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30126,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30126,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__30129,p__30130){
var map__30131 = p__30129;
var map__30131__$1 = cljs.core.__destructure_map(map__30131);
var db = map__30131__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30131__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30132 = p__30130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30132,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30132,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__30135,p__30136){
var map__30137 = p__30135;
var map__30137__$1 = cljs.core.__destructure_map(map__30137);
var db = map__30137__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30137__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30138 = p__30136;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30138,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30138,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-probe-full-screen","level-probe-full-screen",1985358396)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__30141,p__30142){
var map__30143 = p__30141;
var map__30143__$1 = cljs.core.__destructure_map(map__30143);
var db = map__30143__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30143__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__30144 = p__30142;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30144,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30144,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"converter-full-screen","converter-full-screen",-1003770390)], null),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
