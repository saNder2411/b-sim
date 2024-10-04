goog.provide('app.ui.shared.components.toolbar');

app.ui.shared.components.toolbar.toolbar = (function (){var G__37210 = (function app$ui$shared$components$toolbar$toolbar_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37219 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__37222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37219,(0),null);
var map__37222__$1 = cljs.core.__destructure_map(map__37222);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37222__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("toolbar","show","toolbar/show",431398428)], null));
var G__37237 = "svg";
var G__37238 = (function (){var obj37241 = ({"width":"70.7%","viewBox":"0 0 1347.7 172.76","style":(function (){var obj37248 = ({"left":helix.impl.props.__GT_js("29.7%"),"top":helix.impl.props.__GT_js("83.8%")});
return obj37248;
})(),"className":helix.impl.props.normalize_class((cljs.core.truth_(show_toolbar)?"":"toolbar-hide")),"children":[(function (){var G__37256 = "path";
var G__37257 = (function (){var obj37266 = ({"fill":"#0c245b","stroke":"#2b87e5","strokeWidth":0.5,"d":"m87.5 36.544h1172.1a49.852 49.852 0 0 1 49.85 49.852 49.851 49.851 0 0 1-49.851 49.85h-1172.1a49.851 49.851 0 0 1-49.852-49.846 49.851 49.851 0 0 1 49.846-49.856z"});
return obj37266;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37256,G__37257) : helix.core.jsx.call(null,G__37256,G__37257));
})(),children]});
return obj37241;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37237,G__37238) : helix.core.jsxs.call(null,G__37237,G__37238));
});
if(goog.DEBUG === true){
var G__37275 = G__37210;
(G__37275.displayName = "app.ui.shared.components.toolbar/toolbar");

return G__37275;
} else {
return G__37210;
}
})();




app.ui.shared.components.toolbar.title = (function (){var G__37295 = (function app$ui$shared$components$toolbar$title_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__37301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37298,(0),null);
var map__37301__$1 = cljs.core.__destructure_map(map__37301);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37301__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37301__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37301__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37301__$1,new cljs.core.Keyword(null,"title","title",636505583));

var G__37319 = "text";
var G__37322 = (function (){var obj37330 = ({"x":x,"y":y,"fill":fill,"fontFamily":"Arial","fontSize":(22),"children":title});
return obj37330;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37319,G__37322) : helix.core.jsx.call(null,G__37319,G__37322));
});
if(goog.DEBUG === true){
var G__37337 = G__37295;
(G__37337.displayName = "app.ui.shared.components.toolbar/title");

return G__37337;
} else {
return G__37295;
}
})();




app.ui.shared.components.toolbar.btn_wrapper = (function (){var G__37365 = (function app$ui$shared$components$toolbar$btn_wrapper_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37372 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__37375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37372,(0),null);
var map__37375__$1 = cljs.core.__destructure_map(map__37375);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var inactive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword(null,"inactive","inactive",-306247616));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__37385 = "g";
var G__37386 = (function (){var obj37388 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"className":helix.impl.props.normalize_class(["toolbar-btn-",(cljs.core.truth_(inactive)?"inactive":"active")].join('')),"onClick":(cljs.core.truth_(inactive)?null:on_click),"children":children});
return obj37388;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37385,G__37386) : helix.core.jsx.call(null,G__37385,G__37386));
});
if(goog.DEBUG === true){
var G__37397 = G__37365;
(G__37397.displayName = "app.ui.shared.components.toolbar/btn-wrapper");

return G__37397;
} else {
return G__37365;
}
})();




