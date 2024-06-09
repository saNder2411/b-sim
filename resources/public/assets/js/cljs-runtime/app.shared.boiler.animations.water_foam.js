goog.provide('app.shared.boiler.animations.water_foam');

app.shared.boiler.animations.water_foam.water_foam = (function (){var G__35875 = (function app$shared$boiler$animations$water_foam$water_foam_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__35884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var show_foam = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-water-foam","show-water-foam",1225501325)], null));
var show_animation = (function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
if(and__5043__auto__){
return show_foam;
} else {
return and__5043__auto__;
}
})();
var hide_class = (cljs.core.truth_(show_animation)?"":" hide");
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null));
var y = ((323.11 - (15)) + (((100) - water_level) * (323.7 / (100))));
var G__35929 = "foreignObject";
var G__35933 = (function (){var obj35954 = ({"x":410.5,"y":y,"width":(675),"height":(15),"children":(function (){var G__35958 = "div";
var G__35960 = (function (){var obj35970 = ({"className":helix.impl.props.normalize_class(["water-foam",hide_class].join(''))});
return obj35970;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35958,G__35960) : helix.core.jsx.call(null,G__35958,G__35960));
})()});
return obj35954;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35929,G__35933) : helix.core.jsx.call(null,G__35929,G__35933));
});
if(goog.DEBUG === true){
var G__35985 = G__35875;
(G__35985.displayName = "app.shared.boiler.animations.water-foam/water-foam");

return G__35985;
} else {
return G__35875;
}
})();




//# sourceMappingURL=app.shared.boiler.animations.water_foam.js.map
