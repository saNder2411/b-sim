goog.provide('app.shared.components.toolbar_switch');

app.shared.components.toolbar_switch.toolbar_switch = (function (){var G__49536 = (function app$shared$components$toolbar_switch$toolbar_switch_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__49540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49537,(0),null);
var map__49540__$1 = cljs.core.__destructure_map(map__49540);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var legend = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword(null,"legend","legend",-1027192245));
var inactive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49540__$1,new cljs.core.Keyword(null,"inactive","inactive",-306247616));

var G__49541 = "g";
var G__49542 = (function (){var obj49544 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", 0)"].join(''),"className":helix.impl.props.normalize_class(["toolbar-btn-",(cljs.core.truth_(inactive)?"inactive":"active")].join('')),"onClick":(cljs.core.truth_(inactive)?null:on_change),"children":[(cljs.core.truth_(value)?(function (){var G__49545 = "g";
var G__49546 = (function (){var obj49548 = ({"transform":"translate(-10, 4)","children":[(function (){var G__49549 = "polygon";
var G__49550 = (function (){var obj49552 = ({"fill":"#eee","transform":"translate(-743.47 -9.882)","points":"785.49 90.299 784.65 81.185 801.52 81.185 800.68 90.299"});
return obj49552;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49549,G__49550) : helix.core.jsx.call(null,G__49549,G__49550));
})(),(function (){var G__49553 = "path";
var G__49554 = (function (){var obj49556 = ({"fill":"#c6c6c6","d":"m57.232 72.053-0.7 7.614h-13.826l-0.7-7.614h15.232m1.644-1.5h-18.52l0.979 10.614h16.562z"});
return obj49556;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49553,G__49554) : helix.core.jsx.call(null,G__49553,G__49554));
})(),(function (){var G__49557 = "polygon";
var G__49558 = (function (){var obj49560 = ({"fill":"url(#linGradToolbarToggleSwitchDown)","transform":"translate(-743.47 -9.882)","points":"802.34 80.435 801.14 67.373 785.03 67.373 783.82 80.435"});
return obj49560;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49557,G__49558) : helix.core.jsx.call(null,G__49557,G__49558));
})(),(function (){var G__49561 = "path";
var G__49562 = (function (){var obj49564 = ({"fill":"#031229","d":"m42.365 38.354h14.5a0.8 0.8 0 0 1 0.8 0.8v18.342h-16.112v-18.338a0.8 0.8 0 0 1 0.8-0.8z"});
return obj49564;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49561,G__49562) : helix.core.jsx.call(null,G__49561,G__49562));
})()]});
return obj49548;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49545,G__49546) : helix.core.jsxs.call(null,G__49545,G__49546));
})():(function (){var G__49565 = "g";
var G__49566 = (function (){var obj49568 = ({"transform":"translate(-52, 4)","children":[(function (){var G__49569 = "polygon";
var G__49570 = (function (){var obj49572 = ({"fill":"#eee","transform":"translate(-743.47 -9.882)","points":"826.61 59.492 827.46 50.379 842.65 50.379 843.49 59.492"});
return obj49572;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49569,G__49570) : helix.core.jsx.call(null,G__49569,G__49570));
})(),(function (){var G__49573 = "path";
var G__49574 = (function (){var obj49576 = ({"fill":"#c6c6c6","d":"m98.498 41.247 0.7 7.613h-15.231l0.7-7.613h13.827m1.368-1.5h-16.563l-0.979 10.613h18.52z"});
return obj49576;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49573,G__49574) : helix.core.jsx.call(null,G__49573,G__49574));
})(),(function (){var G__49577 = "polygon";
var G__49578 = (function (){var obj49580 = ({"fill":"url(#linGradToolbarToggleSwitchUp)","transform":"translate(-743.47 -9.882)","points":"825.79 60.242 827 73.304 843.11 73.304 844.31 60.242"});
return obj49580;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49577,G__49578) : helix.core.jsx.call(null,G__49577,G__49578));
})(),(function (){var G__49581 = "path";
var G__49582 = (function (){var obj49584 = ({"fill":"#031229","d":"m98.832 82.56h-14.5a0.8 0.8 0 0 1-0.8-0.8v-18.333h16.11v18.328a0.8 0.8 0 0 1-0.8 0.8z"});
return obj49584;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49581,G__49582) : helix.core.jsx.call(null,G__49581,G__49582));
})()]});
return obj49568;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49565,G__49566) : helix.core.jsxs.call(null,G__49565,G__49566));
})()),(function (){var G__49585 = "text";
var G__49586 = (function (){var obj49588 = ({"x":39.3,"y":(106),"fill":"#eee","fontFamily":"Arial","fontSize":(16),"fontWeight":(600),"textAnchor":"middle","children":legend});
return obj49588;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49585,G__49586) : helix.core.jsx.call(null,G__49585,G__49586));
})()]});
return obj49544;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49541,G__49542) : helix.core.jsxs.call(null,G__49541,G__49542));
});
if(goog.DEBUG === true){
var G__49589 = G__49536;
(G__49589.displayName = "app.shared.components.toolbar-switch/toolbar-switch");

return G__49589;
} else {
return G__49536;
}
})();




//# sourceMappingURL=app.shared.components.toolbar_switch.js.map
