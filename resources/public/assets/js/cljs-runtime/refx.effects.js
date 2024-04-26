goog.provide('refx.effects');
refx.effects.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
refx.effects.register = (function refx$effects$register(id,handler){
return refx.registry.add_BANG_(refx.effects.kind,id,handler);
});
refx.effects.db_effect = (function refx$effects$db_effect(db){
if((cljs.core.deref(refx.db.app_db) === db)){
return null;
} else {
return cljs.core.reset_BANG_(refx.db.app_db,db);
}
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
refx.effects.do_fx = refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function refx$effects$do_fx_after(context){
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___27800 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___27800)){
var new_db_27801 = temp__5804__auto___27800;
refx.effects.db_effect(new_db_27801);
} else {
}

var seq__27684 = cljs.core.seq(effects_without_db);
var chunk__27685 = null;
var count__27686 = (0);
var i__27687 = (0);
while(true){
if((i__27687 < count__27686)){
var vec__27709 = chunk__27685.cljs$core$IIndexed$_nth$arity$2(null,i__27687);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27709,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27709,(1),null);
var temp__5802__auto___27802 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___27802)){
var effect_fn_27803 = temp__5802__auto___27802;
(effect_fn_27803.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27803.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27803.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__27804 = seq__27684;
var G__27805 = chunk__27685;
var G__27806 = count__27686;
var G__27807 = (i__27687 + (1));
seq__27684 = G__27804;
chunk__27685 = G__27805;
count__27686 = G__27806;
i__27687 = G__27807;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27684);
if(temp__5804__auto__){
var seq__27684__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27684__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27684__$1);
var G__27808 = cljs.core.chunk_rest(seq__27684__$1);
var G__27809 = c__5568__auto__;
var G__27810 = cljs.core.count(c__5568__auto__);
var G__27811 = (0);
seq__27684 = G__27808;
chunk__27685 = G__27809;
count__27686 = G__27810;
i__27687 = G__27811;
continue;
} else {
var vec__27713 = cljs.core.first(seq__27684__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27713,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27713,(1),null);
var temp__5802__auto___27812 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___27812)){
var effect_fn_27813 = temp__5802__auto___27812;
(effect_fn_27813.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27813.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27813.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__27814 = cljs.core.next(seq__27684__$1);
var G__27815 = null;
var G__27816 = (0);
var G__27817 = (0);
seq__27684 = G__27814;
chunk__27685 = G__27815;
count__27686 = G__27816;
i__27687 = G__27817;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
refx.effects.dispatch_later = (function refx$effects$dispatch_later(p__27717){
var map__27718 = p__27717;
var map__27718__$1 = cljs.core.__destructure_map(map__27718);
var effect = map__27718__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27718__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27718__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignoring bad :dispatch-later value:",effect], 0));
} else {
return refx.interop.set_timeout_BANG_((function (){
return refx.dispatch.dispatch(dispatch);
}),ms);
}
});
refx.effects.register(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return refx.effects.dispatch_later(value);
} else {
var seq__27723 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27724 = null;
var count__27725 = (0);
var i__27726 = (0);
while(true){
if((i__27726 < count__27725)){
var effect = chunk__27724.cljs$core$IIndexed$_nth$arity$2(null,i__27726);
refx.effects.dispatch_later(effect);


var G__27818 = seq__27723;
var G__27819 = chunk__27724;
var G__27820 = count__27725;
var G__27821 = (i__27726 + (1));
seq__27723 = G__27818;
chunk__27724 = G__27819;
count__27725 = G__27820;
i__27726 = G__27821;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27723);
if(temp__5804__auto__){
var seq__27723__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27723__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27723__$1);
var G__27822 = cljs.core.chunk_rest(seq__27723__$1);
var G__27823 = c__5568__auto__;
var G__27824 = cljs.core.count(c__5568__auto__);
var G__27825 = (0);
seq__27723 = G__27822;
chunk__27724 = G__27823;
count__27725 = G__27824;
i__27726 = G__27825;
continue;
} else {
var effect = cljs.core.first(seq__27723__$1);
refx.effects.dispatch_later(effect);


var G__27826 = cljs.core.next(seq__27723__$1);
var G__27827 = null;
var G__27828 = (0);
var G__27829 = (0);
seq__27723 = G__27826;
chunk__27724 = G__27827;
count__27725 = G__27828;
i__27726 = G__27829;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
refx.effects.register(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__27732 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__27733 = null;
var count__27734 = (0);
var i__27735 = (0);
while(true){
if((i__27735 < count__27734)){
var vec__27754 = chunk__27733.cljs$core$IIndexed$_nth$arity$2(null,i__27735);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27754,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27754,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___27832 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___27832)){
var effect_fn_27833 = temp__5802__auto___27832;
(effect_fn_27833.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27833.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27833.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__27834 = seq__27732;
var G__27835 = chunk__27733;
var G__27836 = count__27734;
var G__27837 = (i__27735 + (1));
seq__27732 = G__27834;
chunk__27733 = G__27835;
count__27734 = G__27836;
i__27735 = G__27837;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27732);
if(temp__5804__auto__){
var seq__27732__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27732__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27732__$1);
var G__27838 = cljs.core.chunk_rest(seq__27732__$1);
var G__27839 = c__5568__auto__;
var G__27840 = cljs.core.count(c__5568__auto__);
var G__27841 = (0);
seq__27732 = G__27838;
chunk__27733 = G__27839;
count__27734 = G__27840;
i__27735 = G__27841;
continue;
} else {
var vec__27772 = cljs.core.first(seq__27732__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27772,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27772,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___27843 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___27843)){
var effect_fn_27844 = temp__5802__auto___27843;
(effect_fn_27844.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27844.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27844.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__27845 = cljs.core.next(seq__27732__$1);
var G__27846 = null;
var G__27847 = (0);
var G__27848 = (0);
seq__27732 = G__27845;
chunk__27733 = G__27846;
count__27734 = G__27847;
i__27735 = G__27848;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
refx.effects.register(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return refx.dispatch.dispatch(value);
}
}));
refx.effects.register(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__27782 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27783 = null;
var count__27784 = (0);
var i__27785 = (0);
while(true){
if((i__27785 < count__27784)){
var event = chunk__27783.cljs$core$IIndexed$_nth$arity$2(null,i__27785);
refx.dispatch.dispatch(event);


var G__27851 = seq__27782;
var G__27852 = chunk__27783;
var G__27853 = count__27784;
var G__27854 = (i__27785 + (1));
seq__27782 = G__27851;
chunk__27783 = G__27852;
count__27784 = G__27853;
i__27785 = G__27854;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27782);
if(temp__5804__auto__){
var seq__27782__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27782__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27782__$1);
var G__27856 = cljs.core.chunk_rest(seq__27782__$1);
var G__27857 = c__5568__auto__;
var G__27858 = cljs.core.count(c__5568__auto__);
var G__27859 = (0);
seq__27782 = G__27856;
chunk__27783 = G__27857;
count__27784 = G__27858;
i__27785 = G__27859;
continue;
} else {
var event = cljs.core.first(seq__27782__$1);
refx.dispatch.dispatch(event);


var G__27860 = cljs.core.next(seq__27782__$1);
var G__27861 = null;
var G__27862 = (0);
var G__27863 = (0);
seq__27782 = G__27860;
chunk__27783 = G__27861;
count__27784 = G__27862;
i__27785 = G__27863;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
refx.effects.register(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
if(cljs.core.sequential_QMARK_(value)){
var seq__27789 = cljs.core.seq(value);
var chunk__27790 = null;
var count__27791 = (0);
var i__27792 = (0);
while(true){
if((i__27792 < count__27791)){
var event_id = chunk__27790.cljs$core$IIndexed$_nth$arity$2(null,i__27792);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__27865 = seq__27789;
var G__27866 = chunk__27790;
var G__27867 = count__27791;
var G__27868 = (i__27792 + (1));
seq__27789 = G__27865;
chunk__27790 = G__27866;
count__27791 = G__27867;
i__27792 = G__27868;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27789);
if(temp__5804__auto__){
var seq__27789__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27789__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27789__$1);
var G__27871 = cljs.core.chunk_rest(seq__27789__$1);
var G__27872 = c__5568__auto__;
var G__27873 = cljs.core.count(c__5568__auto__);
var G__27874 = (0);
seq__27789 = G__27871;
chunk__27790 = G__27872;
count__27791 = G__27873;
i__27792 = G__27874;
continue;
} else {
var event_id = cljs.core.first(seq__27789__$1);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__27875 = cljs.core.next(seq__27789__$1);
var G__27876 = null;
var G__27877 = (0);
var G__27878 = (0);
seq__27789 = G__27875;
chunk__27790 = G__27876;
count__27791 = G__27877;
i__27792 = G__27878;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return refx.registry.clear_BANG_(refx.events.kind);
}
}));
refx.effects.register(new cljs.core.Keyword(null,"db","db",993250759),refx.effects.db_effect);

//# sourceMappingURL=refx.effects.js.map
