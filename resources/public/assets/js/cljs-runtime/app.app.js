goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__66915 = (function app$app$app_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__66916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var G__66919_66951 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__66920_66952 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__66919_66951,G__66920_66952) : helix.hooks.raw_use_effect.call(null,G__66919_66951,G__66920_66952));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__66921 = "div";
var G__66922 = (function (){var obj66924 = ({"className":"kit-wrapper","style":(function (){var obj66926 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj66926;
})(),"children":[(function (){var G__66927 = "p";
var G__66928 = (function (){var obj66930 = ({"className":"version-tag","children":(function (){var G__66931 = "span";
var G__66932 = (function (){var obj66934 = ({"style":(function (){var obj66936 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj66936;
})(),"children":"Version: 1.0"});
return obj66934;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66931,G__66932) : helix.core.jsx.call(null,G__66931,G__66932));
})()});
return obj66930;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66927,G__66928) : helix.core.jsx.call(null,G__66927,G__66928));
})(),(function (){var G__66937 = app.shared.boiler.core.boiler;
var G__66938 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66937,G__66938) : helix.core.jsx.call(null,G__66937,G__66938));
})(),(function (){var G__66939 = app.shared.sidebar.sidebar;
var G__66940 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66939,G__66940) : helix.core.jsx.call(null,G__66939,G__66940));
})(),(function (){var G__66941 = app.shared.user_menu.user_menu;
var G__66942 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66941,G__66942) : helix.core.jsx.call(null,G__66941,G__66942));
})(),(function (){var G__66943 = app.shared.select_kit.core.select_kit_menu;
var G__66944 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66943,G__66944) : helix.core.jsx.call(null,G__66943,G__66944));
})(),(function (){var G__66945 = app.shared.control_panel.core.control_panel;
var G__66946 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66945,G__66946) : helix.core.jsx.call(null,G__66945,G__66946));
})(),(function (){var G__66947 = kit;
switch (G__66947) {
case "connect":
var G__66948 = app.connect.core.connect_kit;
var G__66949 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66948,G__66949) : helix.core.jsx.call(null,G__66948,G__66949));

break;
default:
return null;

}
})()]});
return obj66924;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__66921,G__66922) : helix.core.jsxs.call(null,G__66921,G__66922));
});
if(goog.DEBUG === true){
var G__66950 = G__66915;
(G__66950.displayName = "app.app/app");

return G__66950;
} else {
return G__66915;
}
})();




//# sourceMappingURL=app.app.js.map
