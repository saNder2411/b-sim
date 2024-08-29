goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28170 = arguments.length;
switch (G__28170) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28171 = (function (f,blockable,meta28172){
this.f = f;
this.blockable = blockable;
this.meta28172 = meta28172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28173,meta28172__$1){
var self__ = this;
var _28173__$1 = this;
return (new cljs.core.async.t_cljs$core$async28171(self__.f,self__.blockable,meta28172__$1));
}));

(cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28173){
var self__ = this;
var _28173__$1 = this;
return self__.meta28172;
}));

(cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28172","meta28172",1309181987,null)], null);
}));

(cljs.core.async.t_cljs$core$async28171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28171");

(cljs.core.async.t_cljs$core$async28171.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28171.
 */
cljs.core.async.__GT_t_cljs$core$async28171 = (function cljs$core$async$__GT_t_cljs$core$async28171(f__$1,blockable__$1,meta28172){
return (new cljs.core.async.t_cljs$core$async28171(f__$1,blockable__$1,meta28172));
});

}

return (new cljs.core.async.t_cljs$core$async28171(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28176 = arguments.length;
switch (G__28176) {
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
var G__28178 = arguments.length;
switch (G__28178) {
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
var G__28180 = arguments.length;
switch (G__28180) {
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
var val_30987 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30987) : fn1.call(null,val_30987));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30987) : fn1.call(null,val_30987));
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
var G__28189 = arguments.length;
switch (G__28189) {
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
var n__5636__auto___30991 = n;
var x_30992 = (0);
while(true){
if((x_30992 < n__5636__auto___30991)){
(a[x_30992] = x_30992);

var G__30993 = (x_30992 + (1));
x_30992 = G__30993;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28203 = (function (flag,meta28204){
this.flag = flag;
this.meta28204 = meta28204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28205,meta28204__$1){
var self__ = this;
var _28205__$1 = this;
return (new cljs.core.async.t_cljs$core$async28203(self__.flag,meta28204__$1));
}));

(cljs.core.async.t_cljs$core$async28203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28205){
var self__ = this;
var _28205__$1 = this;
return self__.meta28204;
}));

(cljs.core.async.t_cljs$core$async28203.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28203.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28204","meta28204",-721463512,null)], null);
}));

(cljs.core.async.t_cljs$core$async28203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28203");

(cljs.core.async.t_cljs$core$async28203.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28203.
 */
cljs.core.async.__GT_t_cljs$core$async28203 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28203(flag__$1,meta28204){
return (new cljs.core.async.t_cljs$core$async28203(flag__$1,meta28204));
});

}

return (new cljs.core.async.t_cljs$core$async28203(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28224 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28224 = (function (flag,cb,meta28225){
this.flag = flag;
this.cb = cb;
this.meta28225 = meta28225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28226,meta28225__$1){
var self__ = this;
var _28226__$1 = this;
return (new cljs.core.async.t_cljs$core$async28224(self__.flag,self__.cb,meta28225__$1));
}));

(cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28226){
var self__ = this;
var _28226__$1 = this;
return self__.meta28225;
}));

(cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28225","meta28225",-2116679513,null)], null);
}));

(cljs.core.async.t_cljs$core$async28224.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28224");

(cljs.core.async.t_cljs$core$async28224.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28224");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28224.
 */
cljs.core.async.__GT_t_cljs$core$async28224 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28224(flag__$1,cb__$1,meta28225){
return (new cljs.core.async.t_cljs$core$async28224(flag__$1,cb__$1,meta28225));
});

}

