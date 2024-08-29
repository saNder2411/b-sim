goog.provide('app.ui.kits.connect.URS_61.toolbar_panel');

app.ui.kits.connect.URS_61.toolbar_panel.URS_61_toolbar_panel = (function (){var G__40633 = (function app$ui$kits$connect$URS_61$toolbar_panel$URS_61_toolbar_panel_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__40636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-61-show-toolbar","URS-61-show-toolbar",-707856974)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
var switch_5 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(5)], null)], null));
var switch_6 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(6)], null)], null));
var switch_7 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(7)], null)], null));
var switch_8 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(8)], null)], null));
var switch_9 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(9)], null)], null));
var switch_10 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(10)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__40640 = helix.core.Fragment;
var G__40641 = ({"children": [(function (){var G__40642 = app.ui.shared.components.toolbar.title;
var G__40643 = (function (){var obj40646 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj40646;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40642,G__40643) : helix.core.jsx.call(null,G__40642,G__40643));
})(),(function (){var G__40651 = app.ui.shared.components.toolbar.title;
var G__40652 = (function (){var obj40655 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 61"});
return obj40655;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40651,G__40652) : helix.core.jsx.call(null,G__40651,G__40652));
})(),(function (){var G__40656 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40657 = (function (){var obj40659 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__40661 = app.ui.shared.components.toolbar.btn_replace;
var G__40662 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40661,G__40662) : helix.core.jsx.call(null,G__40661,G__40662));
})()});
return obj40659;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40656,G__40657) : helix.core.jsx.call(null,G__40656,G__40657));
})(),(function (){var G__40667 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40668 = (function (){var obj40670 = ({"x":(657),"y":(54),"children":(function (){var G__40671 = app.ui.shared.components.toolbar.btn_divider;
var G__40672 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40671,G__40672) : helix.core.jsx.call(null,G__40671,G__40672));
})()});
return obj40670;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40667,G__40668) : helix.core.jsx.call(null,G__40667,G__40668));
})(),(function (){var G__40675 = app.ui.shared.components.toolbar.switch_panel;
var G__40676 = (function (){var obj40678 = ({"x":(707),"y":(12),"children":[(function (){var G__40684 = app.ui.shared.components.toolbar.switch$;
var G__40685 = (function (){var obj40687 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj40687;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40684,G__40685) : helix.core.jsx.call(null,G__40684,G__40685));
})(),(function (){var G__40693 = app.ui.shared.components.toolbar.switch$;
var G__40694 = (function (){var obj40697 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj40697;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40693,G__40694) : helix.core.jsx.call(null,G__40693,G__40694));
})(),(function (){var G__40698 = app.ui.shared.components.toolbar.switch$;
var G__40699 = (function (){var obj40702 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj40702;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40698,G__40699) : helix.core.jsx.call(null,G__40698,G__40699));
})(),(function (){var G__40708 = app.ui.shared.components.toolbar.switch$;
var G__40709 = (function (){var obj40711 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj40711;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40708,G__40709) : helix.core.jsx.call(null,G__40708,G__40709));
})(),(function (){var G__40719 = app.ui.shared.components.toolbar.switch$;
var G__40720 = (function (){var obj40722 = ({"x":(140),"value":switch_5,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(5)], null),cljs.core.not(switch_5)], null)], null));
}),"legend":(5),"inactive":inactive});
return obj40722;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40719,G__40720) : helix.core.jsx.call(null,G__40719,G__40720));
})(),(function (){var G__40727 = app.ui.shared.components.toolbar.switch$;
var G__40728 = (function (){var obj40732 = ({"x":(175),"value":switch_6,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(6)], null),cljs.core.not(switch_6)], null)], null));
}),"legend":(6),"inactive":inactive});
return obj40732;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40727,G__40728) : helix.core.jsx.call(null,G__40727,G__40728));
})(),(function (){var G__40738 = app.ui.shared.components.toolbar.switch$;
var G__40739 = (function (){var obj40744 = ({"x":(210),"value":switch_7,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(7)], null),cljs.core.not(switch_7)], null)], null));
}),"legend":(7),"inactive":inactive});
return obj40744;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40738,G__40739) : helix.core.jsx.call(null,G__40738,G__40739));
})(),(function (){var G__40753 = app.ui.shared.components.toolbar.switch$;
var G__40754 = (function (){var obj40756 = ({"x":(245),"value":switch_8,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(8)], null),cljs.core.not(switch_8)], null)], null));
}),"legend":(8),"inactive":inactive});
return obj40756;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40753,G__40754) : helix.core.jsx.call(null,G__40753,G__40754));
})(),(function (){var G__40763 = app.ui.shared.components.toolbar.switch$;
var G__40764 = (function (){var obj40768 = ({"x":(280),"value":switch_9,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(9)], null),cljs.core.not(switch_9)], null)], null));
}),"legend":(9),"inactive":inactive});
return obj40768;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40763,G__40764) : helix.core.jsx.call(null,G__40763,G__40764));
})(),(function (){var G__40771 = app.ui.shared.components.toolbar.switch$;
var G__40772 = (function (){var obj40776 = ({"x":(315),"value":switch_10,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(10)], null),cljs.core.not(switch_10)], null)], null));
}),"legend":(10),"inactive":inactive});
return obj40776;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40771,G__40772) : helix.core.jsx.call(null,G__40771,G__40772));
})()]});
return obj40678;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40675,G__40676) : helix.core.jsxs.call(null,G__40675,G__40676));
})(),(function (){var G__40781 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40782 = (function (){var obj40784 = ({"x":(1064),"y":(54),"children":(function (){var G__40786 = app.ui.shared.components.toolbar.btn_divider;
var G__40787 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40786,G__40787) : helix.core.jsx.call(null,G__40786,G__40787));
})()});
return obj40784;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40781,G__40782) : helix.core.jsx.call(null,G__40781,G__40782));
})(),(function (){var G__40793 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40794 = (function (){var obj40796 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen_QMARK_)], null)], null));
}),"children":(function (){var G__40804 = app.ui.shared.components.toolbar.btn_full_screen;
var G__40805 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40804,G__40805) : helix.core.jsx.call(null,G__40804,G__40805));
})()});
return obj40796;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40793,G__40794) : helix.core.jsx.call(null,G__40793,G__40794));
})(),(function (){var G__40808 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40809 = (function (){var obj40813 = ({"x":(1174),"y":(54),"children":(function (){var G__40816 = app.ui.shared.components.toolbar.btn_divider;
var G__40817 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40816,G__40817) : helix.core.jsx.call(null,G__40816,G__40817));
})()});
return obj40813;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40808,G__40809) : helix.core.jsx.call(null,G__40808,G__40809));
})(),(function (){var G__40820 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40821 = (function (){var obj40825 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CAN open protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__40827 = app.ui.shared.components.toolbar.btn_info;
var G__40828 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40827,G__40828) : helix.core.jsx.call(null,G__40827,G__40828));
})()});
return obj40825;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40820,G__40821) : helix.core.jsx.call(null,G__40820,G__40821));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40640,G__40641) : helix.core.jsxs.call(null,G__40640,G__40641));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40834 = G__40633;
(G__40834.displayName = "app.ui.kits.connect.URS-61.toolbar-panel/URS-61-toolbar-panel");

return G__40834;
} else {
return G__40633;
}
})();




//# sourceMappingURL=app.ui.kits.connect.URS_61.toolbar_panel.js.map
