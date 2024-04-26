goog.provide('app.shared.control_panel.btn_panel_reset');

app.shared.control_panel.btn_panel_reset.reset_btn = (function (){var G__46506 = (function app$shared$control_panel$btn_panel_reset$reset_btn_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__46507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var stop_and_reset = (function (){
var c__27326__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27327__auto__ = (function (){var switch__27098__auto__ = (function (state_46535){
var state_val_46537 = (state_46535[(1)]);
if((state_val_46537 === (1))){
var inst_46514 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46518 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"stopping"];
var inst_46519 = (new cljs.core.PersistentVector(null,2,(5),inst_46514,inst_46518,null));
var inst_46520 = refx.alpha.dispatch(inst_46519);
var inst_46521 = cljs.core.async.timeout((2000));
var state_46535__$1 = (function (){var statearr_46539 = state_46535;
(statearr_46539[(7)] = inst_46520);

return statearr_46539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46535__$1,(2),inst_46521);
} else {
if((state_val_46537 === (2))){
var inst_46523 = (state_46535[(2)]);
var inst_46529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46530 = [new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753)];
var inst_46531 = (new cljs.core.PersistentVector(null,1,(5),inst_46529,inst_46530,null));
var inst_46532 = refx.alpha.dispatch(inst_46531);
var state_46535__$1 = (function (){var statearr_46541 = state_46535;
(statearr_46541[(8)] = inst_46523);

return statearr_46541;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46535__$1,inst_46532);
} else {
return null;
}
}
});
return (function() {
var app$shared$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto__ = null;
var app$shared$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto____0 = (function (){
var statearr_46543 = [null,null,null,null,null,null,null,null,null];
(statearr_46543[(0)] = app$shared$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto__);

(statearr_46543[(1)] = (1));

return statearr_46543;
});
var app$shared$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto____1 = (function (state_46535){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_46535);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e46544){var ex__27102__auto__ = e46544;
var statearr_46547_46627 = state_46535;
(statearr_46547_46627[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_46535[(4)]))){
var statearr_46549_46629 = state_46535;
(statearr_46549_46629[(1)] = cljs.core.first((state_46535[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46631 = state_46535;
state_46535 = G__46631;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$shared$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto__ = function(state_46535){
switch(arguments.length){
case 0:
return app$shared$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto____0.call(this);
case 1:
return app$shared$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto____1.call(this,state_46535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$shared$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$shared$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto____0;
app$shared$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$shared$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto____1;
return app$shared$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto__;
})()
})();
var state__27328__auto__ = (function (){var statearr_46551 = f__27327__auto__();
(statearr_46551[(6)] = c__27326__auto__);

return statearr_46551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27328__auto__);
}));

return c__27326__auto__;
});
var reset = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753)], null));
});
var reset_handler = (function (){var G__46552 = sim;
switch (G__46552) {
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
var G__46554 = "g";
var G__46555 = (function (){var obj46559 = ({"children":[(function (){var G__46562 = app.shared.control_panel.btn_panel_button_layer.button_layer;
var G__46563 = (function (){var obj46567 = ({"dl":"M317.26,188.637h-1.237a50.31,50.31,0,0,1-50.31-50.31V78.861H367.57v59.467A50.31,50.31,0,0,1,317.26,188.637Z","dm":"M316.024,187.291a49.867,49.867,0,0,1-49.811-49.81V78.515H367.071v58.966a49.868,49.868,0,0,1-49.811,49.81Z","dt":"M367.071,78.515v58.966a49.868,49.868,0,0,1-49.811,49.81h-1.236a49.867,49.867,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-2)"});
return obj46567;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46562,G__46563) : helix.core.jsx.call(null,G__46562,G__46563));
})(),(function (){var G__46571 = "g";
var G__46573 = (function (){var obj46577 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__46580 = "circle";
var G__46581 = (function (){var obj46585 = ({"className":"btn-pnl-stroke","stroke":"#db1d43","cx":316.642,"cy":136.883,"r":37.804});
return obj46585;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46580,G__46581) : helix.core.jsx.call(null,G__46580,G__46581));
})(),(function (){var G__46586 = "circle";
var G__46587 = (function (){var obj46589 = ({"className":"btn-pnl-stroke","stroke":"#db1d43","cx":316.642,"cy":136.883,"r":20.804});
return obj46589;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46586,G__46587) : helix.core.jsx.call(null,G__46586,G__46587));
})(),(function (){var G__46592 = "path";
var G__46593 = (function (){var obj46595 = ({"fill":"#db1d43","stroke":"#db1d43","d":"M 289.837433 132.725815 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281311 131.404938 289.991119 131.57309 289.834503 131.845612 C 289.677887 132.118134 289.67865 132.453522 289.836548 132.725311 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281403 131.40509 289.991302 131.573273 289.834717 131.845734 C 289.678131 132.118195 289.678833 132.453506 289.836548 132.725311 Z"});
return obj46595;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46592,G__46593) : helix.core.jsx.call(null,G__46592,G__46593));
})(),(function (){var G__46598 = "path";
var G__46599 = (function (){var obj46603 = ({"fill":"none","stroke":"#db1d43","strokeWidth":(2),"d":"M 288 145 L 304 145 L 304 143 L 288 143 Z"});
return obj46603;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46598,G__46599) : helix.core.jsx.call(null,G__46598,G__46599));
})()]});
return obj46577;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46571,G__46573) : helix.core.jsxs.call(null,G__46571,G__46573));
})(),(function (){var G__46606 = "circle";
var G__46607 = (function (){var obj46611 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":316.5,"cy":(137),"r":(40),"onClick":((disable)?null:reset_handler)});
return obj46611;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46606,G__46607) : helix.core.jsx.call(null,G__46606,G__46607));
})(),(function (){var G__46615 = "text";
var G__46617 = (function (){var obj46621 = ({"className":"btn-pnl-label","x":316.5,"y":(217),"children":"Reset"});
return obj46621;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46615,G__46617) : helix.core.jsx.call(null,G__46615,G__46617));
})()]});
return obj46559;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46554,G__46555) : helix.core.jsxs.call(null,G__46554,G__46555));
});
if(goog.DEBUG === true){
var G__46623 = G__46506;
(G__46623.displayName = "app.shared.control-panel.btn-panel-reset/reset-btn");

return G__46623;
} else {
return G__46506;
}
})();




//# sourceMappingURL=app.shared.control_panel.btn_panel_reset.js.map
