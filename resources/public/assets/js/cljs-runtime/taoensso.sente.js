goog.provide('taoensso.sente');
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(62),(1)], null));
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(19),(2)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
/**
 * Sets Timbre's minimum log level for internal Sente namespaces.
 *   Possible levels: #{:trace :debug :info :warn :error :fatal :report}.
 *   Default level: `:warn`.
 */
taoensso.sente.set_min_log_level_BANG_ = (function taoensso$sente$set_min_log_level_BANG_(level){
taoensso.timbre.swap_config_BANG_((function (config__33051__auto__){
return taoensso.timbre.set_ns_min_level(config__33051__auto__,"taoensso.sente.*",level);
}));

taoensso.timbre.swap_config_BANG_((function (config__33051__auto__){
return taoensso.timbre.set_ns_min_level(config__33051__auto__,"taoensso.sente",level);
}));

return null;
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.__set_default_log_level !== 'undefined')){
} else {
taoensso.sente.__set_default_log_level = taoensso.sente.set_min_log_level_BANG_(new cljs.core.Keyword(null,"warn","warn",-436710552));
}
taoensso.sente.strim = (function taoensso$sente$strim(max_len,s){
if((cljs.core.count(s) > max_len)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.get_substr_by_len.cljs$core$IFn$_invoke$arity$3(s,(0),max_len));
} else {
return s;
}
});
/**
 * Log id
 */
taoensso.sente.lid = (function taoensso$sente$lid(var_args){
var G__37984 = arguments.length;
switch (G__37984) {
case 1:
return taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.sente.lid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.lid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1 = (function (uid){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uid,new cljs.core.Keyword("sente","nil-uid","sente/nil-uid",1458555084))){
return "u_nil";
} else {
return ["u_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.strim((6),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)))].join('');
}
}));

(taoensso.sente.lid.cljs$core$IFn$_invoke$arity$2 = (function (uid,client_id){
return [taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1(uid),"/c_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.strim((6),cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_id)))].join('');
}));

(taoensso.sente.lid.cljs$core$IFn$_invoke$arity$3 = (function (uid,client_id,conn_id){
return [taoensso.sente.lid.cljs$core$IFn$_invoke$arity$2(uid,client_id),"/n_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.strim((6),conn_id))].join('');
}));

(taoensso.sente.lid.cljs$lang$maxFixedArity = 3);

taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected(new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not((function (){var G__38002 = cljs.core.count(x);
var fexpr__38001 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__38001.cljs$core$IFn$_invoke$arity$1 ? fexpr__38001.cljs$core$IFn$_invoke$arity$1(G__38002) : fexpr__38001.call(null,G__38002));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__38006 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38006,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38006,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected(new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected(new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5804__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5804__auto__)){
var errs = temp__5804__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5802__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5802__auto__)){
var errs = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__5043__auto__ = cljs.core.map_QMARK_(x);
if(and__5043__auto__){
var and__5043__auto____$1 = taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__5043__auto____$1){
var map__38026 = x;
var map__38026__$1 = cljs.core.__destructure_map(map__38026);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38026__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38026__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38026__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38026__$1,new cljs.core.Keyword(null,"event","event",301435442));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (((cljs.core.ifn_QMARK_(send_fn)) && (((taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event)))))));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__5043__auto__ = cljs.core.map_QMARK_(x);
if(and__5043__auto__){
var and__5043__auto____$1 = taoensso.encore.ks_GT__EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__5043__auto____$1){
var map__38037 = x;
var map__38037__$1 = cljs.core.__destructure_map(map__38037);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var send_buffers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037__$1,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (((cljs.core.ifn_QMARK_(send_fn)) && (((taoensso.encore.atom_QMARK_(connected_uids)) && (((taoensso.encore.atom_QMARK_(send_buffers)) && (((cljs.core.map_QMARK_(ring_req)) && (((taoensso.encore.nblank_str_QMARK_(client_id)) && (((taoensso.sente.event_QMARK_(event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn)))))))))))))))));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__38048){
var map__38050 = p__38048;
var map__38050__$1 = cljs.core.__destructure_map(map__38050);
var ev_msg = map__38050__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38050__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38050__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__38053 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38053,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38053,(1),null);
var valid_event = vec__38053;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,198,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad `event-msg` from server: %s",ev_msg], null);
}),null)),null,(58),null);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__38063 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__38063.cljs$core$IFn$_invoke$arity$1 ? fexpr__38063.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__38063.call(null,cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * Returns [<packed> <?format>]. Used to support some minimal backwards
 *   compatibility between v2 `pack` and v1 `unpack`.
 */
taoensso.sente.parse_packed = (function taoensso$sente$parse_packed(packed){
if(typeof packed === 'string'){
if(taoensso.encore.str_starts_with_QMARK_(packed,"+")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(packed,(1)),new cljs.core.Keyword("v1","wrapped","v1/wrapped",1775176340)], null);
} else {
if(taoensso.encore.str_starts_with_QMARK_(packed,"-")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(packed,(1)),new cljs.core.Keyword("v1","unwrapped","v1/unwrapped",-1881590983)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [packed,new cljs.core.Keyword("v2","unwrapped","v2/unwrapped",-1881590982)], null);

}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [packed,new cljs.core.Keyword("v2","unwrapped","v2/unwrapped",-1881590982)], null);
}
});
/**
 * packed->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,packed){
var vec__38075 = taoensso.sente.parse_packed(packed);
var packed__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38075,(0),null);
var _QMARK_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38075,(1),null);
var unpacked = (function (){try{return taoensso.sente.interfaces.unpack(packer,packed__$1);
}catch (e38083){var t = e38083;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,230,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Failed to unpack: %s",packed__$1], null);
}),null)),null,(59),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),packed__$1], null),null], null);
}})();
var vec__38078 = (function (){var G__38086 = _QMARK_format;
var G__38086__$1 = (((G__38086 instanceof cljs.core.Keyword))?G__38086.fqn:null);
switch (G__38086__$1) {
case "v1/wrapped":
return unpacked;

break;
case "v1/unwrapped":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unpacked,null], null);

break;
case "v2/unwrapped":
return unpacked;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38086__$1)].join('')));

}
})();
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38078,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38078,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null);
});
/**
 * Advanced option, most users can ignore this var. Only necessary
 *   for those that want to use Sente < v1.18 with a non-standard
 *   IPacker that deals with non-string payloads.
 * 
 *   Details:
 *  Sente uses a private message format as an implementation detail
 *  for client<->server comms.
 * 
 *  As part of [#398], this format is being updated to support
 *  non-string (e.g. binary) payloads.
 * 
 *  Unfortunately updating the format is non-trivial because:
 *    1. Both the client & server need to support the same format.
 *    2. Clients are often served as cached cl/js.
 * 
 *  To help ease migration, the new pack format is being rolled out
 *  in stages:
 * 
 *    Sente <= v1.16: reads  v1 format only
 *                    writes v1 format only
 * 
 *    Sente    v1.17: reads  v1 and v2 formats
 *                    writes v1 and v2 formats (v1 default)
 * 
 *    Sente    v1.18: reads  v1 and v2 formats
 *                    writes v1 and v2 formats (v2 default)  <- Currently here
 * 
 *    Sente >= v1.19: reads  v2 format only
 *                    writes v2 format only
 * 
 *  This var controls which format to use for writing.
 *  Override default with `alter-var-root` or `binding`.
 */
taoensso.sente._STAR_write_legacy_pack_format_QMARK__STAR_ = false;
/**
 * [clj ?cb-uuid]->packed
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__38096 = arguments.length;
switch (G__38096) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer,clj,null);
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var packed = taoensso.sente.interfaces.pack(packer,(function (){var temp__5806__auto__ = _QMARK_cb_uuid__$1;
if((temp__5806__auto__ == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null);
} else {
var cb_uuid = temp__5806__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,cb_uuid], null);
}
})());
if(cljs.core.truth_(taoensso.sente._STAR_write_legacy_pack_format_QMARK__STAR_)){
return ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof packed === 'string')?packed:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),290,17,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"packed","packed",93735008,null),packed,null,null)))].join('');
} else {
return packed;
}
}));

(taoensso.sente.pack.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
}));

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
}));

(taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.sente.EdnPacker.cljs$lang$type = true);

(taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker");

(taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"taoensso.sente/EdnPacker");
}));

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__38119_SHARP_){
if((!((p1__38119_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__38119_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__38119_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__38119_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__38119_SHARP_);
}
})(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38125){if((e38125 instanceof Error)){
var e = e38125;
return e;
} else {
throw e38125;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),308,5,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38119#","p1__38119#",2045610386,null)], null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol("interfaces","IPacker","interfaces/IPacker",1863769936,null),new cljs.core.Symbol(null,"p1__38119#","p1__38119#",2045610386,null))),new cljs.core.Symbol(null,"x","x",-555367584,null),x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0();

/**
 * Alpha, subject to change.
 *   Returns true iff given Ring request is allowed by `allowed-origins`.
 *   `allowed-origins` may be `:all` or #{<origin> ...}.
 */
