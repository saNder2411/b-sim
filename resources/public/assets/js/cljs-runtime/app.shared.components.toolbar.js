goog.provide('app.shared.components.toolbar');

app.shared.components.toolbar.toolbar = (function (){var G__65443 = (function app$shared$components$toolbar$toolbar_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__65447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65444,(0),null);
var map__65447__$1 = cljs.core.__destructure_map(map__65447);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65447__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-toolbar","show-toolbar",-2078087801)], null));
var G__65448 = "svg";
var G__65449 = (function (){var obj65451 = ({"width":"70.7%","viewBox":"0 0 1347.7 172.76","style":(function (){var obj65453 = ({"left":helix.impl.props.__GT_js("29.7%"),"top":helix.impl.props.__GT_js("83.8%")});
return obj65453;
})(),"className":helix.impl.props.normalize_class((cljs.core.truth_(show_toolbar)?"":"toolbar-hide")),"children":[(function (){var G__65454 = "path";
var G__65455 = (function (){var obj65457 = ({"fill":"#0c245b","stroke":"#2b87e5","strokeWidth":0.5,"d":"m87.5 36.544h1172.1a49.852 49.852 0 0 1 49.85 49.852 49.851 49.851 0 0 1-49.851 49.85h-1172.1a49.851 49.851 0 0 1-49.852-49.846 49.851 49.851 0 0 1 49.846-49.856z"});
return obj65457;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65454,G__65455) : helix.core.jsx.call(null,G__65454,G__65455));
})(),children]});
return obj65451;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65448,G__65449) : helix.core.jsxs.call(null,G__65448,G__65449));
});
if(goog.DEBUG === true){
var G__65458 = G__65443;
(G__65458.displayName = "app.shared.components.toolbar/toolbar");

return G__65458;
} else {
return G__65443;
}
})();




app.shared.components.toolbar.title = (function (){var G__65460 = (function app$shared$components$toolbar$title_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65461 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__65464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65461,(0),null);
var map__65464__$1 = cljs.core.__destructure_map(map__65464);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65464__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65464__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65464__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65464__$1,new cljs.core.Keyword(null,"title","title",636505583));

var G__65465 = "text";
var G__65466 = (function (){var obj65468 = ({"x":x,"y":y,"fill":fill,"fontFamily":"Arial","fontSize":(22),"children":title});
return obj65468;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65465,G__65466) : helix.core.jsx.call(null,G__65465,G__65466));
});
if(goog.DEBUG === true){
var G__65469 = G__65460;
(G__65469.displayName = "app.shared.components.toolbar/title");

return G__65469;
} else {
return G__65460;
}
})();




app.shared.components.toolbar.btn_wrapper = (function (){var G__65471 = (function app$shared$components$toolbar$btn_wrapper_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__65475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65472,(0),null);
var map__65475__$1 = cljs.core.__destructure_map(map__65475);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65475__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65475__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var inactive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65475__$1,new cljs.core.Keyword(null,"inactive","inactive",-306247616));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65475__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65475__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__65476 = "g";
var G__65477 = (function (){var obj65479 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"className":helix.impl.props.normalize_class(["toolbar-btn-",(cljs.core.truth_(inactive)?"inactive":"active")].join('')),"onClick":(cljs.core.truth_(inactive)?null:on_click),"children":children});
return obj65479;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65476,G__65477) : helix.core.jsx.call(null,G__65476,G__65477));
});
if(goog.DEBUG === true){
var G__65480 = G__65471;
(G__65480.displayName = "app.shared.components.toolbar/btn-wrapper");

return G__65480;
} else {
return G__65471;
}
})();




