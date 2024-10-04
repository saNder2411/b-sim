goog.provide('app.ui.kits.connect.controller_cond');

app.ui.kits.connect.controller_cond.controller_cond = (function (){var G__36957 = (function app$ui$kits$connect$controller_cond$controller_cond_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var cond_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cond","controller-id","cond/controller-id",-1029121401)], null));
var cond_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-cond-controller","data-by-path","current-cond-controller/data-by-path",-2770519),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var G__36979 = helix.core.Fragment;
var G__36980 = ({"children": [(function (){var G__36987 = cond_controller_id;
switch (G__36987) {
case "none":
var G__36990 = app.ui.shared.components.controller.placeholder;
var G__36991 = (function (){var obj36997 = ({"x":"58%","y":"1.6%","w":"13.5%","title":"Conductivity"});
return obj36997;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36990,G__36991) : helix.core.jsx.call(null,G__36990,G__36991));

break;
case "LRR 1-60":
var G__37003 = app.ui.kits.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__37004 = (function (){var obj37010 = ({"x":"58%","y":"1.6%","w":"13.5%"});
return obj37010;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37003,G__37004) : helix.core.jsx.call(null,G__37003,G__37004));

break;
default:
return null;

}
})(),(function (){var G__37017 = app.ui.shared.components.controller.full_screen;
var G__37018 = (function (){var obj37022 = ({"show":cond_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-cond-controller","change","current-cond-controller/change",-291388693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),false], null)], null));
}),"children":(function (){var G__37023 = cond_controller_id;
switch (G__37023) {
case "LRR 1-60":
var G__37027 = app.ui.kits.connect.LRR_1_60.LRR_1_60.LRR_1_60;
var G__37028 = (function (){var obj37032 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj37032;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37027,G__37028) : helix.core.jsx.call(null,G__37027,G__37028));

break;
default:
return null;

}
})()});
return obj37022;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37017,G__37018) : helix.core.jsx.call(null,G__37017,G__37018));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36979,G__36980) : helix.core.jsxs.call(null,G__36979,G__36980));
});
if(goog.DEBUG === true){
var G__37048 = G__36957;
(G__37048.displayName = "app.ui.kits.connect.controller-cond/controller-cond");

return G__37048;
} else {
return G__36957;
}
})();




//# sourceMappingURL=app.ui.kits.connect.controller_cond.js.map
