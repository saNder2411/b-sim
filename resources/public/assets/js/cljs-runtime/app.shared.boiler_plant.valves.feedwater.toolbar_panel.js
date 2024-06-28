goog.provide('app.shared.boiler_plant.valves.feedwater.toolbar_panel');

app.shared.boiler_plant.valves.feedwater.toolbar_panel.valve_feedwater_toolbar_panel = (function (){var G__66146 = (function app$shared$boiler_plant$valves$feedwater$toolbar_panel$valve_feedwater_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__66148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve-show-toolbar-panel","feedwater-valve-show-toolbar-panel",1796498686)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__66153 = helix.core.Fragment;
var G__66155 = ({"children": [(function (){var G__66157 = app.shared.components.toolbar.title;
var G__66158 = (function (){var obj66162 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Valve"});
return obj66162;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66157,G__66158) : helix.core.jsx.call(null,G__66157,G__66158));
})(),(function (){var G__66165 = app.shared.sidebar.control_panel.slider.core.slider;
var G__66166 = (function (){var obj66170 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj66170;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66165,G__66166) : helix.core.jsx.call(null,G__66165,G__66166));
})(),(function (){var G__66174 = app.shared.components.toolbar.btn_wrapper;
var G__66176 = (function (){var obj66178 = ({"x":(1064),"y":(54),"children":(function (){var G__66179 = app.shared.components.toolbar.btn_divider;
var G__66180 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66179,G__66180) : helix.core.jsx.call(null,G__66179,G__66180));
})()});
return obj66178;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66174,G__66176) : helix.core.jsx.call(null,G__66174,G__66176));
})(),(function (){var G__66185 = app.shared.components.toolbar.btn_wrapper;
var G__66186 = (function (){var obj66188 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__66191 = app.shared.components.toolbar.btn_settings;
var G__66192 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66191,G__66192) : helix.core.jsx.call(null,G__66191,G__66192));
})()});
return obj66188;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66185,G__66186) : helix.core.jsx.call(null,G__66185,G__66186));
})(),(function (){var G__66197 = app.shared.components.toolbar.btn_wrapper;
var G__66198 = (function (){var obj66202 = ({"x":(1174),"y":(54),"children":(function (){var G__66203 = app.shared.components.toolbar.btn_divider;
var G__66204 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66203,G__66204) : helix.core.jsx.call(null,G__66203,G__66204));
})()});
return obj66202;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66197,G__66198) : helix.core.jsx.call(null,G__66197,G__66198));
})(),(function (){var G__66209 = app.shared.components.toolbar.btn_wrapper;
var G__66210 = (function (){var obj66212 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater valve is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__66215 = app.shared.components.toolbar.btn_info;
var G__66216 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66215,G__66216) : helix.core.jsx.call(null,G__66215,G__66216));
})()});
return obj66212;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66209,G__66210) : helix.core.jsx.call(null,G__66209,G__66210));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__66153,G__66155) : helix.core.jsxs.call(null,G__66153,G__66155));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__66223 = G__66146;
(G__66223.displayName = "app.shared.boiler-plant.valves.feedwater.toolbar-panel/valve-feedwater-toolbar-panel");

return G__66223;
} else {
return G__66146;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.feedwater.toolbar_panel.js.map
