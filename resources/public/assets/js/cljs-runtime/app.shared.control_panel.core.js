goog.provide('app.shared.control_panel.core');

app.shared.control_panel.core.control_panel = (function (){var G__46919 = (function app$shared$control_panel$core$control_panel_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__46920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-ctrl-panel","show-ctrl-panel",-1185529327)], null));
var y = (cljs.core.truth_(show)?(0):41.6);
var G__46923 = helix.core.Fragment;
var G__46924 = ({"children": [(function (){var G__46925 = "svg";
var G__46926 = (function (){var obj46928 = ({"style":(function (){var obj46930 = ({"width":helix.impl.props.__GT_js("29.48%"),"top":helix.impl.props.__GT_js("50.15%"),"transform":helix.impl.props.__GT_js(["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%)"].join('')),"transition":helix.impl.props.__GT_js("transform 300ms ease-out")});
return obj46930;
})(),"viewBox":"0 0 566 463","children":[(function (){var G__46931 = "g";
var G__46932 = (function (){var obj46934 = ({"children":[(function (){var G__46935 = "image";
var G__46936 = (function (){var obj46938 = ({"width":(566),"height":(463),"opacity":0.3,"isolation":"isolate","xlinkHref":"assets/img/control-panel-shadow.png"});
return obj46938;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46935,G__46936) : helix.core.jsx.call(null,G__46935,G__46936));
})(),(function (){var G__46939 = "path";
var G__46940 = (function (){var obj46942 = ({"fill":"#989fa9","isolation":"isolate","d":"M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"});
return obj46942;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46939,G__46940) : helix.core.jsx.call(null,G__46939,G__46940));
})(),(function (){var G__46943 = "path";
var G__46944 = (function (){var obj46946 = ({"fill":"#fff","opacity":0.5,"d":"M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"});
return obj46946;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46943,G__46944) : helix.core.jsx.call(null,G__46943,G__46944));
})()]});
return obj46934;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46931,G__46932) : helix.core.jsxs.call(null,G__46931,G__46932));
})(),(function (){var G__46947 = app.shared.control_panel.lang_flag.lang_flag;
var G__46948 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46947,G__46948) : helix.core.jsx.call(null,G__46947,G__46948));
})(),(function (){var G__46949 = app.shared.control_panel.mode.operation_mode;
var G__46950 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46949,G__46950) : helix.core.jsx.call(null,G__46949,G__46950));
})(),(function (){var G__46951 = "line";
var G__46952 = (function (){var obj46954 = ({"x1":66.403,"y1":167.444,"x2":498.535,"y2":167.444,"className":"ctrl-panel-horizontal-line"});
return obj46954;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46951,G__46952) : helix.core.jsx.call(null,G__46951,G__46952));
})(),(function (){var G__46955 = app.shared.control_panel.slider.slider;
var G__46956 = (function (){var obj46958 = ({"y":215.5,"title":"STEAM","max-val":(35),"v-%":(50),"next-v-%":(50),"active":true,"value-box":new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),3.8,new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null)});
return obj46958;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46955,G__46956) : helix.core.jsx.call(null,G__46955,G__46956));
})(),(function (){var G__46959 = app.shared.control_panel.slider.slider;
var G__46960 = (function (){var obj46962 = ({"y":300.5,"title":"FEEDWATER","max-val":(70),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),3.8,new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null)});
return obj46962;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46959,G__46960) : helix.core.jsx.call(null,G__46959,G__46960));
})()]});
return obj46928;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46925,G__46926) : helix.core.jsxs.call(null,G__46925,G__46926));
})(),(function (){var G__46963 = app.shared.control_panel.btn_panel.buttons_panel;
var G__46964 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46963,G__46964) : helix.core.jsx.call(null,G__46963,G__46964));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46923,G__46924) : helix.core.jsxs.call(null,G__46923,G__46924));
});
if(goog.DEBUG === true){
var G__46965 = G__46919;
(G__46965.displayName = "app.shared.control-panel.core/control-panel");

return G__46965;
} else {
return G__46919;
}
})();




//# sourceMappingURL=app.shared.control_panel.core.js.map
