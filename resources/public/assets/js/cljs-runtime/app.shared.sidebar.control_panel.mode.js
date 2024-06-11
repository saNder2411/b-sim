goog.provide('app.shared.sidebar.control_panel.mode');

app.shared.sidebar.control_panel.mode.operation_mode = (function (){var G__48551 = (function app$shared$sidebar$control_panel$mode$operation_mode_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__48552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var mode = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null));
var G__48555 = helix.core.Fragment;
var G__48556 = ({"children": [(function (){var G__48557 = "text";
var G__48558 = (function (){var obj48560 = ({"x":(65),"y":(135),"fill":"#eee","fontSize":"26px","letterSpacing":"0.025em","children":"Operation"});
return obj48560;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__48557,G__48558) : helix.core.jsx.call(null,G__48557,G__48558));
})(),(function (){var G__48561 = app.shared.sidebar.control_panel.mode_btn.mode_btn;
var G__48562 = (function (){var obj48564 = ({"x":(-4),"label":"NORMAL","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"normal"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),"normal"], null));
})});
return obj48564;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__48561,G__48562) : helix.core.jsx.call(null,G__48561,G__48562));
})(),(function (){var G__48565 = "path";
var G__48566 = (function (){var obj48568 = ({"fill":"#eee","d":"M366.3,136.711l5.329-19.008h1.805l-5.316,19.008Z"});
return obj48568;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__48565,G__48566) : helix.core.jsx.call(null,G__48565,G__48566));
})(),(function (){var G__48569 = app.shared.sidebar.control_panel.mode_btn.mode_btn;
var G__48570 = (function (){var obj48572 = ({"x":(132),"label":"STANDBY","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"standby"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),"standby"], null));
})});
return obj48572;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__48569,G__48570) : helix.core.jsx.call(null,G__48569,G__48570));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__48555,G__48556) : helix.core.jsxs.call(null,G__48555,G__48556));
});
if(goog.DEBUG === true){
var G__48573 = G__48551;
(G__48573.displayName = "app.shared.sidebar.control-panel.mode/operation-mode");

return G__48573;
} else {
return G__48551;
}
})();




//# sourceMappingURL=app.shared.sidebar.control_panel.mode.js.map
