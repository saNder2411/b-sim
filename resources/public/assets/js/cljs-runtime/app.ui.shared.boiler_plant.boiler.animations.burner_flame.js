goog.provide('app.ui.shared.boiler_plant.boiler.animations.burner_flame');

app.ui.shared.boiler_plant.boiler.animations.burner_flame.animation_burner_flame = (function (){var G__36945 = (function app$ui$shared$boiler_plant$boiler$animations$burner_flame$animation_burner_flame_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36948 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var burner_state = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(burner_state,"on")));
var hide_class = ((show_animation)?"":" hide");
var G__36967 = "foreignObject";
var G__36968 = (function (){var obj36974 = ({"x":414.71,"y":514.13,"width":(600),"height":(93),"children":(function (){var G__36983 = "div";
var G__36984 = (function (){var obj36990 = ({"className":helix.impl.props.normalize_class(["burner-flame",hide_class].join(''))});
return obj36990;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36983,G__36984) : helix.core.jsx.call(null,G__36983,G__36984));
})()});
return obj36974;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36967,G__36968) : helix.core.jsx.call(null,G__36967,G__36968));
});
if(goog.DEBUG === true){
var G__37015 = G__36945;
(G__37015.displayName = "app.ui.shared.boiler-plant.boiler.animations.burner-flame/animation-burner-flame");

return G__37015;
} else {
return G__36945;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.animations.burner_flame.js.map
