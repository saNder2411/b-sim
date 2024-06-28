goog.provide('app.connect.NRGT_26_2.toolbar_panel');

app.connect.NRGT_26_2.toolbar_panel.NRGT_26_2_toolbar_panel = (function (){var G__66778 = (function app$connect$NRGT_26_2$toolbar_panel$NRGT_26_2_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__66785 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRGT-26-2-show-toolbar","NRGT-26-2-show-toolbar",-183029269)], null));
if(cljs.core.truth_(show_toolbar)){
var G__66802 = helix.core.Fragment;
var G__66803 = ({"children": [(function (){var G__66808 = app.shared.components.toolbar.title;
var G__66809 = (function (){var obj66815 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Transmitter"});
return obj66815;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66808,G__66809) : helix.core.jsx.call(null,G__66808,G__66809));
})(),(function (){var G__66844 = app.shared.components.toolbar.title;
var G__66845 = (function (){var obj66850 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRGT 26-2"});
return obj66850;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66844,G__66845) : helix.core.jsx.call(null,G__66844,G__66845));
})(),(function (){var G__66859 = app.shared.components.toolbar.btn_wrapper;
var G__66860 = (function (){var obj66868 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__66880 = app.shared.components.toolbar.btn_replace;
var G__66881 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66880,G__66881) : helix.core.jsx.call(null,G__66880,G__66881));
})()});
return obj66868;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66859,G__66860) : helix.core.jsx.call(null,G__66859,G__66860));
})(),(function (){var G__66928 = app.shared.components.toolbar.btn_wrapper;
var G__66929 = (function (){var obj66943 = ({"x":(1064),"y":(54),"children":(function (){var G__66952 = app.shared.components.toolbar.btn_divider;
var G__66953 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66952,G__66953) : helix.core.jsx.call(null,G__66952,G__66953));
})()});
return obj66943;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66928,G__66929) : helix.core.jsx.call(null,G__66928,G__66929));
})(),(function (){var G__66968 = app.shared.components.toolbar.btn_wrapper;
var G__66969 = (function (){var obj66981 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67004 = app.shared.components.toolbar.btn_full_screen;
var G__67005 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67004,G__67005) : helix.core.jsx.call(null,G__67004,G__67005));
})()});
return obj66981;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66968,G__66969) : helix.core.jsx.call(null,G__66968,G__66969));
})(),(function (){var G__67030 = app.shared.components.toolbar.btn_wrapper;
var G__67031 = (function (){var obj67045 = ({"x":(1174),"y":(54),"children":(function (){var G__67056 = app.shared.components.toolbar.btn_divider;
var G__67057 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67056,G__67057) : helix.core.jsx.call(null,G__67056,G__67057));
})()});
return obj67045;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67030,G__67031) : helix.core.jsx.call(null,G__67030,G__67031));
})(),(function (){var G__67083 = app.shared.components.toolbar.btn_wrapper;
var G__67084 = (function (){var obj67099 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Transmitter",new cljs.core.Keyword(null,"text","text",-1790561697),"NRGT 26-2 level transmitters can be used to continually measure the water level in pressurised steam and hot-water plants, or in condensate and feedwater tanks. The calibrated measuring range from 0 % to 100 % constitutes the linear profile of the 4-20 mA current output. The transmitter\u2019s secure 4-20 mA actual value output (SIL 2) can be used with a suitable level controller, as a water level controller with MIN/MAX alarm, for example."], null)], null));
}),"children":(function (){var G__67123 = app.shared.components.toolbar.btn_info;
var G__67124 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67123,G__67124) : helix.core.jsx.call(null,G__67123,G__67124));
})()});
return obj67099;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67083,G__67084) : helix.core.jsx.call(null,G__67083,G__67084));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__66802,G__66803) : helix.core.jsxs.call(null,G__66802,G__66803));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__67167 = G__66778;
(G__67167.displayName = "app.connect.NRGT-26-2.toolbar-panel/NRGT-26-2-toolbar-panel");

return G__67167;
} else {
return G__66778;
}
})();




//# sourceMappingURL=app.connect.NRGT_26_2.toolbar_panel.js.map
