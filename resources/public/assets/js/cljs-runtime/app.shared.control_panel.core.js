goog.provide('app.shared.control_panel.core');

app.shared.control_panel.core.control_panel = (function (){var G__92859 = (function app$shared$control_panel$core$control_panel_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__92860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null));
var y = (cljs.core.truth_(show)?(0):41.6);
var G__92863 = helix.core.Fragment;
var G__92864 = ({"children": [(function (){var G__92865 = "svg";
var G__92866 = (function (){var obj92868 = ({"style":(function (){var obj92870 = ({"width":helix.impl.props.__GT_js("29.48%"),"top":helix.impl.props.__GT_js("50.15%"),"transform":helix.impl.props.__GT_js(["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%)"].join('')),"transition":helix.impl.props.__GT_js("transform 300ms ease-out")});
return obj92870;
})(),"viewBox":"0 0 566 463","children":[(function (){var G__92871 = "g";
var G__92872 = (function (){var obj92874 = ({"children":[(function (){var G__92875 = "image";
var G__92876 = (function (){var obj92878 = ({"width":(566),"height":(463),"opacity":0.3,"isolation":"isolate","href":"assets/img/ctrl-pnl-shadow.png"});
return obj92878;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__92875,G__92876) : helix.core.jsx.call(null,G__92875,G__92876));
})(),(function (){var G__92879 = "path";
var G__92880 = (function (){var obj92882 = ({"fill":"#989fa9","isolation":"isolate","d":"M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"});
return obj92882;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__92879,G__92880) : helix.core.jsx.call(null,G__92879,G__92880));
})(),(function (){var G__92883 = "path";
var G__92884 = (function (){var obj92886 = ({"fill":"#fff","opacity":0.5,"d":"M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"});
return obj92886;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__92883,G__92884) : helix.core.jsx.call(null,G__92883,G__92884));
})()]});
return obj92874;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__92871,G__92872) : helix.core.jsxs.call(null,G__92871,G__92872));
})(),(function (){var G__92887 = app.shared.control_panel.lang_flag.lang_flag;
var G__92888 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__92887,G__92888) : helix.core.jsx.call(null,G__92887,G__92888));
})(),(function (){var G__92889 = app.shared.control_panel.mode.operation_mode;
var G__92890 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__92889,G__92890) : helix.core.jsx.call(null,G__92889,G__92890));
})(),(function (){var G__92891 = "line";
var G__92892 = (function (){var obj92894 = ({"x1":66.403,"y1":167.444,"x2":498.535,"y2":167.444,"className":"ctrl-panel-horizontal-line"});
return obj92894;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__92891,G__92892) : helix.core.jsx.call(null,G__92891,G__92892));
})(),(function (){var G__92895 = app.shared.control_panel.slider.slider;
var G__92896 = (function (){var obj92898 = ({"y":215.5,"title":"STEAM","max-val":(35),"v-%":(50),"next-v-%":(50),"active":true,"value-box":new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),3.8,new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null)});
return obj92898;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__92895,G__92896) : helix.core.jsx.call(null,G__92895,G__92896));
})(),(function (){var G__92899 = app.shared.control_panel.slider.slider;
var G__92900 = (function (){var obj92902 = ({"y":300.5,"title":"FEEDWATER","max-val":(70),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),3.8,new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null)});
return obj92902;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__92899,G__92900) : helix.core.jsx.call(null,G__92899,G__92900));
})()]});
return obj92868;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__92865,G__92866) : helix.core.jsxs.call(null,G__92865,G__92866));
})(),(function (){var G__92903 = app.shared.control_panel.btn_panel.buttons_panel;
var G__92904 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__92903,G__92904) : helix.core.jsx.call(null,G__92903,G__92904));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__92863,G__92864) : helix.core.jsxs.call(null,G__92863,G__92864));
});
if(goog.DEBUG === true){
var G__92905 = G__92859;
(G__92905.displayName = "app.shared.control-panel.core/control-panel");

return G__92905;
} else {
return G__92859;
}
})();




//# sourceMappingURL=app.shared.control_panel.core.js.map
