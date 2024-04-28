goog.provide('app.shared.boiler.animation_burner_flame');

app.shared.boiler.animation_burner_flame.burner_flame = (function (){var G__85331 = (function app$shared$boiler$animation_burner_flame$burner_flame_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__85332 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var burner_status = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-status","burner-status",-2088741662)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(burner_status,"on")));
var hide_class = ((show_animation)?"":" hide");
var G__85335 = "foreignObject";
var G__85336 = (function (){var obj85338 = ({"x":414.71,"y":514.13,"width":(600),"height":(93),"children":(function (){var G__85339 = "div";
var G__85340 = (function (){var obj85342 = ({"className":helix.impl.props.normalize_class(["burner-flame",hide_class].join(''))});
return obj85342;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85339,G__85340) : helix.core.jsx.call(null,G__85339,G__85340));
})()});
return obj85338;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85335,G__85336) : helix.core.jsx.call(null,G__85335,G__85336));
});
if(goog.DEBUG === true){
var G__85343 = G__85331;
(G__85343.displayName = "app.shared.boiler.animation-burner-flame/burner-flame");

return G__85343;
} else {
return G__85331;
}
})();




//# sourceMappingURL=app.shared.boiler.animation_burner_flame.js.map
