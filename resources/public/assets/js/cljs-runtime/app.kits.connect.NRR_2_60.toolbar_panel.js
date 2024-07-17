goog.provide('app.kits.connect.NRR_2_60.toolbar_panel');

app.kits.connect.NRR_2_60.toolbar_panel.NRR_2_60_toolbar_panel = (function (){var G__45522 = (function app$kits$connect$NRR_2_60$toolbar_panel$NRR_2_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__45535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-show-toolbar","NRR-2-60-show-toolbar",-1378612021)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__45540 = helix.core.Fragment;
var G__45541 = ({"children": [(function (){var G__45542 = app.shared.components.toolbar.title;
var G__45545 = (function (){var obj45549 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj45549;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45542,G__45545) : helix.core.jsx.call(null,G__45542,G__45545));
})(),(function (){var G__45551 = app.shared.components.toolbar.title;
var G__45553 = (function (){var obj45556 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60"});
return obj45556;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45551,G__45553) : helix.core.jsx.call(null,G__45551,G__45553));
})(),(function (){var G__45559 = app.shared.components.toolbar.btn_wrapper;
var G__45562 = (function (){var obj45565 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__45571 = app.shared.components.toolbar.btn_replace;
var G__45573 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45571,G__45573) : helix.core.jsx.call(null,G__45571,G__45573));
})()});
return obj45565;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45559,G__45562) : helix.core.jsx.call(null,G__45559,G__45562));
})(),(function (){var G__45575 = app.shared.components.toolbar.btn_wrapper;
var G__45577 = (function (){var obj45581 = ({"x":(648),"y":(54),"children":(function (){var G__45582 = app.shared.components.toolbar.btn_divider;
var G__45585 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45582,G__45585) : helix.core.jsx.call(null,G__45582,G__45585));
})()});
return obj45581;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45575,G__45577) : helix.core.jsx.call(null,G__45575,G__45577));
})(),(function (){var G__45590 = app.shared.components.toolbar.btn_wrapper;
var G__45593 = (function (){var obj45599 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__45608 = app.shared.components.toolbar.btn_error;
var G__45609 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45608,G__45609) : helix.core.jsx.call(null,G__45608,G__45609));
})()});
return obj45599;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45590,G__45593) : helix.core.jsx.call(null,G__45590,G__45593));
})(),(function (){var G__45613 = app.shared.components.toolbar.btn_wrapper;
var G__45614 = (function (){var obj45618 = ({"x":(758),"y":(54),"children":(function (){var G__45619 = app.shared.components.toolbar.btn_divider;
var G__45620 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45619,G__45620) : helix.core.jsx.call(null,G__45619,G__45620));
})()});
return obj45618;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45613,G__45614) : helix.core.jsx.call(null,G__45613,G__45614));
})(),(function (){var G__45625 = app.shared.components.toolbar.switch_panel;
var G__45626 = (function (){var obj45628 = ({"x":(808),"y":(12),"children":[(function (){var G__45632 = app.shared.components.toolbar.switch$;
var G__45633 = (function (){var obj45635 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj45635;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45632,G__45633) : helix.core.jsx.call(null,G__45632,G__45633));
})(),(function (){var G__45646 = app.shared.components.toolbar.switch$;
var G__45647 = (function (){var obj45649 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj45649;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45646,G__45647) : helix.core.jsx.call(null,G__45646,G__45647));
})(),(function (){var G__45655 = app.shared.components.toolbar.switch$;
var G__45656 = (function (){var obj45660 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj45660;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45655,G__45656) : helix.core.jsx.call(null,G__45655,G__45656));
})(),(function (){var G__45668 = app.shared.components.toolbar.switch$;
var G__45669 = (function (){var obj45673 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj45673;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45668,G__45669) : helix.core.jsx.call(null,G__45668,G__45669));
})()]});
return obj45628;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45625,G__45626) : helix.core.jsxs.call(null,G__45625,G__45626));
})(),(function (){var G__45684 = app.shared.components.toolbar.btn_wrapper;
var G__45685 = (function (){var obj45689 = ({"x":(954),"y":(54),"children":(function (){var G__45694 = app.shared.components.toolbar.btn_divider;
var G__45695 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45694,G__45695) : helix.core.jsx.call(null,G__45694,G__45695));
})()});
return obj45689;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45684,G__45685) : helix.core.jsx.call(null,G__45684,G__45685));
})(),(function (){var G__45701 = app.shared.components.toolbar.btn_wrapper;
var G__45703 = (function (){var obj45707 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__45714 = app.shared.components.toolbar.btn_full_screen;
var G__45715 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45714,G__45715) : helix.core.jsx.call(null,G__45714,G__45715));
})()});
return obj45707;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45701,G__45703) : helix.core.jsx.call(null,G__45701,G__45703));
})(),(function (){var G__45720 = app.shared.components.toolbar.btn_wrapper;
var G__45721 = (function (){var obj45727 = ({"x":(1064),"y":(54),"children":(function (){var G__45730 = app.shared.components.toolbar.btn_divider;
var G__45731 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45730,G__45731) : helix.core.jsx.call(null,G__45730,G__45731));
})()});
return obj45727;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45720,G__45721) : helix.core.jsx.call(null,G__45720,G__45721));
})(),(function (){var G__45736 = app.shared.components.toolbar.btn_wrapper;
var G__45737 = (function (){var obj45741 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__45743 = app.shared.components.toolbar.btn_settings;
var G__45744 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45743,G__45744) : helix.core.jsx.call(null,G__45743,G__45744));
})()});
return obj45741;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45736,G__45737) : helix.core.jsx.call(null,G__45736,G__45737));
})(),(function (){var G__45749 = app.shared.components.toolbar.btn_wrapper;
var G__45750 = (function (){var obj45754 = ({"x":(1174),"y":(54),"children":(function (){var G__45755 = app.shared.components.toolbar.btn_divider;
var G__45756 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45755,G__45756) : helix.core.jsx.call(null,G__45755,G__45756));
})()});
return obj45754;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45749,G__45750) : helix.core.jsx.call(null,G__45749,G__45750));
})(),(function (){var G__45761 = app.shared.components.toolbar.btn_wrapper;
var G__45762 = (function (){var obj45764 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__45767 = app.shared.components.toolbar.btn_info;
var G__45768 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45767,G__45768) : helix.core.jsx.call(null,G__45767,G__45768));
})()});
return obj45764;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45761,G__45762) : helix.core.jsx.call(null,G__45761,G__45762));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45540,G__45541) : helix.core.jsxs.call(null,G__45540,G__45541));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__45775 = G__45522;
(G__45775.displayName = "app.kits.connect.NRR-2-60.toolbar-panel/NRR-2-60-toolbar-panel");

return G__45775;
} else {
return G__45522;
}
})();




//# sourceMappingURL=app.kits.connect.NRR_2_60.toolbar_panel.js.map
