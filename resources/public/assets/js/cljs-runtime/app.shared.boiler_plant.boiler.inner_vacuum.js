goog.provide('app.shared.boiler_plant.boiler.inner_vacuum');

app.shared.boiler_plant.boiler.inner_vacuum.boiler_inner_vacuum = (function (){var G__28460 = (function app$shared$boiler_plant$boiler$inner_vacuum$boiler_inner_vacuum_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null));
var top_height = (((water_level > 42.9))?((185.86 * (water_level - 42.9)) / 57.1):(0));
var bottom_height = (((water_level < 6.8))?((22) - (((22) * (6.8 - (84))) / 6.8)):(22));
var bottom_rect_h = (((((22) - bottom_height) < (0)))?(0):((22) - bottom_height));
var G__28625 = helix.core.Fragment;
var G__28626 = ({"children": [(function (){var G__28629 = "rect";
var G__28630 = (function (){var obj28660 = ({"fill":"url(#boiler-vacuum-top)","x":413.71,"y":323.11,"width":668.49,"height":(185.86 - top_height)});
return obj28660;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28629,G__28630) : helix.core.jsx.call(null,G__28629,G__28630));
})(),(function (){var G__28679 = "rect";
var G__28680 = (function (){var obj28688 = ({"fill":"url(#boiler-vacuum-bottom)","transform":"scale(-1)","x":-1081.9,"y":(-646.37 + bottom_height),"width":667.17,"height":bottom_rect_h});
return obj28688;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28679,G__28680) : helix.core.jsx.call(null,G__28679,G__28680));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28625,G__28626) : helix.core.jsxs.call(null,G__28625,G__28626));
});
if(goog.DEBUG === true){
var G__28717 = G__28460;
(G__28717.displayName = "app.shared.boiler-plant.boiler.inner-vacuum/boiler-inner-vacuum");

return G__28717;
} else {
return G__28460;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.inner_vacuum.js.map
