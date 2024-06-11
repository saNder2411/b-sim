goog.provide('app.shared.sidebar.select_kit.btn');

app.shared.sidebar.select_kit.btn.select_kit_btn = (function (){var G__40241 = (function app$shared$sidebar$select_kit$btn$select_kit_btn_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__40242 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__40245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40242,(0),null);
var map__40245__$1 = cljs.core.__destructure_map(map__40245);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var sub_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword(null,"sub-label","sub-label",-1423649269));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var disable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword(null,"disable","disable",1717637504));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40245__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));

var G__40246 = "g";
var G__40247 = (function (){var obj40249 = ({"style":(function (){var obj40251 = ({"opacity":helix.impl.props.__GT_js((cljs.core.truth_(disable)?0.5:(1)))});
return obj40251;
})(),"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"children":[(function (){var G__40252 = "rect";
var G__40253 = (function (){var obj40255 = ({"x":0.41,"y":0.573,"rx":16.974,"width":217.23,"height":33.949,"style":(function (){var obj40257 = ({"filter":helix.impl.props.__GT_js("drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4))")});
return obj40257;
})(),"fill":(cljs.core.truth_(active)?"#1cb0ea":"#6f7684")});
return obj40255;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40252,G__40253) : helix.core.jsx.call(null,G__40252,G__40253));
})(),(function (){var G__40258 = "text";
var G__40259 = (function (){var obj40261 = ({"x":109.4,"y":(24),"fontSize":"18.667px","letterSpacing":"0.075em","textAnchor":"middle","fill":(cljs.core.truth_(active)?"#eee":"#aaa"),"children":[label,(function (){var G__40262 = "tspan";
var G__40263 = (function (){var obj40265 = ({"fontStyle":"italic","children":sub_label});
return obj40265;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40262,G__40263) : helix.core.jsx.call(null,G__40262,G__40263));
})()]});
return obj40261;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40258,G__40259) : helix.core.jsxs.call(null,G__40258,G__40259));
})(),(function (){var G__40266 = "rect";
var G__40267 = (function (){var obj40269 = ({"x":0.41,"y":0.573,"rx":16.974,"width":217.23,"height":33.949,"style":(function (){var obj40271 = ({"cursor":helix.impl.props.__GT_js((cljs.core.truth_(disable)?"default":"pointer")),"pointerEvents":helix.impl.props.__GT_js("visibleFill")});
return obj40271;
})(),"fill":"none","onClick":(cljs.core.truth_(disable)?null:on_click)});
return obj40269;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40266,G__40267) : helix.core.jsx.call(null,G__40266,G__40267));
})()]});
return obj40249;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40246,G__40247) : helix.core.jsxs.call(null,G__40246,G__40247));
});
if(goog.DEBUG === true){
var G__40272 = G__40241;
(G__40272.displayName = "app.shared.sidebar.select-kit.btn/select-kit-btn");

return G__40272;
} else {
return G__40241;
}
})();




//# sourceMappingURL=app.shared.sidebar.select_kit.btn.js.map
