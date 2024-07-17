goog.provide('app.ui.shared.boiler_plant.boiler.animations.heat_stream');

app.ui.shared.boiler_plant.boiler.animations.heat_stream.animation_heat_stream = (function (){var G__32952 = (function app$ui$shared$boiler_plant$boiler$animations$heat_stream$animation_heat_stream_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var burner_status = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(burner_status,"on")));
var hide_class = ((show_animation)?"":" hide");
var G__32966 = helix.core.Fragment;
var G__32967 = ({"children": [(function (){var G__32968 = "foreignObject";
var G__32969 = (function (){var obj32971 = ({"x":(394),"y":452.4,"width":(610),"height":(19),"children":(function (){var G__32973 = "div";
var G__32974 = (function (){var obj32976 = ({"className":helix.impl.props.normalize_class(["heat-stream-btm",hide_class].join(''))});
return obj32976;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32973,G__32974) : helix.core.jsx.call(null,G__32973,G__32974));
})()});
return obj32971;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32968,G__32969) : helix.core.jsx.call(null,G__32968,G__32969));
})(),(function (){var G__32977 = "foreignObject";
var G__32978 = (function (){var obj32980 = ({"x":(404),"y":416.4,"width":(670),"height":(19),"children":(function (){var G__32983 = "div";
var G__32984 = (function (){var obj32988 = ({"className":helix.impl.props.normalize_class(["heat-stream-top",hide_class].join(''))});
return obj32988;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32983,G__32984) : helix.core.jsx.call(null,G__32983,G__32984));
})()});
return obj32980;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32977,G__32978) : helix.core.jsx.call(null,G__32977,G__32978));
})(),(function (){var G__32989 = "foreignObject";
var G__32990 = (function (){var obj32993 = ({"x":(994),"y":448.4,"width":(67),"height":(130),"children":(function (){var G__32994 = "div";
var G__32995 = (function (){var obj32997 = ({"className":helix.impl.props.normalize_class(["heat-stream-turn-box-btm",hide_class].join(''))});
return obj32997;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32994,G__32995) : helix.core.jsx.call(null,G__32994,G__32995));
})()});
return obj32993;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32989,G__32990) : helix.core.jsx.call(null,G__32989,G__32990));
})(),(function (){var G__32998 = "foreignObject";
var G__32999 = (function (){var obj33001 = ({"x":(322),"y":(414),"width":(65),"height":(65),"children":(function (){var G__33002 = "div";
var G__33003 = (function (){var obj33005 = ({"className":helix.impl.props.normalize_class(["heat-stream-turn-box-top",hide_class].join(''))});
return obj33005;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33002,G__33003) : helix.core.jsx.call(null,G__33002,G__33003));
})()});
return obj33001;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32998,G__32999) : helix.core.jsx.call(null,G__32998,G__32999));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32966,G__32967) : helix.core.jsxs.call(null,G__32966,G__32967));
});
if(goog.DEBUG === true){
var G__33006 = G__32952;
(G__33006.displayName = "app.ui.shared.boiler-plant.boiler.animations.heat-stream/animation-heat-stream");

return G__33006;
} else {
return G__32952;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.animations.heat_stream.js.map
