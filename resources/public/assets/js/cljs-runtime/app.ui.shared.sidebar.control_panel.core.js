goog.provide('app.ui.shared.sidebar.control_panel.core');

app.ui.shared.sidebar.control_panel.core.control_panel = (function (){var G__36817 = (function app$ui$shared$sidebar$control_panel$core$control_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null)], null));
var y = (cljs.core.truth_(show)?(541):(741));
var steam_unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var flow_rate_unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-feed-actuator","data-by-path","current-feed-actuator/data-by-path",-748274584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var G__36825 = helix.core.Fragment;
var G__36826 = ({"children": [(function (){var G__36827 = "g";
var G__36828 = (function (){var obj36832 = ({"style":(function (){var obj36834 = ({"transform":helix.impl.props.__GT_js(["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join('')),"transition":helix.impl.props.__GT_js("transform 300ms ease-out")});
return obj36834;
})(),"children":[(function (){var G__36837 = "g";
var G__36838 = (function (){var obj36842 = ({"children":[(function (){var G__36843 = "image";
var G__36844 = (function (){var obj36848 = ({"width":(566),"height":(463),"opacity":0.3,"isolation":"isolate","href":"assets/img/ctrl-pnl-shadow.png"});
return obj36848;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36843,G__36844) : helix.core.jsx.call(null,G__36843,G__36844));
})(),(function (){var G__36851 = "path";
var G__36852 = (function (){var obj36854 = ({"fill":"#989fa9","isolation":"isolate","d":"M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"});
return obj36854;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36851,G__36852) : helix.core.jsx.call(null,G__36851,G__36852));
})(),(function (){var G__36858 = "path";
var G__36859 = (function (){var obj36864 = ({"fill":"#fff","opacity":0.5,"d":"M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"});
return obj36864;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36858,G__36859) : helix.core.jsx.call(null,G__36858,G__36859));
})()]});
return obj36842;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36837,G__36838) : helix.core.jsxs.call(null,G__36837,G__36838));
})(),(function (){var G__36865 = app.ui.shared.sidebar.control_panel.lang_flag.lang_flag;
var G__36866 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36865,G__36866) : helix.core.jsx.call(null,G__36865,G__36866));
})(),(function (){var G__36867 = app.ui.shared.sidebar.control_panel.mode.core.operation_mode;
var G__36868 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36867,G__36868) : helix.core.jsx.call(null,G__36867,G__36868));
})(),(function (){var G__36871 = "line";
var G__36872 = (function (){var obj36874 = ({"x1":66.403,"y1":167.444,"x2":498.535,"y2":167.444,"className":"ctrl-panel-horizontal-line"});
return obj36874;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36871,G__36872) : helix.core.jsx.call(null,G__36871,G__36872));
})(),(function (){var G__36883 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__36884 = (function (){var obj36886 = ({"z":(1),"v-%":(50),"x":(66),"next-v-%":(50),"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),steam_unit,new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null),"max-val":(35),"title":"STEAM","y":(216),"active":true});
return obj36886;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36883,G__36884) : helix.core.jsx.call(null,G__36883,G__36884));
})(),(function (){var G__36887 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__36888 = (function (){var obj36890 = ({"z":(1),"v-%":(0),"x":(66),"next-v-%":(0),"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),flow_rate_unit,new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null),"max-val":(70),"title":"FEEDWATER","y":(300),"active":false});
return obj36890;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36887,G__36888) : helix.core.jsx.call(null,G__36887,G__36888));
})()]});
return obj36832;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36827,G__36828) : helix.core.jsxs.call(null,G__36827,G__36828));
})(),(function (){var G__36899 = app.ui.shared.sidebar.control_panel.buttons_panel.core.buttons_panel;
var G__36900 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36899,G__36900) : helix.core.jsx.call(null,G__36899,G__36900));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36825,G__36826) : helix.core.jsxs.call(null,G__36825,G__36826));
});
if(goog.DEBUG === true){
var G__36905 = G__36817;
(G__36905.displayName = "app.ui.shared.sidebar.control-panel.core/control-panel");

return G__36905;
} else {
return G__36817;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.core.js.map
