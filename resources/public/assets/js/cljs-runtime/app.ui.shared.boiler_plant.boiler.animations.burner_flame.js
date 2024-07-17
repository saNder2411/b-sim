goog.provide('app.ui.shared.boiler_plant.boiler.animations.burner_flame');

app.ui.shared.boiler_plant.boiler.animations.burner_flame.animation_burner_flame = (function (){var G__32831 = (function app$ui$shared$boiler_plant$boiler$animations$burner_flame$animation_burner_flame_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var burner_status = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(burner_status,"on")));
var hide_class = ((show_animation)?"":" hide");
var G__32838 = "foreignObject";
var G__32839 = (function (){var obj32841 = ({"x":414.71,"y":514.13,"width":(600),"height":(93),"children":(function (){var G__32842 = "div";
var G__32843 = (function (){var obj32845 = ({"className":helix.impl.props.normalize_class(["burner-flame",hide_class].join(''))});
return obj32845;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32842,G__32843) : helix.core.jsx.call(null,G__32842,G__32843));
})()});
return obj32841;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32838,G__32839) : helix.core.jsx.call(null,G__32838,G__32839));
});
if(goog.DEBUG === true){
var G__32846 = G__32831;
(G__32846.displayName = "app.ui.shared.boiler-plant.boiler.animations.burner-flame/animation-burner-flame");

return G__32846;
} else {
return G__32831;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.animations.burner_flame.js.map
