goog.provide('app.shared.sidebar.control_panel.mode.core');

app.shared.sidebar.control_panel.mode.core.operation_mode = (function (){var G__49650 = (function app$shared$sidebar$control_panel$mode$core$operation_mode_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var mode = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null));
var G__49655 = helix.core.Fragment;
var G__49656 = ({"children": [(function (){var G__49657 = "text";
var G__49658 = (function (){var obj49661 = ({"x":(65),"y":(135),"fill":"#eee","fontSize":"26px","letterSpacing":"0.025em","children":"Operation"});
return obj49661;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49657,G__49658) : helix.core.jsx.call(null,G__49657,G__49658));
})(),(function (){var G__49663 = app.shared.sidebar.control_panel.mode.button.mode_button;
var G__49664 = (function (){var obj49670 = ({"x":(-4),"label":"NORMAL","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"normal"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),"normal"], null));
})});
return obj49670;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49663,G__49664) : helix.core.jsx.call(null,G__49663,G__49664));
})(),(function (){var G__49675 = "path";
var G__49676 = (function (){var obj49681 = ({"fill":"#eee","d":"M366.3,136.711l5.329-19.008h1.805l-5.316,19.008Z"});
return obj49681;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49675,G__49676) : helix.core.jsx.call(null,G__49675,G__49676));
})(),(function (){var G__49688 = app.shared.sidebar.control_panel.mode.button.mode_button;
var G__49689 = (function (){var obj49695 = ({"x":(132),"label":"STANDBY","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"standby"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-operation-mode","change-operation-mode",-1786361955),"standby"], null));
})});
return obj49695;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49688,G__49689) : helix.core.jsx.call(null,G__49688,G__49689));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49655,G__49656) : helix.core.jsxs.call(null,G__49655,G__49656));
});
if(goog.DEBUG === true){
var G__49718 = G__49650;
(G__49718.displayName = "app.shared.sidebar.control-panel.mode.core/operation-mode");

return G__49718;
} else {
return G__49650;
}
})();




//# sourceMappingURL=app.shared.sidebar.control_panel.mode.core.js.map
