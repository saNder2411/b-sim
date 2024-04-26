goog.provide('refx.subs');
refx.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);

/**
 * Protocol for signal types.
 * 
 * Very similar to IDeref + IWatchable (e.g. atoms), with the difference that
 * listeners will not receive old or new values.
 * @interface
 */
refx.subs.ISignal = function(){};

var refx$subs$ISignal$_value$dyn_27592 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.subs._value[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (refx.subs._value["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ISignal.-value",this$);
}
}
});
/**
 * Returns the current value of the signal.
 */
refx.subs._value = (function refx$subs$_value(this$){
if((((!((this$ == null)))) && ((!((this$.refx$subs$ISignal$_value$arity$1 == null)))))){
return this$.refx$subs$ISignal$_value$arity$1(this$);
} else {
return refx$subs$ISignal$_value$dyn_27592(this$);
}
});

var refx$subs$ISignal$_add_listener$dyn_27595 = (function (this$,k,f){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.subs._add_listener[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,f) : m__5394__auto__.call(null,this$,k,f));
} else {
var m__5392__auto__ = (refx.subs._add_listener["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,f) : m__5392__auto__.call(null,this$,k,f));
} else {
throw cljs.core.missing_protocol("ISignal.-add-listener",this$);
}
}
});
/**
 * Register a listener that will be called without arguments.
 */
refx.subs._add_listener = (function refx$subs$_add_listener(this$,k,f){
if((((!((this$ == null)))) && ((!((this$.refx$subs$ISignal$_add_listener$arity$3 == null)))))){
return this$.refx$subs$ISignal$_add_listener$arity$3(this$,k,f);
} else {
return refx$subs$ISignal$_add_listener$dyn_27595(this$,k,f);
}
});

var refx$subs$ISignal$_remove_listener$dyn_27599 = (function (this$,k){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.subs._remove_listener[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,k) : m__5394__auto__.call(null,this$,k));
} else {
var m__5392__auto__ = (refx.subs._remove_listener["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,k) : m__5392__auto__.call(null,this$,k));
} else {
throw cljs.core.missing_protocol("ISignal.-remove-listener",this$);
}
}
});
/**
 * Removes a listener previous registered with `-add-listener`.
 */
refx.subs._remove_listener = (function refx$subs$_remove_listener(this$,k){
if((((!((this$ == null)))) && ((!((this$.refx$subs$ISignal$_remove_listener$arity$2 == null)))))){
return this$.refx$subs$ISignal$_remove_listener$arity$2(this$,k);
} else {
return refx$subs$ISignal$_remove_listener$dyn_27599(this$,k);
}
});

refx.subs.signal_QMARK_ = (function refx$subs$signal_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.refx$subs$ISignal$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(refx.subs.ISignal,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(refx.subs.ISignal,x);
}
});
(refx.subs.ISignal["null"] = true);

(refx.subs._value["null"] = (function (_){
return null;
}));

(refx.subs._add_listener["null"] = (function (_,___$1,___$2){
return null;
}));

(refx.subs._remove_listener["null"] = (function (_,___$1){
return null;
}));

(cljs.core.Atom.prototype.refx$subs$ISignal$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.refx$subs$ISignal$_value$arity$1 = (function (a){
var a__$1 = this;
return cljs.core.deref(a__$1);
}));

(cljs.core.Atom.prototype.refx$subs$ISignal$_add_listener$arity$3 = (function (a,k,f){
var a__$1 = this;
return cljs.core.add_watch(a__$1,k,f);
}));