taoensso.sente.allow_origin_QMARK_ = (function taoensso$sente$allow_origin_QMARK_(allowed_origins,ring_req){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(allowed_origins,new cljs.core.Keyword(null,"all","all",892129742))){
return true;
} else {
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"headers","headers",-835030129));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"origin",new cljs.core.Keyword(null,"nx","nx",-1996436366));
var have_origin_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"nx","nx",-1996436366));
if(((have_origin_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(allowed_origins),origin)))){
return true;
} else {
var referer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers,"referer","");
if(cljs.core.truth_((function (){var and__5043__auto__ = (!(have_origin_QMARK_));
if(and__5043__auto__){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((function (p1__38137_SHARP_){
return clojure.string.starts_with_QMARK_(referer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38137_SHARP_),"/"].join(''));
}),allowed_origins);
} else {
return and__5043__auto__;
}
})())){
return true;
} else {
return false;
}
}
}
});
/**
 * Takes a web server adapter[1] and returns a map with keys:
 * 
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn                     ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; Ring handler for CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; Ring handler for Ring GET  + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Security options:
 * 
 *  :allowed-origins   ; e.g. #{"http://site.com" ...}, defaults to :all. ; Alpha
 * 
 *  :csrf-token-fn     ; ?(fn [ring-req]) -> CSRF-token for Ajax POSTs and WS handshake.
 *                     ; nil => CSRF check will be DISABLED (can pose a *CSRF SECURITY RISK*
 *                     ; for website use cases, so please ONLY disable this check if you're
 *                     ; very sure you understand the implications!).
 * 
 *  :authorized?-fn    ; ?(fn [ring-req]) -> When non-nil, (authorized?-fn <ring-req>)
 *                     ; must return truthy, otherwise connection requests will be
 *                     ; rejected with (unauthorized-fn <ring-req>) response.
 *                     ;
 *                     ; May check Authroization HTTP header, etc.
 * 
 *  :?unauthorized-fn  ; An alternative API to `authorized?-fn`+`unauthorized-fn` pair.
 *                     ; ?(fn [ring-req)) -> <?rejection-resp>. I.e. when return value
 *                     ; is non-nil, connection requests will be rejected with that
 *                     ; non-nil value.
 * 
 *   Other common options:
 * 
 *  :user-id-fn         ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :handshake-data-fn  ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms       ; Ping to keep a WebSocket conn alive if no activity
 *                      ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms      ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax   ; [2]
 *  :send-buf-ms-ws     ; [2]
 *  :packer             ; :edn (default), or an IPacker implementation.
 * 
 *  :ws-ping-timeout-ms ; When pinging to test WebSocket connections, msecs to
 *                      ; await reply before regarding the connection as broken
 * 
 *  ;; When a connection is closed, Sente waits a little for possible reconnection before
 *  ;; actually marking the connection as closed. This facilitates Ajax long-polling,
 *  ;; server->client buffering, and helps to reduce event noise from spotty connections.
 *  :ms-allow-reconnect-before-close-ws   ; Msecs to wait for WebSocket conns (default: 2500)
 *  :ms-allow-reconnect-before-close-ajax ; Msecs to wait for Ajax      conns (default: 5000)
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41374 = arguments.length;
var i__5770__auto___41375 = (0);
while(true){
if((i__5770__auto___41375 < len__5769__auto___41374)){
args__5775__auto__.push((arguments[i__5770__auto___41375]));

var G__41376 = (i__5770__auto___41375 + (1));
i__5770__auto___41375 = G__41376;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__38187){
var vec__38188 = p__38187;
var map__38191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38188,(0),null);
var map__38191__$1 = cljs.core.__destructure_map(map__38191);
var ws_ping_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),null);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(25)], 0)));
var _QMARK_unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38191__$1,new cljs.core.Keyword(null,"?unauthorized-fn","?unauthorized-fn",-1883475616));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var allowed_origins = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"allowed-origins","allowed-origins",1477851683),new cljs.core.Keyword(null,"all","all",892129742));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var ms_allow_reconnect_before_close_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"ms-allow-reconnect-before-close-ws","ms-allow-reconnect-before-close-ws",-1327905884),(2500));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
var or__5045__auto__ = new cljs.core.Keyword(null,"anti-forgery-token","anti-forgery-token",806990841).cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
}
}));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var ms_allow_reconnect_before_close_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"ms-allow-reconnect-before-close-ajax","ms-allow-reconnect-before-close-ajax",-447786167),(5000));
var unauthorized_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"unauthorized-fn","unauthorized-fn",-2032603957),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(401),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized request"], null);
}));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var bad_origin_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"bad-origin-fn","bad-origin-fn",1385595727),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Unauthorized origin"], null);
}));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var authorized_QMARK__fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38191__$1,new cljs.core.Keyword(null,"authorized?-fn","authorized?-fn",-1334669261));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38191__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),(function (_ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
}));
var e_41380 = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38211){if((e38211 instanceof Error)){
var e_41380 = e38211;
return e_41380;
} else {
throw e38211;

}
}})();
if((e_41380 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),482,3,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol("enc","pos-int?","enc/pos-int?",-1205796829,null),new cljs.core.Symbol(null,"send-buf-ms-ajax","send-buf-ms-ajax",-1108306732,null),send_buf_ms_ajax,e_41380,null);
}

var e_41381 = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38215){if((e38215 instanceof Error)){
var e_41381 = e38215;
return e_41381;
} else {
throw e38215;

}
}})();
if((e_41381 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),482,3,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol("enc","pos-int?","enc/pos-int?",-1205796829,null),new cljs.core.Symbol(null,"send-buf-ms-ws","send-buf-ms-ws",490945289,null),send_buf_ms_ws,e_41381,null);
}


var e_41382 = (function (){try{if((function (p1__38153_SHARP_){
if((!((p1__38153_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__38153_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__38153_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__38153_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__38153_SHARP_);
}
})(web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38219){if((e38219 instanceof Error)){
var e_41382 = e38219;
return e_41382;
} else {
throw e38219;

}
}})();
if((e_41382 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),483,3,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__38153#","p1__38153#",1146353085,null)], null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol("interfaces","IServerChanAdapter","interfaces/IServerChanAdapter",-455981296,null),new cljs.core.Symbol(null,"p1__38153#","p1__38153#",1146353085,null))),new cljs.core.Symbol(null,"web-server-ch-adapter","web-server-ch-adapter",340117672,null),web_server_ch_adapter,e_41382,null);
}

var max_ms_41384 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_41384)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_41384)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_41384], null));
} else {
}

var allowed_origins__$1 = (cljs.core.truth_((function (x){
var or__5045__auto__ = cljs.core.set_QMARK_(x);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__38231 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),null], null), null);
return (fexpr__38231.cljs$core$IFn$_invoke$arity$1 ? fexpr__38231.cljs$core$IFn$_invoke$arity$1(x) : fexpr__38231.call(null,x));
}
})(allowed_origins))?allowed_origins:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),492,25,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all","all",892129742),"null"], null), null)], null),new cljs.core.Symbol(null,"allowed-origins","allowed-origins",-1176584086,null),allowed_origins,null,null));
var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__5045__auto__ = (function (){var G__38236 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__38236) : user_id_fn.call(null,G__38236));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sente","nil-uid","sente/nil-uid",1458555084);
}
});
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var connect_uid_BANG__QMARK_ = (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38242){if((e38242 instanceof Error)){
var e = e38242;
return e;
} else {
throw e38242;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),507,36,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol("taoensso.truss.impl","some?","taoensso.truss.impl/some?",-1118207366,null),new cljs.core.Symbol(null,"uid","uid",192762127,null),uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__38248){
var map__38249 = p__38248;
var map__38249__$1 = cljs.core.__destructure_map(map__38249);
var old_m = map__38249__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38249__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38249__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38249__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__38251 = conn_type;
var G__38251__$1 = (((G__38251 instanceof cljs.core.Keyword))?G__38251.fqn:null);
switch (G__38251__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38251__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_(old_any,uid)))) && (cljs.core.contains_QMARK_(new_any,uid)))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
}));
return newly_connected_QMARK_;
});
var maybe_disconnect_uid_BANG__QMARK_ = (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e38261){if((e38261 instanceof Error)){
var e = e38261;
return e;
} else {
throw e38261;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),524,26,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol("taoensso.truss.impl","some?","taoensso.truss.impl/some?",-1118207366,null),new cljs.core.Symbol(null,"uid","uid",192762127,null),uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__38267){
var map__38268 = p__38267;
var map__38268__$1 = cljs.core.__destructure_map(map__38268);
var old_m = map__38268__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38268__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38268__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38268__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_(old_any,uid)) && ((!(cljs.core.contains_QMARK_(new_any,uid)))))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
}));
return newly_disconnected_QMARK_;
});
var send_fn = (function() { 
var G__41397__delegate = function (user_id,ev,p__38275){
var vec__38277 = p__38275;
var map__38280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38277,(0),null);
var map__38280__$1 = cljs.core.__destructure_map(map__38280);
var opts = map__38280__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38280__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_41398 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("sente","nil-uid","sente/nil-uid",1458555084):user_id);
var __41399 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,550,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Server asked to send event to %s: %s",taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1(uid_41398),ev], null);
}),null)),null,(60),null);
var __41400__$1 = (cljs.core.truth_(uid_41398)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __41401__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_41402 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__41403 = (function (conn_type){
var temp__5804__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__38289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_41398);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38289,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38289,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_41402)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_41398),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_41398));
} else {
return taoensso.encore.swapped(m,null);
}
}));
if(cljs.core.truth_(temp__5804__auto__)){
var pulled = temp__5804__auto__;
var vec__38297 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38297,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38297,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),578,23,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"buffered-evs","buffered-evs",42083054,null),buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),579,23,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol(null,"ev-uuids","ev-uuids",1824628525,null),ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
var G__38303 = conn_type;
var G__38304 = conns_;
var G__38305 = uid_41398;
var G__38306 = buffered_evs_ppstr;
var G__38308 = cljs.core.count(buffered_evs);
return (taoensso.sente.send_buffered_server_evs_GT_clients_BANG_.cljs$core$IFn$_invoke$arity$5 ? taoensso.sente.send_buffered_server_evs_GT_clients_BANG_.cljs$core$IFn$_invoke$arity$5(G__38303,G__38304,G__38305,G__38306,G__38308) : taoensso.sente.send_buffered_server_evs_GT_clients_BANG_.call(null,G__38303,G__38304,G__38305,G__38306,G__38308));
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente",null,587,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Server asked to close chsk for %s",taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1(uid_41398)], null);
}),null)),null,(61),null);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__41403(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__41403(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__38313_41411 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_41398], null))));
var chunk__38314_41412 = null;
var count__38315_41413 = (0);
var i__38316_41414 = (0);
while(true){
if((i__38316_41414 < count__38315_41413)){
var vec__38331_41416 = chunk__38314_41412.cljs$core$IIndexed$_nth$arity$2(null,i__38316_41414);
var _QMARK_sch_41417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38331_41416,(0),null);
var _udt_41418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38331_41416,(1),null);
var temp__5804__auto___41419 = _QMARK_sch_41417;
if(cljs.core.truth_(temp__5804__auto___41419)){
var sch_41420 = temp__5804__auto___41419;
taoensso.sente.interfaces.sch_close_BANG_(sch_41420);
} else {
}


var G__41421 = seq__38313_41411;
var G__41422 = chunk__38314_41412;
var G__41423 = count__38315_41413;
var G__41424 = (i__38316_41414 + (1));
seq__38313_41411 = G__41421;
chunk__38314_41412 = G__41422;
count__38315_41413 = G__41423;
i__38316_41414 = G__41424;
continue;
} else {
var temp__5804__auto___41425 = cljs.core.seq(seq__38313_41411);
if(temp__5804__auto___41425){
var seq__38313_41426__$1 = temp__5804__auto___41425;
if(cljs.core.chunked_seq_QMARK_(seq__38313_41426__$1)){
var c__5568__auto___41427 = cljs.core.chunk_first(seq__38313_41426__$1);
var G__41428 = cljs.core.chunk_rest(seq__38313_41426__$1);
var G__41429 = c__5568__auto___41427;
var G__41430 = cljs.core.count(c__5568__auto___41427);
var G__41431 = (0);
seq__38313_41411 = G__41428;
chunk__38314_41412 = G__41429;
count__38315_41413 = G__41430;
i__38316_41414 = G__41431;
continue;
} else {
var vec__38339_41432 = cljs.core.first(seq__38313_41426__$1);
var _QMARK_sch_41433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38339_41432,(0),null);
var _udt_41434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38339_41432,(1),null);
var temp__5804__auto___41435__$1 = _QMARK_sch_41433;
if(cljs.core.truth_(temp__5804__auto___41435__$1)){
var sch_41436 = temp__5804__auto___41435__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_41436);
} else {
}


var G__41437 = cljs.core.next(seq__38313_41426__$1);
var G__41438 = null;
var G__41439 = (0);
var G__41440 = (0);
seq__38313_41411 = G__41437;
chunk__38314_41412 = G__41438;
count__38315_41413 = G__41439;
i__38316_41414 = G__41440;
continue;
}
} else {
}
}
break;
}

var seq__38346_41441 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_41398], null))));
var chunk__38347_41442 = null;
var count__38348_41443 = (0);
var i__38349_41444 = (0);
while(true){
if((i__38349_41444 < count__38348_41443)){
var vec__38366_41445 = chunk__38347_41442.cljs$core$IIndexed$_nth$arity$2(null,i__38349_41444);
var _QMARK_sch_41446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38366_41445,(0),null);
var _udt_41447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38366_41445,(1),null);
var temp__5804__auto___41449 = _QMARK_sch_41446;
if(cljs.core.truth_(temp__5804__auto___41449)){
var sch_41450 = temp__5804__auto___41449;
taoensso.sente.interfaces.sch_close_BANG_(sch_41450);
} else {
}


var G__41451 = seq__38346_41441;
var G__41452 = chunk__38347_41442;
var G__41453 = count__38348_41443;
var G__41454 = (i__38349_41444 + (1));
seq__38346_41441 = G__41451;
chunk__38347_41442 = G__41452;
count__38348_41443 = G__41453;
i__38349_41444 = G__41454;
continue;
} else {
var temp__5804__auto___41455 = cljs.core.seq(seq__38346_41441);
if(temp__5804__auto___41455){
var seq__38346_41456__$1 = temp__5804__auto___41455;
if(cljs.core.chunked_seq_QMARK_(seq__38346_41456__$1)){
var c__5568__auto___41457 = cljs.core.chunk_first(seq__38346_41456__$1);
var G__41458 = cljs.core.chunk_rest(seq__38346_41456__$1);
var G__41459 = c__5568__auto___41457;
var G__41460 = cljs.core.count(c__5568__auto___41457);
var G__41461 = (0);
seq__38346_41441 = G__41458;
chunk__38347_41442 = G__41459;
count__38348_41443 = G__41460;
i__38349_41444 = G__41461;
continue;
} else {
var vec__38374_41462 = cljs.core.first(seq__38346_41456__$1);
var _QMARK_sch_41463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38374_41462,(0),null);
var _udt_41464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38374_41462,(1),null);
var temp__5804__auto___41467__$1 = _QMARK_sch_41463;
if(cljs.core.truth_(temp__5804__auto___41467__$1)){
var sch_41468 = temp__5804__auto___41467__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_41468);
} else {
}


var G__41469 = cljs.core.next(seq__38346_41456__$1);
var G__41470 = null;
var G__41471 = (0);
var G__41472 = (0);
seq__38346_41441 = G__41469;
chunk__38347_41442 = G__41470;
count__38348_41443 = G__41471;
i__38349_41444 = G__41472;
continue;
}
} else {
}
}
break;
}
} else {
var seq__38380_41473 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__38381_41474 = null;
var count__38382_41475 = (0);
var i__38383_41476 = (0);
while(true){
if((i__38383_41476 < count__38382_41475)){
var conn_type_41478 = chunk__38381_41474.cljs$core$IIndexed$_nth$arity$2(null,i__38383_41476);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_41478,uid_41398], null),((function (seq__38380_41473,chunk__38381_41474,count__38382_41475,i__38383_41476,conn_type_41478,uid_41398,__41399,__41400__$1,__41401__$2,ev_uuid_41402,flush_buffer_BANG__41403,vec__38277,map__38280,map__38280__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,connect_uid_BANG__QMARK_,maybe_disconnect_uid_BANG__QMARK_,vec__38188,map__38191,map__38191__$1,ws_ping_timeout_ms,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,ms_allow_reconnect_before_close_ws,csrf_token_fn,packer,ms_allow_reconnect_before_close_ajax,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_41402])], null);
} else {
var vec__38405 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38405,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38405,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_41402)], null);
}
});})(seq__38380_41473,chunk__38381_41474,count__38382_41475,i__38383_41476,conn_type_41478,uid_41398,__41399,__41400__$1,__41401__$2,ev_uuid_41402,flush_buffer_BANG__41403,vec__38277,map__38280,map__38280__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,connect_uid_BANG__QMARK_,maybe_disconnect_uid_BANG__QMARK_,vec__38188,map__38191,map__38191__$1,ws_ping_timeout_ms,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,ms_allow_reconnect_before_close_ws,csrf_token_fn,packer,ms_allow_reconnect_before_close_ajax,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__41483 = seq__38380_41473;
var G__41484 = chunk__38381_41474;
var G__41485 = count__38382_41475;
var G__41486 = (i__38383_41476 + (1));
seq__38380_41473 = G__41483;
chunk__38381_41474 = G__41484;
count__38382_41475 = G__41485;
i__38383_41476 = G__41486;
continue;
} else {
var temp__5804__auto___41487 = cljs.core.seq(seq__38380_41473);
if(temp__5804__auto___41487){
var seq__38380_41488__$1 = temp__5804__auto___41487;
if(cljs.core.chunked_seq_QMARK_(seq__38380_41488__$1)){
var c__5568__auto___41489 = cljs.core.chunk_first(seq__38380_41488__$1);
var G__41490 = cljs.core.chunk_rest(seq__38380_41488__$1);
var G__41491 = c__5568__auto___41489;
var G__41492 = cljs.core.count(c__5568__auto___41489);
var G__41493 = (0);
seq__38380_41473 = G__41490;
chunk__38381_41474 = G__41491;
count__38382_41475 = G__41492;
i__38383_41476 = G__41493;
continue;
} else {
var conn_type_41494 = cljs.core.first(seq__38380_41488__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_41494,uid_41398], null),((function (seq__38380_41473,chunk__38381_41474,count__38382_41475,i__38383_41476,conn_type_41494,seq__38380_41488__$1,temp__5804__auto___41487,uid_41398,__41399,__41400__$1,__41401__$2,ev_uuid_41402,flush_buffer_BANG__41403,vec__38277,map__38280,map__38280__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,connect_uid_BANG__QMARK_,maybe_disconnect_uid_BANG__QMARK_,vec__38188,map__38191,map__38191__$1,ws_ping_timeout_ms,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,ms_allow_reconnect_before_close_ws,csrf_token_fn,packer,ms_allow_reconnect_before_close_ajax,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_41402])], null);
} else {
var vec__38411 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38411,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38411,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_41402)], null);
}
});})(seq__38380_41473,chunk__38381_41474,count__38382_41475,i__38383_41476,conn_type_41494,seq__38380_41488__$1,temp__5804__auto___41487,uid_41398,__41399,__41400__$1,__41401__$2,ev_uuid_41402,flush_buffer_BANG__41403,vec__38277,map__38280,map__38280__$1,opts,flush_QMARK_,allowed_origins__$1,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,connect_uid_BANG__QMARK_,maybe_disconnect_uid_BANG__QMARK_,vec__38188,map__38191,map__38191__$1,ws_ping_timeout_ms,ws_kalive_ms,_QMARK_unauthorized_fn,send_buf_ms_ws,allowed_origins,lp_timeout_ms,ms_allow_reconnect_before_close_ws,csrf_token_fn,packer,ms_allow_reconnect_before_close_ajax,unauthorized_fn,send_buf_ms_ajax,bad_origin_fn,handshake_data_fn,user_id_fn,recv_buf_or_n,authorized_QMARK__fn,bad_csrf_fn))
);


var G__41500 = cljs.core.next(seq__38380_41488__$1);
var G__41501 = null;
var G__41502 = (0);
var G__41503 = (0);
seq__38380_41473 = G__41500;
chunk__38381_41474 = G__41501;
count__38382_41475 = G__41502;
i__38383_41476 = G__41503;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__41403(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__41403(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_41508 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_41509 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__28093__auto___41510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_38422){
var state_val_38423 = (state_38422[(1)]);
if((state_val_38423 === (1))){
var state_38422__$1 = state_38422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38422__$1,(2),ws_timeout_41508);
} else {
if((state_val_38423 === (2))){
var inst_38419 = (state_38422[(2)]);
var inst_38420 = flush_buffer_BANG__41403(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_38422__$1 = (function (){var statearr_38429 = state_38422;
(statearr_38429[(7)] = inst_38419);

return statearr_38429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38422__$1,inst_38420);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__27280__auto__ = null;
var taoensso$sente$state_machine__27280__auto____0 = (function (){
var statearr_38431 = [null,null,null,null,null,null,null,null];
(statearr_38431[(0)] = taoensso$sente$state_machine__27280__auto__);

(statearr_38431[(1)] = (1));

return statearr_38431;
});
var taoensso$sente$state_machine__27280__auto____1 = (function (state_38422){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_38422);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e38434){var ex__27283__auto__ = e38434;
var statearr_38435_41515 = state_38422;
(statearr_38435_41515[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_38422[(4)]))){
var statearr_38438_41516 = state_38422;
(statearr_38438_41516[(1)] = cljs.core.first((state_38422[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41519 = state_38422;
state_38422 = G__41519;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
taoensso$sente$state_machine__27280__auto__ = function(state_38422){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__27280__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__27280__auto____1.call(this,state_38422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__27280__auto____0;
taoensso$sente$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__27280__auto____1;
return taoensso$sente$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_38439 = f__28094__auto__();
(statearr_38439[(6)] = c__28093__auto___41510);

return statearr_38439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));


var c__28093__auto___41523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_38447){
var state_val_38448 = (state_38447[(1)]);
if((state_val_38448 === (1))){
var state_38447__$1 = state_38447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38447__$1,(2),ajax_timeout_41509);
} else {
if((state_val_38448 === (2))){
var inst_38443 = (state_38447[(2)]);
var inst_38445 = flush_buffer_BANG__41403(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_38447__$1 = (function (){var statearr_38451 = state_38447;
(statearr_38451[(7)] = inst_38443);

return statearr_38451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38447__$1,inst_38445);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__27280__auto__ = null;
var taoensso$sente$state_machine__27280__auto____0 = (function (){
var statearr_38453 = [null,null,null,null,null,null,null,null];
(statearr_38453[(0)] = taoensso$sente$state_machine__27280__auto__);

(statearr_38453[(1)] = (1));

return statearr_38453;
});
var taoensso$sente$state_machine__27280__auto____1 = (function (state_38447){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_38447);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e38456){var ex__27283__auto__ = e38456;
var statearr_38457_41537 = state_38447;
(statearr_38457_41537[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_38447[(4)]))){
var statearr_38460_41538 = state_38447;
(statearr_38460_41538[(1)] = cljs.core.first((state_38447[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41539 = state_38447;
state_38447 = G__41539;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
taoensso$sente$state_machine__27280__auto__ = function(state_38447){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__27280__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__27280__auto____1.call(this,state_38447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__27280__auto____0;
taoensso$sente$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__27280__auto____1;
return taoensso$sente$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_38462 = f__28094__auto__();
(statearr_38462[(6)] = c__28093__auto___41523);

return statearr_38462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

}
}

return null;
};
var G__41397 = function (user_id,ev,var_args){
var p__38275 = null;
if (arguments.length > 2) {
var G__41542__i = 0, G__41542__a = new Array(arguments.length -  2);
while (G__41542__i < G__41542__a.length) {G__41542__a[G__41542__i] = arguments[G__41542__i + 2]; ++G__41542__i;}
  p__38275 = new cljs.core.IndexedSeq(G__41542__a,0,null);
} 
return G__41397__delegate.call(this,user_id,ev,p__38275);};
G__41397.cljs$lang$maxFixedArity = 2;
G__41397.cljs$lang$applyTo = (function (arglist__41543){
var user_id = cljs.core.first(arglist__41543);
arglist__41543 = cljs.core.next(arglist__41543);
var ev = cljs.core.first(arglist__41543);
var p__38275 = cljs.core.rest(arglist__41543);
return G__41397__delegate(user_id,ev,p__38275);
});
G__41397.cljs$core$IFn$_invoke$arity$variadic = G__41397__delegate;
return G__41397;
})()
;
var bad_csrf_QMARK_ = (function (ring_req){
if((csrf_token_fn == null)){
return false;
} else {
var temp__5802__auto__ = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
if(cljs.core.truth_(temp__5802__auto__)){
var reference_csrf_token = temp__5802__auto__;
var csrf_token_from_client = (function (){var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-csrf-token"], null));
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-xsrf-token"], null));
}
}
})();
return cljs.core.not(taoensso.encore.const_str_EQ_(reference_csrf_token,csrf_token_from_client));
} else {
return true;
}
}
});
var unauthorized_QMARK_ = (function (ring_req){
if((authorized_QMARK__fn == null)){
return false;
} else {
return cljs.core.not((authorized_QMARK__fn.cljs$core$IFn$_invoke$arity$1 ? authorized_QMARK__fn.cljs$core$IFn$_invoke$arity$1(ring_req) : authorized_QMARK__fn.call(null,ring_req)));
}
});
var possible_rejection_resp = (function (ring_req){
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
if(taoensso.sente.allow_origin_QMARK_(allowed_origins__$1,ring_req)){
if(unauthorized_QMARK_(ring_req)){
return (unauthorized_fn.cljs$core$IFn$_invoke$arity$1 ? unauthorized_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : unauthorized_fn.call(null,ring_req));
} else {
var b2__28356__auto__ = (function (){var temp__5804__auto__ = _QMARK_unauthorized_fn;
if(cljs.core.truth_(temp__5804__auto__)){
var uf = temp__5804__auto__;
return (uf.cljs$core$IFn$_invoke$arity$1 ? uf.cljs$core$IFn$_invoke$arity$1(ring_req) : uf.call(null,ring_req));
} else {
return null;
}
})();
if((b2__28356__auto__ == null)){
return null;
} else {
var unauthorized_resp = b2__28356__auto__;
return unauthorized_resp;
}
}
} else {
return (bad_origin_fn.cljs$core$IFn$_invoke$arity$1 ? bad_origin_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_origin_fn.call(null,ring_req));
}
}
});
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"send-buffers","send-buffers",-1788003787),send_buffers_], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids_","connected-uids_",344311359),connected_uids_,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conns_","conns_",726827576),conns_,new cljs.core.Keyword(null,"send-buffers_","send-buffers_",1447919847),send_buffers_], null),new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),(function() {
var taoensso$sente$ring_handler = null;
var taoensso$sente$ring_handler__1 = (function (ring_req){
return taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$3(ring_req,null,null);
});
var taoensso$sente$ring_handler__3 = (function (ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn){
var b2__28336__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__28336__auto__)){
var resp = b2__28336__auto__;
return resp;
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ring-async-resp-fn","ring-async-resp-fn",-689911654),_QMARK_ring_async_resp_fn,new cljs.core.Keyword(null,"ring-async-raise-fn","ring-async-raise-fn",744112799),_QMARK_ring_async_raise_fn,new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__38477 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38477,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38477,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,712,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ajax/on-open] Server will reply to message from %s: %s",taoensso.sente.lid.cljs$core$IFn$_invoke$arity$2(user_id_fn__$1(ring_req,client_id),client_id),resp_clj], null);
}),null)),null,(62),null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1(ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5804__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5804__auto__)){
var ms = temp__5804__auto__;
var c__28093__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_38491){
var state_val_38493 = (state_38491[(1)]);
if((state_val_38493 === (1))){
var inst_38486 = cljs.core.async.timeout(ms);
var state_38491__$1 = state_38491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38491__$1,(2),inst_38486);
} else {
if((state_val_38493 === (2))){
var inst_38488 = (state_38491[(2)]);
var inst_38489 = reply_fn(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_38491__$1 = (function (){var statearr_38498 = state_38491;
(statearr_38498[(7)] = inst_38488);

return statearr_38498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38491__$1,inst_38489);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$ring_handler_$_state_machine__27280__auto__ = null;
var taoensso$sente$ring_handler_$_state_machine__27280__auto____0 = (function (){
var statearr_38501 = [null,null,null,null,null,null,null,null];
(statearr_38501[(0)] = taoensso$sente$ring_handler_$_state_machine__27280__auto__);

(statearr_38501[(1)] = (1));

return statearr_38501;
});
var taoensso$sente$ring_handler_$_state_machine__27280__auto____1 = (function (state_38491){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_38491);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e38504){var ex__27283__auto__ = e38504;
var statearr_38505_41593 = state_38491;
(statearr_38505_41593[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_38491[(4)]))){
var statearr_38506_41596 = state_38491;
(statearr_38506_41596[(1)] = cljs.core.first((state_38491[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41598 = state_38491;
state_38491 = G__41598;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
taoensso$sente$ring_handler_$_state_machine__27280__auto__ = function(state_38491){
switch(arguments.length){
case 0:
return taoensso$sente$ring_handler_$_state_machine__27280__auto____0.call(this);
case 1:
return taoensso$sente$ring_handler_$_state_machine__27280__auto____1.call(this,state_38491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$ring_handler_$_state_machine__27280__auto____0;
taoensso$sente$ring_handler_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_state_machine__27280__auto____1;
return taoensso$sente$ring_handler_$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_38510 = f__28094__auto__();
(statearr_38510[(6)] = c__28093__auto__);

return statearr_38510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

return c__28093__auto__;
} else {
return null;
}
} else {
return reply_fn(new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
})], null));
}
});
taoensso$sente$ring_handler = function(ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn){
switch(arguments.length){
case 1:
return taoensso$sente$ring_handler__1.call(this,ring_req);
case 3:
return taoensso$sente$ring_handler__3.call(this,ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler__1;
taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$3 = taoensso$sente$ring_handler__3;
return taoensso$sente$ring_handler;
})()
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),(function() {
var taoensso$sente$ring_handler = null;
var taoensso$sente$ring_handler__1 = (function (ring_req){
return taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$3(ring_req,null,null);
});
var taoensso$sente$ring_handler__3 = (function (ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn){
var conn_id = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1(ring_req,client_id);
var lid_STAR_ = taoensso.sente.lid.cljs$core$IFn$_invoke$arity$3(uid,client_id,conn_id);
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,752,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": ",lid_STAR_].join('')], null);
}),null)),null,(63),null);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"lid","lid",1029596625),lid_STAR_], null));
} else {
var b2__28336__auto__ = possible_rejection_resp(ring_req);
if(cljs.core.truth_(b2__28336__auto__)){
var resp = b2__28336__auto__;
return resp;
} else {
var receive_event_msg_BANG_ = (function() {
var taoensso$sente$ring_handler_$_self = null;
var taoensso$sente$ring_handler_$_self__1 = (function (event){
return taoensso$sente$ring_handler_$_self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$ring_handler_$_self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], 0)));
});
taoensso$sente$ring_handler_$_self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$ring_handler_$_self__1.call(this,event);
case 2:
return taoensso$sente$ring_handler_$_self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_self__1;
taoensso$sente$ring_handler_$_self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$ring_handler_$_self__2;
return taoensso$sente$ring_handler_$_self;
})()
;
var send_handshake_BANG__QMARK_ = (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente",null,772,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Server will send %s handshake to %s",(cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549)),lid_STAR_], null);
}),null)),null,(64),null);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});
var on_error = (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,784,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s Server sch error for %s: %s",(cljs.core.truth_(websocket_QMARK_)?"[ws/on-error]":"[ajax/on-error]"),lid_STAR_,error], null);
}),null)),null,(65),null);
});
var on_msg = (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),(function (p__38533){
var vec__38534 = p__38533;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38534,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38534,(1),null);
var conn_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38534,(2),null);
if(cljs.core.truth_(conn_id__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,taoensso.encore.now_udt(),conn_id__$1], null);
} else {
return null;
}
}));

var vec__38538 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38538,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38538,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-pong","chsk/ws-pong",-86402347)], null))){
return receive_event_msg_BANG_(clj,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null))){
var temp__5804__auto___41629 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___41629)){
var cb_uuid_41630 = temp__5804__auto___41629;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,803,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-msg] Server will auto-reply to ping from %s",lid_STAR_], null);
}),null)),null,(66),null);

taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,"pong",cb_uuid_41630));
} else {
}

return receive_event_msg_BANG_(clj,null);
} else {
return receive_event_msg_BANG_(clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$ring_handler_$_reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,813,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-msg] Server will reply to message from %s: %s",lid_STAR_,resp_clj], null);
}),null)),null,(67),null);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));

}
}
});
var on_close = (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var log_prefix = (cljs.core.truth_(websocket_QMARK_)?"[ws/on-close]":"[ajax/on-close]");
var active_conn_closed_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (p__38555){
var vec__38556 = p__38555;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38556,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38556,(1),null);
var conn_id_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38556,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,conn_id_STAR_)){
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,taoensso.encore.now_udt(),conn_id], null),true);
} else {
return taoensso.encore.swapped(new cljs.core.Keyword("swap","abort","swap/abort",508048993),false);
}
}));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,835,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s %s server sch closed for %s",log_prefix,(cljs.core.truth_(active_conn_closed_QMARK_)?"Active":"Inactive"),lid_STAR_], null);
}),null)),null,(68),null);

if(cljs.core.truth_(active_conn_closed_QMARK_)){
var c__28093__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_38623){
var state_val_38624 = (state_38623[(1)]);
if((state_val_38624 === (7))){
var state_38623__$1 = state_38623;
if(cljs.core.truth_(websocket_QMARK_)){
var statearr_38630_41643 = state_38623__$1;
(statearr_38630_41643[(1)] = (9));

} else {
var statearr_38631_41645 = state_38623__$1;
(statearr_38631_41645[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (1))){
var state_38623__$1 = state_38623;
if(cljs.core.truth_(websocket_QMARK_)){
var statearr_38634_41647 = state_38623__$1;
(statearr_38634_41647[(1)] = (2));

} else {
var statearr_38635_41648 = state_38623__$1;
(statearr_38635_41648[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (4))){
var inst_38567 = (state_38623[(2)]);
var inst_38568 = cljs.core.async.timeout(inst_38567);
var state_38623__$1 = state_38623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38623__$1,(5),inst_38568);
} else {
if((state_val_38624 === (15))){
var inst_38580 = (state_38623[(7)]);
var inst_38581 = (state_38623[(8)]);
var inst_38583 = (state_38623[(9)]);
var inst_38607 = (function (){var vec__38571 = inst_38580;
var active_conn_disconnected_QMARK_ = inst_38581;
var _QMARK_conn_entry = inst_38583;
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s uid port close for %s",log_prefix,lid_STAR_], null);
});
})();
var inst_38608 = (new cljs.core.Delay(inst_38607,null));
var inst_38609 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente",null,873,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_38608,null,(70),null);
var inst_38610 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38611 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_38612 = (new cljs.core.PersistentVector(null,2,(5),inst_38610,inst_38611,null));
var inst_38613 = receive_event_msg_BANG_(inst_38612);
var state_38623__$1 = (function (){var statearr_38641 = state_38623;
(statearr_38641[(10)] = inst_38609);

return statearr_38641;
})();
var statearr_38642_41660 = state_38623__$1;
(statearr_38642_41660[(2)] = inst_38613);

(statearr_38642_41660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (13))){
var state_38623__$1 = state_38623;
var statearr_38644_41662 = state_38623__$1;
(statearr_38644_41662[(2)] = null);

(statearr_38644_41662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (6))){
var state_38623__$1 = state_38623;
var statearr_38647_41663 = state_38623__$1;
(statearr_38647_41663[(2)] = new cljs.core.Keyword(null,"info","info",-317069002));

(statearr_38647_41663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (17))){
var inst_38616 = (state_38623[(2)]);
var state_38623__$1 = state_38623;
var statearr_38650_41664 = state_38623__$1;
(statearr_38650_41664[(2)] = inst_38616);

(statearr_38650_41664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (3))){
var state_38623__$1 = state_38623;
var statearr_38652_41665 = state_38623__$1;
(statearr_38652_41665[(2)] = ms_allow_reconnect_before_close_ajax);

(statearr_38652_41665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (12))){
var inst_38580 = (state_38623[(7)]);
var inst_38581 = (state_38623[(8)]);
var inst_38583 = (state_38623[(9)]);
var inst_38599 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38600 = [conn_type,uid];
var inst_38601 = (new cljs.core.PersistentVector(null,2,(5),inst_38599,inst_38600,null));
var inst_38602 = (function (){var vec__38571 = inst_38580;
var active_conn_disconnected_QMARK_ = inst_38581;
var _QMARK_conn_entry = inst_38583;
return (function (m_clients){
if(cljs.core.empty_QMARK_(m_clients)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new cljs.core.Keyword("swap","abort","swap/abort",508048993);
}
});
})();
var inst_38603 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_38601,inst_38602);
var inst_38604 = maybe_disconnect_uid_BANG__QMARK_(uid);
var state_38623__$1 = (function (){var statearr_38657 = state_38623;
(statearr_38657[(11)] = inst_38603);

return statearr_38657;
})();
if(cljs.core.truth_(inst_38604)){
var statearr_38659_41672 = state_38623__$1;
(statearr_38659_41672[(1)] = (15));

} else {
var statearr_38660_41673 = state_38623__$1;
(statearr_38660_41673[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (2))){
var state_38623__$1 = state_38623;
var statearr_38663_41674 = state_38623__$1;
(statearr_38663_41674[(2)] = ms_allow_reconnect_before_close_ws);

(statearr_38663_41674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (11))){
var inst_38590 = (state_38623[(2)]);
var state_38623__$1 = state_38623;
var statearr_38666_41677 = state_38623__$1;
(statearr_38666_41677[(2)] = inst_38590);

(statearr_38666_41677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (9))){
var state_38623__$1 = state_38623;
var statearr_38667_41679 = state_38623__$1;
(statearr_38667_41679[(2)] = new cljs.core.Keyword(null,"debug","debug",-1608172596));

(statearr_38667_41679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (5))){
var inst_38580 = (state_38623[(7)]);
var inst_38581 = (state_38623[(8)]);
var inst_38570 = (state_38623[(2)]);
var inst_38574 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38576 = [conn_type,uid,client_id];
var inst_38577 = (new cljs.core.PersistentVector(null,3,(5),inst_38574,inst_38576,null));
var inst_38579 = (function (){return (function (p__38578){
var vec__38673 = p__38578;
var __QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38673,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38673,(1),null);
var conn_id_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38673,(2),null);
var _QMARK_conn_entry = vec__38673;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,conn_id_STAR_)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,_QMARK_conn_entry], null));
} else {
return taoensso.encore.swapped(new cljs.core.Keyword("swap","abort","swap/abort",508048993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,_QMARK_conn_entry], null));
}
});
})();
var inst_38580__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_38577,inst_38579);
var inst_38581__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38580__$1,(0),null);
var inst_38583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38580__$1,(1),null);
var state_38623__$1 = (function (){var statearr_38677 = state_38623;
(statearr_38677[(12)] = inst_38570);

(statearr_38677[(7)] = inst_38580__$1);

(statearr_38677[(8)] = inst_38581__$1);

(statearr_38677[(9)] = inst_38583);

return statearr_38677;
})();
if(cljs.core.truth_(inst_38581__$1)){
var statearr_38680_41690 = state_38623__$1;
(statearr_38680_41690[(1)] = (6));

} else {
var statearr_38683_41691 = state_38623__$1;
(statearr_38683_41691[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (14))){
var inst_38619 = (state_38623[(2)]);
var state_38623__$1 = state_38623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38623__$1,inst_38619);
} else {
if((state_val_38624 === (16))){
var state_38623__$1 = state_38623;
var statearr_38685_41692 = state_38623__$1;
(statearr_38685_41692[(2)] = null);

(statearr_38685_41692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (10))){
var state_38623__$1 = state_38623;
var statearr_38686_41693 = state_38623__$1;
(statearr_38686_41693[(2)] = new cljs.core.Keyword(null,"trace","trace",-1082747415));

(statearr_38686_41693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38624 === (8))){
var inst_38580 = (state_38623[(7)]);
var inst_38581 = (state_38623[(8)]);
var inst_38583 = (state_38623[(9)]);
var inst_38592 = (state_38623[(2)]);
var inst_38595 = (function (){var vec__38571 = inst_38580;
var active_conn_disconnected_QMARK_ = inst_38581;
var _QMARK_conn_entry = inst_38583;
var level = inst_38592;
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s Server sch on-close timeout for %s: %s",log_prefix,lid_STAR_,(cljs.core.truth_(active_conn_disconnected_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disconnected?","disconnected?",-1423051714),true], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disconnected?","disconnected?",-1423051714),false,new cljs.core.Keyword(null,"?conn-entry","?conn-entry",-1522399252),_QMARK_conn_entry], null))], null);
});
})();
var inst_38596 = (new cljs.core.Delay(inst_38595,null));
var inst_38597 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,inst_38592,"taoensso.sente",null,857,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_38596,null,(69),null);
var state_38623__$1 = (function (){var statearr_38692 = state_38623;
(statearr_38692[(13)] = inst_38597);

return statearr_38692;
})();
if(cljs.core.truth_(inst_38581)){
var statearr_38693_41696 = state_38623__$1;
(statearr_38693_41696[(1)] = (12));

} else {
var statearr_38694_41698 = state_38623__$1;
(statearr_38694_41698[(1)] = (13));

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
});
return (function() {
var taoensso$sente$ring_handler_$_state_machine__27280__auto__ = null;
var taoensso$sente$ring_handler_$_state_machine__27280__auto____0 = (function (){
var statearr_38699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38699[(0)] = taoensso$sente$ring_handler_$_state_machine__27280__auto__);

(statearr_38699[(1)] = (1));

return statearr_38699;
});
var taoensso$sente$ring_handler_$_state_machine__27280__auto____1 = (function (state_38623){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_38623);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e38701){var ex__27283__auto__ = e38701;
var statearr_38702_41700 = state_38623;
(statearr_38702_41700[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_38623[(4)]))){
var statearr_38705_41701 = state_38623;
(statearr_38705_41701[(1)] = cljs.core.first((state_38623[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41702 = state_38623;
state_38623 = G__41702;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
taoensso$sente$ring_handler_$_state_machine__27280__auto__ = function(state_38623){
switch(arguments.length){
case 0:
return taoensso$sente$ring_handler_$_state_machine__27280__auto____0.call(this);
case 1:
return taoensso$sente$ring_handler_$_state_machine__27280__auto____1.call(this,state_38623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$ring_handler_$_state_machine__27280__auto____0;
taoensso$sente$ring_handler_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_state_machine__27280__auto____1;
return taoensso$sente$ring_handler_$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_38708 = f__28094__auto__();
(statearr_38708[(6)] = c__28093__auto__);

return statearr_38708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

return c__28093__auto__;
} else {
return null;
}
});
var on_open = (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente",null,882,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] New server WebSocket sch for %s",lid_STAR_], null);
}),null)),null,(71),null);

if(cljs.core.truth_(send_handshake_BANG__QMARK_(server_ch,websocket_QMARK_))){
var vec__38714 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt(),conn_id], null);
}));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38714,(0),null);
var udt_open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38714,(1),null);
if(cljs.core.truth_(ws_kalive_ms)){
var c__28093__auto___41703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_38855){
var state_val_38856 = (state_38855[(1)]);
if((state_val_38856 === (7))){
var inst_38826 = (state_38855[(7)]);
var inst_38827 = (state_38855[(8)]);
var inst_38825 = (state_38855[(2)]);
var inst_38826__$1 = cljs.core.__destructure_map(inst_38825);
var inst_38827__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38826__$1,new cljs.core.Keyword(null,"recur?","recur?",774198931));
var inst_38828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38826__$1,new cljs.core.Keyword(null,"udt","udt",2011712751));
var inst_38829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38826__$1,new cljs.core.Keyword(null,"ms-timeout","ms-timeout",738937116));
var inst_38830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38826__$1,new cljs.core.Keyword(null,"expecting-pong?","expecting-pong?",-1330866481));
var inst_38833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38826__$1,new cljs.core.Keyword(null,"force-close?","force-close?",-1108906453));
var state_38855__$1 = (function (){var statearr_38863 = state_38855;
(statearr_38863[(7)] = inst_38826__$1);

(statearr_38863[(8)] = inst_38827__$1);

(statearr_38863[(9)] = inst_38828);

(statearr_38863[(10)] = inst_38829);

(statearr_38863[(11)] = inst_38830);

(statearr_38863[(12)] = inst_38833);

return statearr_38863;
})();
if(cljs.core.truth_(inst_38827__$1)){
var statearr_38864_41704 = state_38855__$1;
(statearr_38864_41704[(1)] = (29));

} else {
var statearr_38865_41705 = state_38855__$1;
(statearr_38865_41705[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (20))){
var inst_38789 = taoensso.sente.interfaces.sch_close_BANG_(server_ch);
var inst_38790 = [new cljs.core.Keyword(null,"recur?","recur?",774198931)];
var inst_38793 = [false];
var inst_38794 = cljs.core.PersistentHashMap.fromArrays(inst_38790,inst_38793);
var state_38855__$1 = (function (){var statearr_38870 = state_38855;
(statearr_38870[(13)] = inst_38789);

return statearr_38870;
})();
var statearr_38871_41706 = state_38855__$1;
(statearr_38871_41706[(2)] = inst_38794);

(statearr_38871_41706[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (27))){
var inst_38742 = (state_38855[(14)]);
var inst_38804 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"udt","udt",2011712751),new cljs.core.Keyword(null,"ms-timeout","ms-timeout",738937116),new cljs.core.Keyword(null,"expecting-pong?","expecting-pong?",-1330866481)];
var inst_38805 = [true,inst_38742,ws_kalive_ms,false];
var inst_38807 = cljs.core.PersistentHashMap.fromArrays(inst_38804,inst_38805);
var state_38855__$1 = state_38855;
var statearr_38873_41710 = state_38855__$1;
(statearr_38873_41710[(2)] = inst_38807);

(statearr_38873_41710[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (1))){
var inst_38720 = udt_open;
var inst_38721 = ws_kalive_ms;
var inst_38723 = inst_38720;
var inst_38725 = inst_38721;
var inst_38726 = false;
var state_38855__$1 = (function (){var statearr_38874 = state_38855;
(statearr_38874[(15)] = inst_38723);

(statearr_38874[(16)] = inst_38725);

(statearr_38874[(17)] = inst_38726);

return statearr_38874;
})();
var statearr_38875_41711 = state_38855__$1;
(statearr_38875_41711[(2)] = null);

(statearr_38875_41711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (24))){
var inst_38811 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"force-close?","force-close?",-1108906453)];
var inst_38812 = [false,true];
var inst_38813 = cljs.core.PersistentHashMap.fromArrays(inst_38811,inst_38812);
var state_38855__$1 = state_38855;
var statearr_38880_41712 = state_38855__$1;
(statearr_38880_41712[(2)] = inst_38813);

(statearr_38880_41712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (4))){
var inst_38740 = (state_38855[(18)]);
var inst_38730 = (state_38855[(2)]);
var inst_38735 = cljs.core.deref(conns_);
var inst_38736 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38738 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_38739 = (new cljs.core.PersistentVector(null,3,(5),inst_38736,inst_38738,null));
var inst_38740__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_38735,inst_38739);
var inst_38741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38740__$1,(0),null);
var inst_38742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38740__$1,(1),null);
var inst_38743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38740__$1,(2),null);
var inst_38744 = (inst_38740__$1 == null);
var state_38855__$1 = (function (){var statearr_38884 = state_38855;
(statearr_38884[(19)] = inst_38730);

(statearr_38884[(18)] = inst_38740__$1);

(statearr_38884[(20)] = inst_38741);

(statearr_38884[(14)] = inst_38742);

(statearr_38884[(21)] = inst_38743);

return statearr_38884;
})();
if(cljs.core.truth_(inst_38744)){
var statearr_38887_41713 = state_38855__$1;
(statearr_38887_41713[(1)] = (5));

} else {
var statearr_38888_41715 = state_38855__$1;
(statearr_38888_41715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (15))){
var inst_38723 = (state_38855[(15)]);
var inst_38742 = (state_38855[(14)]);
var inst_38777 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_38723,inst_38742);
var state_38855__$1 = state_38855;
if(inst_38777){
var statearr_38890_41720 = state_38855__$1;
(statearr_38890_41720[(1)] = (17));

} else {
var statearr_38891_41721 = state_38855__$1;
(statearr_38891_41721[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (21))){
var inst_38796 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_38797 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_38796);
var state_38855__$1 = state_38855;
if(cljs.core.truth_(inst_38797)){
var statearr_38896_41726 = state_38855__$1;
(statearr_38896_41726[(1)] = (23));

} else {
var statearr_38897_41727 = state_38855__$1;
(statearr_38897_41727[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (31))){
var inst_38849 = (state_38855[(2)]);
var state_38855__$1 = state_38855;
var statearr_38899_41728 = state_38855__$1;
(statearr_38899_41728[(2)] = inst_38849);

(statearr_38899_41728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (32))){
var inst_38740 = (state_38855[(18)]);
var inst_38829 = (state_38855[(10)]);
var inst_38741 = (state_38855[(20)]);
var inst_38833 = (state_38855[(12)]);
var inst_38742 = (state_38855[(14)]);
var inst_38826 = (state_38855[(7)]);
var inst_38743 = (state_38855[(21)]);
var inst_38830 = (state_38855[(11)]);
var inst_38828 = (state_38855[(9)]);
var inst_38827 = (state_38855[(8)]);
var inst_38723 = (state_38855[(15)]);
var inst_38841 = (function (){var vec__38731 = inst_38740;
var ms_timeout = inst_38829;
var _QMARK_sch = inst_38741;
var force_close_QMARK_ = inst_38833;
var udt_t1 = inst_38742;
var _QMARK_conn_entry = inst_38740;
var map__38734 = inst_38826;
var conn_id_STAR_ = inst_38743;
var expecting_pong_QMARK_ = inst_38830;
var udt = inst_38828;
var recur_QMARK_ = inst_38827;
var udt_t0 = inst_38723;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] Force close connection for %s",lid_STAR_], null);
});
})();
var inst_38842 = (new cljs.core.Delay(inst_38841,null));
var inst_38843 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,938,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_38842,null,(74),null);
var inst_38844 = on_close(server_ch,websocket_QMARK_,null);
var state_38855__$1 = (function (){var statearr_38905 = state_38855;
(statearr_38905[(22)] = inst_38843);

return statearr_38905;
})();
var statearr_38908_41734 = state_38855__$1;
(statearr_38908_41734[(2)] = inst_38844);

(statearr_38908_41734[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (33))){
var state_38855__$1 = state_38855;
var statearr_38911_41735 = state_38855__$1;
(statearr_38911_41735[(2)] = null);

(statearr_38911_41735[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (13))){
var inst_38770 = (state_38855[(2)]);
var state_38855__$1 = state_38855;
if(cljs.core.truth_(inst_38770)){
var statearr_38912_41741 = state_38855__$1;
(statearr_38912_41741[(1)] = (14));

} else {
var statearr_38913_41742 = state_38855__$1;
(statearr_38913_41742[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (22))){
var inst_38817 = (state_38855[(2)]);
var state_38855__$1 = state_38855;
var statearr_38914_41743 = state_38855__$1;
(statearr_38914_41743[(2)] = inst_38817);

(statearr_38914_41743[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (29))){
var inst_38828 = (state_38855[(9)]);
var inst_38829 = (state_38855[(10)]);
var inst_38830 = (state_38855[(11)]);
var inst_38723 = inst_38828;
var inst_38725 = inst_38829;
var inst_38726 = inst_38830;
var state_38855__$1 = (function (){var statearr_38916 = state_38855;
(statearr_38916[(15)] = inst_38723);

(statearr_38916[(16)] = inst_38725);

(statearr_38916[(17)] = inst_38726);

return statearr_38916;
})();
var statearr_38917_41753 = state_38855__$1;
(statearr_38917_41753[(2)] = null);

(statearr_38917_41753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (6))){
var inst_38743 = (state_38855[(21)]);
var inst_38755 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,inst_38743);
var state_38855__$1 = state_38855;
if(inst_38755){
var statearr_38922_41754 = state_38855__$1;
(statearr_38922_41754[(1)] = (8));

} else {
var statearr_38923_41755 = state_38855__$1;
(statearr_38923_41755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (28))){
var inst_38809 = (state_38855[(2)]);
var state_38855__$1 = state_38855;
var statearr_38925_41756 = state_38855__$1;
(statearr_38925_41756[(2)] = inst_38809);

(statearr_38925_41756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (25))){
var inst_38815 = (state_38855[(2)]);
var state_38855__$1 = state_38855;
var statearr_38928_41757 = state_38855__$1;
(statearr_38928_41757[(2)] = inst_38815);

(statearr_38928_41757[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (34))){
var inst_38847 = (state_38855[(2)]);
var state_38855__$1 = state_38855;
var statearr_38931_41758 = state_38855__$1;
(statearr_38931_41758[(2)] = inst_38847);

(statearr_38931_41758[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (17))){
var inst_38742 = (state_38855[(14)]);
var inst_38779 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"udt","udt",2011712751),new cljs.core.Keyword(null,"ms-timeout","ms-timeout",738937116),new cljs.core.Keyword(null,"expecting-pong?","expecting-pong?",-1330866481)];
var inst_38780 = [true,inst_38742,ws_kalive_ms,false];
var inst_38781 = cljs.core.PersistentHashMap.fromArrays(inst_38779,inst_38780);
var state_38855__$1 = state_38855;
var statearr_38933_41759 = state_38855__$1;
(statearr_38933_41759[(2)] = inst_38781);

(statearr_38933_41759[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (3))){
var inst_38851 = (state_38855[(2)]);
var state_38855__$1 = state_38855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38855__$1,inst_38851);
} else {
if((state_val_38856 === (12))){
var state_38855__$1 = state_38855;
var statearr_38938_41761 = state_38855__$1;
(statearr_38938_41761[(2)] = null);

(statearr_38938_41761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (2))){
var inst_38725 = (state_38855[(16)]);
var inst_38728 = cljs.core.async.timeout(inst_38725);
var state_38855__$1 = state_38855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38855__$1,(4),inst_38728);
} else {
if((state_val_38856 === (23))){
var state_38855__$1 = state_38855;
if(cljs.core.truth_(ws_ping_timeout_ms)){
var statearr_38940_41762 = state_38855__$1;
(statearr_38940_41762[(1)] = (26));

} else {
var statearr_38941_41763 = state_38855__$1;
(statearr_38941_41763[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (19))){
var inst_38819 = (state_38855[(2)]);
var state_38855__$1 = state_38855;
var statearr_38946_41766 = state_38855__$1;
(statearr_38946_41766[(2)] = inst_38819);

(statearr_38946_41766[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (11))){
var inst_38741 = (state_38855[(20)]);
var inst_38766 = taoensso.sente.interfaces.sch_open_QMARK_(inst_38741);
var inst_38767 = cljs.core.not(inst_38766);
var state_38855__$1 = state_38855;
var statearr_38947_41778 = state_38855__$1;
(statearr_38947_41778[(2)] = inst_38767);

(statearr_38947_41778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (9))){
var inst_38741 = (state_38855[(20)]);
var state_38855__$1 = state_38855;
if(cljs.core.truth_(inst_38741)){
var statearr_38949_41783 = state_38855__$1;
(statearr_38949_41783[(1)] = (11));

} else {
var statearr_38952_41784 = state_38855__$1;
(statearr_38952_41784[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (5))){
var inst_38751 = [new cljs.core.Keyword(null,"recur?","recur?",774198931)];
var inst_38752 = [false];
var inst_38753 = cljs.core.PersistentHashMap.fromArrays(inst_38751,inst_38752);
var state_38855__$1 = state_38855;
var statearr_38955_41792 = state_38855__$1;
(statearr_38955_41792[(2)] = inst_38753);

(statearr_38955_41792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (14))){
var inst_38772 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"force-close?","force-close?",-1108906453)];
var inst_38773 = [false,true];
var inst_38774 = cljs.core.PersistentHashMap.fromArrays(inst_38772,inst_38773);
var state_38855__$1 = state_38855;
var statearr_38957_41800 = state_38855__$1;
(statearr_38957_41800[(2)] = inst_38774);

(statearr_38957_41800[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (26))){
var inst_38742 = (state_38855[(14)]);
var inst_38800 = [new cljs.core.Keyword(null,"recur?","recur?",774198931),new cljs.core.Keyword(null,"udt","udt",2011712751),new cljs.core.Keyword(null,"ms-timeout","ms-timeout",738937116),new cljs.core.Keyword(null,"expecting-pong?","expecting-pong?",-1330866481)];
var inst_38801 = [true,inst_38742,ws_ping_timeout_ms,true];
var inst_38802 = cljs.core.PersistentHashMap.fromArrays(inst_38800,inst_38801);
var state_38855__$1 = state_38855;
var statearr_38962_41805 = state_38855__$1;
(statearr_38962_41805[(2)] = inst_38802);

(statearr_38962_41805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (16))){
var inst_38821 = (state_38855[(2)]);
var state_38855__$1 = state_38855;
var statearr_38963_41806 = state_38855__$1;
(statearr_38963_41806[(2)] = inst_38821);

(statearr_38963_41806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (30))){
var inst_38740 = (state_38855[(18)]);
var inst_38829 = (state_38855[(10)]);
var inst_38741 = (state_38855[(20)]);
var inst_38833 = (state_38855[(12)]);
var inst_38742 = (state_38855[(14)]);
var inst_38826 = (state_38855[(7)]);
var inst_38743 = (state_38855[(21)]);
var inst_38830 = (state_38855[(11)]);
var inst_38828 = (state_38855[(9)]);
var inst_38827 = (state_38855[(8)]);
var inst_38723 = (state_38855[(15)]);
var inst_38837 = (function (){var vec__38731 = inst_38740;
var ms_timeout = inst_38829;
var _QMARK_sch = inst_38741;
var force_close_QMARK_ = inst_38833;
var udt_t1 = inst_38742;
var _QMARK_conn_entry = inst_38740;
var map__38734 = inst_38826;
var conn_id_STAR_ = inst_38743;
var expecting_pong_QMARK_ = inst_38830;
var udt = inst_38828;
var recur_QMARK_ = inst_38827;
var udt_t0 = inst_38723;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] Ending kalive loop for %s",lid_STAR_], null);
});
})();
var inst_38838 = (new cljs.core.Delay(inst_38837,null));
var inst_38839 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,934,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_38838,null,(73),null);
var state_38855__$1 = (function (){var statearr_38970 = state_38855;
(statearr_38970[(23)] = inst_38839);

return statearr_38970;
})();
if(cljs.core.truth_(inst_38833)){
var statearr_38971_41807 = state_38855__$1;
(statearr_38971_41807[(1)] = (32));

} else {
var statearr_38973_41808 = state_38855__$1;
(statearr_38973_41808[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (10))){
var inst_38823 = (state_38855[(2)]);
var state_38855__$1 = state_38855;
var statearr_38977_41813 = state_38855__$1;
(statearr_38977_41813[(2)] = inst_38823);

(statearr_38977_41813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (18))){
var inst_38723 = (state_38855[(15)]);
var inst_38725 = (state_38855[(16)]);
var inst_38726 = (state_38855[(17)]);
var inst_38740 = (state_38855[(18)]);
var inst_38741 = (state_38855[(20)]);
var inst_38742 = (state_38855[(14)]);
var inst_38743 = (state_38855[(21)]);
var inst_38785 = (function (){var udt_t0 = inst_38723;
var ms_timeout = inst_38725;
var expecting_pong_QMARK_ = inst_38726;
var _QMARK_conn_entry = inst_38740;
var vec__38731 = inst_38740;
var _QMARK_sch = inst_38741;
var udt_t1 = inst_38742;
var conn_id_STAR_ = inst_38743;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] kalive loop inactivity for %s",lid_STAR_], null);
});
})();
var inst_38786 = (new cljs.core.Delay(inst_38785,null));
var inst_38787 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,908,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_38786,null,(72),null);
var state_38855__$1 = (function (){var statearr_38981 = state_38855;
(statearr_38981[(24)] = inst_38787);

return statearr_38981;
})();
if(cljs.core.truth_(inst_38726)){
var statearr_38984_41827 = state_38855__$1;
(statearr_38984_41827[(1)] = (20));

} else {
var statearr_38985_41832 = state_38855__$1;
(statearr_38985_41832[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38856 === (8))){
var inst_38759 = [new cljs.core.Keyword(null,"recur?","recur?",774198931)];
var inst_38760 = [false];
var inst_38761 = cljs.core.PersistentHashMap.fromArrays(inst_38759,inst_38760);
var state_38855__$1 = state_38855;
var statearr_38987_41840 = state_38855__$1;
(statearr_38987_41840[(2)] = inst_38761);

(statearr_38987_41840[(1)] = (10));


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
});
return (function() {
var taoensso$sente$ring_handler_$_state_machine__27280__auto__ = null;
var taoensso$sente$ring_handler_$_state_machine__27280__auto____0 = (function (){
var statearr_38992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38992[(0)] = taoensso$sente$ring_handler_$_state_machine__27280__auto__);

(statearr_38992[(1)] = (1));

return statearr_38992;
});
var taoensso$sente$ring_handler_$_state_machine__27280__auto____1 = (function (state_38855){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_38855);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e38994){var ex__27283__auto__ = e38994;
var statearr_38995_41851 = state_38855;
(statearr_38995_41851[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_38855[(4)]))){
var statearr_38996_41852 = state_38855;
(statearr_38996_41852[(1)] = cljs.core.first((state_38855[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41853 = state_38855;
state_38855 = G__41853;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
taoensso$sente$ring_handler_$_state_machine__27280__auto__ = function(state_38855){
switch(arguments.length){
case 0:
return taoensso$sente$ring_handler_$_state_machine__27280__auto____0.call(this);
case 1:
return taoensso$sente$ring_handler_$_state_machine__27280__auto____1.call(this,state_38855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$ring_handler_$_state_machine__27280__auto____0;
taoensso$sente$ring_handler_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_state_machine__27280__auto____1;
return taoensso$sente$ring_handler_$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_39001 = f__28094__auto__();
(statearr_39001[(6)] = c__28093__auto___41703);

return statearr_39001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

} else {
}

if(cljs.core.truth_(connect_uid_BANG__QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente",null,942,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ws/on-open] uid port open for %s",lid_STAR_], null);
}),null)),null,(75),null);

return receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
return null;
}
} else {
return null;
}
} else {
var send_handshake_QMARK_ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null)) == null);
}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,(cljs.core.truth_(send_handshake_QMARK_)?new cljs.core.Keyword(null,"info","info",-317069002):new cljs.core.Keyword(null,"trace","trace",-1082747415)),"taoensso.sente",null,951,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ajax/on-open] New server Ajax sch (poll/handshake) for %s: %s",lid_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send-handshake?","send-handshake?",-1890012461),send_handshake_QMARK_], null)], null);
}),null)),null,(76),null);

if(cljs.core.truth_(send_handshake_QMARK_)){
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,taoensso.encore.now_udt(),conn_id], null);
}));

return send_handshake_BANG__QMARK_(server_ch,websocket_QMARK_);
} else {
var vec__39012 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt(),conn_id], null);
}));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39012,(0),null);
var udt_open = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39012,(1),null);
var temp__5804__auto___41936 = lp_timeout_ms;
if(cljs.core.truth_(temp__5804__auto___41936)){
var ms_41938 = temp__5804__auto___41936;
var c__28093__auto___41939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_39054){
var state_val_39055 = (state_39054[(1)]);
if((state_val_39055 === (1))){
var inst_39018 = cljs.core.async.timeout(ms_41938);
var state_39054__$1 = state_39054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39054__$1,(2),inst_39018);
} else {
if((state_val_39055 === (2))){
var inst_39027 = (state_39054[(7)]);
var inst_39020 = (state_39054[(2)]);
var inst_39023 = cljs.core.deref(conns_);
var inst_39024 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39025 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_39026 = (new cljs.core.PersistentVector(null,3,(5),inst_39024,inst_39025,null));
var inst_39027__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_39023,inst_39026);
var state_39054__$1 = (function (){var statearr_39062 = state_39054;
(statearr_39062[(8)] = inst_39020);

(statearr_39062[(7)] = inst_39027__$1);

return statearr_39062;
})();
if(cljs.core.truth_(inst_39027__$1)){
var statearr_39065_41950 = state_39054__$1;
(statearr_39065_41950[(1)] = (3));

} else {
var statearr_39066_41951 = state_39054__$1;
(statearr_39066_41951[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39055 === (3))){
var inst_39027 = (state_39054[(7)]);
var inst_39037 = (state_39054[(9)]);
var inst_39032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39027,(0),null);
var inst_39034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39027,(1),null);
var inst_39037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39027,(2),null);
var inst_39039 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,inst_39037__$1);
var state_39054__$1 = (function (){var statearr_39070 = state_39054;
(statearr_39070[(10)] = inst_39032);

(statearr_39070[(11)] = inst_39034);

(statearr_39070[(9)] = inst_39037__$1);

return statearr_39070;
})();
if(inst_39039){
var statearr_39071_41964 = state_39054__$1;
(statearr_39071_41964[(1)] = (6));

} else {
var statearr_39073_41970 = state_39054__$1;
(statearr_39073_41970[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39055 === (4))){
var state_39054__$1 = state_39054;
var statearr_39077_41971 = state_39054__$1;
(statearr_39077_41971[(2)] = null);

(statearr_39077_41971[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39055 === (5))){
var inst_39052 = (state_39054[(2)]);
var state_39054__$1 = state_39054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39054__$1,inst_39052);
} else {
if((state_val_39055 === (6))){
var inst_39027 = (state_39054[(7)]);
var inst_39032 = (state_39054[(10)]);
var inst_39034 = (state_39054[(11)]);
var inst_39037 = (state_39054[(9)]);
var inst_39042 = (function (){var temp__5804__auto____$1 = inst_39027;
var vec__39029 = inst_39027;
var __QMARK_sch = inst_39032;
var _udt = inst_39034;
var conn_id_STAR_ = inst_39037;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ajax/on-open] Polling timeout for %s",lid_STAR_], null);
});
})();
var inst_39043 = (new cljs.core.Delay(inst_39042,null));
var inst_39044 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,971,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_39043,null,(77),null);
var inst_39045 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_39046 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_39045);
var state_39054__$1 = (function (){var statearr_39083 = state_39054;
(statearr_39083[(12)] = inst_39044);

return statearr_39083;
})();
var statearr_39084_41992 = state_39054__$1;
(statearr_39084_41992[(2)] = inst_39046);

(statearr_39084_41992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39055 === (7))){
var state_39054__$1 = state_39054;
var statearr_39086_41993 = state_39054__$1;
(statearr_39086_41993[(2)] = null);

(statearr_39086_41993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39055 === (8))){
var inst_39049 = (state_39054[(2)]);
var state_39054__$1 = state_39054;
var statearr_39088_41999 = state_39054__$1;
(statearr_39088_41999[(2)] = inst_39049);

(statearr_39088_41999[(1)] = (5));


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
});
return (function() {
var taoensso$sente$ring_handler_$_state_machine__27280__auto__ = null;
var taoensso$sente$ring_handler_$_state_machine__27280__auto____0 = (function (){
var statearr_39092 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39092[(0)] = taoensso$sente$ring_handler_$_state_machine__27280__auto__);

(statearr_39092[(1)] = (1));

return statearr_39092;
});
var taoensso$sente$ring_handler_$_state_machine__27280__auto____1 = (function (state_39054){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_39054);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e39094){var ex__27283__auto__ = e39094;
var statearr_39095_42002 = state_39054;
(statearr_39095_42002[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_39054[(4)]))){
var statearr_39096_42007 = state_39054;
(statearr_39096_42007[(1)] = cljs.core.first((state_39054[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42013 = state_39054;
state_39054 = G__42013;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
taoensso$sente$ring_handler_$_state_machine__27280__auto__ = function(state_39054){
switch(arguments.length){
case 0:
return taoensso$sente$ring_handler_$_state_machine__27280__auto____0.call(this);
case 1:
return taoensso$sente$ring_handler_$_state_machine__27280__auto____1.call(this,state_39054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$ring_handler_$_state_machine__27280__auto____0;
taoensso$sente$ring_handler_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler_$_state_machine__27280__auto____1;
return taoensso$sente$ring_handler_$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_39101 = f__28094__auto__();
(statearr_39101[(6)] = c__28093__auto___41939);

return statearr_39101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

} else {
}

if(cljs.core.truth_(connect_uid_BANG__QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente",null,976,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[ajax/on-open] uid port open for %s",lid_STAR_], null);
}),null)),null,(78),null);

return receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
return null;
}
}
}
});
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ring-async-resp-fn","ring-async-resp-fn",-689911654),_QMARK_ring_async_resp_fn,new cljs.core.Keyword(null,"ring-async-raise-fn","ring-async-raise-fn",744112799),_QMARK_ring_async_raise_fn,new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),on_msg,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
}
}
});
taoensso$sente$ring_handler = function(ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn){
switch(arguments.length){
case 1:
return taoensso$sente$ring_handler__1.call(this,ring_req);
case 3:
return taoensso$sente$ring_handler__3.call(this,ring_req,_QMARK_ring_async_resp_fn,_QMARK_ring_async_raise_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$ring_handler__1;
taoensso$sente$ring_handler.cljs$core$IFn$_invoke$arity$3 = taoensso$sente$ring_handler__3;
return taoensso$sente$ring_handler;
})()
], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq38179){
var G__38180 = cljs.core.first(seq38179);
var seq38179__$1 = cljs.core.next(seq38179);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38180,seq38179__$1);
}));

/**
 * Debugging tool. Proportion ∈ℝ[0,1] of connection activities to sabotage.
 */
