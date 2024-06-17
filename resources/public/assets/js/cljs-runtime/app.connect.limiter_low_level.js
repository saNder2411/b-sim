goog.provide('app.connect.limiter_low_level');

app.connect.limiter_low_level.limiter_low_level = (function (){var G__41909 = (function app$connect$limiter_low_level$limiter_low_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__41912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var limiter_low_level_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
var limiter_low_level_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-full-screen","limiter-low-level-full-screen",-1274562341)], null));
var G__41919 = helix.core.Fragment;
var G__41920 = ({"children": [(function (){var G__41922 = limiter_low_level_id;
switch (G__41922) {
case "none":
var G__41923 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__41925 = (function (){var obj41930 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj41930;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41923,G__41925) : helix.core.jsx.call(null,G__41923,G__41925));

break;
case "URS 60":
var G__41931 = app.connect.URS_60.URS_60.URS_60;
var G__41932 = (function (){var obj41936 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj41936;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41931,G__41932) : helix.core.jsx.call(null,G__41931,G__41932));

break;
default:
return null;

}
})(),(function (){var G__41939 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__41940 = (function (){var obj41942 = ({"show":limiter_low_level_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),false], null));
}),"children":(function (){var G__41947 = limiter_low_level_id;
switch (G__41947) {
case "URS 60":
var G__41949 = app.connect.URS_60.URS_60.URS_60;
var G__41950 = (function (){var obj41952 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj41952;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41949,G__41950) : helix.core.jsx.call(null,G__41949,G__41950));

break;
default:
return null;

}
})()});
return obj41942;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41939,G__41940) : helix.core.jsx.call(null,G__41939,G__41940));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41919,G__41920) : helix.core.jsxs.call(null,G__41919,G__41920));
});
if(goog.DEBUG === true){
var G__41957 = G__41909;
(G__41957.displayName = "app.connect.limiter-low-level/limiter-low-level");

return G__41957;
} else {
return G__41909;
}
})();




//# sourceMappingURL=app.connect.limiter_low_level.js.map
