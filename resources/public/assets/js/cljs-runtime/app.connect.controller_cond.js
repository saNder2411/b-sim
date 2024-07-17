goog.provide('app.connect.controller_cond');

app.connect.controller_cond.controller_cond = (function (){var G__43519 = (function app$connect$controller_cond$controller_cond_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__43524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var cond_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
var cond_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-full-screen","cond-controller-full-screen",298646087)], null));
var G__43548 = helix.core.Fragment;
var G__43550 = ({"children": [(function (){var G__43558 = cond_controller_id;
switch (G__43558) {
case "none":
var G__43578 = app.shared.components.controller.placeholder;
var G__43579 = (function (){var obj43590 = ({"x":"58%","y":"1.6%","w":"13.5%","title":"Conductivity"});
return obj43590;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43578,G__43579) : helix.core.jsx.call(null,G__43578,G__43579));

break;
case "LRR 1-60":
var G__43603 = app.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__43606 = (function (){var obj43616 = ({"x":"58%","y":"1.6%","w":"13.5%"});
return obj43616;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43603,G__43606) : helix.core.jsx.call(null,G__43603,G__43606));

break;
default:
return null;

}
})(),(function (){var G__43634 = app.shared.components.controller.full_screen;
var G__43635 = (function (){var obj43643 = ({"show":cond_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-cond-controller-full-screen","change-cond-controller-full-screen",-1594372267),false], null));
}),"children":(function (){var G__43650 = cond_controller_id;
switch (G__43650) {
case "LRR 1-60":
var G__43663 = app.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__43664 = (function (){var obj43672 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj43672;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43663,G__43664) : helix.core.jsx.call(null,G__43663,G__43664));

break;
default:
return null;

}
})()});
return obj43643;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43634,G__43635) : helix.core.jsx.call(null,G__43634,G__43635));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43548,G__43550) : helix.core.jsxs.call(null,G__43548,G__43550));
});
if(goog.DEBUG === true){
var G__43699 = G__43519;
(G__43699.displayName = "app.connect.controller-cond/controller-cond");

return G__43699;
} else {
return G__43519;
}
})();




//# sourceMappingURL=app.connect.controller_cond.js.map