app.ui.shared.components.toolbar.btn_info = (function (){var G__37404 = (function app$ui$shared$components$toolbar$btn_info_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37410 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__37415 = helix.core.Fragment;
var G__37416 = ({"children": [(function (){var G__37419 = "circle";
var G__37420 = (function (){var obj37424 = ({"cx":(33),"cy":(33),"r":(31),"fill":"none","stroke":"#14a2b8","strokeWidth":(3)});
return obj37424;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37419,G__37420) : helix.core.jsx.call(null,G__37419,G__37420));
})(),(function (){var G__37426 = "path";
var G__37427 = (function (){var obj37429 = ({"fill":"#14a2b8","d":"m33.26 20.131a1.8 1.8 0 0 1-1.347-0.568 1.95 1.95 0 1 1 3.242-1.644 1.8 1.8 0 0 1 0 0.275 1.9 1.9 0 0 1-0.548 1.369 1.8 1.8 0 0 1-1.347 0.568zm-1.431 6.021a1.432 1.432 0 0 1 2.863 0v19.074a1.432 1.432 0 0 1-2.863 0z"});
return obj37429;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37426,G__37427) : helix.core.jsx.call(null,G__37426,G__37427));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37415,G__37416) : helix.core.jsxs.call(null,G__37415,G__37416));
});
if(goog.DEBUG === true){
var G__37438 = G__37404;
(G__37438.displayName = "app.ui.shared.components.toolbar/btn-info");

return G__37438;
} else {
return G__37404;
}
})();




app.ui.shared.components.toolbar.btn_settings = (function (){var G__37470 = (function app$ui$shared$components$toolbar$btn_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__37486 = helix.core.Fragment;
var G__37487 = ({"children": [(function (){var G__37488 = "path";
var G__37489 = (function (){var obj37493 = ({"fill":"#eee","d":"m32.167 15.406 2.007 0.011 0.95 2.033 0.488 1.047 1.066 0.448 5.037 2.119 1.091-0.382 2.116-0.742 1.412 1.427-0.766 2.108-0.395 1.087 0.437 1.071 1.627 3.99 0.436 1.07 1.042 0.5 2.021 0.973-0.011 2.007-2.033 0.95-1.046 0.489-0.449 1.065-1.671 3.969-0.448 1.065 0.382 1.091 0.742 2.117-1.427 1.411-2.109-0.766-1.086-0.394-1.07 0.436-3.99 1.627-1.071 0.436-0.5 1.042-0.972 2.022-2.007-0.011-0.949-2.033-0.49-1.047-1.065-0.448-3.973-1.673-1.065-0.448-1.089 0.383-2.117 0.742-1.411-1.428 0.766-2.108 0.394-1.087-0.436-1.07-1.627-3.99-0.436-1.07-1.042-0.5-2.022-0.972 0.012-2.008 3.079-1.438 0.448-1.066 1.672-3.971 0.448-1.065-0.382-1.091-0.742-2.117 1.427-1.412 2.109 0.766 1.086 0.4 1.07-0.437 3.99-1.626 1.071-0.437 0.5-1.042 0.973-2.021m-1.882-3.011-1.793 3.732-3.99 1.627-3.893-1.41-4.126 4.081 1.37 3.908-1.672 3.972-3.752 1.753-0.032 5.8 3.732 1.794 1.629 3.992-1.414 3.892 4.08 4.127 3.909-1.37 3.971 1.671 1.753 3.752 5.8 0.032 1.794-3.732 3.99-1.627 3.893 1.414 4.126-4.081-1.37-3.908 1.668-3.97 3.751-1.753 0.033-5.8-3.732-1.794-1.627-3.99 1.414-3.893-4.082-4.126-3.907 1.37-3.973-1.671-1.753-3.752-5.8-0.033z"});
return obj37493;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37488,G__37489) : helix.core.jsx.call(null,G__37488,G__37489));
})(),(function (){var G__37498 = "circle";
var G__37499 = (function (){var obj37505 = ({"cx":33.1,"cy":33.1,"r":6.5,"fill":"none","stroke":"#eee","strokeWidth":(3)});
return obj37505;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37498,G__37499) : helix.core.jsx.call(null,G__37498,G__37499));
})(),(function (){var G__37508 = "circle";
var G__37509 = (function (){var obj37511 = ({"cx":(33),"cy":(33),"r":(31),"fill":"none","stroke":"#eee","strokeWidth":(3)});
return obj37511;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37508,G__37509) : helix.core.jsx.call(null,G__37508,G__37509));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37486,G__37487) : helix.core.jsxs.call(null,G__37486,G__37487));
});
if(goog.DEBUG === true){
var G__37518 = G__37470;
(G__37518.displayName = "app.ui.shared.components.toolbar/btn-settings");

return G__37518;
} else {
return G__37470;
}
})();




app.ui.shared.components.toolbar.btn_full_screen = (function (){var G__37533 = (function app$ui$shared$components$toolbar$btn_full_screen_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__37543 = "g";
var G__37544 = (function (){var obj37546 = ({"fill":"none","stroke":"#eee","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":(3),"children":[(function (){var G__37551 = "rect";
var G__37552 = (function (){var obj37554 = ({"x":1.5,"y":1.5,"width":63.2,"height":63.2,"rx":(9)});
return obj37554;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37551,G__37552) : helix.core.jsx.call(null,G__37551,G__37552));
})(),(function (){var G__37555 = "line";
var G__37556 = (function (){var obj37558 = ({"x1":28.57,"x2":13.8,"y1":28.43,"y2":13.657});
return obj37558;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37555,G__37556) : helix.core.jsx.call(null,G__37555,G__37556));
})(),(function (){var G__37559 = "line";
var G__37560 = (function (){var obj37562 = ({"x1":37.48,"x2":52.25,"y1":28.43,"y2":13.657});
return obj37562;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37559,G__37560) : helix.core.jsx.call(null,G__37559,G__37560));
})(),(function (){var G__37567 = "line";
var G__37568 = (function (){var obj37570 = ({"x1":52.25,"x2":37.48,"y1":52.108,"y2":37.334});
return obj37570;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37567,G__37568) : helix.core.jsx.call(null,G__37567,G__37568));
})(),(function (){var G__37571 = "line";
var G__37572 = (function (){var obj37574 = ({"x1":13.8,"x2":28.57,"y1":52.108,"y2":37.334});
return obj37574;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37571,G__37572) : helix.core.jsx.call(null,G__37571,G__37572));
})(),(function (){var G__37575 = "polyline";
var G__37576 = (function (){var obj37578 = ({"transform":"translate(-561.13, -47.479)","x1":28.57,"x2":13.8,"y1":28.43,"y2":13.657,"points":"584.53 61.136 574.93 61.136 574.93 70.739"});
return obj37578;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37575,G__37576) : helix.core.jsx.call(null,G__37575,G__37576));
})(),(function (){var G__37581 = "polyline";
var G__37582 = (function (){var obj37586 = ({"transform":"translate(-561.13, -47.479)","points":"613.38 70.739 613.38 61.136 603.78 61.136"});
return obj37586;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37581,G__37582) : helix.core.jsx.call(null,G__37581,G__37582));
})(),(function (){var G__37589 = "polyline";
var G__37590 = (function (){var obj37594 = ({"transform":"translate(-561.13, -47.479)","points":"603.78 99.587 613.38 99.587 613.38 89.983"});
return obj37594;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37589,G__37590) : helix.core.jsx.call(null,G__37589,G__37590));
})(),(function (){var G__37597 = "polyline";
var G__37598 = (function (){var obj37600 = ({"transform":"translate(-561.13, -47.479)","points":"574.93 89.983 574.93 99.587 584.53 99.587"});
return obj37600;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37597,G__37598) : helix.core.jsx.call(null,G__37597,G__37598));
})()]});
return obj37546;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37543,G__37544) : helix.core.jsxs.call(null,G__37543,G__37544));
});
if(goog.DEBUG === true){
var G__37601 = G__37533;
(G__37601.displayName = "app.ui.shared.components.toolbar/btn-full-screen");

return G__37601;
} else {
return G__37533;
}
})();




app.ui.shared.components.toolbar.btn_error = (function (){var G__37608 = (function app$ui$shared$components$toolbar$btn_error_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__37613 = "g";
var G__37614 = (function (){var obj37616 = ({"fill":"none","stroke":"#db1d43","strokeWidth":(3),"strokeMiterlimit":(10),"children":[(function (){var G__37617 = "circle";
var G__37618 = (function (){var obj37620 = ({"cx":(33),"cy":(33),"r":(31)});
return obj37620;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37617,G__37618) : helix.core.jsx.call(null,G__37617,G__37618));
})(),(function (){var G__37621 = "path";
var G__37622 = (function (){var obj37624 = ({"d":"m30.577 12.487-16.621 28.789a2.913 2.913 0 0 0 2.524 4.371h33.243a2.913 2.913 0 0 0 2.523-4.371l-16.621-28.789a2.914 2.914 0 0 0-5.047 0l-16.622 28.789a2.913 2.913 0 0 0 2.524 4.371h33.243a2.913 2.913 0 0 0 2.523-4.371l-16.621-28.789a2.914 2.914 0 0 0-5.047 0z"});
return obj37624;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37621,G__37622) : helix.core.jsx.call(null,G__37621,G__37622));
})(),(function (){var G__37626 = "path";
var G__37627 = (function (){var obj37629 = ({"fill":"#db1d43","stroke":"none","d":"m33.098 38.467a1.658 1.658 0 0 1 1.241 0.523 1.768 1.768 0 1 1-2.989 1.343v-0.083a1.753 1.753 0 0 1 0.5-1.26 1.657 1.657 0 0 1 1.248-0.523zm1.318-5.543a1.318 1.318 0 0 1-2.635 0v-13.193a1.318 1.318 0 0 1 2.635 0z"});
return obj37629;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37626,G__37627) : helix.core.jsx.call(null,G__37626,G__37627));
})()]});
return obj37616;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37613,G__37614) : helix.core.jsxs.call(null,G__37613,G__37614));
});
if(goog.DEBUG === true){
var G__37633 = G__37608;
(G__37633.displayName = "app.ui.shared.components.toolbar/btn-error");

return G__37633;
} else {
return G__37608;
}
})();




app.ui.shared.components.toolbar.btn_replace = (function (){var G__37643 = (function app$ui$shared$components$toolbar$btn_replace_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__37651 = "g";
var G__37652 = (function (){var obj37656 = ({"fill":"none","stroke":"#eee","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":(3),"children":[(function (){var G__37659 = "circle";
var G__37660 = (function (){var obj37664 = ({"cx":(33),"cy":(33),"r":(31),"strokeMiterlimit":(10)});
return obj37664;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37659,G__37660) : helix.core.jsx.call(null,G__37659,G__37660));
})(),(function (){var G__37667 = "path";
var G__37668 = (function (){var obj37672 = ({"d":"m23.635 23.305h16.465a7.7 7.7 0 0 1 7.7 7.7v6.172"});
return obj37672;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37667,G__37668) : helix.core.jsx.call(null,G__37667,G__37668));
})(),(function (){var G__37675 = "path";
var G__37676 = (function (){var obj37680 = ({"d":"m39.507 39.837h-16.462a7.7 7.7 0 0 1-7.7-7.7v-6.168"});
return obj37680;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37675,G__37676) : helix.core.jsx.call(null,G__37675,G__37676));
})(),(function (){var G__37681 = "polyline";
var G__37682 = (function (){var obj37686 = ({"transform":"translate(-623.55, -54.854)","points":"651.78 83.747 646.19 78.159 651.78 72.571"});
return obj37686;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37681,G__37682) : helix.core.jsx.call(null,G__37681,G__37682));
})(),(function (){var G__37689 = "polyline";
var G__37690 = (function (){var obj37692 = ({"transform":"translate(-623.55, -54.854)","points":"658.47 89.103 664.06 94.691 658.47 100.28"});
return obj37692;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37689,G__37690) : helix.core.jsx.call(null,G__37689,G__37690));
})()]});
return obj37656;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37651,G__37652) : helix.core.jsxs.call(null,G__37651,G__37652));
});
if(goog.DEBUG === true){
var G__37697 = G__37643;
(G__37697.displayName = "app.ui.shared.components.toolbar/btn-replace");

return G__37697;
} else {
return G__37643;
}
})();




app.ui.shared.components.toolbar.btn_valve_close = (function (){var G__37735 = (function app$ui$shared$components$toolbar$btn_valve_close_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__37743 = "path";
var G__37744 = (function (){var obj37746 = ({"fill":"#1cb0ea","d":"m46.32 2.7528a31.917 31.917 0 0 1 8.881 5.755c10.988 9.689 13.815 26.168 7.456 39.21a33.375 33.375 0 0 1-8.594 10.832 32.051 32.051 0 0 1-10.248 5.719 31.051 31.051 0 0 1-9.338 1.729h-1.821l-3.416-0.123a33.7 33.7 0 0 1-19.565-9.314c-12.9-12.525-12.9-34.545 0-47.07a33.715 33.715 0 0 1 17.287-8.967l5.694-0.521a33.169 33.169 0 0 1 13.664 2.75zm-23.913 2.159a30.044 30.044 0 0 0-17.606 17.749 29.847 29.847 0 0 0 17.379 38.355 29.688 29.688 0 0 0 9.109 1.959c5.728 0.066 10.05-0.529 15.258-3.134a29.589 29.589 0 0 0 9.11-7.116c11.7-13.579 9.146-34.638-5.921-44.641a28.185 28.185 0 0 0-7.971-3.774 31.722 31.722 0 0 0-11.615-1.173 33.224 33.224 0 0 0-7.743 1.772zm5.626 33.467-7.352-13.21-2.6-4.783a1.419 1.419 0 0 1 0.918-2 7.236 7.236 0 0 1 1.585 0h24.823a7.365 7.365 0 0 1 1.585 0 1.422 1.422 0 0 1 0.917 2l-2.6 4.783-7.351 13.21-4.168 7.289h19.585a5.264 5.264 0 0 1 1.779 0.168 0.887 0.887 0 0 1 0 1.649 3.833 3.833 0 0 1-1.779 0.233h-40.76a3.833 3.833 0 0 1-1.779-0.233 0.887 0.887 0 0 1 0-1.649 5.264 5.264 0 0 1 1.779-0.168h19.585z"});
return obj37746;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37743,G__37744) : helix.core.jsx.call(null,G__37743,G__37744));
});
if(goog.DEBUG === true){
var G__37751 = G__37735;
(G__37751.displayName = "app.ui.shared.components.toolbar/btn-valve-close");

return G__37751;
} else {
return G__37735;
}
})();




