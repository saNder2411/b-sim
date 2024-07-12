goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__71607 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__71608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__71611_71643 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__71612_71644 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__71611_71643,G__71612_71644) : helix.hooks.raw_use_effect.call(null,G__71611_71643,G__71612_71644));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__71613 = "div";
var G__71614 = (function (){var obj71616 = ({"className":"kit-wrapper","style":(function (){var obj71618 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj71618;
})(),"children":[(function (){var G__71619 = "p";
var G__71620 = (function (){var obj71622 = ({"className":"version-tag","children":(function (){var G__71623 = "span";
var G__71624 = (function (){var obj71626 = ({"style":(function (){var obj71628 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj71628;
})(),"children":"Version: 1.0"});
return obj71626;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71623,G__71624) : helix.core.jsx.call(null,G__71623,G__71624));
})()});
return obj71622;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71619,G__71620) : helix.core.jsx.call(null,G__71619,G__71620));
})(),(function (){var G__71629 = app.shared.components.notifications.notifications;
var G__71630 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71629,G__71630) : helix.core.jsx.call(null,G__71629,G__71630));
})(),(function (){var G__71631 = app.shared.components.modal.info;
var G__71632 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71631,G__71632) : helix.core.jsx.call(null,G__71631,G__71632));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__71633 = app.connect.cables.cables;
var G__71634 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71633,G__71634) : helix.core.jsx.call(null,G__71633,G__71634));
})():null),(function (){var G__71635 = app.shared.boiler_plant.core.boiler_plant;
var G__71636 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71635,G__71636) : helix.core.jsx.call(null,G__71635,G__71636));
})(),(function (){var G__71637 = app.shared.sidebar.core.sidebar;
var G__71638 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71637,G__71638) : helix.core.jsx.call(null,G__71637,G__71638));
})(),(function (){var G__71639 = kit;
switch (G__71639) {
case "connect":
var G__71640 = app.connect.core.connect_kit;
var G__71641 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71640,G__71641) : helix.core.jsx.call(null,G__71640,G__71641));

break;
default:
return null;

}
})()]});
return obj71616;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__71613,G__71614) : helix.core.jsxs.call(null,G__71613,G__71614));
});
if(goog.DEBUG === true){
var G__71642 = G__71607;
(G__71642.displayName = "app.app/app");

return G__71642;
} else {
return G__71607;
}
})();




//# sourceMappingURL=app.app.js.map
