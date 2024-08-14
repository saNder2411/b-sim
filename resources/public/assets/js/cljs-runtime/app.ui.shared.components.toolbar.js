goog.provide('app.ui.shared.components.toolbar');

app.ui.shared.components.toolbar.toolbar = (function (){var G__30699 = (function app$ui$shared$components$toolbar$toolbar_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30702 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30702,(0),null);
var map__30705__$1 = cljs.core.__destructure_map(map__30705);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30705__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-toolbar","show-toolbar",-2078087801)], null));
var G__30709 = "svg";
var G__30710 = (function (){var obj30714 = ({"width":"70.7%","viewBox":"0 0 1347.7 172.76","style":(function (){var obj30719 = ({"left":helix.impl.props.__GT_js("29.7%"),"top":helix.impl.props.__GT_js("83.8%")});
return obj30719;
})(),"className":helix.impl.props.normalize_class((cljs.core.truth_(show_toolbar)?"":"toolbar-hide")),"children":[(function (){var G__30720 = "path";
var G__30721 = (function (){var obj30723 = ({"fill":"#0c245b","stroke":"#2b87e5","strokeWidth":0.5,"d":"m87.5 36.544h1172.1a49.852 49.852 0 0 1 49.85 49.852 49.851 49.851 0 0 1-49.851 49.85h-1172.1a49.851 49.851 0 0 1-49.852-49.846 49.851 49.851 0 0 1 49.846-49.856z"});
return obj30723;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30720,G__30721) : helix.core.jsx.call(null,G__30720,G__30721));
})(),children]});
return obj30714;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30709,G__30710) : helix.core.jsxs.call(null,G__30709,G__30710));
});
if(goog.DEBUG === true){
var G__30726 = G__30699;
(G__30726.displayName = "app.ui.shared.components.toolbar/toolbar");

return G__30726;
} else {
return G__30699;
}
})();




app.ui.shared.components.toolbar.title = (function (){var G__30732 = (function app$ui$shared$components$toolbar$title_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30734 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30734,(0),null);
var map__30737__$1 = cljs.core.__destructure_map(map__30737);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30737__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30737__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30737__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30737__$1,new cljs.core.Keyword(null,"title","title",636505583));

var G__30745 = "text";
var G__30746 = (function (){var obj30750 = ({"x":x,"y":y,"fill":fill,"fontFamily":"Arial","fontSize":(22),"children":title});
return obj30750;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30745,G__30746) : helix.core.jsx.call(null,G__30745,G__30746));
});
if(goog.DEBUG === true){
var G__30755 = G__30732;
(G__30755.displayName = "app.ui.shared.components.toolbar/title");

return G__30755;
} else {
return G__30732;
}
})();




app.ui.shared.components.toolbar.btn_wrapper = (function (){var G__30763 = (function app$ui$shared$components$toolbar$btn_wrapper_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30768 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30768,(0),null);
var map__30771__$1 = cljs.core.__destructure_map(map__30771);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30771__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30771__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var inactive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30771__$1,new cljs.core.Keyword(null,"inactive","inactive",-306247616));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30771__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30771__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__30785 = "g";
var G__30786 = (function (){var obj30788 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"className":helix.impl.props.normalize_class(["toolbar-btn-",(cljs.core.truth_(inactive)?"inactive":"active")].join('')),"onClick":(cljs.core.truth_(inactive)?null:on_click),"children":children});
return obj30788;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30785,G__30786) : helix.core.jsx.call(null,G__30785,G__30786));
});
if(goog.DEBUG === true){
var G__30789 = G__30763;
(G__30789.displayName = "app.ui.shared.components.toolbar/btn-wrapper");

return G__30789;
} else {
return G__30763;
}
})();




