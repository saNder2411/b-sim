goog.provide('app.ui.shared.sidebar.control_panel.buttons_panel.run');

app.ui.shared.sidebar.control_panel.buttons_panel.run.btn_run = (function (){var G__39317 = (function app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var start = (function (){
var c__28093__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28094__auto__ = (function (){var switch__27279__auto__ = (function (state_39360){
var state_val_39361 = (state_39360[(1)]);
if((state_val_39361 === (1))){
var inst_39327 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39328 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"starting"];
var inst_39329 = (new cljs.core.PersistentVector(null,2,(5),inst_39327,inst_39328,null));
var inst_39330 = refx.alpha.dispatch(inst_39329);
var inst_39331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39332 = [new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),"none"];
var inst_39333 = (new cljs.core.PersistentVector(null,2,(5),inst_39331,inst_39332,null));
var inst_39334 = refx.alpha.dispatch(inst_39333);
var inst_39337 = cljs.core.async.timeout((6000));
var state_39360__$1 = (function (){var statearr_39382 = state_39360;
(statearr_39382[(7)] = inst_39330);

(statearr_39382[(8)] = inst_39334);

return statearr_39382;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39360__$1,(2),inst_39337);
} else {
if((state_val_39361 === (2))){
var inst_39340 = (state_39360[(2)]);
var inst_39342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39343 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39344 = [new cljs.core.Keyword("sim","run","sim/run",-1821314676)];
var inst_39345 = (new cljs.core.PersistentVector(null,1,(5),inst_39343,inst_39344,null));
var inst_39346 = [new cljs.core.Keyword("ws","send!","ws/send!",480080966),inst_39345];
var inst_39347 = (new cljs.core.PersistentVector(null,2,(5),inst_39342,inst_39346,null));
var inst_39348 = refx.alpha.dispatch(inst_39347);
var inst_39351 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39352 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"run"];
var inst_39353 = (new cljs.core.PersistentVector(null,2,(5),inst_39351,inst_39352,null));
var inst_39354 = refx.alpha.dispatch(inst_39353);
var state_39360__$1 = (function (){var statearr_39387 = state_39360;
(statearr_39387[(9)] = inst_39340);

(statearr_39387[(10)] = inst_39348);

return statearr_39387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39360__$1,inst_39354);
} else {
return null;
}
}
});
return (function() {
var app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27280__auto__ = null;
var app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27280__auto____0 = (function (){
var statearr_39391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39391[(0)] = app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27280__auto__);

(statearr_39391[(1)] = (1));

return statearr_39391;
});
var app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27280__auto____1 = (function (state_39360){
while(true){
var ret_value__27281__auto__ = (function (){try{while(true){
var result__27282__auto__ = switch__27279__auto__(state_39360);
if(cljs.core.keyword_identical_QMARK_(result__27282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27282__auto__;
}
break;
}
}catch (e39393){var ex__27283__auto__ = e39393;
var statearr_39395_39539 = state_39360;
(statearr_39395_39539[(2)] = ex__27283__auto__);


if(cljs.core.seq((state_39360[(4)]))){
var statearr_39400_39540 = state_39360;
(statearr_39400_39540[(1)] = cljs.core.first((state_39360[(4)])));

} else {
throw ex__27283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39542 = state_39360;
state_39360 = G__39542;
continue;
} else {
return ret_value__27281__auto__;
}
break;
}
});
app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27280__auto__ = function(state_39360){
switch(arguments.length){
case 0:
return app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27280__auto____0.call(this);
case 1:
return app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27280__auto____1.call(this,state_39360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$0 = app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27280__auto____0;
app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27280__auto__.cljs$core$IFn$_invoke$arity$1 = app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27280__auto____1;
return app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27280__auto__;
})()
})();
var state__28095__auto__ = (function (){var statearr_39407 = f__28094__auto__();
(statearr_39407[(6)] = c__28093__auto__);

return statearr_39407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28095__auto__);
}));

return c__28093__auto__;
});
var play = (function (){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","send!","ws/send!",480080966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sim","run","sim/run",-1821314676)], null)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"run"], null));
});
var pause = (function (){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","send!","ws/send!",480080966),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sim","pause","sim/pause",-2095472447)], null)], null));

return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"pause"], null));
});
var start_stop_handler = (function (){var G__39414 = sim;
switch (G__39414) {
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
var G__39419 = "g";
var G__39420 = (function (){var obj39424 = ({"children":[(function (){var G__39427 = app.ui.shared.sidebar.control_panel.buttons_panel.layer.btn_layer;
var G__39428 = (function (){var obj39430 = ({"dl":"M468.234,188.637H467a50.309,50.309,0,0,1-50.31-50.31V78.861H518.544v59.467A50.31,50.31,0,0,1,468.234,188.637Z","dm":"M467,187.291a49.868,49.868,0,0,1-49.811-49.81V78.515H518.044v58.966a49.867,49.867,0,0,1-49.811,49.81Z","dt":"M518.044,78.515v58.966a49.867,49.867,0,0,1-49.811,49.81H467a49.868,49.868,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-3)"});
return obj39430;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39427,G__39428) : helix.core.jsx.call(null,G__39427,G__39428));
})(),(function (){var G__39435 = "g";
var G__39436 = (function (){var obj39438 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__39445 = "circle";
var G__39446 = (function (){var obj39450 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","cx":467.615,"cy":136.862,"r":37.804});
return obj39450;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39445,G__39446) : helix.core.jsx.call(null,G__39445,G__39446));
})(),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stop")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"pause")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping"))))))?(function (){var G__39468 = "path";
var G__39469 = (function (){var obj39473 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","d":"M487.487,134.394,458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a2.979,2.979,0,0,0,0-5.16L458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a3.117,3.117,0,0,0,.67-4.273C487.952,134.984,487.7,134.727,487.487,134.394Z"});
return obj39473;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39468,G__39469) : helix.core.jsx.call(null,G__39468,G__39469));
})():(function (){var G__39478 = "rect";
var G__39479 = (function (){var obj39483 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","x":448.862,"y":118.108,"width":37.507,"height":37.507,"rx":4.097});
return obj39483;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39478,G__39479) : helix.core.jsx.call(null,G__39478,G__39479));
})())]});
return obj39438;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39435,G__39436) : helix.core.jsxs.call(null,G__39435,G__39436));
})(),(function (){var G__39486 = "circle";
var G__39487 = (function (){var obj39492 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":467.5,"cy":(137),"r":(40),"onClick":((disable)?null:start_stop_handler)});
return obj39492;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39486,G__39487) : helix.core.jsx.call(null,G__39486,G__39487));
})(),(function (){var G__39506 = "text";
var G__39507 = (function (){var obj39514 = ({"className":"btn-pnl-label","x":467.5,"y":(217),"children":"Start / Stop"});
return obj39514;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39506,G__39507) : helix.core.jsx.call(null,G__39506,G__39507));
})()]});
return obj39424;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39419,G__39420) : helix.core.jsxs.call(null,G__39419,G__39420));
});
if(goog.DEBUG === true){
var G__39518 = G__39317;
(G__39518.displayName = "app.ui.shared.sidebar.control-panel.buttons-panel.run/btn-run");

return G__39518;
} else {
return G__39317;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.buttons_panel.run.js.map
