goog.provide('app.shared.sidebar.control_panel.buttons_panel.reset');

app.shared.sidebar.control_panel.buttons_panel.reset.btn_reset = (function (){var G__49696 = (function app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var stop_and_reset = (function (){
var c__27277__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27278__auto__ = (function (){var switch__27098__auto__ = (function (state_49760){
var state_val_49763 = (state_49760[(1)]);
if((state_val_49763 === (1))){
var inst_49739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49741 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"stopping"];
var inst_49743 = (new cljs.core.PersistentVector(null,2,(5),inst_49739,inst_49741,null));
var inst_49744 = refx.alpha.dispatch(inst_49743);
var inst_49747 = cljs.core.async.timeout((2000));
var state_49760__$1 = (function (){var statearr_49772 = state_49760;
(statearr_49772[(7)] = inst_49744);

return statearr_49772;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49760__$1,(2),inst_49747);
} else {
if((state_val_49763 === (2))){
var inst_49749 = (state_49760[(2)]);
var inst_49752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49753 = [new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753)];
var inst_49754 = (new cljs.core.PersistentVector(null,1,(5),inst_49752,inst_49753,null));
var inst_49755 = refx.alpha.dispatch(inst_49754);
var state_49760__$1 = (function (){var statearr_49774 = state_49760;
(statearr_49774[(8)] = inst_49749);

return statearr_49774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49760__$1,inst_49755);
} else {
return null;
}
}
});
return (function() {
var app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto__ = null;
var app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto____0 = (function (){
var statearr_49779 = [null,null,null,null,null,null,null,null,null];
(statearr_49779[(0)] = app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto__);

(statearr_49779[(1)] = (1));

return statearr_49779;
});
var app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto____1 = (function (state_49760){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_49760);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e49781){var ex__27102__auto__ = e49781;
var statearr_49785_49896 = state_49760;
(statearr_49785_49896[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_49760[(4)]))){
var statearr_49786_49897 = state_49760;
(statearr_49786_49897[(1)] = cljs.core.first((state_49760[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49898 = state_49760;
state_49760 = G__49898;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto__ = function(state_49760){
switch(arguments.length){
case 0:
return app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto____0.call(this);
case 1:
return app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto____1.call(this,state_49760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto____0;
app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto____1;
return app$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27099__auto__;
})()
})();
var state__27279__auto__ = (function (){var statearr_49801 = f__27278__auto__();
(statearr_49801[(6)] = c__27277__auto__);

return statearr_49801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27279__auto__);
}));

return c__27277__auto__;
});
var reset = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753)], null));
});
var reset_handler = (function (){var G__49808 = sim;
switch (G__49808) {
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
var G__49812 = "g";
var G__49813 = (function (){var obj49817 = ({"children":[(function (){var G__49820 = app.shared.sidebar.control_panel.buttons_panel.layer.btn_layer;
var G__49821 = (function (){var obj49824 = ({"dl":"M317.26,188.637h-1.237a50.31,50.31,0,0,1-50.31-50.31V78.861H367.57v59.467A50.31,50.31,0,0,1,317.26,188.637Z","dm":"M316.024,187.291a49.867,49.867,0,0,1-49.811-49.81V78.515H367.071v58.966a49.868,49.868,0,0,1-49.811,49.81Z","dt":"M367.071,78.515v58.966a49.868,49.868,0,0,1-49.811,49.81h-1.236a49.867,49.867,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-2)"});
return obj49824;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49820,G__49821) : helix.core.jsx.call(null,G__49820,G__49821));
})(),(function (){var G__49829 = "g";
var G__49830 = (function (){var obj49836 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__49839 = "circle";
var G__49840 = (function (){var obj49844 = ({"className":"btn-pnl-stroke","stroke":"#db1d43","cx":316.642,"cy":136.883,"r":37.804});
return obj49844;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49839,G__49840) : helix.core.jsx.call(null,G__49839,G__49840));
})(),(function (){var G__49849 = "circle";
var G__49850 = (function (){var obj49856 = ({"className":"btn-pnl-stroke","stroke":"#db1d43","cx":316.642,"cy":136.883,"r":20.804});
return obj49856;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49849,G__49850) : helix.core.jsx.call(null,G__49849,G__49850));
})(),(function (){var G__49861 = "path";
var G__49862 = (function (){var obj49864 = ({"fill":"#db1d43","stroke":"#db1d43","d":"M 289.837433 132.725815 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281311 131.404938 289.991119 131.57309 289.834503 131.845612 C 289.677887 132.118134 289.67865 132.453522 289.836548 132.725311 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281403 131.40509 289.991302 131.573273 289.834717 131.845734 C 289.678131 132.118195 289.678833 132.453506 289.836548 132.725311 Z"});
return obj49864;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49861,G__49862) : helix.core.jsx.call(null,G__49861,G__49862));
})(),(function (){var G__49866 = "path";
var G__49867 = (function (){var obj49869 = ({"fill":"none","stroke":"#db1d43","strokeWidth":(2),"d":"M 288 145 L 304 145 L 304 143 L 288 143 Z"});
return obj49869;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49866,G__49867) : helix.core.jsx.call(null,G__49866,G__49867));
})()]});
return obj49836;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49829,G__49830) : helix.core.jsxs.call(null,G__49829,G__49830));
})(),(function (){var G__49870 = "circle";
var G__49871 = (function (){var obj49877 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":316.5,"cy":(137),"r":(40),"onClick":((disable)?null:reset_handler)});
return obj49877;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49870,G__49871) : helix.core.jsx.call(null,G__49870,G__49871));
})(),(function (){var G__49882 = "text";
var G__49883 = (function (){var obj49885 = ({"className":"btn-pnl-label","x":316.5,"y":(217),"children":"Reset"});
return obj49885;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49882,G__49883) : helix.core.jsx.call(null,G__49882,G__49883));
})()]});
return obj49817;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49812,G__49813) : helix.core.jsxs.call(null,G__49812,G__49813));
});
if(goog.DEBUG === true){
var G__49890 = G__49696;
(G__49890.displayName = "app.shared.sidebar.control-panel.buttons-panel.reset/btn-reset");

return G__49890;
} else {
return G__49696;
}
})();




//# sourceMappingURL=app.shared.sidebar.control_panel.buttons_panel.reset.js.map
