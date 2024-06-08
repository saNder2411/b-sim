goog.provide('app.shared.components.hot_spot_big');

app.shared.components.hot_spot_big.hot_spot_big = (function (){var G__30787 = (function app$shared$components$hot_spot_big$hot_spot_big_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30794,(0),null);
var map__30797__$1 = cljs.core.__destructure_map(map__30797);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30797__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30797__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30797__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30797__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30797__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__30799 = "svg";
var G__30800 = (function (){var obj30802 = ({"style":(function (){var obj30804 = ({"width":helix.impl.props.__GT_js("6.3%"),"left":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"%"].join('')),"top":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%"].join('')),"borderRadius":helix.impl.props.__GT_js("50%")});
return obj30804;
})(),"viewBox":"0 0 121 121","children":[children,(function (){var G__30805 = "circle";
var G__30806 = (function (){var obj30808 = ({"fill":"url(#linGradHotspotBig-1)","opacity":0.5,"cx":60.7,"cy":60.3,"r":29.3});
return obj30808;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30805,G__30806) : helix.core.jsx.call(null,G__30805,G__30806));
})(),(function (){var G__30809 = "circle";
var G__30810 = (function (){var obj30812 = ({"fill":"none","opacity":0.5,"stroke":"#192330","strokeWidth":(2),"strokeMiterlimit":(10),"cx":60.7,"cy":60.3,"r":29.3});
return obj30812;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30809,G__30810) : helix.core.jsx.call(null,G__30809,G__30810));
})(),(cljs.core.truth_(active)?(function (){var G__30813 = helix.core.Fragment;
var G__30814 = ({"children": [(function (){var G__30815 = "path";
var G__30816 = (function (){var obj30818 = ({"fill":"#1cb0ea","d":"m60.706 29.959a30.292 30.292 0 1 1-30.292 30.292 30.326 30.326 0 0 1 30.292-30.292m0-4.941a35.233 35.233 0 1 0 35.232 35.233 35.232 35.232 0 0 0-35.232-35.233z"});
return obj30818;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30815,G__30816) : helix.core.jsx.call(null,G__30815,G__30816));
})(),(function (){var G__30819 = "circle";
var G__30820 = (function (){var obj30822 = ({"fill":"#1cb0ea","cx":60.7,"cy":60.3,"r":(16)});
return obj30822;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30819,G__30820) : helix.core.jsx.call(null,G__30819,G__30820));
})(),(function (){var G__30823 = "path";
var G__30824 = (function (){var obj30826 = ({"fill":"none","d":"M 66.546207,66.09191 54.864093,54.409797 m 11.682817,3e-6 -11.682111,11.682111","stroke":"#192330","strokeWidth":3.5,"strokeLinecap":"round","strokeLinejoin":"round"});
return obj30826;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30823,G__30824) : helix.core.jsx.call(null,G__30823,G__30824));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30813,G__30814) : helix.core.jsxs.call(null,G__30813,G__30814));
})():null),(function (){var G__30827 = "circle";
var G__30828 = (function (){var obj30830 = ({"className":"hotspot","cx":60.7,"cy":60.3,"r":(35),"onClick":on_click});
return obj30830;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30827,G__30828) : helix.core.jsx.call(null,G__30827,G__30828));
})()]});
return obj30802;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30799,G__30800) : helix.core.jsxs.call(null,G__30799,G__30800));
});
if(goog.DEBUG === true){
var G__30831 = G__30787;
(G__30831.displayName = "app.shared.components.hot-spot-big/hot-spot-big");

return G__30831;
} else {
return G__30787;
}
})();




//# sourceMappingURL=app.shared.components.hot_spot_big.js.map
