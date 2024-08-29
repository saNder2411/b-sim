goog.provide('app.ui.kits.connect.limiter_low_level');

app.ui.kits.connect.limiter_low_level.limiter_low_level = (function (){var G__32462 = (function app$ui$kits$connect$limiter_low_level$limiter_low_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var low_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853)], null));
var show_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-low-limiter-data-by-path","current-low-limiter-data-by-path",-410595920),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var G__32466 = helix.core.Fragment;
var G__32467 = ({"children": [(function (){var G__32468 = low_limiter_id;
switch (G__32468) {
case "none":
var G__32469 = app.ui.shared.components.controller.placeholder;
var G__32470 = (function (){var obj32472 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj32472;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32469,G__32470) : helix.core.jsx.call(null,G__32469,G__32470));

break;
case "URS 60":
var G__32473 = app.ui.kits.connect.URS_60.URS_60.URS_60;
var G__32474 = (function (){var obj32476 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj32476;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32473,G__32474) : helix.core.jsx.call(null,G__32473,G__32474));

break;
default:
return null;

}
})(),(function (){var G__32477 = app.ui.shared.components.controller.full_screen;
var G__32478 = (function (){var obj32480 = ({"show":show_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-low-limiter","change-current-low-limiter",-57143546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),false], null)], null));
}),"children":(function (){var G__32481 = low_limiter_id;
switch (G__32481) {
case "URS 60":
var G__32482 = app.ui.kits.connect.URS_60.URS_60.URS_60;
var G__32483 = (function (){var obj32485 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj32485;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32482,G__32483) : helix.core.jsx.call(null,G__32482,G__32483));

break;
default:
return null;

}
})()});
return obj32480;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32477,G__32478) : helix.core.jsx.call(null,G__32477,G__32478));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32466,G__32467) : helix.core.jsxs.call(null,G__32466,G__32467));
});
if(goog.DEBUG === true){
var G__32486 = G__32462;
(G__32486.displayName = "app.ui.kits.connect.limiter-low-level/limiter-low-level");

return G__32486;
} else {
return G__32462;
}
})();




//# sourceMappingURL=app.ui.kits.connect.limiter_low_level.js.map
