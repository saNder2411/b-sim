goog.provide('app.ui.kits.connect.NRR_2_60.toolbar_panel');

app.ui.kits.connect.NRR_2_60.toolbar_panel.NRR_2_60_toolbar_panel = (function (){var G__38617 = (function app$ui$kits$connect$NRR_2_60$toolbar_panel$NRR_2_60_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60","show-toolbar","NRR-2-60/show-toolbar",1626880819)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__38629 = helix.core.Fragment;
var G__38630 = ({"children": [(function (){var G__38632 = app.ui.shared.components.toolbar.title;
var G__38633 = (function (){var obj38635 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj38635;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38632,G__38633) : helix.core.jsx.call(null,G__38632,G__38633));
})(),(function (){var G__38641 = app.ui.shared.components.toolbar.title;
var G__38642 = (function (){var obj38646 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60"});
return obj38646;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38641,G__38642) : helix.core.jsx.call(null,G__38641,G__38642));
})(),(function (){var G__38649 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38650 = (function (){var obj38654 = ({"x":(588),"y":(54),"inactive":inactive,"on-click":(function (){
return null;
}),"children":(function (){var G__38661 = app.ui.shared.components.toolbar.btn_replace;
var G__38662 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38661,G__38662) : helix.core.jsx.call(null,G__38661,G__38662));
})()});
return obj38654;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38649,G__38650) : helix.core.jsx.call(null,G__38649,G__38650));
})(),(function (){var G__38671 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38672 = (function (){var obj38681 = ({"x":(648),"y":(54),"children":(function (){var G__38688 = app.ui.shared.components.toolbar.btn_divider;
var G__38689 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38688,G__38689) : helix.core.jsx.call(null,G__38688,G__38689));
})()});
return obj38681;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38671,G__38672) : helix.core.jsx.call(null,G__38671,G__38672));
})(),(function (){var G__38703 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38704 = (function (){var obj38708 = ({"x":(698),"y":(54),"inactive":(!(inactive)),"on-click":(function (){
return null;
}),"children":(function (){var G__38722 = app.ui.shared.components.toolbar.btn_error;
var G__38723 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38722,G__38723) : helix.core.jsx.call(null,G__38722,G__38723));
})()});
return obj38708;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38703,G__38704) : helix.core.jsx.call(null,G__38703,G__38704));
})(),(function (){var G__38738 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38739 = (function (){var obj38743 = ({"x":(758),"y":(54),"children":(function (){var G__38753 = app.ui.shared.components.toolbar.btn_divider;
var G__38754 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38753,G__38754) : helix.core.jsx.call(null,G__38753,G__38754));
})()});
return obj38743;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38738,G__38739) : helix.core.jsx.call(null,G__38738,G__38739));
})(),(function (){var G__38772 = app.ui.shared.components.toolbar.switch_panel;
var G__38773 = (function (){var obj38777 = ({"x":(808),"y":(12),"children":[(function (){var G__38787 = app.ui.shared.components.toolbar.switch$;
var G__38788 = (function (){var obj38798 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60","change","NRR-2-60/change",-443288122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj38798;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38787,G__38788) : helix.core.jsx.call(null,G__38787,G__38788));
})(),(function (){var G__38846 = app.ui.shared.components.toolbar.switch$;
var G__38847 = (function (){var obj38856 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60","change","NRR-2-60/change",-443288122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj38856;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38846,G__38847) : helix.core.jsx.call(null,G__38846,G__38847));
})(),(function (){var G__38886 = app.ui.shared.components.toolbar.switch$;
var G__38887 = (function (){var obj38897 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60","change","NRR-2-60/change",-443288122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj38897;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38886,G__38887) : helix.core.jsx.call(null,G__38886,G__38887));
})(),(function (){var G__38918 = app.ui.shared.components.toolbar.switch$;
var G__38919 = (function (){var obj38927 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60","change","NRR-2-60/change",-443288122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj38927;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38918,G__38919) : helix.core.jsx.call(null,G__38918,G__38919));
})()]});
return obj38777;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38772,G__38773) : helix.core.jsxs.call(null,G__38772,G__38773));
})(),(function (){var G__38966 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38967 = (function (){var obj38978 = ({"x":(954),"y":(54),"children":(function (){var G__38981 = app.ui.shared.components.toolbar.btn_divider;
var G__38982 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38981,G__38982) : helix.core.jsx.call(null,G__38981,G__38982));
})()});
return obj38978;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38966,G__38967) : helix.core.jsx.call(null,G__38966,G__38967));
})(),(function (){var G__38997 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38998 = (function (){var obj39004 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60","change","NRR-2-60/change",-443288122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__39013 = app.ui.shared.components.toolbar.btn_full_screen;
var G__39014 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39013,G__39014) : helix.core.jsx.call(null,G__39013,G__39014));
})()});
return obj39004;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38997,G__38998) : helix.core.jsx.call(null,G__38997,G__38998));
})(),(function (){var G__39032 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39033 = (function (){var obj39037 = ({"x":(1064),"y":(54),"children":(function (){var G__39045 = app.ui.shared.components.toolbar.btn_divider;
var G__39046 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39045,G__39046) : helix.core.jsx.call(null,G__39045,G__39046));
})()});
return obj39037;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39032,G__39033) : helix.core.jsx.call(null,G__39032,G__39033));
})(),(function (){var G__39062 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39063 = (function (){var obj39071 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60","change","NRR-2-60/change",-443288122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__39081 = app.ui.shared.components.toolbar.btn_settings;
var G__39082 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39081,G__39082) : helix.core.jsx.call(null,G__39081,G__39082));
})()});
return obj39071;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39062,G__39063) : helix.core.jsx.call(null,G__39062,G__39063));
})(),(function (){var G__39102 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39103 = (function (){var obj39111 = ({"x":(1174),"y":(54),"children":(function (){var G__39125 = app.ui.shared.components.toolbar.btn_divider;
var G__39126 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39125,G__39126) : helix.core.jsx.call(null,G__39125,G__39126));
})()});
return obj39111;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39102,G__39103) : helix.core.jsx.call(null,G__39102,G__39103));
})(),(function (){var G__39155 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39157 = (function (){var obj39162 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__39181 = app.ui.shared.components.toolbar.btn_info;
var G__39182 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39181,G__39182) : helix.core.jsx.call(null,G__39181,G__39182));
})()});
return obj39162;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39155,G__39157) : helix.core.jsx.call(null,G__39155,G__39157));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38629,G__38630) : helix.core.jsxs.call(null,G__38629,G__38630));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39199 = G__38617;
(G__39199.displayName = "app.ui.kits.connect.NRR-2-60.toolbar-panel/NRR-2-60-toolbar-panel");

return G__39199;
} else {
return G__38617;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_60.toolbar_panel.js.map
