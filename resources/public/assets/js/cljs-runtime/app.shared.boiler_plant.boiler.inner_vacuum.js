goog.provide('app.shared.boiler_plant.boiler.inner_vacuum');

app.shared.boiler_plant.boiler.inner_vacuum.boiler_inner_vacuum = (function (){var G__55867 = (function app$shared$boiler_plant$boiler$inner_vacuum$boiler_inner_vacuum_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__55878 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var top_height = (((water_level > 42.9))?((185.86 * (water_level - 42.9)) / 57.1):(0));
var bottom_height = (((water_level < 6.8))?((22) - (((22) * (6.8 - (84))) / 6.8)):(22));
var bottom_rect_h = (((((22) - bottom_height) < (0)))?(0):((22) - bottom_height));
var G__55888 = helix.core.Fragment;
var G__55889 = ({"children": [(function (){var G__55896 = "rect";
var G__55897 = (function (){var obj55905 = ({"fill":"url(#boiler-vacuum-top)","x":413.71,"y":323.11,"width":668.49,"height":(185.86 - top_height)});
return obj55905;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55896,G__55897) : helix.core.jsx.call(null,G__55896,G__55897));
})(),(function (){var G__55913 = "rect";
var G__55914 = (function (){var obj55916 = ({"fill":"url(#boiler-vacuum-bottom)","transform":"scale(-1)","x":-1081.9,"y":(-646.37 + bottom_height),"width":667.17,"height":bottom_rect_h});
return obj55916;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55913,G__55914) : helix.core.jsx.call(null,G__55913,G__55914));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__55888,G__55889) : helix.core.jsxs.call(null,G__55888,G__55889));
});
if(goog.DEBUG === true){
var G__55921 = G__55867;
(G__55921.displayName = "app.shared.boiler-plant.boiler.inner-vacuum/boiler-inner-vacuum");

return G__55921;
} else {
return G__55867;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.inner_vacuum.js.map
