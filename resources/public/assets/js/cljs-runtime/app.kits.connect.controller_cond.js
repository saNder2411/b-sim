goog.provide('app.kits.connect.controller_cond');

app.kits.connect.controller_cond.controller_cond = (function (){var G__44405 = (function app$kits$connect$controller_cond$controller_cond_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__44410 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var cond_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
var cond_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null));
var G__44413 = helix.core.Fragment;
var G__44414 = ({"children": [(function (){var G__44415 = cond_controller_id;
switch (G__44415) {
case "none":
var G__44416 = app.shared.components.controller.placeholder;
var G__44417 = (function (){var obj44419 = ({"x":"58%","y":"1.6%","w":"13.5%","title":"Conductivity"});
return obj44419;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44416,G__44417) : helix.core.jsx.call(null,G__44416,G__44417));

break;
case "LRR 1-60":
var G__44420 = app.kits.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__44421 = (function (){var obj44423 = ({"x":"58%","y":"1.6%","w":"13.5%"});
return obj44423;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44420,G__44421) : helix.core.jsx.call(null,G__44420,G__44421));

break;
default:
return null;

}
})(),(function (){var G__44424 = app.shared.components.controller.full_screen;
var G__44425 = (function (){var obj44433 = ({"show":cond_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),false], null));
}),"children":(function (){var G__44434 = cond_controller_id;
switch (G__44434) {
case "LRR 1-60":
var G__44440 = app.kits.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__44441 = (function (){var obj44445 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj44445;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44440,G__44441) : helix.core.jsx.call(null,G__44440,G__44441));

break;
default:
return null;

}
})()});
return obj44433;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44424,G__44425) : helix.core.jsx.call(null,G__44424,G__44425));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__44413,G__44414) : helix.core.jsxs.call(null,G__44413,G__44414));
});
if(goog.DEBUG === true){
var G__44459 = G__44405;
(G__44459.displayName = "app.kits.connect.controller-cond/controller-cond");

return G__44459;
} else {
return G__44405;
}
})();




//# sourceMappingURL=app.kits.connect.controller_cond.js.map
