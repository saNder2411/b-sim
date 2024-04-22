goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35820 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_35820(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35824 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_35824(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34451 = coll;
var G__34452 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34451,G__34452) : shadow.dom.lazy_native_coll_seq.call(null,G__34451,G__34452));
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
var G__34570 = arguments.length;
switch (G__34570) {
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
var G__34599 = arguments.length;
switch (G__34599) {
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
var G__34616 = arguments.length;
switch (G__34616) {
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
var G__34638 = arguments.length;
switch (G__34638) {
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
var G__34657 = arguments.length;
switch (G__34657) {
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
var G__34685 = arguments.length;
switch (G__34685) {
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
}catch (e34696){if((e34696 instanceof Object)){
var e = e34696;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34696;

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
var seq__34707 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34708 = null;
var count__34709 = (0);
var i__34710 = (0);
while(true){
if((i__34710 < count__34709)){
var el = chunk__34708.cljs$core$IIndexed$_nth$arity$2(null,i__34710);
var handler_35852__$1 = ((function (seq__34707,chunk__34708,count__34709,i__34710,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34707,chunk__34708,count__34709,i__34710,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35852__$1);


var G__35853 = seq__34707;
var G__35854 = chunk__34708;
var G__35855 = count__34709;
var G__35856 = (i__34710 + (1));
seq__34707 = G__35853;
chunk__34708 = G__35854;
count__34709 = G__35855;
i__34710 = G__35856;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34707);
if(temp__5804__auto__){
var seq__34707__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34707__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34707__$1);
var G__35857 = cljs.core.chunk_rest(seq__34707__$1);
var G__35858 = c__5568__auto__;
var G__35859 = cljs.core.count(c__5568__auto__);
var G__35860 = (0);
seq__34707 = G__35857;
chunk__34708 = G__35858;
count__34709 = G__35859;
i__34710 = G__35860;
continue;
} else {
var el = cljs.core.first(seq__34707__$1);
var handler_35861__$1 = ((function (seq__34707,chunk__34708,count__34709,i__34710,el,seq__34707__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34707,chunk__34708,count__34709,i__34710,el,seq__34707__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35861__$1);


var G__35862 = cljs.core.next(seq__34707__$1);
var G__35863 = null;
var G__35865 = (0);
var G__35866 = (0);
seq__34707 = G__35862;
chunk__34708 = G__35863;
count__34709 = G__35865;
i__34710 = G__35866;
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
var G__34738 = arguments.length;
switch (G__34738) {
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
var seq__34748 = cljs.core.seq(events);
var chunk__34749 = null;
var count__34750 = (0);
var i__34751 = (0);
while(true){
if((i__34751 < count__34750)){
var vec__34760 = chunk__34749.cljs$core$IIndexed$_nth$arity$2(null,i__34751);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35872 = seq__34748;
var G__35873 = chunk__34749;
var G__35874 = count__34750;
var G__35875 = (i__34751 + (1));
seq__34748 = G__35872;
chunk__34749 = G__35873;
count__34750 = G__35874;
i__34751 = G__35875;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34748);
if(temp__5804__auto__){
var seq__34748__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34748__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34748__$1);
var G__35876 = cljs.core.chunk_rest(seq__34748__$1);
var G__35877 = c__5568__auto__;
var G__35878 = cljs.core.count(c__5568__auto__);
var G__35879 = (0);
seq__34748 = G__35876;
chunk__34749 = G__35877;
count__34750 = G__35878;
i__34751 = G__35879;
continue;
} else {
var vec__34768 = cljs.core.first(seq__34748__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35882 = cljs.core.next(seq__34748__$1);
var G__35883 = null;
var G__35884 = (0);
var G__35885 = (0);
seq__34748 = G__35882;
chunk__34749 = G__35883;
count__34750 = G__35884;
i__34751 = G__35885;
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
var seq__34774 = cljs.core.seq(styles);
var chunk__34775 = null;
var count__34776 = (0);
var i__34777 = (0);
while(true){
if((i__34777 < count__34776)){
var vec__34801 = chunk__34775.cljs$core$IIndexed$_nth$arity$2(null,i__34777);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34801,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35888 = seq__34774;
var G__35889 = chunk__34775;
var G__35890 = count__34776;
var G__35891 = (i__34777 + (1));
seq__34774 = G__35888;
chunk__34775 = G__35889;
count__34776 = G__35890;
i__34777 = G__35891;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34774);
if(temp__5804__auto__){
var seq__34774__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34774__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34774__$1);
var G__35894 = cljs.core.chunk_rest(seq__34774__$1);
var G__35895 = c__5568__auto__;
var G__35896 = cljs.core.count(c__5568__auto__);
var G__35897 = (0);
seq__34774 = G__35894;
chunk__34775 = G__35895;
count__34776 = G__35896;
i__34777 = G__35897;
continue;
} else {
var vec__34807 = cljs.core.first(seq__34774__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35900 = cljs.core.next(seq__34774__$1);
var G__35901 = null;
var G__35902 = (0);
var G__35903 = (0);
seq__34774 = G__35900;
chunk__34775 = G__35901;
count__34776 = G__35902;
i__34777 = G__35903;
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
var G__34814_35904 = key;
var G__34814_35905__$1 = (((G__34814_35904 instanceof cljs.core.Keyword))?G__34814_35904.fqn:null);
switch (G__34814_35905__$1) {
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
var ks_35921 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_35921,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_35921,"aria-");
}
})())){
el.setAttribute(ks_35921,value);
} else {
(el[ks_35921] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34854){
var map__34856 = p__34854;
var map__34856__$1 = cljs.core.__destructure_map(map__34856);
var props = map__34856__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34856__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34857 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34857,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34861 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34861,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34861;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34865 = arguments.length;
switch (G__34865) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34871){
var vec__34873 = p__34871;
var seq__34874 = cljs.core.seq(vec__34873);
var first__34875 = cljs.core.first(seq__34874);
var seq__34874__$1 = cljs.core.next(seq__34874);
var nn = first__34875;
var first__34875__$1 = cljs.core.first(seq__34874__$1);
var seq__34874__$2 = cljs.core.next(seq__34874__$1);
var np = first__34875__$1;
var nc = seq__34874__$2;
var node = vec__34873;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34878 = nn;
var G__34879 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34878,G__34879) : create_fn.call(null,G__34878,G__34879));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34880 = nn;
var G__34881 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34880,G__34881) : create_fn.call(null,G__34880,G__34881));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34882 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34882,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34882,(1),null);
var seq__34885_35935 = cljs.core.seq(node_children);
var chunk__34886_35936 = null;
var count__34887_35937 = (0);
var i__34888_35938 = (0);
while(true){
if((i__34888_35938 < count__34887_35937)){
var child_struct_35939 = chunk__34886_35936.cljs$core$IIndexed$_nth$arity$2(null,i__34888_35938);
var children_35940 = shadow.dom.dom_node(child_struct_35939);
if(cljs.core.seq_QMARK_(children_35940)){
var seq__34934_35941 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35940));
var chunk__34936_35942 = null;
var count__34937_35943 = (0);
var i__34938_35944 = (0);
while(true){
if((i__34938_35944 < count__34937_35943)){
var child_35945 = chunk__34936_35942.cljs$core$IIndexed$_nth$arity$2(null,i__34938_35944);
if(cljs.core.truth_(child_35945)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35945);


var G__35946 = seq__34934_35941;
var G__35947 = chunk__34936_35942;
var G__35948 = count__34937_35943;
var G__35949 = (i__34938_35944 + (1));
seq__34934_35941 = G__35946;
chunk__34936_35942 = G__35947;
count__34937_35943 = G__35948;
i__34938_35944 = G__35949;
continue;
} else {
var G__35950 = seq__34934_35941;
var G__35951 = chunk__34936_35942;
var G__35952 = count__34937_35943;
var G__35953 = (i__34938_35944 + (1));
seq__34934_35941 = G__35950;
chunk__34936_35942 = G__35951;
count__34937_35943 = G__35952;
i__34938_35944 = G__35953;
continue;
}
} else {
var temp__5804__auto___35954 = cljs.core.seq(seq__34934_35941);
if(temp__5804__auto___35954){
var seq__34934_35955__$1 = temp__5804__auto___35954;
if(cljs.core.chunked_seq_QMARK_(seq__34934_35955__$1)){
var c__5568__auto___35956 = cljs.core.chunk_first(seq__34934_35955__$1);
var G__35957 = cljs.core.chunk_rest(seq__34934_35955__$1);
var G__35958 = c__5568__auto___35956;
var G__35959 = cljs.core.count(c__5568__auto___35956);
var G__35960 = (0);
seq__34934_35941 = G__35957;
chunk__34936_35942 = G__35958;
count__34937_35943 = G__35959;
i__34938_35944 = G__35960;
continue;
} else {
var child_35961 = cljs.core.first(seq__34934_35955__$1);
if(cljs.core.truth_(child_35961)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35961);


var G__35962 = cljs.core.next(seq__34934_35955__$1);
var G__35963 = null;
var G__35964 = (0);
var G__35965 = (0);
seq__34934_35941 = G__35962;
chunk__34936_35942 = G__35963;
count__34937_35943 = G__35964;
i__34938_35944 = G__35965;
continue;
} else {
var G__35966 = cljs.core.next(seq__34934_35955__$1);
var G__35967 = null;
var G__35968 = (0);
var G__35969 = (0);
seq__34934_35941 = G__35966;
chunk__34936_35942 = G__35967;
count__34937_35943 = G__35968;
i__34938_35944 = G__35969;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35940);
}


var G__35970 = seq__34885_35935;
var G__35971 = chunk__34886_35936;
var G__35972 = count__34887_35937;
var G__35973 = (i__34888_35938 + (1));
seq__34885_35935 = G__35970;
chunk__34886_35936 = G__35971;
count__34887_35937 = G__35972;
i__34888_35938 = G__35973;
continue;
} else {
var temp__5804__auto___35974 = cljs.core.seq(seq__34885_35935);
if(temp__5804__auto___35974){
var seq__34885_35975__$1 = temp__5804__auto___35974;
if(cljs.core.chunked_seq_QMARK_(seq__34885_35975__$1)){
var c__5568__auto___35976 = cljs.core.chunk_first(seq__34885_35975__$1);
var G__35977 = cljs.core.chunk_rest(seq__34885_35975__$1);
var G__35978 = c__5568__auto___35976;
var G__35979 = cljs.core.count(c__5568__auto___35976);
var G__35980 = (0);
seq__34885_35935 = G__35977;
chunk__34886_35936 = G__35978;
count__34887_35937 = G__35979;
i__34888_35938 = G__35980;
continue;
} else {
var child_struct_35981 = cljs.core.first(seq__34885_35975__$1);
var children_35982 = shadow.dom.dom_node(child_struct_35981);
if(cljs.core.seq_QMARK_(children_35982)){
var seq__34958_35983 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35982));
var chunk__34960_35984 = null;
var count__34961_35985 = (0);
var i__34962_35986 = (0);
while(true){
if((i__34962_35986 < count__34961_35985)){
var child_35987 = chunk__34960_35984.cljs$core$IIndexed$_nth$arity$2(null,i__34962_35986);
if(cljs.core.truth_(child_35987)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35987);


var G__35988 = seq__34958_35983;
var G__35989 = chunk__34960_35984;
var G__35990 = count__34961_35985;
var G__35991 = (i__34962_35986 + (1));
seq__34958_35983 = G__35988;
chunk__34960_35984 = G__35989;
count__34961_35985 = G__35990;
i__34962_35986 = G__35991;
continue;
} else {
var G__35992 = seq__34958_35983;
var G__35993 = chunk__34960_35984;
var G__35994 = count__34961_35985;
var G__35995 = (i__34962_35986 + (1));
seq__34958_35983 = G__35992;
chunk__34960_35984 = G__35993;
count__34961_35985 = G__35994;
i__34962_35986 = G__35995;
continue;
}
} else {
var temp__5804__auto___35996__$1 = cljs.core.seq(seq__34958_35983);
if(temp__5804__auto___35996__$1){
var seq__34958_35997__$1 = temp__5804__auto___35996__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34958_35997__$1)){
var c__5568__auto___35998 = cljs.core.chunk_first(seq__34958_35997__$1);
var G__35999 = cljs.core.chunk_rest(seq__34958_35997__$1);
var G__36000 = c__5568__auto___35998;
var G__36001 = cljs.core.count(c__5568__auto___35998);
var G__36002 = (0);
seq__34958_35983 = G__35999;
chunk__34960_35984 = G__36000;
count__34961_35985 = G__36001;
i__34962_35986 = G__36002;
continue;
} else {
var child_36003 = cljs.core.first(seq__34958_35997__$1);
if(cljs.core.truth_(child_36003)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36003);


var G__36004 = cljs.core.next(seq__34958_35997__$1);
var G__36005 = null;
var G__36006 = (0);
var G__36007 = (0);
seq__34958_35983 = G__36004;
chunk__34960_35984 = G__36005;
count__34961_35985 = G__36006;
i__34962_35986 = G__36007;
continue;
} else {
var G__36008 = cljs.core.next(seq__34958_35997__$1);
var G__36009 = null;
var G__36010 = (0);
var G__36011 = (0);
seq__34958_35983 = G__36008;
chunk__34960_35984 = G__36009;
count__34961_35985 = G__36010;
i__34962_35986 = G__36011;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35982);
}


var G__36012 = cljs.core.next(seq__34885_35975__$1);
var G__36013 = null;
var G__36014 = (0);
var G__36015 = (0);
seq__34885_35935 = G__36012;
chunk__34886_35936 = G__36013;
count__34887_35937 = G__36014;
i__34888_35938 = G__36015;
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
var seq__34991 = cljs.core.seq(node);
var chunk__34992 = null;
var count__34993 = (0);
var i__34994 = (0);
while(true){
if((i__34994 < count__34993)){
var n = chunk__34992.cljs$core$IIndexed$_nth$arity$2(null,i__34994);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36016 = seq__34991;
var G__36017 = chunk__34992;
var G__36018 = count__34993;
var G__36019 = (i__34994 + (1));
seq__34991 = G__36016;
chunk__34992 = G__36017;
count__34993 = G__36018;
i__34994 = G__36019;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34991);
if(temp__5804__auto__){
var seq__34991__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34991__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34991__$1);
var G__36020 = cljs.core.chunk_rest(seq__34991__$1);
var G__36021 = c__5568__auto__;
var G__36022 = cljs.core.count(c__5568__auto__);
var G__36023 = (0);
seq__34991 = G__36020;
chunk__34992 = G__36021;
count__34993 = G__36022;
i__34994 = G__36023;
continue;
} else {
var n = cljs.core.first(seq__34991__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36025 = cljs.core.next(seq__34991__$1);
var G__36026 = null;
var G__36027 = (0);
var G__36028 = (0);
seq__34991 = G__36025;
chunk__34992 = G__36026;
count__34993 = G__36027;
i__34994 = G__36028;
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
var G__35011 = arguments.length;
switch (G__35011) {
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
var G__35017 = arguments.length;
switch (G__35017) {
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
var G__35043 = arguments.length;
switch (G__35043) {
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
var len__5769__auto___36035 = arguments.length;
var i__5770__auto___36036 = (0);
while(true){
if((i__5770__auto___36036 < len__5769__auto___36035)){
args__5775__auto__.push((arguments[i__5770__auto___36036]));

var G__36037 = (i__5770__auto___36036 + (1));
i__5770__auto___36036 = G__36037;
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
var seq__35087_36042 = cljs.core.seq(nodes);
var chunk__35088_36043 = null;
var count__35089_36044 = (0);
var i__35090_36045 = (0);
while(true){
if((i__35090_36045 < count__35089_36044)){
var node_36046 = chunk__35088_36043.cljs$core$IIndexed$_nth$arity$2(null,i__35090_36045);
fragment.appendChild(shadow.dom._to_dom(node_36046));


var G__36047 = seq__35087_36042;
var G__36048 = chunk__35088_36043;
var G__36049 = count__35089_36044;
var G__36050 = (i__35090_36045 + (1));
seq__35087_36042 = G__36047;
chunk__35088_36043 = G__36048;
count__35089_36044 = G__36049;
i__35090_36045 = G__36050;
continue;
} else {
var temp__5804__auto___36051 = cljs.core.seq(seq__35087_36042);
if(temp__5804__auto___36051){
var seq__35087_36052__$1 = temp__5804__auto___36051;
if(cljs.core.chunked_seq_QMARK_(seq__35087_36052__$1)){
var c__5568__auto___36053 = cljs.core.chunk_first(seq__35087_36052__$1);
var G__36054 = cljs.core.chunk_rest(seq__35087_36052__$1);
var G__36055 = c__5568__auto___36053;
var G__36056 = cljs.core.count(c__5568__auto___36053);
var G__36057 = (0);
seq__35087_36042 = G__36054;
chunk__35088_36043 = G__36055;
count__35089_36044 = G__36056;
i__35090_36045 = G__36057;
continue;
} else {
var node_36058 = cljs.core.first(seq__35087_36052__$1);
fragment.appendChild(shadow.dom._to_dom(node_36058));


var G__36059 = cljs.core.next(seq__35087_36052__$1);
var G__36060 = null;
var G__36061 = (0);
var G__36062 = (0);
seq__35087_36042 = G__36059;
chunk__35088_36043 = G__36060;
count__35089_36044 = G__36061;
i__35090_36045 = G__36062;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35076){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35076));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35120_36063 = cljs.core.seq(scripts);
var chunk__35121_36064 = null;
var count__35122_36065 = (0);
var i__35123_36066 = (0);
while(true){
if((i__35123_36066 < count__35122_36065)){
var vec__35134_36067 = chunk__35121_36064.cljs$core$IIndexed$_nth$arity$2(null,i__35123_36066);
var script_tag_36068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134_36067,(0),null);
var script_body_36069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134_36067,(1),null);
eval(script_body_36069);


var G__36071 = seq__35120_36063;
var G__36072 = chunk__35121_36064;
var G__36073 = count__35122_36065;
var G__36074 = (i__35123_36066 + (1));
seq__35120_36063 = G__36071;
chunk__35121_36064 = G__36072;
count__35122_36065 = G__36073;
i__35123_36066 = G__36074;
continue;
} else {
var temp__5804__auto___36075 = cljs.core.seq(seq__35120_36063);
if(temp__5804__auto___36075){
var seq__35120_36076__$1 = temp__5804__auto___36075;
if(cljs.core.chunked_seq_QMARK_(seq__35120_36076__$1)){
var c__5568__auto___36079 = cljs.core.chunk_first(seq__35120_36076__$1);
var G__36080 = cljs.core.chunk_rest(seq__35120_36076__$1);
var G__36081 = c__5568__auto___36079;
var G__36082 = cljs.core.count(c__5568__auto___36079);
var G__36083 = (0);
seq__35120_36063 = G__36080;
chunk__35121_36064 = G__36081;
count__35122_36065 = G__36082;
i__35123_36066 = G__36083;
continue;
} else {
var vec__35143_36084 = cljs.core.first(seq__35120_36076__$1);
var script_tag_36085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143_36084,(0),null);
var script_body_36086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35143_36084,(1),null);
eval(script_body_36086);


var G__36088 = cljs.core.next(seq__35120_36076__$1);
var G__36089 = null;
var G__36090 = (0);
var G__36091 = (0);
seq__35120_36063 = G__36088;
chunk__35121_36064 = G__36089;
count__35122_36065 = G__36090;
i__35123_36066 = G__36091;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35152){
var vec__35153 = p__35152;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35153,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35153,(1),null);
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
var G__35165 = arguments.length;
switch (G__35165) {
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
var seq__35252 = cljs.core.seq(style_keys);
var chunk__35253 = null;
var count__35254 = (0);
var i__35255 = (0);
while(true){
if((i__35255 < count__35254)){
var it = chunk__35253.cljs$core$IIndexed$_nth$arity$2(null,i__35255);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36133 = seq__35252;
var G__36134 = chunk__35253;
var G__36135 = count__35254;
var G__36136 = (i__35255 + (1));
seq__35252 = G__36133;
chunk__35253 = G__36134;
count__35254 = G__36135;
i__35255 = G__36136;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35252);
if(temp__5804__auto__){
var seq__35252__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35252__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35252__$1);
var G__36137 = cljs.core.chunk_rest(seq__35252__$1);
var G__36138 = c__5568__auto__;
var G__36139 = cljs.core.count(c__5568__auto__);
var G__36140 = (0);
seq__35252 = G__36137;
chunk__35253 = G__36138;
count__35254 = G__36139;
i__35255 = G__36140;
continue;
} else {
var it = cljs.core.first(seq__35252__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36143 = cljs.core.next(seq__35252__$1);
var G__36144 = null;
var G__36145 = (0);
var G__36146 = (0);
seq__35252 = G__36143;
chunk__35253 = G__36144;
count__35254 = G__36145;
i__35255 = G__36146;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35302,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35333 = k35302;
var G__35333__$1 = (((G__35333 instanceof cljs.core.Keyword))?G__35333.fqn:null);
switch (G__35333__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35302,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35343){
var vec__35344 = p__35343;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35344,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35344,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35301){
var self__ = this;
var G__35301__$1 = this;
return (new cljs.core.RecordIter((0),G__35301__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35304,other35305){
var self__ = this;
var this35304__$1 = this;
return (((!((other35305 == null)))) && ((((this35304__$1.constructor === other35305.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35304__$1.x,other35305.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35304__$1.y,other35305.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35304__$1.__extmap,other35305.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35302){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35377 = k35302;
var G__35377__$1 = (((G__35377 instanceof cljs.core.Keyword))?G__35377.fqn:null);
switch (G__35377__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35302);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35301){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35386 = cljs.core.keyword_identical_QMARK_;
var expr__35387 = k__5352__auto__;
if(cljs.core.truth_((pred__35386.cljs$core$IFn$_invoke$arity$2 ? pred__35386.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35387) : pred__35386.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35387)))){
return (new shadow.dom.Coordinate(G__35301,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35386.cljs$core$IFn$_invoke$arity$2 ? pred__35386.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35387) : pred__35386.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35387)))){
return (new shadow.dom.Coordinate(self__.x,G__35301,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35301),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35301){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35301,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35314){
var extmap__5385__auto__ = (function (){var G__35437 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35314,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35314)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35437);
} else {
return G__35437;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35314),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35314),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35453,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35515 = k35453;
var G__35515__$1 = (((G__35515 instanceof cljs.core.Keyword))?G__35515.fqn:null);
switch (G__35515__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35453,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35526){
var vec__35531 = p__35526;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35531,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35531,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35452){
var self__ = this;
var G__35452__$1 = this;
return (new cljs.core.RecordIter((0),G__35452__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35455,other35456){
var self__ = this;
var this35455__$1 = this;
return (((!((other35456 == null)))) && ((((this35455__$1.constructor === other35456.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35455__$1.w,other35456.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35455__$1.h,other35456.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35455__$1.__extmap,other35456.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35453){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35564 = k35453;
var G__35564__$1 = (((G__35564 instanceof cljs.core.Keyword))?G__35564.fqn:null);
switch (G__35564__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35453);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35452){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35565 = cljs.core.keyword_identical_QMARK_;
var expr__35566 = k__5352__auto__;
if(cljs.core.truth_((pred__35565.cljs$core$IFn$_invoke$arity$2 ? pred__35565.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35566) : pred__35565.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35566)))){
return (new shadow.dom.Size(G__35452,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35565.cljs$core$IFn$_invoke$arity$2 ? pred__35565.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35566) : pred__35565.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35566)))){
return (new shadow.dom.Size(self__.w,G__35452,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35452),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35452){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35452,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35464){
var extmap__5385__auto__ = (function (){var G__35578 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35464,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35464)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35578);
} else {
return G__35578;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35464),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35464),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__36245 = (i + (1));
var G__36246 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36245;
ret = G__36246;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35593){
var vec__35594 = p__35593;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35594,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35594,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35601 = arguments.length;
switch (G__35601) {
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
var G__36254 = ps;
var G__36255 = (i + (1));
el__$1 = G__36254;
i = G__36255;
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
var vec__35618 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35618,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35618,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35618,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35622_36260 = cljs.core.seq(props);
var chunk__35623_36261 = null;
var count__35624_36262 = (0);
var i__35625_36263 = (0);
while(true){
if((i__35625_36263 < count__35624_36262)){
var vec__35640_36265 = chunk__35623_36261.cljs$core$IIndexed$_nth$arity$2(null,i__35625_36263);
var k_36266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35640_36265,(0),null);
var v_36267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35640_36265,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_36266);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36266),v_36267);


var G__36269 = seq__35622_36260;
var G__36270 = chunk__35623_36261;
var G__36271 = count__35624_36262;
var G__36272 = (i__35625_36263 + (1));
seq__35622_36260 = G__36269;
chunk__35623_36261 = G__36270;
count__35624_36262 = G__36271;
i__35625_36263 = G__36272;
continue;
} else {
var temp__5804__auto___36273 = cljs.core.seq(seq__35622_36260);
if(temp__5804__auto___36273){
var seq__35622_36274__$1 = temp__5804__auto___36273;
if(cljs.core.chunked_seq_QMARK_(seq__35622_36274__$1)){
var c__5568__auto___36275 = cljs.core.chunk_first(seq__35622_36274__$1);
var G__36277 = cljs.core.chunk_rest(seq__35622_36274__$1);
var G__36278 = c__5568__auto___36275;
var G__36279 = cljs.core.count(c__5568__auto___36275);
var G__36280 = (0);
seq__35622_36260 = G__36277;
chunk__35623_36261 = G__36278;
count__35624_36262 = G__36279;
i__35625_36263 = G__36280;
continue;
} else {
var vec__35648_36281 = cljs.core.first(seq__35622_36274__$1);
var k_36282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35648_36281,(0),null);
var v_36283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35648_36281,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_36282);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36282),v_36283);


var G__36287 = cljs.core.next(seq__35622_36274__$1);
var G__36288 = null;
var G__36289 = (0);
var G__36290 = (0);
seq__35622_36260 = G__36287;
chunk__35623_36261 = G__36288;
count__35624_36262 = G__36289;
i__35625_36263 = G__36290;
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
var vec__35672 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35672,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35672,(1),null);
var seq__35676_36292 = cljs.core.seq(node_children);
var chunk__35678_36293 = null;
var count__35679_36294 = (0);
var i__35680_36295 = (0);
while(true){
if((i__35680_36295 < count__35679_36294)){
var child_struct_36296 = chunk__35678_36293.cljs$core$IIndexed$_nth$arity$2(null,i__35680_36295);
if((!((child_struct_36296 == null)))){
if(typeof child_struct_36296 === 'string'){
var text_36297 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36297),child_struct_36296].join(''));
} else {
var children_36299 = shadow.dom.svg_node(child_struct_36296);
if(cljs.core.seq_QMARK_(children_36299)){
var seq__35729_36301 = cljs.core.seq(children_36299);
var chunk__35731_36302 = null;
var count__35732_36303 = (0);
var i__35733_36304 = (0);
while(true){
if((i__35733_36304 < count__35732_36303)){
var child_36307 = chunk__35731_36302.cljs$core$IIndexed$_nth$arity$2(null,i__35733_36304);
if(cljs.core.truth_(child_36307)){
node.appendChild(child_36307);


var G__36309 = seq__35729_36301;
var G__36310 = chunk__35731_36302;
var G__36311 = count__35732_36303;
var G__36312 = (i__35733_36304 + (1));
seq__35729_36301 = G__36309;
chunk__35731_36302 = G__36310;
count__35732_36303 = G__36311;
i__35733_36304 = G__36312;
continue;
} else {
var G__36314 = seq__35729_36301;
var G__36315 = chunk__35731_36302;
var G__36316 = count__35732_36303;
var G__36317 = (i__35733_36304 + (1));
seq__35729_36301 = G__36314;
chunk__35731_36302 = G__36315;
count__35732_36303 = G__36316;
i__35733_36304 = G__36317;
continue;
}
} else {
var temp__5804__auto___36318 = cljs.core.seq(seq__35729_36301);
if(temp__5804__auto___36318){
var seq__35729_36319__$1 = temp__5804__auto___36318;
if(cljs.core.chunked_seq_QMARK_(seq__35729_36319__$1)){
var c__5568__auto___36320 = cljs.core.chunk_first(seq__35729_36319__$1);
var G__36321 = cljs.core.chunk_rest(seq__35729_36319__$1);
var G__36322 = c__5568__auto___36320;
var G__36323 = cljs.core.count(c__5568__auto___36320);
var G__36324 = (0);
seq__35729_36301 = G__36321;
chunk__35731_36302 = G__36322;
count__35732_36303 = G__36323;
i__35733_36304 = G__36324;
continue;
} else {
var child_36326 = cljs.core.first(seq__35729_36319__$1);
if(cljs.core.truth_(child_36326)){
node.appendChild(child_36326);


var G__36327 = cljs.core.next(seq__35729_36319__$1);
var G__36328 = null;
var G__36329 = (0);
var G__36330 = (0);
seq__35729_36301 = G__36327;
chunk__35731_36302 = G__36328;
count__35732_36303 = G__36329;
i__35733_36304 = G__36330;
continue;
} else {
var G__36331 = cljs.core.next(seq__35729_36319__$1);
var G__36332 = null;
var G__36333 = (0);
var G__36334 = (0);
seq__35729_36301 = G__36331;
chunk__35731_36302 = G__36332;
count__35732_36303 = G__36333;
i__35733_36304 = G__36334;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36299);
}
}


var G__36335 = seq__35676_36292;
var G__36336 = chunk__35678_36293;
var G__36337 = count__35679_36294;
var G__36338 = (i__35680_36295 + (1));
seq__35676_36292 = G__36335;
chunk__35678_36293 = G__36336;
count__35679_36294 = G__36337;
i__35680_36295 = G__36338;
continue;
} else {
var G__36339 = seq__35676_36292;
var G__36340 = chunk__35678_36293;
var G__36341 = count__35679_36294;
var G__36342 = (i__35680_36295 + (1));
seq__35676_36292 = G__36339;
chunk__35678_36293 = G__36340;
count__35679_36294 = G__36341;
i__35680_36295 = G__36342;
continue;
}
} else {
var temp__5804__auto___36343 = cljs.core.seq(seq__35676_36292);
if(temp__5804__auto___36343){
var seq__35676_36344__$1 = temp__5804__auto___36343;
if(cljs.core.chunked_seq_QMARK_(seq__35676_36344__$1)){
var c__5568__auto___36345 = cljs.core.chunk_first(seq__35676_36344__$1);
var G__36346 = cljs.core.chunk_rest(seq__35676_36344__$1);
var G__36347 = c__5568__auto___36345;
var G__36348 = cljs.core.count(c__5568__auto___36345);
var G__36349 = (0);
seq__35676_36292 = G__36346;
chunk__35678_36293 = G__36347;
count__35679_36294 = G__36348;
i__35680_36295 = G__36349;
continue;
} else {
var child_struct_36350 = cljs.core.first(seq__35676_36344__$1);
if((!((child_struct_36350 == null)))){
if(typeof child_struct_36350 === 'string'){
var text_36352 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36352),child_struct_36350].join(''));
} else {
var children_36353 = shadow.dom.svg_node(child_struct_36350);
if(cljs.core.seq_QMARK_(children_36353)){
var seq__35749_36356 = cljs.core.seq(children_36353);
var chunk__35751_36357 = null;
var count__35752_36358 = (0);
var i__35753_36359 = (0);
while(true){
if((i__35753_36359 < count__35752_36358)){
var child_36361 = chunk__35751_36357.cljs$core$IIndexed$_nth$arity$2(null,i__35753_36359);
if(cljs.core.truth_(child_36361)){
node.appendChild(child_36361);


var G__36362 = seq__35749_36356;
var G__36363 = chunk__35751_36357;
var G__36364 = count__35752_36358;
var G__36365 = (i__35753_36359 + (1));
seq__35749_36356 = G__36362;
chunk__35751_36357 = G__36363;
count__35752_36358 = G__36364;
i__35753_36359 = G__36365;
continue;
} else {
var G__36366 = seq__35749_36356;
var G__36367 = chunk__35751_36357;
var G__36368 = count__35752_36358;
var G__36369 = (i__35753_36359 + (1));
seq__35749_36356 = G__36366;
chunk__35751_36357 = G__36367;
count__35752_36358 = G__36368;
i__35753_36359 = G__36369;
continue;
}
} else {
var temp__5804__auto___36370__$1 = cljs.core.seq(seq__35749_36356);
if(temp__5804__auto___36370__$1){
var seq__35749_36371__$1 = temp__5804__auto___36370__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35749_36371__$1)){
var c__5568__auto___36372 = cljs.core.chunk_first(seq__35749_36371__$1);
var G__36373 = cljs.core.chunk_rest(seq__35749_36371__$1);
var G__36374 = c__5568__auto___36372;
var G__36375 = cljs.core.count(c__5568__auto___36372);
var G__36376 = (0);
seq__35749_36356 = G__36373;
chunk__35751_36357 = G__36374;
count__35752_36358 = G__36375;
i__35753_36359 = G__36376;
continue;
} else {
var child_36377 = cljs.core.first(seq__35749_36371__$1);
if(cljs.core.truth_(child_36377)){
node.appendChild(child_36377);


var G__36378 = cljs.core.next(seq__35749_36371__$1);
var G__36379 = null;
var G__36380 = (0);
var G__36381 = (0);
seq__35749_36356 = G__36378;
chunk__35751_36357 = G__36379;
count__35752_36358 = G__36380;
i__35753_36359 = G__36381;
continue;
} else {
var G__36382 = cljs.core.next(seq__35749_36371__$1);
var G__36383 = null;
var G__36384 = (0);
var G__36385 = (0);
seq__35749_36356 = G__36382;
chunk__35751_36357 = G__36383;
count__35752_36358 = G__36384;
i__35753_36359 = G__36385;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36353);
}
}


var G__36386 = cljs.core.next(seq__35676_36344__$1);
var G__36387 = null;
var G__36388 = (0);
var G__36389 = (0);
seq__35676_36292 = G__36386;
chunk__35678_36293 = G__36387;
count__35679_36294 = G__36388;
i__35680_36295 = G__36389;
continue;
} else {
var G__36390 = cljs.core.next(seq__35676_36344__$1);
var G__36391 = null;
var G__36392 = (0);
var G__36393 = (0);
seq__35676_36292 = G__36390;
chunk__35678_36293 = G__36391;
count__35679_36294 = G__36392;
i__35680_36295 = G__36393;
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
var len__5769__auto___36396 = arguments.length;
var i__5770__auto___36397 = (0);
while(true){
if((i__5770__auto___36397 < len__5769__auto___36396)){
args__5775__auto__.push((arguments[i__5770__auto___36397]));

var G__36398 = (i__5770__auto___36397 + (1));
i__5770__auto___36397 = G__36398;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35768){
var G__35769 = cljs.core.first(seq35768);
var seq35768__$1 = cljs.core.next(seq35768);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35769,seq35768__$1);
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
var G__35784 = arguments.length;
switch (G__35784) {
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
var c__30195__auto___36403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_35796){
var state_val_35797 = (state_35796[(1)]);
if((state_val_35797 === (1))){
var state_35796__$1 = state_35796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35796__$1,(2),once_or_cleanup);
} else {
if((state_val_35797 === (2))){
var inst_35793 = (state_35796[(2)]);
var inst_35794 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35796__$1 = (function (){var statearr_35802 = state_35796;
(statearr_35802[(7)] = inst_35793);

return statearr_35802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35796__$1,inst_35794);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29613__auto__ = null;
var shadow$dom$state_machine__29613__auto____0 = (function (){
var statearr_35803 = [null,null,null,null,null,null,null,null];
(statearr_35803[(0)] = shadow$dom$state_machine__29613__auto__);

(statearr_35803[(1)] = (1));

return statearr_35803;
});
var shadow$dom$state_machine__29613__auto____1 = (function (state_35796){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_35796);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e35806){var ex__29616__auto__ = e35806;
var statearr_35807_36411 = state_35796;
(statearr_35807_36411[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_35796[(4)]))){
var statearr_35808_36412 = state_35796;
(statearr_35808_36412[(1)] = cljs.core.first((state_35796[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36413 = state_35796;
state_35796 = G__36413;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
shadow$dom$state_machine__29613__auto__ = function(state_35796){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29613__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29613__auto____1.call(this,state_35796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29613__auto____0;
shadow$dom$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29613__auto____1;
return shadow$dom$state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_35809 = f__30196__auto__();
(statearr_35809[(6)] = c__30195__auto___36403);

return statearr_35809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
