goog.provide('app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.toolbar_panel');

app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.toolbar_panel.feed_pneumatic_valve_toolbar_panel = (function (){var G__35743 = (function app$ui$shared$boiler_plant$actuators$feed$valve$pneumatic$toolbar_panel$feed_pneumatic_valve_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__35744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feed-pneumatic-valve-show-toolbar-panel","feed-pneumatic-valve-show-toolbar-panel",-1436002987)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__35747 = helix.core.Fragment;
var G__35748 = ({"children": [(function (){var G__35749 = app.ui.shared.components.toolbar.title;
var G__35750 = (function (){var obj35752 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Pneumatic Valve"});
return obj35752;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35749,G__35750) : helix.core.jsx.call(null,G__35749,G__35750));
})(),(function (){var G__35753 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__35754 = (function (){var obj35756 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj35756;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35753,G__35754) : helix.core.jsx.call(null,G__35753,G__35754));
})(),(function (){var G__35757 = app.ui.shared.components.toolbar.btn_wrapper;
var G__35758 = (function (){var obj35760 = ({"x":(1064),"y":(54),"children":(function (){var G__35761 = app.ui.shared.components.toolbar.btn_divider;
var G__35762 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35761,G__35762) : helix.core.jsx.call(null,G__35761,G__35762));
})()});
return obj35760;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35757,G__35758) : helix.core.jsx.call(null,G__35757,G__35758));
})(),(function (){var G__35763 = app.ui.shared.components.toolbar.btn_wrapper;
var G__35764 = (function (){var obj35766 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pneumatic-valve","change-feed-pneumatic-valve",-225627217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__35767 = app.ui.shared.components.toolbar.btn_settings;
var G__35768 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35767,G__35768) : helix.core.jsx.call(null,G__35767,G__35768));
})()});
return obj35766;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35763,G__35764) : helix.core.jsx.call(null,G__35763,G__35764));
})(),(function (){var G__35769 = app.ui.shared.components.toolbar.btn_wrapper;
var G__35770 = (function (){var obj35772 = ({"x":(1174),"y":(54),"children":(function (){var G__35773 = app.ui.shared.components.toolbar.btn_divider;
var G__35774 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35773,G__35774) : helix.core.jsx.call(null,G__35773,G__35774));
})()});
return obj35772;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35769,G__35770) : helix.core.jsx.call(null,G__35769,G__35770));
})(),(function (){var G__35775 = app.ui.shared.components.toolbar.btn_wrapper;
var G__35776 = (function (){var obj35778 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater valve is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__35779 = app.ui.shared.components.toolbar.btn_info;
var G__35780 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35779,G__35780) : helix.core.jsx.call(null,G__35779,G__35780));
})()});
return obj35778;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35775,G__35776) : helix.core.jsx.call(null,G__35775,G__35776));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__35747,G__35748) : helix.core.jsxs.call(null,G__35747,G__35748));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__35781 = G__35743;
(G__35781.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.pneumatic.toolbar-panel/feed-pneumatic-valve-toolbar-panel");

return G__35781;
} else {
return G__35743;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.toolbar_panel.js.map
