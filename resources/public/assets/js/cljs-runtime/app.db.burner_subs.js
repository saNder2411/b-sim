goog.provide('app.db.burner_subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner","burner",-712918379),(function (p__68078,_){
var map__68082 = p__68078;
var map__68082__$1 = cljs.core.__destructure_map(map__68082);
var db = map__68082__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68082__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner","burner",-712918379)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-status","burner-status",-2088741662),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(burner);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-settings","burner-settings",1062662198),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
return new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(burner);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-settings-view","burner-settings-view",-962368094),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-settings","burner-settings",1062662198)], null),(function (settings,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(settings);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-show-toolbar-panel","burner-show-toolbar-panel",-923534479),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"burner");
}));

//# sourceMappingURL=app.db.burner_subs.js.map
