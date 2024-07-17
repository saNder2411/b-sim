goog.provide('app.kits.connect.NRR_2_61.toolbar_panel');

app.kits.connect.NRR_2_61.toolbar_panel.NRR_2_61_toolbar_panel = (function (){var G__45796 = (function app$kits$connect$NRR_2_61$toolbar_panel$NRR_2_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__45797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-show-toolbar","NRR-2-61-show-toolbar",-1427340718)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__45800 = helix.core.Fragment;
var G__45801 = ({"children": [(function (){var G__45802 = app.shared.components.toolbar.title;
var G__45803 = (function (){var obj45805 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj45805;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45802,G__45803) : helix.core.jsx.call(null,G__45802,G__45803));
})(),(function (){var G__45806 = app.shared.components.toolbar.title;
var G__45807 = (function (){var obj45809 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61"});
return obj45809;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45806,G__45807) : helix.core.jsx.call(null,G__45806,G__45807));
})(),(function (){var G__45810 = app.shared.components.toolbar.btn_wrapper;
var G__45811 = (function (){var obj45813 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__45814 = app.shared.components.toolbar.btn_replace;
var G__45815 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45814,G__45815) : helix.core.jsx.call(null,G__45814,G__45815));
})()});
return obj45813;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45810,G__45811) : helix.core.jsx.call(null,G__45810,G__45811));
})(),(function (){var G__45816 = app.shared.components.toolbar.btn_wrapper;
var G__45817 = (function (){var obj45819 = ({"x":(648),"y":(54),"children":(function (){var G__45820 = app.shared.components.toolbar.btn_divider;
var G__45821 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45820,G__45821) : helix.core.jsx.call(null,G__45820,G__45821));
})()});
return obj45819;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45816,G__45817) : helix.core.jsx.call(null,G__45816,G__45817));
})(),(function (){var G__45822 = app.shared.components.toolbar.btn_wrapper;
var G__45823 = (function (){var obj45825 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__45826 = app.shared.components.toolbar.btn_error;
var G__45827 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45826,G__45827) : helix.core.jsx.call(null,G__45826,G__45827));
})()});
return obj45825;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45822,G__45823) : helix.core.jsx.call(null,G__45822,G__45823));
})(),(function (){var G__45829 = app.shared.components.toolbar.btn_wrapper;
var G__45830 = (function (){var obj45835 = ({"x":(758),"y":(54),"children":(function (){var G__45837 = app.shared.components.toolbar.btn_divider;
var G__45838 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45837,G__45838) : helix.core.jsx.call(null,G__45837,G__45838));
})()});
return obj45835;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45829,G__45830) : helix.core.jsx.call(null,G__45829,G__45830));
})(),(function (){var G__45840 = app.shared.components.toolbar.switch_panel;
var G__45841 = (function (){var obj45843 = ({"x":(808),"y":(12),"children":[(function (){var G__45844 = app.shared.components.toolbar.switch$;
var G__45845 = (function (){var obj45847 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj45847;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45844,G__45845) : helix.core.jsx.call(null,G__45844,G__45845));
})(),(function (){var G__45848 = app.shared.components.toolbar.switch$;
var G__45849 = (function (){var obj45851 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj45851;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45848,G__45849) : helix.core.jsx.call(null,G__45848,G__45849));
})(),(function (){var G__45852 = app.shared.components.toolbar.switch$;
var G__45853 = (function (){var obj45855 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj45855;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45852,G__45853) : helix.core.jsx.call(null,G__45852,G__45853));
})(),(function (){var G__45857 = app.shared.components.toolbar.switch$;
var G__45858 = (function (){var obj45860 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj45860;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45857,G__45858) : helix.core.jsx.call(null,G__45857,G__45858));
})()]});
return obj45843;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45840,G__45841) : helix.core.jsxs.call(null,G__45840,G__45841));
})(),(function (){var G__45864 = app.shared.components.toolbar.btn_wrapper;
var G__45865 = (function (){var obj45879 = ({"x":(954),"y":(54),"children":(function (){var G__45881 = app.shared.components.toolbar.btn_divider;
var G__45882 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45881,G__45882) : helix.core.jsx.call(null,G__45881,G__45882));
})()});
return obj45879;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45864,G__45865) : helix.core.jsx.call(null,G__45864,G__45865));
})(),(function (){var G__45886 = app.shared.components.toolbar.btn_wrapper;
var G__45887 = (function (){var obj45889 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__45892 = app.shared.components.toolbar.btn_full_screen;
var G__45893 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45892,G__45893) : helix.core.jsx.call(null,G__45892,G__45893));
})()});
return obj45889;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45886,G__45887) : helix.core.jsx.call(null,G__45886,G__45887));
})(),(function (){var G__45898 = app.shared.components.toolbar.btn_wrapper;
var G__45899 = (function (){var obj45903 = ({"x":(1064),"y":(54),"children":(function (){var G__45908 = app.shared.components.toolbar.btn_divider;
var G__45909 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45908,G__45909) : helix.core.jsx.call(null,G__45908,G__45909));
})()});
return obj45903;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45898,G__45899) : helix.core.jsx.call(null,G__45898,G__45899));
})(),(function (){var G__45916 = app.shared.components.toolbar.btn_wrapper;
var G__45917 = (function (){var obj45923 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__45928 = app.shared.components.toolbar.btn_settings;
var G__45929 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45928,G__45929) : helix.core.jsx.call(null,G__45928,G__45929));
})()});
return obj45923;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45916,G__45917) : helix.core.jsx.call(null,G__45916,G__45917));
})(),(function (){var G__45936 = app.shared.components.toolbar.btn_wrapper;
var G__45937 = (function (){var obj45941 = ({"x":(1174),"y":(54),"children":(function (){var G__45946 = app.shared.components.toolbar.btn_divider;
var G__45947 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45946,G__45947) : helix.core.jsx.call(null,G__45946,G__45947));
})()});
return obj45941;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45936,G__45937) : helix.core.jsx.call(null,G__45936,G__45937));
})(),(function (){var G__45950 = app.shared.components.toolbar.btn_wrapper;
var G__45951 = (function (){var obj45957 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__45962 = app.shared.components.toolbar.btn_info;
var G__45963 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45962,G__45963) : helix.core.jsx.call(null,G__45962,G__45963));
})()});
return obj45957;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45950,G__45951) : helix.core.jsx.call(null,G__45950,G__45951));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45800,G__45801) : helix.core.jsxs.call(null,G__45800,G__45801));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__45977 = G__45796;
(G__45977.displayName = "app.kits.connect.NRR-2-61.toolbar-panel/NRR-2-61-toolbar-panel");

return G__45977;
} else {
return G__45796;
}
})();




//# sourceMappingURL=app.kits.connect.NRR_2_61.toolbar_panel.js.map
