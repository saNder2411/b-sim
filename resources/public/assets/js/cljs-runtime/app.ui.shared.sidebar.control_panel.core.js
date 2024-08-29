goog.provide('app.ui.shared.sidebar.control_panel.core');

app.ui.shared.sidebar.control_panel.core.control_panel = (function (){var G__39638 = (function app$ui$shared$sidebar$control_panel$core$control_panel_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"ctrl-panel-view","ctrl-panel-view",776804856)], null)], null));
var y = (cljs.core.truth_(show)?(541):(741));
var steam_unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var flow_rate_unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-feed-actuator-data-by-path","current-feed-actuator-data-by-path",-2035634407),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var G__39645 = helix.core.Fragment;
var G__39646 = ({"children": [(function (){var G__39647 = "g";
var G__39648 = (function (){var obj39650 = ({"style":(function (){var obj39652 = ({"transform":helix.impl.props.__GT_js(["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join('')),"transition":helix.impl.props.__GT_js("transform 300ms ease-out")});
return obj39652;
})(),"children":[(function (){var G__39653 = "g";
var G__39654 = (function (){var obj39656 = ({"children":[(function (){var G__39657 = "image";
var G__39658 = (function (){var obj39660 = ({"width":(566),"height":(463),"opacity":0.3,"isolation":"isolate","href":"assets/img/ctrl-pnl-shadow.png"});
return obj39660;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39657,G__39658) : helix.core.jsx.call(null,G__39657,G__39658));
})(),(function (){var G__39661 = "path";
var G__39662 = (function (){var obj39664 = ({"fill":"#989fa9","isolation":"isolate","d":"M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"});
return obj39664;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39661,G__39662) : helix.core.jsx.call(null,G__39661,G__39662));
})(),(function (){var G__39665 = "path";
var G__39666 = (function (){var obj39668 = ({"fill":"#fff","opacity":0.5,"d":"M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"});
return obj39668;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39665,G__39666) : helix.core.jsx.call(null,G__39665,G__39666));
})()]});
return obj39656;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39653,G__39654) : helix.core.jsxs.call(null,G__39653,G__39654));
})(),(function (){var G__39669 = app.ui.shared.sidebar.control_panel.lang_flag.lang_flag;
var G__39670 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39669,G__39670) : helix.core.jsx.call(null,G__39669,G__39670));
})(),(function (){var G__39671 = app.ui.shared.sidebar.control_panel.mode.core.operation_mode;
var G__39672 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39671,G__39672) : helix.core.jsx.call(null,G__39671,G__39672));
})(),(function (){var G__39673 = "line";
var G__39674 = (function (){var obj39676 = ({"x1":66.403,"y1":167.444,"x2":498.535,"y2":167.444,"className":"ctrl-panel-horizontal-line"});
return obj39676;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39673,G__39674) : helix.core.jsx.call(null,G__39673,G__39674));
})(),(function (){var G__39677 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__39678 = (function (){var obj39680 = ({"z":(1),"v-%":(50),"x":(66),"next-v-%":(50),"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),steam_unit,new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null),"max-val":(35),"title":"STEAM","y":(216),"active":true});
return obj39680;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39677,G__39678) : helix.core.jsx.call(null,G__39677,G__39678));
})(),(function (){var G__39681 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__39682 = (function (){var obj39684 = ({"z":(1),"v-%":(0),"x":(66),"next-v-%":(0),"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),78.7,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),34.14,new cljs.core.Keyword(null,"fraction","fraction",107940680),(2),new cljs.core.Keyword(null,"unit","unit",375175175),flow_rate_unit,new cljs.core.Keyword(null,"fill","fill",883462889),"#6f7684"], null),"max-val":(70),"title":"FEEDWATER","y":(300),"active":false});
return obj39684;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39681,G__39682) : helix.core.jsx.call(null,G__39681,G__39682));
})()]});
return obj39650;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39647,G__39648) : helix.core.jsxs.call(null,G__39647,G__39648));
})(),(function (){var G__39685 = app.ui.shared.sidebar.control_panel.buttons_panel.core.buttons_panel;
var G__39686 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39685,G__39686) : helix.core.jsx.call(null,G__39685,G__39686));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39645,G__39646) : helix.core.jsxs.call(null,G__39645,G__39646));
});
if(goog.DEBUG === true){
var G__39687 = G__39638;
(G__39687.displayName = "app.ui.shared.sidebar.control-panel.core/control-panel");

return G__39687;
} else {
return G__39638;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.core.js.map
