goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30346 = arguments.length;
switch (G__30346) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30353 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30353 = (function (f,blockable,meta30354){
this.f = f;
this.blockable = blockable;
this.meta30354 = meta30354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30355,meta30354__$1){
var self__ = this;
var _30355__$1 = this;
return (new cljs.core.async.t_cljs$core$async30353(self__.f,self__.blockable,meta30354__$1));
}));

(cljs.core.async.t_cljs$core$async30353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30355){
var self__ = this;
var _30355__$1 = this;
return self__.meta30354;
}));

(cljs.core.async.t_cljs$core$async30353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30354","meta30354",1316353026,null)], null);
}));

(cljs.core.async.t_cljs$core$async30353.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30353");

(cljs.core.async.t_cljs$core$async30353.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30353");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30353.
 */
cljs.core.async.__GT_t_cljs$core$async30353 = (function cljs$core$async$__GT_t_cljs$core$async30353(f__$1,blockable__$1,meta30354){
return (new cljs.core.async.t_cljs$core$async30353(f__$1,blockable__$1,meta30354));
});

}

return (new cljs.core.async.t_cljs$core$async30353(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30395 = arguments.length;
switch (G__30395) {
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
var G__30409 = arguments.length;
switch (G__30409) {
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
var G__30443 = arguments.length;
switch (G__30443) {
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
var val_34296 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34296) : fn1.call(null,val_34296));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34296) : fn1.call(null,val_34296));
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
var G__30461 = arguments.length;
switch (G__30461) {
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
var n__5636__auto___34314 = n;
var x_34315 = (0);
while(true){
if((x_34315 < n__5636__auto___34314)){
(a[x_34315] = x_34315);

var G__34318 = (x_34315 + (1));
x_34315 = G__34318;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30539 = (function (flag,meta30540){
this.flag = flag;
this.meta30540 = meta30540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30541,meta30540__$1){
var self__ = this;
var _30541__$1 = this;
return (new cljs.core.async.t_cljs$core$async30539(self__.flag,meta30540__$1));
}));

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30541){
var self__ = this;
var _30541__$1 = this;
return self__.meta30540;
}));

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30540","meta30540",1724121833,null)], null);
}));

(cljs.core.async.t_cljs$core$async30539.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30539");

(cljs.core.async.t_cljs$core$async30539.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30539");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30539.
 */
cljs.core.async.__GT_t_cljs$core$async30539 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30539(flag__$1,meta30540){
return (new cljs.core.async.t_cljs$core$async30539(flag__$1,meta30540));
});

}

return (new cljs.core.async.t_cljs$core$async30539(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30604 = (function (flag,cb,meta30605){
this.flag = flag;
this.cb = cb;
this.meta30605 = meta30605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30606,meta30605__$1){
var self__ = this;
var _30606__$1 = this;
return (new cljs.core.async.t_cljs$core$async30604(self__.flag,self__.cb,meta30605__$1));
}));

(cljs.core.async.t_cljs$core$async30604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30606){
var self__ = this;
var _30606__$1 = this;
return self__.meta30605;
}));

(cljs.core.async.t_cljs$core$async30604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30605","meta30605",392185682,null)], null);
}));

(cljs.core.async.t_cljs$core$async30604.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30604");

(cljs.core.async.t_cljs$core$async30604.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30604");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30604.
 */
cljs.core.async.__GT_t_cljs$core$async30604 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30604(flag__$1,cb__$1,meta30605){
return (new cljs.core.async.t_cljs$core$async30604(flag__$1,cb__$1,meta30605));
});

}

