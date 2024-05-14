goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__85312 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__85313 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__85316_85348 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__85317_85349 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__85316_85348,G__85317_85349) : helix.hooks.raw_use_effect.call(null,G__85316_85348,G__85317_85349));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__85318 = "div";
var G__85319 = (function (){var obj85321 = ({"className":"kit-wrapper","style":(function (){var obj85323 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj85323;
})(),"children":[(function (){var G__85324 = "p";
var G__85325 = (function (){var obj85327 = ({"className":"version-tag","children":(function (){var G__85328 = "span";
var G__85329 = (function (){var obj85331 = ({"style":(function (){var obj85333 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj85333;
})(),"children":"Version: 1.0"});
return obj85331;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85328,G__85329) : helix.core.jsx.call(null,G__85328,G__85329));
})()});
return obj85327;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85324,G__85325) : helix.core.jsx.call(null,G__85324,G__85325));
})(),(function (){var G__85334 = app.shared.boiler.core.boiler;
var G__85335 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85334,G__85335) : helix.core.jsx.call(null,G__85334,G__85335));
})(),(function (){var G__85336 = app.shared.sidebar.sidebar;
var G__85337 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85336,G__85337) : helix.core.jsx.call(null,G__85336,G__85337));
})(),(function (){var G__85338 = app.shared.user_menu.user_menu;
var G__85339 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85338,G__85339) : helix.core.jsx.call(null,G__85338,G__85339));
})(),(function (){var G__85340 = app.shared.select_kit.core.select_kit_menu;
var G__85341 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85340,G__85341) : helix.core.jsx.call(null,G__85340,G__85341));
})(),(function (){var G__85342 = app.shared.control_panel.core.control_panel;
var G__85343 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85342,G__85343) : helix.core.jsx.call(null,G__85342,G__85343));
})(),(function (){var G__85344 = kit;
switch (G__85344) {
case "connect":
var G__85345 = app.connect.core.connect_kit;
var G__85346 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85345,G__85346) : helix.core.jsx.call(null,G__85345,G__85346));

break;
default:
return null;

}
})()]});
return obj85321;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__85318,G__85319) : helix.core.jsxs.call(null,G__85318,G__85319));
});
if(goog.DEBUG === true){
var G__85347 = G__85312;
(G__85347.displayName = "app.app/app");

return G__85347;
} else {
return G__85312;
}
})();




//# sourceMappingURL=app.app.js.map
