goog.provide('app.shared.components.hot_spot');

app.shared.components.hot_spot.hot_spot = (function (){var G__30527 = (function app$shared$components$hot_spot$hot_spot_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30528,(0),null);
var map__30531__$1 = cljs.core.__destructure_map(map__30531);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30531__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30531__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30531__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30531__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30531__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__30532 = "svg";
var G__30533 = (function (){var obj30535 = ({"style":(function (){var obj30537 = ({"width":helix.impl.props.__GT_js("2.348%"),"left":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"%"].join('')),"top":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%"].join('')),"borderRadius":helix.impl.props.__GT_js("50%")});
return obj30537;
})(),"viewBox":"25 25 45 45","children":[children,(function (){var G__30538 = "circle";
var G__30539 = (function (){var obj30541 = ({"fill":"url(#linGradHotspotSmall-1)","opacity":0.5,"cx":(47),"cy":(47),"r":(16)});
return obj30541;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30538,G__30539) : helix.core.jsx.call(null,G__30538,G__30539));
})(),(function (){var G__30542 = "circle";
var G__30543 = (function (){var obj30545 = ({"fill":"none","opacity":0.5,"stroke":"#192330","strokeWidth":(2),"strokeMiterlimit":(10),"cx":(47),"cy":(47),"r":(16)});
return obj30545;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30542,G__30543) : helix.core.jsx.call(null,G__30542,G__30543));
})(),(cljs.core.truth_(active)?(function (){var G__30546 = helix.core.Fragment;
var G__30547 = ({"children": [(function (){var G__30548 = "path";
var G__30549 = (function (){var obj30551 = ({"fill":"#1cb0ea","d":"m47.2 30.313a16.7 16.7 0 1 1-16.7 16.7 16.72 16.72 0 0 1 16.7-16.7m0-4.94a21.642 21.642 0 1 0 21.646 21.641 21.641 21.641 0 0 0-21.646-21.641z"});
return obj30551;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30548,G__30549) : helix.core.jsx.call(null,G__30548,G__30549));
})(),(function (){var G__30552 = "circle";
var G__30553 = (function (){var obj30555 = ({"fill":"#1cb0ea","cx":(47),"cy":(47),"r":9.6});
return obj30555;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30552,G__30553) : helix.core.jsx.call(null,G__30552,G__30553));
})(),(function (){var G__30556 = "path";
var G__30557 = (function (){var obj30559 = ({"fill":"none","d":"m50.923 51.228-7.1764-7.1764m7.1764-7.09e-4 -7.1764 7.1764","stroke":"#192330","strokeWidth":2.5,"strokeLinecap":"round","strokeLinejoin":"round"});
return obj30559;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30556,G__30557) : helix.core.jsx.call(null,G__30556,G__30557));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30546,G__30547) : helix.core.jsxs.call(null,G__30546,G__30547));
})():null),(function (){var G__30560 = "circle";
var G__30561 = (function (){var obj30563 = ({"className":"hotspot","cx":(47),"cy":(47),"r":21.6,"onClick":on_click});
return obj30563;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30560,G__30561) : helix.core.jsx.call(null,G__30560,G__30561));
})()]});
return obj30535;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30532,G__30533) : helix.core.jsxs.call(null,G__30532,G__30533));
});
if(goog.DEBUG === true){
var G__30564 = G__30527;
(G__30564.displayName = "app.shared.components.hot-spot/hot-spot");

return G__30564;
} else {
return G__30527;
}
})();




//# sourceMappingURL=app.shared.components.hot_spot.js.map
