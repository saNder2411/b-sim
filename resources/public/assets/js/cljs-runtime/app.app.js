goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__82008 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__82009 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__82012_82044 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__82013_82045 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__82012_82044,G__82013_82045) : helix.hooks.raw_use_effect.call(null,G__82012_82044,G__82013_82045));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__82014 = "div";
var G__82015 = (function (){var obj82017 = ({"className":"kit-wrapper","style":(function (){var obj82019 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj82019;
})(),"children":[(function (){var G__82020 = "p";
var G__82021 = (function (){var obj82023 = ({"className":"version-tag","children":(function (){var G__82024 = "span";
var G__82025 = (function (){var obj82027 = ({"style":(function (){var obj82029 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj82029;
})(),"children":"Version: 1.0"});
return obj82027;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82024,G__82025) : helix.core.jsx.call(null,G__82024,G__82025));
})()});
return obj82023;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82020,G__82021) : helix.core.jsx.call(null,G__82020,G__82021));
})(),(function (){var G__82030 = app.shared.components.notifications.notifications;
var G__82031 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82030,G__82031) : helix.core.jsx.call(null,G__82030,G__82031));
})(),(function (){var G__82032 = app.shared.components.modal.info;
var G__82033 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82032,G__82033) : helix.core.jsx.call(null,G__82032,G__82033));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__82034 = app.connect.cables.cables;
var G__82035 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82034,G__82035) : helix.core.jsx.call(null,G__82034,G__82035));
})():null),(function (){var G__82036 = app.shared.boiler_plant.core.boiler_plant;
var G__82037 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82036,G__82037) : helix.core.jsx.call(null,G__82036,G__82037));
})(),(function (){var G__82038 = app.shared.sidebar.core.sidebar;
var G__82039 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82038,G__82039) : helix.core.jsx.call(null,G__82038,G__82039));
})(),(function (){var G__82040 = kit;
switch (G__82040) {
case "connect":
var G__82041 = app.connect.core.connect_kit;
var G__82042 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82041,G__82042) : helix.core.jsx.call(null,G__82041,G__82042));

break;
default:
return null;

}
})()]});
return obj82017;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__82014,G__82015) : helix.core.jsxs.call(null,G__82014,G__82015));
});
if(goog.DEBUG === true){
var G__82043 = G__82008;
(G__82043.displayName = "app.app/app");

return G__82043;
} else {
return G__82008;
}
})();




//# sourceMappingURL=app.app.js.map
