goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__37199){
var map__37200 = p__37199;
var map__37200__$1 = cljs.core.__destructure_map(map__37200);
var screen__$1 = map__37200__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37200__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__37201){
var vec__37202 = p__37201;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37202,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37202,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37202,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__37205){
var vec__37206 = p__37205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37206,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37206,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37206,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__37209){
var vec__37210 = p__37209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37210,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37210,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__37213,p__37214){
var map__37215 = p__37213;
var map__37215__$1 = cljs.core.__destructure_map(map__37215);
var db = map__37215__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37215__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37216 = p__37214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37216,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37216,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__37219,p__37220){
var map__37221 = p__37219;
var map__37221__$1 = cljs.core.__destructure_map(map__37221);
var db = map__37221__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37221__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37222 = p__37220;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37222,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37222,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-ctrl-panel-view","set-ctrl-panel-view",1352275081),(function (p__37225,p__37226){
var map__37227 = p__37225;
var map__37227__$1 = cljs.core.__destructure_map(map__37227);
var db = map__37227__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37228 = p__37226;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37228,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-settings-modal-view","set-settings-modal-view",1119075276),(function (p__37231,p__37232){
var map__37233 = p__37231;
var map__37233__$1 = cljs.core.__destructure_map(map__37233);
var db = map__37233__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37233__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37234 = p__37232;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37234,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37234,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-highlight-hotspots","set-highlight-hotspots",1813720726),(function (p__37237,p__37238){
var map__37239 = p__37237;
var map__37239__$1 = cljs.core.__destructure_map(map__37239);
var db = map__37239__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37239__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37240 = p__37238;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37240,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37240,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__37243,p__37244){
var map__37245 = p__37243;
var map__37245__$1 = cljs.core.__destructure_map(map__37245);
var db = map__37245__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37245__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37246 = p__37244;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37246,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37246,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (db,p__37249){
var vec__37250 = p__37249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37250,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37250,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (db,p__37253){
var vec__37254 = p__37253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37254,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37254,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__37257,p__37258){
var map__37259 = p__37257;
var map__37259__$1 = cljs.core.__destructure_map(map__37259);
var db = map__37259__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37259__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37260 = p__37258;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37260,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37260,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-limiter-full-screen","change-burner-limiter-full-screen",2051559587),(function (p__37263,p__37264){
var map__37265 = p__37263;
var map__37265__$1 = cljs.core.__destructure_map(map__37265);
var db = map__37265__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37265__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37266 = p__37264;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37266,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37266,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner-limiter-full-screen","burner-limiter-full-screen",-868941454)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-pump-limiter-full-screen","change-pump-limiter-full-screen",2015787077),(function (p__37269,p__37270){
var map__37271 = p__37269;
var map__37271__$1 = cljs.core.__destructure_map(map__37271);
var db = map__37271__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37271__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37272 = p__37270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37272,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37272,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"pump-limiter-full-screen","pump-limiter-full-screen",1764116550)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__37275,p__37276){
var map__37277 = p__37275;
var map__37277__$1 = cljs.core.__destructure_map(map__37277);
var db = map__37277__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37277__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37278 = p__37276;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37278,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37278,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__37281,p__37282){
var map__37283 = p__37281;
var map__37283__$1 = cljs.core.__destructure_map(map__37283);
var db = map__37283__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37283__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37284 = p__37282;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37284,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37284,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__37287,p__37288){
var map__37289 = p__37287;
var map__37289__$1 = cljs.core.__destructure_map(map__37289);
var db = map__37289__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37289__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37290 = p__37288;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37290,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37290,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-probe-full-screen","level-probe-full-screen",1985358396)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__37293,p__37294){
var map__37295 = p__37293;
var map__37295__$1 = cljs.core.__destructure_map(map__37295);
var db = map__37295__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37295__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__37296 = p__37294;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37296,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37296,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"converter-full-screen","converter-full-screen",-1003770390)], null),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
