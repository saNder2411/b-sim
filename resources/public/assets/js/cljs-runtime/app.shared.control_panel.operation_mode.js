goog.provide('app.shared.control_panel.operation_mode');

app.shared.control_panel.operation_mode.operation_mode = (function (){var G__39638 = (function app$shared$control_panel$operation_mode$operation_mode_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var mode = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null));
var G__39642 = helix.core.Fragment;
var G__39643 = ({"children": [(function (){var G__39644 = "text";
var G__39645 = (function (){var obj39647 = ({"x":(66),"y":(135),"fill":"#eee","fontSize":"26px","letterSpacing":"0.025em","children":"Operation"});
return obj39647;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39644,G__39645) : helix.core.jsx.call(null,G__39644,G__39645));
})(),(function (){var G__39648 = app.shared.control_panel.mode_btn.mode_btn;
var G__39649 = (function (){var obj39651 = ({"x":(0),"label":"NORMAL","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"normal"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),"normal"], null));
})});
return obj39651;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39648,G__39649) : helix.core.jsx.call(null,G__39648,G__39649));
})(),(function (){var G__39652 = "path";
var G__39653 = (function (){var obj39655 = ({"fill":"#eee","d":"M370.3,136.711l5.329-19.008h1.805l-5.316,19.008Z"});
return obj39655;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39652,G__39653) : helix.core.jsx.call(null,G__39652,G__39653));
})(),(function (){var G__39656 = app.shared.control_panel.mode_btn.mode_btn;
var G__39657 = (function (){var obj39659 = ({"x":(136),"label":"STANDBY","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"standby"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),"standby"], null));
})});
return obj39659;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39656,G__39657) : helix.core.jsx.call(null,G__39656,G__39657));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39642,G__39643) : helix.core.jsxs.call(null,G__39642,G__39643));
});
if(goog.DEBUG === true){
var G__39660 = G__39638;
(G__39660.displayName = "app.shared.control-panel.operation-mode/operation-mode");

return G__39660;
} else {
return G__39638;
}
})();




//# sourceMappingURL=app.shared.control_panel.operation_mode.js.map
