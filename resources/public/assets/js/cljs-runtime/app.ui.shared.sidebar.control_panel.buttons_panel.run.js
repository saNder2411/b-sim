goog.provide('app.ui.shared.sidebar.control_panel.buttons_panel.run');

app.ui.shared.sidebar.control_panel.buttons_panel.run.btn_run = (function (){var G__36402 = (function app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36413 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var start = (function (){
var c__27285__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27286__auto__ = (function (){var switch__27247__auto__ = (function (state_36487){
var state_val_36488 = (state_36487[(1)]);
if((state_val_36488 === (1))){
var inst_36433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36434 = [new cljs.core.Keyword("sim","change","sim/change",-1163161977),"starting"];
var inst_36436 = (new cljs.core.PersistentVector(null,2,(5),inst_36433,inst_36434,null));
var inst_36438 = refx.alpha.dispatch(inst_36436);
var inst_36444 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36447 = [new cljs.core.Keyword("current-hotspot","change","current-hotspot/change",80910115),"none"];
var inst_36449 = (new cljs.core.PersistentVector(null,2,(5),inst_36444,inst_36447,null));
var inst_36452 = refx.alpha.dispatch(inst_36449);
var inst_36455 = cljs.core.async.timeout((6000));
var state_36487__$1 = (function (){var statearr_36527 = state_36487;
(statearr_36527[(7)] = inst_36438);

(statearr_36527[(8)] = inst_36452);

return statearr_36527;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36487__$1,(2),inst_36455);
} else {
if((state_val_36488 === (2))){
var inst_36458 = (state_36487[(2)]);
var inst_36463 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36468 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36471 = [new cljs.core.Keyword("sim","run","sim/run",-1821314676)];
var inst_36472 = (new cljs.core.PersistentVector(null,1,(5),inst_36468,inst_36471,null));
var inst_36473 = [new cljs.core.Keyword("ws","send!","ws/send!",480080966),inst_36472];
var inst_36474 = (new cljs.core.PersistentVector(null,2,(5),inst_36463,inst_36473,null));
var inst_36475 = refx.alpha.dispatch(inst_36474);
var inst_36480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36481 = [new cljs.core.Keyword("sim","change","sim/change",-1163161977),"run"];
var inst_36482 = (new cljs.core.PersistentVector(null,2,(5),inst_36480,inst_36481,null));
var inst_36483 = refx.alpha.dispatch(inst_36482);
var state_36487__$1 = (function (){var statearr_36535 = state_36487;
(statearr_36535[(9)] = inst_36458);

(statearr_36535[(10)] = inst_36475);

return statearr_36535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36487__$1,inst_36483);
} else {
return null;
}
}
});
return (function() {
var app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27248__auto__ = null;
var app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27248__auto____0 = (function (){
var statearr_36546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36546[(0)] = app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27248__auto__);

(statearr_36546[(1)] = (1));

return statearr_36546;
});
var app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27248__auto____1 = (function (state_36487){
while(true){
var ret_value__27249__auto__ = (function (){try{while(true){
var result__27250__auto__ = switch__27247__auto__(state_36487);
if(cljs.core.keyword_identical_QMARK_(result__27250__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27250__auto__;
}
break;
}
}catch (e36551){var ex__27251__auto__ = e36551;
var statearr_36558_36752 = state_36487;
(statearr_36558_36752[(2)] = ex__27251__auto__);


if(cljs.core.seq((state_36487[(4)]))){
var statearr_36573_36753 = state_36487;
(statearr_36573_36753[(1)] = cljs.core.first((state_36487[(4)])));

} else {
throw ex__27251__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36756 = state_36487;
state_36487 = G__36756;
continue;
} else {
return ret_value__27249__auto__;
}
break;
}
});
app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27248__auto__ = function(state_36487){
switch(arguments.length){
case 0:
return app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27248__auto____0.call(this);
case 1:
return app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27248__auto____1.call(this,state_36487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27248__auto__.cljs$core$IFn$_invoke$arity$0 = app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27248__auto____0;
app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27248__auto__.cljs$core$IFn$_invoke$arity$1 = app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27248__auto____1;
return app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27248__auto__;
})()
})();
var state__27287__auto__ = (function (){var statearr_36595 = f__27286__auto__();
(statearr_36595[(6)] = c__27285__auto__);

return statearr_36595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27287__auto__);
}));

return c__27285__auto__;
});
var play = (function (){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","send!","ws/send!",480080966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sim","run","sim/run",-1821314676)], null)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sim","change","sim/change",-1163161977),"run"], null));
});
var pause = (function (){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","send!","ws/send!",480080966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sim","pause","sim/pause",-2095472447)], null)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sim","change","sim/change",-1163161977),"pause"], null));
});
var start_stop_handler = (function (){var G__36612 = sim;
switch (G__36612) {
case "stop":
return start;

break;
case "pause":
return play;

break;
case "run":
return pause;

break;
default:
return pause;

}
})();
var G__36619 = "g";
var G__36620 = (function (){var obj36622 = ({"children":[(function (){var G__36627 = app.ui.shared.sidebar.control_panel.buttons_panel.layer.btn_layer;
var G__36628 = (function (){var obj36632 = ({"dl":"M468.234,188.637H467a50.309,50.309,0,0,1-50.31-50.31V78.861H518.544v59.467A50.31,50.31,0,0,1,468.234,188.637Z","dm":"M467,187.291a49.868,49.868,0,0,1-49.811-49.81V78.515H518.044v58.966a49.867,49.867,0,0,1-49.811,49.81Z","dt":"M518.044,78.515v58.966a49.867,49.867,0,0,1-49.811,49.81H467a49.868,49.868,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-3)"});
return obj36632;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36627,G__36628) : helix.core.jsx.call(null,G__36627,G__36628));
})(),(function (){var G__36642 = "g";
var G__36643 = (function (){var obj36651 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__36655 = "circle";
var G__36656 = (function (){var obj36660 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","cx":467.615,"cy":136.862,"r":37.804});
return obj36660;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36655,G__36656) : helix.core.jsx.call(null,G__36655,G__36656));
})(),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stop")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"pause")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping"))))))?(function (){var G__36669 = "path";
var G__36670 = (function (){var obj36672 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","d":"M487.487,134.394,458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a2.979,2.979,0,0,0,0-5.16L458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a3.117,3.117,0,0,0,.67-4.273C487.952,134.984,487.7,134.727,487.487,134.394Z"});
return obj36672;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36669,G__36670) : helix.core.jsx.call(null,G__36669,G__36670));
})():(function (){var G__36680 = "rect";
var G__36681 = (function (){var obj36690 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","x":448.862,"y":118.108,"width":37.507,"height":37.507,"rx":4.097});
return obj36690;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36680,G__36681) : helix.core.jsx.call(null,G__36680,G__36681));
})())]});
return obj36651;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36642,G__36643) : helix.core.jsxs.call(null,G__36642,G__36643));
})(),(function (){var G__36699 = "circle";
var G__36700 = (function (){var obj36702 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":467.5,"cy":(137),"r":(40),"onClick":((disable)?null:start_stop_handler)});
return obj36702;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36699,G__36700) : helix.core.jsx.call(null,G__36699,G__36700));
})(),(function (){var G__36714 = "text";
var G__36715 = (function (){var obj36719 = ({"className":"btn-pnl-label","x":467.5,"y":(217),"children":"Start / Stop"});
return obj36719;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36714,G__36715) : helix.core.jsx.call(null,G__36714,G__36715));
})()]});
return obj36622;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36619,G__36620) : helix.core.jsxs.call(null,G__36619,G__36620));
});
if(goog.DEBUG === true){
var G__36730 = G__36402;
(G__36730.displayName = "app.ui.shared.sidebar.control-panel.buttons-panel.run/btn-run");

return G__36730;
} else {
return G__36402;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.buttons_panel.run.js.map
