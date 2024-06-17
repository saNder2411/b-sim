goog.provide('app.connect.limiter_high_level');

app.connect.limiter_high_level.limiter_high_level = (function (){var G__41910 = (function app$connect$limiter_high_level$limiter_high_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__41911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var limiter_high_level_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
var limiter_high_level_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-high-level-full-screen","limiter-high-level-full-screen",-1616504973)], null));
var G__41917 = helix.core.Fragment;
var G__41918 = ({"children": [(function (){var G__41921 = limiter_high_level_id;
switch (G__41921) {
case "none":
var G__41924 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__41926 = (function (){var obj41929 = ({"x":"44%","y":"1.6%","w":"13.5%","title":"Limiter"});
return obj41929;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41924,G__41926) : helix.core.jsx.call(null,G__41924,G__41926));

break;
case "URS 61":
var G__41933 = app.connect.URS_61.URS_61.URS_61;
var G__41934 = (function (){var obj41938 = ({"x":"44%","y":"1.6%","w":"13.5%"});
return obj41938;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41933,G__41934) : helix.core.jsx.call(null,G__41933,G__41934));

break;
default:
return null;

}
})(),(function (){var G__41943 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__41944 = (function (){var obj41946 = ({"show":limiter_high_level_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-limiter-high-level-full-screen","change-limiter-high-level-full-screen",372169192),false], null));
}),"children":(function (){var G__41948 = limiter_high_level_id;
switch (G__41948) {
case "URS 61":
var G__41953 = app.connect.URS_61.URS_61.URS_61;
var G__41954 = (function (){var obj41956 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj41956;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41953,G__41954) : helix.core.jsx.call(null,G__41953,G__41954));

break;
default:
return null;

}
})()});
return obj41946;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41943,G__41944) : helix.core.jsx.call(null,G__41943,G__41944));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41917,G__41918) : helix.core.jsxs.call(null,G__41917,G__41918));
});
if(goog.DEBUG === true){
var G__41958 = G__41910;
(G__41958.displayName = "app.connect.limiter-high-level/limiter-high-level");

return G__41958;
} else {
return G__41910;
}
})();




//# sourceMappingURL=app.connect.limiter_high_level.js.map
