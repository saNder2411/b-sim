goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__28440 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28441 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__28444_28476 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__28445_28477 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__28444_28476,G__28445_28477) : helix.hooks.raw_use_effect.call(null,G__28444_28476,G__28445_28477));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__28446 = "div";
var G__28447 = (function (){var obj28449 = ({"className":"kit-wrapper","style":(function (){var obj28451 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj28451;
})(),"children":[(function (){var G__28452 = "p";
var G__28453 = (function (){var obj28455 = ({"className":"version-tag","children":(function (){var G__28456 = "span";
var G__28457 = (function (){var obj28459 = ({"style":(function (){var obj28461 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj28461;
})(),"children":"Version: 1.0"});
return obj28459;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28456,G__28457) : helix.core.jsx.call(null,G__28456,G__28457));
})()});
return obj28455;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28452,G__28453) : helix.core.jsx.call(null,G__28452,G__28453));
})(),(function (){var G__28462 = app.shared.components.notifications.notifications;
var G__28463 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28462,G__28463) : helix.core.jsx.call(null,G__28462,G__28463));
})(),(function (){var G__28464 = app.shared.components.modal.info;
var G__28465 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28464,G__28465) : helix.core.jsx.call(null,G__28464,G__28465));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__28466 = app.connect.cables.cables;
var G__28467 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28466,G__28467) : helix.core.jsx.call(null,G__28466,G__28467));
})():null),(function (){var G__28468 = app.shared.boiler_plant.core.boiler_plant;
var G__28469 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28468,G__28469) : helix.core.jsx.call(null,G__28468,G__28469));
})(),(function (){var G__28470 = app.shared.sidebar.core.sidebar;
var G__28471 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28470,G__28471) : helix.core.jsx.call(null,G__28470,G__28471));
})(),(function (){var G__28472 = kit;
switch (G__28472) {
case "connect":
var G__28473 = app.connect.core.connect_kit;
var G__28474 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28473,G__28474) : helix.core.jsx.call(null,G__28473,G__28474));

break;
default:
return null;

}
})()]});
return obj28449;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28446,G__28447) : helix.core.jsxs.call(null,G__28446,G__28447));
});
if(goog.DEBUG === true){
var G__28475 = G__28440;
(G__28475.displayName = "app.app/app");

return G__28475;
} else {
return G__28440;
}
})();




//# sourceMappingURL=app.app.js.map
