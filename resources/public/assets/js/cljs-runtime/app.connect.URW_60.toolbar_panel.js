goog.provide('app.connect.URW_60.toolbar_panel');

app.connect.URW_60.toolbar_panel.URW_60_toolbar_panel = (function (){var G__56962 = (function app$connect$URW_60$toolbar_panel$URW_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__56964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URW-60-show-toolbar","URW-60-show-toolbar",-935397957)], null));
var vec__56970 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56970,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56970,(1),null);
var vec__56979 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56979,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56979,(1),null);
var vec__56985 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56985,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56985,(1),null);
var vec__56991 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56991,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56991,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__56994 = helix.core.Fragment;
var G__56997 = ({"children": [(function (){var G__56999 = app.shared.components.toolbar_title.toolbar_title;
var G__57001 = (function (){var obj57005 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Universal Converter"});
return obj57005;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__56999,G__57001) : helix.core.jsx.call(null,G__56999,G__57001));
})(),(function (){var G__57007 = app.shared.components.toolbar_title.toolbar_title;
var G__57009 = (function (){var obj57013 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URW 60"});
return obj57013;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57007,G__57009) : helix.core.jsx.call(null,G__57007,G__57009));
})(),(function (){var G__57014 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__57015 = (function (){var obj57020 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__57022 = app.shared.components.toolbar_btn_replace.toolbar_btn_replace;
var G__57023 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57022,G__57023) : helix.core.jsx.call(null,G__57022,G__57023));
})()});
return obj57020;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57014,G__57015) : helix.core.jsx.call(null,G__57014,G__57015));
})(),(function (){var G__57026 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__57027 = (function (){var obj57031 = ({"x":(867),"y":(54),"children":(function (){var G__57034 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__57035 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57034,G__57035) : helix.core.jsx.call(null,G__57034,G__57035));
})()});
return obj57031;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57026,G__57027) : helix.core.jsx.call(null,G__57026,G__57027));
})(),(function (){var G__57038 = app.shared.components.toolbar_switch_panel.toolbar_switch_panel;
var G__57039 = (function (){var obj57043 = ({"x":(917),"y":(12),"children":[(function (){var G__57046 = app.shared.components.toolbar_switch.toolbar_switch;
var G__57047 = (function (){var obj57049 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__57052 = (function (p1__56952_SHARP_){
return cljs.core.not(p1__56952_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__57052) : set_val_1_BANG_.call(null,G__57052));
}),"legend":(1),"inactive":false});
return obj57049;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57046,G__57047) : helix.core.jsx.call(null,G__57046,G__57047));
})(),(function (){var G__57057 = app.shared.components.toolbar_switch.toolbar_switch;
var G__57058 = (function (){var obj57062 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__57065 = (function (p1__56954_SHARP_){
return cljs.core.not(p1__56954_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__57065) : set_val_2_BANG_.call(null,G__57065));
}),"legend":(2),"inactive":false});
return obj57062;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57057,G__57058) : helix.core.jsx.call(null,G__57057,G__57058));
})(),(function (){var G__57072 = app.shared.components.toolbar_switch.toolbar_switch;
var G__57073 = (function (){var obj57075 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__57077 = (function (p1__56956_SHARP_){
return cljs.core.not(p1__56956_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__57077) : set_val_3_BANG_.call(null,G__57077));
}),"legend":(3),"inactive":false});
return obj57075;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57072,G__57073) : helix.core.jsx.call(null,G__57072,G__57073));
})(),(function (){var G__57082 = app.shared.components.toolbar_switch.toolbar_switch;
var G__57083 = (function (){var obj57085 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__57087 = (function (p1__56958_SHARP_){
return cljs.core.not(p1__56958_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__57087) : set_val_4_BANG_.call(null,G__57087));
}),"legend":(4),"inactive":false});
return obj57085;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57082,G__57083) : helix.core.jsx.call(null,G__57082,G__57083));
})()]});
return obj57043;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__57038,G__57039) : helix.core.jsxs.call(null,G__57038,G__57039));
})(),(function (){var G__57092 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__57093 = (function (){var obj57095 = ({"x":(1064),"y":(54),"children":(function (){var G__57097 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__57098 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57097,G__57098) : helix.core.jsx.call(null,G__57097,G__57098));
})()});
return obj57095;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57092,G__57093) : helix.core.jsx.call(null,G__57092,G__57093));
})(),(function (){var G__57099 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__57100 = (function (){var obj57104 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__57108 = app.shared.components.toolbar_btn_full_screen.toolbar_btn_full_screen;
var G__57109 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57108,G__57109) : helix.core.jsx.call(null,G__57108,G__57109));
})()});
return obj57104;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57099,G__57100) : helix.core.jsx.call(null,G__57099,G__57100));
})(),(function (){var G__57110 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__57111 = (function (){var obj57113 = ({"x":(1174),"y":(54),"children":(function (){var G__57116 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__57117 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57116,G__57117) : helix.core.jsx.call(null,G__57116,G__57117));
})()});
return obj57113;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57110,G__57111) : helix.core.jsx.call(null,G__57110,G__57111));
})(),(function (){var G__57122 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__57123 = (function (){var obj57125 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Universal Converter",new cljs.core.Keyword(null,"text","text",-1790561697),"The universal converter converts the analogue 4-20 mA signals from a connected level electrode into CAN bus telegrams. The data are transferred to an ISO 11898 CAN bus via the CANopen protocol. Function tests and failure diagnosis are performed using the URB 60 visual display and operating unit."], null)], null));
}),"children":(function (){var G__57128 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__57129 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57128,G__57129) : helix.core.jsx.call(null,G__57128,G__57129));
})()});
return obj57125;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57122,G__57123) : helix.core.jsx.call(null,G__57122,G__57123));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__56994,G__56997) : helix.core.jsxs.call(null,G__56994,G__56997));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__57134 = G__56962;
(G__57134.displayName = "app.connect.URW-60.toolbar-panel/URW-60-toolbar-panel");

return G__57134;
} else {
return G__56962;
}
})();




//# sourceMappingURL=app.connect.URW_60.toolbar_panel.js.map
