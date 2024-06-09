goog.provide('app.shared.boiler_plant.boiler.animations.burner_flame');

app.shared.boiler_plant.boiler.animations.burner_flame.animation_burner_flame = (function (){var G__28454 = (function app$shared$boiler_plant$boiler$animations$burner_flame$animation_burner_flame_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var burner_status = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-status","burner-status",-2088741662)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(burner_status,"on")));
var hide_class = ((show_animation)?"":" hide");
var G__28553 = "foreignObject";
var G__28554 = (function (){var obj28574 = ({"x":414.71,"y":514.13,"width":(600),"height":(93),"children":(function (){var G__28589 = "div";
var G__28590 = (function (){var obj28606 = ({"className":helix.impl.props.normalize_class(["burner-flame",hide_class].join(''))});
return obj28606;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28589,G__28590) : helix.core.jsx.call(null,G__28589,G__28590));
})()});
return obj28574;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28553,G__28554) : helix.core.jsx.call(null,G__28553,G__28554));
});
if(goog.DEBUG === true){
var G__28705 = G__28454;
(G__28705.displayName = "app.shared.boiler-plant.boiler.animations.burner-flame/animation-burner-flame");

return G__28705;
} else {
return G__28454;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.animations.burner_flame.js.map
