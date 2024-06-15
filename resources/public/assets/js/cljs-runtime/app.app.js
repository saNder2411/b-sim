goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__28464 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__28468_28496 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__28469_28497 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__28468_28496,G__28469_28497) : helix.hooks.raw_use_effect.call(null,G__28468_28496,G__28469_28497));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__28470 = "div";
var G__28471 = (function (){var obj28473 = ({"className":"kit-wrapper","style":(function (){var obj28475 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj28475;
})(),"children":[(function (){var G__28476 = "p";
var G__28477 = (function (){var obj28479 = ({"className":"version-tag","children":(function (){var G__28480 = "span";
var G__28481 = (function (){var obj28483 = ({"style":(function (){var obj28485 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj28485;
})(),"children":"Version: 1.0"});
return obj28483;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28480,G__28481) : helix.core.jsx.call(null,G__28480,G__28481));
})()});
return obj28479;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28476,G__28477) : helix.core.jsx.call(null,G__28476,G__28477));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__28486 = app.connect.cables.cables;
var G__28487 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28486,G__28487) : helix.core.jsx.call(null,G__28486,G__28487));
})():null),(function (){var G__28488 = app.shared.boiler_plant.core.boiler_plant;
var G__28489 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28488,G__28489) : helix.core.jsx.call(null,G__28488,G__28489));
})(),(function (){var G__28490 = app.shared.sidebar.core.sidebar;
var G__28491 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28490,G__28491) : helix.core.jsx.call(null,G__28490,G__28491));
})(),(function (){var G__28492 = kit;
switch (G__28492) {
case "connect":
var G__28493 = app.connect.core.connect_kit;
var G__28494 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28493,G__28494) : helix.core.jsx.call(null,G__28493,G__28494));

break;
default:
return null;

}
})()]});
return obj28473;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28470,G__28471) : helix.core.jsxs.call(null,G__28470,G__28471));
});
if(goog.DEBUG === true){
var G__28495 = G__28464;
(G__28495.displayName = "app.app/app");

return G__28495;
} else {
return G__28464;
}
})();




//# sourceMappingURL=app.app.js.map
