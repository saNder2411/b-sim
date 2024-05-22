goog.provide('app.shared.control_panel.mode');

app.shared.control_panel.mode.operation_mode = (function (){var G__29603 = (function app$shared$control_panel$mode$operation_mode_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var mode = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null));
var G__29607 = helix.core.Fragment;
var G__29608 = ({"children": [(function (){var G__29610 = "text";
var G__29611 = (function (){var obj29613 = ({"x":(66),"y":(135),"fill":"#eee","fontSize":"26px","letterSpacing":"0.025em","children":"Operation"});
return obj29613;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29610,G__29611) : helix.core.jsx.call(null,G__29610,G__29611));
})(),(function (){var G__29614 = app.shared.control_panel.mode_btn.mode_btn;
var G__29615 = (function (){var obj29617 = ({"x":(0),"label":"NORMAL","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"normal"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),"normal"], null));
})});
return obj29617;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29614,G__29615) : helix.core.jsx.call(null,G__29614,G__29615));
})(),(function (){var G__29618 = "path";
var G__29619 = (function (){var obj29621 = ({"fill":"#eee","d":"M370.3,136.711l5.329-19.008h1.805l-5.316,19.008Z"});
return obj29621;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29618,G__29619) : helix.core.jsx.call(null,G__29618,G__29619));
})(),(function (){var G__29622 = app.shared.control_panel.mode_btn.mode_btn;
var G__29623 = (function (){var obj29625 = ({"x":(136),"label":"STANDBY","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"standby"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),"standby"], null));
})});
return obj29625;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29622,G__29623) : helix.core.jsx.call(null,G__29622,G__29623));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29607,G__29608) : helix.core.jsxs.call(null,G__29607,G__29608));
});
if(goog.DEBUG === true){
var G__29626 = G__29603;
(G__29626.displayName = "app.shared.control-panel.mode/operation-mode");

return G__29626;
} else {
return G__29603;
}
})();




//# sourceMappingURL=app.shared.control_panel.mode.js.map
