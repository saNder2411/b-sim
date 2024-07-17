goog.provide('app.ui.shared.sidebar.control_panel.buttons_panel.run');

app.ui.shared.sidebar.control_panel.buttons_panel.run.btn_run = (function (){var G__29245 = (function app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var start = (function (){
var c__27277__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27278__auto__ = (function (){var switch__27098__auto__ = (function (state_29281){
var state_val_29282 = (state_29281[(1)]);
if((state_val_29282 === (1))){
var inst_29259 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29262 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"starting"];
var inst_29263 = (new cljs.core.PersistentVector(null,2,(5),inst_29259,inst_29262,null));
var inst_29264 = refx.alpha.dispatch(inst_29263);
var inst_29265 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29267 = [new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),"none"];
var inst_29269 = (new cljs.core.PersistentVector(null,2,(5),inst_29265,inst_29267,null));
var inst_29270 = refx.alpha.dispatch(inst_29269);
var inst_29271 = cljs.core.async.timeout((6000));
var state_29281__$1 = (function (){var statearr_29300 = state_29281;
(statearr_29300[(7)] = inst_29264);

(statearr_29300[(8)] = inst_29270);

return statearr_29300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29281__$1,(2),inst_29271);
} else {
if((state_val_29282 === (2))){
var inst_29273 = (state_29281[(2)]);
var inst_29276 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29277 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"run"];
var inst_29278 = (new cljs.core.PersistentVector(null,2,(5),inst_29276,inst_29277,null));
var inst_29279 = refx.alpha.dispatch(inst_29278);
var state_29281__$1 = (function (){var statearr_29312 = state_29281;
(statearr_29312[(9)] = inst_29273);

return statearr_29312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29281__$1,inst_29279);
} else {
return null;
}
}
});
return (function() {
var app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto__ = null;
var app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto____0 = (function (){
var statearr_29320 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29320[(0)] = app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto__);

(statearr_29320[(1)] = (1));

return statearr_29320;
});
var app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto____1 = (function (state_29281){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_29281);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e29329){var ex__27102__auto__ = e29329;
var statearr_29332_29516 = state_29281;
(statearr_29332_29516[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_29281[(4)]))){
var statearr_29335_29521 = state_29281;
(statearr_29335_29521[(1)] = cljs.core.first((state_29281[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29551 = state_29281;
state_29281 = G__29551;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto__ = function(state_29281){
switch(arguments.length){
case 0:
return app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto____0.call(this);
case 1:
return app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto____1.call(this,state_29281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto____0;
app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto____1;
return app$ui$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto__;
})()
})();
var state__27279__auto__ = (function (){var statearr_29350 = f__27278__auto__();
(statearr_29350[(6)] = c__27277__auto__);

return statearr_29350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27279__auto__);
}));

return c__27277__auto__;
});
var play = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"run"], null));
});
var pause = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"pause"], null));
});
var start_stop_handler = (function (){var G__29356 = sim;
switch (G__29356) {
case "stopped":
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
var G__29359 = "g";
var G__29360 = (function (){var obj29364 = ({"children":[(function (){var G__29367 = app.ui.shared.sidebar.control_panel.buttons_panel.layer.btn_layer;
var G__29368 = (function (){var obj29372 = ({"dl":"M468.234,188.637H467a50.309,50.309,0,0,1-50.31-50.31V78.861H518.544v59.467A50.31,50.31,0,0,1,468.234,188.637Z","dm":"M467,187.291a49.868,49.868,0,0,1-49.811-49.81V78.515H518.044v58.966a49.867,49.867,0,0,1-49.811,49.81Z","dt":"M518.044,78.515v58.966a49.867,49.867,0,0,1-49.811,49.81H467a49.868,49.868,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-3)"});
return obj29372;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29367,G__29368) : helix.core.jsx.call(null,G__29367,G__29368));
})(),(function (){var G__29375 = "g";
var G__29376 = (function (){var obj29380 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__29385 = "circle";
var G__29386 = (function (){var obj29390 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","cx":467.615,"cy":136.862,"r":37.804});
return obj29390;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29385,G__29386) : helix.core.jsx.call(null,G__29385,G__29386));
})(),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"pause")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping"))))))?(function (){var G__29400 = "path";
var G__29401 = (function (){var obj29405 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","d":"M487.487,134.394,458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a2.979,2.979,0,0,0,0-5.16L458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a3.117,3.117,0,0,0,.67-4.273C487.952,134.984,487.7,134.727,487.487,134.394Z"});
return obj29405;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29400,G__29401) : helix.core.jsx.call(null,G__29400,G__29401));
})():(function (){var G__29408 = "rect";
var G__29409 = (function (){var obj29415 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","x":448.862,"y":118.108,"width":37.507,"height":37.507,"rx":4.097});
return obj29415;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29408,G__29409) : helix.core.jsx.call(null,G__29408,G__29409));
})())]});
return obj29380;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29375,G__29376) : helix.core.jsxs.call(null,G__29375,G__29376));
})(),(function (){var G__29420 = "circle";
var G__29421 = (function (){var obj29423 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":467.5,"cy":(137),"r":(40),"onClick":((disable)?null:start_stop_handler)});
return obj29423;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29420,G__29421) : helix.core.jsx.call(null,G__29420,G__29421));
})(),(function (){var G__29430 = "text";
var G__29431 = (function (){var obj29436 = ({"className":"btn-pnl-label","x":467.5,"y":(217),"children":"Start / Stop"});
return obj29436;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29430,G__29431) : helix.core.jsx.call(null,G__29430,G__29431));
})()]});
return obj29364;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29359,G__29360) : helix.core.jsxs.call(null,G__29359,G__29360));
});
if(goog.DEBUG === true){
var G__29442 = G__29245;
(G__29442.displayName = "app.ui.shared.sidebar.control-panel.buttons-panel.run/btn-run");

return G__29442;
} else {
return G__29245;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.buttons_panel.run.js.map
