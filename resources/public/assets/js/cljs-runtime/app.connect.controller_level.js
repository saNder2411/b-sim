goog.provide('app.connect.controller_level');

app.connect.controller_level.controller_level = (function (){var G__41421 = (function app$connect$controller_level$controller_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__41426 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var level_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
var level_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850)], null));
var G__41431 = helix.core.Fragment;
var G__41432 = ({"children": [(function (){var G__41433 = level_controller_id;
switch (G__41433) {
case "none":
var G__41434 = app.shared.components.controller.placeholder;
var G__41435 = (function (){var obj41439 = ({"x":"72%","y":"1.6%","w":"13.5%","title":"Level"});
return obj41439;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41434,G__41435) : helix.core.jsx.call(null,G__41434,G__41435));

break;
case "NRR 2-60":
var G__41442 = app.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__41443 = (function (){var obj41445 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj41445;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41442,G__41443) : helix.core.jsx.call(null,G__41442,G__41443));

break;
case "NRR 2-60 3C":
var G__41450 = app.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__41451 = (function (){var obj41455 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj41455;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41450,G__41451) : helix.core.jsx.call(null,G__41450,G__41451));

break;
case "NRR 2-61":
var G__41458 = app.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__41459 = (function (){var obj41461 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj41461;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41458,G__41459) : helix.core.jsx.call(null,G__41458,G__41459));

break;
case "NRR 2-61 3C":
var G__41468 = app.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__41469 = (function (){var obj41471 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj41471;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41468,G__41469) : helix.core.jsx.call(null,G__41468,G__41469));

break;
default:
return null;

}
})(),(function (){var G__41482 = app.shared.components.controller.full_screen;
var G__41483 = (function (){var obj41485 = ({"show":level_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),false], null));
}),"children":(function (){var G__41486 = level_controller_id;
switch (G__41486) {
case "NRR 2-60":
var G__41493 = app.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__41494 = (function (){var obj41500 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj41500;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41493,G__41494) : helix.core.jsx.call(null,G__41493,G__41494));

break;
case "NRR 2-60 3C":
var G__41505 = app.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__41506 = (function (){var obj41510 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj41510;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41505,G__41506) : helix.core.jsx.call(null,G__41505,G__41506));

break;
case "NRR 2-61":
var G__41537 = app.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__41538 = (function (){var obj41544 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj41544;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41537,G__41538) : helix.core.jsx.call(null,G__41537,G__41538));

break;
case "NRR 2-61 3C":
var G__41551 = app.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__41552 = (function (){var obj41555 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj41555;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41551,G__41552) : helix.core.jsx.call(null,G__41551,G__41552));

break;
default:
return null;

}
})()});
return obj41485;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41482,G__41483) : helix.core.jsx.call(null,G__41482,G__41483));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41431,G__41432) : helix.core.jsxs.call(null,G__41431,G__41432));
});
if(goog.DEBUG === true){
var G__41565 = G__41421;
(G__41565.displayName = "app.connect.controller-level/controller-level");

return G__41565;
} else {
return G__41421;
}
})();




//# sourceMappingURL=app.connect.controller_level.js.map
