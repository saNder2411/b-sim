goog.provide('app.views');

app.views.t_input = (function (){var G__39283 = (function app$views$t_input_render(props__36450__auto__,maybe_ref__36451__auto__){
var vec__39284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__36450__auto__),maybe_ref__36451__auto__], null);
var map__39287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39284,(0),null);
var map__39287__$1 = cljs.core.__destructure_map(map__39287);
var props = map__39287__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39287__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39287__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39287__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));

var vec__39288 = helix.hooks.use_state(title);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39288,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39288,(1),null);
var stop = (function (){
(set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_value_BANG_.call(null,""));

if(cljs.core.truth_(on_stop)){
return (on_stop.cljs$core$IFn$_invoke$arity$0 ? on_stop.cljs$core$IFn$_invoke$arity$0() : on_stop.call(null));
} else {
return null;
}
});
var save = (function (){
var v = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
(on_save.cljs$core$IFn$_invoke$arity$1 ? on_save.cljs$core$IFn$_invoke$arity$1(v) : on_save.call(null,v));

return stop();
});
var G__39291 = "input";
var G__39292 = helix.impl.props.merge_obj((function (){var obj39294 = ({"type":"text","value":helix.impl.props.or_undefined((function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})()),"autoFocus":true,"onBlur":save,"onChange":(function (p1__39280_SHARP_){
var G__39295 = p1__39280_SHARP_.target.value;
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__39295) : set_value_BANG_.call(null,G__39295));
}),"onKeyDown":(function (p1__39281_SHARP_){
var G__39296 = p1__39281_SHARP_.which;
switch (G__39296) {
case (13):
return save();

break;
case (27):
return stop();

break;
default:
return null;

}
})});
return obj39294;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"on-save","on-save",1618176266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),new cljs.core.Keyword(null,"title","title",636505583)], 0))));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39291,G__39292) : helix.core.jsx.call(null,G__39291,G__39292));
});
if(goog.DEBUG === true){
var G__39297 = G__39283;
(G__39297.displayName = "app.views/t-input");

return G__39297;
} else {
return G__39283;
}
})();



app.views.on_edit_save = (function app$views$on_edit_save(id,value){
if(cljs.core.seq(value)){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save","save",1850079149),id,value], null));
} else {
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-todo","delete-todo",-134034723),id], null));
}
});

app.views.t_item = (function (){var G__39299 = (function app$views$t_item_render(props__36450__auto__,maybe_ref__36451__auto__){
var vec__39300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__36450__auto__),maybe_ref__36451__auto__], null);
var map__39303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39300,(0),null);
var map__39303__$1 = cljs.core.__destructure_map(map__39303);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39303__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39303__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39303__$1,new cljs.core.Keyword(null,"title","title",636505583));

var vec__39304 = helix.hooks.use_state(false);
var editing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39304,(0),null);
var set_editing_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39304,(1),null);
var G__39307 = "li";
var G__39308 = (function (){var obj39310 = ({"className":helix.impl.props.normalize_class([(cljs.core.truth_(done)?"completed":null),(cljs.core.truth_(editing)?"editing":null)].join('')),"children":[(function (){var G__39311 = "div";
var G__39312 = (function (){var obj39314 = ({"className":"view","children":[(function (){var G__39315 = "input";
var G__39316 = (function (){var obj39318 = ({"className":"toggle","type":"checkbox","checked":done,"onChange":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994),id], null));
})});
return obj39318;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39315,G__39316) : helix.core.jsx.call(null,G__39315,G__39316));
})(),(function (){var G__39319 = "label";
var G__39320 = (function (){var obj39322 = ({"onDoubleClick":(function (){
return (set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_editing_BANG_.call(null,true));
}),"children":title});
return obj39322;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39319,G__39320) : helix.core.jsx.call(null,G__39319,G__39320));
})(),(function (){var G__39323 = "button";
var G__39324 = (function (){var obj39326 = ({"className":"destroy","onClick":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-todo","delete-todo",-134034723),id], null));
})});
return obj39326;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39323,G__39324) : helix.core.jsx.call(null,G__39323,G__39324));
})()]});
return obj39314;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39311,G__39312) : helix.core.jsxs.call(null,G__39311,G__39312));
})(),(cljs.core.truth_(editing)?(function (){var G__39327 = app.views.t_input;
var G__39328 = (function (){var obj39330 = ({"class":"edit","title":title,"on-save":cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.views.on_edit_save,id),"on-stop":(function (){
return (set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_editing_BANG_.call(null,false));
})});
return obj39330;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39327,G__39328) : helix.core.jsx.call(null,G__39327,G__39328));
})():null)]});
return obj39310;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39307,G__39308) : helix.core.jsxs.call(null,G__39307,G__39308));
});
if(goog.DEBUG === true){
var G__39331 = G__39299;
(G__39331.displayName = "app.views/t-item");

return G__39331;
} else {
return G__39299;
}
})();




