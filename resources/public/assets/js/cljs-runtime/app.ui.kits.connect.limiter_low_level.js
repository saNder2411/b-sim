goog.provide('app.ui.kits.connect.limiter_low_level');

app.ui.kits.connect.limiter_low_level.limiter_low_level = (function (){var G__29392 = (function app$ui$kits$connect$limiter_low_level$limiter_low_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var low_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853)], null));
var show_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-low-limiter-data-by-path","current-low-limiter-data-by-path",-410595920),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var G__29452 = helix.core.Fragment;
var G__29453 = ({"children": [(function (){var G__29454 = low_limiter_id;
switch (G__29454) {
case "none":
var G__29455 = app.ui.shared.components.controller.placeholder;
var G__29456 = (function (){var obj29458 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj29458;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29455,G__29456) : helix.core.jsx.call(null,G__29455,G__29456));

break;
case "URS 60":
var G__29466 = app.ui.kits.connect.URS_60.URS_60.URS_60;
var G__29467 = (function (){var obj29469 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj29469;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29466,G__29467) : helix.core.jsx.call(null,G__29466,G__29467));

break;
default:
return null;

}
})(),(function (){var G__29479 = app.ui.shared.components.controller.full_screen;
var G__29480 = (function (){var obj29482 = ({"show":show_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-low-limiter","change-current-low-limiter",-57143546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),false], null)], null));
}),"children":(function (){var G__29485 = low_limiter_id;
switch (G__29485) {
case "URS 60":
var G__29490 = app.ui.kits.connect.URS_60.URS_60.URS_60;
var G__29491 = (function (){var obj29495 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj29495;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29490,G__29491) : helix.core.jsx.call(null,G__29490,G__29491));

break;
default:
return null;

}
})()});
return obj29482;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29479,G__29480) : helix.core.jsx.call(null,G__29479,G__29480));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29452,G__29453) : helix.core.jsxs.call(null,G__29452,G__29453));
});
if(goog.DEBUG === true){
var G__29504 = G__29392;
(G__29504.displayName = "app.ui.kits.connect.limiter-low-level/limiter-low-level");

return G__29504;
} else {
return G__29392;
}
})();




//# sourceMappingURL=app.ui.kits.connect.limiter_low_level.js.map
