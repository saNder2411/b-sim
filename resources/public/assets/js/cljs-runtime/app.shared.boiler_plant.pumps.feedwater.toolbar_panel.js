goog.provide('app.shared.boiler_plant.pumps.feedwater.toolbar_panel');

app.shared.boiler_plant.pumps.feedwater.toolbar_panel.pump_feedwater_toolbar_panel = (function (){var G__66145 = (function app$shared$boiler_plant$pumps$feedwater$toolbar_panel$pump_feedwater_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__66147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump-show-toolbar-panel","feedwater-pump-show-toolbar-panel",-123747195)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__66154 = helix.core.Fragment;
var G__66156 = ({"children": [(function (){var G__66159 = app.shared.components.toolbar.title;
var G__66160 = (function (){var obj66164 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Pump"});
return obj66164;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66159,G__66160) : helix.core.jsx.call(null,G__66159,G__66160));
})(),(function (){var G__66167 = app.shared.components.toolbar.btn_wrapper;
var G__66168 = (function (){var obj66172 = ({"x":(930),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__66173 = app.shared.components.toolbar.btn_valve_close;
var G__66175 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66173,G__66175) : helix.core.jsx.call(null,G__66173,G__66175));
})()});
return obj66172;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66167,G__66168) : helix.core.jsx.call(null,G__66167,G__66168));
})(),(function (){var G__66181 = app.shared.components.toolbar.btn_wrapper;
var G__66182 = (function (){var obj66184 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__66189 = app.shared.components.toolbar.btn_valve_open;
var G__66190 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66189,G__66190) : helix.core.jsx.call(null,G__66189,G__66190));
})()});
return obj66184;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66181,G__66182) : helix.core.jsx.call(null,G__66181,G__66182));
})(),(function (){var G__66193 = app.shared.components.toolbar.btn_wrapper;
var G__66194 = (function (){var obj66196 = ({"x":(1064),"y":(54),"children":(function (){var G__66199 = app.shared.components.toolbar.btn_divider;
var G__66200 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66199,G__66200) : helix.core.jsx.call(null,G__66199,G__66200));
})()});
return obj66196;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66193,G__66194) : helix.core.jsx.call(null,G__66193,G__66194));
})(),(function (){var G__66205 = app.shared.components.toolbar.btn_wrapper;
var G__66206 = (function (){var obj66208 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__66213 = app.shared.components.toolbar.btn_settings;
var G__66214 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66213,G__66214) : helix.core.jsx.call(null,G__66213,G__66214));
})()});
return obj66208;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66205,G__66206) : helix.core.jsx.call(null,G__66205,G__66206));
})(),(function (){var G__66217 = app.shared.components.toolbar.btn_wrapper;
var G__66218 = (function (){var obj66220 = ({"x":(1174),"y":(54),"children":(function (){var G__66221 = app.shared.components.toolbar.btn_divider;
var G__66222 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66221,G__66222) : helix.core.jsx.call(null,G__66221,G__66222));
})()});
return obj66220;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66217,G__66218) : helix.core.jsx.call(null,G__66217,G__66218));
})(),(function (){var G__66224 = app.shared.components.toolbar.btn_wrapper;
var G__66225 = (function (){var obj66227 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Pump",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater pump is an actuator that pumps water into the boiler to keep the water level at the desired value."], null)], null));
}),"children":(function (){var G__66228 = app.shared.components.toolbar.btn_info;
var G__66229 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66228,G__66229) : helix.core.jsx.call(null,G__66228,G__66229));
})()});
return obj66227;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66224,G__66225) : helix.core.jsx.call(null,G__66224,G__66225));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__66154,G__66156) : helix.core.jsxs.call(null,G__66154,G__66156));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__66230 = G__66145;
(G__66230.displayName = "app.shared.boiler-plant.pumps.feedwater.toolbar-panel/pump-feedwater-toolbar-panel");

return G__66230;
} else {
return G__66145;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.pumps.feedwater.toolbar_panel.js.map
