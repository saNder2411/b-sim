goog.provide('app.ui.kits.connect.URW_60.toolbar_panel');

app.ui.kits.connect.URW_60.toolbar_panel.URW_60_toolbar_panel = (function (){var G__38583 = (function app$ui$kits$connect$URW_60$toolbar_panel$URW_60_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URW-60","show-toolbar","URW-60/show-toolbar",-296045188)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__38590 = helix.core.Fragment;
var G__38591 = ({"children": [(function (){var G__38592 = app.ui.shared.components.toolbar.title;
var G__38593 = (function (){var obj38595 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Universal Converter"});
return obj38595;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38592,G__38593) : helix.core.jsx.call(null,G__38592,G__38593));
})(),(function (){var G__38596 = app.ui.shared.components.toolbar.title;
var G__38597 = (function (){var obj38600 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URW 60"});
return obj38600;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38596,G__38597) : helix.core.jsx.call(null,G__38596,G__38597));
})(),(function (){var G__38604 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38605 = (function (){var obj38609 = ({"x":(807),"y":(54),"inactive":inactive,"on-click":(function (){
return null;
}),"children":(function (){var G__38612 = app.ui.shared.components.toolbar.btn_replace;
var G__38613 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38612,G__38613) : helix.core.jsx.call(null,G__38612,G__38613));
})()});
return obj38609;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38604,G__38605) : helix.core.jsx.call(null,G__38604,G__38605));
})(),(function (){var G__38618 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38619 = (function (){var obj38626 = ({"x":(867),"y":(54),"children":(function (){var G__38627 = app.ui.shared.components.toolbar.btn_divider;
var G__38628 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38627,G__38628) : helix.core.jsx.call(null,G__38627,G__38628));
})()});
return obj38626;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38618,G__38619) : helix.core.jsx.call(null,G__38618,G__38619));
})(),(function (){var G__38639 = app.ui.shared.components.toolbar.switch_panel;
var G__38640 = (function (){var obj38644 = ({"x":(917),"y":(12),"children":[(function (){var G__38651 = app.ui.shared.components.toolbar.switch$;
var G__38652 = (function (){var obj38659 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URW-60","change","URW-60/change",-2014215763),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj38659;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38651,G__38652) : helix.core.jsx.call(null,G__38651,G__38652));
})(),(function (){var G__38676 = app.ui.shared.components.toolbar.switch$;
var G__38677 = (function (){var obj38683 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URW-60","change","URW-60/change",-2014215763),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj38683;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38676,G__38677) : helix.core.jsx.call(null,G__38676,G__38677));
})(),(function (){var G__38699 = app.ui.shared.components.toolbar.switch$;
var G__38700 = (function (){var obj38706 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URW-60","change","URW-60/change",-2014215763),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj38706;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38699,G__38700) : helix.core.jsx.call(null,G__38699,G__38700));
})(),(function (){var G__38724 = app.ui.shared.components.toolbar.switch$;
var G__38725 = (function (){var obj38733 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URW-60","change","URW-60/change",-2014215763),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj38733;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38724,G__38725) : helix.core.jsx.call(null,G__38724,G__38725));
})()]});
return obj38644;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38639,G__38640) : helix.core.jsxs.call(null,G__38639,G__38640));
})(),(function (){var G__38758 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38759 = (function (){var obj38767 = ({"x":(1064),"y":(54),"children":(function (){var G__38774 = app.ui.shared.components.toolbar.btn_divider;
var G__38775 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38774,G__38775) : helix.core.jsx.call(null,G__38774,G__38775));
})()});
return obj38767;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38758,G__38759) : helix.core.jsx.call(null,G__38758,G__38759));
})(),(function (){var G__38793 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38794 = (function (){var obj38807 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URW-60","change","URW-60/change",-2014215763),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__38814 = app.ui.shared.components.toolbar.btn_full_screen;
var G__38815 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38814,G__38815) : helix.core.jsx.call(null,G__38814,G__38815));
})()});
return obj38807;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38793,G__38794) : helix.core.jsx.call(null,G__38793,G__38794));
})(),(function (){var G__38828 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38829 = (function (){var obj38835 = ({"x":(1174),"y":(54),"children":(function (){var G__38844 = app.ui.shared.components.toolbar.btn_divider;
var G__38845 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38844,G__38845) : helix.core.jsx.call(null,G__38844,G__38845));
})()});
return obj38835;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38828,G__38829) : helix.core.jsx.call(null,G__38828,G__38829));
})(),(function (){var G__38902 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38903 = (function (){var obj38917 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Universal Converter",new cljs.core.Keyword(null,"text","text",-1790561697),"The universal converter converts the analogue 4-20 mA signals from a connected level electrode into CAN bus telegrams. The data are transferred to an ISO 11898 CAN bus via the CAN open protocol. Function tests and failure diagnosis are performed using the URB 60 visual display and operating unit."], null)], null));
}),"children":(function (){var G__38938 = app.ui.shared.components.toolbar.btn_info;
var G__38941 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38938,G__38941) : helix.core.jsx.call(null,G__38938,G__38941));
})()});
return obj38917;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38902,G__38903) : helix.core.jsx.call(null,G__38902,G__38903));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38590,G__38591) : helix.core.jsxs.call(null,G__38590,G__38591));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38976 = G__38583;
(G__38976.displayName = "app.ui.kits.connect.URW-60.toolbar-panel/URW-60-toolbar-panel");

return G__38976;
} else {
return G__38583;
}
})();




//# sourceMappingURL=app.ui.kits.connect.URW_60.toolbar_panel.js.map
