goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__29876 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__29880_29914 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__29881_29915 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__29880_29914,G__29881_29915) : helix.hooks.raw_use_effect.call(null,G__29880_29914,G__29881_29915));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__29882 = "div";
var G__29883 = (function (){var obj29885 = ({"className":"kit-wrapper","style":(function (){var obj29887 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj29887;
})(),"children":[(function (){var G__29888 = "p";
var G__29889 = (function (){var obj29891 = ({"className":"version-tag","children":(function (){var G__29892 = "span";
var G__29893 = (function (){var obj29895 = ({"style":(function (){var obj29897 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj29897;
})(),"children":"Version: 1.0"});
return obj29895;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29892,G__29893) : helix.core.jsx.call(null,G__29892,G__29893));
})()});
return obj29891;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29888,G__29889) : helix.core.jsx.call(null,G__29888,G__29889));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__29898 = app.connect.cables.cables;
var G__29899 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29898,G__29899) : helix.core.jsx.call(null,G__29898,G__29899));
})():null),(function (){var G__29900 = app.shared.boiler_plant.core.boiler_plant;
var G__29901 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29900,G__29901) : helix.core.jsx.call(null,G__29900,G__29901));
})(),(function (){var G__29902 = app.shared.sidebar.core.sidebar;
var G__29903 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29902,G__29903) : helix.core.jsx.call(null,G__29902,G__29903));
})(),(function (){var G__29904 = app.shared.user_menu.core.user_menu;
var G__29905 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29904,G__29905) : helix.core.jsx.call(null,G__29904,G__29905));
})(),(function (){var G__29906 = app.shared.select_kit.core.select_kit_menu;
var G__29907 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29906,G__29907) : helix.core.jsx.call(null,G__29906,G__29907));
})(),(function (){var G__29908 = app.shared.control_panel.core.control_panel;
var G__29909 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29908,G__29909) : helix.core.jsx.call(null,G__29908,G__29909));
})(),(function (){var G__29910 = kit;
switch (G__29910) {
case "connect":
var G__29911 = app.connect.core.connect_kit;
var G__29912 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29911,G__29912) : helix.core.jsx.call(null,G__29911,G__29912));

break;
default:
return null;

}
})()]});
return obj29885;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29882,G__29883) : helix.core.jsxs.call(null,G__29882,G__29883));
});
if(goog.DEBUG === true){
var G__29913 = G__29876;
(G__29913.displayName = "app.app/app");

return G__29913;
} else {
return G__29876;
}
})();




//# sourceMappingURL=app.app.js.map
