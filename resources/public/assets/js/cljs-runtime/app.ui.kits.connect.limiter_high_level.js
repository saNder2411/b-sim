goog.provide('app.ui.kits.connect.limiter_high_level');

app.ui.kits.connect.limiter_high_level.limiter_high_level = (function (){var G__36930 = (function app$ui$kits$connect$limiter_high_level$limiter_high_level_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var high_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("high-limiter","id","high-limiter/id",-1439627817)], null));
var show_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-high-limiter","data-by-path","current-high-limiter/data-by-path",-809667541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var G__36945 = helix.core.Fragment;
var G__36946 = ({"children": [(function (){var G__36949 = high_limiter_id;
switch (G__36949) {
case "none":
var G__36952 = app.ui.shared.components.controller.placeholder;
var G__36953 = (function (){var obj36959 = ({"x":"44%","y":"1.6%","w":"13.5%","title":"Limiter"});
return obj36959;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36952,G__36953) : helix.core.jsx.call(null,G__36952,G__36953));

break;
case "URS 61":
var G__36971 = app.ui.kits.connect.URS_61.URS_61.URS_61;
var G__36972 = (function (){var obj36974 = ({"x":"44%","y":"1.6%","w":"13.5%"});
return obj36974;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36971,G__36972) : helix.core.jsx.call(null,G__36971,G__36972));

break;
default:
return null;

}
})(),(function (){var G__36983 = app.ui.shared.components.controller.full_screen;
var G__36984 = (function (){var obj36989 = ({"show":show_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-high-limiter","change","current-high-limiter/change",-1635841687),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),false], null)], null));
}),"children":(function (){var G__37002 = high_limiter_id;
switch (G__37002) {
case "URS 61":
var G__37005 = app.ui.kits.connect.URS_61.URS_61.URS_61;
var G__37006 = (function (){var obj37012 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj37012;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37005,G__37006) : helix.core.jsx.call(null,G__37005,G__37006));

break;
default:
return null;

}
})()});
return obj36989;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36983,G__36984) : helix.core.jsx.call(null,G__36983,G__36984));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36945,G__36946) : helix.core.jsxs.call(null,G__36945,G__36946));
});
if(goog.DEBUG === true){
var G__37026 = G__36930;
(G__37026.displayName = "app.ui.kits.connect.limiter-high-level/limiter-high-level");

return G__37026;
} else {
return G__36930;
}
})();




//# sourceMappingURL=app.ui.kits.connect.limiter_high_level.js.map
