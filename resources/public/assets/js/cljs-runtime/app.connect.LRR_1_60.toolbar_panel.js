goog.provide('app.connect.LRR_1_60.toolbar_panel');

app.connect.LRR_1_60.toolbar_panel.LRR_1_60_toolbar_panel = (function (){var G__42504 = (function app$connect$LRR_1_60$toolbar_panel$LRR_1_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__42509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRR-1-60-show-toolbar","LRR-1-60-show-toolbar",897532328)], null));
var vec__42518 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42518,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42518,(1),null);
var vec__42521 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42521,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42521,(1),null);
var vec__42524 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42524,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42524,(1),null);
var vec__42527 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42527,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42527,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__42538 = helix.core.Fragment;
var G__42539 = ({"children": [(function (){var G__42542 = app.shared.components.toolbar.title;
var G__42543 = (function (){var obj42547 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Controller"});
return obj42547;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42542,G__42543) : helix.core.jsx.call(null,G__42542,G__42543));
})(),(function (){var G__42550 = app.shared.components.toolbar.title;
var G__42551 = (function (){var obj42555 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRR 1-60"});
return obj42555;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42550,G__42551) : helix.core.jsx.call(null,G__42550,G__42551));
})(),(function (){var G__42556 = app.shared.components.toolbar.btn_wrapper;
var G__42557 = (function (){var obj42561 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__42564 = app.shared.components.toolbar.btn_replace;
var G__42565 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42564,G__42565) : helix.core.jsx.call(null,G__42564,G__42565));
})()});
return obj42561;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42556,G__42557) : helix.core.jsx.call(null,G__42556,G__42557));
})(),(function (){var G__42570 = app.shared.components.toolbar.btn_wrapper;
var G__42571 = (function (){var obj42573 = ({"x":(757),"y":(54),"children":(function (){var G__42575 = app.shared.components.toolbar.btn_divider;
var G__42576 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42575,G__42576) : helix.core.jsx.call(null,G__42575,G__42576));
})()});
return obj42573;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42570,G__42571) : helix.core.jsx.call(null,G__42570,G__42571));
})(),(function (){var G__42660 = app.shared.components.toolbar.btn_wrapper;
var G__42661 = (function (){var obj42665 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__42668 = app.shared.components.toolbar.btn_error;
var G__42669 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42668,G__42669) : helix.core.jsx.call(null,G__42668,G__42669));
})()});
return obj42665;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42660,G__42661) : helix.core.jsx.call(null,G__42660,G__42661));
})(),(function (){var G__42672 = app.shared.components.toolbar.btn_wrapper;
var G__42673 = (function (){var obj42677 = ({"x":(867),"y":(54),"children":(function (){var G__42680 = app.shared.components.toolbar.btn_divider;
var G__42681 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42680,G__42681) : helix.core.jsx.call(null,G__42680,G__42681));
})()});
return obj42677;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42672,G__42673) : helix.core.jsx.call(null,G__42672,G__42673));
})(),(function (){var G__42684 = app.shared.components.toolbar.switch_panel;
var G__42685 = (function (){var obj42687 = ({"x":(917),"y":(12),"children":[(function (){var G__42688 = app.shared.components.toolbar.switch$;
var G__42689 = (function (){var obj42693 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__42694 = (function (p1__42485_SHARP_){
return cljs.core.not(p1__42485_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__42694) : set_val_1_BANG_.call(null,G__42694));
}),"legend":(1),"inactive":false});
return obj42693;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42688,G__42689) : helix.core.jsx.call(null,G__42688,G__42689));
})(),(function (){var G__42698 = app.shared.components.toolbar.switch$;
var G__42699 = (function (){var obj42702 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__42706 = (function (p1__42486_SHARP_){
return cljs.core.not(p1__42486_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__42706) : set_val_2_BANG_.call(null,G__42706));
}),"legend":(2),"inactive":false});
return obj42702;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42698,G__42699) : helix.core.jsx.call(null,G__42698,G__42699));
})(),(function (){var G__42711 = app.shared.components.toolbar.switch$;
var G__42712 = (function (){var obj42716 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__42719 = (function (p1__42487_SHARP_){
return cljs.core.not(p1__42487_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__42719) : set_val_3_BANG_.call(null,G__42719));
}),"legend":(3),"inactive":false});
return obj42716;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42711,G__42712) : helix.core.jsx.call(null,G__42711,G__42712));
})(),(function (){var G__42766 = app.shared.components.toolbar.switch$;
var G__42767 = (function (){var obj42773 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__42779 = (function (p1__42488_SHARP_){
return cljs.core.not(p1__42488_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__42779) : set_val_4_BANG_.call(null,G__42779));
}),"legend":(4),"inactive":false});
return obj42773;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42766,G__42767) : helix.core.jsx.call(null,G__42766,G__42767));
})()]});
return obj42687;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42684,G__42685) : helix.core.jsxs.call(null,G__42684,G__42685));
})(),(function (){var G__42789 = app.shared.components.toolbar.btn_wrapper;
var G__42790 = (function (){var obj42799 = ({"x":(1064),"y":(54),"children":(function (){var G__42802 = app.shared.components.toolbar.btn_divider;
var G__42803 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42802,G__42803) : helix.core.jsx.call(null,G__42802,G__42803));
})()});
return obj42799;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42789,G__42790) : helix.core.jsx.call(null,G__42789,G__42790));
})(),(function (){var G__42809 = app.shared.components.toolbar.btn_wrapper;
var G__42810 = (function (){var obj42816 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__42825 = app.shared.components.toolbar.btn_full_screen;
var G__42826 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42825,G__42826) : helix.core.jsx.call(null,G__42825,G__42826));
})()});
return obj42816;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42809,G__42810) : helix.core.jsx.call(null,G__42809,G__42810));
})(),(function (){var G__42831 = app.shared.components.toolbar.btn_wrapper;
var G__42832 = (function (){var obj42838 = ({"x":(1174),"y":(54),"children":(function (){var G__42839 = app.shared.components.toolbar.btn_divider;
var G__42840 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42839,G__42840) : helix.core.jsx.call(null,G__42839,G__42840));
})()});
return obj42838;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42831,G__42832) : helix.core.jsx.call(null,G__42831,G__42832));
})(),(function (){var G__42845 = app.shared.components.toolbar.btn_wrapper;
var G__42846 = (function (){var obj42849 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The conductivity controller can be used in conjunction with LRG 16-60, LRG 16-61 and LRG 17- 60 conductivity electrodes as a conductivity controller in pressurised steam and hot-water plants and in condensate and feedwater tanks. The conductivity controller indicates when MAX or MIN conductivity has been reached, opens or closes a continuous blowdown valve and can actuate an intermittent blowdown valve."], null)], null));
}),"children":(function (){var G__42853 = app.shared.components.toolbar.btn_info;
var G__42854 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42853,G__42854) : helix.core.jsx.call(null,G__42853,G__42854));
})()});
return obj42849;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42845,G__42846) : helix.core.jsx.call(null,G__42845,G__42846));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42538,G__42539) : helix.core.jsxs.call(null,G__42538,G__42539));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__42863 = G__42504;
(G__42863.displayName = "app.connect.LRR-1-60.toolbar-panel/LRR-1-60-toolbar-panel");

return G__42863;
} else {
return G__42504;
}
})();




//# sourceMappingURL=app.connect.LRR_1_60.toolbar_panel.js.map
