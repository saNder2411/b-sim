goog.provide('app.shared.boiler.animations.burner_flame');

app.shared.boiler.animations.burner_flame.burner_flame = (function (){var G__35874 = (function app$shared$boiler$animations$burner_flame$burner_flame_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__35880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var burner_status = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-status","burner-status",-2088741662)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(burner_status,"on")));
var hide_class = ((show_animation)?"":" hide");
var G__35908 = "foreignObject";
var G__35909 = (function (){var obj35918 = ({"x":414.71,"y":514.13,"width":(600),"height":(93),"children":(function (){var G__35930 = "div";
var G__35932 = (function (){var obj35940 = ({"className":helix.impl.props.normalize_class(["burner-flame",hide_class].join(''))});
return obj35940;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35930,G__35932) : helix.core.jsx.call(null,G__35930,G__35932));
})()});
return obj35918;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35908,G__35909) : helix.core.jsx.call(null,G__35908,G__35909));
});
if(goog.DEBUG === true){
var G__35963 = G__35874;
(G__35963.displayName = "app.shared.boiler.animations.burner-flame/burner-flame");

return G__35963;
} else {
return G__35874;
}
})();




//# sourceMappingURL=app.shared.boiler.animations.burner_flame.js.map
