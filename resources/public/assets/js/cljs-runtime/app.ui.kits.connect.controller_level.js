goog.provide('app.ui.kits.connect.controller_level');

app.ui.kits.connect.controller_level.controller_level = (function (){var G__29537 = (function app$ui$kits$connect$controller_level$controller_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var level_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
var level_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-controller-data-by-path","current-level-controller-data-by-path",1144191062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var G__29544 = helix.core.Fragment;
var G__29545 = ({"children": [(function (){var G__29546 = level_controller_id;
switch (G__29546) {
case "none":
var G__29550 = app.ui.shared.components.controller.placeholder;
var G__29551 = (function (){var obj29557 = ({"x":"72%","y":"1.6%","w":"13.5%","title":"Level"});
return obj29557;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29550,G__29551) : helix.core.jsx.call(null,G__29550,G__29551));

break;
case "NRR 2-60":
var G__29560 = app.ui.kits.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__29561 = (function (){var obj29565 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29565;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29560,G__29561) : helix.core.jsx.call(null,G__29560,G__29561));

break;
case "NRR 2-60 3C":
var G__29569 = app.ui.kits.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__29570 = (function (){var obj29572 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29572;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29569,G__29570) : helix.core.jsx.call(null,G__29569,G__29570));

break;
case "NRR 2-61":
var G__29577 = app.ui.kits.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__29578 = (function (){var obj29580 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29580;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29577,G__29578) : helix.core.jsx.call(null,G__29577,G__29578));

break;
case "NRR 2-61 3C":
var G__29583 = app.ui.kits.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__29584 = (function (){var obj29588 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29588;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29583,G__29584) : helix.core.jsx.call(null,G__29583,G__29584));

break;
default:
return null;

}
})(),(function (){var G__29589 = app.ui.shared.components.controller.full_screen;
var G__29590 = (function (){var obj29592 = ({"show":level_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-level-controller","change-current-level-controller",809952572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),false], null)], null));
}),"children":(function (){var G__29595 = level_controller_id;
switch (G__29595) {
case "NRR 2-60":
var G__29598 = app.ui.kits.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__29599 = (function (){var obj29601 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29601;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29598,G__29599) : helix.core.jsx.call(null,G__29598,G__29599));

break;
case "NRR 2-60 3C":
var G__29602 = app.ui.kits.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__29603 = (function (){var obj29608 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29608;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29602,G__29603) : helix.core.jsx.call(null,G__29602,G__29603));

break;
case "NRR 2-61":
var G__29616 = app.ui.kits.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__29617 = (function (){var obj29619 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29619;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29616,G__29617) : helix.core.jsx.call(null,G__29616,G__29617));

break;
case "NRR 2-61 3C":
var G__29625 = app.ui.kits.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__29626 = (function (){var obj29628 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29628;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29625,G__29626) : helix.core.jsx.call(null,G__29625,G__29626));

break;
default:
return null;

}
})()});
return obj29592;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29589,G__29590) : helix.core.jsx.call(null,G__29589,G__29590));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29544,G__29545) : helix.core.jsxs.call(null,G__29544,G__29545));
});
if(goog.DEBUG === true){
var G__29637 = G__29537;
(G__29637.displayName = "app.ui.kits.connect.controller-level/controller-level");

return G__29637;
} else {
return G__29537;
}
})();




//# sourceMappingURL=app.ui.kits.connect.controller_level.js.map
