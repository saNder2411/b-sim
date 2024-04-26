goog.provide('refx.alpha');
refx.alpha.dispatch = (function refx$alpha$dispatch(event){
return refx.dispatch.dispatch(event);
});
refx.alpha.dispatch_sync = (function refx$alpha$dispatch_sync(event){
return refx.dispatch.dispatch_sync(event);
});
refx.alpha.base_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.cofx.inject_db,refx.effects.do_fx,refx.interceptors.inject_global_interceptors], null);
refx.alpha._reg_event = (function refx$alpha$_reg_event(id,interceptors,handler_interceptor){
return refx.events.register(id,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(refx.alpha.base_interceptors,interceptors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler_interceptor], 0)));
});
refx.alpha.reg_event_db = (function refx$alpha$reg_event_db(var_args){
var G__27831 = arguments.length;
switch (G__27831) {
case 2:
return refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return refx.alpha._reg_event(id,interceptors,refx.events.db_handler__GT_interceptor(handler));
}));

(refx.alpha.reg_event_db.cljs$lang$maxFixedArity = 3);

refx.alpha.reg_event_fx = (function refx$alpha$reg_event_fx(var_args){
var G__27850 = arguments.length;
switch (G__27850) {
case 2:
return refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return refx.alpha._reg_event(id,interceptors,refx.events.fx_handler__GT_interceptor(handler));
}));

(refx.alpha.reg_event_fx.cljs$lang$maxFixedArity = 3);

refx.alpha.reg_event_ctx = (function refx$alpha$reg_event_ctx(var_args){
var G__27869 = arguments.length;
switch (G__27869) {
case 2:
return refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return refx.alpha._reg_event(id,interceptors,refx.events.ctx_handler__GT_interceptor(handler));
}));

(refx.alpha.reg_event_ctx.cljs$lang$maxFixedArity = 3);

refx.alpha.clear_event = (function refx$alpha$clear_event(var_args){
var G__27880 = arguments.length;
switch (G__27880) {
case 0:
return refx.alpha.clear_event.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return refx.alpha.clear_event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.clear_event.cljs$core$IFn$_invoke$arity$0 = (function (){
return refx.registry.clear_BANG_(refx.events.kind);
}));

(refx.alpha.clear_event.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.registry.remove_BANG_(refx.events.kind,id);
}));

(refx.alpha.clear_event.cljs$lang$maxFixedArity = 1);

/**
 * Return a subscription signal to be used as an input in `reg-sub`.
 */
refx.alpha.sub = (function refx$alpha$sub(query_v){
return refx.subs.sub(query_v);
});
/**
 * Like re-frame's `:<-` sugar, returns an `input-fn` for `reg-sub` that
 * subscribes to one or more query vectors.
 */
refx.alpha._LT__ = (function refx$alpha$_LT__(var_args){
var G__27906 = arguments.length;
switch (G__27906) {
case 1:
return refx.alpha._LT__.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___27991 = arguments.length;
var i__5770__auto___27992 = (0);
while(true){
if((i__5770__auto___27992 < len__5769__auto___27991)){
args_arr__5794__auto__.push((arguments[i__5770__auto___27992]));

var G__27993 = (i__5770__auto___27992 + (1));
i__5770__auto___27992 = G__27993;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return refx.alpha._LT__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(refx.alpha._LT__.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return (function (_){
return refx.subs.sub(query_v);
});
}));

(refx.alpha._LT__.cljs$core$IFn$_invoke$arity$variadic = (function (query_v,qs){
var qs__$1 = cljs.core.cons(query_v,qs);
return (function (_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(refx.subs.sub,qs__$1);
});
}));

/** @this {Function} */
(refx.alpha._LT__.cljs$lang$applyTo = (function (seq27900){
var G__27901 = cljs.core.first(seq27900);
var seq27900__$1 = cljs.core.next(seq27900);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27901,seq27900__$1);
}));

(refx.alpha._LT__.cljs$lang$maxFixedArity = (1));

refx.alpha.parse_reg_sub_sugar = (function refx$alpha$parse_reg_sub_sugar(args){
var vec__27933 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27936,p__27937){
var vec__27938 = p__27936;
var qs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27938,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27938,(1),null);
var vec__27941 = p__27937;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27941,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27941,(1),null);
var G__27944 = op;
var G__27944__$1 = (((G__27944 instanceof cljs.core.Keyword))?G__27944.fqn:null);
switch (G__27944__$1) {
case "<-":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(qs,arg),f], null);

break;
case "->":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qs,(function (v){
return (arg.cljs$core$IFn$_invoke$arity$1 ? arg.cljs$core$IFn$_invoke$arity$1(v) : arg.call(null,v));
})], null);

break;
case "=>":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qs,(function (v,p__27946){
var vec__27947 = p__27946;
var seq__27948 = cljs.core.seq(vec__27947);
var first__27949 = cljs.core.first(seq__27948);
var seq__27948__$1 = cljs.core.next(seq__27948);
var _ = first__27949;
var vs = seq__27948__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(arg,v,vs);
})], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qs,op], null);

}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null], null),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),args));
var qs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27933,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27933,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(qs))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(refx.alpha._LT__,qs):cljs.core.constantly(refx.db.app_db)),f], null);
});
refx.alpha.reg_sub = (function refx$alpha$reg_sub(var_args){
var G__27957 = arguments.length;
switch (G__27957) {
case 2:
return refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___28008 = arguments.length;
var i__5770__auto___28009 = (0);
while(true){
if((i__5770__auto___28009 < len__5769__auto___28008)){
args_arr__5794__auto__.push((arguments[i__5770__auto___28009]));

var G__28010 = (i__5770__auto___28009 + (1));
i__5770__auto___28009 = G__28010;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((4)),(0),null));
return refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5795__auto__);

}
});

(refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2 = (function (query_id,compute_fn){
return refx.subs.register(query_id,cljs.core.constantly(refx.db.app_db),compute_fn);
}));

(refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$3 = (function (query_id,input_fn,compute_fn){
if((input_fn instanceof cljs.core.Keyword)){
var vec__27958 = refx.alpha.parse_reg_sub_sugar(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_fn,compute_fn], null));
var input_fn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27958,(0),null);
var compute_fn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27958,(1),null);
return refx.subs.register(query_id,input_fn__$1,compute_fn__$1);
} else {
return refx.subs.register(query_id,input_fn,compute_fn);
}
}));

(refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,x,y,z,args){
var vec__27961 = refx.alpha.parse_reg_sub_sugar(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args));
var input_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27961,(0),null);
var compute_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27961,(1),null);
return refx.subs.register(query_id,input_fn,compute_fn);
}));

/** @this {Function} */
(refx.alpha.reg_sub.cljs$lang$applyTo = (function (seq27951){
var G__27952 = cljs.core.first(seq27951);
var seq27951__$1 = cljs.core.next(seq27951);
var G__27953 = cljs.core.first(seq27951__$1);
var seq27951__$2 = cljs.core.next(seq27951__$1);
var G__27954 = cljs.core.first(seq27951__$2);
var seq27951__$3 = cljs.core.next(seq27951__$2);
var G__27955 = cljs.core.first(seq27951__$3);
var seq27951__$4 = cljs.core.next(seq27951__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27952,G__27953,G__27954,G__27955,seq27951__$4);
}));

(refx.alpha.reg_sub.cljs$lang$maxFixedArity = (4));

refx.alpha.use_sub = (function refx$alpha$use_sub(query_v){
return refx.hooks.use_sub(query_v);
});
refx.alpha.clear_sub = (function refx$alpha$clear_sub(var_args){
var G__27965 = arguments.length;
switch (G__27965) {
case 0:
return refx.alpha.clear_sub.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return refx.alpha.clear_sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.clear_sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return refx.registry.clear_BANG_(refx.subs.kind);
}));

(refx.alpha.clear_sub.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.registry.remove_BANG_(refx.subs.kind,id);
}));

(refx.alpha.clear_sub.cljs$lang$maxFixedArity = 1);

refx.alpha.clear_subscription_cache_BANG_ = (function refx$alpha$clear_subscription_cache_BANG_(){
return refx.subs.clear_subscription_cache_BANG_();
});
refx.alpha.reg_fx = (function refx$alpha$reg_fx(id,handler){
return refx.effects.register(id,handler);
});
refx.alpha.clear_fx = (function refx$alpha$clear_fx(var_args){
var G__27971 = arguments.length;
switch (G__27971) {
case 0:
return refx.alpha.clear_fx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return refx.alpha.clear_fx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.clear_fx.cljs$core$IFn$_invoke$arity$0 = (function (){
return refx.registry.clear_BANG_(refx.effects.kind);
}));

(refx.alpha.clear_fx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.registry.remove_BANG_(refx.effects.kind,id);
}));

(refx.alpha.clear_fx.cljs$lang$maxFixedArity = 1);

refx.alpha.reg_cofx = (function refx$alpha$reg_cofx(id,handler){
return refx.cofx.register(id,handler);
});
refx.alpha.clear_cofx = (function refx$alpha$clear_cofx(var_args){
var G__27974 = arguments.length;
switch (G__27974) {
case 0:
return refx.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return refx.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$0 = (function (){
return refx.registry.clear_BANG_(refx.cofx.kind);
}));

(refx.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.registry.remove_BANG_(refx.cofx.kind,id);
}));

(refx.alpha.clear_cofx.cljs$lang$maxFixedArity = 1);

refx.alpha.inject_cofx = (function refx$alpha$inject_cofx(var_args){
var G__27976 = arguments.length;
switch (G__27976) {
case 1:
return refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1(id);
}));

(refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return refx.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2(id,value);
}));

(refx.alpha.inject_cofx.cljs$lang$maxFixedArity = 2);

refx.alpha.__GT_interceptor = (function refx$alpha$__GT_interceptor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28022 = arguments.length;
var i__5770__auto___28023 = (0);
while(true){
if((i__5770__auto___28023 < len__5769__auto___28022)){
args__5775__auto__.push((arguments[i__5770__auto___28023]));

var G__28026 = (i__5770__auto___28023 + (1));
i__5770__auto___28023 = G__28026;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return refx.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(refx.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__27978){
var map__27979 = p__27978;
var map__27979__$1 = cljs.core.__destructure_map(map__27979);
var m = map__27979__$1;
return refx.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic(refx.interceptor.__GT_interceptor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));

(refx.alpha.__GT_interceptor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.alpha.__GT_interceptor.cljs$lang$applyTo = (function (seq27977){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27977));
}));


//# sourceMappingURL=refx.alpha.js.map
