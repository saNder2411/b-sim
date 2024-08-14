goog.provide('app.kits.connect.controller_level');

app.kits.connect.controller_level.controller_level = (function (){var G__44715 = (function app$kits$connect$controller_level$controller_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__44718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var level_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
var level_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-:full-screen?","level-controller-:full-screen?",143784850)], null));
var G__44727 = helix.core.Fragment;
var G__44728 = ({"children": [(function (){var G__44731 = level_controller_id;
switch (G__44731) {
case "none":
var G__44732 = app.shared.components.controller.placeholder;
var G__44733 = (function (){var obj44737 = ({"x":"72%","y":"1.6%","w":"13.5%","title":"Level"});
return obj44737;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44732,G__44733) : helix.core.jsx.call(null,G__44732,G__44733));

break;
case "NRR 2-60":
var G__44742 = app.kits.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__44743 = (function (){var obj44747 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj44747;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44742,G__44743) : helix.core.jsx.call(null,G__44742,G__44743));

break;
case "NRR 2-60 3C":
var G__44750 = app.kits.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__44751 = (function (){var obj44753 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj44753;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44750,G__44751) : helix.core.jsx.call(null,G__44750,G__44751));

break;
case "NRR 2-61":
var G__44758 = app.kits.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__44759 = (function (){var obj44763 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj44763;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44758,G__44759) : helix.core.jsx.call(null,G__44758,G__44759));

break;
case "NRR 2-61 3C":
var G__44766 = app.kits.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__44767 = (function (){var obj44769 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj44769;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44766,G__44767) : helix.core.jsx.call(null,G__44766,G__44767));

break;
default:
return null;

}
})(),(function (){var G__44772 = app.shared.components.controller.full_screen;
var G__44773 = (function (){var obj44775 = ({"show":level_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-level-controller-:full-screen?","change-level-controller-:full-screen?",-1646019656),false], null));
}),"children":(function (){var G__44777 = level_controller_id;
switch (G__44777) {
case "NRR 2-60":
var G__44780 = app.kits.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__44782 = (function (){var obj44786 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj44786;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44780,G__44782) : helix.core.jsx.call(null,G__44780,G__44782));

break;
case "NRR 2-60 3C":
var G__44790 = app.kits.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__44791 = (function (){var obj44793 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj44793;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44790,G__44791) : helix.core.jsx.call(null,G__44790,G__44791));

break;
case "NRR 2-61":
var G__44797 = app.kits.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__44798 = (function (){var obj44803 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj44803;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44797,G__44798) : helix.core.jsx.call(null,G__44797,G__44798));

break;
case "NRR 2-61 3C":
var G__44811 = app.kits.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__44812 = (function (){var obj44818 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj44818;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44811,G__44812) : helix.core.jsx.call(null,G__44811,G__44812));

break;
default:
return null;

}
})()});
return obj44775;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44772,G__44773) : helix.core.jsx.call(null,G__44772,G__44773));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__44727,G__44728) : helix.core.jsxs.call(null,G__44727,G__44728));
});
if(goog.DEBUG === true){
var G__44837 = G__44715;
(G__44837.displayName = "app.kits.connect.controller-level/controller-level");

return G__44837;
} else {
return G__44715;
}
})();




//# sourceMappingURL=app.kits.connect.controller_level.js.map
