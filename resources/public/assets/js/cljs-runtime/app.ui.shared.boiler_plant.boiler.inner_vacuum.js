goog.provide('app.ui.shared.boiler_plant.boiler.inner_vacuum');

app.ui.shared.boiler_plant.boiler.inner_vacuum.boiler_inner_vacuum = (function (){var G__32857 = (function app$ui$shared$boiler_plant$boiler$inner_vacuum$boiler_inner_vacuum_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var top_height = (((water_level > 42.9))?((185.86 * (water_level - 42.9)) / 57.1):(0));
var bottom_height = (((water_level < 6.8))?((22) - (((22) * (6.8 - (84))) / 6.8)):(22));
var bottom_rect_h = (((((22) - bottom_height) < (0)))?(0):((22) - bottom_height));
var G__32871 = helix.core.Fragment;
var G__32872 = ({"children": [(function (){var G__32873 = "rect";
var G__32874 = (function (){var obj32878 = ({"fill":"url(#boiler-vacuum-top)","x":413.71,"y":323.11,"width":668.49,"height":(185.86 - top_height)});
return obj32878;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32873,G__32874) : helix.core.jsx.call(null,G__32873,G__32874));
})(),(function (){var G__32881 = "rect";
var G__32882 = (function (){var obj32886 = ({"fill":"url(#boiler-vacuum-bottom)","transform":"scale(-1)","x":-1081.9,"y":(-646.37 + bottom_height),"width":667.17,"height":bottom_rect_h});
return obj32886;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32881,G__32882) : helix.core.jsx.call(null,G__32881,G__32882));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32871,G__32872) : helix.core.jsxs.call(null,G__32871,G__32872));
});
if(goog.DEBUG === true){
var G__32888 = G__32857;
(G__32888.displayName = "app.ui.shared.boiler-plant.boiler.inner-vacuum/boiler-inner-vacuum");

return G__32888;
} else {
return G__32857;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.inner_vacuum.js.map
