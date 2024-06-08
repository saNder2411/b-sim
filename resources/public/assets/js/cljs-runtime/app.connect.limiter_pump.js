goog.provide('app.connect.limiter_pump');

app.connect.limiter_pump.pump_limiter = (function (){var G__28807 = (function app$connect$limiter_pump$pump_limiter_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var pump_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pump-limiter-id","pump-limiter-id",-72454910)], null));
var pump_limiter_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pump-limiter-full-screen","pump-limiter-full-screen",1764116550)], null));
var G__28824 = helix.core.Fragment;
var G__28825 = ({"children": [(function (){var G__28829 = pump_limiter_id;
switch (G__28829) {
case "none":
var G__28834 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__28835 = (function (){var obj28839 = ({"x":"44%","y":"1.6%","w":"13.5%","title":"Limiter"});
return obj28839;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28834,G__28835) : helix.core.jsx.call(null,G__28834,G__28835));

break;
case "URS-61":
var G__28850 = app.connect.URS_61.URS_61.URS_61;
var G__28851 = (function (){var obj28855 = ({"x":"44%","y":"1.6%","w":"13.5%"});
return obj28855;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28850,G__28851) : helix.core.jsx.call(null,G__28850,G__28851));

break;
default:
return null;

}
})(),(function (){var G__28866 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__28867 = (function (){var obj28873 = ({"show":pump_limiter_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-pump-limiter-full-screen","change-pump-limiter-full-screen",2015787077),false], null));
}),"children":(function (){var G__28885 = pump_limiter_id;
switch (G__28885) {
case "URS-61":
var G__28891 = app.connect.URS_61.URS_61.URS_61;
var G__28892 = (function (){var obj28900 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj28900;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28891,G__28892) : helix.core.jsx.call(null,G__28891,G__28892));

break;
default:
return null;

}
})()});
return obj28873;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28866,G__28867) : helix.core.jsx.call(null,G__28866,G__28867));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28824,G__28825) : helix.core.jsxs.call(null,G__28824,G__28825));
});
if(goog.DEBUG === true){
var G__28921 = G__28807;
(G__28921.displayName = "app.connect.limiter-pump/pump-limiter");

return G__28921;
} else {
return G__28807;
}
})();




//# sourceMappingURL=app.connect.limiter_pump.js.map
