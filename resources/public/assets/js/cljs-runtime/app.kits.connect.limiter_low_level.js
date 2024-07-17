goog.provide('app.kits.connect.limiter_low_level');

app.kits.connect.limiter_low_level.limiter_low_level = (function (){var G__44787 = (function app$kits$connect$limiter_low_level$limiter_low_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__44799 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var limiter_low_level_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
var limiter_low_level_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-full-screen","limiter-low-level-full-screen",-1274562341)], null));
var G__44813 = helix.core.Fragment;
var G__44814 = ({"children": [(function (){var G__44819 = limiter_low_level_id;
switch (G__44819) {
case "none":
var G__44823 = app.shared.components.controller.placeholder;
var G__44825 = (function (){var obj44828 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj44828;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44823,G__44825) : helix.core.jsx.call(null,G__44823,G__44825));

break;
case "URS 60":
var G__44835 = app.kits.connect.URS_60.URS_60.URS_60;
var G__44836 = (function (){var obj44839 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj44839;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44835,G__44836) : helix.core.jsx.call(null,G__44835,G__44836));

break;
default:
return null;

}
})(),(function (){var G__44844 = app.shared.components.controller.full_screen;
var G__44845 = (function (){var obj44847 = ({"show":limiter_low_level_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),false], null));
}),"children":(function (){var G__44852 = limiter_low_level_id;
switch (G__44852) {
case "URS 60":
var G__44857 = app.kits.connect.URS_60.URS_60.URS_60;
var G__44858 = (function (){var obj44863 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj44863;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44857,G__44858) : helix.core.jsx.call(null,G__44857,G__44858));

break;
default:
return null;

}
})()});
return obj44847;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44844,G__44845) : helix.core.jsx.call(null,G__44844,G__44845));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__44813,G__44814) : helix.core.jsxs.call(null,G__44813,G__44814));
});
if(goog.DEBUG === true){
var G__44873 = G__44787;
(G__44873.displayName = "app.kits.connect.limiter-low-level/limiter-low-level");

return G__44873;
} else {
return G__44787;
}
})();




//# sourceMappingURL=app.kits.connect.limiter_low_level.js.map