app.shared.components.toolbar.btn_info = (function (){var G__65482 = (function app$shared$components$toolbar$btn_info_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65483 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__65486 = helix.core.Fragment;
var G__65487 = ({"children": [(function (){var G__65488 = "circle";
var G__65489 = (function (){var obj65491 = ({"cx":(33),"cy":(33),"r":(31),"fill":"none","stroke":"#14a2b8","strokeWidth":(3)});
return obj65491;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65488,G__65489) : helix.core.jsx.call(null,G__65488,G__65489));
})(),(function (){var G__65492 = "path";
var G__65493 = (function (){var obj65495 = ({"fill":"#14a2b8","d":"m33.26 20.131a1.8 1.8 0 0 1-1.347-0.568 1.95 1.95 0 1 1 3.242-1.644 1.8 1.8 0 0 1 0 0.275 1.9 1.9 0 0 1-0.548 1.369 1.8 1.8 0 0 1-1.347 0.568zm-1.431 6.021a1.432 1.432 0 0 1 2.863 0v19.074a1.432 1.432 0 0 1-2.863 0z"});
return obj65495;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65492,G__65493) : helix.core.jsx.call(null,G__65492,G__65493));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65486,G__65487) : helix.core.jsxs.call(null,G__65486,G__65487));
});
if(goog.DEBUG === true){
var G__65496 = G__65482;
(G__65496.displayName = "app.shared.components.toolbar/btn-info");

return G__65496;
} else {
return G__65482;
}
})();




app.shared.components.toolbar.btn_settings = (function (){var G__65498 = (function app$shared$components$toolbar$btn_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__65502 = helix.core.Fragment;
var G__65503 = ({"children": [(function (){var G__65504 = "path";
var G__65505 = (function (){var obj65507 = ({"fill":"#eee","d":"m32.167 15.406 2.007 0.011 0.95 2.033 0.488 1.047 1.066 0.448 5.037 2.119 1.091-0.382 2.116-0.742 1.412 1.427-0.766 2.108-0.395 1.087 0.437 1.071 1.627 3.99 0.436 1.07 1.042 0.5 2.021 0.973-0.011 2.007-2.033 0.95-1.046 0.489-0.449 1.065-1.671 3.969-0.448 1.065 0.382 1.091 0.742 2.117-1.427 1.411-2.109-0.766-1.086-0.394-1.07 0.436-3.99 1.627-1.071 0.436-0.5 1.042-0.972 2.022-2.007-0.011-0.949-2.033-0.49-1.047-1.065-0.448-3.973-1.673-1.065-0.448-1.089 0.383-2.117 0.742-1.411-1.428 0.766-2.108 0.394-1.087-0.436-1.07-1.627-3.99-0.436-1.07-1.042-0.5-2.022-0.972 0.012-2.008 3.079-1.438 0.448-1.066 1.672-3.971 0.448-1.065-0.382-1.091-0.742-2.117 1.427-1.412 2.109 0.766 1.086 0.4 1.07-0.437 3.99-1.626 1.071-0.437 0.5-1.042 0.973-2.021m-1.882-3.011-1.793 3.732-3.99 1.627-3.893-1.41-4.126 4.081 1.37 3.908-1.672 3.972-3.752 1.753-0.032 5.8 3.732 1.794 1.629 3.992-1.414 3.892 4.08 4.127 3.909-1.37 3.971 1.671 1.753 3.752 5.8 0.032 1.794-3.732 3.99-1.627 3.893 1.414 4.126-4.081-1.37-3.908 1.668-3.97 3.751-1.753 0.033-5.8-3.732-1.794-1.627-3.99 1.414-3.893-4.082-4.126-3.907 1.37-3.973-1.671-1.753-3.752-5.8-0.033z"});
return obj65507;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65504,G__65505) : helix.core.jsx.call(null,G__65504,G__65505));
})(),(function (){var G__65508 = "circle";
var G__65509 = (function (){var obj65511 = ({"cx":33.1,"cy":33.1,"r":6.5,"fill":"none","stroke":"#eee","strokeWidth":(3)});
return obj65511;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65508,G__65509) : helix.core.jsx.call(null,G__65508,G__65509));
})(),(function (){var G__65512 = "circle";
var G__65513 = (function (){var obj65515 = ({"cx":(33),"cy":(33),"r":(31),"fill":"none","stroke":"#eee","strokeWidth":(3)});
return obj65515;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65512,G__65513) : helix.core.jsx.call(null,G__65512,G__65513));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65502,G__65503) : helix.core.jsxs.call(null,G__65502,G__65503));
});
if(goog.DEBUG === true){
var G__65516 = G__65498;
(G__65516.displayName = "app.shared.components.toolbar/btn-settings");

return G__65516;
} else {
return G__65498;
}
})();




app.shared.components.toolbar.btn_full_screen = (function (){var G__65518 = (function app$shared$components$toolbar$btn_full_screen_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__65522 = "g";
var G__65523 = (function (){var obj65525 = ({"fill":"none","stroke":"#eee","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":(3),"children":[(function (){var G__65526 = "rect";
var G__65527 = (function (){var obj65529 = ({"x":1.5,"y":1.5,"width":63.2,"height":63.2,"rx":(9)});
return obj65529;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65526,G__65527) : helix.core.jsx.call(null,G__65526,G__65527));
})(),(function (){var G__65530 = "line";
var G__65531 = (function (){var obj65533 = ({"x1":28.57,"x2":13.8,"y1":28.43,"y2":13.657});
return obj65533;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65530,G__65531) : helix.core.jsx.call(null,G__65530,G__65531));
})(),(function (){var G__65534 = "line";
var G__65535 = (function (){var obj65537 = ({"x1":37.48,"x2":52.25,"y1":28.43,"y2":13.657});
return obj65537;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65534,G__65535) : helix.core.jsx.call(null,G__65534,G__65535));
})(),(function (){var G__65538 = "line";
var G__65539 = (function (){var obj65541 = ({"x1":52.25,"x2":37.48,"y1":52.108,"y2":37.334});
return obj65541;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65538,G__65539) : helix.core.jsx.call(null,G__65538,G__65539));
})(),(function (){var G__65542 = "line";
var G__65543 = (function (){var obj65545 = ({"x1":13.8,"x2":28.57,"y1":52.108,"y2":37.334});
return obj65545;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65542,G__65543) : helix.core.jsx.call(null,G__65542,G__65543));
})(),(function (){var G__65546 = "polyline";
var G__65547 = (function (){var obj65549 = ({"transform":"translate(-561.13, -47.479)","x1":28.57,"x2":13.8,"y1":28.43,"y2":13.657,"points":"584.53 61.136 574.93 61.136 574.93 70.739"});
return obj65549;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65546,G__65547) : helix.core.jsx.call(null,G__65546,G__65547));
})(),(function (){var G__65550 = "polyline";
var G__65551 = (function (){var obj65553 = ({"transform":"translate(-561.13, -47.479)","points":"613.38 70.739 613.38 61.136 603.78 61.136"});
return obj65553;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65550,G__65551) : helix.core.jsx.call(null,G__65550,G__65551));
})(),(function (){var G__65554 = "polyline";
var G__65555 = (function (){var obj65557 = ({"transform":"translate(-561.13, -47.479)","points":"603.78 99.587 613.38 99.587 613.38 89.983"});
return obj65557;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65554,G__65555) : helix.core.jsx.call(null,G__65554,G__65555));
})(),(function (){var G__65558 = "polyline";
var G__65559 = (function (){var obj65561 = ({"transform":"translate(-561.13, -47.479)","points":"574.93 89.983 574.93 99.587 584.53 99.587"});
return obj65561;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65558,G__65559) : helix.core.jsx.call(null,G__65558,G__65559));
})()]});
return obj65525;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65522,G__65523) : helix.core.jsxs.call(null,G__65522,G__65523));
});
if(goog.DEBUG === true){
var G__65562 = G__65518;
(G__65562.displayName = "app.shared.components.toolbar/btn-:full-screen?");

return G__65562;
} else {
return G__65518;
}
})();




app.shared.components.toolbar.btn_error = (function (){var G__65564 = (function app$shared$components$toolbar$btn_error_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65565 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__65568 = "g";
var G__65569 = (function (){var obj65571 = ({"fill":"none","stroke":"#db1d43","strokeWidth":(3),"strokeMiterlimit":(10),"children":[(function (){var G__65572 = "circle";
var G__65573 = (function (){var obj65575 = ({"cx":(33),"cy":(33),"r":(31)});
return obj65575;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65572,G__65573) : helix.core.jsx.call(null,G__65572,G__65573));
})(),(function (){var G__65576 = "path";
var G__65577 = (function (){var obj65579 = ({"d":"m30.577 12.487-16.621 28.789a2.913 2.913 0 0 0 2.524 4.371h33.243a2.913 2.913 0 0 0 2.523-4.371l-16.621-28.789a2.914 2.914 0 0 0-5.047 0l-16.622 28.789a2.913 2.913 0 0 0 2.524 4.371h33.243a2.913 2.913 0 0 0 2.523-4.371l-16.621-28.789a2.914 2.914 0 0 0-5.047 0z"});
return obj65579;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65576,G__65577) : helix.core.jsx.call(null,G__65576,G__65577));
})(),(function (){var G__65580 = "path";
var G__65581 = (function (){var obj65583 = ({"fill":"#db1d43","stroke":"none","d":"m33.098 38.467a1.658 1.658 0 0 1 1.241 0.523 1.768 1.768 0 1 1-2.989 1.343v-0.083a1.753 1.753 0 0 1 0.5-1.26 1.657 1.657 0 0 1 1.248-0.523zm1.318-5.543a1.318 1.318 0 0 1-2.635 0v-13.193a1.318 1.318 0 0 1 2.635 0z"});
return obj65583;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65580,G__65581) : helix.core.jsx.call(null,G__65580,G__65581));
})()]});
return obj65571;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65568,G__65569) : helix.core.jsxs.call(null,G__65568,G__65569));
});
if(goog.DEBUG === true){
var G__65584 = G__65564;
(G__65584.displayName = "app.shared.components.toolbar/btn-error");

return G__65584;
} else {
return G__65564;
}
})();




app.shared.components.toolbar.btn_replace = (function (){var G__65586 = (function app$shared$components$toolbar$btn_replace_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__65590 = "g";
var G__65591 = (function (){var obj65593 = ({"fill":"none","stroke":"#eee","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":(3),"children":[(function (){var G__65594 = "circle";
var G__65595 = (function (){var obj65597 = ({"cx":(33),"cy":(33),"r":(31),"strokeMiterlimit":(10)});
return obj65597;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65594,G__65595) : helix.core.jsx.call(null,G__65594,G__65595));
})(),(function (){var G__65598 = "path";
var G__65599 = (function (){var obj65601 = ({"d":"m23.635 23.305h16.465a7.7 7.7 0 0 1 7.7 7.7v6.172"});
return obj65601;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65598,G__65599) : helix.core.jsx.call(null,G__65598,G__65599));
})(),(function (){var G__65602 = "path";
var G__65603 = (function (){var obj65605 = ({"d":"m39.507 39.837h-16.462a7.7 7.7 0 0 1-7.7-7.7v-6.168"});
return obj65605;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65602,G__65603) : helix.core.jsx.call(null,G__65602,G__65603));
})(),(function (){var G__65606 = "polyline";
var G__65607 = (function (){var obj65609 = ({"transform":"translate(-623.55, -54.854)","points":"651.78 83.747 646.19 78.159 651.78 72.571"});
return obj65609;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65606,G__65607) : helix.core.jsx.call(null,G__65606,G__65607));
})(),(function (){var G__65610 = "polyline";
var G__65611 = (function (){var obj65613 = ({"transform":"translate(-623.55, -54.854)","points":"658.47 89.103 664.06 94.691 658.47 100.28"});
return obj65613;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65610,G__65611) : helix.core.jsx.call(null,G__65610,G__65611));
})()]});
return obj65593;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65590,G__65591) : helix.core.jsxs.call(null,G__65590,G__65591));
});
if(goog.DEBUG === true){
var G__65614 = G__65586;
(G__65614.displayName = "app.shared.components.toolbar/btn-replace");

return G__65614;
} else {
return G__65586;
}
})();




app.shared.components.toolbar.btn_valve_close = (function (){var G__65616 = (function app$shared$components$toolbar$btn_valve_close_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__65620 = "path";
var G__65621 = (function (){var obj65623 = ({"fill":"#1cb0ea","d":"m46.32 2.7528a31.917 31.917 0 0 1 8.881 5.755c10.988 9.689 13.815 26.168 7.456 39.21a33.375 33.375 0 0 1-8.594 10.832 32.051 32.051 0 0 1-10.248 5.719 31.051 31.051 0 0 1-9.338 1.729h-1.821l-3.416-0.123a33.7 33.7 0 0 1-19.565-9.314c-12.9-12.525-12.9-34.545 0-47.07a33.715 33.715 0 0 1 17.287-8.967l5.694-0.521a33.169 33.169 0 0 1 13.664 2.75zm-23.913 2.159a30.044 30.044 0 0 0-17.606 17.749 29.847 29.847 0 0 0 17.379 38.355 29.688 29.688 0 0 0 9.109 1.959c5.728 0.066 10.05-0.529 15.258-3.134a29.589 29.589 0 0 0 9.11-7.116c11.7-13.579 9.146-34.638-5.921-44.641a28.185 28.185 0 0 0-7.971-3.774 31.722 31.722 0 0 0-11.615-1.173 33.224 33.224 0 0 0-7.743 1.772zm5.626 33.467-7.352-13.21-2.6-4.783a1.419 1.419 0 0 1 0.918-2 7.236 7.236 0 0 1 1.585 0h24.823a7.365 7.365 0 0 1 1.585 0 1.422 1.422 0 0 1 0.917 2l-2.6 4.783-7.351 13.21-4.168 7.289h19.585a5.264 5.264 0 0 1 1.779 0.168 0.887 0.887 0 0 1 0 1.649 3.833 3.833 0 0 1-1.779 0.233h-40.76a3.833 3.833 0 0 1-1.779-0.233 0.887 0.887 0 0 1 0-1.649 5.264 5.264 0 0 1 1.779-0.168h19.585z"});
return obj65623;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65620,G__65621) : helix.core.jsx.call(null,G__65620,G__65621));
});
if(goog.DEBUG === true){
var G__65624 = G__65616;
(G__65624.displayName = "app.shared.components.toolbar/btn-valve-close");

return G__65624;
} else {
return G__65616;
}
})();




