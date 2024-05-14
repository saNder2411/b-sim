goog.provide('app.shared.boiler.inner_vacuum');

app.shared.boiler.inner_vacuum.inner_vacuum = (function (){var G__35018 = (function app$shared$boiler$inner_vacuum$inner_vacuum_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__35019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null));
var top_height = (((water_level > 42.9))?((185.86 * (water_level - 42.9)) / 57.1):(0));
var bottom_height = (((water_level < 6.8))?((22) - (((22) * (6.8 - (84))) / 6.8)):(22));
var bottom_rect_h = (((((22) - bottom_height) < (0)))?(0):((22) - bottom_height));
var G__35022 = helix.core.Fragment;
var G__35023 = ({"children": [(function (){var G__35024 = "rect";
var G__35025 = (function (){var obj35027 = ({"fill":"url(#boiler-vacuum-top)","x":413.71,"y":323.11,"width":668.49,"height":(185.86 - top_height)});
return obj35027;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35024,G__35025) : helix.core.jsx.call(null,G__35024,G__35025));
})(),(function (){var G__35028 = "rect";
var G__35029 = (function (){var obj35031 = ({"fill":"url(#boiler-vacuum-bottom)","transform":"scale(-1)","x":-1081.9,"y":(-646.37 + bottom_height),"width":667.17,"height":bottom_rect_h});
return obj35031;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35028,G__35029) : helix.core.jsx.call(null,G__35028,G__35029));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__35022,G__35023) : helix.core.jsxs.call(null,G__35022,G__35023));
});
if(goog.DEBUG === true){
var G__35032 = G__35018;
(G__35032.displayName = "app.shared.boiler.inner-vacuum/inner-vacuum");

return G__35032;
} else {
return G__35018;
}
})();




//# sourceMappingURL=app.shared.boiler.inner_vacuum.js.map
