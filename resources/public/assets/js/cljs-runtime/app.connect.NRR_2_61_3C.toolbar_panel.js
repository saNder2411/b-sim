goog.provide('app.connect.NRR_2_61_3C.toolbar_panel');

app.connect.NRR_2_61_3C.toolbar_panel.NRR_2_61_3C_toolbar_panel = (function (){var G__31737 = (function app$connect$NRR_2_61_3C$toolbar_panel$NRR_2_61_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-3C-show-toolbar","NRR-2-61-3C-show-toolbar",-171433172)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__31741 = helix.core.Fragment;
var G__31742 = ({"children": [(function (){var G__31743 = app.shared.components.toolbar.title;
var G__31744 = (function (){var obj31746 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj31746;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31743,G__31744) : helix.core.jsx.call(null,G__31743,G__31744));
})(),(function (){var G__31747 = app.shared.components.toolbar.title;
var G__31748 = (function (){var obj31750 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61 3C"});
return obj31750;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31747,G__31748) : helix.core.jsx.call(null,G__31747,G__31748));
})(),(function (){var G__31751 = app.shared.components.toolbar.btn_wrapper;
var G__31752 = (function (){var obj31754 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__31755 = app.shared.components.toolbar.btn_replace;
var G__31756 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31755,G__31756) : helix.core.jsx.call(null,G__31755,G__31756));
})()});
return obj31754;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31751,G__31752) : helix.core.jsx.call(null,G__31751,G__31752));
})(),(function (){var G__31757 = app.shared.components.toolbar.btn_wrapper;
var G__31758 = (function (){var obj31760 = ({"x":(648),"y":(54),"children":(function (){var G__31761 = app.shared.components.toolbar.btn_divider;
var G__31762 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31761,G__31762) : helix.core.jsx.call(null,G__31761,G__31762));
})()});
return obj31760;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31757,G__31758) : helix.core.jsx.call(null,G__31757,G__31758));
})(),(function (){var G__31763 = app.shared.components.toolbar.btn_wrapper;
var G__31764 = (function (){var obj31766 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__31767 = app.shared.components.toolbar.btn_error;
var G__31768 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31767,G__31768) : helix.core.jsx.call(null,G__31767,G__31768));
})()});
return obj31766;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31763,G__31764) : helix.core.jsx.call(null,G__31763,G__31764));
})(),(function (){var G__31769 = app.shared.components.toolbar.btn_wrapper;
var G__31770 = (function (){var obj31772 = ({"x":(758),"y":(54),"children":(function (){var G__31773 = app.shared.components.toolbar.btn_divider;
var G__31774 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31773,G__31774) : helix.core.jsx.call(null,G__31773,G__31774));
})()});
return obj31772;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31769,G__31770) : helix.core.jsx.call(null,G__31769,G__31770));
})(),(function (){var G__31775 = app.shared.components.toolbar.switch_panel;
var G__31776 = (function (){var obj31778 = ({"x":(808),"y":(12),"children":[(function (){var G__31779 = app.shared.components.toolbar.switch$;
var G__31780 = (function (){var obj31782 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj31782;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31779,G__31780) : helix.core.jsx.call(null,G__31779,G__31780));
})(),(function (){var G__31783 = app.shared.components.toolbar.switch$;
var G__31784 = (function (){var obj31786 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj31786;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31783,G__31784) : helix.core.jsx.call(null,G__31783,G__31784));
})(),(function (){var G__31787 = app.shared.components.toolbar.switch$;
var G__31788 = (function (){var obj31790 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj31790;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31787,G__31788) : helix.core.jsx.call(null,G__31787,G__31788));
})(),(function (){var G__31791 = app.shared.components.toolbar.switch$;
var G__31792 = (function (){var obj31794 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj31794;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31791,G__31792) : helix.core.jsx.call(null,G__31791,G__31792));
})()]});
return obj31778;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31775,G__31776) : helix.core.jsxs.call(null,G__31775,G__31776));
})(),(function (){var G__31795 = app.shared.components.toolbar.btn_wrapper;
var G__31796 = (function (){var obj31798 = ({"x":(954),"y":(54),"children":(function (){var G__31799 = app.shared.components.toolbar.btn_divider;
var G__31800 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31799,G__31800) : helix.core.jsx.call(null,G__31799,G__31800));
})()});
return obj31798;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31795,G__31796) : helix.core.jsx.call(null,G__31795,G__31796));
})(),(function (){var G__31801 = app.shared.components.toolbar.btn_wrapper;
var G__31802 = (function (){var obj31804 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__31805 = app.shared.components.toolbar.btn_full_screen;
var G__31806 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31805,G__31806) : helix.core.jsx.call(null,G__31805,G__31806));
})()});
return obj31804;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31801,G__31802) : helix.core.jsx.call(null,G__31801,G__31802));
})(),(function (){var G__31807 = app.shared.components.toolbar.btn_wrapper;
var G__31808 = (function (){var obj31810 = ({"x":(1064),"y":(54),"children":(function (){var G__31811 = app.shared.components.toolbar.btn_divider;
var G__31812 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31811,G__31812) : helix.core.jsx.call(null,G__31811,G__31812));
})()});
return obj31810;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31807,G__31808) : helix.core.jsx.call(null,G__31807,G__31808));
})(),(function (){var G__31813 = app.shared.components.toolbar.btn_wrapper;
var G__31814 = (function (){var obj31816 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__31817 = app.shared.components.toolbar.btn_settings;
var G__31818 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31817,G__31818) : helix.core.jsx.call(null,G__31817,G__31818));
})()});
return obj31816;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31813,G__31814) : helix.core.jsx.call(null,G__31813,G__31814));
})(),(function (){var G__31819 = app.shared.components.toolbar.btn_wrapper;
var G__31820 = (function (){var obj31822 = ({"x":(1174),"y":(54),"children":(function (){var G__31823 = app.shared.components.toolbar.btn_divider;
var G__31824 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31823,G__31824) : helix.core.jsx.call(null,G__31823,G__31824));
})()});
return obj31822;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31819,G__31820) : helix.core.jsx.call(null,G__31819,G__31820));
})(),(function (){var G__31825 = app.shared.components.toolbar.btn_wrapper;
var G__31826 = (function (){var obj31828 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__31829 = app.shared.components.toolbar.btn_info;
var G__31830 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31829,G__31830) : helix.core.jsx.call(null,G__31829,G__31830));
})()});
return obj31828;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31825,G__31826) : helix.core.jsx.call(null,G__31825,G__31826));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31741,G__31742) : helix.core.jsxs.call(null,G__31741,G__31742));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31831 = G__31737;
(G__31831.displayName = "app.connect.NRR-2-61-3C.toolbar-panel/NRR-2-61-3C-toolbar-panel");

return G__31831;
} else {
return G__31737;
}
})();




//# sourceMappingURL=app.connect.NRR_2_61_3C.toolbar_panel.js.map
