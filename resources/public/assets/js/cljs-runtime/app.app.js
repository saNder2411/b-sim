goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__32361 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__32365_32397 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__32366_32398 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__32365_32397,G__32366_32398) : helix.hooks.raw_use_effect.call(null,G__32365_32397,G__32366_32398));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__32367 = "div";
var G__32368 = (function (){var obj32370 = ({"className":"kit-wrapper","style":(function (){var obj32372 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj32372;
})(),"children":[(function (){var G__32373 = "p";
var G__32374 = (function (){var obj32376 = ({"className":"version-tag","children":(function (){var G__32377 = "span";
var G__32378 = (function (){var obj32380 = ({"style":(function (){var obj32382 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj32382;
})(),"children":"Version: 1.0"});
return obj32380;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32377,G__32378) : helix.core.jsx.call(null,G__32377,G__32378));
})()});
return obj32376;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32373,G__32374) : helix.core.jsx.call(null,G__32373,G__32374));
})(),(function (){var G__32383 = app.shared.components.notifications.notifications;
var G__32384 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32383,G__32384) : helix.core.jsx.call(null,G__32383,G__32384));
})(),(function (){var G__32385 = app.shared.components.modal.info;
var G__32386 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32385,G__32386) : helix.core.jsx.call(null,G__32385,G__32386));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__32387 = app.connect.cables.cables;
var G__32388 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32387,G__32388) : helix.core.jsx.call(null,G__32387,G__32388));
})():null),(function (){var G__32389 = app.shared.boiler_plant.core.boiler_plant;
var G__32390 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32389,G__32390) : helix.core.jsx.call(null,G__32389,G__32390));
})(),(function (){var G__32391 = app.shared.sidebar.core.sidebar;
var G__32392 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32391,G__32392) : helix.core.jsx.call(null,G__32391,G__32392));
})(),(function (){var G__32393 = kit;
switch (G__32393) {
case "connect":
var G__32394 = app.connect.core.connect_kit;
var G__32395 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32394,G__32395) : helix.core.jsx.call(null,G__32394,G__32395));

break;
default:
return null;

}
})()]});
return obj32370;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32367,G__32368) : helix.core.jsxs.call(null,G__32367,G__32368));
});
if(goog.DEBUG === true){
var G__32396 = G__32361;
(G__32396.displayName = "app.app/app");

return G__32396;
} else {
return G__32361;
}
})();




//# sourceMappingURL=app.app.js.map
