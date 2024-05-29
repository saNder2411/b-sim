goog.provide('app.connect.burner_limiter');

app.connect.burner_limiter.burner_limiter = (function (){var G__28680 = (function app$connect$burner_limiter$burner_limiter_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var burner_limiter_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-limiter-id","burner-limiter-id",-1127840956)], null));
var burner_limiter_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-limiter-full-screen","burner-limiter-full-screen",-868941454)], null));
var G__28684 = helix.core.Fragment;
var G__28685 = ({"children": [(function (){var G__28686 = burner_limiter_id;
switch (G__28686) {
case "none":
var G__28687 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__28688 = (function (){var obj28690 = ({"w":"13.5%","x":"30%","y":"1.6%","title":"Limiter"});
return obj28690;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28687,G__28688) : helix.core.jsx.call(null,G__28687,G__28688));

break;
case "URS 60":
var G__28691 = app.connect.URS_60.URS_60.URS_60;
var G__28692 = (function (){var obj28694 = ({"w":"13.5%","x":"30%","y":"1.6%"});
return obj28694;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28691,G__28692) : helix.core.jsx.call(null,G__28691,G__28692));

break;
default:
return null;

}
})(),(function (){var G__28695 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__28696 = (function (){var obj28698 = ({"show":burner_limiter_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-limiter-full-screen","change-burner-limiter-full-screen",2051559587),false], null));
}),"children":(function (){var G__28699 = burner_limiter_id;
switch (G__28699) {
case "URS 60":
var G__28700 = app.connect.URS_60.URS_60.URS_60;
var G__28701 = (function (){var obj28703 = ({"w":"40%","x":"30%","y":"38.85%"});
return obj28703;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28700,G__28701) : helix.core.jsx.call(null,G__28700,G__28701));

break;
default:
return null;

}
})()});
return obj28698;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28695,G__28696) : helix.core.jsx.call(null,G__28695,G__28696));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28684,G__28685) : helix.core.jsxs.call(null,G__28684,G__28685));
});
if(goog.DEBUG === true){
var G__28704 = G__28680;
(G__28704.displayName = "app.connect.burner-limiter/burner-limiter");

return G__28704;
} else {
return G__28680;
}
})();




//# sourceMappingURL=app.connect.burner_limiter.js.map