return (new cljs.core.async.t_cljs$core$async28224(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__28247_SHARP_){
var G__28258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28247_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28258) : fret.call(null,G__28258));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__28249_SHARP_){
var G__28261 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28249_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28261) : fret.call(null,G__28261));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
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
var G__31003 = (i + (1));
i = G__31003;
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
var len__5769__auto___31006 = arguments.length;
var i__5770__auto___31007 = (0);
while(true){
if((i__5770__auto___31007 < len__5769__auto___31006)){
args__5775__auto__.push((arguments[i__5770__auto___31007]));

var G__31008 = (i__5770__auto___31007 + (1));
i__5770__auto___31007 = G__31008;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28286){
var map__28289 = p__28286;
var map__28289__$1 = cljs.core.__destructure_map(map__28289);
var opts = map__28289__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28272){
var G__28278 = cljs.core.first(seq28272);
var seq28272__$1 = cljs.core.next(seq28272);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28278,seq28272__$1);
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
var G__28308 = arguments.length;
switch (G__28308) {
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
var c__28093__auto___31015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_28373){
var state_val_28377 = (state_28373[(1)]);
if((state_val_28377 === (7))){
var inst_28364 = (state_28373[(2)]);
var state_28373__$1 = state_28373;
var statearr_28384_31016 = state_28373__$1;
(statearr_28384_31016[(2)] = inst_28364);

(statearr_28384_31016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (1))){
var state_28373__$1 = state_28373;
var statearr_28385_31019 = state_28373__$1;
(statearr_28385_31019[(2)] = null);

(statearr_28385_31019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (4))){
var inst_28338 = (state_28373[(7)]);
var inst_28338__$1 = (state_28373[(2)]);
var inst_28343 = (inst_28338__$1 == null);
var state_28373__$1 = (function (){var statearr_28390 = state_28373;
(statearr_28390[(7)] = inst_28338__$1);

return statearr_28390;
})();
if(cljs.core.truth_(inst_28343)){
var statearr_28392_31022 = state_28373__$1;
(statearr_28392_31022[(1)] = (5));

} else {
var statearr_28393_31023 = state_28373__$1;
(statearr_28393_31023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (13))){
var state_28373__$1 = state_28373;
var statearr_28398_31025 = state_28373__$1;
(statearr_28398_31025[(2)] = null);

(statearr_28398_31025[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (6))){
var inst_28338 = (state_28373[(7)]);
var state_28373__$1 = state_28373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28373__$1,(11),to,inst_28338);
} else {
if((state_val_28377 === (3))){
var inst_28366 = (state_28373[(2)]);
var state_28373__$1 = state_28373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28373__$1,inst_28366);
} else {
if((state_val_28377 === (12))){
var state_28373__$1 = state_28373;
var statearr_28404_31030 = state_28373__$1;
(statearr_28404_31030[(2)] = null);

(statearr_28404_31030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (2))){
var state_28373__$1 = state_28373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28373__$1,(4),from);
} else {
if((state_val_28377 === (11))){
var inst_28357 = (state_28373[(2)]);
var state_28373__$1 = state_28373;
if(cljs.core.truth_(inst_28357)){
var statearr_28406_31031 = state_28373__$1;
(statearr_28406_31031[(1)] = (12));

} else {
var statearr_28409_31032 = state_28373__$1;
(statearr_28409_31032[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (9))){
var state_28373__$1 = state_28373;
var statearr_28412_31033 = state_28373__$1;
(statearr_28412_31033[(2)] = null);

(statearr_28412_31033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (5))){
var state_28373__$1 = state_28373;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28415_31034 = state_28373__$1;
(statearr_28415_31034[(1)] = (8));

} else {
var statearr_28416_31035 = state_28373__$1;
(statearr_28416_31035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (14))){
var inst_28362 = (state_28373[(2)]);
var state_28373__$1 = state_28373;
var statearr_28420_31037 = state_28373__$1;
(statearr_28420_31037[(2)] = inst_28362);

(statearr_28420_31037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (10))){
var inst_28353 = (state_28373[(2)]);
var state_28373__$1 = state_28373;
var statearr_28422_31038 = state_28373__$1;
(statearr_28422_31038[(2)] = inst_28353);

(statearr_28422_31038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28377 === (8))){
var inst_28348 = cljs.core.async.close_BANG_(to);
var state_28373__$1 = state_28373;
var statearr_28423_31039 = state_28373__$1;
(statearr_28423_31039[(2)] = inst_28348);

(statearr_28423_31039[(1)] = (10));


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
var cljs$core$async$state_machine__27280__auto__ = null;
var cljs$core$async$state_machine__27280__auto____0 = (function (){
var statearr_28426 = [null,null,null,null,null,null,null,null];
(statearr_28426[(0)] = cljs$core$async$state_machine__27280__auto__);

(statearr_28426[(1)] = (1));

return statearr_28426;
});
var cljs$core$async$state_machine__27280__auto____1 = (function (state_28373){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_28373);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e28428){var ex__27283__auto__ = e28428;
var statearr_28429_31040 = state_28373;
(statearr_28429_31040[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_28373[(4)]))){
var statearr_28430_31041 = state_28373;
(statearr_28430_31041[(1)] = cljs.core.first((state_28373[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31042 = state_28373;
state_28373 = G__31042;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$state_machine__27280__auto__ = function(state_28373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27280__auto____1.call(this,state_28373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27280__auto____0;
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27280__auto____1;
return cljs$core$async$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_28431 = f__28094__auto__();
(statearr_28431[(6)] = c__28093__auto___31015);

return statearr_28431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
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
var process__$1 = (function (p__28440){
var vec__28442 = p__28440;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28442,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28442,(1),null);
var job = vec__28442;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28093__auto___31043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_28450){
var state_val_28451 = (state_28450[(1)]);
if((state_val_28451 === (1))){
var state_28450__$1 = state_28450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28450__$1,(2),res,v);
} else {
if((state_val_28451 === (2))){
var inst_28447 = (state_28450[(2)]);
var inst_28448 = cljs.core.async.close_BANG_(res);
var state_28450__$1 = (function (){var statearr_28459 = state_28450;
(statearr_28459[(7)] = inst_28447);

return statearr_28459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28450__$1,inst_28448);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0 = (function (){
var statearr_28466 = [null,null,null,null,null,null,null,null];
(statearr_28466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__);

(statearr_28466[(1)] = (1));

return statearr_28466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1 = (function (state_28450){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_28450);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e28469){var ex__27283__auto__ = e28469;
var statearr_28472_31044 = state_28450;
(statearr_28472_31044[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_28450[(4)]))){
var statearr_28473_31045 = state_28450;
(statearr_28473_31045[(1)] = cljs.core.first((state_28450[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31046 = state_28450;
state_28450 = G__31046;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__ = function(state_28450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1.call(this,state_28450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_28474 = f__28094__auto__();
(statearr_28474[(6)] = c__28093__auto___31043);

return statearr_28474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28481){
var vec__28484 = p__28481;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28484,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28484,(1),null);
var job = vec__28484;
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
var n__5636__auto___31047 = n;
var __31048 = (0);
while(true){
if((__31048 < n__5636__auto___31047)){
var G__28490_31049 = type;
var G__28490_31050__$1 = (((G__28490_31049 instanceof cljs.core.Keyword))?G__28490_31049.fqn:null);
switch (G__28490_31050__$1) {
case "compute":
var c__28093__auto___31052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31048,c__28093__auto___31052,G__28490_31049,G__28490_31050__$1,n__5636__auto___31047,jobs,results,process__$1,async){
return (function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = ((function (__31048,c__28093__auto___31052,G__28490_31049,G__28490_31050__$1,n__5636__auto___31047,jobs,results,process__$1,async){
return (function (state_28504){
var state_val_28505 = (state_28504[(1)]);
if((state_val_28505 === (1))){
var state_28504__$1 = state_28504;
var statearr_28510_31053 = state_28504__$1;
(statearr_28510_31053[(2)] = null);

(statearr_28510_31053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (2))){
var state_28504__$1 = state_28504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28504__$1,(4),jobs);
} else {
if((state_val_28505 === (3))){
var inst_28502 = (state_28504[(2)]);
var state_28504__$1 = state_28504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28504__$1,inst_28502);
} else {
if((state_val_28505 === (4))){
var inst_28494 = (state_28504[(2)]);
var inst_28495 = process__$1(inst_28494);
var state_28504__$1 = state_28504;
if(cljs.core.truth_(inst_28495)){
var statearr_28517_31054 = state_28504__$1;
(statearr_28517_31054[(1)] = (5));

} else {
var statearr_28521_31055 = state_28504__$1;
(statearr_28521_31055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (5))){
var state_28504__$1 = state_28504;
var statearr_28522_31056 = state_28504__$1;
(statearr_28522_31056[(2)] = null);

(statearr_28522_31056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (6))){
var state_28504__$1 = state_28504;
var statearr_28524_31057 = state_28504__$1;
(statearr_28524_31057[(2)] = null);

(statearr_28524_31057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28505 === (7))){
var inst_28500 = (state_28504[(2)]);
var state_28504__$1 = state_28504;
var statearr_28526_31060 = state_28504__$1;
(statearr_28526_31060[(2)] = inst_28500);

(statearr_28526_31060[(1)] = (3));


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
});})(__31048,c__28093__auto___31052,G__28490_31049,G__28490_31050__$1,n__5636__auto___31047,jobs,results,process__$1,async))
;
return ((function (__31048,switch__27279__auto__,c__28093__auto___31052,G__28490_31049,G__28490_31050__$1,n__5636__auto___31047,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0 = (function (){
var statearr_28528 = [null,null,null,null,null,null,null];
(statearr_28528[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__);

(statearr_28528[(1)] = (1));

return statearr_28528;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1 = (function (state_28504){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_28504);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e28529){var ex__27283__auto__ = e28529;
var statearr_28530_31065 = state_28504;
(statearr_28530_31065[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_28504[(4)]))){
var statearr_28531_31066 = state_28504;
(statearr_28531_31066[(1)] = cljs.core.first((state_28504[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31067 = state_28504;
state_28504 = G__31067;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__ = function(state_28504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1.call(this,state_28504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__;
})()
;})(__31048,switch__27279__auto__,c__28093__auto___31052,G__28490_31049,G__28490_31050__$1,n__5636__auto___31047,jobs,results,process__$1,async))
})();
var state__28095__auto__ = (function (){var statearr_28534 = f__28094__auto__();
(statearr_28534[(6)] = c__28093__auto___31052);

return statearr_28534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
});})(__31048,c__28093__auto___31052,G__28490_31049,G__28490_31050__$1,n__5636__auto___31047,jobs,results,process__$1,async))
);


break;
case "async":
var c__28093__auto___31069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31048,c__28093__auto___31069,G__28490_31049,G__28490_31050__$1,n__5636__auto___31047,jobs,results,process__$1,async){
return (function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = ((function (__31048,c__28093__auto___31069,G__28490_31049,G__28490_31050__$1,n__5636__auto___31047,jobs,results,process__$1,async){
return (function (state_28548){
var state_val_28549 = (state_28548[(1)]);
if((state_val_28549 === (1))){
var state_28548__$1 = state_28548;
var statearr_28555_31071 = state_28548__$1;
(statearr_28555_31071[(2)] = null);

(statearr_28555_31071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28549 === (2))){
var state_28548__$1 = state_28548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28548__$1,(4),jobs);
} else {
if((state_val_28549 === (3))){
var inst_28546 = (state_28548[(2)]);
var state_28548__$1 = state_28548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28548__$1,inst_28546);
} else {
if((state_val_28549 === (4))){
var inst_28538 = (state_28548[(2)]);
var inst_28539 = async(inst_28538);
var state_28548__$1 = state_28548;
if(cljs.core.truth_(inst_28539)){
var statearr_28561_31074 = state_28548__$1;
(statearr_28561_31074[(1)] = (5));

} else {
var statearr_28564_31075 = state_28548__$1;
(statearr_28564_31075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28549 === (5))){
var state_28548__$1 = state_28548;
var statearr_28567_31076 = state_28548__$1;
(statearr_28567_31076[(2)] = null);

(statearr_28567_31076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28549 === (6))){
var state_28548__$1 = state_28548;
var statearr_28569_31077 = state_28548__$1;
(statearr_28569_31077[(2)] = null);

(statearr_28569_31077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28549 === (7))){
var inst_28544 = (state_28548[(2)]);
var state_28548__$1 = state_28548;
var statearr_28570_31078 = state_28548__$1;
(statearr_28570_31078[(2)] = inst_28544);

(statearr_28570_31078[(1)] = (3));


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
});})(__31048,c__28093__auto___31069,G__28490_31049,G__28490_31050__$1,n__5636__auto___31047,jobs,results,process__$1,async))
;
return ((function (__31048,switch__27279__auto__,c__28093__auto___31069,G__28490_31049,G__28490_31050__$1,n__5636__auto___31047,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0 = (function (){
var statearr_28573 = [null,null,null,null,null,null,null];
(statearr_28573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__);

(statearr_28573[(1)] = (1));

return statearr_28573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1 = (function (state_28548){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_28548);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e28576){var ex__27283__auto__ = e28576;
var statearr_28577_31079 = state_28548;
(statearr_28577_31079[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_28548[(4)]))){
var statearr_28578_31083 = state_28548;
(statearr_28578_31083[(1)] = cljs.core.first((state_28548[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31084 = state_28548;
state_28548 = G__31084;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__ = function(state_28548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1.call(this,state_28548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__;
})()
;})(__31048,switch__27279__auto__,c__28093__auto___31069,G__28490_31049,G__28490_31050__$1,n__5636__auto___31047,jobs,results,process__$1,async))
})();
var state__28095__auto__ = (function (){var statearr_28583 = f__28094__auto__();
(statearr_28583[(6)] = c__28093__auto___31069);

return statearr_28583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
});})(__31048,c__28093__auto___31069,G__28490_31049,G__28490_31050__$1,n__5636__auto___31047,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28490_31050__$1)].join('')));

}

var G__31086 = (__31048 + (1));
__31048 = G__31086;
continue;
} else {
}
break;
}

var c__28093__auto___31087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_28616){
var state_val_28617 = (state_28616[(1)]);
if((state_val_28617 === (7))){
var inst_28612 = (state_28616[(2)]);
var state_28616__$1 = state_28616;
var statearr_28620_31088 = state_28616__$1;
(statearr_28620_31088[(2)] = inst_28612);

(statearr_28620_31088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (1))){
var state_28616__$1 = state_28616;
var statearr_28621_31090 = state_28616__$1;
(statearr_28621_31090[(2)] = null);

(statearr_28621_31090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (4))){
var inst_28593 = (state_28616[(7)]);
var inst_28593__$1 = (state_28616[(2)]);
var inst_28594 = (inst_28593__$1 == null);
var state_28616__$1 = (function (){var statearr_28623 = state_28616;
(statearr_28623[(7)] = inst_28593__$1);

return statearr_28623;
})();
if(cljs.core.truth_(inst_28594)){
var statearr_28624_31091 = state_28616__$1;
(statearr_28624_31091[(1)] = (5));

} else {
var statearr_28627_31093 = state_28616__$1;
(statearr_28627_31093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (6))){
var inst_28593 = (state_28616[(7)]);
var inst_28598 = (state_28616[(8)]);
var inst_28598__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28602 = [inst_28593,inst_28598__$1];
var inst_28603 = (new cljs.core.PersistentVector(null,2,(5),inst_28601,inst_28602,null));
var state_28616__$1 = (function (){var statearr_28630 = state_28616;
(statearr_28630[(8)] = inst_28598__$1);

return statearr_28630;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28616__$1,(8),jobs,inst_28603);
} else {
if((state_val_28617 === (3))){
var inst_28614 = (state_28616[(2)]);
var state_28616__$1 = state_28616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28616__$1,inst_28614);
} else {
if((state_val_28617 === (2))){
var state_28616__$1 = state_28616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28616__$1,(4),from);
} else {
if((state_val_28617 === (9))){
var inst_28609 = (state_28616[(2)]);
var state_28616__$1 = (function (){var statearr_28633 = state_28616;
(statearr_28633[(9)] = inst_28609);

return statearr_28633;
})();
var statearr_28634_31095 = state_28616__$1;
(statearr_28634_31095[(2)] = null);

(statearr_28634_31095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (5))){
var inst_28596 = cljs.core.async.close_BANG_(jobs);
var state_28616__$1 = state_28616;
var statearr_28635_31096 = state_28616__$1;
(statearr_28635_31096[(2)] = inst_28596);

(statearr_28635_31096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28617 === (8))){
var inst_28598 = (state_28616[(8)]);
var inst_28605 = (state_28616[(2)]);
var state_28616__$1 = (function (){var statearr_28640 = state_28616;
(statearr_28640[(10)] = inst_28605);

return statearr_28640;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28616__$1,(9),results,inst_28598);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0 = (function (){
var statearr_28644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__);

(statearr_28644[(1)] = (1));

return statearr_28644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1 = (function (state_28616){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_28616);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e28645){var ex__27283__auto__ = e28645;
var statearr_28646_31101 = state_28616;
(statearr_28646_31101[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_28616[(4)]))){
var statearr_28647_31103 = state_28616;
(statearr_28647_31103[(1)] = cljs.core.first((state_28616[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31104 = state_28616;
state_28616 = G__31104;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__ = function(state_28616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1.call(this,state_28616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_28648 = f__28094__auto__();
(statearr_28648[(6)] = c__28093__auto___31087);

return statearr_28648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));


var c__28093__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_28690){
var state_val_28691 = (state_28690[(1)]);
if((state_val_28691 === (7))){
var inst_28686 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28692_31105 = state_28690__$1;
(statearr_28692_31105[(2)] = inst_28686);

(statearr_28692_31105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (20))){
var state_28690__$1 = state_28690;
var statearr_28693_31106 = state_28690__$1;
(statearr_28693_31106[(2)] = null);

(statearr_28693_31106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (1))){
var state_28690__$1 = state_28690;
var statearr_28696_31107 = state_28690__$1;
(statearr_28696_31107[(2)] = null);

(statearr_28696_31107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (4))){
var inst_28651 = (state_28690[(7)]);
var inst_28651__$1 = (state_28690[(2)]);
var inst_28653 = (inst_28651__$1 == null);
var state_28690__$1 = (function (){var statearr_28699 = state_28690;
(statearr_28699[(7)] = inst_28651__$1);

return statearr_28699;
})();
if(cljs.core.truth_(inst_28653)){
var statearr_28700_31108 = state_28690__$1;
(statearr_28700_31108[(1)] = (5));

} else {
var statearr_28701_31109 = state_28690__$1;
(statearr_28701_31109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (15))){
var inst_28667 = (state_28690[(8)]);
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28690__$1,(18),to,inst_28667);
} else {
if((state_val_28691 === (21))){
var inst_28681 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28704_31111 = state_28690__$1;
(statearr_28704_31111[(2)] = inst_28681);

(statearr_28704_31111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (13))){
var inst_28683 = (state_28690[(2)]);
var state_28690__$1 = (function (){var statearr_28706 = state_28690;
(statearr_28706[(9)] = inst_28683);

return statearr_28706;
})();
var statearr_28707_31112 = state_28690__$1;
(statearr_28707_31112[(2)] = null);

(statearr_28707_31112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (6))){
var inst_28651 = (state_28690[(7)]);
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28690__$1,(11),inst_28651);
} else {
if((state_val_28691 === (17))){
var inst_28676 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
if(cljs.core.truth_(inst_28676)){
var statearr_28713_31113 = state_28690__$1;
(statearr_28713_31113[(1)] = (19));

} else {
var statearr_28714_31114 = state_28690__$1;
(statearr_28714_31114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (3))){
var inst_28688 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28690__$1,inst_28688);
} else {
if((state_val_28691 === (12))){
var inst_28664 = (state_28690[(10)]);
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28690__$1,(14),inst_28664);
} else {
if((state_val_28691 === (2))){
var state_28690__$1 = state_28690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28690__$1,(4),results);
} else {
if((state_val_28691 === (19))){
var state_28690__$1 = state_28690;
var statearr_28718_31116 = state_28690__$1;
(statearr_28718_31116[(2)] = null);

(statearr_28718_31116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (11))){
var inst_28664 = (state_28690[(2)]);
var state_28690__$1 = (function (){var statearr_28721 = state_28690;
(statearr_28721[(10)] = inst_28664);

return statearr_28721;
})();
var statearr_28722_31118 = state_28690__$1;
(statearr_28722_31118[(2)] = null);

(statearr_28722_31118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (9))){
var state_28690__$1 = state_28690;
var statearr_28725_31120 = state_28690__$1;
(statearr_28725_31120[(2)] = null);

(statearr_28725_31120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (5))){
var state_28690__$1 = state_28690;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28728_31121 = state_28690__$1;
(statearr_28728_31121[(1)] = (8));

} else {
var statearr_28729_31122 = state_28690__$1;
(statearr_28729_31122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (14))){
var inst_28667 = (state_28690[(8)]);
var inst_28669 = (state_28690[(11)]);
var inst_28667__$1 = (state_28690[(2)]);
var inst_28668 = (inst_28667__$1 == null);
var inst_28669__$1 = cljs.core.not(inst_28668);
var state_28690__$1 = (function (){var statearr_28732 = state_28690;
(statearr_28732[(8)] = inst_28667__$1);

(statearr_28732[(11)] = inst_28669__$1);

return statearr_28732;
})();
if(inst_28669__$1){
var statearr_28733_31123 = state_28690__$1;
(statearr_28733_31123[(1)] = (15));

} else {
var statearr_28734_31125 = state_28690__$1;
(statearr_28734_31125[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (16))){
var inst_28669 = (state_28690[(11)]);
var state_28690__$1 = state_28690;
var statearr_28738_31126 = state_28690__$1;
(statearr_28738_31126[(2)] = inst_28669);

(statearr_28738_31126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (10))){
var inst_28661 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28740_31129 = state_28690__$1;
(statearr_28740_31129[(2)] = inst_28661);

(statearr_28740_31129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (18))){
var inst_28673 = (state_28690[(2)]);
var state_28690__$1 = state_28690;
var statearr_28743_31132 = state_28690__$1;
(statearr_28743_31132[(2)] = inst_28673);

(statearr_28743_31132[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28691 === (8))){
var inst_28657 = cljs.core.async.close_BANG_(to);
var state_28690__$1 = state_28690;
var statearr_28747_31133 = state_28690__$1;
(statearr_28747_31133[(2)] = inst_28657);

(statearr_28747_31133[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0 = (function (){
var statearr_28749 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__);

(statearr_28749[(1)] = (1));

return statearr_28749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1 = (function (state_28690){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_28690);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e28750){var ex__27283__auto__ = e28750;
var statearr_28751_31135 = state_28690;
(statearr_28751_31135[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_28690[(4)]))){
var statearr_28754_31136 = state_28690;
(statearr_28754_31136[(1)] = cljs.core.first((state_28690[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31137 = state_28690;
state_28690 = G__31137;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__ = function(state_28690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1.call(this,state_28690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_28759 = f__28094__auto__();
(statearr_28759[(6)] = c__28093__auto__);

return statearr_28759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

return c__28093__auto__;
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
var G__28773 = arguments.length;
switch (G__28773) {
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
var G__28781 = arguments.length;
switch (G__28781) {
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
var G__28786 = arguments.length;
switch (G__28786) {
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
var c__28093__auto___31149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_28813){
var state_val_28814 = (state_28813[(1)]);
if((state_val_28814 === (7))){
var inst_28809 = (state_28813[(2)]);
var state_28813__$1 = state_28813;
var statearr_28816_31151 = state_28813__$1;
(statearr_28816_31151[(2)] = inst_28809);

(statearr_28816_31151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28814 === (1))){
var state_28813__$1 = state_28813;
var statearr_28817_31152 = state_28813__$1;
(statearr_28817_31152[(2)] = null);

(statearr_28817_31152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28814 === (4))){
var inst_28790 = (state_28813[(7)]);
var inst_28790__$1 = (state_28813[(2)]);
var inst_28791 = (inst_28790__$1 == null);
var state_28813__$1 = (function (){var statearr_28818 = state_28813;
(statearr_28818[(7)] = inst_28790__$1);

return statearr_28818;
})();
if(cljs.core.truth_(inst_28791)){
var statearr_28819_31153 = state_28813__$1;
(statearr_28819_31153[(1)] = (5));

} else {
var statearr_28820_31154 = state_28813__$1;
(statearr_28820_31154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28814 === (13))){
var state_28813__$1 = state_28813;
var statearr_28823_31155 = state_28813__$1;
(statearr_28823_31155[(2)] = null);

(statearr_28823_31155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28814 === (6))){
var inst_28790 = (state_28813[(7)]);
var inst_28796 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28790) : p.call(null,inst_28790));
var state_28813__$1 = state_28813;
if(cljs.core.truth_(inst_28796)){
var statearr_28826_31156 = state_28813__$1;
(statearr_28826_31156[(1)] = (9));

} else {
var statearr_28827_31157 = state_28813__$1;
(statearr_28827_31157[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28814 === (3))){
var inst_28811 = (state_28813[(2)]);
var state_28813__$1 = state_28813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28813__$1,inst_28811);
} else {
if((state_val_28814 === (12))){
var state_28813__$1 = state_28813;
var statearr_28832_31160 = state_28813__$1;
(statearr_28832_31160[(2)] = null);

(statearr_28832_31160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28814 === (2))){
var state_28813__$1 = state_28813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28813__$1,(4),ch);
} else {
if((state_val_28814 === (11))){
var inst_28790 = (state_28813[(7)]);
var inst_28800 = (state_28813[(2)]);
var state_28813__$1 = state_28813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28813__$1,(8),inst_28800,inst_28790);
} else {
if((state_val_28814 === (9))){
var state_28813__$1 = state_28813;
var statearr_28834_31162 = state_28813__$1;
(statearr_28834_31162[(2)] = tc);

(statearr_28834_31162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28814 === (5))){
var inst_28793 = cljs.core.async.close_BANG_(tc);
var inst_28794 = cljs.core.async.close_BANG_(fc);
var state_28813__$1 = (function (){var statearr_28836 = state_28813;
(statearr_28836[(8)] = inst_28793);

return statearr_28836;
})();
var statearr_28837_31163 = state_28813__$1;
(statearr_28837_31163[(2)] = inst_28794);

(statearr_28837_31163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28814 === (14))){
var inst_28807 = (state_28813[(2)]);
var state_28813__$1 = state_28813;
var statearr_28840_31164 = state_28813__$1;
(statearr_28840_31164[(2)] = inst_28807);

(statearr_28840_31164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28814 === (10))){
var state_28813__$1 = state_28813;
var statearr_28843_31165 = state_28813__$1;
(statearr_28843_31165[(2)] = fc);

(statearr_28843_31165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28814 === (8))){
var inst_28802 = (state_28813[(2)]);
var state_28813__$1 = state_28813;
if(cljs.core.truth_(inst_28802)){
var statearr_28845_31166 = state_28813__$1;
(statearr_28845_31166[(1)] = (12));

} else {
var statearr_28846_31167 = state_28813__$1;
(statearr_28846_31167[(1)] = (13));

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
var cljs$core$async$state_machine__27280__auto__ = null;
var cljs$core$async$state_machine__27280__auto____0 = (function (){
var statearr_28848 = [null,null,null,null,null,null,null,null,null];
(statearr_28848[(0)] = cljs$core$async$state_machine__27280__auto__);

(statearr_28848[(1)] = (1));

return statearr_28848;
});
var cljs$core$async$state_machine__27280__auto____1 = (function (state_28813){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_28813);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e28849){var ex__27283__auto__ = e28849;
var statearr_28850_31168 = state_28813;
(statearr_28850_31168[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_28813[(4)]))){
var statearr_28856_31169 = state_28813;
(statearr_28856_31169[(1)] = cljs.core.first((state_28813[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31171 = state_28813;
state_28813 = G__31171;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$state_machine__27280__auto__ = function(state_28813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27280__auto____1.call(this,state_28813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27280__auto____0;
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27280__auto____1;
return cljs$core$async$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_28858 = f__28094__auto__();
(statearr_28858[(6)] = c__28093__auto___31149);

return statearr_28858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
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
var c__28093__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_28885){
var state_val_28886 = (state_28885[(1)]);
if((state_val_28886 === (7))){
var inst_28881 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
var statearr_28890_31176 = state_28885__$1;
(statearr_28890_31176[(2)] = inst_28881);

(statearr_28890_31176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (1))){
var inst_28860 = init;
var inst_28861 = inst_28860;
var state_28885__$1 = (function (){var statearr_28893 = state_28885;
(statearr_28893[(7)] = inst_28861);

return statearr_28893;
})();
var statearr_28894_31177 = state_28885__$1;
(statearr_28894_31177[(2)] = null);

(statearr_28894_31177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (4))){
var inst_28866 = (state_28885[(8)]);
var inst_28866__$1 = (state_28885[(2)]);
var inst_28869 = (inst_28866__$1 == null);
var state_28885__$1 = (function (){var statearr_28898 = state_28885;
(statearr_28898[(8)] = inst_28866__$1);

return statearr_28898;
})();
if(cljs.core.truth_(inst_28869)){
var statearr_28900_31180 = state_28885__$1;
(statearr_28900_31180[(1)] = (5));

} else {
var statearr_28902_31182 = state_28885__$1;
(statearr_28902_31182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (6))){
var inst_28861 = (state_28885[(7)]);
var inst_28866 = (state_28885[(8)]);
var inst_28872 = (state_28885[(9)]);
var inst_28872__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28861,inst_28866) : f.call(null,inst_28861,inst_28866));
var inst_28873 = cljs.core.reduced_QMARK_(inst_28872__$1);
var state_28885__$1 = (function (){var statearr_28904 = state_28885;
(statearr_28904[(9)] = inst_28872__$1);

return statearr_28904;
})();
if(inst_28873){
var statearr_28905_31184 = state_28885__$1;
(statearr_28905_31184[(1)] = (8));

} else {
var statearr_28907_31185 = state_28885__$1;
(statearr_28907_31185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (3))){
var inst_28883 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28885__$1,inst_28883);
} else {
if((state_val_28886 === (2))){
var state_28885__$1 = state_28885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28885__$1,(4),ch);
} else {
if((state_val_28886 === (9))){
var inst_28872 = (state_28885[(9)]);
var inst_28861 = inst_28872;
var state_28885__$1 = (function (){var statearr_28908 = state_28885;
(statearr_28908[(7)] = inst_28861);

return statearr_28908;
})();
var statearr_28910_31187 = state_28885__$1;
(statearr_28910_31187[(2)] = null);

(statearr_28910_31187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (5))){
var inst_28861 = (state_28885[(7)]);
var state_28885__$1 = state_28885;
var statearr_28912_31189 = state_28885__$1;
(statearr_28912_31189[(2)] = inst_28861);

(statearr_28912_31189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (10))){
var inst_28879 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
var statearr_28914_31192 = state_28885__$1;
(statearr_28914_31192[(2)] = inst_28879);

(statearr_28914_31192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (8))){
var inst_28872 = (state_28885[(9)]);
var inst_28875 = cljs.core.deref(inst_28872);
var state_28885__$1 = state_28885;
var statearr_28915_31193 = state_28885__$1;
(statearr_28915_31193[(2)] = inst_28875);

(statearr_28915_31193[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27280__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27280__auto____0 = (function (){
var statearr_28919 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28919[(0)] = cljs$core$async$reduce_$_state_machine__27280__auto__);

(statearr_28919[(1)] = (1));

return statearr_28919;
});
var cljs$core$async$reduce_$_state_machine__27280__auto____1 = (function (state_28885){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_28885);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e28920){var ex__27283__auto__ = e28920;
var statearr_28921_31196 = state_28885;
(statearr_28921_31196[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_28885[(4)]))){
var statearr_28923_31197 = state_28885;
(statearr_28923_31197[(1)] = cljs.core.first((state_28885[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31198 = state_28885;
state_28885 = G__31198;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27280__auto__ = function(state_28885){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27280__auto____1.call(this,state_28885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27280__auto____0;
cljs$core$async$reduce_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27280__auto____1;
return cljs$core$async$reduce_$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_28929 = f__28094__auto__();
(statearr_28929[(6)] = c__28093__auto__);

return statearr_28929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

return c__28093__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28093__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_28935){
var state_val_28936 = (state_28935[(1)]);
if((state_val_28936 === (1))){
var inst_28930 = cljs.core.async.reduce(f__$1,init,ch);
var state_28935__$1 = state_28935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28935__$1,(2),inst_28930);
} else {
if((state_val_28936 === (2))){
var inst_28932 = (state_28935[(2)]);
var inst_28933 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28932) : f__$1.call(null,inst_28932));
var state_28935__$1 = state_28935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28935__$1,inst_28933);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27280__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27280__auto____0 = (function (){
var statearr_28943 = [null,null,null,null,null,null,null];
(statearr_28943[(0)] = cljs$core$async$transduce_$_state_machine__27280__auto__);

(statearr_28943[(1)] = (1));

return statearr_28943;
});
var cljs$core$async$transduce_$_state_machine__27280__auto____1 = (function (state_28935){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_28935);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e28945){var ex__27283__auto__ = e28945;
var statearr_28946_31200 = state_28935;
(statearr_28946_31200[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_28935[(4)]))){
var statearr_28947_31201 = state_28935;
(statearr_28947_31201[(1)] = cljs.core.first((state_28935[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31202 = state_28935;
state_28935 = G__31202;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27280__auto__ = function(state_28935){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27280__auto____1.call(this,state_28935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27280__auto____0;
cljs$core$async$transduce_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27280__auto____1;
return cljs$core$async$transduce_$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_28949 = f__28094__auto__();
(statearr_28949[(6)] = c__28093__auto__);

return statearr_28949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

return c__28093__auto__;
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
var G__28954 = arguments.length;
switch (G__28954) {
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
var c__28093__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_28983){
var state_val_28984 = (state_28983[(1)]);
if((state_val_28984 === (7))){
var inst_28965 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
var statearr_28987_31212 = state_28983__$1;
(statearr_28987_31212[(2)] = inst_28965);

(statearr_28987_31212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (1))){
var inst_28958 = cljs.core.seq(coll);
var inst_28959 = inst_28958;
var state_28983__$1 = (function (){var statearr_28989 = state_28983;
(statearr_28989[(7)] = inst_28959);

return statearr_28989;
})();
var statearr_28992_31213 = state_28983__$1;
(statearr_28992_31213[(2)] = null);

(statearr_28992_31213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (4))){
var inst_28959 = (state_28983[(7)]);
var inst_28962 = cljs.core.first(inst_28959);
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28983__$1,(7),ch,inst_28962);
} else {
if((state_val_28984 === (13))){
var inst_28977 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
var statearr_28998_31214 = state_28983__$1;
(statearr_28998_31214[(2)] = inst_28977);

(statearr_28998_31214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (6))){
var inst_28968 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
if(cljs.core.truth_(inst_28968)){
var statearr_28999_31215 = state_28983__$1;
(statearr_28999_31215[(1)] = (8));

} else {
var statearr_29003_31216 = state_28983__$1;
(statearr_29003_31216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (3))){
var inst_28981 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28983__$1,inst_28981);
} else {
if((state_val_28984 === (12))){
var state_28983__$1 = state_28983;
var statearr_29006_31217 = state_28983__$1;
(statearr_29006_31217[(2)] = null);

(statearr_29006_31217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (2))){
var inst_28959 = (state_28983[(7)]);
var state_28983__$1 = state_28983;
if(cljs.core.truth_(inst_28959)){
var statearr_29007_31218 = state_28983__$1;
(statearr_29007_31218[(1)] = (4));

} else {
var statearr_29011_31219 = state_28983__$1;
(statearr_29011_31219[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (11))){
var inst_28974 = cljs.core.async.close_BANG_(ch);
var state_28983__$1 = state_28983;
var statearr_29012_31220 = state_28983__$1;
(statearr_29012_31220[(2)] = inst_28974);

(statearr_29012_31220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (9))){
var state_28983__$1 = state_28983;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29015_31221 = state_28983__$1;
(statearr_29015_31221[(1)] = (11));

} else {
var statearr_29016_31222 = state_28983__$1;
(statearr_29016_31222[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (5))){
var inst_28959 = (state_28983[(7)]);
var state_28983__$1 = state_28983;
var statearr_29019_31224 = state_28983__$1;
(statearr_29019_31224[(2)] = inst_28959);

(statearr_29019_31224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (10))){
var inst_28979 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
var statearr_29021_31225 = state_28983__$1;
(statearr_29021_31225[(2)] = inst_28979);

(statearr_29021_31225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (8))){
var inst_28959 = (state_28983[(7)]);
var inst_28970 = cljs.core.next(inst_28959);
var inst_28959__$1 = inst_28970;
var state_28983__$1 = (function (){var statearr_29022 = state_28983;
(statearr_29022[(7)] = inst_28959__$1);

return statearr_29022;
})();
var statearr_29024_31226 = state_28983__$1;
(statearr_29024_31226[(2)] = null);

(statearr_29024_31226[(1)] = (2));


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
var cljs$core$async$state_machine__27280__auto__ = null;
var cljs$core$async$state_machine__27280__auto____0 = (function (){
var statearr_29026 = [null,null,null,null,null,null,null,null];
(statearr_29026[(0)] = cljs$core$async$state_machine__27280__auto__);

(statearr_29026[(1)] = (1));

return statearr_29026;
});
var cljs$core$async$state_machine__27280__auto____1 = (function (state_28983){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_28983);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e29029){var ex__27283__auto__ = e29029;
var statearr_29030_31227 = state_28983;
(statearr_29030_31227[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_28983[(4)]))){
var statearr_29031_31228 = state_28983;
(statearr_29031_31228[(1)] = cljs.core.first((state_28983[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31230 = state_28983;
state_28983 = G__31230;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$state_machine__27280__auto__ = function(state_28983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27280__auto____1.call(this,state_28983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27280__auto____0;
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27280__auto____1;
return cljs$core$async$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_29034 = f__28094__auto__();
(statearr_29034[(6)] = c__28093__auto__);

return statearr_29034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

return c__28093__auto__;
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
var G__29043 = arguments.length;
switch (G__29043) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_31233 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_31233(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_31235 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_31235(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_31236 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_31236(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_31239 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_31239(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29078 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29078 = (function (ch,cs,meta29079){
this.ch = ch;
this.cs = cs;
this.meta29079 = meta29079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29080,meta29079__$1){
var self__ = this;
var _29080__$1 = this;
return (new cljs.core.async.t_cljs$core$async29078(self__.ch,self__.cs,meta29079__$1));
}));

(cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29080){
var self__ = this;
var _29080__$1 = this;
return self__.meta29079;
}));

(cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29078.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29079","meta29079",1718570552,null)], null);
}));

(cljs.core.async.t_cljs$core$async29078.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29078");

(cljs.core.async.t_cljs$core$async29078.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29078");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29078.
 */
cljs.core.async.__GT_t_cljs$core$async29078 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29078(ch__$1,cs__$1,meta29079){
return (new cljs.core.async.t_cljs$core$async29078(ch__$1,cs__$1,meta29079));
});

}

return (new cljs.core.async.t_cljs$core$async29078(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28093__auto___31243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_29239){
var state_val_29240 = (state_29239[(1)]);
if((state_val_29240 === (7))){
var inst_29231 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
var statearr_29243_31244 = state_29239__$1;
(statearr_29243_31244[(2)] = inst_29231);

(statearr_29243_31244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (20))){
var inst_29127 = (state_29239[(7)]);
var inst_29140 = cljs.core.first(inst_29127);
var inst_29141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29140,(0),null);
var inst_29142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29140,(1),null);
var state_29239__$1 = (function (){var statearr_29244 = state_29239;
(statearr_29244[(8)] = inst_29141);

return statearr_29244;
})();
if(cljs.core.truth_(inst_29142)){
var statearr_29247_31246 = state_29239__$1;
(statearr_29247_31246[(1)] = (22));

} else {
var statearr_29254_31247 = state_29239__$1;
(statearr_29254_31247[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (27))){
var inst_29172 = (state_29239[(9)]);
var inst_29174 = (state_29239[(10)]);
var inst_29181 = (state_29239[(11)]);
var inst_29092 = (state_29239[(12)]);
var inst_29181__$1 = cljs.core._nth(inst_29172,inst_29174);
var inst_29182 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29181__$1,inst_29092,done);
var state_29239__$1 = (function (){var statearr_29257 = state_29239;
(statearr_29257[(11)] = inst_29181__$1);

return statearr_29257;
})();
if(cljs.core.truth_(inst_29182)){
var statearr_29258_31248 = state_29239__$1;
(statearr_29258_31248[(1)] = (30));

} else {
var statearr_29259_31249 = state_29239__$1;
(statearr_29259_31249[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (1))){
var state_29239__$1 = state_29239;
var statearr_29263_31250 = state_29239__$1;
(statearr_29263_31250[(2)] = null);

(statearr_29263_31250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (24))){
var inst_29127 = (state_29239[(7)]);
var inst_29149 = (state_29239[(2)]);
var inst_29150 = cljs.core.next(inst_29127);
var inst_29102 = inst_29150;
var inst_29103 = null;
var inst_29104 = (0);
var inst_29105 = (0);
var state_29239__$1 = (function (){var statearr_29264 = state_29239;
(statearr_29264[(13)] = inst_29149);

(statearr_29264[(14)] = inst_29102);

(statearr_29264[(15)] = inst_29103);

(statearr_29264[(16)] = inst_29104);

(statearr_29264[(17)] = inst_29105);

return statearr_29264;
})();
var statearr_29265_31253 = state_29239__$1;
(statearr_29265_31253[(2)] = null);

(statearr_29265_31253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (39))){
var state_29239__$1 = state_29239;
var statearr_29270_31256 = state_29239__$1;
(statearr_29270_31256[(2)] = null);

(statearr_29270_31256[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (4))){
var inst_29092 = (state_29239[(12)]);
var inst_29092__$1 = (state_29239[(2)]);
var inst_29093 = (inst_29092__$1 == null);
var state_29239__$1 = (function (){var statearr_29271 = state_29239;
(statearr_29271[(12)] = inst_29092__$1);

return statearr_29271;
})();
if(cljs.core.truth_(inst_29093)){
var statearr_29272_31257 = state_29239__$1;
(statearr_29272_31257[(1)] = (5));

} else {
var statearr_29273_31258 = state_29239__$1;
(statearr_29273_31258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (15))){
var inst_29105 = (state_29239[(17)]);
var inst_29102 = (state_29239[(14)]);
var inst_29103 = (state_29239[(15)]);
var inst_29104 = (state_29239[(16)]);
var inst_29122 = (state_29239[(2)]);
var inst_29124 = (inst_29105 + (1));
var tmp29267 = inst_29103;
var tmp29268 = inst_29104;
var tmp29269 = inst_29102;
var inst_29102__$1 = tmp29269;
var inst_29103__$1 = tmp29267;
var inst_29104__$1 = tmp29268;
var inst_29105__$1 = inst_29124;
var state_29239__$1 = (function (){var statearr_29274 = state_29239;
(statearr_29274[(18)] = inst_29122);

(statearr_29274[(14)] = inst_29102__$1);

(statearr_29274[(15)] = inst_29103__$1);

(statearr_29274[(16)] = inst_29104__$1);

(statearr_29274[(17)] = inst_29105__$1);

return statearr_29274;
})();
var statearr_29275_31259 = state_29239__$1;
(statearr_29275_31259[(2)] = null);

(statearr_29275_31259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (21))){
var inst_29153 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
var statearr_29282_31260 = state_29239__$1;
(statearr_29282_31260[(2)] = inst_29153);

(statearr_29282_31260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (31))){
var inst_29181 = (state_29239[(11)]);
var inst_29185 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29181);
var state_29239__$1 = state_29239;
var statearr_29284_31262 = state_29239__$1;
(statearr_29284_31262[(2)] = inst_29185);

(statearr_29284_31262[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (32))){
var inst_29174 = (state_29239[(10)]);
var inst_29171 = (state_29239[(19)]);
var inst_29172 = (state_29239[(9)]);
var inst_29173 = (state_29239[(20)]);
var inst_29187 = (state_29239[(2)]);
var inst_29188 = (inst_29174 + (1));
var tmp29276 = inst_29171;
var tmp29277 = inst_29172;
var tmp29278 = inst_29173;
var inst_29171__$1 = tmp29276;
var inst_29172__$1 = tmp29277;
var inst_29173__$1 = tmp29278;
var inst_29174__$1 = inst_29188;
var state_29239__$1 = (function (){var statearr_29285 = state_29239;
(statearr_29285[(21)] = inst_29187);

(statearr_29285[(19)] = inst_29171__$1);

(statearr_29285[(9)] = inst_29172__$1);

(statearr_29285[(20)] = inst_29173__$1);

(statearr_29285[(10)] = inst_29174__$1);

return statearr_29285;
})();
var statearr_29287_31265 = state_29239__$1;
(statearr_29287_31265[(2)] = null);

(statearr_29287_31265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (40))){
var inst_29203 = (state_29239[(22)]);
var inst_29208 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29203);
var state_29239__$1 = state_29239;
var statearr_29288_31266 = state_29239__$1;
(statearr_29288_31266[(2)] = inst_29208);

(statearr_29288_31266[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (33))){
var inst_29193 = (state_29239[(23)]);
var inst_29195 = cljs.core.chunked_seq_QMARK_(inst_29193);
var state_29239__$1 = state_29239;
if(inst_29195){
var statearr_29289_31269 = state_29239__$1;
(statearr_29289_31269[(1)] = (36));

} else {
var statearr_29290_31270 = state_29239__$1;
(statearr_29290_31270[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (13))){
var inst_29114 = (state_29239[(24)]);
var inst_29119 = cljs.core.async.close_BANG_(inst_29114);
var state_29239__$1 = state_29239;
var statearr_29291_31271 = state_29239__$1;
(statearr_29291_31271[(2)] = inst_29119);

(statearr_29291_31271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (22))){
var inst_29141 = (state_29239[(8)]);
var inst_29146 = cljs.core.async.close_BANG_(inst_29141);
var state_29239__$1 = state_29239;
var statearr_29293_31272 = state_29239__$1;
(statearr_29293_31272[(2)] = inst_29146);

(statearr_29293_31272[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (36))){
var inst_29193 = (state_29239[(23)]);
var inst_29197 = cljs.core.chunk_first(inst_29193);
var inst_29198 = cljs.core.chunk_rest(inst_29193);
var inst_29199 = cljs.core.count(inst_29197);
var inst_29171 = inst_29198;
var inst_29172 = inst_29197;
var inst_29173 = inst_29199;
var inst_29174 = (0);
var state_29239__$1 = (function (){var statearr_29294 = state_29239;
(statearr_29294[(19)] = inst_29171);

(statearr_29294[(9)] = inst_29172);

(statearr_29294[(20)] = inst_29173);

(statearr_29294[(10)] = inst_29174);

return statearr_29294;
})();
var statearr_29295_31274 = state_29239__$1;
(statearr_29295_31274[(2)] = null);

(statearr_29295_31274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (41))){
var inst_29193 = (state_29239[(23)]);
var inst_29210 = (state_29239[(2)]);
var inst_29211 = cljs.core.next(inst_29193);
var inst_29171 = inst_29211;
var inst_29172 = null;
var inst_29173 = (0);
var inst_29174 = (0);
var state_29239__$1 = (function (){var statearr_29297 = state_29239;
(statearr_29297[(25)] = inst_29210);

(statearr_29297[(19)] = inst_29171);

(statearr_29297[(9)] = inst_29172);

(statearr_29297[(20)] = inst_29173);

(statearr_29297[(10)] = inst_29174);

return statearr_29297;
})();
var statearr_29298_31275 = state_29239__$1;
(statearr_29298_31275[(2)] = null);

(statearr_29298_31275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (43))){
var state_29239__$1 = state_29239;
var statearr_29301_31276 = state_29239__$1;
(statearr_29301_31276[(2)] = null);

(statearr_29301_31276[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (29))){
var inst_29219 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
var statearr_29304_31278 = state_29239__$1;
(statearr_29304_31278[(2)] = inst_29219);

(statearr_29304_31278[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (44))){
var inst_29228 = (state_29239[(2)]);
var state_29239__$1 = (function (){var statearr_29305 = state_29239;
(statearr_29305[(26)] = inst_29228);

return statearr_29305;
})();
var statearr_29306_31283 = state_29239__$1;
(statearr_29306_31283[(2)] = null);

(statearr_29306_31283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (6))){
var inst_29163 = (state_29239[(27)]);
var inst_29162 = cljs.core.deref(cs);
var inst_29163__$1 = cljs.core.keys(inst_29162);
var inst_29164 = cljs.core.count(inst_29163__$1);
var inst_29165 = cljs.core.reset_BANG_(dctr,inst_29164);
var inst_29170 = cljs.core.seq(inst_29163__$1);
var inst_29171 = inst_29170;
var inst_29172 = null;
var inst_29173 = (0);
var inst_29174 = (0);
var state_29239__$1 = (function (){var statearr_29312 = state_29239;
(statearr_29312[(27)] = inst_29163__$1);

(statearr_29312[(28)] = inst_29165);

(statearr_29312[(19)] = inst_29171);

(statearr_29312[(9)] = inst_29172);

(statearr_29312[(20)] = inst_29173);

(statearr_29312[(10)] = inst_29174);

return statearr_29312;
})();
var statearr_29315_31285 = state_29239__$1;
(statearr_29315_31285[(2)] = null);

(statearr_29315_31285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (28))){
var inst_29171 = (state_29239[(19)]);
var inst_29193 = (state_29239[(23)]);
var inst_29193__$1 = cljs.core.seq(inst_29171);
var state_29239__$1 = (function (){var statearr_29321 = state_29239;
(statearr_29321[(23)] = inst_29193__$1);

return statearr_29321;
})();
if(inst_29193__$1){
var statearr_29322_31286 = state_29239__$1;
(statearr_29322_31286[(1)] = (33));

} else {
var statearr_29326_31287 = state_29239__$1;
(statearr_29326_31287[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (25))){
var inst_29174 = (state_29239[(10)]);
var inst_29173 = (state_29239[(20)]);
var inst_29178 = (inst_29174 < inst_29173);
var inst_29179 = inst_29178;
var state_29239__$1 = state_29239;
if(cljs.core.truth_(inst_29179)){
var statearr_29330_31288 = state_29239__$1;
(statearr_29330_31288[(1)] = (27));

} else {
var statearr_29331_31289 = state_29239__$1;
(statearr_29331_31289[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (34))){
var state_29239__$1 = state_29239;
var statearr_29336_31291 = state_29239__$1;
(statearr_29336_31291[(2)] = null);

(statearr_29336_31291[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (17))){
var state_29239__$1 = state_29239;
var statearr_29341_31293 = state_29239__$1;
(statearr_29341_31293[(2)] = null);

(statearr_29341_31293[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (3))){
var inst_29234 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29239__$1,inst_29234);
} else {
if((state_val_29240 === (12))){
var inst_29158 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
var statearr_29345_31295 = state_29239__$1;
(statearr_29345_31295[(2)] = inst_29158);

(statearr_29345_31295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (2))){
var state_29239__$1 = state_29239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29239__$1,(4),ch);
} else {
if((state_val_29240 === (23))){
var state_29239__$1 = state_29239;
var statearr_29350_31298 = state_29239__$1;
(statearr_29350_31298[(2)] = null);

(statearr_29350_31298[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (35))){
var inst_29217 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
var statearr_29354_31301 = state_29239__$1;
(statearr_29354_31301[(2)] = inst_29217);

(statearr_29354_31301[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (19))){
var inst_29127 = (state_29239[(7)]);
var inst_29131 = cljs.core.chunk_first(inst_29127);
var inst_29132 = cljs.core.chunk_rest(inst_29127);
var inst_29133 = cljs.core.count(inst_29131);
var inst_29102 = inst_29132;
var inst_29103 = inst_29131;
var inst_29104 = inst_29133;
var inst_29105 = (0);
var state_29239__$1 = (function (){var statearr_29360 = state_29239;
(statearr_29360[(14)] = inst_29102);

(statearr_29360[(15)] = inst_29103);

(statearr_29360[(16)] = inst_29104);

(statearr_29360[(17)] = inst_29105);

return statearr_29360;
})();
var statearr_29361_31302 = state_29239__$1;
(statearr_29361_31302[(2)] = null);

(statearr_29361_31302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (11))){
var inst_29102 = (state_29239[(14)]);
var inst_29127 = (state_29239[(7)]);
var inst_29127__$1 = cljs.core.seq(inst_29102);
var state_29239__$1 = (function (){var statearr_29366 = state_29239;
(statearr_29366[(7)] = inst_29127__$1);

return statearr_29366;
})();
if(inst_29127__$1){
var statearr_29369_31303 = state_29239__$1;
(statearr_29369_31303[(1)] = (16));

} else {
var statearr_29370_31304 = state_29239__$1;
(statearr_29370_31304[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (9))){
var inst_29160 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
var statearr_29374_31306 = state_29239__$1;
(statearr_29374_31306[(2)] = inst_29160);

(statearr_29374_31306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (5))){
var inst_29100 = cljs.core.deref(cs);
var inst_29101 = cljs.core.seq(inst_29100);
var inst_29102 = inst_29101;
var inst_29103 = null;
var inst_29104 = (0);
var inst_29105 = (0);
var state_29239__$1 = (function (){var statearr_29379 = state_29239;
(statearr_29379[(14)] = inst_29102);

(statearr_29379[(15)] = inst_29103);

(statearr_29379[(16)] = inst_29104);

(statearr_29379[(17)] = inst_29105);

return statearr_29379;
})();
var statearr_29381_31308 = state_29239__$1;
(statearr_29381_31308[(2)] = null);

(statearr_29381_31308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (14))){
var state_29239__$1 = state_29239;
var statearr_29384_31309 = state_29239__$1;
(statearr_29384_31309[(2)] = null);

(statearr_29384_31309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (45))){
var inst_29225 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
var statearr_29388_31310 = state_29239__$1;
(statearr_29388_31310[(2)] = inst_29225);

(statearr_29388_31310[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (26))){
var inst_29163 = (state_29239[(27)]);
var inst_29221 = (state_29239[(2)]);
var inst_29222 = cljs.core.seq(inst_29163);
var state_29239__$1 = (function (){var statearr_29389 = state_29239;
(statearr_29389[(29)] = inst_29221);

return statearr_29389;
})();
if(inst_29222){
var statearr_29390_31313 = state_29239__$1;
(statearr_29390_31313[(1)] = (42));

} else {
var statearr_29391_31314 = state_29239__$1;
(statearr_29391_31314[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (16))){
var inst_29127 = (state_29239[(7)]);
var inst_29129 = cljs.core.chunked_seq_QMARK_(inst_29127);
var state_29239__$1 = state_29239;
if(inst_29129){
var statearr_29392_31315 = state_29239__$1;
(statearr_29392_31315[(1)] = (19));

} else {
var statearr_29393_31316 = state_29239__$1;
(statearr_29393_31316[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (38))){
var inst_29214 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
var statearr_29394_31317 = state_29239__$1;
(statearr_29394_31317[(2)] = inst_29214);

(statearr_29394_31317[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (30))){
var state_29239__$1 = state_29239;
var statearr_29395_31318 = state_29239__$1;
(statearr_29395_31318[(2)] = null);

(statearr_29395_31318[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (10))){
var inst_29103 = (state_29239[(15)]);
var inst_29105 = (state_29239[(17)]);
var inst_29113 = cljs.core._nth(inst_29103,inst_29105);
var inst_29114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29113,(0),null);
var inst_29116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29113,(1),null);
var state_29239__$1 = (function (){var statearr_29396 = state_29239;
(statearr_29396[(24)] = inst_29114);

return statearr_29396;
})();
if(cljs.core.truth_(inst_29116)){
var statearr_29397_31320 = state_29239__$1;
(statearr_29397_31320[(1)] = (13));

} else {
var statearr_29398_31321 = state_29239__$1;
(statearr_29398_31321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (18))){
var inst_29156 = (state_29239[(2)]);
var state_29239__$1 = state_29239;
var statearr_29401_31322 = state_29239__$1;
(statearr_29401_31322[(2)] = inst_29156);

(statearr_29401_31322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (42))){
var state_29239__$1 = state_29239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29239__$1,(45),dchan);
} else {
if((state_val_29240 === (37))){
var inst_29193 = (state_29239[(23)]);
var inst_29203 = (state_29239[(22)]);
var inst_29092 = (state_29239[(12)]);
var inst_29203__$1 = cljs.core.first(inst_29193);
var inst_29205 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29203__$1,inst_29092,done);
var state_29239__$1 = (function (){var statearr_29403 = state_29239;
(statearr_29403[(22)] = inst_29203__$1);

return statearr_29403;
})();
if(cljs.core.truth_(inst_29205)){
var statearr_29405_31324 = state_29239__$1;
(statearr_29405_31324[(1)] = (39));

} else {
var statearr_29406_31325 = state_29239__$1;
(statearr_29406_31325[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29240 === (8))){
var inst_29105 = (state_29239[(17)]);
var inst_29104 = (state_29239[(16)]);
var inst_29107 = (inst_29105 < inst_29104);
var inst_29108 = inst_29107;
var state_29239__$1 = state_29239;
if(cljs.core.truth_(inst_29108)){
var statearr_29411_31326 = state_29239__$1;
(statearr_29411_31326[(1)] = (10));

} else {
var statearr_29412_31327 = state_29239__$1;
(statearr_29412_31327[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27280__auto__ = null;
var cljs$core$async$mult_$_state_machine__27280__auto____0 = (function (){
var statearr_29418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29418[(0)] = cljs$core$async$mult_$_state_machine__27280__auto__);

(statearr_29418[(1)] = (1));

return statearr_29418;
});
var cljs$core$async$mult_$_state_machine__27280__auto____1 = (function (state_29239){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_29239);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e29419){var ex__27283__auto__ = e29419;
var statearr_29421_31328 = state_29239;
(statearr_29421_31328[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_29239[(4)]))){
var statearr_29423_31329 = state_29239;
(statearr_29423_31329[(1)] = cljs.core.first((state_29239[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31330 = state_29239;
state_29239 = G__31330;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27280__auto__ = function(state_29239){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27280__auto____1.call(this,state_29239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27280__auto____0;
cljs$core$async$mult_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27280__auto____1;
return cljs$core$async$mult_$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_29425 = f__28094__auto__();
(statearr_29425[(6)] = c__28093__auto___31243);

return statearr_29425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
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
var G__29433 = arguments.length;
switch (G__29433) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_31333 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_31333(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_31336 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_31336(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_31337 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_31337(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_31339 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_31339(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_31342 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_31342(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31345 = arguments.length;
var i__5770__auto___31347 = (0);
while(true){
if((i__5770__auto___31347 < len__5769__auto___31345)){
args__5775__auto__.push((arguments[i__5770__auto___31347]));

var G__31351 = (i__5770__auto___31347 + (1));
i__5770__auto___31347 = G__31351;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29463){
var map__29464 = p__29463;
var map__29464__$1 = cljs.core.__destructure_map(map__29464);
var opts = map__29464__$1;
var statearr_29465_31352 = state;
(statearr_29465_31352[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_29467_31353 = state;
(statearr_29467_31353[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_29470_31354 = state;
(statearr_29470_31354[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29453){
var G__29454 = cljs.core.first(seq29453);
var seq29453__$1 = cljs.core.next(seq29453);
var G__29455 = cljs.core.first(seq29453__$1);
var seq29453__$2 = cljs.core.next(seq29453__$1);
var G__29456 = cljs.core.first(seq29453__$2);
var seq29453__$3 = cljs.core.next(seq29453__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29454,G__29455,G__29456,seq29453__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29500 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29500 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29501){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29501 = meta29501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29502,meta29501__$1){
var self__ = this;
var _29502__$1 = this;
return (new cljs.core.async.t_cljs$core$async29500(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29501__$1));
}));

(cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29502){
var self__ = this;
var _29502__$1 = this;
return self__.meta29501;
}));

(cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29500.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29501","meta29501",2022317005,null)], null);
}));

(cljs.core.async.t_cljs$core$async29500.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29500");

(cljs.core.async.t_cljs$core$async29500.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29500");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29500.
 */
cljs.core.async.__GT_t_cljs$core$async29500 = (function cljs$core$async$mix_$___GT_t_cljs$core$async29500(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29501){
return (new cljs.core.async.t_cljs$core$async29500(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29501));
});

}

return (new cljs.core.async.t_cljs$core$async29500(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28093__auto___31391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_29636){
var state_val_29637 = (state_29636[(1)]);
if((state_val_29637 === (7))){
var inst_29589 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
if(cljs.core.truth_(inst_29589)){
var statearr_29650_31394 = state_29636__$1;
(statearr_29650_31394[(1)] = (8));

} else {
var statearr_29651_31395 = state_29636__$1;
(statearr_29651_31395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (20))){
var inst_29579 = (state_29636[(7)]);
var state_29636__$1 = state_29636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29636__$1,(23),out,inst_29579);
} else {
if((state_val_29637 === (1))){
var inst_29557 = calc_state();
var inst_29560 = cljs.core.__destructure_map(inst_29557);
var inst_29561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29560,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29560,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29560,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29565 = inst_29557;
var state_29636__$1 = (function (){var statearr_29654 = state_29636;
(statearr_29654[(8)] = inst_29561);

(statearr_29654[(9)] = inst_29563);

(statearr_29654[(10)] = inst_29564);

(statearr_29654[(11)] = inst_29565);

return statearr_29654;
})();
var statearr_29657_31401 = state_29636__$1;
(statearr_29657_31401[(2)] = null);

(statearr_29657_31401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (24))){
var inst_29568 = (state_29636[(12)]);
var inst_29565 = inst_29568;
var state_29636__$1 = (function (){var statearr_29661 = state_29636;
(statearr_29661[(11)] = inst_29565);

return statearr_29661;
})();
var statearr_29662_31402 = state_29636__$1;
(statearr_29662_31402[(2)] = null);

(statearr_29662_31402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (4))){
var inst_29579 = (state_29636[(7)]);
var inst_29584 = (state_29636[(13)]);
var inst_29578 = (state_29636[(2)]);
var inst_29579__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29578,(0),null);
var inst_29581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29578,(1),null);
var inst_29584__$1 = (inst_29579__$1 == null);
var state_29636__$1 = (function (){var statearr_29663 = state_29636;
(statearr_29663[(7)] = inst_29579__$1);

(statearr_29663[(14)] = inst_29581);

(statearr_29663[(13)] = inst_29584__$1);

return statearr_29663;
})();
if(cljs.core.truth_(inst_29584__$1)){
var statearr_29664_31405 = state_29636__$1;
(statearr_29664_31405[(1)] = (5));

} else {
var statearr_29665_31406 = state_29636__$1;
(statearr_29665_31406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (15))){
var inst_29569 = (state_29636[(15)]);
var inst_29606 = (state_29636[(16)]);
var inst_29606__$1 = cljs.core.empty_QMARK_(inst_29569);
var state_29636__$1 = (function (){var statearr_29666 = state_29636;
(statearr_29666[(16)] = inst_29606__$1);

return statearr_29666;
})();
if(inst_29606__$1){
var statearr_29667_31409 = state_29636__$1;
(statearr_29667_31409[(1)] = (17));

} else {
var statearr_29668_31410 = state_29636__$1;
(statearr_29668_31410[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (21))){
var inst_29568 = (state_29636[(12)]);
var inst_29565 = inst_29568;
var state_29636__$1 = (function (){var statearr_29669 = state_29636;
(statearr_29669[(11)] = inst_29565);

return statearr_29669;
})();
var statearr_29670_31414 = state_29636__$1;
(statearr_29670_31414[(2)] = null);

(statearr_29670_31414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (13))){
var inst_29596 = (state_29636[(2)]);
var inst_29598 = calc_state();
var inst_29565 = inst_29598;
var state_29636__$1 = (function (){var statearr_29671 = state_29636;
(statearr_29671[(17)] = inst_29596);

(statearr_29671[(11)] = inst_29565);

return statearr_29671;
})();
var statearr_29672_31417 = state_29636__$1;
(statearr_29672_31417[(2)] = null);

(statearr_29672_31417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (22))){
var inst_29626 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
var statearr_29673_31419 = state_29636__$1;
(statearr_29673_31419[(2)] = inst_29626);

(statearr_29673_31419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (6))){
var inst_29581 = (state_29636[(14)]);
var inst_29587 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29581,change);
var state_29636__$1 = state_29636;
var statearr_29674_31422 = state_29636__$1;
(statearr_29674_31422[(2)] = inst_29587);

(statearr_29674_31422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (25))){
var state_29636__$1 = state_29636;
var statearr_29675_31424 = state_29636__$1;
(statearr_29675_31424[(2)] = null);

(statearr_29675_31424[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (17))){
var inst_29570 = (state_29636[(18)]);
var inst_29581 = (state_29636[(14)]);
var inst_29608 = (inst_29570.cljs$core$IFn$_invoke$arity$1 ? inst_29570.cljs$core$IFn$_invoke$arity$1(inst_29581) : inst_29570.call(null,inst_29581));
var inst_29609 = cljs.core.not(inst_29608);
var state_29636__$1 = state_29636;
var statearr_29676_31425 = state_29636__$1;
(statearr_29676_31425[(2)] = inst_29609);

(statearr_29676_31425[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (3))){
var inst_29630 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29636__$1,inst_29630);
} else {
if((state_val_29637 === (12))){
var state_29636__$1 = state_29636;
var statearr_29677_31426 = state_29636__$1;
(statearr_29677_31426[(2)] = null);

(statearr_29677_31426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (2))){
var inst_29565 = (state_29636[(11)]);
var inst_29568 = (state_29636[(12)]);
var inst_29568__$1 = cljs.core.__destructure_map(inst_29565);
var inst_29569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29568__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29568__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29568__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29636__$1 = (function (){var statearr_29678 = state_29636;
(statearr_29678[(12)] = inst_29568__$1);

(statearr_29678[(15)] = inst_29569);

(statearr_29678[(18)] = inst_29570);

return statearr_29678;
})();
return cljs.core.async.ioc_alts_BANG_(state_29636__$1,(4),inst_29571);
} else {
if((state_val_29637 === (23))){
var inst_29617 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
if(cljs.core.truth_(inst_29617)){
var statearr_29679_31427 = state_29636__$1;
(statearr_29679_31427[(1)] = (24));

} else {
var statearr_29680_31428 = state_29636__$1;
(statearr_29680_31428[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (19))){
var inst_29612 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
var statearr_29681_31429 = state_29636__$1;
(statearr_29681_31429[(2)] = inst_29612);

(statearr_29681_31429[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (11))){
var inst_29581 = (state_29636[(14)]);
var inst_29593 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29581);
var state_29636__$1 = state_29636;
var statearr_29682_31432 = state_29636__$1;
(statearr_29682_31432[(2)] = inst_29593);

(statearr_29682_31432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (9))){
var inst_29569 = (state_29636[(15)]);
var inst_29581 = (state_29636[(14)]);
var inst_29602 = (state_29636[(19)]);
var inst_29602__$1 = (inst_29569.cljs$core$IFn$_invoke$arity$1 ? inst_29569.cljs$core$IFn$_invoke$arity$1(inst_29581) : inst_29569.call(null,inst_29581));
var state_29636__$1 = (function (){var statearr_29683 = state_29636;
(statearr_29683[(19)] = inst_29602__$1);

return statearr_29683;
})();
if(cljs.core.truth_(inst_29602__$1)){
var statearr_29684_31435 = state_29636__$1;
(statearr_29684_31435[(1)] = (14));

} else {
var statearr_29685_31436 = state_29636__$1;
(statearr_29685_31436[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (5))){
var inst_29584 = (state_29636[(13)]);
var state_29636__$1 = state_29636;
var statearr_29687_31437 = state_29636__$1;
(statearr_29687_31437[(2)] = inst_29584);

(statearr_29687_31437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (14))){
var inst_29602 = (state_29636[(19)]);
var state_29636__$1 = state_29636;
var statearr_29688_31438 = state_29636__$1;
(statearr_29688_31438[(2)] = inst_29602);

(statearr_29688_31438[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (26))){
var inst_29622 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
var statearr_29690_31440 = state_29636__$1;
(statearr_29690_31440[(2)] = inst_29622);

(statearr_29690_31440[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (16))){
var inst_29614 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
if(cljs.core.truth_(inst_29614)){
var statearr_29691_31441 = state_29636__$1;
(statearr_29691_31441[(1)] = (20));

} else {
var statearr_29692_31442 = state_29636__$1;
(statearr_29692_31442[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (10))){
var inst_29628 = (state_29636[(2)]);
var state_29636__$1 = state_29636;
var statearr_29694_31443 = state_29636__$1;
(statearr_29694_31443[(2)] = inst_29628);

(statearr_29694_31443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (18))){
var inst_29606 = (state_29636[(16)]);
var state_29636__$1 = state_29636;
var statearr_29695_31445 = state_29636__$1;
(statearr_29695_31445[(2)] = inst_29606);

(statearr_29695_31445[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29637 === (8))){
var inst_29579 = (state_29636[(7)]);
var inst_29591 = (inst_29579 == null);
var state_29636__$1 = state_29636;
if(cljs.core.truth_(inst_29591)){
var statearr_29697_31448 = state_29636__$1;
(statearr_29697_31448[(1)] = (11));

} else {
var statearr_29698_31449 = state_29636__$1;
(statearr_29698_31449[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__27280__auto__ = null;
var cljs$core$async$mix_$_state_machine__27280__auto____0 = (function (){
var statearr_29700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29700[(0)] = cljs$core$async$mix_$_state_machine__27280__auto__);

(statearr_29700[(1)] = (1));

return statearr_29700;
});
var cljs$core$async$mix_$_state_machine__27280__auto____1 = (function (state_29636){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_29636);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e29702){var ex__27283__auto__ = e29702;
var statearr_29703_31452 = state_29636;
(statearr_29703_31452[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_29636[(4)]))){
var statearr_29710_31453 = state_29636;
(statearr_29710_31453[(1)] = cljs.core.first((state_29636[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31454 = state_29636;
state_29636 = G__31454;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27280__auto__ = function(state_29636){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27280__auto____1.call(this,state_29636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27280__auto____0;
cljs$core$async$mix_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27280__auto____1;
return cljs$core$async$mix_$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_29717 = f__28094__auto__();
(statearr_29717[(6)] = c__28093__auto___31391);

return statearr_29717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_31462 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_31462(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_31466 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_31466(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_31468 = (function() {
var G__31469 = null;
var G__31469__1 = (function (p){
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
var G__31469__2 = (function (p,v){
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
G__31469 = function(p,v){
switch(arguments.length){
case 1:
return G__31469__1.call(this,p);
case 2:
return G__31469__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31469.cljs$core$IFn$_invoke$arity$1 = G__31469__1;
G__31469.cljs$core$IFn$_invoke$arity$2 = G__31469__2;
return G__31469;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29754 = arguments.length;
switch (G__29754) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_31468(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_31468(p,v);
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
var G__29764 = arguments.length;
switch (G__29764) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__29760_SHARP_){
if(cljs.core.truth_((p1__29760_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29760_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29760_SHARP_.call(null,topic)))){
return p1__29760_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29760_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29768 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29769){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29769 = meta29769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29770,meta29769__$1){
var self__ = this;
var _29770__$1 = this;
return (new cljs.core.async.t_cljs$core$async29768(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29769__$1));
}));

(cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29770){
var self__ = this;
var _29770__$1 = this;
return self__.meta29769;
}));

(cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29768.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29769","meta29769",-1926237268,null)], null);
}));

(cljs.core.async.t_cljs$core$async29768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29768");

(cljs.core.async.t_cljs$core$async29768.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29768.
 */
cljs.core.async.__GT_t_cljs$core$async29768 = (function cljs$core$async$__GT_t_cljs$core$async29768(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29769){
return (new cljs.core.async.t_cljs$core$async29768(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29769));
});

}

return (new cljs.core.async.t_cljs$core$async29768(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28093__auto___31476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_29879){
var state_val_29880 = (state_29879[(1)]);
if((state_val_29880 === (7))){
var inst_29875 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_29882_31477 = state_29879__$1;
(statearr_29882_31477[(2)] = inst_29875);

(statearr_29882_31477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (20))){
var state_29879__$1 = state_29879;
var statearr_29883_31478 = state_29879__$1;
(statearr_29883_31478[(2)] = null);

(statearr_29883_31478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (1))){
var state_29879__$1 = state_29879;
var statearr_29885_31480 = state_29879__$1;
(statearr_29885_31480[(2)] = null);

(statearr_29885_31480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (24))){
var inst_29853 = (state_29879[(7)]);
var inst_29867 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29853);
var state_29879__$1 = state_29879;
var statearr_29887_31482 = state_29879__$1;
(statearr_29887_31482[(2)] = inst_29867);

(statearr_29887_31482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (4))){
var inst_29786 = (state_29879[(8)]);
var inst_29786__$1 = (state_29879[(2)]);
var inst_29790 = (inst_29786__$1 == null);
var state_29879__$1 = (function (){var statearr_29888 = state_29879;
(statearr_29888[(8)] = inst_29786__$1);

return statearr_29888;
})();
if(cljs.core.truth_(inst_29790)){
var statearr_29889_31483 = state_29879__$1;
(statearr_29889_31483[(1)] = (5));

} else {
var statearr_29890_31484 = state_29879__$1;
(statearr_29890_31484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (15))){
var inst_29847 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_29891_31485 = state_29879__$1;
(statearr_29891_31485[(2)] = inst_29847);

(statearr_29891_31485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (21))){
var inst_29872 = (state_29879[(2)]);
var state_29879__$1 = (function (){var statearr_29893 = state_29879;
(statearr_29893[(9)] = inst_29872);

return statearr_29893;
})();
var statearr_29894_31486 = state_29879__$1;
(statearr_29894_31486[(2)] = null);

(statearr_29894_31486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (13))){
var inst_29817 = (state_29879[(10)]);
var inst_29828 = cljs.core.chunked_seq_QMARK_(inst_29817);
var state_29879__$1 = state_29879;
if(inst_29828){
var statearr_29896_31487 = state_29879__$1;
(statearr_29896_31487[(1)] = (16));

} else {
var statearr_29897_31488 = state_29879__$1;
(statearr_29897_31488[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (22))){
var inst_29860 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
if(cljs.core.truth_(inst_29860)){
var statearr_29898_31489 = state_29879__$1;
(statearr_29898_31489[(1)] = (23));

} else {
var statearr_29899_31490 = state_29879__$1;
(statearr_29899_31490[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (6))){
var inst_29786 = (state_29879[(8)]);
var inst_29853 = (state_29879[(7)]);
var inst_29855 = (state_29879[(11)]);
var inst_29853__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29786) : topic_fn.call(null,inst_29786));
var inst_29854 = cljs.core.deref(mults);
var inst_29855__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29854,inst_29853__$1);
var state_29879__$1 = (function (){var statearr_29901 = state_29879;
(statearr_29901[(7)] = inst_29853__$1);

(statearr_29901[(11)] = inst_29855__$1);

return statearr_29901;
})();
if(cljs.core.truth_(inst_29855__$1)){
var statearr_29902_31491 = state_29879__$1;
(statearr_29902_31491[(1)] = (19));

} else {
var statearr_29903_31492 = state_29879__$1;
(statearr_29903_31492[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (25))){
var inst_29869 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_29904_31494 = state_29879__$1;
(statearr_29904_31494[(2)] = inst_29869);

(statearr_29904_31494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (17))){
var inst_29817 = (state_29879[(10)]);
var inst_29838 = cljs.core.first(inst_29817);
var inst_29839 = cljs.core.async.muxch_STAR_(inst_29838);
var inst_29840 = cljs.core.async.close_BANG_(inst_29839);
var inst_29841 = cljs.core.next(inst_29817);
var inst_29800 = inst_29841;
var inst_29801 = null;
var inst_29802 = (0);
var inst_29803 = (0);
var state_29879__$1 = (function (){var statearr_29906 = state_29879;
(statearr_29906[(12)] = inst_29840);

(statearr_29906[(13)] = inst_29800);

(statearr_29906[(14)] = inst_29801);

(statearr_29906[(15)] = inst_29802);

(statearr_29906[(16)] = inst_29803);

return statearr_29906;
})();
var statearr_29907_31495 = state_29879__$1;
(statearr_29907_31495[(2)] = null);

(statearr_29907_31495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (3))){
var inst_29877 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29879__$1,inst_29877);
} else {
if((state_val_29880 === (12))){
var inst_29849 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_29908_31496 = state_29879__$1;
(statearr_29908_31496[(2)] = inst_29849);

(statearr_29908_31496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (2))){
var state_29879__$1 = state_29879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29879__$1,(4),ch);
} else {
if((state_val_29880 === (23))){
var state_29879__$1 = state_29879;
var statearr_29910_31497 = state_29879__$1;
(statearr_29910_31497[(2)] = null);

(statearr_29910_31497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (19))){
var inst_29855 = (state_29879[(11)]);
var inst_29786 = (state_29879[(8)]);
var inst_29858 = cljs.core.async.muxch_STAR_(inst_29855);
var state_29879__$1 = state_29879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29879__$1,(22),inst_29858,inst_29786);
} else {
if((state_val_29880 === (11))){
var inst_29800 = (state_29879[(13)]);
var inst_29817 = (state_29879[(10)]);
var inst_29817__$1 = cljs.core.seq(inst_29800);
var state_29879__$1 = (function (){var statearr_29915 = state_29879;
(statearr_29915[(10)] = inst_29817__$1);

return statearr_29915;
})();
if(inst_29817__$1){
var statearr_29916_31498 = state_29879__$1;
(statearr_29916_31498[(1)] = (13));

} else {
var statearr_29917_31499 = state_29879__$1;
(statearr_29917_31499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (9))){
var inst_29851 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_29918_31500 = state_29879__$1;
(statearr_29918_31500[(2)] = inst_29851);

(statearr_29918_31500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (5))){
var inst_29796 = cljs.core.deref(mults);
var inst_29797 = cljs.core.vals(inst_29796);
var inst_29798 = cljs.core.seq(inst_29797);
var inst_29800 = inst_29798;
var inst_29801 = null;
var inst_29802 = (0);
var inst_29803 = (0);
var state_29879__$1 = (function (){var statearr_29921 = state_29879;
(statearr_29921[(13)] = inst_29800);

(statearr_29921[(14)] = inst_29801);

(statearr_29921[(15)] = inst_29802);

(statearr_29921[(16)] = inst_29803);

return statearr_29921;
})();
var statearr_29924_31503 = state_29879__$1;
(statearr_29924_31503[(2)] = null);

(statearr_29924_31503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (14))){
var state_29879__$1 = state_29879;
var statearr_29929_31504 = state_29879__$1;
(statearr_29929_31504[(2)] = null);

(statearr_29929_31504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (16))){
var inst_29817 = (state_29879[(10)]);
var inst_29830 = cljs.core.chunk_first(inst_29817);
var inst_29832 = cljs.core.chunk_rest(inst_29817);
var inst_29834 = cljs.core.count(inst_29830);
var inst_29800 = inst_29832;
var inst_29801 = inst_29830;
var inst_29802 = inst_29834;
var inst_29803 = (0);
var state_29879__$1 = (function (){var statearr_29930 = state_29879;
(statearr_29930[(13)] = inst_29800);

(statearr_29930[(14)] = inst_29801);

(statearr_29930[(15)] = inst_29802);

(statearr_29930[(16)] = inst_29803);

return statearr_29930;
})();
var statearr_29931_31508 = state_29879__$1;
(statearr_29931_31508[(2)] = null);

(statearr_29931_31508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (10))){
var inst_29801 = (state_29879[(14)]);
var inst_29803 = (state_29879[(16)]);
var inst_29800 = (state_29879[(13)]);
var inst_29802 = (state_29879[(15)]);
var inst_29810 = cljs.core._nth(inst_29801,inst_29803);
var inst_29811 = cljs.core.async.muxch_STAR_(inst_29810);
var inst_29812 = cljs.core.async.close_BANG_(inst_29811);
var inst_29813 = (inst_29803 + (1));
var tmp29926 = inst_29800;
var tmp29927 = inst_29801;
var tmp29928 = inst_29802;
var inst_29800__$1 = tmp29926;
var inst_29801__$1 = tmp29927;
var inst_29802__$1 = tmp29928;
var inst_29803__$1 = inst_29813;
var state_29879__$1 = (function (){var statearr_29937 = state_29879;
(statearr_29937[(17)] = inst_29812);

(statearr_29937[(13)] = inst_29800__$1);

(statearr_29937[(14)] = inst_29801__$1);

(statearr_29937[(15)] = inst_29802__$1);

(statearr_29937[(16)] = inst_29803__$1);

return statearr_29937;
})();
var statearr_29938_31512 = state_29879__$1;
(statearr_29938_31512[(2)] = null);

(statearr_29938_31512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (18))){
var inst_29844 = (state_29879[(2)]);
var state_29879__$1 = state_29879;
var statearr_29939_31514 = state_29879__$1;
(statearr_29939_31514[(2)] = inst_29844);

(statearr_29939_31514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29880 === (8))){
var inst_29803 = (state_29879[(16)]);
var inst_29802 = (state_29879[(15)]);
var inst_29807 = (inst_29803 < inst_29802);
var inst_29808 = inst_29807;
var state_29879__$1 = state_29879;
if(cljs.core.truth_(inst_29808)){
var statearr_29940_31515 = state_29879__$1;
(statearr_29940_31515[(1)] = (10));

} else {
var statearr_29941_31516 = state_29879__$1;
(statearr_29941_31516[(1)] = (11));

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
var cljs$core$async$state_machine__27280__auto__ = null;
var cljs$core$async$state_machine__27280__auto____0 = (function (){
var statearr_29945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29945[(0)] = cljs$core$async$state_machine__27280__auto__);

(statearr_29945[(1)] = (1));

return statearr_29945;
});
var cljs$core$async$state_machine__27280__auto____1 = (function (state_29879){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_29879);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e29946){var ex__27283__auto__ = e29946;
var statearr_29947_31522 = state_29879;
(statearr_29947_31522[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_29879[(4)]))){
var statearr_29948_31523 = state_29879;
(statearr_29948_31523[(1)] = cljs.core.first((state_29879[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31524 = state_29879;
state_29879 = G__31524;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$state_machine__27280__auto__ = function(state_29879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27280__auto____1.call(this,state_29879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27280__auto____0;
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27280__auto____1;
return cljs$core$async$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_29950 = f__28094__auto__();
(statearr_29950[(6)] = c__28093__auto___31476);

return statearr_29950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
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
var G__29952 = arguments.length;
switch (G__29952) {
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
var G__29958 = arguments.length;
switch (G__29958) {
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
var G__29971 = arguments.length;
switch (G__29971) {
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
var c__28093__auto___31536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_30029){
var state_val_30030 = (state_30029[(1)]);
if((state_val_30030 === (7))){
var state_30029__$1 = state_30029;
var statearr_30031_31537 = state_30029__$1;
(statearr_30031_31537[(2)] = null);

(statearr_30031_31537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (1))){
var state_30029__$1 = state_30029;
var statearr_30033_31538 = state_30029__$1;
(statearr_30033_31538[(2)] = null);

(statearr_30033_31538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (4))){
var inst_29984 = (state_30029[(7)]);
var inst_29983 = (state_30029[(8)]);
var inst_29986 = (inst_29984 < inst_29983);
var state_30029__$1 = state_30029;
if(cljs.core.truth_(inst_29986)){
var statearr_30035_31543 = state_30029__$1;
(statearr_30035_31543[(1)] = (6));

} else {
var statearr_30036_31544 = state_30029__$1;
(statearr_30036_31544[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (15))){
var inst_30015 = (state_30029[(9)]);
var inst_30020 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30015);
var state_30029__$1 = state_30029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30029__$1,(17),out,inst_30020);
} else {
if((state_val_30030 === (13))){
var inst_30015 = (state_30029[(9)]);
var inst_30015__$1 = (state_30029[(2)]);
var inst_30016 = cljs.core.some(cljs.core.nil_QMARK_,inst_30015__$1);
var state_30029__$1 = (function (){var statearr_30040 = state_30029;
(statearr_30040[(9)] = inst_30015__$1);

return statearr_30040;
})();
if(cljs.core.truth_(inst_30016)){
var statearr_30041_31549 = state_30029__$1;
(statearr_30041_31549[(1)] = (14));

} else {
var statearr_30042_31550 = state_30029__$1;
(statearr_30042_31550[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (6))){
var state_30029__$1 = state_30029;
var statearr_30044_31551 = state_30029__$1;
(statearr_30044_31551[(2)] = null);

(statearr_30044_31551[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (17))){
var inst_30022 = (state_30029[(2)]);
var state_30029__$1 = (function (){var statearr_30054 = state_30029;
(statearr_30054[(10)] = inst_30022);

return statearr_30054;
})();
var statearr_30056_31552 = state_30029__$1;
(statearr_30056_31552[(2)] = null);

(statearr_30056_31552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (3))){
var inst_30027 = (state_30029[(2)]);
var state_30029__$1 = state_30029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30029__$1,inst_30027);
} else {
if((state_val_30030 === (12))){
var _ = (function (){var statearr_30061 = state_30029;
(statearr_30061[(4)] = cljs.core.rest((state_30029[(4)])));

return statearr_30061;
})();
var state_30029__$1 = state_30029;
var ex30050 = (state_30029__$1[(2)]);
var statearr_30063_31553 = state_30029__$1;
(statearr_30063_31553[(5)] = ex30050);


if((ex30050 instanceof Object)){
var statearr_30067_31554 = state_30029__$1;
(statearr_30067_31554[(1)] = (11));

(statearr_30067_31554[(5)] = null);

} else {
throw ex30050;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (2))){
var inst_29982 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29983 = cnt;
var inst_29984 = (0);
var state_30029__$1 = (function (){var statearr_30072 = state_30029;
(statearr_30072[(11)] = inst_29982);

(statearr_30072[(8)] = inst_29983);

(statearr_30072[(7)] = inst_29984);

return statearr_30072;
})();
var statearr_30074_31557 = state_30029__$1;
(statearr_30074_31557[(2)] = null);

(statearr_30074_31557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (11))){
var inst_29994 = (state_30029[(2)]);
var inst_29995 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30029__$1 = (function (){var statearr_30079 = state_30029;
(statearr_30079[(12)] = inst_29994);

return statearr_30079;
})();
var statearr_30081_31558 = state_30029__$1;
(statearr_30081_31558[(2)] = inst_29995);

(statearr_30081_31558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (9))){
var inst_29984 = (state_30029[(7)]);
var _ = (function (){var statearr_30085 = state_30029;
(statearr_30085[(4)] = cljs.core.cons((12),(state_30029[(4)])));

return statearr_30085;
})();
var inst_30001 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29984) : chs__$1.call(null,inst_29984));
var inst_30002 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29984) : done.call(null,inst_29984));
var inst_30003 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30001,inst_30002);
var ___$1 = (function (){var statearr_30086 = state_30029;
(statearr_30086[(4)] = cljs.core.rest((state_30029[(4)])));

return statearr_30086;
})();
var state_30029__$1 = state_30029;
var statearr_30087_31560 = state_30029__$1;
(statearr_30087_31560[(2)] = inst_30003);

(statearr_30087_31560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (5))){
var inst_30013 = (state_30029[(2)]);
var state_30029__$1 = (function (){var statearr_30088 = state_30029;
(statearr_30088[(13)] = inst_30013);

return statearr_30088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30029__$1,(13),dchan);
} else {
if((state_val_30030 === (14))){
var inst_30018 = cljs.core.async.close_BANG_(out);
var state_30029__$1 = state_30029;
var statearr_30089_31561 = state_30029__$1;
(statearr_30089_31561[(2)] = inst_30018);

(statearr_30089_31561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (16))){
var inst_30025 = (state_30029[(2)]);
var state_30029__$1 = state_30029;
var statearr_30093_31564 = state_30029__$1;
(statearr_30093_31564[(2)] = inst_30025);

(statearr_30093_31564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (10))){
var inst_29984 = (state_30029[(7)]);
var inst_30006 = (state_30029[(2)]);
var inst_30007 = (inst_29984 + (1));
var inst_29984__$1 = inst_30007;
var state_30029__$1 = (function (){var statearr_30096 = state_30029;
(statearr_30096[(14)] = inst_30006);

(statearr_30096[(7)] = inst_29984__$1);

return statearr_30096;
})();
var statearr_30099_31567 = state_30029__$1;
(statearr_30099_31567[(2)] = null);

(statearr_30099_31567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30030 === (8))){
var inst_30011 = (state_30029[(2)]);
var state_30029__$1 = state_30029;
var statearr_30100_31570 = state_30029__$1;
(statearr_30100_31570[(2)] = inst_30011);

(statearr_30100_31570[(1)] = (5));


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
var cljs$core$async$state_machine__27280__auto__ = null;
var cljs$core$async$state_machine__27280__auto____0 = (function (){
var statearr_30104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30104[(0)] = cljs$core$async$state_machine__27280__auto__);

(statearr_30104[(1)] = (1));

return statearr_30104;
});
var cljs$core$async$state_machine__27280__auto____1 = (function (state_30029){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_30029);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e30106){var ex__27283__auto__ = e30106;
var statearr_30108_31573 = state_30029;
(statearr_30108_31573[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_30029[(4)]))){
var statearr_30109_31576 = state_30029;
(statearr_30109_31576[(1)] = cljs.core.first((state_30029[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31577 = state_30029;
state_30029 = G__31577;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$state_machine__27280__auto__ = function(state_30029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27280__auto____1.call(this,state_30029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27280__auto____0;
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27280__auto____1;
return cljs$core$async$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_30112 = f__28094__auto__();
(statearr_30112[(6)] = c__28093__auto___31536);

return statearr_30112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
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
var G__30118 = arguments.length;
switch (G__30118) {
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
var c__28093__auto___31581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_30160){
var state_val_30162 = (state_30160[(1)]);
if((state_val_30162 === (7))){
var inst_30137 = (state_30160[(7)]);
var inst_30138 = (state_30160[(8)]);
var inst_30137__$1 = (state_30160[(2)]);
var inst_30138__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30137__$1,(0),null);
var inst_30139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30137__$1,(1),null);
var inst_30140 = (inst_30138__$1 == null);
var state_30160__$1 = (function (){var statearr_30167 = state_30160;
(statearr_30167[(7)] = inst_30137__$1);

(statearr_30167[(8)] = inst_30138__$1);

(statearr_30167[(9)] = inst_30139);

return statearr_30167;
})();
if(cljs.core.truth_(inst_30140)){
var statearr_30169_31582 = state_30160__$1;
(statearr_30169_31582[(1)] = (8));

} else {
var statearr_30172_31583 = state_30160__$1;
(statearr_30172_31583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30162 === (1))){
var inst_30124 = cljs.core.vec(chs);
var inst_30125 = inst_30124;
var state_30160__$1 = (function (){var statearr_30176 = state_30160;
(statearr_30176[(10)] = inst_30125);

return statearr_30176;
})();
var statearr_30177_31584 = state_30160__$1;
(statearr_30177_31584[(2)] = null);

(statearr_30177_31584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30162 === (4))){
var inst_30125 = (state_30160[(10)]);
var state_30160__$1 = state_30160;
return cljs.core.async.ioc_alts_BANG_(state_30160__$1,(7),inst_30125);
} else {
if((state_val_30162 === (6))){
var inst_30156 = (state_30160[(2)]);
var state_30160__$1 = state_30160;
var statearr_30178_31585 = state_30160__$1;
(statearr_30178_31585[(2)] = inst_30156);

(statearr_30178_31585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30162 === (3))){
var inst_30158 = (state_30160[(2)]);
var state_30160__$1 = state_30160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30160__$1,inst_30158);
} else {
if((state_val_30162 === (2))){
var inst_30125 = (state_30160[(10)]);
var inst_30127 = cljs.core.count(inst_30125);
var inst_30128 = (inst_30127 > (0));
var state_30160__$1 = state_30160;
if(cljs.core.truth_(inst_30128)){
var statearr_30186_31586 = state_30160__$1;
(statearr_30186_31586[(1)] = (4));

} else {
var statearr_30188_31587 = state_30160__$1;
(statearr_30188_31587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30162 === (11))){
var inst_30125 = (state_30160[(10)]);
var inst_30147 = (state_30160[(2)]);
var tmp30179 = inst_30125;
var inst_30125__$1 = tmp30179;
var state_30160__$1 = (function (){var statearr_30190 = state_30160;
(statearr_30190[(11)] = inst_30147);

(statearr_30190[(10)] = inst_30125__$1);

return statearr_30190;
})();
var statearr_30191_31590 = state_30160__$1;
(statearr_30191_31590[(2)] = null);

(statearr_30191_31590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30162 === (9))){
var inst_30138 = (state_30160[(8)]);
var state_30160__$1 = state_30160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30160__$1,(11),out,inst_30138);
} else {
if((state_val_30162 === (5))){
var inst_30154 = cljs.core.async.close_BANG_(out);
var state_30160__$1 = state_30160;
var statearr_30196_31592 = state_30160__$1;
(statearr_30196_31592[(2)] = inst_30154);

(statearr_30196_31592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30162 === (10))){
var inst_30150 = (state_30160[(2)]);
var state_30160__$1 = state_30160;
var statearr_30200_31595 = state_30160__$1;
(statearr_30200_31595[(2)] = inst_30150);

(statearr_30200_31595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30162 === (8))){
var inst_30125 = (state_30160[(10)]);
var inst_30137 = (state_30160[(7)]);
var inst_30138 = (state_30160[(8)]);
var inst_30139 = (state_30160[(9)]);
var inst_30142 = (function (){var cs = inst_30125;
var vec__30132 = inst_30137;
var v = inst_30138;
var c = inst_30139;
return (function (p1__30116_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30116_SHARP_);
});
})();
var inst_30143 = cljs.core.filterv(inst_30142,inst_30125);
var inst_30125__$1 = inst_30143;
var state_30160__$1 = (function (){var statearr_30204 = state_30160;
(statearr_30204[(10)] = inst_30125__$1);

return statearr_30204;
})();
var statearr_30206_31597 = state_30160__$1;
(statearr_30206_31597[(2)] = null);

(statearr_30206_31597[(1)] = (2));


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
var cljs$core$async$state_machine__27280__auto__ = null;
var cljs$core$async$state_machine__27280__auto____0 = (function (){
var statearr_30210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30210[(0)] = cljs$core$async$state_machine__27280__auto__);

(statearr_30210[(1)] = (1));

return statearr_30210;
});
var cljs$core$async$state_machine__27280__auto____1 = (function (state_30160){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_30160);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e30215){var ex__27283__auto__ = e30215;
var statearr_30216_31602 = state_30160;
(statearr_30216_31602[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_30160[(4)]))){
var statearr_30217_31603 = state_30160;
(statearr_30217_31603[(1)] = cljs.core.first((state_30160[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31604 = state_30160;
state_30160 = G__31604;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$state_machine__27280__auto__ = function(state_30160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27280__auto____1.call(this,state_30160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27280__auto____0;
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27280__auto____1;
return cljs$core$async$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_30221 = f__28094__auto__();
(statearr_30221[(6)] = c__28093__auto___31581);

return statearr_30221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
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
var G__30228 = arguments.length;
switch (G__30228) {
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
var c__28093__auto___31607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_30261){
var state_val_30262 = (state_30261[(1)]);
if((state_val_30262 === (7))){
var inst_30241 = (state_30261[(7)]);
var inst_30241__$1 = (state_30261[(2)]);
var inst_30242 = (inst_30241__$1 == null);
var inst_30243 = cljs.core.not(inst_30242);
var state_30261__$1 = (function (){var statearr_30265 = state_30261;
(statearr_30265[(7)] = inst_30241__$1);

return statearr_30265;
})();
if(inst_30243){
var statearr_30266_31610 = state_30261__$1;
(statearr_30266_31610[(1)] = (8));

} else {
var statearr_30268_31613 = state_30261__$1;
(statearr_30268_31613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (1))){
var inst_30235 = (0);
var state_30261__$1 = (function (){var statearr_30272 = state_30261;
(statearr_30272[(8)] = inst_30235);

return statearr_30272;
})();
var statearr_30274_31614 = state_30261__$1;
(statearr_30274_31614[(2)] = null);

(statearr_30274_31614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (4))){
var state_30261__$1 = state_30261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30261__$1,(7),ch);
} else {
if((state_val_30262 === (6))){
var inst_30255 = (state_30261[(2)]);
var state_30261__$1 = state_30261;
var statearr_30277_31615 = state_30261__$1;
(statearr_30277_31615[(2)] = inst_30255);

(statearr_30277_31615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (3))){
var inst_30258 = (state_30261[(2)]);
var inst_30259 = cljs.core.async.close_BANG_(out);
var state_30261__$1 = (function (){var statearr_30280 = state_30261;
(statearr_30280[(9)] = inst_30258);

return statearr_30280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30261__$1,inst_30259);
} else {
if((state_val_30262 === (2))){
var inst_30235 = (state_30261[(8)]);
var inst_30237 = (inst_30235 < n);
var state_30261__$1 = state_30261;
if(cljs.core.truth_(inst_30237)){
var statearr_30281_31617 = state_30261__$1;
(statearr_30281_31617[(1)] = (4));

} else {
var statearr_30282_31618 = state_30261__$1;
(statearr_30282_31618[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (11))){
var inst_30235 = (state_30261[(8)]);
var inst_30247 = (state_30261[(2)]);
var inst_30248 = (inst_30235 + (1));
var inst_30235__$1 = inst_30248;
var state_30261__$1 = (function (){var statearr_30284 = state_30261;
(statearr_30284[(10)] = inst_30247);

(statearr_30284[(8)] = inst_30235__$1);

return statearr_30284;
})();
var statearr_30285_31619 = state_30261__$1;
(statearr_30285_31619[(2)] = null);

(statearr_30285_31619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (9))){
var state_30261__$1 = state_30261;
var statearr_30286_31620 = state_30261__$1;
(statearr_30286_31620[(2)] = null);

(statearr_30286_31620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (5))){
var state_30261__$1 = state_30261;
var statearr_30287_31621 = state_30261__$1;
(statearr_30287_31621[(2)] = null);

(statearr_30287_31621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (10))){
var inst_30252 = (state_30261[(2)]);
var state_30261__$1 = state_30261;
var statearr_30289_31622 = state_30261__$1;
(statearr_30289_31622[(2)] = inst_30252);

(statearr_30289_31622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (8))){
var inst_30241 = (state_30261[(7)]);
var state_30261__$1 = state_30261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30261__$1,(11),out,inst_30241);
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
var cljs$core$async$state_machine__27280__auto__ = null;
var cljs$core$async$state_machine__27280__auto____0 = (function (){
var statearr_30290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30290[(0)] = cljs$core$async$state_machine__27280__auto__);

(statearr_30290[(1)] = (1));

return statearr_30290;
});
var cljs$core$async$state_machine__27280__auto____1 = (function (state_30261){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_30261);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e30293){var ex__27283__auto__ = e30293;
var statearr_30294_31624 = state_30261;
(statearr_30294_31624[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_30261[(4)]))){
var statearr_30296_31625 = state_30261;
(statearr_30296_31625[(1)] = cljs.core.first((state_30261[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31626 = state_30261;
state_30261 = G__31626;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$state_machine__27280__auto__ = function(state_30261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27280__auto____1.call(this,state_30261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27280__auto____0;
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27280__auto____1;
return cljs$core$async$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_30299 = f__28094__auto__();
(statearr_30299[(6)] = c__28093__auto___31607);

return statearr_30299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30306 = (function (f,ch,meta30307){
this.f = f;
this.ch = ch;
this.meta30307 = meta30307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30308,meta30307__$1){
var self__ = this;
var _30308__$1 = this;
return (new cljs.core.async.t_cljs$core$async30306(self__.f,self__.ch,meta30307__$1));
}));

(cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30308){
var self__ = this;
var _30308__$1 = this;
return self__.meta30307;
}));

(cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30317 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30317 = (function (f,ch,meta30307,_,fn1,meta30318){
this.f = f;
this.ch = ch;
this.meta30307 = meta30307;
this._ = _;
this.fn1 = fn1;
this.meta30318 = meta30318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30319,meta30318__$1){
var self__ = this;
var _30319__$1 = this;
return (new cljs.core.async.t_cljs$core$async30317(self__.f,self__.ch,self__.meta30307,self__._,self__.fn1,meta30318__$1));
}));

(cljs.core.async.t_cljs$core$async30317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30319){
var self__ = this;
var _30319__$1 = this;
return self__.meta30318;
}));

(cljs.core.async.t_cljs$core$async30317.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30317.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30302_SHARP_){
var G__30326 = (((p1__30302_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30302_SHARP_) : self__.f.call(null,p1__30302_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30326) : f1.call(null,G__30326));
});
}));

(cljs.core.async.t_cljs$core$async30317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30307","meta30307",1276656583,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30306","cljs.core.async/t_cljs$core$async30306",381935736,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30318","meta30318",1058559287,null)], null);
}));

(cljs.core.async.t_cljs$core$async30317.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30317");

(cljs.core.async.t_cljs$core$async30317.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30317");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30317.
 */
cljs.core.async.__GT_t_cljs$core$async30317 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30317(f__$1,ch__$1,meta30307__$1,___$2,fn1__$1,meta30318){
return (new cljs.core.async.t_cljs$core$async30317(f__$1,ch__$1,meta30307__$1,___$2,fn1__$1,meta30318));
});

}

return (new cljs.core.async.t_cljs$core$async30317(self__.f,self__.ch,self__.meta30307,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30330 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30330) : self__.f.call(null,G__30330));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30307","meta30307",1276656583,null)], null);
}));

(cljs.core.async.t_cljs$core$async30306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30306");

(cljs.core.async.t_cljs$core$async30306.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30306.
 */
cljs.core.async.__GT_t_cljs$core$async30306 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30306(f__$1,ch__$1,meta30307){
return (new cljs.core.async.t_cljs$core$async30306(f__$1,ch__$1,meta30307));
});

}

return (new cljs.core.async.t_cljs$core$async30306(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30334 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30334 = (function (f,ch,meta30335){
this.f = f;
this.ch = ch;
this.meta30335 = meta30335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30336,meta30335__$1){
var self__ = this;
var _30336__$1 = this;
return (new cljs.core.async.t_cljs$core$async30334(self__.f,self__.ch,meta30335__$1));
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30336){
var self__ = this;
var _30336__$1 = this;
return self__.meta30335;
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async30334.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30335","meta30335",-1009123233,null)], null);
}));

(cljs.core.async.t_cljs$core$async30334.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30334");

(cljs.core.async.t_cljs$core$async30334.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30334");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30334.
 */
cljs.core.async.__GT_t_cljs$core$async30334 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30334(f__$1,ch__$1,meta30335){
return (new cljs.core.async.t_cljs$core$async30334(f__$1,ch__$1,meta30335));
});

}

return (new cljs.core.async.t_cljs$core$async30334(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30338 = (function (p,ch,meta30339){
this.p = p;
this.ch = ch;
this.meta30339 = meta30339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30340,meta30339__$1){
var self__ = this;
var _30340__$1 = this;
return (new cljs.core.async.t_cljs$core$async30338(self__.p,self__.ch,meta30339__$1));
}));

(cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30340){
var self__ = this;
var _30340__$1 = this;
return self__.meta30339;
}));

(cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30339","meta30339",2076489501,null)], null);
}));

(cljs.core.async.t_cljs$core$async30338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30338");

(cljs.core.async.t_cljs$core$async30338.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30338.
 */
cljs.core.async.__GT_t_cljs$core$async30338 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30338(p__$1,ch__$1,meta30339){
return (new cljs.core.async.t_cljs$core$async30338(p__$1,ch__$1,meta30339));
});

}

return (new cljs.core.async.t_cljs$core$async30338(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30355 = arguments.length;
switch (G__30355) {
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
var c__28093__auto___31639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_30384){
var state_val_30385 = (state_30384[(1)]);
if((state_val_30385 === (7))){
var inst_30380 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
var statearr_30389_31640 = state_30384__$1;
(statearr_30389_31640[(2)] = inst_30380);

(statearr_30389_31640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (1))){
var state_30384__$1 = state_30384;
var statearr_30391_31642 = state_30384__$1;
(statearr_30391_31642[(2)] = null);

(statearr_30391_31642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (4))){
var inst_30366 = (state_30384[(7)]);
var inst_30366__$1 = (state_30384[(2)]);
var inst_30367 = (inst_30366__$1 == null);
var state_30384__$1 = (function (){var statearr_30392 = state_30384;
(statearr_30392[(7)] = inst_30366__$1);

return statearr_30392;
})();
if(cljs.core.truth_(inst_30367)){
var statearr_30394_31643 = state_30384__$1;
(statearr_30394_31643[(1)] = (5));

} else {
var statearr_30395_31644 = state_30384__$1;
(statearr_30395_31644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (6))){
var inst_30366 = (state_30384[(7)]);
var inst_30371 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30366) : p.call(null,inst_30366));
var state_30384__$1 = state_30384;
if(cljs.core.truth_(inst_30371)){
var statearr_30396_31646 = state_30384__$1;
(statearr_30396_31646[(1)] = (8));

} else {
var statearr_30398_31647 = state_30384__$1;
(statearr_30398_31647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (3))){
var inst_30382 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30384__$1,inst_30382);
} else {
if((state_val_30385 === (2))){
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30384__$1,(4),ch);
} else {
if((state_val_30385 === (11))){
var inst_30374 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
var statearr_30403_31648 = state_30384__$1;
(statearr_30403_31648[(2)] = inst_30374);

(statearr_30403_31648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (9))){
var state_30384__$1 = state_30384;
var statearr_30404_31649 = state_30384__$1;
(statearr_30404_31649[(2)] = null);

(statearr_30404_31649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (5))){
var inst_30369 = cljs.core.async.close_BANG_(out);
var state_30384__$1 = state_30384;
var statearr_30409_31650 = state_30384__$1;
(statearr_30409_31650[(2)] = inst_30369);

(statearr_30409_31650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (10))){
var inst_30377 = (state_30384[(2)]);
var state_30384__$1 = (function (){var statearr_30412 = state_30384;
(statearr_30412[(8)] = inst_30377);

return statearr_30412;
})();
var statearr_30414_31651 = state_30384__$1;
(statearr_30414_31651[(2)] = null);

(statearr_30414_31651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (8))){
var inst_30366 = (state_30384[(7)]);
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30384__$1,(11),out,inst_30366);
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
var cljs$core$async$state_machine__27280__auto__ = null;
var cljs$core$async$state_machine__27280__auto____0 = (function (){
var statearr_30416 = [null,null,null,null,null,null,null,null,null];
(statearr_30416[(0)] = cljs$core$async$state_machine__27280__auto__);

(statearr_30416[(1)] = (1));

return statearr_30416;
});
var cljs$core$async$state_machine__27280__auto____1 = (function (state_30384){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_30384);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e30417){var ex__27283__auto__ = e30417;
var statearr_30418_31657 = state_30384;
(statearr_30418_31657[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_30384[(4)]))){
var statearr_30420_31659 = state_30384;
(statearr_30420_31659[(1)] = cljs.core.first((state_30384[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31660 = state_30384;
state_30384 = G__31660;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$state_machine__27280__auto__ = function(state_30384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27280__auto____1.call(this,state_30384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27280__auto____0;
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27280__auto____1;
return cljs$core$async$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_30425 = f__28094__auto__();
(statearr_30425[(6)] = c__28093__auto___31639);

return statearr_30425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30439 = arguments.length;
switch (G__30439) {
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
var c__28093__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_30514){
var state_val_30515 = (state_30514[(1)]);
if((state_val_30515 === (7))){
var inst_30510 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30517_31667 = state_30514__$1;
(statearr_30517_31667[(2)] = inst_30510);

(statearr_30517_31667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (20))){
var inst_30479 = (state_30514[(7)]);
var inst_30491 = (state_30514[(2)]);
var inst_30492 = cljs.core.next(inst_30479);
var inst_30462 = inst_30492;
var inst_30463 = null;
var inst_30464 = (0);
var inst_30465 = (0);
var state_30514__$1 = (function (){var statearr_30521 = state_30514;
(statearr_30521[(8)] = inst_30491);

(statearr_30521[(9)] = inst_30462);

(statearr_30521[(10)] = inst_30463);

(statearr_30521[(11)] = inst_30464);

(statearr_30521[(12)] = inst_30465);

return statearr_30521;
})();
var statearr_30522_31669 = state_30514__$1;
(statearr_30522_31669[(2)] = null);

(statearr_30522_31669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (1))){
var state_30514__$1 = state_30514;
var statearr_30525_31670 = state_30514__$1;
(statearr_30525_31670[(2)] = null);

(statearr_30525_31670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (4))){
var inst_30450 = (state_30514[(13)]);
var inst_30450__$1 = (state_30514[(2)]);
var inst_30452 = (inst_30450__$1 == null);
var state_30514__$1 = (function (){var statearr_30530 = state_30514;
(statearr_30530[(13)] = inst_30450__$1);

return statearr_30530;
})();
if(cljs.core.truth_(inst_30452)){
var statearr_30536_31671 = state_30514__$1;
(statearr_30536_31671[(1)] = (5));

} else {
var statearr_30537_31672 = state_30514__$1;
(statearr_30537_31672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (15))){
var state_30514__$1 = state_30514;
var statearr_30542_31674 = state_30514__$1;
(statearr_30542_31674[(2)] = null);

(statearr_30542_31674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (21))){
var state_30514__$1 = state_30514;
var statearr_30546_31677 = state_30514__$1;
(statearr_30546_31677[(2)] = null);

(statearr_30546_31677[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (13))){
var inst_30465 = (state_30514[(12)]);
var inst_30462 = (state_30514[(9)]);
var inst_30463 = (state_30514[(10)]);
var inst_30464 = (state_30514[(11)]);
var inst_30475 = (state_30514[(2)]);
var inst_30476 = (inst_30465 + (1));
var tmp30539 = inst_30463;
var tmp30540 = inst_30462;
var tmp30541 = inst_30464;
var inst_30462__$1 = tmp30540;
var inst_30463__$1 = tmp30539;
var inst_30464__$1 = tmp30541;
var inst_30465__$1 = inst_30476;
var state_30514__$1 = (function (){var statearr_30548 = state_30514;
(statearr_30548[(14)] = inst_30475);

(statearr_30548[(9)] = inst_30462__$1);

(statearr_30548[(10)] = inst_30463__$1);

(statearr_30548[(11)] = inst_30464__$1);

(statearr_30548[(12)] = inst_30465__$1);

return statearr_30548;
})();
var statearr_30551_31685 = state_30514__$1;
(statearr_30551_31685[(2)] = null);

(statearr_30551_31685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (22))){
var state_30514__$1 = state_30514;
var statearr_30554_31687 = state_30514__$1;
(statearr_30554_31687[(2)] = null);

(statearr_30554_31687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (6))){
var inst_30450 = (state_30514[(13)]);
var inst_30460 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30450) : f.call(null,inst_30450));
var inst_30461 = cljs.core.seq(inst_30460);
var inst_30462 = inst_30461;
var inst_30463 = null;
var inst_30464 = (0);
var inst_30465 = (0);
var state_30514__$1 = (function (){var statearr_30560 = state_30514;
(statearr_30560[(9)] = inst_30462);

(statearr_30560[(10)] = inst_30463);

(statearr_30560[(11)] = inst_30464);

(statearr_30560[(12)] = inst_30465);

return statearr_30560;
})();
var statearr_30561_31689 = state_30514__$1;
(statearr_30561_31689[(2)] = null);

(statearr_30561_31689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (17))){
var inst_30479 = (state_30514[(7)]);
var inst_30483 = cljs.core.chunk_first(inst_30479);
var inst_30484 = cljs.core.chunk_rest(inst_30479);
var inst_30486 = cljs.core.count(inst_30483);
var inst_30462 = inst_30484;
var inst_30463 = inst_30483;
var inst_30464 = inst_30486;
var inst_30465 = (0);
var state_30514__$1 = (function (){var statearr_30563 = state_30514;
(statearr_30563[(9)] = inst_30462);

(statearr_30563[(10)] = inst_30463);

(statearr_30563[(11)] = inst_30464);

(statearr_30563[(12)] = inst_30465);

return statearr_30563;
})();
var statearr_30564_31693 = state_30514__$1;
(statearr_30564_31693[(2)] = null);

(statearr_30564_31693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (3))){
var inst_30512 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30514__$1,inst_30512);
} else {
if((state_val_30515 === (12))){
var inst_30500 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30568_31696 = state_30514__$1;
(statearr_30568_31696[(2)] = inst_30500);

(statearr_30568_31696[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (2))){
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30514__$1,(4),in$);
} else {
if((state_val_30515 === (23))){
var inst_30508 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30573_31700 = state_30514__$1;
(statearr_30573_31700[(2)] = inst_30508);

(statearr_30573_31700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (19))){
var inst_30495 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30577_31701 = state_30514__$1;
(statearr_30577_31701[(2)] = inst_30495);

(statearr_30577_31701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (11))){
var inst_30462 = (state_30514[(9)]);
var inst_30479 = (state_30514[(7)]);
var inst_30479__$1 = cljs.core.seq(inst_30462);
var state_30514__$1 = (function (){var statearr_30580 = state_30514;
(statearr_30580[(7)] = inst_30479__$1);

return statearr_30580;
})();
if(inst_30479__$1){
var statearr_30582_31707 = state_30514__$1;
(statearr_30582_31707[(1)] = (14));

} else {
var statearr_30583_31708 = state_30514__$1;
(statearr_30583_31708[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (9))){
var inst_30502 = (state_30514[(2)]);
var inst_30503 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30514__$1 = (function (){var statearr_30589 = state_30514;
(statearr_30589[(15)] = inst_30502);

return statearr_30589;
})();
if(cljs.core.truth_(inst_30503)){
var statearr_30591_31712 = state_30514__$1;
(statearr_30591_31712[(1)] = (21));

} else {
var statearr_30592_31713 = state_30514__$1;
(statearr_30592_31713[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (5))){
var inst_30454 = cljs.core.async.close_BANG_(out);
var state_30514__$1 = state_30514;
var statearr_30595_31714 = state_30514__$1;
(statearr_30595_31714[(2)] = inst_30454);

(statearr_30595_31714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (14))){
var inst_30479 = (state_30514[(7)]);
var inst_30481 = cljs.core.chunked_seq_QMARK_(inst_30479);
var state_30514__$1 = state_30514;
if(inst_30481){
var statearr_30596_31715 = state_30514__$1;
(statearr_30596_31715[(1)] = (17));

} else {
var statearr_30598_31716 = state_30514__$1;
(statearr_30598_31716[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (16))){
var inst_30498 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30600_31717 = state_30514__$1;
(statearr_30600_31717[(2)] = inst_30498);

(statearr_30600_31717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (10))){
var inst_30463 = (state_30514[(10)]);
var inst_30465 = (state_30514[(12)]);
var inst_30473 = cljs.core._nth(inst_30463,inst_30465);
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30514__$1,(13),out,inst_30473);
} else {
if((state_val_30515 === (18))){
var inst_30479 = (state_30514[(7)]);
var inst_30489 = cljs.core.first(inst_30479);
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30514__$1,(20),out,inst_30489);
} else {
if((state_val_30515 === (8))){
var inst_30465 = (state_30514[(12)]);
var inst_30464 = (state_30514[(11)]);
var inst_30468 = (inst_30465 < inst_30464);
var inst_30469 = inst_30468;
var state_30514__$1 = state_30514;
if(cljs.core.truth_(inst_30469)){
var statearr_30606_31720 = state_30514__$1;
(statearr_30606_31720[(1)] = (10));

} else {
var statearr_30607_31721 = state_30514__$1;
(statearr_30607_31721[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27280__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27280__auto____0 = (function (){
var statearr_30615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30615[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27280__auto__);

(statearr_30615[(1)] = (1));

return statearr_30615;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27280__auto____1 = (function (state_30514){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_30514);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e30617){var ex__27283__auto__ = e30617;
var statearr_30619_31722 = state_30514;
(statearr_30619_31722[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_30514[(4)]))){
var statearr_30622_31723 = state_30514;
(statearr_30622_31723[(1)] = cljs.core.first((state_30514[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31724 = state_30514;
state_30514 = G__31724;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27280__auto__ = function(state_30514){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27280__auto____1.call(this,state_30514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27280__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27280__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_30623 = f__28094__auto__();
(statearr_30623[(6)] = c__28093__auto__);

return statearr_30623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

return c__28093__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30626 = arguments.length;
switch (G__30626) {
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
var G__30640 = arguments.length;
switch (G__30640) {
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
var G__30649 = arguments.length;
switch (G__30649) {
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
var c__28093__auto___31740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_30683){
var state_val_30684 = (state_30683[(1)]);
if((state_val_30684 === (7))){
var inst_30677 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
var statearr_30689_31741 = state_30683__$1;
(statearr_30689_31741[(2)] = inst_30677);

(statearr_30689_31741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (1))){
var inst_30658 = null;
var state_30683__$1 = (function (){var statearr_30691 = state_30683;
(statearr_30691[(7)] = inst_30658);

return statearr_30691;
})();
var statearr_30694_31742 = state_30683__$1;
(statearr_30694_31742[(2)] = null);

(statearr_30694_31742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (4))){
var inst_30661 = (state_30683[(8)]);
var inst_30661__$1 = (state_30683[(2)]);
var inst_30662 = (inst_30661__$1 == null);
var inst_30663 = cljs.core.not(inst_30662);
var state_30683__$1 = (function (){var statearr_30698 = state_30683;
(statearr_30698[(8)] = inst_30661__$1);

return statearr_30698;
})();
if(inst_30663){
var statearr_30699_31743 = state_30683__$1;
(statearr_30699_31743[(1)] = (5));

} else {
var statearr_30700_31747 = state_30683__$1;
(statearr_30700_31747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (6))){
var state_30683__$1 = state_30683;
var statearr_30702_31748 = state_30683__$1;
(statearr_30702_31748[(2)] = null);

(statearr_30702_31748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (3))){
var inst_30679 = (state_30683[(2)]);
var inst_30680 = cljs.core.async.close_BANG_(out);
var state_30683__$1 = (function (){var statearr_30709 = state_30683;
(statearr_30709[(9)] = inst_30679);

return statearr_30709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30683__$1,inst_30680);
} else {
if((state_val_30684 === (2))){
var state_30683__$1 = state_30683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30683__$1,(4),ch);
} else {
if((state_val_30684 === (11))){
var inst_30661 = (state_30683[(8)]);
var inst_30671 = (state_30683[(2)]);
var inst_30658 = inst_30661;
var state_30683__$1 = (function (){var statearr_30715 = state_30683;
(statearr_30715[(10)] = inst_30671);

(statearr_30715[(7)] = inst_30658);

return statearr_30715;
})();
var statearr_30718_31751 = state_30683__$1;
(statearr_30718_31751[(2)] = null);

(statearr_30718_31751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (9))){
var inst_30661 = (state_30683[(8)]);
var state_30683__$1 = state_30683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30683__$1,(11),out,inst_30661);
} else {
if((state_val_30684 === (5))){
var inst_30661 = (state_30683[(8)]);
var inst_30658 = (state_30683[(7)]);
var inst_30665 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30661,inst_30658);
var state_30683__$1 = state_30683;
if(inst_30665){
var statearr_30724_31755 = state_30683__$1;
(statearr_30724_31755[(1)] = (8));

} else {
var statearr_30725_31756 = state_30683__$1;
(statearr_30725_31756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (10))){
var inst_30674 = (state_30683[(2)]);
var state_30683__$1 = state_30683;
var statearr_30726_31757 = state_30683__$1;
(statearr_30726_31757[(2)] = inst_30674);

(statearr_30726_31757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30684 === (8))){
var inst_30658 = (state_30683[(7)]);
var tmp30722 = inst_30658;
var inst_30658__$1 = tmp30722;
var state_30683__$1 = (function (){var statearr_30727 = state_30683;
(statearr_30727[(7)] = inst_30658__$1);

return statearr_30727;
})();
var statearr_30728_31759 = state_30683__$1;
(statearr_30728_31759[(2)] = null);

(statearr_30728_31759[(1)] = (2));


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
var cljs$core$async$state_machine__27280__auto__ = null;
var cljs$core$async$state_machine__27280__auto____0 = (function (){
var statearr_30730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30730[(0)] = cljs$core$async$state_machine__27280__auto__);

(statearr_30730[(1)] = (1));

return statearr_30730;
});
var cljs$core$async$state_machine__27280__auto____1 = (function (state_30683){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_30683);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e30732){var ex__27283__auto__ = e30732;
var statearr_30733_31760 = state_30683;
(statearr_30733_31760[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_30683[(4)]))){
var statearr_30734_31761 = state_30683;
(statearr_30734_31761[(1)] = cljs.core.first((state_30683[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31762 = state_30683;
state_30683 = G__31762;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$state_machine__27280__auto__ = function(state_30683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27280__auto____1.call(this,state_30683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27280__auto____0;
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27280__auto____1;
return cljs$core$async$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_30739 = f__28094__auto__();
(statearr_30739[(6)] = c__28093__auto___31740);

return statearr_30739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30746 = arguments.length;
switch (G__30746) {
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
var c__28093__auto___31766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_30790){
var state_val_30791 = (state_30790[(1)]);
if((state_val_30791 === (7))){
var inst_30786 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30797_31770 = state_30790__$1;
(statearr_30797_31770[(2)] = inst_30786);

(statearr_30797_31770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (1))){
var inst_30749 = (new Array(n));
var inst_30750 = inst_30749;
var inst_30751 = (0);
var state_30790__$1 = (function (){var statearr_30800 = state_30790;
(statearr_30800[(7)] = inst_30750);

(statearr_30800[(8)] = inst_30751);

return statearr_30800;
})();
var statearr_30801_31772 = state_30790__$1;
(statearr_30801_31772[(2)] = null);

(statearr_30801_31772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (4))){
var inst_30754 = (state_30790[(9)]);
var inst_30754__$1 = (state_30790[(2)]);
var inst_30756 = (inst_30754__$1 == null);
var inst_30757 = cljs.core.not(inst_30756);
var state_30790__$1 = (function (){var statearr_30802 = state_30790;
(statearr_30802[(9)] = inst_30754__$1);

return statearr_30802;
})();
if(inst_30757){
var statearr_30803_31773 = state_30790__$1;
(statearr_30803_31773[(1)] = (5));

} else {
var statearr_30807_31774 = state_30790__$1;
(statearr_30807_31774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (15))){
var inst_30780 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30809_31775 = state_30790__$1;
(statearr_30809_31775[(2)] = inst_30780);

(statearr_30809_31775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (13))){
var state_30790__$1 = state_30790;
var statearr_30810_31776 = state_30790__$1;
(statearr_30810_31776[(2)] = null);

(statearr_30810_31776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (6))){
var inst_30751 = (state_30790[(8)]);
var inst_30775 = (inst_30751 > (0));
var state_30790__$1 = state_30790;
if(cljs.core.truth_(inst_30775)){
var statearr_30812_31777 = state_30790__$1;
(statearr_30812_31777[(1)] = (12));

} else {
var statearr_30813_31778 = state_30790__$1;
(statearr_30813_31778[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (3))){
var inst_30788 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30790__$1,inst_30788);
} else {
if((state_val_30791 === (12))){
var inst_30750 = (state_30790[(7)]);
var inst_30778 = cljs.core.vec(inst_30750);
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30790__$1,(15),out,inst_30778);
} else {
if((state_val_30791 === (2))){
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30790__$1,(4),ch);
} else {
if((state_val_30791 === (11))){
var inst_30768 = (state_30790[(2)]);
var inst_30770 = (new Array(n));
var inst_30750 = inst_30770;
var inst_30751 = (0);
var state_30790__$1 = (function (){var statearr_30816 = state_30790;
(statearr_30816[(10)] = inst_30768);

(statearr_30816[(7)] = inst_30750);

(statearr_30816[(8)] = inst_30751);

return statearr_30816;
})();
var statearr_30817_31780 = state_30790__$1;
(statearr_30817_31780[(2)] = null);

(statearr_30817_31780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (9))){
var inst_30750 = (state_30790[(7)]);
var inst_30766 = cljs.core.vec(inst_30750);
var state_30790__$1 = state_30790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30790__$1,(11),out,inst_30766);
} else {
if((state_val_30791 === (5))){
var inst_30750 = (state_30790[(7)]);
var inst_30751 = (state_30790[(8)]);
var inst_30754 = (state_30790[(9)]);
var inst_30760 = (state_30790[(11)]);
var inst_30759 = (inst_30750[inst_30751] = inst_30754);
var inst_30760__$1 = (inst_30751 + (1));
var inst_30761 = (inst_30760__$1 < n);
var state_30790__$1 = (function (){var statearr_30821 = state_30790;
(statearr_30821[(12)] = inst_30759);

(statearr_30821[(11)] = inst_30760__$1);

return statearr_30821;
})();
if(cljs.core.truth_(inst_30761)){
var statearr_30822_31781 = state_30790__$1;
(statearr_30822_31781[(1)] = (8));

} else {
var statearr_30823_31782 = state_30790__$1;
(statearr_30823_31782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (14))){
var inst_30783 = (state_30790[(2)]);
var inst_30784 = cljs.core.async.close_BANG_(out);
var state_30790__$1 = (function (){var statearr_30826 = state_30790;
(statearr_30826[(13)] = inst_30783);

return statearr_30826;
})();
var statearr_30827_31783 = state_30790__$1;
(statearr_30827_31783[(2)] = inst_30784);

(statearr_30827_31783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (10))){
var inst_30773 = (state_30790[(2)]);
var state_30790__$1 = state_30790;
var statearr_30828_31784 = state_30790__$1;
(statearr_30828_31784[(2)] = inst_30773);

(statearr_30828_31784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30791 === (8))){
var inst_30750 = (state_30790[(7)]);
var inst_30760 = (state_30790[(11)]);
var tmp30824 = inst_30750;
var inst_30750__$1 = tmp30824;
var inst_30751 = inst_30760;
var state_30790__$1 = (function (){var statearr_30829 = state_30790;
(statearr_30829[(7)] = inst_30750__$1);

(statearr_30829[(8)] = inst_30751);

return statearr_30829;
})();
var statearr_30830_31787 = state_30790__$1;
(statearr_30830_31787[(2)] = null);

(statearr_30830_31787[(1)] = (2));


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
var cljs$core$async$state_machine__27280__auto__ = null;
var cljs$core$async$state_machine__27280__auto____0 = (function (){
var statearr_30833 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30833[(0)] = cljs$core$async$state_machine__27280__auto__);

(statearr_30833[(1)] = (1));

return statearr_30833;
});
var cljs$core$async$state_machine__27280__auto____1 = (function (state_30790){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_30790);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e30835){var ex__27283__auto__ = e30835;
var statearr_30836_31790 = state_30790;
(statearr_30836_31790[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_30790[(4)]))){
var statearr_30837_31792 = state_30790;
(statearr_30837_31792[(1)] = cljs.core.first((state_30790[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31793 = state_30790;
state_30790 = G__31793;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$state_machine__27280__auto__ = function(state_30790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27280__auto____1.call(this,state_30790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27280__auto____0;
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27280__auto____1;
return cljs$core$async$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_30839 = f__28094__auto__();
(statearr_30839[(6)] = c__28093__auto___31766);

return statearr_30839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30846 = arguments.length;
switch (G__30846) {
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
var c__28093__auto___31800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_30901){
var state_val_30902 = (state_30901[(1)]);
if((state_val_30902 === (7))){
var inst_30897 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
var statearr_30906_31801 = state_30901__$1;
(statearr_30906_31801[(2)] = inst_30897);

(statearr_30906_31801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (1))){
var inst_30854 = [];
var inst_30855 = inst_30854;
var inst_30856 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30901__$1 = (function (){var statearr_30909 = state_30901;
(statearr_30909[(7)] = inst_30855);

(statearr_30909[(8)] = inst_30856);

return statearr_30909;
})();
var statearr_30910_31804 = state_30901__$1;
(statearr_30910_31804[(2)] = null);

(statearr_30910_31804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (4))){
var inst_30859 = (state_30901[(9)]);
var inst_30859__$1 = (state_30901[(2)]);
var inst_30860 = (inst_30859__$1 == null);
var inst_30861 = cljs.core.not(inst_30860);
var state_30901__$1 = (function (){var statearr_30913 = state_30901;
(statearr_30913[(9)] = inst_30859__$1);

return statearr_30913;
})();
if(inst_30861){
var statearr_30914_31805 = state_30901__$1;
(statearr_30914_31805[(1)] = (5));

} else {
var statearr_30915_31806 = state_30901__$1;
(statearr_30915_31806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (15))){
var inst_30855 = (state_30901[(7)]);
var inst_30889 = cljs.core.vec(inst_30855);
var state_30901__$1 = state_30901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30901__$1,(18),out,inst_30889);
} else {
if((state_val_30902 === (13))){
var inst_30884 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
var statearr_30920_31807 = state_30901__$1;
(statearr_30920_31807[(2)] = inst_30884);

(statearr_30920_31807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (6))){
var inst_30855 = (state_30901[(7)]);
var inst_30886 = inst_30855.length;
var inst_30887 = (inst_30886 > (0));
var state_30901__$1 = state_30901;
if(cljs.core.truth_(inst_30887)){
var statearr_30921_31809 = state_30901__$1;
(statearr_30921_31809[(1)] = (15));

} else {
var statearr_30922_31810 = state_30901__$1;
(statearr_30922_31810[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (17))){
var inst_30894 = (state_30901[(2)]);
var inst_30895 = cljs.core.async.close_BANG_(out);
var state_30901__$1 = (function (){var statearr_30923 = state_30901;
(statearr_30923[(10)] = inst_30894);

return statearr_30923;
})();
var statearr_30924_31813 = state_30901__$1;
(statearr_30924_31813[(2)] = inst_30895);

(statearr_30924_31813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (3))){
var inst_30899 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30901__$1,inst_30899);
} else {
if((state_val_30902 === (12))){
var inst_30855 = (state_30901[(7)]);
var inst_30877 = cljs.core.vec(inst_30855);
var state_30901__$1 = state_30901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30901__$1,(14),out,inst_30877);
} else {
if((state_val_30902 === (2))){
var state_30901__$1 = state_30901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30901__$1,(4),ch);
} else {
if((state_val_30902 === (11))){
var inst_30855 = (state_30901[(7)]);
var inst_30859 = (state_30901[(9)]);
var inst_30863 = (state_30901[(11)]);
var inst_30873 = inst_30855.push(inst_30859);
var tmp30927 = inst_30855;
var inst_30855__$1 = tmp30927;
var inst_30856 = inst_30863;
var state_30901__$1 = (function (){var statearr_30931 = state_30901;
(statearr_30931[(12)] = inst_30873);

(statearr_30931[(7)] = inst_30855__$1);

(statearr_30931[(8)] = inst_30856);

return statearr_30931;
})();
var statearr_30933_31816 = state_30901__$1;
(statearr_30933_31816[(2)] = null);

(statearr_30933_31816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (9))){
var inst_30856 = (state_30901[(8)]);
var inst_30869 = cljs.core.keyword_identical_QMARK_(inst_30856,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_30901__$1 = state_30901;
var statearr_30935_31820 = state_30901__$1;
(statearr_30935_31820[(2)] = inst_30869);

(statearr_30935_31820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (5))){
var inst_30859 = (state_30901[(9)]);
var inst_30863 = (state_30901[(11)]);
var inst_30856 = (state_30901[(8)]);
var inst_30866 = (state_30901[(13)]);
var inst_30863__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30859) : f.call(null,inst_30859));
var inst_30866__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30863__$1,inst_30856);
var state_30901__$1 = (function (){var statearr_30936 = state_30901;
(statearr_30936[(11)] = inst_30863__$1);

(statearr_30936[(13)] = inst_30866__$1);

return statearr_30936;
})();
if(inst_30866__$1){
var statearr_30939_31823 = state_30901__$1;
(statearr_30939_31823[(1)] = (8));

} else {
var statearr_30941_31824 = state_30901__$1;
(statearr_30941_31824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (14))){
var inst_30859 = (state_30901[(9)]);
var inst_30863 = (state_30901[(11)]);
var inst_30879 = (state_30901[(2)]);
var inst_30880 = [];
var inst_30881 = inst_30880.push(inst_30859);
var inst_30855 = inst_30880;
var inst_30856 = inst_30863;
var state_30901__$1 = (function (){var statearr_30943 = state_30901;
(statearr_30943[(14)] = inst_30879);

(statearr_30943[(15)] = inst_30881);

(statearr_30943[(7)] = inst_30855);

(statearr_30943[(8)] = inst_30856);

return statearr_30943;
})();
var statearr_30944_31830 = state_30901__$1;
(statearr_30944_31830[(2)] = null);

(statearr_30944_31830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (16))){
var state_30901__$1 = state_30901;
var statearr_30945_31831 = state_30901__$1;
(statearr_30945_31831[(2)] = null);

(statearr_30945_31831[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (10))){
var inst_30871 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
if(cljs.core.truth_(inst_30871)){
var statearr_30947_31832 = state_30901__$1;
(statearr_30947_31832[(1)] = (11));

} else {
var statearr_30949_31833 = state_30901__$1;
(statearr_30949_31833[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (18))){
var inst_30891 = (state_30901[(2)]);
var state_30901__$1 = state_30901;
var statearr_30950_31834 = state_30901__$1;
(statearr_30950_31834[(2)] = inst_30891);

(statearr_30950_31834[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30902 === (8))){
var inst_30866 = (state_30901[(13)]);
var state_30901__$1 = state_30901;
var statearr_30951_31839 = state_30901__$1;
(statearr_30951_31839[(2)] = inst_30866);

(statearr_30951_31839[(1)] = (10));


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
var cljs$core$async$state_machine__27280__auto__ = null;
var cljs$core$async$state_machine__27280__auto____0 = (function (){
var statearr_30954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30954[(0)] = cljs$core$async$state_machine__27280__auto__);

(statearr_30954[(1)] = (1));

return statearr_30954;
});
var cljs$core$async$state_machine__27280__auto____1 = (function (state_30901){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_30901);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e30955){var ex__27283__auto__ = e30955;
var statearr_30956_31843 = state_30901;
(statearr_30956_31843[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_30901[(4)]))){
var statearr_30958_31845 = state_30901;
(statearr_30958_31845[(1)] = cljs.core.first((state_30901[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31848 = state_30901;
state_30901 = G__31848;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
cljs$core$async$state_machine__27280__auto__ = function(state_30901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27280__auto____1.call(this,state_30901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27280__auto____0;
cljs$core$async$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27280__auto____1;
return cljs$core$async$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_30959 = f__28094__auto__();
(statearr_30959[(6)] = c__28093__auto___31800);

return statearr_30959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
