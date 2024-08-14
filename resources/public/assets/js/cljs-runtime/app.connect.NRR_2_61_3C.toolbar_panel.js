goog.provide('app.connect.NRR_2_61_3C.toolbar_panel');

app.connect.NRR_2_61_3C.toolbar_panel.NRR_2_61_3C_toolbar_panel = (function (){var G__42574 = (function app$connect$NRR_2_61_3C$toolbar_panel$NRR_2_61_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__42581 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-3C-show-toolbar","NRR-2-61-3C-show-toolbar",-171433172)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,":full-screen?",":full-screen?",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__42590 = helix.core.Fragment;
var G__42591 = ({"children": [(function (){var G__42594 = app.shared.components.toolbar.title;
var G__42595 = (function (){var obj42599 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj42599;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42594,G__42595) : helix.core.jsx.call(null,G__42594,G__42595));
})(),(function (){var G__42602 = app.shared.components.toolbar.title;
var G__42603 = (function (){var obj42605 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61 3C"});
return obj42605;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42602,G__42603) : helix.core.jsx.call(null,G__42602,G__42603));
})(),(function (){var G__42610 = app.shared.components.toolbar.btn_wrapper;
var G__42611 = (function (){var obj42615 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__42618 = app.shared.components.toolbar.btn_replace;
var G__42619 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42618,G__42619) : helix.core.jsx.call(null,G__42618,G__42619));
})()});
return obj42615;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42610,G__42611) : helix.core.jsx.call(null,G__42610,G__42611));
})(),(function (){var G__42620 = app.shared.components.toolbar.btn_wrapper;
var G__42621 = (function (){var obj42623 = ({"x":(648),"y":(54),"children":(function (){var G__42624 = app.shared.components.toolbar.btn_divider;
var G__42625 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42624,G__42625) : helix.core.jsx.call(null,G__42624,G__42625));
})()});
return obj42623;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42620,G__42621) : helix.core.jsx.call(null,G__42620,G__42621));
})(),(function (){var G__42626 = app.shared.components.toolbar.btn_wrapper;
var G__42627 = (function (){var obj42629 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__42632 = app.shared.components.toolbar.btn_error;
var G__42633 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42632,G__42633) : helix.core.jsx.call(null,G__42632,G__42633));
})()});
return obj42629;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42626,G__42627) : helix.core.jsx.call(null,G__42626,G__42627));
})(),(function (){var G__42640 = app.shared.components.toolbar.btn_wrapper;
var G__42641 = (function (){var obj42645 = ({"x":(758),"y":(54),"children":(function (){var G__42646 = app.shared.components.toolbar.btn_divider;
var G__42647 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42646,G__42647) : helix.core.jsx.call(null,G__42646,G__42647));
})()});
return obj42645;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42640,G__42641) : helix.core.jsx.call(null,G__42640,G__42641));
})(),(function (){var G__42707 = app.shared.components.toolbar.switch_panel;
var G__42708 = (function (){var obj42710 = ({"x":(808),"y":(12),"children":[(function (){var G__42713 = app.shared.components.toolbar.switch$;
var G__42714 = (function (){var obj42718 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj42718;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42713,G__42714) : helix.core.jsx.call(null,G__42713,G__42714));
})(),(function (){var G__42720 = app.shared.components.toolbar.switch$;
var G__42721 = (function (){var obj42723 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj42723;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42720,G__42721) : helix.core.jsx.call(null,G__42720,G__42721));
})(),(function (){var G__42724 = app.shared.components.toolbar.switch$;
var G__42757 = (function (){var obj42761 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj42761;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42724,G__42757) : helix.core.jsx.call(null,G__42724,G__42757));
})(),(function (){var G__42770 = app.shared.components.toolbar.switch$;
var G__42771 = (function (){var obj42775 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj42775;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42770,G__42771) : helix.core.jsx.call(null,G__42770,G__42771));
})()]});
return obj42710;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42707,G__42708) : helix.core.jsxs.call(null,G__42707,G__42708));
})(),(function (){var G__42785 = app.shared.components.toolbar.btn_wrapper;
var G__42786 = (function (){var obj42788 = ({"x":(954),"y":(54),"children":(function (){var G__42794 = app.shared.components.toolbar.btn_divider;
var G__42795 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42794,G__42795) : helix.core.jsx.call(null,G__42794,G__42795));
})()});
return obj42788;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42785,G__42786) : helix.core.jsx.call(null,G__42785,G__42786));
})(),(function (){var G__42807 = app.shared.components.toolbar.btn_wrapper;
var G__42808 = (function (){var obj42869 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,":full-screen?",":full-screen?",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__42876 = app.shared.components.toolbar.btn_full_screen;
var G__42877 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42876,G__42877) : helix.core.jsx.call(null,G__42876,G__42877));
})()});
return obj42869;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42807,G__42808) : helix.core.jsx.call(null,G__42807,G__42808));
})(),(function (){var G__42879 = app.shared.components.toolbar.btn_wrapper;
var G__42880 = (function (){var obj42885 = ({"x":(1064),"y":(54),"children":(function (){var G__42889 = app.shared.components.toolbar.btn_divider;
var G__42890 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42889,G__42890) : helix.core.jsx.call(null,G__42889,G__42890));
})()});
return obj42885;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42879,G__42880) : helix.core.jsx.call(null,G__42879,G__42880));
})(),(function (){var G__42891 = app.shared.components.toolbar.btn_wrapper;
var G__42892 = (function (){var obj42926 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__42935 = app.shared.components.toolbar.btn_settings;
var G__42936 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42935,G__42936) : helix.core.jsx.call(null,G__42935,G__42936));
})()});
return obj42926;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42891,G__42892) : helix.core.jsx.call(null,G__42891,G__42892));
})(),(function (){var G__42945 = app.shared.components.toolbar.btn_wrapper;
var G__42946 = (function (){var obj42957 = ({"x":(1174),"y":(54),"children":(function (){var G__42966 = app.shared.components.toolbar.btn_divider;
var G__42967 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42966,G__42967) : helix.core.jsx.call(null,G__42966,G__42967));
})()});
return obj42957;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42945,G__42946) : helix.core.jsx.call(null,G__42945,G__42946));
})(),(function (){var G__42975 = app.shared.components.toolbar.btn_wrapper;
var G__42976 = (function (){var obj42978 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__42993 = app.shared.components.toolbar.btn_info;
var G__42994 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42993,G__42994) : helix.core.jsx.call(null,G__42993,G__42994));
})()});
return obj42978;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42975,G__42976) : helix.core.jsx.call(null,G__42975,G__42976));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42590,G__42591) : helix.core.jsxs.call(null,G__42590,G__42591));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__43004 = G__42574;
(G__43004.displayName = "app.connect.NRR-2-61-3C.toolbar-panel/NRR-2-61-3C-toolbar-panel");

return G__43004;
} else {
return G__42574;
}
})();




//# sourceMappingURL=app.connect.NRR_2_61_3C.toolbar_panel.js.map
