goog.provide('app.connect.controller_level');

app.connect.controller_level.controller_level = (function (){var G__64538 = (function app$connect$controller_level$controller_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__64548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var level_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
var level_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850)], null));
var G__64559 = helix.core.Fragment;
var G__64560 = ({"children": [(function (){var G__64562 = level_controller_id;
switch (G__64562) {
case "none":
var G__64573 = app.shared.components.controller.placeholder;
var G__64574 = (function (){var obj64578 = ({"x":"72%","y":"1.6%","w":"13.5%","title":"Level"});
return obj64578;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64573,G__64574) : helix.core.jsx.call(null,G__64573,G__64574));

break;
case "NRR 2-60":
var G__64585 = app.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__64586 = (function (){var obj64594 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj64594;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64585,G__64586) : helix.core.jsx.call(null,G__64585,G__64586));

break;
case "NRR 2-60 3C":
var G__64600 = app.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__64601 = (function (){var obj64609 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj64609;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64600,G__64601) : helix.core.jsx.call(null,G__64600,G__64601));

break;
case "NRR 2-61":
var G__64614 = app.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__64615 = (function (){var obj64617 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj64617;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64614,G__64615) : helix.core.jsx.call(null,G__64614,G__64615));

break;
case "NRR 2-61 3C":
var G__64626 = app.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__64627 = (function (){var obj64630 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj64630;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64626,G__64627) : helix.core.jsx.call(null,G__64626,G__64627));

break;
default:
return null;

}
})(),(function (){var G__64633 = app.shared.components.controller.full_screen;
var G__64634 = (function (){var obj64636 = ({"show":level_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),false], null));
}),"children":(function (){var G__64637 = level_controller_id;
switch (G__64637) {
case "NRR 2-60":
var G__64638 = app.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__64639 = (function (){var obj64641 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj64641;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64638,G__64639) : helix.core.jsx.call(null,G__64638,G__64639));

break;
case "NRR 2-60 3C":
var G__64645 = app.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__64646 = (function (){var obj64648 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj64648;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64645,G__64646) : helix.core.jsx.call(null,G__64645,G__64646));

break;
case "NRR 2-61":
var G__64650 = app.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__64651 = (function (){var obj64653 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj64653;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64650,G__64651) : helix.core.jsx.call(null,G__64650,G__64651));

break;
case "NRR 2-61 3C":
var G__64656 = app.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__64657 = (function (){var obj64659 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj64659;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64656,G__64657) : helix.core.jsx.call(null,G__64656,G__64657));

break;
default:
return null;

}
})()});
return obj64636;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64633,G__64634) : helix.core.jsx.call(null,G__64633,G__64634));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__64559,G__64560) : helix.core.jsxs.call(null,G__64559,G__64560));
});
if(goog.DEBUG === true){
var G__64660 = G__64538;
(G__64660.displayName = "app.connect.controller-level/controller-level");

return G__64660;
} else {
return G__64538;
}
})();




//# sourceMappingURL=app.connect.controller_level.js.map
