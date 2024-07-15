goog.provide('app.connect.controller_cond');

app.connect.controller_cond.controller_cond = (function (){var G__29911 = (function app$connect$controller_cond$controller_cond_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var cond_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
var cond_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null));
var G__29915 = helix.core.Fragment;
var G__29916 = ({"children": [(function (){var G__29918 = cond_controller_id;
switch (G__29918) {
case "none":
var G__29922 = app.shared.components.controller.placeholder;
var G__29923 = (function (){var obj29925 = ({"x":"58%","y":"1.6%","w":"13.5%","title":"Conductivity"});
return obj29925;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29922,G__29923) : helix.core.jsx.call(null,G__29922,G__29923));

break;
case "LRR 1-60":
var G__29930 = app.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__29931 = (function (){var obj29933 = ({"x":"58%","y":"1.6%","w":"13.5%"});
return obj29933;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29930,G__29931) : helix.core.jsx.call(null,G__29930,G__29931));

break;
default:
return null;

}
})(),(function (){var G__29942 = app.shared.components.controller.full_screen;
var G__29943 = (function (){var obj29945 = ({"show":cond_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),false], null));
}),"children":(function (){var G__29950 = cond_controller_id;
switch (G__29950) {
case "LRR 1-60":
var G__29953 = app.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__29954 = (function (){var obj29961 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj29961;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29953,G__29954) : helix.core.jsx.call(null,G__29953,G__29954));

break;
default:
return null;

}
})()});
return obj29945;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29942,G__29943) : helix.core.jsx.call(null,G__29942,G__29943));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29915,G__29916) : helix.core.jsxs.call(null,G__29915,G__29916));
});
if(goog.DEBUG === true){
var G__29980 = G__29911;
(G__29980.displayName = "app.connect.controller-cond/controller-cond");

return G__29980;
} else {
return G__29911;
}
})();




//# sourceMappingURL=app.connect.controller_cond.js.map
