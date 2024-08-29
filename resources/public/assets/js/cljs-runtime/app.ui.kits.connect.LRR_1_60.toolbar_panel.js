goog.provide('app.ui.kits.connect.LRR_1_60.toolbar_panel');

app.ui.kits.connect.LRR_1_60.toolbar_panel.LRR_1_60_toolbar_panel = (function (){var G__40496 = (function app$ui$kits$connect$LRR_1_60$toolbar_panel$LRR_1_60_toolbar_panel_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__40498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRR-1-60-show-toolbar","LRR-1-60-show-toolbar",897532328)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"LRR 1-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__40505 = helix.core.Fragment;
var G__40506 = ({"children": [(function (){var G__40507 = app.ui.shared.components.toolbar.title;
var G__40508 = (function (){var obj40510 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Controller"});
return obj40510;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40507,G__40508) : helix.core.jsx.call(null,G__40507,G__40508));
})(),(function (){var G__40511 = app.ui.shared.components.toolbar.title;
var G__40512 = (function (){var obj40514 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRR 1-60"});
return obj40514;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40511,G__40512) : helix.core.jsx.call(null,G__40511,G__40512));
})(),(function (){var G__40516 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40517 = (function (){var obj40520 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__40521 = app.ui.shared.components.toolbar.btn_replace;
var G__40522 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40521,G__40522) : helix.core.jsx.call(null,G__40521,G__40522));
})()});
return obj40520;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40516,G__40517) : helix.core.jsx.call(null,G__40516,G__40517));
})(),(function (){var G__40523 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40524 = (function (){var obj40527 = ({"x":(757),"y":(54),"children":(function (){var G__40529 = app.ui.shared.components.toolbar.btn_divider;
var G__40530 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40529,G__40530) : helix.core.jsx.call(null,G__40529,G__40530));
})()});
return obj40527;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40523,G__40524) : helix.core.jsx.call(null,G__40523,G__40524));
})(),(function (){var G__40532 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40533 = (function (){var obj40536 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__40538 = app.ui.shared.components.toolbar.btn_error;
var G__40539 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40538,G__40539) : helix.core.jsx.call(null,G__40538,G__40539));
})()});
return obj40536;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40532,G__40533) : helix.core.jsx.call(null,G__40532,G__40533));
})(),(function (){var G__40542 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40543 = (function (){var obj40545 = ({"x":(867),"y":(54),"children":(function (){var G__40547 = app.ui.shared.components.toolbar.btn_divider;
var G__40548 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40547,G__40548) : helix.core.jsx.call(null,G__40547,G__40548));
})()});
return obj40545;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40542,G__40543) : helix.core.jsx.call(null,G__40542,G__40543));
})(),(function (){var G__40549 = app.ui.shared.components.toolbar.switch_panel;
var G__40550 = (function (){var obj40572 = ({"x":(917),"y":(12),"children":[(function (){var G__40573 = app.ui.shared.components.toolbar.switch$;
var G__40574 = (function (){var obj40576 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRR-1-60","change-LRR-1-60",-841957839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj40576;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40573,G__40574) : helix.core.jsx.call(null,G__40573,G__40574));
})(),(function (){var G__40577 = app.ui.shared.components.toolbar.switch$;
var G__40578 = (function (){var obj40580 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRR-1-60","change-LRR-1-60",-841957839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj40580;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40577,G__40578) : helix.core.jsx.call(null,G__40577,G__40578));
})(),(function (){var G__40582 = app.ui.shared.components.toolbar.switch$;
var G__40583 = (function (){var obj40586 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRR-1-60","change-LRR-1-60",-841957839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj40586;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40582,G__40583) : helix.core.jsx.call(null,G__40582,G__40583));
})(),(function (){var G__40589 = app.ui.shared.components.toolbar.switch$;
var G__40590 = (function (){var obj40593 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRR-1-60","change-LRR-1-60",-841957839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj40593;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40589,G__40590) : helix.core.jsx.call(null,G__40589,G__40590));
})()]});
return obj40572;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40549,G__40550) : helix.core.jsxs.call(null,G__40549,G__40550));
})(),(function (){var G__40595 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40596 = (function (){var obj40599 = ({"x":(1064),"y":(54),"children":(function (){var G__40600 = app.ui.shared.components.toolbar.btn_divider;
var G__40601 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40600,G__40601) : helix.core.jsx.call(null,G__40600,G__40601));
})()});
return obj40599;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40595,G__40596) : helix.core.jsx.call(null,G__40595,G__40596));
})(),(function (){var G__40604 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40605 = (function (){var obj40607 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRR-1-60","change-LRR-1-60",-841957839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__40609 = app.ui.shared.components.toolbar.btn_full_screen;
var G__40610 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40609,G__40610) : helix.core.jsx.call(null,G__40609,G__40610));
})()});
return obj40607;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40604,G__40605) : helix.core.jsx.call(null,G__40604,G__40605));
})(),(function (){var G__40613 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40614 = (function (){var obj40617 = ({"x":(1174),"y":(54),"children":(function (){var G__40618 = app.ui.shared.components.toolbar.btn_divider;
var G__40619 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40618,G__40619) : helix.core.jsx.call(null,G__40618,G__40619));
})()});
return obj40617;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40613,G__40614) : helix.core.jsx.call(null,G__40613,G__40614));
})(),(function (){var G__40627 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40628 = (function (){var obj40630 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The conductivity controller can be used in conjunction with LRG 16-60, LRG 16-61 and LRG 17- 60 conductivity electrodes as a conductivity controller in pressurised steam and hot-water plants and in condensate and feedwater tanks. The conductivity controller indicates when MAX or MIN conductivity has been reached, opens or closes a continuous blowdown valve and can actuate an intermittent blowdown valve."], null)], null));
}),"children":(function (){var G__40631 = app.ui.shared.components.toolbar.btn_info;
var G__40632 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40631,G__40632) : helix.core.jsx.call(null,G__40631,G__40632));
})()});
return obj40630;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40627,G__40628) : helix.core.jsx.call(null,G__40627,G__40628));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40505,G__40506) : helix.core.jsxs.call(null,G__40505,G__40506));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40634 = G__40496;
(G__40634.displayName = "app.ui.kits.connect.LRR-1-60.toolbar-panel/LRR-1-60-toolbar-panel");

return G__40634;
} else {
return G__40496;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRR_1_60.toolbar_panel.js.map
