goog.provide('app.shared.components.hot_spot');

app.shared.components.hot_spot.hot_spot = (function (){var G__33161 = (function app$shared$components$hot_spot$hot_spot_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__33165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33162,(0),null);
var map__33165__$1 = cljs.core.__destructure_map(map__33165);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33165__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33165__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33165__$1,new cljs.core.Keyword(null,"id","id",-1388402092));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,id);
var G__33166 = "svg";
var G__33167 = (function (){var obj33169 = ({"style":(function (){var obj33171 = ({"width":helix.impl.props.__GT_js("2.348%"),"left":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"%"].join('')),"top":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%"].join('')),"borderRadius":helix.impl.props.__GT_js("50%")});
return obj33171;
})(),"viewBox":"25 25 45 45","children":[(function (){var G__33172 = app.shared.components.hot_spot_shadow.hot_spot_shadow;
var G__33173 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33172,G__33173) : helix.core.jsx.call(null,G__33172,G__33173));
})(),(function (){var G__33174 = "circle";
var G__33175 = (function (){var obj33177 = ({"fill":"url(#linGradHotspotSmall-1)","opacity":0.5,"cx":(47),"cy":(47),"r":(16)});
return obj33177;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33174,G__33175) : helix.core.jsx.call(null,G__33174,G__33175));
})(),(function (){var G__33178 = "circle";
var G__33179 = (function (){var obj33181 = ({"fill":"none","opacity":0.5,"stroke":"#192330","strokeWidth":(2),"strokeMiterlimit":(10),"cx":(47),"cy":(47),"r":(16)});
return obj33181;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33178,G__33179) : helix.core.jsx.call(null,G__33178,G__33179));
})(),((active)?(function (){var G__33182 = helix.core.Fragment;
var G__33183 = ({"children": [(function (){var G__33184 = "path";
var G__33185 = (function (){var obj33187 = ({"fill":"#1cb0ea","d":"m47.2 30.313a16.7 16.7 0 1 1-16.7 16.7 16.72 16.72 0 0 1 16.7-16.7m0-4.94a21.642 21.642 0 1 0 21.646 21.641 21.641 21.641 0 0 0-21.646-21.641z"});
return obj33187;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33184,G__33185) : helix.core.jsx.call(null,G__33184,G__33185));
})(),(function (){var G__33188 = "circle";
var G__33189 = (function (){var obj33191 = ({"fill":"#1cb0ea","cx":(47),"cy":(47),"r":9.6});
return obj33191;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33188,G__33189) : helix.core.jsx.call(null,G__33188,G__33189));
})(),(function (){var G__33192 = "path";
var G__33193 = (function (){var obj33195 = ({"fill":"none","d":"m50.923 51.228-7.1764-7.1764m7.1764-7.09e-4 -7.1764 7.1764","stroke":"#192330","strokeWidth":2.5,"strokeLinecap":"round","strokeLinejoin":"round"});
return obj33195;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33192,G__33193) : helix.core.jsx.call(null,G__33192,G__33193));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33182,G__33183) : helix.core.jsxs.call(null,G__33182,G__33183));
})():null),(function (){var G__33196 = "circle";
var G__33197 = (function (){var obj33199 = ({"className":"hotspot","cx":(47),"cy":(47),"r":21.6,"onClick":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),((active)?"none":id)], null));
})});
return obj33199;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33196,G__33197) : helix.core.jsx.call(null,G__33196,G__33197));
})()]});
return obj33169;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33166,G__33167) : helix.core.jsxs.call(null,G__33166,G__33167));
});
if(goog.DEBUG === true){
var G__33200 = G__33161;
(G__33200.displayName = "app.shared.components.hot-spot/hot-spot");

return G__33200;
} else {
return G__33161;
}
})();




//# sourceMappingURL=app.shared.components.hot_spot.js.map
