goog.provide('refx.dispatch');
refx.dispatch.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),(function (f){
var G__36882 = (function (){
return (refx.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? refx.interop.next_tick.cljs$core$IFn$_invoke$arity$1(f) : refx.interop.next_tick.call(null,f));
});
return (refx.interop.after_render.cljs$core$IFn$_invoke$arity$1 ? refx.interop.after_render.cljs$core$IFn$_invoke$arity$1(G__36882) : refx.interop.after_render.call(null,G__36882));
}),new cljs.core.Keyword(null,"yield","yield",177875009),refx.interop.next_tick], null);

/**
 * @interface
 */
refx.dispatch.IEventQueue = function(){};

var refx$dispatch$IEventQueue$push$dyn_37055 = (function (this$,event){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch.push[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5394__auto__.call(null,this$,event));
} else {
var m__5392__auto__ = (refx.dispatch.push["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5392__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.push",this$);
}
}
});
refx.dispatch.push = (function refx$dispatch$push(this$,event){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$push$arity$2 == null)))))){
return this$.refx$dispatch$IEventQueue$push$arity$2(this$,event);
} else {
return refx$dispatch$IEventQueue$push$dyn_37055(this$,event);
}
});

var refx$dispatch$IEventQueue$add_post_event_callback$dyn_37056 = (function (this$,id,callback_fn){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch.add_post_event_callback[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callback_fn) : m__5394__auto__.call(null,this$,id,callback_fn));
} else {
var m__5392__auto__ = (refx.dispatch.add_post_event_callback["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callback_fn) : m__5392__auto__.call(null,this$,id,callback_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
});
refx.dispatch.add_post_event_callback = (function refx$dispatch$add_post_event_callback(this$,id,callback_fn){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$add_post_event_callback$arity$3 == null)))))){
return this$.refx$dispatch$IEventQueue$add_post_event_callback$arity$3(this$,id,callback_fn);
} else {
return refx$dispatch$IEventQueue$add_post_event_callback$dyn_37056(this$,id,callback_fn);
}
});

var refx$dispatch$IEventQueue$remove_post_event_callback$dyn_37059 = (function (this$,id){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch.remove_post_event_callback[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5394__auto__.call(null,this$,id));
} else {
var m__5392__auto__ = (refx.dispatch.remove_post_event_callback["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5392__auto__.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("IEventQueue.remove-post-event-callback",this$);
}
}
});
refx.dispatch.remove_post_event_callback = (function refx$dispatch$remove_post_event_callback(this$,id){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$remove_post_event_callback$arity$2 == null)))))){
return this$.refx$dispatch$IEventQueue$remove_post_event_callback$arity$2(this$,id);
} else {
return refx$dispatch$IEventQueue$remove_post_event_callback$dyn_37059(this$,id);
}
});

var refx$dispatch$IEventQueue$purge$dyn_37060 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch.purge[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (refx.dispatch.purge["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.purge",this$);
}
}
});
refx.dispatch.purge = (function refx$dispatch$purge(this$){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$purge$arity$1 == null)))))){
return this$.refx$dispatch$IEventQueue$purge$arity$1(this$);
} else {
return refx$dispatch$IEventQueue$purge$dyn_37060(this$);
}
});

var refx$dispatch$IEventQueue$_fsm_trigger$dyn_37061 = (function (this$,trigger,arg){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch._fsm_trigger[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__5394__auto__.call(null,this$,trigger,arg));
} else {
var m__5392__auto__ = (refx.dispatch._fsm_trigger["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__5392__auto__.call(null,this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
});
refx.dispatch._fsm_trigger = (function refx$dispatch$_fsm_trigger(this$,trigger,arg){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_fsm_trigger$arity$3 == null)))))){
return this$.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
return refx$dispatch$IEventQueue$_fsm_trigger$dyn_37061(this$,trigger,arg);
}
});

var refx$dispatch$IEventQueue$_add_event$dyn_37062 = (function (this$,event){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch._add_event[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5394__auto__.call(null,this$,event));
} else {
var m__5392__auto__ = (refx.dispatch._add_event["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5392__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
});
refx.dispatch._add_event = (function refx$dispatch$_add_event(this$,event){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_add_event$arity$2 == null)))))){
return this$.refx$dispatch$IEventQueue$_add_event$arity$2(this$,event);
} else {
return refx$dispatch$IEventQueue$_add_event$dyn_37062(this$,event);
}
});

