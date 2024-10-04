goog.provide('app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.toolbar_panel');

app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.toolbar_panel.feed_pneumatic_valve_toolbar_panel = (function (){var G__37899 = (function app$ui$shared$boiler_plant$actuators$feed$valve$pneumatic$toolbar_panel$feed_pneumatic_valve_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","show-toolbar-panel","feed-pneumatic-valve/show-toolbar-panel",-1581424558)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__37931 = helix.core.Fragment;
var G__37932 = ({"children": [(function (){var G__37941 = app.ui.shared.components.toolbar.title;
var G__37942 = (function (){var obj37949 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Pneumatic Valve"});
return obj37949;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37941,G__37942) : helix.core.jsx.call(null,G__37941,G__37942));
})(),(function (){var G__37963 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__37964 = (function (){var obj37973 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj37973;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37963,G__37964) : helix.core.jsx.call(null,G__37963,G__37964));
})(),(function (){var G__38001 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38002 = (function (){var obj38010 = ({"x":(1064),"y":(54),"children":(function (){var G__38021 = app.ui.shared.components.toolbar.btn_divider;
var G__38022 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38021,G__38022) : helix.core.jsx.call(null,G__38021,G__38022));
})()});
return obj38010;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38001,G__38002) : helix.core.jsx.call(null,G__38001,G__38002));
})(),(function (){var G__38046 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38049 = (function (){var obj38061 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__38085 = app.ui.shared.components.toolbar.btn_settings;
var G__38086 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38085,G__38086) : helix.core.jsx.call(null,G__38085,G__38086));
})()});
return obj38061;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38046,G__38049) : helix.core.jsx.call(null,G__38046,G__38049));
})(),(function (){var G__38111 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38112 = (function (){var obj38120 = ({"x":(1174),"y":(54),"children":(function (){var G__38131 = app.ui.shared.components.toolbar.btn_divider;
var G__38132 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38131,G__38132) : helix.core.jsx.call(null,G__38131,G__38132));
})()});
return obj38120;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38111,G__38112) : helix.core.jsx.call(null,G__38111,G__38112));
})(),(function (){var G__38158 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38159 = (function (){var obj38165 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater valve is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__38189 = app.ui.shared.components.toolbar.btn_info;
var G__38190 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38189,G__38190) : helix.core.jsx.call(null,G__38189,G__38190));
})()});
return obj38165;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38158,G__38159) : helix.core.jsx.call(null,G__38158,G__38159));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37931,G__37932) : helix.core.jsxs.call(null,G__37931,G__37932));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38225 = G__37899;
(G__38225.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.pneumatic.toolbar-panel/feed-pneumatic-valve-toolbar-panel");

return G__38225;
} else {
return G__37899;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.toolbar_panel.js.map
