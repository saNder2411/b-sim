goog.provide('app.shared.select_kit_btn');

app.shared.select_kit_btn.select_kit_btn = (function (){var G__39486 = (function app$shared$select_kit_btn$select_kit_btn_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39487 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__39490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39487,(0),null);
var map__39490__$1 = cljs.core.__destructure_map(map__39490);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39490__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39490__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39490__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var sub_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39490__$1,new cljs.core.Keyword(null,"sub-label","sub-label",-1423649269));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39490__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var disable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39490__$1,new cljs.core.Keyword(null,"disable","disable",1717637504));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39490__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));

var G__39491 = "g";
var G__39492 = (function (){var obj39494 = ({"style":(function (){var obj39496 = ({"opacity":helix.impl.props.__GT_js((cljs.core.truth_(disable)?0.5:(1)))});
return obj39496;
})(),"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"children":[(function (){var G__39497 = "rect";
var G__39498 = (function (){var obj39500 = ({"x":0.41,"y":0.573,"rx":16.974,"width":217.23,"height":33.949,"style":(function (){var obj39502 = ({"filter":helix.impl.props.__GT_js("drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4))")});
return obj39502;
})(),"fill":(cljs.core.truth_(active)?"#1cb0ea":"#6f7684")});
return obj39500;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39497,G__39498) : helix.core.jsx.call(null,G__39497,G__39498));
})(),(function (){var G__39503 = "text";
var G__39504 = (function (){var obj39506 = ({"x":109.4,"y":(24),"fontSize":"18.667px","letterSpacing":"0.075em","textAnchor":"middle","fill":(cljs.core.truth_(active)?"#eee":"#aaa"),"children":[label,(function (){var G__39507 = "tspan";
var G__39508 = (function (){var obj39510 = ({"fontStyle":"italic","children":sub_label});
return obj39510;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39507,G__39508) : helix.core.jsx.call(null,G__39507,G__39508));
})()]});
return obj39506;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39503,G__39504) : helix.core.jsxs.call(null,G__39503,G__39504));
})(),(function (){var G__39511 = "rect";
var G__39512 = (function (){var obj39514 = ({"x":0.41,"y":0.573,"rx":16.974,"width":217.23,"height":33.949,"style":(function (){var obj39516 = ({"cursor":helix.impl.props.__GT_js((cljs.core.truth_(disable)?"default":"pointer")),"pointerEvents":helix.impl.props.__GT_js("visibleFill")});
return obj39516;
})(),"fill":"none","onClick":(cljs.core.truth_(disable)?null:on_click)});
return obj39514;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39511,G__39512) : helix.core.jsx.call(null,G__39511,G__39512));
})()]});
return obj39494;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39491,G__39492) : helix.core.jsxs.call(null,G__39491,G__39492));
});
if(goog.DEBUG === true){
var G__39517 = G__39486;
(G__39517.displayName = "app.shared.select-kit-btn/select-kit-btn");

return G__39517;
} else {
return G__39486;
}
})();




//# sourceMappingURL=app.shared.select_kit_btn.js.map