app.shared.components.toolbar.btn_valve_open = (function (){var G__65626 = (function app$shared$components$toolbar$btn_valve_open_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__65630 = "path";
var G__65631 = (function (){var obj65633 = ({"fill":"#1cb0ea","d":"m46.319 2.7529a31.922 31.922 0 0 1 8.882 5.755c10.988 9.689 13.814 26.168 7.456 39.21a33.364 33.364 0 0 1-8.6 10.832 32.04 32.04 0 0 1-10.248 5.719 31.039 31.039 0 0 1-9.337 1.729h-1.822l-3.416-0.123a33.7 33.7 0 0 1-19.559-9.314c-12.9-12.525-12.9-34.545 0-47.07a33.715 33.715 0 0 1 17.287-8.967l5.693-0.521a33.165 33.165 0 0 1 13.664 2.749zm-23.912 2.159a30.044 30.044 0 0 0-17.606 17.749 29.847 29.847 0 0 0 17.379 38.355 29.688 29.688 0 0 0 9.109 1.959c5.727 0.066 10.05-0.529 15.258-3.134a29.589 29.589 0 0 0 9.11-7.116c11.7-13.579 9.145-34.638-5.922-44.641a28.166 28.166 0 0 0-7.97-3.774 31.724 31.724 0 0 0-11.615-1.173 33.224 33.224 0 0 0-7.743 1.772zm5.238 13.443h19.125c2.847 0.564-0.125 4.382-0.838 5.675l-8.854 15.944-2.674 4.774c-0.4 0.6-0.938 1.186-1.74 0.956-0.658-0.191-1.015-0.856-1.341-1.4l-2.152-3.872-8.617-15.491c-0.527-0.943-2.624-4.393-2.6-5.234 0.018-0.687 0.321-0.876 0.836-1.2 1.343-0.342 7.068-0.169 8.856-0.15zm-7.287 29.363h-4.331a34.256 34.256 0 0 1-5-0.137c-0.788-0.319-1.05-1.169-0.371-1.647a4 4 0 0 1 1.952-0.266h11.849c1.685 9e-3 1.958 0.35 2.277 2.05zm20.951-2.05h12.07a4 4 0 0 1 1.952 0.266c0.679 0.478 0.417 1.328-0.371 1.647a34.256 34.256 0 0 1-5 0.137h-10.7c0.275-1.469 0.494-2.023 2.049-2.05z"});
return obj65633;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65630,G__65631) : helix.core.jsx.call(null,G__65630,G__65631));
});
if(goog.DEBUG === true){
var G__65634 = G__65626;
(G__65634.displayName = "app.shared.components.toolbar/btn-valve-open");

return G__65634;
} else {
return G__65626;
}
})();




