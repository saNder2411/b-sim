goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30294 = arguments.length;
switch (G__30294) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30305 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30305 = (function (f,blockable,meta30306){
this.f = f;
this.blockable = blockable;
this.meta30306 = meta30306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30307,meta30306__$1){
var self__ = this;
var _30307__$1 = this;
return (new cljs.core.async.t_cljs$core$async30305(self__.f,self__.blockable,meta30306__$1));
}));

(cljs.core.async.t_cljs$core$async30305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30307){
var self__ = this;
var _30307__$1 = this;
return self__.meta30306;
}));

(cljs.core.async.t_cljs$core$async30305.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30305.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30306","meta30306",263513132,null)], null);
}));

(cljs.core.async.t_cljs$core$async30305.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30305");

(cljs.core.async.t_cljs$core$async30305.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30305");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30305.
 */
cljs.core.async.__GT_t_cljs$core$async30305 = (function cljs$core$async$__GT_t_cljs$core$async30305(f__$1,blockable__$1,meta30306){
return (new cljs.core.async.t_cljs$core$async30305(f__$1,blockable__$1,meta30306));
});

}

return (new cljs.core.async.t_cljs$core$async30305(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30364 = arguments.length;
switch (G__30364) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30387 = arguments.length;
switch (G__30387) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30404 = arguments.length;
switch (G__30404) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34272 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34272) : fn1.call(null,val_34272));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34272) : fn1.call(null,val_34272));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30414 = arguments.length;
switch (G__30414) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___34290 = n;
var x_34291 = (0);
while(true){
if((x_34291 < n__5636__auto___34290)){
(a[x_34291] = x_34291);

var G__34292 = (x_34291 + (1));
x_34291 = G__34292;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30454 = (function (flag,meta30455){
this.flag = flag;
this.meta30455 = meta30455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30456,meta30455__$1){
var self__ = this;
var _30456__$1 = this;
return (new cljs.core.async.t_cljs$core$async30454(self__.flag,meta30455__$1));
}));

(cljs.core.async.t_cljs$core$async30454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30456){
var self__ = this;
var _30456__$1 = this;
return self__.meta30455;
}));

(cljs.core.async.t_cljs$core$async30454.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30455","meta30455",-2017432630,null)], null);
}));

(cljs.core.async.t_cljs$core$async30454.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30454");

(cljs.core.async.t_cljs$core$async30454.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30454");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30454.
 */
cljs.core.async.__GT_t_cljs$core$async30454 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30454(flag__$1,meta30455){
return (new cljs.core.async.t_cljs$core$async30454(flag__$1,meta30455));
});

}

return (new cljs.core.async.t_cljs$core$async30454(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30513 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30513 = (function (flag,cb,meta30514){
this.flag = flag;
this.cb = cb;
this.meta30514 = meta30514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30515,meta30514__$1){
var self__ = this;
var _30515__$1 = this;
return (new cljs.core.async.t_cljs$core$async30513(self__.flag,self__.cb,meta30514__$1));
}));

(cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30515){
var self__ = this;
var _30515__$1 = this;
return self__.meta30514;
}));

(cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30514","meta30514",599981508,null)], null);
}));

(cljs.core.async.t_cljs$core$async30513.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30513");

(cljs.core.async.t_cljs$core$async30513.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30513");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30513.
 */
cljs.core.async.__GT_t_cljs$core$async30513 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30513(flag__$1,cb__$1,meta30514){
return (new cljs.core.async.t_cljs$core$async30513(flag__$1,cb__$1,meta30514));
});

}

