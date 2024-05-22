goog.provide('app.shared.control_panel.core');

app.shared.control_panel.core.control_panel = (function (){var G__29628 = (function app$shared$control_panel$core$control_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null));
var y = (cljs.core.truth_(show)?(0):41.6);
var G__29632 = helix.core.Fragment;
var G__29633 = ({"children": [(function (){var G__29634 = "svg";
var G__29635 = (function (){var obj29637 = ({"style":(function (){var obj29639 = ({"width":helix.impl.props.__GT_js("29.48%"),"top":helix.impl.props.__GT_js("50.15%"),"transform":helix.impl.props.__GT_js(["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%)"].join('')),"transition":helix.impl.props.__GT_js("transform 300ms ease-out")});
return obj29639;
})(),"viewBox":"0 0 566 463","children":[(function (){var G__29640 = "g";
var G__29641 = (function (){var obj29643 = ({"children":[(function (){var G__29644 = "image";
var G__29645 = (function (){var obj29647 = ({"width":(566),"height":(463),"opacity":0.3,"isolation":"isolate","href":"assets/img/ctrl-pnl-shadow.png"});
return obj29647;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29644,G__29645) : helix.core.jsx.call(null,G__29644,G__29645));
})(),(function (){var G__29648 = "path";
var G__29649 = (function (){var obj29651 = ({"fill":"#989fa9","isolation":"isolate","d":"M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"});
return obj29651;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29648,G__29649) : helix.core.jsx.call(null,G__29648,G__29649));
})(),(function (){var G__29652 = "path";
var G__29653 = (function (){var obj29655 = ({"fill":"#fff","opacity":0.5,"d":"M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"});
return obj29655;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29652,G__29653) : helix.core.jsx.call(null,G__29652,G__29653));
})()]});
return obj29643;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29640,G__29641) : helix.core.jsxs.call(null,G__29640,G__29641));
})(),(function (){var G__29656 = app.shared.control_panel.lang_flag.lang_flag;
var G__29657 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29656,G__29657) : helix.core.jsx.call(null,G__29656,G__29657));
})(),(function (){var G__29658 = app.shared.control_panel.mode.operation_mode;
var G__29659 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29658,G__29659) : helix.core.jsx.call(null,G__29658,G__29659));
})(),(function (){var G__29660 = "line";
var G__29661 = (function (){var obj29663 = ({"x1":66.403,"y1":167.444,"x2":498.535,"y2":167.444,"className":"ctrl-panel-horizontal-line"});
return obj29663;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29660,G__29661) : helix.core.jsx.call(null,G__29660,G__29661));
})(),(function (){var G__29664 = app.shared.control_panel.slider.slider;
var G__29665 = (function (){var obj29667 = ({"y":215.5,"title":"STEAM","max-val":(35),"v-%":(50),"next-v-%":(50),"active":true,"value-box":new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),3.8,new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null)});
return obj29667;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29664,G__29665) : helix.core.jsx.call(null,G__29664,G__29665));
})(),(function (){var G__29668 = app.shared.control_panel.slider.slider;
var G__29669 = (function (){var obj29671 = ({"y":300.5,"title":"FEEDWATER","max-val":(70),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),3.8,new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null)});
return obj29671;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29668,G__29669) : helix.core.jsx.call(null,G__29668,G__29669));
})()]});
return obj29637;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29634,G__29635) : helix.core.jsxs.call(null,G__29634,G__29635));
})(),(function (){var G__29672 = app.shared.control_panel.btn_panel.buttons_panel;
var G__29673 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29672,G__29673) : helix.core.jsx.call(null,G__29672,G__29673));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29632,G__29633) : helix.core.jsxs.call(null,G__29632,G__29633));
});
if(goog.DEBUG === true){
var G__29674 = G__29628;
(G__29674.displayName = "app.shared.control-panel.core/control-panel");

return G__29674;
} else {
return G__29628;
}
})();




//# sourceMappingURL=app.shared.control_panel.core.js.map