(cljs.core.Atom.prototype.refx$subs$ISignal$_remove_listener$arity$2 = (function (a,k){
var a__$1 = this;
return cljs.core.remove_watch(a__$1,k);
}));
if((typeof refx !== 'undefined') && (typeof refx.subs !== 'undefined') && (typeof refx.subs.sub_cache !== 'undefined')){
} else {
refx.subs.sub_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
refx.subs.cache_lookup = (function refx$subs$cache_lookup(query_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(refx.subs.sub_cache),query_v);
});
refx.subs.cache_add_BANG_ = (function refx$subs$cache_add_BANG_(query_v,sub){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(refx.subs.sub_cache,cljs.core.assoc,query_v,sub);
});
refx.subs.cache_remove_BANG_ = (function refx$subs$cache_remove_BANG_(query_v,sub){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refx.subs.sub_cache,(function (cache){
if((sub === cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,query_v))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache,query_v);
} else {
return cache;
}
}));
});

/**
 * @interface
 */
refx.subs.ISub = function(){};

var refx$subs$ISub$_query_v$dyn_27612 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.subs._query_v[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (refx.subs._query_v["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ISub.-query-v",this$);
}
}
});
refx.subs._query_v = (function refx$subs$_query_v(this$){
if((((!((this$ == null)))) && ((!((this$.refx$subs$ISub$_query_v$arity$1 == null)))))){
return this$.refx$subs$ISub$_query_v$arity$1(this$);
} else {
return refx$subs$ISub$_query_v$dyn_27612(this$);
}
});

var refx$subs$ISub$_orphan_QMARK_$dyn_27613 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.subs._orphan_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (refx.subs._orphan_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ISub.-orphan?",this$);
}
}
});
refx.subs._orphan_QMARK_ = (function refx$subs$_orphan_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.refx$subs$ISub$_orphan_QMARK_$arity$1 == null)))))){
return this$.refx$subs$ISub$_orphan_QMARK_$arity$1(this$);
} else {
return refx$subs$ISub$_orphan_QMARK_$dyn_27613(this$);
}
});

var refx$subs$ISub$_dispose_BANG_$dyn_27616 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.subs._dispose_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (refx.subs._dispose_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ISub.-dispose!",this$);
}
}
});
refx.subs._dispose_BANG_ = (function refx$subs$_dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.refx$subs$ISub$_dispose_BANG_$arity$1 == null)))))){
return this$.refx$subs$ISub$_dispose_BANG_$arity$1(this$);
} else {
return refx$subs$ISub$_dispose_BANG_$dyn_27616(this$);
}
});

refx.subs.dispose_BANG_ = (function refx$subs$dispose_BANG_(sub){
refx.subs.cache_remove_BANG_(refx.subs._query_v(sub),sub);

return refx.subs._dispose_BANG_(sub);
});
refx.subs.sub_orphaned = (function refx$subs$sub_orphaned(sub){
var G__27457 = (function (){
if(cljs.core.truth_(refx.subs._orphan_QMARK_(sub))){
return refx.subs.dispose_BANG_(sub);
} else {
return null;
}
});
return (refx.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? refx.interop.next_tick.cljs$core$IFn$_invoke$arity$1(G__27457) : refx.interop.next_tick.call(null,G__27457));
});
refx.subs.clear_subscription_cache_BANG_ = (function refx$subs$clear_subscription_cache_BANG_(){
var seq__27464 = cljs.core.seq(cljs.core.deref(refx.subs.sub_cache));
var chunk__27466 = null;
var count__27467 = (0);
var i__27468 = (0);
while(true){
if((i__27468 < count__27467)){
var vec__27481 = chunk__27466.cljs$core$IIndexed$_nth$arity$2(null,i__27468);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27481,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27481,(1),null);
refx.subs.dispose_BANG_(sub);


var G__27624 = seq__27464;
var G__27625 = chunk__27466;
var G__27626 = count__27467;
var G__27627 = (i__27468 + (1));
seq__27464 = G__27624;
chunk__27466 = G__27625;
count__27467 = G__27626;
i__27468 = G__27627;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27464);
if(temp__5804__auto__){
var seq__27464__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27464__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27464__$1);
var G__27630 = cljs.core.chunk_rest(seq__27464__$1);
var G__27631 = c__5568__auto__;
var G__27632 = cljs.core.count(c__5568__auto__);
var G__27633 = (0);
seq__27464 = G__27630;
chunk__27466 = G__27631;
count__27467 = G__27632;
i__27468 = G__27633;
continue;
} else {
var vec__27485 = cljs.core.first(seq__27464__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27485,(0),null);
var sub = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27485,(1),null);
refx.subs.dispose_BANG_(sub);


var G__27637 = cljs.core.next(seq__27464__$1);
var G__27638 = null;
var G__27639 = (0);
var G__27640 = (0);
seq__27464 = G__27637;
chunk__27466 = G__27638;
count__27467 = G__27639;
i__27468 = G__27640;
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
*/
refx.subs.Listeners = (function (listeners){
this.listeners = listeners;
});
(refx.subs.Listeners.prototype.empty_QMARK_ = (function (){
var self__ = this;
var _ = this;
return cljs.core.empty_QMARK_(self__.listeners);
}));

(refx.subs.Listeners.prototype.add = (function (k,f){
var self__ = this;
var _ = this;
return (self__.listeners = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.listeners,k,f));
}));

