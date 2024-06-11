goog.provide('app.shared.sidebar.control_panel.core');

app.shared.sidebar.control_panel.core.control_panel = (function (){var G__28698 = (function app$shared$sidebar$control_panel$core$control_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null));
var y = (cljs.core.truth_(show)?(541):(741));
var G__28702 = helix.core.Fragment;
var G__28703 = ({"children": [(function (){var G__28704 = "g";
var G__28705 = (function (){var obj28707 = ({"style":(function (){var obj28709 = ({"transform":helix.impl.props.__GT_js(["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join('')),"transition":helix.impl.props.__GT_js("transform 300ms ease-out")});
return obj28709;
})(),"children":[(function (){var G__28710 = "g";
var G__28711 = (function (){var obj28713 = ({"children":[(function (){var G__28714 = "image";
var G__28715 = (function (){var obj28717 = ({"width":(566),"height":(463),"opacity":0.3,"isolation":"isolate","href":"assets/img/ctrl-pnl-shadow.png"});
return obj28717;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28714,G__28715) : helix.core.jsx.call(null,G__28714,G__28715));
})(),(function (){var G__28718 = "path";
var G__28719 = (function (){var obj28721 = ({"fill":"#989fa9","isolation":"isolate","d":"M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"});
return obj28721;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28718,G__28719) : helix.core.jsx.call(null,G__28718,G__28719));
})(),(function (){var G__28722 = "path";
var G__28723 = (function (){var obj28725 = ({"fill":"#fff","opacity":0.5,"d":"M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"});
return obj28725;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28722,G__28723) : helix.core.jsx.call(null,G__28722,G__28723));
})()]});
return obj28713;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28710,G__28711) : helix.core.jsxs.call(null,G__28710,G__28711));
})(),(function (){var G__28726 = app.shared.sidebar.control_panel.lang_flag.lang_flag;
var G__28727 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28726,G__28727) : helix.core.jsx.call(null,G__28726,G__28727));
})(),(function (){var G__28728 = app.shared.sidebar.control_panel.mode.core.operation_mode;
var G__28729 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28728,G__28729) : helix.core.jsx.call(null,G__28728,G__28729));
})(),(function (){var G__28730 = "line";
var G__28731 = (function (){var obj28733 = ({"x1":66.403,"y1":167.444,"x2":498.535,"y2":167.444,"className":"ctrl-panel-horizontal-line"});
return obj28733;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28730,G__28731) : helix.core.jsx.call(null,G__28730,G__28731));
})(),(function (){var G__28734 = app.shared.sidebar.control_panel.slider.core.slider;
var G__28735 = (function (){var obj28737 = ({"x":(66),"y":(216),"title":"STEAM","max-val":(35),"v-%":(50),"next-v-%":(50),"active":true,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null)});
return obj28737;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28734,G__28735) : helix.core.jsx.call(null,G__28734,G__28735));
})(),(function (){var G__28738 = app.shared.sidebar.control_panel.slider.core.slider;
var G__28739 = (function (){var obj28741 = ({"x":(66),"y":(300),"title":"FEEDWATER","max-val":(70),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),"t/h",new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null)});
return obj28741;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28738,G__28739) : helix.core.jsx.call(null,G__28738,G__28739));
})()]});
return obj28707;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28704,G__28705) : helix.core.jsxs.call(null,G__28704,G__28705));
})(),(function (){var G__28742 = app.shared.sidebar.control_panel.buttons_panel.core.buttons_panel;
var G__28743 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28742,G__28743) : helix.core.jsx.call(null,G__28742,G__28743));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28702,G__28703) : helix.core.jsxs.call(null,G__28702,G__28703));
});
if(goog.DEBUG === true){
var G__28744 = G__28698;
(G__28744.displayName = "app.shared.sidebar.control-panel.core/control-panel");

return G__28744;
} else {
return G__28698;
}
})();




//# sourceMappingURL=app.shared.sidebar.control_panel.core.js.map
