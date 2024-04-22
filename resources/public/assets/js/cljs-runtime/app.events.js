goog.provide('app.events');
app.events.check_and_throw = (function app$events$check_and_throw(a_spec,db){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(a_spec,db)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["spec check failed: ",cljs.spec.alpha.explain_str(a_spec,db)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
app.events.check_spec_interceptor = refx.interceptors.after(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.events.check_and_throw,new cljs.core.Keyword("app.db","db","app.db/db",-820521570)));
app.events.__GT_local_store_interceptor = refx.interceptors.after(app.db.todos__GT_local_store);
app.events.todo_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.events.check_spec_interceptor,refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"todos","todos",630308868)], 0)),app.events.__GT_local_store_interceptor], null);
app.events.allocate_next_id = (function app$events$allocate_next_id(todos){
return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))(cljs.core.last(cljs.core.keys(todos)));
});
refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"local-store-todos","local-store-todos",-1573636976)),app.events.check_spec_interceptor], null),(function (p__39614,_){
var map__39615 = p__39614;
var map__39615__$1 = cljs.core.__destructure_map(map__39615);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39615__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39615__$1,new cljs.core.Keyword(null,"local-store-todos","local-store-todos",-1573636976));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.db.default_db,new cljs.core.Keyword(null,"todos","todos",630308868),local_store_todos)], null);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.events.check_spec_interceptor], null),(function (db,p__39616){
var vec__39617 = p__39616;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39617,(0),null);
var new_filter_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39617,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"showing","showing",798009604),new_filter_kw);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401),app.events.todo_interceptors,(function (todos,p__39620){
var vec__39621 = p__39620;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39621,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39621,(1),null);
var id = app.events.allocate_next_id(todos);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(todos,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994),app.events.todo_interceptors,(function (todos,p__39624){
var vec__39625 = p__39624;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39625,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39625,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(todos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"save","save",1850079149),app.events.todo_interceptors,(function (todos,p__39628){
var vec__39629 = p__39628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39629,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39629,(1),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39629,(2),null);
return cljs.core.assoc_in(todos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"delete-todo","delete-todo",-134034723),app.events.todo_interceptors,(function (todos,p__39632){
var vec__39633 = p__39632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39633,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39633,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(todos,id);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961),app.events.todo_interceptors,(function (todos,_){
var done_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.vals(todos)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,todos,done_ids);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"complete-all-toggle","complete-all-toggle",1745771156),app.events.todo_interceptors,(function (todos,_){
var new_done = cljs.core.not_every_QMARK_(new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.vals(todos));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__39636_SHARP_,p2__39637_SHARP_){
return cljs.core.assoc_in(p1__39636_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__39637_SHARP_,new cljs.core.Keyword(null,"done","done",-889844188)], null),new_done);
}),todos,cljs.core.keys(todos));
}));

//# sourceMappingURL=app.events.js.map