taoensso.sente._STAR_simulated_bad_conn_rate_STAR_ = null;
taoensso.sente.simulated_bad_conn_QMARK_ = (function taoensso$sente$simulated_bad_conn_QMARK_(){
var temp__5804__auto__ = taoensso.sente._STAR_simulated_bad_conn_rate_STAR_;
if(cljs.core.truth_(temp__5804__auto__)){
var sbcr = temp__5804__auto__;
return taoensso.encore.chance(sbcr);
} else {
return null;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's conns.
 *   Allows some time for possible reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_clients_BANG_(conn_type,conns_,uid,buffered_evs_pstr,n_buffered_evs){
var e_42058 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
})(conn_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e39117){if((e39117 instanceof Error)){
var e_42058 = e39117;
return e_42058;
} else {
throw e39117;

}
}})();
if((e_42058 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1001,3,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),"null",new cljs.core.Keyword(null,"ajax","ajax",814345549),"null"], null), null)], null),new cljs.core.Symbol(null,"conn-type","conn-type",1610962884,null),conn_type,e_42058,null);
}

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var websocket_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_type,new cljs.core.Keyword(null,"ws","ws",86841443));
var udt_t0 = taoensso.encore.now_udt();
var temp__5804__auto__ = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid], null)));
if(cljs.core.truth_(temp__5804__auto__)){
var client_ids = temp__5804__auto__;
var c__28093__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_39163){
var state_val_39164 = (state_39163[(1)]);
if((state_val_39164 === (7))){
var inst_39131 = (state_39163[(7)]);
var inst_39128 = (state_39163[(8)]);
var inst_39137 = (state_39163[(9)]);
var inst_39139 = cljs.core.count(client_ids);
var inst_39140 = cljs.core.count(inst_39131);
var inst_39141 = (inst_39139 - inst_39140);
var inst_39143 = (function (){var pending = inst_39131;
var idx = inst_39128;
var temp__5802__auto__ = inst_39137;
var done_QMARK_ = inst_39137;
var n_desired = inst_39139;
var n_success = inst_39141;
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sent %s buffered evs to %s/%s %s clients for %s in %s attempt/s (%s msecs)",n_buffered_evs,n_success,n_desired,conn_type,taoensso.sente.lid.cljs$core$IFn$_invoke$arity$1(uid),(idx + (1)),(taoensso.encore.now_udt() - udt_t0)], null);
});
})();
var inst_39144 = (new cljs.core.Delay(inst_39143,null));
var inst_39145 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,1038,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_39144,null,(79),null);
var state_39163__$1 = state_39163;
var statearr_39174_42059 = state_39163__$1;
(statearr_39174_42059[(2)] = inst_39145);

