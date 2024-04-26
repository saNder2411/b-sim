goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35672,p__35673){
var map__35674 = p__35672;
var map__35674__$1 = cljs.core.__destructure_map(map__35674);
var svc = map__35674__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35674__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35674__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35674__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35675 = p__35673;
var map__35675__$1 = cljs.core.__destructure_map(map__35675);
var msg = map__35675__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35675__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35675__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35675__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35675__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35681,p__35682){
var map__35684 = p__35681;
var map__35684__$1 = cljs.core.__destructure_map(map__35684);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35686 = p__35682;
var map__35686__$1 = cljs.core.__destructure_map(map__35686);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35686__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35690,p__35691){
var map__35693 = p__35690;
var map__35693__$1 = cljs.core.__destructure_map(map__35693);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35693__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35693__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35694 = p__35691;
var map__35694__$1 = cljs.core.__destructure_map(map__35694);
var msg = map__35694__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35694__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35699,tid){
var map__35701 = p__35699;
var map__35701__$1 = cljs.core.__destructure_map(map__35701);
var svc = map__35701__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35701__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35713 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35714 = null;
var count__35715 = (0);
var i__35716 = (0);
while(true){
if((i__35716 < count__35715)){
var vec__35739 = chunk__35714.cljs$core$IIndexed$_nth$arity$2(null,i__35716);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35739,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35739,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35791 = seq__35713;
var G__35792 = chunk__35714;
var G__35793 = count__35715;
var G__35794 = (i__35716 + (1));
seq__35713 = G__35791;
chunk__35714 = G__35792;
count__35715 = G__35793;
i__35716 = G__35794;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35713);
if(temp__5804__auto__){
var seq__35713__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35713__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35713__$1);
var G__35795 = cljs.core.chunk_rest(seq__35713__$1);
var G__35796 = c__5568__auto__;
var G__35797 = cljs.core.count(c__5568__auto__);
var G__35798 = (0);
seq__35713 = G__35795;
chunk__35714 = G__35796;
count__35715 = G__35797;
i__35716 = G__35798;
continue;
} else {
var vec__35752 = cljs.core.first(seq__35713__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35752,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35752,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35799 = cljs.core.next(seq__35713__$1);
var G__35800 = null;
var G__35801 = (0);
var G__35802 = (0);
seq__35713 = G__35799;
chunk__35714 = G__35800;
count__35715 = G__35801;
i__35716 = G__35802;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35702_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35702_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35703_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35703_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35704_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35704_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35705_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35705_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35760){
var map__35765 = p__35760;
var map__35765__$1 = cljs.core.__destructure_map(map__35765);
var svc = map__35765__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35765__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35765__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
