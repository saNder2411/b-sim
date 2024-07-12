goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__71165){
var map__71166 = p__71165;
var map__71166__$1 = cljs.core.__destructure_map(map__71166);
var screen__$1 = map__71166__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71166__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__71167){
var vec__71168 = p__71167;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71168,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71168,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71168,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__71171){
var vec__71172 = p__71171;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71172,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71172,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71172,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__71175){
var vec__71176 = p__71175;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71176,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71176,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__71179,p__71180){
var map__71181 = p__71179;
var map__71181__$1 = cljs.core.__destructure_map(map__71181);
var db = map__71181__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71181__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71182 = p__71180;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71182,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71182,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__71185,p__71186){
var map__71187 = p__71185;
var map__71187__$1 = cljs.core.__destructure_map(map__71187);
var db = map__71187__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71187__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71188 = p__71186;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71188,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71188,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__71191,p__71192){
var map__71193 = p__71191;
var map__71193__$1 = cljs.core.__destructure_map(map__71193);
var db = map__71193__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71193__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71194 = p__71192;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71194,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71194,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__71197,p__71198){
var map__71199 = p__71197;
var map__71199__$1 = cljs.core.__destructure_map(map__71199);
var db = map__71199__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71199__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71200 = p__71198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71200,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71200,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-ctrl-panel-view","change-ctrl-panel-view",507855434),(function (p__71203,p__71204){
var map__71205 = p__71203;
var map__71205__$1 = cljs.core.__destructure_map(map__71205);
var db = map__71205__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71205__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71206 = p__71204;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71206,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71206,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-settings-modal-view","change-settings-modal-view",-1698564525),(function (p__71209,p__71210){
var map__71211 = p__71209;
var map__71211__$1 = cljs.core.__destructure_map(map__71211);
var db = map__71211__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71211__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71212 = p__71210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71212,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71212,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__71215,p__71216){
var map__71217 = p__71215;
var map__71217__$1 = cljs.core.__destructure_map(map__71217);
var db = map__71217__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71217__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71218 = p__71216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71218,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71218,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__71221,p__71222){
var map__71223 = p__71221;
var map__71223__$1 = cljs.core.__destructure_map(map__71223);
var db = map__71223__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71223__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71224 = p__71222;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71224,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71224,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),(function (p__71227,p__71228){
var map__71229 = p__71227;
var map__71229__$1 = cljs.core.__destructure_map(map__71229);
var db = map__71229__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71229__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71230 = p__71228;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71230,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71230,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_low_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level","limiter-low-level",535587139),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_low_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-high-level-full-screen","change-limiter-high-level-full-screen",372169192),(function (p__71233,p__71234){
var map__71235 = p__71233;
var map__71235__$1 = cljs.core.__destructure_map(map__71235);
var db = map__71235__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71235__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71236 = p__71234;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71236,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71236,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_high_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level","limiter-high-level",230189158),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_high_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__71239,p__71240){
var map__71241 = p__71239;
var map__71241__$1 = cljs.core.__destructure_map(map__71241);
var db = map__71241__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71241__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71242 = p__71240;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71242,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71242,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cond_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__71245,p__71246){
var map__71247 = p__71245;
var map__71247__$1 = cljs.core.__destructure_map(map__71247);
var db = map__71247__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71247__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71248 = p__71246;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71248,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71248,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__71251,p__71252){
var map__71253 = p__71251;
var map__71253__$1 = cljs.core.__destructure_map(map__71253);
var db = map__71253__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71253__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71254 = p__71252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71254,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71254,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__71257,p__71258){
var map__71259 = p__71257;
var map__71259__$1 = cljs.core.__destructure_map(map__71259);
var db = map__71259__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71259__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71260 = p__71258;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71260,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71260,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var converter_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),converter_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__71263,p__71264){
var map__71265 = p__71263;
var map__71265__$1 = cljs.core.__destructure_map(map__71265);
var db = map__71265__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71265__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71266 = p__71264;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71266,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71266,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__71269,p__71270){
var map__71271 = p__71269;
var map__71271__$1 = cljs.core.__destructure_map(map__71271);
var db = map__71271__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71271__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71272 = p__71270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71272,(0),null);
var map__71275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71272,(1),null);
var map__71275__$1 = cljs.core.__destructure_map(map__71275);
var notification = map__71275__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71275__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__71276,p__71277){
var map__71278 = p__71276;
var map__71278__$1 = cljs.core.__destructure_map(map__71278);
var db = map__71278__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71278__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__71279 = p__71277;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71279,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71279,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