(statearr_39174_42059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (1))){
var inst_39125 = cljs.core.set(client_ids);
var inst_39127 = inst_39125;
var inst_39128 = (0);
var state_39163__$1 = (function (){var statearr_39177 = state_39163;
(statearr_39177[(10)] = inst_39127);

(statearr_39177[(8)] = inst_39128);

return statearr_39177;
})();
var statearr_39178_42060 = state_39163__$1;
(statearr_39178_42060[(2)] = null);

(statearr_39178_42060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (4))){
var inst_39132 = (state_39163[(11)]);
var state_39163__$1 = state_39163;
var statearr_39179_42061 = state_39163__$1;
(statearr_39179_42061[(2)] = inst_39132);

(statearr_39179_42061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (6))){
var inst_39137 = (state_39163[(9)]);
var inst_39137__$1 = (state_39163[(2)]);
var state_39163__$1 = (function (){var statearr_39182 = state_39163;
(statearr_39182[(9)] = inst_39137__$1);

return statearr_39182;
})();
if(cljs.core.truth_(inst_39137__$1)){
var statearr_39183_42062 = state_39163__$1;
(statearr_39183_42062[(1)] = (7));

} else {
var statearr_39184_42063 = state_39163__$1;
(statearr_39184_42063[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (3))){
var inst_39161 = (state_39163[(2)]);
var state_39163__$1 = state_39163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39163__$1,inst_39161);
} else {
if((state_val_39164 === (2))){
var inst_39127 = (state_39163[(10)]);
var inst_39128 = (state_39163[(8)]);
var inst_39131 = (state_39163[(7)]);
var inst_39132 = (state_39163[(11)]);
var inst_39130 = (function (){var pending = inst_39127;
var idx = inst_39128;
return (function (pending__$1,client_id){
var temp__5802__auto__ = (function (){var temp__5804__auto____$1 = (function (){var temp__5804__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var vec__39188 = temp__5804__auto____$1;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39188,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39188,(1),null);
var conn_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39188,(2),null);
var temp__5804__auto____$2 = _QMARK_sch;
if(cljs.core.truth_(temp__5804__auto____$2)){
var sch = temp__5804__auto____$2;
if(cljs.core.truth_(taoensso.sente.simulated_bad_conn_QMARK_())){
return null;
} else {
if(cljs.core.truth_(taoensso.sente.interfaces.sch_send_BANG_(sch,websocket_QMARK_,buffered_evs_pstr))){
return conn_id;
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5804__auto____$1)){
var conn_id = temp__5804__auto____$1;
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (p__39194){
var vec__39195 = p__39194;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39195,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39195,(1),null);
var conn_id_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39195,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(conn_id,conn_id_STAR_)){
if(websocket_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,taoensso.encore.now_udt(),conn_id], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt,conn_id], null);
}
} else {
return new cljs.core.Keyword("swap","abort","swap/abort",508048993);
}
}));

return true;
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var sent_QMARK_ = temp__5802__auto__;
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pending__$1,client_id);
} else {
return pending__$1;
}
});
})();
var inst_39131__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_39130,inst_39127,inst_39127);
var inst_39132__$1 = cljs.core.empty_QMARK_(inst_39131__$1);
var state_39163__$1 = (function (){var statearr_39202 = state_39163;
(statearr_39202[(7)] = inst_39131__$1);

(statearr_39202[(11)] = inst_39132__$1);

return statearr_39202;
})();
if(inst_39132__$1){
var statearr_39207_42064 = state_39163__$1;
(statearr_39207_42064[(1)] = (4));

} else {
var statearr_39208_42065 = state_39163__$1;
(statearr_39208_42065[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (9))){
var inst_39159 = (state_39163[(2)]);
var state_39163__$1 = state_39163;
var statearr_39211_42066 = state_39163__$1;
(statearr_39211_42066[(2)] = inst_39159);

(statearr_39211_42066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (5))){
var inst_39128 = (state_39163[(8)]);
var inst_39135 = (inst_39128 > (4));
var state_39163__$1 = state_39163;
var statearr_39213_42067 = state_39163__$1;
(statearr_39213_42067[(2)] = inst_39135);

(statearr_39213_42067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (10))){
var inst_39128 = (state_39163[(8)]);
var inst_39131 = (state_39163[(7)]);
var inst_39155 = (state_39163[(2)]);
var inst_39156 = (inst_39128 + (1));
var inst_39127 = inst_39131;
var inst_39128__$1 = inst_39156;
var state_39163__$1 = (function (){var statearr_39218 = state_39163;
(statearr_39218[(12)] = inst_39155);

(statearr_39218[(10)] = inst_39127);

(statearr_39218[(8)] = inst_39128__$1);

return statearr_39218;
})();
var statearr_39219_42068 = state_39163__$1;
(statearr_39219_42068[(2)] = null);

(statearr_39219_42068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39164 === (8))){
var inst_39128 = (state_39163[(8)]);
var inst_39149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_39128);
var inst_39150 = cljs.core.rand_int(inst_39149);
var inst_39151 = (inst_39149 + inst_39150);
var inst_39153 = cljs.core.async.timeout(inst_39151);
var state_39163__$1 = state_39163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39163__$1,(10),inst_39153);
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
var taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__27280__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__27280__auto____0 = (function (){
var statearr_39220 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39220[(0)] = taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__27280__auto__);

(statearr_39220[(1)] = (1));

return statearr_39220;
});
var taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__27280__auto____1 = (function (state_39163){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_39163);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e39223){var ex__27283__auto__ = e39223;
var statearr_39224_42069 = state_39163;
(statearr_39224_42069[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_39163[(4)]))){
var statearr_39226_42070 = state_39163;
(statearr_39226_42070[(1)] = cljs.core.first((state_39163[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42071 = state_39163;
state_39163 = G__42071;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__27280__auto__ = function(state_39163){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__27280__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__27280__auto____1.call(this,state_39163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__27280__auto____0;
taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__27280__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_clients_BANG__$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_39231 = f__28094__auto__();
(statearr_39231[(6)] = c__28093__auto__);

return statearr_39231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

return c__28093__auto__;
} else {
return null;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_42072 = (function (chsk){
var x__5393__auto__ = (((chsk == null))?null:chsk);
var m__5394__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5394__auto__.call(null,chsk));
} else {
var m__5392__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__5392__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
});
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_42072(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_42073 = (function (chsk,reason){
var x__5393__auto__ = (((chsk == null))?null:chsk);
var m__5394__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5394__auto__.call(null,chsk,reason));
} else {
var m__5392__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5392__auto__.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
});
taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_42073(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_42074 = (function (chsk,reason){
var x__5393__auto__ = (((chsk == null))?null:chsk);
var m__5394__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5394__auto__.call(null,chsk,reason));
} else {
var m__5392__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__5392__auto__.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
});
taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_42074(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_break_connection_BANG_$dyn_42075 = (function (chsk,opts){
var x__5393__auto__ = (((chsk == null))?null:chsk);
var m__5394__auto__ = (taoensso.sente._chsk_break_connection_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(chsk,opts) : m__5394__auto__.call(null,chsk,opts));
} else {
var m__5392__auto__ = (taoensso.sente._chsk_break_connection_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(chsk,opts) : m__5392__auto__.call(null,chsk,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-break-connection!",chsk);
}
}
});
taoensso.sente._chsk_break_connection_BANG_ = (function taoensso$sente$_chsk_break_connection_BANG_(chsk,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2(chsk,opts);
} else {
return taoensso$sente$IChSocket$_chsk_break_connection_BANG_$dyn_42075(chsk,opts);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_42076 = (function (chsk,ev,opts){
var x__5393__auto__ = (((chsk == null))?null:chsk);
var m__5394__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__5394__auto__.call(null,chsk,ev,opts));
} else {
var m__5392__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__5392__auto__.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
});
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_42076(chsk,ev,opts);
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});
/**
 * Cycles connection, useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));
});
/**
 * Breaks channel socket's underlying connection without doing a clean
 *   disconnect as in `chsk-disconnect!`. Useful for simulating broken
 *   connections in testing, etc.
 * 
 *   Options:
 * 
 *     `:close-ws?` - (Default: true)
 *       Allow WebSocket's `on-close` event to fire?
 *       Set to falsey to ~simulate a broken socket that doesn't realise
 *       it's broken.
 */
taoensso.sente.chsk_break_connection_BANG_ = (function taoensso$sente$chsk_break_connection_BANG_(var_args){
var G__39255 = arguments.length;
switch (G__39255) {
case 1:
return taoensso.sente.chsk_break_connection_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.sente.chsk_break_connection_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_break_connection_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (chsk){
return taoensso.sente._chsk_break_connection_BANG_(chsk,null);
}));

(taoensso.sente.chsk_break_connection_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,p__39256){
var map__39257 = p__39256;
var map__39257__$1 = cljs.core.__destructure_map(map__39257);
var opts = map__39257__$1;
var close_ws_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39257__$1,new cljs.core.Keyword(null,"close-ws?","close-ws?",-1488665553),true);
return taoensso.sente._chsk_break_connection_BANG_(chsk,opts);
}));

(taoensso.sente.chsk_break_connection_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__39260 = arguments.length;
switch (G__39260) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1089,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client chsk send: %s",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$(new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null)], null);
}),null)),null,(80),null);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1093,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client chsk send against closed chsk: %s",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cb?","cb?",1370758422),cljs.core.boolean$(_QMARK_cb_fn)], null)], null);
}),null)),null,(81),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms)))){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if((((_QMARK_cb == null)) || (((cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb)))))){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5804__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto__)){
var cb_uuid = temp__5804__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),(function (_QMARK_f){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
}));
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__39274 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
return taoensso.encore.swapped(new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39274,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39274,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var old_open_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
var new_open_QMARK_ = cljs.core.boolean$(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state));
var open_changed_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_open_QMARK_,old_open_QMARK_);
var opened_QMARK_ = ((new_open_QMARK_) && ((!(old_open_QMARK_))));
var closed_QMARK_ = (((!(new_open_QMARK_))) && (old_open_QMARK_));
var first_open_QMARK_ = ((opened_QMARK_) && (cljs.core.not(new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732).cljs$core$IFn$_invoke$arity$1(old_state))));
var new_state__$1 = (((!(open_changed_QMARK_)))?new_state:taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(new_state,new cljs.core.Keyword(null,"open-changed?","open-changed?",-3609790),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"opened?","opened?",1096959669),opened_QMARK_,new cljs.core.Keyword(null,"closed?","closed?",-1408769040),closed_QMARK_,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_open_QMARK_], 0)));
if(opened_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente",null,1138,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client chsk now open"], null);
}),null)),null,(82),null);
} else {
if(closed_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1139,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client chsk now closed, reason: %s",cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.Keyword(null,"reason","reason",-2070751759)], null),"unknown")], null);
}),null)),null,(83),null);
} else {
}
}

