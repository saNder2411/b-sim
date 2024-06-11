goog.provide('app.shared.components.toolbar');

app.shared.components.toolbar.toolbar = (function (){var G__33117 = (function app$shared$components$toolbar$toolbar_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__33121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33118,(0),null);
var map__33121__$1 = cljs.core.__destructure_map(map__33121);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33121__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-toolbar","show-toolbar",-2078087801)], null));
var G__33122 = "svg";
var G__33123 = (function (){var obj33125 = ({"width":"70.7%","viewBox":"0 0 1347.7 172.76","style":(function (){var obj33127 = ({"left":helix.impl.props.__GT_js("29.7%"),"top":helix.impl.props.__GT_js("83.8%")});
return obj33127;
})(),"className":helix.impl.props.normalize_class((cljs.core.truth_(show_toolbar)?"":"toolbar-hide")),"children":[(function (){var G__33128 = "path";
var G__33129 = (function (){var obj33131 = ({"fill":"#0c245b","stroke":"#2b87e5","strokeWidth":0.5,"d":"m87.5 36.544h1172.1a49.852 49.852 0 0 1 49.85 49.852 49.851 49.851 0 0 1-49.851 49.85h-1172.1a49.851 49.851 0 0 1-49.852-49.846 49.851 49.851 0 0 1 49.846-49.856z"});
return obj33131;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33128,G__33129) : helix.core.jsx.call(null,G__33128,G__33129));
})(),children]});
return obj33125;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33122,G__33123) : helix.core.jsxs.call(null,G__33122,G__33123));
});
if(goog.DEBUG === true){
var G__33132 = G__33117;
(G__33132.displayName = "app.shared.components.toolbar/toolbar");

return G__33132;
} else {
return G__33117;
}
})();




//# sourceMappingURL=app.shared.components.toolbar.js.map