(refx.subs.Listeners.prototype.remove = (function (k){
var self__ = this;
var _ = this;
return (self__.listeners = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.listeners,k));
}));

(refx.subs.Listeners.prototype.notify = (function (){
var self__ = this;
var _ = this;
var seq__27491 = cljs.core.seq(self__.listeners);
var chunk__27492 = null;
var count__27493 = (0);
var i__27494 = (0);
while(true){
if((i__27494 < count__27493)){
var vec__27503 = chunk__27492.cljs$core$IIndexed$_nth$arity$2(null,i__27494);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27503,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27503,(1),null);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__27646 = seq__27491;
var G__27647 = chunk__27492;
var G__27648 = count__27493;
var G__27649 = (i__27494 + (1));
seq__27491 = G__27646;
chunk__27492 = G__27647;
count__27493 = G__27648;
i__27494 = G__27649;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27491);
if(temp__5804__auto__){
var seq__27491__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27491__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27491__$1);
var G__27651 = cljs.core.chunk_rest(seq__27491__$1);
var G__27652 = c__5568__auto__;
var G__27653 = cljs.core.count(c__5568__auto__);
var G__27654 = (0);
seq__27491 = G__27651;
chunk__27492 = G__27652;
count__27493 = G__27653;
i__27494 = G__27654;
continue;
} else {
var vec__27513 = cljs.core.first(seq__27491__$1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27513,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27513,(1),null);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__27658 = cljs.core.next(seq__27491__$1);
var G__27659 = null;
var G__27660 = (0);
var G__27661 = (0);
seq__27491 = G__27658;
chunk__27492 = G__27659;
count__27493 = G__27660;
i__27494 = G__27661;
continue;
}
} else {
return null;
}
}
break;
}
}));

(refx.subs.Listeners.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(refx.subs.Listeners.cljs$lang$type = true);

(refx.subs.Listeners.cljs$lang$ctorStr = "refx.subs/Listeners");

(refx.subs.Listeners.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"refx.subs/Listeners");
}));

/**
 * Positional factory function for refx.subs/Listeners.
 */
refx.subs.__GT_Listeners = (function refx$subs$__GT_Listeners(listeners){
return (new refx.subs.Listeners(listeners));
});

refx.subs.make_listeners = (function refx$subs$make_listeners(){
return (new refx.subs.Listeners(null));
});
/**
 * Apply `f` to a node input value.
 */
