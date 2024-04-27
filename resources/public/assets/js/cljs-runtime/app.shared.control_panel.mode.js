goog.provide('app.shared.control_panel.mode');

app.shared.control_panel.mode.operation_mode = (function (){var G__47295 = (function app$shared$control_panel$mode$operation_mode_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__47306 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var mode = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null));
var G__47318 = helix.core.Fragment;
var G__47320 = ({"children": [(function (){var G__47329 = "text";
var G__47330 = (function (){var obj47332 = ({"x":(66),"y":(135),"fill":"#eee","fontSize":"26px","letterSpacing":"0.025em","children":"Operation"});
return obj47332;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47329,G__47330) : helix.core.jsx.call(null,G__47329,G__47330));
})(),(function (){var G__47345 = app.shared.control_panel.mode_btn.mode_btn;
var G__47346 = (function (){var obj47350 = ({"x":(0),"label":"NORMAL","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"normal"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),"normal"], null));
})});
return obj47350;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47345,G__47346) : helix.core.jsx.call(null,G__47345,G__47346));
})(),(function (){var G__47369 = "path";
var G__47370 = (function (){var obj47374 = ({"fill":"#eee","d":"M370.3,136.711l5.329-19.008h1.805l-5.316,19.008Z"});
return obj47374;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47369,G__47370) : helix.core.jsx.call(null,G__47369,G__47370));
})(),(function (){var G__47379 = app.shared.control_panel.mode_btn.mode_btn;
var G__47380 = (function (){var obj47386 = ({"x":(136),"label":"STANDBY","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"standby"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),"standby"], null));
})});
return obj47386;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47379,G__47380) : helix.core.jsx.call(null,G__47379,G__47380));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__47318,G__47320) : helix.core.jsxs.call(null,G__47318,G__47320));
});
if(goog.DEBUG === true){
var G__47394 = G__47295;
(G__47394.displayName = "app.shared.control-panel.mode/operation-mode");

return G__47394;
} else {
return G__47295;
}
})();




//# sourceMappingURL=app.shared.control_panel.mode.js.map
