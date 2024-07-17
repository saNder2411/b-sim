goog.provide('app.ui.kits.connect.controller_cond');

app.ui.kits.connect.controller_cond.controller_cond = (function (){var G__29320 = (function app$ui$kits$connect$controller_cond$controller_cond_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var cond_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
var cond_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-cond-controller-data-by-path","current-cond-controller-data-by-path",2025109911),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var G__29329 = helix.core.Fragment;
var G__29330 = ({"children": [(function (){var G__29333 = cond_controller_id;
switch (G__29333) {
case "none":
var G__29335 = app.ui.shared.components.controller.placeholder;
var G__29336 = (function (){var obj29338 = ({"x":"58%","y":"1.6%","w":"13.5%","title":"Conductivity"});
return obj29338;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29335,G__29336) : helix.core.jsx.call(null,G__29335,G__29336));

break;
case "LRR 1-60":
var G__29349 = app.ui.kits.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__29350 = (function (){var obj29356 = ({"x":"58%","y":"1.6%","w":"13.5%"});
return obj29356;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29349,G__29350) : helix.core.jsx.call(null,G__29349,G__29350));

break;
default:
return null;

}
})(),(function (){var G__29364 = app.ui.shared.components.controller.full_screen;
var G__29365 = (function (){var obj29373 = ({"show":cond_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-cond-controller","change-current-cond-controller",899229912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),false], null)], null));
}),"children":(function (){var G__29378 = cond_controller_id;
switch (G__29378) {
case "LRR 1-60":
var G__29384 = app.ui.kits.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__29385 = (function (){var obj29391 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29391;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29384,G__29385) : helix.core.jsx.call(null,G__29384,G__29385));

break;
default:
return null;

}
})()});
return obj29373;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29364,G__29365) : helix.core.jsx.call(null,G__29364,G__29365));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29329,G__29330) : helix.core.jsxs.call(null,G__29329,G__29330));
});
if(goog.DEBUG === true){
var G__29414 = G__29320;
(G__29414.displayName = "app.ui.kits.connect.controller-cond/controller-cond");

return G__29414;
} else {
return G__29320;
}
})();




//# sourceMappingURL=app.ui.kits.connect.controller_cond.js.map
