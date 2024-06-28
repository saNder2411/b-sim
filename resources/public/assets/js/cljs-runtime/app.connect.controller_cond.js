goog.provide('app.connect.controller_cond');

app.connect.controller_cond.controller_cond = (function (){var G__64536 = (function app$connect$controller_cond$controller_cond_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__64542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var cond_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
var cond_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null));
var G__64551 = helix.core.Fragment;
var G__64552 = ({"children": [(function (){var G__64555 = cond_controller_id;
switch (G__64555) {
case "none":
var G__64564 = app.shared.components.controller.placeholder;
var G__64566 = (function (){var obj64572 = ({"x":"58%","y":"1.6%","w":"13.5%","title":"Conductivity"});
return obj64572;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64564,G__64566) : helix.core.jsx.call(null,G__64564,G__64566));

break;
case "LRR 1-60":
var G__64579 = app.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__64581 = (function (){var obj64588 = ({"x":"58%","y":"1.6%","w":"13.5%"});
return obj64588;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64579,G__64581) : helix.core.jsx.call(null,G__64579,G__64581));

break;
default:
return null;

}
})(),(function (){var G__64596 = app.shared.components.controller.full_screen;
var G__64597 = (function (){var obj64603 = ({"show":cond_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),false], null));
}),"children":(function (){var G__64612 = cond_controller_id;
switch (G__64612) {
case "LRR 1-60":
var G__64618 = app.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__64619 = (function (){var obj64623 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj64623;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64618,G__64619) : helix.core.jsx.call(null,G__64618,G__64619));

break;
default:
return null;

}
})()});
return obj64603;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64596,G__64597) : helix.core.jsx.call(null,G__64596,G__64597));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__64551,G__64552) : helix.core.jsxs.call(null,G__64551,G__64552));
});
if(goog.DEBUG === true){
var G__64632 = G__64536;
(G__64632.displayName = "app.connect.controller-cond/controller-cond");

return G__64632;
} else {
return G__64536;
}
})();




//# sourceMappingURL=app.connect.controller_cond.js.map
