goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__30646 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__30650_30682 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__30651_30683 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__30650_30682,G__30651_30683) : helix.hooks.raw_use_effect.call(null,G__30650_30682,G__30651_30683));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__30652 = "div";
var G__30653 = (function (){var obj30655 = ({"className":"kit-wrapper","style":(function (){var obj30657 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj30657;
})(),"children":[(function (){var G__30658 = "p";
var G__30659 = (function (){var obj30661 = ({"className":"version-tag","children":(function (){var G__30662 = "span";
var G__30663 = (function (){var obj30665 = ({"style":(function (){var obj30667 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj30667;
})(),"children":"Version: 1.0"});
return obj30665;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30662,G__30663) : helix.core.jsx.call(null,G__30662,G__30663));
})()});
return obj30661;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30658,G__30659) : helix.core.jsx.call(null,G__30658,G__30659));
})(),(function (){var G__30668 = app.shared.boiler.core.boiler;
var G__30669 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30668,G__30669) : helix.core.jsx.call(null,G__30668,G__30669));
})(),(function (){var G__30670 = app.shared.sidebar.core.sidebar;
var G__30671 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30670,G__30671) : helix.core.jsx.call(null,G__30670,G__30671));
})(),(function (){var G__30672 = app.shared.user_menu.core.user_menu;
var G__30673 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30672,G__30673) : helix.core.jsx.call(null,G__30672,G__30673));
})(),(function (){var G__30674 = app.shared.select_kit.core.select_kit_menu;
var G__30675 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30674,G__30675) : helix.core.jsx.call(null,G__30674,G__30675));
})(),(function (){var G__30676 = app.shared.control_panel.core.control_panel;
var G__30677 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30676,G__30677) : helix.core.jsx.call(null,G__30676,G__30677));
})(),(function (){var G__30678 = kit;
switch (G__30678) {
case "connect":
var G__30679 = app.connect.core.connect_kit;
var G__30680 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30679,G__30680) : helix.core.jsx.call(null,G__30679,G__30680));

break;
default:
return null;

}
})()]});
return obj30655;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30652,G__30653) : helix.core.jsxs.call(null,G__30652,G__30653));
});
if(goog.DEBUG === true){
var G__30681 = G__30646;
(G__30681.displayName = "app.app/app");

return G__30681;
} else {
return G__30646;
}
})();




//# sourceMappingURL=app.app.js.map
