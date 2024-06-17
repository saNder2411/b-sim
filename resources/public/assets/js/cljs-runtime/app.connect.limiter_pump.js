goog.provide('app.connect.limiter_pump');

app.connect.limiter_pump.pump_limiter = (function (){var G__41856 = (function app$connect$limiter_pump$pump_limiter_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__41857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var limiter_high_level_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
var limiter_high_level_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-high-level-full-screen","limiter-high-level-full-screen",-1616504973)], null));
var G__41860 = helix.core.Fragment;
var G__41861 = ({"children": [(function (){var G__41862 = limiter_high_level_id;
switch (G__41862) {
case "none":
var G__41863 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__41864 = (function (){var obj41866 = ({"x":"44%","y":"1.6%","w":"13.5%","title":"Limiter"});
return obj41866;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41863,G__41864) : helix.core.jsx.call(null,G__41863,G__41864));

break;
case "URS 61":
var G__41867 = app.connect.URS_61.URS_61.URS_61;
var G__41868 = (function (){var obj41870 = ({"x":"44%","y":"1.6%","w":"13.5%"});
return obj41870;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41867,G__41868) : helix.core.jsx.call(null,G__41867,G__41868));

break;
default:
return null;

}
})(),(function (){var G__41871 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__41872 = (function (){var obj41874 = ({"show":limiter_high_level_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-limiter-high-level-full-screen","change-limiter-high-level-full-screen",372169192),false], null));
}),"children":(function (){var G__41875 = limiter_high_level_id;
switch (G__41875) {
case "URS 61":
var G__41876 = app.connect.URS_61.URS_61.URS_61;
var G__41877 = (function (){var obj41879 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj41879;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41876,G__41877) : helix.core.jsx.call(null,G__41876,G__41877));

break;
default:
return null;

}
})()});
return obj41874;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41871,G__41872) : helix.core.jsx.call(null,G__41871,G__41872));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41860,G__41861) : helix.core.jsxs.call(null,G__41860,G__41861));
});
if(goog.DEBUG === true){
var G__41880 = G__41856;
(G__41880.displayName = "app.connect.limiter-pump/pump-limiter");

return G__41880;
} else {
return G__41856;
}
})();




//# sourceMappingURL=app.connect.limiter_pump.js.map
