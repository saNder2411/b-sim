goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__47535 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__47536 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__47539_47571 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__47540_47572 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__47539_47571,G__47540_47572) : helix.hooks.raw_use_effect.call(null,G__47539_47571,G__47540_47572));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__47541 = "div";
var G__47542 = (function (){var obj47544 = ({"className":"kit-wrapper","style":(function (){var obj47546 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj47546;
})(),"children":[(function (){var G__47547 = "p";
var G__47548 = (function (){var obj47550 = ({"className":"version-tag","children":(function (){var G__47551 = "span";
var G__47552 = (function (){var obj47554 = ({"style":(function (){var obj47556 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj47556;
})(),"children":"Version: 1.0"});
return obj47554;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47551,G__47552) : helix.core.jsx.call(null,G__47551,G__47552));
})()});
return obj47550;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47547,G__47548) : helix.core.jsx.call(null,G__47547,G__47548));
})(),(function (){var G__47557 = app.shared.boiler.core.boiler;
var G__47558 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47557,G__47558) : helix.core.jsx.call(null,G__47557,G__47558));
})(),(function (){var G__47559 = app.shared.sidebar.core.sidebar;
var G__47560 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47559,G__47560) : helix.core.jsx.call(null,G__47559,G__47560));
})(),(function (){var G__47561 = app.shared.user_menu.core.user_menu;
var G__47562 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47561,G__47562) : helix.core.jsx.call(null,G__47561,G__47562));
})(),(function (){var G__47563 = app.shared.select_kit.core.select_kit_menu;
var G__47564 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47563,G__47564) : helix.core.jsx.call(null,G__47563,G__47564));
})(),(function (){var G__47565 = app.shared.control_panel.core.control_panel;
var G__47566 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47565,G__47566) : helix.core.jsx.call(null,G__47565,G__47566));
})(),(function (){var G__47567 = kit;
switch (G__47567) {
case "connect":
var G__47568 = app.connect.core.connect_kit;
var G__47569 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__47568,G__47569) : helix.core.jsx.call(null,G__47568,G__47569));

break;
default:
return null;

}
})()]});
return obj47544;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__47541,G__47542) : helix.core.jsxs.call(null,G__47541,G__47542));
});
if(goog.DEBUG === true){
var G__47570 = G__47535;
(G__47570.displayName = "app.app/app");

return G__47570;
} else {
return G__47535;
}
})();




//# sourceMappingURL=app.app.js.map