refx.subs.map_signals = (function refx$subs$map_signals(f,input){
if(refx.subs.signal_QMARK_(input)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(input) : f.call(null,input));
} else {
if(cljs.core.sequential_QMARK_(input)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,input);
} else {
if(cljs.core.map_QMARK_(input)){
return cljs.core.update_vals(input,f);
} else {
return input;

}
}
}
});
refx.subs.run_signals_BANG_ = (function refx$subs$run_signals_BANG_(f,input){
refx.subs.map_signals(f,input);

return null;
});
refx.subs.compute_sub = (function refx$subs$compute_sub(query_v,input,compute_fn){
var G__27528 = refx.subs.map_signals(refx.subs._value,input);
var G__27529 = query_v;
return (compute_fn.cljs$core$IFn$_invoke$arity$2 ? compute_fn.cljs$core$IFn$_invoke$arity$2(G__27528,G__27529) : compute_fn.call(null,G__27528,G__27529));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {refx.subs.ISignal}
 * @implements {refx.subs.ISub}
 * @implements {cljs.core.IDeref}
*/
refx.subs.Sub = (function (query_v,input,compute_fn,value,dirty_QMARK_,listeners){
this.query_v = query_v;
this.input = input;
this.compute_fn = compute_fn;
this.value = value;
this.dirty_QMARK_ = dirty_QMARK_;
this.listeners = listeners;
this.cljs$lang$protocol_mask$partition0$ = 6324224;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(refx.subs.Sub.prototype.refx$subs$ISub$ = cljs.core.PROTOCOL_SENTINEL);

(refx.subs.Sub.prototype.refx$subs$ISub$_query_v$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.query_v;
}));

(refx.subs.Sub.prototype.refx$subs$ISub$_orphan_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.listeners.empty_QMARK_();
}));

(refx.subs.Sub.prototype.refx$subs$ISub$_dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return refx.subs.run_signals_BANG_((function (p1__27531_SHARP_){
return refx.subs._remove_listener(p1__27531_SHARP_,this$__$1);
}),self__.input);
}));

(refx.subs.Sub.prototype.refx$subs$ISignal$ = cljs.core.PROTOCOL_SENTINEL);

(refx.subs.Sub.prototype.refx$subs$ISignal$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
}));

(refx.subs.Sub.prototype.refx$subs$ISignal$_add_listener$arity$3 = (function (_,k,f){
var self__ = this;
var ___$1 = this;
return self__.listeners.add(k,f);
}));

(refx.subs.Sub.prototype.refx$subs$ISignal$_remove_listener$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.listeners.remove(k);

if(cljs.core.truth_(self__.listeners.empty_QMARK_())){
return refx.subs.sub_orphaned(this$__$1);
} else {
return null;
}
}));

(refx.subs.Sub.prototype.init_BANG_ = (function (){
var self__ = this;
var this$ = this;
var cb = (function (){
return this$.invalidate_BANG_();
});
return refx.subs.run_signals_BANG_((function (p1__27532_SHARP_){
return refx.subs._add_listener(p1__27532_SHARP_,this$,cb);
}),self__.input);
}));

(refx.subs.Sub.prototype.invalidate_BANG_ = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(self__.dirty_QMARK_)){
return null;
} else {
(self__.dirty_QMARK_ = true);

return this$.update_BANG_();
}
}));

(refx.subs.Sub.prototype.update_BANG_ = (function (){
var self__ = this;
var _ = this;
var new_value = refx.subs.compute_sub(self__.query_v,self__.input,self__.compute_fn);
(self__.dirty_QMARK_ = false);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,new_value)){
(self__.value = new_value);

return self__.listeners.notify();
} else {
return null;
}
}));

(refx.subs.Sub.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.refx$subs$ISignal$_value$arity$1(null);
}));

(refx.subs.Sub.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
}));

(refx.subs.Sub.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(refx.subs.Sub.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",126361396,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"compute-fn","compute-fn",1500324705,null),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Listeners","Listeners",429818402,null)], null))], null);
}));

(refx.subs.Sub.cljs$lang$type = true);

(refx.subs.Sub.cljs$lang$ctorStr = "refx.subs/Sub");

(refx.subs.Sub.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"refx.subs/Sub");
}));

/**
 * Positional factory function for refx.subs/Sub.
 */
refx.subs.__GT_Sub = (function refx$subs$__GT_Sub(query_v,input,compute_fn,value,dirty_QMARK_,listeners){
return (new refx.subs.Sub(query_v,input,compute_fn,value,dirty_QMARK_,listeners));
});

