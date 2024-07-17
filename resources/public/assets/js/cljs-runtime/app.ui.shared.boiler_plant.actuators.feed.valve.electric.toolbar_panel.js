goog.provide('app.ui.shared.boiler_plant.actuators.feed.valve.electric.toolbar_panel');

app.ui.shared.boiler_plant.actuators.feed.valve.electric.toolbar_panel.feed_electric_valve_toolbar_panel = (function (){var G__29855 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$toolbar_panel$feed_electric_valve_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feed-electric-valve-show-toolbar-panel","feed-electric-valve-show-toolbar-panel",-1092025103)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__29862 = helix.core.Fragment;
var G__29863 = ({"children": [(function (){var G__29867 = app.ui.shared.components.toolbar.title;
var G__29868 = (function (){var obj29873 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Electric Valve"});
return obj29873;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29867,G__29868) : helix.core.jsx.call(null,G__29867,G__29868));
})(),(function (){var G__29882 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__29883 = (function (){var obj29887 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj29887;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29882,G__29883) : helix.core.jsx.call(null,G__29882,G__29883));
})(),(function (){var G__29892 = app.ui.shared.components.toolbar.btn_wrapper;
var G__29893 = (function (){var obj29900 = ({"x":(1064),"y":(54),"children":(function (){var G__29903 = app.ui.shared.components.toolbar.btn_divider;
var G__29904 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29903,G__29904) : helix.core.jsx.call(null,G__29903,G__29904));
})()});
return obj29900;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29892,G__29893) : helix.core.jsx.call(null,G__29892,G__29893));
})(),(function (){var G__29914 = app.ui.shared.components.toolbar.btn_wrapper;
var G__29915 = (function (){var obj29922 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__29937 = app.ui.shared.components.toolbar.btn_settings;
var G__29938 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29937,G__29938) : helix.core.jsx.call(null,G__29937,G__29938));
})()});
return obj29922;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29914,G__29915) : helix.core.jsx.call(null,G__29914,G__29915));
})(),(function (){var G__29950 = app.ui.shared.components.toolbar.btn_wrapper;
var G__29951 = (function (){var obj29962 = ({"x":(1174),"y":(54),"children":(function (){var G__29971 = app.ui.shared.components.toolbar.btn_divider;
var G__29972 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29971,G__29972) : helix.core.jsx.call(null,G__29971,G__29972));
})()});
return obj29962;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29950,G__29951) : helix.core.jsx.call(null,G__29950,G__29951));
})(),(function (){var G__29987 = app.ui.shared.components.toolbar.btn_wrapper;
var G__29988 = (function (){var obj29996 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater valve is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__30011 = app.ui.shared.components.toolbar.btn_info;
var G__30012 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30011,G__30012) : helix.core.jsx.call(null,G__30011,G__30012));
})()});
return obj29996;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29987,G__29988) : helix.core.jsx.call(null,G__29987,G__29988));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29862,G__29863) : helix.core.jsxs.call(null,G__29862,G__29863));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__30029 = G__29855;
(G__30029.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.toolbar-panel/feed-electric-valve-toolbar-panel");

return G__30029;
} else {
return G__29855;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.feed.valve.electric.toolbar_panel.js.map
