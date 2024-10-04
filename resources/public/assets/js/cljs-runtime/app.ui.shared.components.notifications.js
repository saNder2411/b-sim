goog.provide('app.ui.shared.components.notifications');

app.ui.shared.components.notifications.notification = (function (){var G__36132 = (function app$ui$shared$components$notifications$notification_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__36152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36149,(0),null);
var map__36152__$1 = cljs.core.__destructure_map(map__36152);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36152__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36152__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36152__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));

var vec__36158 = helix.hooks.use_state("");
var hide_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36158,(0),null);
var set_hide_class_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36158,(1),null);
var delete$ = (function (){
var c__27285__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27286__auto__ = (function (){var switch__27247__auto__ = (function (state_36394){
var state_val_36398 = (state_36394[(1)]);
if((state_val_36398 === (1))){
var state_36394__$1 = state_36394;
if(cljs.core.truth_(duration)){
var statearr_36503_36738 = state_36394__$1;
(statearr_36503_36738[(1)] = (3));

} else {
var statearr_36510_36739 = state_36394__$1;
(statearr_36510_36739[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (2))){
var inst_36317 = (state_36394[(2)]);
var inst_36318 = (set_hide_class_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hide_class_BANG_.cljs$core$IFn$_invoke$arity$1(" hide") : set_hide_class_BANG_.call(null," hide"));
var inst_36321 = cljs.core.async.timeout((1000));
var state_36394__$1 = (function (){var statearr_36517 = state_36394;
(statearr_36517[(7)] = inst_36317);

(statearr_36517[(8)] = inst_36318);

return statearr_36517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36394__$1,(6),inst_36321);
} else {
if((state_val_36398 === (3))){
var inst_36292 = (duration + (500));
var state_36394__$1 = state_36394;
var statearr_36547_36747 = state_36394__$1;
(statearr_36547_36747[(2)] = inst_36292);

(statearr_36547_36747[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (4))){
var state_36394__$1 = state_36394;
var statearr_36556_36750 = state_36394__$1;
(statearr_36556_36750[(2)] = (3500));

(statearr_36556_36750[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36398 === (5))){
var inst_36313 = (state_36394[(2)]);
var inst_36314 = cljs.core.async.timeout(inst_36313);
var state_36394__$1 = state_36394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36394__$1,(2),inst_36314);
} else {
if((state_val_36398 === (6))){
var inst_36323 = (state_36394[(2)]);
var inst_36337 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36346 = [new cljs.core.Keyword("notifications","delete","notifications/delete",-757483500),id];
var inst_36347 = (new cljs.core.PersistentVector(null,2,(5),inst_36337,inst_36346,null));
var inst_36348 = refx.alpha.dispatch(inst_36347);
var state_36394__$1 = (function (){var statearr_36579 = state_36394;
(statearr_36579[(9)] = inst_36323);

return statearr_36579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36394__$1,inst_36348);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var app$ui$shared$components$notifications$notification_render_$_state_machine__27248__auto__ = null;
var app$ui$shared$components$notifications$notification_render_$_state_machine__27248__auto____0 = (function (){
var statearr_36581 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36581[(0)] = app$ui$shared$components$notifications$notification_render_$_state_machine__27248__auto__);

(statearr_36581[(1)] = (1));

return statearr_36581;
});
var app$ui$shared$components$notifications$notification_render_$_state_machine__27248__auto____1 = (function (state_36394){
while(true){
var ret_value__27249__auto__ = (function (){try{while(true){
var result__27250__auto__ = switch__27247__auto__(state_36394);
if(cljs.core.keyword_identical_QMARK_(result__27250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27250__auto__;
}
break;
}
}catch (e36584){var ex__27251__auto__ = e36584;
var statearr_36592_36762 = state_36394;
(statearr_36592_36762[(2)] = ex__27251__auto__);


if(cljs.core.seq((state_36394[(4)]))){
var statearr_36594_36764 = state_36394;
(statearr_36594_36764[(1)] = cljs.core.first((state_36394[(4)])));

} else {
throw ex__27251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36765 = state_36394;
state_36394 = G__36765;
continue;
} else {
return ret_value__27249__auto__;
}
break;
}
});
app$ui$shared$components$notifications$notification_render_$_state_machine__27248__auto__ = function(state_36394){
switch(arguments.length){
case 0:
return app$ui$shared$components$notifications$notification_render_$_state_machine__27248__auto____0.call(this);
case 1:
return app$ui$shared$components$notifications$notification_render_$_state_machine__27248__auto____1.call(this,state_36394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$ui$shared$components$notifications$notification_render_$_state_machine__27248__auto__.cljs$core$IFn$_invoke$arity$0 = app$ui$shared$components$notifications$notification_render_$_state_machine__27248__auto____0;
app$ui$shared$components$notifications$notification_render_$_state_machine__27248__auto__.cljs$core$IFn$_invoke$arity$1 = app$ui$shared$components$notifications$notification_render_$_state_machine__27248__auto____1;
return app$ui$shared$components$notifications$notification_render_$_state_machine__27248__auto__;
})()
})();
var state__27287__auto__ = (function (){var statearr_36597 = f__27286__auto__();
(statearr_36597[(6)] = c__27285__auto__);

return statearr_36597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27287__auto__);
}));

return c__27285__auto__;
});
var G__36613_36766 = helix.hooks.wrap_fx((function (){
return delete$();
}));
var G__36614_36767 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__36613_36766,G__36614_36767) : helix.hooks.raw_use_effect.call(null,G__36613_36766,G__36614_36767));

var G__36623 = "div";
var G__36624 = (function (){var obj36634 = ({"className":helix.impl.props.normalize_class(["notification",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hide_class)].join('')),"children":message});
return obj36634;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36623,G__36624) : helix.core.jsx.call(null,G__36623,G__36624));
});
if(goog.DEBUG === true){
var G__36652 = G__36132;
(G__36652.displayName = "app.ui.shared.components.notifications/notification");

return G__36652;
} else {
return G__36132;
}
})();




app.ui.shared.components.notifications.notifications = (function (){var G__36666 = (function app$ui$shared$components$notifications$notifications_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36677 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var notifications = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null));
var G__36693 = "div";
var G__36694 = (function (){var obj36698 = ({"className":"notifications","children":cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36703){
var vec__36706 = p__36703;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36706,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36706,(1),null);
var G__36711 = app.ui.shared.components.notifications.notification;
var G__36712 = helix.impl.props.merge_obj((function (){var obj36717 = ({"id":id});
return obj36717;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(n));
var G__36713 = id;
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$3 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$3(G__36711,G__36712,G__36713) : helix.core.jsx.call(null,G__36711,G__36712,G__36713));
}),notifications)});
return obj36698;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36693,G__36694) : helix.core.jsx.call(null,G__36693,G__36694));
});
if(goog.DEBUG === true){
var G__36731 = G__36666;
(G__36731.displayName = "app.ui.shared.components.notifications/notifications");

return G__36731;
} else {
return G__36666;
}
})();




//# sourceMappingURL=app.ui.shared.components.notifications.js.map
