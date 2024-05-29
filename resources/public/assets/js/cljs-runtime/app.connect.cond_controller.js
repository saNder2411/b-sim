goog.provide('app.connect.cond_controller');

app.connect.cond_controller.cond_controller = (function (){var G__30533 = (function app$connect$cond_controller$cond_controller_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var cond_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
var cond_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null));
var G__30537 = helix.core.Fragment;
var G__30538 = ({"children": [(function (){var G__30539 = cond_controller_id;
switch (G__30539) {
case "none":
var G__30540 = app.shared.components.equipment_placeholder.equipment_placeholder;
var G__30541 = (function (){var obj30543 = ({"x":"58%","y":"1.6%","w":"13.5%","title":"Conductivity"});
return obj30543;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30540,G__30541) : helix.core.jsx.call(null,G__30540,G__30541));

break;
case "LRR 1-60":
var G__30544 = app.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__30545 = (function (){var obj30547 = ({"x":"58%","y":"1.6%","w":"13.5%"});
return obj30547;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30544,G__30545) : helix.core.jsx.call(null,G__30544,G__30545));

break;
default:
return null;

}
})(),(function (){var G__30548 = app.shared.components.equipment_full_screen.equipment_full_screen;
var G__30549 = (function (){var obj30551 = ({"show":cond_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),false], null));
}),"children":(function (){var G__30552 = cond_controller_id;
switch (G__30552) {
case "LRR 1-60":
var G__30553 = app.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__30554 = (function (){var obj30556 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj30556;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30553,G__30554) : helix.core.jsx.call(null,G__30553,G__30554));

break;
default:
return null;

}
})()});
return obj30551;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30548,G__30549) : helix.core.jsx.call(null,G__30548,G__30549));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30537,G__30538) : helix.core.jsxs.call(null,G__30537,G__30538));
});
if(goog.DEBUG === true){
var G__30557 = G__30533;
(G__30557.displayName = "app.connect.cond-controller/cond-controller");

return G__30557;
} else {
return G__30533;
}
})();




//# sourceMappingURL=app.connect.cond_controller.js.map
