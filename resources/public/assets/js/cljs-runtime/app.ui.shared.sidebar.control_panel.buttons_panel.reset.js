goog.provide('app.ui.shared.sidebar.control_panel.buttons_panel.reset');

app.ui.shared.sidebar.control_panel.buttons_panel.reset.btn_reset = (function (){var G__39335 = (function app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var reset_sim = (function (){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","send!","ws/send!",480080966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sim","stop","sim/stop",-2140830231)], null)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753)], null));
});
var stop_and_reset = (function (){
var c__28093__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_39379){
var state_val_39380 = (state_39379[(1)]);
if((state_val_39380 === (1))){
var inst_39369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39370 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"stopping"];
var inst_39371 = (new cljs.core.PersistentVector(null,2,(5),inst_39369,inst_39370,null));
var inst_39372 = refx.alpha.dispatch(inst_39371);
var inst_39374 = cljs.core.async.timeout((2000));
var state_39379__$1 = (function (){var statearr_39384 = state_39379;
(statearr_39384[(7)] = inst_39372);

return statearr_39384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39379__$1,(2),inst_39374);
} else {
if((state_val_39380 === (2))){
var inst_39376 = (state_39379[(2)]);
var inst_39377 = reset_sim();
var state_39379__$1 = (function (){var statearr_39386 = state_39379;
(statearr_39386[(8)] = inst_39376);

return statearr_39386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39379__$1,inst_39377);
} else {
return null;
}
}
});
return (function() {
var app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27280__auto__ = null;
var app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27280__auto____0 = (function (){
var statearr_39390 = [null,null,null,null,null,null,null,null,null];
(statearr_39390[(0)] = app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27280__auto__);

(statearr_39390[(1)] = (1));

return statearr_39390;
});
var app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27280__auto____1 = (function (state_39379){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_39379);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e39392){var ex__27283__auto__ = e39392;
var statearr_39394_39541 = state_39379;
(statearr_39394_39541[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_39379[(4)]))){
var statearr_39399_39543 = state_39379;
(statearr_39399_39543[(1)] = cljs.core.first((state_39379[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39544 = state_39379;
state_39379 = G__39544;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27280__auto__ = function(state_39379){
switch(arguments.length){
case 0:
return app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27280__auto____0.call(this);
case 1:
return app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27280__auto____1.call(this,state_39379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27280__auto____0;
app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27280__auto____1;
return app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_39408 = f__28094__auto__();
(statearr_39408[(6)] = c__28093__auto__);

return statearr_39408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

return c__28093__auto__;
});
var reset_handler = (function (){var G__39410 = sim;
switch (G__39410) {
case "run":
return stop_and_reset;

break;
case "pause":
return stop_and_reset;

break;
default:
return reset_sim;

}
})();
var G__39415 = "g";
var G__39416 = (function (){var obj39418 = ({"children":[(function (){var G__39421 = app.ui.shared.sidebar.control_panel.buttons_panel.layer.btn_layer;
var G__39422 = (function (){var obj39426 = ({"dl":"M317.26,188.637h-1.237a50.31,50.31,0,0,1-50.31-50.31V78.861H367.57v59.467A50.31,50.31,0,0,1,317.26,188.637Z","dm":"M316.024,187.291a49.867,49.867,0,0,1-49.811-49.81V78.515H367.071v58.966a49.868,49.868,0,0,1-49.811,49.81Z","dt":"M367.071,78.515v58.966a49.868,49.868,0,0,1-49.811,49.81h-1.236a49.867,49.867,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-2)"});
return obj39426;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39421,G__39422) : helix.core.jsx.call(null,G__39421,G__39422));
})(),(function (){var G__39431 = "g";
var G__39432 = (function (){var obj39434 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__39439 = "circle";
var G__39440 = (function (){var obj39448 = ({"className":"btn-pnl-stroke","stroke":"#db1d43","cx":316.642,"cy":136.883,"r":37.804});
return obj39448;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39439,G__39440) : helix.core.jsx.call(null,G__39439,G__39440));
})(),(function (){var G__39455 = "circle";
var G__39456 = (function (){var obj39461 = ({"className":"btn-pnl-stroke","stroke":"#db1d43","cx":316.642,"cy":136.883,"r":20.804});
return obj39461;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39455,G__39456) : helix.core.jsx.call(null,G__39455,G__39456));
})(),(function (){var G__39463 = "path";
var G__39464 = (function (){var obj39471 = ({"fill":"#db1d43","stroke":"#db1d43","d":"M 289.837433 132.725815 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281311 131.404938 289.991119 131.57309 289.834503 131.845612 C 289.677887 132.118134 289.67865 132.453522 289.836548 132.725311 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281403 131.40509 289.991302 131.573273 289.834717 131.845734 C 289.678131 132.118195 289.678833 132.453506 289.836548 132.725311 Z"});
return obj39471;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39463,G__39464) : helix.core.jsx.call(null,G__39463,G__39464));
})(),(function (){var G__39474 = "path";
var G__39476 = (function (){var obj39485 = ({"fill":"none","stroke":"#db1d43","strokeWidth":(2),"d":"M 288 145 L 304 145 L 304 143 L 288 143 Z"});
return obj39485;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39474,G__39476) : helix.core.jsx.call(null,G__39474,G__39476));
})()]});
return obj39434;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39431,G__39432) : helix.core.jsxs.call(null,G__39431,G__39432));
})(),(function (){var G__39488 = "circle";
var G__39489 = (function (){var obj39494 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":316.5,"cy":(137),"r":(40),"onClick":((disable)?null:reset_handler)});
return obj39494;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39488,G__39489) : helix.core.jsx.call(null,G__39488,G__39489));
})(),(function (){var G__39504 = "text";
var G__39505 = (function (){var obj39512 = ({"className":"btn-pnl-label","x":316.5,"y":(217),"children":"Reset"});
return obj39512;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39504,G__39505) : helix.core.jsx.call(null,G__39504,G__39505));
})()]});
return obj39418;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39415,G__39416) : helix.core.jsxs.call(null,G__39415,G__39416));
});
if(goog.DEBUG === true){
var G__39519 = G__39335;
(G__39519.displayName = "app.ui.shared.sidebar.control-panel.buttons-panel.reset/btn-reset");

return G__39519;
} else {
return G__39335;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.buttons_panel.reset.js.map
