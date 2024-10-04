goog.provide('app.ui.shared.boiler_plant.boiler.inner_vacuum');

app.ui.shared.boiler_plant.boiler.inner_vacuum.boiler_inner_vacuum = (function (){var G__39516 = (function app$ui$shared$boiler_plant$boiler$inner_vacuum$boiler_inner_vacuum_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var top_height = (((water_level > 42.9))?((185.86 * (water_level - 42.9)) / 57.1):(0));
var bottom_height = (((water_level < 6.8))?((22) - (((22) * (6.8 - (84))) / 6.8)):(22));
var bottom_rect_h = (((((22) - bottom_height) < (0)))?(0):((22) - bottom_height));
var G__39523 = helix.core.Fragment;
var G__39524 = ({"children": [(function (){var G__39525 = "rect";
var G__39526 = (function (){var obj39528 = ({"fill":"url(#boiler-vacuum-top)","x":413.71,"y":323.11,"width":668.49,"height":(185.86 - top_height)});
return obj39528;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39525,G__39526) : helix.core.jsx.call(null,G__39525,G__39526));
})(),(function (){var G__39529 = "rect";
var G__39530 = (function (){var obj39532 = ({"fill":"url(#boiler-vacuum-bottom)","transform":"scale(-1)","x":-1081.9,"y":(-646.37 + bottom_height),"width":667.17,"height":bottom_rect_h});
return obj39532;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39529,G__39530) : helix.core.jsx.call(null,G__39529,G__39530));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39523,G__39524) : helix.core.jsxs.call(null,G__39523,G__39524));
});
if(goog.DEBUG === true){
var G__39533 = G__39516;
(G__39533.displayName = "app.ui.shared.boiler-plant.boiler.inner-vacuum/boiler-inner-vacuum");

return G__39533;
} else {
return G__39516;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.inner_vacuum.js.map
