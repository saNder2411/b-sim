goog.provide('app.ui.kits.connect.limiter_low_level');

app.ui.kits.connect.limiter_low_level.limiter_low_level = (function (){var G__36938 = (function app$ui$kits$connect$limiter_low_level$limiter_low_level_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var low_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("low-limiter","id","low-limiter/id",-654315003)], null));
var show_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-low-limiter","data-by-path","current-low-limiter/data-by-path",633729601),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var G__36950 = helix.core.Fragment;
var G__36951 = ({"children": [(function (){var G__36956 = low_limiter_id;
switch (G__36956) {
case "none":
var G__36962 = app.ui.shared.components.controller.placeholder;
var G__36963 = (function (){var obj36970 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj36970;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36962,G__36963) : helix.core.jsx.call(null,G__36962,G__36963));

break;
case "URS 60":
var G__36975 = app.ui.kits.connect.URS_60.URS_60.URS_60;
var G__36976 = (function (){var obj36982 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj36982;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36975,G__36976) : helix.core.jsx.call(null,G__36975,G__36976));

break;
default:
return null;

}
})(),(function (){var G__36992 = app.ui.shared.components.controller.full_screen;
var G__36993 = (function (){var obj36999 = ({"show":show_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-low-limiter","change","current-low-limiter/change",-1735296125),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),false], null)], null));
}),"children":(function (){var G__37035 = low_limiter_id;
switch (G__37035) {
case "URS 60":
var G__37040 = app.ui.kits.connect.URS_60.URS_60.URS_60;
var G__37041 = (function (){var obj37047 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj37047;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37040,G__37041) : helix.core.jsx.call(null,G__37040,G__37041));

break;
default:
return null;

}
})()});
return obj36999;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36992,G__36993) : helix.core.jsx.call(null,G__36992,G__36993));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36950,G__36951) : helix.core.jsxs.call(null,G__36950,G__36951));
});
if(goog.DEBUG === true){
var G__37054 = G__36938;
(G__37054.displayName = "app.ui.kits.connect.limiter-low-level/limiter-low-level");

return G__37054;
} else {
return G__36938;
}
})();




//# sourceMappingURL=app.ui.kits.connect.limiter_low_level.js.map
