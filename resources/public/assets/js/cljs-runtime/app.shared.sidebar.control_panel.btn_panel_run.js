goog.provide('app.shared.sidebar.control_panel.btn_panel_run');

app.shared.sidebar.control_panel.btn_panel_run.run_btn = (function (){var G__41614 = (function app$shared$sidebar$control_panel$btn_panel_run$run_btn_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__41624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var start = (function (){
var c__27277__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27278__auto__ = (function (){var switch__27098__auto__ = (function (state_41813){
var state_val_41815 = (state_41813[(1)]);
if((state_val_41815 === (1))){
var inst_41750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41763 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"starting"];
var inst_41766 = (new cljs.core.PersistentVector(null,2,(5),inst_41750,inst_41763,null));
var inst_41767 = refx.alpha.dispatch(inst_41766);
var inst_41775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41776 = [new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),"none"];
var inst_41777 = (new cljs.core.PersistentVector(null,2,(5),inst_41775,inst_41776,null));
var inst_41778 = refx.alpha.dispatch(inst_41777);
var inst_41784 = cljs.core.async.timeout((6000));
var state_41813__$1 = (function (){var statearr_41832 = state_41813;
(statearr_41832[(7)] = inst_41767);

(statearr_41832[(8)] = inst_41778);

return statearr_41832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41813__$1,(2),inst_41784);
} else {
if((state_val_41815 === (2))){
var inst_41789 = (state_41813[(2)]);
var inst_41793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41796 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"run"];
var inst_41798 = (new cljs.core.PersistentVector(null,2,(5),inst_41793,inst_41796,null));
var inst_41800 = refx.alpha.dispatch(inst_41798);
var state_41813__$1 = (function (){var statearr_41838 = state_41813;
(statearr_41838[(9)] = inst_41789);

return statearr_41838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41813__$1,inst_41800);
} else {
return null;
}
}
});
return (function() {
var app$shared$sidebar$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__ = null;
var app$shared$sidebar$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____0 = (function (){
var statearr_41841 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41841[(0)] = app$shared$sidebar$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__);

(statearr_41841[(1)] = (1));

return statearr_41841;
});
var app$shared$sidebar$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____1 = (function (state_41813){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_41813);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e41845){var ex__27102__auto__ = e41845;
var statearr_41851_41961 = state_41813;
(statearr_41851_41961[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_41813[(4)]))){
var statearr_41854_41963 = state_41813;
(statearr_41854_41963[(1)] = cljs.core.first((state_41813[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41966 = state_41813;
state_41813 = G__41966;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$shared$sidebar$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__ = function(state_41813){
switch(arguments.length){
case 0:
return app$shared$sidebar$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____0.call(this);
case 1:
return app$shared$sidebar$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____1.call(this,state_41813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$shared$sidebar$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$shared$sidebar$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____0;
app$shared$sidebar$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$shared$sidebar$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____1;
return app$shared$sidebar$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__;
})()
})();
var state__27279__auto__ = (function (){var statearr_41878 = f__27278__auto__();
(statearr_41878[(6)] = c__27277__auto__);

return statearr_41878;
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
var start_stop_handler = (function (){var G__41884 = sim;
switch (G__41884) {
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
var G__41886 = "g";
var G__41887 = (function (){var obj41893 = ({"children":[(function (){var G__41894 = app.shared.control_panel.btn_panel_button_layer.button_layer;
var G__41895 = (function (){var obj41899 = ({"dl":"M468.234,188.637H467a50.309,50.309,0,0,1-50.31-50.31V78.861H518.544v59.467A50.31,50.31,0,0,1,468.234,188.637Z","dm":"M467,187.291a49.868,49.868,0,0,1-49.811-49.81V78.515H518.044v58.966a49.867,49.867,0,0,1-49.811,49.81Z","dt":"M518.044,78.515v58.966a49.867,49.867,0,0,1-49.811,49.81H467a49.868,49.868,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-3)"});
return obj41899;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41894,G__41895) : helix.core.jsx.call(null,G__41894,G__41895));
})(),(function (){var G__41902 = "g";
var G__41903 = (function (){var obj41909 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__41912 = "circle";
var G__41913 = (function (){var obj41915 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","cx":467.615,"cy":136.862,"r":37.804});
return obj41915;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41912,G__41913) : helix.core.jsx.call(null,G__41912,G__41913));
})(),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"pause")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping"))))))?(function (){var G__41923 = "path";
var G__41924 = (function (){var obj41928 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","d":"M487.487,134.394,458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a2.979,2.979,0,0,0,0-5.16L458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a3.117,3.117,0,0,0,.67-4.273C487.952,134.984,487.7,134.727,487.487,134.394Z"});
return obj41928;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41923,G__41924) : helix.core.jsx.call(null,G__41923,G__41924));
})():(function (){var G__41931 = "rect";
var G__41932 = (function (){var obj41934 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","x":448.862,"y":118.108,"width":37.507,"height":37.507,"rx":4.097});
return obj41934;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41931,G__41932) : helix.core.jsx.call(null,G__41931,G__41932));
})())]});
return obj41909;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41902,G__41903) : helix.core.jsxs.call(null,G__41902,G__41903));
})(),(function (){var G__41939 = "circle";
var G__41940 = (function (){var obj41942 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":467.5,"cy":(137),"r":(40),"onClick":((disable)?null:start_stop_handler)});
return obj41942;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41939,G__41940) : helix.core.jsx.call(null,G__41939,G__41940));
})(),(function (){var G__41947 = "text";
var G__41948 = (function (){var obj41952 = ({"className":"btn-pnl-label","x":467.5,"y":(217),"children":"Start / Stop"});
return obj41952;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41947,G__41948) : helix.core.jsx.call(null,G__41947,G__41948));
})()]});
return obj41893;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41886,G__41887) : helix.core.jsxs.call(null,G__41886,G__41887));
});
if(goog.DEBUG === true){
var G__41959 = G__41614;
(G__41959.displayName = "app.shared.sidebar.control-panel.btn-panel-run/run-btn");

return G__41959;
} else {
return G__41614;
}
})();




//# sourceMappingURL=app.shared.sidebar.control_panel.btn_panel_run.js.map