app.ui.shared.components.toolbar.btn_valve_open = (function (){var G__37770 = (function app$ui$shared$components$toolbar$btn_valve_open_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37771 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__37774 = "path";
var G__37775 = (function (){var obj37777 = ({"fill":"#1cb0ea","d":"m46.319 2.7529a31.922 31.922 0 0 1 8.882 5.755c10.988 9.689 13.814 26.168 7.456 39.21a33.364 33.364 0 0 1-8.6 10.832 32.04 32.04 0 0 1-10.248 5.719 31.039 31.039 0 0 1-9.337 1.729h-1.822l-3.416-0.123a33.7 33.7 0 0 1-19.559-9.314c-12.9-12.525-12.9-34.545 0-47.07a33.715 33.715 0 0 1 17.287-8.967l5.693-0.521a33.165 33.165 0 0 1 13.664 2.749zm-23.912 2.159a30.044 30.044 0 0 0-17.606 17.749 29.847 29.847 0 0 0 17.379 38.355 29.688 29.688 0 0 0 9.109 1.959c5.727 0.066 10.05-0.529 15.258-3.134a29.589 29.589 0 0 0 9.11-7.116c11.7-13.579 9.145-34.638-5.922-44.641a28.166 28.166 0 0 0-7.97-3.774 31.724 31.724 0 0 0-11.615-1.173 33.224 33.224 0 0 0-7.743 1.772zm5.238 13.443h19.125c2.847 0.564-0.125 4.382-0.838 5.675l-8.854 15.944-2.674 4.774c-0.4 0.6-0.938 1.186-1.74 0.956-0.658-0.191-1.015-0.856-1.341-1.4l-2.152-3.872-8.617-15.491c-0.527-0.943-2.624-4.393-2.6-5.234 0.018-0.687 0.321-0.876 0.836-1.2 1.343-0.342 7.068-0.169 8.856-0.15zm-7.287 29.363h-4.331a34.256 34.256 0 0 1-5-0.137c-0.788-0.319-1.05-1.169-0.371-1.647a4 4 0 0 1 1.952-0.266h11.849c1.685 9e-3 1.958 0.35 2.277 2.05zm20.951-2.05h12.07a4 4 0 0 1 1.952 0.266c0.679 0.478 0.417 1.328-0.371 1.647a34.256 34.256 0 0 1-5 0.137h-10.7c0.275-1.469 0.494-2.023 2.049-2.05z"});
return obj37777;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37774,G__37775) : helix.core.jsx.call(null,G__37774,G__37775));
});
if(goog.DEBUG === true){
var G__37778 = G__37770;
(G__37778.displayName = "app.ui.shared.components.toolbar/btn-valve-open");

return G__37778;
} else {
return G__37770;
}
})();




