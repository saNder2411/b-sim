goog.provide('app.shared.control_panel.btn_panel_run');

app.shared.control_panel.btn_panel_run.run_btn = (function (){var G__46767 = (function app$shared$control_panel$btn_panel_run$run_btn_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__46768 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var start = (function (){
var c__27326__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27327__auto__ = (function (){var switch__27098__auto__ = (function (state_46783){
var state_val_46784 = (state_46783[(1)]);
if((state_val_46784 === (1))){
var inst_46771 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46772 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"starting"];
var inst_46773 = (new cljs.core.PersistentVector(null,2,(5),inst_46771,inst_46772,null));
var inst_46774 = refx.alpha.dispatch(inst_46773);
var inst_46775 = cljs.core.async.timeout((6000));
var state_46783__$1 = (function (){var statearr_46785 = state_46783;
(statearr_46785[(7)] = inst_46774);

return statearr_46785;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46783__$1,(2),inst_46775);
} else {
if((state_val_46784 === (2))){
var inst_46777 = (state_46783[(2)]);
var inst_46778 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46779 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"run"];
var inst_46780 = (new cljs.core.PersistentVector(null,2,(5),inst_46778,inst_46779,null));
var inst_46781 = refx.alpha.dispatch(inst_46780);
var state_46783__$1 = (function (){var statearr_46786 = state_46783;
(statearr_46786[(8)] = inst_46777);

return statearr_46786;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46783__$1,inst_46781);
} else {
return null;
}
}
});
return (function() {
var app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__ = null;
var app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____0 = (function (){
var statearr_46787 = [null,null,null,null,null,null,null,null,null];
(statearr_46787[(0)] = app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__);

(statearr_46787[(1)] = (1));

return statearr_46787;
});
var app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____1 = (function (state_46783){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_46783);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e46788){var ex__27102__auto__ = e46788;
var statearr_46789_46826 = state_46783;
(statearr_46789_46826[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_46783[(4)]))){
var statearr_46790_46827 = state_46783;
(statearr_46790_46827[(1)] = cljs.core.first((state_46783[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46828 = state_46783;
state_46783 = G__46828;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__ = function(state_46783){
switch(arguments.length){
case 0:
return app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____0.call(this);
case 1:
return app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____1.call(this,state_46783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____0;
app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____1;
return app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__;
})()
})();
var state__27328__auto__ = (function (){var statearr_46791 = f__27327__auto__();
(statearr_46791[(6)] = c__27326__auto__);

return statearr_46791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27328__auto__);
}));

return c__27326__auto__;
});
var play = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"run"], null));
});
var pause = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"pause"], null));
});
var start_stop_handler = (function (){var G__46792 = sim;
switch (G__46792) {
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
var G__46793 = "g";
var G__46794 = (function (){var obj46796 = ({"children":[(function (){var G__46797 = app.shared.control_panel.btn_panel_button_layer.button_layer;
var G__46798 = (function (){var obj46800 = ({"dl":"M468.234,188.637H467a50.309,50.309,0,0,1-50.31-50.31V78.861H518.544v59.467A50.31,50.31,0,0,1,468.234,188.637Z","dm":"M467,187.291a49.868,49.868,0,0,1-49.811-49.81V78.515H518.044v58.966a49.867,49.867,0,0,1-49.811,49.81Z","dt":"M518.044,78.515v58.966a49.867,49.867,0,0,1-49.811,49.81H467a49.868,49.868,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-3)"});
return obj46800;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46797,G__46798) : helix.core.jsx.call(null,G__46797,G__46798));
})(),(function (){var G__46801 = "g";
var G__46802 = (function (){var obj46804 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__46805 = "circle";
var G__46806 = (function (){var obj46808 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","cx":467.615,"cy":136.862,"r":37.804});
return obj46808;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46805,G__46806) : helix.core.jsx.call(null,G__46805,G__46806));
})(),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"pause")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping"))))))?(function (){var G__46809 = "path";
var G__46810 = (function (){var obj46812 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","d":"M487.487,134.394,458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a2.979,2.979,0,0,0,0-5.16L458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a3.117,3.117,0,0,0,.67-4.273C487.952,134.984,487.7,134.727,487.487,134.394Z"});
return obj46812;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46809,G__46810) : helix.core.jsx.call(null,G__46809,G__46810));
})():(function (){var G__46813 = "rect";
var G__46814 = (function (){var obj46816 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","x":448.862,"y":118.108,"width":37.507,"height":37.507,"rx":4.097});
return obj46816;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46813,G__46814) : helix.core.jsx.call(null,G__46813,G__46814));
})())]});
return obj46804;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46801,G__46802) : helix.core.jsxs.call(null,G__46801,G__46802));
})(),(function (){var G__46817 = "circle";
var G__46818 = (function (){var obj46820 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":467.5,"cy":(137),"r":(40),"onClick":((disable)?null:start_stop_handler)});
return obj46820;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46817,G__46818) : helix.core.jsx.call(null,G__46817,G__46818));
})(),(function (){var G__46821 = "text";
var G__46822 = (function (){var obj46824 = ({"className":"btn-pnl-label","x":467.5,"y":(217),"children":"Start / Stop"});
return obj46824;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46821,G__46822) : helix.core.jsx.call(null,G__46821,G__46822));
})()]});
return obj46796;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46793,G__46794) : helix.core.jsxs.call(null,G__46793,G__46794));
});
if(goog.DEBUG === true){
var G__46825 = G__46767;
(G__46825.displayName = "app.shared.control-panel.btn-panel-run/run-btn");

return G__46825;
} else {
return G__46767;
}
})();




//# sourceMappingURL=app.shared.control_panel.btn_panel_run.js.map
