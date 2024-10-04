goog.provide('app.ui.shared.components.modal');

app.ui.shared.components.modal.info = (function (){var G__36135 = (function app$ui$shared$components$modal$info_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36165 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","show","modal-info/show",-230278515)], null));
var map__36168 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null));
var map__36168__$1 = cljs.core.__destructure_map(map__36168);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36168__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36168__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_close = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null));
});
if(cljs.core.truth_(show)){
var G__36186 = "div";
var G__36187 = (function (){var obj36207 = ({"className":"modal-overlay","onClick":on_close,"children":(function (){var G__36216 = "div";
var G__36217 = (function (){var obj36227 = ({"className":"modal-card","style":(function (){var obj36231 = ({"width":helix.impl.props.__GT_js("44%")});
return obj36231;
})(),"children":[(function (){var G__36249 = "header";
var G__36250 = (function (){var obj36254 = ({"className":"modal-card-head","children":(function (){var G__36263 = "p";
var G__36264 = (function (){var obj36271 = ({"className":"modal-card-title","children":title});
return obj36271;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36263,G__36264) : helix.core.jsx.call(null,G__36263,G__36264));
})()});
return obj36254;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36249,G__36250) : helix.core.jsx.call(null,G__36249,G__36250));
})(),(function (){var G__36280 = "section";
var G__36281 = (function (){var obj36284 = ({"className":"modal-card-body","children":(function (){var G__36285 = "div";
var G__36286 = (function (){var obj36288 = ({"className":"media","children":(function (){var G__36289 = "div";
var G__36290 = (function (){var obj36295 = ({"className":"media-content","children":(function (){var G__36298 = "p";
var G__36299 = (function (){var obj36305 = ({"children":text});
return obj36305;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36298,G__36299) : helix.core.jsx.call(null,G__36298,G__36299));
})()});
return obj36295;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36289,G__36290) : helix.core.jsx.call(null,G__36289,G__36290));
})()});
return obj36288;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36285,G__36286) : helix.core.jsx.call(null,G__36285,G__36286));
})()});
return obj36284;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36280,G__36281) : helix.core.jsx.call(null,G__36280,G__36281));
})(),(function (){var G__36333 = "footer";
var G__36334 = (function (){var obj36339 = ({"className":"modal-card-foot","children":(function (){var G__36352 = "button";
var G__36353 = (function (){var obj36364 = ({"className":"button is-info","onClick":on_close,"children":"OK"});
return obj36364;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36352,G__36353) : helix.core.jsx.call(null,G__36352,G__36353));
})()});
return obj36339;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36333,G__36334) : helix.core.jsx.call(null,G__36333,G__36334));
})()]});
return obj36227;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36216,G__36217) : helix.core.jsxs.call(null,G__36216,G__36217));
})()});
return obj36207;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36186,G__36187) : helix.core.jsx.call(null,G__36186,G__36187));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__36383 = G__36135;
(G__36383.displayName = "app.ui.shared.components.modal/info");

return G__36383;
} else {
return G__36135;
}
})();




app.ui.shared.components.modal.settings = (function (){var G__36430 = (function app$ui$shared$components$modal$settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__36442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36439,(0),null);
var map__36442__$1 = cljs.core.__destructure_map(map__36442);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36442__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36442__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36442__$1,new cljs.core.Keyword(null,"on-default","on-default",-1285252222));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36442__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36442__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__36469 = "div";
var G__36470 = (function (){var obj36479 = ({"className":"modal","children":[(function (){var G__36485 = "div";
var G__36486 = (function (){var obj36490 = ({"className":"modal-background"});
return obj36490;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36485,G__36486) : helix.core.jsx.call(null,G__36485,G__36486));
})(),(function (){var G__36495 = "div";
var G__36496 = (function (){var obj36500 = ({"className":"modal-card","style":(function (){var obj36502 = ({"width":helix.impl.props.__GT_js((480))});
return obj36502;
})(),"children":[(function (){var G__36504 = "header";
var G__36505 = (function (){var obj36507 = ({"className":"modal-card-head","children":[(function (){var G__36508 = "p";
var G__36509 = (function (){var obj36512 = ({"className":"modal-card-title","children":title});
return obj36512;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36508,G__36509) : helix.core.jsx.call(null,G__36508,G__36509));
})(),(cljs.core.truth_(on_close)?(function (){var G__36513 = "button";
var G__36514 = (function (){var obj36519 = ({"className":"delete is-medium","onClick":on_close});
return obj36519;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36513,G__36514) : helix.core.jsx.call(null,G__36513,G__36514));
})():null)]});
return obj36507;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36504,G__36505) : helix.core.jsxs.call(null,G__36504,G__36505));
})(),(function (){var G__36542 = "section";
var G__36543 = (function (){var obj36545 = ({"className":"modal-card-body","children":children});
return obj36545;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36542,G__36543) : helix.core.jsx.call(null,G__36542,G__36543));
})(),(function (){var G__36548 = "footer";
var G__36549 = (function (){var obj36553 = ({"className":"modal-card-foot","style":(function (){var obj36555 = ({"display":helix.impl.props.__GT_js("flex"),"justifyContent":helix.impl.props.__GT_js("space-between"),"alignItems":helix.impl.props.__GT_js("center")});
return obj36555;
})(),"children":[(function (){var G__36561 = "button";
var G__36562 = (function (){var obj36564 = ({"className":"button","onClick":on_default,"children":"Restore Defaults"});
return obj36564;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36561,G__36562) : helix.core.jsx.call(null,G__36561,G__36562));
})(),(function (){var G__36575 = "button";
var G__36576 = (function (){var obj36578 = ({"className":"button primary","onClick":on_done,"children":"Done"});
return obj36578;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36575,G__36576) : helix.core.jsx.call(null,G__36575,G__36576));
})()]});
return obj36553;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36548,G__36549) : helix.core.jsxs.call(null,G__36548,G__36549));
})()]});
return obj36500;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36495,G__36496) : helix.core.jsxs.call(null,G__36495,G__36496));
})()]});
return obj36479;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36469,G__36470) : helix.core.jsxs.call(null,G__36469,G__36470));
});
if(goog.DEBUG === true){
var G__36580 = G__36430;
(G__36580.displayName = "app.ui.shared.components.modal/settings");

return G__36580;
} else {
return G__36430;
}
})();




//# sourceMappingURL=app.ui.shared.components.modal.js.map