app.views.task_list = (function (){var G__39333 = (function app$views$task_list_render(props__36450__auto__,maybe_ref__36451__auto__){
var vec__39334 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__36450__auto__),maybe_ref__36451__auto__], null);

var visible_todos = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible-todos","visible-todos",-694632253)], null));
var all_complete_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-complete?","all-complete?",85738111)], null));
var G__39337 = "section";
var G__39338 = (function (){var obj39340 = ({"in":"main","children":[(function (){var G__39341 = "input";
var G__39342 = (function (){var obj39344 = ({"id":"toggle-all","type":"checkbox","checked":all_complete_QMARK_,"onChange":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-all-toggle","complete-all-toggle",1745771156)], null));
})});
return obj39344;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39341,G__39342) : helix.core.jsx.call(null,G__39341,G__39342));
})(),(function (){var G__39345 = "label";
var G__39346 = (function (){var obj39348 = ({"htmlFor":"toggle-all","children":"Mark all as complete"});
return obj39348;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39345,G__39346) : helix.core.jsx.call(null,G__39345,G__39346));
})(),(function (){var G__39349 = "ul";
var G__39350 = (function (){var obj39352 = ({"id":"todo-list","children":(function (){var iter__5523__auto__ = (function app$views$task_list_render_$_iter__39353(s__39354){
return (new cljs.core.LazySeq(null,(function (){
var s__39354__$1 = s__39354;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39354__$1);
if(temp__5804__auto__){
var s__39354__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39354__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39354__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39356 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39355 = (0);
while(true){
if((i__39355 < size__5522__auto__)){
var t = cljs.core._nth(c__5521__auto__,i__39355);
cljs.core.chunk_append(b__39356,(function (){var G__39357 = app.views.t_item;
var G__39358 = helix.impl.props.merge_obj(({}),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(t));
var G__39359 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t);
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$3 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$3(G__39357,G__39358,G__39359) : helix.core.jsx.call(null,G__39357,G__39358,G__39359));
})());

var G__39462 = (i__39355 + (1));
i__39355 = G__39462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39356),app$views$task_list_render_$_iter__39353(cljs.core.chunk_rest(s__39354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39356),null);
}
} else {
var t = cljs.core.first(s__39354__$2);
return cljs.core.cons((function (){var G__39362 = app.views.t_item;
var G__39363 = helix.impl.props.merge_obj(({}),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(t));
var G__39364 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t);
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$3 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$3(G__39362,G__39363,G__39364) : helix.core.jsx.call(null,G__39362,G__39363,G__39364));
})(),app$views$task_list_render_$_iter__39353(cljs.core.rest(s__39354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(visible_todos);
})()});
return obj39352;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39349,G__39350) : helix.core.jsx.call(null,G__39349,G__39350));
})()]});
return obj39340;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39337,G__39338) : helix.core.jsxs.call(null,G__39337,G__39338));
});
if(goog.DEBUG === true){
var G__39367 = G__39333;
(G__39367.displayName = "app.views/task-list");

return G__39367;
} else {
return G__39333;
}
})();



app.views.a_fn = (function app$views$a_fn(showing,filter_kw,txt){
var G__39368 = "a";
var G__39369 = (function (){var obj39371 = ({"className":helix.impl.props.normalize_class(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_kw,showing))?"selected":null)),"href":["#/",cljs.core.name(filter_kw)].join(''),"onClick":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),filter_kw], null));
}),"children":txt});
return obj39371;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39368,G__39369) : helix.core.jsx.call(null,G__39368,G__39369));
});

