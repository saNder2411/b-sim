goog.provide('app.connect.controller_cond');

app.connect.controller_cond.controller_cond = (function (){var G__28826 = (function app$connect$controller_cond$controller_cond_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var cond_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
var cond_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null));
var G__28874 = helix.core.Fragment;
var G__28875 = ({"children": [(function (){var G__28880 = cond_controller_id;
switch (G__28880) {
case "none":
var G__28897 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__28898 = (function (){var obj28908 = ({"x":"58%","y":"1.6%","w":"13.5%","title":"Conductivity"});
return obj28908;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28897,G__28898) : helix.core.jsx.call(null,G__28897,G__28898));

break;
case "LRR-1-60":
var G__28919 = app.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__28920 = (function (){var obj28925 = ({"x":"58%","y":"1.6%","w":"13.5%"});
return obj28925;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28919,G__28920) : helix.core.jsx.call(null,G__28919,G__28920));

break;
default:
return null;

}
})(),(function (){var G__28927 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__28928 = (function (){var obj28936 = ({"show":cond_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),false], null));
}),"children":(function (){var G__28939 = cond_controller_id;
switch (G__28939) {
case "LRR-1-60":
var G__28942 = app.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__28943 = (function (){var obj28948 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj28948;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28942,G__28943) : helix.core.jsx.call(null,G__28942,G__28943));

break;
default:
return null;

}
})()});
return obj28936;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28927,G__28928) : helix.core.jsx.call(null,G__28927,G__28928));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28874,G__28875) : helix.core.jsxs.call(null,G__28874,G__28875));
});
if(goog.DEBUG === true){
var G__28955 = G__28826;
(G__28955.displayName = "app.connect.controller-cond/controller-cond");

return G__28955;
} else {
return G__28826;
}
})();




//# sourceMappingURL=app.connect.controller_cond.js.map
