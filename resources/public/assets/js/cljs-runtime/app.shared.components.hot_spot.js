goog.provide('app.shared.components.hot_spot');

app.shared.components.hot_spot.shadow = (function (){var G__64688 = (function app$shared$components$hot_spot$shadow_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__64689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var highlight_hotspots = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null));
var G__64692 = "image";
var G__64693 = (function (){var obj64695 = ({"className":helix.impl.props.normalize_class((cljs.core.truth_(highlight_hotspots)?"hot-spot-shadow":"hide")),"href":"assets/img/hot-spot-shadow.png","width":(60),"height":(60),"x":(17),"y":(17)});
return obj64695;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64692,G__64693) : helix.core.jsx.call(null,G__64692,G__64693));
});
if(goog.DEBUG === true){
var G__64696 = G__64688;
(G__64696.displayName = "app.shared.components.hot-spot/shadow");

return G__64696;
} else {
return G__64688;
}
})();




app.shared.components.hot_spot.shadow_big = (function (){var G__64698 = (function app$shared$components$hot_spot$shadow_big_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__64699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var highlight_hotspots = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null));
var G__64702 = "image";
var G__64703 = (function (){var obj64705 = ({"className":helix.impl.props.normalize_class((cljs.core.truth_(highlight_hotspots)?"hot-spot-shadow":"hide")),"href":"assets/img/hot-spot-big-shadow.png","width":(121),"height":(121)});
return obj64705;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64702,G__64703) : helix.core.jsx.call(null,G__64702,G__64703));
});
if(goog.DEBUG === true){
var G__64706 = G__64698;
(G__64706.displayName = "app.shared.components.hot-spot/shadow-big");

return G__64706;
} else {
return G__64698;
}
})();




app.shared.components.hot_spot.hot_spot = (function (){var G__64708 = (function app$shared$components$hot_spot$hot_spot_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__64709 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__64712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64709,(0),null);
var map__64712__$1 = cljs.core.__destructure_map(map__64712);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64712__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64712__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64712__$1,new cljs.core.Keyword(null,"id","id",-1388402092));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,id);
var G__64713 = "svg";
var G__64714 = (function (){var obj64716 = ({"style":(function (){var obj64718 = ({"width":helix.impl.props.__GT_js("2.348%"),"left":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"%"].join('')),"top":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%"].join('')),"borderRadius":helix.impl.props.__GT_js("50%")});
return obj64718;
})(),"viewBox":"25 25 45 45","children":[(function (){var G__64719 = app.shared.components.hot_spot.shadow;
var G__64720 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64719,G__64720) : helix.core.jsx.call(null,G__64719,G__64720));
})(),(function (){var G__64721 = "circle";
var G__64722 = (function (){var obj64724 = ({"fill":"url(#linGradHotspotSmall-1)","opacity":0.5,"cx":(47),"cy":(47),"r":(16)});
return obj64724;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64721,G__64722) : helix.core.jsx.call(null,G__64721,G__64722));
})(),(function (){var G__64725 = "circle";
var G__64726 = (function (){var obj64728 = ({"fill":"none","opacity":0.5,"stroke":"#192330","strokeWidth":(2),"strokeMiterlimit":(10),"cx":(47),"cy":(47),"r":(16)});
return obj64728;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64725,G__64726) : helix.core.jsx.call(null,G__64725,G__64726));
})(),((active)?(function (){var G__64729 = helix.core.Fragment;
var G__64730 = ({"children": [(function (){var G__64731 = "path";
var G__64732 = (function (){var obj64734 = ({"fill":"#1cb0ea","d":"m47.2 30.313a16.7 16.7 0 1 1-16.7 16.7 16.72 16.72 0 0 1 16.7-16.7m0-4.94a21.642 21.642 0 1 0 21.646 21.641 21.641 21.641 0 0 0-21.646-21.641z"});
return obj64734;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64731,G__64732) : helix.core.jsx.call(null,G__64731,G__64732));
})(),(function (){var G__64735 = "circle";
var G__64736 = (function (){var obj64738 = ({"fill":"#1cb0ea","cx":(47),"cy":(47),"r":9.6});
return obj64738;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64735,G__64736) : helix.core.jsx.call(null,G__64735,G__64736));
})(),(function (){var G__64739 = "path";
var G__64740 = (function (){var obj64742 = ({"fill":"none","d":"m50.923 51.228-7.1764-7.1764m7.1764-7.09e-4 -7.1764 7.1764","stroke":"#192330","strokeWidth":2.5,"strokeLinecap":"round","strokeLinejoin":"round"});
return obj64742;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64739,G__64740) : helix.core.jsx.call(null,G__64739,G__64740));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__64729,G__64730) : helix.core.jsxs.call(null,G__64729,G__64730));
})():null),(function (){var G__64743 = "circle";
var G__64744 = (function (){var obj64746 = ({"className":"hotspot","cx":(47),"cy":(47),"r":21.6,"onClick":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),((active)?"none":id)], null));
})});
return obj64746;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64743,G__64744) : helix.core.jsx.call(null,G__64743,G__64744));
})()]});
return obj64716;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__64713,G__64714) : helix.core.jsxs.call(null,G__64713,G__64714));
});
if(goog.DEBUG === true){
var G__64747 = G__64708;
(G__64747.displayName = "app.shared.components.hot-spot/hot-spot");

return G__64747;
} else {
return G__64708;
}
})();




