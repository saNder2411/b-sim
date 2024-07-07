goog.provide('app.shared.components.modal');

app.shared.components.modal.info = (function (){var G__30430 = (function app$shared$components$modal$info_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info-show","modal-info-show",-922250939)], null));
var map__30434 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null));
var map__30434__$1 = cljs.core.__destructure_map(map__30434);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30434__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30434__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_close = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null));
});
if(cljs.core.truth_(show)){
var G__30435 = "div";
var G__30436 = (function (){var obj30438 = ({"className":"modal-overlay","onClick":on_close,"children":(function (){var G__30439 = "div";
var G__30440 = (function (){var obj30442 = ({"className":"modal-card","style":(function (){var obj30444 = ({"width":helix.impl.props.__GT_js("44%")});
return obj30444;
})(),"children":[(function (){var G__30445 = "header";
var G__30446 = (function (){var obj30448 = ({"className":"modal-card-head","children":(function (){var G__30449 = "p";
var G__30450 = (function (){var obj30452 = ({"className":"modal-card-title","children":title});
return obj30452;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30449,G__30450) : helix.core.jsx.call(null,G__30449,G__30450));
})()});
return obj30448;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30445,G__30446) : helix.core.jsx.call(null,G__30445,G__30446));
})(),(function (){var G__30453 = "section";
var G__30454 = (function (){var obj30456 = ({"className":"modal-card-body","children":(function (){var G__30457 = "div";
var G__30458 = (function (){var obj30460 = ({"className":"media","children":(function (){var G__30461 = "div";
var G__30462 = (function (){var obj30464 = ({"className":"media-content","children":(function (){var G__30465 = "p";
var G__30466 = (function (){var obj30468 = ({"children":text});
return obj30468;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30465,G__30466) : helix.core.jsx.call(null,G__30465,G__30466));
})()});
return obj30464;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30461,G__30462) : helix.core.jsx.call(null,G__30461,G__30462));
})()});
return obj30460;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30457,G__30458) : helix.core.jsx.call(null,G__30457,G__30458));
})()});
return obj30456;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30453,G__30454) : helix.core.jsx.call(null,G__30453,G__30454));
})(),(function (){var G__30469 = "footer";
var G__30470 = (function (){var obj30472 = ({"className":"modal-card-foot","children":(function (){var G__30473 = "button";
var G__30474 = (function (){var obj30476 = ({"className":"button is-info","onClick":on_close,"children":"OK"});
return obj30476;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30473,G__30474) : helix.core.jsx.call(null,G__30473,G__30474));
})()});
return obj30472;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30469,G__30470) : helix.core.jsx.call(null,G__30469,G__30470));
})()]});
return obj30442;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30439,G__30440) : helix.core.jsxs.call(null,G__30439,G__30440));
})()});
return obj30438;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30435,G__30436) : helix.core.jsx.call(null,G__30435,G__30436));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__30477 = G__30430;
(G__30477.displayName = "app.shared.components.modal/info");

return G__30477;
} else {
return G__30430;
}
})();




app.shared.components.modal.settings = (function (){var G__30479 = (function app$shared$components$modal$settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30480,(0),null);
var map__30483__$1 = cljs.core.__destructure_map(map__30483);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,new cljs.core.Keyword(null,"on-default","on-default",-1285252222));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30483__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__30484 = "div";
var G__30485 = (function (){var obj30487 = ({"className":"modal","children":[(function (){var G__30488 = "div";
var G__30489 = (function (){var obj30491 = ({"className":"modal-background"});
return obj30491;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30488,G__30489) : helix.core.jsx.call(null,G__30488,G__30489));
})(),(function (){var G__30492 = "div";
var G__30493 = (function (){var obj30495 = ({"className":"modal-card","style":(function (){var obj30497 = ({"width":helix.impl.props.__GT_js((480))});
return obj30497;
})(),"children":[(function (){var G__30498 = "header";
var G__30499 = (function (){var obj30501 = ({"className":"modal-card-head","children":[(function (){var G__30502 = "p";
var G__30503 = (function (){var obj30505 = ({"className":"modal-card-title","children":title});
return obj30505;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30502,G__30503) : helix.core.jsx.call(null,G__30502,G__30503));
})(),(cljs.core.truth_(on_close)?(function (){var G__30506 = "button";
var G__30507 = (function (){var obj30509 = ({"className":"delete is-medium","onClick":on_close});
return obj30509;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30506,G__30507) : helix.core.jsx.call(null,G__30506,G__30507));
})():null)]});
return obj30501;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30498,G__30499) : helix.core.jsxs.call(null,G__30498,G__30499));
})(),(function (){var G__30510 = "section";
var G__30511 = (function (){var obj30513 = ({"className":"modal-card-body","children":children});
return obj30513;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30510,G__30511) : helix.core.jsx.call(null,G__30510,G__30511));
})(),(function (){var G__30514 = "footer";
var G__30515 = (function (){var obj30517 = ({"className":"modal-card-foot","style":(function (){var obj30519 = ({"display":helix.impl.props.__GT_js("flex"),"justifyContent":helix.impl.props.__GT_js("space-between"),"alignItems":helix.impl.props.__GT_js("center")});
return obj30519;
})(),"children":[(function (){var G__30520 = "button";
var G__30521 = (function (){var obj30523 = ({"className":"button","onClick":on_default,"children":"Restore Defaults"});
return obj30523;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30520,G__30521) : helix.core.jsx.call(null,G__30520,G__30521));
})(),(function (){var G__30524 = "button";
var G__30525 = (function (){var obj30527 = ({"className":"button primary","onClick":on_done,"children":"Done"});
return obj30527;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30524,G__30525) : helix.core.jsx.call(null,G__30524,G__30525));
})()]});
return obj30517;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30514,G__30515) : helix.core.jsxs.call(null,G__30514,G__30515));
})()]});
return obj30495;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30492,G__30493) : helix.core.jsxs.call(null,G__30492,G__30493));
})()]});
return obj30487;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30484,G__30485) : helix.core.jsxs.call(null,G__30484,G__30485));
});
if(goog.DEBUG === true){
var G__30528 = G__30479;
(G__30528.displayName = "app.shared.components.modal/settings");

return G__30528;
} else {
return G__30479;
}
})();




//# sourceMappingURL=app.shared.components.modal.js.map