app.ui.shared.components.toolbar.btn_info = (function (){var G__30792 = (function app$ui$shared$components$toolbar$btn_info_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__30797 = helix.core.Fragment;
var G__30798 = ({"children": [(function (){var G__30799 = "circle";
var G__30800 = (function (){var obj30808 = ({"cx":(33),"cy":(33),"r":(31),"fill":"none","stroke":"#14a2b8","strokeWidth":(3)});
return obj30808;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30799,G__30800) : helix.core.jsx.call(null,G__30799,G__30800));
})(),(function (){var G__30813 = "path";
var G__30814 = (function (){var obj30816 = ({"fill":"#14a2b8","d":"m33.26 20.131a1.8 1.8 0 0 1-1.347-0.568 1.95 1.95 0 1 1 3.242-1.644 1.8 1.8 0 0 1 0 0.275 1.9 1.9 0 0 1-0.548 1.369 1.8 1.8 0 0 1-1.347 0.568zm-1.431 6.021a1.432 1.432 0 0 1 2.863 0v19.074a1.432 1.432 0 0 1-2.863 0z"});
return obj30816;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30813,G__30814) : helix.core.jsx.call(null,G__30813,G__30814));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30797,G__30798) : helix.core.jsxs.call(null,G__30797,G__30798));
});
if(goog.DEBUG === true){
var G__30821 = G__30792;
(G__30821.displayName = "app.ui.shared.components.toolbar/btn-info");

return G__30821;
} else {
return G__30792;
}
})();




app.ui.shared.components.toolbar.btn_settings = (function (){var G__30843 = (function app$ui$shared$components$toolbar$btn_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__30851 = helix.core.Fragment;
var G__30852 = ({"children": [(function (){var G__30853 = "path";
var G__30854 = (function (){var obj30856 = ({"fill":"#eee","d":"m32.167 15.406 2.007 0.011 0.95 2.033 0.488 1.047 1.066 0.448 5.037 2.119 1.091-0.382 2.116-0.742 1.412 1.427-0.766 2.108-0.395 1.087 0.437 1.071 1.627 3.99 0.436 1.07 1.042 0.5 2.021 0.973-0.011 2.007-2.033 0.95-1.046 0.489-0.449 1.065-1.671 3.969-0.448 1.065 0.382 1.091 0.742 2.117-1.427 1.411-2.109-0.766-1.086-0.394-1.07 0.436-3.99 1.627-1.071 0.436-0.5 1.042-0.972 2.022-2.007-0.011-0.949-2.033-0.49-1.047-1.065-0.448-3.973-1.673-1.065-0.448-1.089 0.383-2.117 0.742-1.411-1.428 0.766-2.108 0.394-1.087-0.436-1.07-1.627-3.99-0.436-1.07-1.042-0.5-2.022-0.972 0.012-2.008 3.079-1.438 0.448-1.066 1.672-3.971 0.448-1.065-0.382-1.091-0.742-2.117 1.427-1.412 2.109 0.766 1.086 0.4 1.07-0.437 3.99-1.626 1.071-0.437 0.5-1.042 0.973-2.021m-1.882-3.011-1.793 3.732-3.99 1.627-3.893-1.41-4.126 4.081 1.37 3.908-1.672 3.972-3.752 1.753-0.032 5.8 3.732 1.794 1.629 3.992-1.414 3.892 4.08 4.127 3.909-1.37 3.971 1.671 1.753 3.752 5.8 0.032 1.794-3.732 3.99-1.627 3.893 1.414 4.126-4.081-1.37-3.908 1.668-3.97 3.751-1.753 0.033-5.8-3.732-1.794-1.627-3.99 1.414-3.893-4.082-4.126-3.907 1.37-3.973-1.671-1.753-3.752-5.8-0.033z"});
return obj30856;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30853,G__30854) : helix.core.jsx.call(null,G__30853,G__30854));
})(),(function (){var G__30858 = "circle";
var G__30859 = (function (){var obj30861 = ({"cx":33.1,"cy":33.1,"r":6.5,"fill":"none","stroke":"#eee","strokeWidth":(3)});
return obj30861;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30858,G__30859) : helix.core.jsx.call(null,G__30858,G__30859));
})(),(function (){var G__30862 = "circle";
var G__30863 = (function (){var obj30865 = ({"cx":(33),"cy":(33),"r":(31),"fill":"none","stroke":"#eee","strokeWidth":(3)});
return obj30865;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30862,G__30863) : helix.core.jsx.call(null,G__30862,G__30863));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30851,G__30852) : helix.core.jsxs.call(null,G__30851,G__30852));
});
if(goog.DEBUG === true){
var G__30866 = G__30843;
(G__30866.displayName = "app.ui.shared.components.toolbar/btn-settings");

return G__30866;
} else {
return G__30843;
}
})();




app.ui.shared.components.toolbar.btn_full_screen = (function (){var G__30868 = (function app$ui$shared$components$toolbar$btn_full_screen_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__30872 = "g";
var G__30873 = (function (){var obj30875 = ({"fill":"none","stroke":"#eee","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":(3),"children":[(function (){var G__30876 = "rect";
var G__30877 = (function (){var obj30879 = ({"x":1.5,"y":1.5,"width":63.2,"height":63.2,"rx":(9)});
return obj30879;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30876,G__30877) : helix.core.jsx.call(null,G__30876,G__30877));
})(),(function (){var G__30880 = "line";
var G__30881 = (function (){var obj30883 = ({"x1":28.57,"x2":13.8,"y1":28.43,"y2":13.657});
return obj30883;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30880,G__30881) : helix.core.jsx.call(null,G__30880,G__30881));
})(),(function (){var G__30884 = "line";
var G__30885 = (function (){var obj30888 = ({"x1":37.48,"x2":52.25,"y1":28.43,"y2":13.657});
return obj30888;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30884,G__30885) : helix.core.jsx.call(null,G__30884,G__30885));
})(),(function (){var G__30889 = "line";
var G__30890 = (function (){var obj30893 = ({"x1":52.25,"x2":37.48,"y1":52.108,"y2":37.334});
return obj30893;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30889,G__30890) : helix.core.jsx.call(null,G__30889,G__30890));
})(),(function (){var G__30897 = "line";
var G__30898 = (function (){var obj30900 = ({"x1":13.8,"x2":28.57,"y1":52.108,"y2":37.334});
return obj30900;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30897,G__30898) : helix.core.jsx.call(null,G__30897,G__30898));
})(),(function (){var G__30901 = "polyline";
var G__30902 = (function (){var obj30906 = ({"transform":"translate(-561.13, -47.479)","x1":28.57,"x2":13.8,"y1":28.43,"y2":13.657,"points":"584.53 61.136 574.93 61.136 574.93 70.739"});
return obj30906;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30901,G__30902) : helix.core.jsx.call(null,G__30901,G__30902));
})(),(function (){var G__30911 = "polyline";
var G__30912 = (function (){var obj30914 = ({"transform":"translate(-561.13, -47.479)","points":"613.38 70.739 613.38 61.136 603.78 61.136"});
return obj30914;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30911,G__30912) : helix.core.jsx.call(null,G__30911,G__30912));
})(),(function (){var G__30919 = "polyline";
var G__30920 = (function (){var obj30922 = ({"transform":"translate(-561.13, -47.479)","points":"603.78 99.587 613.38 99.587 613.38 89.983"});
return obj30922;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30919,G__30920) : helix.core.jsx.call(null,G__30919,G__30920));
})(),(function (){var G__30927 = "polyline";
var G__30928 = (function (){var obj30930 = ({"transform":"translate(-561.13, -47.479)","points":"574.93 89.983 574.93 99.587 584.53 99.587"});
return obj30930;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30927,G__30928) : helix.core.jsx.call(null,G__30927,G__30928));
})()]});
return obj30875;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30872,G__30873) : helix.core.jsxs.call(null,G__30872,G__30873));
});
if(goog.DEBUG === true){
var G__30935 = G__30868;
(G__30935.displayName = "app.ui.shared.components.toolbar/btn-:full-screen?");

return G__30935;
} else {
return G__30868;
}
})();




app.ui.shared.components.toolbar.btn_error = (function (){var G__30949 = (function app$ui$shared$components$toolbar$btn_error_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__30959 = "g";
var G__30960 = (function (){var obj30964 = ({"fill":"none","stroke":"#db1d43","strokeWidth":(3),"strokeMiterlimit":(10),"children":[(function (){var G__30965 = "circle";
var G__30968 = (function (){var obj30972 = ({"cx":(33),"cy":(33),"r":(31)});
return obj30972;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30965,G__30968) : helix.core.jsx.call(null,G__30965,G__30968));
})(),(function (){var G__30975 = "path";
var G__30976 = (function (){var obj30980 = ({"d":"m30.577 12.487-16.621 28.789a2.913 2.913 0 0 0 2.524 4.371h33.243a2.913 2.913 0 0 0 2.523-4.371l-16.621-28.789a2.914 2.914 0 0 0-5.047 0l-16.622 28.789a2.913 2.913 0 0 0 2.524 4.371h33.243a2.913 2.913 0 0 0 2.523-4.371l-16.621-28.789a2.914 2.914 0 0 0-5.047 0z"});
return obj30980;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30975,G__30976) : helix.core.jsx.call(null,G__30975,G__30976));
})(),(function (){var G__30983 = "path";
var G__30984 = (function (){var obj30988 = ({"fill":"#db1d43","stroke":"none","d":"m33.098 38.467a1.658 1.658 0 0 1 1.241 0.523 1.768 1.768 0 1 1-2.989 1.343v-0.083a1.753 1.753 0 0 1 0.5-1.26 1.657 1.657 0 0 1 1.248-0.523zm1.318-5.543a1.318 1.318 0 0 1-2.635 0v-13.193a1.318 1.318 0 0 1 2.635 0z"});
return obj30988;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30983,G__30984) : helix.core.jsx.call(null,G__30983,G__30984));
})()]});
return obj30964;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30959,G__30960) : helix.core.jsxs.call(null,G__30959,G__30960));
});
if(goog.DEBUG === true){
var G__30995 = G__30949;
(G__30995.displayName = "app.ui.shared.components.toolbar/btn-error");

return G__30995;
} else {
return G__30949;
}
})();




app.ui.shared.components.toolbar.btn_replace = (function (){var G__31011 = (function app$ui$shared$components$toolbar$btn_replace_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31014 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__31019 = "g";
var G__31020 = (function (){var obj31024 = ({"fill":"none","stroke":"#eee","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":(3),"children":[(function (){var G__31027 = "circle";
var G__31028 = (function (){var obj31030 = ({"cx":(33),"cy":(33),"r":(31),"strokeMiterlimit":(10)});
return obj31030;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31027,G__31028) : helix.core.jsx.call(null,G__31027,G__31028));
})(),(function (){var G__31031 = "path";
var G__31032 = (function (){var obj31035 = ({"d":"m23.635 23.305h16.465a7.7 7.7 0 0 1 7.7 7.7v6.172"});
return obj31035;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31031,G__31032) : helix.core.jsx.call(null,G__31031,G__31032));
})(),(function (){var G__31036 = "path";
var G__31037 = (function (){var obj31039 = ({"d":"m39.507 39.837h-16.462a7.7 7.7 0 0 1-7.7-7.7v-6.168"});
return obj31039;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31036,G__31037) : helix.core.jsx.call(null,G__31036,G__31037));
})(),(function (){var G__31040 = "polyline";
var G__31041 = (function (){var obj31043 = ({"transform":"translate(-623.55, -54.854)","points":"651.78 83.747 646.19 78.159 651.78 72.571"});
return obj31043;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31040,G__31041) : helix.core.jsx.call(null,G__31040,G__31041));
})(),(function (){var G__31044 = "polyline";
var G__31045 = (function (){var obj31047 = ({"transform":"translate(-623.55, -54.854)","points":"658.47 89.103 664.06 94.691 658.47 100.28"});
return obj31047;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31044,G__31045) : helix.core.jsx.call(null,G__31044,G__31045));
})()]});
return obj31024;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31019,G__31020) : helix.core.jsxs.call(null,G__31019,G__31020));
});
if(goog.DEBUG === true){
var G__31048 = G__31011;
(G__31048.displayName = "app.ui.shared.components.toolbar/btn-replace");

return G__31048;
} else {
return G__31011;
}
})();




app.ui.shared.components.toolbar.btn_valve_close = (function (){var G__31050 = (function app$ui$shared$components$toolbar$btn_valve_close_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31051 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__31054 = "path";
var G__31055 = (function (){var obj31057 = ({"fill":"#1cb0ea","d":"m46.32 2.7528a31.917 31.917 0 0 1 8.881 5.755c10.988 9.689 13.815 26.168 7.456 39.21a33.375 33.375 0 0 1-8.594 10.832 32.051 32.051 0 0 1-10.248 5.719 31.051 31.051 0 0 1-9.338 1.729h-1.821l-3.416-0.123a33.7 33.7 0 0 1-19.565-9.314c-12.9-12.525-12.9-34.545 0-47.07a33.715 33.715 0 0 1 17.287-8.967l5.694-0.521a33.169 33.169 0 0 1 13.664 2.75zm-23.913 2.159a30.044 30.044 0 0 0-17.606 17.749 29.847 29.847 0 0 0 17.379 38.355 29.688 29.688 0 0 0 9.109 1.959c5.728 0.066 10.05-0.529 15.258-3.134a29.589 29.589 0 0 0 9.11-7.116c11.7-13.579 9.146-34.638-5.921-44.641a28.185 28.185 0 0 0-7.971-3.774 31.722 31.722 0 0 0-11.615-1.173 33.224 33.224 0 0 0-7.743 1.772zm5.626 33.467-7.352-13.21-2.6-4.783a1.419 1.419 0 0 1 0.918-2 7.236 7.236 0 0 1 1.585 0h24.823a7.365 7.365 0 0 1 1.585 0 1.422 1.422 0 0 1 0.917 2l-2.6 4.783-7.351 13.21-4.168 7.289h19.585a5.264 5.264 0 0 1 1.779 0.168 0.887 0.887 0 0 1 0 1.649 3.833 3.833 0 0 1-1.779 0.233h-40.76a3.833 3.833 0 0 1-1.779-0.233 0.887 0.887 0 0 1 0-1.649 5.264 5.264 0 0 1 1.779-0.168h19.585z"});
return obj31057;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31054,G__31055) : helix.core.jsx.call(null,G__31054,G__31055));
});
if(goog.DEBUG === true){
var G__31058 = G__31050;
(G__31058.displayName = "app.ui.shared.components.toolbar/btn-valve-close");

return G__31058;
} else {
return G__31050;
}
})();




