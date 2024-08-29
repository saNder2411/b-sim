goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33296 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33296(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33298 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33298(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32344 = coll;
var G__32345 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32344,G__32345) : shadow.dom.lazy_native_coll_seq.call(null,G__32344,G__32345));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32348 = arguments.length;
switch (G__32348) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32354 = arguments.length;
switch (G__32354) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32360 = arguments.length;
switch (G__32360) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32366 = arguments.length;
switch (G__32366) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32378 = arguments.length;
switch (G__32378) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32398 = arguments.length;
switch (G__32398) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32403){if((e32403 instanceof Object)){
var e = e32403;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32403;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32418 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32419 = null;
var count__32420 = (0);
var i__32421 = (0);
while(true){
if((i__32421 < count__32420)){
var el = chunk__32419.cljs$core$IIndexed$_nth$arity$2(null,i__32421);
var handler_33330__$1 = ((function (seq__32418,chunk__32419,count__32420,i__32421,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32418,chunk__32419,count__32420,i__32421,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33330__$1);


var G__33333 = seq__32418;
var G__33334 = chunk__32419;
var G__33335 = count__32420;
var G__33336 = (i__32421 + (1));
seq__32418 = G__33333;
chunk__32419 = G__33334;
count__32420 = G__33335;
i__32421 = G__33336;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32418);
if(temp__5804__auto__){
var seq__32418__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32418__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32418__$1);
var G__33339 = cljs.core.chunk_rest(seq__32418__$1);
var G__33340 = c__5568__auto__;
var G__33341 = cljs.core.count(c__5568__auto__);
var G__33342 = (0);
seq__32418 = G__33339;
chunk__32419 = G__33340;
count__32420 = G__33341;
i__32421 = G__33342;
continue;
} else {
var el = cljs.core.first(seq__32418__$1);
var handler_33343__$1 = ((function (seq__32418,chunk__32419,count__32420,i__32421,el,seq__32418__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32418,chunk__32419,count__32420,i__32421,el,seq__32418__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33343__$1);


var G__33344 = cljs.core.next(seq__32418__$1);
var G__33345 = null;
var G__33346 = (0);
var G__33347 = (0);
seq__32418 = G__33344;
chunk__32419 = G__33345;
count__32420 = G__33346;
i__32421 = G__33347;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32431 = arguments.length;
switch (G__32431) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32437 = cljs.core.seq(events);
var chunk__32438 = null;
var count__32439 = (0);
var i__32440 = (0);
while(true){
if((i__32440 < count__32439)){
var vec__32454 = chunk__32438.cljs$core$IIndexed$_nth$arity$2(null,i__32440);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32454,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33355 = seq__32437;
var G__33356 = chunk__32438;
var G__33357 = count__32439;
var G__33358 = (i__32440 + (1));
seq__32437 = G__33355;
chunk__32438 = G__33356;
count__32439 = G__33357;
i__32440 = G__33358;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32437);
if(temp__5804__auto__){
var seq__32437__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32437__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32437__$1);
var G__33359 = cljs.core.chunk_rest(seq__32437__$1);
var G__33360 = c__5568__auto__;
var G__33361 = cljs.core.count(c__5568__auto__);
var G__33362 = (0);
seq__32437 = G__33359;
chunk__32438 = G__33360;
count__32439 = G__33361;
i__32440 = G__33362;
continue;
} else {
var vec__32457 = cljs.core.first(seq__32437__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32457,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33365 = cljs.core.next(seq__32437__$1);
var G__33366 = null;
var G__33367 = (0);
var G__33368 = (0);
seq__32437 = G__33365;
chunk__32438 = G__33366;
count__32439 = G__33367;
i__32440 = G__33368;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32463 = cljs.core.seq(styles);
var chunk__32464 = null;
var count__32465 = (0);
var i__32466 = (0);
while(true){
if((i__32466 < count__32465)){
var vec__32480 = chunk__32464.cljs$core$IIndexed$_nth$arity$2(null,i__32466);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32480,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32480,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33371 = seq__32463;
var G__33372 = chunk__32464;
var G__33373 = count__32465;
var G__33374 = (i__32466 + (1));
seq__32463 = G__33371;
chunk__32464 = G__33372;
count__32465 = G__33373;
i__32466 = G__33374;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32463);
if(temp__5804__auto__){
var seq__32463__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32463__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32463__$1);
var G__33376 = cljs.core.chunk_rest(seq__32463__$1);
var G__33377 = c__5568__auto__;
var G__33378 = cljs.core.count(c__5568__auto__);
var G__33379 = (0);
seq__32463 = G__33376;
chunk__32464 = G__33377;
count__32465 = G__33378;
i__32466 = G__33379;
continue;
} else {
var vec__32485 = cljs.core.first(seq__32463__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32485,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32485,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33380 = cljs.core.next(seq__32463__$1);
var G__33381 = null;
var G__33382 = (0);
var G__33383 = (0);
seq__32463 = G__33380;
chunk__32464 = G__33381;
count__32465 = G__33382;
i__32466 = G__33383;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32493_33386 = key;
var G__32493_33387__$1 = (((G__32493_33386 instanceof cljs.core.Keyword))?G__32493_33386.fqn:null);
switch (G__32493_33387__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33392 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_33392,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_33392,"aria-");
}
})())){
el.setAttribute(ks_33392,value);
} else {
(el[ks_33392] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32509){
var map__32511 = p__32509;
var map__32511__$1 = cljs.core.__destructure_map(map__32511);
var props = map__32511__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32511__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32512 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32512,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32512,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32512,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32518 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32518,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32518;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32523 = arguments.length;
switch (G__32523) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32530){
var vec__32531 = p__32530;
var seq__32532 = cljs.core.seq(vec__32531);
var first__32533 = cljs.core.first(seq__32532);
var seq__32532__$1 = cljs.core.next(seq__32532);
var nn = first__32533;
var first__32533__$1 = cljs.core.first(seq__32532__$1);
var seq__32532__$2 = cljs.core.next(seq__32532__$1);
var np = first__32533__$1;
var nc = seq__32532__$2;
var node = vec__32531;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32536 = nn;
var G__32537 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32536,G__32537) : create_fn.call(null,G__32536,G__32537));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32539 = nn;
var G__32540 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32539,G__32540) : create_fn.call(null,G__32539,G__32540));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32542 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32542,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32542,(1),null);
var seq__32545_33413 = cljs.core.seq(node_children);
var chunk__32546_33414 = null;
var count__32547_33415 = (0);
var i__32548_33416 = (0);
while(true){
if((i__32548_33416 < count__32547_33415)){
var child_struct_33418 = chunk__32546_33414.cljs$core$IIndexed$_nth$arity$2(null,i__32548_33416);
var children_33419 = shadow.dom.dom_node(child_struct_33418);
if(cljs.core.seq_QMARK_(children_33419)){
var seq__32599_33420 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33419));
var chunk__32601_33421 = null;
var count__32602_33422 = (0);
var i__32603_33423 = (0);
while(true){
if((i__32603_33423 < count__32602_33422)){
var child_33424 = chunk__32601_33421.cljs$core$IIndexed$_nth$arity$2(null,i__32603_33423);
if(cljs.core.truth_(child_33424)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33424);


var G__33425 = seq__32599_33420;
var G__33426 = chunk__32601_33421;
var G__33427 = count__32602_33422;
var G__33428 = (i__32603_33423 + (1));
seq__32599_33420 = G__33425;
chunk__32601_33421 = G__33426;
count__32602_33422 = G__33427;
i__32603_33423 = G__33428;
continue;
} else {
var G__33431 = seq__32599_33420;
var G__33432 = chunk__32601_33421;
var G__33433 = count__32602_33422;
var G__33434 = (i__32603_33423 + (1));
seq__32599_33420 = G__33431;
chunk__32601_33421 = G__33432;
count__32602_33422 = G__33433;
i__32603_33423 = G__33434;
continue;
}
} else {
var temp__5804__auto___33435 = cljs.core.seq(seq__32599_33420);
if(temp__5804__auto___33435){
var seq__32599_33436__$1 = temp__5804__auto___33435;
if(cljs.core.chunked_seq_QMARK_(seq__32599_33436__$1)){
var c__5568__auto___33437 = cljs.core.chunk_first(seq__32599_33436__$1);
var G__33438 = cljs.core.chunk_rest(seq__32599_33436__$1);
var G__33439 = c__5568__auto___33437;
var G__33440 = cljs.core.count(c__5568__auto___33437);
var G__33441 = (0);
seq__32599_33420 = G__33438;
chunk__32601_33421 = G__33439;
count__32602_33422 = G__33440;
i__32603_33423 = G__33441;
continue;
} else {
var child_33442 = cljs.core.first(seq__32599_33436__$1);
if(cljs.core.truth_(child_33442)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33442);


var G__33445 = cljs.core.next(seq__32599_33436__$1);
var G__33446 = null;
var G__33447 = (0);
var G__33448 = (0);
seq__32599_33420 = G__33445;
chunk__32601_33421 = G__33446;
count__32602_33422 = G__33447;
i__32603_33423 = G__33448;
continue;
} else {
var G__33449 = cljs.core.next(seq__32599_33436__$1);
var G__33450 = null;
var G__33451 = (0);
var G__33452 = (0);
seq__32599_33420 = G__33449;
chunk__32601_33421 = G__33450;
count__32602_33422 = G__33451;
i__32603_33423 = G__33452;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33419);
}


var G__33453 = seq__32545_33413;
var G__33454 = chunk__32546_33414;
var G__33455 = count__32547_33415;
var G__33456 = (i__32548_33416 + (1));
seq__32545_33413 = G__33453;
chunk__32546_33414 = G__33454;
count__32547_33415 = G__33455;
i__32548_33416 = G__33456;
continue;
} else {
var temp__5804__auto___33457 = cljs.core.seq(seq__32545_33413);
if(temp__5804__auto___33457){
var seq__32545_33458__$1 = temp__5804__auto___33457;
if(cljs.core.chunked_seq_QMARK_(seq__32545_33458__$1)){
var c__5568__auto___33459 = cljs.core.chunk_first(seq__32545_33458__$1);
var G__33460 = cljs.core.chunk_rest(seq__32545_33458__$1);
var G__33461 = c__5568__auto___33459;
var G__33462 = cljs.core.count(c__5568__auto___33459);
var G__33463 = (0);
seq__32545_33413 = G__33460;
chunk__32546_33414 = G__33461;
count__32547_33415 = G__33462;
i__32548_33416 = G__33463;
continue;
} else {
var child_struct_33464 = cljs.core.first(seq__32545_33458__$1);
var children_33466 = shadow.dom.dom_node(child_struct_33464);
if(cljs.core.seq_QMARK_(children_33466)){
var seq__32612_33467 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33466));
var chunk__32614_33468 = null;
var count__32615_33469 = (0);
var i__32616_33470 = (0);
while(true){
if((i__32616_33470 < count__32615_33469)){
var child_33471 = chunk__32614_33468.cljs$core$IIndexed$_nth$arity$2(null,i__32616_33470);
if(cljs.core.truth_(child_33471)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33471);


var G__33472 = seq__32612_33467;
var G__33473 = chunk__32614_33468;
var G__33474 = count__32615_33469;
var G__33475 = (i__32616_33470 + (1));
seq__32612_33467 = G__33472;
chunk__32614_33468 = G__33473;
count__32615_33469 = G__33474;
i__32616_33470 = G__33475;
continue;
} else {
var G__33476 = seq__32612_33467;
var G__33477 = chunk__32614_33468;
var G__33478 = count__32615_33469;
var G__33479 = (i__32616_33470 + (1));
seq__32612_33467 = G__33476;
chunk__32614_33468 = G__33477;
count__32615_33469 = G__33478;
i__32616_33470 = G__33479;
continue;
}
} else {
var temp__5804__auto___33481__$1 = cljs.core.seq(seq__32612_33467);
if(temp__5804__auto___33481__$1){
var seq__32612_33483__$1 = temp__5804__auto___33481__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32612_33483__$1)){
var c__5568__auto___33484 = cljs.core.chunk_first(seq__32612_33483__$1);
var G__33485 = cljs.core.chunk_rest(seq__32612_33483__$1);
var G__33486 = c__5568__auto___33484;
var G__33487 = cljs.core.count(c__5568__auto___33484);
var G__33488 = (0);
seq__32612_33467 = G__33485;
chunk__32614_33468 = G__33486;
count__32615_33469 = G__33487;
i__32616_33470 = G__33488;
continue;
} else {
var child_33490 = cljs.core.first(seq__32612_33483__$1);
if(cljs.core.truth_(child_33490)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33490);


var G__33492 = cljs.core.next(seq__32612_33483__$1);
var G__33493 = null;
var G__33494 = (0);
var G__33495 = (0);
seq__32612_33467 = G__33492;
chunk__32614_33468 = G__33493;
count__32615_33469 = G__33494;
i__32616_33470 = G__33495;
continue;
} else {
var G__33496 = cljs.core.next(seq__32612_33483__$1);
var G__33497 = null;
var G__33498 = (0);
var G__33499 = (0);
seq__32612_33467 = G__33496;
chunk__32614_33468 = G__33497;
count__32615_33469 = G__33498;
i__32616_33470 = G__33499;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33466);
}


var G__33500 = cljs.core.next(seq__32545_33458__$1);
var G__33501 = null;
var G__33502 = (0);
var G__33503 = (0);
seq__32545_33413 = G__33500;
chunk__32546_33414 = G__33501;
count__32547_33415 = G__33502;
i__32548_33416 = G__33503;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32642 = cljs.core.seq(node);
var chunk__32643 = null;
var count__32644 = (0);
var i__32645 = (0);
while(true){
if((i__32645 < count__32644)){
var n = chunk__32643.cljs$core$IIndexed$_nth$arity$2(null,i__32645);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33509 = seq__32642;
var G__33510 = chunk__32643;
var G__33511 = count__32644;
var G__33512 = (i__32645 + (1));
seq__32642 = G__33509;
chunk__32643 = G__33510;
count__32644 = G__33511;
i__32645 = G__33512;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32642);
if(temp__5804__auto__){
var seq__32642__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32642__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32642__$1);
var G__33513 = cljs.core.chunk_rest(seq__32642__$1);
var G__33514 = c__5568__auto__;
var G__33515 = cljs.core.count(c__5568__auto__);
var G__33516 = (0);
seq__32642 = G__33513;
chunk__32643 = G__33514;
count__32644 = G__33515;
i__32645 = G__33516;
continue;
} else {
var n = cljs.core.first(seq__32642__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33518 = cljs.core.next(seq__32642__$1);
var G__33519 = null;
var G__33520 = (0);
var G__33521 = (0);
seq__32642 = G__33518;
chunk__32643 = G__33519;
count__32644 = G__33520;
i__32645 = G__33521;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32674 = arguments.length;
switch (G__32674) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32680 = arguments.length;
switch (G__32680) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32698 = arguments.length;
switch (G__32698) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33537 = arguments.length;
var i__5770__auto___33538 = (0);
while(true){
if((i__5770__auto___33538 < len__5769__auto___33537)){
args__5775__auto__.push((arguments[i__5770__auto___33538]));

var G__33541 = (i__5770__auto___33538 + (1));
i__5770__auto___33538 = G__33541;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32729_33544 = cljs.core.seq(nodes);
var chunk__32730_33545 = null;
var count__32731_33546 = (0);
var i__32732_33547 = (0);
while(true){
if((i__32732_33547 < count__32731_33546)){
var node_33548 = chunk__32730_33545.cljs$core$IIndexed$_nth$arity$2(null,i__32732_33547);
fragment.appendChild(shadow.dom._to_dom(node_33548));


var G__33549 = seq__32729_33544;
var G__33550 = chunk__32730_33545;
var G__33551 = count__32731_33546;
var G__33552 = (i__32732_33547 + (1));
seq__32729_33544 = G__33549;
chunk__32730_33545 = G__33550;
count__32731_33546 = G__33551;
i__32732_33547 = G__33552;
continue;
} else {
var temp__5804__auto___33553 = cljs.core.seq(seq__32729_33544);
if(temp__5804__auto___33553){
var seq__32729_33554__$1 = temp__5804__auto___33553;
if(cljs.core.chunked_seq_QMARK_(seq__32729_33554__$1)){
var c__5568__auto___33555 = cljs.core.chunk_first(seq__32729_33554__$1);
var G__33556 = cljs.core.chunk_rest(seq__32729_33554__$1);
var G__33557 = c__5568__auto___33555;
var G__33558 = cljs.core.count(c__5568__auto___33555);
var G__33559 = (0);
seq__32729_33544 = G__33556;
chunk__32730_33545 = G__33557;
count__32731_33546 = G__33558;
i__32732_33547 = G__33559;
continue;
} else {
var node_33560 = cljs.core.first(seq__32729_33554__$1);
fragment.appendChild(shadow.dom._to_dom(node_33560));


var G__33561 = cljs.core.next(seq__32729_33554__$1);
var G__33562 = null;
var G__33563 = (0);
var G__33564 = (0);
seq__32729_33544 = G__33561;
chunk__32730_33545 = G__33562;
count__32731_33546 = G__33563;
i__32732_33547 = G__33564;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32726){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32726));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32751_33566 = cljs.core.seq(scripts);
var chunk__32752_33567 = null;
var count__32753_33568 = (0);
var i__32754_33569 = (0);
while(true){
if((i__32754_33569 < count__32753_33568)){
var vec__32772_33572 = chunk__32752_33567.cljs$core$IIndexed$_nth$arity$2(null,i__32754_33569);
var script_tag_33573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32772_33572,(0),null);
var script_body_33574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32772_33572,(1),null);
eval(script_body_33574);


var G__33575 = seq__32751_33566;
var G__33576 = chunk__32752_33567;
var G__33577 = count__32753_33568;
var G__33578 = (i__32754_33569 + (1));
seq__32751_33566 = G__33575;
chunk__32752_33567 = G__33576;
count__32753_33568 = G__33577;
i__32754_33569 = G__33578;
continue;
} else {
var temp__5804__auto___33579 = cljs.core.seq(seq__32751_33566);
if(temp__5804__auto___33579){
var seq__32751_33581__$1 = temp__5804__auto___33579;
if(cljs.core.chunked_seq_QMARK_(seq__32751_33581__$1)){
var c__5568__auto___33583 = cljs.core.chunk_first(seq__32751_33581__$1);
var G__33584 = cljs.core.chunk_rest(seq__32751_33581__$1);
var G__33585 = c__5568__auto___33583;
var G__33586 = cljs.core.count(c__5568__auto___33583);
var G__33587 = (0);
seq__32751_33566 = G__33584;
chunk__32752_33567 = G__33585;
count__32753_33568 = G__33586;
i__32754_33569 = G__33587;
continue;
} else {
var vec__32776_33588 = cljs.core.first(seq__32751_33581__$1);
var script_tag_33589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32776_33588,(0),null);
var script_body_33590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32776_33588,(1),null);
eval(script_body_33590);


var G__33591 = cljs.core.next(seq__32751_33581__$1);
var G__33592 = null;
var G__33593 = (0);
var G__33594 = (0);
seq__32751_33566 = G__33591;
chunk__32752_33567 = G__33592;
count__32753_33568 = G__33593;
i__32754_33569 = G__33594;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32781){
var vec__32783 = p__32781;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32783,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32783,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32796 = arguments.length;
switch (G__32796) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32811 = cljs.core.seq(style_keys);
var chunk__32812 = null;
var count__32813 = (0);
var i__32814 = (0);
while(true){
if((i__32814 < count__32813)){
var it = chunk__32812.cljs$core$IIndexed$_nth$arity$2(null,i__32814);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33602 = seq__32811;
var G__33603 = chunk__32812;
var G__33604 = count__32813;
var G__33605 = (i__32814 + (1));
seq__32811 = G__33602;
chunk__32812 = G__33603;
count__32813 = G__33604;
i__32814 = G__33605;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32811);
if(temp__5804__auto__){
var seq__32811__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32811__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32811__$1);
var G__33606 = cljs.core.chunk_rest(seq__32811__$1);
var G__33607 = c__5568__auto__;
var G__33608 = cljs.core.count(c__5568__auto__);
var G__33609 = (0);
seq__32811 = G__33606;
chunk__32812 = G__33607;
count__32813 = G__33608;
i__32814 = G__33609;
continue;
} else {
var it = cljs.core.first(seq__32811__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33612 = cljs.core.next(seq__32811__$1);
var G__33613 = null;
var G__33614 = (0);
var G__33615 = (0);
seq__32811 = G__33612;
chunk__32812 = G__33613;
count__32813 = G__33614;
i__32814 = G__33615;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k32836,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__32857 = k32836;
var G__32857__$1 = (((G__32857 instanceof cljs.core.Keyword))?G__32857.fqn:null);
switch (G__32857__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32836,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__32864){
var vec__32865 = p__32864;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32865,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32865,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32835){
var self__ = this;
var G__32835__$1 = this;
return (new cljs.core.RecordIter((0),G__32835__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32837,other32838){
var self__ = this;
var this32837__$1 = this;
return (((!((other32838 == null)))) && ((((this32837__$1.constructor === other32838.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32837__$1.x,other32838.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32837__$1.y,other32838.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32837__$1.__extmap,other32838.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k32836){
var self__ = this;
var this__5350__auto____$1 = this;
var G__32881 = k32836;
var G__32881__$1 = (((G__32881 instanceof cljs.core.Keyword))?G__32881.fqn:null);
switch (G__32881__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32836);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__32835){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__32883 = cljs.core.keyword_identical_QMARK_;
var expr__32884 = k__5352__auto__;
if(cljs.core.truth_((pred__32883.cljs$core$IFn$_invoke$arity$2 ? pred__32883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32884) : pred__32883.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32884)))){
return (new shadow.dom.Coordinate(G__32835,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32883.cljs$core$IFn$_invoke$arity$2 ? pred__32883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32884) : pred__32883.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32884)))){
return (new shadow.dom.Coordinate(self__.x,G__32835,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__32835),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__32835){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32835,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32844){
var extmap__5385__auto__ = (function (){var G__32904 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32844,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32844)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32904);
} else {
return G__32904;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32844),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32844),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k32918,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__32932 = k32918;
var G__32932__$1 = (((G__32932 instanceof cljs.core.Keyword))?G__32932.fqn:null);
switch (G__32932__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32918,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__32937){
var vec__32939 = p__32937;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32939,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32939,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32916){
var self__ = this;
var G__32916__$1 = this;
return (new cljs.core.RecordIter((0),G__32916__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32919,other32920){
var self__ = this;
var this32919__$1 = this;
return (((!((other32920 == null)))) && ((((this32919__$1.constructor === other32920.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32919__$1.w,other32920.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32919__$1.h,other32920.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32919__$1.__extmap,other32920.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k32918){
var self__ = this;
var this__5350__auto____$1 = this;
var G__32971 = k32918;
var G__32971__$1 = (((G__32971 instanceof cljs.core.Keyword))?G__32971.fqn:null);
switch (G__32971__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32918);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__32916){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__32974 = cljs.core.keyword_identical_QMARK_;
var expr__32975 = k__5352__auto__;
if(cljs.core.truth_((pred__32974.cljs$core$IFn$_invoke$arity$2 ? pred__32974.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32975) : pred__32974.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32975)))){
return (new shadow.dom.Size(G__32916,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32974.cljs$core$IFn$_invoke$arity$2 ? pred__32974.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32975) : pred__32974.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32975)))){
return (new shadow.dom.Size(self__.w,G__32916,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__32916),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__32916){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32916,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32921){
var extmap__5385__auto__ = (function (){var G__32991 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32921,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32921)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32991);
} else {
return G__32991;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32921),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32921),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__33658 = (i + (1));
var G__33659 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33658;
ret = G__33659;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33026){
var vec__33027 = p__33026;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33027,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33038 = arguments.length;
switch (G__33038) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33671 = ps;
var G__33672 = (i + (1));
el__$1 = G__33671;
i = G__33672;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33085 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33085,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33085,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33085,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33090_33677 = cljs.core.seq(props);
var chunk__33091_33678 = null;
var count__33092_33679 = (0);
var i__33093_33680 = (0);
while(true){
if((i__33093_33680 < count__33092_33679)){
var vec__33106_33681 = chunk__33091_33678.cljs$core$IIndexed$_nth$arity$2(null,i__33093_33680);
var k_33682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33106_33681,(0),null);
var v_33683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33106_33681,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_33682);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33682),v_33683);


var G__33686 = seq__33090_33677;
var G__33687 = chunk__33091_33678;
var G__33688 = count__33092_33679;
var G__33689 = (i__33093_33680 + (1));
seq__33090_33677 = G__33686;
chunk__33091_33678 = G__33687;
count__33092_33679 = G__33688;
i__33093_33680 = G__33689;
continue;
} else {
var temp__5804__auto___33690 = cljs.core.seq(seq__33090_33677);
if(temp__5804__auto___33690){
var seq__33090_33691__$1 = temp__5804__auto___33690;
if(cljs.core.chunked_seq_QMARK_(seq__33090_33691__$1)){
var c__5568__auto___33692 = cljs.core.chunk_first(seq__33090_33691__$1);
var G__33693 = cljs.core.chunk_rest(seq__33090_33691__$1);
var G__33694 = c__5568__auto___33692;
var G__33695 = cljs.core.count(c__5568__auto___33692);
var G__33696 = (0);
seq__33090_33677 = G__33693;
chunk__33091_33678 = G__33694;
count__33092_33679 = G__33695;
i__33093_33680 = G__33696;
continue;
} else {
var vec__33114_33697 = cljs.core.first(seq__33090_33691__$1);
var k_33698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114_33697,(0),null);
var v_33699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114_33697,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_33698);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33698),v_33699);


var G__33700 = cljs.core.next(seq__33090_33691__$1);
var G__33701 = null;
var G__33702 = (0);
var G__33703 = (0);
seq__33090_33677 = G__33700;
chunk__33091_33678 = G__33701;
count__33092_33679 = G__33702;
i__33093_33680 = G__33703;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33131 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33131,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33131,(1),null);
var seq__33134_33704 = cljs.core.seq(node_children);
var chunk__33136_33705 = null;
var count__33137_33706 = (0);
var i__33138_33707 = (0);
while(true){
if((i__33138_33707 < count__33137_33706)){
var child_struct_33708 = chunk__33136_33705.cljs$core$IIndexed$_nth$arity$2(null,i__33138_33707);
if((!((child_struct_33708 == null)))){
if(typeof child_struct_33708 === 'string'){
var text_33709 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33709),child_struct_33708].join(''));
} else {
var children_33710 = shadow.dom.svg_node(child_struct_33708);
if(cljs.core.seq_QMARK_(children_33710)){
var seq__33173_33711 = cljs.core.seq(children_33710);
var chunk__33175_33712 = null;
var count__33176_33713 = (0);
var i__33177_33714 = (0);
while(true){
if((i__33177_33714 < count__33176_33713)){
var child_33716 = chunk__33175_33712.cljs$core$IIndexed$_nth$arity$2(null,i__33177_33714);
if(cljs.core.truth_(child_33716)){
node.appendChild(child_33716);


var G__33717 = seq__33173_33711;
var G__33718 = chunk__33175_33712;
var G__33719 = count__33176_33713;
var G__33720 = (i__33177_33714 + (1));
seq__33173_33711 = G__33717;
chunk__33175_33712 = G__33718;
count__33176_33713 = G__33719;
i__33177_33714 = G__33720;
continue;
} else {
var G__33721 = seq__33173_33711;
var G__33722 = chunk__33175_33712;
var G__33723 = count__33176_33713;
var G__33724 = (i__33177_33714 + (1));
seq__33173_33711 = G__33721;
chunk__33175_33712 = G__33722;
count__33176_33713 = G__33723;
i__33177_33714 = G__33724;
continue;
}
} else {
var temp__5804__auto___33725 = cljs.core.seq(seq__33173_33711);
if(temp__5804__auto___33725){
var seq__33173_33726__$1 = temp__5804__auto___33725;
if(cljs.core.chunked_seq_QMARK_(seq__33173_33726__$1)){
var c__5568__auto___33727 = cljs.core.chunk_first(seq__33173_33726__$1);
var G__33729 = cljs.core.chunk_rest(seq__33173_33726__$1);
var G__33730 = c__5568__auto___33727;
var G__33731 = cljs.core.count(c__5568__auto___33727);
var G__33732 = (0);
seq__33173_33711 = G__33729;
chunk__33175_33712 = G__33730;
count__33176_33713 = G__33731;
i__33177_33714 = G__33732;
continue;
} else {
var child_33733 = cljs.core.first(seq__33173_33726__$1);
if(cljs.core.truth_(child_33733)){
node.appendChild(child_33733);


var G__33734 = cljs.core.next(seq__33173_33726__$1);
var G__33735 = null;
var G__33736 = (0);
var G__33737 = (0);
seq__33173_33711 = G__33734;
chunk__33175_33712 = G__33735;
count__33176_33713 = G__33736;
i__33177_33714 = G__33737;
continue;
} else {
var G__33738 = cljs.core.next(seq__33173_33726__$1);
var G__33739 = null;
var G__33740 = (0);
var G__33741 = (0);
seq__33173_33711 = G__33738;
chunk__33175_33712 = G__33739;
count__33176_33713 = G__33740;
i__33177_33714 = G__33741;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33710);
}
}


var G__33742 = seq__33134_33704;
var G__33743 = chunk__33136_33705;
var G__33744 = count__33137_33706;
var G__33745 = (i__33138_33707 + (1));
seq__33134_33704 = G__33742;
chunk__33136_33705 = G__33743;
count__33137_33706 = G__33744;
i__33138_33707 = G__33745;
continue;
} else {
var G__33746 = seq__33134_33704;
var G__33747 = chunk__33136_33705;
var G__33748 = count__33137_33706;
var G__33749 = (i__33138_33707 + (1));
seq__33134_33704 = G__33746;
chunk__33136_33705 = G__33747;
count__33137_33706 = G__33748;
i__33138_33707 = G__33749;
continue;
}
} else {
var temp__5804__auto___33750 = cljs.core.seq(seq__33134_33704);
if(temp__5804__auto___33750){
var seq__33134_33751__$1 = temp__5804__auto___33750;
if(cljs.core.chunked_seq_QMARK_(seq__33134_33751__$1)){
var c__5568__auto___33752 = cljs.core.chunk_first(seq__33134_33751__$1);
var G__33753 = cljs.core.chunk_rest(seq__33134_33751__$1);
var G__33754 = c__5568__auto___33752;
var G__33755 = cljs.core.count(c__5568__auto___33752);
var G__33756 = (0);
seq__33134_33704 = G__33753;
chunk__33136_33705 = G__33754;
count__33137_33706 = G__33755;
i__33138_33707 = G__33756;
continue;
} else {
var child_struct_33758 = cljs.core.first(seq__33134_33751__$1);
if((!((child_struct_33758 == null)))){
if(typeof child_struct_33758 === 'string'){
var text_33760 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33760),child_struct_33758].join(''));
} else {
var children_33762 = shadow.dom.svg_node(child_struct_33758);
if(cljs.core.seq_QMARK_(children_33762)){
var seq__33201_33763 = cljs.core.seq(children_33762);
var chunk__33203_33764 = null;
var count__33204_33765 = (0);
var i__33205_33766 = (0);
while(true){
if((i__33205_33766 < count__33204_33765)){
var child_33769 = chunk__33203_33764.cljs$core$IIndexed$_nth$arity$2(null,i__33205_33766);
if(cljs.core.truth_(child_33769)){
node.appendChild(child_33769);


var G__33770 = seq__33201_33763;
var G__33771 = chunk__33203_33764;
var G__33772 = count__33204_33765;
var G__33773 = (i__33205_33766 + (1));
seq__33201_33763 = G__33770;
chunk__33203_33764 = G__33771;
count__33204_33765 = G__33772;
i__33205_33766 = G__33773;
continue;
} else {
var G__33774 = seq__33201_33763;
var G__33775 = chunk__33203_33764;
var G__33776 = count__33204_33765;
var G__33777 = (i__33205_33766 + (1));
seq__33201_33763 = G__33774;
chunk__33203_33764 = G__33775;
count__33204_33765 = G__33776;
i__33205_33766 = G__33777;
continue;
}
} else {
var temp__5804__auto___33778__$1 = cljs.core.seq(seq__33201_33763);
if(temp__5804__auto___33778__$1){
var seq__33201_33779__$1 = temp__5804__auto___33778__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33201_33779__$1)){
var c__5568__auto___33780 = cljs.core.chunk_first(seq__33201_33779__$1);
var G__33781 = cljs.core.chunk_rest(seq__33201_33779__$1);
var G__33782 = c__5568__auto___33780;
var G__33783 = cljs.core.count(c__5568__auto___33780);
var G__33784 = (0);
seq__33201_33763 = G__33781;
chunk__33203_33764 = G__33782;
count__33204_33765 = G__33783;
i__33205_33766 = G__33784;
continue;
} else {
var child_33786 = cljs.core.first(seq__33201_33779__$1);
if(cljs.core.truth_(child_33786)){
node.appendChild(child_33786);


var G__33787 = cljs.core.next(seq__33201_33779__$1);
var G__33788 = null;
var G__33789 = (0);
var G__33790 = (0);
seq__33201_33763 = G__33787;
chunk__33203_33764 = G__33788;
count__33204_33765 = G__33789;
i__33205_33766 = G__33790;
continue;
} else {
var G__33791 = cljs.core.next(seq__33201_33779__$1);
var G__33792 = null;
var G__33793 = (0);
var G__33794 = (0);
seq__33201_33763 = G__33791;
chunk__33203_33764 = G__33792;
count__33204_33765 = G__33793;
i__33205_33766 = G__33794;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33762);
}
}


var G__33795 = cljs.core.next(seq__33134_33751__$1);
var G__33796 = null;
var G__33797 = (0);
var G__33798 = (0);
seq__33134_33704 = G__33795;
chunk__33136_33705 = G__33796;
count__33137_33706 = G__33797;
i__33138_33707 = G__33798;
continue;
} else {
var G__33801 = cljs.core.next(seq__33134_33751__$1);
var G__33802 = null;
var G__33803 = (0);
var G__33804 = (0);
seq__33134_33704 = G__33801;
chunk__33136_33705 = G__33802;
count__33137_33706 = G__33803;
i__33138_33707 = G__33804;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33808 = arguments.length;
var i__5770__auto___33809 = (0);
while(true){
if((i__5770__auto___33809 < len__5769__auto___33808)){
args__5775__auto__.push((arguments[i__5770__auto___33809]));

var G__33810 = (i__5770__auto___33809 + (1));
i__5770__auto___33809 = G__33810;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33230){
var G__33232 = cljs.core.first(seq33230);
var seq33230__$1 = cljs.core.next(seq33230);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33232,seq33230__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33250 = arguments.length;
switch (G__33250) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__28093__auto___33817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_33268){
var state_val_33269 = (state_33268[(1)]);
if((state_val_33269 === (1))){
var state_33268__$1 = state_33268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33268__$1,(2),once_or_cleanup);
} else {
if((state_val_33269 === (2))){
var inst_33265 = (state_33268[(2)]);
var inst_33266 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33268__$1 = (function (){var statearr_33274 = state_33268;
(statearr_33274[(7)] = inst_33265);

return statearr_33274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33268__$1,inst_33266);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27280__auto__ = null;
var shadow$dom$state_machine__27280__auto____0 = (function (){
var statearr_33279 = [null,null,null,null,null,null,null,null];
(statearr_33279[(0)] = shadow$dom$state_machine__27280__auto__);

(statearr_33279[(1)] = (1));

return statearr_33279;
});
var shadow$dom$state_machine__27280__auto____1 = (function (state_33268){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_33268);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e33281){var ex__27283__auto__ = e33281;
var statearr_33283_33820 = state_33268;
(statearr_33283_33820[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_33268[(4)]))){
var statearr_33284_33823 = state_33268;
(statearr_33284_33823[(1)] = cljs.core.first((state_33268[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33824 = state_33268;
state_33268 = G__33824;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
shadow$dom$state_machine__27280__auto__ = function(state_33268){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27280__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27280__auto____1.call(this,state_33268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27280__auto____0;
shadow$dom$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27280__auto____1;
return shadow$dom$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_33286 = f__28094__auto__();
(statearr_33286[(6)] = c__28093__auto___33817);

return statearr_33286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
