goog.provide('app.shared.sidebar.control_panel.buttons_panel.run');

app.shared.sidebar.control_panel.buttons_panel.run.btn_run = (function (){var G__49662 = (function app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var start = (function (){
var c__27277__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27278__auto__ = (function (){var switch__27098__auto__ = (function (state_49740){
var state_val_49742 = (state_49740[(1)]);
if((state_val_49742 === (1))){
var inst_49697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49700 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"starting"];
var inst_49701 = (new cljs.core.PersistentVector(null,2,(5),inst_49697,inst_49700,null));
var inst_49702 = refx.alpha.dispatch(inst_49701);
var inst_49712 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49715 = [new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),"none"];
var inst_49716 = (new cljs.core.PersistentVector(null,2,(5),inst_49712,inst_49715,null));
var inst_49717 = refx.alpha.dispatch(inst_49716);
var inst_49721 = cljs.core.async.timeout((6000));
var state_49740__$1 = (function (){var statearr_49771 = state_49740;
(statearr_49771[(7)] = inst_49702);

(statearr_49771[(8)] = inst_49717);

return statearr_49771;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49740__$1,(2),inst_49721);
} else {
if((state_val_49742 === (2))){
var inst_49723 = (state_49740[(2)]);
var inst_49728 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49733 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"run"];
var inst_49734 = (new cljs.core.PersistentVector(null,2,(5),inst_49728,inst_49733,null));
var inst_49735 = refx.alpha.dispatch(inst_49734);
var state_49740__$1 = (function (){var statearr_49780 = state_49740;
(statearr_49780[(9)] = inst_49723);

return statearr_49780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49740__$1,inst_49735);
} else {
return null;
}
}
});
return (function() {
var app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto__ = null;
var app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto____0 = (function (){
var statearr_49787 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49787[(0)] = app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto__);

(statearr_49787[(1)] = (1));

return statearr_49787;
});
var app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto____1 = (function (state_49740){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_49740);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e49790){var ex__27102__auto__ = e49790;
var statearr_49795_49900 = state_49740;
(statearr_49795_49900[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_49740[(4)]))){
var statearr_49796_49901 = state_49740;
(statearr_49796_49901[(1)] = cljs.core.first((state_49740[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49902 = state_49740;
state_49740 = G__49902;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto__ = function(state_49740){
switch(arguments.length){
case 0:
return app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto____0.call(this);
case 1:
return app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto____1.call(this,state_49740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto____0;
app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto____1;
return app$shared$sidebar$control_panel$buttons_panel$run$btn_run_render_$_state_machine__27099__auto__;
})()
})();
var state__27279__auto__ = (function (){var statearr_49809 = f__27278__auto__();
(statearr_49809[(6)] = c__27277__auto__);

return statearr_49809;
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
var start_stop_handler = (function (){var G__49822 = sim;
switch (G__49822) {
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
var G__49825 = "g";
var G__49826 = (function (){var obj49832 = ({"children":[(function (){var G__49837 = app.shared.sidebar.control_panel.buttons_panel.layer.btn_layer;
var G__49838 = (function (){var obj49842 = ({"dl":"M468.234,188.637H467a50.309,50.309,0,0,1-50.31-50.31V78.861H518.544v59.467A50.31,50.31,0,0,1,468.234,188.637Z","dm":"M467,187.291a49.868,49.868,0,0,1-49.811-49.81V78.515H518.044v58.966a49.867,49.867,0,0,1-49.811,49.81Z","dt":"M518.044,78.515v58.966a49.867,49.867,0,0,1-49.811,49.81H467a49.868,49.868,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-3)"});
return obj49842;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49837,G__49838) : helix.core.jsx.call(null,G__49837,G__49838));
})(),(function (){var G__49847 = "g";
var G__49848 = (function (){var obj49854 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__49857 = "circle";
var G__49858 = (function (){var obj49860 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","cx":467.615,"cy":136.862,"r":37.804});
return obj49860;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49857,G__49858) : helix.core.jsx.call(null,G__49857,G__49858));
})(),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"pause")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping"))))))?(function (){var G__49872 = "path";
var G__49873 = (function (){var obj49875 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","d":"M487.487,134.394,458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a2.979,2.979,0,0,0,0-5.16L458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a3.117,3.117,0,0,0,.67-4.273C487.952,134.984,487.7,134.727,487.487,134.394Z"});
return obj49875;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49872,G__49873) : helix.core.jsx.call(null,G__49872,G__49873));
})():(function (){var G__49878 = "rect";
var G__49879 = (function (){var obj49881 = ({"className":"btn-pnl-stroke","stroke":"#0f40ea","x":448.862,"y":118.108,"width":37.507,"height":37.507,"rx":4.097});
return obj49881;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49878,G__49879) : helix.core.jsx.call(null,G__49878,G__49879));
})())]});
return obj49854;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49847,G__49848) : helix.core.jsxs.call(null,G__49847,G__49848));
})(),(function (){var G__49886 = "circle";
var G__49887 = (function (){var obj49889 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":467.5,"cy":(137),"r":(40),"onClick":((disable)?null:start_stop_handler)});
return obj49889;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49886,G__49887) : helix.core.jsx.call(null,G__49886,G__49887));
})(),(function (){var G__49891 = "text";
var G__49892 = (function (){var obj49894 = ({"className":"btn-pnl-label","x":467.5,"y":(217),"children":"Start / Stop"});
return obj49894;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49891,G__49892) : helix.core.jsx.call(null,G__49891,G__49892));
})()]});
return obj49832;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49825,G__49826) : helix.core.jsxs.call(null,G__49825,G__49826));
});
if(goog.DEBUG === true){
var G__49895 = G__49662;
(G__49895.displayName = "app.shared.sidebar.control-panel.buttons-panel.run/btn-run");

return G__49895;
} else {
return G__49662;
}
})();




//# sourceMappingURL=app.shared.sidebar.control_panel.buttons_panel.run.js.map
