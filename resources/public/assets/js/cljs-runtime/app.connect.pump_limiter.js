goog.provide('app.connect.pump_limiter');

app.connect.pump_limiter.pump_limiter = (function (){var G__28441 = (function app$connect$pump_limiter$pump_limiter_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var pump_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pump-limiter-id","pump-limiter-id",-72454910)], null));
var pump_limiter_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pump-limiter-:full-screen?","pump-limiter-:full-screen?",1764116550)], null));
var G__28450 = helix.core.Fragment;
var G__28452 = ({"children": [(function (){var G__28454 = pump_limiter_id;
switch (G__28454) {
case "none":
var G__28456 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__28457 = (function (){var obj28462 = ({"x":"44%","y":"1.6%","w":"13.5%","title":"Limiter"});
return obj28462;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28456,G__28457) : helix.core.jsx.call(null,G__28456,G__28457));

break;
case "URS 61":
var G__28464 = app.connect.URS_61.URS_61.URS_61;
var G__28466 = (function (){var obj28470 = ({"x":"44%","y":"1.6%","w":"13.5%"});
return obj28470;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28464,G__28466) : helix.core.jsx.call(null,G__28464,G__28466));

break;
default:
return null;

}
})(),(function (){var G__28471 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__28474 = (function (){var obj28478 = ({"show":pump_limiter_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-pump-limiter-:full-screen?","change-pump-limiter-:full-screen?",2015787077),false], null));
}),"children":(function (){var G__28480 = pump_limiter_id;
switch (G__28480) {
case "URS 61":
var G__28481 = app.connect.URS_61.URS_61.URS_61;
var G__28482 = (function (){var obj28486 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj28486;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28481,G__28482) : helix.core.jsx.call(null,G__28481,G__28482));

break;
default:
return null;

}
})()});
return obj28478;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28471,G__28474) : helix.core.jsx.call(null,G__28471,G__28474));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28450,G__28452) : helix.core.jsxs.call(null,G__28450,G__28452));
});
if(goog.DEBUG === true){
var G__28490 = G__28441;
(G__28490.displayName = "app.connect.pump-limiter/pump-limiter");

return G__28490;
} else {
return G__28441;
}
})();




//# sourceMappingURL=app.connect.pump_limiter.js.map
