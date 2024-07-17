goog.provide('app.connect.NRGT_26_2.toolbar_panel');

app.connect.NRGT_26_2.toolbar_panel.NRGT_26_2_toolbar_panel = (function (){var G__43523 = (function app$connect$NRGT_26_2$toolbar_panel$NRGT_26_2_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__43534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRGT-26-2-show-toolbar","NRGT-26-2-show-toolbar",-183029269)], null));
if(cljs.core.truth_(show_toolbar)){
var G__43554 = helix.core.Fragment;
var G__43555 = ({"children": [(function (){var G__43564 = app.shared.components.toolbar.title;
var G__43565 = (function (){var obj43575 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Transmitter"});
return obj43575;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43564,G__43565) : helix.core.jsx.call(null,G__43564,G__43565));
})(),(function (){var G__43593 = app.shared.components.toolbar.title;
var G__43594 = (function (){var obj43602 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRGT 26-2"});
return obj43602;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43593,G__43594) : helix.core.jsx.call(null,G__43593,G__43594));
})(),(function (){var G__43619 = app.shared.components.toolbar.btn_wrapper;
var G__43620 = (function (){var obj43626 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__43640 = app.shared.components.toolbar.btn_replace;
var G__43641 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43640,G__43641) : helix.core.jsx.call(null,G__43640,G__43641));
})()});
return obj43626;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43619,G__43620) : helix.core.jsx.call(null,G__43619,G__43620));
})(),(function (){var G__43653 = app.shared.components.toolbar.btn_wrapper;
var G__43654 = (function (){var obj43668 = ({"x":(1064),"y":(54),"children":(function (){var G__43674 = app.shared.components.toolbar.btn_divider;
var G__43675 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43674,G__43675) : helix.core.jsx.call(null,G__43674,G__43675));
})()});
return obj43668;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43653,G__43654) : helix.core.jsx.call(null,G__43653,G__43654));
})(),(function (){var G__43687 = app.shared.components.toolbar.btn_wrapper;
var G__43688 = (function (){var obj43696 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__43710 = app.shared.components.toolbar.btn_full_screen;
var G__43711 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43710,G__43711) : helix.core.jsx.call(null,G__43710,G__43711));
})()});
return obj43696;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43687,G__43688) : helix.core.jsx.call(null,G__43687,G__43688));
})(),(function (){var G__43726 = app.shared.components.toolbar.btn_wrapper;
var G__43727 = (function (){var obj43734 = ({"x":(1174),"y":(54),"children":(function (){var G__43739 = app.shared.components.toolbar.btn_divider;
var G__43740 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43739,G__43740) : helix.core.jsx.call(null,G__43739,G__43740));
})()});
return obj43734;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43726,G__43727) : helix.core.jsx.call(null,G__43726,G__43727));
})(),(function (){var G__43755 = app.shared.components.toolbar.btn_wrapper;
var G__43756 = (function (){var obj43758 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Transmitter",new cljs.core.Keyword(null,"text","text",-1790561697),"NRGT 26-2 level transmitters can be used to continually measure the water level in pressurised steam and hot-water plants, or in condensate and feedwater tanks. The calibrated measuring range from 0 % to 100 % constitutes the linear profile of the 4-20 mA current output. The transmitter\u2019s secure 4-20 mA actual value output (SIL 2) can be used with a suitable level controller, as a water level controller with MIN/MAX alarm, for example."], null)], null));
}),"children":(function (){var G__43771 = app.shared.components.toolbar.btn_info;
var G__43772 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43771,G__43772) : helix.core.jsx.call(null,G__43771,G__43772));
})()});
return obj43758;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43755,G__43756) : helix.core.jsx.call(null,G__43755,G__43756));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43554,G__43555) : helix.core.jsxs.call(null,G__43554,G__43555));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__43787 = G__43523;
(G__43787.displayName = "app.connect.NRGT-26-2.toolbar-panel/NRGT-26-2-toolbar-panel");

return G__43787;
} else {
return G__43523;
}
})();




//# sourceMappingURL=app.connect.NRGT_26_2.toolbar_panel.js.map