app.ui.shared.components.toolbar.btn_valve_open = (function (){var G__31060 = (function app$ui$shared$components$toolbar$btn_valve_open_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31061 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__31064 = "path";
var G__31065 = (function (){var obj31067 = ({"fill":"#1cb0ea","d":"m46.319 2.7529a31.922 31.922 0 0 1 8.882 5.755c10.988 9.689 13.814 26.168 7.456 39.21a33.364 33.364 0 0 1-8.6 10.832 32.04 32.04 0 0 1-10.248 5.719 31.039 31.039 0 0 1-9.337 1.729h-1.822l-3.416-0.123a33.7 33.7 0 0 1-19.559-9.314c-12.9-12.525-12.9-34.545 0-47.07a33.715 33.715 0 0 1 17.287-8.967l5.693-0.521a33.165 33.165 0 0 1 13.664 2.749zm-23.912 2.159a30.044 30.044 0 0 0-17.606 17.749 29.847 29.847 0 0 0 17.379 38.355 29.688 29.688 0 0 0 9.109 1.959c5.727 0.066 10.05-0.529 15.258-3.134a29.589 29.589 0 0 0 9.11-7.116c11.7-13.579 9.145-34.638-5.922-44.641a28.166 28.166 0 0 0-7.97-3.774 31.724 31.724 0 0 0-11.615-1.173 33.224 33.224 0 0 0-7.743 1.772zm5.238 13.443h19.125c2.847 0.564-0.125 4.382-0.838 5.675l-8.854 15.944-2.674 4.774c-0.4 0.6-0.938 1.186-1.74 0.956-0.658-0.191-1.015-0.856-1.341-1.4l-2.152-3.872-8.617-15.491c-0.527-0.943-2.624-4.393-2.6-5.234 0.018-0.687 0.321-0.876 0.836-1.2 1.343-0.342 7.068-0.169 8.856-0.15zm-7.287 29.363h-4.331a34.256 34.256 0 0 1-5-0.137c-0.788-0.319-1.05-1.169-0.371-1.647a4 4 0 0 1 1.952-0.266h11.849c1.685 9e-3 1.958 0.35 2.277 2.05zm20.951-2.05h12.07a4 4 0 0 1 1.952 0.266c0.679 0.478 0.417 1.328-0.371 1.647a34.256 34.256 0 0 1-5 0.137h-10.7c0.275-1.469 0.494-2.023 2.049-2.05z"});
return obj31067;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31064,G__31065) : helix.core.jsx.call(null,G__31064,G__31065));
});
if(goog.DEBUG === true){
var G__31068 = G__31060;
(G__31068.displayName = "app.ui.shared.components.toolbar/btn-valve-open");

return G__31068;
} else {
return G__31060;
}
})();




