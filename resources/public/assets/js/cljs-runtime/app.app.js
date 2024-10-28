goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","resize","screen/resize",-600623550),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__35510 = (function app$app$app_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__35511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__35514_35546 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","connect","ws/connect",1232825645)], null));

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__35515_35547 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__35514_35546,G__35515_35547) : helix.hooks.raw_use_effect.call(null,G__35514_35546,G__35515_35547));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","w","screen/w",1057353813)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","h","screen/h",-138883872)], null));
var zoom = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","zoom","screen/zoom",1289259126)], null));
var G__35516 = "div";
var G__35517 = (function (){var obj35519 = ({"className":"kit-wrapper","style":(function (){var obj35521 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj35521;
})(),"children":[(function (){var G__35522 = "p";
var G__35523 = (function (){var obj35525 = ({"className":"version-tag","children":(function (){var G__35526 = "span";
var G__35527 = (function (){var obj35529 = ({"style":(function (){var obj35531 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * zoom)),"px"].join(''))});
return obj35531;
})(),"children":"Version: 1.0"});
return obj35529;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35526,G__35527) : helix.core.jsx.call(null,G__35526,G__35527));
})()});
return obj35525;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35522,G__35523) : helix.core.jsx.call(null,G__35522,G__35523));
})(),(function (){var G__35532 = app.ui.shared.components.notifications.notifications;
var G__35533 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35532,G__35533) : helix.core.jsx.call(null,G__35532,G__35533));
})(),(function (){var G__35534 = app.ui.shared.components.modal.info;
var G__35535 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35534,G__35535) : helix.core.jsx.call(null,G__35534,G__35535));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,new cljs.core.Keyword(null,"connect","connect",1232828233)))?(function (){var G__35536 = app.ui.kits.connect.cables.cables;
var G__35537 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35536,G__35537) : helix.core.jsx.call(null,G__35536,G__35537));
})():null),(function (){var G__35538 = app.ui.shared.boiler_plant.core.boiler_plant;
var G__35539 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35538,G__35539) : helix.core.jsx.call(null,G__35538,G__35539));
})(),(function (){var G__35540 = app.ui.shared.sidebar.core.sidebar;
var G__35541 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35540,G__35541) : helix.core.jsx.call(null,G__35540,G__35541));
})(),(function (){var G__35542 = kit;
var G__35542__$1 = (((G__35542 instanceof cljs.core.Keyword))?G__35542.fqn:null);
switch (G__35542__$1) {
case "connect":
var G__35543 = app.ui.kits.connect.core.connect_kit;
var G__35544 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35543,G__35544) : helix.core.jsx.call(null,G__35543,G__35544));

break;
default:
return null;

}
})()]});
return obj35519;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__35516,G__35517) : helix.core.jsxs.call(null,G__35516,G__35517));
});
if(goog.DEBUG === true){
var G__35545 = G__35510;
(G__35545.displayName = "app.app/app");

return G__35545;
} else {
return G__35510;
}
})();




//# sourceMappingURL=app.app.js.map
