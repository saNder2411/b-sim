goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__85605){
var map__85606 = p__85605;
var map__85606__$1 = cljs.core.__destructure_map(map__85606);
var screen__$1 = map__85606__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85606__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__85607){
var vec__85608 = p__85607;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85608,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85608,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85608,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__85611){
var vec__85612 = p__85611;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85612,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85612,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85612,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__85615){
var vec__85616 = p__85615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85616,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85616,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__85619,p__85620){
var map__85621 = p__85619;
var map__85621__$1 = cljs.core.__destructure_map(map__85621);
var db = map__85621__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85621__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85622 = p__85620;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85622,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85622,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__85625,p__85626){
var map__85627 = p__85625;
var map__85627__$1 = cljs.core.__destructure_map(map__85627);
var db = map__85627__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85627__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85628 = p__85626;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85628,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85628,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__85631,p__85632){
var map__85633 = p__85631;
var map__85633__$1 = cljs.core.__destructure_map(map__85633);
var db = map__85633__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85633__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85634 = p__85632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85634,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85634,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__85637,p__85638){
var map__85639 = p__85637;
var map__85639__$1 = cljs.core.__destructure_map(map__85639);
var db = map__85639__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85639__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85640 = p__85638;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85640,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85640,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-ctrl-panel-view","change-ctrl-panel-view",507855434),(function (p__85643,p__85644){
var map__85645 = p__85643;
var map__85645__$1 = cljs.core.__destructure_map(map__85645);
var db = map__85645__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85645__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85646 = p__85644;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85646,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85646,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-settings-modal-view","change-settings-modal-view",-1698564525),(function (p__85649,p__85650){
var map__85651 = p__85649;
var map__85651__$1 = cljs.core.__destructure_map(map__85651);
var db = map__85651__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85651__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85652 = p__85650;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85652,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85652,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__85655,p__85656){
var map__85657 = p__85655;
var map__85657__$1 = cljs.core.__destructure_map(map__85657);
var db = map__85657__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85657__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85658 = p__85656;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85658,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85658,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__85661,p__85662){
var map__85663 = p__85661;
var map__85663__$1 = cljs.core.__destructure_map(map__85663);
var db = map__85663__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85663__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85664 = p__85662;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85664,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85664,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),(function (p__85667,p__85668){
var map__85669 = p__85667;
var map__85669__$1 = cljs.core.__destructure_map(map__85669);
var db = map__85669__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85669__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85670 = p__85668;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85670,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85670,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_low_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level","limiter-low-level",535587139),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_low_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-high-level-full-screen","change-limiter-high-level-full-screen",372169192),(function (p__85673,p__85674){
var map__85675 = p__85673;
var map__85675__$1 = cljs.core.__destructure_map(map__85675);
var db = map__85675__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85675__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85676 = p__85674;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85676,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85676,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_high_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level","limiter-high-level",230189158),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_high_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__85679,p__85680){
var map__85681 = p__85679;
var map__85681__$1 = cljs.core.__destructure_map(map__85681);
var db = map__85681__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85681__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85682 = p__85680;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85682,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85682,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cond_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__85685,p__85686){
var map__85687 = p__85685;
var map__85687__$1 = cljs.core.__destructure_map(map__85687);
var db = map__85687__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85687__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85688 = p__85686;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85688,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85688,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__85691,p__85692){
var map__85693 = p__85691;
var map__85693__$1 = cljs.core.__destructure_map(map__85693);
var db = map__85693__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85693__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85694 = p__85692;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85694,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85694,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__85697,p__85698){
var map__85699 = p__85697;
var map__85699__$1 = cljs.core.__destructure_map(map__85699);
var db = map__85699__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85699__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85700 = p__85698;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85700,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85700,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var converter_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),converter_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__85703,p__85704){
var map__85705 = p__85703;
var map__85705__$1 = cljs.core.__destructure_map(map__85705);
var db = map__85705__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85705__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85706 = p__85704;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85706,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85706,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__85709,p__85710){
var map__85711 = p__85709;
var map__85711__$1 = cljs.core.__destructure_map(map__85711);
var db = map__85711__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85711__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85712 = p__85710;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85712,(0),null);
var map__85715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85712,(1),null);
var map__85715__$1 = cljs.core.__destructure_map(map__85715);
var notification = map__85715__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85715__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__85716,p__85717){
var map__85718 = p__85716;
var map__85718__$1 = cljs.core.__destructure_map(map__85718);
var db = map__85718__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85718__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__85719 = p__85717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85719,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85719,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
