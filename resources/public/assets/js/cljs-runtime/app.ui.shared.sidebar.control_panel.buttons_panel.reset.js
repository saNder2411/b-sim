goog.provide('app.ui.shared.sidebar.control_panel.buttons_panel.reset');

app.ui.shared.sidebar.control_panel.buttons_panel.reset.btn_reset = (function (){var G__36397 = (function app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var reset_sim = (function (){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","send!","ws/send!",480080966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sim","stop","sim/stop",-2140830231)], null)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sim","reset","sim/reset",-801339251)], null));
});
var stop_and_reset = (function (){
var c__27285__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27286__auto__ = (function (){var switch__27247__auto__ = (function (state_36464){
var state_val_36465 = (state_36464[(1)]);
if((state_val_36465 === (1))){
var inst_36437 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36448 = [new cljs.core.Keyword("sim","change","sim/change",-1163161977),"stopping"];
var inst_36450 = (new cljs.core.PersistentVector(null,2,(5),inst_36437,inst_36448,null));
var inst_36454 = refx.alpha.dispatch(inst_36450);
var inst_36457 = cljs.core.async.timeout((2000));
var state_36464__$1 = (function (){var statearr_36520 = state_36464;
(statearr_36520[(7)] = inst_36454);

return statearr_36520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36464__$1,(2),inst_36457);
} else {
if((state_val_36465 === (2))){
var inst_36460 = (state_36464[(2)]);
var inst_36461 = reset_sim();
var state_36464__$1 = (function (){var statearr_36530 = state_36464;
(statearr_36530[(8)] = inst_36460);

return statearr_36530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36464__$1,inst_36461);
} else {
return null;
}
}
});
return (function() {
var app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27248__auto__ = null;
var app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27248__auto____0 = (function (){
var statearr_36531 = [null,null,null,null,null,null,null,null,null];
(statearr_36531[(0)] = app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27248__auto__);

(statearr_36531[(1)] = (1));

return statearr_36531;
});
var app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27248__auto____1 = (function (state_36464){
while(true){
var ret_value__27249__auto__ = (function (){try{while(true){
var result__27250__auto__ = switch__27247__auto__(state_36464);
if(cljs.core.keyword_identical_QMARK_(result__27250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27250__auto__;
}
break;
}
}catch (e36550){var ex__27251__auto__ = e36550;
var statearr_36557_36748 = state_36464;
(statearr_36557_36748[(2)] = ex__27251__auto__);


if(cljs.core.seq((state_36464[(4)]))){
var statearr_36572_36749 = state_36464;
(statearr_36572_36749[(1)] = cljs.core.first((state_36464[(4)])));

} else {
throw ex__27251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36751 = state_36464;
state_36464 = G__36751;
continue;
} else {
return ret_value__27249__auto__;
}
break;
}
});
app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27248__auto__ = function(state_36464){
switch(arguments.length){
case 0:
return app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27248__auto____0.call(this);
case 1:
return app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27248__auto____1.call(this,state_36464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27248__auto__.cljs$core$IFn$_invoke$arity$0 = app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27248__auto____0;
app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27248__auto__.cljs$core$IFn$_invoke$arity$1 = app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27248__auto____1;
return app$ui$shared$sidebar$control_panel$buttons_panel$reset$btn_reset_render_$_state_machine__27248__auto__;
})()
})();
var state__27287__auto__ = (function (){var statearr_36596 = f__27286__auto__();
(statearr_36596[(6)] = c__27285__auto__);

return statearr_36596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27287__auto__);
}));

return c__27285__auto__;
});
var reset_handler = (function (){var G__36607 = sim;
switch (G__36607) {
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
var G__36608 = "g";
var G__36609 = (function (){var obj36611 = ({"children":[(function (){var G__36615 = app.ui.shared.sidebar.control_panel.buttons_panel.layer.btn_layer;
var G__36616 = (function (){var obj36618 = ({"dl":"M317.26,188.637h-1.237a50.31,50.31,0,0,1-50.31-50.31V78.861H367.57v59.467A50.31,50.31,0,0,1,317.26,188.637Z","dm":"M316.024,187.291a49.867,49.867,0,0,1-49.811-49.81V78.515H367.071v58.966a49.868,49.868,0,0,1-49.811,49.81Z","dt":"M367.071,78.515v58.966a49.868,49.868,0,0,1-49.811,49.81h-1.236a49.867,49.867,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-2)"});
return obj36618;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36615,G__36616) : helix.core.jsx.call(null,G__36615,G__36616));
})(),(function (){var G__36625 = "g";
var G__36626 = (function (){var obj36630 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__36637 = "circle";
var G__36638 = (function (){var obj36640 = ({"className":"btn-pnl-stroke","stroke":"#db1d43","cx":316.642,"cy":136.883,"r":37.804});
return obj36640;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36637,G__36638) : helix.core.jsx.call(null,G__36637,G__36638));
})(),(function (){var G__36653 = "circle";
var G__36654 = (function (){var obj36659 = ({"className":"btn-pnl-stroke","stroke":"#db1d43","cx":316.642,"cy":136.883,"r":20.804});
return obj36659;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36653,G__36654) : helix.core.jsx.call(null,G__36653,G__36654));
})(),(function (){var G__36662 = "path";
var G__36663 = (function (){var obj36665 = ({"fill":"#db1d43","stroke":"#db1d43","d":"M 289.837433 132.725815 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281311 131.404938 289.991119 131.57309 289.834503 131.845612 C 289.677887 132.118134 289.67865 132.453522 289.836548 132.725311 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281403 131.40509 289.991302 131.573273 289.834717 131.845734 C 289.678131 132.118195 289.678833 132.453506 289.836548 132.725311 Z"});
return obj36665;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36662,G__36663) : helix.core.jsx.call(null,G__36662,G__36663));
})(),(function (){var G__36667 = "path";
var G__36668 = (function (){var obj36674 = ({"fill":"none","stroke":"#db1d43","strokeWidth":(2),"d":"M 288 145 L 304 145 L 304 143 L 288 143 Z"});
return obj36674;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36667,G__36668) : helix.core.jsx.call(null,G__36667,G__36668));
})()]});
return obj36630;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36625,G__36626) : helix.core.jsxs.call(null,G__36625,G__36626));
})(),(function (){var G__36691 = "circle";
var G__36692 = (function (){var obj36696 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":316.5,"cy":(137),"r":(40),"onClick":((disable)?null:reset_handler)});
return obj36696;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36691,G__36692) : helix.core.jsx.call(null,G__36691,G__36692));
})(),(function (){var G__36704 = "text";
var G__36705 = (function (){var obj36710 = ({"className":"btn-pnl-label","x":316.5,"y":(217),"children":"Reset"});
return obj36710;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36704,G__36705) : helix.core.jsx.call(null,G__36704,G__36705));
})()]});
return obj36611;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36608,G__36609) : helix.core.jsxs.call(null,G__36608,G__36609));
});
if(goog.DEBUG === true){
var G__36720 = G__36397;
(G__36720.displayName = "app.ui.shared.sidebar.control-panel.buttons-panel.reset/btn-reset");

return G__36720;
} else {
return G__36397;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.buttons_panel.reset.js.map
