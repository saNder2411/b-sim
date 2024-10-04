goog.provide('app.app');
app.app.window_resizing_handler = (function app$app$window_resizing_handler(w){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","resize","screen/resize",-600623550),w.target.innerWidth,w.target.innerHeight], null));
});

app.app.app = (function (){var G__41784 = (function app$app$app_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41785 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__41788_41820 = helix.hooks.wrap_fx((function (){
window.addEventListener("resize",app.app.window_resizing_handler);

refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ws","connect","ws/connect",1232825645)], null));

return (function (){
return window.removeEventListener("resize",app.app.window_resizing_handler);
});
}));
var G__41789_41821 = [];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__41788_41820,G__41789_41821) : helix.hooks.raw_use_effect.call(null,G__41788_41820,G__41789_41821));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var w = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","w","screen/w",1057353813)], null));
var h = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","h","screen/h",-138883872)], null));
var zoom = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("screen","zoom","screen/zoom",1289259126)], null));
var G__41790 = "div";
var G__41791 = (function (){var obj41793 = ({"className":"kit-wrapper","style":(function (){var obj41795 = ({"width":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"px"].join('')),"height":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),"px"].join(''))});
return obj41795;
})(),"children":[(function (){var G__41796 = "p";
var G__41797 = (function (){var obj41799 = ({"className":"version-tag","children":(function (){var G__41800 = "span";
var G__41801 = (function (){var obj41803 = ({"style":(function (){var obj41805 = ({"fontSize":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(((14) * zoom)),"px"].join(''))});
return obj41805;
})(),"children":"Version: 1.0"});
return obj41803;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41800,G__41801) : helix.core.jsx.call(null,G__41800,G__41801));
})()});
return obj41799;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41796,G__41797) : helix.core.jsx.call(null,G__41796,G__41797));
})(),(function (){var G__41806 = app.ui.shared.components.notifications.notifications;
var G__41807 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41806,G__41807) : helix.core.jsx.call(null,G__41806,G__41807));
})(),(function (){var G__41808 = app.ui.shared.components.modal.info;
var G__41809 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41808,G__41809) : helix.core.jsx.call(null,G__41808,G__41809));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,new cljs.core.Keyword(null,"connect","connect",1232828233)))?(function (){var G__41810 = app.ui.kits.connect.cables.cables;
var G__41811 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41810,G__41811) : helix.core.jsx.call(null,G__41810,G__41811));
})():null),(function (){var G__41812 = app.ui.shared.boiler_plant.core.boiler_plant;
var G__41813 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41812,G__41813) : helix.core.jsx.call(null,G__41812,G__41813));
})(),(function (){var G__41814 = app.ui.shared.sidebar.core.sidebar;
var G__41815 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41814,G__41815) : helix.core.jsx.call(null,G__41814,G__41815));
})(),(function (){var G__41816 = kit;
var G__41816__$1 = (((G__41816 instanceof cljs.core.Keyword))?G__41816.fqn:null);
switch (G__41816__$1) {
case "connect":
var G__41817 = app.ui.kits.connect.core.connect_kit;
var G__41818 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41817,G__41818) : helix.core.jsx.call(null,G__41817,G__41818));

break;
default:
return null;

}
})()]});
return obj41793;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41790,G__41791) : helix.core.jsxs.call(null,G__41790,G__41791));
});
if(goog.DEBUG === true){
var G__41819 = G__41784;
(G__41819.displayName = "app.app/app");

return G__41819;
} else {
return G__41784;
}
})();




//# sourceMappingURL=app.app.js.map