app.ui.shared.components.toolbar.btn_divider = (function (){var G__37780 = (function app$ui$shared$components$toolbar$btn_divider_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37781 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__37784 = helix.core.Fragment;
var G__37785 = ({"children": [(function (){var G__37786 = "line";
var G__37787 = (function (){var obj37789 = ({"x1":(23),"x2":(23),"y1":(9),"y2":(60),"fill":"none","stroke":"#0f4477","strokeWidth":(2),"strokeMiterlimit":(10)});
return obj37789;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37786,G__37787) : helix.core.jsx.call(null,G__37786,G__37787));
})(),(function (){var G__37790 = "line";
var G__37791 = (function (){var obj37793 = ({"x1":(33),"x2":(33),"y1":(9),"y2":(60),"fill":"none","stroke":"#0f4477","strokeWidth":(2),"strokeMiterlimit":(10)});
return obj37793;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37790,G__37791) : helix.core.jsx.call(null,G__37790,G__37791));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37784,G__37785) : helix.core.jsxs.call(null,G__37784,G__37785));
});
if(goog.DEBUG === true){
var G__37794 = G__37780;
(G__37794.displayName = "app.ui.shared.components.toolbar/btn-divider");

return G__37794;
} else {
return G__37780;
}
})();




app.ui.shared.components.toolbar.switch_panel = (function (){var G__37796 = (function app$ui$shared$components$toolbar$switch_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__37800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37797,(0),null);
var map__37800__$1 = cljs.core.__destructure_map(map__37800);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37800__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37800__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37800__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__37801 = "g";
var G__37802 = (function (){var obj37804 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"children":[(function (){var G__37805 = "path";
var G__37806 = (function (){var obj37808 = ({"fill":"#eee","d":"m16.845 66.556h-4.707v-18.522a1.081 1.081 0 0 0-1.081-1.081h-3.841a1.081 1.081 0 0 0-1.081 1.081v18.522h-4.7a1.35 1.35 0 0 0-1.17 2.027l7.708 13.351a1.352 1.352 0 0 0 2.341 0l7.708-13.351a1.351 1.351 0 0 0-1.17-2.027z"});
return obj37808;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37805,G__37806) : helix.core.jsx.call(null,G__37805,G__37806));
})(),(function (){var G__37809 = "path";
var G__37810 = (function (){var obj37812 = ({"fill":"#eee","d":"m7.6 98.749v3.577a3.8 3.8 0 1 1-7.6 0.019v-3.6a3.8 3.8 0 1 1 7.6-0.019zm-5.971-0.122v3.807a2.172 2.172 0 0 0 4.344 0v-3.807a2.173 2.173 0 0 0-4.344 0zm15.429-2.809v9.411a0.853 0.853 0 0 1-0.845 0.844 0.9 0.9 0 0 1-0.8-0.491l-4.129-7.062v6.739a0.806 0.806 0 1 1-1.612 0v-9.41a0.837 0.837 0 0 1 0.829-0.844 0.91 0.91 0 0 1 0.813 0.491l4.13 7.046v-6.724a0.8 0.8 0 0 1 0.786-0.813h0.027a0.788 0.788 0 0 1 0.8 0.773c1e-3 0.013 1e-3 0.027 1e-3 0.04z"});
return obj37812;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37809,G__37810) : helix.core.jsx.call(null,G__37809,G__37810));
})(),children]});
return obj37804;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37801,G__37802) : helix.core.jsxs.call(null,G__37801,G__37802));
});
if(goog.DEBUG === true){
var G__37813 = G__37796;
(G__37813.displayName = "app.ui.shared.components.toolbar/switch-panel");

return G__37813;
} else {
return G__37796;
}
})();




