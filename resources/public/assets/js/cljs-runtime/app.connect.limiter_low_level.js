goog.provide('app.connect.limiter_low_level');

app.connect.limiter_low_level.limiter_low_level = (function (){var G__30146 = (function app$connect$limiter_low_level$limiter_low_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var limiter_low_level_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
var limiter_low_level_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-full-screen","limiter-low-level-full-screen",-1274562341)], null));
var G__30162 = helix.core.Fragment;
var G__30163 = ({"children": [(function (){var G__30164 = limiter_low_level_id;
switch (G__30164) {
case "none":
var G__30167 = app.shared.components.controller.placeholder;
var G__30168 = (function (){var obj30172 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj30172;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30167,G__30168) : helix.core.jsx.call(null,G__30167,G__30168));

break;
case "URS 60":
var G__30173 = app.connect.URS_60.URS_60.URS_60;
var G__30174 = (function (){var obj30178 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj30178;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30173,G__30174) : helix.core.jsx.call(null,G__30173,G__30174));

break;
default:
return null;

}
})(),(function (){var G__30182 = app.shared.components.controller.full_screen;
var G__30183 = (function (){var obj30185 = ({"show":limiter_low_level_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),false], null));
}),"children":(function (){var G__30190 = limiter_low_level_id;
switch (G__30190) {
case "URS 60":
var G__30191 = app.connect.URS_60.URS_60.URS_60;
var G__30192 = (function (){var obj30194 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj30194;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30191,G__30192) : helix.core.jsx.call(null,G__30191,G__30192));

break;
default:
return null;

}
})()});
return obj30185;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30182,G__30183) : helix.core.jsx.call(null,G__30182,G__30183));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30162,G__30163) : helix.core.jsxs.call(null,G__30162,G__30163));
});
if(goog.DEBUG === true){
var G__30196 = G__30146;
(G__30196.displayName = "app.connect.limiter-low-level/limiter-low-level");

return G__30196;
} else {
return G__30146;
}
})();




//# sourceMappingURL=app.connect.limiter_low_level.js.map
