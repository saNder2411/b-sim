goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__29056 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29057 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__29060_29092 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__29061_29093 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__29060_29092,G__29061_29093) : helix.hooks.raw_use_effect.call(null,G__29060_29092,G__29061_29093));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__29062 = "div";
var G__29063 = (function (){var obj29065 = ({"className":"kit-wrapper","style":(function (){var obj29067 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj29067;
})(),"children":[(function (){var G__29068 = "p";
var G__29069 = (function (){var obj29071 = ({"className":"version-tag","children":(function (){var G__29072 = "span";
var G__29073 = (function (){var obj29075 = ({"style":(function (){var obj29077 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj29077;
})(),"children":"Version: 1.0"});
return obj29075;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29072,G__29073) : helix.core.jsx.call(null,G__29072,G__29073));
})()});
return obj29071;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29068,G__29069) : helix.core.jsx.call(null,G__29068,G__29069));
})(),(function (){var G__29078 = app.shared.boiler.core.boiler;
var G__29079 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29078,G__29079) : helix.core.jsx.call(null,G__29078,G__29079));
})(),(function (){var G__29080 = app.shared.sidebar.core.sidebar;
var G__29081 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29080,G__29081) : helix.core.jsx.call(null,G__29080,G__29081));
})(),(function (){var G__29082 = app.shared.user_menu.core.user_menu;
var G__29083 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29082,G__29083) : helix.core.jsx.call(null,G__29082,G__29083));
})(),(function (){var G__29084 = app.shared.select_kit.core.select_kit_menu;
var G__29085 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29084,G__29085) : helix.core.jsx.call(null,G__29084,G__29085));
})(),(function (){var G__29086 = app.shared.control_panel.core.control_panel;
var G__29087 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29086,G__29087) : helix.core.jsx.call(null,G__29086,G__29087));
})(),(function (){var G__29088 = kit;
switch (G__29088) {
case "connect":
var G__29089 = app.connect.core.connect_kit;
var G__29090 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29089,G__29090) : helix.core.jsx.call(null,G__29089,G__29090));

break;
default:
return null;

}
})()]});
return obj29065;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29062,G__29063) : helix.core.jsxs.call(null,G__29062,G__29063));
});
if(goog.DEBUG === true){
var G__29091 = G__29056;
(G__29091.displayName = "app.app/app");

return G__29091;
} else {
return G__29056;
}
})();




//# sourceMappingURL=app.app.js.map
