goog.provide('app.shared.boiler_plant.valves.feedwater_pn.toolbar_panel');

app.shared.boiler_plant.valves.feedwater_pn.toolbar_panel.valve_feedwater_pneumatic_toolbar_panel = (function (){var G__81252 = (function app$shared$boiler_plant$valves$feedwater_pn$toolbar_panel$valve_feedwater_pneumatic_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81261 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve-pn-show-toolbar-panel","feedwater-valve-pn-show-toolbar-panel",1716952325)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__81278 = helix.core.Fragment;
var G__81279 = ({"children": [(function (){var G__81286 = app.shared.components.toolbar.title;
var G__81287 = (function (){var obj81299 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Pneumatic Valve"});
return obj81299;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81286,G__81287) : helix.core.jsx.call(null,G__81286,G__81287));
})(),(function (){var G__81306 = app.shared.sidebar.control_panel.slider.core.slider;
var G__81307 = (function (){var obj81313 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj81313;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81306,G__81307) : helix.core.jsx.call(null,G__81306,G__81307));
})(),(function (){var G__81319 = app.shared.components.toolbar.btn_wrapper;
var G__81320 = (function (){var obj81324 = ({"x":(1064),"y":(54),"children":(function (){var G__81328 = app.shared.components.toolbar.btn_divider;
var G__81329 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81328,G__81329) : helix.core.jsx.call(null,G__81328,G__81329));
})()});
return obj81324;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81319,G__81320) : helix.core.jsx.call(null,G__81319,G__81320));
})(),(function (){var G__81334 = app.shared.components.toolbar.btn_wrapper;
var G__81335 = (function (){var obj81340 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve-pn","change-feedwater-valve-pn",470650960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__81346 = app.shared.components.toolbar.btn_settings;
var G__81347 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81346,G__81347) : helix.core.jsx.call(null,G__81346,G__81347));
})()});
return obj81340;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81334,G__81335) : helix.core.jsx.call(null,G__81334,G__81335));
})(),(function (){var G__81354 = app.shared.components.toolbar.btn_wrapper;
var G__81355 = (function (){var obj81362 = ({"x":(1174),"y":(54),"children":(function (){var G__81367 = app.shared.components.toolbar.btn_divider;
var G__81368 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81367,G__81368) : helix.core.jsx.call(null,G__81367,G__81368));
})()});
return obj81362;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81354,G__81355) : helix.core.jsx.call(null,G__81354,G__81355));
})(),(function (){var G__81378 = app.shared.components.toolbar.btn_wrapper;
var G__81379 = (function (){var obj81382 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater valve is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__81390 = app.shared.components.toolbar.btn_info;
var G__81391 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81390,G__81391) : helix.core.jsx.call(null,G__81390,G__81391));
})()});
return obj81382;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81378,G__81379) : helix.core.jsx.call(null,G__81378,G__81379));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__81278,G__81279) : helix.core.jsxs.call(null,G__81278,G__81279));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__81397 = G__81252;
(G__81397.displayName = "app.shared.boiler-plant.valves.feedwater-pn.toolbar-panel/valve-feedwater-pneumatic-toolbar-panel");

return G__81397;
} else {
return G__81252;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.feedwater_pn.toolbar_panel.js.map
