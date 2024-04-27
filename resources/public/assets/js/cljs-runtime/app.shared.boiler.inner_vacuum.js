goog.provide('app.shared.boiler.inner_vacuum');

app.shared.boiler.inner_vacuum.inner_vacuum = (function (){var G__65023 = (function app$shared$boiler$inner_vacuum$inner_vacuum_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__65025 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null));
var top_height = (((water_level > 42.9))?((185.86 * (water_level - 42.9)) / 57.1):(0));
var bottom_height = (((water_level < 6.8))?((22) - (((22) * (6.8 - (84))) / 6.8)):(22));
var G__65033 = helix.core.Fragment;
var G__65034 = ({"children": [(function (){var G__65037 = "rect";
var G__65038 = (function (){var obj65042 = ({"fill":"url(#boiler-vacuum-top)","x":413.71,"y":323.11,"width":668.49,"height":(185.86 - top_height)});
return obj65042;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65037,G__65038) : helix.core.jsx.call(null,G__65037,G__65038));
})(),(function (){var G__65045 = "rect";
var G__65046 = (function (){var obj65048 = ({"fill":"url(#boiler-vacuum-bottom)","transform":"scale(-1)","x":-1081.9,"y":(-646.37 + bottom_height),"width":667.17,"height":((22) - bottom_height)});
return obj65048;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65045,G__65046) : helix.core.jsx.call(null,G__65045,G__65046));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65033,G__65034) : helix.core.jsxs.call(null,G__65033,G__65034));
});
if(goog.DEBUG === true){
var G__65053 = G__65023;
(G__65053.displayName = "app.shared.boiler.inner-vacuum/inner-vacuum");

return G__65053;
} else {
return G__65023;
}
})();




//# sourceMappingURL=app.shared.boiler.inner_vacuum.js.map
