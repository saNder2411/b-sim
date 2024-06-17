goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__42088 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__42089 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__42092_42120 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__42093_42121 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__42092_42120,G__42093_42121) : helix.hooks.raw_use_effect.call(null,G__42092_42120,G__42093_42121));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__42094 = "div";
var G__42095 = (function (){var obj42097 = ({"className":"kit-wrapper","style":(function (){var obj42099 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj42099;
})(),"children":[(function (){var G__42100 = "p";
var G__42101 = (function (){var obj42103 = ({"className":"version-tag","children":(function (){var G__42104 = "span";
var G__42105 = (function (){var obj42107 = ({"style":(function (){var obj42109 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj42109;
})(),"children":"Version: 1.0"});
return obj42107;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42104,G__42105) : helix.core.jsx.call(null,G__42104,G__42105));
})()});
return obj42103;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42100,G__42101) : helix.core.jsx.call(null,G__42100,G__42101));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__42110 = app.connect.cables.cables;
var G__42111 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42110,G__42111) : helix.core.jsx.call(null,G__42110,G__42111));
})():null),(function (){var G__42112 = app.shared.boiler_plant.core.boiler_plant;
var G__42113 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42112,G__42113) : helix.core.jsx.call(null,G__42112,G__42113));
})(),(function (){var G__42114 = app.shared.sidebar.core.sidebar;
var G__42115 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42114,G__42115) : helix.core.jsx.call(null,G__42114,G__42115));
})(),(function (){var G__42116 = kit;
switch (G__42116) {
case "connect":
var G__42117 = app.connect.core.connect_kit;
var G__42118 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42117,G__42118) : helix.core.jsx.call(null,G__42117,G__42118));

break;
default:
return null;

}
})()]});
return obj42097;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42094,G__42095) : helix.core.jsxs.call(null,G__42094,G__42095));
});
if(goog.DEBUG === true){
var G__42119 = G__42088;
(G__42119.displayName = "app.app/app");

return G__42119;
} else {
return G__42088;
}
})();




//# sourceMappingURL=app.app.js.map
