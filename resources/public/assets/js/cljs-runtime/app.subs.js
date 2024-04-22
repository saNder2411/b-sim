goog.provide('app.subs');
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"showing","showing",798009604),(function (db,_){
return new cljs.core.Keyword(null,"showing","showing",798009604).cljs$core$IFn$_invoke$arity$1(db);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"todos","todos",630308868),(function (db,_){
return cljs.core.vals(new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(db));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"visible-todos","visible-todos",-694632253),(function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.alpha.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null)),refx.alpha.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showing","showing",798009604)], null))], null);
}),(function (p__37699,_){
var vec__37700 = p__37699;
var todos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37700,(0),null);
var showing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37700,(1),null);
var filter_fn = (function (){var G__37703 = showing;
var G__37703__$1 = (((G__37703 instanceof cljs.core.Keyword))?G__37703.fqn:null);
switch (G__37703__$1) {
case "active":
return cljs.core.complement(new cljs.core.Keyword(null,"done","done",-889844188));

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "all":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37703__$1)].join('')));

}
})();
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,todos);
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"all-complete?","all-complete?",85738111),(function (_,___$1){
return refx.alpha.sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null));
}),(function (todos,_){
return cljs.core.every_QMARK_(new cljs.core.Keyword(null,"done","done",-889844188),todos);
}));
refx.alpha.reg_sub(new cljs.core.Keyword(null,"completed-count","completed-count",484261033),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null),(function (todos,_){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),todos));
}));
refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"footer-counts","footer-counts",179032732),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null),new cljs.core.Keyword(null,"<-","<-",760412998),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"completed-count","completed-count",484261033)], null),(function (p__37719,_){
var vec__37720 = p__37719;
var todos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37720,(0),null);
var completed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37720,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(todos) - completed),completed], null);
})], 0));

//# sourceMappingURL=app.subs.js.map