var output = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1,open_changed_QMARK_], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return open_changed_QMARK_;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_42079 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e39316){if((e39316 instanceof Error)){
var e_42079 = e39316;
return e_42079;
} else {
throw e39316;

}
}})();
if((e_42079 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1147,6,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"state","state",-348086572,null),state,e_42079,null);
}

var e_42080 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"ws-error","ws-error",263286885),null,new cljs.core.Keyword(null,"ws-ping-timeout","ws-ping-timeout",788047274),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null,new cljs.core.Keyword(null,"clean","clean",41534079),null], null), null)),x);
})(reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e39324){if((e39324 instanceof Error)){
var e_42080 = e39324;
return e_42080;
} else {
throw e39324;

}
}})();
if((e_42080 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1148,6,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),"null",new cljs.core.Keyword(null,"ws-error","ws-error",263286885),"null",new cljs.core.Keyword(null,"ws-ping-timeout","ws-ping-timeout",788047274),"null",new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),"null",new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),"null",new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),"null",new cljs.core.Keyword(null,"clean","clean",41534079),"null"], null), null)], null),new cljs.core.Symbol(null,"reason","reason",-430220232,null),reason,e_42080,null);
}

var closing_QMARK_ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
var m = state;
var m__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733));
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"open?","open?",1238443125),false);
if(cljs.core.truth_(closing_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null));
} else {
return m__$2;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_42081 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e39385){if((e39385 instanceof Error)){
var e_42081 = e39385;
return e_42081;
} else {
throw e39385;

}
}})();
if((e_42081 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1173,10,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null),_QMARK_cb,e_42081,null);
}

