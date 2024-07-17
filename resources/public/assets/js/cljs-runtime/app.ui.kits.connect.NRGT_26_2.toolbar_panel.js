goog.provide('app.ui.kits.connect.NRGT_26_2.toolbar_panel');

app.ui.kits.connect.NRGT_26_2.toolbar_panel.NRGT_26_2_toolbar_panel = (function (){var G__31848 = (function app$ui$kits$connect$NRGT_26_2$toolbar_panel$NRGT_26_2_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRGT-26-2-show-toolbar","NRGT-26-2-show-toolbar",-183029269)], null));
if(cljs.core.truth_(show_toolbar)){
var G__31852 = helix.core.Fragment;
var G__31853 = ({"children": [(function (){var G__31854 = app.ui.shared.components.toolbar.title;
var G__31855 = (function (){var obj31857 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Transmitter"});
return obj31857;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31854,G__31855) : helix.core.jsx.call(null,G__31854,G__31855));
})(),(function (){var G__31858 = app.ui.shared.components.toolbar.title;
var G__31859 = (function (){var obj31861 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRGT 26-2"});
return obj31861;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31858,G__31859) : helix.core.jsx.call(null,G__31858,G__31859));
})(),(function (){var G__31862 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31863 = (function (){var obj31865 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__31866 = app.ui.shared.components.toolbar.btn_replace;
var G__31867 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31866,G__31867) : helix.core.jsx.call(null,G__31866,G__31867));
})()});
return obj31865;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31862,G__31863) : helix.core.jsx.call(null,G__31862,G__31863));
})(),(function (){var G__31868 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31869 = (function (){var obj31871 = ({"x":(1064),"y":(54),"children":(function (){var G__31872 = app.ui.shared.components.toolbar.btn_divider;
var G__31873 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31872,G__31873) : helix.core.jsx.call(null,G__31872,G__31873));
})()});
return obj31871;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31868,G__31869) : helix.core.jsx.call(null,G__31868,G__31869));
})(),(function (){var G__31874 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31875 = (function (){var obj31877 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__31878 = app.ui.shared.components.toolbar.btn_full_screen;
var G__31879 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31878,G__31879) : helix.core.jsx.call(null,G__31878,G__31879));
})()});
return obj31877;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31874,G__31875) : helix.core.jsx.call(null,G__31874,G__31875));
})(),(function (){var G__31880 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31881 = (function (){var obj31883 = ({"x":(1174),"y":(54),"children":(function (){var G__31884 = app.ui.shared.components.toolbar.btn_divider;
var G__31885 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31884,G__31885) : helix.core.jsx.call(null,G__31884,G__31885));
})()});
return obj31883;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31880,G__31881) : helix.core.jsx.call(null,G__31880,G__31881));
})(),(function (){var G__31893 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31894 = (function (){var obj31896 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Transmitter",new cljs.core.Keyword(null,"text","text",-1790561697),"NRGT 26-2 level transmitters can be used to continually measure the water level in pressurised steam and hot-water plants, or in condensate and feedwater tanks. The calibrated measuring range from 0 % to 100 % constitutes the linear profile of the 4-20 mA current output. The transmitter\u2019s secure 4-20 mA actual value output (SIL 2) can be used with a suitable level controller, as a water level controller with MIN/MAX alarm, for example."], null)], null));
}),"children":(function (){var G__31901 = app.ui.shared.components.toolbar.btn_info;
var G__31902 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31901,G__31902) : helix.core.jsx.call(null,G__31901,G__31902));
})()});
return obj31896;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31893,G__31894) : helix.core.jsx.call(null,G__31893,G__31894));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31852,G__31853) : helix.core.jsxs.call(null,G__31852,G__31853));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31915 = G__31848;
(G__31915.displayName = "app.ui.kits.connect.NRGT-26-2.toolbar-panel/NRGT-26-2-toolbar-panel");

return G__31915;
} else {
return G__31848;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRGT_26_2.toolbar_panel.js.map
