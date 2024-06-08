goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__34477 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__34481_34515 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__34482_34516 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__34481_34515,G__34482_34516) : helix.hooks.raw_use_effect.call(null,G__34481_34515,G__34482_34516));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__34483 = "div";
var G__34484 = (function (){var obj34486 = ({"className":"kit-wrapper","style":(function (){var obj34488 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj34488;
})(),"children":[(function (){var G__34489 = "p";
var G__34490 = (function (){var obj34492 = ({"className":"version-tag","children":(function (){var G__34493 = "span";
var G__34494 = (function (){var obj34496 = ({"style":(function (){var obj34498 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj34498;
})(),"children":"Version: 1.0"});
return obj34496;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34493,G__34494) : helix.core.jsx.call(null,G__34493,G__34494));
})()});
return obj34492;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34489,G__34490) : helix.core.jsx.call(null,G__34489,G__34490));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__34499 = app.connect.cables.cables;
var G__34500 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34499,G__34500) : helix.core.jsx.call(null,G__34499,G__34500));
})():null),(function (){var G__34501 = app.shared.boiler.core.boiler;
var G__34502 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34501,G__34502) : helix.core.jsx.call(null,G__34501,G__34502));
})(),(function (){var G__34503 = app.shared.sidebar.core.sidebar;
var G__34504 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34503,G__34504) : helix.core.jsx.call(null,G__34503,G__34504));
})(),(function (){var G__34505 = app.shared.user_menu.core.user_menu;
var G__34506 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34505,G__34506) : helix.core.jsx.call(null,G__34505,G__34506));
})(),(function (){var G__34507 = app.shared.select_kit.core.select_kit_menu;
var G__34508 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34507,G__34508) : helix.core.jsx.call(null,G__34507,G__34508));
})(),(function (){var G__34509 = app.shared.control_panel.core.control_panel;
var G__34510 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34509,G__34510) : helix.core.jsx.call(null,G__34509,G__34510));
})(),(function (){var G__34511 = kit;
switch (G__34511) {
case "connect":
var G__34512 = app.connect.core.connect_kit;
var G__34513 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34512,G__34513) : helix.core.jsx.call(null,G__34512,G__34513));

break;
default:
return null;

}
})()]});
return obj34486;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34483,G__34484) : helix.core.jsxs.call(null,G__34483,G__34484));
});
if(goog.DEBUG === true){
var G__34514 = G__34477;
(G__34514.displayName = "app.app/app");

return G__34514;
} else {
return G__34477;
}
})();




//# sourceMappingURL=app.app.js.map
