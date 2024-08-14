goog.provide('app.ui.kits.connect.LRR_1_60.toolbar_panel');

app.ui.kits.connect.LRR_1_60.toolbar_panel.LRR_1_60_toolbar_panel = (function (){var G__34670 = (function app$ui$kits$connect$LRR_1_60$toolbar_panel$LRR_1_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRR-1-60-show-toolbar","LRR-1-60-show-toolbar",897532328)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__34704 = helix.core.Fragment;
var G__34705 = ({"children": [(function (){var G__34710 = app.ui.shared.components.toolbar.title;
var G__34711 = (function (){var obj34785 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Controller"});
return obj34785;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34710,G__34711) : helix.core.jsx.call(null,G__34710,G__34711));
})(),(function (){var G__34794 = app.ui.shared.components.toolbar.title;
var G__34795 = (function (){var obj34799 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRR 1-60"});
return obj34799;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34794,G__34795) : helix.core.jsx.call(null,G__34794,G__34795));
})(),(function (){var G__34822 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34823 = (function (){var obj34827 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__34842 = app.ui.shared.components.toolbar.btn_replace;
var G__34843 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34842,G__34843) : helix.core.jsx.call(null,G__34842,G__34843));
})()});
return obj34827;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34822,G__34823) : helix.core.jsx.call(null,G__34822,G__34823));
})(),(function (){var G__34852 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34853 = (function (){var obj34859 = ({"x":(757),"y":(54),"children":(function (){var G__34866 = app.ui.shared.components.toolbar.btn_divider;
var G__34867 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34866,G__34867) : helix.core.jsx.call(null,G__34866,G__34867));
})()});
return obj34859;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34852,G__34853) : helix.core.jsx.call(null,G__34852,G__34853));
})(),(function (){var G__34878 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34879 = (function (){var obj34883 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__34896 = app.ui.shared.components.toolbar.btn_error;
var G__34897 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34896,G__34897) : helix.core.jsx.call(null,G__34896,G__34897));
})()});
return obj34883;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34878,G__34879) : helix.core.jsx.call(null,G__34878,G__34879));
})(),(function (){var G__34903 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34904 = (function (){var obj34910 = ({"x":(867),"y":(54),"children":(function (){var G__34917 = app.ui.shared.components.toolbar.btn_divider;
var G__34918 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34917,G__34918) : helix.core.jsx.call(null,G__34917,G__34918));
})()});
return obj34910;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34903,G__34904) : helix.core.jsx.call(null,G__34903,G__34904));
})(),(function (){var G__34925 = app.ui.shared.components.toolbar.switch_panel;
var G__34926 = (function (){var obj34930 = ({"x":(917),"y":(12),"children":[(function (){var G__34937 = app.ui.shared.components.toolbar.switch$;
var G__34938 = (function (){var obj34944 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRR-1-60","change-LRR-1-60",-841957839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj34944;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34937,G__34938) : helix.core.jsx.call(null,G__34937,G__34938));
})(),(function (){var G__34955 = app.ui.shared.components.toolbar.switch$;
var G__34956 = (function (){var obj34964 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRR-1-60","change-LRR-1-60",-841957839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj34964;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34955,G__34956) : helix.core.jsx.call(null,G__34955,G__34956));
})(),(function (){var G__34973 = app.ui.shared.components.toolbar.switch$;
var G__34974 = (function (){var obj34980 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRR-1-60","change-LRR-1-60",-841957839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj34980;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34973,G__34974) : helix.core.jsx.call(null,G__34973,G__34974));
})(),(function (){var G__34992 = app.ui.shared.components.toolbar.switch$;
var G__34993 = (function (){var obj34998 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRR-1-60","change-LRR-1-60",-841957839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj34998;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34992,G__34993) : helix.core.jsx.call(null,G__34992,G__34993));
})()]});
return obj34930;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34925,G__34926) : helix.core.jsxs.call(null,G__34925,G__34926));
})(),(function (){var G__35003 = app.ui.shared.components.toolbar.btn_wrapper;
var G__35004 = (function (){var obj35008 = ({"x":(1064),"y":(54),"children":(function (){var G__35009 = app.ui.shared.components.toolbar.btn_divider;
var G__35010 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35009,G__35010) : helix.core.jsx.call(null,G__35009,G__35010));
})()});
return obj35008;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35003,G__35004) : helix.core.jsx.call(null,G__35003,G__35004));
})(),(function (){var G__35015 = app.ui.shared.components.toolbar.btn_wrapper;
var G__35016 = (function (){var obj35020 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRR-1-60","change-LRR-1-60",-841957839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__35023 = app.ui.shared.components.toolbar.btn_full_screen;
var G__35024 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35023,G__35024) : helix.core.jsx.call(null,G__35023,G__35024));
})()});
return obj35020;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35015,G__35016) : helix.core.jsx.call(null,G__35015,G__35016));
})(),(function (){var G__35027 = app.ui.shared.components.toolbar.btn_wrapper;
var G__35028 = (function (){var obj35032 = ({"x":(1174),"y":(54),"children":(function (){var G__35033 = app.ui.shared.components.toolbar.btn_divider;
var G__35034 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35033,G__35034) : helix.core.jsx.call(null,G__35033,G__35034));
})()});
return obj35032;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35027,G__35028) : helix.core.jsx.call(null,G__35027,G__35028));
})(),(function (){var G__35036 = app.ui.shared.components.toolbar.btn_wrapper;
var G__35037 = (function (){var obj35039 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The conductivity controller can be used in conjunction with LRG 16-60, LRG 16-61 and LRG 17- 60 conductivity electrodes as a conductivity controller in pressurised steam and hot-water plants and in condensate and feedwater tanks. The conductivity controller indicates when MAX or MIN conductivity has been reached, opens or closes a continuous blowdown valve and can actuate an intermittent blowdown valve."], null)], null));
}),"children":(function (){var G__35040 = app.ui.shared.components.toolbar.btn_info;
var G__35041 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35040,G__35041) : helix.core.jsx.call(null,G__35040,G__35041));
})()});
return obj35039;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35036,G__35037) : helix.core.jsx.call(null,G__35036,G__35037));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34704,G__34705) : helix.core.jsxs.call(null,G__34704,G__34705));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__35042 = G__34670;
(G__35042.displayName = "app.ui.kits.connect.LRR-1-60.toolbar-panel/LRR-1-60-toolbar-panel");

return G__35042;
} else {
return G__34670;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRR_1_60.toolbar_panel.js.map
