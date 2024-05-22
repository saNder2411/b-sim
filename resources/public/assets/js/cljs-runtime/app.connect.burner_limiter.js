goog.provide('app.connect.burner_limiter');

app.connect.burner_limiter.burner_limiter = (function (){var G__31217 = (function app$connect$burner_limiter$burner_limiter_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var burner_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-limiter-id","burner-limiter-id",-1127840956)], null));
var burner_limiter_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-limiter-full-screen","burner-limiter-full-screen",-868941454)], null));
var G__31221 = helix.core.Fragment;
var G__31222 = ({"children": [(function (){var G__31223 = burner_limiter_id;
switch (G__31223) {
case "none":
var G__31224 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__31225 = (function (){var obj31227 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj31227;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31224,G__31225) : helix.core.jsx.call(null,G__31224,G__31225));

break;
case "URS 60":
var G__31228 = app.connect.URS_60.URS_60.URS_60;
var G__31229 = (function (){var obj31231 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj31231;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31228,G__31229) : helix.core.jsx.call(null,G__31228,G__31229));

break;
default:
return null;

}
})(),(function (){var G__31232 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__31233 = (function (){var obj31235 = ({"show":burner_limiter_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-limiter-full-screen","change-burner-limiter-full-screen",2051559587),false], null));
}),"children":(function (){var G__31236 = burner_limiter_id;
switch (G__31236) {
case "URS 60":
var G__31237 = app.connect.URS_60.URS_60.URS_60;
var G__31238 = (function (){var obj31240 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj31240;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31237,G__31238) : helix.core.jsx.call(null,G__31237,G__31238));

break;
default:
return null;

}
})()});
return obj31235;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31232,G__31233) : helix.core.jsx.call(null,G__31232,G__31233));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31221,G__31222) : helix.core.jsxs.call(null,G__31221,G__31222));
});
if(goog.DEBUG === true){
var G__31241 = G__31217;
(G__31241.displayName = "app.connect.burner-limiter/burner-limiter");

return G__31241;
} else {
return G__31217;
}
})();




//# sourceMappingURL=app.connect.burner_limiter.js.map
