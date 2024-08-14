goog.provide('app.ui.kits.connect.NRR_2_60.toolbar_panel');

app.ui.kits.connect.NRR_2_60.toolbar_panel.NRR_2_60_toolbar_panel = (function (){var G__34483 = (function app$ui$kits$connect$NRR_2_60$toolbar_panel$NRR_2_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34486 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-show-toolbar","NRR-2-60-show-toolbar",-1378612021)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__34532 = helix.core.Fragment;
var G__34533 = ({"children": [(function (){var G__34554 = app.ui.shared.components.toolbar.title;
var G__34555 = (function (){var obj34557 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj34557;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34554,G__34555) : helix.core.jsx.call(null,G__34554,G__34555));
})(),(function (){var G__34559 = app.ui.shared.components.toolbar.title;
var G__34560 = (function (){var obj34562 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60"});
return obj34562;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34559,G__34560) : helix.core.jsx.call(null,G__34559,G__34560));
})(),(function (){var G__34564 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34565 = (function (){var obj34567 = ({"x":(588),"y":(54),"inactive":inactive,"on-click":(function (){
return null;
}),"children":(function (){var G__34569 = app.ui.shared.components.toolbar.btn_replace;
var G__34570 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34569,G__34570) : helix.core.jsx.call(null,G__34569,G__34570));
})()});
return obj34567;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34564,G__34565) : helix.core.jsx.call(null,G__34564,G__34565));
})(),(function (){var G__34571 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34572 = (function (){var obj34574 = ({"x":(648),"y":(54),"children":(function (){var G__34575 = app.ui.shared.components.toolbar.btn_divider;
var G__34576 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34575,G__34576) : helix.core.jsx.call(null,G__34575,G__34576));
})()});
return obj34574;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34571,G__34572) : helix.core.jsx.call(null,G__34571,G__34572));
})(),(function (){var G__34577 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34578 = (function (){var obj34580 = ({"x":(698),"y":(54),"inactive":(!(inactive)),"on-click":(function (){
return null;
}),"children":(function (){var G__34583 = app.ui.shared.components.toolbar.btn_error;
var G__34584 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34583,G__34584) : helix.core.jsx.call(null,G__34583,G__34584));
})()});
return obj34580;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34577,G__34578) : helix.core.jsx.call(null,G__34577,G__34578));
})(),(function (){var G__34585 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34586 = (function (){var obj34588 = ({"x":(758),"y":(54),"children":(function (){var G__34589 = app.ui.shared.components.toolbar.btn_divider;
var G__34590 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34589,G__34590) : helix.core.jsx.call(null,G__34589,G__34590));
})()});
return obj34588;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34585,G__34586) : helix.core.jsx.call(null,G__34585,G__34586));
})(),(function (){var G__34599 = app.ui.shared.components.toolbar.switch_panel;
var G__34600 = (function (){var obj34602 = ({"x":(808),"y":(12),"children":[(function (){var G__34603 = app.ui.shared.components.toolbar.switch$;
var G__34604 = (function (){var obj34608 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj34608;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34603,G__34604) : helix.core.jsx.call(null,G__34603,G__34604));
})(),(function (){var G__34627 = app.ui.shared.components.toolbar.switch$;
var G__34628 = (function (){var obj34632 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj34632;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34627,G__34628) : helix.core.jsx.call(null,G__34627,G__34628));
})(),(function (){var G__34644 = app.ui.shared.components.toolbar.switch$;
var G__34645 = (function (){var obj34648 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj34648;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34644,G__34645) : helix.core.jsx.call(null,G__34644,G__34645));
})(),(function (){var G__34657 = app.ui.shared.components.toolbar.switch$;
var G__34658 = (function (){var obj34662 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj34662;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34657,G__34658) : helix.core.jsx.call(null,G__34657,G__34658));
})()]});
return obj34602;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34599,G__34600) : helix.core.jsxs.call(null,G__34599,G__34600));
})(),(function (){var G__34687 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34688 = (function (){var obj34694 = ({"x":(954),"y":(54),"children":(function (){var G__34697 = app.ui.shared.components.toolbar.btn_divider;
var G__34698 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34697,G__34698) : helix.core.jsx.call(null,G__34697,G__34698));
})()});
return obj34694;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34687,G__34688) : helix.core.jsx.call(null,G__34687,G__34688));
})(),(function (){var G__34708 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34709 = (function (){var obj34761 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__34770 = app.ui.shared.components.toolbar.btn_full_screen;
var G__34771 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34770,G__34771) : helix.core.jsx.call(null,G__34770,G__34771));
})()});
return obj34761;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34708,G__34709) : helix.core.jsx.call(null,G__34708,G__34709));
})(),(function (){var G__34788 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34789 = (function (){var obj34793 = ({"x":(1064),"y":(54),"children":(function (){var G__34800 = app.ui.shared.components.toolbar.btn_divider;
var G__34801 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34800,G__34801) : helix.core.jsx.call(null,G__34800,G__34801));
})()});
return obj34793;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34788,G__34789) : helix.core.jsx.call(null,G__34788,G__34789));
})(),(function (){var G__34810 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34811 = (function (){var obj34813 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__34820 = app.ui.shared.components.toolbar.btn_settings;
var G__34821 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34820,G__34821) : helix.core.jsx.call(null,G__34820,G__34821));
})()});
return obj34813;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34810,G__34811) : helix.core.jsx.call(null,G__34810,G__34811));
})(),(function (){var G__34834 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34835 = (function (){var obj34845 = ({"x":(1174),"y":(54),"children":(function (){var G__34846 = app.ui.shared.components.toolbar.btn_divider;
var G__34847 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34846,G__34847) : helix.core.jsx.call(null,G__34846,G__34847));
})()});
return obj34845;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34834,G__34835) : helix.core.jsx.call(null,G__34834,G__34835));
})(),(function (){var G__34862 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34863 = (function (){var obj34871 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__34880 = app.ui.shared.components.toolbar.btn_info;
var G__34881 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34880,G__34881) : helix.core.jsx.call(null,G__34880,G__34881));
})()});
return obj34871;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34862,G__34863) : helix.core.jsx.call(null,G__34862,G__34863));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34532,G__34533) : helix.core.jsxs.call(null,G__34532,G__34533));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__34902 = G__34483;
(G__34902.displayName = "app.ui.kits.connect.NRR-2-60.toolbar-panel/NRR-2-60-toolbar-panel");

return G__34902;
} else {
return G__34483;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_60.toolbar_panel.js.map
