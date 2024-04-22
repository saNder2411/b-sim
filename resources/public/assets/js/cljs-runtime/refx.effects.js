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
var temp__5804__auto___37256 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___37256)){
var new_db_37257 = temp__5804__auto___37256;
refx.effects.db_effect(new_db_37257);
} else {
}

var seq__37063 = cljs.core.seq(effects_without_db);
var chunk__37064 = null;
var count__37065 = (0);
var i__37066 = (0);
while(true){
if((i__37066 < count__37065)){
var vec__37079 = chunk__37064.cljs$core$IIndexed$_nth$arity$2(null,i__37066);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37079,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37079,(1),null);
var temp__5802__auto___37258 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___37258)){
var effect_fn_37260 = temp__5802__auto___37258;
(effect_fn_37260.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37260.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37260.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__37261 = seq__37063;
var G__37262 = chunk__37064;
var G__37263 = count__37065;
var G__37264 = (i__37066 + (1));
seq__37063 = G__37261;
chunk__37064 = G__37262;
count__37065 = G__37263;
i__37066 = G__37264;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37063);
if(temp__5804__auto__){
var seq__37063__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37063__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37063__$1);
var G__37266 = cljs.core.chunk_rest(seq__37063__$1);
var G__37267 = c__5568__auto__;
var G__37268 = cljs.core.count(c__5568__auto__);
var G__37269 = (0);
seq__37063 = G__37266;
chunk__37064 = G__37267;
count__37065 = G__37268;
i__37066 = G__37269;
continue;
} else {
var vec__37084 = cljs.core.first(seq__37063__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37084,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37084,(1),null);
var temp__5802__auto___37271 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___37271)){
var effect_fn_37272 = temp__5802__auto___37271;
(effect_fn_37272.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37272.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37272.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__37273 = cljs.core.next(seq__37063__$1);
var G__37274 = null;
var G__37275 = (0);
var G__37276 = (0);
seq__37063 = G__37273;
chunk__37064 = G__37274;
count__37065 = G__37275;
i__37066 = G__37276;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
refx.effects.dispatch_later = (function refx$effects$dispatch_later(p__37100){
var map__37106 = p__37100;
var map__37106__$1 = cljs.core.__destructure_map(map__37106);
var effect = map__37106__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37106__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37106__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__37120 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37121 = null;
var count__37122 = (0);
var i__37123 = (0);
while(true){
if((i__37123 < count__37122)){
var effect = chunk__37121.cljs$core$IIndexed$_nth$arity$2(null,i__37123);
refx.effects.dispatch_later(effect);


var G__37281 = seq__37120;
var G__37282 = chunk__37121;
var G__37283 = count__37122;
var G__37284 = (i__37123 + (1));
seq__37120 = G__37281;
chunk__37121 = G__37282;
count__37122 = G__37283;
i__37123 = G__37284;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37120);
if(temp__5804__auto__){
var seq__37120__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37120__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37120__$1);
var G__37286 = cljs.core.chunk_rest(seq__37120__$1);
var G__37287 = c__5568__auto__;
var G__37288 = cljs.core.count(c__5568__auto__);
var G__37289 = (0);
seq__37120 = G__37286;
chunk__37121 = G__37287;
count__37122 = G__37288;
i__37123 = G__37289;
continue;
} else {
var effect = cljs.core.first(seq__37120__$1);
refx.effects.dispatch_later(effect);


var G__37291 = cljs.core.next(seq__37120__$1);
var G__37292 = null;
var G__37293 = (0);
var G__37294 = (0);
seq__37120 = G__37291;
chunk__37121 = G__37292;
count__37122 = G__37293;
i__37123 = G__37294;
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
var seq__37164 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37165 = null;
var count__37166 = (0);
var i__37167 = (0);
while(true){
if((i__37167 < count__37166)){
var vec__37189 = chunk__37165.cljs$core$IIndexed$_nth$arity$2(null,i__37167);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37189,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37189,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___37299 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___37299)){
var effect_fn_37300 = temp__5802__auto___37299;
(effect_fn_37300.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37300.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37300.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__37304 = seq__37164;
var G__37305 = chunk__37165;
var G__37306 = count__37166;
var G__37307 = (i__37167 + (1));
seq__37164 = G__37304;
chunk__37165 = G__37305;
count__37166 = G__37306;
i__37167 = G__37307;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37164);
if(temp__5804__auto__){
var seq__37164__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37164__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37164__$1);
var G__37309 = cljs.core.chunk_rest(seq__37164__$1);
var G__37310 = c__5568__auto__;
var G__37311 = cljs.core.count(c__5568__auto__);
var G__37312 = (0);
seq__37164 = G__37309;
chunk__37165 = G__37310;
count__37166 = G__37311;
i__37167 = G__37312;
continue;
} else {
var vec__37207 = cljs.core.first(seq__37164__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___37313 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5802__auto___37313)){
var effect_fn_37314 = temp__5802__auto___37313;
(effect_fn_37314.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37314.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37314.call(null,effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__37316 = cljs.core.next(seq__37164__$1);
var G__37317 = null;
var G__37318 = (0);
var G__37319 = (0);
seq__37164 = G__37316;
chunk__37165 = G__37317;
count__37166 = G__37318;
i__37167 = G__37319;
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
var seq__37220 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37221 = null;
var count__37222 = (0);
var i__37223 = (0);
while(true){
if((i__37223 < count__37222)){
var event = chunk__37221.cljs$core$IIndexed$_nth$arity$2(null,i__37223);
refx.dispatch.dispatch(event);


var G__37322 = seq__37220;
var G__37323 = chunk__37221;
var G__37324 = count__37222;
var G__37325 = (i__37223 + (1));
seq__37220 = G__37322;
chunk__37221 = G__37323;
count__37222 = G__37324;
i__37223 = G__37325;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37220);
if(temp__5804__auto__){
var seq__37220__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37220__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37220__$1);
var G__37328 = cljs.core.chunk_rest(seq__37220__$1);
var G__37329 = c__5568__auto__;
var G__37330 = cljs.core.count(c__5568__auto__);
var G__37331 = (0);
seq__37220 = G__37328;
chunk__37221 = G__37329;
count__37222 = G__37330;
i__37223 = G__37331;
continue;
} else {
var event = cljs.core.first(seq__37220__$1);
refx.dispatch.dispatch(event);


var G__37332 = cljs.core.next(seq__37220__$1);
var G__37333 = null;
var G__37334 = (0);
var G__37335 = (0);
seq__37220 = G__37332;
chunk__37221 = G__37333;
count__37222 = G__37334;
i__37223 = G__37335;
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
var seq__37234 = cljs.core.seq(value);
var chunk__37235 = null;
var count__37236 = (0);
var i__37237 = (0);
while(true){
if((i__37237 < count__37236)){
var event_id = chunk__37235.cljs$core$IIndexed$_nth$arity$2(null,i__37237);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__37341 = seq__37234;
var G__37342 = chunk__37235;
var G__37343 = count__37236;
var G__37344 = (i__37237 + (1));
seq__37234 = G__37341;
chunk__37235 = G__37342;
count__37236 = G__37343;
i__37237 = G__37344;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37234);
if(temp__5804__auto__){
var seq__37234__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37234__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37234__$1);
var G__37346 = cljs.core.chunk_rest(seq__37234__$1);
var G__37347 = c__5568__auto__;
var G__37348 = cljs.core.count(c__5568__auto__);
var G__37349 = (0);
seq__37234 = G__37346;
chunk__37235 = G__37347;
count__37236 = G__37348;
i__37237 = G__37349;
continue;
} else {
var event_id = cljs.core.first(seq__37234__$1);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__37350 = cljs.core.next(seq__37234__$1);
var G__37351 = null;
var G__37352 = (0);
var G__37353 = (0);
seq__37234 = G__37350;
chunk__37235 = G__37351;
count__37236 = G__37352;
i__37237 = G__37353;
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