app.shared.components.hot_spot.hot_spot_big = (function (){var G__64749 = (function app$shared$components$hot_spot$hot_spot_big_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__64750 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__64753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64750,(0),null);
var map__64753__$1 = cljs.core.__destructure_map(map__64753);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64753__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64753__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64753__$1,new cljs.core.Keyword(null,"id","id",-1388402092));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,id);
var G__64754 = "svg";
var G__64755 = (function (){var obj64757 = ({"style":(function (){var obj64759 = ({"width":helix.impl.props.__GT_js("6.3%"),"left":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"%"].join('')),"top":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%"].join('')),"borderRadius":helix.impl.props.__GT_js("50%")});
return obj64759;
})(),"viewBox":"0 0 121 121","children":[(function (){var G__64760 = app.shared.components.hot_spot.shadow_big;
var G__64761 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64760,G__64761) : helix.core.jsx.call(null,G__64760,G__64761));
})(),(function (){var G__64762 = "circle";
var G__64763 = (function (){var obj64765 = ({"fill":"url(#linGradHotspotBig-1)","opacity":0.5,"cx":60.7,"cy":60.3,"r":29.3});
return obj64765;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64762,G__64763) : helix.core.jsx.call(null,G__64762,G__64763));
})(),(function (){var G__64766 = "circle";
var G__64767 = (function (){var obj64769 = ({"fill":"none","opacity":0.5,"stroke":"#192330","strokeWidth":(2),"strokeMiterlimit":(10),"cx":60.7,"cy":60.3,"r":29.3});
return obj64769;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64766,G__64767) : helix.core.jsx.call(null,G__64766,G__64767));
})(),((active)?(function (){var G__64770 = helix.core.Fragment;
var G__64771 = ({"children": [(function (){var G__64772 = "path";
var G__64773 = (function (){var obj64775 = ({"fill":"#1cb0ea","d":"m60.706 29.959a30.292 30.292 0 1 1-30.292 30.292 30.326 30.326 0 0 1 30.292-30.292m0-4.941a35.233 35.233 0 1 0 35.232 35.233 35.232 35.232 0 0 0-35.232-35.233z"});
return obj64775;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64772,G__64773) : helix.core.jsx.call(null,G__64772,G__64773));
})(),(function (){var G__64776 = "circle";
var G__64777 = (function (){var obj64779 = ({"fill":"#1cb0ea","cx":60.7,"cy":60.3,"r":(16)});
return obj64779;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64776,G__64777) : helix.core.jsx.call(null,G__64776,G__64777));
})(),(function (){var G__64780 = "path";
var G__64781 = (function (){var obj64783 = ({"fill":"none","d":"M 66.546207,66.09191 54.864093,54.409797 m 11.682817,3e-6 -11.682111,11.682111","stroke":"#192330","strokeWidth":3.5,"strokeLinecap":"round","strokeLinejoin":"round"});
return obj64783;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64780,G__64781) : helix.core.jsx.call(null,G__64780,G__64781));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__64770,G__64771) : helix.core.jsxs.call(null,G__64770,G__64771));
})():null),(function (){var G__64784 = "circle";
var G__64785 = (function (){var obj64787 = ({"className":"hotspot","cx":60.7,"cy":60.3,"r":(35),"onClick":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),((active)?"none":id)], null));
})});
return obj64787;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64784,G__64785) : helix.core.jsx.call(null,G__64784,G__64785));
})()]});
return obj64757;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__64754,G__64755) : helix.core.jsxs.call(null,G__64754,G__64755));
});
if(goog.DEBUG === true){
var G__64788 = G__64749;
(G__64788.displayName = "app.shared.components.hot-spot/hot-spot-big");

return G__64788;
} else {
return G__64749;
}
})();




//# sourceMappingURL=app.shared.components.hot_spot.js.map
