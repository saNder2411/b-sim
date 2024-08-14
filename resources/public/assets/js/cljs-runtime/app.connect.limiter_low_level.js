goog.provide('app.connect.limiter_low_level');

app.connect.limiter_low_level.limiter_low_level = (function (){var G__41465 = (function app$connect$limiter_low_level$limiter_low_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__41474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var limiter_low_level_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
var limiter_low_level_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-:full-screen?","limiter-low-level-:full-screen?",-1274562341)], null));
var G__41489 = helix.core.Fragment;
var G__41490 = ({"children": [(function (){var G__41492 = limiter_low_level_id;
switch (G__41492) {
case "none":
var G__41497 = app.shared.components.controller.placeholder;
var G__41498 = (function (){var obj41502 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj41502;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41497,G__41498) : helix.core.jsx.call(null,G__41497,G__41498));

break;
case "URS 60":
var G__41511 = app.connect.URS_60.URS_60.URS_60;
var G__41512 = (function (){var obj41518 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj41518;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41511,G__41512) : helix.core.jsx.call(null,G__41511,G__41512));

break;
default:
return null;

}
})(),(function (){var G__41523 = app.shared.components.controller.full_screen;
var G__41524 = (function (){var obj41528 = ({"show":limiter_low_level_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-limiter-low-level-:full-screen?","change-limiter-low-level-:full-screen?",-806067137),false], null));
}),"children":(function (){var G__41535 = limiter_low_level_id;
switch (G__41535) {
case "URS 60":
var G__41539 = app.connect.URS_60.URS_60.URS_60;
var G__41540 = (function (){var obj41546 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj41546;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41539,G__41540) : helix.core.jsx.call(null,G__41539,G__41540));

break;
default:
return null;

}
})()});
return obj41528;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41523,G__41524) : helix.core.jsx.call(null,G__41523,G__41524));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41489,G__41490) : helix.core.jsxs.call(null,G__41489,G__41490));
});
if(goog.DEBUG === true){
var G__41557 = G__41465;
(G__41557.displayName = "app.connect.limiter-low-level/limiter-low-level");

return G__41557;
} else {
return G__41465;
}
})();




//# sourceMappingURL=app.connect.limiter_low_level.js.map
