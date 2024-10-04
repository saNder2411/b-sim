goog.provide('app.ui.shared.sidebar.user_menu.core');

app.ui.shared.sidebar.user_menu.core.user_menu = (function (){var G__35952 = (function app$ui$shared$sidebar$user_menu$core$user_menu_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__35955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__35958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35955,(0),null);
var map__35958__$1 = cljs.core.__destructure_map(map__35958);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35958__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35958__$1,new cljs.core.Keyword(null,"y","y",-1757859776));

var user_name = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","full-name","user/full-name",420262817)], null));
var G__35971 = "g";
var G__35972 = (function (){var obj35974 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"children":[(function (){var G__35976 = "g";
var G__35977 = (function (){var obj35992 = ({"transform":"translate(1, 3) scale(0.83)","fill":"#0d55a3","children":[(function (){var G__35994 = "path";
var G__35995 = (function (){var obj36003 = ({"style":(function (){var obj36007 = ({"pointerEvents":helix.impl.props.__GT_js("none")});
return obj36007;
})(),"d":"M 13 4 C 8.0414839 4 4 8.0414839 4 13 L 4 37 C 4 41.958516 8.0414839 46 13 46 L 37 46 C 41.958516 46 46 41.958516 46 37 L 46 13 C 46 8.0414839 41.958516 4 37 4 L 13 4 z M 13 6 L 37 6 C 40.877484 6 44 9.1225161 44 13 L 44 37 C 44 40.877484 40.877484 44 37 44 L 13 44 C 9.1225161 44 6 40.877484 6 37 L 6 13 C 6 9.1225161 9.1225161 6 13 6 z M 13 11 C 11.708334 11 10.676923 11.502378 10.001953 12.261719 C 9.3269838 13.02106 9 14.013889 9 15 C 9 15.986111 9.3269838 16.97894 10.001953 17.738281 C 10.676923 18.497622 11.708334 19 13 19 C 14.291666 19 15.323077 18.497622 15.998047 17.738281 C 16.673016 16.97894 17 15.986111 17 15 C 17 14.013889 16.673016 13.02106 15.998047 12.261719 C 15.323077 11.502378 14.291666 11 13 11 z M 13 12 C 14.041666 12 14.760256 12.372622 15.251953 12.925781 C 15.74365 13.47894 16 14.236111 16 15 C 16 15.763889 15.74365 16.52106 15.251953 17.074219 C 14.760256 17.627378 14.041666 18 13 18 C 11.958334 18 11.239744 17.627378 10.748047 17.074219 C 10.25635 16.52106 10 15.763889 10 15 C 10 14.236111 10.25635 13.47894 10.748047 12.925781 C 11.239744 12.372622 11.958334 12 13 12 z M 13 13 A 2 2 0 0 0 13 17 A 2 2 0 0 0 13 13 z M 21 14 A 1.0001 1.0001 0 1 0 21 16 L 39 16 A 1.0001 1.0001 0 1 0 39 14 L 21 14 z M 13 21 C 11.708334 21 10.676923 21.502378 10.001953 22.261719 C 9.3269838 23.02106 9 24.013889 9 25 C 9 25.986111 9.3269838 26.97894 10.001953 27.738281 C 10.676923 28.497622 11.708334 29 13 29 C 14.291666 29 15.323077 28.497622 15.998047 27.738281 C 16.673016 26.97894 17 25.986111 17 25 C 17 24.013889 16.673016 23.02106 15.998047 22.261719 C 15.323077 21.502378 14.291666 21 13 21 z M 13 22 C 14.041666 22 14.760256 22.372622 15.251953 22.925781 C 15.74365 23.47894 16 24.236111 16 25 C 16 25.763889 15.74365 26.52106 15.251953 27.074219 C 14.760256 27.627378 14.041666 28 13 28 C 11.958334 28 11.239744 27.627378 10.748047 27.074219 C 10.25635 26.52106 10 25.763889 10 25 C 10 24.236111 10.25635 23.47894 10.748047 22.925781 C 11.239744 22.372622 11.958334 22 13 22 z M 13 23 A 2 2 0 0 0 13 27 A 2 2 0 0 0 13 23 z M 21 24 A 1.0001 1.0001 0 1 0 21 26 L 39 26 A 1.0001 1.0001 0 1 0 39 24 L 21 24 z M 13 31 C 11.708334 31 10.676923 31.502378 10.001953 32.261719 C 9.3269838 33.02106 9 34.013889 9 35 C 9 35.986111 9.3269838 36.97894 10.001953 37.738281 C 10.676923 38.497622 11.708334 39 13 39 C 14.291666 39 15.323077 38.497622 15.998047 37.738281 C 16.673016 36.97894 17 35.986111 17 35 C 17 34.013889 16.673016 33.02106 15.998047 32.261719 C 15.323077 31.502378 14.291666 31 13 31 z M 13 32 C 14.041666 32 14.760256 32.372622 15.251953 32.925781 C 15.74365 33.47894 16 34.236111 16 35 C 16 35.763889 15.74365 36.52106 15.251953 37.074219 C 14.760256 37.627378 14.041666 38 13 38 C 11.958334 38 11.239744 37.627378 10.748047 37.074219 C 10.25635 36.52106 10 35.763889 10 35 C 10 34.236111 10.25635 33.47894 10.748047 32.925781 C 11.239744 32.372622 11.958334 32 13 32 z M 13 33 A 2 2 0 0 0 13 37 A 2 2 0 0 0 13 33 z M 21 34 A 1.0001 1.0001 0 1 0 21 36 L 39 36 A 1.0001 1.0001 0 1 0 39 34 L 21 34 z"});
return obj36003;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35994,G__35995) : helix.core.jsx.call(null,G__35994,G__35995));
})(),(function (){var G__36012 = app.ui.shared.components.touch_area.touch_area;
var G__36013 = (function (){var obj36018 = ({"x":(3),"y":(3),"w":(44),"h":(44),"on-click":(function (){
return console.log("show snapshot list modal");
})});
return obj36018;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36012,G__36013) : helix.core.jsx.call(null,G__36012,G__36013));
})()]});
return obj35992;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__35976,G__35977) : helix.core.jsxs.call(null,G__35976,G__35977));
})(),(function (){var G__36025 = "g";
var G__36026 = (function (){var obj36043 = ({"transform":"translate(41, 2)","fill":"none","children":[(function (){var G__36046 = "g";
var G__36047 = (function (){var obj36049 = ({"transform":"scale(1.83)","fill":"none","children":(function (){var G__36053 = "path";
var G__36054 = (function (){var obj36058 = ({"style":(function (){var obj36060 = ({"pointerEvents":helix.impl.props.__GT_js("none")});
return obj36060;
})(),"d":"M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z","stroke":"#0d55a3","strokeWidth":(1),"strokeLinecap":"round"});
return obj36058;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36053,G__36054) : helix.core.jsx.call(null,G__36053,G__36054));
})()});
return obj36049;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36046,G__36047) : helix.core.jsx.call(null,G__36046,G__36047));
})(),(function (){var G__36080 = app.ui.shared.components.touch_area.touch_area;
var G__36081 = (function (){var obj36088 = ({"x":(4),"y":(4),"w":(36),"h":(36),"on-click":(function (){
return console.log("show add snapshot modal");
})});
return obj36088;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36080,G__36081) : helix.core.jsx.call(null,G__36080,G__36081));
})()]});
return obj36043;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36025,G__36026) : helix.core.jsxs.call(null,G__36025,G__36026));
})(),(function (){var G__36107 = "text";
var G__36108 = (function (){var obj36114 = ({"x":(353),"y":(28),"fontSize":14.5,"fill":"#0d55a3","textAnchor":"end","style":(function (){var obj36118 = ({"cursor":helix.impl.props.__GT_js("pointer")});
return obj36118;
})(),"onClick":(function (){
return console.log("user log out");
}),"children":user_name});
return obj36114;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36107,G__36108) : helix.core.jsx.call(null,G__36107,G__36108));
})()]});
return obj35974;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__35971,G__35972) : helix.core.jsxs.call(null,G__35971,G__35972));
});
if(goog.DEBUG === true){
var G__36131 = G__35952;
(G__36131.displayName = "app.ui.shared.sidebar.user-menu.core/user-menu");

return G__36131;
} else {
return G__35952;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.user_menu.core.js.map
