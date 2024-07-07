goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__33745){
var map__33746 = p__33745;
var map__33746__$1 = cljs.core.__destructure_map(map__33746);
var screen__$1 = map__33746__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33746__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__33747){
var vec__33748 = p__33747;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33748,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33748,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33748,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__33751){
var vec__33752 = p__33751;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33752,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33752,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33752,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__33755){
var vec__33756 = p__33755;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33756,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33756,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__33759,p__33760){
var map__33761 = p__33759;
var map__33761__$1 = cljs.core.__destructure_map(map__33761);
var db = map__33761__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33761__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33762 = p__33760;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33762,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33762,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__33765,p__33766){
var map__33767 = p__33765;
var map__33767__$1 = cljs.core.__destructure_map(map__33767);
var db = map__33767__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33767__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33768 = p__33766;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33768,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33768,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__33771,p__33772){
var map__33773 = p__33771;
var map__33773__$1 = cljs.core.__destructure_map(map__33773);
var db = map__33773__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33774 = p__33772;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33774,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33774,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__33777,p__33778){
var map__33779 = p__33777;
var map__33779__$1 = cljs.core.__destructure_map(map__33779);
var db = map__33779__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33779__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33780 = p__33778;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33780,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33780,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-ctrl-panel-view","change-ctrl-panel-view",507855434),(function (p__33783,p__33784){
var map__33785 = p__33783;
var map__33785__$1 = cljs.core.__destructure_map(map__33785);
var db = map__33785__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33785__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33786 = p__33784;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33786,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33786,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-settings-modal-view","change-settings-modal-view",-1698564525),(function (p__33789,p__33790){
var map__33791 = p__33789;
var map__33791__$1 = cljs.core.__destructure_map(map__33791);
var db = map__33791__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33791__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33792 = p__33790;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33792,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33792,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__33795,p__33796){
var map__33797 = p__33795;
var map__33797__$1 = cljs.core.__destructure_map(map__33797);
var db = map__33797__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33797__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33798 = p__33796;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33798,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33798,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__33801,p__33802){
var map__33803 = p__33801;
var map__33803__$1 = cljs.core.__destructure_map(map__33803);
var db = map__33803__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33803__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33804 = p__33802;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33804,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33804,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),(function (p__33807,p__33808){
var map__33809 = p__33807;
var map__33809__$1 = cljs.core.__destructure_map(map__33809);
var db = map__33809__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33809__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33810 = p__33808;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_low_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level","limiter-low-level",535587139),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_low_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-high-level-full-screen","change-limiter-high-level-full-screen",372169192),(function (p__33813,p__33814){
var map__33815 = p__33813;
var map__33815__$1 = cljs.core.__destructure_map(map__33815);
var db = map__33815__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33815__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33816 = p__33814;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33816,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33816,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_high_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level","limiter-high-level",230189158),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_high_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__33819,p__33820){
var map__33821 = p__33819;
var map__33821__$1 = cljs.core.__destructure_map(map__33821);
var db = map__33821__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33821__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33822 = p__33820;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33822,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33822,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cond_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__33825,p__33826){
var map__33827 = p__33825;
var map__33827__$1 = cljs.core.__destructure_map(map__33827);
var db = map__33827__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33827__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33828 = p__33826;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33828,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33828,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__33831,p__33832){
var map__33833 = p__33831;
var map__33833__$1 = cljs.core.__destructure_map(map__33833);
var db = map__33833__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33834 = p__33832;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33834,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33834,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__33837,p__33838){
var map__33839 = p__33837;
var map__33839__$1 = cljs.core.__destructure_map(map__33839);
var db = map__33839__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33839__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33840 = p__33838;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33840,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33840,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var converter_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),converter_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__33843,p__33844){
var map__33845 = p__33843;
var map__33845__$1 = cljs.core.__destructure_map(map__33845);
var db = map__33845__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33845__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33846 = p__33844;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33846,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33846,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),(function (p__33849,p__33850){
var map__33851 = p__33849;
var map__33851__$1 = cljs.core.__destructure_map(map__33851);
var db = map__33851__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33851__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33852 = p__33850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33852,(0),null);
var map__33855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33852,(1),null);
var map__33855__$1 = cljs.core.__destructure_map(map__33855);
var notification = map__33855__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33855__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001),id], null),notification);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),(function (p__33856,p__33857){
var map__33858 = p__33856;
var map__33858__$1 = cljs.core.__destructure_map(map__33858);
var db = map__33858__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33858__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33859 = p__33857;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33859,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33859,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null),cljs.core.dissoc,id);
}));

//# sourceMappingURL=app.db.events.js.map
