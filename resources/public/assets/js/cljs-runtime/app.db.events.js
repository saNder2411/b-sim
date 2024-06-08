goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__32152){
var map__32153 = p__32152;
var map__32153__$1 = cljs.core.__destructure_map(map__32153);
var screen__$1 = map__32153__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32153__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__32154){
var vec__32155 = p__32154;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32155,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32155,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32155,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__32158){
var vec__32159 = p__32158;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32159,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32159,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32159,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__32162){
var vec__32163 = p__32162;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32163,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32163,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__32166,p__32167){
var map__32168 = p__32166;
var map__32168__$1 = cljs.core.__destructure_map(map__32168);
var db = map__32168__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32168__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32169 = p__32167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32169,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32169,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__32172,p__32173){
var map__32174 = p__32172;
var map__32174__$1 = cljs.core.__destructure_map(map__32174);
var db = map__32174__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32174__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32175 = p__32173;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32175,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32175,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-ctrl-panel-view","set-ctrl-panel-view",1352275081),(function (p__32178,p__32179){
var map__32180 = p__32178;
var map__32180__$1 = cljs.core.__destructure_map(map__32180);
var db = map__32180__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32180__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32181 = p__32179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32181,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32181,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-settings-modal-view","set-settings-modal-view",1119075276),(function (p__32184,p__32185){
var map__32186 = p__32184;
var map__32186__$1 = cljs.core.__destructure_map(map__32186);
var db = map__32186__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32186__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32187 = p__32185;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32187,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32187,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-highlight-hotspots","set-highlight-hotspots",1813720726),(function (p__32190,p__32191){
var map__32192 = p__32190;
var map__32192__$1 = cljs.core.__destructure_map(map__32192);
var db = map__32192__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32192__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32193 = p__32191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32193,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32193,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__32196,p__32197){
var map__32198 = p__32196;
var map__32198__$1 = cljs.core.__destructure_map(map__32198);
var db = map__32198__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32198__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32199 = p__32197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32199,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32199,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (db,p__32202){
var vec__32203 = p__32202;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32203,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32203,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (db,p__32206){
var vec__32207 = p__32206;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32207,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32207,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__32210,p__32211){
var map__32212 = p__32210;
var map__32212__$1 = cljs.core.__destructure_map(map__32212);
var db = map__32212__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32212__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32213 = p__32211;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32213,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32213,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-limiter-full-screen","change-burner-limiter-full-screen",2051559587),(function (p__32216,p__32217){
var map__32218 = p__32216;
var map__32218__$1 = cljs.core.__destructure_map(map__32218);
var db = map__32218__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32218__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32219 = p__32217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32219,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32219,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner-limiter-full-screen","burner-limiter-full-screen",-868941454)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-pump-limiter-full-screen","change-pump-limiter-full-screen",2015787077),(function (p__32222,p__32223){
var map__32224 = p__32222;
var map__32224__$1 = cljs.core.__destructure_map(map__32224);
var db = map__32224__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32224__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32225 = p__32223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32225,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32225,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"pump-limiter-full-screen","pump-limiter-full-screen",1764116550)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__32228,p__32229){
var map__32230 = p__32228;
var map__32230__$1 = cljs.core.__destructure_map(map__32230);
var db = map__32230__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32230__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32231 = p__32229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32231,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32231,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__32234,p__32235){
var map__32236 = p__32234;
var map__32236__$1 = cljs.core.__destructure_map(map__32236);
var db = map__32236__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32236__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32237 = p__32235;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32237,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32237,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__32240,p__32241){
var map__32242 = p__32240;
var map__32242__$1 = cljs.core.__destructure_map(map__32242);
var db = map__32242__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32242__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32243 = p__32241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32243,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32243,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-probe-full-screen","level-probe-full-screen",1985358396)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__32246,p__32247){
var map__32248 = p__32246;
var map__32248__$1 = cljs.core.__destructure_map(map__32248);
var db = map__32248__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32248__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__32249 = p__32247;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32249,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32249,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"converter-full-screen","converter-full-screen",-1003770390)], null),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
