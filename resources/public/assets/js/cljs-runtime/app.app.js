goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__34016 = (function app$app$app_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__34020_34052 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__34021_34053 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__34020_34052,G__34021_34053) : helix.hooks.raw_use_effect.call(null,G__34020_34052,G__34021_34053));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__34022 = "div";
var G__34023 = (function (){var obj34025 = ({"className":"kit-wrapper","style":(function (){var obj34027 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj34027;
})(),"children":[(function (){var G__34028 = "p";
var G__34029 = (function (){var obj34031 = ({"className":"version-tag","children":(function (){var G__34032 = "span";
var G__34033 = (function (){var obj34035 = ({"style":(function (){var obj34037 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj34037;
})(),"children":"Version: 1.0"});
return obj34035;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34032,G__34033) : helix.core.jsx.call(null,G__34032,G__34033));
})()});
return obj34031;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34028,G__34029) : helix.core.jsx.call(null,G__34028,G__34029));
})(),(function (){var G__34038 = app.ui.shared.components.notifications.notifications;
var G__34039 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34038,G__34039) : helix.core.jsx.call(null,G__34038,G__34039));
})(),(function (){var G__34040 = app.ui.shared.components.modal.info;
var G__34041 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34040,G__34041) : helix.core.jsx.call(null,G__34040,G__34041));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,new cljs.core.Keyword(null,"connect","connect",1232828233)))?(function (){var G__34042 = app.ui.kits.connect.cables.cables;
var G__34043 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34042,G__34043) : helix.core.jsx.call(null,G__34042,G__34043));
})():null),(function (){var G__34044 = app.ui.shared.boiler_plant.core.boiler_plant;
var G__34045 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34044,G__34045) : helix.core.jsx.call(null,G__34044,G__34045));
})(),(function (){var G__34046 = app.ui.shared.sidebar.core.sidebar;
var G__34047 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34046,G__34047) : helix.core.jsx.call(null,G__34046,G__34047));
})(),(function (){var G__34048 = kit;
var G__34048__$1 = (((G__34048 instanceof cljs.core.Keyword))?G__34048.fqn:null);
switch (G__34048__$1) {
case "connect":
var G__34049 = app.ui.kits.connect.core.connect_kit;
var G__34050 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34049,G__34050) : helix.core.jsx.call(null,G__34049,G__34050));

break;
default:
return null;

}
})()]});
return obj34025;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34022,G__34023) : helix.core.jsxs.call(null,G__34022,G__34023));
});
if(goog.DEBUG === true){
var G__34051 = G__34016;
(G__34051.displayName = "app.app/app");

return G__34051;
} else {
return G__34016;
}
})();




//# sourceMappingURL=app.app.js.map
