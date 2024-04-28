goog.provide('app.shared.boiler.burner_flame_animation');

app.shared.boiler.burner_flame_animation.burner_flame_animation = (function (){var G__83390 = (function app$shared$boiler$burner_flame_animation$burner_flame_animation_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__83391 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var vec__83394 = helix.hooks.use_state((0));
var frame_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83394,(0),null);
var set_frame_pos_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83394,(1),null);
var next_shift_pos = (((frame_pos < (2139)))?(93):(-2139));
var run_animation = (function (){
var c__27326__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27327__auto__ = (function (){var switch__27098__auto__ = (function (state_83402){
var state_val_83403 = (state_83402[(1)]);
if((state_val_83403 === (1))){
var inst_83397 = cljs.core.async.timeout((125));
var state_83402__$1 = state_83402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83402__$1,(2),inst_83397);
} else {
if((state_val_83403 === (2))){
var inst_83399 = (state_83402[(2)]);
var inst_83400 = (set_frame_pos_BANG_.cljs$core$IFn$_invoke$arity$2 ? set_frame_pos_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,next_shift_pos) : set_frame_pos_BANG_.call(null,cljs.core._PLUS_,next_shift_pos));
var state_83402__$1 = (function (){var statearr_83404 = state_83402;
(statearr_83404[(7)] = inst_83399);

return statearr_83404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_83402__$1,inst_83400);
} else {
return null;
}
}
});
return (function() {
var app$shared$boiler$burner_flame_animation$burner_flame_animation_render_$_state_machine__27099__auto__ = null;
var app$shared$boiler$burner_flame_animation$burner_flame_animation_render_$_state_machine__27099__auto____0 = (function (){
var statearr_83405 = [null,null,null,null,null,null,null,null];
(statearr_83405[(0)] = app$shared$boiler$burner_flame_animation$burner_flame_animation_render_$_state_machine__27099__auto__);

(statearr_83405[(1)] = (1));

return statearr_83405;
});
var app$shared$boiler$burner_flame_animation$burner_flame_animation_render_$_state_machine__27099__auto____1 = (function (state_83402){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_83402);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e83406){var ex__27102__auto__ = e83406;
var statearr_83407_83419 = state_83402;
(statearr_83407_83419[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_83402[(4)]))){
var statearr_83408_83420 = state_83402;
(statearr_83408_83420[(1)] = cljs.core.first((state_83402[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83421 = state_83402;
state_83402 = G__83421;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$shared$boiler$burner_flame_animation$burner_flame_animation_render_$_state_machine__27099__auto__ = function(state_83402){
switch(arguments.length){
case 0:
return app$shared$boiler$burner_flame_animation$burner_flame_animation_render_$_state_machine__27099__auto____0.call(this);
case 1:
return app$shared$boiler$burner_flame_animation$burner_flame_animation_render_$_state_machine__27099__auto____1.call(this,state_83402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$shared$boiler$burner_flame_animation$burner_flame_animation_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$shared$boiler$burner_flame_animation$burner_flame_animation_render_$_state_machine__27099__auto____0;
app$shared$boiler$burner_flame_animation$burner_flame_animation_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$shared$boiler$burner_flame_animation$burner_flame_animation_render_$_state_machine__27099__auto____1;
return app$shared$boiler$burner_flame_animation$burner_flame_animation_render_$_state_machine__27099__auto__;
})()
})();
var state__27328__auto__ = (function (){var statearr_83409 = f__27327__auto__();
(statearr_83409[(6)] = c__27326__auto__);

return statearr_83409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27328__auto__);
}));

return c__27326__auto__;
});
var G__83410_83422 = helix.hooks.wrap_fx((function (){
return run_animation();
}));
var G__83411_83423 = [frame_pos];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__83410_83422,G__83411_83423) : helix.hooks.raw_use_effect.call(null,G__83410_83422,G__83411_83423));

var G__83412 = "div";
var G__83413 = (function (){var obj83415 = ({"style":(function (){var obj83417 = ({"width":helix.impl.props.__GT_js("600px"),"height":helix.impl.props.__GT_js("93px"),"backgroundImage":helix.impl.props.__GT_js("url(assets/img/flame-sprite.png)"),"backgroundSize":helix.impl.props.__GT_js("600px 2232px"),"backgroundPosition":helix.impl.props.__GT_js(["0px -",cljs.core.str.cljs$core$IFn$_invoke$arity$1(frame_pos),"px"].join(''))});
return obj83417;
})()});
return obj83415;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__83412,G__83413) : helix.core.jsx.call(null,G__83412,G__83413));
});
if(goog.DEBUG === true){
var G__83418 = G__83390;
(G__83418.displayName = "app.shared.boiler.burner-flame-animation/burner-flame-animation");

return G__83418;
} else {
return G__83390;
}
})();




//# sourceMappingURL=app.shared.boiler.burner_flame_animation.js.map
