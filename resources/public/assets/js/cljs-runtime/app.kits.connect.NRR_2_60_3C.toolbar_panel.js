goog.provide('app.kits.connect.NRR_2_60_3C.toolbar_panel');

app.kits.connect.NRR_2_60_3C.toolbar_panel.NRR_2_60_3C_toolbar_panel = (function (){var G__45558 = (function app$kits$connect$NRR_2_60_3C$toolbar_panel$NRR_2_60_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__45567 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-3C-show-toolbar","NRR-2-60-3C-show-toolbar",-897814081)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,":full-screen?",":full-screen?",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__45586 = helix.core.Fragment;
var G__45587 = ({"children": [(function (){var G__45588 = app.shared.components.toolbar.title;
var G__45589 = (function (){var obj45595 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj45595;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45588,G__45589) : helix.core.jsx.call(null,G__45588,G__45589));
})(),(function (){var G__45602 = app.shared.components.toolbar.title;
var G__45603 = (function (){var obj45607 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60 3C"});
return obj45607;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45602,G__45603) : helix.core.jsx.call(null,G__45602,G__45603));
})(),(function (){var G__45611 = app.shared.components.toolbar.btn_wrapper;
var G__45612 = (function (){var obj45616 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__45629 = app.shared.components.toolbar.btn_replace;
var G__45630 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45629,G__45630) : helix.core.jsx.call(null,G__45629,G__45630));
})()});
return obj45616;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45611,G__45612) : helix.core.jsx.call(null,G__45611,G__45612));
})(),(function (){var G__45636 = app.shared.components.toolbar.btn_wrapper;
var G__45637 = (function (){var obj45639 = ({"x":(648),"y":(54),"children":(function (){var G__45642 = app.shared.components.toolbar.btn_divider;
var G__45643 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45642,G__45643) : helix.core.jsx.call(null,G__45642,G__45643));
})()});
return obj45639;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45636,G__45637) : helix.core.jsx.call(null,G__45636,G__45637));
})(),(function (){var G__45651 = app.shared.components.toolbar.btn_wrapper;
var G__45652 = (function (){var obj45654 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__45663 = app.shared.components.toolbar.btn_error;
var G__45664 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45663,G__45664) : helix.core.jsx.call(null,G__45663,G__45664));
})()});
return obj45654;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45651,G__45652) : helix.core.jsx.call(null,G__45651,G__45652));
})(),(function (){var G__45666 = app.shared.components.toolbar.btn_wrapper;
var G__45667 = (function (){var obj45671 = ({"x":(758),"y":(54),"children":(function (){var G__45674 = app.shared.components.toolbar.btn_divider;
var G__45675 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45674,G__45675) : helix.core.jsx.call(null,G__45674,G__45675));
})()});
return obj45671;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45666,G__45667) : helix.core.jsx.call(null,G__45666,G__45667));
})(),(function (){var G__45680 = app.shared.components.toolbar.switch_panel;
var G__45681 = (function (){var obj45687 = ({"x":(808),"y":(12),"children":[(function (){var G__45690 = app.shared.components.toolbar.switch$;
var G__45691 = (function (){var obj45697 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj45697;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45690,G__45691) : helix.core.jsx.call(null,G__45690,G__45691));
})(),(function (){var G__45704 = app.shared.components.toolbar.switch$;
var G__45705 = (function (){var obj45709 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj45709;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45704,G__45705) : helix.core.jsx.call(null,G__45704,G__45705));
})(),(function (){var G__45718 = app.shared.components.toolbar.switch$;
var G__45719 = (function (){var obj45723 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj45723;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45718,G__45719) : helix.core.jsx.call(null,G__45718,G__45719));
})(),(function (){var G__45732 = app.shared.components.toolbar.switch$;
var G__45733 = (function (){var obj45739 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj45739;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45732,G__45733) : helix.core.jsx.call(null,G__45732,G__45733));
})()]});
return obj45687;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45680,G__45681) : helix.core.jsxs.call(null,G__45680,G__45681));
})(),(function (){var G__45745 = app.shared.components.toolbar.btn_wrapper;
var G__45746 = (function (){var obj45748 = ({"x":(954),"y":(54),"children":(function (){var G__45751 = app.shared.components.toolbar.btn_divider;
var G__45752 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45751,G__45752) : helix.core.jsx.call(null,G__45751,G__45752));
})()});
return obj45748;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45745,G__45746) : helix.core.jsx.call(null,G__45745,G__45746));
})(),(function (){var G__45757 = app.shared.components.toolbar.btn_wrapper;
var G__45758 = (function (){var obj45760 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,":full-screen?",":full-screen?",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__45765 = app.shared.components.toolbar.btn_full_screen;
var G__45766 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45765,G__45766) : helix.core.jsx.call(null,G__45765,G__45766));
})()});
return obj45760;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45757,G__45758) : helix.core.jsx.call(null,G__45757,G__45758));
})(),(function (){var G__45769 = app.shared.components.toolbar.btn_wrapper;
var G__45770 = (function (){var obj45772 = ({"x":(1064),"y":(54),"children":(function (){var G__45773 = app.shared.components.toolbar.btn_divider;
var G__45774 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45773,G__45774) : helix.core.jsx.call(null,G__45773,G__45774));
})()});
return obj45772;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45769,G__45770) : helix.core.jsx.call(null,G__45769,G__45770));
})(),(function (){var G__45776 = app.shared.components.toolbar.btn_wrapper;
var G__45777 = (function (){var obj45779 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__45780 = app.shared.components.toolbar.btn_settings;
var G__45781 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45780,G__45781) : helix.core.jsx.call(null,G__45780,G__45781));
})()});
return obj45779;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45776,G__45777) : helix.core.jsx.call(null,G__45776,G__45777));
})(),(function (){var G__45782 = app.shared.components.toolbar.btn_wrapper;
var G__45783 = (function (){var obj45785 = ({"x":(1174),"y":(54),"children":(function (){var G__45786 = app.shared.components.toolbar.btn_divider;
var G__45787 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45786,G__45787) : helix.core.jsx.call(null,G__45786,G__45787));
})()});
return obj45785;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45782,G__45783) : helix.core.jsx.call(null,G__45782,G__45783));
})(),(function (){var G__45788 = app.shared.components.toolbar.btn_wrapper;
var G__45789 = (function (){var obj45791 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__45792 = app.shared.components.toolbar.btn_info;
var G__45793 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45792,G__45793) : helix.core.jsx.call(null,G__45792,G__45793));
})()});
return obj45791;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45788,G__45789) : helix.core.jsx.call(null,G__45788,G__45789));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45586,G__45587) : helix.core.jsxs.call(null,G__45586,G__45587));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__45794 = G__45558;
(G__45794.displayName = "app.kits.connect.NRR-2-60-3C.toolbar-panel/NRR-2-60-3C-toolbar-panel");

return G__45794;
} else {
return G__45558;
}
})();




//# sourceMappingURL=app.kits.connect.NRR_2_60_3C.toolbar_panel.js.map
