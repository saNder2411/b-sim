goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__28510 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__28514_28542 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__28515_28543 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__28514_28542,G__28515_28543) : helix.hooks.raw_use_effect.call(null,G__28514_28542,G__28515_28543));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__28516 = "div";
var G__28517 = (function (){var obj28519 = ({"className":"kit-wrapper","style":(function (){var obj28521 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj28521;
})(),"children":[(function (){var G__28522 = "p";
var G__28523 = (function (){var obj28525 = ({"className":"version-tag","children":(function (){var G__28526 = "span";
var G__28527 = (function (){var obj28529 = ({"style":(function (){var obj28531 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj28531;
})(),"children":"Version: 1.0"});
return obj28529;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28526,G__28527) : helix.core.jsx.call(null,G__28526,G__28527));
})()});
return obj28525;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28522,G__28523) : helix.core.jsx.call(null,G__28522,G__28523));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__28532 = app.connect.cables.cables;
var G__28533 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28532,G__28533) : helix.core.jsx.call(null,G__28532,G__28533));
})():null),(function (){var G__28534 = app.shared.boiler_plant.core.boiler_plant;
var G__28535 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28534,G__28535) : helix.core.jsx.call(null,G__28534,G__28535));
})(),(function (){var G__28536 = app.shared.sidebar.core.sidebar;
var G__28537 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28536,G__28537) : helix.core.jsx.call(null,G__28536,G__28537));
})(),(function (){var G__28538 = kit;
switch (G__28538) {
case "connect":
var G__28539 = app.connect.core.connect_kit;
var G__28540 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28539,G__28540) : helix.core.jsx.call(null,G__28539,G__28540));

break;
default:
return null;

}
})()]});
return obj28519;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28516,G__28517) : helix.core.jsxs.call(null,G__28516,G__28517));
});
if(goog.DEBUG === true){
var G__28541 = G__28510;
(G__28541.displayName = "app.app/app");

return G__28541;
} else {
return G__28510;
}
})();




//# sourceMappingURL=app.app.js.map
