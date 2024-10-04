goog.provide('app.ui.shared.boiler_plant.boiler.animations.heat_stream');

app.ui.shared.boiler_plant.boiler.animations.heat_stream.animation_heat_stream = (function (){var G__36947 = (function app$ui$shared$boiler_plant$boiler$animations$heat_stream$animation_heat_stream_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36954 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var burner_state = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(burner_state,"on")));
var hide_class = ((show_animation)?"":" hide");
var G__36969 = helix.core.Fragment;
var G__36970 = ({"children": [(function (){var G__36975 = "foreignObject";
var G__36976 = (function (){var obj36978 = ({"x":(394),"y":452.4,"width":(610),"height":(19),"children":(function (){var G__36985 = "div";
var G__36986 = (function (){var obj36988 = ({"className":helix.impl.props.normalize_class(["heat-stream-btm",hide_class].join(''))});
return obj36988;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36985,G__36986) : helix.core.jsx.call(null,G__36985,G__36986));
})()});
return obj36978;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36975,G__36976) : helix.core.jsx.call(null,G__36975,G__36976));
})(),(function (){var G__37005 = "foreignObject";
var G__37006 = (function (){var obj37008 = ({"x":(404),"y":416.4,"width":(670),"height":(19),"children":(function (){var G__37013 = "div";
var G__37014 = (function (){var obj37018 = ({"className":helix.impl.props.normalize_class(["heat-stream-top",hide_class].join(''))});
return obj37018;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37013,G__37014) : helix.core.jsx.call(null,G__37013,G__37014));
})()});
return obj37008;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37005,G__37006) : helix.core.jsx.call(null,G__37005,G__37006));
})(),(function (){var G__37025 = "foreignObject";
var G__37026 = (function (){var obj37028 = ({"x":(994),"y":448.4,"width":(67),"height":(130),"children":(function (){var G__37031 = "div";
var G__37032 = (function (){var obj37036 = ({"className":helix.impl.props.normalize_class(["heat-stream-turn-box-btm",hide_class].join(''))});
return obj37036;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37031,G__37032) : helix.core.jsx.call(null,G__37031,G__37032));
})()});
return obj37028;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37025,G__37026) : helix.core.jsx.call(null,G__37025,G__37026));
})(),(function (){var G__37043 = "foreignObject";
var G__37044 = (function (){var obj37046 = ({"x":(322),"y":(414),"width":(65),"height":(65),"children":(function (){var G__37048 = "div";
var G__37049 = (function (){var obj37053 = ({"className":helix.impl.props.normalize_class(["heat-stream-turn-box-top",hide_class].join(''))});
return obj37053;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37048,G__37049) : helix.core.jsx.call(null,G__37048,G__37049));
})()});
return obj37046;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37043,G__37044) : helix.core.jsx.call(null,G__37043,G__37044));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36969,G__36970) : helix.core.jsxs.call(null,G__36969,G__36970));
});
if(goog.DEBUG === true){
var G__37065 = G__36947;
(G__37065.displayName = "app.ui.shared.boiler-plant.boiler.animations.heat-stream/animation-heat-stream");

return G__37065;
} else {
return G__36947;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.animations.heat_stream.js.map
