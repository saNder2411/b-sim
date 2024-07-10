goog.provide('app.shared.boiler_plant.boiler.animations.burner_flame');

app.shared.boiler_plant.boiler.animations.burner_flame.animation_burner_flame = (function (){var G__54255 = (function app$shared$boiler_plant$boiler$animations$burner_flame$animation_burner_flame_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__54258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var burner_status = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(burner_status,"on")));
var hide_class = ((show_animation)?"":" hide");
var G__54285 = "foreignObject";
var G__54286 = (function (){var obj54298 = ({"x":414.71,"y":514.13,"width":(600),"height":(93),"children":(function (){var G__54313 = "div";
var G__54314 = (function (){var obj54325 = ({"className":helix.impl.props.normalize_class(["burner-flame",hide_class].join(''))});
return obj54325;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54313,G__54314) : helix.core.jsx.call(null,G__54313,G__54314));
})()});
return obj54298;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54285,G__54286) : helix.core.jsx.call(null,G__54285,G__54286));
});
if(goog.DEBUG === true){
var G__54341 = G__54255;
(G__54341.displayName = "app.shared.boiler-plant.boiler.animations.burner-flame/animation-burner-flame");

return G__54341;
} else {
return G__54255;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.animations.burner_flame.js.map
