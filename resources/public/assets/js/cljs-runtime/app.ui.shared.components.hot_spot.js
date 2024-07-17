goog.provide('app.ui.shared.components.hot_spot');

app.ui.shared.components.hot_spot.shadow = (function (){var G__30666 = (function app$ui$shared$components$hot_spot$shadow_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30667 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var highlight_hotspots = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null));
var G__30670 = "image";
var G__30671 = (function (){var obj30673 = ({"className":helix.impl.props.normalize_class((cljs.core.truth_(highlight_hotspots)?"hot-spot-shadow":"hide")),"href":"assets/img/hot-spot-shadow.png","width":(60),"height":(60),"x":(17),"y":(17)});
return obj30673;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30670,G__30671) : helix.core.jsx.call(null,G__30670,G__30671));
});
if(goog.DEBUG === true){
var G__30674 = G__30666;
(G__30674.displayName = "app.ui.shared.components.hot-spot/shadow");

return G__30674;
} else {
return G__30666;
}
})();




app.ui.shared.components.hot_spot.shadow_big = (function (){var G__30678 = (function app$ui$shared$components$hot_spot$shadow_big_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var highlight_hotspots = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"highlight-hotspots","highlight-hotspots",1123635494)], null));
var G__30686 = "image";
var G__30687 = (function (){var obj30689 = ({"className":helix.impl.props.normalize_class((cljs.core.truth_(highlight_hotspots)?"hot-spot-shadow":"hide")),"href":"assets/img/hot-spot-big-shadow.png","width":(121),"height":(121)});
return obj30689;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30686,G__30687) : helix.core.jsx.call(null,G__30686,G__30687));
});
if(goog.DEBUG === true){
var G__30694 = G__30678;
(G__30694.displayName = "app.ui.shared.components.hot-spot/shadow-big");

return G__30694;
} else {
return G__30678;
}
})();




app.ui.shared.components.hot_spot.hot_spot = (function (){var G__30725 = (function app$ui$shared$components$hot_spot$hot_spot_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30727,(0),null);
var map__30730__$1 = cljs.core.__destructure_map(map__30730);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30730__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30730__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30730__$1,new cljs.core.Keyword(null,"id","id",-1388402092));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,id);
var G__30738 = "svg";
var G__30739 = (function (){var obj30741 = ({"style":(function (){var obj30743 = ({"width":helix.impl.props.__GT_js("2.348%"),"left":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"%"].join('')),"top":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%"].join('')),"borderRadius":helix.impl.props.__GT_js("50%")});
return obj30743;
})(),"viewBox":"25 25 45 45","children":[(function (){var G__30747 = app.ui.shared.components.hot_spot.shadow;
var G__30748 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30747,G__30748) : helix.core.jsx.call(null,G__30747,G__30748));
})(),(function (){var G__30751 = "circle";
var G__30752 = (function (){var obj30754 = ({"fill":"url(#linGradHotspotSmall-1)","opacity":0.5,"cx":(47),"cy":(47),"r":(16)});
return obj30754;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30751,G__30752) : helix.core.jsx.call(null,G__30751,G__30752));
})(),(function (){var G__30756 = "circle";
var G__30757 = (function (){var obj30759 = ({"fill":"none","opacity":0.5,"stroke":"#192330","strokeWidth":(2),"strokeMiterlimit":(10),"cx":(47),"cy":(47),"r":(16)});
return obj30759;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30756,G__30757) : helix.core.jsx.call(null,G__30756,G__30757));
})(),((active)?(function (){var G__30761 = helix.core.Fragment;
var G__30762 = ({"children": [(function (){var G__30764 = "path";
var G__30765 = (function (){var obj30767 = ({"fill":"#1cb0ea","d":"m47.2 30.313a16.7 16.7 0 1 1-16.7 16.7 16.72 16.72 0 0 1 16.7-16.7m0-4.94a21.642 21.642 0 1 0 21.646 21.641 21.641 21.641 0 0 0-21.646-21.641z"});
return obj30767;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30764,G__30765) : helix.core.jsx.call(null,G__30764,G__30765));
})(),(function (){var G__30772 = "circle";
var G__30773 = (function (){var obj30775 = ({"fill":"#1cb0ea","cx":(47),"cy":(47),"r":9.6});
return obj30775;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30772,G__30773) : helix.core.jsx.call(null,G__30772,G__30773));
})(),(function (){var G__30776 = "path";
var G__30777 = (function (){var obj30779 = ({"fill":"none","d":"m50.923 51.228-7.1764-7.1764m7.1764-7.09e-4 -7.1764 7.1764","stroke":"#192330","strokeWidth":2.5,"strokeLinecap":"round","strokeLinejoin":"round"});
return obj30779;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30776,G__30777) : helix.core.jsx.call(null,G__30776,G__30777));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30761,G__30762) : helix.core.jsxs.call(null,G__30761,G__30762));
})():null),(function (){var G__30780 = "circle";
var G__30781 = (function (){var obj30783 = ({"className":"hotspot","cx":(47),"cy":(47),"r":21.6,"onClick":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),((active)?"none":id)], null));
})});
return obj30783;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30780,G__30781) : helix.core.jsx.call(null,G__30780,G__30781));
})()]});
return obj30741;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30738,G__30739) : helix.core.jsxs.call(null,G__30738,G__30739));
});
if(goog.DEBUG === true){
var G__30784 = G__30725;
(G__30784.displayName = "app.ui.shared.components.hot-spot/hot-spot");

return G__30784;
} else {
return G__30725;
}
})();




