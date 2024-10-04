goog.provide('app.ui.kits.connect.LRR_1_60.toolbar_panel');

app.ui.kits.connect.LRR_1_60.toolbar_panel.LRR_1_60_toolbar_panel = (function (){var G__38648 = (function app$ui$kits$connect$LRR_1_60$toolbar_panel$LRR_1_60_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRR-1-60","show-toolbar","LRR-1-60/show-toolbar",817466642)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__38684 = helix.core.Fragment;
var G__38685 = ({"children": [(function (){var G__38690 = app.ui.shared.components.toolbar.title;
var G__38691 = (function (){var obj38698 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Controller"});
return obj38698;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38690,G__38691) : helix.core.jsx.call(null,G__38690,G__38691));
})(),(function (){var G__38711 = app.ui.shared.components.toolbar.title;
var G__38712 = (function (){var obj38717 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRR 1-60"});
return obj38717;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38711,G__38712) : helix.core.jsx.call(null,G__38711,G__38712));
})(),(function (){var G__38726 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38727 = (function (){var obj38735 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__38744 = app.ui.shared.components.toolbar.btn_replace;
var G__38745 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38744,G__38745) : helix.core.jsx.call(null,G__38744,G__38745));
})()});
return obj38735;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38726,G__38727) : helix.core.jsx.call(null,G__38726,G__38727));
})(),(function (){var G__38763 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38765 = (function (){var obj38769 = ({"x":(757),"y":(54),"children":(function (){var G__38778 = app.ui.shared.components.toolbar.btn_divider;
var G__38779 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38778,G__38779) : helix.core.jsx.call(null,G__38778,G__38779));
})()});
return obj38769;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38763,G__38765) : helix.core.jsx.call(null,G__38763,G__38765));
})(),(function (){var G__38804 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38805 = (function (){var obj38809 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__38818 = app.ui.shared.components.toolbar.btn_error;
var G__38819 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38818,G__38819) : helix.core.jsx.call(null,G__38818,G__38819));
})()});
return obj38809;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38804,G__38805) : helix.core.jsx.call(null,G__38804,G__38805));
})(),(function (){var G__38836 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38837 = (function (){var obj38843 = ({"x":(867),"y":(54),"children":(function (){var G__38851 = app.ui.shared.components.toolbar.btn_divider;
var G__38852 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38851,G__38852) : helix.core.jsx.call(null,G__38851,G__38852));
})()});
return obj38843;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38836,G__38837) : helix.core.jsx.call(null,G__38836,G__38837));
})(),(function (){var G__38872 = app.ui.shared.components.toolbar.switch_panel;
var G__38873 = (function (){var obj38893 = ({"x":(917),"y":(12),"children":[(function (){var G__38912 = app.ui.shared.components.toolbar.switch$;
var G__38913 = (function (){var obj38929 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRR-1-60","change","LRR-1-60/change",1431480359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj38929;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38912,G__38913) : helix.core.jsx.call(null,G__38912,G__38913));
})(),(function (){var G__38954 = app.ui.shared.components.toolbar.switch$;
var G__38955 = (function (){var obj38969 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRR-1-60","change","LRR-1-60/change",1431480359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj38969;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38954,G__38955) : helix.core.jsx.call(null,G__38954,G__38955));
})(),(function (){var G__38993 = app.ui.shared.components.toolbar.switch$;
var G__38994 = (function (){var obj39002 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRR-1-60","change","LRR-1-60/change",1431480359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj39002;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38993,G__38994) : helix.core.jsx.call(null,G__38993,G__38994));
})(),(function (){var G__39018 = app.ui.shared.components.toolbar.switch$;
var G__39019 = (function (){var obj39025 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRR-1-60","change","LRR-1-60/change",1431480359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj39025;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39018,G__39019) : helix.core.jsx.call(null,G__39018,G__39019));
})()]});
return obj38893;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38872,G__38873) : helix.core.jsxs.call(null,G__38872,G__38873));
})(),(function (){var G__39057 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39058 = (function (){var obj39069 = ({"x":(1064),"y":(54),"children":(function (){var G__39074 = app.ui.shared.components.toolbar.btn_divider;
var G__39075 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39074,G__39075) : helix.core.jsx.call(null,G__39074,G__39075));
})()});
return obj39069;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39057,G__39058) : helix.core.jsx.call(null,G__39057,G__39058));
})(),(function (){var G__39090 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39091 = (function (){var obj39097 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRR-1-60","change","LRR-1-60/change",1431480359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__39112 = app.ui.shared.components.toolbar.btn_full_screen;
var G__39113 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39112,G__39113) : helix.core.jsx.call(null,G__39112,G__39113));
})()});
return obj39097;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39090,G__39091) : helix.core.jsx.call(null,G__39090,G__39091));
})(),(function (){var G__39129 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39130 = (function (){var obj39138 = ({"x":(1174),"y":(54),"children":(function (){var G__39149 = app.ui.shared.components.toolbar.btn_divider;
var G__39150 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39149,G__39150) : helix.core.jsx.call(null,G__39149,G__39150));
})()});
return obj39138;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39129,G__39130) : helix.core.jsx.call(null,G__39129,G__39130));
})(),(function (){var G__39165 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39166 = (function (){var obj39172 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The conductivity controller can be used in conjunction with LRG 16-60, LRG 16-61 and LRG 17- 60 conductivity electrodes as a conductivity controller in pressurised steam and hot-water plants and in condensate and feedwater tanks. The conductivity controller indicates when MAX or MIN conductivity has been reached, opens or closes a continuous blowdown valve and can actuate an intermittent blowdown valve."], null)], null));
}),"children":(function (){var G__39193 = app.ui.shared.components.toolbar.btn_info;
var G__39194 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39193,G__39194) : helix.core.jsx.call(null,G__39193,G__39194));
})()});
return obj39172;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39165,G__39166) : helix.core.jsx.call(null,G__39165,G__39166));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38684,G__38685) : helix.core.jsxs.call(null,G__38684,G__38685));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39206 = G__38648;
(G__39206.displayName = "app.ui.kits.connect.LRR-1-60.toolbar-panel/LRR-1-60-toolbar-panel");

return G__39206;
} else {
return G__38648;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRR_1_60.toolbar_panel.js.map
