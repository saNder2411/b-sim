goog.provide('app.kits.connect.LRR_1_60.toolbar_panel');

app.kits.connect.LRR_1_60.toolbar_panel.LRR_1_60_toolbar_panel = (function (){var G__45856 = (function app$kits$connect$LRR_1_60$toolbar_panel$LRR_1_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__45861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRR-1-60-show-toolbar","LRR-1-60-show-toolbar",897532328)], null));
var vec__45866 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45866,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45866,(1),null);
var vec__45869 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45869,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45869,(1),null);
var vec__45872 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45872,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45872,(1),null);
var vec__45875 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45875,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45875,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__45890 = helix.core.Fragment;
var G__45891 = ({"children": [(function (){var G__45894 = app.shared.components.toolbar.title;
var G__45895 = (function (){var obj45897 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Controller"});
return obj45897;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45894,G__45895) : helix.core.jsx.call(null,G__45894,G__45895));
})(),(function (){var G__45904 = app.shared.components.toolbar.title;
var G__45905 = (function (){var obj45911 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRR 1-60"});
return obj45911;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45904,G__45905) : helix.core.jsx.call(null,G__45904,G__45905));
})(),(function (){var G__45914 = app.shared.components.toolbar.btn_wrapper;
var G__45915 = (function (){var obj45921 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__45926 = app.shared.components.toolbar.btn_replace;
var G__45927 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45926,G__45927) : helix.core.jsx.call(null,G__45926,G__45927));
})()});
return obj45921;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45914,G__45915) : helix.core.jsx.call(null,G__45914,G__45915));
})(),(function (){var G__45934 = app.shared.components.toolbar.btn_wrapper;
var G__45935 = (function (){var obj45939 = ({"x":(757),"y":(54),"children":(function (){var G__45944 = app.shared.components.toolbar.btn_divider;
var G__45945 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45944,G__45945) : helix.core.jsx.call(null,G__45944,G__45945));
})()});
return obj45939;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45934,G__45935) : helix.core.jsx.call(null,G__45934,G__45935));
})(),(function (){var G__45952 = app.shared.components.toolbar.btn_wrapper;
var G__45953 = (function (){var obj45959 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__45966 = app.shared.components.toolbar.btn_error;
var G__45967 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45966,G__45967) : helix.core.jsx.call(null,G__45966,G__45967));
})()});
return obj45959;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45952,G__45953) : helix.core.jsx.call(null,G__45952,G__45953));
})(),(function (){var G__45974 = app.shared.components.toolbar.btn_wrapper;
var G__45975 = (function (){var obj45981 = ({"x":(867),"y":(54),"children":(function (){var G__45986 = app.shared.components.toolbar.btn_divider;
var G__45988 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45986,G__45988) : helix.core.jsx.call(null,G__45986,G__45988));
})()});
return obj45981;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45974,G__45975) : helix.core.jsx.call(null,G__45974,G__45975));
})(),(function (){var G__45991 = app.shared.components.toolbar.switch_panel;
var G__45992 = (function (){var obj45997 = ({"x":(917),"y":(12),"children":[(function (){var G__46002 = app.shared.components.toolbar.switch$;
var G__46003 = (function (){var obj46023 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__46024 = (function (p1__45828_SHARP_){
return cljs.core.not(p1__45828_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__46024) : set_val_1_BANG_.call(null,G__46024));
}),"legend":(1),"inactive":false});
return obj46023;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46002,G__46003) : helix.core.jsx.call(null,G__46002,G__46003));
})(),(function (){var G__46030 = app.shared.components.toolbar.switch$;
var G__46031 = (function (){var obj46033 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__46041 = (function (p1__45831_SHARP_){
return cljs.core.not(p1__45831_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__46041) : set_val_2_BANG_.call(null,G__46041));
}),"legend":(2),"inactive":false});
return obj46033;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46030,G__46031) : helix.core.jsx.call(null,G__46030,G__46031));
})(),(function (){var G__46048 = app.shared.components.toolbar.switch$;
var G__46049 = (function (){var obj46055 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__46058 = (function (p1__45832_SHARP_){
return cljs.core.not(p1__45832_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__46058) : set_val_3_BANG_.call(null,G__46058));
}),"legend":(3),"inactive":false});
return obj46055;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46048,G__46049) : helix.core.jsx.call(null,G__46048,G__46049));
})(),(function (){var G__46069 = app.shared.components.toolbar.switch$;
var G__46070 = (function (){var obj46074 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__46079 = (function (p1__45833_SHARP_){
return cljs.core.not(p1__45833_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__46079) : set_val_4_BANG_.call(null,G__46079));
}),"legend":(4),"inactive":false});
return obj46074;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46069,G__46070) : helix.core.jsx.call(null,G__46069,G__46070));
})()]});
return obj45997;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45991,G__45992) : helix.core.jsxs.call(null,G__45991,G__45992));
})(),(function (){var G__46090 = app.shared.components.toolbar.btn_wrapper;
var G__46091 = (function (){var obj46097 = ({"x":(1064),"y":(54),"children":(function (){var G__46102 = app.shared.components.toolbar.btn_divider;
var G__46103 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46102,G__46103) : helix.core.jsx.call(null,G__46102,G__46103));
})()});
return obj46097;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46090,G__46091) : helix.core.jsx.call(null,G__46090,G__46091));
})(),(function (){var G__46108 = app.shared.components.toolbar.btn_wrapper;
var G__46109 = (function (){var obj46115 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__46121 = app.shared.components.toolbar.btn_full_screen;
var G__46122 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46121,G__46122) : helix.core.jsx.call(null,G__46121,G__46122));
})()});
return obj46115;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46108,G__46109) : helix.core.jsx.call(null,G__46108,G__46109));
})(),(function (){var G__46131 = app.shared.components.toolbar.btn_wrapper;
var G__46132 = (function (){var obj46137 = ({"x":(1174),"y":(54),"children":(function (){var G__46139 = app.shared.components.toolbar.btn_divider;
var G__46140 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46139,G__46140) : helix.core.jsx.call(null,G__46139,G__46140));
})()});
return obj46137;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46131,G__46132) : helix.core.jsx.call(null,G__46131,G__46132));
})(),(function (){var G__46151 = app.shared.components.toolbar.btn_wrapper;
var G__46152 = (function (){var obj46184 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The conductivity controller can be used in conjunction with LRG 16-60, LRG 16-61 and LRG 17- 60 conductivity electrodes as a conductivity controller in pressurised steam and hot-water plants and in condensate and feedwater tanks. The conductivity controller indicates when MAX or MIN conductivity has been reached, opens or closes a continuous blowdown valve and can actuate an intermittent blowdown valve."], null)], null));
}),"children":(function (){var G__46196 = app.shared.components.toolbar.btn_info;
var G__46197 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46196,G__46197) : helix.core.jsx.call(null,G__46196,G__46197));
})()});
return obj46184;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46151,G__46152) : helix.core.jsx.call(null,G__46151,G__46152));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45890,G__45891) : helix.core.jsxs.call(null,G__45890,G__45891));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__46230 = G__45856;
(G__46230.displayName = "app.kits.connect.LRR-1-60.toolbar-panel/LRR-1-60-toolbar-panel");

return G__46230;
} else {
return G__45856;
}
})();




//# sourceMappingURL=app.kits.connect.LRR_1_60.toolbar_panel.js.map
