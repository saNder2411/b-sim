goog.provide('app.shared.sidebar.control_panel.btn_panel_reset');

app.shared.sidebar.control_panel.btn_panel_reset.reset_btn = (function (){var G__41648 = (function app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__41666 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var disable = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"starting")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopping")));
var stop_and_reset = (function (){
var c__27277__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27278__auto__ = (function (){var switch__27098__auto__ = (function (state_41814){
var state_val_41816 = (state_41814[(1)]);
if((state_val_41816 === (1))){
var inst_41751 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41764 = [new cljs.core.Keyword(null,"change-sim","change-sim",-1708135592),"stopping"];
var inst_41765 = (new cljs.core.PersistentVector(null,2,(5),inst_41751,inst_41764,null));
var inst_41768 = refx.alpha.dispatch(inst_41765);
var inst_41779 = cljs.core.async.timeout((2000));
var state_41814__$1 = (function (){var statearr_41831 = state_41814;
(statearr_41831[(7)] = inst_41768);

return statearr_41831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41814__$1,(2),inst_41779);
} else {
if((state_val_41816 === (2))){
var inst_41788 = (state_41814[(2)]);
var inst_41794 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41795 = [new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753)];
var inst_41797 = (new cljs.core.PersistentVector(null,1,(5),inst_41794,inst_41795,null));
var inst_41799 = refx.alpha.dispatch(inst_41797);
var state_41814__$1 = (function (){var statearr_41837 = state_41814;
(statearr_41837[(8)] = inst_41788);

return statearr_41837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41814__$1,inst_41799);
} else {
return null;
}
}
});
return (function() {
var app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto__ = null;
var app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto____0 = (function (){
var statearr_41840 = [null,null,null,null,null,null,null,null,null];
(statearr_41840[(0)] = app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto__);

(statearr_41840[(1)] = (1));

return statearr_41840;
});
var app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto____1 = (function (state_41814){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_41814);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e41846){var ex__27102__auto__ = e41846;
var statearr_41852_41962 = state_41814;
(statearr_41852_41962[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_41814[(4)]))){
var statearr_41853_41964 = state_41814;
(statearr_41853_41964[(1)] = cljs.core.first((state_41814[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41965 = state_41814;
state_41814 = G__41965;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto__ = function(state_41814){
switch(arguments.length){
case 0:
return app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto____0.call(this);
case 1:
return app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto____1.call(this,state_41814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto____0;
app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto____1;
return app$shared$sidebar$control_panel$btn_panel_reset$reset_btn_render_$_state_machine__27099__auto__;
})()
})();
var state__27279__auto__ = (function (){var statearr_41879 = f__27278__auto__();
(statearr_41879[(6)] = c__27277__auto__);

return statearr_41879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27279__auto__);
}));

return c__27277__auto__;
});
var reset = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-sim","reset-sim",-296908753)], null));
});
var reset_handler = (function (){var G__41885 = sim;
switch (G__41885) {
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
var G__41890 = "g";
var G__41891 = (function (){var obj41897 = ({"children":[(function (){var G__41900 = app.shared.control_panel.btn_panel_button_layer.button_layer;
var G__41901 = (function (){var obj41905 = ({"dl":"M317.26,188.637h-1.237a50.31,50.31,0,0,1-50.31-50.31V78.861H367.57v59.467A50.31,50.31,0,0,1,317.26,188.637Z","dm":"M316.024,187.291a49.867,49.867,0,0,1-49.811-49.81V78.515H367.071v58.966a49.868,49.868,0,0,1-49.811,49.81Z","dt":"M367.071,78.515v58.966a49.868,49.868,0,0,1-49.811,49.81h-1.236a49.867,49.867,0,0,1-49.811-49.81V78.515","mask-url":"url(#btn-pnl-mask-2)"});
return obj41905;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41900,G__41901) : helix.core.jsx.call(null,G__41900,G__41901));
})(),(function (){var G__41910 = "g";
var G__41911 = (function (){var obj41917 = ({"opacity":((disable)?0.25:(1)),"children":[(function (){var G__41918 = "circle";
var G__41920 = (function (){var obj41922 = ({"className":"btn-pnl-stroke","stroke":"#db1d43","cx":316.642,"cy":136.883,"r":37.804});
return obj41922;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41918,G__41920) : helix.core.jsx.call(null,G__41918,G__41920));
})(),(function (){var G__41925 = "circle";
var G__41926 = (function (){var obj41930 = ({"className":"btn-pnl-stroke","stroke":"#db1d43","cx":316.642,"cy":136.883,"r":20.804});
return obj41930;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41925,G__41926) : helix.core.jsx.call(null,G__41925,G__41926));
})(),(function (){var G__41935 = "path";
var G__41936 = (function (){var obj41938 = ({"fill":"#db1d43","stroke":"#db1d43","d":"M 289.837433 132.725815 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281311 131.404938 289.991119 131.57309 289.834503 131.845612 C 289.677887 132.118134 289.67865 132.453522 289.836548 132.725311 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281403 131.40509 289.991302 131.573273 289.834717 131.845734 C 289.678131 132.118195 289.678833 132.453506 289.836548 132.725311 Z"});
return obj41938;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41935,G__41936) : helix.core.jsx.call(null,G__41935,G__41936));
})(),(function (){var G__41943 = "path";
var G__41944 = (function (){var obj41946 = ({"fill":"none","stroke":"#db1d43","strokeWidth":(2),"d":"M 288 145 L 304 145 L 304 143 L 288 143 Z"});
return obj41946;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41943,G__41944) : helix.core.jsx.call(null,G__41943,G__41944));
})()]});
return obj41917;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41910,G__41911) : helix.core.jsxs.call(null,G__41910,G__41911));
})(),(function (){var G__41949 = "circle";
var G__41950 = (function (){var obj41954 = ({"className":helix.impl.props.normalize_class(["touch-area",((disable)?" disable":"")].join('')),"cx":316.5,"cy":(137),"r":(40),"onClick":((disable)?null:reset_handler)});
return obj41954;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41949,G__41950) : helix.core.jsx.call(null,G__41949,G__41950));
})(),(function (){var G__41955 = "text";
var G__41956 = (function (){var obj41958 = ({"className":"btn-pnl-label","x":316.5,"y":(217),"children":"Reset"});
return obj41958;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41955,G__41956) : helix.core.jsx.call(null,G__41955,G__41956));
})()]});
return obj41897;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41890,G__41891) : helix.core.jsxs.call(null,G__41890,G__41891));
});
if(goog.DEBUG === true){
var G__41960 = G__41648;
(G__41960.displayName = "app.shared.sidebar.control-panel.btn-panel-reset/reset-btn");

return G__41960;
} else {
return G__41648;
}
})();




//# sourceMappingURL=app.shared.sidebar.control_panel.btn_panel_reset.js.map
