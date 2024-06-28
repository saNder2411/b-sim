goog.provide('app.shared.sidebar.control_panel.core');

app.shared.sidebar.control_panel.core.control_panel = (function (){var G__28440 = (function app$shared$sidebar$control_panel$core$control_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28441 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null));
var y = (cljs.core.truth_(show)?(541):(741));
var G__28444 = helix.core.Fragment;
var G__28445 = ({"children": [(function (){var G__28446 = "g";
var G__28447 = (function (){var obj28449 = ({"style":(function (){var obj28451 = ({"transform":helix.impl.props.__GT_js(["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join('')),"transition":helix.impl.props.__GT_js("transform 300ms ease-out")});
return obj28451;
})(),"children":[(function (){var G__28452 = "g";
var G__28453 = (function (){var obj28455 = ({"children":[(function (){var G__28456 = "image";
var G__28457 = (function (){var obj28459 = ({"width":(566),"height":(463),"opacity":0.3,"isolation":"isolate","href":"assets/img/ctrl-pnl-shadow.png"});
return obj28459;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28456,G__28457) : helix.core.jsx.call(null,G__28456,G__28457));
})(),(function (){var G__28460 = "path";
var G__28461 = (function (){var obj28463 = ({"fill":"#989fa9","isolation":"isolate","d":"M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"});
return obj28463;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28460,G__28461) : helix.core.jsx.call(null,G__28460,G__28461));
})(),(function (){var G__28464 = "path";
var G__28465 = (function (){var obj28467 = ({"fill":"#fff","opacity":0.5,"d":"M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"});
return obj28467;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28464,G__28465) : helix.core.jsx.call(null,G__28464,G__28465));
})()]});
return obj28455;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28452,G__28453) : helix.core.jsxs.call(null,G__28452,G__28453));
})(),(function (){var G__28468 = app.shared.sidebar.control_panel.lang_flag.lang_flag;
var G__28469 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28468,G__28469) : helix.core.jsx.call(null,G__28468,G__28469));
})(),(function (){var G__28470 = app.shared.sidebar.control_panel.mode.core.operation_mode;
var G__28471 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28470,G__28471) : helix.core.jsx.call(null,G__28470,G__28471));
})(),(function (){var G__28472 = "line";
var G__28473 = (function (){var obj28475 = ({"x1":66.403,"y1":167.444,"x2":498.535,"y2":167.444,"className":"ctrl-panel-horizontal-line"});
return obj28475;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28472,G__28473) : helix.core.jsx.call(null,G__28472,G__28473));
})(),(function (){var G__28476 = app.shared.sidebar.control_panel.slider.core.slider;
var G__28477 = (function (){var obj28479 = ({"z":(1),"v-%":(50),"x":(66),"next-v-%":(50),"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null),"max-val":(35),"title":"STEAM","y":(216),"active":true});
return obj28479;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28476,G__28477) : helix.core.jsx.call(null,G__28476,G__28477));
})(),(function (){var G__28480 = app.shared.sidebar.control_panel.slider.core.slider;
var G__28481 = (function (){var obj28483 = ({"z":(1),"v-%":(0),"x":(66),"next-v-%":(0),"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null),"max-val":(70),"title":"FEEDWATER","y":(300),"active":false});
return obj28483;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28480,G__28481) : helix.core.jsx.call(null,G__28480,G__28481));
})()]});
return obj28449;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28446,G__28447) : helix.core.jsxs.call(null,G__28446,G__28447));
})(),(function (){var G__28484 = app.shared.sidebar.control_panel.buttons_panel.core.buttons_panel;
var G__28485 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28484,G__28485) : helix.core.jsx.call(null,G__28484,G__28485));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28444,G__28445) : helix.core.jsxs.call(null,G__28444,G__28445));
});
if(goog.DEBUG === true){
var G__28486 = G__28440;
(G__28486.displayName = "app.shared.sidebar.control-panel.core/control-panel");

return G__28486;
} else {
return G__28440;
}
})();




//# sourceMappingURL=app.shared.sidebar.control_panel.core.js.map