return (new cljs.core.async.t_cljs$core$async30513(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30535_SHARP_){
var G__30548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30535_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30548) : fret.call(null,G__30548));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30536_SHARP_){
var G__30553 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30536_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30553) : fret.call(null,G__30553));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34326 = (i + (1));
i = G__34326;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34334 = arguments.length;
var i__5770__auto___34335 = (0);
while(true){
if((i__5770__auto___34335 < len__5769__auto___34334)){
args__5775__auto__.push((arguments[i__5770__auto___34335]));

var G__34338 = (i__5770__auto___34335 + (1));
i__5770__auto___34335 = G__34338;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30571){
var map__30572 = p__30571;
var map__30572__$1 = cljs.core.__destructure_map(map__30572);
var opts = map__30572__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30555){
var G__30556 = cljs.core.first(seq30555);
var seq30555__$1 = cljs.core.next(seq30555);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30556,seq30555__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30592 = arguments.length;
switch (G__30592) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30155__auto___34349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_30680){
var state_val_30681 = (state_30680[(1)]);
if((state_val_30681 === (7))){
var inst_30668 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
var statearr_30695_34353 = state_30680__$1;
(statearr_30695_34353[(2)] = inst_30668);

(statearr_30695_34353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (1))){
var state_30680__$1 = state_30680;
var statearr_30700_34356 = state_30680__$1;
(statearr_30700_34356[(2)] = null);

(statearr_30700_34356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (4))){
var inst_30648 = (state_30680[(7)]);
var inst_30648__$1 = (state_30680[(2)]);
var inst_30651 = (inst_30648__$1 == null);
var state_30680__$1 = (function (){var statearr_30706 = state_30680;
(statearr_30706[(7)] = inst_30648__$1);

return statearr_30706;
})();
if(cljs.core.truth_(inst_30651)){
var statearr_30707_34360 = state_30680__$1;
(statearr_30707_34360[(1)] = (5));

} else {
var statearr_30709_34361 = state_30680__$1;
(statearr_30709_34361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (13))){
var state_30680__$1 = state_30680;
var statearr_30723_34362 = state_30680__$1;
(statearr_30723_34362[(2)] = null);

(statearr_30723_34362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (6))){
var inst_30648 = (state_30680[(7)]);
var state_30680__$1 = state_30680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30680__$1,(11),to,inst_30648);
} else {
if((state_val_30681 === (3))){
var inst_30673 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30680__$1,inst_30673);
} else {
if((state_val_30681 === (12))){
var state_30680__$1 = state_30680;
var statearr_30728_34363 = state_30680__$1;
(statearr_30728_34363[(2)] = null);

(statearr_30728_34363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (2))){
var state_30680__$1 = state_30680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30680__$1,(4),from);
} else {
if((state_val_30681 === (11))){
var inst_30661 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
if(cljs.core.truth_(inst_30661)){
var statearr_30735_34375 = state_30680__$1;
(statearr_30735_34375[(1)] = (12));

} else {
var statearr_30736_34376 = state_30680__$1;
(statearr_30736_34376[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (9))){
var state_30680__$1 = state_30680;
var statearr_30740_34377 = state_30680__$1;
(statearr_30740_34377[(2)] = null);

(statearr_30740_34377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (5))){
var state_30680__$1 = state_30680;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30742_34384 = state_30680__$1;
(statearr_30742_34384[(1)] = (8));

} else {
var statearr_30743_34385 = state_30680__$1;
(statearr_30743_34385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (14))){
var inst_30666 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
var statearr_30745_34391 = state_30680__$1;
(statearr_30745_34391[(2)] = inst_30666);

(statearr_30745_34391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (10))){
var inst_30658 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
var statearr_30746_34392 = state_30680__$1;
(statearr_30746_34392[(2)] = inst_30658);

(statearr_30746_34392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (8))){
var inst_30655 = cljs.core.async.close_BANG_(to);
var state_30680__$1 = state_30680;
var statearr_30747_34395 = state_30680__$1;
(statearr_30747_34395[(2)] = inst_30655);

(statearr_30747_34395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29582__auto__ = null;
var cljs$core$async$state_machine__29582__auto____0 = (function (){
var statearr_30753 = [null,null,null,null,null,null,null,null];
(statearr_30753[(0)] = cljs$core$async$state_machine__29582__auto__);

(statearr_30753[(1)] = (1));

return statearr_30753;
});
var cljs$core$async$state_machine__29582__auto____1 = (function (state_30680){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_30680);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e30754){var ex__29585__auto__ = e30754;
var statearr_30755_34400 = state_30680;
(statearr_30755_34400[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_30680[(4)]))){
var statearr_30756_34401 = state_30680;
(statearr_30756_34401[(1)] = cljs.core.first((state_30680[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34403 = state_30680;
state_30680 = G__34403;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$state_machine__29582__auto__ = function(state_30680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29582__auto____1.call(this,state_30680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29582__auto____0;
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29582__auto____1;
return cljs$core$async$state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_30764 = f__30156__auto__();
(statearr_30764[(6)] = c__30155__auto___34349);

return statearr_30764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__30771){
var vec__30778 = p__30771;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30778,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30778,(1),null);
var job = vec__30778;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30155__auto___34409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_30809){
var state_val_30812 = (state_30809[(1)]);
if((state_val_30812 === (1))){
var state_30809__$1 = state_30809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30809__$1,(2),res,v);
} else {
if((state_val_30812 === (2))){
var inst_30797 = (state_30809[(2)]);
var inst_30801 = cljs.core.async.close_BANG_(res);
var state_30809__$1 = (function (){var statearr_30825 = state_30809;
(statearr_30825[(7)] = inst_30797);

return statearr_30825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30809__$1,inst_30801);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0 = (function (){
var statearr_30829 = [null,null,null,null,null,null,null,null];
(statearr_30829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__);

(statearr_30829[(1)] = (1));

return statearr_30829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1 = (function (state_30809){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_30809);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e30834){var ex__29585__auto__ = e30834;
var statearr_30835_34421 = state_30809;
(statearr_30835_34421[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_30809[(4)]))){
var statearr_30836_34422 = state_30809;
(statearr_30836_34422[(1)] = cljs.core.first((state_30809[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34427 = state_30809;
state_30809 = G__34427;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__ = function(state_30809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1.call(this,state_30809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_30837 = f__30156__auto__();
(statearr_30837[(6)] = c__30155__auto___34409);

return statearr_30837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30842){
var vec__30845 = p__30842;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30845,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30845,(1),null);
var job = vec__30845;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___34435 = n;
var __34436 = (0);
while(true){
if((__34436 < n__5636__auto___34435)){
var G__30850_34437 = type;
var G__30850_34438__$1 = (((G__30850_34437 instanceof cljs.core.Keyword))?G__30850_34437.fqn:null);
switch (G__30850_34438__$1) {
case "compute":
var c__30155__auto___34440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34436,c__30155__auto___34440,G__30850_34437,G__30850_34438__$1,n__5636__auto___34435,jobs,results,process__$1,async){
return (function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = ((function (__34436,c__30155__auto___34440,G__30850_34437,G__30850_34438__$1,n__5636__auto___34435,jobs,results,process__$1,async){
return (function (state_30864){
var state_val_30865 = (state_30864[(1)]);
if((state_val_30865 === (1))){
var state_30864__$1 = state_30864;
var statearr_30870_34445 = state_30864__$1;
(statearr_30870_34445[(2)] = null);

(statearr_30870_34445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (2))){
var state_30864__$1 = state_30864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30864__$1,(4),jobs);
} else {
if((state_val_30865 === (3))){
var inst_30862 = (state_30864[(2)]);
var state_30864__$1 = state_30864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30864__$1,inst_30862);
} else {
if((state_val_30865 === (4))){
var inst_30854 = (state_30864[(2)]);
var inst_30855 = process__$1(inst_30854);
var state_30864__$1 = state_30864;
if(cljs.core.truth_(inst_30855)){
var statearr_30871_34452 = state_30864__$1;
(statearr_30871_34452[(1)] = (5));

} else {
var statearr_30872_34453 = state_30864__$1;
(statearr_30872_34453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (5))){
var state_30864__$1 = state_30864;
var statearr_30874_34458 = state_30864__$1;
(statearr_30874_34458[(2)] = null);

(statearr_30874_34458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (6))){
var state_30864__$1 = state_30864;
var statearr_30875_34459 = state_30864__$1;
(statearr_30875_34459[(2)] = null);

(statearr_30875_34459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30865 === (7))){
var inst_30860 = (state_30864[(2)]);
var state_30864__$1 = state_30864;
var statearr_30876_34460 = state_30864__$1;
(statearr_30876_34460[(2)] = inst_30860);

(statearr_30876_34460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34436,c__30155__auto___34440,G__30850_34437,G__30850_34438__$1,n__5636__auto___34435,jobs,results,process__$1,async))
;
return ((function (__34436,switch__29581__auto__,c__30155__auto___34440,G__30850_34437,G__30850_34438__$1,n__5636__auto___34435,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0 = (function (){
var statearr_30877 = [null,null,null,null,null,null,null];
(statearr_30877[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__);

(statearr_30877[(1)] = (1));

return statearr_30877;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1 = (function (state_30864){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_30864);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e30878){var ex__29585__auto__ = e30878;
var statearr_30882_34463 = state_30864;
(statearr_30882_34463[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_30864[(4)]))){
var statearr_30883_34464 = state_30864;
(statearr_30883_34464[(1)] = cljs.core.first((state_30864[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34465 = state_30864;
state_30864 = G__34465;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__ = function(state_30864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1.call(this,state_30864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__;
})()
;})(__34436,switch__29581__auto__,c__30155__auto___34440,G__30850_34437,G__30850_34438__$1,n__5636__auto___34435,jobs,results,process__$1,async))
})();
var state__30157__auto__ = (function (){var statearr_30885 = f__30156__auto__();
(statearr_30885[(6)] = c__30155__auto___34440);

return statearr_30885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
});})(__34436,c__30155__auto___34440,G__30850_34437,G__30850_34438__$1,n__5636__auto___34435,jobs,results,process__$1,async))
);


break;
case "async":
var c__30155__auto___34467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34436,c__30155__auto___34467,G__30850_34437,G__30850_34438__$1,n__5636__auto___34435,jobs,results,process__$1,async){
return (function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = ((function (__34436,c__30155__auto___34467,G__30850_34437,G__30850_34438__$1,n__5636__auto___34435,jobs,results,process__$1,async){
return (function (state_30898){
var state_val_30899 = (state_30898[(1)]);
if((state_val_30899 === (1))){
var state_30898__$1 = state_30898;
var statearr_30901_34469 = state_30898__$1;
(statearr_30901_34469[(2)] = null);

(statearr_30901_34469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30899 === (2))){
var state_30898__$1 = state_30898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30898__$1,(4),jobs);
} else {
if((state_val_30899 === (3))){
var inst_30896 = (state_30898[(2)]);
var state_30898__$1 = state_30898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30898__$1,inst_30896);
} else {
if((state_val_30899 === (4))){
var inst_30888 = (state_30898[(2)]);
var inst_30889 = async(inst_30888);
var state_30898__$1 = state_30898;
if(cljs.core.truth_(inst_30889)){
var statearr_30906_34472 = state_30898__$1;
(statearr_30906_34472[(1)] = (5));

} else {
var statearr_30910_34473 = state_30898__$1;
(statearr_30910_34473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30899 === (5))){
var state_30898__$1 = state_30898;
var statearr_30911_34476 = state_30898__$1;
(statearr_30911_34476[(2)] = null);

(statearr_30911_34476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30899 === (6))){
var state_30898__$1 = state_30898;
var statearr_30913_34477 = state_30898__$1;
(statearr_30913_34477[(2)] = null);

(statearr_30913_34477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30899 === (7))){
var inst_30894 = (state_30898[(2)]);
var state_30898__$1 = state_30898;
var statearr_30914_34481 = state_30898__$1;
(statearr_30914_34481[(2)] = inst_30894);

(statearr_30914_34481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34436,c__30155__auto___34467,G__30850_34437,G__30850_34438__$1,n__5636__auto___34435,jobs,results,process__$1,async))
;
return ((function (__34436,switch__29581__auto__,c__30155__auto___34467,G__30850_34437,G__30850_34438__$1,n__5636__auto___34435,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0 = (function (){
var statearr_30916 = [null,null,null,null,null,null,null];
(statearr_30916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__);

(statearr_30916[(1)] = (1));

return statearr_30916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1 = (function (state_30898){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_30898);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e30918){var ex__29585__auto__ = e30918;
var statearr_30919_34488 = state_30898;
(statearr_30919_34488[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_30898[(4)]))){
var statearr_30920_34489 = state_30898;
(statearr_30920_34489[(1)] = cljs.core.first((state_30898[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34491 = state_30898;
state_30898 = G__34491;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__ = function(state_30898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1.call(this,state_30898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__;
})()
;})(__34436,switch__29581__auto__,c__30155__auto___34467,G__30850_34437,G__30850_34438__$1,n__5636__auto___34435,jobs,results,process__$1,async))
})();
var state__30157__auto__ = (function (){var statearr_30924 = f__30156__auto__();
(statearr_30924[(6)] = c__30155__auto___34467);

return statearr_30924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
});})(__34436,c__30155__auto___34467,G__30850_34437,G__30850_34438__$1,n__5636__auto___34435,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30850_34438__$1)].join('')));

}

var G__34495 = (__34436 + (1));
__34436 = G__34495;
continue;
} else {
}
break;
}

var c__30155__auto___34496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_30949){
var state_val_30950 = (state_30949[(1)]);
if((state_val_30950 === (7))){
var inst_30945 = (state_30949[(2)]);
var state_30949__$1 = state_30949;
var statearr_30956_34498 = state_30949__$1;
(statearr_30956_34498[(2)] = inst_30945);

(statearr_30956_34498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (1))){
var state_30949__$1 = state_30949;
var statearr_30969_34499 = state_30949__$1;
(statearr_30969_34499[(2)] = null);

(statearr_30969_34499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (4))){
var inst_30928 = (state_30949[(7)]);
var inst_30928__$1 = (state_30949[(2)]);
var inst_30929 = (inst_30928__$1 == null);
var state_30949__$1 = (function (){var statearr_30971 = state_30949;
(statearr_30971[(7)] = inst_30928__$1);

return statearr_30971;
})();
if(cljs.core.truth_(inst_30929)){
var statearr_30972_34500 = state_30949__$1;
(statearr_30972_34500[(1)] = (5));

} else {
var statearr_30973_34501 = state_30949__$1;
(statearr_30973_34501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (6))){
var inst_30934 = (state_30949[(8)]);
var inst_30928 = (state_30949[(7)]);
var inst_30934__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30936 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30937 = [inst_30928,inst_30934__$1];
var inst_30938 = (new cljs.core.PersistentVector(null,2,(5),inst_30936,inst_30937,null));
var state_30949__$1 = (function (){var statearr_30978 = state_30949;
(statearr_30978[(8)] = inst_30934__$1);

return statearr_30978;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30949__$1,(8),jobs,inst_30938);
} else {
if((state_val_30950 === (3))){
var inst_30947 = (state_30949[(2)]);
var state_30949__$1 = state_30949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30949__$1,inst_30947);
} else {
if((state_val_30950 === (2))){
var state_30949__$1 = state_30949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30949__$1,(4),from);
} else {
if((state_val_30950 === (9))){
var inst_30942 = (state_30949[(2)]);
var state_30949__$1 = (function (){var statearr_30980 = state_30949;
(statearr_30980[(9)] = inst_30942);

return statearr_30980;
})();
var statearr_30981_34514 = state_30949__$1;
(statearr_30981_34514[(2)] = null);

(statearr_30981_34514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (5))){
var inst_30931 = cljs.core.async.close_BANG_(jobs);
var state_30949__$1 = state_30949;
var statearr_30983_34516 = state_30949__$1;
(statearr_30983_34516[(2)] = inst_30931);

(statearr_30983_34516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30950 === (8))){
var inst_30934 = (state_30949[(8)]);
var inst_30940 = (state_30949[(2)]);
var state_30949__$1 = (function (){var statearr_30984 = state_30949;
(statearr_30984[(10)] = inst_30940);

return statearr_30984;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30949__$1,(9),results,inst_30934);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0 = (function (){
var statearr_30986 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30986[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__);

(statearr_30986[(1)] = (1));

return statearr_30986;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1 = (function (state_30949){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_30949);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e30987){var ex__29585__auto__ = e30987;
var statearr_30988_34518 = state_30949;
(statearr_30988_34518[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_30949[(4)]))){
var statearr_30989_34519 = state_30949;
(statearr_30989_34519[(1)] = cljs.core.first((state_30949[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34520 = state_30949;
state_30949 = G__34520;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__ = function(state_30949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1.call(this,state_30949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_30990 = f__30156__auto__();
(statearr_30990[(6)] = c__30155__auto___34496);

return statearr_30990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


var c__30155__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_31033){
var state_val_31034 = (state_31033[(1)]);
if((state_val_31034 === (7))){
var inst_31029 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
var statearr_31036_34521 = state_31033__$1;
(statearr_31036_34521[(2)] = inst_31029);

(statearr_31036_34521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (20))){
var state_31033__$1 = state_31033;
var statearr_31041_34522 = state_31033__$1;
(statearr_31041_34522[(2)] = null);

(statearr_31041_34522[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (1))){
var state_31033__$1 = state_31033;
var statearr_31043_34523 = state_31033__$1;
(statearr_31043_34523[(2)] = null);

(statearr_31043_34523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (4))){
var inst_30995 = (state_31033[(7)]);
var inst_30995__$1 = (state_31033[(2)]);
var inst_30996 = (inst_30995__$1 == null);
var state_31033__$1 = (function (){var statearr_31047 = state_31033;
(statearr_31047[(7)] = inst_30995__$1);

return statearr_31047;
})();
if(cljs.core.truth_(inst_30996)){
var statearr_31048_34525 = state_31033__$1;
(statearr_31048_34525[(1)] = (5));

} else {
var statearr_31049_34526 = state_31033__$1;
(statearr_31049_34526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (15))){
var inst_31008 = (state_31033[(8)]);
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31033__$1,(18),to,inst_31008);
} else {
if((state_val_31034 === (21))){
var inst_31024 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
var statearr_31052_34531 = state_31033__$1;
(statearr_31052_34531[(2)] = inst_31024);

(statearr_31052_34531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (13))){
var inst_31026 = (state_31033[(2)]);
var state_31033__$1 = (function (){var statearr_31055 = state_31033;
(statearr_31055[(9)] = inst_31026);

return statearr_31055;
})();
var statearr_31059_34534 = state_31033__$1;
(statearr_31059_34534[(2)] = null);

(statearr_31059_34534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (6))){
var inst_30995 = (state_31033[(7)]);
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31033__$1,(11),inst_30995);
} else {
if((state_val_31034 === (17))){
var inst_31016 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
if(cljs.core.truth_(inst_31016)){
var statearr_31067_34539 = state_31033__$1;
(statearr_31067_34539[(1)] = (19));

} else {
var statearr_31071_34540 = state_31033__$1;
(statearr_31071_34540[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (3))){
var inst_31031 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31033__$1,inst_31031);
} else {
if((state_val_31034 === (12))){
var inst_31005 = (state_31033[(10)]);
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31033__$1,(14),inst_31005);
} else {
if((state_val_31034 === (2))){
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31033__$1,(4),results);
} else {
if((state_val_31034 === (19))){
var state_31033__$1 = state_31033;
var statearr_31072_34542 = state_31033__$1;
(statearr_31072_34542[(2)] = null);

(statearr_31072_34542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (11))){
var inst_31005 = (state_31033[(2)]);
var state_31033__$1 = (function (){var statearr_31073 = state_31033;
(statearr_31073[(10)] = inst_31005);

return statearr_31073;
})();
var statearr_31074_34543 = state_31033__$1;
(statearr_31074_34543[(2)] = null);

(statearr_31074_34543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (9))){
var state_31033__$1 = state_31033;
var statearr_31081_34544 = state_31033__$1;
(statearr_31081_34544[(2)] = null);

(statearr_31081_34544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (5))){
var state_31033__$1 = state_31033;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31082_34545 = state_31033__$1;
(statearr_31082_34545[(1)] = (8));

} else {
var statearr_31091_34548 = state_31033__$1;
(statearr_31091_34548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (14))){
var inst_31010 = (state_31033[(11)]);
var inst_31008 = (state_31033[(8)]);
var inst_31008__$1 = (state_31033[(2)]);
var inst_31009 = (inst_31008__$1 == null);
var inst_31010__$1 = cljs.core.not(inst_31009);
var state_31033__$1 = (function (){var statearr_31092 = state_31033;
(statearr_31092[(11)] = inst_31010__$1);

(statearr_31092[(8)] = inst_31008__$1);

return statearr_31092;
})();
if(inst_31010__$1){
var statearr_31094_34550 = state_31033__$1;
(statearr_31094_34550[(1)] = (15));

} else {
var statearr_31098_34551 = state_31033__$1;
(statearr_31098_34551[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (16))){
var inst_31010 = (state_31033[(11)]);
var state_31033__$1 = state_31033;
var statearr_31099_34552 = state_31033__$1;
(statearr_31099_34552[(2)] = inst_31010);

(statearr_31099_34552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (10))){
var inst_31002 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
var statearr_31100_34553 = state_31033__$1;
(statearr_31100_34553[(2)] = inst_31002);

(statearr_31100_34553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (18))){
var inst_31013 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
var statearr_31105_34554 = state_31033__$1;
(statearr_31105_34554[(2)] = inst_31013);

(statearr_31105_34554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (8))){
var inst_30999 = cljs.core.async.close_BANG_(to);
var state_31033__$1 = state_31033;
var statearr_31106_34560 = state_31033__$1;
(statearr_31106_34560[(2)] = inst_30999);

(statearr_31106_34560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0 = (function (){
var statearr_31108 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31108[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__);

(statearr_31108[(1)] = (1));

return statearr_31108;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1 = (function (state_31033){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_31033);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e31110){var ex__29585__auto__ = e31110;
var statearr_31111_34579 = state_31033;
(statearr_31111_34579[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_31033[(4)]))){
var statearr_31116_34585 = state_31033;
(statearr_31116_34585[(1)] = cljs.core.first((state_31033[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34586 = state_31033;
state_31033 = G__34586;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__ = function(state_31033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1.call(this,state_31033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_31120 = f__30156__auto__();
(statearr_31120[(6)] = c__30155__auto__);

return statearr_31120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));

return c__30155__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31123 = arguments.length;
switch (G__31123) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31137 = arguments.length;
switch (G__31137) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31152 = arguments.length;
switch (G__31152) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30155__auto___34591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_31197){
var state_val_31198 = (state_31197[(1)]);
if((state_val_31198 === (7))){
var inst_31193 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
var statearr_31199_34593 = state_31197__$1;
(statearr_31199_34593[(2)] = inst_31193);

(statearr_31199_34593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (1))){
var state_31197__$1 = state_31197;
var statearr_31200_34594 = state_31197__$1;
(statearr_31200_34594[(2)] = null);

(statearr_31200_34594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (4))){
var inst_31168 = (state_31197[(7)]);
var inst_31168__$1 = (state_31197[(2)]);
var inst_31169 = (inst_31168__$1 == null);
var state_31197__$1 = (function (){var statearr_31215 = state_31197;
(statearr_31215[(7)] = inst_31168__$1);

return statearr_31215;
})();
if(cljs.core.truth_(inst_31169)){
var statearr_31216_34595 = state_31197__$1;
(statearr_31216_34595[(1)] = (5));

} else {
var statearr_31217_34596 = state_31197__$1;
(statearr_31217_34596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (13))){
var state_31197__$1 = state_31197;
var statearr_31218_34599 = state_31197__$1;
(statearr_31218_34599[(2)] = null);

(statearr_31218_34599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (6))){
var inst_31168 = (state_31197[(7)]);
var inst_31180 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31168) : p.call(null,inst_31168));
var state_31197__$1 = state_31197;
if(cljs.core.truth_(inst_31180)){
var statearr_31220_34601 = state_31197__$1;
(statearr_31220_34601[(1)] = (9));

} else {
var statearr_31221_34602 = state_31197__$1;
(statearr_31221_34602[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (3))){
var inst_31195 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31197__$1,inst_31195);
} else {
if((state_val_31198 === (12))){
var state_31197__$1 = state_31197;
var statearr_31222_34603 = state_31197__$1;
(statearr_31222_34603[(2)] = null);

(statearr_31222_34603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (2))){
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31197__$1,(4),ch);
} else {
if((state_val_31198 === (11))){
var inst_31168 = (state_31197[(7)]);
var inst_31184 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31197__$1,(8),inst_31184,inst_31168);
} else {
if((state_val_31198 === (9))){
var state_31197__$1 = state_31197;
var statearr_31226_34604 = state_31197__$1;
(statearr_31226_34604[(2)] = tc);

(statearr_31226_34604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (5))){
var inst_31171 = cljs.core.async.close_BANG_(tc);
var inst_31178 = cljs.core.async.close_BANG_(fc);
var state_31197__$1 = (function (){var statearr_31227 = state_31197;
(statearr_31227[(8)] = inst_31171);

return statearr_31227;
})();
var statearr_31228_34606 = state_31197__$1;
(statearr_31228_34606[(2)] = inst_31178);

(statearr_31228_34606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (14))){
var inst_31191 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
var statearr_31229_34607 = state_31197__$1;
(statearr_31229_34607[(2)] = inst_31191);

(statearr_31229_34607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (10))){
var state_31197__$1 = state_31197;
var statearr_31230_34608 = state_31197__$1;
(statearr_31230_34608[(2)] = fc);

(statearr_31230_34608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (8))){
var inst_31186 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
if(cljs.core.truth_(inst_31186)){
var statearr_31236_34610 = state_31197__$1;
(statearr_31236_34610[(1)] = (12));

} else {
var statearr_31237_34611 = state_31197__$1;
(statearr_31237_34611[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29582__auto__ = null;
var cljs$core$async$state_machine__29582__auto____0 = (function (){
var statearr_31238 = [null,null,null,null,null,null,null,null,null];
(statearr_31238[(0)] = cljs$core$async$state_machine__29582__auto__);

(statearr_31238[(1)] = (1));

return statearr_31238;
});
var cljs$core$async$state_machine__29582__auto____1 = (function (state_31197){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_31197);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e31242){var ex__29585__auto__ = e31242;
var statearr_31243_34613 = state_31197;
(statearr_31243_34613[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_31197[(4)]))){
var statearr_31244_34614 = state_31197;
(statearr_31244_34614[(1)] = cljs.core.first((state_31197[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34615 = state_31197;
state_31197 = G__34615;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$state_machine__29582__auto__ = function(state_31197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29582__auto____1.call(this,state_31197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29582__auto____0;
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29582__auto____1;
return cljs$core$async$state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_31245 = f__30156__auto__();
(statearr_31245[(6)] = c__30155__auto___34591);

return statearr_31245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30155__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_31268){
var state_val_31269 = (state_31268[(1)]);
if((state_val_31269 === (7))){
var inst_31264 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
var statearr_31281_34619 = state_31268__$1;
(statearr_31281_34619[(2)] = inst_31264);

(statearr_31281_34619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (1))){
var inst_31247 = init;
var inst_31248 = inst_31247;
var state_31268__$1 = (function (){var statearr_31282 = state_31268;
(statearr_31282[(7)] = inst_31248);

return statearr_31282;
})();
var statearr_31283_34620 = state_31268__$1;
(statearr_31283_34620[(2)] = null);

(statearr_31283_34620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (4))){
var inst_31251 = (state_31268[(8)]);
var inst_31251__$1 = (state_31268[(2)]);
var inst_31252 = (inst_31251__$1 == null);
var state_31268__$1 = (function (){var statearr_31284 = state_31268;
(statearr_31284[(8)] = inst_31251__$1);

return statearr_31284;
})();
if(cljs.core.truth_(inst_31252)){
var statearr_31286_34621 = state_31268__$1;
(statearr_31286_34621[(1)] = (5));

} else {
var statearr_31287_34622 = state_31268__$1;
(statearr_31287_34622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (6))){
var inst_31255 = (state_31268[(9)]);
var inst_31251 = (state_31268[(8)]);
var inst_31248 = (state_31268[(7)]);
var inst_31255__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31248,inst_31251) : f.call(null,inst_31248,inst_31251));
var inst_31256 = cljs.core.reduced_QMARK_(inst_31255__$1);
var state_31268__$1 = (function (){var statearr_31289 = state_31268;
(statearr_31289[(9)] = inst_31255__$1);

return statearr_31289;
})();
if(inst_31256){
var statearr_31290_34624 = state_31268__$1;
(statearr_31290_34624[(1)] = (8));

} else {
var statearr_31291_34625 = state_31268__$1;
(statearr_31291_34625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (3))){
var inst_31266 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31268__$1,inst_31266);
} else {
if((state_val_31269 === (2))){
var state_31268__$1 = state_31268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31268__$1,(4),ch);
} else {
if((state_val_31269 === (9))){
var inst_31255 = (state_31268[(9)]);
var inst_31248 = inst_31255;
var state_31268__$1 = (function (){var statearr_31299 = state_31268;
(statearr_31299[(7)] = inst_31248);

return statearr_31299;
})();
var statearr_31300_34626 = state_31268__$1;
(statearr_31300_34626[(2)] = null);

(statearr_31300_34626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (5))){
var inst_31248 = (state_31268[(7)]);
var state_31268__$1 = state_31268;
var statearr_31301_34631 = state_31268__$1;
(statearr_31301_34631[(2)] = inst_31248);

(statearr_31301_34631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (10))){
var inst_31262 = (state_31268[(2)]);
var state_31268__$1 = state_31268;
var statearr_31305_34635 = state_31268__$1;
(statearr_31305_34635[(2)] = inst_31262);

(statearr_31305_34635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31269 === (8))){
var inst_31255 = (state_31268[(9)]);
var inst_31258 = cljs.core.deref(inst_31255);
var state_31268__$1 = state_31268;
var statearr_31308_34636 = state_31268__$1;
(statearr_31308_34636[(2)] = inst_31258);

(statearr_31308_34636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29582__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29582__auto____0 = (function (){
var statearr_31312 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31312[(0)] = cljs$core$async$reduce_$_state_machine__29582__auto__);

(statearr_31312[(1)] = (1));

return statearr_31312;
});
var cljs$core$async$reduce_$_state_machine__29582__auto____1 = (function (state_31268){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_31268);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e31313){var ex__29585__auto__ = e31313;
var statearr_31314_34637 = state_31268;
(statearr_31314_34637[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_31268[(4)]))){
var statearr_31315_34638 = state_31268;
(statearr_31315_34638[(1)] = cljs.core.first((state_31268[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34639 = state_31268;
state_31268 = G__34639;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29582__auto__ = function(state_31268){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29582__auto____1.call(this,state_31268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29582__auto____0;
cljs$core$async$reduce_$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29582__auto____1;
return cljs$core$async$reduce_$_state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_31318 = f__30156__auto__();
(statearr_31318[(6)] = c__30155__auto__);

return statearr_31318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));

return c__30155__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30155__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_31325){
var state_val_31326 = (state_31325[(1)]);
if((state_val_31326 === (1))){
var inst_31320 = cljs.core.async.reduce(f__$1,init,ch);
var state_31325__$1 = state_31325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31325__$1,(2),inst_31320);
} else {
if((state_val_31326 === (2))){
var inst_31322 = (state_31325[(2)]);
var inst_31323 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31322) : f__$1.call(null,inst_31322));
var state_31325__$1 = state_31325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31325__$1,inst_31323);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29582__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29582__auto____0 = (function (){
var statearr_31329 = [null,null,null,null,null,null,null];
(statearr_31329[(0)] = cljs$core$async$transduce_$_state_machine__29582__auto__);

(statearr_31329[(1)] = (1));

return statearr_31329;
});
var cljs$core$async$transduce_$_state_machine__29582__auto____1 = (function (state_31325){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_31325);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e31331){var ex__29585__auto__ = e31331;
var statearr_31332_34640 = state_31325;
(statearr_31332_34640[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_31325[(4)]))){
var statearr_31333_34641 = state_31325;
(statearr_31333_34641[(1)] = cljs.core.first((state_31325[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34642 = state_31325;
state_31325 = G__34642;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29582__auto__ = function(state_31325){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29582__auto____1.call(this,state_31325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29582__auto____0;
cljs$core$async$transduce_$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29582__auto____1;
return cljs$core$async$transduce_$_state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_31336 = f__30156__auto__();
(statearr_31336[(6)] = c__30155__auto__);

return statearr_31336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));

return c__30155__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31345 = arguments.length;
switch (G__31345) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30155__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_31375){
var state_val_31376 = (state_31375[(1)]);
if((state_val_31376 === (7))){
var inst_31355 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31381_34644 = state_31375__$1;
(statearr_31381_34644[(2)] = inst_31355);

(statearr_31381_34644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (1))){
var inst_31347 = cljs.core.seq(coll);
var inst_31348 = inst_31347;
var state_31375__$1 = (function (){var statearr_31384 = state_31375;
(statearr_31384[(7)] = inst_31348);

return statearr_31384;
})();
var statearr_31385_34645 = state_31375__$1;
(statearr_31385_34645[(2)] = null);

(statearr_31385_34645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (4))){
var inst_31348 = (state_31375[(7)]);
var inst_31353 = cljs.core.first(inst_31348);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31375__$1,(7),ch,inst_31353);
} else {
if((state_val_31376 === (13))){
var inst_31369 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31390_34646 = state_31375__$1;
(statearr_31390_34646[(2)] = inst_31369);

(statearr_31390_34646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (6))){
var inst_31358 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31358)){
var statearr_31392_34648 = state_31375__$1;
(statearr_31392_34648[(1)] = (8));

} else {
var statearr_31393_34649 = state_31375__$1;
(statearr_31393_34649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (3))){
var inst_31373 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31375__$1,inst_31373);
} else {
if((state_val_31376 === (12))){
var state_31375__$1 = state_31375;
var statearr_31394_34651 = state_31375__$1;
(statearr_31394_34651[(2)] = null);

(statearr_31394_34651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (2))){
var inst_31348 = (state_31375[(7)]);
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31348)){
var statearr_31396_34652 = state_31375__$1;
(statearr_31396_34652[(1)] = (4));

} else {
var statearr_31397_34653 = state_31375__$1;
(statearr_31397_34653[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (11))){
var inst_31364 = cljs.core.async.close_BANG_(ch);
var state_31375__$1 = state_31375;
var statearr_31402_34655 = state_31375__$1;
(statearr_31402_34655[(2)] = inst_31364);

(statearr_31402_34655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (9))){
var state_31375__$1 = state_31375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31409_34656 = state_31375__$1;
(statearr_31409_34656[(1)] = (11));

} else {
var statearr_31411_34657 = state_31375__$1;
(statearr_31411_34657[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (5))){
var inst_31348 = (state_31375[(7)]);
var state_31375__$1 = state_31375;
var statearr_31412_34658 = state_31375__$1;
(statearr_31412_34658[(2)] = inst_31348);

(statearr_31412_34658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (10))){
var inst_31371 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31413_34659 = state_31375__$1;
(statearr_31413_34659[(2)] = inst_31371);

(statearr_31413_34659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (8))){
var inst_31348 = (state_31375[(7)]);
var inst_31360 = cljs.core.next(inst_31348);
var inst_31348__$1 = inst_31360;
var state_31375__$1 = (function (){var statearr_31414 = state_31375;
(statearr_31414[(7)] = inst_31348__$1);

return statearr_31414;
})();
var statearr_31415_34660 = state_31375__$1;
(statearr_31415_34660[(2)] = null);

(statearr_31415_34660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29582__auto__ = null;
var cljs$core$async$state_machine__29582__auto____0 = (function (){
var statearr_31416 = [null,null,null,null,null,null,null,null];
(statearr_31416[(0)] = cljs$core$async$state_machine__29582__auto__);

(statearr_31416[(1)] = (1));

return statearr_31416;
});
var cljs$core$async$state_machine__29582__auto____1 = (function (state_31375){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_31375);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e31417){var ex__29585__auto__ = e31417;
var statearr_31418_34661 = state_31375;
(statearr_31418_34661[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_31375[(4)]))){
var statearr_31420_34662 = state_31375;
(statearr_31420_34662[(1)] = cljs.core.first((state_31375[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34663 = state_31375;
state_31375 = G__34663;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$state_machine__29582__auto__ = function(state_31375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29582__auto____1.call(this,state_31375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29582__auto____0;
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29582__auto____1;
return cljs$core$async$state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_31422 = f__30156__auto__();
(statearr_31422[(6)] = c__30155__auto__);

return statearr_31422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));

return c__30155__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31430 = arguments.length;
switch (G__31430) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34677 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34677(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34681 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34681(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34685 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34685(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34686 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34686(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31474 = (function (ch,cs,meta31475){
this.ch = ch;
this.cs = cs;
this.meta31475 = meta31475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31476,meta31475__$1){
var self__ = this;
var _31476__$1 = this;
return (new cljs.core.async.t_cljs$core$async31474(self__.ch,self__.cs,meta31475__$1));
}));

(cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31476){
var self__ = this;
var _31476__$1 = this;
return self__.meta31475;
}));

(cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31475","meta31475",923129970,null)], null);
}));

(cljs.core.async.t_cljs$core$async31474.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31474");

(cljs.core.async.t_cljs$core$async31474.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31474");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31474.
 */
cljs.core.async.__GT_t_cljs$core$async31474 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31474(ch__$1,cs__$1,meta31475){
return (new cljs.core.async.t_cljs$core$async31474(ch__$1,cs__$1,meta31475));
});

}

return (new cljs.core.async.t_cljs$core$async31474(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30155__auto___34699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_31687){
var state_val_31688 = (state_31687[(1)]);
if((state_val_31688 === (7))){
var inst_31679 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31706_34703 = state_31687__$1;
(statearr_31706_34703[(2)] = inst_31679);

(statearr_31706_34703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (20))){
var inst_31548 = (state_31687[(7)]);
var inst_31571 = cljs.core.first(inst_31548);
var inst_31572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31571,(0),null);
var inst_31573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31571,(1),null);
var state_31687__$1 = (function (){var statearr_31716 = state_31687;
(statearr_31716[(8)] = inst_31572);

return statearr_31716;
})();
if(cljs.core.truth_(inst_31573)){
var statearr_31718_34704 = state_31687__$1;
(statearr_31718_34704[(1)] = (22));

} else {
var statearr_31723_34705 = state_31687__$1;
(statearr_31723_34705[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (27))){
var inst_31619 = (state_31687[(9)]);
var inst_31611 = (state_31687[(10)]);
var inst_31510 = (state_31687[(11)]);
var inst_31613 = (state_31687[(12)]);
var inst_31619__$1 = cljs.core._nth(inst_31611,inst_31613);
var inst_31621 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31619__$1,inst_31510,done);
var state_31687__$1 = (function (){var statearr_31729 = state_31687;
(statearr_31729[(9)] = inst_31619__$1);

return statearr_31729;
})();
if(cljs.core.truth_(inst_31621)){
var statearr_31732_34706 = state_31687__$1;
(statearr_31732_34706[(1)] = (30));

} else {
var statearr_31734_34707 = state_31687__$1;
(statearr_31734_34707[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (1))){
var state_31687__$1 = state_31687;
var statearr_31735_34708 = state_31687__$1;
(statearr_31735_34708[(2)] = null);

(statearr_31735_34708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (24))){
var inst_31548 = (state_31687[(7)]);
var inst_31579 = (state_31687[(2)]);
var inst_31580 = cljs.core.next(inst_31548);
var inst_31521 = inst_31580;
var inst_31522 = null;
var inst_31523 = (0);
var inst_31524 = (0);
var state_31687__$1 = (function (){var statearr_31740 = state_31687;
(statearr_31740[(13)] = inst_31523);

(statearr_31740[(14)] = inst_31524);

(statearr_31740[(15)] = inst_31521);

(statearr_31740[(16)] = inst_31522);

(statearr_31740[(17)] = inst_31579);

return statearr_31740;
})();
var statearr_31745_34712 = state_31687__$1;
(statearr_31745_34712[(2)] = null);

(statearr_31745_34712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (39))){
var state_31687__$1 = state_31687;
var statearr_31755_34713 = state_31687__$1;
(statearr_31755_34713[(2)] = null);

(statearr_31755_34713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (4))){
var inst_31510 = (state_31687[(11)]);
var inst_31510__$1 = (state_31687[(2)]);
var inst_31512 = (inst_31510__$1 == null);
var state_31687__$1 = (function (){var statearr_31761 = state_31687;
(statearr_31761[(11)] = inst_31510__$1);

return statearr_31761;
})();
if(cljs.core.truth_(inst_31512)){
var statearr_31763_34717 = state_31687__$1;
(statearr_31763_34717[(1)] = (5));

} else {
var statearr_31766_34718 = state_31687__$1;
(statearr_31766_34718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (15))){
var inst_31523 = (state_31687[(13)]);
var inst_31524 = (state_31687[(14)]);
var inst_31521 = (state_31687[(15)]);
var inst_31522 = (state_31687[(16)]);
var inst_31543 = (state_31687[(2)]);
var inst_31545 = (inst_31524 + (1));
var tmp31747 = inst_31523;
var tmp31748 = inst_31521;
var tmp31749 = inst_31522;
var inst_31521__$1 = tmp31748;
var inst_31522__$1 = tmp31749;
var inst_31523__$1 = tmp31747;
var inst_31524__$1 = inst_31545;
var state_31687__$1 = (function (){var statearr_31769 = state_31687;
(statearr_31769[(13)] = inst_31523__$1);

(statearr_31769[(18)] = inst_31543);

(statearr_31769[(14)] = inst_31524__$1);

(statearr_31769[(15)] = inst_31521__$1);

(statearr_31769[(16)] = inst_31522__$1);

return statearr_31769;
})();
var statearr_31771_34719 = state_31687__$1;
(statearr_31771_34719[(2)] = null);

(statearr_31771_34719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (21))){
var inst_31583 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31779_34720 = state_31687__$1;
(statearr_31779_34720[(2)] = inst_31583);

(statearr_31779_34720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (31))){
var inst_31619 = (state_31687[(9)]);
var inst_31625 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31619);
var state_31687__$1 = state_31687;
var statearr_31782_34721 = state_31687__$1;
(statearr_31782_34721[(2)] = inst_31625);

(statearr_31782_34721[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (32))){
var inst_31610 = (state_31687[(19)]);
var inst_31611 = (state_31687[(10)]);
var inst_31612 = (state_31687[(20)]);
var inst_31613 = (state_31687[(12)]);
var inst_31627 = (state_31687[(2)]);
var inst_31629 = (inst_31613 + (1));
var tmp31774 = inst_31610;
var tmp31775 = inst_31611;
var tmp31776 = inst_31612;
var inst_31610__$1 = tmp31774;
var inst_31611__$1 = tmp31775;
var inst_31612__$1 = tmp31776;
var inst_31613__$1 = inst_31629;
var state_31687__$1 = (function (){var statearr_31785 = state_31687;
(statearr_31785[(19)] = inst_31610__$1);

(statearr_31785[(10)] = inst_31611__$1);

(statearr_31785[(20)] = inst_31612__$1);

(statearr_31785[(21)] = inst_31627);

(statearr_31785[(12)] = inst_31613__$1);

return statearr_31785;
})();
var statearr_31791_34725 = state_31687__$1;
(statearr_31791_34725[(2)] = null);

(statearr_31791_34725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (40))){
var inst_31645 = (state_31687[(22)]);
var inst_31651 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31645);
var state_31687__$1 = state_31687;
var statearr_31797_34726 = state_31687__$1;
(statearr_31797_34726[(2)] = inst_31651);

(statearr_31797_34726[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (33))){
var inst_31632 = (state_31687[(23)]);
var inst_31637 = cljs.core.chunked_seq_QMARK_(inst_31632);
var state_31687__$1 = state_31687;
if(inst_31637){
var statearr_31804_34727 = state_31687__$1;
(statearr_31804_34727[(1)] = (36));

} else {
var statearr_31805_34728 = state_31687__$1;
(statearr_31805_34728[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (13))){
var inst_31535 = (state_31687[(24)]);
var inst_31540 = cljs.core.async.close_BANG_(inst_31535);
var state_31687__$1 = state_31687;
var statearr_31809_34729 = state_31687__$1;
(statearr_31809_34729[(2)] = inst_31540);

(statearr_31809_34729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (22))){
var inst_31572 = (state_31687[(8)]);
var inst_31576 = cljs.core.async.close_BANG_(inst_31572);
var state_31687__$1 = state_31687;
var statearr_31813_34730 = state_31687__$1;
(statearr_31813_34730[(2)] = inst_31576);

(statearr_31813_34730[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (36))){
var inst_31632 = (state_31687[(23)]);
var inst_31639 = cljs.core.chunk_first(inst_31632);
var inst_31640 = cljs.core.chunk_rest(inst_31632);
var inst_31641 = cljs.core.count(inst_31639);
var inst_31610 = inst_31640;
var inst_31611 = inst_31639;
var inst_31612 = inst_31641;
var inst_31613 = (0);
var state_31687__$1 = (function (){var statearr_31821 = state_31687;
(statearr_31821[(19)] = inst_31610);

(statearr_31821[(10)] = inst_31611);

(statearr_31821[(20)] = inst_31612);

(statearr_31821[(12)] = inst_31613);

return statearr_31821;
})();
var statearr_31824_34731 = state_31687__$1;
(statearr_31824_34731[(2)] = null);

(statearr_31824_34731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (41))){
var inst_31632 = (state_31687[(23)]);
var inst_31653 = (state_31687[(2)]);
var inst_31655 = cljs.core.next(inst_31632);
var inst_31610 = inst_31655;
var inst_31611 = null;
var inst_31612 = (0);
var inst_31613 = (0);
var state_31687__$1 = (function (){var statearr_31828 = state_31687;
(statearr_31828[(19)] = inst_31610);

(statearr_31828[(10)] = inst_31611);

(statearr_31828[(20)] = inst_31612);

(statearr_31828[(12)] = inst_31613);

(statearr_31828[(25)] = inst_31653);

return statearr_31828;
})();
var statearr_31830_34732 = state_31687__$1;
(statearr_31830_34732[(2)] = null);

(statearr_31830_34732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (43))){
var state_31687__$1 = state_31687;
var statearr_31835_34733 = state_31687__$1;
(statearr_31835_34733[(2)] = null);

(statearr_31835_34733[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (29))){
var inst_31667 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31841_34734 = state_31687__$1;
(statearr_31841_34734[(2)] = inst_31667);

(statearr_31841_34734[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (44))){
var inst_31676 = (state_31687[(2)]);
var state_31687__$1 = (function (){var statearr_31856 = state_31687;
(statearr_31856[(26)] = inst_31676);

return statearr_31856;
})();
var statearr_31858_34736 = state_31687__$1;
(statearr_31858_34736[(2)] = null);

(statearr_31858_34736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (6))){
var inst_31600 = (state_31687[(27)]);
var inst_31599 = cljs.core.deref(cs);
var inst_31600__$1 = cljs.core.keys(inst_31599);
var inst_31601 = cljs.core.count(inst_31600__$1);
var inst_31602 = cljs.core.reset_BANG_(dctr,inst_31601);
var inst_31607 = cljs.core.seq(inst_31600__$1);
var inst_31610 = inst_31607;
var inst_31611 = null;
var inst_31612 = (0);
var inst_31613 = (0);
var state_31687__$1 = (function (){var statearr_31863 = state_31687;
(statearr_31863[(19)] = inst_31610);

(statearr_31863[(10)] = inst_31611);

(statearr_31863[(20)] = inst_31612);

(statearr_31863[(28)] = inst_31602);

(statearr_31863[(27)] = inst_31600__$1);

(statearr_31863[(12)] = inst_31613);

return statearr_31863;
})();
var statearr_31869_34737 = state_31687__$1;
(statearr_31869_34737[(2)] = null);

(statearr_31869_34737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (28))){
var inst_31632 = (state_31687[(23)]);
var inst_31610 = (state_31687[(19)]);
var inst_31632__$1 = cljs.core.seq(inst_31610);
var state_31687__$1 = (function (){var statearr_31874 = state_31687;
(statearr_31874[(23)] = inst_31632__$1);

return statearr_31874;
})();
if(inst_31632__$1){
var statearr_31876_34738 = state_31687__$1;
(statearr_31876_34738[(1)] = (33));

} else {
var statearr_31877_34739 = state_31687__$1;
(statearr_31877_34739[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (25))){
var inst_31612 = (state_31687[(20)]);
var inst_31613 = (state_31687[(12)]);
var inst_31615 = (inst_31613 < inst_31612);
var inst_31616 = inst_31615;
var state_31687__$1 = state_31687;
if(cljs.core.truth_(inst_31616)){
var statearr_31879_34740 = state_31687__$1;
(statearr_31879_34740[(1)] = (27));

} else {
var statearr_31880_34741 = state_31687__$1;
(statearr_31880_34741[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (34))){
var state_31687__$1 = state_31687;
var statearr_31885_34742 = state_31687__$1;
(statearr_31885_34742[(2)] = null);

(statearr_31885_34742[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (17))){
var state_31687__$1 = state_31687;
var statearr_31888_34743 = state_31687__$1;
(statearr_31888_34743[(2)] = null);

(statearr_31888_34743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (3))){
var inst_31682 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31687__$1,inst_31682);
} else {
if((state_val_31688 === (12))){
var inst_31593 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31894_34744 = state_31687__$1;
(statearr_31894_34744[(2)] = inst_31593);

(statearr_31894_34744[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (2))){
var state_31687__$1 = state_31687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31687__$1,(4),ch);
} else {
if((state_val_31688 === (23))){
var state_31687__$1 = state_31687;
var statearr_31896_34745 = state_31687__$1;
(statearr_31896_34745[(2)] = null);

(statearr_31896_34745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (35))){
var inst_31661 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31901_34746 = state_31687__$1;
(statearr_31901_34746[(2)] = inst_31661);

(statearr_31901_34746[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (19))){
var inst_31548 = (state_31687[(7)]);
var inst_31556 = cljs.core.chunk_first(inst_31548);
var inst_31559 = cljs.core.chunk_rest(inst_31548);
var inst_31560 = cljs.core.count(inst_31556);
var inst_31521 = inst_31559;
var inst_31522 = inst_31556;
var inst_31523 = inst_31560;
var inst_31524 = (0);
var state_31687__$1 = (function (){var statearr_31908 = state_31687;
(statearr_31908[(13)] = inst_31523);

(statearr_31908[(14)] = inst_31524);

(statearr_31908[(15)] = inst_31521);

(statearr_31908[(16)] = inst_31522);

return statearr_31908;
})();
var statearr_31915_34747 = state_31687__$1;
(statearr_31915_34747[(2)] = null);

(statearr_31915_34747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (11))){
var inst_31548 = (state_31687[(7)]);
var inst_31521 = (state_31687[(15)]);
var inst_31548__$1 = cljs.core.seq(inst_31521);
var state_31687__$1 = (function (){var statearr_31920 = state_31687;
(statearr_31920[(7)] = inst_31548__$1);

return statearr_31920;
})();
if(inst_31548__$1){
var statearr_31922_34748 = state_31687__$1;
(statearr_31922_34748[(1)] = (16));

} else {
var statearr_31923_34749 = state_31687__$1;
(statearr_31923_34749[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (9))){
var inst_31595 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31925_34750 = state_31687__$1;
(statearr_31925_34750[(2)] = inst_31595);

(statearr_31925_34750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (5))){
var inst_31518 = cljs.core.deref(cs);
var inst_31519 = cljs.core.seq(inst_31518);
var inst_31521 = inst_31519;
var inst_31522 = null;
var inst_31523 = (0);
var inst_31524 = (0);
var state_31687__$1 = (function (){var statearr_31930 = state_31687;
(statearr_31930[(13)] = inst_31523);

(statearr_31930[(14)] = inst_31524);

(statearr_31930[(15)] = inst_31521);

(statearr_31930[(16)] = inst_31522);

return statearr_31930;
})();
var statearr_31933_34751 = state_31687__$1;
(statearr_31933_34751[(2)] = null);

(statearr_31933_34751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (14))){
var state_31687__$1 = state_31687;
var statearr_31935_34752 = state_31687__$1;
(statearr_31935_34752[(2)] = null);

(statearr_31935_34752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (45))){
var inst_31673 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31937_34753 = state_31687__$1;
(statearr_31937_34753[(2)] = inst_31673);

(statearr_31937_34753[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (26))){
var inst_31600 = (state_31687[(27)]);
var inst_31669 = (state_31687[(2)]);
var inst_31670 = cljs.core.seq(inst_31600);
var state_31687__$1 = (function (){var statearr_31943 = state_31687;
(statearr_31943[(29)] = inst_31669);

return statearr_31943;
})();
if(inst_31670){
var statearr_31946_34758 = state_31687__$1;
(statearr_31946_34758[(1)] = (42));

} else {
var statearr_31949_34759 = state_31687__$1;
(statearr_31949_34759[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (16))){
var inst_31548 = (state_31687[(7)]);
var inst_31551 = cljs.core.chunked_seq_QMARK_(inst_31548);
var state_31687__$1 = state_31687;
if(inst_31551){
var statearr_31951_34760 = state_31687__$1;
(statearr_31951_34760[(1)] = (19));

} else {
var statearr_31952_34761 = state_31687__$1;
(statearr_31952_34761[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (38))){
var inst_31658 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31956_34762 = state_31687__$1;
(statearr_31956_34762[(2)] = inst_31658);

(statearr_31956_34762[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (30))){
var state_31687__$1 = state_31687;
var statearr_31957_34763 = state_31687__$1;
(statearr_31957_34763[(2)] = null);

(statearr_31957_34763[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (10))){
var inst_31524 = (state_31687[(14)]);
var inst_31522 = (state_31687[(16)]);
var inst_31534 = cljs.core._nth(inst_31522,inst_31524);
var inst_31535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31534,(0),null);
var inst_31537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31534,(1),null);
var state_31687__$1 = (function (){var statearr_31962 = state_31687;
(statearr_31962[(24)] = inst_31535);

return statearr_31962;
})();
if(cljs.core.truth_(inst_31537)){
var statearr_31963_34764 = state_31687__$1;
(statearr_31963_34764[(1)] = (13));

} else {
var statearr_31964_34765 = state_31687__$1;
(statearr_31964_34765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (18))){
var inst_31586 = (state_31687[(2)]);
var state_31687__$1 = state_31687;
var statearr_31966_34766 = state_31687__$1;
(statearr_31966_34766[(2)] = inst_31586);

(statearr_31966_34766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (42))){
var state_31687__$1 = state_31687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31687__$1,(45),dchan);
} else {
if((state_val_31688 === (37))){
var inst_31632 = (state_31687[(23)]);
var inst_31645 = (state_31687[(22)]);
var inst_31510 = (state_31687[(11)]);
var inst_31645__$1 = cljs.core.first(inst_31632);
var inst_31646 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31645__$1,inst_31510,done);
var state_31687__$1 = (function (){var statearr_31970 = state_31687;
(statearr_31970[(22)] = inst_31645__$1);

return statearr_31970;
})();
if(cljs.core.truth_(inst_31646)){
var statearr_31972_34770 = state_31687__$1;
(statearr_31972_34770[(1)] = (39));

} else {
var statearr_31973_34771 = state_31687__$1;
(statearr_31973_34771[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31688 === (8))){
var inst_31523 = (state_31687[(13)]);
var inst_31524 = (state_31687[(14)]);
var inst_31526 = (inst_31524 < inst_31523);
var inst_31527 = inst_31526;
var state_31687__$1 = state_31687;
if(cljs.core.truth_(inst_31527)){
var statearr_31981_34772 = state_31687__$1;
(statearr_31981_34772[(1)] = (10));

} else {
var statearr_31982_34773 = state_31687__$1;
(statearr_31982_34773[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29582__auto__ = null;
var cljs$core$async$mult_$_state_machine__29582__auto____0 = (function (){
var statearr_31994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31994[(0)] = cljs$core$async$mult_$_state_machine__29582__auto__);

(statearr_31994[(1)] = (1));

return statearr_31994;
});
var cljs$core$async$mult_$_state_machine__29582__auto____1 = (function (state_31687){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_31687);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e31998){var ex__29585__auto__ = e31998;
var statearr_32001_34774 = state_31687;
(statearr_32001_34774[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_31687[(4)]))){
var statearr_32004_34775 = state_31687;
(statearr_32004_34775[(1)] = cljs.core.first((state_31687[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34776 = state_31687;
state_31687 = G__34776;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29582__auto__ = function(state_31687){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29582__auto____1.call(this,state_31687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29582__auto____0;
cljs$core$async$mult_$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29582__auto____1;
return cljs$core$async$mult_$_state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_32007 = f__30156__auto__();
(statearr_32007[(6)] = c__30155__auto___34699);

return statearr_32007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32015 = arguments.length;
switch (G__32015) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34778 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34778(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34780 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34780(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34785 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34785(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34787 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34787(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34789 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34789(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34791 = arguments.length;
var i__5770__auto___34793 = (0);
while(true){
if((i__5770__auto___34793 < len__5769__auto___34791)){
args__5775__auto__.push((arguments[i__5770__auto___34793]));

var G__34794 = (i__5770__auto___34793 + (1));
i__5770__auto___34793 = G__34794;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32150){
var map__32151 = p__32150;
var map__32151__$1 = cljs.core.__destructure_map(map__32151);
var opts = map__32151__$1;
var statearr_32152_34795 = state;
(statearr_32152_34795[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32157_34796 = state;
(statearr_32157_34796[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_32161_34797 = state;
(statearr_32161_34797[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32128){
var G__32129 = cljs.core.first(seq32128);
var seq32128__$1 = cljs.core.next(seq32128);
var G__32130 = cljs.core.first(seq32128__$1);
var seq32128__$2 = cljs.core.next(seq32128__$1);
var G__32131 = cljs.core.first(seq32128__$2);
var seq32128__$3 = cljs.core.next(seq32128__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32129,G__32130,G__32131,seq32128__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32179 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32180){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32180 = meta32180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32181,meta32180__$1){
var self__ = this;
var _32181__$1 = this;
return (new cljs.core.async.t_cljs$core$async32179(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32180__$1));
}));

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32181){
var self__ = this;
var _32181__$1 = this;
return self__.meta32180;
}));

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32179.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32180","meta32180",-1483584764,null)], null);
}));

(cljs.core.async.t_cljs$core$async32179.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32179");

(cljs.core.async.t_cljs$core$async32179.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32179");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32179.
 */
cljs.core.async.__GT_t_cljs$core$async32179 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32179(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32180){
return (new cljs.core.async.t_cljs$core$async32179(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32180));
});

}

return (new cljs.core.async.t_cljs$core$async32179(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30155__auto___34805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_32304){
var state_val_32305 = (state_32304[(1)]);
if((state_val_32305 === (7))){
var inst_32259 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
if(cljs.core.truth_(inst_32259)){
var statearr_32312_34808 = state_32304__$1;
(statearr_32312_34808[(1)] = (8));

} else {
var statearr_32314_34809 = state_32304__$1;
(statearr_32314_34809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (20))){
var inst_32251 = (state_32304[(7)]);
var state_32304__$1 = state_32304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32304__$1,(23),out,inst_32251);
} else {
if((state_val_32305 === (1))){
var inst_32233 = calc_state();
var inst_32234 = cljs.core.__destructure_map(inst_32233);
var inst_32235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32234,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32234,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32234,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32238 = inst_32233;
var state_32304__$1 = (function (){var statearr_32323 = state_32304;
(statearr_32323[(8)] = inst_32237);

(statearr_32323[(9)] = inst_32236);

(statearr_32323[(10)] = inst_32238);

(statearr_32323[(11)] = inst_32235);

return statearr_32323;
})();
var statearr_32331_34812 = state_32304__$1;
(statearr_32331_34812[(2)] = null);

(statearr_32331_34812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (24))){
var inst_32242 = (state_32304[(12)]);
var inst_32238 = inst_32242;
var state_32304__$1 = (function (){var statearr_32336 = state_32304;
(statearr_32336[(10)] = inst_32238);

return statearr_32336;
})();
var statearr_32340_34813 = state_32304__$1;
(statearr_32340_34813[(2)] = null);

(statearr_32340_34813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (4))){
var inst_32251 = (state_32304[(7)]);
var inst_32254 = (state_32304[(13)]);
var inst_32250 = (state_32304[(2)]);
var inst_32251__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32250,(0),null);
var inst_32252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32250,(1),null);
var inst_32254__$1 = (inst_32251__$1 == null);
var state_32304__$1 = (function (){var statearr_32341 = state_32304;
(statearr_32341[(14)] = inst_32252);

(statearr_32341[(7)] = inst_32251__$1);

(statearr_32341[(13)] = inst_32254__$1);

return statearr_32341;
})();
if(cljs.core.truth_(inst_32254__$1)){
var statearr_32346_34817 = state_32304__$1;
(statearr_32346_34817[(1)] = (5));

} else {
var statearr_32347_34818 = state_32304__$1;
(statearr_32347_34818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (15))){
var inst_32275 = (state_32304[(15)]);
var inst_32243 = (state_32304[(16)]);
var inst_32275__$1 = cljs.core.empty_QMARK_(inst_32243);
var state_32304__$1 = (function (){var statearr_32352 = state_32304;
(statearr_32352[(15)] = inst_32275__$1);

return statearr_32352;
})();
if(inst_32275__$1){
var statearr_32354_34823 = state_32304__$1;
(statearr_32354_34823[(1)] = (17));

} else {
var statearr_32355_34824 = state_32304__$1;
(statearr_32355_34824[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (21))){
var inst_32242 = (state_32304[(12)]);
var inst_32238 = inst_32242;
var state_32304__$1 = (function (){var statearr_32356 = state_32304;
(statearr_32356[(10)] = inst_32238);

return statearr_32356;
})();
var statearr_32357_34825 = state_32304__$1;
(statearr_32357_34825[(2)] = null);

(statearr_32357_34825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (13))){
var inst_32267 = (state_32304[(2)]);
var inst_32268 = calc_state();
var inst_32238 = inst_32268;
var state_32304__$1 = (function (){var statearr_32358 = state_32304;
(statearr_32358[(17)] = inst_32267);

(statearr_32358[(10)] = inst_32238);

return statearr_32358;
})();
var statearr_32359_34826 = state_32304__$1;
(statearr_32359_34826[(2)] = null);

(statearr_32359_34826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (22))){
var inst_32297 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
var statearr_32362_34833 = state_32304__$1;
(statearr_32362_34833[(2)] = inst_32297);

(statearr_32362_34833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (6))){
var inst_32252 = (state_32304[(14)]);
var inst_32257 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32252,change);
var state_32304__$1 = state_32304;
var statearr_32364_34834 = state_32304__$1;
(statearr_32364_34834[(2)] = inst_32257);

(statearr_32364_34834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (25))){
var state_32304__$1 = state_32304;
var statearr_32366_34835 = state_32304__$1;
(statearr_32366_34835[(2)] = null);

(statearr_32366_34835[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (17))){
var inst_32244 = (state_32304[(18)]);
var inst_32252 = (state_32304[(14)]);
var inst_32277 = (inst_32244.cljs$core$IFn$_invoke$arity$1 ? inst_32244.cljs$core$IFn$_invoke$arity$1(inst_32252) : inst_32244.call(null,inst_32252));
var inst_32278 = cljs.core.not(inst_32277);
var state_32304__$1 = state_32304;
var statearr_32368_34836 = state_32304__$1;
(statearr_32368_34836[(2)] = inst_32278);

(statearr_32368_34836[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (3))){
var inst_32301 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32304__$1,inst_32301);
} else {
if((state_val_32305 === (12))){
var state_32304__$1 = state_32304;
var statearr_32373_34837 = state_32304__$1;
(statearr_32373_34837[(2)] = null);

(statearr_32373_34837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (2))){
var inst_32242 = (state_32304[(12)]);
var inst_32238 = (state_32304[(10)]);
var inst_32242__$1 = cljs.core.__destructure_map(inst_32238);
var inst_32243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32242__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32242__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32242__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32304__$1 = (function (){var statearr_32376 = state_32304;
(statearr_32376[(12)] = inst_32242__$1);

(statearr_32376[(18)] = inst_32244);

(statearr_32376[(16)] = inst_32243);

return statearr_32376;
})();
return cljs.core.async.ioc_alts_BANG_(state_32304__$1,(4),inst_32245);
} else {
if((state_val_32305 === (23))){
var inst_32287 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
if(cljs.core.truth_(inst_32287)){
var statearr_32377_34838 = state_32304__$1;
(statearr_32377_34838[(1)] = (24));

} else {
var statearr_32380_34839 = state_32304__$1;
(statearr_32380_34839[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (19))){
var inst_32281 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
var statearr_32381_34840 = state_32304__$1;
(statearr_32381_34840[(2)] = inst_32281);

(statearr_32381_34840[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (11))){
var inst_32252 = (state_32304[(14)]);
var inst_32264 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32252);
var state_32304__$1 = state_32304;
var statearr_32382_34841 = state_32304__$1;
(statearr_32382_34841[(2)] = inst_32264);

(statearr_32382_34841[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (9))){
var inst_32271 = (state_32304[(19)]);
var inst_32252 = (state_32304[(14)]);
var inst_32243 = (state_32304[(16)]);
var inst_32271__$1 = (inst_32243.cljs$core$IFn$_invoke$arity$1 ? inst_32243.cljs$core$IFn$_invoke$arity$1(inst_32252) : inst_32243.call(null,inst_32252));
var state_32304__$1 = (function (){var statearr_32383 = state_32304;
(statearr_32383[(19)] = inst_32271__$1);

return statearr_32383;
})();
if(cljs.core.truth_(inst_32271__$1)){
var statearr_32384_34842 = state_32304__$1;
(statearr_32384_34842[(1)] = (14));

} else {
var statearr_32385_34843 = state_32304__$1;
(statearr_32385_34843[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (5))){
var inst_32254 = (state_32304[(13)]);
var state_32304__$1 = state_32304;
var statearr_32386_34844 = state_32304__$1;
(statearr_32386_34844[(2)] = inst_32254);

(statearr_32386_34844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (14))){
var inst_32271 = (state_32304[(19)]);
var state_32304__$1 = state_32304;
var statearr_32389_34845 = state_32304__$1;
(statearr_32389_34845[(2)] = inst_32271);

(statearr_32389_34845[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (26))){
var inst_32293 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
var statearr_32391_34846 = state_32304__$1;
(statearr_32391_34846[(2)] = inst_32293);

(statearr_32391_34846[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (16))){
var inst_32283 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
if(cljs.core.truth_(inst_32283)){
var statearr_32393_34847 = state_32304__$1;
(statearr_32393_34847[(1)] = (20));

} else {
var statearr_32394_34848 = state_32304__$1;
(statearr_32394_34848[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (10))){
var inst_32299 = (state_32304[(2)]);
var state_32304__$1 = state_32304;
var statearr_32395_34849 = state_32304__$1;
(statearr_32395_34849[(2)] = inst_32299);

(statearr_32395_34849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (18))){
var inst_32275 = (state_32304[(15)]);
var state_32304__$1 = state_32304;
var statearr_32397_34850 = state_32304__$1;
(statearr_32397_34850[(2)] = inst_32275);

(statearr_32397_34850[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32305 === (8))){
var inst_32251 = (state_32304[(7)]);
var inst_32262 = (inst_32251 == null);
var state_32304__$1 = state_32304;
if(cljs.core.truth_(inst_32262)){
var statearr_32399_34851 = state_32304__$1;
(statearr_32399_34851[(1)] = (11));

} else {
var statearr_32402_34858 = state_32304__$1;
(statearr_32402_34858[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29582__auto__ = null;
var cljs$core$async$mix_$_state_machine__29582__auto____0 = (function (){
var statearr_32406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32406[(0)] = cljs$core$async$mix_$_state_machine__29582__auto__);

(statearr_32406[(1)] = (1));

return statearr_32406;
});
var cljs$core$async$mix_$_state_machine__29582__auto____1 = (function (state_32304){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_32304);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e32408){var ex__29585__auto__ = e32408;
var statearr_32409_34859 = state_32304;
(statearr_32409_34859[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_32304[(4)]))){
var statearr_32410_34860 = state_32304;
(statearr_32410_34860[(1)] = cljs.core.first((state_32304[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34861 = state_32304;
state_32304 = G__34861;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29582__auto__ = function(state_32304){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29582__auto____1.call(this,state_32304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29582__auto____0;
cljs$core$async$mix_$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29582__auto____1;
return cljs$core$async$mix_$_state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_32414 = f__30156__auto__();
(statearr_32414[(6)] = c__30155__auto___34805);

return statearr_32414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34863 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34863(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34866 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34866(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34867 = (function() {
var G__34868 = null;
var G__34868__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34868__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34868 = function(p,v){
switch(arguments.length){
case 1:
return G__34868__1.call(this,p);
case 2:
return G__34868__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34868.cljs$core$IFn$_invoke$arity$1 = G__34868__1;
G__34868.cljs$core$IFn$_invoke$arity$2 = G__34868__2;
return G__34868;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32463 = arguments.length;
switch (G__32463) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34867(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34867(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32496 = arguments.length;
switch (G__32496) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32490_SHARP_){
if(cljs.core.truth_((p1__32490_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32490_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32490_SHARP_.call(null,topic)))){
return p1__32490_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32490_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32509 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32510){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32510 = meta32510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32511,meta32510__$1){
var self__ = this;
var _32511__$1 = this;
return (new cljs.core.async.t_cljs$core$async32509(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32510__$1));
}));

(cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32511){
var self__ = this;
var _32511__$1 = this;
return self__.meta32510;
}));

(cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32510","meta32510",1926202222,null)], null);
}));

(cljs.core.async.t_cljs$core$async32509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32509");

(cljs.core.async.t_cljs$core$async32509.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32509.
 */
cljs.core.async.__GT_t_cljs$core$async32509 = (function cljs$core$async$__GT_t_cljs$core$async32509(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32510){
return (new cljs.core.async.t_cljs$core$async32509(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32510));
});

}

return (new cljs.core.async.t_cljs$core$async32509(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30155__auto___34877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_32653){
var state_val_32654 = (state_32653[(1)]);
if((state_val_32654 === (7))){
var inst_32646 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32659_34878 = state_32653__$1;
(statearr_32659_34878[(2)] = inst_32646);

(statearr_32659_34878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (20))){
var state_32653__$1 = state_32653;
var statearr_32660_34879 = state_32653__$1;
(statearr_32660_34879[(2)] = null);

(statearr_32660_34879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (1))){
var state_32653__$1 = state_32653;
var statearr_32671_34880 = state_32653__$1;
(statearr_32671_34880[(2)] = null);

(statearr_32671_34880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (24))){
var inst_32626 = (state_32653[(7)]);
var inst_32638 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32626);
var state_32653__$1 = state_32653;
var statearr_32677_34881 = state_32653__$1;
(statearr_32677_34881[(2)] = inst_32638);

(statearr_32677_34881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (4))){
var inst_32562 = (state_32653[(8)]);
var inst_32562__$1 = (state_32653[(2)]);
var inst_32563 = (inst_32562__$1 == null);
var state_32653__$1 = (function (){var statearr_32680 = state_32653;
(statearr_32680[(8)] = inst_32562__$1);

return statearr_32680;
})();
if(cljs.core.truth_(inst_32563)){
var statearr_32685_34888 = state_32653__$1;
(statearr_32685_34888[(1)] = (5));

} else {
var statearr_32686_34889 = state_32653__$1;
(statearr_32686_34889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (15))){
var inst_32620 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32691_34890 = state_32653__$1;
(statearr_32691_34890[(2)] = inst_32620);

(statearr_32691_34890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (21))){
var inst_32643 = (state_32653[(2)]);
var state_32653__$1 = (function (){var statearr_32694 = state_32653;
(statearr_32694[(9)] = inst_32643);

return statearr_32694;
})();
var statearr_32695_34891 = state_32653__$1;
(statearr_32695_34891[(2)] = null);

(statearr_32695_34891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (13))){
var inst_32588 = (state_32653[(10)]);
var inst_32590 = cljs.core.chunked_seq_QMARK_(inst_32588);
var state_32653__$1 = state_32653;
if(inst_32590){
var statearr_32697_34892 = state_32653__$1;
(statearr_32697_34892[(1)] = (16));

} else {
var statearr_32698_34893 = state_32653__$1;
(statearr_32698_34893[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (22))){
var inst_32635 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
if(cljs.core.truth_(inst_32635)){
var statearr_32699_34894 = state_32653__$1;
(statearr_32699_34894[(1)] = (23));

} else {
var statearr_32700_34895 = state_32653__$1;
(statearr_32700_34895[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (6))){
var inst_32562 = (state_32653[(8)]);
var inst_32626 = (state_32653[(7)]);
var inst_32628 = (state_32653[(11)]);
var inst_32626__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32562) : topic_fn.call(null,inst_32562));
var inst_32627 = cljs.core.deref(mults);
var inst_32628__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32627,inst_32626__$1);
var state_32653__$1 = (function (){var statearr_32702 = state_32653;
(statearr_32702[(7)] = inst_32626__$1);

(statearr_32702[(11)] = inst_32628__$1);

return statearr_32702;
})();
if(cljs.core.truth_(inst_32628__$1)){
var statearr_32703_34896 = state_32653__$1;
(statearr_32703_34896[(1)] = (19));

} else {
var statearr_32704_34897 = state_32653__$1;
(statearr_32704_34897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (25))){
var inst_32640 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32708_34898 = state_32653__$1;
(statearr_32708_34898[(2)] = inst_32640);

(statearr_32708_34898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (17))){
var inst_32588 = (state_32653[(10)]);
var inst_32607 = cljs.core.first(inst_32588);
var inst_32611 = cljs.core.async.muxch_STAR_(inst_32607);
var inst_32612 = cljs.core.async.close_BANG_(inst_32611);
var inst_32614 = cljs.core.next(inst_32588);
var inst_32573 = inst_32614;
var inst_32574 = null;
var inst_32575 = (0);
var inst_32576 = (0);
var state_32653__$1 = (function (){var statearr_32715 = state_32653;
(statearr_32715[(12)] = inst_32612);

(statearr_32715[(13)] = inst_32573);

(statearr_32715[(14)] = inst_32574);

(statearr_32715[(15)] = inst_32575);

(statearr_32715[(16)] = inst_32576);

return statearr_32715;
})();
var statearr_32737_34899 = state_32653__$1;
(statearr_32737_34899[(2)] = null);

(statearr_32737_34899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (3))){
var inst_32648 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32653__$1,inst_32648);
} else {
if((state_val_32654 === (12))){
var inst_32622 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32742_34900 = state_32653__$1;
(statearr_32742_34900[(2)] = inst_32622);

(statearr_32742_34900[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (2))){
var state_32653__$1 = state_32653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32653__$1,(4),ch);
} else {
if((state_val_32654 === (23))){
var state_32653__$1 = state_32653;
var statearr_32749_34901 = state_32653__$1;
(statearr_32749_34901[(2)] = null);

(statearr_32749_34901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (19))){
var inst_32562 = (state_32653[(8)]);
var inst_32628 = (state_32653[(11)]);
var inst_32633 = cljs.core.async.muxch_STAR_(inst_32628);
var state_32653__$1 = state_32653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32653__$1,(22),inst_32633,inst_32562);
} else {
if((state_val_32654 === (11))){
var inst_32573 = (state_32653[(13)]);
var inst_32588 = (state_32653[(10)]);
var inst_32588__$1 = cljs.core.seq(inst_32573);
var state_32653__$1 = (function (){var statearr_32759 = state_32653;
(statearr_32759[(10)] = inst_32588__$1);

return statearr_32759;
})();
if(inst_32588__$1){
var statearr_32760_34906 = state_32653__$1;
(statearr_32760_34906[(1)] = (13));

} else {
var statearr_32761_34907 = state_32653__$1;
(statearr_32761_34907[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (9))){
var inst_32624 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32764_34908 = state_32653__$1;
(statearr_32764_34908[(2)] = inst_32624);

(statearr_32764_34908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (5))){
var inst_32570 = cljs.core.deref(mults);
var inst_32571 = cljs.core.vals(inst_32570);
var inst_32572 = cljs.core.seq(inst_32571);
var inst_32573 = inst_32572;
var inst_32574 = null;
var inst_32575 = (0);
var inst_32576 = (0);
var state_32653__$1 = (function (){var statearr_32770 = state_32653;
(statearr_32770[(13)] = inst_32573);

(statearr_32770[(14)] = inst_32574);

(statearr_32770[(15)] = inst_32575);

(statearr_32770[(16)] = inst_32576);

return statearr_32770;
})();
var statearr_32771_34913 = state_32653__$1;
(statearr_32771_34913[(2)] = null);

(statearr_32771_34913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (14))){
var state_32653__$1 = state_32653;
var statearr_32780_34914 = state_32653__$1;
(statearr_32780_34914[(2)] = null);

(statearr_32780_34914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (16))){
var inst_32588 = (state_32653[(10)]);
var inst_32598 = cljs.core.chunk_first(inst_32588);
var inst_32599 = cljs.core.chunk_rest(inst_32588);
var inst_32600 = cljs.core.count(inst_32598);
var inst_32573 = inst_32599;
var inst_32574 = inst_32598;
var inst_32575 = inst_32600;
var inst_32576 = (0);
var state_32653__$1 = (function (){var statearr_32781 = state_32653;
(statearr_32781[(13)] = inst_32573);

(statearr_32781[(14)] = inst_32574);

(statearr_32781[(15)] = inst_32575);

(statearr_32781[(16)] = inst_32576);

return statearr_32781;
})();
var statearr_32784_34915 = state_32653__$1;
(statearr_32784_34915[(2)] = null);

(statearr_32784_34915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (10))){
var inst_32573 = (state_32653[(13)]);
var inst_32574 = (state_32653[(14)]);
var inst_32575 = (state_32653[(15)]);
var inst_32576 = (state_32653[(16)]);
var inst_32582 = cljs.core._nth(inst_32574,inst_32576);
var inst_32583 = cljs.core.async.muxch_STAR_(inst_32582);
var inst_32584 = cljs.core.async.close_BANG_(inst_32583);
var inst_32585 = (inst_32576 + (1));
var tmp32777 = inst_32573;
var tmp32778 = inst_32574;
var tmp32779 = inst_32575;
var inst_32573__$1 = tmp32777;
var inst_32574__$1 = tmp32778;
var inst_32575__$1 = tmp32779;
var inst_32576__$1 = inst_32585;
var state_32653__$1 = (function (){var statearr_32790 = state_32653;
(statearr_32790[(17)] = inst_32584);

(statearr_32790[(13)] = inst_32573__$1);

(statearr_32790[(14)] = inst_32574__$1);

(statearr_32790[(15)] = inst_32575__$1);

(statearr_32790[(16)] = inst_32576__$1);

return statearr_32790;
})();
var statearr_32795_34916 = state_32653__$1;
(statearr_32795_34916[(2)] = null);

(statearr_32795_34916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (18))){
var inst_32617 = (state_32653[(2)]);
var state_32653__$1 = state_32653;
var statearr_32801_34917 = state_32653__$1;
(statearr_32801_34917[(2)] = inst_32617);

(statearr_32801_34917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32654 === (8))){
var inst_32575 = (state_32653[(15)]);
var inst_32576 = (state_32653[(16)]);
var inst_32578 = (inst_32576 < inst_32575);
var inst_32579 = inst_32578;
var state_32653__$1 = state_32653;
if(cljs.core.truth_(inst_32579)){
var statearr_32807_34918 = state_32653__$1;
(statearr_32807_34918[(1)] = (10));

} else {
var statearr_32809_34919 = state_32653__$1;
(statearr_32809_34919[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29582__auto__ = null;
var cljs$core$async$state_machine__29582__auto____0 = (function (){
var statearr_32828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32828[(0)] = cljs$core$async$state_machine__29582__auto__);

(statearr_32828[(1)] = (1));

return statearr_32828;
});
var cljs$core$async$state_machine__29582__auto____1 = (function (state_32653){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_32653);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e32836){var ex__29585__auto__ = e32836;
var statearr_32837_34921 = state_32653;
(statearr_32837_34921[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_32653[(4)]))){
var statearr_32846_34922 = state_32653;
(statearr_32846_34922[(1)] = cljs.core.first((state_32653[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34927 = state_32653;
state_32653 = G__34927;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$state_machine__29582__auto__ = function(state_32653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29582__auto____1.call(this,state_32653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29582__auto____0;
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29582__auto____1;
return cljs$core$async$state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_32853 = f__30156__auto__();
(statearr_32853[(6)] = c__30155__auto___34877);

return statearr_32853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32856 = arguments.length;
switch (G__32856) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32860 = arguments.length;
switch (G__32860) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32867 = arguments.length;
switch (G__32867) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__30155__auto___34933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_32944){
var state_val_32945 = (state_32944[(1)]);
if((state_val_32945 === (7))){
var state_32944__$1 = state_32944;
var statearr_32946_34934 = state_32944__$1;
(statearr_32946_34934[(2)] = null);

(statearr_32946_34934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (1))){
var state_32944__$1 = state_32944;
var statearr_32947_34935 = state_32944__$1;
(statearr_32947_34935[(2)] = null);

(statearr_32947_34935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (4))){
var inst_32882 = (state_32944[(7)]);
var inst_32884 = (state_32944[(8)]);
var inst_32889 = (inst_32884 < inst_32882);
var state_32944__$1 = state_32944;
if(cljs.core.truth_(inst_32889)){
var statearr_32948_34936 = state_32944__$1;
(statearr_32948_34936[(1)] = (6));

} else {
var statearr_32949_34937 = state_32944__$1;
(statearr_32949_34937[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (15))){
var inst_32923 = (state_32944[(9)]);
var inst_32928 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32923);
var state_32944__$1 = state_32944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32944__$1,(17),out,inst_32928);
} else {
if((state_val_32945 === (13))){
var inst_32923 = (state_32944[(9)]);
var inst_32923__$1 = (state_32944[(2)]);
var inst_32924 = cljs.core.some(cljs.core.nil_QMARK_,inst_32923__$1);
var state_32944__$1 = (function (){var statearr_32955 = state_32944;
(statearr_32955[(9)] = inst_32923__$1);

return statearr_32955;
})();
if(cljs.core.truth_(inst_32924)){
var statearr_32956_34939 = state_32944__$1;
(statearr_32956_34939[(1)] = (14));

} else {
var statearr_32957_34940 = state_32944__$1;
(statearr_32957_34940[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (6))){
var state_32944__$1 = state_32944;
var statearr_32960_34941 = state_32944__$1;
(statearr_32960_34941[(2)] = null);

(statearr_32960_34941[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (17))){
var inst_32930 = (state_32944[(2)]);
var state_32944__$1 = (function (){var statearr_32975 = state_32944;
(statearr_32975[(10)] = inst_32930);

return statearr_32975;
})();
var statearr_32977_34943 = state_32944__$1;
(statearr_32977_34943[(2)] = null);

(statearr_32977_34943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (3))){
var inst_32935 = (state_32944[(2)]);
var state_32944__$1 = state_32944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32944__$1,inst_32935);
} else {
if((state_val_32945 === (12))){
var _ = (function (){var statearr_32982 = state_32944;
(statearr_32982[(4)] = cljs.core.rest((state_32944[(4)])));

return statearr_32982;
})();
var state_32944__$1 = state_32944;
var ex32971 = (state_32944__$1[(2)]);
var statearr_32987_34945 = state_32944__$1;
(statearr_32987_34945[(5)] = ex32971);


if((ex32971 instanceof Object)){
var statearr_32993_34946 = state_32944__$1;
(statearr_32993_34946[(1)] = (11));

(statearr_32993_34946[(5)] = null);

} else {
throw ex32971;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (2))){
var inst_32881 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32882 = cnt;
var inst_32884 = (0);
var state_32944__$1 = (function (){var statearr_33000 = state_32944;
(statearr_33000[(7)] = inst_32882);

(statearr_33000[(11)] = inst_32881);

(statearr_33000[(8)] = inst_32884);

return statearr_33000;
})();
var statearr_33001_34948 = state_32944__$1;
(statearr_33001_34948[(2)] = null);

(statearr_33001_34948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (11))){
var inst_32893 = (state_32944[(2)]);
var inst_32894 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32944__$1 = (function (){var statearr_33006 = state_32944;
(statearr_33006[(12)] = inst_32893);

return statearr_33006;
})();
var statearr_33008_34949 = state_32944__$1;
(statearr_33008_34949[(2)] = inst_32894);

(statearr_33008_34949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (9))){
var inst_32884 = (state_32944[(8)]);
var _ = (function (){var statearr_33020 = state_32944;
(statearr_33020[(4)] = cljs.core.cons((12),(state_32944[(4)])));

return statearr_33020;
})();
var inst_32901 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32884) : chs__$1.call(null,inst_32884));
var inst_32902 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32884) : done.call(null,inst_32884));
var inst_32903 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32901,inst_32902);
var ___$1 = (function (){var statearr_33021 = state_32944;
(statearr_33021[(4)] = cljs.core.rest((state_32944[(4)])));

return statearr_33021;
})();
var state_32944__$1 = state_32944;
var statearr_33024_34955 = state_32944__$1;
(statearr_33024_34955[(2)] = inst_32903);

(statearr_33024_34955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (5))){
var inst_32917 = (state_32944[(2)]);
var state_32944__$1 = (function (){var statearr_33029 = state_32944;
(statearr_33029[(13)] = inst_32917);

return statearr_33029;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32944__$1,(13),dchan);
} else {
if((state_val_32945 === (14))){
var inst_32926 = cljs.core.async.close_BANG_(out);
var state_32944__$1 = state_32944;
var statearr_33041_34957 = state_32944__$1;
(statearr_33041_34957[(2)] = inst_32926);

(statearr_33041_34957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (16))){
var inst_32933 = (state_32944[(2)]);
var state_32944__$1 = state_32944;
var statearr_33047_34959 = state_32944__$1;
(statearr_33047_34959[(2)] = inst_32933);

(statearr_33047_34959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (10))){
var inst_32884 = (state_32944[(8)]);
var inst_32906 = (state_32944[(2)]);
var inst_32911 = (inst_32884 + (1));
var inst_32884__$1 = inst_32911;
var state_32944__$1 = (function (){var statearr_33049 = state_32944;
(statearr_33049[(14)] = inst_32906);

(statearr_33049[(8)] = inst_32884__$1);

return statearr_33049;
})();
var statearr_33054_34962 = state_32944__$1;
(statearr_33054_34962[(2)] = null);

(statearr_33054_34962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (8))){
var inst_32915 = (state_32944[(2)]);
var state_32944__$1 = state_32944;
var statearr_33055_34963 = state_32944__$1;
(statearr_33055_34963[(2)] = inst_32915);

(statearr_33055_34963[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29582__auto__ = null;
var cljs$core$async$state_machine__29582__auto____0 = (function (){
var statearr_33057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33057[(0)] = cljs$core$async$state_machine__29582__auto__);

(statearr_33057[(1)] = (1));

return statearr_33057;
});
var cljs$core$async$state_machine__29582__auto____1 = (function (state_32944){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_32944);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e33058){var ex__29585__auto__ = e33058;
var statearr_33059_34965 = state_32944;
(statearr_33059_34965[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_32944[(4)]))){
var statearr_33060_34966 = state_32944;
(statearr_33060_34966[(1)] = cljs.core.first((state_32944[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34967 = state_32944;
state_32944 = G__34967;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$state_machine__29582__auto__ = function(state_32944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29582__auto____1.call(this,state_32944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29582__auto____0;
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29582__auto____1;
return cljs$core$async$state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_33061 = f__30156__auto__();
(statearr_33061[(6)] = c__30155__auto___34933);

return statearr_33061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33068 = arguments.length;
switch (G__33068) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30155__auto___34970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_33113){
var state_val_33114 = (state_33113[(1)]);
if((state_val_33114 === (7))){
var inst_33090 = (state_33113[(7)]);
var inst_33091 = (state_33113[(8)]);
var inst_33090__$1 = (state_33113[(2)]);
var inst_33091__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33090__$1,(0),null);
var inst_33092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33090__$1,(1),null);
var inst_33094 = (inst_33091__$1 == null);
var state_33113__$1 = (function (){var statearr_33118 = state_33113;
(statearr_33118[(7)] = inst_33090__$1);

(statearr_33118[(8)] = inst_33091__$1);

(statearr_33118[(9)] = inst_33092);

return statearr_33118;
})();
if(cljs.core.truth_(inst_33094)){
var statearr_33119_34971 = state_33113__$1;
(statearr_33119_34971[(1)] = (8));

} else {
var statearr_33120_34972 = state_33113__$1;
(statearr_33120_34972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33114 === (1))){
var inst_33077 = cljs.core.vec(chs);
var inst_33078 = inst_33077;
var state_33113__$1 = (function (){var statearr_33125 = state_33113;
(statearr_33125[(10)] = inst_33078);

return statearr_33125;
})();
var statearr_33126_34973 = state_33113__$1;
(statearr_33126_34973[(2)] = null);

(statearr_33126_34973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33114 === (4))){
var inst_33078 = (state_33113[(10)]);
var state_33113__$1 = state_33113;
return cljs.core.async.ioc_alts_BANG_(state_33113__$1,(7),inst_33078);
} else {
if((state_val_33114 === (6))){
var inst_33108 = (state_33113[(2)]);
var state_33113__$1 = state_33113;
var statearr_33134_34974 = state_33113__$1;
(statearr_33134_34974[(2)] = inst_33108);

(statearr_33134_34974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33114 === (3))){
var inst_33110 = (state_33113[(2)]);
var state_33113__$1 = state_33113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33113__$1,inst_33110);
} else {
if((state_val_33114 === (2))){
var inst_33078 = (state_33113[(10)]);
var inst_33081 = cljs.core.count(inst_33078);
var inst_33082 = (inst_33081 > (0));
var state_33113__$1 = state_33113;
if(cljs.core.truth_(inst_33082)){
var statearr_33155_34979 = state_33113__$1;
(statearr_33155_34979[(1)] = (4));

} else {
var statearr_33160_34980 = state_33113__$1;
(statearr_33160_34980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33114 === (11))){
var inst_33078 = (state_33113[(10)]);
var inst_33101 = (state_33113[(2)]);
var tmp33142 = inst_33078;
var inst_33078__$1 = tmp33142;
var state_33113__$1 = (function (){var statearr_33161 = state_33113;
(statearr_33161[(11)] = inst_33101);

(statearr_33161[(10)] = inst_33078__$1);

return statearr_33161;
})();
var statearr_33162_34985 = state_33113__$1;
(statearr_33162_34985[(2)] = null);

(statearr_33162_34985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33114 === (9))){
var inst_33091 = (state_33113[(8)]);
var state_33113__$1 = state_33113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33113__$1,(11),out,inst_33091);
} else {
if((state_val_33114 === (5))){
var inst_33106 = cljs.core.async.close_BANG_(out);
var state_33113__$1 = state_33113;
var statearr_33167_34989 = state_33113__$1;
(statearr_33167_34989[(2)] = inst_33106);

(statearr_33167_34989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33114 === (10))){
var inst_33104 = (state_33113[(2)]);
var state_33113__$1 = state_33113;
var statearr_33169_34991 = state_33113__$1;
(statearr_33169_34991[(2)] = inst_33104);

(statearr_33169_34991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33114 === (8))){
var inst_33090 = (state_33113[(7)]);
var inst_33078 = (state_33113[(10)]);
var inst_33091 = (state_33113[(8)]);
var inst_33092 = (state_33113[(9)]);
var inst_33096 = (function (){var cs = inst_33078;
var vec__33084 = inst_33090;
var v = inst_33091;
var c = inst_33092;
return (function (p1__33064_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33064_SHARP_);
});
})();
var inst_33097 = cljs.core.filterv(inst_33096,inst_33078);
var inst_33078__$1 = inst_33097;
var state_33113__$1 = (function (){var statearr_33170 = state_33113;
(statearr_33170[(10)] = inst_33078__$1);

return statearr_33170;
})();
var statearr_33171_34992 = state_33113__$1;
(statearr_33171_34992[(2)] = null);

(statearr_33171_34992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29582__auto__ = null;
var cljs$core$async$state_machine__29582__auto____0 = (function (){
var statearr_33174 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33174[(0)] = cljs$core$async$state_machine__29582__auto__);

(statearr_33174[(1)] = (1));

return statearr_33174;
});
var cljs$core$async$state_machine__29582__auto____1 = (function (state_33113){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_33113);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e33175){var ex__29585__auto__ = e33175;
var statearr_33177_34998 = state_33113;
(statearr_33177_34998[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_33113[(4)]))){
var statearr_33179_34999 = state_33113;
(statearr_33179_34999[(1)] = cljs.core.first((state_33113[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35004 = state_33113;
state_33113 = G__35004;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$state_machine__29582__auto__ = function(state_33113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29582__auto____1.call(this,state_33113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29582__auto____0;
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29582__auto____1;
return cljs$core$async$state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_33184 = f__30156__auto__();
(statearr_33184[(6)] = c__30155__auto___34970);

return statearr_33184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33192 = arguments.length;
switch (G__33192) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30155__auto___35007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_33224){
var state_val_33225 = (state_33224[(1)]);
if((state_val_33225 === (7))){
var inst_33206 = (state_33224[(7)]);
var inst_33206__$1 = (state_33224[(2)]);
var inst_33207 = (inst_33206__$1 == null);
var inst_33208 = cljs.core.not(inst_33207);
var state_33224__$1 = (function (){var statearr_33226 = state_33224;
(statearr_33226[(7)] = inst_33206__$1);

return statearr_33226;
})();
if(inst_33208){
var statearr_33229_35013 = state_33224__$1;
(statearr_33229_35013[(1)] = (8));

} else {
var statearr_33232_35014 = state_33224__$1;
(statearr_33232_35014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (1))){
var inst_33198 = (0);
var state_33224__$1 = (function (){var statearr_33235 = state_33224;
(statearr_33235[(8)] = inst_33198);

return statearr_33235;
})();
var statearr_33236_35015 = state_33224__$1;
(statearr_33236_35015[(2)] = null);

(statearr_33236_35015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (4))){
var state_33224__$1 = state_33224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33224__$1,(7),ch);
} else {
if((state_val_33225 === (6))){
var inst_33219 = (state_33224[(2)]);
var state_33224__$1 = state_33224;
var statearr_33238_35016 = state_33224__$1;
(statearr_33238_35016[(2)] = inst_33219);

(statearr_33238_35016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (3))){
var inst_33221 = (state_33224[(2)]);
var inst_33222 = cljs.core.async.close_BANG_(out);
var state_33224__$1 = (function (){var statearr_33243 = state_33224;
(statearr_33243[(9)] = inst_33221);

return statearr_33243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33224__$1,inst_33222);
} else {
if((state_val_33225 === (2))){
var inst_33198 = (state_33224[(8)]);
var inst_33202 = (inst_33198 < n);
var state_33224__$1 = state_33224;
if(cljs.core.truth_(inst_33202)){
var statearr_33244_35017 = state_33224__$1;
(statearr_33244_35017[(1)] = (4));

} else {
var statearr_33245_35022 = state_33224__$1;
(statearr_33245_35022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (11))){
var inst_33198 = (state_33224[(8)]);
var inst_33211 = (state_33224[(2)]);
var inst_33212 = (inst_33198 + (1));
var inst_33198__$1 = inst_33212;
var state_33224__$1 = (function (){var statearr_33246 = state_33224;
(statearr_33246[(10)] = inst_33211);

(statearr_33246[(8)] = inst_33198__$1);

return statearr_33246;
})();
var statearr_33247_35023 = state_33224__$1;
(statearr_33247_35023[(2)] = null);

(statearr_33247_35023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (9))){
var state_33224__$1 = state_33224;
var statearr_33248_35024 = state_33224__$1;
(statearr_33248_35024[(2)] = null);

(statearr_33248_35024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (5))){
var state_33224__$1 = state_33224;
var statearr_33251_35025 = state_33224__$1;
(statearr_33251_35025[(2)] = null);

(statearr_33251_35025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (10))){
var inst_33216 = (state_33224[(2)]);
var state_33224__$1 = state_33224;
var statearr_33261_35027 = state_33224__$1;
(statearr_33261_35027[(2)] = inst_33216);

(statearr_33261_35027[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33225 === (8))){
var inst_33206 = (state_33224[(7)]);
var state_33224__$1 = state_33224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33224__$1,(11),out,inst_33206);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29582__auto__ = null;
var cljs$core$async$state_machine__29582__auto____0 = (function (){
var statearr_33275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33275[(0)] = cljs$core$async$state_machine__29582__auto__);

(statearr_33275[(1)] = (1));

return statearr_33275;
});
var cljs$core$async$state_machine__29582__auto____1 = (function (state_33224){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_33224);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e33276){var ex__29585__auto__ = e33276;
var statearr_33279_35028 = state_33224;
(statearr_33279_35028[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_33224[(4)]))){
var statearr_33280_35029 = state_33224;
(statearr_33280_35029[(1)] = cljs.core.first((state_33224[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35030 = state_33224;
state_33224 = G__35030;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$state_machine__29582__auto__ = function(state_33224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29582__auto____1.call(this,state_33224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29582__auto____0;
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29582__auto____1;
return cljs$core$async$state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_33281 = f__30156__auto__();
(statearr_33281[(6)] = c__30155__auto___35007);

return statearr_33281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33298 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33298 = (function (f,ch,meta33299){
this.f = f;
this.ch = ch;
this.meta33299 = meta33299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33300,meta33299__$1){
var self__ = this;
var _33300__$1 = this;
return (new cljs.core.async.t_cljs$core$async33298(self__.f,self__.ch,meta33299__$1));
}));

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33300){
var self__ = this;
var _33300__$1 = this;
return self__.meta33299;
}));

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33314 = (function (f,ch,meta33299,_,fn1,meta33315){
this.f = f;
this.ch = ch;
this.meta33299 = meta33299;
this._ = _;
this.fn1 = fn1;
this.meta33315 = meta33315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33316,meta33315__$1){
var self__ = this;
var _33316__$1 = this;
return (new cljs.core.async.t_cljs$core$async33314(self__.f,self__.ch,self__.meta33299,self__._,self__.fn1,meta33315__$1));
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33316){
var self__ = this;
var _33316__$1 = this;
return self__.meta33315;
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33282_SHARP_){
var G__33322 = (((p1__33282_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33282_SHARP_) : self__.f.call(null,p1__33282_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33322) : f1.call(null,G__33322));
});
}));

(cljs.core.async.t_cljs$core$async33314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33299","meta33299",-1730213020,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33298","cljs.core.async/t_cljs$core$async33298",-1172223294,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33315","meta33315",-1858914558,null)], null);
}));

(cljs.core.async.t_cljs$core$async33314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33314");

(cljs.core.async.t_cljs$core$async33314.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33314.
 */
cljs.core.async.__GT_t_cljs$core$async33314 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33314(f__$1,ch__$1,meta33299__$1,___$2,fn1__$1,meta33315){
return (new cljs.core.async.t_cljs$core$async33314(f__$1,ch__$1,meta33299__$1,___$2,fn1__$1,meta33315));
});

}

return (new cljs.core.async.t_cljs$core$async33314(self__.f,self__.ch,self__.meta33299,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33325 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33325) : self__.f.call(null,G__33325));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33298.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33299","meta33299",-1730213020,null)], null);
}));

(cljs.core.async.t_cljs$core$async33298.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33298");

(cljs.core.async.t_cljs$core$async33298.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33298");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33298.
 */
cljs.core.async.__GT_t_cljs$core$async33298 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33298(f__$1,ch__$1,meta33299){
return (new cljs.core.async.t_cljs$core$async33298(f__$1,ch__$1,meta33299));
});

}

return (new cljs.core.async.t_cljs$core$async33298(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33331 = (function (f,ch,meta33332){
this.f = f;
this.ch = ch;
this.meta33332 = meta33332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33333,meta33332__$1){
var self__ = this;
var _33333__$1 = this;
return (new cljs.core.async.t_cljs$core$async33331(self__.f,self__.ch,meta33332__$1));
}));

(cljs.core.async.t_cljs$core$async33331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33333){
var self__ = this;
var _33333__$1 = this;
return self__.meta33332;
}));

(cljs.core.async.t_cljs$core$async33331.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33331.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33331.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33331.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33332","meta33332",628184575,null)], null);
}));

(cljs.core.async.t_cljs$core$async33331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33331");

(cljs.core.async.t_cljs$core$async33331.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33331.
 */
cljs.core.async.__GT_t_cljs$core$async33331 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33331(f__$1,ch__$1,meta33332){
return (new cljs.core.async.t_cljs$core$async33331(f__$1,ch__$1,meta33332));
});

}

return (new cljs.core.async.t_cljs$core$async33331(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33343 = (function (p,ch,meta33344){
this.p = p;
this.ch = ch;
this.meta33344 = meta33344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33345,meta33344__$1){
var self__ = this;
var _33345__$1 = this;
return (new cljs.core.async.t_cljs$core$async33343(self__.p,self__.ch,meta33344__$1));
}));

(cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33345){
var self__ = this;
var _33345__$1 = this;
return self__.meta33344;
}));

(cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33343.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33344","meta33344",-214089141,null)], null);
}));

(cljs.core.async.t_cljs$core$async33343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33343");

(cljs.core.async.t_cljs$core$async33343.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33343.
 */
cljs.core.async.__GT_t_cljs$core$async33343 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33343(p__$1,ch__$1,meta33344){
return (new cljs.core.async.t_cljs$core$async33343(p__$1,ch__$1,meta33344));
});

}

return (new cljs.core.async.t_cljs$core$async33343(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33397 = arguments.length;
switch (G__33397) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30155__auto___35140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_33426){
var state_val_33427 = (state_33426[(1)]);
if((state_val_33427 === (7))){
var inst_33422 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
var statearr_33444_35141 = state_33426__$1;
(statearr_33444_35141[(2)] = inst_33422);

(statearr_33444_35141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (1))){
var state_33426__$1 = state_33426;
var statearr_33447_35145 = state_33426__$1;
(statearr_33447_35145[(2)] = null);

(statearr_33447_35145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (4))){
var inst_33408 = (state_33426[(7)]);
var inst_33408__$1 = (state_33426[(2)]);
var inst_33409 = (inst_33408__$1 == null);
var state_33426__$1 = (function (){var statearr_33451 = state_33426;
(statearr_33451[(7)] = inst_33408__$1);

return statearr_33451;
})();
if(cljs.core.truth_(inst_33409)){
var statearr_33452_35150 = state_33426__$1;
(statearr_33452_35150[(1)] = (5));

} else {
var statearr_33453_35151 = state_33426__$1;
(statearr_33453_35151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (6))){
var inst_33408 = (state_33426[(7)]);
var inst_33413 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33408) : p.call(null,inst_33408));
var state_33426__$1 = state_33426;
if(cljs.core.truth_(inst_33413)){
var statearr_33458_35155 = state_33426__$1;
(statearr_33458_35155[(1)] = (8));

} else {
var statearr_33465_35159 = state_33426__$1;
(statearr_33465_35159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (3))){
var inst_33424 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33426__$1,inst_33424);
} else {
if((state_val_33427 === (2))){
var state_33426__$1 = state_33426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33426__$1,(4),ch);
} else {
if((state_val_33427 === (11))){
var inst_33416 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
var statearr_33470_35160 = state_33426__$1;
(statearr_33470_35160[(2)] = inst_33416);

(statearr_33470_35160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (9))){
var state_33426__$1 = state_33426;
var statearr_33472_35161 = state_33426__$1;
(statearr_33472_35161[(2)] = null);

(statearr_33472_35161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (5))){
var inst_33411 = cljs.core.async.close_BANG_(out);
var state_33426__$1 = state_33426;
var statearr_33474_35164 = state_33426__$1;
(statearr_33474_35164[(2)] = inst_33411);

(statearr_33474_35164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (10))){
var inst_33419 = (state_33426[(2)]);
var state_33426__$1 = (function (){var statearr_33479 = state_33426;
(statearr_33479[(8)] = inst_33419);

return statearr_33479;
})();
var statearr_33481_35168 = state_33426__$1;
(statearr_33481_35168[(2)] = null);

(statearr_33481_35168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33427 === (8))){
var inst_33408 = (state_33426[(7)]);
var state_33426__$1 = state_33426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33426__$1,(11),out,inst_33408);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29582__auto__ = null;
var cljs$core$async$state_machine__29582__auto____0 = (function (){
var statearr_33483 = [null,null,null,null,null,null,null,null,null];
(statearr_33483[(0)] = cljs$core$async$state_machine__29582__auto__);

(statearr_33483[(1)] = (1));

return statearr_33483;
});
var cljs$core$async$state_machine__29582__auto____1 = (function (state_33426){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_33426);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e33485){var ex__29585__auto__ = e33485;
var statearr_33486_35169 = state_33426;
(statearr_33486_35169[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_33426[(4)]))){
var statearr_33487_35171 = state_33426;
(statearr_33487_35171[(1)] = cljs.core.first((state_33426[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35173 = state_33426;
state_33426 = G__35173;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$state_machine__29582__auto__ = function(state_33426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29582__auto____1.call(this,state_33426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29582__auto____0;
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29582__auto____1;
return cljs$core$async$state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_33489 = f__30156__auto__();
(statearr_33489[(6)] = c__30155__auto___35140);

return statearr_33489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33494 = arguments.length;
switch (G__33494) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30155__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_33591){
var state_val_33592 = (state_33591[(1)]);
if((state_val_33592 === (7))){
var inst_33573 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33616_35179 = state_33591__$1;
(statearr_33616_35179[(2)] = inst_33573);

(statearr_33616_35179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (20))){
var inst_33534 = (state_33591[(7)]);
var inst_33551 = (state_33591[(2)]);
var inst_33555 = cljs.core.next(inst_33534);
var inst_33512 = inst_33555;
var inst_33513 = null;
var inst_33514 = (0);
var inst_33515 = (0);
var state_33591__$1 = (function (){var statearr_33624 = state_33591;
(statearr_33624[(8)] = inst_33514);

(statearr_33624[(9)] = inst_33512);

(statearr_33624[(10)] = inst_33513);

(statearr_33624[(11)] = inst_33551);

(statearr_33624[(12)] = inst_33515);

return statearr_33624;
})();
var statearr_33627_35183 = state_33591__$1;
(statearr_33627_35183[(2)] = null);

(statearr_33627_35183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (1))){
var state_33591__$1 = state_33591;
var statearr_33629_35185 = state_33591__$1;
(statearr_33629_35185[(2)] = null);

(statearr_33629_35185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (4))){
var inst_33497 = (state_33591[(13)]);
var inst_33497__$1 = (state_33591[(2)]);
var inst_33498 = (inst_33497__$1 == null);
var state_33591__$1 = (function (){var statearr_33632 = state_33591;
(statearr_33632[(13)] = inst_33497__$1);

return statearr_33632;
})();
if(cljs.core.truth_(inst_33498)){
var statearr_33635_35186 = state_33591__$1;
(statearr_33635_35186[(1)] = (5));

} else {
var statearr_33636_35187 = state_33591__$1;
(statearr_33636_35187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (15))){
var state_33591__$1 = state_33591;
var statearr_33647_35189 = state_33591__$1;
(statearr_33647_35189[(2)] = null);

(statearr_33647_35189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (21))){
var state_33591__$1 = state_33591;
var statearr_33653_35190 = state_33591__$1;
(statearr_33653_35190[(2)] = null);

(statearr_33653_35190[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (13))){
var inst_33514 = (state_33591[(8)]);
var inst_33512 = (state_33591[(9)]);
var inst_33513 = (state_33591[(10)]);
var inst_33515 = (state_33591[(12)]);
var inst_33526 = (state_33591[(2)]);
var inst_33531 = (inst_33515 + (1));
var tmp33640 = inst_33514;
var tmp33641 = inst_33512;
var tmp33642 = inst_33513;
var inst_33512__$1 = tmp33641;
var inst_33513__$1 = tmp33642;
var inst_33514__$1 = tmp33640;
var inst_33515__$1 = inst_33531;
var state_33591__$1 = (function (){var statearr_33658 = state_33591;
(statearr_33658[(8)] = inst_33514__$1);

(statearr_33658[(9)] = inst_33512__$1);

(statearr_33658[(10)] = inst_33513__$1);

(statearr_33658[(14)] = inst_33526);

(statearr_33658[(12)] = inst_33515__$1);

return statearr_33658;
})();
var statearr_33659_35196 = state_33591__$1;
(statearr_33659_35196[(2)] = null);

(statearr_33659_35196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (22))){
var state_33591__$1 = state_33591;
var statearr_33663_35197 = state_33591__$1;
(statearr_33663_35197[(2)] = null);

(statearr_33663_35197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (6))){
var inst_33497 = (state_33591[(13)]);
var inst_33506 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33497) : f.call(null,inst_33497));
var inst_33507 = cljs.core.seq(inst_33506);
var inst_33512 = inst_33507;
var inst_33513 = null;
var inst_33514 = (0);
var inst_33515 = (0);
var state_33591__$1 = (function (){var statearr_33664 = state_33591;
(statearr_33664[(8)] = inst_33514);

(statearr_33664[(9)] = inst_33512);

(statearr_33664[(10)] = inst_33513);

(statearr_33664[(12)] = inst_33515);

return statearr_33664;
})();
var statearr_33669_35209 = state_33591__$1;
(statearr_33669_35209[(2)] = null);

(statearr_33669_35209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (17))){
var inst_33534 = (state_33591[(7)]);
var inst_33538 = cljs.core.chunk_first(inst_33534);
var inst_33539 = cljs.core.chunk_rest(inst_33534);
var inst_33540 = cljs.core.count(inst_33538);
var inst_33512 = inst_33539;
var inst_33513 = inst_33538;
var inst_33514 = inst_33540;
var inst_33515 = (0);
var state_33591__$1 = (function (){var statearr_33682 = state_33591;
(statearr_33682[(8)] = inst_33514);

(statearr_33682[(9)] = inst_33512);

(statearr_33682[(10)] = inst_33513);

(statearr_33682[(12)] = inst_33515);

return statearr_33682;
})();
var statearr_33686_35213 = state_33591__$1;
(statearr_33686_35213[(2)] = null);

(statearr_33686_35213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (3))){
var inst_33575 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33591__$1,inst_33575);
} else {
if((state_val_33592 === (12))){
var inst_33563 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33690_35218 = state_33591__$1;
(statearr_33690_35218[(2)] = inst_33563);

(statearr_33690_35218[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (2))){
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33591__$1,(4),in$);
} else {
if((state_val_33592 === (23))){
var inst_33571 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33701_35219 = state_33591__$1;
(statearr_33701_35219[(2)] = inst_33571);

(statearr_33701_35219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (19))){
var inst_33558 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33706_35220 = state_33591__$1;
(statearr_33706_35220[(2)] = inst_33558);

(statearr_33706_35220[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (11))){
var inst_33512 = (state_33591[(9)]);
var inst_33534 = (state_33591[(7)]);
var inst_33534__$1 = cljs.core.seq(inst_33512);
var state_33591__$1 = (function (){var statearr_33707 = state_33591;
(statearr_33707[(7)] = inst_33534__$1);

return statearr_33707;
})();
if(inst_33534__$1){
var statearr_33708_35223 = state_33591__$1;
(statearr_33708_35223[(1)] = (14));

} else {
var statearr_33709_35226 = state_33591__$1;
(statearr_33709_35226[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (9))){
var inst_33565 = (state_33591[(2)]);
var inst_33566 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33591__$1 = (function (){var statearr_33710 = state_33591;
(statearr_33710[(15)] = inst_33565);

return statearr_33710;
})();
if(cljs.core.truth_(inst_33566)){
var statearr_33714_35227 = state_33591__$1;
(statearr_33714_35227[(1)] = (21));

} else {
var statearr_33715_35228 = state_33591__$1;
(statearr_33715_35228[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (5))){
var inst_33500 = cljs.core.async.close_BANG_(out);
var state_33591__$1 = state_33591;
var statearr_33718_35229 = state_33591__$1;
(statearr_33718_35229[(2)] = inst_33500);

(statearr_33718_35229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (14))){
var inst_33534 = (state_33591[(7)]);
var inst_33536 = cljs.core.chunked_seq_QMARK_(inst_33534);
var state_33591__$1 = state_33591;
if(inst_33536){
var statearr_33719_35230 = state_33591__$1;
(statearr_33719_35230[(1)] = (17));

} else {
var statearr_33720_35231 = state_33591__$1;
(statearr_33720_35231[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (16))){
var inst_33561 = (state_33591[(2)]);
var state_33591__$1 = state_33591;
var statearr_33723_35232 = state_33591__$1;
(statearr_33723_35232[(2)] = inst_33561);

(statearr_33723_35232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33592 === (10))){
var inst_33513 = (state_33591[(10)]);
var inst_33515 = (state_33591[(12)]);
var inst_33524 = cljs.core._nth(inst_33513,inst_33515);
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33591__$1,(13),out,inst_33524);
} else {
if((state_val_33592 === (18))){
var inst_33534 = (state_33591[(7)]);
var inst_33549 = cljs.core.first(inst_33534);
var state_33591__$1 = state_33591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33591__$1,(20),out,inst_33549);
} else {
if((state_val_33592 === (8))){
var inst_33514 = (state_33591[(8)]);
var inst_33515 = (state_33591[(12)]);
var inst_33517 = (inst_33515 < inst_33514);
var inst_33518 = inst_33517;
var state_33591__$1 = state_33591;
if(cljs.core.truth_(inst_33518)){
var statearr_33724_35242 = state_33591__$1;
(statearr_33724_35242[(1)] = (10));

} else {
var statearr_33725_35243 = state_33591__$1;
(statearr_33725_35243[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29582__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29582__auto____0 = (function (){
var statearr_33729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33729[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29582__auto__);

(statearr_33729[(1)] = (1));

return statearr_33729;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29582__auto____1 = (function (state_33591){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_33591);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e33730){var ex__29585__auto__ = e33730;
var statearr_33731_35249 = state_33591;
(statearr_33731_35249[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_33591[(4)]))){
var statearr_33734_35250 = state_33591;
(statearr_33734_35250[(1)] = cljs.core.first((state_33591[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35251 = state_33591;
state_33591 = G__35251;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29582__auto__ = function(state_33591){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29582__auto____1.call(this,state_33591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29582__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29582__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_33735 = f__30156__auto__();
(statearr_33735[(6)] = c__30155__auto__);

return statearr_33735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));

return c__30155__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33740 = arguments.length;
switch (G__33740) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33750 = arguments.length;
switch (G__33750) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33752 = arguments.length;
switch (G__33752) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30155__auto___35279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_33781){
var state_val_33782 = (state_33781[(1)]);
if((state_val_33782 === (7))){
var inst_33776 = (state_33781[(2)]);
var state_33781__$1 = state_33781;
var statearr_33795_35280 = state_33781__$1;
(statearr_33795_35280[(2)] = inst_33776);

(statearr_33795_35280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33782 === (1))){
var inst_33755 = null;
var state_33781__$1 = (function (){var statearr_33796 = state_33781;
(statearr_33796[(7)] = inst_33755);

return statearr_33796;
})();
var statearr_33797_35285 = state_33781__$1;
(statearr_33797_35285[(2)] = null);

(statearr_33797_35285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33782 === (4))){
var inst_33758 = (state_33781[(8)]);
var inst_33758__$1 = (state_33781[(2)]);
var inst_33759 = (inst_33758__$1 == null);
var inst_33760 = cljs.core.not(inst_33759);
var state_33781__$1 = (function (){var statearr_33798 = state_33781;
(statearr_33798[(8)] = inst_33758__$1);

return statearr_33798;
})();
if(inst_33760){
var statearr_33800_35287 = state_33781__$1;
(statearr_33800_35287[(1)] = (5));

} else {
var statearr_33801_35288 = state_33781__$1;
(statearr_33801_35288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33782 === (6))){
var state_33781__$1 = state_33781;
var statearr_33802_35290 = state_33781__$1;
(statearr_33802_35290[(2)] = null);

(statearr_33802_35290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33782 === (3))){
var inst_33778 = (state_33781[(2)]);
var inst_33779 = cljs.core.async.close_BANG_(out);
var state_33781__$1 = (function (){var statearr_33804 = state_33781;
(statearr_33804[(9)] = inst_33778);

return statearr_33804;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33781__$1,inst_33779);
} else {
if((state_val_33782 === (2))){
var state_33781__$1 = state_33781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33781__$1,(4),ch);
} else {
if((state_val_33782 === (11))){
var inst_33758 = (state_33781[(8)]);
var inst_33770 = (state_33781[(2)]);
var inst_33755 = inst_33758;
var state_33781__$1 = (function (){var statearr_33805 = state_33781;
(statearr_33805[(10)] = inst_33770);

(statearr_33805[(7)] = inst_33755);

return statearr_33805;
})();
var statearr_33806_35295 = state_33781__$1;
(statearr_33806_35295[(2)] = null);

(statearr_33806_35295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33782 === (9))){
var inst_33758 = (state_33781[(8)]);
var state_33781__$1 = state_33781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33781__$1,(11),out,inst_33758);
} else {
if((state_val_33782 === (5))){
var inst_33758 = (state_33781[(8)]);
var inst_33755 = (state_33781[(7)]);
var inst_33762 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33758,inst_33755);
var state_33781__$1 = state_33781;
if(inst_33762){
var statearr_33814_35296 = state_33781__$1;
(statearr_33814_35296[(1)] = (8));

} else {
var statearr_33815_35297 = state_33781__$1;
(statearr_33815_35297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33782 === (10))){
var inst_33773 = (state_33781[(2)]);
var state_33781__$1 = state_33781;
var statearr_33822_35298 = state_33781__$1;
(statearr_33822_35298[(2)] = inst_33773);

(statearr_33822_35298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33782 === (8))){
var inst_33755 = (state_33781[(7)]);
var tmp33808 = inst_33755;
var inst_33755__$1 = tmp33808;
var state_33781__$1 = (function (){var statearr_33823 = state_33781;
(statearr_33823[(7)] = inst_33755__$1);

return statearr_33823;
})();
var statearr_33824_35299 = state_33781__$1;
(statearr_33824_35299[(2)] = null);

(statearr_33824_35299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29582__auto__ = null;
var cljs$core$async$state_machine__29582__auto____0 = (function (){
var statearr_33825 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33825[(0)] = cljs$core$async$state_machine__29582__auto__);

(statearr_33825[(1)] = (1));

return statearr_33825;
});
var cljs$core$async$state_machine__29582__auto____1 = (function (state_33781){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_33781);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e33831){var ex__29585__auto__ = e33831;
var statearr_33832_35318 = state_33781;
(statearr_33832_35318[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_33781[(4)]))){
var statearr_33834_35323 = state_33781;
(statearr_33834_35323[(1)] = cljs.core.first((state_33781[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35325 = state_33781;
state_33781 = G__35325;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$state_machine__29582__auto__ = function(state_33781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29582__auto____1.call(this,state_33781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29582__auto____0;
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29582__auto____1;
return cljs$core$async$state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_33835 = f__30156__auto__();
(statearr_33835[(6)] = c__30155__auto___35279);

return statearr_33835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33841 = arguments.length;
switch (G__33841) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30155__auto___35331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_33887){
var state_val_33888 = (state_33887[(1)]);
if((state_val_33888 === (7))){
var inst_33882 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
var statearr_33895_35338 = state_33887__$1;
(statearr_33895_35338[(2)] = inst_33882);

(statearr_33895_35338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (1))){
var inst_33845 = (new Array(n));
var inst_33847 = inst_33845;
var inst_33848 = (0);
var state_33887__$1 = (function (){var statearr_33899 = state_33887;
(statearr_33899[(7)] = inst_33848);

(statearr_33899[(8)] = inst_33847);

return statearr_33899;
})();
var statearr_33900_35344 = state_33887__$1;
(statearr_33900_35344[(2)] = null);

(statearr_33900_35344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (4))){
var inst_33852 = (state_33887[(9)]);
var inst_33852__$1 = (state_33887[(2)]);
var inst_33853 = (inst_33852__$1 == null);
var inst_33854 = cljs.core.not(inst_33853);
var state_33887__$1 = (function (){var statearr_33903 = state_33887;
(statearr_33903[(9)] = inst_33852__$1);

return statearr_33903;
})();
if(inst_33854){
var statearr_33904_35357 = state_33887__$1;
(statearr_33904_35357[(1)] = (5));

} else {
var statearr_33905_35358 = state_33887__$1;
(statearr_33905_35358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (15))){
var inst_33875 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
var statearr_33906_35363 = state_33887__$1;
(statearr_33906_35363[(2)] = inst_33875);

(statearr_33906_35363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (13))){
var state_33887__$1 = state_33887;
var statearr_33908_35368 = state_33887__$1;
(statearr_33908_35368[(2)] = null);

(statearr_33908_35368[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (6))){
var inst_33848 = (state_33887[(7)]);
var inst_33870 = (inst_33848 > (0));
var state_33887__$1 = state_33887;
if(cljs.core.truth_(inst_33870)){
var statearr_33910_35370 = state_33887__$1;
(statearr_33910_35370[(1)] = (12));

} else {
var statearr_33912_35372 = state_33887__$1;
(statearr_33912_35372[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (3))){
var inst_33884 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33887__$1,inst_33884);
} else {
if((state_val_33888 === (12))){
var inst_33847 = (state_33887[(8)]);
var inst_33872 = cljs.core.vec(inst_33847);
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33887__$1,(15),out,inst_33872);
} else {
if((state_val_33888 === (2))){
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33887__$1,(4),ch);
} else {
if((state_val_33888 === (11))){
var inst_33864 = (state_33887[(2)]);
var inst_33865 = (new Array(n));
var inst_33847 = inst_33865;
var inst_33848 = (0);
var state_33887__$1 = (function (){var statearr_33917 = state_33887;
(statearr_33917[(10)] = inst_33864);

(statearr_33917[(7)] = inst_33848);

(statearr_33917[(8)] = inst_33847);

return statearr_33917;
})();
var statearr_33919_35388 = state_33887__$1;
(statearr_33919_35388[(2)] = null);

(statearr_33919_35388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (9))){
var inst_33847 = (state_33887[(8)]);
var inst_33862 = cljs.core.vec(inst_33847);
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33887__$1,(11),out,inst_33862);
} else {
if((state_val_33888 === (5))){
var inst_33852 = (state_33887[(9)]);
var inst_33857 = (state_33887[(11)]);
var inst_33848 = (state_33887[(7)]);
var inst_33847 = (state_33887[(8)]);
var inst_33856 = (inst_33847[inst_33848] = inst_33852);
var inst_33857__$1 = (inst_33848 + (1));
var inst_33858 = (inst_33857__$1 < n);
var state_33887__$1 = (function (){var statearr_33929 = state_33887;
(statearr_33929[(12)] = inst_33856);

(statearr_33929[(11)] = inst_33857__$1);

return statearr_33929;
})();
if(cljs.core.truth_(inst_33858)){
var statearr_33934_35393 = state_33887__$1;
(statearr_33934_35393[(1)] = (8));

} else {
var statearr_33938_35394 = state_33887__$1;
(statearr_33938_35394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (14))){
var inst_33878 = (state_33887[(2)]);
var inst_33880 = cljs.core.async.close_BANG_(out);
var state_33887__$1 = (function (){var statearr_33954 = state_33887;
(statearr_33954[(13)] = inst_33878);

return statearr_33954;
})();
var statearr_33955_35398 = state_33887__$1;
(statearr_33955_35398[(2)] = inst_33880);

(statearr_33955_35398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (10))){
var inst_33868 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
var statearr_33965_35399 = state_33887__$1;
(statearr_33965_35399[(2)] = inst_33868);

(statearr_33965_35399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33888 === (8))){
var inst_33857 = (state_33887[(11)]);
var inst_33847 = (state_33887[(8)]);
var tmp33943 = inst_33847;
var inst_33847__$1 = tmp33943;
var inst_33848 = inst_33857;
var state_33887__$1 = (function (){var statearr_33977 = state_33887;
(statearr_33977[(7)] = inst_33848);

(statearr_33977[(8)] = inst_33847__$1);

return statearr_33977;
})();
var statearr_33983_35401 = state_33887__$1;
(statearr_33983_35401[(2)] = null);

(statearr_33983_35401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29582__auto__ = null;
var cljs$core$async$state_machine__29582__auto____0 = (function (){
var statearr_33987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33987[(0)] = cljs$core$async$state_machine__29582__auto__);

(statearr_33987[(1)] = (1));

return statearr_33987;
});
var cljs$core$async$state_machine__29582__auto____1 = (function (state_33887){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_33887);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e33988){var ex__29585__auto__ = e33988;
var statearr_33989_35406 = state_33887;
(statearr_33989_35406[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_33887[(4)]))){
var statearr_33990_35407 = state_33887;
(statearr_33990_35407[(1)] = cljs.core.first((state_33887[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35408 = state_33887;
state_33887 = G__35408;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$state_machine__29582__auto__ = function(state_33887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29582__auto____1.call(this,state_33887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29582__auto____0;
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29582__auto____1;
return cljs$core$async$state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_33996 = f__30156__auto__();
(statearr_33996[(6)] = c__30155__auto___35331);

return statearr_33996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33999 = arguments.length;
switch (G__33999) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30155__auto___35413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30156__auto__ = (function (){var switch__29581__auto__ = (function (state_34061){
var state_val_34062 = (state_34061[(1)]);
if((state_val_34062 === (7))){
var inst_34057 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
var statearr_34075_35414 = state_34061__$1;
(statearr_34075_35414[(2)] = inst_34057);

(statearr_34075_35414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (1))){
var inst_34007 = [];
var inst_34009 = inst_34007;
var inst_34010 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34061__$1 = (function (){var statearr_34078 = state_34061;
(statearr_34078[(7)] = inst_34010);

(statearr_34078[(8)] = inst_34009);

return statearr_34078;
})();
var statearr_34082_35416 = state_34061__$1;
(statearr_34082_35416[(2)] = null);

(statearr_34082_35416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (4))){
var inst_34013 = (state_34061[(9)]);
var inst_34013__$1 = (state_34061[(2)]);
var inst_34021 = (inst_34013__$1 == null);
var inst_34022 = cljs.core.not(inst_34021);
var state_34061__$1 = (function (){var statearr_34083 = state_34061;
(statearr_34083[(9)] = inst_34013__$1);

return statearr_34083;
})();
if(inst_34022){
var statearr_34084_35419 = state_34061__$1;
(statearr_34084_35419[(1)] = (5));

} else {
var statearr_34085_35420 = state_34061__$1;
(statearr_34085_35420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (15))){
var inst_34009 = (state_34061[(8)]);
var inst_34049 = cljs.core.vec(inst_34009);
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34061__$1,(18),out,inst_34049);
} else {
if((state_val_34062 === (13))){
var inst_34044 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
var statearr_34095_35421 = state_34061__$1;
(statearr_34095_35421[(2)] = inst_34044);

(statearr_34095_35421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (6))){
var inst_34009 = (state_34061[(8)]);
var inst_34046 = inst_34009.length;
var inst_34047 = (inst_34046 > (0));
var state_34061__$1 = state_34061;
if(cljs.core.truth_(inst_34047)){
var statearr_34098_35422 = state_34061__$1;
(statearr_34098_35422[(1)] = (15));

} else {
var statearr_34099_35423 = state_34061__$1;
(statearr_34099_35423[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (17))){
var inst_34054 = (state_34061[(2)]);
var inst_34055 = cljs.core.async.close_BANG_(out);
var state_34061__$1 = (function (){var statearr_34101 = state_34061;
(statearr_34101[(10)] = inst_34054);

return statearr_34101;
})();
var statearr_34103_35424 = state_34061__$1;
(statearr_34103_35424[(2)] = inst_34055);

(statearr_34103_35424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (3))){
var inst_34059 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34061__$1,inst_34059);
} else {
if((state_val_34062 === (12))){
var inst_34009 = (state_34061[(8)]);
var inst_34037 = cljs.core.vec(inst_34009);
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34061__$1,(14),out,inst_34037);
} else {
if((state_val_34062 === (2))){
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34061__$1,(4),ch);
} else {
if((state_val_34062 === (11))){
var inst_34024 = (state_34061[(11)]);
var inst_34013 = (state_34061[(9)]);
var inst_34009 = (state_34061[(8)]);
var inst_34034 = inst_34009.push(inst_34013);
var tmp34104 = inst_34009;
var inst_34009__$1 = tmp34104;
var inst_34010 = inst_34024;
var state_34061__$1 = (function (){var statearr_34107 = state_34061;
(statearr_34107[(7)] = inst_34010);

(statearr_34107[(12)] = inst_34034);

(statearr_34107[(8)] = inst_34009__$1);

return statearr_34107;
})();
var statearr_34110_35432 = state_34061__$1;
(statearr_34110_35432[(2)] = null);

(statearr_34110_35432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (9))){
var inst_34010 = (state_34061[(7)]);
var inst_34029 = cljs.core.keyword_identical_QMARK_(inst_34010,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34061__$1 = state_34061;
var statearr_34116_35434 = state_34061__$1;
(statearr_34116_35434[(2)] = inst_34029);

(statearr_34116_35434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (5))){
var inst_34024 = (state_34061[(11)]);
var inst_34010 = (state_34061[(7)]);
var inst_34026 = (state_34061[(13)]);
var inst_34013 = (state_34061[(9)]);
var inst_34024__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34013) : f.call(null,inst_34013));
var inst_34026__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34024__$1,inst_34010);
var state_34061__$1 = (function (){var statearr_34117 = state_34061;
(statearr_34117[(11)] = inst_34024__$1);

(statearr_34117[(13)] = inst_34026__$1);

return statearr_34117;
})();
if(inst_34026__$1){
var statearr_34119_35439 = state_34061__$1;
(statearr_34119_35439[(1)] = (8));

} else {
var statearr_34120_35440 = state_34061__$1;
(statearr_34120_35440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (14))){
var inst_34024 = (state_34061[(11)]);
var inst_34013 = (state_34061[(9)]);
var inst_34039 = (state_34061[(2)]);
var inst_34040 = [];
var inst_34041 = inst_34040.push(inst_34013);
var inst_34009 = inst_34040;
var inst_34010 = inst_34024;
var state_34061__$1 = (function (){var statearr_34122 = state_34061;
(statearr_34122[(14)] = inst_34039);

(statearr_34122[(7)] = inst_34010);

(statearr_34122[(15)] = inst_34041);

(statearr_34122[(8)] = inst_34009);

return statearr_34122;
})();
var statearr_34123_35445 = state_34061__$1;
(statearr_34123_35445[(2)] = null);

(statearr_34123_35445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (16))){
var state_34061__$1 = state_34061;
var statearr_34127_35446 = state_34061__$1;
(statearr_34127_35446[(2)] = null);

(statearr_34127_35446[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (10))){
var inst_34031 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
if(cljs.core.truth_(inst_34031)){
var statearr_34129_35448 = state_34061__$1;
(statearr_34129_35448[(1)] = (11));

} else {
var statearr_34131_35449 = state_34061__$1;
(statearr_34131_35449[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (18))){
var inst_34051 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
var statearr_34133_35450 = state_34061__$1;
(statearr_34133_35450[(2)] = inst_34051);

(statearr_34133_35450[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (8))){
var inst_34026 = (state_34061[(13)]);
var state_34061__$1 = state_34061;
var statearr_34134_35452 = state_34061__$1;
(statearr_34134_35452[(2)] = inst_34026);

(statearr_34134_35452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29582__auto__ = null;
var cljs$core$async$state_machine__29582__auto____0 = (function (){
var statearr_34135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34135[(0)] = cljs$core$async$state_machine__29582__auto__);

(statearr_34135[(1)] = (1));

return statearr_34135;
});
var cljs$core$async$state_machine__29582__auto____1 = (function (state_34061){
while(true){
var ret_value__29583__auto__ = (function (){try{while(true){
var result__29584__auto__ = switch__29581__auto__(state_34061);
if(cljs.core.keyword_identical_QMARK_(result__29584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29584__auto__;
}
break;
}
}catch (e34137){var ex__29585__auto__ = e34137;
var statearr_34139_35456 = state_34061;
(statearr_34139_35456[(2)] = ex__29585__auto__);


if(cljs.core.seq((state_34061[(4)]))){
var statearr_34142_35457 = state_34061;
(statearr_34142_35457[(1)] = cljs.core.first((state_34061[(4)])));

} else {
throw ex__29585__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35458 = state_34061;
state_34061 = G__35458;
continue;
} else {
return ret_value__29583__auto__;
}
break;
}
});
cljs$core$async$state_machine__29582__auto__ = function(state_34061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29582__auto____1.call(this,state_34061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29582__auto____0;
cljs$core$async$state_machine__29582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29582__auto____1;
return cljs$core$async$state_machine__29582__auto__;
})()
})();
var state__30157__auto__ = (function (){var statearr_34144 = f__30156__auto__();
(statearr_34144[(6)] = c__30155__auto___35413);

return statearr_34144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30157__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