taoensso.sente.assert_event(ev);

var vec__39396 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39396,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39396,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.as_qname(ev_id)),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1183,25,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"clj","clj",980036099,null),clj,null,null));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1185,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client received %s buffered evs from server: %s",cljs.core.count(buffered_evs),clj], null);
}),null)),null,(84),null);

var seq__39441 = cljs.core.seq(buffered_evs);
var chunk__39442 = null;
var count__39443 = (0);
var i__39444 = (0);
while(true){
if((i__39444 < count__39443)){
var ev = chunk__39442.cljs$core$IIndexed$_nth$arity$2(null,i__39444);
taoensso.sente.assert_event(ev);

var vec__39521_42082 = ev;
var id_42083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39521_42082,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_42083),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__42084 = seq__39441;
var G__42085 = chunk__39442;
var G__42086 = count__39443;
var G__42087 = (i__39444 + (1));
seq__39441 = G__42084;
chunk__39442 = G__42085;
count__39443 = G__42086;
i__39444 = G__42087;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39441);
if(temp__5804__auto__){
var seq__39441__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39441__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39441__$1);
var G__42088 = cljs.core.chunk_rest(seq__39441__$1);
var G__42089 = c__5568__auto__;
var G__42090 = cljs.core.count(c__5568__auto__);
var G__42091 = (0);
seq__39441 = G__42088;
chunk__39442 = G__42089;
count__39443 = G__42090;
i__39444 = G__42091;
continue;
} else {
var ev = cljs.core.first(seq__39441__$1);
taoensso.sente.assert_event(ev);

var vec__39533_42092 = ev;
var id_42093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39533_42092,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_42093),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__42094 = cljs.core.next(seq__39441__$1);
var G__42095 = null;
var G__42096 = (0);
var G__42097 = (0);
seq__39441 = G__42094;
chunk__39442 = G__42095;
count__39443 = G__42096;
i__39444 = G__42097;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__5043__auto__ = cljs.core.vector_QMARK_(x);
if(and__5043__auto__){
var vec__39551 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39551,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__5043__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_42098 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null)),x);
})(chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e39561){if((e39561 instanceof Error)){
var e_42098 = e39561;
return e_42098;
} else {
throw e39561;

}
}})();
if((e_42098 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1200,6,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),"null",new cljs.core.Keyword(null,"ajax","ajax",814345549),"null"], null), null)], null),new cljs.core.Symbol(null,"chsk-type","chsk-type",40874615,null),chsk_type,e_42098,null);
}

var e_42099 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e39563){if((e39563 instanceof Error)){
var e_42099 = e39563;
return e_42099;
} else {
throw e39563;

}
}})();
if((e_42099 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1201,6,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"handshake?","handshake?",1216788434,null),new cljs.core.Symbol(null,"clj","clj",980036099,null),clj,e_42099,null);
}

var vec__39565 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39565,(0),null);
var vec__39568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39565,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39568,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39568,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39568,(2),null);
var map__39571 = chsk;
var map__39571__$1 = cljs.core.__destructure_map(map__39571);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39571__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39571__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente",null,1222,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client received %s %s handshake from server: %s",((first_handshake_QMARK_)?"first":"new"),chsk_type,clj], null);
}),null)),null,(85),null);

taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new_state], 0));
}));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (function (){var make_package_name = (function (prefix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"socket"].join('');
});
var require_fn = (((typeof require !== 'undefined'))?require:cljs.core.constantly(new cljs.core.Keyword(null,"no-op","no-op",-93046065)));
return (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{var G__39577 = make_package_name("web");
return (require_fn.cljs$core$IFn$_invoke$arity$1 ? require_fn.cljs$core$IFn$_invoke$arity$1(G__39577) : require_fn.call(null,G__39577));
}catch (e39576){var e = e39576;
return null;
}} else {
return null;
}
}),null));
})();
taoensso.sente.make_client_ws_js = (function taoensso$sente$make_client_ws_js(p__39582){
var map__39583 = p__39582;
var map__39583__$1 = cljs.core.__destructure_map(map__39583);
var opts = map__39583__$1;
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword(null,"on-message","on-message",1662987808));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var binary_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword(null,"binary-type","binary-type",1096940609));
var temp__5804__auto__ = (function (){var or__5045__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var WebSocket = temp__5804__auto__;
return (new cljs.core.Delay((function (){
var socket = (new WebSocket(uri_str));
var G__39601_42100 = socket;
(G__39601_42100["onerror"] = on_error);

(G__39601_42100["onmessage"] = on_message);

(G__39601_42100["onclose"] = on_close);


var temp__5804__auto___42101__$1 = binary_type;
if(cljs.core.truth_(temp__5804__auto___42101__$1)){
var bt_42102 = temp__5804__auto___42101__$1;
(socket["binaryType"] = bt_42102);
} else {
}

return socket;
}),null));
} else {
return null;
}
});
/**
 * Returns nil if WebSocket client cannot be created, or a delay
 *   that can be derefed to get a connected client.
 */
taoensso.sente.default_client_ws_constructor = (function taoensso$sente$default_client_ws_constructor(p__39611){
var map__39612 = p__39611;
var map__39612__$1 = cljs.core.__destructure_map(map__39612);
var opts = map__39612__$1;
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39612__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39612__$1,new cljs.core.Keyword(null,"on-message","on-message",1662987808));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39612__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var uri_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39612__$1,new cljs.core.Keyword(null,"uri-str","uri-str",304128675));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39612__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
return taoensso.sente.make_client_ws_js(opts);
});
/**
 * Returns non-blank client CSRF token ?string from given token string
 *   or (fn [])->?string.
 */
taoensso.sente.get_client_csrf_token_str = (function taoensso$sente$get_client_csrf_token_str(warn_QMARK_,token_or_fn){
if(cljs.core.truth_(token_or_fn)){
var dynamic_QMARK_ = cljs.core.fn_QMARK_(token_or_fn);
var temp__5802__auto__ = taoensso.encore.as__QMARK_nblank(((dynamic_QMARK_)?(token_or_fn.cljs$core$IFn$_invoke$arity$0 ? token_or_fn.cljs$core$IFn$_invoke$arity$0() : token_or_fn.call(null)):token_or_fn));
if(cljs.core.truth_(temp__5802__auto__)){
var token = temp__5802__auto__;
return token;
} else {
var temp__5804__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(warn_QMARK_,new cljs.core.Keyword(null,"dynamic","dynamic",704819571)))?dynamic_QMARK_:warn_QMARK_);
if(cljs.core.truth_(temp__5804__auto__)){
var warn_QMARK___$1 = temp__5804__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1342,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no client CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
}),null)),null,(86),null);

return null;
} else {
return null;
}
}
} else {
return null;
}
});
taoensso.sente.client_unloading_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
goog.global.addEventListener("beforeunload",(function (event){
cljs.core.reset_BANG_(taoensso.sente.client_unloading_QMARK__,true);

return null;
}));
taoensso.sente.retry_connect_chsk_BANG_ = (function taoensso$sente$retry_connect_chsk_BANG_(chsk,backoff_ms_fn,connect_fn,retry_count){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(retry_count,(1))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente",null,1356,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client will try reconnect chsk now"], null);
}),null)),null,(87),null);

return (connect_fn.cljs$core$IFn$_invoke$arity$0 ? connect_fn.cljs$core$IFn$_invoke$arity$0() : connect_fn.call(null));
} else {
var backoff_ms = (backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count) : backoff_ms_fn.call(null,retry_count));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"taoensso.sente",null,1362,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client will try reconnect chsk (attempt %s) after %s msecs",retry_count,backoff_ms], null);
}),null)),null,(88),null);

goog.global.setTimeout(connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk,(function (p1__39613_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39613_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,headers,packer,url,state_,conn_id_,retry_count_,ever_opened_QMARK__,ws_kalive_ms,ws_ping_timeout_ms,ws_opts,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,ws_constructor,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.headers = headers;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.conn_id_ = conn_id_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.ws_kalive_ms = ws_kalive_ms;
this.ws_ping_timeout_ms = ws_ping_timeout_ms;
this.ws_opts = ws_opts;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.ws_constructor = ws_constructor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k39624,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__39631 = k39624;
var G__39631__$1 = (((G__39631 instanceof cljs.core.Keyword))?G__39631.fqn:null);
switch (G__39631__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "headers":
return self__.headers;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "conn-id_":
return self__.conn_id_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "ws-ping-timeout-ms":
return self__.ws_ping_timeout_ms;

break;
case "ws-opts":
return self__.ws_opts;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
case "ws-constructor":
return self__.ws_constructor;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39624,else__5346__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__39632){
var vec__39633 = p__39632;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39633,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39633,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),self__.conn_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),self__.ws_ping_timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),self__.ws_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),self__.ws_constructor],null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39623){
var self__ = this;
var G__39623__$1 = this;
return (new cljs.core.RecordIter((0),G__39623__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (18 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39625,other39626){
var self__ = this;
var this39625__$1 = this;
return (((!((other39626 == null)))) && ((((this39625__$1.constructor === other39626.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.client_id,other39626.client_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.chs,other39626.chs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.params,other39626.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.headers,other39626.headers)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.packer,other39626.packer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.url,other39626.url)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.state_,other39626.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.conn_id_,other39626.conn_id_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.retry_count_,other39626.retry_count_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.ever_opened_QMARK__,other39626.ever_opened_QMARK__)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.ws_kalive_ms,other39626.ws_kalive_ms)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.ws_ping_timeout_ms,other39626.ws_ping_timeout_ms)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.ws_opts,other39626.ws_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.backoff_ms_fn,other39626.backoff_ms_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.cbs_waiting_,other39626.cbs_waiting_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.socket_,other39626.socket_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.udt_last_comms_,other39626.udt_last_comms_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.ws_constructor,other39626.ws_constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39625__$1.__extmap,other39626.__extmap)))))))))))))))))))))))))))))))))))))))));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k39624){
var self__ = this;
var this__5350__auto____$1 = this;
var G__39691 = k39624;
var G__39691__$1 = (((G__39691 instanceof cljs.core.Keyword))?G__39691.fqn:null);
switch (G__39691__$1) {
case "client-id":
case "chs":
case "params":
case "headers":
case "packer":
case "url":
case "state_":
case "conn-id_":
case "retry-count_":
case "ever-opened?_":
case "ws-kalive-ms":
case "ws-ping-timeout-ms":
case "ws-opts":
case "backoff-ms-fn":
case "cbs-waiting_":
case "socket_":
case "udt-last-comms_":
case "ws-constructor":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39624);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__39623){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__39692 = cljs.core.keyword_identical_QMARK_;
var expr__39693 = k__5352__auto__;
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__39693)))){
return (new taoensso.sente.ChWebSocket(G__39623,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__39623,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__39623,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"headers","headers",-835030129),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__39623,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,G__39623,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,G__39623,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,G__39623,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,G__39623,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,G__39623,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,G__39623,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,G__39623,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,G__39623,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,G__39623,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,G__39623,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,G__39623,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,G__39623,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__39623,self__.ws_constructor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39692.cljs$core$IFn$_invoke$arity$2 ? pred__39692.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),expr__39693) : pred__39692.call(null,new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),expr__39693)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__39623,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__39623),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),self__.conn_id_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),self__.ws_ping_timeout_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),self__.ws_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),self__.ws_constructor,null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__39623){
var self__ = this;
var this__5342__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.headers,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.retry_count_,self__.ever_opened_QMARK__,self__.ws_kalive_ms,self__.ws_ping_timeout_ms,self__.ws_opts,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.ws_constructor,G__39623,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.conn_id_,null);

var closed_QMARK_ = taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__39619_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__39619_SHARP_,reason);
}));
var temp__5804__auto___42105 = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5804__auto___42105)){
var vec__39752_42106 = temp__5804__auto___42105;
var s_42107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39752_42106,(0),null);
var _sid_42108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39752_42106,(1),null);
s_42107.close((1000),"CLOSE_NORMAL");
} else {
}

return closed_QMARK_;
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,reason);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2 = (function (chsk,opts){
var self__ = this;
var chsk__$1 = this;
var map__39795 = opts;
var map__39795__$1 = cljs.core.__destructure_map(map__39795);
var close_ws_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39795__$1,new cljs.core.Keyword(null,"close-ws?","close-ws?",-1488665553));
var ws_code = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39795__$1,new cljs.core.Keyword(null,"ws-code","ws-code",1136081606),(3000));
var temp__5804__auto___42109 = ((cljs.core.not(close_ws_QMARK_))?taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2(self__.socket_,null):cljs.core.deref(self__.socket_));
if(cljs.core.truth_(temp__5804__auto___42109)){
var vec__39811_42110 = temp__5804__auto___42109;
var s_42111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39811_42110,(0),null);
var _sid_42112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39811_42110,(1),null);
s_42111.close(ws_code,"CLOSE_ABNORMAL");
} else {
}

return null;
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__39832 = opts;
var map__39832__$1 = cljs.core.__destructure_map(map__39832);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39832__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39832__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39832__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5804__auto___42113 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___42113)){
var cb_uuid_42114 = temp__5804__auto___42113;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_42114], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e39875){if((e39875 instanceof Error)){
var e = e39875;
return e;
} else {
throw e39875;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1428,47,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol("taoensso.truss.impl","some?","taoensso.truss.impl/some?",-1118207366,null),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),_QMARK_cb_fn,e,null);
}
})());

var temp__5804__auto___42115__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5804__auto___42115__$1)){
var timeout_ms_42116 = temp__5804__auto___42115__$1;
var c__28093__auto___42117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_39920){
var state_val_39923 = (state_39920[(1)]);
if((state_val_39923 === (1))){
var inst_39899 = cljs.core.async.timeout(timeout_ms_42116);
var state_39920__$1 = state_39920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39920__$1,(2),inst_39899);
} else {
if((state_val_39923 === (2))){
var inst_39906 = (state_39920[(7)]);
var inst_39901 = (state_39920[(2)]);
var inst_39906__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_39920__$1 = (function (){var statearr_39960 = state_39920;
(statearr_39960[(8)] = inst_39901);

(statearr_39960[(7)] = inst_39906__$1);

return statearr_39960;
})();
if(cljs.core.truth_(inst_39906__$1)){
var statearr_39965_42118 = state_39920__$1;
(statearr_39965_42118[(1)] = (3));

} else {
var statearr_39966_42119 = state_39920__$1;
(statearr_39966_42119[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39923 === (3))){
var inst_39906 = (state_39920[(7)]);
var inst_39915 = (inst_39906.cljs$core$IFn$_invoke$arity$1 ? inst_39906.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : inst_39906.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
var state_39920__$1 = state_39920;
var statearr_39970_42120 = state_39920__$1;
(statearr_39970_42120[(2)] = inst_39915);

(statearr_39970_42120[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39923 === (4))){
var state_39920__$1 = state_39920;
var statearr_39981_42121 = state_39920__$1;
(statearr_39981_42121[(2)] = null);

(statearr_39981_42121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39923 === (5))){
var inst_39918 = (state_39920[(2)]);
var state_39920__$1 = state_39920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39920__$1,inst_39918);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__27280__auto__ = null;
var taoensso$sente$state_machine__27280__auto____0 = (function (){
var statearr_40014 = [null,null,null,null,null,null,null,null,null];
(statearr_40014[(0)] = taoensso$sente$state_machine__27280__auto__);

(statearr_40014[(1)] = (1));

return statearr_40014;
});
var taoensso$sente$state_machine__27280__auto____1 = (function (state_39920){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_39920);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e40029){var ex__27283__auto__ = e40029;
var statearr_40030_42122 = state_39920;
(statearr_40030_42122[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_39920[(4)]))){
var statearr_40043_42123 = state_39920;
(statearr_40043_42123[(1)] = cljs.core.first((state_39920[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42124 = state_39920;
state_39920 = G__42124;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
taoensso$sente$state_machine__27280__auto__ = function(state_39920){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__27280__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__27280__auto____1.call(this,state_39920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__27280__auto____0;
taoensso$sente$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__27280__auto____1;
return taoensso$sente$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_40074 = f__28094__auto__();
(statearr_40074[(6)] = c__28093__auto___42117);

return statearr_40074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

} else {
}
} else {
}

var or__5045__auto__ = (function (){var temp__5804__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__40109 = temp__5804__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40109,(0),null);
var _sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40109,(1),null);
try{s.send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e40118){var t = e40118;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1444,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Client chsk send error"], null);
}),null)),null,(89),null);

return null;
}} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5804__auto___42125 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5804__auto___42125)){
var cb_uuid_42126 = temp__5804__auto___42125;
var cb_fn_STAR__42127 = (function (){var or__5045__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_42126);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e40183){if((e40183 instanceof Error)){
var e = e40183;
return e;
} else {
throw e40183;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1450,34,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol("taoensso.truss.impl","some?","taoensso.truss.impl/some?",-1118207366,null),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),_QMARK_cb_fn,e,null);
}
}
})();
(cb_fn_STAR__42127.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__42127.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : cb_fn_STAR__42127.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
}

