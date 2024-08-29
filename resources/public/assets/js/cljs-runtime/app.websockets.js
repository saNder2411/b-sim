goog.provide('app.websockets');
if((typeof app !== 'undefined') && (typeof app.websockets !== 'undefined') && (typeof app.websockets.channel !== 'undefined')){
} else {
app.websockets.channel = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.websockets.connect_BANG_ = (function app$websockets$connect_BANG_(url,receive_handle){
var temp__5802__auto__ = (new WebSocket(url));
if(cljs.core.truth_(temp__5802__auto__)){
var ch = temp__5802__auto__;
console.log("Connected!");

(ch.onmessage = (function (p1__28439_SHARP_){
var G__28440 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__28439_SHARP_.data);
return (receive_handle.cljs$core$IFn$_invoke$arity$1 ? receive_handle.cljs$core$IFn$_invoke$arity$1(G__28440) : receive_handle.call(null,G__28440));
}));

return cljs.core.reset_BANG_(app.websockets.channel,ch);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Websocket Connection Failed!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));
}
});
app.websockets.send_message_BANG_ = (function app$websockets$send_message_BANG_(msg){
var temp__5802__auto__ = cljs.core.deref(app.websockets.channel);
if(cljs.core.truth_(temp__5802__auto__)){
var chan = temp__5802__auto__;
return chan.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Couldn't send message, channel isn't open!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null));
}
});

//# sourceMappingURL=app.websockets.js.map
