goog.provide('app.ui.shared.sidebar.control_panel.core');

app.ui.shared.sidebar.control_panel.core.control_panel = (function (){var G__39795 = (function app$ui$shared$sidebar$control_panel$core$control_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null)], null));
var y = (cljs.core.truth_(show)?(541):(741));
var steam_unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var flow_rate_unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-feed-actuator-data-by-path","current-feed-actuator-data-by-path",-2035634407),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var G__39801 = helix.core.Fragment;
var G__39802 = ({"children": [(function (){var G__39803 = "g";
var G__39804 = (function (){var obj39808 = ({"style":(function (){var obj39811 = ({"transform":helix.impl.props.__GT_js(["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join('')),"transition":helix.impl.props.__GT_js("transform 300ms ease-out")});
return obj39811;
})(),"children":[(function (){var G__39815 = "g";
var G__39816 = (function (){var obj39818 = ({"children":[(function (){var G__39819 = "image";
var G__39820 = (function (){var obj39822 = ({"width":(566),"height":(463),"opacity":0.3,"isolation":"isolate","href":"assets/img/ctrl-pnl-shadow.png"});
return obj39822;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39819,G__39820) : helix.core.jsx.call(null,G__39819,G__39820));
})(),(function (){var G__39825 = "path";
var G__39826 = (function (){var obj39828 = ({"fill":"#989fa9","isolation":"isolate","d":"M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"});
return obj39828;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39825,G__39826) : helix.core.jsx.call(null,G__39825,G__39826));
})(),(function (){var G__39829 = "path";
var G__39830 = (function (){var obj39832 = ({"fill":"#fff","opacity":0.5,"d":"M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"});
return obj39832;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39829,G__39830) : helix.core.jsx.call(null,G__39829,G__39830));
})()]});
return obj39818;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39815,G__39816) : helix.core.jsxs.call(null,G__39815,G__39816));
})(),(function (){var G__39833 = app.ui.shared.sidebar.control_panel.lang_flag.lang_flag;
var G__39834 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39833,G__39834) : helix.core.jsx.call(null,G__39833,G__39834));
})(),(function (){var G__39836 = app.ui.shared.sidebar.control_panel.mode.core.operation_mode;
var G__39837 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39836,G__39837) : helix.core.jsx.call(null,G__39836,G__39837));
})(),(function (){var G__39839 = "line";
var G__39840 = (function (){var obj39842 = ({"x1":66.403,"y1":167.444,"x2":498.535,"y2":167.444,"className":"ctrl-panel-horizontal-line"});
return obj39842;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39839,G__39840) : helix.core.jsx.call(null,G__39839,G__39840));
})(),(function (){var G__39843 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__39844 = (function (){var obj39847 = ({"z":(1),"v-%":(50),"x":(66),"next-v-%":(50),"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),steam_unit,new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null),"max-val":(35),"title":"STEAM","y":(216),"active":true});
return obj39847;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39843,G__39844) : helix.core.jsx.call(null,G__39843,G__39844));
})(),(function (){var G__39849 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__39850 = (function (){var obj39852 = ({"z":(1),"v-%":(0),"x":(66),"next-v-%":(0),"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),flow_rate_unit,new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null),"max-val":(70),"title":"FEEDWATER","y":(300),"active":false});
return obj39852;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39849,G__39850) : helix.core.jsx.call(null,G__39849,G__39850));
})()]});
return obj39808;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39803,G__39804) : helix.core.jsxs.call(null,G__39803,G__39804));
})(),(function (){var G__39855 = app.ui.shared.sidebar.control_panel.buttons_panel.core.buttons_panel;
var G__39856 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39855,G__39856) : helix.core.jsx.call(null,G__39855,G__39856));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39801,G__39802) : helix.core.jsxs.call(null,G__39801,G__39802));
});
if(goog.DEBUG === true){
var G__39858 = G__39795;
(G__39858.displayName = "app.ui.shared.sidebar.control-panel.core/control-panel");

return G__39858;
} else {
return G__39795;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.core.js.map
