goog.provide('app.ui.shared.sidebar.control_panel.core');

app.ui.shared.sidebar.control_panel.core.control_panel = (function (){var G__29663 = (function app$ui$shared$sidebar$control_panel$core$control_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null)], null));
var y = (cljs.core.truth_(show)?(541):(741));
var G__29679 = helix.core.Fragment;
var G__29680 = ({"children": [(function (){var G__29683 = "g";
var G__29684 = (function (){var obj29688 = ({"style":(function (){var obj29692 = ({"transform":helix.impl.props.__GT_js(["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join('')),"transition":helix.impl.props.__GT_js("transform 300ms ease-out")});
return obj29692;
})(),"children":[(function (){var G__29701 = "g";
var G__29702 = (function (){var obj29704 = ({"children":[(function (){var G__29709 = "image";
var G__29710 = (function (){var obj29717 = ({"width":(566),"height":(463),"opacity":0.3,"isolation":"isolate","href":"assets/img/ctrl-pnl-shadow.png"});
return obj29717;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29709,G__29710) : helix.core.jsx.call(null,G__29709,G__29710));
})(),(function (){var G__29722 = "path";
var G__29723 = (function (){var obj29729 = ({"fill":"#989fa9","isolation":"isolate","d":"M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"});
return obj29729;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29722,G__29723) : helix.core.jsx.call(null,G__29722,G__29723));
})(),(function (){var G__29732 = "path";
var G__29733 = (function (){var obj29739 = ({"fill":"#fff","opacity":0.5,"d":"M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"});
return obj29739;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29732,G__29733) : helix.core.jsx.call(null,G__29732,G__29733));
})()]});
return obj29704;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29701,G__29702) : helix.core.jsxs.call(null,G__29701,G__29702));
})(),(function (){var G__29744 = app.ui.shared.sidebar.control_panel.lang_flag.lang_flag;
var G__29745 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29744,G__29745) : helix.core.jsx.call(null,G__29744,G__29745));
})(),(function (){var G__29750 = app.ui.shared.sidebar.control_panel.mode.core.operation_mode;
var G__29751 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29750,G__29751) : helix.core.jsx.call(null,G__29750,G__29751));
})(),(function (){var G__29754 = "line";
var G__29755 = (function (){var obj29761 = ({"x1":66.403,"y1":167.444,"x2":498.535,"y2":167.444,"className":"ctrl-panel-horizontal-line"});
return obj29761;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29754,G__29755) : helix.core.jsx.call(null,G__29754,G__29755));
})(),(function (){var G__29770 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__29771 = (function (){var obj29773 = ({"z":(1),"v-%":(50),"x":(66),"next-v-%":(50),"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null),"max-val":(35),"title":"STEAM","y":(216),"active":true});
return obj29773;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29770,G__29771) : helix.core.jsx.call(null,G__29770,G__29771));
})(),(function (){var G__29782 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__29783 = (function (){var obj29785 = ({"z":(1),"v-%":(0),"x":(66),"next-v-%":(0),"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null),"max-val":(70),"title":"FEEDWATER","y":(300),"active":false});
return obj29785;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29782,G__29783) : helix.core.jsx.call(null,G__29782,G__29783));
})()]});
return obj29688;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29683,G__29684) : helix.core.jsxs.call(null,G__29683,G__29684));
})(),(function (){var G__29788 = app.ui.shared.sidebar.control_panel.buttons_panel.core.buttons_panel;
var G__29791 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29788,G__29791) : helix.core.jsx.call(null,G__29788,G__29791));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29679,G__29680) : helix.core.jsxs.call(null,G__29679,G__29680));
});
if(goog.DEBUG === true){
var G__29798 = G__29663;
(G__29798.displayName = "app.ui.shared.sidebar.control-panel.core/control-panel");

return G__29798;
} else {
return G__29663;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.core.js.map
