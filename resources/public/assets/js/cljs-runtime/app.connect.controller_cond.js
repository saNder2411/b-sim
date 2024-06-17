goog.provide('app.connect.controller_cond');

app.connect.controller_cond.controller_cond = (function (){var G__44319 = (function app$connect$controller_cond$controller_cond_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__44320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var cond_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
var cond_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null));
var G__44323 = helix.core.Fragment;
var G__44324 = ({"children": [(function (){var G__44325 = cond_controller_id;
switch (G__44325) {
case "none":
var G__44327 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__44328 = (function (){var obj44333 = ({"x":"58%","y":"1.6%","w":"13.5%","title":"Conductivity"});
return obj44333;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44327,G__44328) : helix.core.jsx.call(null,G__44327,G__44328));

break;
case "LRR 1-60":
var G__44334 = app.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__44335 = (function (){var obj44337 = ({"x":"58%","y":"1.6%","w":"13.5%"});
return obj44337;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44334,G__44335) : helix.core.jsx.call(null,G__44334,G__44335));

break;
default:
return null;

}
})(),(function (){var G__44338 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__44339 = (function (){var obj44341 = ({"show":cond_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),false], null));
}),"children":(function (){var G__44343 = cond_controller_id;
switch (G__44343) {
case "LRR 1-60":
var G__44347 = app.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__44348 = (function (){var obj44350 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj44350;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44347,G__44348) : helix.core.jsx.call(null,G__44347,G__44348));

break;
default:
return null;

}
})()});
return obj44341;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44338,G__44339) : helix.core.jsx.call(null,G__44338,G__44339));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__44323,G__44324) : helix.core.jsxs.call(null,G__44323,G__44324));
});
if(goog.DEBUG === true){
var G__44352 = G__44319;
(G__44352.displayName = "app.connect.controller-cond/controller-cond");

return G__44352;
} else {
return G__44319;
}
})();




//# sourceMappingURL=app.connect.controller_cond.js.map
