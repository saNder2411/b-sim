goog.provide('app.kits.connect.NRGT_26_2.toolbar_panel');

app.kits.connect.NRGT_26_2.toolbar_panel.NRGT_26_2_toolbar_panel = (function (){var G__45382 = (function app$kits$connect$NRGT_26_2$toolbar_panel$NRGT_26_2_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__45386 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRGT-26-2-show-toolbar","NRGT-26-2-show-toolbar",-183029269)], null));
if(cljs.core.truth_(show_toolbar)){
var G__45396 = helix.core.Fragment;
var G__45397 = ({"children": [(function (){var G__45402 = app.shared.components.toolbar.title;
var G__45403 = (function (){var obj45407 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Transmitter"});
return obj45407;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45402,G__45403) : helix.core.jsx.call(null,G__45402,G__45403));
})(),(function (){var G__45412 = app.shared.components.toolbar.title;
var G__45413 = (function (){var obj45419 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRGT 26-2"});
return obj45419;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45412,G__45413) : helix.core.jsx.call(null,G__45412,G__45413));
})(),(function (){var G__45424 = app.shared.components.toolbar.btn_wrapper;
var G__45425 = (function (){var obj45429 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__45436 = app.shared.components.toolbar.btn_replace;
var G__45437 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45436,G__45437) : helix.core.jsx.call(null,G__45436,G__45437));
})()});
return obj45429;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45424,G__45425) : helix.core.jsx.call(null,G__45424,G__45425));
})(),(function (){var G__45442 = app.shared.components.toolbar.btn_wrapper;
var G__45443 = (function (){var obj45449 = ({"x":(1064),"y":(54),"children":(function (){var G__45454 = app.shared.components.toolbar.btn_divider;
var G__45455 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45454,G__45455) : helix.core.jsx.call(null,G__45454,G__45455));
})()});
return obj45449;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45442,G__45443) : helix.core.jsx.call(null,G__45442,G__45443));
})(),(function (){var G__45460 = app.shared.components.toolbar.btn_wrapper;
var G__45461 = (function (){var obj45467 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__45474 = app.shared.components.toolbar.btn_full_screen;
var G__45475 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45474,G__45475) : helix.core.jsx.call(null,G__45474,G__45475));
})()});
return obj45467;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45460,G__45461) : helix.core.jsx.call(null,G__45460,G__45461));
})(),(function (){var G__45480 = app.shared.components.toolbar.btn_wrapper;
var G__45481 = (function (){var obj45487 = ({"x":(1174),"y":(54),"children":(function (){var G__45490 = app.shared.components.toolbar.btn_divider;
var G__45491 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45490,G__45491) : helix.core.jsx.call(null,G__45490,G__45491));
})()});
return obj45487;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45480,G__45481) : helix.core.jsx.call(null,G__45480,G__45481));
})(),(function (){var G__45500 = app.shared.components.toolbar.btn_wrapper;
var G__45501 = (function (){var obj45505 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Transmitter",new cljs.core.Keyword(null,"text","text",-1790561697),"NRGT 26-2 level transmitters can be used to continually measure the water level in pressurised steam and hot-water plants, or in condensate and feedwater tanks. The calibrated measuring range from 0 % to 100 % constitutes the linear profile of the 4-20 mA current output. The transmitter\u2019s secure 4-20 mA actual value output (SIL 2) can be used with a suitable level controller, as a water level controller with MIN/MAX alarm, for example."], null)], null));
}),"children":(function (){var G__45510 = app.shared.components.toolbar.btn_info;
var G__45511 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45510,G__45511) : helix.core.jsx.call(null,G__45510,G__45511));
})()});
return obj45505;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45500,G__45501) : helix.core.jsx.call(null,G__45500,G__45501));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45396,G__45397) : helix.core.jsxs.call(null,G__45396,G__45397));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__45515 = G__45382;
(G__45515.displayName = "app.kits.connect.NRGT-26-2.toolbar-panel/NRGT-26-2-toolbar-panel");

return G__45515;
} else {
return G__45382;
}
})();




//# sourceMappingURL=app.kits.connect.NRGT_26_2.toolbar_panel.js.map
