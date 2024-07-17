goog.provide('app.ui.shared.sidebar.control_panel.buttons_panel.reset');

app.ui.shared.sidebar.control_panel.buttons_panel.reset.btn_reset = (function (){var G__29086 = (function app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29090 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var stop_and_reset = (function (){
var c__27277__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27278__auto__ = (function (){var switch__27098__auto__ = (function (state_29186){
var state_val_29187 = (state_29186[(1)]);
if((state_val_29187 === (1))){
var inst_29166 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29169 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"stopping"];
var inst_29170 = (new cljs.core.PersistentVector(null,2,(5),inst_29166,inst_29169,null));
var inst_29171 = refx.alpha.dispatch(inst_29170);
var inst_29174 = cljs.core.async.timeout((2000));
var state_29186__$1 = (function (){var statearr_29233 = state_29186;
(statearr_29233[(7)] = inst_29171);

return statearr_29233;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29186__$1,(2),inst_29174);
} else {
if((state_val_29187 === (2))){
var inst_29177 = (state_29186[(2)]);
var inst_29181 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29182 = [new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753)];
var inst_29183 = (new cljs.core.PersistentVector(null,1,(5),inst_29181,inst_29182,null));
var inst_29184 = refx.alpha.dispatch(inst_29183);
var state_29186__$1 = (function (){var statearr_29239 = state_29186;
(statearr_29239[(8)] = inst_29177);

return statearr_29239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29186__$1,inst_29184);
} else {
return null;
}
}
});
return (function() {
var app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto__ = null;
var app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto____0 = (function (){
var statearr_29242 = [null,null,null,null,null,null,null,null,null];
(statearr_29242[(0)] = app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto__);

(statearr_29242[(1)] = (1));

return statearr_29242;
});
var app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto____1 = (function (state_29186){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_29186);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e29297){var ex__27102__auto__ = e29297;
var statearr_29299_29503 = state_29186;
(statearr_29299_29503[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_29186[(4)]))){
var statearr_29303_29507 = state_29186;
(statearr_29303_29507[(1)] = cljs.core.first((state_29186[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29515 = state_29186;
state_29186 = G__29515;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto__ = function(state_29186){
switch(arguments.length){
case 0:
return app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto____0.call(this);
case 1:
return app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto____1.call(this,state_29186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto____0;
app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto____1;
return app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto__;
})()
})();
var state__27279__auto__ = (function (){var statearr_29352 = f__27278__auto__();
(statearr_29352[(6)] = c__27277__auto__);

return statearr_29352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27279__auto__);
}));

return c__27277__auto__;
});
var reset = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753)], null));
});
var reset_handler = (function (){var G__29355 = sim;
switch (G__29355) {
case "run":
return stop_and_reset;

break;
case "pause":
return stop_and_reset;

break;
default:
return reset;

}
})();
var G__29357 = "g";
var G__29358 = (function (){var obj29362 = ({"children":[(function (){var G__29365 = app.ui.shared.sidebar.control_panel.buttons_panel.layer.btn_layer;
var G__29366 = (function (){var obj29370 = ({"dl":"M317.26,188.637h-1.237a50.31,50.31,0,0,1-50.31-50.31V78.861H367.57v59.467A50.31,50.31,0,0,1,317.26,188.637Z","dm":"M316.024,187.291a49.867,49.867,0,0,1-49.811-49.81V78.515H367.071v58.966a49.868,49.868,0,0,1-49.811,49.81Z","dt":"M367.071,78.515v58.966a49.868,49.868,0,0,1-49.811,49.81h-1.236a49.867,49.867,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-2)"});
return obj29370;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29365,G__29366) : helix.core.jsx.call(null,G__29365,G__29366));
})(),(function (){var G__29373 = "g";
var G__29374 = (function (){var obj29378 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__29383 = "circle";
var G__29384 = (function (){var obj29388 = ({"className":"btn-pnl-stroke","stroke":"#db1d43","cx":316.642,"cy":136.883,"r":37.804});
return obj29388;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29383,G__29384) : helix.core.jsx.call(null,G__29383,G__29384));
})(),(function (){var G__29393 = "circle";
var G__29394 = (function (){var obj29396 = ({"className":"btn-pnl-stroke","stroke":"#db1d43","cx":316.642,"cy":136.883,"r":20.804});
return obj29396;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29393,G__29394) : helix.core.jsx.call(null,G__29393,G__29394));
})(),(function (){var G__29398 = "path";
var G__29399 = (function (){var obj29403 = ({"fill":"#db1d43","stroke":"#db1d43","d":"M 289.837433 132.725815 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281311 131.404938 289.991119 131.57309 289.834503 131.845612 C 289.677887 132.118134 289.67865 132.453522 289.836548 132.725311 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281403 131.40509 289.991302 131.573273 289.834717 131.845734 C 289.678131 132.118195 289.678833 132.453506 289.836548 132.725311 Z"});
return obj29403;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29398,G__29399) : helix.core.jsx.call(null,G__29398,G__29399));
})(),(function (){var G__29406 = "path";
var G__29407 = (function (){var obj29411 = ({"fill":"none","stroke":"#db1d43","strokeWidth":(2),"d":"M 288 145 L 304 145 L 304 143 L 288 143 Z"});
return obj29411;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29406,G__29407) : helix.core.jsx.call(null,G__29406,G__29407));
})()]});
return obj29378;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29373,G__29374) : helix.core.jsxs.call(null,G__29373,G__29374));
})(),(function (){var G__29416 = "circle";
var G__29417 = (function (){var obj29419 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":316.5,"cy":(137),"r":(40),"onClick":((disable)?null:reset_handler)});
return obj29419;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29416,G__29417) : helix.core.jsx.call(null,G__29416,G__29417));
})(),(function (){var G__29425 = "text";
var G__29426 = (function (){var obj29429 = ({"className":"btn-pnl-label","x":316.5,"y":(217),"children":"Reset"});
return obj29429;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29425,G__29426) : helix.core.jsx.call(null,G__29425,G__29426));
})()]});
return obj29362;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29357,G__29358) : helix.core.jsxs.call(null,G__29357,G__29358));
});
if(goog.DEBUG === true){
var G__29437 = G__29086;
(G__29437.displayName = "app.ui.shared.sidebar.control-panel.buttons-panel.reset/btn-reset");

return G__29437;
} else {
return G__29086;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.buttons_panel.reset.js.map
