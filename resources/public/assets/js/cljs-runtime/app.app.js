goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__29262 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__29266_29300 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__29267_29301 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__29266_29300,G__29267_29301) : helix.hooks.raw_use_effect.call(null,G__29266_29300,G__29267_29301));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__29268 = "div";
var G__29269 = (function (){var obj29271 = ({"className":"kit-wrapper","style":(function (){var obj29273 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj29273;
})(),"children":[(function (){var G__29274 = "p";
var G__29275 = (function (){var obj29277 = ({"className":"version-tag","children":(function (){var G__29278 = "span";
var G__29279 = (function (){var obj29281 = ({"style":(function (){var obj29283 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj29283;
})(),"children":"Version: 1.0"});
return obj29281;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29278,G__29279) : helix.core.jsx.call(null,G__29278,G__29279));
})()});
return obj29277;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29274,G__29275) : helix.core.jsx.call(null,G__29274,G__29275));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__29284 = app.connect.cables.cables;
var G__29285 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29284,G__29285) : helix.core.jsx.call(null,G__29284,G__29285));
})():null),(function (){var G__29286 = app.shared.boiler.core.boiler;
var G__29287 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29286,G__29287) : helix.core.jsx.call(null,G__29286,G__29287));
})(),(function (){var G__29288 = app.shared.sidebar.core.sidebar;
var G__29289 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29288,G__29289) : helix.core.jsx.call(null,G__29288,G__29289));
})(),(function (){var G__29290 = app.shared.user_menu.core.user_menu;
var G__29291 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29290,G__29291) : helix.core.jsx.call(null,G__29290,G__29291));
})(),(function (){var G__29292 = app.shared.select_kit.core.select_kit_menu;
var G__29293 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29292,G__29293) : helix.core.jsx.call(null,G__29292,G__29293));
})(),(function (){var G__29294 = app.shared.control_panel.core.control_panel;
var G__29295 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29294,G__29295) : helix.core.jsx.call(null,G__29294,G__29295));
})(),(function (){var G__29296 = kit;
switch (G__29296) {
case "connect":
var G__29297 = app.connect.core.connect_kit;
var G__29298 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29297,G__29298) : helix.core.jsx.call(null,G__29297,G__29298));

break;
default:
return null;

}
})()]});
return obj29271;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29268,G__29269) : helix.core.jsxs.call(null,G__29268,G__29269));
});
if(goog.DEBUG === true){
var G__29299 = G__29262;
(G__29299.displayName = "app.app/app");

return G__29299;
} else {
return G__29262;
}
})();




//# sourceMappingURL=app.app.js.map
