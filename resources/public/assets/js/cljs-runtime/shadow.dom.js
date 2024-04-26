goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35670 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_35670(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35671 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_35671(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34381 = coll;
var G__34383 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34381,G__34383) : shadow.dom.lazy_native_coll_seq.call(null,G__34381,G__34383));
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
var G__34468 = arguments.length;
switch (G__34468) {
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
var G__34494 = arguments.length;
switch (G__34494) {
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
var G__34515 = arguments.length;
switch (G__34515) {
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
var G__34530 = arguments.length;
switch (G__34530) {
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
var G__34570 = arguments.length;
switch (G__34570) {
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
var G__34592 = arguments.length;
switch (G__34592) {
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
}catch (e34612){if((e34612 instanceof Object)){
var e = e34612;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34612;

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
var seq__34627 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34628 = null;
var count__34629 = (0);
var i__34630 = (0);
while(true){
if((i__34630 < count__34629)){
var el = chunk__34628.cljs$core$IIndexed$_nth$arity$2(null,i__34630);
var handler_35734__$1 = ((function (seq__34627,chunk__34628,count__34629,i__34630,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34627,chunk__34628,count__34629,i__34630,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35734__$1);


var G__35735 = seq__34627;
var G__35736 = chunk__34628;
var G__35737 = count__34629;
var G__35738 = (i__34630 + (1));
seq__34627 = G__35735;
chunk__34628 = G__35736;
count__34629 = G__35737;
i__34630 = G__35738;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34627);
if(temp__5804__auto__){
var seq__34627__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34627__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34627__$1);
var G__35742 = cljs.core.chunk_rest(seq__34627__$1);
var G__35743 = c__5568__auto__;
var G__35744 = cljs.core.count(c__5568__auto__);
var G__35745 = (0);
seq__34627 = G__35742;
chunk__34628 = G__35743;
count__34629 = G__35744;
i__34630 = G__35745;
continue;
} else {
var el = cljs.core.first(seq__34627__$1);
var handler_35746__$1 = ((function (seq__34627,chunk__34628,count__34629,i__34630,el,seq__34627__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34627,chunk__34628,count__34629,i__34630,el,seq__34627__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35746__$1);


var G__35747 = cljs.core.next(seq__34627__$1);
var G__35748 = null;
var G__35749 = (0);
var G__35750 = (0);
seq__34627 = G__35747;
chunk__34628 = G__35748;
count__34629 = G__35749;
i__34630 = G__35750;
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
var G__34650 = arguments.length;
switch (G__34650) {
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
var seq__34669 = cljs.core.seq(events);
var chunk__34670 = null;
var count__34671 = (0);
var i__34672 = (0);
while(true){
if((i__34672 < count__34671)){
var vec__34687 = chunk__34670.cljs$core$IIndexed$_nth$arity$2(null,i__34672);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34687,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34687,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35756 = seq__34669;
var G__35757 = chunk__34670;
var G__35758 = count__34671;
var G__35759 = (i__34672 + (1));
seq__34669 = G__35756;
chunk__34670 = G__35757;
count__34671 = G__35758;
i__34672 = G__35759;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34669);
if(temp__5804__auto__){
var seq__34669__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34669__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34669__$1);
var G__35761 = cljs.core.chunk_rest(seq__34669__$1);
var G__35762 = c__5568__auto__;
var G__35763 = cljs.core.count(c__5568__auto__);
var G__35764 = (0);
seq__34669 = G__35761;
chunk__34670 = G__35762;
count__34671 = G__35763;
i__34672 = G__35764;
continue;
} else {
var vec__34690 = cljs.core.first(seq__34669__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34690,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34690,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35766 = cljs.core.next(seq__34669__$1);
var G__35767 = null;
var G__35768 = (0);
var G__35769 = (0);
seq__34669 = G__35766;
chunk__34670 = G__35767;
count__34671 = G__35768;
i__34672 = G__35769;
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
var seq__34695 = cljs.core.seq(styles);
var chunk__34696 = null;
var count__34697 = (0);
var i__34698 = (0);
while(true){
if((i__34698 < count__34697)){
var vec__34714 = chunk__34696.cljs$core$IIndexed$_nth$arity$2(null,i__34698);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34714,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34714,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35770 = seq__34695;
var G__35771 = chunk__34696;
var G__35772 = count__34697;
var G__35773 = (i__34698 + (1));
seq__34695 = G__35770;
chunk__34696 = G__35771;
count__34697 = G__35772;
i__34698 = G__35773;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34695);
if(temp__5804__auto__){
var seq__34695__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34695__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34695__$1);
var G__35774 = cljs.core.chunk_rest(seq__34695__$1);
var G__35775 = c__5568__auto__;
var G__35776 = cljs.core.count(c__5568__auto__);
var G__35777 = (0);
seq__34695 = G__35774;
chunk__34696 = G__35775;
count__34697 = G__35776;
i__34698 = G__35777;
continue;
} else {
var vec__34722 = cljs.core.first(seq__34695__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34722,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35778 = cljs.core.next(seq__34695__$1);
var G__35779 = null;
var G__35780 = (0);
var G__35781 = (0);
seq__34695 = G__35778;
chunk__34696 = G__35779;
count__34697 = G__35780;
i__34698 = G__35781;
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
var G__34735_35782 = key;
var G__34735_35783__$1 = (((G__34735_35782 instanceof cljs.core.Keyword))?G__34735_35782.fqn:null);
switch (G__34735_35783__$1) {
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
var ks_35785 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_35785,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_35785,"aria-");
}
})())){
el.setAttribute(ks_35785,value);
} else {
(el[ks_35785] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34779){
var map__34781 = p__34779;
var map__34781__$1 = cljs.core.__destructure_map(map__34781);
var props = map__34781__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34781__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34782 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34782,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34782,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34782,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34786 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34786,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34786;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34792 = arguments.length;
switch (G__34792) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34798){
var vec__34799 = p__34798;
var seq__34800 = cljs.core.seq(vec__34799);
var first__34801 = cljs.core.first(seq__34800);
var seq__34800__$1 = cljs.core.next(seq__34800);
var nn = first__34801;
var first__34801__$1 = cljs.core.first(seq__34800__$1);
var seq__34800__$2 = cljs.core.next(seq__34800__$1);
var np = first__34801__$1;
var nc = seq__34800__$2;
var node = vec__34799;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34806 = nn;
var G__34807 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34806,G__34807) : create_fn.call(null,G__34806,G__34807));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34810 = nn;
var G__34811 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34810,G__34811) : create_fn.call(null,G__34810,G__34811));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34814 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34814,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34814,(1),null);
var seq__34819_35809 = cljs.core.seq(node_children);
var chunk__34820_35810 = null;
var count__34821_35811 = (0);
var i__34822_35812 = (0);
while(true){
if((i__34822_35812 < count__34821_35811)){
var child_struct_35813 = chunk__34820_35810.cljs$core$IIndexed$_nth$arity$2(null,i__34822_35812);
var children_35814 = shadow.dom.dom_node(child_struct_35813);
if(cljs.core.seq_QMARK_(children_35814)){
var seq__34870_35815 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35814));
var chunk__34872_35816 = null;
var count__34873_35817 = (0);
var i__34874_35818 = (0);
while(true){
if((i__34874_35818 < count__34873_35817)){
var child_35819 = chunk__34872_35816.cljs$core$IIndexed$_nth$arity$2(null,i__34874_35818);
if(cljs.core.truth_(child_35819)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35819);


var G__35823 = seq__34870_35815;
var G__35824 = chunk__34872_35816;
var G__35825 = count__34873_35817;
var G__35826 = (i__34874_35818 + (1));
seq__34870_35815 = G__35823;
chunk__34872_35816 = G__35824;
count__34873_35817 = G__35825;
i__34874_35818 = G__35826;
continue;
} else {
var G__35827 = seq__34870_35815;
var G__35828 = chunk__34872_35816;
var G__35829 = count__34873_35817;
var G__35830 = (i__34874_35818 + (1));
seq__34870_35815 = G__35827;
chunk__34872_35816 = G__35828;
count__34873_35817 = G__35829;
i__34874_35818 = G__35830;
continue;
}
} else {
var temp__5804__auto___35831 = cljs.core.seq(seq__34870_35815);
if(temp__5804__auto___35831){
var seq__34870_35832__$1 = temp__5804__auto___35831;
if(cljs.core.chunked_seq_QMARK_(seq__34870_35832__$1)){
var c__5568__auto___35833 = cljs.core.chunk_first(seq__34870_35832__$1);
var G__35834 = cljs.core.chunk_rest(seq__34870_35832__$1);
var G__35835 = c__5568__auto___35833;
var G__35836 = cljs.core.count(c__5568__auto___35833);
var G__35837 = (0);
seq__34870_35815 = G__35834;
chunk__34872_35816 = G__35835;
count__34873_35817 = G__35836;
i__34874_35818 = G__35837;
continue;
} else {
var child_35838 = cljs.core.first(seq__34870_35832__$1);
if(cljs.core.truth_(child_35838)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35838);


var G__35839 = cljs.core.next(seq__34870_35832__$1);
var G__35840 = null;
var G__35841 = (0);
var G__35842 = (0);
seq__34870_35815 = G__35839;
chunk__34872_35816 = G__35840;
count__34873_35817 = G__35841;
i__34874_35818 = G__35842;
continue;
} else {
var G__35843 = cljs.core.next(seq__34870_35832__$1);
var G__35844 = null;
var G__35845 = (0);
var G__35846 = (0);
seq__34870_35815 = G__35843;
chunk__34872_35816 = G__35844;
count__34873_35817 = G__35845;
i__34874_35818 = G__35846;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35814);
}


var G__35847 = seq__34819_35809;
var G__35848 = chunk__34820_35810;
var G__35849 = count__34821_35811;
var G__35850 = (i__34822_35812 + (1));
seq__34819_35809 = G__35847;
chunk__34820_35810 = G__35848;
count__34821_35811 = G__35849;
i__34822_35812 = G__35850;
continue;
} else {
var temp__5804__auto___35852 = cljs.core.seq(seq__34819_35809);
if(temp__5804__auto___35852){
var seq__34819_35853__$1 = temp__5804__auto___35852;
if(cljs.core.chunked_seq_QMARK_(seq__34819_35853__$1)){
var c__5568__auto___35854 = cljs.core.chunk_first(seq__34819_35853__$1);
var G__35855 = cljs.core.chunk_rest(seq__34819_35853__$1);
var G__35856 = c__5568__auto___35854;
var G__35857 = cljs.core.count(c__5568__auto___35854);
var G__35858 = (0);
seq__34819_35809 = G__35855;
chunk__34820_35810 = G__35856;
count__34821_35811 = G__35857;
i__34822_35812 = G__35858;
continue;
} else {
var child_struct_35859 = cljs.core.first(seq__34819_35853__$1);
var children_35860 = shadow.dom.dom_node(child_struct_35859);
if(cljs.core.seq_QMARK_(children_35860)){
var seq__34882_35861 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35860));
var chunk__34884_35862 = null;
var count__34885_35863 = (0);
var i__34886_35864 = (0);
while(true){
if((i__34886_35864 < count__34885_35863)){
var child_35865 = chunk__34884_35862.cljs$core$IIndexed$_nth$arity$2(null,i__34886_35864);
if(cljs.core.truth_(child_35865)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35865);


var G__35868 = seq__34882_35861;
var G__35869 = chunk__34884_35862;
var G__35870 = count__34885_35863;
var G__35871 = (i__34886_35864 + (1));
seq__34882_35861 = G__35868;
chunk__34884_35862 = G__35869;
count__34885_35863 = G__35870;
i__34886_35864 = G__35871;
continue;
} else {
var G__35877 = seq__34882_35861;
var G__35878 = chunk__34884_35862;
var G__35879 = count__34885_35863;
var G__35880 = (i__34886_35864 + (1));
seq__34882_35861 = G__35877;
chunk__34884_35862 = G__35878;
count__34885_35863 = G__35879;
i__34886_35864 = G__35880;
continue;
}
} else {
var temp__5804__auto___35881__$1 = cljs.core.seq(seq__34882_35861);
if(temp__5804__auto___35881__$1){
var seq__34882_35882__$1 = temp__5804__auto___35881__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34882_35882__$1)){
var c__5568__auto___35884 = cljs.core.chunk_first(seq__34882_35882__$1);
var G__35885 = cljs.core.chunk_rest(seq__34882_35882__$1);
var G__35886 = c__5568__auto___35884;
var G__35887 = cljs.core.count(c__5568__auto___35884);
var G__35888 = (0);
seq__34882_35861 = G__35885;
chunk__34884_35862 = G__35886;
count__34885_35863 = G__35887;
i__34886_35864 = G__35888;
continue;
} else {
var child_35889 = cljs.core.first(seq__34882_35882__$1);
if(cljs.core.truth_(child_35889)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35889);


var G__35891 = cljs.core.next(seq__34882_35882__$1);
var G__35892 = null;
var G__35893 = (0);
var G__35894 = (0);
seq__34882_35861 = G__35891;
chunk__34884_35862 = G__35892;
count__34885_35863 = G__35893;
i__34886_35864 = G__35894;
continue;
} else {
var G__35895 = cljs.core.next(seq__34882_35882__$1);
var G__35896 = null;
var G__35897 = (0);
var G__35898 = (0);
seq__34882_35861 = G__35895;
chunk__34884_35862 = G__35896;
count__34885_35863 = G__35897;
i__34886_35864 = G__35898;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35860);
}


var G__35900 = cljs.core.next(seq__34819_35853__$1);
var G__35901 = null;
var G__35902 = (0);
var G__35903 = (0);
seq__34819_35809 = G__35900;
chunk__34820_35810 = G__35901;
count__34821_35811 = G__35902;
i__34822_35812 = G__35903;
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
var seq__34923 = cljs.core.seq(node);
var chunk__34924 = null;
var count__34925 = (0);
var i__34926 = (0);
while(true){
if((i__34926 < count__34925)){
var n = chunk__34924.cljs$core$IIndexed$_nth$arity$2(null,i__34926);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35907 = seq__34923;
var G__35908 = chunk__34924;
var G__35909 = count__34925;
var G__35910 = (i__34926 + (1));
seq__34923 = G__35907;
chunk__34924 = G__35908;
count__34925 = G__35909;
i__34926 = G__35910;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34923);
if(temp__5804__auto__){
var seq__34923__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34923__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34923__$1);
var G__35911 = cljs.core.chunk_rest(seq__34923__$1);
var G__35912 = c__5568__auto__;
var G__35913 = cljs.core.count(c__5568__auto__);
var G__35914 = (0);
seq__34923 = G__35911;
chunk__34924 = G__35912;
count__34925 = G__35913;
i__34926 = G__35914;
continue;
} else {
var n = cljs.core.first(seq__34923__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35916 = cljs.core.next(seq__34923__$1);
var G__35917 = null;
var G__35918 = (0);
var G__35919 = (0);
seq__34923 = G__35916;
chunk__34924 = G__35917;
count__34925 = G__35918;
i__34926 = G__35919;
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
var G__34942 = arguments.length;
switch (G__34942) {
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
var G__34961 = arguments.length;
switch (G__34961) {
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
var G__34990 = arguments.length;
switch (G__34990) {
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
var len__5769__auto___35931 = arguments.length;
var i__5770__auto___35932 = (0);
while(true){
if((i__5770__auto___35932 < len__5769__auto___35931)){
args__5775__auto__.push((arguments[i__5770__auto___35932]));

var G__35933 = (i__5770__auto___35932 + (1));
i__5770__auto___35932 = G__35933;
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
var seq__35048_35934 = cljs.core.seq(nodes);
var chunk__35049_35935 = null;
var count__35050_35936 = (0);
var i__35051_35937 = (0);
while(true){
if((i__35051_35937 < count__35050_35936)){
var node_35938 = chunk__35049_35935.cljs$core$IIndexed$_nth$arity$2(null,i__35051_35937);
fragment.appendChild(shadow.dom._to_dom(node_35938));


var G__35939 = seq__35048_35934;
var G__35940 = chunk__35049_35935;
var G__35941 = count__35050_35936;
var G__35942 = (i__35051_35937 + (1));
seq__35048_35934 = G__35939;
chunk__35049_35935 = G__35940;
count__35050_35936 = G__35941;
i__35051_35937 = G__35942;
continue;
} else {
var temp__5804__auto___35943 = cljs.core.seq(seq__35048_35934);
if(temp__5804__auto___35943){
var seq__35048_35944__$1 = temp__5804__auto___35943;
if(cljs.core.chunked_seq_QMARK_(seq__35048_35944__$1)){
var c__5568__auto___35945 = cljs.core.chunk_first(seq__35048_35944__$1);
var G__35946 = cljs.core.chunk_rest(seq__35048_35944__$1);
var G__35947 = c__5568__auto___35945;
var G__35948 = cljs.core.count(c__5568__auto___35945);
var G__35949 = (0);
seq__35048_35934 = G__35946;
chunk__35049_35935 = G__35947;
count__35050_35936 = G__35948;
i__35051_35937 = G__35949;
continue;
} else {
var node_35950 = cljs.core.first(seq__35048_35944__$1);
fragment.appendChild(shadow.dom._to_dom(node_35950));


var G__35951 = cljs.core.next(seq__35048_35944__$1);
var G__35952 = null;
var G__35953 = (0);
var G__35954 = (0);
seq__35048_35934 = G__35951;
chunk__35049_35935 = G__35952;
count__35050_35936 = G__35953;
i__35051_35937 = G__35954;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35026){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35026));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35088_35957 = cljs.core.seq(scripts);
var chunk__35089_35959 = null;
var count__35090_35960 = (0);
var i__35091_35961 = (0);
while(true){
if((i__35091_35961 < count__35090_35960)){
var vec__35119_35962 = chunk__35089_35959.cljs$core$IIndexed$_nth$arity$2(null,i__35091_35961);
var script_tag_35963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119_35962,(0),null);
var script_body_35964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119_35962,(1),null);
eval(script_body_35964);


var G__35965 = seq__35088_35957;
var G__35966 = chunk__35089_35959;
var G__35967 = count__35090_35960;
var G__35968 = (i__35091_35961 + (1));
seq__35088_35957 = G__35965;
chunk__35089_35959 = G__35966;
count__35090_35960 = G__35967;
i__35091_35961 = G__35968;
continue;
} else {
var temp__5804__auto___35973 = cljs.core.seq(seq__35088_35957);
if(temp__5804__auto___35973){
var seq__35088_35974__$1 = temp__5804__auto___35973;
if(cljs.core.chunked_seq_QMARK_(seq__35088_35974__$1)){
var c__5568__auto___35975 = cljs.core.chunk_first(seq__35088_35974__$1);
var G__35976 = cljs.core.chunk_rest(seq__35088_35974__$1);
var G__35977 = c__5568__auto___35975;
var G__35978 = cljs.core.count(c__5568__auto___35975);
var G__35979 = (0);
seq__35088_35957 = G__35976;
chunk__35089_35959 = G__35977;
count__35090_35960 = G__35978;
i__35091_35961 = G__35979;
continue;
} else {
var vec__35142_35980 = cljs.core.first(seq__35088_35974__$1);
var script_tag_35981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35980,(0),null);
var script_body_35982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35142_35980,(1),null);
eval(script_body_35982);


var G__35983 = cljs.core.next(seq__35088_35974__$1);
var G__35984 = null;
var G__35985 = (0);
var G__35986 = (0);
seq__35088_35957 = G__35983;
chunk__35089_35959 = G__35984;
count__35090_35960 = G__35985;
i__35091_35961 = G__35986;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35154){
var vec__35156 = p__35154;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156,(1),null);
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
var G__35180 = arguments.length;
switch (G__35180) {
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
var seq__35205 = cljs.core.seq(style_keys);
var chunk__35206 = null;
var count__35207 = (0);
var i__35208 = (0);
while(true){
if((i__35208 < count__35207)){
var it = chunk__35206.cljs$core$IIndexed$_nth$arity$2(null,i__35208);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36005 = seq__35205;
var G__36006 = chunk__35206;
var G__36007 = count__35207;
var G__36008 = (i__35208 + (1));
seq__35205 = G__36005;
chunk__35206 = G__36006;
count__35207 = G__36007;
i__35208 = G__36008;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35205);
if(temp__5804__auto__){
var seq__35205__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35205__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35205__$1);
var G__36009 = cljs.core.chunk_rest(seq__35205__$1);
var G__36010 = c__5568__auto__;
var G__36011 = cljs.core.count(c__5568__auto__);
var G__36012 = (0);
seq__35205 = G__36009;
chunk__35206 = G__36010;
count__35207 = G__36011;
i__35208 = G__36012;
continue;
} else {
var it = cljs.core.first(seq__35205__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36015 = cljs.core.next(seq__35205__$1);
var G__36016 = null;
var G__36017 = (0);
var G__36018 = (0);
seq__35205 = G__36015;
chunk__35206 = G__36016;
count__35207 = G__36017;
i__35208 = G__36018;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35239,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35269 = k35239;
var G__35269__$1 = (((G__35269 instanceof cljs.core.Keyword))?G__35269.fqn:null);
switch (G__35269__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35239,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35281){
var vec__35282 = p__35281;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35282,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35282,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35238){
var self__ = this;
var G__35238__$1 = this;
return (new cljs.core.RecordIter((0),G__35238__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35240,other35241){
var self__ = this;
var this35240__$1 = this;
return (((!((other35241 == null)))) && ((((this35240__$1.constructor === other35241.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35240__$1.x,other35241.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35240__$1.y,other35241.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35240__$1.__extmap,other35241.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35239){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35369 = k35239;
var G__35369__$1 = (((G__35369 instanceof cljs.core.Keyword))?G__35369.fqn:null);
switch (G__35369__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35239);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35238){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35385 = cljs.core.keyword_identical_QMARK_;
var expr__35386 = k__5352__auto__;
if(cljs.core.truth_((pred__35385.cljs$core$IFn$_invoke$arity$2 ? pred__35385.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35386) : pred__35385.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35386)))){
return (new shadow.dom.Coordinate(G__35238,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35385.cljs$core$IFn$_invoke$arity$2 ? pred__35385.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35386) : pred__35385.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35386)))){
return (new shadow.dom.Coordinate(self__.x,G__35238,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35238),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35238){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35238,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35248){
var extmap__5385__auto__ = (function (){var G__35415 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35248,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35248)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35415);
} else {
return G__35415;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35248),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35248),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k35426,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35444 = k35426;
var G__35444__$1 = (((G__35444 instanceof cljs.core.Keyword))?G__35444.fqn:null);
switch (G__35444__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35426,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35451){
var vec__35453 = p__35451;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35453,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35453,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35425){
var self__ = this;
var G__35425__$1 = this;
return (new cljs.core.RecordIter((0),G__35425__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35427,other35428){
var self__ = this;
var this35427__$1 = this;
return (((!((other35428 == null)))) && ((((this35427__$1.constructor === other35428.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35427__$1.w,other35428.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35427__$1.h,other35428.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35427__$1.__extmap,other35428.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k35426){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35471 = k35426;
var G__35471__$1 = (((G__35471 instanceof cljs.core.Keyword))?G__35471.fqn:null);
switch (G__35471__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35426);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__35425){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35474 = cljs.core.keyword_identical_QMARK_;
var expr__35475 = k__5352__auto__;
if(cljs.core.truth_((pred__35474.cljs$core$IFn$_invoke$arity$2 ? pred__35474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35475) : pred__35474.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35475)))){
return (new shadow.dom.Size(G__35425,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35474.cljs$core$IFn$_invoke$arity$2 ? pred__35474.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35475) : pred__35474.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35475)))){
return (new shadow.dom.Size(self__.w,G__35425,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__35425),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__35425){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35425,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35429){
var extmap__5385__auto__ = (function (){var G__35482 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35429,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35429)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35482);
} else {
return G__35482;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35429),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35429),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__36058 = (i + (1));
var G__36059 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36058;
ret = G__36059;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35494){
var vec__35495 = p__35494;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35495,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35495,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35501 = arguments.length;
switch (G__35501) {
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
var G__36064 = ps;
var G__36065 = (i + (1));
el__$1 = G__36064;
i = G__36065;
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
var vec__35531 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35531,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35531,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35531,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35536_36068 = cljs.core.seq(props);
var chunk__35537_36069 = null;
var count__35538_36070 = (0);
var i__35539_36071 = (0);
while(true){
if((i__35539_36071 < count__35538_36070)){
var vec__35555_36072 = chunk__35537_36069.cljs$core$IIndexed$_nth$arity$2(null,i__35539_36071);
var k_36073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35555_36072,(0),null);
var v_36074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35555_36072,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_36073);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36073),v_36074);


var G__36080 = seq__35536_36068;
var G__36081 = chunk__35537_36069;
var G__36082 = count__35538_36070;
var G__36083 = (i__35539_36071 + (1));
seq__35536_36068 = G__36080;
chunk__35537_36069 = G__36081;
count__35538_36070 = G__36082;
i__35539_36071 = G__36083;
continue;
} else {
var temp__5804__auto___36084 = cljs.core.seq(seq__35536_36068);
if(temp__5804__auto___36084){
var seq__35536_36085__$1 = temp__5804__auto___36084;
if(cljs.core.chunked_seq_QMARK_(seq__35536_36085__$1)){
var c__5568__auto___36086 = cljs.core.chunk_first(seq__35536_36085__$1);
var G__36087 = cljs.core.chunk_rest(seq__35536_36085__$1);
var G__36088 = c__5568__auto___36086;
var G__36089 = cljs.core.count(c__5568__auto___36086);
var G__36090 = (0);
seq__35536_36068 = G__36087;
chunk__35537_36069 = G__36088;
count__35538_36070 = G__36089;
i__35539_36071 = G__36090;
continue;
} else {
var vec__35558_36091 = cljs.core.first(seq__35536_36085__$1);
var k_36092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35558_36091,(0),null);
var v_36093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35558_36091,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_36092);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36092),v_36093);


var G__36094 = cljs.core.next(seq__35536_36085__$1);
var G__36095 = null;
var G__36096 = (0);
var G__36097 = (0);
seq__35536_36068 = G__36094;
chunk__35537_36069 = G__36095;
count__35538_36070 = G__36096;
i__35539_36071 = G__36097;
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
var vec__35565 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35565,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35565,(1),null);
var seq__35569_36098 = cljs.core.seq(node_children);
var chunk__35571_36099 = null;
var count__35572_36100 = (0);
var i__35573_36101 = (0);
while(true){
if((i__35573_36101 < count__35572_36100)){
var child_struct_36102 = chunk__35571_36099.cljs$core$IIndexed$_nth$arity$2(null,i__35573_36101);
if((!((child_struct_36102 == null)))){
if(typeof child_struct_36102 === 'string'){
var text_36104 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36104),child_struct_36102].join(''));
} else {
var children_36108 = shadow.dom.svg_node(child_struct_36102);
if(cljs.core.seq_QMARK_(children_36108)){
var seq__35597_36109 = cljs.core.seq(children_36108);
var chunk__35599_36110 = null;
var count__35600_36111 = (0);
var i__35601_36112 = (0);
while(true){
if((i__35601_36112 < count__35600_36111)){
var child_36113 = chunk__35599_36110.cljs$core$IIndexed$_nth$arity$2(null,i__35601_36112);
if(cljs.core.truth_(child_36113)){
node.appendChild(child_36113);


var G__36114 = seq__35597_36109;
var G__36115 = chunk__35599_36110;
var G__36116 = count__35600_36111;
var G__36117 = (i__35601_36112 + (1));
seq__35597_36109 = G__36114;
chunk__35599_36110 = G__36115;
count__35600_36111 = G__36116;
i__35601_36112 = G__36117;
continue;
} else {
var G__36118 = seq__35597_36109;
var G__36119 = chunk__35599_36110;
var G__36120 = count__35600_36111;
var G__36121 = (i__35601_36112 + (1));
seq__35597_36109 = G__36118;
chunk__35599_36110 = G__36119;
count__35600_36111 = G__36120;
i__35601_36112 = G__36121;
continue;
}
} else {
var temp__5804__auto___36122 = cljs.core.seq(seq__35597_36109);
if(temp__5804__auto___36122){
var seq__35597_36123__$1 = temp__5804__auto___36122;
if(cljs.core.chunked_seq_QMARK_(seq__35597_36123__$1)){
var c__5568__auto___36124 = cljs.core.chunk_first(seq__35597_36123__$1);
var G__36125 = cljs.core.chunk_rest(seq__35597_36123__$1);
var G__36126 = c__5568__auto___36124;
var G__36127 = cljs.core.count(c__5568__auto___36124);
var G__36128 = (0);
seq__35597_36109 = G__36125;
chunk__35599_36110 = G__36126;
count__35600_36111 = G__36127;
i__35601_36112 = G__36128;
continue;
} else {
var child_36129 = cljs.core.first(seq__35597_36123__$1);
if(cljs.core.truth_(child_36129)){
node.appendChild(child_36129);


var G__36130 = cljs.core.next(seq__35597_36123__$1);
var G__36131 = null;
var G__36132 = (0);
var G__36133 = (0);
seq__35597_36109 = G__36130;
chunk__35599_36110 = G__36131;
count__35600_36111 = G__36132;
i__35601_36112 = G__36133;
continue;
} else {
var G__36134 = cljs.core.next(seq__35597_36123__$1);
var G__36135 = null;
var G__36136 = (0);
var G__36137 = (0);
seq__35597_36109 = G__36134;
chunk__35599_36110 = G__36135;
count__35600_36111 = G__36136;
i__35601_36112 = G__36137;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36108);
}
}


var G__36138 = seq__35569_36098;
var G__36139 = chunk__35571_36099;
var G__36140 = count__35572_36100;
var G__36141 = (i__35573_36101 + (1));
seq__35569_36098 = G__36138;
chunk__35571_36099 = G__36139;
count__35572_36100 = G__36140;
i__35573_36101 = G__36141;
continue;
} else {
var G__36142 = seq__35569_36098;
var G__36143 = chunk__35571_36099;
var G__36144 = count__35572_36100;
var G__36145 = (i__35573_36101 + (1));
seq__35569_36098 = G__36142;
chunk__35571_36099 = G__36143;
count__35572_36100 = G__36144;
i__35573_36101 = G__36145;
continue;
}
} else {
var temp__5804__auto___36147 = cljs.core.seq(seq__35569_36098);
if(temp__5804__auto___36147){
var seq__35569_36148__$1 = temp__5804__auto___36147;
if(cljs.core.chunked_seq_QMARK_(seq__35569_36148__$1)){
var c__5568__auto___36149 = cljs.core.chunk_first(seq__35569_36148__$1);
var G__36150 = cljs.core.chunk_rest(seq__35569_36148__$1);
var G__36151 = c__5568__auto___36149;
var G__36152 = cljs.core.count(c__5568__auto___36149);
var G__36153 = (0);
seq__35569_36098 = G__36150;
chunk__35571_36099 = G__36151;
count__35572_36100 = G__36152;
i__35573_36101 = G__36153;
continue;
} else {
var child_struct_36154 = cljs.core.first(seq__35569_36148__$1);
if((!((child_struct_36154 == null)))){
if(typeof child_struct_36154 === 'string'){
var text_36155 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36155),child_struct_36154].join(''));
} else {
var children_36156 = shadow.dom.svg_node(child_struct_36154);
if(cljs.core.seq_QMARK_(children_36156)){
var seq__35607_36158 = cljs.core.seq(children_36156);
var chunk__35609_36159 = null;
var count__35610_36160 = (0);
var i__35611_36161 = (0);
while(true){
if((i__35611_36161 < count__35610_36160)){
var child_36162 = chunk__35609_36159.cljs$core$IIndexed$_nth$arity$2(null,i__35611_36161);
if(cljs.core.truth_(child_36162)){
node.appendChild(child_36162);


var G__36163 = seq__35607_36158;
var G__36164 = chunk__35609_36159;
var G__36165 = count__35610_36160;
var G__36166 = (i__35611_36161 + (1));
seq__35607_36158 = G__36163;
chunk__35609_36159 = G__36164;
count__35610_36160 = G__36165;
i__35611_36161 = G__36166;
continue;
} else {
var G__36167 = seq__35607_36158;
var G__36168 = chunk__35609_36159;
var G__36169 = count__35610_36160;
var G__36170 = (i__35611_36161 + (1));
seq__35607_36158 = G__36167;
chunk__35609_36159 = G__36168;
count__35610_36160 = G__36169;
i__35611_36161 = G__36170;
continue;
}
} else {
var temp__5804__auto___36171__$1 = cljs.core.seq(seq__35607_36158);
if(temp__5804__auto___36171__$1){
var seq__35607_36172__$1 = temp__5804__auto___36171__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35607_36172__$1)){
var c__5568__auto___36173 = cljs.core.chunk_first(seq__35607_36172__$1);
var G__36174 = cljs.core.chunk_rest(seq__35607_36172__$1);
var G__36175 = c__5568__auto___36173;
var G__36176 = cljs.core.count(c__5568__auto___36173);
var G__36177 = (0);
seq__35607_36158 = G__36174;
chunk__35609_36159 = G__36175;
count__35610_36160 = G__36176;
i__35611_36161 = G__36177;
continue;
} else {
var child_36178 = cljs.core.first(seq__35607_36172__$1);
if(cljs.core.truth_(child_36178)){
node.appendChild(child_36178);


var G__36179 = cljs.core.next(seq__35607_36172__$1);
var G__36180 = null;
var G__36181 = (0);
var G__36182 = (0);
seq__35607_36158 = G__36179;
chunk__35609_36159 = G__36180;
count__35610_36160 = G__36181;
i__35611_36161 = G__36182;
continue;
} else {
var G__36183 = cljs.core.next(seq__35607_36172__$1);
var G__36184 = null;
var G__36185 = (0);
var G__36186 = (0);
seq__35607_36158 = G__36183;
chunk__35609_36159 = G__36184;
count__35610_36160 = G__36185;
i__35611_36161 = G__36186;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36156);
}
}


var G__36187 = cljs.core.next(seq__35569_36148__$1);
var G__36188 = null;
var G__36189 = (0);
var G__36190 = (0);
seq__35569_36098 = G__36187;
chunk__35571_36099 = G__36188;
count__35572_36100 = G__36189;
i__35573_36101 = G__36190;
continue;
} else {
var G__36191 = cljs.core.next(seq__35569_36148__$1);
var G__36192 = null;
var G__36193 = (0);
var G__36194 = (0);
seq__35569_36098 = G__36191;
chunk__35571_36099 = G__36192;
count__35572_36100 = G__36193;
i__35573_36101 = G__36194;
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
var len__5769__auto___36196 = arguments.length;
var i__5770__auto___36197 = (0);
while(true){
if((i__5770__auto___36197 < len__5769__auto___36196)){
args__5775__auto__.push((arguments[i__5770__auto___36197]));

var G__36198 = (i__5770__auto___36197 + (1));
i__5770__auto___36197 = G__36198;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35623){
var G__35624 = cljs.core.first(seq35623);
var seq35623__$1 = cljs.core.next(seq35623);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35624,seq35623__$1);
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
var G__35635 = arguments.length;
switch (G__35635) {
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
var c__30155__auto___36205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_35646){
var state_val_35647 = (state_35646[(1)]);
if((state_val_35647 === (1))){
var state_35646__$1 = state_35646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35646__$1,(2),once_or_cleanup);
} else {
if((state_val_35647 === (2))){
var inst_35643 = (state_35646[(2)]);
var inst_35644 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35646__$1 = (function (){var statearr_35652 = state_35646;
(statearr_35652[(7)] = inst_35643);

return statearr_35652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35646__$1,inst_35644);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29582__auto__ = null;
var shadow$dom$state_machine__29582__auto____0 = (function (){
var statearr_35653 = [null,null,null,null,null,null,null,null];
(statearr_35653[(0)] = shadow$dom$state_machine__29582__auto__);

(statearr_35653[(1)] = (1));

return statearr_35653;
});
var shadow$dom$state_machine__29582__auto____1 = (function (state_35646){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_35646);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e35656){var ex__29585__auto__ = e35656;
var statearr_35657_36206 = state_35646;
(statearr_35657_36206[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_35646[(4)]))){
var statearr_35658_36207 = state_35646;
(statearr_35658_36207[(1)] = cljs.core.first((state_35646[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36210 = state_35646;
state_35646 = G__36210;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
shadow$dom$state_machine__29582__auto__ = function(state_35646){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29582__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29582__auto____1.call(this,state_35646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29582__auto____0;
shadow$dom$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29582__auto____1;
return shadow$dom$state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_35664 = f__30156__auto__();
(statearr_35664[(6)] = c__30155__auto___36205);

return statearr_35664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