refx.subs.make_sub = (function refx$subs$make_sub(query_v,input,compute_fn){
var value = refx.subs.compute_sub(query_v,input,compute_fn);
var sub = refx.subs.__GT_Sub(query_v,input,compute_fn,value,false,refx.subs.make_listeners());
sub.init_BANG_();

return sub;
});
refx.subs.register = (function refx$subs$register(query_id,input_fn,compute_fn){
var handler_fn = (function refx$subs$register_$_handler_fn(query_v){
return refx.subs.make_sub(query_v,(input_fn.cljs$core$IFn$_invoke$arity$1 ? input_fn.cljs$core$IFn$_invoke$arity$1(query_v) : input_fn.call(null,query_v)),compute_fn);
});
return refx.registry.add_BANG_(refx.subs.kind,query_id,handler_fn);
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {refx.subs.ISignal}
 * @implements {refx.subs.ISub}
 * @implements {cljs.core.IDeref}
*/
refx.subs.DynamicSub = (function (query_v,handler_fn,query_sub,value_sub,listeners){
this.query_v = query_v;
this.handler_fn = handler_fn;
this.query_sub = query_sub;
this.value_sub = value_sub;
this.listeners = listeners;
this.cljs$lang$protocol_mask$partition0$ = 6324224;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(refx.subs.DynamicSub.prototype.refx$subs$ISub$ = cljs.core.PROTOCOL_SENTINEL);

(refx.subs.DynamicSub.prototype.refx$subs$ISub$_query_v$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.query_v;
}));

(refx.subs.DynamicSub.prototype.refx$subs$ISub$_orphan_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.listeners.empty_QMARK_();
}));

(refx.subs.DynamicSub.prototype.refx$subs$ISub$_dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
refx.subs._remove_listener(self__.query_sub,this$__$1);

if(cljs.core.truth_(self__.value_sub)){
return refx.subs._remove_listener(self__.value_sub,this$__$1);
} else {
return null;
}
}));

(refx.subs.DynamicSub.prototype.refx$subs$ISignal$ = cljs.core.PROTOCOL_SENTINEL);

(refx.subs.DynamicSub.prototype.refx$subs$ISignal$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return refx.subs._value(self__.value_sub);
}));

(refx.subs.DynamicSub.prototype.refx$subs$ISignal$_add_listener$arity$3 = (function (_,k,f){
var self__ = this;
var ___$1 = this;
return self__.listeners.add(k,f);
}));

(refx.subs.DynamicSub.prototype.refx$subs$ISignal$_remove_listener$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.listeners.remove(k);

if(cljs.core.truth_(self__.listeners.empty_QMARK_())){
return refx.subs.sub_orphaned(this$__$1);
} else {
return null;
}
}));

(refx.subs.DynamicSub.prototype.init_BANG_ = (function (){
var self__ = this;
var this$ = this;
this$.update_BANG_();

return refx.subs._add_listener(self__.query_sub,this$,(function (){
return this$.update_BANG_();
}));
}));

(refx.subs.DynamicSub.prototype.update_BANG_ = (function (){
var self__ = this;
var this$ = this;
var qv = refx.subs._value(self__.query_sub);
if(cljs.core.truth_(self__.value_sub)){
refx.subs._remove_listener(self__.value_sub,this$);
} else {
}

(self__.value_sub = (function (){var or__5045__auto__ = refx.subs.cache_lookup(qv);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (self__.handler_fn.cljs$core$IFn$_invoke$arity$1 ? self__.handler_fn.cljs$core$IFn$_invoke$arity$1(qv) : self__.handler_fn.call(null,qv));
}
})());

refx.subs._add_listener(self__.value_sub,this$,(function (){
return self__.listeners.notify();
}));

return self__.listeners.notify();
}));

(refx.subs.DynamicSub.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
}));

