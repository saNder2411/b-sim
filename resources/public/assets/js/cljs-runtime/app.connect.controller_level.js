goog.provide('app.connect.controller_level');

app.connect.controller_level.controller_level = (function (){var G__29917 = (function app$connect$controller_level$controller_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var level_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
var level_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850)], null));
var G__29926 = helix.core.Fragment;
var G__29927 = ({"children": [(function (){var G__29929 = level_controller_id;
switch (G__29929) {
case "none":
var G__29934 = app.shared.components.controller.placeholder;
var G__29935 = (function (){var obj29941 = ({"x":"72%","y":"1.6%","w":"13.5%","title":"Level"});
return obj29941;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29934,G__29935) : helix.core.jsx.call(null,G__29934,G__29935));

break;
case "NRR 2-60":
var G__29946 = app.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__29947 = (function (){var obj29949 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29949;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29946,G__29947) : helix.core.jsx.call(null,G__29946,G__29947));

break;
case "NRR 2-60 3C":
var G__29958 = app.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__29959 = (function (){var obj29963 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29963;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29958,G__29959) : helix.core.jsx.call(null,G__29958,G__29959));

break;
case "NRR 2-61":
var G__29974 = app.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__29975 = (function (){var obj29979 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29979;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29974,G__29975) : helix.core.jsx.call(null,G__29974,G__29975));

break;
case "NRR 2-61 3C":
var G__29983 = app.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__29984 = (function (){var obj29990 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29990;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29983,G__29984) : helix.core.jsx.call(null,G__29983,G__29984));

break;
default:
return null;

}
})(),(function (){var G__29997 = app.shared.components.controller.full_screen;
var G__29998 = (function (){var obj30004 = ({"show":level_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),false], null));
}),"children":(function (){var G__30011 = level_controller_id;
switch (G__30011) {
case "NRR 2-60":
var G__30017 = app.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__30018 = (function (){var obj30022 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj30022;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30017,G__30018) : helix.core.jsx.call(null,G__30017,G__30018));

break;
case "NRR 2-60 3C":
var G__30027 = app.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__30029 = (function (){var obj30032 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj30032;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30027,G__30029) : helix.core.jsx.call(null,G__30027,G__30029));

break;
case "NRR 2-61":
var G__30036 = app.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__30037 = (function (){var obj30041 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj30041;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30036,G__30037) : helix.core.jsx.call(null,G__30036,G__30037));

break;
case "NRR 2-61 3C":
var G__30046 = app.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__30047 = (function (){var obj30051 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj30051;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30046,G__30047) : helix.core.jsx.call(null,G__30046,G__30047));

break;
default:
return null;

}
})()});
return obj30004;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29997,G__29998) : helix.core.jsx.call(null,G__29997,G__29998));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29926,G__29927) : helix.core.jsxs.call(null,G__29926,G__29927));
});
if(goog.DEBUG === true){
var G__30064 = G__29917;
(G__30064.displayName = "app.connect.controller-level/controller-level");

return G__30064;
} else {
return G__29917;
}
})();




//# sourceMappingURL=app.connect.controller_level.js.map
