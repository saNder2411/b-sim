goog.provide('app.shared.sidebar.control_panel.core');

app.shared.sidebar.control_panel.core.control_panel = (function (){var G__33763 = (function app$shared$sidebar$control_panel$core$control_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33769 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null));
var y = (cljs.core.truth_(show)?(541):(741));
var G__33779 = helix.core.Fragment;
var G__33781 = ({"children": [(function (){var G__33784 = "g";
var G__33785 = (function (){var obj33791 = ({"style":(function (){var obj33795 = ({"transform":helix.impl.props.__GT_js(["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join('')),"transition":helix.impl.props.__GT_js("transform 300ms ease-out")});
return obj33795;
})(),"children":[(function (){var G__33802 = "g";
var G__33803 = (function (){var obj33807 = ({"children":[(function (){var G__33808 = "image";
var G__33809 = (function (){var obj33813 = ({"width":(566),"height":(463),"opacity":0.3,"isolation":"isolate","href":"assets/img/ctrl-pnl-shadow.png"});
return obj33813;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33808,G__33809) : helix.core.jsx.call(null,G__33808,G__33809));
})(),(function (){var G__33816 = "path";
var G__33817 = (function (){var obj33823 = ({"fill":"#989fa9","isolation":"isolate","d":"M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"});
return obj33823;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33816,G__33817) : helix.core.jsx.call(null,G__33816,G__33817));
})(),(function (){var G__33830 = "path";
var G__33831 = (function (){var obj33835 = ({"fill":"#fff","opacity":0.5,"d":"M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"});
return obj33835;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33830,G__33831) : helix.core.jsx.call(null,G__33830,G__33831));
})()]});
return obj33807;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33802,G__33803) : helix.core.jsxs.call(null,G__33802,G__33803));
})(),(function (){var G__33844 = app.shared.sidebar.control_panel.lang_flag.lang_flag;
var G__33845 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33844,G__33845) : helix.core.jsx.call(null,G__33844,G__33845));
})(),(function (){var G__33850 = app.shared.sidebar.control_panel.mode.core.operation_mode;
var G__33851 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33850,G__33851) : helix.core.jsx.call(null,G__33850,G__33851));
})(),(function (){var G__33852 = "line";
var G__33853 = (function (){var obj33856 = ({"x1":66.403,"y1":167.444,"x2":498.535,"y2":167.444,"className":"ctrl-panel-horizontal-line"});
return obj33856;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33852,G__33853) : helix.core.jsx.call(null,G__33852,G__33853));
})(),(function (){var G__33858 = app.shared.sidebar.control_panel.slider.core.slider;
var G__33859 = (function (){var obj33861 = ({"z":(1),"v-%":(50),"x":(66),"next-v-%":(50),"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null),"max-val":(35),"title":"STEAM","y":(216),"active":true});
return obj33861;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33858,G__33859) : helix.core.jsx.call(null,G__33858,G__33859));
})(),(function (){var G__33862 = app.shared.sidebar.control_panel.slider.core.slider;
var G__33863 = (function (){var obj33865 = ({"z":(1),"v-%":(0),"x":(66),"next-v-%":(0),"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null),"max-val":(70),"title":"FEEDWATER","y":(300),"active":false});
return obj33865;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33862,G__33863) : helix.core.jsx.call(null,G__33862,G__33863));
})()]});
return obj33791;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33784,G__33785) : helix.core.jsxs.call(null,G__33784,G__33785));
})(),(function (){var G__33866 = app.shared.sidebar.control_panel.buttons_panel.core.buttons_panel;
var G__33867 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33866,G__33867) : helix.core.jsx.call(null,G__33866,G__33867));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33779,G__33781) : helix.core.jsxs.call(null,G__33779,G__33781));
});
if(goog.DEBUG === true){
var G__33868 = G__33763;
(G__33868.displayName = "app.shared.sidebar.control-panel.core/control-panel");

return G__33868;
} else {
return G__33763;
}
})();




//# sourceMappingURL=app.shared.sidebar.control_panel.core.js.map
