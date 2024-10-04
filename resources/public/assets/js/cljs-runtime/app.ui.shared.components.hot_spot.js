goog.provide('app.ui.shared.components.hot_spot');

app.ui.shared.components.hot_spot.shadow = (function (){var G__37106 = (function app$ui$shared$components$hot_spot$shadow_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var highlight_hotspots = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","highlight","hotspots/highlight",-1064861589)], null));
var G__37124 = "image";
var G__37125 = (function (){var obj37129 = ({"className":helix.impl.props.normalize_class((cljs.core.truth_(highlight_hotspots)?"hot-spot-shadow":"hide")),"href":"assets/img/hot-spot-shadow.png","width":(60),"height":(60),"x":(17),"y":(17)});
return obj37129;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37124,G__37125) : helix.core.jsx.call(null,G__37124,G__37125));
});
if(goog.DEBUG === true){
var G__37143 = G__37106;
(G__37143.displayName = "app.ui.shared.components.hot-spot/shadow");

return G__37143;
} else {
return G__37106;
}
})();




app.ui.shared.components.hot_spot.shadow_big = (function (){var G__37163 = (function app$ui$shared$components$hot_spot$shadow_big_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var highlight_hotspots = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","highlight","hotspots/highlight",-1064861589)], null));
var G__37183 = "image";
var G__37184 = (function (){var obj37188 = ({"className":helix.impl.props.normalize_class((cljs.core.truth_(highlight_hotspots)?"hot-spot-shadow":"hide")),"href":"assets/img/hot-spot-big-shadow.png","width":(121),"height":(121)});
return obj37188;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37183,G__37184) : helix.core.jsx.call(null,G__37183,G__37184));
});
if(goog.DEBUG === true){
var G__37194 = G__37163;
(G__37194.displayName = "app.ui.shared.components.hot-spot/shadow-big");

return G__37194;
} else {
return G__37163;
}
})();




app.ui.shared.components.hot_spot.hot_spot = (function (){var G__37253 = (function app$ui$shared$components$hot_spot$hot_spot_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37261 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__37264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37261,(0),null);
var map__37264__$1 = cljs.core.__destructure_map(map__37264);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37264__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37264__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37264__$1,new cljs.core.Keyword(null,"id","id",-1388402092));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,id);
var G__37280 = "svg";
var G__37281 = (function (){var obj37288 = ({"style":(function (){var obj37292 = ({"width":helix.impl.props.__GT_js("2.348%"),"left":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"%"].join('')),"top":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%"].join('')),"borderRadius":helix.impl.props.__GT_js("50%")});
return obj37292;
})(),"viewBox":"25 25 45 45","children":[(function (){var G__37306 = app.ui.shared.components.hot_spot.shadow;
var G__37307 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37306,G__37307) : helix.core.jsx.call(null,G__37306,G__37307));
})(),(function (){var G__37312 = "circle";
var G__37313 = (function (){var obj37316 = ({"fill":"url(#linGradHotspotSmall-1)","opacity":0.5,"cx":(47),"cy":(47),"r":(16)});
return obj37316;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37312,G__37313) : helix.core.jsx.call(null,G__37312,G__37313));
})(),(function (){var G__37325 = "circle";
var G__37326 = (function (){var obj37334 = ({"fill":"none","opacity":0.5,"stroke":"#192330","strokeWidth":(2),"strokeMiterlimit":(10),"cx":(47),"cy":(47),"r":(16)});
return obj37334;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37325,G__37326) : helix.core.jsx.call(null,G__37325,G__37326));
})(),((active)?(function (){var G__37338 = helix.core.Fragment;
var G__37339 = ({"children": [(function (){var G__37344 = "path";
var G__37345 = (function (){var obj37349 = ({"fill":"#1cb0ea","d":"m47.2 30.313a16.7 16.7 0 1 1-16.7 16.7 16.72 16.72 0 0 1 16.7-16.7m0-4.94a21.642 21.642 0 1 0 21.646 21.641 21.641 21.641 0 0 0-21.646-21.641z"});
return obj37349;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37344,G__37345) : helix.core.jsx.call(null,G__37344,G__37345));
})(),(function (){var G__37355 = "circle";
var G__37356 = (function (){var obj37360 = ({"fill":"#1cb0ea","cx":(47),"cy":(47),"r":9.6});
return obj37360;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37355,G__37356) : helix.core.jsx.call(null,G__37355,G__37356));
})(),(function (){var G__37368 = "path";
var G__37369 = (function (){var obj37371 = ({"fill":"none","d":"m50.923 51.228-7.1764-7.1764m7.1764-7.09e-4 -7.1764 7.1764","stroke":"#192330","strokeWidth":2.5,"strokeLinecap":"round","strokeLinejoin":"round"});
return obj37371;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37368,G__37369) : helix.core.jsx.call(null,G__37368,G__37369));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37338,G__37339) : helix.core.jsxs.call(null,G__37338,G__37339));
})():null),(function (){var G__37379 = "circle";
var G__37380 = (function (){var obj37384 = ({"className":"hotspot","cx":(47),"cy":(47),"r":21.6,"onClick":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-hotspot","change","current-hotspot/change",80910115),((active)?"none":id)], null));
})});
return obj37384;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37379,G__37380) : helix.core.jsx.call(null,G__37379,G__37380));
})()]});
return obj37288;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37280,G__37281) : helix.core.jsxs.call(null,G__37280,G__37281));
});
if(goog.DEBUG === true){
var G__37391 = G__37253;
(G__37391.displayName = "app.ui.shared.components.hot-spot/hot-spot");

return G__37391;
} else {
return G__37253;
}
})();




