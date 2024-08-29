goog.provide('app.ui.shared.boiler_plant.feedwater.toolbar_panel');

app.ui.shared.boiler_plant.feedwater.toolbar_panel.feedwater_toolbar_panel = (function (){var G__39701 = (function app$ui$shared$boiler_plant$feedwater$toolbar_panel$feedwater_toolbar_panel_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-show-toolbar-panel","feedwater-show-toolbar-panel",1348116306)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__39706 = helix.core.Fragment;
var G__39707 = ({"children": [(function (){var G__39710 = app.ui.shared.components.toolbar.title;
var G__39711 = (function (){var obj39713 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater"});
return obj39713;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39710,G__39711) : helix.core.jsx.call(null,G__39710,G__39711));
})(),(function (){var G__39719 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39720 = (function (){var obj39723 = ({"x":(1114),"y":(54),"inactive":cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__39733 = app.ui.shared.components.toolbar.btn_settings;
var G__39734 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39733,G__39734) : helix.core.jsx.call(null,G__39733,G__39734));
})()});
return obj39723;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39719,G__39720) : helix.core.jsx.call(null,G__39719,G__39720));
})(),(function (){var G__39743 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39744 = (function (){var obj39749 = ({"x":(1174),"y":(54),"children":(function (){var G__39759 = app.ui.shared.components.toolbar.btn_divider;
var G__39760 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39759,G__39760) : helix.core.jsx.call(null,G__39759,G__39760));
})()});
return obj39749;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39743,G__39744) : helix.core.jsx.call(null,G__39743,G__39744));
})(),(function (){var G__39773 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39774 = (function (){var obj39780 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__39791 = app.ui.shared.components.toolbar.btn_info;
var G__39792 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39791,G__39792) : helix.core.jsx.call(null,G__39791,G__39792));
})()});
return obj39780;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39773,G__39774) : helix.core.jsx.call(null,G__39773,G__39774));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39706,G__39707) : helix.core.jsxs.call(null,G__39706,G__39707));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39802 = G__39701;
(G__39802.displayName = "app.ui.shared.boiler-plant.feedwater.toolbar-panel/feedwater-toolbar-panel");

return G__39802;
} else {
return G__39701;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.feedwater.toolbar_panel.js.map
