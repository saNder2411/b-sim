goog.provide('app.connect.burner_limiter');

app.connect.burner_limiter.burner_limiter = (function (){var G__28442 = (function app$connect$burner_limiter$burner_limiter_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28443 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var burner_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-limiter-id","burner-limiter-id",-1127840956)], null));
var burner_limiter_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-limiter-:full-screen?","burner-limiter-:full-screen?",-868941454)], null));
var G__28449 = helix.core.Fragment;
var G__28451 = ({"children": [(function (){var G__28453 = burner_limiter_id;
switch (G__28453) {
case "none":
var G__28455 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__28458 = (function (){var obj28461 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj28461;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28455,G__28458) : helix.core.jsx.call(null,G__28455,G__28458));

break;
case "URS 60":
var G__28463 = app.connect.URS_60.URS_60.URS_60;
var G__28465 = (function (){var obj28469 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj28469;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28463,G__28465) : helix.core.jsx.call(null,G__28463,G__28465));

break;
default:
return null;

}
})(),(function (){var G__28472 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__28473 = (function (){var obj28476 = ({"show":burner_limiter_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-limiter-:full-screen?","change-burner-limiter-:full-screen?",2051559587),false], null));
}),"children":(function (){var G__28479 = burner_limiter_id;
switch (G__28479) {
case "URS 60":
var G__28483 = app.connect.URS_60.URS_60.URS_60;
var G__28484 = (function (){var obj28488 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj28488;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28483,G__28484) : helix.core.jsx.call(null,G__28483,G__28484));

break;
default:
return null;

}
})()});
return obj28476;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28472,G__28473) : helix.core.jsx.call(null,G__28472,G__28473));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28449,G__28451) : helix.core.jsxs.call(null,G__28449,G__28451));
});
if(goog.DEBUG === true){
var G__28489 = G__28442;
(G__28489.displayName = "app.connect.burner-limiter/burner-limiter");

return G__28489;
} else {
return G__28442;
}
})();




//# sourceMappingURL=app.connect.burner_limiter.js.map
