goog.provide('app.connect.limiter_low_level');

app.connect.limiter_low_level.limiter_low_level = (function (){var G__65113 = (function app$connect$limiter_low_level$limiter_low_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var limiter_low_level_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
var limiter_low_level_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-full-screen","limiter-low-level-full-screen",-1274562341)], null));
var G__65123 = helix.core.Fragment;
var G__65124 = ({"children": [(function (){var G__65126 = limiter_low_level_id;
switch (G__65126) {
case "none":
var G__65129 = app.shared.components.controller.placeholder;
var G__65130 = (function (){var obj65134 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj65134;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65129,G__65130) : helix.core.jsx.call(null,G__65129,G__65130));

break;
case "URS 60":
var G__65135 = app.connect.URS_60.URS_60.URS_60;
var G__65136 = (function (){var obj65140 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj65140;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65135,G__65136) : helix.core.jsx.call(null,G__65135,G__65136));

break;
default:
return null;

}
})(),(function (){var G__65143 = app.shared.components.controller.full_screen;
var G__65144 = (function (){var obj65148 = ({"show":limiter_low_level_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-limiter-low-level-full-screen","change-limiter-low-level-full-screen",-806067137),false], null));
}),"children":(function (){var G__65151 = limiter_low_level_id;
switch (G__65151) {
case "URS 60":
var G__65153 = app.connect.URS_60.URS_60.URS_60;
var G__65154 = (function (){var obj65158 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj65158;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65153,G__65154) : helix.core.jsx.call(null,G__65153,G__65154));

break;
default:
return null;

}
})()});
return obj65148;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65143,G__65144) : helix.core.jsx.call(null,G__65143,G__65144));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65123,G__65124) : helix.core.jsxs.call(null,G__65123,G__65124));
});
if(goog.DEBUG === true){
var G__65161 = G__65113;
(G__65161.displayName = "app.connect.limiter-low-level/limiter-low-level");

return G__65161;
} else {
return G__65113;
}
})();




//# sourceMappingURL=app.connect.limiter_low_level.js.map
