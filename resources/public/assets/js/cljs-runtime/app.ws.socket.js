goog.provide('app.ws.socket');
app.ws.socket.socket_router = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.ws.socket.ch_chsk = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.ws.socket.chsk_send_BANG_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.ws.socket.config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"host","host",-1558485167),"localhost",new cljs.core.Keyword(null,"port","port",1534937262),(8090)], null);
app.ws.socket.create_client_BANG_ = (function app$ws$socket$create_client_BANG_(){
var map__41352 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/ws",null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.ws.socket.config], 0));
var map__41352__$1 = cljs.core.__destructure_map(map__41352);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41352__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41352__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
cljs.core.reset_BANG_(app.ws.socket.ch_chsk,ch_recv);

return cljs.core.reset_BANG_(app.ws.socket.chsk_send_BANG_,send_fn);
});
app.ws.socket.stop_socket_router_BANG_ = (function app$ws$socket$stop_socket_router_BANG_(){
var temp__5804__auto__ = cljs.core.deref(app.ws.socket.socket_router);
if(cljs.core.truth_(temp__5804__auto__)){
var stop_fn = temp__5804__auto__;
return (stop_fn.cljs$core$IFn$_invoke$arity$0 ? stop_fn.cljs$core$IFn$_invoke$arity$0() : stop_fn.call(null));
} else {
return null;
}
});
app.ws.socket.start_socket_router_BANG_ = (function app$ws$socket$start_socket_router_BANG_(){
app.ws.socket.stop_socket_router_BANG_();

return cljs.core.reset_BANG_(app.ws.socket.socket_router,taoensso.sente.start_client_chsk_router_BANG_(cljs.core.deref(app.ws.socket.ch_chsk),app.ws.handlers.event_msg_handler));
});
app.ws.socket.start_BANG_ = (function app$ws$socket$start_BANG_(){
app.ws.socket.create_client_BANG_();

return app.ws.socket.start_socket_router_BANG_();
});
app.ws.socket.send_BANG_ = (function app$ws$socket$send_BANG_(event){
var fexpr__41366 = cljs.core.deref(app.ws.socket.chsk_send_BANG_);
return (fexpr__41366.cljs$core$IFn$_invoke$arity$1 ? fexpr__41366.cljs$core$IFn$_invoke$arity$1(event) : fexpr__41366.call(null,event));
});

//# sourceMappingURL=app.ws.socket.js.map