app.views.footer_controls = (function (){var G__39373 = (function app$views$footer_controls_render(props__36450__auto__,maybe_ref__36451__auto__){
var vec__39374 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__36450__auto__),maybe_ref__36451__auto__], null);

var vec__39377 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer-counts","footer-counts",179032732)], null));
var active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39377,(0),null);
var done = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39377,(1),null);
var showing = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showing","showing",798009604)], null));
var G__39380 = "footer";
var G__39381 = (function (){var obj39383 = ({"id":"footer","children":[(function (){var G__39384 = "span";
var G__39385 = (function (){var obj39387 = ({"id":"todo-count","children":[(function (){var G__39388 = "strong";
var G__39389 = (function (){var obj39391 = ({"children":active});
return obj39391;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39388,G__39389) : helix.core.jsx.call(null,G__39388,G__39389));
})()," ",(function (){var G__39392 = active;
switch (G__39392) {
case (1):
return "item";

break;
default:
return "items";

}
})()," left"]});
return obj39387;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39384,G__39385) : helix.core.jsxs.call(null,G__39384,G__39385));
})(),(function (){var G__39393 = "ul";
var G__39394 = (function (){var obj39396 = ({"id":"filters","children":[(function (){var G__39397 = "li";
var G__39398 = (function (){var obj39400 = ({"children":app.views.a_fn(showing,new cljs.core.Keyword(null,"all","all",892129742),"All")});
return obj39400;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39397,G__39398) : helix.core.jsx.call(null,G__39397,G__39398));
})(),(function (){var G__39401 = "li";
var G__39402 = (function (){var obj39404 = ({"children":app.views.a_fn(showing,new cljs.core.Keyword(null,"active","active",1895962068),"Active")});
return obj39404;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39401,G__39402) : helix.core.jsx.call(null,G__39401,G__39402));
})(),(function (){var G__39405 = "li";
var G__39406 = (function (){var obj39408 = ({"children":app.views.a_fn(showing,new cljs.core.Keyword(null,"done","done",-889844188),"Done")});
return obj39408;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39405,G__39406) : helix.core.jsx.call(null,G__39405,G__39406));
})()]});
return obj39396;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39393,G__39394) : helix.core.jsxs.call(null,G__39393,G__39394));
})(),(((done > (0)))?(function (){var G__39409 = "button";
var G__39410 = (function (){var obj39412 = ({"id":"clear-completed","onClick":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961)], null));
}),"children":"Clear completed"});
return obj39412;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39409,G__39410) : helix.core.jsx.call(null,G__39409,G__39410));
})():null)]});
return obj39383;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39380,G__39381) : helix.core.jsxs.call(null,G__39380,G__39381));
});
if(goog.DEBUG === true){
var G__39413 = G__39373;
(G__39413.displayName = "app.views/footer-controls");

return G__39413;
} else {
return G__39373;
}
})();




app.views.task_entry = (function (){var G__39416 = (function app$views$task_entry_render(props__36450__auto__,maybe_ref__36451__auto__){
var vec__39417 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__36450__auto__),maybe_ref__36451__auto__], null);

var G__39420 = "header";
var G__39421 = (function (){var obj39423 = ({"id":"header","children":[(function (){var G__39424 = "h1";
var G__39425 = (function (){var obj39427 = ({"children":"Todos"});
return obj39427;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39424,G__39425) : helix.core.jsx.call(null,G__39424,G__39425));
})(),(function (){var G__39428 = app.views.t_input;
var G__39429 = (function (){var obj39431 = ({"id":"new-todo","placeholder":"What needs to be done?","on-save":(function (p1__39414_SHARP_){
if(cljs.core.seq(p1__39414_SHARP_)){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401),p1__39414_SHARP_], null));
} else {
return null;
}
})});
return obj39431;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39428,G__39429) : helix.core.jsx.call(null,G__39428,G__39429));
})()]});
return obj39423;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39420,G__39421) : helix.core.jsxs.call(null,G__39420,G__39421));
});
if(goog.DEBUG === true){
var G__39432 = G__39416;
(G__39432.displayName = "app.views/task-entry");

return G__39432;
} else {
return G__39416;
}
})();




app.views.t_app = (function (){var G__39434 = (function app$views$t_app_render(props__36450__auto__,maybe_ref__36451__auto__){
var vec__39435 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__36450__auto__),maybe_ref__36451__auto__], null);

var G__39438 = helix.core.Fragment;
var G__39439 = ({"children": [(function (){var G__39440 = "section";
var G__39441 = (function (){var obj39443 = ({"id":"todoapp","children":[(function (){var G__39444 = app.views.task_entry;
var G__39445 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39444,G__39445) : helix.core.jsx.call(null,G__39444,G__39445));
})(),((cljs.core.seq(refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null))))?(function (){var G__39446 = app.views.task_list;
var G__39447 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39446,G__39447) : helix.core.jsx.call(null,G__39446,G__39447));
})():null),(function (){var G__39448 = app.views.footer_controls;
var G__39449 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39448,G__39449) : helix.core.jsx.call(null,G__39448,G__39449));
})()]});
return obj39443;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39440,G__39441) : helix.core.jsxs.call(null,G__39440,G__39441));
})(),(function (){var G__39450 = "footer";
var G__39451 = (function (){var obj39453 = ({"id":"info","children":(function (){var G__39454 = "p";
var G__39455 = (function (){var obj39457 = ({"children":"Double-click to edit a todo."});
return obj39457;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39454,G__39455) : helix.core.jsx.call(null,G__39454,G__39455));
})()});
return obj39453;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39450,G__39451) : helix.core.jsx.call(null,G__39450,G__39451));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39438,G__39439) : helix.core.jsxs.call(null,G__39438,G__39439));
});
if(goog.DEBUG === true){
var G__39458 = G__39434;
(G__39458.displayName = "app.views/t-app");

return G__39458;
} else {
return G__39434;
}
})();




//# sourceMappingURL=app.views.js.map
