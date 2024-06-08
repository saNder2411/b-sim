goog.provide('app.shared.control_panel.btn_panel_run');

app.shared.control_panel.btn_panel_run.run_btn = (function (){var G__34908 = (function app$shared$control_panel$btn_panel_run$run_btn_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34909 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var start = (function (){
var c__27277__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27278__auto__ = (function (){var switch__27098__auto__ = (function (state_34928){
var state_val_34929 = (state_34928[(1)]);
if((state_val_34929 === (1))){
var inst_34912 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34913 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"starting"];
var inst_34914 = (new cljs.core.PersistentVector(null,2,(5),inst_34912,inst_34913,null));
var inst_34915 = refx.alpha.dispatch(inst_34914);
var inst_34916 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34917 = [new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),"none"];
var inst_34918 = (new cljs.core.PersistentVector(null,2,(5),inst_34916,inst_34917,null));
var inst_34919 = refx.alpha.dispatch(inst_34918);
var inst_34920 = cljs.core.async.timeout((6000));
var state_34928__$1 = (function (){var statearr_34930 = state_34928;
(statearr_34930[(7)] = inst_34919);

(statearr_34930[(8)] = inst_34915);

return statearr_34930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34928__$1,(2),inst_34920);
} else {
if((state_val_34929 === (2))){
var inst_34922 = (state_34928[(2)]);
var inst_34923 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34924 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"run"];
var inst_34925 = (new cljs.core.PersistentVector(null,2,(5),inst_34923,inst_34924,null));
var inst_34926 = refx.alpha.dispatch(inst_34925);
var state_34928__$1 = (function (){var statearr_34931 = state_34928;
(statearr_34931[(9)] = inst_34922);

return statearr_34931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34928__$1,inst_34926);
} else {
return null;
}
}
});
return (function() {
var app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__ = null;
var app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____0 = (function (){
var statearr_34932 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34932[(0)] = app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__);

(statearr_34932[(1)] = (1));

return statearr_34932;
});
var app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____1 = (function (state_34928){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_34928);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e34933){var ex__27102__auto__ = e34933;
var statearr_34934_34971 = state_34928;
(statearr_34934_34971[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_34928[(4)]))){
var statearr_34935_34972 = state_34928;
(statearr_34935_34972[(1)] = cljs.core.first((state_34928[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34974 = state_34928;
state_34928 = G__34974;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__ = function(state_34928){
switch(arguments.length){
case 0:
return app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____0.call(this);
case 1:
return app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____1.call(this,state_34928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____0;
app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto____1;
return app$shared$control_panel$btn_panel_run$run_btn_render_$_state_machine__27099__auto__;
})()
})();
var state__27279__auto__ = (function (){var statearr_34936 = f__27278__auto__();
(statearr_34936[(6)] = c__27277__auto__);

return statearr_34936;
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
var start_stop_handler = (function (){var G__34937 = sim;
switch (G__34937) {
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
var G__34938 = "g";
var G__34939 = (function (){var obj34941 = ({"children":[(function (){var G__34942 = app.shared.control_panel.btn_panel_button_layer.button_layer;
var G__34943 = (function (){var obj34945 = ({"dl":"M468.234,188.637H467a50.309,50.309,0,0,1-50.31-50.31V78.861H518.544v59.467A50.31,50.31,0,0,1,468.234,188.637Z","dm":"M467,187.291a49.868,49.868,0,0,1-49.811-49.81V78.515H518.044v58.966a49.867,49.867,0,0,1-49.811,49.81Z","dt":"M518.044,78.515v58.966a49.867,49.867,0,0,1-49.811,49.81H467a49.868,49.868,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-3)"});
return obj34945;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34942,G__34943) : helix.core.jsx.call(null,G__34942,G__34943));
})(),(function (){var G__34946 = "g";
var G__34947 = (function (){var obj34949 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__34950 = "circle";
var G__34951 = (function (){var obj34953 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","cx":467.615,"cy":136.862,"r":37.804});
return obj34953;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34950,G__34951) : helix.core.jsx.call(null,G__34950,G__34951));
})(),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"pause")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping"))))))?(function (){var G__34954 = "path";
var G__34955 = (function (){var obj34957 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","d":"M487.487,134.394,458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a2.979,2.979,0,0,0,0-5.16L458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a3.117,3.117,0,0,0,.67-4.273C487.952,134.984,487.7,134.727,487.487,134.394Z"});
return obj34957;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34954,G__34955) : helix.core.jsx.call(null,G__34954,G__34955));
})():(function (){var G__34958 = "rect";
var G__34959 = (function (){var obj34961 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","x":448.862,"y":118.108,"width":37.507,"height":37.507,"rx":4.097});
return obj34961;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34958,G__34959) : helix.core.jsx.call(null,G__34958,G__34959));
})())]});
return obj34949;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34946,G__34947) : helix.core.jsxs.call(null,G__34946,G__34947));
})(),(function (){var G__34962 = "circle";
var G__34963 = (function (){var obj34965 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":467.5,"cy":(137),"r":(40),"onClick":((disable)?null:start_stop_handler)});
return obj34965;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34962,G__34963) : helix.core.jsx.call(null,G__34962,G__34963));
})(),(function (){var G__34966 = "text";
var G__34967 = (function (){var obj34969 = ({"className":"btn-pnl-label","x":467.5,"y":(217),"children":"Start / Stop"});
return obj34969;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34966,G__34967) : helix.core.jsx.call(null,G__34966,G__34967));
})()]});
return obj34941;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34938,G__34939) : helix.core.jsxs.call(null,G__34938,G__34939));
});
if(goog.DEBUG === true){
var G__34970 = G__34908;
(G__34970.displayName = "app.shared.control-panel.btn-panel-run/run-btn");

return G__34970;
} else {
return G__34908;
}
})();




//# sourceMappingURL=app.shared.control_panel.btn_panel_run.js.map