app.shared.components.toolbar.btn_divider = (function (){var G__65636 = (function app$shared$components$toolbar$btn_divider_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__65640 = helix.core.Fragment;
var G__65641 = ({"children": [(function (){var G__65642 = "line";
var G__65643 = (function (){var obj65645 = ({"x1":(23),"x2":(23),"y1":(9),"y2":(60),"fill":"none","stroke":"#0f4477","strokeWidth":(2),"strokeMiterlimit":(10)});
return obj65645;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65642,G__65643) : helix.core.jsx.call(null,G__65642,G__65643));
})(),(function (){var G__65646 = "line";
var G__65647 = (function (){var obj65649 = ({"x1":(33),"x2":(33),"y1":(9),"y2":(60),"fill":"none","stroke":"#0f4477","strokeWidth":(2),"strokeMiterlimit":(10)});
return obj65649;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65646,G__65647) : helix.core.jsx.call(null,G__65646,G__65647));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65640,G__65641) : helix.core.jsxs.call(null,G__65640,G__65641));
});
if(goog.DEBUG === true){
var G__65650 = G__65636;
(G__65650.displayName = "app.shared.components.toolbar/btn-divider");

return G__65650;
} else {
return G__65636;
}
})();




app.shared.components.toolbar.switch_panel = (function (){var G__65652 = (function app$shared$components$toolbar$switch_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__65656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65653,(0),null);
var map__65656__$1 = cljs.core.__destructure_map(map__65656);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65656__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65656__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65656__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__65657 = "g";
var G__65658 = (function (){var obj65660 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"children":[(function (){var G__65661 = "path";
var G__65662 = (function (){var obj65664 = ({"fill":"#eee","d":"m16.845 66.556h-4.707v-18.522a1.081 1.081 0 0 0-1.081-1.081h-3.841a1.081 1.081 0 0 0-1.081 1.081v18.522h-4.7a1.35 1.35 0 0 0-1.17 2.027l7.708 13.351a1.352 1.352 0 0 0 2.341 0l7.708-13.351a1.351 1.351 0 0 0-1.17-2.027z"});
return obj65664;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65661,G__65662) : helix.core.jsx.call(null,G__65661,G__65662));
})(),(function (){var G__65665 = "path";
var G__65666 = (function (){var obj65668 = ({"fill":"#eee","d":"m7.6 98.749v3.577a3.8 3.8 0 1 1-7.6 0.019v-3.6a3.8 3.8 0 1 1 7.6-0.019zm-5.971-0.122v3.807a2.172 2.172 0 0 0 4.344 0v-3.807a2.173 2.173 0 0 0-4.344 0zm15.429-2.809v9.411a0.853 0.853 0 0 1-0.845 0.844 0.9 0.9 0 0 1-0.8-0.491l-4.129-7.062v6.739a0.806 0.806 0 1 1-1.612 0v-9.41a0.837 0.837 0 0 1 0.829-0.844 0.91 0.91 0 0 1 0.813 0.491l4.13 7.046v-6.724a0.8 0.8 0 0 1 0.786-0.813h0.027a0.788 0.788 0 0 1 0.8 0.773c1e-3 0.013 1e-3 0.027 1e-3 0.04z"});
return obj65668;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65665,G__65666) : helix.core.jsx.call(null,G__65665,G__65666));
})(),children]});
return obj65660;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65657,G__65658) : helix.core.jsxs.call(null,G__65657,G__65658));
});
if(goog.DEBUG === true){
var G__65669 = G__65652;
(G__65669.displayName = "app.shared.components.toolbar/switch-panel");

return G__65669;
} else {
return G__65652;
}
})();




