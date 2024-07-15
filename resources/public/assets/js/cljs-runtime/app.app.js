goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__28512 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__28516_28548 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__28517_28549 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__28516_28548,G__28517_28549) : helix.hooks.raw_use_effect.call(null,G__28516_28548,G__28517_28549));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__28518 = "div";
var G__28519 = (function (){var obj28521 = ({"className":"kit-wrapper","style":(function (){var obj28523 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj28523;
})(),"children":[(function (){var G__28524 = "p";
var G__28525 = (function (){var obj28527 = ({"className":"version-tag","children":(function (){var G__28528 = "span";
var G__28529 = (function (){var obj28531 = ({"style":(function (){var obj28533 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj28533;
})(),"children":"Version: 1.0"});
return obj28531;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28528,G__28529) : helix.core.jsx.call(null,G__28528,G__28529));
})()});
return obj28527;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28524,G__28525) : helix.core.jsx.call(null,G__28524,G__28525));
})(),(function (){var G__28534 = app.shared.components.notifications.notifications;
var G__28535 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28534,G__28535) : helix.core.jsx.call(null,G__28534,G__28535));
})(),(function (){var G__28536 = app.shared.components.modal.info;
var G__28537 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28536,G__28537) : helix.core.jsx.call(null,G__28536,G__28537));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"))?(function (){var G__28538 = app.connect.cables.cables;
var G__28539 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28538,G__28539) : helix.core.jsx.call(null,G__28538,G__28539));
})():null),(function (){var G__28540 = app.shared.boiler_plant.core.boiler_plant;
var G__28541 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28540,G__28541) : helix.core.jsx.call(null,G__28540,G__28541));
})(),(function (){var G__28542 = app.shared.sidebar.core.sidebar;
var G__28543 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28542,G__28543) : helix.core.jsx.call(null,G__28542,G__28543));
})(),(function (){var G__28544 = kit;
switch (G__28544) {
case "connect":
var G__28545 = app.connect.core.connect_kit;
var G__28546 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28545,G__28546) : helix.core.jsx.call(null,G__28545,G__28546));

break;
default:
return null;

}
})()]});
return obj28521;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28518,G__28519) : helix.core.jsxs.call(null,G__28518,G__28519));
});
if(goog.DEBUG === true){
var G__28547 = G__28512;
(G__28547.displayName = "app.app/app");

return G__28547;
} else {
return G__28512;
}
})();




//# sourceMappingURL=app.app.js.map
