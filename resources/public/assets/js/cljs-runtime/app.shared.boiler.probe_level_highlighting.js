goog.provide('app.shared.boiler.probe_level_highlighting');

app.shared.boiler.probe_level_highlighting.probe_level_highlighting = (function (){var G__34802 = (function app$shared$boiler$probe_level_highlighting$probe_level_highlighting_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34803 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__34806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34803,(0),null);
var map__34806__$1 = cljs.core.__destructure_map(map__34806);
var hotspot_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34806__$1,new cljs.core.Keyword(null,"hotspot-id","hotspot-id",1928616945));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
var left_orientation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"level-low-probe-1")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"level-low-probe-2")));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,hotspot_id)){
if(left_orientation){
var G__34807 = helix.core.Fragment;
var G__34808 = ({"children": [(function (){var G__34809 = "image";
var G__34810 = (function (){var obj34812 = ({"style":(function (){var obj34814 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj34814;
})(),"href":"assets/img/probe-level-left-highlighting-bg.png","x":3.001,"y":0.396,"width":(71),"height":(111)});
return obj34812;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34809,G__34810) : helix.core.jsx.call(null,G__34809,G__34810));
})(),(function (){var G__34815 = "polygon";
var G__34816 = (function (){var obj34818 = ({"fill":"#061838","points":"49.833 13.344 49.833 18.885 61.243 18.885 61.243 45.747 59.857 45.747 59.857 90.44 58.716 93.7 58.716 98.471 46.197 98.471 46.197 93.7 45.056 90.44 45.056 51.615 15.638 51.615 15.638 13.344"});
return obj34818;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34815,G__34816) : helix.core.jsx.call(null,G__34815,G__34816));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34807,G__34808) : helix.core.jsxs.call(null,G__34807,G__34808));
} else {
var G__34819 = helix.core.Fragment;
var G__34820 = ({"children": [(function (){var G__34821 = "image";
var G__34822 = (function (){var obj34824 = ({"style":(function (){var obj34826 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj34826;
})(),"href":"assets/img/probe-level-right-highlighting-bg.png","x":3.382,"y":0.396,"width":(71),"height":(111)});
return obj34824;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34821,G__34822) : helix.core.jsx.call(null,G__34821,G__34822));
})(),(function (){var G__34827 = "polygon";
var G__34828 = (function (){var obj34830 = ({"fill":"#061838","points":"15.638 45.747 15.638 18.885 27.128 18.885 27.128 13.344 61.243 13.344 61.243 51.615 31.824 51.615 31.824 90.44 30.684 93.7 30.684 98.471 18.164 98.471 18.164 93.7 17.023 90.44 17.023 45.747"});
return obj34830;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34827,G__34828) : helix.core.jsx.call(null,G__34827,G__34828));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34819,G__34820) : helix.core.jsxs.call(null,G__34819,G__34820));
}
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__34831 = G__34802;
(G__34831.displayName = "app.shared.boiler.probe-level-highlighting/probe-level-highlighting");

return G__34831;
} else {
return G__34802;
}
})();




//# sourceMappingURL=app.shared.boiler.probe_level_highlighting.js.map