app.shared.components.toolbar.switch$ = (function (){var G__65671 = (function app$shared$components$toolbar$switch_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__65675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65672,(0),null);
var map__65675__$1 = cljs.core.__destructure_map(map__65675);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65675__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65675__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65675__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var legend = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65675__$1,new cljs.core.Keyword(null,"legend","legend",-1027192245));
var inactive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65675__$1,new cljs.core.Keyword(null,"inactive","inactive",-306247616));

var G__65676 = "g";
var G__65677 = (function (){var obj65679 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", 0)"].join(''),"className":helix.impl.props.normalize_class(["toolbar-btn-",(cljs.core.truth_(inactive)?"inactive":"active")].join('')),"onClick":(cljs.core.truth_(inactive)?null:on_change),"children":[(cljs.core.truth_(value)?(function (){var G__65680 = "g";
var G__65681 = (function (){var obj65683 = ({"transform":"translate(-10, 4)","children":[(function (){var G__65684 = "polygon";
var G__65685 = (function (){var obj65687 = ({"fill":"#eee","transform":"translate(-743.47 -9.882)","points":"785.49 90.299 784.65 81.185 801.52 81.185 800.68 90.299"});
return obj65687;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65684,G__65685) : helix.core.jsx.call(null,G__65684,G__65685));
})(),(function (){var G__65688 = "path";
var G__65689 = (function (){var obj65691 = ({"fill":"#c6c6c6","d":"m57.232 72.053-0.7 7.614h-13.826l-0.7-7.614h15.232m1.644-1.5h-18.52l0.979 10.614h16.562z"});
return obj65691;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65688,G__65689) : helix.core.jsx.call(null,G__65688,G__65689));
})(),(function (){var G__65692 = "polygon";
var G__65693 = (function (){var obj65695 = ({"fill":"url(#linGradToolbarToggleSwitchDown)","transform":"translate(-743.47 -9.882)","points":"802.34 80.435 801.14 67.373 785.03 67.373 783.82 80.435"});
return obj65695;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65692,G__65693) : helix.core.jsx.call(null,G__65692,G__65693));
})(),(function (){var G__65696 = "path";
var G__65697 = (function (){var obj65699 = ({"fill":"#031229","d":"m42.365 38.354h14.5a0.8 0.8 0 0 1 0.8 0.8v18.342h-16.112v-18.338a0.8 0.8 0 0 1 0.8-0.8z"});
return obj65699;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65696,G__65697) : helix.core.jsx.call(null,G__65696,G__65697));
})()]});
return obj65683;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65680,G__65681) : helix.core.jsxs.call(null,G__65680,G__65681));
})():(function (){var G__65700 = "g";
var G__65701 = (function (){var obj65703 = ({"transform":"translate(-52, 4)","children":[(function (){var G__65704 = "polygon";
var G__65705 = (function (){var obj65707 = ({"fill":"#eee","transform":"translate(-743.47 -9.882)","points":"826.61 59.492 827.46 50.379 842.65 50.379 843.49 59.492"});
return obj65707;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65704,G__65705) : helix.core.jsx.call(null,G__65704,G__65705));
})(),(function (){var G__65708 = "path";
var G__65709 = (function (){var obj65711 = ({"fill":"#c6c6c6","d":"m98.498 41.247 0.7 7.613h-15.231l0.7-7.613h13.827m1.368-1.5h-16.563l-0.979 10.613h18.52z"});
return obj65711;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65708,G__65709) : helix.core.jsx.call(null,G__65708,G__65709));
})(),(function (){var G__65712 = "polygon";
var G__65713 = (function (){var obj65715 = ({"fill":"url(#linGradToolbarToggleSwitchUp)","transform":"translate(-743.47 -9.882)","points":"825.79 60.242 827 73.304 843.11 73.304 844.31 60.242"});
return obj65715;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65712,G__65713) : helix.core.jsx.call(null,G__65712,G__65713));
})(),(function (){var G__65716 = "path";
var G__65717 = (function (){var obj65719 = ({"fill":"#031229","d":"m98.832 82.56h-14.5a0.8 0.8 0 0 1-0.8-0.8v-18.333h16.11v18.328a0.8 0.8 0 0 1-0.8 0.8z"});
return obj65719;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65716,G__65717) : helix.core.jsx.call(null,G__65716,G__65717));
})()]});
return obj65703;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65700,G__65701) : helix.core.jsxs.call(null,G__65700,G__65701));
})()),(function (){var G__65720 = "text";
var G__65721 = (function (){var obj65723 = ({"x":39.3,"y":(106),"fill":"#eee","fontFamily":"Arial","fontSize":(16),"fontWeight":(600),"textAnchor":"middle","children":legend});
return obj65723;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65720,G__65721) : helix.core.jsx.call(null,G__65720,G__65721));
})()]});
return obj65679;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65676,G__65677) : helix.core.jsxs.call(null,G__65676,G__65677));
});
if(goog.DEBUG === true){
var G__65724 = G__65671;
(G__65724.displayName = "app.shared.components.toolbar/switch");

return G__65724;
} else {
return G__65671;
}
})();




//# sourceMappingURL=app.shared.components.toolbar.js.map
