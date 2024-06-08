goog.provide('app.connect.controller_level');

app.connect.controller_level.controller_level = (function (){var G__28952 = (function app$connect$controller_level$controller_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28959 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var level_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
var level_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-full-screen","level-controller-full-screen",143784850)], null));
var G__28963 = helix.core.Fragment;
var G__28964 = ({"children": [(function (){var G__28965 = level_controller_id;
switch (G__28965) {
case "none":
var G__28969 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__28970 = (function (){var obj28974 = ({"x":"72%","y":"1.6%","w":"13.5%","title":"Level"});
return obj28974;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28969,G__28970) : helix.core.jsx.call(null,G__28969,G__28970));

break;
case "NRR-2-60":
var G__28980 = app.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__28981 = (function (){var obj28983 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj28983;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28980,G__28981) : helix.core.jsx.call(null,G__28980,G__28981));

break;
case "NRR-2-60-3C":
var G__28984 = app.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__28985 = (function (){var obj28990 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj28990;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28984,G__28985) : helix.core.jsx.call(null,G__28984,G__28985));

break;
case "NRR-2-61":
var G__28993 = app.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__28994 = (function (){var obj28998 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj28998;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28993,G__28994) : helix.core.jsx.call(null,G__28993,G__28994));

break;
case "NRR-2-61-3C":
var G__29001 = app.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__29002 = (function (){var obj29006 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj29006;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29001,G__29002) : helix.core.jsx.call(null,G__29001,G__29002));

break;
default:
return null;

}
})(),(function (){var G__29011 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__29012 = (function (){var obj29014 = ({"show":level_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-level-controller-full-screen","change-level-controller-full-screen",-1646019656),false], null));
}),"children":(function (){var G__29019 = level_controller_id;
switch (G__29019) {
case "NRR-2-60":
var G__29020 = app.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__29021 = (function (){var obj29025 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29025;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29020,G__29021) : helix.core.jsx.call(null,G__29020,G__29021));

break;
case "NRR-2-60-3C":
var G__29034 = app.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__29035 = (function (){var obj29043 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29043;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29034,G__29035) : helix.core.jsx.call(null,G__29034,G__29035));

break;
case "NRR-2-61":
var G__29046 = app.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__29047 = (function (){var obj29049 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29049;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29046,G__29047) : helix.core.jsx.call(null,G__29046,G__29047));

break;
case "NRR-2-61-3C":
var G__29052 = app.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__29053 = (function (){var obj29059 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29059;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29052,G__29053) : helix.core.jsx.call(null,G__29052,G__29053));

break;
default:
return null;

}
})()});
return obj29014;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29011,G__29012) : helix.core.jsx.call(null,G__29011,G__29012));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28963,G__28964) : helix.core.jsxs.call(null,G__28963,G__28964));
});
if(goog.DEBUG === true){
var G__29084 = G__28952;
(G__29084.displayName = "app.connect.controller-level/controller-level");

return G__29084;
} else {
return G__28952;
}
})();




//# sourceMappingURL=app.connect.controller_level.js.map
