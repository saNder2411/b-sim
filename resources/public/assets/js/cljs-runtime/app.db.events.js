goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__31170){
var map__31171 = p__31170;
var map__31171__$1 = cljs.core.__destructure_map(map__31171);
var screen__$1 = map__31171__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31171__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__31172){
var vec__31173 = p__31172;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31173,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31173,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31173,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__31176){
var vec__31177 = p__31176;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31177,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31177,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31177,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__31180){
var vec__31181 = p__31180;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31181,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31181,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__31184,p__31185){
var map__31186 = p__31184;
var map__31186__$1 = cljs.core.__destructure_map(map__31186);
var db = map__31186__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31186__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31187 = p__31185;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31187,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31187,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__31190,p__31191){
var map__31192 = p__31190;
var map__31192__$1 = cljs.core.__destructure_map(map__31192);
var db = map__31192__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31192__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31193 = p__31191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31193,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31193,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-ctrl-panel-view","set-ctrl-panel-view",1352275081),(function (p__31196,p__31197){
var map__31198 = p__31196;
var map__31198__$1 = cljs.core.__destructure_map(map__31198);
var db = map__31198__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31198__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31199 = p__31197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31199,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31199,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-settings-modal-view","set-settings-modal-view",1119075276),(function (p__31202,p__31203){
var map__31204 = p__31202;
var map__31204__$1 = cljs.core.__destructure_map(map__31204);
var db = map__31204__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31204__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31205 = p__31203;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31205,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31205,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-highlight-hotspots","set-highlight-hotspots",1813720726),(function (p__31208,p__31209){
var map__31210 = p__31208;
var map__31210__$1 = cljs.core.__destructure_map(map__31210);
var db = map__31210__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31210__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31211 = p__31209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31211,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31211,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__31214,p__31215){
var map__31216 = p__31214;
var map__31216__$1 = cljs.core.__destructure_map(map__31216);
var db = map__31216__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31216__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31217 = p__31215;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (db,p__31220){
var vec__31221 = p__31220;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31221,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31221,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (db,p__31224){
var vec__31225 = p__31224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31225,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31225,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sim","sim",-1444922721),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__31228,p__31229){
var map__31230 = p__31228;
var map__31230__$1 = cljs.core.__destructure_map(map__31230);
var db = map__31230__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31230__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31231 = p__31229;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31231,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31231,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-burner-limiter-full-screen","change-burner-limiter-full-screen",2051559587),(function (p__31234,p__31235){
var map__31236 = p__31234;
var map__31236__$1 = cljs.core.__destructure_map(map__31236);
var db = map__31236__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31236__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31237 = p__31235;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31237,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31237,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner-limiter-full-screen","burner-limiter-full-screen",-868941454)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-pump-limiter-full-screen","change-pump-limiter-full-screen",2015787077),(function (p__31240,p__31241){
var map__31242 = p__31240;
var map__31242__$1 = cljs.core.__destructure_map(map__31242);
var db = map__31242__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31242__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31243 = p__31241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31243,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31243,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"pump-limiter-full-screen","pump-limiter-full-screen",1764116550)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__31246,p__31247){
var map__31248 = p__31246;
var map__31248__$1 = cljs.core.__destructure_map(map__31248);
var db = map__31248__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31248__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31249 = p__31247;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31249,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31249,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__31252,p__31253){
var map__31254 = p__31252;
var map__31254__$1 = cljs.core.__destructure_map(map__31254);
var db = map__31254__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31254__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31255 = p__31253;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31255,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31255,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__31258,p__31259){
var map__31260 = p__31258;
var map__31260__$1 = cljs.core.__destructure_map(map__31260);
var db = map__31260__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31260__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31261 = p__31259;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31261,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31261,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-probe-full-screen","level-probe-full-screen",1985358396)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__31264,p__31265){
var map__31266 = p__31264;
var map__31266__$1 = cljs.core.__destructure_map(map__31266);
var db = map__31266__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31266__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__31267 = p__31265;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31267,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31267,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"converter-full-screen","converter-full-screen",-1003770390)], null),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