app.ui.shared.components.toolbar.switch$ = (function (){var G__37815 = (function app$ui$shared$components$toolbar$switch_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__37819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37816,(0),null);
var map__37819__$1 = cljs.core.__destructure_map(map__37819);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37819__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37819__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37819__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var legend = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37819__$1,new cljs.core.Keyword(null,"legend","legend",-1027192245));
var inactive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37819__$1,new cljs.core.Keyword(null,"inactive","inactive",-306247616));

var G__37820 = "g";
var G__37821 = (function (){var obj37823 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", 0)"].join(''),"className":helix.impl.props.normalize_class(["toolbar-btn-",(cljs.core.truth_(inactive)?"inactive":"active")].join('')),"onClick":(cljs.core.truth_(inactive)?null:on_change),"children":[(cljs.core.truth_(value)?(function (){var G__37824 = "g";
var G__37825 = (function (){var obj37827 = ({"transform":"translate(-10, 4)","children":[(function (){var G__37828 = "polygon";
var G__37829 = (function (){var obj37831 = ({"fill":"#eee","transform":"translate(-743.47 -9.882)","points":"785.49 90.299 784.65 81.185 801.52 81.185 800.68 90.299"});
return obj37831;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37828,G__37829) : helix.core.jsx.call(null,G__37828,G__37829));
})(),(function (){var G__37832 = "path";
var G__37833 = (function (){var obj37835 = ({"fill":"#c6c6c6","d":"m57.232 72.053-0.7 7.614h-13.826l-0.7-7.614h15.232m1.644-1.5h-18.52l0.979 10.614h16.562z"});
return obj37835;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37832,G__37833) : helix.core.jsx.call(null,G__37832,G__37833));
})(),(function (){var G__37836 = "polygon";
var G__37837 = (function (){var obj37839 = ({"fill":"url(#linGradToolbarToggleSwitchDown)","transform":"translate(-743.47 -9.882)","points":"802.34 80.435 801.14 67.373 785.03 67.373 783.82 80.435"});
return obj37839;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37836,G__37837) : helix.core.jsx.call(null,G__37836,G__37837));
})(),(function (){var G__37840 = "path";
var G__37841 = (function (){var obj37843 = ({"fill":"#031229","d":"m42.365 38.354h14.5a0.8 0.8 0 0 1 0.8 0.8v18.342h-16.112v-18.338a0.8 0.8 0 0 1 0.8-0.8z"});
return obj37843;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37840,G__37841) : helix.core.jsx.call(null,G__37840,G__37841));
})()]});
return obj37827;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37824,G__37825) : helix.core.jsxs.call(null,G__37824,G__37825));
})():(function (){var G__37844 = "g";
var G__37845 = (function (){var obj37847 = ({"transform":"translate(-52, 4)","children":[(function (){var G__37848 = "polygon";
var G__37849 = (function (){var obj37851 = ({"fill":"#eee","transform":"translate(-743.47 -9.882)","points":"826.61 59.492 827.46 50.379 842.65 50.379 843.49 59.492"});
return obj37851;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37848,G__37849) : helix.core.jsx.call(null,G__37848,G__37849));
})(),(function (){var G__37852 = "path";
var G__37853 = (function (){var obj37855 = ({"fill":"#c6c6c6","d":"m98.498 41.247 0.7 7.613h-15.231l0.7-7.613h13.827m1.368-1.5h-16.563l-0.979 10.613h18.52z"});
return obj37855;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37852,G__37853) : helix.core.jsx.call(null,G__37852,G__37853));
})(),(function (){var G__37856 = "polygon";
var G__37857 = (function (){var obj37859 = ({"fill":"url(#linGradToolbarToggleSwitchUp)","transform":"translate(-743.47 -9.882)","points":"825.79 60.242 827 73.304 843.11 73.304 844.31 60.242"});
return obj37859;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37856,G__37857) : helix.core.jsx.call(null,G__37856,G__37857));
})(),(function (){var G__37860 = "path";
var G__37861 = (function (){var obj37863 = ({"fill":"#031229","d":"m98.832 82.56h-14.5a0.8 0.8 0 0 1-0.8-0.8v-18.333h16.11v18.328a0.8 0.8 0 0 1-0.8 0.8z"});
return obj37863;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37860,G__37861) : helix.core.jsx.call(null,G__37860,G__37861));
})()]});
return obj37847;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37844,G__37845) : helix.core.jsxs.call(null,G__37844,G__37845));
})()),(function (){var G__37864 = "text";
var G__37865 = (function (){var obj37867 = ({"x":39.3,"y":(106),"fill":"#eee","fontFamily":"Arial","fontSize":(16),"fontWeight":(600),"textAnchor":"middle","children":legend});
return obj37867;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37864,G__37865) : helix.core.jsx.call(null,G__37864,G__37865));
})()]});
return obj37823;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37820,G__37821) : helix.core.jsxs.call(null,G__37820,G__37821));
});
if(goog.DEBUG === true){
var G__37868 = G__37815;
(G__37868.displayName = "app.ui.shared.components.toolbar/switch");

return G__37868;
} else {
return G__37815;
}
})();




//# sourceMappingURL=app.ui.shared.components.toolbar.js.map
