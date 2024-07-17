goog.provide('app.ui.shared.sidebar.select_kit.btn');

app.ui.shared.sidebar.select_kit.btn.select_kit_btn = (function (){var G__28677 = (function app$ui$shared$sidebar$select_kit$btn$select_kit_btn_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__28686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28683,(0),null);
var map__28686__$1 = cljs.core.__destructure_map(map__28686);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var sub_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,new cljs.core.Keyword(null,"sub-label","sub-label",-1423649269));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var disable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,new cljs.core.Keyword(null,"disable","disable",1717637504));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));

var G__28702 = "g";
var G__28703 = (function (){var obj28712 = ({"style":(function (){var obj28724 = ({"opacity":helix.impl.props.__GT_js((cljs.core.truth_(disable)?0.5:(1)))});
return obj28724;
})(),"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"children":[(function (){var G__28752 = "rect";
var G__28753 = (function (){var obj28759 = ({"x":0.41,"y":0.573,"rx":16.974,"width":217.23,"height":33.949,"style":(function (){var obj28767 = ({"filter":helix.impl.props.__GT_js("drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4))")});
return obj28767;
})(),"fill":(cljs.core.truth_(active)?"#1cb0ea":"#6f7684")});
return obj28759;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28752,G__28753) : helix.core.jsx.call(null,G__28752,G__28753));
})(),(function (){var G__28782 = "text";
var G__28783 = (function (){var obj28785 = ({"x":109.4,"y":(24),"fontSize":"18.667px","letterSpacing":"0.075em","textAnchor":"middle","fill":(cljs.core.truth_(active)?"#eee":"#aaa"),"children":[label,(function (){var G__28801 = "tspan";
var G__28802 = (function (){var obj28810 = ({"fontStyle":"italic","children":sub_label});
return obj28810;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28801,G__28802) : helix.core.jsx.call(null,G__28801,G__28802));
})()]});
return obj28785;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28782,G__28783) : helix.core.jsxs.call(null,G__28782,G__28783));
})(),(function (){var G__28823 = "rect";
var G__28824 = (function (){var obj28828 = ({"x":0.41,"y":0.573,"rx":16.974,"width":217.23,"height":33.949,"style":(function (){var obj28831 = ({"cursor":helix.impl.props.__GT_js((cljs.core.truth_(disable)?"default":"pointer")),"pointerEvents":helix.impl.props.__GT_js("visibleFill")});
return obj28831;
})(),"fill":"none","onClick":(cljs.core.truth_(disable)?null:on_click)});
return obj28828;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28823,G__28824) : helix.core.jsx.call(null,G__28823,G__28824));
})()]});
return obj28712;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28702,G__28703) : helix.core.jsxs.call(null,G__28702,G__28703));
});
if(goog.DEBUG === true){
var G__28844 = G__28677;
(G__28844.displayName = "app.ui.shared.sidebar.select-kit.btn/select-kit-btn");

return G__28844;
} else {
return G__28677;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.select_kit.btn.js.map
