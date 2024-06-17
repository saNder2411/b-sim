goog.provide('app.connect.controller_level');

app.connect.controller_level.controller_level = (function (){var G__44471 = (function app$connect$controller_level$controller_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__44472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var level_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
var level_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850)], null));
var G__44475 = helix.core.Fragment;
var G__44476 = ({"children": [(function (){var G__44477 = level_controller_id;
switch (G__44477) {
case "none":
var G__44478 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__44479 = (function (){var obj44481 = ({"x":"72%","y":"1.6%","w":"13.5%","title":"Level"});
return obj44481;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44478,G__44479) : helix.core.jsx.call(null,G__44478,G__44479));

break;
case "NRR 2-60":
var G__44482 = app.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__44483 = (function (){var obj44485 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj44485;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44482,G__44483) : helix.core.jsx.call(null,G__44482,G__44483));

break;
case "NRR 2-60 3C":
var G__44486 = app.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__44487 = (function (){var obj44489 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj44489;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44486,G__44487) : helix.core.jsx.call(null,G__44486,G__44487));

break;
case "NRR 2-61":
var G__44490 = app.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__44491 = (function (){var obj44493 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj44493;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44490,G__44491) : helix.core.jsx.call(null,G__44490,G__44491));

break;
case "NRR 2-61 3C":
var G__44494 = app.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__44495 = (function (){var obj44497 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj44497;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44494,G__44495) : helix.core.jsx.call(null,G__44494,G__44495));

break;
default:
return null;

}
})(),(function (){var G__44498 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__44499 = (function (){var obj44501 = ({"show":level_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),false], null));
}),"children":(function (){var G__44502 = level_controller_id;
switch (G__44502) {
case "NRR 2-60":
var G__44503 = app.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__44504 = (function (){var obj44506 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj44506;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44503,G__44504) : helix.core.jsx.call(null,G__44503,G__44504));

break;
case "NRR 2-60 3C":
var G__44507 = app.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__44508 = (function (){var obj44510 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj44510;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44507,G__44508) : helix.core.jsx.call(null,G__44507,G__44508));

break;
case "NRR 2-61":
var G__44511 = app.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__44512 = (function (){var obj44514 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj44514;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44511,G__44512) : helix.core.jsx.call(null,G__44511,G__44512));

break;
case "NRR 2-61 3C":
var G__44515 = app.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__44516 = (function (){var obj44518 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj44518;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44515,G__44516) : helix.core.jsx.call(null,G__44515,G__44516));

break;
default:
return null;

}
})()});
return obj44501;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44498,G__44499) : helix.core.jsx.call(null,G__44498,G__44499));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__44475,G__44476) : helix.core.jsxs.call(null,G__44475,G__44476));
});
if(goog.DEBUG === true){
var G__44519 = G__44471;
(G__44519.displayName = "app.connect.controller-level/controller-level");

return G__44519;
} else {
return G__44471;
}
})();




//# sourceMappingURL=app.connect.controller_level.js.map