return (new cljs.core.async.t_cljs$core$async30604(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30626_SHARP_){
var G__30633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30626_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30633) : fret.call(null,G__30633));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30628_SHARP_){
var G__30637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30628_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30637) : fret.call(null,G__30637));
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
var G__34363 = (i + (1));
i = G__34363;
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
var len__5769__auto___34369 = arguments.length;
var i__5770__auto___34370 = (0);
while(true){
if((i__5770__auto___34370 < len__5769__auto___34369)){
args__5775__auto__.push((arguments[i__5770__auto___34370]));

var G__34372 = (i__5770__auto___34370 + (1));
i__5770__auto___34370 = G__34372;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30661){
var map__30662 = p__30661;
var map__30662__$1 = cljs.core.__destructure_map(map__30662);
var opts = map__30662__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30653){
var G__30654 = cljs.core.first(seq30653);
var seq30653__$1 = cljs.core.next(seq30653);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30654,seq30653__$1);
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
var G__30673 = arguments.length;
switch (G__30673) {
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
var c__30195__auto___34394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_30748){
var state_val_30749 = (state_30748[(1)]);
if((state_val_30749 === (7))){
var inst_30737 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30760_34399 = state_30748__$1;
(statearr_30760_34399[(2)] = inst_30737);

(statearr_30760_34399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (1))){
var state_30748__$1 = state_30748;
var statearr_30761_34408 = state_30748__$1;
(statearr_30761_34408[(2)] = null);

(statearr_30761_34408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (4))){
var inst_30714 = (state_30748[(7)]);
var inst_30714__$1 = (state_30748[(2)]);
var inst_30721 = (inst_30714__$1 == null);
var state_30748__$1 = (function (){var statearr_30762 = state_30748;
(statearr_30762[(7)] = inst_30714__$1);

return statearr_30762;
})();
if(cljs.core.truth_(inst_30721)){
var statearr_30763_34415 = state_30748__$1;
(statearr_30763_34415[(1)] = (5));

} else {
var statearr_30764_34417 = state_30748__$1;
(statearr_30764_34417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (13))){
var state_30748__$1 = state_30748;
var statearr_30770_34419 = state_30748__$1;
(statearr_30770_34419[(2)] = null);

(statearr_30770_34419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (6))){
var inst_30714 = (state_30748[(7)]);
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30748__$1,(11),to,inst_30714);
} else {
if((state_val_30749 === (3))){
var inst_30743 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30748__$1,inst_30743);
} else {
if((state_val_30749 === (12))){
var state_30748__$1 = state_30748;
var statearr_30779_34431 = state_30748__$1;
(statearr_30779_34431[(2)] = null);

(statearr_30779_34431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (2))){
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30748__$1,(4),from);
} else {
if((state_val_30749 === (11))){
var inst_30730 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30730)){
var statearr_30781_34437 = state_30748__$1;
(statearr_30781_34437[(1)] = (12));

} else {
var statearr_30782_34438 = state_30748__$1;
(statearr_30782_34438[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (9))){
var state_30748__$1 = state_30748;
var statearr_30789_34440 = state_30748__$1;
(statearr_30789_34440[(2)] = null);

(statearr_30789_34440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (5))){
var state_30748__$1 = state_30748;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30791_34443 = state_30748__$1;
(statearr_30791_34443[(1)] = (8));

} else {
var statearr_30792_34444 = state_30748__$1;
(statearr_30792_34444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (14))){
var inst_30735 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30793_34447 = state_30748__$1;
(statearr_30793_34447[(2)] = inst_30735);

(statearr_30793_34447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (10))){
var inst_30727 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30798_34450 = state_30748__$1;
(statearr_30798_34450[(2)] = inst_30727);

(statearr_30798_34450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (8))){
var inst_30724 = cljs.core.async.close_BANG_(to);
var state_30748__$1 = state_30748;
var statearr_30799_34454 = state_30748__$1;
(statearr_30799_34454[(2)] = inst_30724);

(statearr_30799_34454[(1)] = (10));


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
var cljs$core$async$state_machine__29613__auto__ = null;
var cljs$core$async$state_machine__29613__auto____0 = (function (){
var statearr_30800 = [null,null,null,null,null,null,null,null];
(statearr_30800[(0)] = cljs$core$async$state_machine__29613__auto__);

(statearr_30800[(1)] = (1));

return statearr_30800;
});
var cljs$core$async$state_machine__29613__auto____1 = (function (state_30748){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_30748);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e30801){var ex__29616__auto__ = e30801;
var statearr_30802_34458 = state_30748;
(statearr_30802_34458[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_30748[(4)]))){
var statearr_30803_34459 = state_30748;
(statearr_30803_34459[(1)] = cljs.core.first((state_30748[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34465 = state_30748;
state_30748 = G__34465;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$state_machine__29613__auto__ = function(state_30748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29613__auto____1.call(this,state_30748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29613__auto____0;
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29613__auto____1;
return cljs$core$async$state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_30805 = f__30196__auto__();
(statearr_30805[(6)] = c__30195__auto___34394);

return statearr_30805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
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
var process__$1 = (function (p__30806){
var vec__30809 = p__30806;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30809,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30809,(1),null);
var job = vec__30809;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30195__auto___34469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_30821){
var state_val_30822 = (state_30821[(1)]);
if((state_val_30822 === (1))){
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30821__$1,(2),res,v);
} else {
if((state_val_30822 === (2))){
var inst_30815 = (state_30821[(2)]);
var inst_30819 = cljs.core.async.close_BANG_(res);
var state_30821__$1 = (function (){var statearr_30823 = state_30821;
(statearr_30823[(7)] = inst_30815);

return statearr_30823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30821__$1,inst_30819);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0 = (function (){
var statearr_30831 = [null,null,null,null,null,null,null,null];
(statearr_30831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__);

(statearr_30831[(1)] = (1));

return statearr_30831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1 = (function (state_30821){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_30821);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e30834){var ex__29616__auto__ = e30834;
var statearr_30835_34477 = state_30821;
(statearr_30835_34477[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_30821[(4)]))){
var statearr_30836_34478 = state_30821;
(statearr_30836_34478[(1)] = cljs.core.first((state_30821[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34479 = state_30821;
state_30821 = G__34479;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__ = function(state_30821){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1.call(this,state_30821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_30840 = f__30196__auto__();
(statearr_30840[(6)] = c__30195__auto___34469);

return statearr_30840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30844){
var vec__30845 = p__30844;
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
var n__5636__auto___34495 = n;
var __34496 = (0);
while(true){
if((__34496 < n__5636__auto___34495)){
var G__30856_34497 = type;
var G__30856_34498__$1 = (((G__30856_34497 instanceof cljs.core.Keyword))?G__30856_34497.fqn:null);
switch (G__30856_34498__$1) {
case "compute":
var c__30195__auto___34500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34496,c__30195__auto___34500,G__30856_34497,G__30856_34498__$1,n__5636__auto___34495,jobs,results,process__$1,async){
return (function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = ((function (__34496,c__30195__auto___34500,G__30856_34497,G__30856_34498__$1,n__5636__auto___34495,jobs,results,process__$1,async){
return (function (state_30903){
var state_val_30904 = (state_30903[(1)]);
if((state_val_30904 === (1))){
var state_30903__$1 = state_30903;
var statearr_30913_34503 = state_30903__$1;
(statearr_30913_34503[(2)] = null);

(statearr_30913_34503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (2))){
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30903__$1,(4),jobs);
} else {
if((state_val_30904 === (3))){
var inst_30901 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30903__$1,inst_30901);
} else {
if((state_val_30904 === (4))){
var inst_30879 = (state_30903[(2)]);
var inst_30888 = process__$1(inst_30879);
var state_30903__$1 = state_30903;
if(cljs.core.truth_(inst_30888)){
var statearr_30919_34515 = state_30903__$1;
(statearr_30919_34515[(1)] = (5));

} else {
var statearr_30920_34517 = state_30903__$1;
(statearr_30920_34517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (5))){
var state_30903__$1 = state_30903;
var statearr_30927_34519 = state_30903__$1;
(statearr_30927_34519[(2)] = null);

(statearr_30927_34519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (6))){
var state_30903__$1 = state_30903;
var statearr_30928_34522 = state_30903__$1;
(statearr_30928_34522[(2)] = null);

(statearr_30928_34522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30904 === (7))){
var inst_30899 = (state_30903[(2)]);
var state_30903__$1 = state_30903;
var statearr_30929_34523 = state_30903__$1;
(statearr_30929_34523[(2)] = inst_30899);

(statearr_30929_34523[(1)] = (3));


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
});})(__34496,c__30195__auto___34500,G__30856_34497,G__30856_34498__$1,n__5636__auto___34495,jobs,results,process__$1,async))
;
return ((function (__34496,switch__29611__auto__,c__30195__auto___34500,G__30856_34497,G__30856_34498__$1,n__5636__auto___34495,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0 = (function (){
var statearr_30930 = [null,null,null,null,null,null,null];
(statearr_30930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__);

(statearr_30930[(1)] = (1));

return statearr_30930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1 = (function (state_30903){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_30903);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e30933){var ex__29616__auto__ = e30933;
var statearr_30934_34533 = state_30903;
(statearr_30934_34533[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_30903[(4)]))){
var statearr_30935_34534 = state_30903;
(statearr_30935_34534[(1)] = cljs.core.first((state_30903[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34539 = state_30903;
state_30903 = G__34539;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__ = function(state_30903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1.call(this,state_30903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__;
})()
;})(__34496,switch__29611__auto__,c__30195__auto___34500,G__30856_34497,G__30856_34498__$1,n__5636__auto___34495,jobs,results,process__$1,async))
})();
var state__30197__auto__ = (function (){var statearr_30938 = f__30196__auto__();
(statearr_30938[(6)] = c__30195__auto___34500);

return statearr_30938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
});})(__34496,c__30195__auto___34500,G__30856_34497,G__30856_34498__$1,n__5636__auto___34495,jobs,results,process__$1,async))
);


break;
case "async":
var c__30195__auto___34540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34496,c__30195__auto___34540,G__30856_34497,G__30856_34498__$1,n__5636__auto___34495,jobs,results,process__$1,async){
return (function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = ((function (__34496,c__30195__auto___34540,G__30856_34497,G__30856_34498__$1,n__5636__auto___34495,jobs,results,process__$1,async){
return (function (state_30951){
var state_val_30952 = (state_30951[(1)]);
if((state_val_30952 === (1))){
var state_30951__$1 = state_30951;
var statearr_30956_34545 = state_30951__$1;
(statearr_30956_34545[(2)] = null);

(statearr_30956_34545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (2))){
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30951__$1,(4),jobs);
} else {
if((state_val_30952 === (3))){
var inst_30949 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30951__$1,inst_30949);
} else {
if((state_val_30952 === (4))){
var inst_30941 = (state_30951[(2)]);
var inst_30942 = async(inst_30941);
var state_30951__$1 = state_30951;
if(cljs.core.truth_(inst_30942)){
var statearr_30957_34552 = state_30951__$1;
(statearr_30957_34552[(1)] = (5));

} else {
var statearr_30961_34553 = state_30951__$1;
(statearr_30961_34553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (5))){
var state_30951__$1 = state_30951;
var statearr_30965_34555 = state_30951__$1;
(statearr_30965_34555[(2)] = null);

(statearr_30965_34555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (6))){
var state_30951__$1 = state_30951;
var statearr_30966_34559 = state_30951__$1;
(statearr_30966_34559[(2)] = null);

(statearr_30966_34559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30952 === (7))){
var inst_30947 = (state_30951[(2)]);
var state_30951__$1 = state_30951;
var statearr_30967_34562 = state_30951__$1;
(statearr_30967_34562[(2)] = inst_30947);

(statearr_30967_34562[(1)] = (3));


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
});})(__34496,c__30195__auto___34540,G__30856_34497,G__30856_34498__$1,n__5636__auto___34495,jobs,results,process__$1,async))
;
return ((function (__34496,switch__29611__auto__,c__30195__auto___34540,G__30856_34497,G__30856_34498__$1,n__5636__auto___34495,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0 = (function (){
var statearr_30968 = [null,null,null,null,null,null,null];
(statearr_30968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__);

(statearr_30968[(1)] = (1));

return statearr_30968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1 = (function (state_30951){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_30951);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e30970){var ex__29616__auto__ = e30970;
var statearr_30971_34569 = state_30951;
(statearr_30971_34569[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_30951[(4)]))){
var statearr_30972_34571 = state_30951;
(statearr_30972_34571[(1)] = cljs.core.first((state_30951[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34579 = state_30951;
state_30951 = G__34579;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__ = function(state_30951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1.call(this,state_30951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__;
})()
;})(__34496,switch__29611__auto__,c__30195__auto___34540,G__30856_34497,G__30856_34498__$1,n__5636__auto___34495,jobs,results,process__$1,async))
})();
var state__30197__auto__ = (function (){var statearr_30973 = f__30196__auto__();
(statearr_30973[(6)] = c__30195__auto___34540);

return statearr_30973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
});})(__34496,c__30195__auto___34540,G__30856_34497,G__30856_34498__$1,n__5636__auto___34495,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30856_34498__$1)].join('')));

}

var G__34581 = (__34496 + (1));
__34496 = G__34581;
continue;
} else {
}
break;
}

var c__30195__auto___34583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_31004){
var state_val_31005 = (state_31004[(1)]);
if((state_val_31005 === (7))){
var inst_30999 = (state_31004[(2)]);
var state_31004__$1 = state_31004;
var statearr_31013_34584 = state_31004__$1;
(statearr_31013_34584[(2)] = inst_30999);

(statearr_31013_34584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31005 === (1))){
var state_31004__$1 = state_31004;
var statearr_31014_34585 = state_31004__$1;
(statearr_31014_34585[(2)] = null);

(statearr_31014_34585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31005 === (4))){
var inst_30976 = (state_31004[(7)]);
var inst_30976__$1 = (state_31004[(2)]);
var inst_30977 = (inst_30976__$1 == null);
var state_31004__$1 = (function (){var statearr_31027 = state_31004;
(statearr_31027[(7)] = inst_30976__$1);

return statearr_31027;
})();
if(cljs.core.truth_(inst_30977)){
var statearr_31029_34586 = state_31004__$1;
(statearr_31029_34586[(1)] = (5));

} else {
var statearr_31030_34587 = state_31004__$1;
(statearr_31030_34587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31005 === (6))){
var inst_30981 = (state_31004[(8)]);
var inst_30976 = (state_31004[(7)]);
var inst_30981__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30984 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30991 = [inst_30976,inst_30981__$1];
var inst_30992 = (new cljs.core.PersistentVector(null,2,(5),inst_30984,inst_30991,null));
var state_31004__$1 = (function (){var statearr_31032 = state_31004;
(statearr_31032[(8)] = inst_30981__$1);

return statearr_31032;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31004__$1,(8),jobs,inst_30992);
} else {
if((state_val_31005 === (3))){
var inst_31002 = (state_31004[(2)]);
var state_31004__$1 = state_31004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31004__$1,inst_31002);
} else {
if((state_val_31005 === (2))){
var state_31004__$1 = state_31004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31004__$1,(4),from);
} else {
if((state_val_31005 === (9))){
var inst_30996 = (state_31004[(2)]);
var state_31004__$1 = (function (){var statearr_31033 = state_31004;
(statearr_31033[(9)] = inst_30996);

return statearr_31033;
})();
var statearr_31034_34596 = state_31004__$1;
(statearr_31034_34596[(2)] = null);

(statearr_31034_34596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31005 === (5))){
var inst_30979 = cljs.core.async.close_BANG_(jobs);
var state_31004__$1 = state_31004;
var statearr_31035_34600 = state_31004__$1;
(statearr_31035_34600[(2)] = inst_30979);

(statearr_31035_34600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31005 === (8))){
var inst_30981 = (state_31004[(8)]);
var inst_30994 = (state_31004[(2)]);
var state_31004__$1 = (function (){var statearr_31036 = state_31004;
(statearr_31036[(10)] = inst_30994);

return statearr_31036;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31004__$1,(9),results,inst_30981);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0 = (function (){
var statearr_31039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__);

(statearr_31039[(1)] = (1));

return statearr_31039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1 = (function (state_31004){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_31004);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e31042){var ex__29616__auto__ = e31042;
var statearr_31043_34603 = state_31004;
(statearr_31043_34603[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_31004[(4)]))){
var statearr_31044_34604 = state_31004;
(statearr_31044_34604[(1)] = cljs.core.first((state_31004[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34606 = state_31004;
state_31004 = G__34606;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__ = function(state_31004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1.call(this,state_31004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_31048 = f__30196__auto__();
(statearr_31048[(6)] = c__30195__auto___34583);

return statearr_31048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));


var c__30195__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_31097){
var state_val_31098 = (state_31097[(1)]);
if((state_val_31098 === (7))){
var inst_31091 = (state_31097[(2)]);
var state_31097__$1 = state_31097;
var statearr_31099_34612 = state_31097__$1;
(statearr_31099_34612[(2)] = inst_31091);

(statearr_31099_34612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (20))){
var state_31097__$1 = state_31097;
var statearr_31100_34614 = state_31097__$1;
(statearr_31100_34614[(2)] = null);

(statearr_31100_34614[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (1))){
var state_31097__$1 = state_31097;
var statearr_31101_34615 = state_31097__$1;
(statearr_31101_34615[(2)] = null);

(statearr_31101_34615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (4))){
var inst_31057 = (state_31097[(7)]);
var inst_31057__$1 = (state_31097[(2)]);
var inst_31060 = (inst_31057__$1 == null);
var state_31097__$1 = (function (){var statearr_31104 = state_31097;
(statearr_31104[(7)] = inst_31057__$1);

return statearr_31104;
})();
if(cljs.core.truth_(inst_31060)){
var statearr_31105_34617 = state_31097__$1;
(statearr_31105_34617[(1)] = (5));

} else {
var statearr_31106_34618 = state_31097__$1;
(statearr_31106_34618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (15))){
var inst_31073 = (state_31097[(8)]);
var state_31097__$1 = state_31097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31097__$1,(18),to,inst_31073);
} else {
if((state_val_31098 === (21))){
var inst_31086 = (state_31097[(2)]);
var state_31097__$1 = state_31097;
var statearr_31109_34619 = state_31097__$1;
(statearr_31109_34619[(2)] = inst_31086);

(statearr_31109_34619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (13))){
var inst_31088 = (state_31097[(2)]);
var state_31097__$1 = (function (){var statearr_31116 = state_31097;
(statearr_31116[(9)] = inst_31088);

return statearr_31116;
})();
var statearr_31117_34620 = state_31097__$1;
(statearr_31117_34620[(2)] = null);

(statearr_31117_34620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (6))){
var inst_31057 = (state_31097[(7)]);
var state_31097__$1 = state_31097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31097__$1,(11),inst_31057);
} else {
if((state_val_31098 === (17))){
var inst_31081 = (state_31097[(2)]);
var state_31097__$1 = state_31097;
if(cljs.core.truth_(inst_31081)){
var statearr_31119_34622 = state_31097__$1;
(statearr_31119_34622[(1)] = (19));

} else {
var statearr_31120_34623 = state_31097__$1;
(statearr_31120_34623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (3))){
var inst_31093 = (state_31097[(2)]);
var state_31097__$1 = state_31097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31097__$1,inst_31093);
} else {
if((state_val_31098 === (12))){
var inst_31069 = (state_31097[(10)]);
var state_31097__$1 = state_31097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31097__$1,(14),inst_31069);
} else {
if((state_val_31098 === (2))){
var state_31097__$1 = state_31097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31097__$1,(4),results);
} else {
if((state_val_31098 === (19))){
var state_31097__$1 = state_31097;
var statearr_31126_34625 = state_31097__$1;
(statearr_31126_34625[(2)] = null);

(statearr_31126_34625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (11))){
var inst_31069 = (state_31097[(2)]);
var state_31097__$1 = (function (){var statearr_31127 = state_31097;
(statearr_31127[(10)] = inst_31069);

return statearr_31127;
})();
var statearr_31128_34626 = state_31097__$1;
(statearr_31128_34626[(2)] = null);

(statearr_31128_34626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (9))){
var state_31097__$1 = state_31097;
var statearr_31132_34631 = state_31097__$1;
(statearr_31132_34631[(2)] = null);

(statearr_31132_34631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (5))){
var state_31097__$1 = state_31097;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31133_34636 = state_31097__$1;
(statearr_31133_34636[(1)] = (8));

} else {
var statearr_31134_34637 = state_31097__$1;
(statearr_31134_34637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (14))){
var inst_31073 = (state_31097[(8)]);
var inst_31075 = (state_31097[(11)]);
var inst_31073__$1 = (state_31097[(2)]);
var inst_31074 = (inst_31073__$1 == null);
var inst_31075__$1 = cljs.core.not(inst_31074);
var state_31097__$1 = (function (){var statearr_31136 = state_31097;
(statearr_31136[(8)] = inst_31073__$1);

(statearr_31136[(11)] = inst_31075__$1);

return statearr_31136;
})();
if(inst_31075__$1){
var statearr_31137_34639 = state_31097__$1;
(statearr_31137_34639[(1)] = (15));

} else {
var statearr_31138_34640 = state_31097__$1;
(statearr_31138_34640[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (16))){
var inst_31075 = (state_31097[(11)]);
var state_31097__$1 = state_31097;
var statearr_31140_34644 = state_31097__$1;
(statearr_31140_34644[(2)] = inst_31075);

(statearr_31140_34644[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (10))){
var inst_31066 = (state_31097[(2)]);
var state_31097__$1 = state_31097;
var statearr_31142_34645 = state_31097__$1;
(statearr_31142_34645[(2)] = inst_31066);

(statearr_31142_34645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (18))){
var inst_31078 = (state_31097[(2)]);
var state_31097__$1 = state_31097;
var statearr_31144_34647 = state_31097__$1;
(statearr_31144_34647[(2)] = inst_31078);

(statearr_31144_34647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31098 === (8))){
var inst_31063 = cljs.core.async.close_BANG_(to);
var state_31097__$1 = state_31097;
var statearr_31148_34648 = state_31097__$1;
(statearr_31148_34648[(2)] = inst_31063);

(statearr_31148_34648[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0 = (function (){
var statearr_31151 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31151[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__);

(statearr_31151[(1)] = (1));

return statearr_31151;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1 = (function (state_31097){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_31097);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e31152){var ex__29616__auto__ = e31152;
var statearr_31153_34649 = state_31097;
(statearr_31153_34649[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_31097[(4)]))){
var statearr_31154_34650 = state_31097;
(statearr_31154_34650[(1)] = cljs.core.first((state_31097[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34651 = state_31097;
state_31097 = G__34651;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__ = function(state_31097){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1.call(this,state_31097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29613__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_31155 = f__30196__auto__();
(statearr_31155[(6)] = c__30195__auto__);

return statearr_31155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));

return c__30195__auto__;
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
var G__31162 = arguments.length;
switch (G__31162) {
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
var G__31166 = arguments.length;
switch (G__31166) {
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
var G__31181 = arguments.length;
switch (G__31181) {
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
var c__30195__auto___34674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_31214){
var state_val_31215 = (state_31214[(1)]);
if((state_val_31215 === (7))){
var inst_31210 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
var statearr_31217_34675 = state_31214__$1;
(statearr_31217_34675[(2)] = inst_31210);

(statearr_31217_34675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (1))){
var state_31214__$1 = state_31214;
var statearr_31218_34676 = state_31214__$1;
(statearr_31218_34676[(2)] = null);

(statearr_31218_34676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (4))){
var inst_31191 = (state_31214[(7)]);
var inst_31191__$1 = (state_31214[(2)]);
var inst_31192 = (inst_31191__$1 == null);
var state_31214__$1 = (function (){var statearr_31219 = state_31214;
(statearr_31219[(7)] = inst_31191__$1);

return statearr_31219;
})();
if(cljs.core.truth_(inst_31192)){
var statearr_31220_34677 = state_31214__$1;
(statearr_31220_34677[(1)] = (5));

} else {
var statearr_31225_34678 = state_31214__$1;
(statearr_31225_34678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (13))){
var state_31214__$1 = state_31214;
var statearr_31227_34679 = state_31214__$1;
(statearr_31227_34679[(2)] = null);

(statearr_31227_34679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (6))){
var inst_31191 = (state_31214[(7)]);
var inst_31197 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31191) : p.call(null,inst_31191));
var state_31214__$1 = state_31214;
if(cljs.core.truth_(inst_31197)){
var statearr_31228_34680 = state_31214__$1;
(statearr_31228_34680[(1)] = (9));

} else {
var statearr_31229_34681 = state_31214__$1;
(statearr_31229_34681[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (3))){
var inst_31212 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31214__$1,inst_31212);
} else {
if((state_val_31215 === (12))){
var state_31214__$1 = state_31214;
var statearr_31236_34682 = state_31214__$1;
(statearr_31236_34682[(2)] = null);

(statearr_31236_34682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (2))){
var state_31214__$1 = state_31214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31214__$1,(4),ch);
} else {
if((state_val_31215 === (11))){
var inst_31191 = (state_31214[(7)]);
var inst_31201 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31214__$1,(8),inst_31201,inst_31191);
} else {
if((state_val_31215 === (9))){
var state_31214__$1 = state_31214;
var statearr_31243_34684 = state_31214__$1;
(statearr_31243_34684[(2)] = tc);

(statearr_31243_34684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (5))){
var inst_31194 = cljs.core.async.close_BANG_(tc);
var inst_31195 = cljs.core.async.close_BANG_(fc);
var state_31214__$1 = (function (){var statearr_31244 = state_31214;
(statearr_31244[(8)] = inst_31194);

return statearr_31244;
})();
var statearr_31245_34686 = state_31214__$1;
(statearr_31245_34686[(2)] = inst_31195);

(statearr_31245_34686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (14))){
var inst_31208 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
var statearr_31246_34687 = state_31214__$1;
(statearr_31246_34687[(2)] = inst_31208);

(statearr_31246_34687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (10))){
var state_31214__$1 = state_31214;
var statearr_31247_34688 = state_31214__$1;
(statearr_31247_34688[(2)] = fc);

(statearr_31247_34688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31215 === (8))){
var inst_31203 = (state_31214[(2)]);
var state_31214__$1 = state_31214;
if(cljs.core.truth_(inst_31203)){
var statearr_31249_34689 = state_31214__$1;
(statearr_31249_34689[(1)] = (12));

} else {
var statearr_31250_34690 = state_31214__$1;
(statearr_31250_34690[(1)] = (13));

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
var cljs$core$async$state_machine__29613__auto__ = null;
var cljs$core$async$state_machine__29613__auto____0 = (function (){
var statearr_31251 = [null,null,null,null,null,null,null,null,null];
(statearr_31251[(0)] = cljs$core$async$state_machine__29613__auto__);

(statearr_31251[(1)] = (1));

return statearr_31251;
});
var cljs$core$async$state_machine__29613__auto____1 = (function (state_31214){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_31214);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e31253){var ex__29616__auto__ = e31253;
var statearr_31255_34691 = state_31214;
(statearr_31255_34691[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_31214[(4)]))){
var statearr_31269_34692 = state_31214;
(statearr_31269_34692[(1)] = cljs.core.first((state_31214[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34693 = state_31214;
state_31214 = G__34693;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$state_machine__29613__auto__ = function(state_31214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29613__auto____1.call(this,state_31214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29613__auto____0;
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29613__auto____1;
return cljs$core$async$state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_31273 = f__30196__auto__();
(statearr_31273[(6)] = c__30195__auto___34674);

return statearr_31273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
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
var c__30195__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_31302){
var state_val_31303 = (state_31302[(1)]);
if((state_val_31303 === (7))){
var inst_31298 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
var statearr_31306_34694 = state_31302__$1;
(statearr_31306_34694[(2)] = inst_31298);

(statearr_31306_34694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (1))){
var inst_31278 = init;
var inst_31279 = inst_31278;
var state_31302__$1 = (function (){var statearr_31308 = state_31302;
(statearr_31308[(7)] = inst_31279);

return statearr_31308;
})();
var statearr_31309_34695 = state_31302__$1;
(statearr_31309_34695[(2)] = null);

(statearr_31309_34695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (4))){
var inst_31284 = (state_31302[(8)]);
var inst_31284__$1 = (state_31302[(2)]);
var inst_31285 = (inst_31284__$1 == null);
var state_31302__$1 = (function (){var statearr_31311 = state_31302;
(statearr_31311[(8)] = inst_31284__$1);

return statearr_31311;
})();
if(cljs.core.truth_(inst_31285)){
var statearr_31312_34698 = state_31302__$1;
(statearr_31312_34698[(1)] = (5));

} else {
var statearr_31313_34699 = state_31302__$1;
(statearr_31313_34699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (6))){
var inst_31279 = (state_31302[(7)]);
var inst_31288 = (state_31302[(9)]);
var inst_31284 = (state_31302[(8)]);
var inst_31288__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31279,inst_31284) : f.call(null,inst_31279,inst_31284));
var inst_31290 = cljs.core.reduced_QMARK_(inst_31288__$1);
var state_31302__$1 = (function (){var statearr_31320 = state_31302;
(statearr_31320[(9)] = inst_31288__$1);

return statearr_31320;
})();
if(inst_31290){
var statearr_31321_34700 = state_31302__$1;
(statearr_31321_34700[(1)] = (8));

} else {
var statearr_31323_34701 = state_31302__$1;
(statearr_31323_34701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (3))){
var inst_31300 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31302__$1,inst_31300);
} else {
if((state_val_31303 === (2))){
var state_31302__$1 = state_31302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31302__$1,(4),ch);
} else {
if((state_val_31303 === (9))){
var inst_31288 = (state_31302[(9)]);
var inst_31279 = inst_31288;
var state_31302__$1 = (function (){var statearr_31328 = state_31302;
(statearr_31328[(7)] = inst_31279);

return statearr_31328;
})();
var statearr_31329_34702 = state_31302__$1;
(statearr_31329_34702[(2)] = null);

(statearr_31329_34702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (5))){
var inst_31279 = (state_31302[(7)]);
var state_31302__$1 = state_31302;
var statearr_31330_34703 = state_31302__$1;
(statearr_31330_34703[(2)] = inst_31279);

(statearr_31330_34703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (10))){
var inst_31296 = (state_31302[(2)]);
var state_31302__$1 = state_31302;
var statearr_31334_34704 = state_31302__$1;
(statearr_31334_34704[(2)] = inst_31296);

(statearr_31334_34704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31303 === (8))){
var inst_31288 = (state_31302[(9)]);
var inst_31292 = cljs.core.deref(inst_31288);
var state_31302__$1 = state_31302;
var statearr_31335_34705 = state_31302__$1;
(statearr_31335_34705[(2)] = inst_31292);

(statearr_31335_34705[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29613__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29613__auto____0 = (function (){
var statearr_31338 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31338[(0)] = cljs$core$async$reduce_$_state_machine__29613__auto__);

(statearr_31338[(1)] = (1));

return statearr_31338;
});
var cljs$core$async$reduce_$_state_machine__29613__auto____1 = (function (state_31302){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_31302);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e31342){var ex__29616__auto__ = e31342;
var statearr_31343_34706 = state_31302;
(statearr_31343_34706[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_31302[(4)]))){
var statearr_31344_34711 = state_31302;
(statearr_31344_34711[(1)] = cljs.core.first((state_31302[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34712 = state_31302;
state_31302 = G__34712;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29613__auto__ = function(state_31302){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29613__auto____1.call(this,state_31302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29613__auto____0;
cljs$core$async$reduce_$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29613__auto____1;
return cljs$core$async$reduce_$_state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_31352 = f__30196__auto__();
(statearr_31352[(6)] = c__30195__auto__);

return statearr_31352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));

return c__30195__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30195__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_31368){
var state_val_31369 = (state_31368[(1)]);
if((state_val_31369 === (1))){
var inst_31363 = cljs.core.async.reduce(f__$1,init,ch);
var state_31368__$1 = state_31368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31368__$1,(2),inst_31363);
} else {
if((state_val_31369 === (2))){
var inst_31365 = (state_31368[(2)]);
var inst_31366 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31365) : f__$1.call(null,inst_31365));
var state_31368__$1 = state_31368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31368__$1,inst_31366);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29613__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29613__auto____0 = (function (){
var statearr_31380 = [null,null,null,null,null,null,null];
(statearr_31380[(0)] = cljs$core$async$transduce_$_state_machine__29613__auto__);

(statearr_31380[(1)] = (1));

return statearr_31380;
});
var cljs$core$async$transduce_$_state_machine__29613__auto____1 = (function (state_31368){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_31368);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e31384){var ex__29616__auto__ = e31384;
var statearr_31385_34713 = state_31368;
(statearr_31385_34713[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_31368[(4)]))){
var statearr_31387_34714 = state_31368;
(statearr_31387_34714[(1)] = cljs.core.first((state_31368[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34715 = state_31368;
state_31368 = G__34715;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29613__auto__ = function(state_31368){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29613__auto____1.call(this,state_31368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29613__auto____0;
cljs$core$async$transduce_$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29613__auto____1;
return cljs$core$async$transduce_$_state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_31391 = f__30196__auto__();
(statearr_31391[(6)] = c__30195__auto__);

return statearr_31391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));

return c__30195__auto__;
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
var G__31398 = arguments.length;
switch (G__31398) {
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
var c__30195__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_31426){
var state_val_31427 = (state_31426[(1)]);
if((state_val_31427 === (7))){
var inst_31408 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31441_34717 = state_31426__$1;
(statearr_31441_34717[(2)] = inst_31408);

(statearr_31441_34717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (1))){
var inst_31402 = cljs.core.seq(coll);
var inst_31403 = inst_31402;
var state_31426__$1 = (function (){var statearr_31445 = state_31426;
(statearr_31445[(7)] = inst_31403);

return statearr_31445;
})();
var statearr_31446_34719 = state_31426__$1;
(statearr_31446_34719[(2)] = null);

(statearr_31446_34719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (4))){
var inst_31403 = (state_31426[(7)]);
var inst_31406 = cljs.core.first(inst_31403);
var state_31426__$1 = state_31426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31426__$1,(7),ch,inst_31406);
} else {
if((state_val_31427 === (13))){
var inst_31420 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31454_34720 = state_31426__$1;
(statearr_31454_34720[(2)] = inst_31420);

(statearr_31454_34720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (6))){
var inst_31411 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
if(cljs.core.truth_(inst_31411)){
var statearr_31457_34721 = state_31426__$1;
(statearr_31457_34721[(1)] = (8));

} else {
var statearr_31460_34722 = state_31426__$1;
(statearr_31460_34722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (3))){
var inst_31424 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31426__$1,inst_31424);
} else {
if((state_val_31427 === (12))){
var state_31426__$1 = state_31426;
var statearr_31461_34723 = state_31426__$1;
(statearr_31461_34723[(2)] = null);

(statearr_31461_34723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (2))){
var inst_31403 = (state_31426[(7)]);
var state_31426__$1 = state_31426;
if(cljs.core.truth_(inst_31403)){
var statearr_31465_34724 = state_31426__$1;
(statearr_31465_34724[(1)] = (4));

} else {
var statearr_31473_34725 = state_31426__$1;
(statearr_31473_34725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (11))){
var inst_31417 = cljs.core.async.close_BANG_(ch);
var state_31426__$1 = state_31426;
var statearr_31476_34726 = state_31426__$1;
(statearr_31476_34726[(2)] = inst_31417);

(statearr_31476_34726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (9))){
var state_31426__$1 = state_31426;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31481_34727 = state_31426__$1;
(statearr_31481_34727[(1)] = (11));

} else {
var statearr_31483_34728 = state_31426__$1;
(statearr_31483_34728[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (5))){
var inst_31403 = (state_31426[(7)]);
var state_31426__$1 = state_31426;
var statearr_31486_34729 = state_31426__$1;
(statearr_31486_34729[(2)] = inst_31403);

(statearr_31486_34729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (10))){
var inst_31422 = (state_31426[(2)]);
var state_31426__$1 = state_31426;
var statearr_31487_34730 = state_31426__$1;
(statearr_31487_34730[(2)] = inst_31422);

(statearr_31487_34730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31427 === (8))){
var inst_31403 = (state_31426[(7)]);
var inst_31413 = cljs.core.next(inst_31403);
var inst_31403__$1 = inst_31413;
var state_31426__$1 = (function (){var statearr_31488 = state_31426;
(statearr_31488[(7)] = inst_31403__$1);

return statearr_31488;
})();
var statearr_31491_34731 = state_31426__$1;
(statearr_31491_34731[(2)] = null);

(statearr_31491_34731[(1)] = (2));


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
var cljs$core$async$state_machine__29613__auto__ = null;
var cljs$core$async$state_machine__29613__auto____0 = (function (){
var statearr_31494 = [null,null,null,null,null,null,null,null];
(statearr_31494[(0)] = cljs$core$async$state_machine__29613__auto__);

(statearr_31494[(1)] = (1));

return statearr_31494;
});
var cljs$core$async$state_machine__29613__auto____1 = (function (state_31426){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_31426);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e31496){var ex__29616__auto__ = e31496;
var statearr_31497_34736 = state_31426;
(statearr_31497_34736[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_31426[(4)]))){
var statearr_31499_34737 = state_31426;
(statearr_31499_34737[(1)] = cljs.core.first((state_31426[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34739 = state_31426;
state_31426 = G__34739;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$state_machine__29613__auto__ = function(state_31426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29613__auto____1.call(this,state_31426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29613__auto____0;
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29613__auto____1;
return cljs$core$async$state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_31504 = f__30196__auto__();
(statearr_31504[(6)] = c__30195__auto__);

return statearr_31504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));

return c__30195__auto__;
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
var G__31516 = arguments.length;
switch (G__31516) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34741 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34741(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34742 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34742(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34746 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34746(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34747 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34747(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31553 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31553 = (function (ch,cs,meta31554){
this.ch = ch;
this.cs = cs;
this.meta31554 = meta31554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31555,meta31554__$1){
var self__ = this;
var _31555__$1 = this;
return (new cljs.core.async.t_cljs$core$async31553(self__.ch,self__.cs,meta31554__$1));
}));

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31555){
var self__ = this;
var _31555__$1 = this;
return self__.meta31554;
}));

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31553.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31554","meta31554",-1328428057,null)], null);
}));

(cljs.core.async.t_cljs$core$async31553.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31553");

(cljs.core.async.t_cljs$core$async31553.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31553");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31553.
 */
cljs.core.async.__GT_t_cljs$core$async31553 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31553(ch__$1,cs__$1,meta31554){
return (new cljs.core.async.t_cljs$core$async31553(ch__$1,cs__$1,meta31554));
});

}

return (new cljs.core.async.t_cljs$core$async31553(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30195__auto___34758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_31765){
var state_val_31766 = (state_31765[(1)]);
if((state_val_31766 === (7))){
var inst_31756 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_31771_34759 = state_31765__$1;
(statearr_31771_34759[(2)] = inst_31756);

(statearr_31771_34759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (20))){
var inst_31627 = (state_31765[(7)]);
var inst_31642 = cljs.core.first(inst_31627);
var inst_31643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31642,(0),null);
var inst_31645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31642,(1),null);
var state_31765__$1 = (function (){var statearr_31773 = state_31765;
(statearr_31773[(8)] = inst_31643);

return statearr_31773;
})();
if(cljs.core.truth_(inst_31645)){
var statearr_31777_34763 = state_31765__$1;
(statearr_31777_34763[(1)] = (22));

} else {
var statearr_31783_34764 = state_31765__$1;
(statearr_31783_34764[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (27))){
var inst_31687 = (state_31765[(9)]);
var inst_31685 = (state_31765[(10)]);
var inst_31584 = (state_31765[(11)]);
var inst_31694 = (state_31765[(12)]);
var inst_31694__$1 = cljs.core._nth(inst_31685,inst_31687);
var inst_31698 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31694__$1,inst_31584,done);
var state_31765__$1 = (function (){var statearr_31790 = state_31765;
(statearr_31790[(12)] = inst_31694__$1);

return statearr_31790;
})();
if(cljs.core.truth_(inst_31698)){
var statearr_31793_34765 = state_31765__$1;
(statearr_31793_34765[(1)] = (30));

} else {
var statearr_31795_34766 = state_31765__$1;
(statearr_31795_34766[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (1))){
var state_31765__$1 = state_31765;
var statearr_31796_34771 = state_31765__$1;
(statearr_31796_34771[(2)] = null);

(statearr_31796_34771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (24))){
var inst_31627 = (state_31765[(7)]);
var inst_31655 = (state_31765[(2)]);
var inst_31658 = cljs.core.next(inst_31627);
var inst_31593 = inst_31658;
var inst_31594 = null;
var inst_31595 = (0);
var inst_31596 = (0);
var state_31765__$1 = (function (){var statearr_31801 = state_31765;
(statearr_31801[(13)] = inst_31595);

(statearr_31801[(14)] = inst_31594);

(statearr_31801[(15)] = inst_31655);

(statearr_31801[(16)] = inst_31593);

(statearr_31801[(17)] = inst_31596);

return statearr_31801;
})();
var statearr_31802_34772 = state_31765__$1;
(statearr_31802_34772[(2)] = null);

(statearr_31802_34772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (39))){
var state_31765__$1 = state_31765;
var statearr_31812_34773 = state_31765__$1;
(statearr_31812_34773[(2)] = null);

(statearr_31812_34773[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (4))){
var inst_31584 = (state_31765[(11)]);
var inst_31584__$1 = (state_31765[(2)]);
var inst_31585 = (inst_31584__$1 == null);
var state_31765__$1 = (function (){var statearr_31818 = state_31765;
(statearr_31818[(11)] = inst_31584__$1);

return statearr_31818;
})();
if(cljs.core.truth_(inst_31585)){
var statearr_31819_34778 = state_31765__$1;
(statearr_31819_34778[(1)] = (5));

} else {
var statearr_31821_34779 = state_31765__$1;
(statearr_31821_34779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (15))){
var inst_31595 = (state_31765[(13)]);
var inst_31594 = (state_31765[(14)]);
var inst_31593 = (state_31765[(16)]);
var inst_31596 = (state_31765[(17)]);
var inst_31622 = (state_31765[(2)]);
var inst_31623 = (inst_31596 + (1));
var tmp31804 = inst_31595;
var tmp31805 = inst_31594;
var tmp31806 = inst_31593;
var inst_31593__$1 = tmp31806;
var inst_31594__$1 = tmp31805;
var inst_31595__$1 = tmp31804;
var inst_31596__$1 = inst_31623;
var state_31765__$1 = (function (){var statearr_31829 = state_31765;
(statearr_31829[(18)] = inst_31622);

(statearr_31829[(13)] = inst_31595__$1);

(statearr_31829[(14)] = inst_31594__$1);

(statearr_31829[(16)] = inst_31593__$1);

(statearr_31829[(17)] = inst_31596__$1);

return statearr_31829;
})();
var statearr_31831_34783 = state_31765__$1;
(statearr_31831_34783[(2)] = null);

(statearr_31831_34783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (21))){
var inst_31661 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_31837_34784 = state_31765__$1;
(statearr_31837_34784[(2)] = inst_31661);

(statearr_31837_34784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (31))){
var inst_31694 = (state_31765[(12)]);
var inst_31704 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31694);
var state_31765__$1 = state_31765;
var statearr_31840_34785 = state_31765__$1;
(statearr_31840_34785[(2)] = inst_31704);

(statearr_31840_34785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (32))){
var inst_31687 = (state_31765[(9)]);
var inst_31685 = (state_31765[(10)]);
var inst_31684 = (state_31765[(19)]);
var inst_31686 = (state_31765[(20)]);
var inst_31706 = (state_31765[(2)]);
var inst_31707 = (inst_31687 + (1));
var tmp31832 = inst_31685;
var tmp31833 = inst_31684;
var tmp31834 = inst_31686;
var inst_31684__$1 = tmp31833;
var inst_31685__$1 = tmp31832;
var inst_31686__$1 = tmp31834;
var inst_31687__$1 = inst_31707;
var state_31765__$1 = (function (){var statearr_31846 = state_31765;
(statearr_31846[(9)] = inst_31687__$1);

(statearr_31846[(10)] = inst_31685__$1);

(statearr_31846[(19)] = inst_31684__$1);

(statearr_31846[(20)] = inst_31686__$1);

(statearr_31846[(21)] = inst_31706);

return statearr_31846;
})();
var statearr_31848_34793 = state_31765__$1;
(statearr_31848_34793[(2)] = null);

(statearr_31848_34793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (40))){
var inst_31725 = (state_31765[(22)]);
var inst_31730 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31725);
var state_31765__$1 = state_31765;
var statearr_31857_34794 = state_31765__$1;
(statearr_31857_34794[(2)] = inst_31730);

(statearr_31857_34794[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (33))){
var inst_31711 = (state_31765[(23)]);
var inst_31713 = cljs.core.chunked_seq_QMARK_(inst_31711);
var state_31765__$1 = state_31765;
if(inst_31713){
var statearr_31858_34799 = state_31765__$1;
(statearr_31858_34799[(1)] = (36));

} else {
var statearr_31860_34800 = state_31765__$1;
(statearr_31860_34800[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (13))){
var inst_31613 = (state_31765[(24)]);
var inst_31619 = cljs.core.async.close_BANG_(inst_31613);
var state_31765__$1 = state_31765;
var statearr_31863_34804 = state_31765__$1;
(statearr_31863_34804[(2)] = inst_31619);

(statearr_31863_34804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (22))){
var inst_31643 = (state_31765[(8)]);
var inst_31651 = cljs.core.async.close_BANG_(inst_31643);
var state_31765__$1 = state_31765;
var statearr_31876_34805 = state_31765__$1;
(statearr_31876_34805[(2)] = inst_31651);

(statearr_31876_34805[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (36))){
var inst_31711 = (state_31765[(23)]);
var inst_31718 = cljs.core.chunk_first(inst_31711);
var inst_31720 = cljs.core.chunk_rest(inst_31711);
var inst_31721 = cljs.core.count(inst_31718);
var inst_31684 = inst_31720;
var inst_31685 = inst_31718;
var inst_31686 = inst_31721;
var inst_31687 = (0);
var state_31765__$1 = (function (){var statearr_31881 = state_31765;
(statearr_31881[(9)] = inst_31687);

(statearr_31881[(10)] = inst_31685);

(statearr_31881[(19)] = inst_31684);

(statearr_31881[(20)] = inst_31686);

return statearr_31881;
})();
var statearr_31883_34806 = state_31765__$1;
(statearr_31883_34806[(2)] = null);

(statearr_31883_34806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (41))){
var inst_31711 = (state_31765[(23)]);
var inst_31732 = (state_31765[(2)]);
var inst_31733 = cljs.core.next(inst_31711);
var inst_31684 = inst_31733;
var inst_31685 = null;
var inst_31686 = (0);
var inst_31687 = (0);
var state_31765__$1 = (function (){var statearr_31895 = state_31765;
(statearr_31895[(25)] = inst_31732);

(statearr_31895[(9)] = inst_31687);

(statearr_31895[(10)] = inst_31685);

(statearr_31895[(19)] = inst_31684);

(statearr_31895[(20)] = inst_31686);

return statearr_31895;
})();
var statearr_31897_34810 = state_31765__$1;
(statearr_31897_34810[(2)] = null);

(statearr_31897_34810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (43))){
var state_31765__$1 = state_31765;
var statearr_31900_34811 = state_31765__$1;
(statearr_31900_34811[(2)] = null);

(statearr_31900_34811[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (29))){
var inst_31744 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_31902_34812 = state_31765__$1;
(statearr_31902_34812[(2)] = inst_31744);

(statearr_31902_34812[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (44))){
var inst_31753 = (state_31765[(2)]);
var state_31765__$1 = (function (){var statearr_31906 = state_31765;
(statearr_31906[(26)] = inst_31753);

return statearr_31906;
})();
var statearr_31907_34813 = state_31765__$1;
(statearr_31907_34813[(2)] = null);

(statearr_31907_34813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (6))){
var inst_31673 = (state_31765[(27)]);
var inst_31672 = cljs.core.deref(cs);
var inst_31673__$1 = cljs.core.keys(inst_31672);
var inst_31676 = cljs.core.count(inst_31673__$1);
var inst_31677 = cljs.core.reset_BANG_(dctr,inst_31676);
var inst_31683 = cljs.core.seq(inst_31673__$1);
var inst_31684 = inst_31683;
var inst_31685 = null;
var inst_31686 = (0);
var inst_31687 = (0);
var state_31765__$1 = (function (){var statearr_31911 = state_31765;
(statearr_31911[(9)] = inst_31687);

(statearr_31911[(28)] = inst_31677);

(statearr_31911[(10)] = inst_31685);

(statearr_31911[(19)] = inst_31684);

(statearr_31911[(20)] = inst_31686);

(statearr_31911[(27)] = inst_31673__$1);

return statearr_31911;
})();
var statearr_31913_34815 = state_31765__$1;
(statearr_31913_34815[(2)] = null);

(statearr_31913_34815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (28))){
var inst_31684 = (state_31765[(19)]);
var inst_31711 = (state_31765[(23)]);
var inst_31711__$1 = cljs.core.seq(inst_31684);
var state_31765__$1 = (function (){var statearr_31917 = state_31765;
(statearr_31917[(23)] = inst_31711__$1);

return statearr_31917;
})();
if(inst_31711__$1){
var statearr_31920_34816 = state_31765__$1;
(statearr_31920_34816[(1)] = (33));

} else {
var statearr_31921_34817 = state_31765__$1;
(statearr_31921_34817[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (25))){
var inst_31687 = (state_31765[(9)]);
var inst_31686 = (state_31765[(20)]);
var inst_31689 = (inst_31687 < inst_31686);
var inst_31690 = inst_31689;
var state_31765__$1 = state_31765;
if(cljs.core.truth_(inst_31690)){
var statearr_31928_34818 = state_31765__$1;
(statearr_31928_34818[(1)] = (27));

} else {
var statearr_31929_34819 = state_31765__$1;
(statearr_31929_34819[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (34))){
var state_31765__$1 = state_31765;
var statearr_31935_34820 = state_31765__$1;
(statearr_31935_34820[(2)] = null);

(statearr_31935_34820[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (17))){
var state_31765__$1 = state_31765;
var statearr_31940_34821 = state_31765__$1;
(statearr_31940_34821[(2)] = null);

(statearr_31940_34821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (3))){
var inst_31758 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31765__$1,inst_31758);
} else {
if((state_val_31766 === (12))){
var inst_31666 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_31945_34822 = state_31765__$1;
(statearr_31945_34822[(2)] = inst_31666);

(statearr_31945_34822[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (2))){
var state_31765__$1 = state_31765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31765__$1,(4),ch);
} else {
if((state_val_31766 === (23))){
var state_31765__$1 = state_31765;
var statearr_31950_34823 = state_31765__$1;
(statearr_31950_34823[(2)] = null);

(statearr_31950_34823[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (35))){
var inst_31739 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_31953_34824 = state_31765__$1;
(statearr_31953_34824[(2)] = inst_31739);

(statearr_31953_34824[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (19))){
var inst_31627 = (state_31765[(7)]);
var inst_31633 = cljs.core.chunk_first(inst_31627);
var inst_31634 = cljs.core.chunk_rest(inst_31627);
var inst_31636 = cljs.core.count(inst_31633);
var inst_31593 = inst_31634;
var inst_31594 = inst_31633;
var inst_31595 = inst_31636;
var inst_31596 = (0);
var state_31765__$1 = (function (){var statearr_31960 = state_31765;
(statearr_31960[(13)] = inst_31595);

(statearr_31960[(14)] = inst_31594);

(statearr_31960[(16)] = inst_31593);

(statearr_31960[(17)] = inst_31596);

return statearr_31960;
})();
var statearr_31968_34827 = state_31765__$1;
(statearr_31968_34827[(2)] = null);

(statearr_31968_34827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (11))){
var inst_31593 = (state_31765[(16)]);
var inst_31627 = (state_31765[(7)]);
var inst_31627__$1 = cljs.core.seq(inst_31593);
var state_31765__$1 = (function (){var statearr_31976 = state_31765;
(statearr_31976[(7)] = inst_31627__$1);

return statearr_31976;
})();
if(inst_31627__$1){
var statearr_31977_34828 = state_31765__$1;
(statearr_31977_34828[(1)] = (16));

} else {
var statearr_31978_34829 = state_31765__$1;
(statearr_31978_34829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (9))){
var inst_31668 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_31982_34831 = state_31765__$1;
(statearr_31982_34831[(2)] = inst_31668);

(statearr_31982_34831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (5))){
var inst_31591 = cljs.core.deref(cs);
var inst_31592 = cljs.core.seq(inst_31591);
var inst_31593 = inst_31592;
var inst_31594 = null;
var inst_31595 = (0);
var inst_31596 = (0);
var state_31765__$1 = (function (){var statearr_31984 = state_31765;
(statearr_31984[(13)] = inst_31595);

(statearr_31984[(14)] = inst_31594);

(statearr_31984[(16)] = inst_31593);

(statearr_31984[(17)] = inst_31596);

return statearr_31984;
})();
var statearr_31996_34832 = state_31765__$1;
(statearr_31996_34832[(2)] = null);

(statearr_31996_34832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (14))){
var state_31765__$1 = state_31765;
var statearr_31999_34833 = state_31765__$1;
(statearr_31999_34833[(2)] = null);

(statearr_31999_34833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (45))){
var inst_31750 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_32003_34834 = state_31765__$1;
(statearr_32003_34834[(2)] = inst_31750);

(statearr_32003_34834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (26))){
var inst_31673 = (state_31765[(27)]);
var inst_31746 = (state_31765[(2)]);
var inst_31747 = cljs.core.seq(inst_31673);
var state_31765__$1 = (function (){var statearr_32011 = state_31765;
(statearr_32011[(29)] = inst_31746);

return statearr_32011;
})();
if(inst_31747){
var statearr_32013_34835 = state_31765__$1;
(statearr_32013_34835[(1)] = (42));

} else {
var statearr_32014_34836 = state_31765__$1;
(statearr_32014_34836[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (16))){
var inst_31627 = (state_31765[(7)]);
var inst_31629 = cljs.core.chunked_seq_QMARK_(inst_31627);
var state_31765__$1 = state_31765;
if(inst_31629){
var statearr_32019_34837 = state_31765__$1;
(statearr_32019_34837[(1)] = (19));

} else {
var statearr_32020_34838 = state_31765__$1;
(statearr_32020_34838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (38))){
var inst_31736 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_32025_34839 = state_31765__$1;
(statearr_32025_34839[(2)] = inst_31736);

(statearr_32025_34839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (30))){
var state_31765__$1 = state_31765;
var statearr_32030_34840 = state_31765__$1;
(statearr_32030_34840[(2)] = null);

(statearr_32030_34840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (10))){
var inst_31594 = (state_31765[(14)]);
var inst_31596 = (state_31765[(17)]);
var inst_31612 = cljs.core._nth(inst_31594,inst_31596);
var inst_31613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31612,(0),null);
var inst_31615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31612,(1),null);
var state_31765__$1 = (function (){var statearr_32035 = state_31765;
(statearr_32035[(24)] = inst_31613);

return statearr_32035;
})();
if(cljs.core.truth_(inst_31615)){
var statearr_32037_34841 = state_31765__$1;
(statearr_32037_34841[(1)] = (13));

} else {
var statearr_32038_34842 = state_31765__$1;
(statearr_32038_34842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (18))){
var inst_31664 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_32042_34843 = state_31765__$1;
(statearr_32042_34843[(2)] = inst_31664);

(statearr_32042_34843[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (42))){
var state_31765__$1 = state_31765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31765__$1,(45),dchan);
} else {
if((state_val_31766 === (37))){
var inst_31725 = (state_31765[(22)]);
var inst_31584 = (state_31765[(11)]);
var inst_31711 = (state_31765[(23)]);
var inst_31725__$1 = cljs.core.first(inst_31711);
var inst_31726 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31725__$1,inst_31584,done);
var state_31765__$1 = (function (){var statearr_32048 = state_31765;
(statearr_32048[(22)] = inst_31725__$1);

return statearr_32048;
})();
if(cljs.core.truth_(inst_31726)){
var statearr_32050_34844 = state_31765__$1;
(statearr_32050_34844[(1)] = (39));

} else {
var statearr_32051_34845 = state_31765__$1;
(statearr_32051_34845[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (8))){
var inst_31595 = (state_31765[(13)]);
var inst_31596 = (state_31765[(17)]);
var inst_31605 = (inst_31596 < inst_31595);
var inst_31606 = inst_31605;
var state_31765__$1 = state_31765;
if(cljs.core.truth_(inst_31606)){
var statearr_32054_34846 = state_31765__$1;
(statearr_32054_34846[(1)] = (10));

} else {
var statearr_32059_34847 = state_31765__$1;
(statearr_32059_34847[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29613__auto__ = null;
var cljs$core$async$mult_$_state_machine__29613__auto____0 = (function (){
var statearr_32073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32073[(0)] = cljs$core$async$mult_$_state_machine__29613__auto__);

(statearr_32073[(1)] = (1));

return statearr_32073;
});
var cljs$core$async$mult_$_state_machine__29613__auto____1 = (function (state_31765){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_31765);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e32078){var ex__29616__auto__ = e32078;
var statearr_32080_34848 = state_31765;
(statearr_32080_34848[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_31765[(4)]))){
var statearr_32081_34849 = state_31765;
(statearr_32081_34849[(1)] = cljs.core.first((state_31765[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34853 = state_31765;
state_31765 = G__34853;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29613__auto__ = function(state_31765){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29613__auto____1.call(this,state_31765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29613__auto____0;
cljs$core$async$mult_$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29613__auto____1;
return cljs$core$async$mult_$_state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_32086 = f__30196__auto__();
(statearr_32086[(6)] = c__30195__auto___34758);

return statearr_32086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
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
var G__32094 = arguments.length;
switch (G__32094) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34860 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34860(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34862 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34862(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34864 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34864(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34866 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34866(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34867 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34867(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34868 = arguments.length;
var i__5770__auto___34869 = (0);
while(true){
if((i__5770__auto___34869 < len__5769__auto___34868)){
args__5775__auto__.push((arguments[i__5770__auto___34869]));

var G__34870 = (i__5770__auto___34869 + (1));
i__5770__auto___34869 = G__34870;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32165){
var map__32168 = p__32165;
var map__32168__$1 = cljs.core.__destructure_map(map__32168);
var opts = map__32168__$1;
var statearr_32169_34872 = state;
(statearr_32169_34872[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32171_34876 = state;
(statearr_32171_34876[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_32175_34877 = state;
(statearr_32175_34877[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32152){
var G__32157 = cljs.core.first(seq32152);
var seq32152__$1 = cljs.core.next(seq32152);
var G__32158 = cljs.core.first(seq32152__$1);
var seq32152__$2 = cljs.core.next(seq32152__$1);
var G__32159 = cljs.core.first(seq32152__$2);
var seq32152__$3 = cljs.core.next(seq32152__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32157,G__32158,G__32159,seq32152__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32194 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32195){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32195 = meta32195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32196,meta32195__$1){
var self__ = this;
var _32196__$1 = this;
return (new cljs.core.async.t_cljs$core$async32194(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32195__$1));
}));

(cljs.core.async.t_cljs$core$async32194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32196){
var self__ = this;
var _32196__$1 = this;
return self__.meta32195;
}));

(cljs.core.async.t_cljs$core$async32194.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32194.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32194.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32194.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32194.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32194.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32194.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32194.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32195","meta32195",2009525519,null)], null);
}));

(cljs.core.async.t_cljs$core$async32194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32194");

(cljs.core.async.t_cljs$core$async32194.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32194.
 */
cljs.core.async.__GT_t_cljs$core$async32194 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32194(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32195){
return (new cljs.core.async.t_cljs$core$async32194(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32195));
});

}

return (new cljs.core.async.t_cljs$core$async32194(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30195__auto___34895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_32307){
var state_val_32308 = (state_32307[(1)]);
if((state_val_32308 === (7))){
var inst_32257 = (state_32307[(2)]);
var state_32307__$1 = state_32307;
if(cljs.core.truth_(inst_32257)){
var statearr_32317_34896 = state_32307__$1;
(statearr_32317_34896[(1)] = (8));

} else {
var statearr_32318_34897 = state_32307__$1;
(statearr_32318_34897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (20))){
var inst_32247 = (state_32307[(7)]);
var state_32307__$1 = state_32307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32307__$1,(23),out,inst_32247);
} else {
if((state_val_32308 === (1))){
var inst_32226 = calc_state();
var inst_32227 = cljs.core.__destructure_map(inst_32226);
var inst_32228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32227,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32227,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32227,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32231 = inst_32226;
var state_32307__$1 = (function (){var statearr_32325 = state_32307;
(statearr_32325[(8)] = inst_32229);

(statearr_32325[(9)] = inst_32228);

(statearr_32325[(10)] = inst_32230);

(statearr_32325[(11)] = inst_32231);

return statearr_32325;
})();
var statearr_32326_34902 = state_32307__$1;
(statearr_32326_34902[(2)] = null);

(statearr_32326_34902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (24))){
var inst_32234 = (state_32307[(12)]);
var inst_32231 = inst_32234;
var state_32307__$1 = (function (){var statearr_32329 = state_32307;
(statearr_32329[(11)] = inst_32231);

return statearr_32329;
})();
var statearr_32331_34903 = state_32307__$1;
(statearr_32331_34903[(2)] = null);

(statearr_32331_34903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (4))){
var inst_32247 = (state_32307[(7)]);
var inst_32252 = (state_32307[(13)]);
var inst_32246 = (state_32307[(2)]);
var inst_32247__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32246,(0),null);
var inst_32251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32246,(1),null);
var inst_32252__$1 = (inst_32247__$1 == null);
var state_32307__$1 = (function (){var statearr_32338 = state_32307;
(statearr_32338[(7)] = inst_32247__$1);

(statearr_32338[(13)] = inst_32252__$1);

(statearr_32338[(14)] = inst_32251);

return statearr_32338;
})();
if(cljs.core.truth_(inst_32252__$1)){
var statearr_32339_34904 = state_32307__$1;
(statearr_32339_34904[(1)] = (5));

} else {
var statearr_32340_34905 = state_32307__$1;
(statearr_32340_34905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (15))){
var inst_32235 = (state_32307[(15)]);
var inst_32272 = (state_32307[(16)]);
var inst_32272__$1 = cljs.core.empty_QMARK_(inst_32235);
var state_32307__$1 = (function (){var statearr_32341 = state_32307;
(statearr_32341[(16)] = inst_32272__$1);

return statearr_32341;
})();
if(inst_32272__$1){
var statearr_32344_34915 = state_32307__$1;
(statearr_32344_34915[(1)] = (17));

} else {
var statearr_32345_34916 = state_32307__$1;
(statearr_32345_34916[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (21))){
var inst_32234 = (state_32307[(12)]);
var inst_32231 = inst_32234;
var state_32307__$1 = (function (){var statearr_32348 = state_32307;
(statearr_32348[(11)] = inst_32231);

return statearr_32348;
})();
var statearr_32349_34917 = state_32307__$1;
(statearr_32349_34917[(2)] = null);

(statearr_32349_34917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (13))){
var inst_32264 = (state_32307[(2)]);
var inst_32265 = calc_state();
var inst_32231 = inst_32265;
var state_32307__$1 = (function (){var statearr_32350 = state_32307;
(statearr_32350[(11)] = inst_32231);

(statearr_32350[(17)] = inst_32264);

return statearr_32350;
})();
var statearr_32351_34919 = state_32307__$1;
(statearr_32351_34919[(2)] = null);

(statearr_32351_34919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (22))){
var inst_32293 = (state_32307[(2)]);
var state_32307__$1 = state_32307;
var statearr_32368_34920 = state_32307__$1;
(statearr_32368_34920[(2)] = inst_32293);

(statearr_32368_34920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (6))){
var inst_32251 = (state_32307[(14)]);
var inst_32255 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32251,change);
var state_32307__$1 = state_32307;
var statearr_32372_34921 = state_32307__$1;
(statearr_32372_34921[(2)] = inst_32255);

(statearr_32372_34921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (25))){
var state_32307__$1 = state_32307;
var statearr_32373_34922 = state_32307__$1;
(statearr_32373_34922[(2)] = null);

(statearr_32373_34922[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (17))){
var inst_32236 = (state_32307[(18)]);
var inst_32251 = (state_32307[(14)]);
var inst_32274 = (inst_32236.cljs$core$IFn$_invoke$arity$1 ? inst_32236.cljs$core$IFn$_invoke$arity$1(inst_32251) : inst_32236.call(null,inst_32251));
var inst_32275 = cljs.core.not(inst_32274);
var state_32307__$1 = state_32307;
var statearr_32378_34923 = state_32307__$1;
(statearr_32378_34923[(2)] = inst_32275);

(statearr_32378_34923[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (3))){
var inst_32297 = (state_32307[(2)]);
var state_32307__$1 = state_32307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32307__$1,inst_32297);
} else {
if((state_val_32308 === (12))){
var state_32307__$1 = state_32307;
var statearr_32386_34924 = state_32307__$1;
(statearr_32386_34924[(2)] = null);

(statearr_32386_34924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (2))){
var inst_32234 = (state_32307[(12)]);
var inst_32231 = (state_32307[(11)]);
var inst_32234__$1 = cljs.core.__destructure_map(inst_32231);
var inst_32235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32234__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32234__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32234__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32307__$1 = (function (){var statearr_32395 = state_32307;
(statearr_32395[(12)] = inst_32234__$1);

(statearr_32395[(18)] = inst_32236);

(statearr_32395[(15)] = inst_32235);

return statearr_32395;
})();
return cljs.core.async.ioc_alts_BANG_(state_32307__$1,(4),inst_32241);
} else {
if((state_val_32308 === (23))){
var inst_32283 = (state_32307[(2)]);
var state_32307__$1 = state_32307;
if(cljs.core.truth_(inst_32283)){
var statearr_32407_34925 = state_32307__$1;
(statearr_32407_34925[(1)] = (24));

} else {
var statearr_32409_34926 = state_32307__$1;
(statearr_32409_34926[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (19))){
var inst_32278 = (state_32307[(2)]);
var state_32307__$1 = state_32307;
var statearr_32415_34927 = state_32307__$1;
(statearr_32415_34927[(2)] = inst_32278);

(statearr_32415_34927[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (11))){
var inst_32251 = (state_32307[(14)]);
var inst_32261 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32251);
var state_32307__$1 = state_32307;
var statearr_32422_34928 = state_32307__$1;
(statearr_32422_34928[(2)] = inst_32261);

(statearr_32422_34928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (9))){
var inst_32251 = (state_32307[(14)]);
var inst_32268 = (state_32307[(19)]);
var inst_32235 = (state_32307[(15)]);
var inst_32268__$1 = (inst_32235.cljs$core$IFn$_invoke$arity$1 ? inst_32235.cljs$core$IFn$_invoke$arity$1(inst_32251) : inst_32235.call(null,inst_32251));
var state_32307__$1 = (function (){var statearr_32429 = state_32307;
(statearr_32429[(19)] = inst_32268__$1);

return statearr_32429;
})();
if(cljs.core.truth_(inst_32268__$1)){
var statearr_32433_34929 = state_32307__$1;
(statearr_32433_34929[(1)] = (14));

} else {
var statearr_32434_34930 = state_32307__$1;
(statearr_32434_34930[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (5))){
var inst_32252 = (state_32307[(13)]);
var state_32307__$1 = state_32307;
var statearr_32436_34931 = state_32307__$1;
(statearr_32436_34931[(2)] = inst_32252);

(statearr_32436_34931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (14))){
var inst_32268 = (state_32307[(19)]);
var state_32307__$1 = state_32307;
var statearr_32438_34932 = state_32307__$1;
(statearr_32438_34932[(2)] = inst_32268);

(statearr_32438_34932[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (26))){
var inst_32289 = (state_32307[(2)]);
var state_32307__$1 = state_32307;
var statearr_32443_34933 = state_32307__$1;
(statearr_32443_34933[(2)] = inst_32289);

(statearr_32443_34933[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (16))){
var inst_32280 = (state_32307[(2)]);
var state_32307__$1 = state_32307;
if(cljs.core.truth_(inst_32280)){
var statearr_32444_34940 = state_32307__$1;
(statearr_32444_34940[(1)] = (20));

} else {
var statearr_32445_34941 = state_32307__$1;
(statearr_32445_34941[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (10))){
var inst_32295 = (state_32307[(2)]);
var state_32307__$1 = state_32307;
var statearr_32446_34942 = state_32307__$1;
(statearr_32446_34942[(2)] = inst_32295);

(statearr_32446_34942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (18))){
var inst_32272 = (state_32307[(16)]);
var state_32307__$1 = state_32307;
var statearr_32447_34943 = state_32307__$1;
(statearr_32447_34943[(2)] = inst_32272);

(statearr_32447_34943[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32308 === (8))){
var inst_32247 = (state_32307[(7)]);
var inst_32259 = (inst_32247 == null);
var state_32307__$1 = state_32307;
if(cljs.core.truth_(inst_32259)){
var statearr_32452_34944 = state_32307__$1;
(statearr_32452_34944[(1)] = (11));

} else {
var statearr_32453_34946 = state_32307__$1;
(statearr_32453_34946[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__29613__auto__ = null;
var cljs$core$async$mix_$_state_machine__29613__auto____0 = (function (){
var statearr_32454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32454[(0)] = cljs$core$async$mix_$_state_machine__29613__auto__);

(statearr_32454[(1)] = (1));

return statearr_32454;
});
var cljs$core$async$mix_$_state_machine__29613__auto____1 = (function (state_32307){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_32307);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e32457){var ex__29616__auto__ = e32457;
var statearr_32459_34947 = state_32307;
(statearr_32459_34947[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_32307[(4)]))){
var statearr_32460_34948 = state_32307;
(statearr_32460_34948[(1)] = cljs.core.first((state_32307[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34949 = state_32307;
state_32307 = G__34949;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29613__auto__ = function(state_32307){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29613__auto____1.call(this,state_32307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29613__auto____0;
cljs$core$async$mix_$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29613__auto____1;
return cljs$core$async$mix_$_state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_32461 = f__30196__auto__();
(statearr_32461[(6)] = c__30195__auto___34895);

return statearr_32461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34953 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34953(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34955 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34955(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34956 = (function() {
var G__34957 = null;
var G__34957__1 = (function (p){
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
var G__34957__2 = (function (p,v){
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
G__34957 = function(p,v){
switch(arguments.length){
case 1:
return G__34957__1.call(this,p);
case 2:
return G__34957__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34957.cljs$core$IFn$_invoke$arity$1 = G__34957__1;
G__34957.cljs$core$IFn$_invoke$arity$2 = G__34957__2;
return G__34957;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32495 = arguments.length;
switch (G__32495) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34956(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34956(p,v);
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
var G__32522 = arguments.length;
switch (G__32522) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32513_SHARP_){
if(cljs.core.truth_((p1__32513_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32513_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32513_SHARP_.call(null,topic)))){
return p1__32513_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32513_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32539 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32540){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32540 = meta32540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32541,meta32540__$1){
var self__ = this;
var _32541__$1 = this;
return (new cljs.core.async.t_cljs$core$async32539(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32540__$1));
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32541){
var self__ = this;
var _32541__$1 = this;
return self__.meta32540;
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32539.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32540","meta32540",811770471,null)], null);
}));

(cljs.core.async.t_cljs$core$async32539.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32539");

(cljs.core.async.t_cljs$core$async32539.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32539");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32539.
 */
cljs.core.async.__GT_t_cljs$core$async32539 = (function cljs$core$async$__GT_t_cljs$core$async32539(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32540){
return (new cljs.core.async.t_cljs$core$async32539(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32540));
});

}

return (new cljs.core.async.t_cljs$core$async32539(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30195__auto___34970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_32697){
var state_val_32699 = (state_32697[(1)]);
if((state_val_32699 === (7))){
var inst_32691 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32703_34971 = state_32697__$1;
(statearr_32703_34971[(2)] = inst_32691);

(statearr_32703_34971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (20))){
var state_32697__$1 = state_32697;
var statearr_32704_34972 = state_32697__$1;
(statearr_32704_34972[(2)] = null);

(statearr_32704_34972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (1))){
var state_32697__$1 = state_32697;
var statearr_32711_34973 = state_32697__$1;
(statearr_32711_34973[(2)] = null);

(statearr_32711_34973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (24))){
var inst_32669 = (state_32697[(7)]);
var inst_32682 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32669);
var state_32697__$1 = state_32697;
var statearr_32713_34974 = state_32697__$1;
(statearr_32713_34974[(2)] = inst_32682);

(statearr_32713_34974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (4))){
var inst_32583 = (state_32697[(8)]);
var inst_32583__$1 = (state_32697[(2)]);
var inst_32584 = (inst_32583__$1 == null);
var state_32697__$1 = (function (){var statearr_32718 = state_32697;
(statearr_32718[(8)] = inst_32583__$1);

return statearr_32718;
})();
if(cljs.core.truth_(inst_32584)){
var statearr_32719_34975 = state_32697__$1;
(statearr_32719_34975[(1)] = (5));

} else {
var statearr_32720_34976 = state_32697__$1;
(statearr_32720_34976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (15))){
var inst_32661 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32724_34977 = state_32697__$1;
(statearr_32724_34977[(2)] = inst_32661);

(statearr_32724_34977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (21))){
var inst_32688 = (state_32697[(2)]);
var state_32697__$1 = (function (){var statearr_32729 = state_32697;
(statearr_32729[(9)] = inst_32688);

return statearr_32729;
})();
var statearr_32730_34978 = state_32697__$1;
(statearr_32730_34978[(2)] = null);

(statearr_32730_34978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (13))){
var inst_32631 = (state_32697[(10)]);
var inst_32634 = cljs.core.chunked_seq_QMARK_(inst_32631);
var state_32697__$1 = state_32697;
if(inst_32634){
var statearr_32738_34979 = state_32697__$1;
(statearr_32738_34979[(1)] = (16));

} else {
var statearr_32739_34980 = state_32697__$1;
(statearr_32739_34980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (22))){
var inst_32675 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
if(cljs.core.truth_(inst_32675)){
var statearr_32746_34981 = state_32697__$1;
(statearr_32746_34981[(1)] = (23));

} else {
var statearr_32748_34982 = state_32697__$1;
(statearr_32748_34982[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (6))){
var inst_32671 = (state_32697[(11)]);
var inst_32669 = (state_32697[(7)]);
var inst_32583 = (state_32697[(8)]);
var inst_32669__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32583) : topic_fn.call(null,inst_32583));
var inst_32670 = cljs.core.deref(mults);
var inst_32671__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32670,inst_32669__$1);
var state_32697__$1 = (function (){var statearr_32750 = state_32697;
(statearr_32750[(11)] = inst_32671__$1);

(statearr_32750[(7)] = inst_32669__$1);

return statearr_32750;
})();
if(cljs.core.truth_(inst_32671__$1)){
var statearr_32751_34983 = state_32697__$1;
(statearr_32751_34983[(1)] = (19));

} else {
var statearr_32752_34984 = state_32697__$1;
(statearr_32752_34984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (25))){
var inst_32685 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32754_34985 = state_32697__$1;
(statearr_32754_34985[(2)] = inst_32685);

(statearr_32754_34985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (17))){
var inst_32631 = (state_32697[(10)]);
var inst_32646 = cljs.core.first(inst_32631);
var inst_32650 = cljs.core.async.muxch_STAR_(inst_32646);
var inst_32651 = cljs.core.async.close_BANG_(inst_32650);
var inst_32654 = cljs.core.next(inst_32631);
var inst_32596 = inst_32654;
var inst_32597 = null;
var inst_32598 = (0);
var inst_32599 = (0);
var state_32697__$1 = (function (){var statearr_32777 = state_32697;
(statearr_32777[(12)] = inst_32597);

(statearr_32777[(13)] = inst_32598);

(statearr_32777[(14)] = inst_32599);

(statearr_32777[(15)] = inst_32596);

(statearr_32777[(16)] = inst_32651);

return statearr_32777;
})();
var statearr_32778_34986 = state_32697__$1;
(statearr_32778_34986[(2)] = null);

(statearr_32778_34986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (3))){
var inst_32693 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32697__$1,inst_32693);
} else {
if((state_val_32699 === (12))){
var inst_32664 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32785_34989 = state_32697__$1;
(statearr_32785_34989[(2)] = inst_32664);

(statearr_32785_34989[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (2))){
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32697__$1,(4),ch);
} else {
if((state_val_32699 === (23))){
var state_32697__$1 = state_32697;
var statearr_32786_34990 = state_32697__$1;
(statearr_32786_34990[(2)] = null);

(statearr_32786_34990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (19))){
var inst_32671 = (state_32697[(11)]);
var inst_32583 = (state_32697[(8)]);
var inst_32673 = cljs.core.async.muxch_STAR_(inst_32671);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32697__$1,(22),inst_32673,inst_32583);
} else {
if((state_val_32699 === (11))){
var inst_32631 = (state_32697[(10)]);
var inst_32596 = (state_32697[(15)]);
var inst_32631__$1 = cljs.core.seq(inst_32596);
var state_32697__$1 = (function (){var statearr_32802 = state_32697;
(statearr_32802[(10)] = inst_32631__$1);

return statearr_32802;
})();
if(inst_32631__$1){
var statearr_32806_34997 = state_32697__$1;
(statearr_32806_34997[(1)] = (13));

} else {
var statearr_32807_34998 = state_32697__$1;
(statearr_32807_34998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (9))){
var inst_32667 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32808_34999 = state_32697__$1;
(statearr_32808_34999[(2)] = inst_32667);

(statearr_32808_34999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (5))){
var inst_32593 = cljs.core.deref(mults);
var inst_32594 = cljs.core.vals(inst_32593);
var inst_32595 = cljs.core.seq(inst_32594);
var inst_32596 = inst_32595;
var inst_32597 = null;
var inst_32598 = (0);
var inst_32599 = (0);
var state_32697__$1 = (function (){var statearr_32820 = state_32697;
(statearr_32820[(12)] = inst_32597);

(statearr_32820[(13)] = inst_32598);

(statearr_32820[(14)] = inst_32599);

(statearr_32820[(15)] = inst_32596);

return statearr_32820;
})();
var statearr_32824_35000 = state_32697__$1;
(statearr_32824_35000[(2)] = null);

(statearr_32824_35000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (14))){
var state_32697__$1 = state_32697;
var statearr_32829_35001 = state_32697__$1;
(statearr_32829_35001[(2)] = null);

(statearr_32829_35001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (16))){
var inst_32631 = (state_32697[(10)]);
var inst_32636 = cljs.core.chunk_first(inst_32631);
var inst_32637 = cljs.core.chunk_rest(inst_32631);
var inst_32639 = cljs.core.count(inst_32636);
var inst_32596 = inst_32637;
var inst_32597 = inst_32636;
var inst_32598 = inst_32639;
var inst_32599 = (0);
var state_32697__$1 = (function (){var statearr_32832 = state_32697;
(statearr_32832[(12)] = inst_32597);

(statearr_32832[(13)] = inst_32598);

(statearr_32832[(14)] = inst_32599);

(statearr_32832[(15)] = inst_32596);

return statearr_32832;
})();
var statearr_32833_35002 = state_32697__$1;
(statearr_32833_35002[(2)] = null);

(statearr_32833_35002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (10))){
var inst_32597 = (state_32697[(12)]);
var inst_32598 = (state_32697[(13)]);
var inst_32599 = (state_32697[(14)]);
var inst_32596 = (state_32697[(15)]);
var inst_32605 = cljs.core._nth(inst_32597,inst_32599);
var inst_32606 = cljs.core.async.muxch_STAR_(inst_32605);
var inst_32607 = cljs.core.async.close_BANG_(inst_32606);
var inst_32608 = (inst_32599 + (1));
var tmp32826 = inst_32597;
var tmp32827 = inst_32598;
var tmp32828 = inst_32596;
var inst_32596__$1 = tmp32828;
var inst_32597__$1 = tmp32826;
var inst_32598__$1 = tmp32827;
var inst_32599__$1 = inst_32608;
var state_32697__$1 = (function (){var statearr_32842 = state_32697;
(statearr_32842[(12)] = inst_32597__$1);

(statearr_32842[(13)] = inst_32598__$1);

(statearr_32842[(14)] = inst_32599__$1);

(statearr_32842[(15)] = inst_32596__$1);

(statearr_32842[(17)] = inst_32607);

return statearr_32842;
})();
var statearr_32843_35003 = state_32697__$1;
(statearr_32843_35003[(2)] = null);

(statearr_32843_35003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (18))){
var inst_32657 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32844_35004 = state_32697__$1;
(statearr_32844_35004[(2)] = inst_32657);

(statearr_32844_35004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32699 === (8))){
var inst_32598 = (state_32697[(13)]);
var inst_32599 = (state_32697[(14)]);
var inst_32602 = (inst_32599 < inst_32598);
var inst_32603 = inst_32602;
var state_32697__$1 = state_32697;
if(cljs.core.truth_(inst_32603)){
var statearr_32848_35005 = state_32697__$1;
(statearr_32848_35005[(1)] = (10));

} else {
var statearr_32849_35006 = state_32697__$1;
(statearr_32849_35006[(1)] = (11));

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
var cljs$core$async$state_machine__29613__auto__ = null;
var cljs$core$async$state_machine__29613__auto____0 = (function (){
var statearr_32852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32852[(0)] = cljs$core$async$state_machine__29613__auto__);

(statearr_32852[(1)] = (1));

return statearr_32852;
});
var cljs$core$async$state_machine__29613__auto____1 = (function (state_32697){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_32697);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e32853){var ex__29616__auto__ = e32853;
var statearr_32854_35007 = state_32697;
(statearr_32854_35007[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_32697[(4)]))){
var statearr_32856_35008 = state_32697;
(statearr_32856_35008[(1)] = cljs.core.first((state_32697[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35010 = state_32697;
state_32697 = G__35010;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$state_machine__29613__auto__ = function(state_32697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29613__auto____1.call(this,state_32697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29613__auto____0;
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29613__auto____1;
return cljs$core$async$state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_32860 = f__30196__auto__();
(statearr_32860[(6)] = c__30195__auto___34970);

return statearr_32860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
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
var G__32875 = arguments.length;
switch (G__32875) {
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
var G__32912 = arguments.length;
switch (G__32912) {
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
var G__32921 = arguments.length;
switch (G__32921) {
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
var c__30195__auto___35018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_33000){
var state_val_33001 = (state_33000[(1)]);
if((state_val_33001 === (7))){
var state_33000__$1 = state_33000;
var statearr_33003_35019 = state_33000__$1;
(statearr_33003_35019[(2)] = null);

(statearr_33003_35019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (1))){
var state_33000__$1 = state_33000;
var statearr_33005_35020 = state_33000__$1;
(statearr_33005_35020[(2)] = null);

(statearr_33005_35020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (4))){
var inst_32936 = (state_33000[(7)]);
var inst_32937 = (state_33000[(8)]);
var inst_32939 = (inst_32937 < inst_32936);
var state_33000__$1 = state_33000;
if(cljs.core.truth_(inst_32939)){
var statearr_33011_35021 = state_33000__$1;
(statearr_33011_35021[(1)] = (6));

} else {
var statearr_33012_35022 = state_33000__$1;
(statearr_33012_35022[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (15))){
var inst_32985 = (state_33000[(9)]);
var inst_32991 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32985);
var state_33000__$1 = state_33000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33000__$1,(17),out,inst_32991);
} else {
if((state_val_33001 === (13))){
var inst_32985 = (state_33000[(9)]);
var inst_32985__$1 = (state_33000[(2)]);
var inst_32986 = cljs.core.some(cljs.core.nil_QMARK_,inst_32985__$1);
var state_33000__$1 = (function (){var statearr_33016 = state_33000;
(statearr_33016[(9)] = inst_32985__$1);

return statearr_33016;
})();
if(cljs.core.truth_(inst_32986)){
var statearr_33019_35023 = state_33000__$1;
(statearr_33019_35023[(1)] = (14));

} else {
var statearr_33020_35024 = state_33000__$1;
(statearr_33020_35024[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (6))){
var state_33000__$1 = state_33000;
var statearr_33023_35025 = state_33000__$1;
(statearr_33023_35025[(2)] = null);

(statearr_33023_35025[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (17))){
var inst_32993 = (state_33000[(2)]);
var state_33000__$1 = (function (){var statearr_33027 = state_33000;
(statearr_33027[(10)] = inst_32993);

return statearr_33027;
})();
var statearr_33029_35030 = state_33000__$1;
(statearr_33029_35030[(2)] = null);

(statearr_33029_35030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (3))){
var inst_32998 = (state_33000[(2)]);
var state_33000__$1 = state_33000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33000__$1,inst_32998);
} else {
if((state_val_33001 === (12))){
var _ = (function (){var statearr_33033 = state_33000;
(statearr_33033[(4)] = cljs.core.rest((state_33000[(4)])));

return statearr_33033;
})();
var state_33000__$1 = state_33000;
var ex33026 = (state_33000__$1[(2)]);
var statearr_33037_35031 = state_33000__$1;
(statearr_33037_35031[(5)] = ex33026);


if((ex33026 instanceof Object)){
var statearr_33039_35032 = state_33000__$1;
(statearr_33039_35032[(1)] = (11));

(statearr_33039_35032[(5)] = null);

} else {
throw ex33026;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (2))){
var inst_32935 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32936 = cnt;
var inst_32937 = (0);
var state_33000__$1 = (function (){var statearr_33051 = state_33000;
(statearr_33051[(11)] = inst_32935);

(statearr_33051[(7)] = inst_32936);

(statearr_33051[(8)] = inst_32937);

return statearr_33051;
})();
var statearr_33062_35033 = state_33000__$1;
(statearr_33062_35033[(2)] = null);

(statearr_33062_35033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (11))){
var inst_32964 = (state_33000[(2)]);
var inst_32965 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33000__$1 = (function (){var statearr_33065 = state_33000;
(statearr_33065[(12)] = inst_32964);

return statearr_33065;
})();
var statearr_33066_35039 = state_33000__$1;
(statearr_33066_35039[(2)] = inst_32965);

(statearr_33066_35039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (9))){
var inst_32937 = (state_33000[(8)]);
var _ = (function (){var statearr_33068 = state_33000;
(statearr_33068[(4)] = cljs.core.cons((12),(state_33000[(4)])));

return statearr_33068;
})();
var inst_32971 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32937) : chs__$1.call(null,inst_32937));
var inst_32972 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32937) : done.call(null,inst_32937));
var inst_32973 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32971,inst_32972);
var ___$1 = (function (){var statearr_33069 = state_33000;
(statearr_33069[(4)] = cljs.core.rest((state_33000[(4)])));

return statearr_33069;
})();
var state_33000__$1 = state_33000;
var statearr_33072_35041 = state_33000__$1;
(statearr_33072_35041[(2)] = inst_32973);

(statearr_33072_35041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (5))){
var inst_32983 = (state_33000[(2)]);
var state_33000__$1 = (function (){var statearr_33076 = state_33000;
(statearr_33076[(13)] = inst_32983);

return statearr_33076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33000__$1,(13),dchan);
} else {
if((state_val_33001 === (14))){
var inst_32988 = cljs.core.async.close_BANG_(out);
var state_33000__$1 = state_33000;
var statearr_33078_35044 = state_33000__$1;
(statearr_33078_35044[(2)] = inst_32988);

(statearr_33078_35044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (16))){
var inst_32996 = (state_33000[(2)]);
var state_33000__$1 = state_33000;
var statearr_33079_35045 = state_33000__$1;
(statearr_33079_35045[(2)] = inst_32996);

(statearr_33079_35045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (10))){
var inst_32937 = (state_33000[(8)]);
var inst_32976 = (state_33000[(2)]);
var inst_32977 = (inst_32937 + (1));
var inst_32937__$1 = inst_32977;
var state_33000__$1 = (function (){var statearr_33083 = state_33000;
(statearr_33083[(14)] = inst_32976);

(statearr_33083[(8)] = inst_32937__$1);

return statearr_33083;
})();
var statearr_33094_35046 = state_33000__$1;
(statearr_33094_35046[(2)] = null);

(statearr_33094_35046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33001 === (8))){
var inst_32981 = (state_33000[(2)]);
var state_33000__$1 = state_33000;
var statearr_33097_35047 = state_33000__$1;
(statearr_33097_35047[(2)] = inst_32981);

(statearr_33097_35047[(1)] = (5));


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
var cljs$core$async$state_machine__29613__auto__ = null;
var cljs$core$async$state_machine__29613__auto____0 = (function (){
var statearr_33099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33099[(0)] = cljs$core$async$state_machine__29613__auto__);

(statearr_33099[(1)] = (1));

return statearr_33099;
});
var cljs$core$async$state_machine__29613__auto____1 = (function (state_33000){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_33000);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e33102){var ex__29616__auto__ = e33102;
var statearr_33107_35048 = state_33000;
(statearr_33107_35048[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_33000[(4)]))){
var statearr_33109_35049 = state_33000;
(statearr_33109_35049[(1)] = cljs.core.first((state_33000[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35050 = state_33000;
state_33000 = G__35050;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$state_machine__29613__auto__ = function(state_33000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29613__auto____1.call(this,state_33000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29613__auto____0;
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29613__auto____1;
return cljs$core$async$state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_33113 = f__30196__auto__();
(statearr_33113[(6)] = c__30195__auto___35018);

return statearr_33113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
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
var G__33126 = arguments.length;
switch (G__33126) {
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
var c__30195__auto___35052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_33186){
var state_val_33187 = (state_33186[(1)]);
if((state_val_33187 === (7))){
var inst_33140 = (state_33186[(7)]);
var inst_33139 = (state_33186[(8)]);
var inst_33139__$1 = (state_33186[(2)]);
var inst_33140__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33139__$1,(0),null);
var inst_33142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33139__$1,(1),null);
var inst_33144 = (inst_33140__$1 == null);
var state_33186__$1 = (function (){var statearr_33206 = state_33186;
(statearr_33206[(7)] = inst_33140__$1);

(statearr_33206[(8)] = inst_33139__$1);

(statearr_33206[(9)] = inst_33142);

return statearr_33206;
})();
if(cljs.core.truth_(inst_33144)){
var statearr_33211_35053 = state_33186__$1;
(statearr_33211_35053[(1)] = (8));

} else {
var statearr_33212_35054 = state_33186__$1;
(statearr_33212_35054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (1))){
var inst_33127 = cljs.core.vec(chs);
var inst_33128 = inst_33127;
var state_33186__$1 = (function (){var statearr_33213 = state_33186;
(statearr_33213[(10)] = inst_33128);

return statearr_33213;
})();
var statearr_33214_35055 = state_33186__$1;
(statearr_33214_35055[(2)] = null);

(statearr_33214_35055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (4))){
var inst_33128 = (state_33186[(10)]);
var state_33186__$1 = state_33186;
return cljs.core.async.ioc_alts_BANG_(state_33186__$1,(7),inst_33128);
} else {
if((state_val_33187 === (6))){
var inst_33175 = (state_33186[(2)]);
var state_33186__$1 = state_33186;
var statearr_33218_35056 = state_33186__$1;
(statearr_33218_35056[(2)] = inst_33175);

(statearr_33218_35056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (3))){
var inst_33180 = (state_33186[(2)]);
var state_33186__$1 = state_33186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33186__$1,inst_33180);
} else {
if((state_val_33187 === (2))){
var inst_33128 = (state_33186[(10)]);
var inst_33131 = cljs.core.count(inst_33128);
var inst_33132 = (inst_33131 > (0));
var state_33186__$1 = state_33186;
if(cljs.core.truth_(inst_33132)){
var statearr_33221_35057 = state_33186__$1;
(statearr_33221_35057[(1)] = (4));

} else {
var statearr_33222_35058 = state_33186__$1;
(statearr_33222_35058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (11))){
var inst_33128 = (state_33186[(10)]);
var inst_33167 = (state_33186[(2)]);
var tmp33219 = inst_33128;
var inst_33128__$1 = tmp33219;
var state_33186__$1 = (function (){var statearr_33224 = state_33186;
(statearr_33224[(10)] = inst_33128__$1);

(statearr_33224[(11)] = inst_33167);

return statearr_33224;
})();
var statearr_33225_35060 = state_33186__$1;
(statearr_33225_35060[(2)] = null);

(statearr_33225_35060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (9))){
var inst_33140 = (state_33186[(7)]);
var state_33186__$1 = state_33186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33186__$1,(11),out,inst_33140);
} else {
if((state_val_33187 === (5))){
var inst_33173 = cljs.core.async.close_BANG_(out);
var state_33186__$1 = state_33186;
var statearr_33228_35070 = state_33186__$1;
(statearr_33228_35070[(2)] = inst_33173);

(statearr_33228_35070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (10))){
var inst_33170 = (state_33186[(2)]);
var state_33186__$1 = state_33186;
var statearr_33229_35071 = state_33186__$1;
(statearr_33229_35071[(2)] = inst_33170);

(statearr_33229_35071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33187 === (8))){
var inst_33128 = (state_33186[(10)]);
var inst_33140 = (state_33186[(7)]);
var inst_33139 = (state_33186[(8)]);
var inst_33142 = (state_33186[(9)]);
var inst_33156 = (function (){var cs = inst_33128;
var vec__33135 = inst_33139;
var v = inst_33140;
var c = inst_33142;
return (function (p1__33120_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33120_SHARP_);
});
})();
var inst_33157 = cljs.core.filterv(inst_33156,inst_33128);
var inst_33128__$1 = inst_33157;
var state_33186__$1 = (function (){var statearr_33234 = state_33186;
(statearr_33234[(10)] = inst_33128__$1);

return statearr_33234;
})();
var statearr_33239_35077 = state_33186__$1;
(statearr_33239_35077[(2)] = null);

(statearr_33239_35077[(1)] = (2));


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
var cljs$core$async$state_machine__29613__auto__ = null;
var cljs$core$async$state_machine__29613__auto____0 = (function (){
var statearr_33250 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33250[(0)] = cljs$core$async$state_machine__29613__auto__);

(statearr_33250[(1)] = (1));

return statearr_33250;
});
var cljs$core$async$state_machine__29613__auto____1 = (function (state_33186){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_33186);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e33252){var ex__29616__auto__ = e33252;
var statearr_33258_35083 = state_33186;
(statearr_33258_35083[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_33186[(4)]))){
var statearr_33266_35084 = state_33186;
(statearr_33266_35084[(1)] = cljs.core.first((state_33186[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35085 = state_33186;
state_33186 = G__35085;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$state_machine__29613__auto__ = function(state_33186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29613__auto____1.call(this,state_33186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29613__auto____0;
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29613__auto____1;
return cljs$core$async$state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_33275 = f__30196__auto__();
(statearr_33275[(6)] = c__30195__auto___35052);

return statearr_33275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
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
var G__33283 = arguments.length;
switch (G__33283) {
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
var c__30195__auto___35093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_33319){
var state_val_33321 = (state_33319[(1)]);
if((state_val_33321 === (7))){
var inst_33300 = (state_33319[(7)]);
var inst_33300__$1 = (state_33319[(2)]);
var inst_33301 = (inst_33300__$1 == null);
var inst_33302 = cljs.core.not(inst_33301);
var state_33319__$1 = (function (){var statearr_33326 = state_33319;
(statearr_33326[(7)] = inst_33300__$1);

return statearr_33326;
})();
if(inst_33302){
var statearr_33327_35094 = state_33319__$1;
(statearr_33327_35094[(1)] = (8));

} else {
var statearr_33328_35095 = state_33319__$1;
(statearr_33328_35095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (1))){
var inst_33293 = (0);
var state_33319__$1 = (function (){var statearr_33329 = state_33319;
(statearr_33329[(8)] = inst_33293);

return statearr_33329;
})();
var statearr_33330_35097 = state_33319__$1;
(statearr_33330_35097[(2)] = null);

(statearr_33330_35097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (4))){
var state_33319__$1 = state_33319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33319__$1,(7),ch);
} else {
if((state_val_33321 === (6))){
var inst_33313 = (state_33319[(2)]);
var state_33319__$1 = state_33319;
var statearr_33338_35098 = state_33319__$1;
(statearr_33338_35098[(2)] = inst_33313);

(statearr_33338_35098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (3))){
var inst_33315 = (state_33319[(2)]);
var inst_33316 = cljs.core.async.close_BANG_(out);
var state_33319__$1 = (function (){var statearr_33342 = state_33319;
(statearr_33342[(9)] = inst_33315);

return statearr_33342;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33319__$1,inst_33316);
} else {
if((state_val_33321 === (2))){
var inst_33293 = (state_33319[(8)]);
var inst_33296 = (inst_33293 < n);
var state_33319__$1 = state_33319;
if(cljs.core.truth_(inst_33296)){
var statearr_33346_35100 = state_33319__$1;
(statearr_33346_35100[(1)] = (4));

} else {
var statearr_33347_35101 = state_33319__$1;
(statearr_33347_35101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (11))){
var inst_33293 = (state_33319[(8)]);
var inst_33305 = (state_33319[(2)]);
var inst_33306 = (inst_33293 + (1));
var inst_33293__$1 = inst_33306;
var state_33319__$1 = (function (){var statearr_33348 = state_33319;
(statearr_33348[(10)] = inst_33305);

(statearr_33348[(8)] = inst_33293__$1);

return statearr_33348;
})();
var statearr_33349_35102 = state_33319__$1;
(statearr_33349_35102[(2)] = null);

(statearr_33349_35102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (9))){
var state_33319__$1 = state_33319;
var statearr_33353_35103 = state_33319__$1;
(statearr_33353_35103[(2)] = null);

(statearr_33353_35103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (5))){
var state_33319__$1 = state_33319;
var statearr_33354_35105 = state_33319__$1;
(statearr_33354_35105[(2)] = null);

(statearr_33354_35105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (10))){
var inst_33310 = (state_33319[(2)]);
var state_33319__$1 = state_33319;
var statearr_33355_35106 = state_33319__$1;
(statearr_33355_35106[(2)] = inst_33310);

(statearr_33355_35106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33321 === (8))){
var inst_33300 = (state_33319[(7)]);
var state_33319__$1 = state_33319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33319__$1,(11),out,inst_33300);
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
var cljs$core$async$state_machine__29613__auto__ = null;
var cljs$core$async$state_machine__29613__auto____0 = (function (){
var statearr_33356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33356[(0)] = cljs$core$async$state_machine__29613__auto__);

(statearr_33356[(1)] = (1));

return statearr_33356;
});
var cljs$core$async$state_machine__29613__auto____1 = (function (state_33319){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_33319);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e33357){var ex__29616__auto__ = e33357;
var statearr_33358_35112 = state_33319;
(statearr_33358_35112[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_33319[(4)]))){
var statearr_33359_35114 = state_33319;
(statearr_33359_35114[(1)] = cljs.core.first((state_33319[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35119 = state_33319;
state_33319 = G__35119;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$state_machine__29613__auto__ = function(state_33319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29613__auto____1.call(this,state_33319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29613__auto____0;
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29613__auto____1;
return cljs$core$async$state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_33367 = f__30196__auto__();
(statearr_33367[(6)] = c__30195__auto___35093);

return statearr_33367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33369 = (function (f,ch,meta33370){
this.f = f;
this.ch = ch;
this.meta33370 = meta33370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33371,meta33370__$1){
var self__ = this;
var _33371__$1 = this;
return (new cljs.core.async.t_cljs$core$async33369(self__.f,self__.ch,meta33370__$1));
}));

(cljs.core.async.t_cljs$core$async33369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33371){
var self__ = this;
var _33371__$1 = this;
return self__.meta33370;
}));

(cljs.core.async.t_cljs$core$async33369.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33369.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33369.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33369.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33369.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33379 = (function (f,ch,meta33370,_,fn1,meta33380){
this.f = f;
this.ch = ch;
this.meta33370 = meta33370;
this._ = _;
this.fn1 = fn1;
this.meta33380 = meta33380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33381,meta33380__$1){
var self__ = this;
var _33381__$1 = this;
return (new cljs.core.async.t_cljs$core$async33379(self__.f,self__.ch,self__.meta33370,self__._,self__.fn1,meta33380__$1));
}));

(cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33381){
var self__ = this;
var _33381__$1 = this;
return self__.meta33380;
}));

(cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33368_SHARP_){
var G__33401 = (((p1__33368_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33368_SHARP_) : self__.f.call(null,p1__33368_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33401) : f1.call(null,G__33401));
});
}));

(cljs.core.async.t_cljs$core$async33379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33370","meta33370",-467621220,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33369","cljs.core.async/t_cljs$core$async33369",-968893866,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33380","meta33380",1673800428,null)], null);
}));

(cljs.core.async.t_cljs$core$async33379.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33379");

(cljs.core.async.t_cljs$core$async33379.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33379");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33379.
 */
cljs.core.async.__GT_t_cljs$core$async33379 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33379(f__$1,ch__$1,meta33370__$1,___$2,fn1__$1,meta33380){
return (new cljs.core.async.t_cljs$core$async33379(f__$1,ch__$1,meta33370__$1,___$2,fn1__$1,meta33380));
});

}

return (new cljs.core.async.t_cljs$core$async33379(self__.f,self__.ch,self__.meta33370,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33417 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33417) : self__.f.call(null,G__33417));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33369.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33369.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33370","meta33370",-467621220,null)], null);
}));

(cljs.core.async.t_cljs$core$async33369.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33369");

(cljs.core.async.t_cljs$core$async33369.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33369");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33369.
 */
cljs.core.async.__GT_t_cljs$core$async33369 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33369(f__$1,ch__$1,meta33370){
return (new cljs.core.async.t_cljs$core$async33369(f__$1,ch__$1,meta33370));
});

}

return (new cljs.core.async.t_cljs$core$async33369(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33433 = (function (f,ch,meta33434){
this.f = f;
this.ch = ch;
this.meta33434 = meta33434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33435,meta33434__$1){
var self__ = this;
var _33435__$1 = this;
return (new cljs.core.async.t_cljs$core$async33433(self__.f,self__.ch,meta33434__$1));
}));

(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33435){
var self__ = this;
var _33435__$1 = this;
return self__.meta33434;
}));

(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33433.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33434","meta33434",27103748,null)], null);
}));

(cljs.core.async.t_cljs$core$async33433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33433");

(cljs.core.async.t_cljs$core$async33433.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33433.
 */
cljs.core.async.__GT_t_cljs$core$async33433 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33433(f__$1,ch__$1,meta33434){
return (new cljs.core.async.t_cljs$core$async33433(f__$1,ch__$1,meta33434));
});

}

return (new cljs.core.async.t_cljs$core$async33433(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33449 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33449 = (function (p,ch,meta33450){
this.p = p;
this.ch = ch;
this.meta33450 = meta33450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33451,meta33450__$1){
var self__ = this;
var _33451__$1 = this;
return (new cljs.core.async.t_cljs$core$async33449(self__.p,self__.ch,meta33450__$1));
}));

(cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33451){
var self__ = this;
var _33451__$1 = this;
return self__.meta33450;
}));

(cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33450","meta33450",-1723182053,null)], null);
}));

(cljs.core.async.t_cljs$core$async33449.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33449");

(cljs.core.async.t_cljs$core$async33449.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33449");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33449.
 */
cljs.core.async.__GT_t_cljs$core$async33449 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33449(p__$1,ch__$1,meta33450){
return (new cljs.core.async.t_cljs$core$async33449(p__$1,ch__$1,meta33450));
});

}

return (new cljs.core.async.t_cljs$core$async33449(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33464 = arguments.length;
switch (G__33464) {
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
var c__30195__auto___35167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_33488){
var state_val_33489 = (state_33488[(1)]);
if((state_val_33489 === (7))){
var inst_33484 = (state_33488[(2)]);
var state_33488__$1 = state_33488;
var statearr_33493_35168 = state_33488__$1;
(statearr_33493_35168[(2)] = inst_33484);

(statearr_33493_35168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33489 === (1))){
var state_33488__$1 = state_33488;
var statearr_33494_35169 = state_33488__$1;
(statearr_33494_35169[(2)] = null);

(statearr_33494_35169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33489 === (4))){
var inst_33470 = (state_33488[(7)]);
var inst_33470__$1 = (state_33488[(2)]);
var inst_33471 = (inst_33470__$1 == null);
var state_33488__$1 = (function (){var statearr_33497 = state_33488;
(statearr_33497[(7)] = inst_33470__$1);

return statearr_33497;
})();
if(cljs.core.truth_(inst_33471)){
var statearr_33498_35170 = state_33488__$1;
(statearr_33498_35170[(1)] = (5));

} else {
var statearr_33499_35171 = state_33488__$1;
(statearr_33499_35171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33489 === (6))){
var inst_33470 = (state_33488[(7)]);
var inst_33475 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33470) : p.call(null,inst_33470));
var state_33488__$1 = state_33488;
if(cljs.core.truth_(inst_33475)){
var statearr_33506_35172 = state_33488__$1;
(statearr_33506_35172[(1)] = (8));

} else {
var statearr_33507_35173 = state_33488__$1;
(statearr_33507_35173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33489 === (3))){
var inst_33486 = (state_33488[(2)]);
var state_33488__$1 = state_33488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33488__$1,inst_33486);
} else {
if((state_val_33489 === (2))){
var state_33488__$1 = state_33488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33488__$1,(4),ch);
} else {
if((state_val_33489 === (11))){
var inst_33478 = (state_33488[(2)]);
var state_33488__$1 = state_33488;
var statearr_33520_35178 = state_33488__$1;
(statearr_33520_35178[(2)] = inst_33478);

(statearr_33520_35178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33489 === (9))){
var state_33488__$1 = state_33488;
var statearr_33523_35183 = state_33488__$1;
(statearr_33523_35183[(2)] = null);

(statearr_33523_35183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33489 === (5))){
var inst_33473 = cljs.core.async.close_BANG_(out);
var state_33488__$1 = state_33488;
var statearr_33528_35193 = state_33488__$1;
(statearr_33528_35193[(2)] = inst_33473);

(statearr_33528_35193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33489 === (10))){
var inst_33481 = (state_33488[(2)]);
var state_33488__$1 = (function (){var statearr_33531 = state_33488;
(statearr_33531[(8)] = inst_33481);

return statearr_33531;
})();
var statearr_33532_35194 = state_33488__$1;
(statearr_33532_35194[(2)] = null);

(statearr_33532_35194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33489 === (8))){
var inst_33470 = (state_33488[(7)]);
var state_33488__$1 = state_33488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33488__$1,(11),out,inst_33470);
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
var cljs$core$async$state_machine__29613__auto__ = null;
var cljs$core$async$state_machine__29613__auto____0 = (function (){
var statearr_33534 = [null,null,null,null,null,null,null,null,null];
(statearr_33534[(0)] = cljs$core$async$state_machine__29613__auto__);

(statearr_33534[(1)] = (1));

return statearr_33534;
});
var cljs$core$async$state_machine__29613__auto____1 = (function (state_33488){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_33488);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e33540){var ex__29616__auto__ = e33540;
var statearr_33541_35200 = state_33488;
(statearr_33541_35200[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_33488[(4)]))){
var statearr_33542_35203 = state_33488;
(statearr_33542_35203[(1)] = cljs.core.first((state_33488[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35206 = state_33488;
state_33488 = G__35206;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$state_machine__29613__auto__ = function(state_33488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29613__auto____1.call(this,state_33488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29613__auto____0;
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29613__auto____1;
return cljs$core$async$state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_33550 = f__30196__auto__();
(statearr_33550[(6)] = c__30195__auto___35167);

return statearr_33550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33558 = arguments.length;
switch (G__33558) {
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
var c__30195__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_33686){
var state_val_33688 = (state_33686[(1)]);
if((state_val_33688 === (7))){
var inst_33681 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
var statearr_33699_35226 = state_33686__$1;
(statearr_33699_35226[(2)] = inst_33681);

(statearr_33699_35226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (20))){
var inst_33649 = (state_33686[(7)]);
var inst_33662 = (state_33686[(2)]);
var inst_33663 = cljs.core.next(inst_33649);
var inst_33629 = inst_33663;
var inst_33630 = null;
var inst_33631 = (0);
var inst_33632 = (0);
var state_33686__$1 = (function (){var statearr_33701 = state_33686;
(statearr_33701[(8)] = inst_33662);

(statearr_33701[(9)] = inst_33632);

(statearr_33701[(10)] = inst_33629);

(statearr_33701[(11)] = inst_33630);

(statearr_33701[(12)] = inst_33631);

return statearr_33701;
})();
var statearr_33703_35251 = state_33686__$1;
(statearr_33703_35251[(2)] = null);

(statearr_33703_35251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (1))){
var state_33686__$1 = state_33686;
var statearr_33707_35256 = state_33686__$1;
(statearr_33707_35256[(2)] = null);

(statearr_33707_35256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (4))){
var inst_33618 = (state_33686[(13)]);
var inst_33618__$1 = (state_33686[(2)]);
var inst_33619 = (inst_33618__$1 == null);
var state_33686__$1 = (function (){var statearr_33709 = state_33686;
(statearr_33709[(13)] = inst_33618__$1);

return statearr_33709;
})();
if(cljs.core.truth_(inst_33619)){
var statearr_33711_35257 = state_33686__$1;
(statearr_33711_35257[(1)] = (5));

} else {
var statearr_33712_35258 = state_33686__$1;
(statearr_33712_35258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (15))){
var state_33686__$1 = state_33686;
var statearr_33721_35259 = state_33686__$1;
(statearr_33721_35259[(2)] = null);

(statearr_33721_35259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (21))){
var state_33686__$1 = state_33686;
var statearr_33722_35260 = state_33686__$1;
(statearr_33722_35260[(2)] = null);

(statearr_33722_35260[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (13))){
var inst_33632 = (state_33686[(9)]);
var inst_33629 = (state_33686[(10)]);
var inst_33630 = (state_33686[(11)]);
var inst_33631 = (state_33686[(12)]);
var inst_33644 = (state_33686[(2)]);
var inst_33646 = (inst_33632 + (1));
var tmp33713 = inst_33629;
var tmp33714 = inst_33630;
var tmp33715 = inst_33631;
var inst_33629__$1 = tmp33713;
var inst_33630__$1 = tmp33714;
var inst_33631__$1 = tmp33715;
var inst_33632__$1 = inst_33646;
var state_33686__$1 = (function (){var statearr_33733 = state_33686;
(statearr_33733[(9)] = inst_33632__$1);

(statearr_33733[(10)] = inst_33629__$1);

(statearr_33733[(14)] = inst_33644);

(statearr_33733[(11)] = inst_33630__$1);

(statearr_33733[(12)] = inst_33631__$1);

return statearr_33733;
})();
var statearr_33737_35270 = state_33686__$1;
(statearr_33737_35270[(2)] = null);

(statearr_33737_35270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (22))){
var state_33686__$1 = state_33686;
var statearr_33744_35271 = state_33686__$1;
(statearr_33744_35271[(2)] = null);

(statearr_33744_35271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (6))){
var inst_33618 = (state_33686[(13)]);
var inst_33627 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33618) : f.call(null,inst_33618));
var inst_33628 = cljs.core.seq(inst_33627);
var inst_33629 = inst_33628;
var inst_33630 = null;
var inst_33631 = (0);
var inst_33632 = (0);
var state_33686__$1 = (function (){var statearr_33774 = state_33686;
(statearr_33774[(9)] = inst_33632);

(statearr_33774[(10)] = inst_33629);

(statearr_33774[(11)] = inst_33630);

(statearr_33774[(12)] = inst_33631);

return statearr_33774;
})();
var statearr_33778_35287 = state_33686__$1;
(statearr_33778_35287[(2)] = null);

(statearr_33778_35287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (17))){
var inst_33649 = (state_33686[(7)]);
var inst_33654 = cljs.core.chunk_first(inst_33649);
var inst_33655 = cljs.core.chunk_rest(inst_33649);
var inst_33656 = cljs.core.count(inst_33654);
var inst_33629 = inst_33655;
var inst_33630 = inst_33654;
var inst_33631 = inst_33656;
var inst_33632 = (0);
var state_33686__$1 = (function (){var statearr_33782 = state_33686;
(statearr_33782[(9)] = inst_33632);

(statearr_33782[(10)] = inst_33629);

(statearr_33782[(11)] = inst_33630);

(statearr_33782[(12)] = inst_33631);

return statearr_33782;
})();
var statearr_33783_35291 = state_33686__$1;
(statearr_33783_35291[(2)] = null);

(statearr_33783_35291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (3))){
var inst_33683 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33686__$1,inst_33683);
} else {
if((state_val_33688 === (12))){
var inst_33671 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
var statearr_33795_35300 = state_33686__$1;
(statearr_33795_35300[(2)] = inst_33671);

(statearr_33795_35300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (2))){
var state_33686__$1 = state_33686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33686__$1,(4),in$);
} else {
if((state_val_33688 === (23))){
var inst_33679 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
var statearr_33797_35306 = state_33686__$1;
(statearr_33797_35306[(2)] = inst_33679);

(statearr_33797_35306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (19))){
var inst_33666 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
var statearr_33798_35311 = state_33686__$1;
(statearr_33798_35311[(2)] = inst_33666);

(statearr_33798_35311[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (11))){
var inst_33649 = (state_33686[(7)]);
var inst_33629 = (state_33686[(10)]);
var inst_33649__$1 = cljs.core.seq(inst_33629);
var state_33686__$1 = (function (){var statearr_33799 = state_33686;
(statearr_33799[(7)] = inst_33649__$1);

return statearr_33799;
})();
if(inst_33649__$1){
var statearr_33801_35315 = state_33686__$1;
(statearr_33801_35315[(1)] = (14));

} else {
var statearr_33802_35317 = state_33686__$1;
(statearr_33802_35317[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (9))){
var inst_33673 = (state_33686[(2)]);
var inst_33674 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33686__$1 = (function (){var statearr_33803 = state_33686;
(statearr_33803[(15)] = inst_33673);

return statearr_33803;
})();
if(cljs.core.truth_(inst_33674)){
var statearr_33804_35318 = state_33686__$1;
(statearr_33804_35318[(1)] = (21));

} else {
var statearr_33808_35320 = state_33686__$1;
(statearr_33808_35320[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (5))){
var inst_33621 = cljs.core.async.close_BANG_(out);
var state_33686__$1 = state_33686;
var statearr_33813_35321 = state_33686__$1;
(statearr_33813_35321[(2)] = inst_33621);

(statearr_33813_35321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (14))){
var inst_33649 = (state_33686[(7)]);
var inst_33652 = cljs.core.chunked_seq_QMARK_(inst_33649);
var state_33686__$1 = state_33686;
if(inst_33652){
var statearr_33817_35322 = state_33686__$1;
(statearr_33817_35322[(1)] = (17));

} else {
var statearr_33818_35324 = state_33686__$1;
(statearr_33818_35324[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (16))){
var inst_33669 = (state_33686[(2)]);
var state_33686__$1 = state_33686;
var statearr_33822_35326 = state_33686__$1;
(statearr_33822_35326[(2)] = inst_33669);

(statearr_33822_35326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33688 === (10))){
var inst_33632 = (state_33686[(9)]);
var inst_33630 = (state_33686[(11)]);
var inst_33641 = cljs.core._nth(inst_33630,inst_33632);
var state_33686__$1 = state_33686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33686__$1,(13),out,inst_33641);
} else {
if((state_val_33688 === (18))){
var inst_33649 = (state_33686[(7)]);
var inst_33659 = cljs.core.first(inst_33649);
var state_33686__$1 = state_33686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33686__$1,(20),out,inst_33659);
} else {
if((state_val_33688 === (8))){
var inst_33632 = (state_33686[(9)]);
var inst_33631 = (state_33686[(12)]);
var inst_33636 = (inst_33632 < inst_33631);
var inst_33637 = inst_33636;
var state_33686__$1 = state_33686;
if(cljs.core.truth_(inst_33637)){
var statearr_33825_35332 = state_33686__$1;
(statearr_33825_35332[(1)] = (10));

} else {
var statearr_33826_35334 = state_33686__$1;
(statearr_33826_35334[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29613__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29613__auto____0 = (function (){
var statearr_33827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33827[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29613__auto__);

(statearr_33827[(1)] = (1));

return statearr_33827;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29613__auto____1 = (function (state_33686){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_33686);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e33832){var ex__29616__auto__ = e33832;
var statearr_33836_35340 = state_33686;
(statearr_33836_35340[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_33686[(4)]))){
var statearr_33837_35341 = state_33686;
(statearr_33837_35341[(1)] = cljs.core.first((state_33686[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35342 = state_33686;
state_33686 = G__35342;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29613__auto__ = function(state_33686){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29613__auto____1.call(this,state_33686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29613__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29613__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_33842 = f__30196__auto__();
(statearr_33842[(6)] = c__30195__auto__);

return statearr_33842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));

return c__30195__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33851 = arguments.length;
switch (G__33851) {
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
var G__33876 = arguments.length;
switch (G__33876) {
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
var G__33887 = arguments.length;
switch (G__33887) {
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
var c__30195__auto___35356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_33921){
var state_val_33922 = (state_33921[(1)]);
if((state_val_33922 === (7))){
var inst_33916 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33923_35358 = state_33921__$1;
(statearr_33923_35358[(2)] = inst_33916);

(statearr_33923_35358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (1))){
var inst_33890 = null;
var state_33921__$1 = (function (){var statearr_33924 = state_33921;
(statearr_33924[(7)] = inst_33890);

return statearr_33924;
})();
var statearr_33925_35359 = state_33921__$1;
(statearr_33925_35359[(2)] = null);

(statearr_33925_35359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (4))){
var inst_33897 = (state_33921[(8)]);
var inst_33897__$1 = (state_33921[(2)]);
var inst_33898 = (inst_33897__$1 == null);
var inst_33899 = cljs.core.not(inst_33898);
var state_33921__$1 = (function (){var statearr_33926 = state_33921;
(statearr_33926[(8)] = inst_33897__$1);

return statearr_33926;
})();
if(inst_33899){
var statearr_33927_35361 = state_33921__$1;
(statearr_33927_35361[(1)] = (5));

} else {
var statearr_33928_35362 = state_33921__$1;
(statearr_33928_35362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (6))){
var state_33921__$1 = state_33921;
var statearr_33929_35363 = state_33921__$1;
(statearr_33929_35363[(2)] = null);

(statearr_33929_35363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (3))){
var inst_33918 = (state_33921[(2)]);
var inst_33919 = cljs.core.async.close_BANG_(out);
var state_33921__$1 = (function (){var statearr_33930 = state_33921;
(statearr_33930[(9)] = inst_33918);

return statearr_33930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33921__$1,inst_33919);
} else {
if((state_val_33922 === (2))){
var state_33921__$1 = state_33921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33921__$1,(4),ch);
} else {
if((state_val_33922 === (11))){
var inst_33897 = (state_33921[(8)]);
var inst_33910 = (state_33921[(2)]);
var inst_33890 = inst_33897;
var state_33921__$1 = (function (){var statearr_33931 = state_33921;
(statearr_33931[(7)] = inst_33890);

(statearr_33931[(10)] = inst_33910);

return statearr_33931;
})();
var statearr_33932_35364 = state_33921__$1;
(statearr_33932_35364[(2)] = null);

(statearr_33932_35364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (9))){
var inst_33897 = (state_33921[(8)]);
var state_33921__$1 = state_33921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33921__$1,(11),out,inst_33897);
} else {
if((state_val_33922 === (5))){
var inst_33890 = (state_33921[(7)]);
var inst_33897 = (state_33921[(8)]);
var inst_33901 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33897,inst_33890);
var state_33921__$1 = state_33921;
if(inst_33901){
var statearr_33934_35366 = state_33921__$1;
(statearr_33934_35366[(1)] = (8));

} else {
var statearr_33936_35368 = state_33921__$1;
(statearr_33936_35368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (10))){
var inst_33913 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33938_35370 = state_33921__$1;
(statearr_33938_35370[(2)] = inst_33913);

(statearr_33938_35370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (8))){
var inst_33890 = (state_33921[(7)]);
var tmp33933 = inst_33890;
var inst_33890__$1 = tmp33933;
var state_33921__$1 = (function (){var statearr_33939 = state_33921;
(statearr_33939[(7)] = inst_33890__$1);

return statearr_33939;
})();
var statearr_33940_35371 = state_33921__$1;
(statearr_33940_35371[(2)] = null);

(statearr_33940_35371[(1)] = (2));


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
var cljs$core$async$state_machine__29613__auto__ = null;
var cljs$core$async$state_machine__29613__auto____0 = (function (){
var statearr_33941 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33941[(0)] = cljs$core$async$state_machine__29613__auto__);

(statearr_33941[(1)] = (1));

return statearr_33941;
});
var cljs$core$async$state_machine__29613__auto____1 = (function (state_33921){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_33921);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e33942){var ex__29616__auto__ = e33942;
var statearr_33943_35374 = state_33921;
(statearr_33943_35374[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_33921[(4)]))){
var statearr_33944_35375 = state_33921;
(statearr_33944_35375[(1)] = cljs.core.first((state_33921[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35376 = state_33921;
state_33921 = G__35376;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$state_machine__29613__auto__ = function(state_33921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29613__auto____1.call(this,state_33921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29613__auto____0;
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29613__auto____1;
return cljs$core$async$state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_33956 = f__30196__auto__();
(statearr_33956[(6)] = c__30195__auto___35356);

return statearr_33956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33959 = arguments.length;
switch (G__33959) {
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
var c__30195__auto___35380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_34011){
var state_val_34012 = (state_34011[(1)]);
if((state_val_34012 === (7))){
var inst_34003 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
var statearr_34013_35385 = state_34011__$1;
(statearr_34013_35385[(2)] = inst_34003);

(statearr_34013_35385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (1))){
var inst_33970 = (new Array(n));
var inst_33971 = inst_33970;
var inst_33972 = (0);
var state_34011__$1 = (function (){var statearr_34014 = state_34011;
(statearr_34014[(7)] = inst_33971);

(statearr_34014[(8)] = inst_33972);

return statearr_34014;
})();
var statearr_34015_35393 = state_34011__$1;
(statearr_34015_35393[(2)] = null);

(statearr_34015_35393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (4))){
var inst_33975 = (state_34011[(9)]);
var inst_33975__$1 = (state_34011[(2)]);
var inst_33976 = (inst_33975__$1 == null);
var inst_33977 = cljs.core.not(inst_33976);
var state_34011__$1 = (function (){var statearr_34016 = state_34011;
(statearr_34016[(9)] = inst_33975__$1);

return statearr_34016;
})();
if(inst_33977){
var statearr_34017_35394 = state_34011__$1;
(statearr_34017_35394[(1)] = (5));

} else {
var statearr_34018_35395 = state_34011__$1;
(statearr_34018_35395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (15))){
var inst_33997 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
var statearr_34019_35398 = state_34011__$1;
(statearr_34019_35398[(2)] = inst_33997);

(statearr_34019_35398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (13))){
var state_34011__$1 = state_34011;
var statearr_34020_35401 = state_34011__$1;
(statearr_34020_35401[(2)] = null);

(statearr_34020_35401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (6))){
var inst_33972 = (state_34011[(8)]);
var inst_33993 = (inst_33972 > (0));
var state_34011__$1 = state_34011;
if(cljs.core.truth_(inst_33993)){
var statearr_34021_35402 = state_34011__$1;
(statearr_34021_35402[(1)] = (12));

} else {
var statearr_34022_35403 = state_34011__$1;
(statearr_34022_35403[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (3))){
var inst_34005 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34011__$1,inst_34005);
} else {
if((state_val_34012 === (12))){
var inst_33971 = (state_34011[(7)]);
var inst_33995 = cljs.core.vec(inst_33971);
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34011__$1,(15),out,inst_33995);
} else {
if((state_val_34012 === (2))){
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34011__$1,(4),ch);
} else {
if((state_val_34012 === (11))){
var inst_33987 = (state_34011[(2)]);
var inst_33988 = (new Array(n));
var inst_33971 = inst_33988;
var inst_33972 = (0);
var state_34011__$1 = (function (){var statearr_34026 = state_34011;
(statearr_34026[(7)] = inst_33971);

(statearr_34026[(10)] = inst_33987);

(statearr_34026[(8)] = inst_33972);

return statearr_34026;
})();
var statearr_34027_35414 = state_34011__$1;
(statearr_34027_35414[(2)] = null);

(statearr_34027_35414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (9))){
var inst_33971 = (state_34011[(7)]);
var inst_33985 = cljs.core.vec(inst_33971);
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34011__$1,(11),out,inst_33985);
} else {
if((state_val_34012 === (5))){
var inst_33971 = (state_34011[(7)]);
var inst_33975 = (state_34011[(9)]);
var inst_33980 = (state_34011[(11)]);
var inst_33972 = (state_34011[(8)]);
var inst_33979 = (inst_33971[inst_33972] = inst_33975);
var inst_33980__$1 = (inst_33972 + (1));
var inst_33981 = (inst_33980__$1 < n);
var state_34011__$1 = (function (){var statearr_34029 = state_34011;
(statearr_34029[(11)] = inst_33980__$1);

(statearr_34029[(12)] = inst_33979);

return statearr_34029;
})();
if(cljs.core.truth_(inst_33981)){
var statearr_34031_35428 = state_34011__$1;
(statearr_34031_35428[(1)] = (8));

} else {
var statearr_34032_35429 = state_34011__$1;
(statearr_34032_35429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (14))){
var inst_34000 = (state_34011[(2)]);
var inst_34001 = cljs.core.async.close_BANG_(out);
var state_34011__$1 = (function (){var statearr_34034 = state_34011;
(statearr_34034[(13)] = inst_34000);

return statearr_34034;
})();
var statearr_34035_35434 = state_34011__$1;
(statearr_34035_35434[(2)] = inst_34001);

(statearr_34035_35434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (10))){
var inst_33991 = (state_34011[(2)]);
var state_34011__$1 = state_34011;
var statearr_34036_35435 = state_34011__$1;
(statearr_34036_35435[(2)] = inst_33991);

(statearr_34036_35435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34012 === (8))){
var inst_33971 = (state_34011[(7)]);
var inst_33980 = (state_34011[(11)]);
var tmp34033 = inst_33971;
var inst_33971__$1 = tmp34033;
var inst_33972 = inst_33980;
var state_34011__$1 = (function (){var statearr_34037 = state_34011;
(statearr_34037[(7)] = inst_33971__$1);

(statearr_34037[(8)] = inst_33972);

return statearr_34037;
})();
var statearr_34038_35436 = state_34011__$1;
(statearr_34038_35436[(2)] = null);

(statearr_34038_35436[(1)] = (2));


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
var cljs$core$async$state_machine__29613__auto__ = null;
var cljs$core$async$state_machine__29613__auto____0 = (function (){
var statearr_34039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34039[(0)] = cljs$core$async$state_machine__29613__auto__);

(statearr_34039[(1)] = (1));

return statearr_34039;
});
var cljs$core$async$state_machine__29613__auto____1 = (function (state_34011){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_34011);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e34049){var ex__29616__auto__ = e34049;
var statearr_34050_35443 = state_34011;
(statearr_34050_35443[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_34011[(4)]))){
var statearr_34051_35444 = state_34011;
(statearr_34051_35444[(1)] = cljs.core.first((state_34011[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35445 = state_34011;
state_34011 = G__35445;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$state_machine__29613__auto__ = function(state_34011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29613__auto____1.call(this,state_34011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29613__auto____0;
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29613__auto____1;
return cljs$core$async$state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_34058 = f__30196__auto__();
(statearr_34058[(6)] = c__30195__auto___35380);

return statearr_34058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34065 = arguments.length;
switch (G__34065) {
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
var c__30195__auto___35447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30196__auto__ = (function (){var switch__29611__auto__ = (function (state_34114){
var state_val_34115 = (state_34114[(1)]);
if((state_val_34115 === (7))){
var inst_34109 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
var statearr_34116_35448 = state_34114__$1;
(statearr_34116_35448[(2)] = inst_34109);

(statearr_34116_35448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (1))){
var inst_34066 = [];
var inst_34067 = inst_34066;
var inst_34068 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34114__$1 = (function (){var statearr_34119 = state_34114;
(statearr_34119[(7)] = inst_34068);

(statearr_34119[(8)] = inst_34067);

return statearr_34119;
})();
var statearr_34120_35449 = state_34114__$1;
(statearr_34120_35449[(2)] = null);

(statearr_34120_35449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (4))){
var inst_34071 = (state_34114[(9)]);
var inst_34071__$1 = (state_34114[(2)]);
var inst_34073 = (inst_34071__$1 == null);
var inst_34074 = cljs.core.not(inst_34073);
var state_34114__$1 = (function (){var statearr_34121 = state_34114;
(statearr_34121[(9)] = inst_34071__$1);

return statearr_34121;
})();
if(inst_34074){
var statearr_34123_35450 = state_34114__$1;
(statearr_34123_35450[(1)] = (5));

} else {
var statearr_34124_35451 = state_34114__$1;
(statearr_34124_35451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (15))){
var inst_34067 = (state_34114[(8)]);
var inst_34101 = cljs.core.vec(inst_34067);
var state_34114__$1 = state_34114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34114__$1,(18),out,inst_34101);
} else {
if((state_val_34115 === (13))){
var inst_34095 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
var statearr_34128_35454 = state_34114__$1;
(statearr_34128_35454[(2)] = inst_34095);

(statearr_34128_35454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (6))){
var inst_34067 = (state_34114[(8)]);
var inst_34098 = inst_34067.length;
var inst_34099 = (inst_34098 > (0));
var state_34114__$1 = state_34114;
if(cljs.core.truth_(inst_34099)){
var statearr_34130_35457 = state_34114__$1;
(statearr_34130_35457[(1)] = (15));

} else {
var statearr_34131_35458 = state_34114__$1;
(statearr_34131_35458[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (17))){
var inst_34106 = (state_34114[(2)]);
var inst_34107 = cljs.core.async.close_BANG_(out);
var state_34114__$1 = (function (){var statearr_34132 = state_34114;
(statearr_34132[(10)] = inst_34106);

return statearr_34132;
})();
var statearr_34135_35465 = state_34114__$1;
(statearr_34135_35465[(2)] = inst_34107);

(statearr_34135_35465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (3))){
var inst_34111 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34114__$1,inst_34111);
} else {
if((state_val_34115 === (12))){
var inst_34067 = (state_34114[(8)]);
var inst_34088 = cljs.core.vec(inst_34067);
var state_34114__$1 = state_34114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34114__$1,(14),out,inst_34088);
} else {
if((state_val_34115 === (2))){
var state_34114__$1 = state_34114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34114__$1,(4),ch);
} else {
if((state_val_34115 === (11))){
var inst_34071 = (state_34114[(9)]);
var inst_34076 = (state_34114[(11)]);
var inst_34067 = (state_34114[(8)]);
var inst_34085 = inst_34067.push(inst_34071);
var tmp34141 = inst_34067;
var inst_34067__$1 = tmp34141;
var inst_34068 = inst_34076;
var state_34114__$1 = (function (){var statearr_34152 = state_34114;
(statearr_34152[(7)] = inst_34068);

(statearr_34152[(12)] = inst_34085);

(statearr_34152[(8)] = inst_34067__$1);

return statearr_34152;
})();
var statearr_34153_35484 = state_34114__$1;
(statearr_34153_35484[(2)] = null);

(statearr_34153_35484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (9))){
var inst_34068 = (state_34114[(7)]);
var inst_34080 = cljs.core.keyword_identical_QMARK_(inst_34068,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34114__$1 = state_34114;
var statearr_34155_35495 = state_34114__$1;
(statearr_34155_35495[(2)] = inst_34080);

(statearr_34155_35495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (5))){
var inst_34068 = (state_34114[(7)]);
var inst_34071 = (state_34114[(9)]);
var inst_34077 = (state_34114[(13)]);
var inst_34076 = (state_34114[(11)]);
var inst_34076__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34071) : f.call(null,inst_34071));
var inst_34077__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34076__$1,inst_34068);
var state_34114__$1 = (function (){var statearr_34175 = state_34114;
(statearr_34175[(13)] = inst_34077__$1);

(statearr_34175[(11)] = inst_34076__$1);

return statearr_34175;
})();
if(inst_34077__$1){
var statearr_34181_35507 = state_34114__$1;
(statearr_34181_35507[(1)] = (8));

} else {
var statearr_34182_35514 = state_34114__$1;
(statearr_34182_35514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (14))){
var inst_34071 = (state_34114[(9)]);
var inst_34076 = (state_34114[(11)]);
var inst_34090 = (state_34114[(2)]);
var inst_34091 = [];
var inst_34092 = inst_34091.push(inst_34071);
var inst_34067 = inst_34091;
var inst_34068 = inst_34076;
var state_34114__$1 = (function (){var statearr_34187 = state_34114;
(statearr_34187[(7)] = inst_34068);

(statearr_34187[(14)] = inst_34092);

(statearr_34187[(15)] = inst_34090);

(statearr_34187[(8)] = inst_34067);

return statearr_34187;
})();
var statearr_34188_35520 = state_34114__$1;
(statearr_34188_35520[(2)] = null);

(statearr_34188_35520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (16))){
var state_34114__$1 = state_34114;
var statearr_34189_35521 = state_34114__$1;
(statearr_34189_35521[(2)] = null);

(statearr_34189_35521[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (10))){
var inst_34083 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
if(cljs.core.truth_(inst_34083)){
var statearr_34197_35524 = state_34114__$1;
(statearr_34197_35524[(1)] = (11));

} else {
var statearr_34198_35525 = state_34114__$1;
(statearr_34198_35525[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (18))){
var inst_34103 = (state_34114[(2)]);
var state_34114__$1 = state_34114;
var statearr_34199_35534 = state_34114__$1;
(statearr_34199_35534[(2)] = inst_34103);

(statearr_34199_35534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34115 === (8))){
var inst_34077 = (state_34114[(13)]);
var state_34114__$1 = state_34114;
var statearr_34201_35540 = state_34114__$1;
(statearr_34201_35540[(2)] = inst_34077);

(statearr_34201_35540[(1)] = (10));


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
var cljs$core$async$state_machine__29613__auto__ = null;
var cljs$core$async$state_machine__29613__auto____0 = (function (){
var statearr_34202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34202[(0)] = cljs$core$async$state_machine__29613__auto__);

(statearr_34202[(1)] = (1));

return statearr_34202;
});
var cljs$core$async$state_machine__29613__auto____1 = (function (state_34114){
while(true){
var ret_value__29614__auto__ = (function (){try{while(true){
var result__29615__auto__ = switch__29611__auto__(state_34114);
if(cljs.core.keyword_identical_QMARK_(result__29615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29615__auto__;
}
break;
}
}catch (e34207){var ex__29616__auto__ = e34207;
var statearr_34208_35547 = state_34114;
(statearr_34208_35547[(2)] = ex__29616__auto__);


if(cljs.core.seq((state_34114[(4)]))){
var statearr_34210_35548 = state_34114;
(statearr_34210_35548[(1)] = cljs.core.first((state_34114[(4)])));

} else {
throw ex__29616__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35549 = state_34114;
state_34114 = G__35549;
continue;
} else {
return ret_value__29614__auto__;
}
break;
}
});
cljs$core$async$state_machine__29613__auto__ = function(state_34114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29613__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29613__auto____1.call(this,state_34114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29613__auto____0;
cljs$core$async$state_machine__29613__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29613__auto____1;
return cljs$core$async$state_machine__29613__auto__;
})()
})();
var state__30197__auto__ = (function (){var statearr_34216 = f__30196__auto__();
(statearr_34216[(6)] = c__30195__auto___35447);

return statearr_34216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30197__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
