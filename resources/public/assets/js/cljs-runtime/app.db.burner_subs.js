goog.provide('app.db.burner_subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner","burner",-712918379),(function (p__50570,_){
var map__50572 = p__50570;
var map__50572__$1 = cljs.core.__destructure_map(map__50572);
var db = map__50572__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50572__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"burner","burner",-712918379)], null));
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-status","burner-status",-2088741662),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (burner,_){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(burner);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-init-settings","burner-init-settings",1428988081),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379)], null),(function (boiler,_){
return new cljs.core.Keyword(null,"init-settings","init-settings",737587005).cljs$core$IFn$_invoke$arity$1(boiler);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"burner-show-toolbar-panel","burner-show-toolbar-panel",-923534479),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null),(function (current_hotspot,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"burner");
}));

//# sourceMappingURL=app.db.burner_subs.js.map