app.ui.shared.components.toolbar.btn_divider = (function (){var G__31070 = (function app$ui$shared$components$toolbar$btn_divider_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__31074 = helix.core.Fragment;
var G__31075 = ({"children": [(function (){var G__31076 = "line";
var G__31077 = (function (){var obj31079 = ({"x1":(23),"x2":(23),"y1":(9),"y2":(60),"fill":"none","stroke":"#0f4477","strokeWidth":(2),"strokeMiterlimit":(10)});
return obj31079;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31076,G__31077) : helix.core.jsx.call(null,G__31076,G__31077));
})(),(function (){var G__31080 = "line";
var G__31081 = (function (){var obj31083 = ({"x1":(33),"x2":(33),"y1":(9),"y2":(60),"fill":"none","stroke":"#0f4477","strokeWidth":(2),"strokeMiterlimit":(10)});
return obj31083;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31080,G__31081) : helix.core.jsx.call(null,G__31080,G__31081));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31074,G__31075) : helix.core.jsxs.call(null,G__31074,G__31075));
});
if(goog.DEBUG === true){
var G__31084 = G__31070;
(G__31084.displayName = "app.ui.shared.components.toolbar/btn-divider");

return G__31084;
} else {
return G__31070;
}
})();




app.ui.shared.components.toolbar.switch_panel = (function (){var G__31086 = (function app$ui$shared$components$toolbar$switch_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__31090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31087,(0),null);
var map__31090__$1 = cljs.core.__destructure_map(map__31090);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31090__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31090__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31090__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__31091 = "g";
var G__31092 = (function (){var obj31094 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"children":[(function (){var G__31095 = "path";
var G__31096 = (function (){var obj31098 = ({"fill":"#eee","d":"m16.845 66.556h-4.707v-18.522a1.081 1.081 0 0 0-1.081-1.081h-3.841a1.081 1.081 0 0 0-1.081 1.081v18.522h-4.7a1.35 1.35 0 0 0-1.17 2.027l7.708 13.351a1.352 1.352 0 0 0 2.341 0l7.708-13.351a1.351 1.351 0 0 0-1.17-2.027z"});
return obj31098;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31095,G__31096) : helix.core.jsx.call(null,G__31095,G__31096));
})(),(function (){var G__31099 = "path";
var G__31100 = (function (){var obj31102 = ({"fill":"#eee","d":"m7.6 98.749v3.577a3.8 3.8 0 1 1-7.6 0.019v-3.6a3.8 3.8 0 1 1 7.6-0.019zm-5.971-0.122v3.807a2.172 2.172 0 0 0 4.344 0v-3.807a2.173 2.173 0 0 0-4.344 0zm15.429-2.809v9.411a0.853 0.853 0 0 1-0.845 0.844 0.9 0.9 0 0 1-0.8-0.491l-4.129-7.062v6.739a0.806 0.806 0 1 1-1.612 0v-9.41a0.837 0.837 0 0 1 0.829-0.844 0.91 0.91 0 0 1 0.813 0.491l4.13 7.046v-6.724a0.8 0.8 0 0 1 0.786-0.813h0.027a0.788 0.788 0 0 1 0.8 0.773c1e-3 0.013 1e-3 0.027 1e-3 0.04z"});
return obj31102;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31099,G__31100) : helix.core.jsx.call(null,G__31099,G__31100));
})(),children]});
return obj31094;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31091,G__31092) : helix.core.jsxs.call(null,G__31091,G__31092));
});
if(goog.DEBUG === true){
var G__31103 = G__31086;
(G__31103.displayName = "app.ui.shared.components.toolbar/switch-panel");

return G__31103;
} else {
return G__31086;
}
})();




