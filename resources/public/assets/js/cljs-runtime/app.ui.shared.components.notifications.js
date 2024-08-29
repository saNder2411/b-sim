goog.provide('app.ui.shared.components.notifications');

app.ui.shared.components.notifications.notification = (function (){var G__39269 = (function app$ui$shared$components$notifications$notification_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);
var map__39281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39272,(0),null);
var map__39281__$1 = cljs.core.__destructure_map(map__39281);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39281__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39281__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39281__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));

var vec__39283 = helix.hooks.use_state("");
var hide_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39283,(0),null);
var set_hide_class_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39283,(1),null);
var delete$ = (function (){
var c__28093__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_39308){
var state_val_39309 = (state_39308[(1)]);
if((state_val_39309 === (1))){
var state_39308__$1 = state_39308;
if(cljs.core.truth_(duration)){
var statearr_39310_39524 = state_39308__$1;
(statearr_39310_39524[(1)] = (3));

} else {
var statearr_39313_39525 = state_39308__$1;
(statearr_39313_39525[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (2))){
var inst_39298 = (state_39308[(2)]);
var inst_39299 = (set_hide_class_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hide_class_BANG_.cljs$core$IFn$_invoke$arity$1(" hide") : set_hide_class_BANG_.call(null," hide"));
var inst_39300 = cljs.core.async.timeout((1000));
var state_39308__$1 = (function (){var statearr_39314 = state_39308;
(statearr_39314[(7)] = inst_39298);

(statearr_39314[(8)] = inst_39299);

return statearr_39314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39308__$1,(6),inst_39300);
} else {
if((state_val_39309 === (3))){
var inst_39292 = (duration + (500));
var state_39308__$1 = state_39308;
var statearr_39315_39537 = state_39308__$1;
(statearr_39315_39537[(2)] = inst_39292);

(statearr_39315_39537[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (4))){
var state_39308__$1 = state_39308;
var statearr_39318_39538 = state_39308__$1;
(statearr_39318_39538[(2)] = (3500));

(statearr_39318_39538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (5))){
var inst_39295 = (state_39308[(2)]);
var inst_39296 = cljs.core.async.timeout(inst_39295);
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39308__$1,(2),inst_39296);
} else {
if((state_val_39309 === (6))){
var inst_39302 = (state_39308[(2)]);
var inst_39303 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39304 = [new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),id];
var inst_39305 = (new cljs.core.PersistentVector(null,2,(5),inst_39303,inst_39304,null));
var inst_39306 = refx.alpha.dispatch(inst_39305);
var state_39308__$1 = (function (){var statearr_39336 = state_39308;
(statearr_39336[(9)] = inst_39302);

return statearr_39336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39308__$1,inst_39306);
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
var app$ui$shared$components$notifications$notification_render_$_state_machine__27280__auto__ = null;
var app$ui$shared$components$notifications$notification_render_$_state_machine__27280__auto____0 = (function (){
var statearr_39364 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39364[(0)] = app$ui$shared$components$notifications$notification_render_$_state_machine__27280__auto__);

(statearr_39364[(1)] = (1));

return statearr_39364;
});
var app$ui$shared$components$notifications$notification_render_$_state_machine__27280__auto____1 = (function (state_39308){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_39308);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e39367){var ex__27283__auto__ = e39367;
var statearr_39368_39546 = state_39308;
(statearr_39368_39546[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_39308[(4)]))){
var statearr_39373_39547 = state_39308;
(statearr_39373_39547[(1)] = cljs.core.first((state_39308[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39550 = state_39308;
state_39308 = G__39550;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
app$ui$shared$components$notifications$notification_render_$_state_machine__27280__auto__ = function(state_39308){
switch(arguments.length){
case 0:
return app$ui$shared$components$notifications$notification_render_$_state_machine__27280__auto____0.call(this);
case 1:
return app$ui$shared$components$notifications$notification_render_$_state_machine__27280__auto____1.call(this,state_39308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$ui$shared$components$notifications$notification_render_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = app$ui$shared$components$notifications$notification_render_$_state_machine__27280__auto____0;
app$ui$shared$components$notifications$notification_render_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = app$ui$shared$components$notifications$notification_render_$_state_machine__27280__auto____1;
return app$ui$shared$components$notifications$notification_render_$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_39383 = f__28094__auto__();
(statearr_39383[(6)] = c__28093__auto__);

return statearr_39383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

return c__28093__auto__;
});
var G__39388_39555 = helix.hooks.wrap_fx((function (){
return delete$();
}));
var G__39389_39556 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__39388_39555,G__39389_39556) : helix.hooks.raw_use_effect.call(null,G__39388_39555,G__39389_39556));

var G__39401 = "div";
var G__39402 = (function (){var obj39406 = ({"className":helix.impl.props.normalize_class(["notification",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hide_class)].join('')),"children":message});
return obj39406;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39401,G__39402) : helix.core.jsx.call(null,G__39401,G__39402));
});
if(goog.DEBUG === true){
var G__39409 = G__39269;
(G__39409.displayName = "app.ui.shared.components.notifications/notification");

return G__39409;
} else {
return G__39269;
}
})();




app.ui.shared.components.notifications.notifications = (function (){var G__39454 = (function app$ui$shared$components$notifications$notifications_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var notifications = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null));
var G__39475 = "div";
var G__39477 = (function (){var obj39481 = ({"className":"notifications","children":cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39490){
var vec__39495 = p__39490;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39495,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39495,(1),null);
var G__39508 = app.ui.shared.components.notifications.notification;
var G__39509 = helix.impl.props.merge_obj((function (){var obj39517 = ({"id":id});
return obj39517;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(n));
var G__39510 = id;
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$3 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$3(G__39508,G__39509,G__39510) : helix.core.jsx.call(null,G__39508,G__39509,G__39510));
}),notifications)});
return obj39481;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39475,G__39477) : helix.core.jsx.call(null,G__39475,G__39477));
});
if(goog.DEBUG === true){
var G__39520 = G__39454;
(G__39520.displayName = "app.ui.shared.components.notifications/notifications");

return G__39520;
} else {
return G__39454;
}
})();




//# sourceMappingURL=app.ui.shared.components.notifications.js.map
