goog.provide('app.ui.kits.connect.limiter_low_level');

app.ui.kits.connect.limiter_low_level.limiter_low_level = (function (){var G__29261 = (function app$ui$kits$connect$limiter_low_level$limiter_low_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var low_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter-id","low-limiter-id",-437682853)], null));
var show_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-low-limiter-data-by-path","current-low-limiter-data-by-path",-410595920),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var G__29269 = helix.core.Fragment;
var G__29270 = ({"children": [(function (){var G__29273 = low_limiter_id;
switch (G__29273) {
case "none":
var G__29275 = app.ui.shared.components.controller.placeholder;
var G__29276 = (function (){var obj29280 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj29280;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29275,G__29276) : helix.core.jsx.call(null,G__29275,G__29276));

break;
case "URS 60":
var G__29283 = app.ui.kits.connect.URS_60.URS_60.URS_60;
var G__29284 = (function (){var obj29288 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj29288;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29283,G__29284) : helix.core.jsx.call(null,G__29283,G__29284));

break;
default:
return null;

}
})(),(function (){var G__29291 = app.ui.shared.components.controller.full_screen;
var G__29292 = (function (){var obj29296 = ({"show":show_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-low-limiter","change-current-low-limiter",-57143546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),false], null)], null));
}),"children":(function (){var G__29299 = low_limiter_id;
switch (G__29299) {
case "URS 60":
var G__29303 = app.ui.kits.connect.URS_60.URS_60.URS_60;
var G__29304 = (function (){var obj29308 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj29308;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29303,G__29304) : helix.core.jsx.call(null,G__29303,G__29304));

break;
default:
return null;

}
})()});
return obj29296;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29291,G__29292) : helix.core.jsx.call(null,G__29291,G__29292));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29269,G__29270) : helix.core.jsxs.call(null,G__29269,G__29270));
});
if(goog.DEBUG === true){
var G__29310 = G__29261;
(G__29310.displayName = "app.ui.kits.connect.limiter-low-level/limiter-low-level");

return G__29310;
} else {
return G__29261;
}
})();




//# sourceMappingURL=app.ui.kits.connect.limiter_low_level.js.map
