goog.provide('app.ui.kits.connect.limiter_high_level');

app.ui.kits.connect.limiter_high_level.limiter_high_level = (function (){var G__32145 = (function app$ui$kits$connect$limiter_high_level$limiter_high_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var high_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter-id","high-limiter-id",1297275918)], null));
var show_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-high-limiter-data-by-path","current-high-limiter-data-by-path",-1991404189),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var G__32149 = helix.core.Fragment;
var G__32150 = ({"children": [(function (){var G__32151 = high_limiter_id;
switch (G__32151) {
case "none":
var G__32152 = app.ui.shared.components.controller.placeholder;
var G__32153 = (function (){var obj32155 = ({"x":"44%","y":"1.6%","w":"13.5%","title":"Limiter"});
return obj32155;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32152,G__32153) : helix.core.jsx.call(null,G__32152,G__32153));

break;
case "URS 61":
var G__32156 = app.ui.kits.connect.URS_61.URS_61.URS_61;
var G__32157 = (function (){var obj32159 = ({"x":"44%","y":"1.6%","w":"13.5%"});
return obj32159;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32156,G__32157) : helix.core.jsx.call(null,G__32156,G__32157));

break;
default:
return null;

}
})(),(function (){var G__32160 = app.ui.shared.components.controller.full_screen;
var G__32161 = (function (){var obj32163 = ({"show":show_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-high-limiter","change-current-high-limiter",-1478754059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),false], null)], null));
}),"children":(function (){var G__32164 = high_limiter_id;
switch (G__32164) {
case "URS 61":
var G__32165 = app.ui.kits.connect.URS_61.URS_61.URS_61;
var G__32166 = (function (){var obj32168 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj32168;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32165,G__32166) : helix.core.jsx.call(null,G__32165,G__32166));

break;
default:
return null;

}
})()});
return obj32163;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32160,G__32161) : helix.core.jsx.call(null,G__32160,G__32161));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32149,G__32150) : helix.core.jsxs.call(null,G__32149,G__32150));
});
if(goog.DEBUG === true){
var G__32169 = G__32145;
(G__32169.displayName = "app.ui.kits.connect.limiter-high-level/limiter-high-level");

return G__32169;
} else {
return G__32145;
}
})();




//# sourceMappingURL=app.ui.kits.connect.limiter_high_level.js.map