var refx$dispatch$IEventQueue$_process_1st_event_in_queue$dyn_37070 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch._process_1st_event_in_queue[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (refx.dispatch._process_1st_event_in_queue["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event-in-queue",this$);
}
}
});
refx.dispatch._process_1st_event_in_queue = (function refx$dispatch$_process_1st_event_in_queue(this$){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))))){
return this$.refx$dispatch$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
return refx$dispatch$IEventQueue$_process_1st_event_in_queue$dyn_37070(this$);
}
});

var refx$dispatch$IEventQueue$_run_next_tick$dyn_37071 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch._run_next_tick[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (refx.dispatch._run_next_tick["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
});
refx.dispatch._run_next_tick = (function refx$dispatch$_run_next_tick(this$){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_run_next_tick$arity$1 == null)))))){
return this$.refx$dispatch$IEventQueue$_run_next_tick$arity$1(this$);
} else {
return refx$dispatch$IEventQueue$_run_next_tick$dyn_37071(this$);
}
});

var refx$dispatch$IEventQueue$_run_queue$dyn_37072 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch._run_queue[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (refx.dispatch._run_queue["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
});
refx.dispatch._run_queue = (function refx$dispatch$_run_queue(this$){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_run_queue$arity$1 == null)))))){
return this$.refx$dispatch$IEventQueue$_run_queue$arity$1(this$);
} else {
return refx$dispatch$IEventQueue$_run_queue$dyn_37072(this$);
}
});

var refx$dispatch$IEventQueue$_exception$dyn_37076 = (function (this$,ex){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch._exception[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__5394__auto__.call(null,this$,ex));
} else {
var m__5392__auto__ = (refx.dispatch._exception["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__5392__auto__.call(null,this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
});
refx.dispatch._exception = (function refx$dispatch$_exception(this$,ex){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_exception$arity$2 == null)))))){
return this$.refx$dispatch$IEventQueue$_exception$arity$2(this$,ex);
} else {
return refx$dispatch$IEventQueue$_exception$dyn_37076(this$,ex);
}
});

var refx$dispatch$IEventQueue$_pause$dyn_37077 = (function (this$,later_fn){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch._pause[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__5394__auto__.call(null,this$,later_fn));
} else {
var m__5392__auto__ = (refx.dispatch._pause["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__5392__auto__.call(null,this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause",this$);
}
}
});
refx.dispatch._pause = (function refx$dispatch$_pause(this$,later_fn){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_pause$arity$2 == null)))))){
return this$.refx$dispatch$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
return refx$dispatch$IEventQueue$_pause$dyn_37077(this$,later_fn);
}
});

var refx$dispatch$IEventQueue$_resume$dyn_37082 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch._resume[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (refx.dispatch._resume["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-resume",this$);
}
}
});
refx.dispatch._resume = (function refx$dispatch$_resume(this$){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_resume$arity$1 == null)))))){
return this$.refx$dispatch$IEventQueue$_resume$arity$1(this$);
} else {
return refx$dispatch$IEventQueue$_resume$dyn_37082(this$);
}
});

var refx$dispatch$IEventQueue$_call_post_event_callbacks$dyn_37083 = (function (this$,event){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (refx.dispatch._call_post_event_callbacks[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5394__auto__.call(null,this$,event));
} else {
var m__5392__auto__ = (refx.dispatch._call_post_event_callbacks["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5392__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-call-post-event-callbacks",this$);
}
}
});
refx.dispatch._call_post_event_callbacks = (function refx$dispatch$_call_post_event_callbacks(this$,event){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_call_post_event_callbacks$arity$2 == null)))))){
return this$.refx$dispatch$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
return refx$dispatch$IEventQueue$_call_post_event_callbacks$dyn_37083(this$,event);
}
});


/**
* @constructor
 * @implements {refx.dispatch.IEventQueue}
*/
refx.dispatch.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL);

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return this$__$1.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__5802__auto__ = cljs.core.some(refx.dispatch.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__5802__auto__)){
var later_fn = temp__5802__auto__;
return this$__$1.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
this$__$1.refx$dispatch$IEventQueue$_process_1st_event_in_queue$arity$1(null);

var G__37091 = (n - (1));
n = G__37091;
continue;
}
}
break;
}
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)))){
return refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["could not remove post event call back with id:",id], 0));
} else {
return (self__.post_event_callback_fns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,id));
}
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return (self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event));
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.refx$dispatch$IEventQueue$_process_1st_event_in_queue$arity$1(null);

