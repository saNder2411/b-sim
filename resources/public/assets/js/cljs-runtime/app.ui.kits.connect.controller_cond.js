goog.provide('app.ui.kits.connect.controller_cond');

app.ui.kits.connect.controller_cond.controller_cond = (function (){var G__29025 = (function app$ui$kits$connect$controller_cond$controller_cond_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29026 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var cond_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
var cond_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-cond-controller-data-by-path","current-cond-controller-data-by-path",2025109911),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var G__29038 = helix.core.Fragment;
var G__29039 = ({"children": [(function (){var G__29040 = cond_controller_id;
switch (G__29040) {
case "none":
var G__29041 = app.ui.shared.components.controller.placeholder;
var G__29042 = (function (){var obj29046 = ({"x":"58%","y":"1.6%","w":"13.5%","title":"Conductivity"});
return obj29046;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29041,G__29042) : helix.core.jsx.call(null,G__29041,G__29042));

break;
case "LRR 1-60":
var G__29055 = app.ui.kits.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__29056 = (function (){var obj29064 = ({"x":"58%","y":"1.6%","w":"13.5%"});
return obj29064;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29055,G__29056) : helix.core.jsx.call(null,G__29055,G__29056));

break;
default:
return null;

}
})(),(function (){var G__29073 = app.ui.shared.components.controller.full_screen;
var G__29074 = (function (){var obj29080 = ({"show":cond_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-cond-controller","change-current-cond-controller",899229912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),false], null)], null));
}),"children":(function (){var G__29086 = cond_controller_id;
switch (G__29086) {
case "LRR 1-60":
var G__29094 = app.ui.kits.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__29095 = (function (){var obj29101 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29101;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29094,G__29095) : helix.core.jsx.call(null,G__29094,G__29095));

break;
default:
return null;

}
})()});
return obj29080;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29073,G__29074) : helix.core.jsx.call(null,G__29073,G__29074));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29038,G__29039) : helix.core.jsxs.call(null,G__29038,G__29039));
});
if(goog.DEBUG === true){
var G__29122 = G__29025;
(G__29122.displayName = "app.ui.kits.connect.controller-cond/controller-cond");

return G__29122;
} else {
return G__29025;
}
})();




//# sourceMappingURL=app.ui.kits.connect.controller_cond.js.map
