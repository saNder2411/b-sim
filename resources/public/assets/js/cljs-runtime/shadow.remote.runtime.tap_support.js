goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36569,p__36570){
var map__36571 = p__36569;
var map__36571__$1 = cljs.core.__destructure_map(map__36571);
var svc = map__36571__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36571__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36571__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36571__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36572 = p__36570;
var map__36572__$1 = cljs.core.__destructure_map(map__36572);
var msg = map__36572__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36572__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36572__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36572__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36572__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36579,p__36580){
var map__36582 = p__36579;
var map__36582__$1 = cljs.core.__destructure_map(map__36582);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36582__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36583 = p__36580;
var map__36583__$1 = cljs.core.__destructure_map(map__36583);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36583__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36591,p__36592){
var map__36593 = p__36591;
var map__36593__$1 = cljs.core.__destructure_map(map__36593);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36593__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36593__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36594 = p__36592;
var map__36594__$1 = cljs.core.__destructure_map(map__36594);
var msg = map__36594__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36594__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36598,tid){
var map__36599 = p__36598;
var map__36599__$1 = cljs.core.__destructure_map(map__36599);
var svc = map__36599__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36599__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36608 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36610 = null;
var count__36611 = (0);
var i__36612 = (0);
while(true){
if((i__36612 < count__36611)){
var vec__36624 = chunk__36610.cljs$core$IIndexed$_nth$arity$2(null,i__36612);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36624,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36624,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36647 = seq__36608;
var G__36648 = chunk__36610;
var G__36649 = count__36611;
var G__36650 = (i__36612 + (1));
seq__36608 = G__36647;
chunk__36610 = G__36648;
count__36611 = G__36649;
i__36612 = G__36650;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36608);
if(temp__5804__auto__){
var seq__36608__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36608__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36608__$1);
var G__36653 = cljs.core.chunk_rest(seq__36608__$1);
var G__36654 = c__5568__auto__;
var G__36655 = cljs.core.count(c__5568__auto__);
var G__36656 = (0);
seq__36608 = G__36653;
chunk__36610 = G__36654;
count__36611 = G__36655;
i__36612 = G__36656;
continue;
} else {
var vec__36631 = cljs.core.first(seq__36608__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36631,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36631,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36657 = cljs.core.next(seq__36608__$1);
var G__36658 = null;
var G__36659 = (0);
var G__36660 = (0);
seq__36608 = G__36657;
chunk__36610 = G__36658;
count__36611 = G__36659;
i__36612 = G__36660;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36600_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36600_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36601_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36601_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36602_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36602_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36603_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36603_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36636){
var map__36637 = p__36636;
var map__36637__$1 = cljs.core.__destructure_map(map__36637);
var svc = map__36637__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36637__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36637__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
