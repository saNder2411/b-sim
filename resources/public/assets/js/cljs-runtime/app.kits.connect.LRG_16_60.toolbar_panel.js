goog.provide('app.kits.connect.LRG_16_60.toolbar_panel');

app.kits.connect.LRG_16_60.toolbar_panel.LRG_16_60_toolbar_panel = (function (){var G__44948 = (function app$kits$connect$LRG_16_60$toolbar_panel$LRG_16_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__44959 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRG-16-60-show-toolbar","LRG-16-60-show-toolbar",385215925)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
if(cljs.core.truth_(show_toolbar)){
var G__44970 = helix.core.Fragment;
var G__44971 = ({"children": [(function (){var G__44974 = app.shared.components.toolbar.title;
var G__44977 = (function (){var obj44985 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Electrode"});
return obj44985;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44974,G__44977) : helix.core.jsx.call(null,G__44974,G__44977));
})(),(function (){var G__44994 = app.shared.components.toolbar.title;
var G__44995 = (function (){var obj45004 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRG 16-60"});
return obj45004;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44994,G__44995) : helix.core.jsx.call(null,G__44994,G__44995));
})(),(function (){var G__45012 = app.shared.components.toolbar.btn_wrapper;
var G__45015 = (function (){var obj45021 = ({"x":(894),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__45032 = app.shared.components.toolbar.btn_replace;
var G__45033 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45032,G__45033) : helix.core.jsx.call(null,G__45032,G__45033));
})()});
return obj45021;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45012,G__45015) : helix.core.jsx.call(null,G__45012,G__45015));
})(),(function (){var G__45044 = app.shared.components.toolbar.btn_wrapper;
var G__45045 = (function (){var obj45055 = ({"x":(954),"y":(54),"children":(function (){var G__45062 = app.shared.components.toolbar.btn_divider;
var G__45063 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45062,G__45063) : helix.core.jsx.call(null,G__45062,G__45063));
})()});
return obj45055;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45044,G__45045) : helix.core.jsx.call(null,G__45044,G__45045));
})(),(function (){var G__45078 = app.shared.components.toolbar.btn_wrapper;
var G__45079 = (function (){var obj45085 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,":full-screen?",":full-screen?",-1144598281)], null),true], null)], null));
}),"children":(function (){var G__45092 = app.shared.components.toolbar.btn_full_screen;
var G__45093 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45092,G__45093) : helix.core.jsx.call(null,G__45092,G__45093));
})()});
return obj45085;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45078,G__45079) : helix.core.jsx.call(null,G__45078,G__45079));
})(),(function (){var G__45104 = app.shared.components.toolbar.btn_wrapper;
var G__45105 = (function (){var obj45115 = ({"x":(1064),"y":(54),"children":(function (){var G__45122 = app.shared.components.toolbar.btn_divider;
var G__45123 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45122,G__45123) : helix.core.jsx.call(null,G__45122,G__45123));
})()});
return obj45115;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45104,G__45105) : helix.core.jsx.call(null,G__45104,G__45105));
})(),(function (){var G__45136 = app.shared.components.toolbar.btn_wrapper;
var G__45137 = (function (){var obj45143 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__45156 = app.shared.components.toolbar.btn_settings;
var G__45157 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45156,G__45157) : helix.core.jsx.call(null,G__45156,G__45157));
})()});
return obj45143;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45136,G__45137) : helix.core.jsx.call(null,G__45136,G__45137));
})(),(function (){var G__45164 = app.shared.components.toolbar.btn_wrapper;
var G__45165 = (function (){var obj45172 = ({"x":(1174),"y":(54),"children":(function (){var G__45178 = app.shared.components.toolbar.btn_divider;
var G__45179 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45178,G__45179) : helix.core.jsx.call(null,G__45178,G__45179));
})()});
return obj45172;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45164,G__45165) : helix.core.jsx.call(null,G__45164,G__45165));
})(),(function (){var G__45186 = app.shared.components.toolbar.btn_wrapper;
var G__45187 = (function (){var obj45193 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"LRG 1x-6x conductivity electrodes are used in combination with the URS 60/URS 61 safety control unit as a conductivity limiter and in combination with an LRR 1-60 control unit as a continuous blowdown regulator in steam boiler systems and hot-water plants."], null)], null));
}),"children":(function (){var G__45198 = app.shared.components.toolbar.btn_info;
var G__45199 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45198,G__45199) : helix.core.jsx.call(null,G__45198,G__45199));
})()});
return obj45193;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45186,G__45187) : helix.core.jsx.call(null,G__45186,G__45187));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__44970,G__44971) : helix.core.jsxs.call(null,G__44970,G__44971));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__45212 = G__44948;
(G__45212.displayName = "app.kits.connect.LRG-16-60.toolbar-panel/LRG-16-60-toolbar-panel");

return G__45212;
} else {
return G__44948;
}
})();




//# sourceMappingURL=app.kits.connect.LRG_16_60.toolbar_panel.js.map
