goog.provide('app.shared.boiler.burner_flame');

app.shared.boiler.burner_flame.burner_flame = (function (){var G__84757 = (function app$shared$boiler$burner_flame$burner_flame_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__84758 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var burner_status = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-status","burner-status",-2088741662)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(burner_status,"on")));
var hide_class = ((show_animation)?"":" burner-flame-hide");
var G__84761 = "foreignObject";
var G__84762 = (function (){var obj84764 = ({"x":414.71,"y":514.13,"width":(600),"height":(93),"style":(function (){var obj84766 = ({"transition":helix.impl.props.__GT_js("all .2s")});
return obj84766;
})(),"children":(function (){var G__84767 = "div";
var G__84768 = (function (){var obj84770 = ({"className":helix.impl.props.normalize_class(["burner-flame",hide_class].join(''))});
return obj84770;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__84767,G__84768) : helix.core.jsx.call(null,G__84767,G__84768));
})()});
return obj84764;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__84761,G__84762) : helix.core.jsx.call(null,G__84761,G__84762));
});
if(goog.DEBUG === true){
var G__84771 = G__84757;
(G__84771.displayName = "app.shared.boiler.burner-flame/burner-flame");

return G__84771;
} else {
return G__84757;
}
})();




//# sourceMappingURL=app.shared.boiler.burner_flame.js.map
