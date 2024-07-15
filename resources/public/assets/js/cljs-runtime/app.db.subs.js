goog.provide('app.db.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kit","kit",-1785767367),(function (db,_){
return new cljs.core.Keyword(null,"kit","kit",-1785767367).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"screen-w","screen-w",462794367),(function (db,_){
return new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(db));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"screen-h","screen-h",624845276),(function (db,_){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(db));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878),(function (db,_){
return new cljs.core.Keyword(null,"scale-f","scale-f",-1563945029).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(db));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user","user",1532431356),(function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"user-full-name","user-full-name",-2030076885),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),(function (p__33281,_){
var map__33282 = p__33281;
var map__33282__$1 = cljs.core.__destructure_map(map__33282);
var firstname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33282__$1,new cljs.core.Keyword(null,"firstname","firstname",1659984849));
var lastname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33282__$1,new cljs.core.Keyword(null,"lastname","lastname",-265181465));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(firstname)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lastname)].join('');
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sim","sim",-1444922721),(function (p__33283,_){
var map__33284 = p__33283;
var map__33284__$1 = cljs.core.__destructure_map(map__33284);
var db = map__33284__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33284__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),(function (p__33285,p__33286){
var map__33287 = p__33285;
var map__33287__$1 = cljs.core.__destructure_map(map__33287);
var db = map__33287__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33287__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33288 = p__33286;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33288,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33288,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit)], null),path));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929),(function (p__33291,_){
var map__33292 = p__33291;
var map__33292__$1 = cljs.core.__destructure_map(map__33292);
var db = map__33292__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33292__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var sim = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var intended_use = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"intended-use","intended-use",2081554370)], null));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(intended_use,"demonstration")));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lang","lang",-1819677104),(function (p__33293,_){
var map__33294 = p__33293;
var map__33294__$1 = cljs.core.__destructure_map(map__33294);
var db = map__33294__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33294__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791),(function (p__33295,_){
var map__33296 = p__33295;
var map__33296__$1 = cljs.core.__destructure_map(map__33296);
var db = map__33296__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33296__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856),(function (p__33297,_){
var map__33298 = p__33297;
var map__33298__$1 = cljs.core.__destructure_map(map__33298);
var db = map__33298__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33298__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023),(function (p__33299,_){
var map__33300 = p__33299;
var map__33300__$1 = cljs.core.__destructure_map(map__33300);
var db = map__33300__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33300__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494),(function (p__33301,_){
var map__33302 = p__33301;
var map__33302__$1 = cljs.core.__destructure_map(map__33302);
var db = map__33302__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33302__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237),(function (p__33303,_){
var map__33304 = p__33303;
var map__33304__$1 = cljs.core.__destructure_map(map__33304);
var db = map__33304__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33304__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"steam","steam",2010684664),(function (p__33305,_){
var map__33306 = p__33305;
var map__33306__$1 = cljs.core.__destructure_map(map__33306);
var db = map__33306__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33306__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"steam","steam",2010684664)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"steam-max","steam-max",-263999012),(function (p__33318,_){
var map__33326 = p__33318;
var map__33326__$1 = cljs.core.__destructure_map(map__33326);
var db = map__33326__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33326__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"steam-max","steam-max",-263999012)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"steam-%","steam-%",259510548),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam","steam",2010684664)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-max","steam-max",-263999012)], null),(function (p__33327,_){
var vec__33330 = p__33327;
var steam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33330,(0),null);
var steam_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33330,(1),null);
var value = ((100) * (steam / steam_max));
if((value < (0))){
return (0);
} else {
return value;
}
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modal-info","modal-info",1282904358),(function (p__33335,_){
var map__33338 = p__33335;
var map__33338__$1 = cljs.core.__destructure_map(map__33338);
var db = map__33338__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33338__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"modal-info-show","modal-info-show",-922250939),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),(function (p__33394,_){
var map__33416 = p__33394;
var map__33416__$1 = cljs.core.__destructure_map(map__33416);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33416__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33416__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return (((!(cljs.core.empty_QMARK_(title)))) || ((!(cljs.core.empty_QMARK_(text)))));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notifications","notifications",1685638001),(function (p__33431,_){
var map__33441 = p__33431;
var map__33441__$1 = cljs.core.__destructure_map(map__33441);
var db = map__33441__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33441__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090),(function (p__33482,_){
var map__33487 = p__33482;
var map__33487__$1 = cljs.core.__destructure_map(map__33487);
var db = map__33487__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33487__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"limiter-low-level-full-screen","limiter-low-level-full-screen",-1274562341),(function (p__33499,_){
var map__33507 = p__33499;
var map__33507__$1 = cljs.core.__destructure_map(map__33507);
var db = map__33507__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33507__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_low_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level","limiter-low-level",535587139),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_low_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"low-level-prop-I-id","low-level-prop-I-id",753898157),(function (p__33524,_){
var map__33527 = p__33524;
var map__33527__$1 = cljs.core.__destructure_map(map__33527);
var db = map__33527__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33527__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"low-level-prop-I-id","low-level-prop-I-id",753898157)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"low-level-prop-II-id","low-level-prop-II-id",-1333563925),(function (p__33539,_){
var map__33544 = p__33539;
var map__33544__$1 = cljs.core.__destructure_map(map__33544);
var db = map__33544__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33544__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"low-level-prop-II-id","low-level-prop-II-id",-1333563925)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350),(function (p__33566,_){
var map__33571 = p__33566;
var map__33571__$1 = cljs.core.__destructure_map(map__33571);
var db = map__33571__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33571__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"limiter-high-level-full-screen","limiter-high-level-full-screen",-1616504973),(function (p__33576,_){
var map__33580 = p__33576;
var map__33580__$1 = cljs.core.__destructure_map(map__33580);
var db = map__33580__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33580__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_high_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level","limiter-high-level",230189158),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_high_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"high-level-probe-id","high-level-probe-id",1801472763),(function (p__33587,_){
var map__33592 = p__33587;
var map__33592__$1 = cljs.core.__destructure_map(map__33592);
var db = map__33592__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33592__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"high-level-probe-id","high-level-probe-id",1801472763)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"temperature-probe-id","temperature-probe-id",2062266207),(function (p__33594,_){
var map__33595 = p__33594;
var map__33595__$1 = cljs.core.__destructure_map(map__33595);
var db = map__33595__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33595__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"temperature-probe-id","temperature-probe-id",2062266207)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778),(function (p__33602,_){
var map__33604 = p__33602;
var map__33604__$1 = cljs.core.__destructure_map(map__33604);
var db = map__33604__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33604__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087),(function (p__33609,_){
var map__33613 = p__33609;
var map__33613__$1 = cljs.core.__destructure_map(map__33613);
var db = map__33613__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33613__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cond_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-id","cond-probe-id",2056183324),(function (p__33616,_){
var map__33621 = p__33616;
var map__33621__$1 = cljs.core.__destructure_map(map__33621);
var db = map__33621__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33621__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"cond-probe-id","cond-probe-id",2056183324)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-full-screen","cond-probe-full-screen",-1129099391),(function (p__33624,_){
var map__33629 = p__33624;
var map__33629__$1 = cljs.core.__destructure_map(map__33629);
var db = map__33629__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33629__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-probe-id","cond-probe-id",2056183324)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),cond_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219),(function (p__33630,_){
var map__33633 = p__33630;
var map__33633__$1 = cljs.core.__destructure_map(map__33633);
var db = map__33633__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33633__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850),(function (p__33638,_){
var map__33639 = p__33638;
var map__33639__$1 = cljs.core.__destructure_map(map__33639);
var db = map__33639__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33639__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-controller-actuator-type","level-controller-actuator-type",991135900),(function (p__33646,_){
var map__33647 = p__33646;
var map__33647__$1 = cljs.core.__destructure_map(map__33647);
var db = map__33647__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33647__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835),(function (p__33654,_){
var map__33655 = p__33654;
var map__33655__$1 = cljs.core.__destructure_map(map__33655);
var db = map__33655__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33655__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-probe-full-screen","level-probe-full-screen",1985358396),(function (p__33658,_){
var map__33663 = p__33658;
var map__33663__$1 = cljs.core.__destructure_map(map__33663);
var db = map__33663__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33663__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),level_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"converter-id","converter-id",1254191491),(function (p__33664,_){
var map__33665 = p__33664;
var map__33665__$1 = cljs.core.__destructure_map(map__33665);
var db = map__33665__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"converter-full-screen","converter-full-screen",-1003770390),(function (p__33672,_){
var map__33673 = p__33672;
var map__33673__$1 = cljs.core.__destructure_map(map__33673);
var db = map__33673__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33673__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var converter_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),converter_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-limiter-low-level-hot-spot","show-limiter-low-level-hot-spot",-1095806557),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__33680,_){
var vec__33681 = p__33680;
var limiter_low_level_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33681,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33681,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_low_level_id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-limiter-high-level-hot-spot","show-limiter-high-level-hot-spot",-690662488),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__33690,_){
var vec__33691 = p__33690;
var limiter_high_level_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33691,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__33700,_){
var vec__33701 = p__33700;
var cond_controller_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33701,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33701,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__33710,_){
var vec__33711 = p__33710;
var level_controller_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33711,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33711,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"show-converter-hot-spot","show-converter-hot-spot",1180150542),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null),(function (level_probe_id,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_probe_id,"NRGT 26-2");
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"show-feedwater-valve-hot-spot","show-feedwater-valve-hot-spot",406750489),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-actuator-type","level-controller-actuator-type",991135900)], null),(function (level_controller_actuator_type,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_actuator_type,"FREQUENCY_CONTROLLED_PUMPS");
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"show-feedwater-pump-hot-spot","show-feedwater-pump-hot-spot",1921224522),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-actuator-type","level-controller-actuator-type",991135900)], null),(function (level_controller_actuator_type,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_actuator_type,"FREQUENCY_CONTROLLED_PUMPS");
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"show-toolbar","show-toolbar",-2078087801),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"none");
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"level-probe-calibration-boiler-view-subs","level-probe-calibration-boiler-view-subs",-1042484753),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),(function (p__33722,_){
var vec__33728 = p__33722;
var kit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33728,(0),null);
var level_controller_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33728,(1),null);
var controller_id = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none"))?"NRR 2-60":level_controller_id);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kit),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(controller_id),"-calibration-boiler-view"].join('');
})], 0));

//# sourceMappingURL=app.db.subs.js.map
