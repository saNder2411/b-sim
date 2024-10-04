goog.provide('app.ui.kits.connect.NRR_2_60_3C.toolbar_panel');

app.ui.kits.connect.NRR_2_60_3C.toolbar_panel.NRR_2_60_3C_toolbar_panel = (function (){var G__38647 = (function app$ui$kits$connect$NRR_2_60_3C$toolbar_panel$NRR_2_60_3C_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38664 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60-3C","show-toolbar","NRR-2-60-3C/show-toolbar",-2052774848)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__38736 = helix.core.Fragment;
var G__38737 = ({"children": [(function (){var G__38740 = app.ui.shared.components.toolbar.title;
var G__38741 = (function (){var obj38752 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj38752;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38740,G__38741) : helix.core.jsx.call(null,G__38740,G__38741));
})(),(function (){var G__38762 = app.ui.shared.components.toolbar.title;
var G__38764 = (function (){var obj38771 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60 3C"});
return obj38771;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38762,G__38764) : helix.core.jsx.call(null,G__38762,G__38764));
})(),(function (){var G__38785 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38786 = (function (){var obj38796 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__38810 = app.ui.shared.components.toolbar.btn_replace;
var G__38811 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38810,G__38811) : helix.core.jsx.call(null,G__38810,G__38811));
})()});
return obj38796;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38785,G__38786) : helix.core.jsx.call(null,G__38785,G__38786));
})(),(function (){var G__38820 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38821 = (function (){var obj38827 = ({"x":(648),"y":(54),"children":(function (){var G__38832 = app.ui.shared.components.toolbar.btn_divider;
var G__38833 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38832,G__38833) : helix.core.jsx.call(null,G__38832,G__38833));
})()});
return obj38827;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38820,G__38821) : helix.core.jsx.call(null,G__38820,G__38821));
})(),(function (){var G__38853 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38854 = (function (){var obj38860 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__38878 = app.ui.shared.components.toolbar.btn_error;
var G__38879 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38878,G__38879) : helix.core.jsx.call(null,G__38878,G__38879));
})()});
return obj38860;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38853,G__38854) : helix.core.jsx.call(null,G__38853,G__38854));
})(),(function (){var G__38908 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38909 = (function (){var obj38923 = ({"x":(758),"y":(54),"children":(function (){var G__38939 = app.ui.shared.components.toolbar.btn_divider;
var G__38940 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38939,G__38940) : helix.core.jsx.call(null,G__38939,G__38940));
})()});
return obj38923;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38908,G__38909) : helix.core.jsx.call(null,G__38908,G__38909));
})(),(function (){var G__38963 = app.ui.shared.components.toolbar.switch_panel;
var G__38964 = (function (){var obj38975 = ({"x":(808),"y":(12),"children":[(function (){var G__38979 = app.ui.shared.components.toolbar.switch$;
var G__38980 = (function (){var obj39006 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60-3C","change","NRR-2-60-3C/change",-1195171215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj39006;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38979,G__38980) : helix.core.jsx.call(null,G__38979,G__38980));
})(),(function (){var G__39020 = app.ui.shared.components.toolbar.switch$;
var G__39021 = (function (){var obj39027 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60-3C","change","NRR-2-60-3C/change",-1195171215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj39027;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39020,G__39021) : helix.core.jsx.call(null,G__39020,G__39021));
})(),(function (){var G__39049 = app.ui.shared.components.toolbar.switch$;
var G__39050 = (function (){var obj39061 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60-3C","change","NRR-2-60-3C/change",-1195171215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj39061;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39049,G__39050) : helix.core.jsx.call(null,G__39049,G__39050));
})(),(function (){var G__39085 = app.ui.shared.components.toolbar.switch$;
var G__39086 = (function (){var obj39093 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60-3C","change","NRR-2-60-3C/change",-1195171215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj39093;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39085,G__39086) : helix.core.jsx.call(null,G__39085,G__39086));
})()]});
return obj38975;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38963,G__38964) : helix.core.jsxs.call(null,G__38963,G__38964));
})(),(function (){var G__39116 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39117 = (function (){var obj39124 = ({"x":(954),"y":(54),"children":(function (){var G__39152 = app.ui.shared.components.toolbar.btn_divider;
var G__39154 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39152,G__39154) : helix.core.jsx.call(null,G__39152,G__39154));
})()});
return obj39124;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39116,G__39117) : helix.core.jsx.call(null,G__39116,G__39117));
})(),(function (){var G__39167 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39168 = (function (){var obj39184 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60-3C","change","NRR-2-60-3C/change",-1195171215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__39195 = app.ui.shared.components.toolbar.btn_full_screen;
var G__39196 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39195,G__39196) : helix.core.jsx.call(null,G__39195,G__39196));
})()});
return obj39184;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39167,G__39168) : helix.core.jsx.call(null,G__39167,G__39168));
})(),(function (){var G__39202 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39203 = (function (){var obj39219 = ({"x":(1064),"y":(54),"children":(function (){var G__39224 = app.ui.shared.components.toolbar.btn_divider;
var G__39225 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39224,G__39225) : helix.core.jsx.call(null,G__39224,G__39225));
})()});
return obj39219;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39202,G__39203) : helix.core.jsx.call(null,G__39202,G__39203));
})(),(function (){var G__39237 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39238 = (function (){var obj39254 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60-3C","change","NRR-2-60-3C/change",-1195171215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__39259 = app.ui.shared.components.toolbar.btn_settings;
var G__39260 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39259,G__39260) : helix.core.jsx.call(null,G__39259,G__39260));
})()});
return obj39254;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39237,G__39238) : helix.core.jsx.call(null,G__39237,G__39238));
})(),(function (){var G__39274 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39275 = (function (){var obj39285 = ({"x":(1174),"y":(54),"children":(function (){var G__39292 = app.ui.shared.components.toolbar.btn_divider;
var G__39293 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39292,G__39293) : helix.core.jsx.call(null,G__39292,G__39293));
})()});
return obj39285;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39274,G__39275) : helix.core.jsx.call(null,G__39274,G__39275));
})(),(function (){var G__39299 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39300 = (function (){var obj39309 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__39316 = app.ui.shared.components.toolbar.btn_info;
var G__39317 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39316,G__39317) : helix.core.jsx.call(null,G__39316,G__39317));
})()});
return obj39309;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39299,G__39300) : helix.core.jsx.call(null,G__39299,G__39300));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38736,G__38737) : helix.core.jsxs.call(null,G__38736,G__38737));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39334 = G__38647;
(G__39334.displayName = "app.ui.kits.connect.NRR-2-60-3C.toolbar-panel/NRR-2-60-3C-toolbar-panel");

return G__39334;
} else {
return G__38647;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_60_3C.toolbar_panel.js.map
