goog.provide('app.connect.limiter_burner');

app.connect.limiter_burner.burner_limiter = (function (){var G__41804 = (function app$connect$limiter_burner$burner_limiter_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__41805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var limiter_low_level_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
var limiter_low_level_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-full-screen","limiter-low-level-full-screen",-1274562341)], null));
var G__41808 = helix.core.Fragment;
var G__41809 = ({"children": [(function (){var G__41810 = limiter_low_level_id;
switch (G__41810) {
case "none":
var G__41811 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__41812 = (function (){var obj41814 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj41814;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41811,G__41812) : helix.core.jsx.call(null,G__41811,G__41812));

break;
case "URS 60":
var G__41815 = app.connect.URS_60.URS_60.URS_60;
var G__41816 = (function (){var obj41818 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj41818;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41815,G__41816) : helix.core.jsx.call(null,G__41815,G__41816));

break;
default:
return null;

}
})(),(function (){var G__41819 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__41820 = (function (){var obj41822 = ({"show":limiter_low_level_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),false], null));
}),"children":(function (){var G__41823 = limiter_low_level_id;
switch (G__41823) {
case "URS 60":
var G__41824 = app.connect.URS_60.URS_60.URS_60;
var G__41825 = (function (){var obj41827 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj41827;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41824,G__41825) : helix.core.jsx.call(null,G__41824,G__41825));

break;
default:
return null;

}
})()});
return obj41822;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41819,G__41820) : helix.core.jsx.call(null,G__41819,G__41820));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41808,G__41809) : helix.core.jsxs.call(null,G__41808,G__41809));
});
if(goog.DEBUG === true){
var G__41828 = G__41804;
(G__41828.displayName = "app.connect.limiter-burner/burner-limiter");

return G__41828;
} else {
return G__41804;
}
})();




//# sourceMappingURL=app.connect.limiter_burner.js.map
