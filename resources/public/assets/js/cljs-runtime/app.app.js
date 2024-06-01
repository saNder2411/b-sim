goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__37058 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__37059 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__37062_37096 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__37063_37097 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__37062_37096,G__37063_37097) : helix.hooks.raw_use_effect.call(null,G__37062_37096,G__37063_37097));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__37064 = "div";
var G__37065 = (function (){var obj37067 = ({"className":"kit-wrapper","style":(function (){var obj37069 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj37069;
})(),"children":[(function (){var G__37070 = "p";
var G__37071 = (function (){var obj37073 = ({"className":"version-tag","children":(function (){var G__37074 = "span";
var G__37075 = (function (){var obj37077 = ({"style":(function (){var obj37079 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj37079;
})(),"children":"Version: 1.0"});
return obj37077;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37074,G__37075) : helix.core.jsx.call(null,G__37074,G__37075));
})()});
return obj37073;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37070,G__37071) : helix.core.jsx.call(null,G__37070,G__37071));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__37080 = app.connect.cables.cables;
var G__37081 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37080,G__37081) : helix.core.jsx.call(null,G__37080,G__37081));
})():null),(function (){var G__37082 = app.shared.boiler.core.boiler;
var G__37083 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37082,G__37083) : helix.core.jsx.call(null,G__37082,G__37083));
})(),(function (){var G__37084 = app.shared.sidebar.core.sidebar;
var G__37085 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37084,G__37085) : helix.core.jsx.call(null,G__37084,G__37085));
})(),(function (){var G__37086 = app.shared.user_menu.core.user_menu;
var G__37087 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37086,G__37087) : helix.core.jsx.call(null,G__37086,G__37087));
})(),(function (){var G__37088 = app.shared.select_kit.core.select_kit_menu;
var G__37089 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37088,G__37089) : helix.core.jsx.call(null,G__37088,G__37089));
})(),(function (){var G__37090 = app.shared.control_panel.core.control_panel;
var G__37091 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37090,G__37091) : helix.core.jsx.call(null,G__37090,G__37091));
})(),(function (){var G__37092 = kit;
switch (G__37092) {
case "connect":
var G__37093 = app.connect.core.connect_kit;
var G__37094 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37093,G__37094) : helix.core.jsx.call(null,G__37093,G__37094));

break;
default:
return null;

}
})()]});
return obj37067;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37064,G__37065) : helix.core.jsxs.call(null,G__37064,G__37065));
});
if(goog.DEBUG === true){
var G__37095 = G__37058;
(G__37095.displayName = "app.app/app");

return G__37095;
} else {
return G__37058;
}
})();




//# sourceMappingURL=app.app.js.map
