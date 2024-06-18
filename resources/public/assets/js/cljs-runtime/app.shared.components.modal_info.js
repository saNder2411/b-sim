goog.provide('app.shared.components.modal_info');

app.shared.components.modal_info.modal_info = (function (){var G__53596 = (function app$shared$components$modal_info$modal_info_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__53597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info-show","modal-info-show",-922250939)], null));
var map__53600 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null));
var map__53600__$1 = cljs.core.__destructure_map(map__53600);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53600__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53600__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_close = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null));
});
if(cljs.core.truth_(show)){
var G__53601 = "div";
var G__53602 = (function (){var obj53604 = ({"className":"modal-overlay","onClick":on_close,"children":(function (){var G__53605 = "div";
var G__53606 = (function (){var obj53608 = ({"className":"modal-card","style":(function (){var obj53610 = ({"width":helix.impl.props.__GT_js("44%")});
return obj53610;
})(),"children":[(function (){var G__53611 = "header";
var G__53612 = (function (){var obj53614 = ({"className":"modal-card-head","children":(function (){var G__53615 = "p";
var G__53616 = (function (){var obj53618 = ({"className":"modal-card-title","children":title});
return obj53618;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53615,G__53616) : helix.core.jsx.call(null,G__53615,G__53616));
})()});
return obj53614;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53611,G__53612) : helix.core.jsx.call(null,G__53611,G__53612));
})(),(function (){var G__53619 = "section";
var G__53620 = (function (){var obj53622 = ({"className":"modal-card-body","children":(function (){var G__53623 = "div";
var G__53624 = (function (){var obj53626 = ({"className":"media","children":(function (){var G__53627 = "div";
var G__53628 = (function (){var obj53630 = ({"className":"media-content","children":(function (){var G__53631 = "p";
var G__53632 = (function (){var obj53634 = ({"style":(function (){var obj53636 = ({"color":helix.impl.props.__GT_js("#fff")});
return obj53636;
})(),"children":text});
return obj53634;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53631,G__53632) : helix.core.jsx.call(null,G__53631,G__53632));
})()});
return obj53630;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53627,G__53628) : helix.core.jsx.call(null,G__53627,G__53628));
})()});
return obj53626;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53623,G__53624) : helix.core.jsx.call(null,G__53623,G__53624));
})()});
return obj53622;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53619,G__53620) : helix.core.jsx.call(null,G__53619,G__53620));
})(),(function (){var G__53637 = "footer";
var G__53638 = (function (){var obj53640 = ({"className":"modal-card-foot","children":(function (){var G__53641 = "button";
var G__53642 = (function (){var obj53644 = ({"className":"button is-info","onClick":on_close,"children":"OK"});
return obj53644;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53641,G__53642) : helix.core.jsx.call(null,G__53641,G__53642));
})()});
return obj53640;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53637,G__53638) : helix.core.jsx.call(null,G__53637,G__53638));
})()]});
return obj53608;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__53605,G__53606) : helix.core.jsxs.call(null,G__53605,G__53606));
})()});
return obj53604;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53601,G__53602) : helix.core.jsx.call(null,G__53601,G__53602));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__53645 = G__53596;
(G__53645.displayName = "app.shared.components.modal-info/modal-info");

return G__53645;
} else {
return G__53596;
}
})();




//# sourceMappingURL=app.shared.components.modal_info.js.map
