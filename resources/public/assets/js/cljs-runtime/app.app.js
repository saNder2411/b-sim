goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__96881 = (function app$app$app_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__96882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var G__96885_96917 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__96886_96918 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__96885_96917,G__96886_96918) : helix.hooks.raw_use_effect.call(null,G__96885_96917,G__96886_96918));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__96887 = "div";
var G__96888 = (function (){var obj96890 = ({"className":"kit-wrapper","style":(function (){var obj96892 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj96892;
})(),"children":[(function (){var G__96893 = "p";
var G__96894 = (function (){var obj96896 = ({"className":"version-tag","children":(function (){var G__96897 = "span";
var G__96898 = (function (){var obj96900 = ({"style":(function (){var obj96902 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj96902;
})(),"children":"Version: 1.0"});
return obj96900;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__96897,G__96898) : helix.core.jsx.call(null,G__96897,G__96898));
})()});
return obj96896;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__96893,G__96894) : helix.core.jsx.call(null,G__96893,G__96894));
})(),(function (){var G__96903 = app.shared.boiler.core.boiler;
var G__96904 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__96903,G__96904) : helix.core.jsx.call(null,G__96903,G__96904));
})(),(function (){var G__96905 = app.shared.sidebar.sidebar;
var G__96906 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__96905,G__96906) : helix.core.jsx.call(null,G__96905,G__96906));
})(),(function (){var G__96907 = app.shared.user_menu.user_menu;
var G__96908 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__96907,G__96908) : helix.core.jsx.call(null,G__96907,G__96908));
})(),(function (){var G__96909 = app.shared.select_kit.core.select_kit_menu;
var G__96910 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__96909,G__96910) : helix.core.jsx.call(null,G__96909,G__96910));
})(),(function (){var G__96911 = app.shared.control_panel.core.control_panel;
var G__96912 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__96911,G__96912) : helix.core.jsx.call(null,G__96911,G__96912));
})(),(function (){var G__96913 = kit;
switch (G__96913) {
case "connect":
var G__96914 = app.connect.core.connect_kit;
var G__96915 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__96914,G__96915) : helix.core.jsx.call(null,G__96914,G__96915));

break;
default:
return null;

}
})()]});
return obj96890;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__96887,G__96888) : helix.core.jsxs.call(null,G__96887,G__96888));
});
if(goog.DEBUG === true){
var G__96916 = G__96881;
(G__96916.displayName = "app.app/app");

return G__96916;
} else {
return G__96881;
}
})();




//# sourceMappingURL=app.app.js.map
