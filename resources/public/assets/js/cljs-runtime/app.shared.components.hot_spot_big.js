goog.provide('app.shared.components.hot_spot_big');

app.shared.components.hot_spot_big.hot_spot_big = (function (){var G__33318 = (function app$shared$components$hot_spot_big$hot_spot_big_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__33322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33319,(0),null);
var map__33322__$1 = cljs.core.__destructure_map(map__33322);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33322__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33322__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33322__$1,new cljs.core.Keyword(null,"id","id",-1388402092));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,id);
var G__33323 = "svg";
var G__33324 = (function (){var obj33326 = ({"style":(function (){var obj33328 = ({"width":helix.impl.props.__GT_js("6.3%"),"left":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"%"].join('')),"top":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%"].join('')),"borderRadius":helix.impl.props.__GT_js("50%")});
return obj33328;
})(),"viewBox":"0 0 121 121","children":[(function (){var G__33329 = app.shared.components.hot_spot_shadow_big.hot_spot_shadow_big;
var G__33330 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33329,G__33330) : helix.core.jsx.call(null,G__33329,G__33330));
})(),(function (){var G__33331 = "circle";
var G__33332 = (function (){var obj33334 = ({"fill":"url(#linGradHotspotBig-1)","opacity":0.5,"cx":60.7,"cy":60.3,"r":29.3});
return obj33334;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33331,G__33332) : helix.core.jsx.call(null,G__33331,G__33332));
})(),(function (){var G__33335 = "circle";
var G__33336 = (function (){var obj33338 = ({"fill":"none","opacity":0.5,"stroke":"#192330","strokeWidth":(2),"strokeMiterlimit":(10),"cx":60.7,"cy":60.3,"r":29.3});
return obj33338;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33335,G__33336) : helix.core.jsx.call(null,G__33335,G__33336));
})(),((active)?(function (){var G__33339 = helix.core.Fragment;
var G__33340 = ({"children": [(function (){var G__33341 = "path";
var G__33342 = (function (){var obj33344 = ({"fill":"#1cb0ea","d":"m60.706 29.959a30.292 30.292 0 1 1-30.292 30.292 30.326 30.326 0 0 1 30.292-30.292m0-4.941a35.233 35.233 0 1 0 35.232 35.233 35.232 35.232 0 0 0-35.232-35.233z"});
return obj33344;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33341,G__33342) : helix.core.jsx.call(null,G__33341,G__33342));
})(),(function (){var G__33345 = "circle";
var G__33346 = (function (){var obj33348 = ({"fill":"#1cb0ea","cx":60.7,"cy":60.3,"r":(16)});
return obj33348;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33345,G__33346) : helix.core.jsx.call(null,G__33345,G__33346));
})(),(function (){var G__33349 = "path";
var G__33350 = (function (){var obj33352 = ({"fill":"none","d":"M 66.546207,66.09191 54.864093,54.409797 m 11.682817,3e-6 -11.682111,11.682111","stroke":"#192330","strokeWidth":3.5,"strokeLinecap":"round","strokeLinejoin":"round"});
return obj33352;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33349,G__33350) : helix.core.jsx.call(null,G__33349,G__33350));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33339,G__33340) : helix.core.jsxs.call(null,G__33339,G__33340));
})():null),(function (){var G__33353 = "circle";
var G__33354 = (function (){var obj33356 = ({"className":"hotspot","cx":60.7,"cy":60.3,"r":(35),"onClick":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),((active)?"none":id)], null));
})});
return obj33356;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33353,G__33354) : helix.core.jsx.call(null,G__33353,G__33354));
})()]});
return obj33326;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33323,G__33324) : helix.core.jsxs.call(null,G__33323,G__33324));
});
if(goog.DEBUG === true){
var G__33357 = G__33318;
(G__33357.displayName = "app.shared.components.hot-spot-big/hot-spot-big");

return G__33357;
} else {
return G__33318;
}
})();




//# sourceMappingURL=app.shared.components.hot_spot_big.js.map
