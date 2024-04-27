goog.provide('app.shared.control_panel.core');

app.shared.control_panel.core.control_panel = (function (){var G__47535 = (function app$shared$control_panel$core$control_panel_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__47536 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-ctrl-panel","show-ctrl-panel",-1185529327)], null));
var y = (cljs.core.truth_(show)?(0):41.6);
var G__47539 = helix.core.Fragment;
var G__47540 = ({"children": [(function (){var G__47541 = "svg";
var G__47542 = (function (){var obj47544 = ({"style":(function (){var obj47546 = ({"width":helix.impl.props.__GT_js("29.48%"),"top":helix.impl.props.__GT_js("50.15%"),"transform":helix.impl.props.__GT_js(["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%)"].join('')),"transition":helix.impl.props.__GT_js("transform 300ms ease-out")});
return obj47546;
})(),"viewBox":"0 0 566 463","children":[(function (){var G__47547 = "g";
var G__47548 = (function (){var obj47550 = ({"children":[(function (){var G__47551 = "image";
var G__47552 = (function (){var obj47554 = ({"width":(566),"height":(463),"opacity":0.3,"isolation":"isolate","xlinkHref":"assets/img/control-panel-shadow.png"});
return obj47554;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47551,G__47552) : helix.core.jsx.call(null,G__47551,G__47552));
})(),(function (){var G__47555 = "path";
var G__47556 = (function (){var obj47558 = ({"fill":"#989fa9","isolation":"isolate","d":"M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"});
return obj47558;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47555,G__47556) : helix.core.jsx.call(null,G__47555,G__47556));
})(),(function (){var G__47559 = "path";
var G__47560 = (function (){var obj47562 = ({"fill":"#fff","opacity":0.5,"d":"M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"});
return obj47562;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47559,G__47560) : helix.core.jsx.call(null,G__47559,G__47560));
})()]});
return obj47550;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__47547,G__47548) : helix.core.jsxs.call(null,G__47547,G__47548));
})(),(function (){var G__47563 = app.shared.control_panel.lang_flag.lang_flag;
var G__47564 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47563,G__47564) : helix.core.jsx.call(null,G__47563,G__47564));
})(),(function (){var G__47565 = app.shared.control_panel.mode.operation_mode;
var G__47566 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47565,G__47566) : helix.core.jsx.call(null,G__47565,G__47566));
})(),(function (){var G__47567 = "line";
var G__47568 = (function (){var obj47570 = ({"x1":66.403,"y1":167.444,"x2":498.535,"y2":167.444,"className":"ctrl-panel-horizontal-line"});
return obj47570;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47567,G__47568) : helix.core.jsx.call(null,G__47567,G__47568));
})(),(function (){var G__47571 = app.shared.control_panel.slider.slider;
var G__47572 = (function (){var obj47574 = ({"y":215.5,"title":"STEAM","max-val":(35),"v-%":(50),"next-v-%":(50),"active":true,"value-box":new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),3.8,new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null)});
return obj47574;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47571,G__47572) : helix.core.jsx.call(null,G__47571,G__47572));
})(),(function (){var G__47575 = app.shared.control_panel.slider.slider;
var G__47576 = (function (){var obj47578 = ({"y":300.5,"title":"FEEDWATER","max-val":(70),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),3.8,new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null)});
return obj47578;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47575,G__47576) : helix.core.jsx.call(null,G__47575,G__47576));
})()]});
return obj47544;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__47541,G__47542) : helix.core.jsxs.call(null,G__47541,G__47542));
})(),(function (){var G__47579 = app.shared.control_panel.btn_panel.buttons_panel;
var G__47580 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47579,G__47580) : helix.core.jsx.call(null,G__47579,G__47580));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__47539,G__47540) : helix.core.jsxs.call(null,G__47539,G__47540));
});
if(goog.DEBUG === true){
var G__47581 = G__47535;
(G__47581.displayName = "app.shared.control-panel.core/control-panel");

return G__47581;
} else {
return G__47535;
}
})();




//# sourceMappingURL=app.shared.control_panel.core.js.map
