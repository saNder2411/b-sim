goog.provide('app.shared.boiler.animation_water_drops');

app.shared.boiler.animation_water_drops.water_drops = (function (){var G__91729 = (function app$shared$boiler$animation_water_drops$water_drops_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__91730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var show_animation = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
var hide_class = ((show_animation)?"":" hide");
var G__91733 = "foreignObject";
var G__91734 = (function (){var obj91736 = ({"x":(287),"y":189.73,"width":(69),"height":(61),"children":(function (){var G__91737 = "div";
var G__91738 = (function (){var obj91740 = ({"className":helix.impl.props.normalize_class(["water-drops",hide_class].join(''))});
return obj91740;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__91737,G__91738) : helix.core.jsx.call(null,G__91737,G__91738));
})()});
return obj91736;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__91733,G__91734) : helix.core.jsx.call(null,G__91733,G__91734));
});
if(goog.DEBUG === true){
var G__91741 = G__91729;
(G__91741.displayName = "app.shared.boiler.animation-water-drops/water-drops");

return G__91741;
} else {
return G__91729;
}
})();




//# sourceMappingURL=app.shared.boiler.animation_water_drops.js.map
