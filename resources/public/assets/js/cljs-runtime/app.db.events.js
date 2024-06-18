goog.provide('app.db.events');
app.db.events.update_screen_BANG_ = (function app$db$events$update_screen_BANG_(width,height,p__61770){
var map__61771 = p__61770;
var map__61771__$1 = cljs.core.__destructure_map(map__61771);
var screen__$1 = map__61771__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61771__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044));
if(((width / height) <= ratio)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),(width / ratio),new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),(width / (1920))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(screen__$1,new cljs.core.Keyword(null,"w","w",354169001),(height * ratio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740),height,new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029),((height * ratio) / (1920))], 0));
}
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__61772){
var vec__61773 = p__61772;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61773,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61773,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61773,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.db.default_db,new cljs.core.Keyword(null,"screen","screen",1990059748),app.db.events.update_screen_BANG_(width,height,new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(app.db.db.default_db)))], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen","screen",1990059748)], 0))], null),(function (screen,p__61776){
var vec__61777 = p__61776;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61777,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61777,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61777,(2),null);
return app.db.events.update_screen_BANG_(width,height,screen);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),(function (db,p__61780){
var vec__61781 = p__61780;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61781,(0),null);
var new_kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61781,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"kit","kit",-1785767367),new_kit);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),(function (p__61784,p__61785){
var map__61786 = p__61784;
var map__61786__$1 = cljs.core.__destructure_map(map__61786);
var db = map__61786__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61786__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61787 = p__61785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61787,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61787,(1),null);
console.log("change sim",new_value);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753),(function (p__61790,p__61791){
var map__61792 = p__61790;
var map__61792__$1 = cljs.core.__destructure_map(map__61792);
var db = map__61792__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61792__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61793 = p__61791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61793,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61793,(1),null);
console.log("reset sim - stop sim and prevent to default all sim modules","stopped");

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),"stopped");
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-lang","change-lang",1412456545),(function (p__61796,p__61797){
var map__61798 = p__61796;
var map__61798__$1 = cljs.core.__destructure_map(map__61798);
var db = map__61798__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61798__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61799 = p__61797;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61799,(0),null);
var new_lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61799,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),new_lang);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),(function (p__61802,p__61803){
var map__61804 = p__61802;
var map__61804__$1 = cljs.core.__destructure_map(map__61804);
var db = map__61804__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61804__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61805 = p__61803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61805,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61805,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-ctrl-panel-view","change-ctrl-panel-view",507855434),(function (p__61808,p__61809){
var map__61810 = p__61808;
var map__61810__$1 = cljs.core.__destructure_map(map__61810);
var db = map__61810__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61810__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61811 = p__61809;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61811,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61811,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-settings-modal-view","change-settings-modal-view",-1698564525),(function (p__61814,p__61815){
var map__61816 = p__61814;
var map__61816__$1 = cljs.core.__destructure_map(map__61816);
var db = map__61816__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61816__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61817 = p__61815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61817,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61817,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-general-settings","open-general-settings",1221789747),(function (p__61820,p__61821){
var map__61822 = p__61820;
var map__61822__$1 = cljs.core.__destructure_map(map__61822);
var db = map__61822__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61822__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61823 = p__61821;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61823,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61823,(1),null);
console.log("open gen settings",kit);

return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"show-general-settings","show-general-settings",559201945)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),(function (p__61826,p__61827){
var map__61828 = p__61826;
var map__61828__$1 = cljs.core.__destructure_map(map__61828);
var db = map__61828__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61828__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61829 = p__61827;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61829,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61829,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),(function (p__61832,p__61833){
var map__61834 = p__61832;
var map__61834__$1 = cljs.core.__destructure_map(map__61834);
var db = map__61834__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61834__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61835 = p__61833;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61835,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61835,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_low_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level","limiter-low-level",535587139),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_low_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-limiter-high-level-full-screen","change-limiter-high-level-full-screen",372169192),(function (p__61838,p__61839){
var map__61840 = p__61838;
var map__61840__$1 = cljs.core.__destructure_map(map__61840);
var db = map__61840__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61840__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61841 = p__61839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61841,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61841,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_high_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level","limiter-high-level",230189158),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_high_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),(function (p__61844,p__61845){
var map__61846 = p__61844;
var map__61846__$1 = cljs.core.__destructure_map(map__61846);
var db = map__61846__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61846__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61847 = p__61845;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61847,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61847,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cond_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),(function (p__61850,p__61851){
var map__61852 = p__61850;
var map__61852__$1 = cljs.core.__destructure_map(map__61852);
var db = map__61852__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61852__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61853 = p__61851;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61853,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61853,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-level-probe-full-screen","change-level-probe-full-screen",626942129),(function (p__61856,p__61857){
var map__61858 = p__61856;
var map__61858__$1 = cljs.core.__destructure_map(map__61858);
var db = map__61858__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61858__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61859 = p__61857;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61859,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61859,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-converter-full-screen","change-converter-full-screen",1805687195),(function (p__61862,p__61863){
var map__61864 = p__61862;
var map__61864__$1 = cljs.core.__destructure_map(map__61864);
var db = map__61864__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61864__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61865 = p__61863;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61865,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61865,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var converter_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),converter_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),new_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),(function (p__61868,p__61869){
var map__61870 = p__61868;
var map__61870__$1 = cljs.core.__destructure_map(map__61870);
var db = map__61870__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61870__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__61871 = p__61869;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61871,(0),null);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61871,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),new_value);
}));

//# sourceMappingURL=app.db.events.js.map
