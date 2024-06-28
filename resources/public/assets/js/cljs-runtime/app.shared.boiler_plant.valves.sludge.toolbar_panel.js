goog.provide('app.shared.boiler_plant.valves.sludge.toolbar_panel');

app.shared.boiler_plant.valves.sludge.toolbar_panel.valve_sludge_toolbar_panel = (function (){var G__65975 = (function app$shared$boiler_plant$valves$sludge$toolbar_panel$valve_sludge_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve-show-toolbar-panel","sludge-valve-show-toolbar-panel",-26377558)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__65990 = helix.core.Fragment;
var G__65991 = ({"children": [(function (){var G__65992 = app.shared.components.toolbar.title;
var G__65994 = (function (){var obj66001 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Bottom Blowdown Valve"});
return obj66001;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65992,G__65994) : helix.core.jsx.call(null,G__65992,G__65994));
})(),(function (){var G__66006 = app.shared.components.toolbar.btn_wrapper;
var G__66009 = (function (){var obj66013 = ({"x":(930),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__66022 = app.shared.components.toolbar.btn_valve_close;
var G__66023 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66022,G__66023) : helix.core.jsx.call(null,G__66022,G__66023));
})()});
return obj66013;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66006,G__66009) : helix.core.jsx.call(null,G__66006,G__66009));
})(),(function (){var G__66028 = app.shared.components.toolbar.btn_wrapper;
var G__66029 = (function (){var obj66035 = ({"x":(1004),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__66042 = app.shared.components.toolbar.btn_valve_open;
var G__66043 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66042,G__66043) : helix.core.jsx.call(null,G__66042,G__66043));
})()});
return obj66035;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66028,G__66029) : helix.core.jsx.call(null,G__66028,G__66029));
})(),(function (){var G__66050 = app.shared.components.toolbar.btn_wrapper;
var G__66051 = (function (){var obj66055 = ({"x":(1064),"y":(54),"children":(function (){var G__66060 = app.shared.components.toolbar.btn_divider;
var G__66061 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66060,G__66061) : helix.core.jsx.call(null,G__66060,G__66061));
})()});
return obj66055;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66050,G__66051) : helix.core.jsx.call(null,G__66050,G__66051));
})(),(function (){var G__66064 = app.shared.components.toolbar.btn_wrapper;
var G__66065 = (function (){var obj66070 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__66073 = app.shared.components.toolbar.btn_settings;
var G__66074 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66073,G__66074) : helix.core.jsx.call(null,G__66073,G__66074));
})()});
return obj66070;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66064,G__66065) : helix.core.jsx.call(null,G__66064,G__66065));
})(),(function (){var G__66075 = app.shared.components.toolbar.btn_wrapper;
var G__66076 = (function (){var obj66078 = ({"x":(1174),"y":(54),"children":(function (){var G__66080 = app.shared.components.toolbar.btn_divider;
var G__66081 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66080,G__66081) : helix.core.jsx.call(null,G__66080,G__66081));
})()});
return obj66078;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66075,G__66076) : helix.core.jsx.call(null,G__66075,G__66076));
})(),(function (){var G__66082 = app.shared.components.toolbar.btn_wrapper;
var G__66083 = (function (){var obj66085 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Bottom Blowdown Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The bottom blowdown valve is an actuator that blows down sludge accumulated on the bottom of the boiler."], null)], null));
}),"children":(function (){var G__66086 = app.shared.components.toolbar.btn_info;
var G__66087 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66086,G__66087) : helix.core.jsx.call(null,G__66086,G__66087));
})()});
return obj66085;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66082,G__66083) : helix.core.jsx.call(null,G__66082,G__66083));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65990,G__65991) : helix.core.jsxs.call(null,G__65990,G__65991));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__66088 = G__65975;
(G__66088.displayName = "app.shared.boiler-plant.valves.sludge.toolbar-panel/valve-sludge-toolbar-panel");

return G__66088;
} else {
return G__65975;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.sludge.toolbar_panel.js.map
