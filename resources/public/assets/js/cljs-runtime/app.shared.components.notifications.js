goog.provide('app.shared.components.notifications');

app.shared.components.notifications.notification = (function (){var G__30112 = (function app$shared$components$notifications$notification_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30113,(0),null);
var map__30116__$1 = cljs.core.__destructure_map(map__30116);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30116__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30116__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30116__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));

var vec__30117 = helix.hooks.use_state("");
var hide_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30117,(0),null);
var set_hide_class_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30117,(1),null);
var delete$ = (function (){
var c__27262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27263__auto__ = (function (){var switch__27098__auto__ = (function (state_30137){
var state_val_30138 = (state_30137[(1)]);
if((state_val_30138 === (1))){
var state_30137__$1 = state_30137;
if(cljs.core.truth_(duration)){
var statearr_30139_30176 = state_30137__$1;
(statearr_30139_30176[(1)] = (3));

} else {
var statearr_30140_30177 = state_30137__$1;
(statearr_30140_30177[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30138 === (2))){
var inst_30127 = (state_30137[(2)]);
var inst_30128 = (set_hide_class_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_hide_class_BANG_.cljs$core$IFn$_invoke$arity$1(" hide") : set_hide_class_BANG_.call(null," hide"));
var inst_30129 = cljs.core.async.timeout((1000));
var state_30137__$1 = (function (){var statearr_30141 = state_30137;
(statearr_30141[(7)] = inst_30128);

(statearr_30141[(8)] = inst_30127);

return statearr_30141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30137__$1,(6),inst_30129);
} else {
if((state_val_30138 === (3))){
var inst_30121 = (duration + (500));
var state_30137__$1 = state_30137;
var statearr_30142_30178 = state_30137__$1;
(statearr_30142_30178[(2)] = inst_30121);

(statearr_30142_30178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30138 === (4))){
var state_30137__$1 = state_30137;
var statearr_30143_30179 = state_30137__$1;
(statearr_30143_30179[(2)] = (3500));

(statearr_30143_30179[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30138 === (5))){
var inst_30124 = (state_30137[(2)]);
var inst_30125 = cljs.core.async.timeout(inst_30124);
var state_30137__$1 = state_30137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30137__$1,(2),inst_30125);
} else {
if((state_val_30138 === (6))){
var inst_30131 = (state_30137[(2)]);
var inst_30132 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30133 = [new cljs.core.Keyword(null,"delete-notification","delete-notification",213333718),id];
var inst_30134 = (new cljs.core.PersistentVector(null,2,(5),inst_30132,inst_30133,null));
var inst_30135 = refx.alpha.dispatch(inst_30134);
var state_30137__$1 = (function (){var statearr_30144 = state_30137;
(statearr_30144[(9)] = inst_30131);

return statearr_30144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30137__$1,inst_30135);
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
var app$shared$components$notifications$notification_render_$_state_machine__27099__auto__ = null;
var app$shared$components$notifications$notification_render_$_state_machine__27099__auto____0 = (function (){
var statearr_30145 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30145[(0)] = app$shared$components$notifications$notification_render_$_state_machine__27099__auto__);

(statearr_30145[(1)] = (1));

return statearr_30145;
});
var app$shared$components$notifications$notification_render_$_state_machine__27099__auto____1 = (function (state_30137){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_30137);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e30146){var ex__27102__auto__ = e30146;
var statearr_30147_30180 = state_30137;
(statearr_30147_30180[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_30137[(4)]))){
var statearr_30148_30181 = state_30137;
(statearr_30148_30181[(1)] = cljs.core.first((state_30137[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30182 = state_30137;
state_30137 = G__30182;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$shared$components$notifications$notification_render_$_state_machine__27099__auto__ = function(state_30137){
switch(arguments.length){
case 0:
return app$shared$components$notifications$notification_render_$_state_machine__27099__auto____0.call(this);
case 1:
return app$shared$components$notifications$notification_render_$_state_machine__27099__auto____1.call(this,state_30137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$shared$components$notifications$notification_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$shared$components$notifications$notification_render_$_state_machine__27099__auto____0;
app$shared$components$notifications$notification_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$shared$components$notifications$notification_render_$_state_machine__27099__auto____1;
return app$shared$components$notifications$notification_render_$_state_machine__27099__auto__;
})()
})();
var state__27264__auto__ = (function (){var statearr_30149 = f__27263__auto__();
(statearr_30149[(6)] = c__27262__auto__);

return statearr_30149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27264__auto__);
}));

return c__27262__auto__;
});
var G__30150_30183 = helix.hooks.wrap_fx((function (){
return delete$();
}));
var G__30151_30184 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__30150_30183,G__30151_30184) : helix.hooks.raw_use_effect.call(null,G__30150_30183,G__30151_30184));

var G__30152 = "div";
var G__30153 = (function (){var obj30155 = ({"className":helix.impl.props.normalize_class(["notification",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hide_class)].join('')),"children":message});
return obj30155;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30152,G__30153) : helix.core.jsx.call(null,G__30152,G__30153));
});
if(goog.DEBUG === true){
var G__30156 = G__30112;
(G__30156.displayName = "app.shared.components.notifications/notification");

return G__30156;
} else {
return G__30112;
}
})();




app.shared.components.notifications.notifications = (function (){var G__30158 = (function app$shared$components$notifications$notifications_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var notifications = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null));
var G__30162 = "div";
var G__30163 = (function (){var obj30165 = ({"className":"notifications","children":cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30166){
var vec__30167 = p__30166;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30167,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30167,(1),null);
var G__30170 = app.shared.components.notifications.notification;
var G__30171 = helix.impl.props.merge_obj((function (){var obj30174 = ({"id":id});
return obj30174;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(n));
var G__30172 = id;
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$3 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$3(G__30170,G__30171,G__30172) : helix.core.jsx.call(null,G__30170,G__30171,G__30172));
}),notifications)});
return obj30165;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30162,G__30163) : helix.core.jsx.call(null,G__30162,G__30163));
});
if(goog.DEBUG === true){
var G__30175 = G__30158;
(G__30175.displayName = "app.shared.components.notifications/notifications");

return G__30175;
} else {
return G__30158;
}
})();




//# sourceMappingURL=app.shared.components.notifications.js.map
