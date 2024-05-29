goog.provide('app.connect.pump_limiter');

app.connect.pump_limiter.pump_limiter = (function (){var G__29194 = (function app$connect$pump_limiter$pump_limiter_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var pump_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pump-limiter-id","pump-limiter-id",-72454910)], null));
var pump_limiter_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pump-limiter-full-screen","pump-limiter-full-screen",1764116550)], null));
var G__29198 = helix.core.Fragment;
var G__29199 = ({"children": [(function (){var G__29200 = pump_limiter_id;
switch (G__29200) {
case "none":
var G__29201 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__29202 = (function (){var obj29204 = ({"x":"44%","y":"1.6%","w":"13.5%","title":"Limiter"});
return obj29204;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29201,G__29202) : helix.core.jsx.call(null,G__29201,G__29202));

break;
case "URS 61":
var G__29205 = app.connect.URS_61.URS_61.URS_61;
var G__29206 = (function (){var obj29208 = ({"x":"44%","y":"1.6%","w":"13.5%"});
return obj29208;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29205,G__29206) : helix.core.jsx.call(null,G__29205,G__29206));

break;
default:
return null;

}
})(),(function (){var G__29209 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__29210 = (function (){var obj29212 = ({"show":pump_limiter_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-pump-limiter-full-screen","change-pump-limiter-full-screen",2015787077),false], null));
}),"children":(function (){var G__29213 = pump_limiter_id;
switch (G__29213) {
case "URS 61":
var G__29214 = app.connect.URS_61.URS_61.URS_61;
var G__29215 = (function (){var obj29217 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29217;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29214,G__29215) : helix.core.jsx.call(null,G__29214,G__29215));

break;
default:
return null;

}
})()});
return obj29212;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29209,G__29210) : helix.core.jsx.call(null,G__29209,G__29210));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29198,G__29199) : helix.core.jsxs.call(null,G__29198,G__29199));
});
if(goog.DEBUG === true){
var G__29218 = G__29194;
(G__29218.displayName = "app.connect.pump-limiter/pump-limiter");

return G__29218;
} else {
return G__29194;
}
})();




//# sourceMappingURL=app.connect.pump_limiter.js.map
