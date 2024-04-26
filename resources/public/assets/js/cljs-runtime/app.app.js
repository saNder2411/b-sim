goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__46967 = (function app$app$app_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__46968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var G__46971_47001 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__46972_47002 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__46971_47001,G__46972_47002) : helix.hooks.raw_use_effect.call(null,G__46971_47001,G__46972_47002));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__46973 = "div";
var G__46974 = (function (){var obj46976 = ({"className":"kit-wrapper","style":(function (){var obj46978 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj46978;
})(),"children":[(function (){var G__46979 = "p";
var G__46980 = (function (){var obj46982 = ({"className":"version-tag","children":(function (){var G__46983 = "span";
var G__46984 = (function (){var obj46986 = ({"style":(function (){var obj46988 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj46988;
})(),"children":"Version: 1.0"});
return obj46986;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46983,G__46984) : helix.core.jsx.call(null,G__46983,G__46984));
})()});
return obj46982;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46979,G__46980) : helix.core.jsx.call(null,G__46979,G__46980));
})(),(function (){var G__46989 = app.shared.sidebar.sidebar;
var G__46990 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46989,G__46990) : helix.core.jsx.call(null,G__46989,G__46990));
})(),(function (){var G__46991 = app.shared.user_menu.user_menu;
var G__46992 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46991,G__46992) : helix.core.jsx.call(null,G__46991,G__46992));
})(),(function (){var G__46993 = app.shared.select_kit_menu.select_kit_menu;
var G__46994 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46993,G__46994) : helix.core.jsx.call(null,G__46993,G__46994));
})(),(function (){var G__46995 = app.shared.control_panel.core.control_panel;
var G__46996 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46995,G__46996) : helix.core.jsx.call(null,G__46995,G__46996));
})(),(function (){var G__46997 = kit;
switch (G__46997) {
case "connect":
var G__46998 = app.connect.core.connect_kit;
var G__46999 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46998,G__46999) : helix.core.jsx.call(null,G__46998,G__46999));

break;
default:
return null;

}
})()]});
return obj46976;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46973,G__46974) : helix.core.jsxs.call(null,G__46973,G__46974));
});
if(goog.DEBUG === true){
var G__47000 = G__46967;
(G__47000.displayName = "app.app/app");

return G__47000;
} else {
return G__46967;
}
})();




//# sourceMappingURL=app.app.js.map