app.ui.shared.components.hot_spot.hot_spot_big = (function (){var G__37425 = (function app$ui$shared$components$hot_spot$hot_spot_big_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37430 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__37433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37430,(0),null);
var map__37433__$1 = cljs.core.__destructure_map(map__37433);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37433__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37433__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37433__$1,new cljs.core.Keyword(null,"id","id",-1388402092));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null));
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,id);
var G__37443 = "svg";
var G__37444 = (function (){var obj37448 = ({"style":(function (){var obj37450 = ({"width":helix.impl.props.__GT_js("6.3%"),"left":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"%"].join('')),"top":helix.impl.props.__GT_js([cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"%"].join('')),"borderRadius":helix.impl.props.__GT_js("50%")});
return obj37450;
})(),"viewBox":"0 0 121 121","children":[(function (){var G__37452 = app.ui.shared.components.hot_spot.shadow_big;
var G__37453 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37452,G__37453) : helix.core.jsx.call(null,G__37452,G__37453));
})(),(function (){var G__37458 = "circle";
var G__37459 = (function (){var obj37461 = ({"fill":"url(#linGradHotspotBig-1)","opacity":0.5,"cx":60.7,"cy":60.3,"r":29.3});
return obj37461;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37458,G__37459) : helix.core.jsx.call(null,G__37458,G__37459));
})(),(function (){var G__37464 = "circle";
var G__37465 = (function (){var obj37469 = ({"fill":"none","opacity":0.5,"stroke":"#192330","strokeWidth":(2),"strokeMiterlimit":(10),"cx":60.7,"cy":60.3,"r":29.3});
return obj37469;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37464,G__37465) : helix.core.jsx.call(null,G__37464,G__37465));
})(),((active)?(function (){var G__37471 = helix.core.Fragment;
var G__37472 = ({"children": [(function (){var G__37475 = "path";
var G__37476 = (function (){var obj37483 = ({"fill":"#1cb0ea","d":"m60.706 29.959a30.292 30.292 0 1 1-30.292 30.292 30.326 30.326 0 0 1 30.292-30.292m0-4.941a35.233 35.233 0 1 0 35.232 35.233 35.232 35.232 0 0 0-35.232-35.233z"});
return obj37483;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37475,G__37476) : helix.core.jsx.call(null,G__37475,G__37476));
})(),(function (){var G__37490 = "circle";
var G__37491 = (function (){var obj37496 = ({"fill":"#1cb0ea","cx":60.7,"cy":60.3,"r":(16)});
return obj37496;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37490,G__37491) : helix.core.jsx.call(null,G__37490,G__37491));
})(),(function (){var G__37502 = "path";
var G__37503 = (function (){var obj37507 = ({"fill":"none","d":"M 66.546207,66.09191 54.864093,54.409797 m 11.682817,3e-6 -11.682111,11.682111","stroke":"#192330","strokeWidth":3.5,"strokeLinecap":"round","strokeLinejoin":"round"});
return obj37507;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37502,G__37503) : helix.core.jsx.call(null,G__37502,G__37503));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37471,G__37472) : helix.core.jsxs.call(null,G__37471,G__37472));
})():null),(function (){var G__37512 = "circle";
var G__37513 = (function (){var obj37515 = ({"className":"hotspot","cx":60.7,"cy":60.3,"r":(35),"onClick":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-hotspot","change","current-hotspot/change",80910115),((active)?"none":id)], null));
})});
return obj37515;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37512,G__37513) : helix.core.jsx.call(null,G__37512,G__37513));
})()]});
return obj37448;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37443,G__37444) : helix.core.jsxs.call(null,G__37443,G__37444));
});
if(goog.DEBUG === true){
var G__37523 = G__37425;
(G__37523.displayName = "app.ui.shared.components.hot-spot/hot-spot-big");

return G__37523;
} else {
return G__37425;
}
})();




//# sourceMappingURL=app.ui.shared.components.hot_spot.js.map
