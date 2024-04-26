goog.provide('app.shared.control_panel.mode');

app.shared.control_panel.mode.operation_mode = (function (){var G__37524 = (function app$shared$control_panel$mode$operation_mode_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__37525 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var mode = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null));
var G__37538 = helix.core.Fragment;
var G__37539 = ({"children": [(function (){var G__37543 = "text";
var G__37544 = (function (){var obj37550 = ({"x":(66),"y":(135),"fill":"#eee","fontSize":"26px","letterSpacing":"0.025em","children":"Operation"});
return obj37550;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37543,G__37544) : helix.core.jsx.call(null,G__37543,G__37544));
})(),(function (){var G__37553 = app.shared.control_panel.mode_btn.mode_btn;
var G__37554 = (function (){var obj37558 = ({"x":(0),"label":"NORMAL","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"normal"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),"normal"], null));
})});
return obj37558;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37553,G__37554) : helix.core.jsx.call(null,G__37553,G__37554));
})(),(function (){var G__37569 = "path";
var G__37570 = (function (){var obj37572 = ({"fill":"#eee","d":"M370.3,136.711l5.329-19.008h1.805l-5.316,19.008Z"});
return obj37572;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37569,G__37570) : helix.core.jsx.call(null,G__37569,G__37570));
})(),(function (){var G__37577 = app.shared.control_panel.mode_btn.mode_btn;
var G__37578 = (function (){var obj37583 = ({"x":(136),"label":"STANDBY","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"standby"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),"standby"], null));
})});
return obj37583;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37577,G__37578) : helix.core.jsx.call(null,G__37577,G__37578));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37538,G__37539) : helix.core.jsxs.call(null,G__37538,G__37539));
});
if(goog.DEBUG === true){
var G__37590 = G__37524;
(G__37590.displayName = "app.shared.control-panel.mode/operation-mode");

return G__37590;
} else {
return G__37524;
}
})();




//# sourceMappingURL=app.shared.control_panel.mode.js.map
