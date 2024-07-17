goog.provide('app.ui.shared.components.notifications');

app.ui.shared.components.notifications.notification = (function (){var G__28662 = (function app$ui$shared$components$notifications$notification_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28665 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__28670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28665,(0),null);
var map__28670__$1 = cljs.core.__destructure_map(map__28670);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28670__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28670__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28670__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));

var vec__28687 = helix.hooks.use_state("");
var hide_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28687,(0),null);
var set_hide_class_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28687,(1),null);
var delete$ = (function (){
var c__27277__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27278__auto__ = (function (){var switch__27098__auto__ = (function (state_29106){
var state_val_29107 = (state_29106[(1)]);
if((state_val_29107 === (1))){
var state_29106__$1 = state_29106;
if(cljs.core.truth_(duration)){
var statearr_29204_29477 = state_29106__$1;
(statearr_29204_29477[(1)] = (3));

} else {
var statearr_29207_29479 = state_29106__$1;
(statearr_29207_29479[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (2))){
var inst_28876 = (state_29106[(2)]);
var inst_28878 = (set_hide_class_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hide_class_BANG_.cljs$core$IFn$_invoke$arity$1(" hide") : set_hide_class_BANG_.call(null," hide"));
var inst_28879 = cljs.core.async.timeout((1000));
var state_29106__$1 = (function (){var statearr_29217 = state_29106;
(statearr_29217[(7)] = inst_28876);

(statearr_29217[(8)] = inst_28878);

return statearr_29217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29106__$1,(6),inst_28879);
} else {
if((state_val_29107 === (3))){
var inst_28852 = (duration + (500));
var state_29106__$1 = state_29106;
var statearr_29227_29481 = state_29106__$1;
(statearr_29227_29481[(2)] = inst_28852);

(statearr_29227_29481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (4))){
var state_29106__$1 = state_29106;
var statearr_29230_29483 = state_29106__$1;
(statearr_29230_29483[(2)] = (3500));

(statearr_29230_29483[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29107 === (5))){
var inst_28873 = (state_29106[(2)]);
var inst_28874 = cljs.core.async.timeout(inst_28873);
var state_29106__$1 = state_29106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29106__$1,(2),inst_28874);
} else {
if((state_val_29107 === (6))){
var inst_28881 = (state_29106[(2)]);
var inst_28885 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28920 = [new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),id];
var inst_28921 = (new cljs.core.PersistentVector(null,2,(5),inst_28885,inst_28920,null));
var inst_28922 = refx.alpha.dispatch(inst_28921);
var state_29106__$1 = (function (){var statearr_29238 = state_29106;
(statearr_29238[(9)] = inst_28881);

return statearr_29238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29106__$1,inst_28922);
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
var app$ui$shared$components$notifications$notification_render_$_state_machine__27099__auto__ = null;
var app$ui$shared$components$notifications$notification_render_$_state_machine__27099__auto____0 = (function (){
var statearr_29241 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29241[(0)] = app$ui$shared$components$notifications$notification_render_$_state_machine__27099__auto__);

(statearr_29241[(1)] = (1));

return statearr_29241;
});
var app$ui$shared$components$notifications$notification_render_$_state_machine__27099__auto____1 = (function (state_29106){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_29106);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e29291){var ex__27102__auto__ = e29291;
var statearr_29296_29502 = state_29106;
(statearr_29296_29502[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_29106[(4)]))){
var statearr_29298_29504 = state_29106;
(statearr_29298_29504[(1)] = cljs.core.first((state_29106[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29508 = state_29106;
state_29106 = G__29508;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$ui$shared$components$notifications$notification_render_$_state_machine__27099__auto__ = function(state_29106){
switch(arguments.length){
case 0:
return app$ui$shared$components$notifications$notification_render_$_state_machine__27099__auto____0.call(this);
case 1:
return app$ui$shared$components$notifications$notification_render_$_state_machine__27099__auto____1.call(this,state_29106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$ui$shared$components$notifications$notification_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$ui$shared$components$notifications$notification_render_$_state_machine__27099__auto____0;
app$ui$shared$components$notifications$notification_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$ui$shared$components$notifications$notification_render_$_state_machine__27099__auto____1;
return app$ui$shared$components$notifications$notification_render_$_state_machine__27099__auto__;
})()
})();
var state__27279__auto__ = (function (){var statearr_29351 = f__27278__auto__();
(statearr_29351[(6)] = c__27277__auto__);

return statearr_29351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27279__auto__);
}));

return c__27277__auto__;
});
var G__29353_29543 = helix.hooks.wrap_fx((function (){
return delete$();
}));
var G__29354_29544 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__29353_29543,G__29354_29544) : helix.hooks.raw_use_effect.call(null,G__29353_29543,G__29354_29544));

var G__29381 = "div";
var G__29382 = (function (){var obj29392 = ({"className":helix.impl.props.normalize_class(["notification",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hide_class)].join('')),"children":message});
return obj29392;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29381,G__29382) : helix.core.jsx.call(null,G__29381,G__29382));
});
if(goog.DEBUG === true){
var G__29397 = G__28662;
(G__29397.displayName = "app.ui.shared.components.notifications/notification");

return G__29397;
} else {
return G__28662;
}
})();




app.ui.shared.components.notifications.notifications = (function (){var G__29427 = (function app$ui$shared$components$notifications$notifications_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29432 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var notifications = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null));
var G__29438 = "div";
var G__29439 = (function (){var obj29441 = ({"className":"notifications","children":cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29444){
var vec__29445 = p__29444;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29445,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29445,(1),null);
var G__29451 = app.ui.shared.components.notifications.notification;
var G__29452 = helix.impl.props.merge_obj((function (){var obj29455 = ({"id":id});
return obj29455;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(n));
var G__29453 = id;
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$3 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$3(G__29451,G__29452,G__29453) : helix.core.jsx.call(null,G__29451,G__29452,G__29453));
}),notifications)});
return obj29441;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29438,G__29439) : helix.core.jsx.call(null,G__29438,G__29439));
});
if(goog.DEBUG === true){
var G__29462 = G__29427;
(G__29462.displayName = "app.ui.shared.components.notifications/notifications");

return G__29462;
} else {
return G__29427;
}
})();




//# sourceMappingURL=app.ui.shared.components.notifications.js.map
