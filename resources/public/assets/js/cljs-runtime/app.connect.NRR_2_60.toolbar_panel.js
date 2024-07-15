goog.provide('app.connect.NRR_2_60.toolbar_panel');

app.connect.NRR_2_60.toolbar_panel.NRR_2_60_toolbar_panel = (function (){var G__33755 = (function app$connect$NRR_2_60$toolbar_panel$NRR_2_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-show-toolbar","NRR-2-60-show-toolbar",-1378612021)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__33759 = helix.core.Fragment;
var G__33760 = ({"children": [(function (){var G__33761 = app.shared.components.toolbar.title;
var G__33762 = (function (){var obj33764 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj33764;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33761,G__33762) : helix.core.jsx.call(null,G__33761,G__33762));
})(),(function (){var G__33765 = app.shared.components.toolbar.title;
var G__33766 = (function (){var obj33768 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60"});
return obj33768;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33765,G__33766) : helix.core.jsx.call(null,G__33765,G__33766));
})(),(function (){var G__33769 = app.shared.components.toolbar.btn_wrapper;
var G__33770 = (function (){var obj33772 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__33773 = app.shared.components.toolbar.btn_replace;
var G__33774 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33773,G__33774) : helix.core.jsx.call(null,G__33773,G__33774));
})()});
return obj33772;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33769,G__33770) : helix.core.jsx.call(null,G__33769,G__33770));
})(),(function (){var G__33775 = app.shared.components.toolbar.btn_wrapper;
var G__33776 = (function (){var obj33778 = ({"x":(648),"y":(54),"children":(function (){var G__33779 = app.shared.components.toolbar.btn_divider;
var G__33780 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33779,G__33780) : helix.core.jsx.call(null,G__33779,G__33780));
})()});
return obj33778;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33775,G__33776) : helix.core.jsx.call(null,G__33775,G__33776));
})(),(function (){var G__33781 = app.shared.components.toolbar.btn_wrapper;
var G__33782 = (function (){var obj33784 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__33785 = app.shared.components.toolbar.btn_error;
var G__33786 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33785,G__33786) : helix.core.jsx.call(null,G__33785,G__33786));
})()});
return obj33784;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33781,G__33782) : helix.core.jsx.call(null,G__33781,G__33782));
})(),(function (){var G__33787 = app.shared.components.toolbar.btn_wrapper;
var G__33788 = (function (){var obj33790 = ({"x":(758),"y":(54),"children":(function (){var G__33791 = app.shared.components.toolbar.btn_divider;
var G__33792 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33791,G__33792) : helix.core.jsx.call(null,G__33791,G__33792));
})()});
return obj33790;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33787,G__33788) : helix.core.jsx.call(null,G__33787,G__33788));
})(),(function (){var G__33793 = app.shared.components.toolbar.switch_panel;
var G__33794 = (function (){var obj33796 = ({"x":(808),"y":(12),"children":[(function (){var G__33797 = app.shared.components.toolbar.switch$;
var G__33798 = (function (){var obj33800 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj33800;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33797,G__33798) : helix.core.jsx.call(null,G__33797,G__33798));
})(),(function (){var G__33801 = app.shared.components.toolbar.switch$;
var G__33802 = (function (){var obj33804 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj33804;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33801,G__33802) : helix.core.jsx.call(null,G__33801,G__33802));
})(),(function (){var G__33805 = app.shared.components.toolbar.switch$;
var G__33806 = (function (){var obj33808 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj33808;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33805,G__33806) : helix.core.jsx.call(null,G__33805,G__33806));
})(),(function (){var G__33809 = app.shared.components.toolbar.switch$;
var G__33810 = (function (){var obj33812 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj33812;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33809,G__33810) : helix.core.jsx.call(null,G__33809,G__33810));
})()]});
return obj33796;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33793,G__33794) : helix.core.jsxs.call(null,G__33793,G__33794));
})(),(function (){var G__33813 = app.shared.components.toolbar.btn_wrapper;
var G__33814 = (function (){var obj33816 = ({"x":(954),"y":(54),"children":(function (){var G__33817 = app.shared.components.toolbar.btn_divider;
var G__33818 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33817,G__33818) : helix.core.jsx.call(null,G__33817,G__33818));
})()});
return obj33816;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33813,G__33814) : helix.core.jsx.call(null,G__33813,G__33814));
})(),(function (){var G__33819 = app.shared.components.toolbar.btn_wrapper;
var G__33820 = (function (){var obj33822 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__33823 = app.shared.components.toolbar.btn_full_screen;
var G__33824 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33823,G__33824) : helix.core.jsx.call(null,G__33823,G__33824));
})()});
return obj33822;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33819,G__33820) : helix.core.jsx.call(null,G__33819,G__33820));
})(),(function (){var G__33825 = app.shared.components.toolbar.btn_wrapper;
var G__33826 = (function (){var obj33828 = ({"x":(1064),"y":(54),"children":(function (){var G__33829 = app.shared.components.toolbar.btn_divider;
var G__33830 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33829,G__33830) : helix.core.jsx.call(null,G__33829,G__33830));
})()});
return obj33828;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33825,G__33826) : helix.core.jsx.call(null,G__33825,G__33826));
})(),(function (){var G__33831 = app.shared.components.toolbar.btn_wrapper;
var G__33832 = (function (){var obj33834 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__33835 = app.shared.components.toolbar.btn_settings;
var G__33836 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33835,G__33836) : helix.core.jsx.call(null,G__33835,G__33836));
})()});
return obj33834;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33831,G__33832) : helix.core.jsx.call(null,G__33831,G__33832));
})(),(function (){var G__33837 = app.shared.components.toolbar.btn_wrapper;
var G__33838 = (function (){var obj33840 = ({"x":(1174),"y":(54),"children":(function (){var G__33841 = app.shared.components.toolbar.btn_divider;
var G__33842 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33841,G__33842) : helix.core.jsx.call(null,G__33841,G__33842));
})()});
return obj33840;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33837,G__33838) : helix.core.jsx.call(null,G__33837,G__33838));
})(),(function (){var G__33843 = app.shared.components.toolbar.btn_wrapper;
var G__33844 = (function (){var obj33846 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__33847 = app.shared.components.toolbar.btn_info;
var G__33848 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33847,G__33848) : helix.core.jsx.call(null,G__33847,G__33848));
})()});
return obj33846;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33843,G__33844) : helix.core.jsx.call(null,G__33843,G__33844));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33759,G__33760) : helix.core.jsxs.call(null,G__33759,G__33760));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__33849 = G__33755;
(G__33849.displayName = "app.connect.NRR-2-60.toolbar-panel/NRR-2-60-toolbar-panel");

return G__33849;
} else {
return G__33755;
}
})();




//# sourceMappingURL=app.connect.NRR_2_60.toolbar_panel.js.map
