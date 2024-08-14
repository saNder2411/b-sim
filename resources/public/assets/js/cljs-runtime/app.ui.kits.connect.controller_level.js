goog.provide('app.ui.kits.connect.controller_level');

app.ui.kits.connect.controller_level.controller_level = (function (){var G__29030 = (function app$ui$kits$connect$controller_level$controller_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29035 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var level_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
var level_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-controller-data-by-path","current-level-controller-data-by-path",1144191062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var G__29043 = helix.core.Fragment;
var G__29044 = ({"children": [(function (){var G__29050 = level_controller_id;
switch (G__29050) {
case "none":
var G__29053 = app.ui.shared.components.controller.placeholder;
var G__29054 = (function (){var obj29066 = ({"x":"72%","y":"1.6%","w":"13.5%","title":"Level"});
return obj29066;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29053,G__29054) : helix.core.jsx.call(null,G__29053,G__29054));

break;
case "NRR 2-60":
var G__29071 = app.ui.kits.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__29072 = (function (){var obj29078 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29078;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29071,G__29072) : helix.core.jsx.call(null,G__29071,G__29072));

break;
case "NRR 2-60 3C":
var G__29085 = app.ui.kits.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__29087 = (function (){var obj29093 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29093;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29085,G__29087) : helix.core.jsx.call(null,G__29085,G__29087));

break;
case "NRR 2-61":
var G__29104 = app.ui.kits.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__29105 = (function (){var obj29109 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29109;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29104,G__29105) : helix.core.jsx.call(null,G__29104,G__29105));

break;
case "NRR 2-61 3C":
var G__29116 = app.ui.kits.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__29117 = (function (){var obj29121 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29121;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29116,G__29117) : helix.core.jsx.call(null,G__29116,G__29117));

break;
default:
return null;

}
})(),(function (){var G__29129 = app.ui.shared.components.controller.full_screen;
var G__29130 = (function (){var obj29134 = ({"show":level_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-level-controller","change-current-level-controller",809952572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),false], null)], null));
}),"children":(function (){var G__29139 = level_controller_id;
switch (G__29139) {
case "NRR 2-60":
var G__29140 = app.ui.kits.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__29143 = (function (){var obj29147 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29147;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29140,G__29143) : helix.core.jsx.call(null,G__29140,G__29143));

break;
case "NRR 2-60 3C":
var G__29153 = app.ui.kits.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__29154 = (function (){var obj29160 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29160;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29153,G__29154) : helix.core.jsx.call(null,G__29153,G__29154));

break;
case "NRR 2-61":
var G__29163 = app.ui.kits.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__29164 = (function (){var obj29170 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29170;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29163,G__29164) : helix.core.jsx.call(null,G__29163,G__29164));

break;
case "NRR 2-61 3C":
var G__29176 = app.ui.kits.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__29177 = (function (){var obj29183 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29183;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29176,G__29177) : helix.core.jsx.call(null,G__29176,G__29177));

break;
default:
return null;

}
})()});
return obj29134;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29129,G__29130) : helix.core.jsx.call(null,G__29129,G__29130));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29043,G__29044) : helix.core.jsxs.call(null,G__29043,G__29044));
});
if(goog.DEBUG === true){
var G__29192 = G__29030;
(G__29192.displayName = "app.ui.kits.connect.controller-level/controller-level");

return G__29192;
} else {
return G__29030;
}
})();




//# sourceMappingURL=app.ui.kits.connect.controller_level.js.map