return this$__$1.refx$dispatch$IEventQueue$_run_queue$arity$1(null);
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return this$__$1.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__37013 = (function (){
return this$__$1.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});
return (refx.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? refx.interop.next_tick.cljs$core$IFn$_invoke$arity$1(G__37013) : refx.interop.next_tick.call(null,G__37013));
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
var vec__37014 = (function (){var G__37017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__37017)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
this$__$1.refx$dispatch$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.refx$dispatch$IEventQueue$_run_next_tick$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__37017)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),(function (){
return this$__$1.refx$dispatch$IEventQueue$_exception$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__37017)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.refx$dispatch$IEventQueue$_run_next_tick$arity$1(null);
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__37017)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.refx$dispatch$IEventQueue$_pause$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__37017)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.refx$dispatch$IEventQueue$_resume$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__37017)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.refx$dispatch$IEventQueue$_run_queue$arity$1(null);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__37017)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.refx$dispatch$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__37017)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.refx$dispatch$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__37017)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.refx$dispatch$IEventQueue$_add_event$arity$2(null,arg);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37014,(1),null);
(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__37024 = (function (){
return this$__$1.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__37024) : later_fn.call(null,G__37024));
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["overwriting existing post event call back with id:",id], 0));
} else {
}

return (self__.post_event_callback_fns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.post_event_callback_fns,id,callback_fn));
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{refx.events.handle(event_v);

(self__.queue = cljs.core.pop(self__.queue));

return this$__$1.refx$dispatch$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);
}catch (e37025){var ex = e37025;
return this$__$1.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(null,new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__37026 = cljs.core.seq(cljs.core.vals(self__.post_event_callback_fns));
var chunk__37027 = null;
var count__37028 = (0);
var i__37029 = (0);
while(true){
if((i__37029 < count__37028)){
var callback = chunk__37027.cljs$core$IIndexed$_nth$arity$2(null,i__37029);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__37143 = seq__37026;
var G__37144 = chunk__37027;
var G__37145 = count__37028;
var G__37146 = (i__37029 + (1));
seq__37026 = G__37143;
chunk__37027 = G__37144;
count__37028 = G__37145;
i__37029 = G__37146;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37026);
if(temp__5804__auto__){
var seq__37026__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37026__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37026__$1);
var G__37149 = cljs.core.chunk_rest(seq__37026__$1);
var G__37150 = c__5568__auto__;
var G__37151 = cljs.core.count(c__5568__auto__);
var G__37152 = (0);
seq__37026 = G__37149;
chunk__37027 = G__37150;
count__37028 = G__37151;
i__37029 = G__37152;
continue;
} else {
var callback = cljs.core.first(seq__37026__$1);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__37160 = cljs.core.next(seq__37026__$1);
var G__37161 = null;
var G__37162 = (0);
var G__37163 = (0);
seq__37026 = G__37160;
chunk__37027 = G__37161;
count__37028 = G__37162;
i__37029 = G__37163;
continue;
}
} else {
return null;
}
}
break;
}
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$purge$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.queue = refx.interop.empty_queue);
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_exception$arity$2 = (function (this$,ex){
var self__ = this;
var this$__$1 = this;
this$__$1.refx$dispatch$IEventQueue$purge$arity$1(null);

throw ex;
}));

(refx.dispatch.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(refx.dispatch.EventQueue.cljs$lang$type = true);

(refx.dispatch.EventQueue.cljs$lang$ctorStr = "refx.dispatch/EventQueue");

(refx.dispatch.EventQueue.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"refx.dispatch/EventQueue");
}));

/**
 * Positional factory function for refx.dispatch/EventQueue.
 */
refx.dispatch.__GT_EventQueue = (function refx$dispatch$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new refx.dispatch.EventQueue(fsm_state,queue,post_event_callback_fns));
});

refx.dispatch.event_queue = refx.dispatch.__GT_EventQueue(new cljs.core.Keyword(null,"idle","idle",-2007156861),refx.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
refx.dispatch.dispatch = (function refx$dispatch$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
refx.dispatch.event_queue.refx$dispatch$IEventQueue$push$arity$2(null,event);
}

return null;
});
refx.dispatch.dispatch_sync = (function refx$dispatch$dispatch_sync(event_v){
refx.events.handle(event_v);

refx.dispatch.event_queue.refx$dispatch$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);

return null;
});

//# sourceMappingURL=refx.dispatch.js.map
