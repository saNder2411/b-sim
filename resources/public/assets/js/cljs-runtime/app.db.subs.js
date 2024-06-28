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
refx.alpha.reg_sub(new cljs.core.Keyword(null,"user-full-name","user-full-name",-2030076885),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),(function (p__33078,_){
var map__33079 = p__33078;
var map__33079__$1 = cljs.core.__destructure_map(map__33079);
var firstname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33079__$1,new cljs.core.Keyword(null,"firstname","firstname",1659984849));
var lastname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33079__$1,new cljs.core.Keyword(null,"lastname","lastname",-265181465));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(firstname)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lastname)].join('');
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sim","sim",-1444922721),(function (p__33080,_){
var map__33082 = p__33080;
var map__33082__$1 = cljs.core.__destructure_map(map__33082);
var db = map__33082__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33082__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),(function (p__33087,p__33088){
var map__33089 = p__33087;
var map__33089__$1 = cljs.core.__destructure_map(map__33089);
var db = map__33089__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33089__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__33090 = p__33088;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33090,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33090,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit)], null),path));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929),(function (p__33099,_){
var map__33100 = p__33099;
var map__33100__$1 = cljs.core.__destructure_map(map__33100);
var db = map__33100__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33100__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var sim = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var intended_use = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"intended-use","intended-use",2081554370)], null));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(intended_use,"demonstration")));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lang","lang",-1819677104),(function (p__33113,_){
var map__33114 = p__33113;
var map__33114__$1 = cljs.core.__destructure_map(map__33114);
var db = map__33114__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33114__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791),(function (p__33121,_){
var map__33122 = p__33121;
var map__33122__$1 = cljs.core.__destructure_map(map__33122);
var db = map__33122__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33122__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856),(function (p__33129,_){
var map__33130 = p__33129;
var map__33130__$1 = cljs.core.__destructure_map(map__33130);
var db = map__33130__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33130__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023),(function (p__33135,_){
var map__33138 = p__33135;
var map__33138__$1 = cljs.core.__destructure_map(map__33138);
var db = map__33138__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33138__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"settings-modal-view","settings-modal-view",-1356800023)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494),(function (p__33145,_){
var map__33146 = p__33145;
var map__33146__$1 = cljs.core.__destructure_map(map__33146);
var db = map__33146__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33146__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237),(function (p__33151,_){
var map__33154 = p__33151;
var map__33154__$1 = cljs.core.__destructure_map(map__33154);
var db = map__33154__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33154__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"steam","steam",2010684664),(function (p__33161,_){
var map__33162 = p__33161;
var map__33162__$1 = cljs.core.__destructure_map(map__33162);
var db = map__33162__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33162__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"steam","steam",2010684664)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"steam-max","steam-max",-263999012),(function (p__33167,_){
var map__33168 = p__33167;
var map__33168__$1 = cljs.core.__destructure_map(map__33168);
var db = map__33168__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33168__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"steam-max","steam-max",-263999012)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"steam-%","steam-%",259510548),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam","steam",2010684664)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-max","steam-max",-263999012)], null),(function (p__33171,_){
var vec__33173 = p__33171;
var steam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173,(0),null);
var steam_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173,(1),null);
var value = ((100) * (steam / steam_max));
if((value < (0))){
return (0);
} else {
return value;
}
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modal-info","modal-info",1282904358),(function (p__33183,_){
var map__33184 = p__33183;
var map__33184__$1 = cljs.core.__destructure_map(map__33184);
var db = map__33184__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33184__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"modal-info-show","modal-info-show",-922250939),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null),(function (p__33188,_){
var map__33189 = p__33188;
var map__33189__$1 = cljs.core.__destructure_map(map__33189);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33189__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33189__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return (((!(cljs.core.empty_QMARK_(title)))) || ((!(cljs.core.empty_QMARK_(text)))));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notifications","notifications",1685638001),(function (p__33190,_){
var map__33191 = p__33190;
var map__33191__$1 = cljs.core.__destructure_map(map__33191);
var db = map__33191__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33191__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090),(function (p__33192,_){
var map__33193 = p__33192;
var map__33193__$1 = cljs.core.__destructure_map(map__33193);
var db = map__33193__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33193__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"limiter-low-level-full-screen","limiter-low-level-full-screen",-1274562341),(function (p__33194,_){
var map__33195 = p__33194;
var map__33195__$1 = cljs.core.__destructure_map(map__33195);
var db = map__33195__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33195__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_low_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-low-level","limiter-low-level",535587139),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_low_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"low-level-prop-I-id","low-level-prop-I-id",753898157),(function (p__33196,_){
var map__33197 = p__33196;
var map__33197__$1 = cljs.core.__destructure_map(map__33197);
var db = map__33197__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33197__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"low-level-prop-I-id","low-level-prop-I-id",753898157)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"low-level-prop-II-id","low-level-prop-II-id",-1333563925),(function (p__33198,_){
var map__33199 = p__33198;
var map__33199__$1 = cljs.core.__destructure_map(map__33199);
var db = map__33199__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33199__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"low-level-prop-II-id","low-level-prop-II-id",-1333563925)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350),(function (p__33201,_){
var map__33203 = p__33201;
var map__33203__$1 = cljs.core.__destructure_map(map__33203);
var db = map__33203__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33203__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"limiter-high-level-full-screen","limiter-high-level-full-screen",-1616504973),(function (p__33209,_){
var map__33212 = p__33209;
var map__33212__$1 = cljs.core.__destructure_map(map__33212);
var db = map__33212__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33212__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var limiter_high_level_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"limiter-high-level","limiter-high-level",230189158),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),limiter_high_level_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"high-level-probe-id","high-level-probe-id",1801472763),(function (p__33219,_){
var map__33222 = p__33219;
var map__33222__$1 = cljs.core.__destructure_map(map__33222);
var db = map__33222__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33222__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"high-level-probe-id","high-level-probe-id",1801472763)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"temperature-probe-id","temperature-probe-id",2062266207),(function (p__33229,_){
var map__33230 = p__33229;
var map__33230__$1 = cljs.core.__destructure_map(map__33230);
var db = map__33230__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33230__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"temperature-probe-id","temperature-probe-id",2062266207)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778),(function (p__33234,_){
var map__33235 = p__33234;
var map__33235__$1 = cljs.core.__destructure_map(map__33235);
var db = map__33235__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33235__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087),(function (p__33236,_){
var map__33237 = p__33236;
var map__33237__$1 = cljs.core.__destructure_map(map__33237);
var db = map__33237__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33237__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),cond_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-id","cond-probe-id",2056183324),(function (p__33238,_){
var map__33239 = p__33238;
var map__33239__$1 = cljs.core.__destructure_map(map__33239);
var db = map__33239__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33239__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"cond-probe-id","cond-probe-id",2056183324)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-full-screen","cond-probe-full-screen",-1129099391),(function (p__33240,_){
var map__33241 = p__33240;
var map__33241__$1 = cljs.core.__destructure_map(map__33241);
var db = map__33241__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33241__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var cond_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond-probe-id","cond-probe-id",2056183324)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),cond_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219),(function (p__33242,_){
var map__33243 = p__33242;
var map__33243__$1 = cljs.core.__destructure_map(map__33243);
var db = map__33243__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33243__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850),(function (p__33244,_){
var map__33245 = p__33244;
var map__33245__$1 = cljs.core.__destructure_map(map__33245);
var db = map__33245__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33245__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-controller-actuator-type","level-controller-actuator-type",991135900),(function (p__33246,_){
var map__33247 = p__33246;
var map__33247__$1 = cljs.core.__destructure_map(map__33247);
var db = map__33247__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33247__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_controller_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),level_controller_id,new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835),(function (p__33248,_){
var map__33249 = p__33248;
var map__33249__$1 = cljs.core.__destructure_map(map__33249);
var db = map__33249__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33249__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level-probe-full-screen","level-probe-full-screen",1985358396),(function (p__33250,_){
var map__33251 = p__33250;
var map__33251__$1 = cljs.core.__destructure_map(map__33251);
var db = map__33251__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33251__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var level_probe_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),level_probe_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"converter-id","converter-id",1254191491),(function (p__33252,_){
var map__33253 = p__33252;
var map__33253__$1 = cljs.core.__destructure_map(map__33253);
var db = map__33253__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33253__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"converter-full-screen","converter-full-screen",-1003770390),(function (p__33254,_){
var map__33255 = p__33254;
var map__33255__$1 = cljs.core.__destructure_map(map__33255);
var db = map__33255__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33255__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var converter_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter-id","converter-id",1254191491)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),converter_id,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-limiter-low-level-hot-spot","show-limiter-low-level-hot-spot",-1095806557),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__33256,_){
var vec__33257 = p__33256;
var limiter_low_level_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33257,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33257,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_low_level_id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-limiter-high-level-hot-spot","show-limiter-high-level-hot-spot",-690662488),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__33260,_){
var vec__33261 = p__33260;
var limiter_high_level_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33261,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33261,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__33264,_){
var vec__33265 = p__33264;
var cond_controller_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33265,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33265,(1),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")));
})], 0));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null),(function (p__33268,_){
var vec__33269 = p__33268;
var level_controller_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33269,(0),null);
var sim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33269,(1),null);
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

//# sourceMappingURL=app.db.subs.js.map
