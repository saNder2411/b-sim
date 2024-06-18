goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__53647 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__53648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__53651_53681 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__53652_53682 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__53651_53681,G__53652_53682) : helix.hooks.raw_use_effect.call(null,G__53651_53681,G__53652_53682));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__53653 = "div";
var G__53654 = (function (){var obj53656 = ({"className":"kit-wrapper","style":(function (){var obj53658 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj53658;
})(),"children":[(function (){var G__53659 = "p";
var G__53660 = (function (){var obj53662 = ({"className":"version-tag","children":(function (){var G__53663 = "span";
var G__53664 = (function (){var obj53666 = ({"style":(function (){var obj53668 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj53668;
})(),"children":"Version: 1.0"});
return obj53666;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53663,G__53664) : helix.core.jsx.call(null,G__53663,G__53664));
})()});
return obj53662;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53659,G__53660) : helix.core.jsx.call(null,G__53659,G__53660));
})(),(function (){var G__53669 = app.shared.components.modal_info.modal_info;
var G__53670 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53669,G__53670) : helix.core.jsx.call(null,G__53669,G__53670));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__53671 = app.connect.cables.cables;
var G__53672 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53671,G__53672) : helix.core.jsx.call(null,G__53671,G__53672));
})():null),(function (){var G__53673 = app.shared.boiler_plant.core.boiler_plant;
var G__53674 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53673,G__53674) : helix.core.jsx.call(null,G__53673,G__53674));
})(),(function (){var G__53675 = app.shared.sidebar.core.sidebar;
var G__53676 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53675,G__53676) : helix.core.jsx.call(null,G__53675,G__53676));
})(),(function (){var G__53677 = kit;
switch (G__53677) {
case "connect":
var G__53678 = app.connect.core.connect_kit;
var G__53679 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53678,G__53679) : helix.core.jsx.call(null,G__53678,G__53679));

break;
default:
return null;

}
})()]});
return obj53656;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__53653,G__53654) : helix.core.jsxs.call(null,G__53653,G__53654));
});
if(goog.DEBUG === true){
var G__53680 = G__53647;
(G__53680.displayName = "app.app/app");

return G__53680;
} else {
return G__53647;
}
})();




//# sourceMappingURL=app.app.js.map
