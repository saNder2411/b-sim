goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__30544 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30545 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__30550_30610 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__30551_30611 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__30550_30610,G__30551_30611) : helix.hooks.raw_use_effect.call(null,G__30550_30610,G__30551_30611));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__30555 = "div";
var G__30556 = (function (){var obj30560 = ({"className":"kit-wrapper","style":(function (){var obj30562 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj30562;
})(),"children":[(function (){var G__30563 = "p";
var G__30564 = (function (){var obj30567 = ({"className":"version-tag","children":(function (){var G__30568 = "span";
var G__30569 = (function (){var obj30574 = ({"style":(function (){var obj30576 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj30576;
})(),"children":"Version: 1.0"});
return obj30574;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30568,G__30569) : helix.core.jsx.call(null,G__30568,G__30569));
})()});
return obj30567;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30563,G__30564) : helix.core.jsx.call(null,G__30563,G__30564));
})(),(function (){var G__30583 = app.shared.components.notifications.notifications;
var G__30584 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30583,G__30584) : helix.core.jsx.call(null,G__30583,G__30584));
})(),(function (){var G__30587 = app.shared.components.modal.info;
var G__30588 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30587,G__30588) : helix.core.jsx.call(null,G__30587,G__30588));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__30589 = app.connect.cables.cables;
var G__30590 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30589,G__30590) : helix.core.jsx.call(null,G__30589,G__30590));
})():null),(function (){var G__30595 = app.shared.boiler_plant.core.boiler_plant;
var G__30596 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30595,G__30596) : helix.core.jsx.call(null,G__30595,G__30596));
})(),(function (){var G__30597 = app.shared.sidebar.core.sidebar;
var G__30598 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30597,G__30598) : helix.core.jsx.call(null,G__30597,G__30598));
})(),(function (){var G__30599 = kit;
switch (G__30599) {
case "connect":
var G__30601 = app.connect.core.connect_kit;
var G__30602 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30601,G__30602) : helix.core.jsx.call(null,G__30601,G__30602));

break;
default:
return null;

}
})()]});
return obj30560;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30555,G__30556) : helix.core.jsxs.call(null,G__30555,G__30556));
});
if(goog.DEBUG === true){
var G__30605 = G__30544;
(G__30605.displayName = "app.app/app");

return G__30605;
} else {
return G__30544;
}
})();




//# sourceMappingURL=app.app.js.map
