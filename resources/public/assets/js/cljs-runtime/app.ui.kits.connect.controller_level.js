goog.provide('app.ui.kits.connect.controller_level');

app.ui.kits.connect.controller_level.controller_level = (function (){var G__37209 = (function app$ui$kits$connect$controller_level$controller_level_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var level_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("level","controller-id","level/controller-id",-864292571)], null));
var level_controller_full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-level-controller","data-by-path","current-level-controller/data-by-path",151959747),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var G__37232 = helix.core.Fragment;
var G__37233 = ({"children": [(function (){var G__37236 = level_controller_id;
switch (G__37236) {
case "none":
var G__37243 = app.ui.shared.components.controller.placeholder;
var G__37244 = (function (){var obj37252 = ({"x":"72%","y":"1.6%","w":"13.5%","title":"Level"});
return obj37252;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37243,G__37244) : helix.core.jsx.call(null,G__37243,G__37244));

break;
case "NRR 2-60":
var G__37254 = app.ui.kits.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__37255 = (function (){var obj37260 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj37260;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37254,G__37255) : helix.core.jsx.call(null,G__37254,G__37255));

break;
case "NRR 2-60 3C":
var G__37267 = app.ui.kits.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__37268 = (function (){var obj37272 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj37272;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37267,G__37268) : helix.core.jsx.call(null,G__37267,G__37268));

break;
case "NRR 2-61":
var G__37278 = app.ui.kits.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__37279 = (function (){var obj37283 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj37283;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37278,G__37279) : helix.core.jsx.call(null,G__37278,G__37279));

break;
case "NRR 2-61 3C":
var G__37293 = app.ui.kits.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__37294 = (function (){var obj37297 = ({"x":"72%","y":"1.6%","w":"13.5%"});
return obj37297;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37293,G__37294) : helix.core.jsx.call(null,G__37293,G__37294));

break;
default:
return null;

}
})(),(function (){var G__37302 = app.ui.shared.components.controller.full_screen;
var G__37303 = (function (){var obj37309 = ({"show":level_controller_full_screen,"on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-level-controller","change","current-level-controller/change",1162658817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),false], null)], null));
}),"children":(function (){var G__37314 = level_controller_id;
switch (G__37314) {
case "NRR 2-60":
var G__37323 = app.ui.kits.connect.NRR_2_60.NRR_2_60.NRR_2_60;
var G__37324 = (function (){var obj37332 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj37332;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37323,G__37324) : helix.core.jsx.call(null,G__37323,G__37324));

break;
case "NRR 2-60 3C":
var G__37335 = app.ui.kits.connect.NRR_2_60_3C.NRR_2_60_3C.NRR_2_60_3C;
var G__37336 = (function (){var obj37341 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj37341;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37335,G__37336) : helix.core.jsx.call(null,G__37335,G__37336));

break;
case "NRR 2-61":
var G__37350 = app.ui.kits.connect.NRR_2_61.NRR_2_61.NRR_2_61;
var G__37351 = (function (){var obj37353 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj37353;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37350,G__37351) : helix.core.jsx.call(null,G__37350,G__37351));

break;
case "NRR 2-61 3C":
var G__37361 = app.ui.kits.connect.NRR_2_61_3C.NRR_2_61_3C.NRR_2_61_3C;
var G__37362 = (function (){var obj37367 = ({"x":"30%","y":"38.85%","w":"40%"});
return obj37367;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37361,G__37362) : helix.core.jsx.call(null,G__37361,G__37362));

break;
default:
return null;

}
})()});
return obj37309;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37302,G__37303) : helix.core.jsx.call(null,G__37302,G__37303));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37232,G__37233) : helix.core.jsxs.call(null,G__37232,G__37233));
});
if(goog.DEBUG === true){
var G__37376 = G__37209;
(G__37376.displayName = "app.ui.kits.connect.controller-level/controller-level");

return G__37376;
} else {
return G__37209;
}
})();




//# sourceMappingURL=app.ui.kits.connect.controller_level.js.map
