goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__64436 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__64437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__64440_64472 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__64441_64473 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__64440_64472,G__64441_64473) : helix.hooks.raw_use_effect.call(null,G__64440_64472,G__64441_64473));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__64442 = "div";
var G__64443 = (function (){var obj64445 = ({"className":"kit-wrapper","style":(function (){var obj64447 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj64447;
})(),"children":[(function (){var G__64448 = "p";
var G__64449 = (function (){var obj64451 = ({"className":"version-tag","children":(function (){var G__64452 = "span";
var G__64453 = (function (){var obj64455 = ({"style":(function (){var obj64457 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj64457;
})(),"children":"Version: 1.0"});
return obj64455;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64452,G__64453) : helix.core.jsx.call(null,G__64452,G__64453));
})()});
return obj64451;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64448,G__64449) : helix.core.jsx.call(null,G__64448,G__64449));
})(),(function (){var G__64458 = app.shared.components.notifications.notifications;
var G__64459 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64458,G__64459) : helix.core.jsx.call(null,G__64458,G__64459));
})(),(function (){var G__64460 = app.shared.components.modal.info;
var G__64461 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64460,G__64461) : helix.core.jsx.call(null,G__64460,G__64461));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__64462 = app.connect.cables.cables;
var G__64463 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64462,G__64463) : helix.core.jsx.call(null,G__64462,G__64463));
})():null),(function (){var G__64464 = app.shared.boiler_plant.core.boiler_plant;
var G__64465 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64464,G__64465) : helix.core.jsx.call(null,G__64464,G__64465));
})(),(function (){var G__64466 = app.shared.sidebar.core.sidebar;
var G__64467 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64466,G__64467) : helix.core.jsx.call(null,G__64466,G__64467));
})(),(function (){var G__64468 = kit;
switch (G__64468) {
case "connect":
var G__64469 = app.connect.core.connect_kit;
var G__64470 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64469,G__64470) : helix.core.jsx.call(null,G__64469,G__64470));

break;
default:
return null;

}
})()]});
return obj64445;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__64442,G__64443) : helix.core.jsxs.call(null,G__64442,G__64443));
});
if(goog.DEBUG === true){
var G__64471 = G__64436;
(G__64471.displayName = "app.app/app");

return G__64471;
} else {
return G__64436;
}
})();




//# sourceMappingURL=app.app.js.map