chsk__$1.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"ws-error","ws-error",263286885));

return false;
}
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var this_conn_id = cljs.core.reset_BANG_(self__.conn_id_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var own_conn_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.conn_id_),this_conn_id);
});
var connect_fn = (function taoensso$sente$connect_fn(){
if(own_conn_QMARK_()){
var this_socket_id = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var own_socket_QMARK_ = (function (){
var temp__5804__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__40262 = temp__5804__auto__;
var _s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40262,(0),null);
var sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40262,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sid,this_socket_id);
} else {
return null;
}
});
var retry_fn = (function (){
if(((own_conn_QMARK_()) && (cljs.core.not(cljs.core.deref(taoensso.sente.client_unloading_QMARK__))))){
return taoensso.sente.retry_connect_chsk_BANG_(chsk__$1,self__.backoff_ms_fn,taoensso$sente$connect_fn,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc));
} else {
return null;
}
});
var on_error = (function (ws_ev){
if(cljs.core.truth_(own_socket_QMARK_())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1482,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e40316){var _ = e40316;
return ws_ev;
}})()], null);
}),null)),null,(90),null);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__39620_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39620_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null));
}));
} else {
return null;
}
});
var on_message = (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__40348 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40348,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40348,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__5045__auto__ = (cljs.core.truth_((function (){var and__5043__auto__ = own_socket_QMARK_();
if(cljs.core.truth_(and__5043__auto__)){
return taoensso.sente.handshake_QMARK_(clj);
} else {
return and__5043__auto__;
}
})())?(function (){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return new cljs.core.Keyword("done","did-handshake","done/did-handshake",-204235862);
})()
:null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-pong","chsk/ws-pong",-86402347)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flush?","flush?",-108887231),true], null));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword("done","sent-pong","done/sent-pong",-723256459);
})()
:null);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var temp__5802__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5802__auto__)){
var cb_uuid = temp__5802__auto__;
var temp__5802__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5802__auto____$1)){
var cb_fn = temp__5802__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1528,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client :ws cb reply w/o local cb-fn: %s",clj], null);
}),null)),null,(91),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
var on_close = (function (ws_ev){
if(cljs.core.truth_(own_socket_QMARK_())){
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"code","code",1586293142),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code"),new cljs.core.Keyword(null,"reason","reason",-2070751759),taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason"),new cljs.core.Keyword(null,"clean?","clean?",-1675631009),cljs.core.boolean$(taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean")),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
var reason_STAR_ = (cljs.core.truth_(new cljs.core.Keyword(null,"clean?","clean?",-1675631009).cljs$core$IFn$_invoke$arity$1(last_ws_close))?new cljs.core.Keyword(null,"clean","clean",41534079):new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__39622_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__39622_SHARP_,reason_STAR_),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn();
} else {
return null;
}
});
var _QMARK_new_socket_ = (function (){try{var G__40445 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ws_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error,new cljs.core.Keyword(null,"on-message","on-message",1662987808),on_message,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close,new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,new cljs.core.Keyword(null,"uri-str","uri-str",304128675),taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),taoensso.sente.get_client_csrf_token_str(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))], null)], 0)))], null)], 0));
return (self__.ws_constructor.cljs$core$IFn$_invoke$arity$1 ? self__.ws_constructor.cljs$core$IFn$_invoke$arity$1(G__40445) : self__.ws_constructor.call(null,G__40445));
}catch (e40438){var t = e40438;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1575,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Error creating WebSocket client"], null);
}),null)),null,(92),null);

return null;
}})();
var temp__5804__auto__ = _QMARK_new_socket_;
if(cljs.core.truth_(temp__5804__auto__)){
var new_socket_ = temp__5804__auto__;
var temp__5802__auto__ = (function (){try{return cljs.core.force(new_socket_);
}catch (e40451){var t = e40451;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1583,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,"Error realizing WebSocket client"], null);
}),null)),null,(93),null);

return null;
}})();
if(cljs.core.truth_(temp__5802__auto__)){
var new_socket = temp__5802__auto__;
var temp__5804__auto___42128__$1 = taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2(self__.socket_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_socket,this_socket_id], null));
if(cljs.core.truth_(temp__5804__auto___42128__$1)){
var vec__40453_42129 = temp__5804__auto___42128__$1;
var old_s_42130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40453_42129,(0),null);
var _old_sid_42131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40453_42129,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1588,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Old client WebSocket will be closed"], null);
}),null)),null,(94),null);

old_s_42130.close((1000),"CLOSE_NORMAL");
} else {
}

return new_socket;
} else {
return retry_fn();
}
} else {
return null;
}
} else {
return null;
}
});
cljs.core.reset_BANG_(self__.retry_count_,(0));

if(cljs.core.truth_(connect_fn())){
var temp__5804__auto___42132 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5804__auto___42132)){
var ms_42133 = temp__5804__auto___42132;
var c__28093__auto___42134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_40488){
var state_val_40489 = (state_40488[(1)]);
if((state_val_40489 === (7))){
var inst_40484 = (state_40488[(2)]);
var state_40488__$1 = state_40488;
var statearr_40491_42135 = state_40488__$1;
(statearr_40491_42135[(2)] = inst_40484);

(statearr_40491_42135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (1))){
var state_40488__$1 = state_40488;
var statearr_40492_42136 = state_40488__$1;
(statearr_40492_42136[(2)] = null);

(statearr_40492_42136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (4))){
var inst_40460 = (state_40488[(2)]);
var inst_40461 = own_conn_QMARK_();
var state_40488__$1 = (function (){var statearr_40494 = state_40488;
(statearr_40494[(7)] = inst_40460);

return statearr_40494;
})();
if(inst_40461){
var statearr_40495_42137 = state_40488__$1;
(statearr_40495_42137[(1)] = (5));

} else {
var statearr_40502_42138 = state_40488__$1;
(statearr_40502_42138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (6))){
var state_40488__$1 = state_40488;
var statearr_40504_42139 = state_40488__$1;
(statearr_40504_42139[(2)] = null);

(statearr_40504_42139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (3))){
var inst_40486 = (state_40488[(2)]);
var state_40488__$1 = state_40488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40488__$1,inst_40486);
} else {
if((state_val_40489 === (2))){
var inst_40457 = cljs.core.deref(self__.udt_last_comms_);
var inst_40458 = cljs.core.async.timeout(ms_42133);
var state_40488__$1 = (function (){var statearr_40515 = state_40488;
(statearr_40515[(8)] = inst_40457);

return statearr_40515;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40488__$1,(4),inst_40458);
} else {
if((state_val_40489 === (9))){
var state_40488__$1 = state_40488;
var statearr_40518_42140 = state_40488__$1;
(statearr_40518_42140[(2)] = null);

(statearr_40518_42140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (5))){
var inst_40457 = (state_40488[(8)]);
var inst_40463 = (state_40488[(9)]);
var inst_40465 = (state_40488[(10)]);
var inst_40463__$1 = cljs.core.deref(self__.udt_last_comms_);
var inst_40465__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40457,inst_40463__$1);
var state_40488__$1 = (function (){var statearr_40525 = state_40488;
(statearr_40525[(9)] = inst_40463__$1);

(statearr_40525[(10)] = inst_40465__$1);

return statearr_40525;
})();
if(inst_40465__$1){
var statearr_40528_42141 = state_40488__$1;
(statearr_40528_42141[(1)] = (8));

} else {
var statearr_40531_42142 = state_40488__$1;
(statearr_40531_42142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (10))){
var inst_40480 = (state_40488[(2)]);
var state_40488__$1 = (function (){var statearr_40534 = state_40488;
(statearr_40534[(11)] = inst_40480);

return statearr_40534;
})();
var statearr_40537_42143 = state_40488__$1;
(statearr_40537_42143[(2)] = null);

(statearr_40537_42143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40489 === (8))){
var inst_40457 = (state_40488[(8)]);
var inst_40463 = (state_40488[(9)]);
var inst_40465 = (state_40488[(10)]);
var inst_40467 = (function (){var udt_t0 = inst_40457;
var udt_t1 = inst_40463;
var temp__5804__auto____$1 = inst_40465;
var no_activity_QMARK_ = inst_40465;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client will send ws-ping to server: %s",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms-since-last-activity","ms-since-last-activity",-1991165547),(taoensso.encore.now_udt() - udt_t1),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.ws_ping_timeout_ms], null)], null);
});
})();
var inst_40468 = (new cljs.core.Delay(inst_40467,null));
var inst_40469 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,1608,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40468,null,(95),null);
var inst_40470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40471 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_40472 = (new cljs.core.PersistentVector(null,1,(5),inst_40470,inst_40471,null));
var inst_40473 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"cb","cb",589947841)];
var inst_40474 = (function (){var udt_t0 = inst_40457;
var udt_t1 = inst_40463;
var temp__5804__auto____$1 = inst_40465;
var no_activity_QMARK_ = inst_40465;
return (function (reply){
if(((own_conn_QMARK_()) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reply,"pong")))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,1618,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client ws-ping to server timed-out, will cycle WebSocket now"], null);
}),null)),null,(96),null);

return chsk__$1.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"ws-ping-timeout","ws-ping-timeout",788047274));
} else {
return null;
}
});
})();
var inst_40475 = [true,self__.ws_ping_timeout_ms,inst_40474];
var inst_40476 = cljs.core.PersistentHashMap.fromArrays(inst_40473,inst_40475);
var inst_40477 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_40472,inst_40476);
var state_40488__$1 = (function (){var statearr_40552 = state_40488;
(statearr_40552[(12)] = inst_40469);

return statearr_40552;
})();
var statearr_40553_42144 = state_40488__$1;
(statearr_40553_42144[(2)] = inst_40477);

(statearr_40553_42144[(1)] = (10));


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
var taoensso$sente$state_machine__27280__auto__ = null;
var taoensso$sente$state_machine__27280__auto____0 = (function (){
var statearr_40557 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40557[(0)] = taoensso$sente$state_machine__27280__auto__);

(statearr_40557[(1)] = (1));

return statearr_40557;
});
var taoensso$sente$state_machine__27280__auto____1 = (function (state_40488){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_40488);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e40567){var ex__27283__auto__ = e40567;
var statearr_40584_42145 = state_40488;
(statearr_40584_42145[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_40488[(4)]))){
var statearr_40588_42146 = state_40488;
(statearr_40588_42146[(1)] = cljs.core.first((state_40488[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42147 = state_40488;
state_40488 = G__42147;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
taoensso$sente$state_machine__27280__auto__ = function(state_40488){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__27280__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__27280__auto____1.call(this,state_40488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__27280__auto____0;
taoensso$sente$state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__27280__auto____1;
return taoensso$sente$state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_40597 = f__28094__auto__();
(statearr_40597[(6)] = c__28093__auto___42134);

return statearr_40597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

} else {
}

return chsk__$1;
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"conn-id_","conn-id_",-599629337,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",-1983111801,null),new cljs.core.Symbol(null,"ws-opts","ws-opts",-1166634126,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null),new cljs.core.Symbol(null,"ws-constructor","ws-constructor",-1270420152,null)], null);
}));

(taoensso.sente.ChWebSocket.cljs$lang$type = true);

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
}));

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"taoensso.sente/ChWebSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,headers,packer,url,state_,conn_id_,retry_count_,ever_opened_QMARK__,ws_kalive_ms,ws_ping_timeout_ms,ws_opts,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,ws_constructor){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,headers,packer,url,state_,conn_id_,retry_count_,ever_opened_QMARK__,ws_kalive_ms,ws_ping_timeout_ms,ws_opts,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,ws_constructor,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__39627){
var extmap__5385__auto__ = (function (){var G__40635 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39627,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617)], 0));
if(cljs.core.record_QMARK_(G__39627)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40635);
} else {
return G__40635;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__39627),new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617).cljs$core$IFn$_invoke$arity$1(G__39627),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(60)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,conn_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.conn_id_ = conn_id_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k40689,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__40718 = k40689;
var G__40718__$1 = (((G__40718 instanceof cljs.core.Keyword))?G__40718.fqn:null);
switch (G__40718__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "conn-id_":
return self__.conn_id_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40689,else__5346__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__40737){
var vec__40740 = p__40737;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40740,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40740,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),self__.conn_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40688){
var self__ = this;
var G__40688__$1 = this;
return (new cljs.core.RecordIter((0),G__40688__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40690,other40691){
var self__ = this;
var this40690__$1 = this;
return (((!((other40691 == null)))) && ((((this40690__$1.constructor === other40691.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40690__$1.client_id,other40691.client_id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40690__$1.chs,other40691.chs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40690__$1.params,other40691.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40690__$1.packer,other40691.packer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40690__$1.url,other40691.url)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40690__$1.state_,other40691.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40690__$1.conn_id_,other40691.conn_id_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40690__$1.ever_opened_QMARK__,other40691.ever_opened_QMARK__)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40690__$1.backoff_ms_fn,other40691.backoff_ms_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40690__$1.ajax_opts,other40691.ajax_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40690__$1.curr_xhr_,other40691.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40690__$1.__extmap,other40691.__extmap)))))))))))))))))))))))))));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k40689){
var self__ = this;
var this__5350__auto____$1 = this;
var G__40872 = k40689;
var G__40872__$1 = (((G__40872 instanceof cljs.core.Keyword))?G__40872.fqn:null);
switch (G__40872__$1) {
case "client-id":
case "chs":
case "params":
case "packer":
case "url":
case "state_":
case "conn-id_":
case "ever-opened?_":
case "backoff-ms-fn":
case "ajax-opts":
case "curr-xhr_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40689);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__40688){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__40874 = cljs.core.keyword_identical_QMARK_;
var expr__40875 = k__5352__auto__;
if(cljs.core.truth_((pred__40874.cljs$core$IFn$_invoke$arity$2 ? pred__40874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__40875) : pred__40874.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__40875)))){
return (new taoensso.sente.ChAjaxSocket(G__40688,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40874.cljs$core$IFn$_invoke$arity$2 ? pred__40874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__40875) : pred__40874.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__40875)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__40688,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40874.cljs$core$IFn$_invoke$arity$2 ? pred__40874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__40875) : pred__40874.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__40875)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__40688,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40874.cljs$core$IFn$_invoke$arity$2 ? pred__40874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__40875) : pred__40874.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__40875)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__40688,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40874.cljs$core$IFn$_invoke$arity$2 ? pred__40874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__40875) : pred__40874.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__40875)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__40688,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40874.cljs$core$IFn$_invoke$arity$2 ? pred__40874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__40875) : pred__40874.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__40875)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__40688,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40874.cljs$core$IFn$_invoke$arity$2 ? pred__40874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),expr__40875) : pred__40874.call(null,new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),expr__40875)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__40688,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40874.cljs$core$IFn$_invoke$arity$2 ? pred__40874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__40875) : pred__40874.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__40875)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,G__40688,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40874.cljs$core$IFn$_invoke$arity$2 ? pred__40874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__40875) : pred__40874.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__40875)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,G__40688,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40874.cljs$core$IFn$_invoke$arity$2 ? pred__40874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__40875) : pred__40874.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__40875)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__40688,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40874.cljs$core$IFn$_invoke$arity$2 ? pred__40874.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__40875) : pred__40874.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__40875)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__40688,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__40688),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),self__.conn_id_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__40688){
var self__ = this;
var this__5342__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.conn_id_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__40688,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.conn_id_,null);

var closed_QMARK_ = taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__40666_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__40666_SHARP_,reason);
}));
var temp__5804__auto___42150 = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5804__auto___42150)){
var x_42151 = temp__5804__auto___42150;
x_42151.abort();
} else {
}

return closed_QMARK_;
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,reason);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2 = (function (chsk,_opts){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto___42152 = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5804__auto___42152)){
var x_42153 = temp__5804__auto___42152;
x_42153.abort();
} else {
}

return null;
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__40879 = opts;
var map__40879__$1 = cljs.core.__destructure_map(map__40879);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40879__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40879__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40879__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token_str = taoensso.sente.get_client_csrf_token_str(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)));
var G__40880_42154 = self__.url;
var G__40881_42155 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__5045__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token_str], null)], 0)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token_str,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null)], 0));
})()], null)], 0));
var G__40882_42156 = (function taoensso$sente$ajax_cb(p__40883){
var map__40884 = p__40883;
var map__40884__$1 = cljs.core.__destructure_map(map__40884);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40884__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40884__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__40673_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__40673_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__40885 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40885,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40885,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1716,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client :ajax cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,(97),null);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__40674_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40674_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
});
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__40880_42154,G__40881_42155,G__40882_42156) : taoensso.sente.ajax_lite.call(null,G__40880_42154,G__40881_42155,G__40882_42156));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var this_conn_id = cljs.core.reset_BANG_(self__.conn_id_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var own_conn_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.conn_id_),this_conn_id);
});
var poll_fn = (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1727,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client :ajax async-poll-for-update!"], null);
}),null)),null,(98),null);

if(own_conn_QMARK_()){
var retry_fn = (function (){
if(((own_conn_QMARK_()) && (cljs.core.not(cljs.core.deref(taoensso.sente.client_unloading_QMARK__))))){
var retry_count_STAR_ = (retry_count + (1));
return taoensso.sente.retry_connect_chsk_BANG_(chsk__$1,self__.backoff_ms_fn,(function taoensso$sente$poll_fn_$_connect_fn(){
return taoensso$sente$poll_fn(retry_count_STAR_);
}),retry_count_STAR_);
} else {
return null;
}
});
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__40889 = self__.url;
var G__40890 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"xhr-cb-fn","xhr-cb-fn",1569050954),(function (xhr){
return cljs.core.reset_BANG_(self__.curr_xhr_,xhr);
}),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),taoensso.sente.get_client_csrf_token_str(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))], null)], 0))], null)], 0));
var G__40891 = (function taoensso$sente$poll_fn_$_ajax_cb(p__40894){
var map__40895 = p__40894;
var map__40895__$1 = cljs.core.__destructure_map(map__40895);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40895__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__40682_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__40682_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__40896 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40896,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__40683_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40683_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));

taoensso$sente$poll_fn((0));

if(handshake_QMARK_){
return null;
} else {
var or__5045__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?new cljs.core.Keyword(null,"noop","noop",-673731258):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__40889,G__40890,G__40891) : taoensso.sente.ajax_lite.call(null,G__40889,G__40890,G__40891));
})());
} else {
return null;
}
});
poll_fn((0));

return chsk__$1;
}));

(taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"conn-id_","conn-id_",-599629337,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$type = true);

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"taoensso.sente/ChAjaxSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,conn_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,conn_id_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__40695){
var extmap__5385__auto__ = (function (){var G__40911 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40695,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__40695)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40911);
} else {
return G__40911;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__40695),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__40695),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__40695),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__40695),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__40695),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__40695),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432).cljs$core$IFn$_invoke$arity$1(G__40695),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__40695),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__40695),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__40695),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__40695),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"conn-id_","conn-id_",2054806432),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k40936,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__40973 = k40936;
var G__40973__$1 = (((G__40973 instanceof cljs.core.Keyword))?G__40973.fqn:null);
switch (G__40973__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40936,else__5346__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__40981){
var vec__40982 = p__40981;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40982,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40982,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40935){
var self__ = this;
var G__40935__$1 = this;
return (new cljs.core.RecordIter((0),G__40935__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40937,other40938){
var self__ = this;
var this40937__$1 = this;
return (((!((other40938 == null)))) && ((((this40937__$1.constructor === other40938.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40937__$1.ws_chsk_opts,other40938.ws_chsk_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40937__$1.ajax_chsk_opts,other40938.ajax_chsk_opts)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40937__$1.state_,other40938.state_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40937__$1.impl_,other40938.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40937__$1.__extmap,other40938.__extmap)))))))))))));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k40936){
var self__ = this;
var this__5350__auto____$1 = this;
var G__40993 = k40936;
var G__40993__$1 = (((G__40993 instanceof cljs.core.Keyword))?G__40993.fqn:null);
switch (G__40993__$1) {
case "ws-chsk-opts":
case "ajax-chsk-opts":
case "state_":
case "impl_":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40936);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__40935){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__40996 = cljs.core.keyword_identical_QMARK_;
var expr__40997 = k__5352__auto__;
if(cljs.core.truth_((pred__40996.cljs$core$IFn$_invoke$arity$2 ? pred__40996.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__40997) : pred__40996.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__40997)))){
return (new taoensso.sente.ChAutoSocket(G__40935,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40996.cljs$core$IFn$_invoke$arity$2 ? pred__40996.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__40997) : pred__40996.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__40997)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__40935,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40996.cljs$core$IFn$_invoke$arity$2 ? pred__40996.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__40997) : pred__40996.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__40997)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__40935,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40996.cljs$core$IFn$_invoke$arity$2 ? pred__40996.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__40997) : pred__40996.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__40997)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__40935,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__40935),null));
}
}
}
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__40935){
var self__ = this;
var this__5342__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__40935,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_break_connection_BANG_$arity$2 = (function (chsk,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5804__auto__)){
var impl = temp__5804__auto__;
return taoensso.sente._chsk_break_connection_BANG_(impl,opts);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5804__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5804__auto__)){
var impl = temp__5804__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,reason);

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5802__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5802__auto__)){
var impl = temp__5802__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__41014 = opts;
var map__41014__$1 = cljs.core.__destructure_map(map__41014);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_chsk_BANG_ = (function (){
var ajax_chsk = taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)));
cljs.core.remove_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return ajax_chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
var ws_chsk_BANG_ = (function (){
var ws_chsk = taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)));
var downgraded_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),(function (_,___$1,old_state,new_state){
var b2__28336__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state);
if(b2__28336__auto__){
var state_changed_QMARK_ = b2__28336__auto__;
var b2__28336__auto____$1 = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(b2__28336__auto____$1)){
var impl = b2__28336__auto____$1;
var b2__28336__auto____$2 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(b2__28336__auto____$2)){
var ever_opened_QMARK__ = b2__28336__auto____$2;
var b2__28336__auto____$3 = cljs.core.not(cljs.core.deref(ever_opened_QMARK__));
if(b2__28336__auto____$3){
var never_opened_QMARK_ = b2__28336__auto____$3;
var b2__28336__auto____$4 = new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(b2__28336__auto____$4)){
var ws_error = b2__28336__auto____$4;
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1858,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client permanently downgrading chsk mode: :auto -> :ajax"], null);
}),null)),null,(99),null);

taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_(self__.impl_,ajax_chsk_BANG_());
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

return ws_chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
cljs.core.reset_BANG_(self__.impl_,(function (){var or__5045__auto__ = ws_chsk_BANG_();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ajax_chsk_BANG_();
}
})());

return chsk__$1;
}));

(taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
}));

(taoensso.sente.ChAutoSocket.cljs$lang$type = true);

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
}));

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"taoensso.sente/ChAutoSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__40945){
var extmap__5385__auto__ = (function (){var G__41061 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40945,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__40945)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41061);
} else {
return G__41061;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__40945),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__40945),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__40945),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__40945),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__41071 = protocol;
var G__41071__$1 = (((G__41071 instanceof cljs.core.Keyword))?G__41071.fqn:null);
switch (G__41071__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null)),x);
})(protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41072){if((e41072 instanceof Error)){
var e = e41072;
return e;
} else {
throw e41072;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1877,21,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:","null","http:","null"], null), null)], null),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__41074 = type;
var G__41074__$1 = (((G__41074 instanceof cljs.core.Keyword))?G__41074.fqn:null);
switch (G__41074__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__41075 = protocol__$2;
switch (G__41075) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41075)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41074__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Required arguments:
 *     path              ; Channel socket server route/path (typically `/chsk`)
 *     ?csrf-token-or-fn ; CSRF string or (fn [])->string to match token expected by server.
 *                       ; nil => server not expecting any CSRF token.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :port           ; Server port (defaults to current page's port).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :headers        ; Map of additional headers to include in the initiating request
 *                     ; (currently only for Java clients).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`, see
 *                     ; relevant docstring for more info.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *                     ; Default false for Sente >= v1.18, true otherwise.
 * 
 *     :ws-kalive-ms       ; Ping to keep a WebSocket conn alive if no activity
 *                         ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 *     :ws-ping-timeout-ms ; When pinging to test WebSocket connections, msecs to
 *                         ; await reply before regarding the connection as broken
 * 
 *     :ws-constructor ; Advanced, (fn [{:keys [uri-str headers on-message on-error on-close]}]
 *                     ; => nil, or delay that can be dereffed to get a connected WebSocket.
 *                     ; See `default-client-ws-constructor` code for details.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42162 = arguments.length;
var i__5770__auto___42163 = (0);
while(true){
if((i__5770__auto___42163 < len__5769__auto___42162)){
args__5775__auto__.push((arguments[i__5770__auto___42163]));

var G__42164 = (i__5770__auto___42163 + (1));
i__5770__auto___42163 = G__42164;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token_or_fn,p__41090){
var vec__41091 = p__41090;
var map__41094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41091,(0),null);
var map__41094__$1 = cljs.core.__destructure_map(map__41094);
var opts = map__41094__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_ping_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41094__$1,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),(5000));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41094__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(20000));
var ws_constructor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41094__$1,new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),taoensso.sente.default_client_ws_constructor);
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41094__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41094__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ws_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41094__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41094__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41094__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41094__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),false);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41091,(1),null);
var e_42165 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),x);
})(type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41103){if((e41103 instanceof Error)){
var e_42165 = e41103;
return e_42165;
} else {
throw e41103;

}
}})();
if((e_42165 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1940,6,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),"null",new cljs.core.Keyword(null,"ajax","ajax",814345549),"null",new cljs.core.Keyword(null,"auto","auto",-566279492),"null"], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null),type,e_42165,null);
}

var e_42166 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41106){if((e41106 instanceof Error)){
var e_42166 = e41106;
return e_42166;
} else {
throw e41106;

}
}})();
if((e_42166 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1941,6,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),client_id,e_42166,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1943,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,(100),null);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1944,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,(101),null);
} else {
}

taoensso.sente.get_client_csrf_token_str(true,_QMARK_csrf_token_or_fn);

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__41108 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var z = (function (){try{var or__5045__auto__ = path;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
}catch (e41111){if((e41111 instanceof Error)){
var e = e41111;
return (new taoensso.truss.impl.WrappedError(e));
} else {
throw e41111;

}
}})();
var e = (function (){try{if((z instanceof taoensso.truss.impl.WrappedError)){
return z;
} else {
if(taoensso.truss.impl.some_QMARK_(z)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}
}catch (e41113){if((e41113 instanceof Error)){
var e = e41113;
return e;
} else {
throw e41113;

}
}})();
if((e == null)){
return z;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),1955,27,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol("taoensso.truss.impl","some?","taoensso.truss.impl/some?",-1118207366,null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.list(new cljs.core.Keyword(null,"pathname","pathname",-1420497528),new cljs.core.Symbol(null,"win-loc","win-loc",-1022715728,null))),z,e,null);
}
})();
var temp__5802__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443))),(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)))], null);
} else {
var protocol__$1 = (function (){var or__5045__auto__ = protocol;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (cljs.core.truth_(host)?(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):host):(cljs.core.truth_(port)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hostname","hostname",2105669933).cljs$core$IFn$_invoke$arity$1(win_loc)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''):new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41108,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41108,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
})));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var ws_ping_timeout_ms__$1 = ((cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968)):((cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"ws-kalive-ping-timeout-ms","ws-kalive-ping-timeout-ms",255808958)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"ws-kalive-ping-timeout-ms","ws-kalive-ping-timeout-ms",255808958)):ws_ping_timeout_ms
));
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms,new cljs.core.Keyword(null,"ws-ping-timeout-ms","ws-ping-timeout-ms",671323968),ws_ping_timeout_ms__$1,new cljs.core.Keyword(null,"ws-constructor","ws-constructor",1384015617),taoensso.sente.default_client_ws_constructor], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643),ws_opts], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__41124 = type;
var G__41124__$1 = (((G__41124 instanceof cljs.core.Keyword))?G__41124.fqn:null);
switch (G__41124__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts,_QMARK_csrf_token_or_fn);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts,_QMARK_csrf_token_or_fn);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts,_QMARK_csrf_token_or_fn);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41124__$1)].join('')));

}
})());
var temp__5802__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5802__auto__)){
var chsk = temp__5802__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
var vec__41135 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41135,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41135,(1),null);
var ev__$1 = vec__41135;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,2063,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Client failed to create channel socket"], null);
}),null)),null,(102),null);

return null;
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq41085){
var G__41086 = cljs.core.first(seq41085);
var seq41085__$1 = cljs.core.next(seq41085);
var G__41087 = cljs.core.first(seq41085__$1);
var seq41085__$2 = cljs.core.next(seq41085__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41086,G__41087,seq41085__$2);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__41148 = opts;
var map__41148__$1 = cljs.core.__destructure_map(map__41148);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41148__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41148__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41148__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var c__28093__auto___42168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_41181){
var state_val_41182 = (state_41181[(1)]);
if((state_val_41182 === (7))){
var inst_41166 = (state_41181[(7)]);
var inst_41166__$1 = (state_41181[(2)]);
var state_41181__$1 = (function (){var statearr_41190 = state_41181;
(statearr_41190[(7)] = inst_41166__$1);

return statearr_41190;
})();
if(cljs.core.truth_(inst_41166__$1)){
var statearr_41191_42169 = state_41181__$1;
(statearr_41191_42169[(1)] = (8));

} else {
var statearr_41192_42170 = state_41181__$1;
(statearr_41192_42170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41182 === (1))){
var state_41181__$1 = state_41181;
var statearr_41194_42171 = state_41181__$1;
(statearr_41194_42171[(2)] = null);

(statearr_41194_42171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41182 === (4))){
var inst_41158 = (state_41181[(8)]);
var inst_41160 = (state_41181[(9)]);
var inst_41161 = (state_41181[(10)]);
var inst_41158__$1 = (state_41181[(2)]);
var inst_41159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41158__$1,(0),null);
var inst_41160__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41158__$1,(1),null);
var inst_41161__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41160__$1,ch_ctrl);
var state_41181__$1 = (function (){var statearr_41195 = state_41181;
(statearr_41195[(8)] = inst_41158__$1);

(statearr_41195[(11)] = inst_41159);

(statearr_41195[(9)] = inst_41160__$1);

(statearr_41195[(10)] = inst_41161__$1);

return statearr_41195;
})();
if(inst_41161__$1){
var statearr_41197_42172 = state_41181__$1;
(statearr_41197_42172[(1)] = (5));

} else {
var statearr_41198_42173 = state_41181__$1;
(statearr_41198_42173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41182 === (6))){
var inst_41159 = (state_41181[(11)]);
var inst_41164 = (inst_41159 == null);
var state_41181__$1 = state_41181;
var statearr_41200_42174 = state_41181__$1;
(statearr_41200_42174[(2)] = inst_41164);

(statearr_41200_42174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41182 === (3))){
var inst_41179 = (state_41181[(2)]);
var state_41181__$1 = state_41181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41181__$1,inst_41179);
} else {
if((state_val_41182 === (2))){
var inst_41154 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41155 = [ch_recv,ch_ctrl];
var inst_41156 = (new cljs.core.PersistentVector(null,2,(5),inst_41154,inst_41155,null));
var state_41181__$1 = state_41181;
return cljs.core.async.ioc_alts_BANG_(state_41181__$1,(4),inst_41156);
} else {
if((state_val_41182 === (9))){
var inst_41159 = (state_41181[(11)]);
var inst_41158 = (state_41181[(8)]);
var inst_41160 = (state_41181[(9)]);
var inst_41166 = (state_41181[(7)]);
var inst_41170 = cljs.core.__destructure_map(inst_41159);
var inst_41171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41170,new cljs.core.Keyword(null,"event","event",301435442));
var inst_41172 = (function (){var vec__41151 = inst_41158;
var v = inst_41159;
var p = inst_41160;
var stop_QMARK_ = inst_41166;
var map__41169 = inst_41170;
var event_msg = inst_41170;
var event = inst_41171;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,2091,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk router pre-handler event: %s",event], null);
}),null)),null,(105),null);
} else {
}

var G__41214 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41221){if((e41221 instanceof Error)){
var e = e41221;
return e;
} else {
throw e41221;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),2094,25,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"server-event-msg?","server-event-msg?",-1249957951,null),new cljs.core.Symbol(null,"event-msg","event-msg",-509558413,null),event_msg,e,null);
}
})():(function (){var e = (function (){try{if(taoensso.sente.client_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e41225){if((e41225 instanceof Error)){
var e = e41225;
return e;
} else {
throw e41225;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,new cljs.core.Symbol(null,"taoensso.sente","taoensso.sente",-1876377838,null),2095,25,"jar:file:/Users/alexanderolshansky/.m2/repository/com/taoensso/sente/1.19.2/sente-1.19.2.jar!/taoensso/sente.cljc",new cljs.core.Symbol(null,"client-event-msg?","client-event-msg?",-1506206275,null),new cljs.core.Symbol(null,"event-msg","event-msg",-509558413,null),event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__41214) : event_msg_handler.call(null,G__41214));
}catch (e41208){var e1 = e41208;
try{var temp__5802__auto__ = error_handler;
if(cljs.core.truth_(temp__5802__auto__)){
var eh = temp__5802__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,2100,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,(104),null);
}
}catch (e41210){var e2 = e41210;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,2101,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,(103),null);
}}});
})();
var inst_41173 = execute1(inst_41172);
var state_41181__$1 = (function (){var statearr_41234 = state_41181;
(statearr_41234[(12)] = inst_41173);

return statearr_41234;
})();
var statearr_41237_42175 = state_41181__$1;
(statearr_41237_42175[(2)] = null);

(statearr_41237_42175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41182 === (5))){
var inst_41161 = (state_41181[(10)]);
var state_41181__$1 = state_41181;
var statearr_41242_42176 = state_41181__$1;
(statearr_41242_42176[(2)] = inst_41161);

(statearr_41242_42176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41182 === (10))){
var inst_41177 = (state_41181[(2)]);
var state_41181__$1 = state_41181;
var statearr_41245_42177 = state_41181__$1;
(statearr_41245_42177[(2)] = inst_41177);

(statearr_41245_42177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41182 === (8))){
var state_41181__$1 = state_41181;
var statearr_41249_42178 = state_41181__$1;
(statearr_41249_42178[(2)] = null);

(statearr_41249_42178[(1)] = (10));


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
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__27280__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__27280__auto____0 = (function (){
var statearr_41262 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41262[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__27280__auto__);

(statearr_41262[(1)] = (1));

return statearr_41262;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__27280__auto____1 = (function (state_41181){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_41181);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e41265){var ex__27283__auto__ = e41265;
var statearr_41267_42179 = state_41181;
(statearr_41267_42179[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_41181[(4)]))){
var statearr_41269_42180 = state_41181;
(statearr_41269_42180[(1)] = cljs.core.first((state_41181[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42181 = state_41181;
state_41181 = G__42181;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__27280__auto__ = function(state_41181){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__27280__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__27280__auto____1.call(this,state_41181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__27280__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__27280__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_41272 = f__28094__auto__();
(statearr_41272[(6)] = c__28093__auto___42168);

return statearr_41272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));


return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42182 = arguments.length;
var i__5770__auto___42183 = (0);
while(true){
if((i__5770__auto___42183 < len__5769__auto___42182)){
args__5775__auto__.push((arguments[i__5770__auto___42183]));

var G__42184 = (i__5770__auto___42183 + (1));
i__5770__auto___42183 = G__42184;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__41281){
var vec__41282 = p__41281;
var map__41285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41282,(0),null);
var map__41285__$1 = cljs.core.__destructure_map(map__41285);
var opts = map__41285__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41285__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41285__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41285__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq41276){
var G__41277 = cljs.core.first(seq41276);
var seq41276__$1 = cljs.core.next(seq41276);
var G__41278 = cljs.core.first(seq41276__$1);
var seq41276__$2 = cljs.core.next(seq41276__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41277,G__41278,seq41276__$2);
}));

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42185 = arguments.length;
var i__5770__auto___42186 = (0);
while(true){
if((i__5770__auto___42186 < len__5769__auto___42185)){
args__5775__auto__.push((arguments[i__5770__auto___42186]));

var G__42187 = (i__5770__auto___42186 + (1));
i__5770__auto___42186 = G__42187;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__41307){
var vec__41308 = p__41307;
var map__41311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41308,(0),null);
var map__41311__$1 = cljs.core.__destructure_map(map__41311);
var opts = map__41311__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41311__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41311__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq41297){
var G__41298 = cljs.core.first(seq41297);
var seq41297__$1 = cljs.core.next(seq41297);
var G__41299 = cljs.core.first(seq41297__$1);
var seq41297__$2 = cljs.core.next(seq41297__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41298,G__41299,seq41297__$2);
}));

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__41315 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__41316 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__41315,G__41316) : event_handler.call(null,G__41315,G__41316));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__41317,websocket_QMARK_){
var map__41318 = p__41317;
var map__41318__$1 = cljs.core.__destructure_map(map__41318);
var location__$1 = map__41318__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41318__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41318__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41318__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = path;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=taoensso.sente.js.map