(refx.subs.DynamicSub.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(refx.subs.DynamicSub.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.refx$subs$ISignal$_value$arity$1(null);
}));

(refx.subs.DynamicSub.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-v","query-v",126361396,null),new cljs.core.Symbol(null,"handler-fn","handler-fn",841143797,null),new cljs.core.Symbol(null,"query-sub","query-sub",1764223972,null),cljs.core.with_meta(new cljs.core.Symbol(null,"value-sub","value-sub",751815765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Listeners","Listeners",429818402,null)], null))], null);
}));

(refx.subs.DynamicSub.cljs$lang$type = true);

(refx.subs.DynamicSub.cljs$lang$ctorStr = "refx.subs/DynamicSub");

(refx.subs.DynamicSub.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"refx.subs/DynamicSub");
}));

/**
 * Positional factory function for refx.subs/DynamicSub.
 */
refx.subs.__GT_DynamicSub = (function refx$subs$__GT_DynamicSub(query_v,handler_fn,query_sub,value_sub,listeners){
return (new refx.subs.DynamicSub(query_v,handler_fn,query_sub,value_sub,listeners));
});

refx.subs.some_signal_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,refx.subs.signal_QMARK_);
/**
 * Return true if a query vector contains signals.
 */
refx.subs.dynamic_QMARK_ = (function refx$subs$dynamic_QMARK_(query_v){
return cljs.core.some(refx.subs.some_signal_QMARK_,query_v);
});
/**
 * Input function for dynamic subscriptions, where the query vector contains
 * signals.  Returns a map of vector indexes to signals.
 */
refx.subs.dynamic_input = (function refx$subs$dynamic_input(query_v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$1((function (i,x){
if(cljs.core.truth_(refx.subs.some_signal_QMARK_(x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,x], null);
} else {
return null;
}
})),query_v);
});
/**
 * Computation function for dynamic subscriptions.  Returns a query vector
 * where signals have been replaced with their current values.  `input` must
 * be a map of vector index to value, as returned by `dynamic-input`.
 */
refx.subs.dynamic_compute = (function refx$subs$dynamic_compute(input,p__27581){
var vec__27582 = p__27581;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27582,(0),null);
var query_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27582,(1),null);
return cljs.core.reduce_kv(cljs.core.assoc,query_v,input);
});
/**
 * Make a dynamic subscription.
 */
refx.subs.make_dynamic = (function refx$subs$make_dynamic(query_v,handler_fn){
var query_sub = refx.subs.make_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refx.subs","query","refx.subs/query",-1866238850),query_v], null),refx.subs.dynamic_input(query_v),refx.subs.dynamic_compute);
var dynamic = refx.subs.__GT_DynamicSub(query_v,handler_fn,query_sub,null,refx.subs.make_listeners());
dynamic.init_BANG_();

return dynamic;
});
refx.subs.create_sub = (function refx$subs$create_sub(query_v){
var query_id = refx.utils.first_in_vector(query_v);
var temp__5804__auto__ = refx.registry.lookup.cljs$core$IFn$_invoke$arity$2(refx.subs.kind,query_id);
if(cljs.core.truth_(temp__5804__auto__)){
var handler_fn = temp__5804__auto__;
var sub = (cljs.core.truth_(refx.subs.dynamic_QMARK_(query_v))?refx.subs.make_dynamic(query_v,handler_fn):(handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(query_v) : handler_fn.call(null,query_v)));
refx.subs.cache_add_BANG_(query_v,sub);

return sub;
} else {
return null;
}
});
/**
 * Returns a subscription to `query-v`.
 * 
 * Callers must make sure that the returned object is eventually used, or it
 * will leak memory.  This is designed to construct custom subscriptions in
 * handlers, React components should use the `use-sub` hook instead.
 */
refx.subs.sub = (function refx$subs$sub(query_v){
var or__5045__auto__ = refx.subs.cache_lookup(query_v);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return refx.subs.create_sub(query_v);
}
});

//# sourceMappingURL=refx.subs.js.map
