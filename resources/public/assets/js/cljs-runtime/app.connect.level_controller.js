goog.provide('app.connect.level_controller');

app.connect.level_controller.level_controller = (function (){var G__31495 = (function app$connect$level_controller$level_controller_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var level_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
var level_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850)], null));
var G__31499 = helix.core.Fragment;
var G__31500 = ({"children": [(function (){var G__31501 = level_controller_id;
switch (G__31501) {
case "none":
var G__31502 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__31503 = (function (){var obj31505 = ({"x":"72%","y":"1.6%","w":"13.5%","title":"Level"});
return obj31505;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31502,G__31503) : helix.core.jsx.call(null,G__31502,G__31503));

break;
case "NRR 2-60":
var G__31506 = app.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__31507 = (function (){var obj31509 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj31509;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31506,G__31507) : helix.core.jsx.call(null,G__31506,G__31507));

break;
case "NRR 2-60 3C":
var G__31510 = app.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__31511 = (function (){var obj31513 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj31513;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31510,G__31511) : helix.core.jsx.call(null,G__31510,G__31511));

break;
case "NRR 2-61":
var G__31514 = app.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__31515 = (function (){var obj31517 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj31517;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31514,G__31515) : helix.core.jsx.call(null,G__31514,G__31515));

break;
case "NRR 2-61 3C":
var G__31518 = app.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__31519 = (function (){var obj31521 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj31521;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31518,G__31519) : helix.core.jsx.call(null,G__31518,G__31519));

break;
default:
return null;

}
})(),(function (){var G__31522 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__31523 = (function (){var obj31525 = ({"show":level_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),false], null));
}),"children":(function (){var G__31526 = level_controller_id;
switch (G__31526) {
case "NRR 2-60":
var G__31527 = app.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__31528 = (function (){var obj31530 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj31530;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31527,G__31528) : helix.core.jsx.call(null,G__31527,G__31528));

break;
case "NRR 2-60 3C":
var G__31531 = app.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__31532 = (function (){var obj31534 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj31534;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31531,G__31532) : helix.core.jsx.call(null,G__31531,G__31532));

break;
case "NRR 2-61":
var G__31535 = app.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__31536 = (function (){var obj31538 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj31538;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31535,G__31536) : helix.core.jsx.call(null,G__31535,G__31536));

break;
case "NRR 2-61 3C":
var G__31539 = app.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__31540 = (function (){var obj31542 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj31542;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31539,G__31540) : helix.core.jsx.call(null,G__31539,G__31540));

break;
default:
return null;

}
})()});
return obj31525;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31522,G__31523) : helix.core.jsx.call(null,G__31522,G__31523));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31499,G__31500) : helix.core.jsxs.call(null,G__31499,G__31500));
});
if(goog.DEBUG === true){
var G__31543 = G__31495;
(G__31543.displayName = "app.connect.level-controller/level-controller");

return G__31543;
} else {
return G__31495;
}
})();




//# sourceMappingURL=app.connect.level_controller.js.map