app.ui.shared.components.hot_spot.hot_spot_big = (function (){var G__30796 = (function app$ui$shared$components$hot_spot$hot_spot_big_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30801,(0),null);
var map__30804__$1 = cljs.core.__destructure_map(map__30804);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30804__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30804__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30804__$1,new cljs.core.Keyword(null,"id","id",-1388402092));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,id);
var G__30805 = "svg";
var G__30806 = (function (){var obj30810 = ({"style":(function (){var obj30812 = ({"width":helix.impl.props.__GT_js("6.3%"),"left":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"%"].join('')),"top":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%"].join('')),"borderRadius":helix.impl.props.__GT_js("50%")});
return obj30812;
})(),"viewBox":"0 0 121 121","children":[(function (){var G__30817 = app.ui.shared.components.hot_spot.shadow_big;
var G__30818 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30817,G__30818) : helix.core.jsx.call(null,G__30817,G__30818));
})(),(function (){var G__30819 = "circle";
var G__30820 = (function (){var obj30823 = ({"fill":"url(#linGradHotspotBig-1)","opacity":0.5,"cx":60.7,"cy":60.3,"r":29.3});
return obj30823;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30819,G__30820) : helix.core.jsx.call(null,G__30819,G__30820));
})(),(function (){var G__30824 = "circle";
var G__30825 = (function (){var obj30827 = ({"fill":"none","opacity":0.5,"stroke":"#192330","strokeWidth":(2),"strokeMiterlimit":(10),"cx":60.7,"cy":60.3,"r":29.3});
return obj30827;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30824,G__30825) : helix.core.jsx.call(null,G__30824,G__30825));
})(),((active)?(function (){var G__30829 = helix.core.Fragment;
var G__30830 = ({"children": [(function (){var G__30831 = "path";
var G__30832 = (function (){var obj30834 = ({"fill":"#1cb0ea","d":"m60.706 29.959a30.292 30.292 0 1 1-30.292 30.292 30.326 30.326 0 0 1 30.292-30.292m0-4.941a35.233 35.233 0 1 0 35.232 35.233 35.232 35.232 0 0 0-35.232-35.233z"});
return obj30834;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30831,G__30832) : helix.core.jsx.call(null,G__30831,G__30832));
})(),(function (){var G__30835 = "circle";
var G__30836 = (function (){var obj30838 = ({"fill":"#1cb0ea","cx":60.7,"cy":60.3,"r":(16)});
return obj30838;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30835,G__30836) : helix.core.jsx.call(null,G__30835,G__30836));
})(),(function (){var G__30839 = "path";
var G__30840 = (function (){var obj30842 = ({"fill":"none","d":"M 66.546207,66.09191 54.864093,54.409797 m 11.682817,3e-6 -11.682111,11.682111","stroke":"#192330","strokeWidth":3.5,"strokeLinecap":"round","strokeLinejoin":"round"});
return obj30842;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30839,G__30840) : helix.core.jsx.call(null,G__30839,G__30840));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30829,G__30830) : helix.core.jsxs.call(null,G__30829,G__30830));
})():null),(function (){var G__30844 = "circle";
var G__30845 = (function (){var obj30850 = ({"className":"hotspot","cx":60.7,"cy":60.3,"r":(35),"onClick":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-hotspot","change-current-hotspot",-238199858),((active)?"none":id)], null));
})});
return obj30850;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30844,G__30845) : helix.core.jsx.call(null,G__30844,G__30845));
})()]});
return obj30810;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30805,G__30806) : helix.core.jsxs.call(null,G__30805,G__30806));
});
if(goog.DEBUG === true){
var G__30857 = G__30796;
(G__30857.displayName = "app.ui.shared.components.hot-spot/hot-spot-big");

return G__30857;
} else {
return G__30796;
}
})();




//# sourceMappingURL=app.ui.shared.components.hot_spot.js.map
