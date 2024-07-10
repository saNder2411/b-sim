goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__57430 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__57431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__57434_57466 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__57435_57467 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__57434_57466,G__57435_57467) : helix.hooks.raw_use_effect.call(null,G__57434_57466,G__57435_57467));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__57436 = "div";
var G__57437 = (function (){var obj57439 = ({"className":"kit-wrapper","style":(function (){var obj57441 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj57441;
})(),"children":[(function (){var G__57442 = "p";
var G__57443 = (function (){var obj57445 = ({"className":"version-tag","children":(function (){var G__57446 = "span";
var G__57447 = (function (){var obj57449 = ({"style":(function (){var obj57451 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj57451;
})(),"children":"Version: 1.0"});
return obj57449;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57446,G__57447) : helix.core.jsx.call(null,G__57446,G__57447));
})()});
return obj57445;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57442,G__57443) : helix.core.jsx.call(null,G__57442,G__57443));
})(),(function (){var G__57452 = app.shared.components.notifications.notifications;
var G__57453 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57452,G__57453) : helix.core.jsx.call(null,G__57452,G__57453));
})(),(function (){var G__57454 = app.shared.components.modal.info;
var G__57455 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57454,G__57455) : helix.core.jsx.call(null,G__57454,G__57455));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__57456 = app.connect.cables.cables;
var G__57457 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57456,G__57457) : helix.core.jsx.call(null,G__57456,G__57457));
})():null),(function (){var G__57458 = app.shared.boiler_plant.core.boiler_plant;
var G__57459 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57458,G__57459) : helix.core.jsx.call(null,G__57458,G__57459));
})(),(function (){var G__57460 = app.shared.sidebar.core.sidebar;
var G__57461 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57460,G__57461) : helix.core.jsx.call(null,G__57460,G__57461));
})(),(function (){var G__57462 = kit;
switch (G__57462) {
case "connect":
var G__57463 = app.connect.core.connect_kit;
var G__57464 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57463,G__57464) : helix.core.jsx.call(null,G__57463,G__57464));

break;
default:
return null;

}
})()]});
return obj57439;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__57436,G__57437) : helix.core.jsxs.call(null,G__57436,G__57437));
});
if(goog.DEBUG === true){
var G__57465 = G__57430;
(G__57465.displayName = "app.app/app");

return G__57465;
} else {
return G__57430;
}
})();




//# sourceMappingURL=app.app.js.map
