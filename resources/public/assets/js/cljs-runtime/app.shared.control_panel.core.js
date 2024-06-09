goog.provide('app.shared.control_panel.core');

app.shared.control_panel.core.control_panel = (function (){var G__28464 = (function app$shared$control_panel$core$control_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28468 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null));
var y = (cljs.core.truth_(show)?(0):41.6);
var G__28523 = helix.core.Fragment;
var G__28524 = ({"children": [(function (){var G__28541 = "svg";
var G__28542 = (function (){var obj28562 = ({"style":(function (){var obj28572 = ({"width":helix.impl.props.__GT_js("29.48%"),"top":helix.impl.props.__GT_js("50.15%"),"transform":helix.impl.props.__GT_js(["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%)"].join('')),"transition":helix.impl.props.__GT_js("transform 300ms ease-out")});
return obj28572;
})(),"viewBox":"0 0 566 463","children":[(function (){var G__28669 = "g";
var G__28670 = (function (){var obj28678 = ({"children":[(function (){var G__28690 = "image";
var G__28692 = (function (){var obj28696 = ({"width":(566),"height":(463),"opacity":0.3,"isolation":"isolate","href":"assets/img/ctrl-pnl-shadow.png"});
return obj28696;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28690,G__28692) : helix.core.jsx.call(null,G__28690,G__28692));
})(),(function (){var G__28713 = "path";
var G__28714 = (function (){var obj28721 = ({"fill":"#989fa9","isolation":"isolate","d":"M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"});
return obj28721;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28713,G__28714) : helix.core.jsx.call(null,G__28713,G__28714));
})(),(function (){var G__28736 = "path";
var G__28737 = (function (){var obj28739 = ({"fill":"#fff","opacity":0.5,"d":"M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"});
return obj28739;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28736,G__28737) : helix.core.jsx.call(null,G__28736,G__28737));
})()]});
return obj28678;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28669,G__28670) : helix.core.jsxs.call(null,G__28669,G__28670));
})(),(function (){var G__28766 = app.shared.control_panel.lang_flag.lang_flag;
var G__28767 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28766,G__28767) : helix.core.jsx.call(null,G__28766,G__28767));
})(),(function (){var G__28778 = app.shared.control_panel.mode.operation_mode;
var G__28779 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28778,G__28779) : helix.core.jsx.call(null,G__28778,G__28779));
})(),(function (){var G__28791 = "line";
var G__28792 = (function (){var obj28800 = ({"x1":66.403,"y1":167.444,"x2":498.535,"y2":167.444,"className":"ctrl-panel-horizontal-line"});
return obj28800;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28791,G__28792) : helix.core.jsx.call(null,G__28791,G__28792));
})(),(function (){var G__28809 = app.shared.control_panel.slider.slider;
var G__28810 = (function (){var obj28823 = ({"y":215.5,"title":"STEAM","max-val":(35),"v-%":(50),"next-v-%":(50),"active":true,"value-box":new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),3.8,new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null)});
return obj28823;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28809,G__28810) : helix.core.jsx.call(null,G__28809,G__28810));
})(),(function (){var G__28856 = app.shared.control_panel.slider.slider;
var G__28857 = (function (){var obj28864 = ({"y":300.5,"title":"FEEDWATER","max-val":(70),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),3.8,new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null)});
return obj28864;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28856,G__28857) : helix.core.jsx.call(null,G__28856,G__28857));
})()]});
return obj28562;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28541,G__28542) : helix.core.jsxs.call(null,G__28541,G__28542));
})(),(function (){var G__28879 = app.shared.control_panel.btn_panel.buttons_panel;
var G__28880 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28879,G__28880) : helix.core.jsx.call(null,G__28879,G__28880));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28523,G__28524) : helix.core.jsxs.call(null,G__28523,G__28524));
});
if(goog.DEBUG === true){
var G__28893 = G__28464;
(G__28893.displayName = "app.shared.control-panel.core/control-panel");

return G__28893;
} else {
return G__28464;
}
})();




//# sourceMappingURL=app.shared.control_panel.core.js.map
