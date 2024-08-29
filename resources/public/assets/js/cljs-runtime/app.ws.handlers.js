goog.provide('app.ws.handlers');
if((typeof app !== 'undefined') && (typeof app.ws !== 'undefined') && (typeof app.ws.handlers !== 'undefined') && (typeof app.ws.handlers.event_handler !== 'undefined')){
} else {
app.ws.handlers.event_handler = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28088 = cljs.core.get_global_hierarchy;
return (fexpr__28088.cljs$core$IFn$_invoke$arity$0 ? fexpr__28088.cljs$core$IFn$_invoke$arity$0() : fexpr__28088.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.ws.handlers","event-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
app.ws.handlers.event_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28096){
var map__28097 = p__28096;
var map__28097__$1 = cljs.core.__destructure_map(map__28097);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28097__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["UNHANDLED :id",id], 0));
}));
app.ws.handlers.event_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (_,___$1){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CONNECTION ESTABLISHED!"], 0));
}));
app.ws.handlers.event_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304),(function (p__28103){
var map__28106 = p__28103;
var map__28106__$1 = cljs.core.__destructure_map(map__28106);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28106__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}));
app.ws.handlers.event_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","ws-pong","chsk/ws-pong",-86402347),(function (p__28111){
var map__28117 = p__28111;
var map__28117__$1 = cljs.core.__destructure_map(map__28117);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28117__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}));
app.ws.handlers.event_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__28132,_){
var map__28136 = p__28132;
var map__28136__$1 = cljs.core.__destructure_map(map__28136);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28136__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}));
app.ws.handlers.event_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__28142,_){
var map__28143 = p__28142;
var map__28143__$1 = cljs.core.__destructure_map(map__28143);
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28143__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__28146 = _QMARK_data;
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28146,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28146,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Receive msg data:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Receive msg event-type:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event_type], 0))], 0));
}));
app.ws.handlers.event_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sim","loop-data","sim/loop-data",-840064160),(function (p__28157,_){
var map__28158 = p__28157;
var map__28158__$1 = cljs.core.__destructure_map(map__28158);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28158__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28158__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_QMARK_data], 0))], 0));
}));
app.ws.handlers.event_msg_handler = (function app$ws$handlers$event_msg_handler(msg){
return app.ws.handlers.event_handler.cljs$core$IFn$_invoke$arity$1(msg);
});

//# sourceMappingURL=app.ws.handlers.js.map
