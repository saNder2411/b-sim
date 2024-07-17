goog.provide('app.ui.kits.connect.limiter_high_level');

app.ui.kits.connect.limiter_high_level.limiter_high_level = (function (){var G__29319 = (function app$ui$kits$connect$limiter_high_level$limiter_high_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var high_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter-id","high-limiter-id",1297275918)], null));
var show_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-high-limiter-data-by-path","current-high-limiter-data-by-path",-1991404189),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var G__29331 = helix.core.Fragment;
var G__29332 = ({"children": [(function (){var G__29334 = high_limiter_id;
switch (G__29334) {
case "none":
var G__29351 = app.ui.shared.components.controller.placeholder;
var G__29352 = (function (){var obj29358 = ({"x":"44%","y":"1.6%","w":"13.5%","title":"Limiter"});
return obj29358;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29351,G__29352) : helix.core.jsx.call(null,G__29351,G__29352));

break;
case "URS 61":
var G__29368 = app.ui.kits.connect.URS_61.URS_61.URS_61;
var G__29369 = (function (){var obj29375 = ({"x":"44%","y":"1.6%","w":"13.5%"});
return obj29375;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29368,G__29369) : helix.core.jsx.call(null,G__29368,G__29369));

break;
default:
return null;

}
})(),(function (){var G__29381 = app.ui.shared.components.controller.full_screen;
var G__29382 = (function (){var obj29389 = ({"show":show_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-high-limiter","change-current-high-limiter",-1478754059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),false], null)], null));
}),"children":(function (){var G__29393 = high_limiter_id;
switch (G__29393) {
case "URS 61":
var G__29404 = app.ui.kits.connect.URS_61.URS_61.URS_61;
var G__29405 = (function (){var obj29411 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29411;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29404,G__29405) : helix.core.jsx.call(null,G__29404,G__29405));

break;
default:
return null;

}
})()});
return obj29389;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29381,G__29382) : helix.core.jsx.call(null,G__29381,G__29382));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29331,G__29332) : helix.core.jsxs.call(null,G__29331,G__29332));
});
if(goog.DEBUG === true){
var G__29421 = G__29319;
(G__29421.displayName = "app.ui.kits.connect.limiter-high-level/limiter-high-level");

return G__29421;
} else {
return G__29319;
}
})();




//# sourceMappingURL=app.ui.kits.connect.limiter_high_level.js.map
