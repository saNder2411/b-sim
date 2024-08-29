goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resize","window-resize",-2050654634),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__41213 = (function app$app$app_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__41216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var G__41219_41273 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","connect","ws/connect",1232825645)], null));

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__41220_41274 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__41219_41273,G__41220_41274) : helix.hooks.raw_use_effect.call(null,G__41219_41273,G__41220_41274));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-w","screen-w",462794367)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-h","screen-h",624845276)], null));
var scale_f = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-scale-f","screen-scale-f",-1876855878)], null));
var G__41222 = "div";
var G__41223 = (function (){var obj41227 = ({"className":"kit-wrapper","style":(function (){var obj41229 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj41229;
})(),"children":[(function (){var G__41230 = "p";
var G__41231 = (function (){var obj41233 = ({"className":"version-tag","children":(function (){var G__41235 = "span";
var G__41236 = (function (){var obj41239 = ({"style":(function (){var obj41241 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * scale_f)),"px"].join(''))});
return obj41241;
})(),"children":"Version: 1.0"});
return obj41239;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41235,G__41236) : helix.core.jsx.call(null,G__41235,G__41236));
})()});
return obj41233;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41230,G__41231) : helix.core.jsx.call(null,G__41230,G__41231));
})(),(function (){var G__41243 = app.ui.shared.components.notifications.notifications;
var G__41244 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41243,G__41244) : helix.core.jsx.call(null,G__41243,G__41244));
})(),(function (){var G__41246 = app.ui.shared.components.modal.info;
var G__41247 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41246,G__41247) : helix.core.jsx.call(null,G__41246,G__41247));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,new cljs.core.Keyword(null,"connect","connect",1232828233)))?(function (){var G__41250 = app.ui.kits.connect.cables.cables;
var G__41251 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41250,G__41251) : helix.core.jsx.call(null,G__41250,G__41251));
})():null),(function (){var G__41252 = app.ui.shared.boiler_plant.core.boiler_plant;
var G__41253 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41252,G__41253) : helix.core.jsx.call(null,G__41252,G__41253));
})(),(function (){var G__41260 = app.ui.shared.sidebar.core.sidebar;
var G__41261 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41260,G__41261) : helix.core.jsx.call(null,G__41260,G__41261));
})(),(function (){var G__41263 = kit;
var G__41263__$1 = (((G__41263 instanceof cljs.core.Keyword))?G__41263.fqn:null);
switch (G__41263__$1) {
case "connect":
var G__41266 = app.ui.kits.connect.core.connect_kit;
var G__41268 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41266,G__41268) : helix.core.jsx.call(null,G__41266,G__41268));

break;
default:
return null;

}
})()]});
return obj41227;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41222,G__41223) : helix.core.jsxs.call(null,G__41222,G__41223));
});
if(goog.DEBUG === true){
var G__41270 = G__41213;
(G__41270.displayName = "app.app/app");

return G__41270;
} else {
return G__41213;
}
})();




//# sourceMappingURL=app.app.js.map