app.ui.shared.components.toolbar.switch$ = (function (){var G__31105 = (function app$ui$shared$components$toolbar$switch_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__31109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31106,(0),null);
var map__31109__$1 = cljs.core.__destructure_map(map__31109);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31109__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31109__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31109__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var legend = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31109__$1,new cljs.core.Keyword(null,"legend","legend",-1027192245));
var inactive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31109__$1,new cljs.core.Keyword(null,"inactive","inactive",-306247616));

var G__31110 = "g";
var G__31111 = (function (){var obj31113 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", 0)"].join(''),"className":helix.impl.props.normalize_class(["toolbar-btn-",(cljs.core.truth_(inactive)?"inactive":"active")].join('')),"onClick":(cljs.core.truth_(inactive)?null:on_change),"children":[(cljs.core.truth_(value)?(function (){var G__31114 = "g";
var G__31115 = (function (){var obj31117 = ({"transform":"translate(-10, 4)","children":[(function (){var G__31118 = "polygon";
var G__31119 = (function (){var obj31121 = ({"fill":"#eee","transform":"translate(-743.47 -9.882)","points":"785.49 90.299 784.65 81.185 801.52 81.185 800.68 90.299"});
return obj31121;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31118,G__31119) : helix.core.jsx.call(null,G__31118,G__31119));
})(),(function (){var G__31122 = "path";
var G__31123 = (function (){var obj31125 = ({"fill":"#c6c6c6","d":"m57.232 72.053-0.7 7.614h-13.826l-0.7-7.614h15.232m1.644-1.5h-18.52l0.979 10.614h16.562z"});
return obj31125;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31122,G__31123) : helix.core.jsx.call(null,G__31122,G__31123));
})(),(function (){var G__31126 = "polygon";
var G__31127 = (function (){var obj31129 = ({"fill":"url(#linGradToolbarToggleSwitchDown)","transform":"translate(-743.47 -9.882)","points":"802.34 80.435 801.14 67.373 785.03 67.373 783.82 80.435"});
return obj31129;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31126,G__31127) : helix.core.jsx.call(null,G__31126,G__31127));
})(),(function (){var G__31130 = "path";
var G__31131 = (function (){var obj31133 = ({"fill":"#031229","d":"m42.365 38.354h14.5a0.8 0.8 0 0 1 0.8 0.8v18.342h-16.112v-18.338a0.8 0.8 0 0 1 0.8-0.8z"});
return obj31133;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31130,G__31131) : helix.core.jsx.call(null,G__31130,G__31131));
})()]});
return obj31117;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31114,G__31115) : helix.core.jsxs.call(null,G__31114,G__31115));
})():(function (){var G__31134 = "g";
var G__31135 = (function (){var obj31137 = ({"transform":"translate(-52, 4)","children":[(function (){var G__31138 = "polygon";
var G__31139 = (function (){var obj31141 = ({"fill":"#eee","transform":"translate(-743.47 -9.882)","points":"826.61 59.492 827.46 50.379 842.65 50.379 843.49 59.492"});
return obj31141;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31138,G__31139) : helix.core.jsx.call(null,G__31138,G__31139));
})(),(function (){var G__31142 = "path";
var G__31143 = (function (){var obj31145 = ({"fill":"#c6c6c6","d":"m98.498 41.247 0.7 7.613h-15.231l0.7-7.613h13.827m1.368-1.5h-16.563l-0.979 10.613h18.52z"});
return obj31145;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31142,G__31143) : helix.core.jsx.call(null,G__31142,G__31143));
})(),(function (){var G__31146 = "polygon";
var G__31147 = (function (){var obj31149 = ({"fill":"url(#linGradToolbarToggleSwitchUp)","transform":"translate(-743.47 -9.882)","points":"825.79 60.242 827 73.304 843.11 73.304 844.31 60.242"});
return obj31149;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31146,G__31147) : helix.core.jsx.call(null,G__31146,G__31147));
})(),(function (){var G__31150 = "path";
var G__31151 = (function (){var obj31153 = ({"fill":"#031229","d":"m98.832 82.56h-14.5a0.8 0.8 0 0 1-0.8-0.8v-18.333h16.11v18.328a0.8 0.8 0 0 1-0.8 0.8z"});
return obj31153;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31150,G__31151) : helix.core.jsx.call(null,G__31150,G__31151));
})()]});
return obj31137;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31134,G__31135) : helix.core.jsxs.call(null,G__31134,G__31135));
})()),(function (){var G__31154 = "text";
var G__31155 = (function (){var obj31157 = ({"x":39.3,"y":(106),"fill":"#eee","fontFamily":"Arial","fontSize":(16),"fontWeight":(600),"textAnchor":"middle","children":legend});
return obj31157;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31154,G__31155) : helix.core.jsx.call(null,G__31154,G__31155));
})()]});
return obj31113;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31110,G__31111) : helix.core.jsxs.call(null,G__31110,G__31111));
});
if(goog.DEBUG === true){
var G__31158 = G__31105;
(G__31158.displayName = "app.ui.shared.components.toolbar/switch");

return G__31158;
} else {
return G__31105;
}
})();




//# sourceMappingURL=app.ui.shared.components.toolbar.js.map
