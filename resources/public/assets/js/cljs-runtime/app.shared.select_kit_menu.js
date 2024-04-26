goog.provide('app.shared.select_kit_menu');

app.shared.select_kit_menu.select_kit_menu = (function (){var G__39519 = (function app$shared$select_kit_menu$select_kit_menu_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39520 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var G__39523 = "svg";
var G__39524 = (function (){var obj39526 = ({"style":(function (){var obj39528 = ({"width":helix.impl.props.__GT_js("29.06%"),"top":helix.impl.props.__GT_js("4.4%"),"left":helix.impl.props.__GT_js("0%")});
return obj39528;
})(),"viewBox":"0 0 566 60","children":[(function (){var G__39529 = app.shared.select_kit_btn.select_kit_btn;
var G__39530 = (function (){var obj39532 = ({"x":(58),"y":(12),"label":"SPECTOR","sub-label":"module","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"module"),"disable":(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped"))),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),"module"], null));
})});
return obj39532;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39529,G__39530) : helix.core.jsx.call(null,G__39529,G__39530));
})(),(function (){var G__39533 = "path";
var G__39534 = (function (){var obj39536 = ({"fill":"#aaa","d":"M282.3,39.711l5.329-19.008h1.805l-5.316,19.008Z"});
return obj39536;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39533,G__39534) : helix.core.jsx.call(null,G__39533,G__39534));
})(),(function (){var G__39537 = app.shared.select_kit_btn.select_kit_btn;
var G__39538 = (function (){var obj39540 = ({"x":(294),"y":(12),"label":"SPECTOR","sub-label":"connect","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"),"disable":(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped"))),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),"connect"], null));
})});
return obj39540;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39537,G__39538) : helix.core.jsx.call(null,G__39537,G__39538));
})()]});
return obj39526;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39523,G__39524) : helix.core.jsxs.call(null,G__39523,G__39524));
});
if(goog.DEBUG === true){
var G__39541 = G__39519;
(G__39541.displayName = "app.shared.select-kit-menu/select-kit-menu");

return G__39541;
} else {
return G__39519;
}
})();




//# sourceMappingURL=app.shared.select_kit_menu.js.map
