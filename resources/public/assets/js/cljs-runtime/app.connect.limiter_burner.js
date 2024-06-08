goog.provide('app.connect.limiter_burner');

app.connect.limiter_burner.burner_limiter = (function (){var G__28806 = (function app$connect$limiter_burner$burner_limiter_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var burner_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-limiter-id","burner-limiter-id",-1127840956)], null));
var burner_limiter_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-limiter-full-screen","burner-limiter-full-screen",-868941454)], null));
var G__28842 = helix.core.Fragment;
var G__28843 = ({"children": [(function (){var G__28844 = burner_limiter_id;
switch (G__28844) {
case "none":
var G__28852 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__28853 = (function (){var obj28859 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj28859;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28852,G__28853) : helix.core.jsx.call(null,G__28852,G__28853));

break;
case "URS-60":
var G__28870 = app.connect.URS_60.URS_60.URS_60;
var G__28871 = (function (){var obj28877 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj28877;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28870,G__28871) : helix.core.jsx.call(null,G__28870,G__28871));

break;
default:
return null;

}
})(),(function (){var G__28888 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__28889 = (function (){var obj28894 = ({"show":burner_limiter_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-limiter-full-screen","change-burner-limiter-full-screen",2051559587),false], null));
}),"children":(function (){var G__28903 = burner_limiter_id;
switch (G__28903) {
case "URS-60":
var G__28905 = app.connect.URS_60.URS_60.URS_60;
var G__28906 = (function (){var obj28910 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj28910;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28905,G__28906) : helix.core.jsx.call(null,G__28905,G__28906));

break;
default:
return null;

}
})()});
return obj28894;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28888,G__28889) : helix.core.jsx.call(null,G__28888,G__28889));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28842,G__28843) : helix.core.jsxs.call(null,G__28842,G__28843));
});
if(goog.DEBUG === true){
var G__28926 = G__28806;
(G__28926.displayName = "app.connect.limiter-burner/burner-limiter");

return G__28926;
} else {
return G__28806;
}
})();




//# sourceMappingURL=app.connect.limiter_burner.js.map
