goog.provide('app.connect.NRG_26_60.toolbar_panel');

app.connect.NRG_26_60.toolbar_panel.NRG_26_60_toolbar_panel = (function (){var G__43530 = (function app$connect$NRG_26_60$toolbar_panel$NRG_26_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__43538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRG-26-60-show-toolbar","NRG-26-60-show-toolbar",149526372)], null));
if(cljs.core.truth_(show_toolbar)){
var G__43552 = helix.core.Fragment;
var G__43553 = ({"children": [(function (){var G__43566 = app.shared.components.toolbar.title;
var G__43567 = (function (){var obj43573 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Electrode"});
return obj43573;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43566,G__43567) : helix.core.jsx.call(null,G__43566,G__43567));
})(),(function (){var G__43587 = app.shared.components.toolbar.title;
var G__43588 = (function (){var obj43596 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRG 26-60"});
return obj43596;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43587,G__43588) : helix.core.jsx.call(null,G__43587,G__43588));
})(),(function (){var G__43609 = app.shared.components.toolbar.btn_wrapper;
var G__43610 = (function (){var obj43614 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__43629 = app.shared.components.toolbar.btn_replace;
var G__43631 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43629,G__43631) : helix.core.jsx.call(null,G__43629,G__43631));
})()});
return obj43614;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43609,G__43610) : helix.core.jsx.call(null,G__43609,G__43610));
})(),(function (){var G__43648 = app.shared.components.toolbar.btn_wrapper;
var G__43649 = (function (){var obj43652 = ({"x":(1064),"y":(54),"children":(function (){var G__43659 = app.shared.components.toolbar.btn_divider;
var G__43660 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43659,G__43660) : helix.core.jsx.call(null,G__43659,G__43660));
})()});
return obj43652;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43648,G__43649) : helix.core.jsx.call(null,G__43648,G__43649));
})(),(function (){var G__43678 = app.shared.components.toolbar.btn_wrapper;
var G__43679 = (function (){var obj43683 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__43700 = app.shared.components.toolbar.btn_full_screen;
var G__43701 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43700,G__43701) : helix.core.jsx.call(null,G__43700,G__43701));
})()});
return obj43683;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43678,G__43679) : helix.core.jsx.call(null,G__43678,G__43679));
})(),(function (){var G__43716 = app.shared.components.toolbar.btn_wrapper;
var G__43717 = (function (){var obj43725 = ({"x":(1174),"y":(54),"children":(function (){var G__43732 = app.shared.components.toolbar.btn_divider;
var G__43735 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43732,G__43735) : helix.core.jsx.call(null,G__43732,G__43735));
})()});
return obj43725;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43716,G__43717) : helix.core.jsx.call(null,G__43716,G__43717));
})(),(function (){var G__43745 = app.shared.components.toolbar.btn_wrapper;
var G__43746 = (function (){var obj43752 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"The NRG 26-60 level electrode can be used together with an NRR 2-60/NRR 2-61 level controller to continuously measure the water level in steam boiler and hot water installations or in condensate and feedwater tanks. In combination with the NRR 2-60/NRR 2-61 level controller, the electrode can be used as a level control system with MIN/MAX alarm, for example."], null)], null));
}),"children":(function (){var G__43761 = app.shared.components.toolbar.btn_info;
var G__43762 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43761,G__43762) : helix.core.jsx.call(null,G__43761,G__43762));
})()});
return obj43752;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43745,G__43746) : helix.core.jsx.call(null,G__43745,G__43746));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43552,G__43553) : helix.core.jsxs.call(null,G__43552,G__43553));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__43779 = G__43530;
(G__43779.displayName = "app.connect.NRG-26-60.toolbar-panel/NRG-26-60-toolbar-panel");

return G__43779;
} else {
return G__43530;
}
})();




//# sourceMappingURL=app.connect.NRG_26_60.toolbar_panel.js.map
