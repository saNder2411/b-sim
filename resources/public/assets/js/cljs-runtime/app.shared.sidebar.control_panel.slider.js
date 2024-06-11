goog.provide('app.shared.sidebar.control_panel.slider');
app.shared.sidebar.control_panel.slider.track_length = (90);
app.shared.sidebar.control_panel.slider.track_geometry = (function app$shared$sidebar$control_panel$slider$track_geometry(width){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),3.25,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),3.5,new cljs.core.Keyword(null,"rx","rx",1627208482),1.75,new cljs.core.Keyword(null,"ry","ry",-334598563),1.75], null);
});
app.shared.sidebar.control_panel.slider.knob_geometry = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(5),new cljs.core.Keyword(null,"cy","cy",755331060),(5),new cljs.core.Keyword(null,"r","r",-471384190),(5)], null);
app.shared.sidebar.control_panel.slider.value_box_geometry = (function app$shared$sidebar$control_panel$slider$value_box_geometry(x,width){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"rx","rx",1627208482),(5),new cljs.core.Keyword(null,"ry","ry",-334598563),(5)], null);
});

app.shared.sidebar.control_panel.slider.value_view = (function (){var G__49445 = (function app$shared$sidebar$control_panel$slider$value_view_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__49449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49446,(0),null);
var map__49449__$1 = cljs.core.__destructure_map(map__49449);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49449__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49449__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49449__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49449__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49449__$1,new cljs.core.Keyword(null,"value","value",305978217));
var fraction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49449__$1,new cljs.core.Keyword(null,"fraction","fraction",107940680));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49449__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49449__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var G__49450 = "g";
var G__49451 = (function (){var obj49453 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") scale(3.134)"].join(''),"opacity":(cljs.core.truth_(active)?(1):0.25),"children":[(function (){var G__49454 = "rect";
var G__49455 = helix.impl.props.merge_obj((function (){var obj49457 = ({"fill":fill});
return obj49457;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.value_box_geometry(x,width)));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49454,G__49455) : helix.core.jsx.call(null,G__49454,G__49455));
})(),(function (){var G__49458 = "text";
var G__49459 = (function (){var obj49461 = ({"x":(x + 31.8),"y":5.714,"fontSize":(7),"fill":"#eee","dominantBaseline":"middle","textAnchor":"end","children":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,["~,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fraction),"f"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('')});
return obj49461;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49458,G__49459) : helix.core.jsx.call(null,G__49458,G__49459));
})()]});
return obj49453;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49450,G__49451) : helix.core.jsxs.call(null,G__49450,G__49451));
});
if(goog.DEBUG === true){
var G__49462 = G__49445;
(G__49462.displayName = "app.shared.sidebar.control-panel.slider/value-view");

return G__49462;
} else {
return G__49445;
}
})();




app.shared.sidebar.control_panel.slider.slider = (function (){var G__49465 = (function app$shared$sidebar$control_panel$slider$slider_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__49469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49466,(0),null);
var map__49469__$1 = cljs.core.__destructure_map(map__49469);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49469__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49469__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49469__$1,new cljs.core.Keyword(null,"title","title",636505583));
var max_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49469__$1,new cljs.core.Keyword(null,"max-val","max-val",-1492247884));
var v__PERCENT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49469__$1,new cljs.core.Keyword(null,"v-%","v-%",-207714715));
var next_v__PERCENT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49469__$1,new cljs.core.Keyword(null,"next-v-%","next-v-%",1746130955));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49469__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var value_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49469__$1,new cljs.core.Keyword(null,"value-box","value-box",-219577407));

var vec__49470 = app.shared.sidebar.control_panel.slider_hook.use_slider(max_val,next_v__PERCENT_,app.shared.sidebar.control_panel.slider.track_length,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.knob_geometry),(function (p1__49463_SHARP_){
return console.log("effect-send",cljs.core.first(p1__49463_SHARP_),cljs.core.second(p1__49463_SHARP_));
}));
var knob_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49470,(0),null);
var track_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49470,(1),null);
var fill_track_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49470,(2),null);
var knob_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49470,(3),null);
var value__PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49470,(4),null);
var val_in_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49470,(5),null);
var on_knob_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49470,(6),null);
var on_track_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49470,(7),null);
var on_fill_track_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49470,(8),null);
var G__49473 = "g";
var G__49474 = (function (){var obj49476 = ({"style":(function (){var obj49478 = ({"transform":helix.impl.props.__GT_js(["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join(''))});
return obj49478;
})(),"children":[(cljs.core.truth_(title)?(function (){var G__49479 = "text";
var G__49480 = (function (){var obj49482 = ({"x":(0),"y":(-8),"className":"slider-title","fontSize":(20),"children":title});
return obj49482;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49479,G__49480) : helix.core.jsx.call(null,G__49479,G__49480));
})():null),(function (){var G__49483 = "g";
var G__49484 = (function (){var obj49486 = ({"transform":"scale(3.134)","opacity":(cljs.core.truth_(active)?(1):0.25),"children":[(function (){var G__49487 = "rect";
var G__49488 = helix.impl.props.merge_obj((function (){var obj49490 = ({"ref":track_ref,"fill":"#6f7684","onPointerDown":(cljs.core.truth_(active)?on_track_down:null)});
return obj49490;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.track_geometry((100))));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49487,G__49488) : helix.core.jsx.call(null,G__49487,G__49488));
})(),(function (){var G__49491 = "rect";
var G__49492 = helix.impl.props.merge_obj((function (){var obj49494 = ({"ref":fill_track_ref,"fill":"#1cb0ea","onPointerDown":(cljs.core.truth_(active)?on_fill_track_down:null)});
return obj49494;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.track_geometry(value__PERCENT_)));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49491,G__49492) : helix.core.jsx.call(null,G__49491,G__49492));
})(),(function (){var G__49495 = "circle";
var G__49496 = helix.impl.props.merge_obj((function (){var obj49498 = ({"ref":knob_ref,"className":"slider-knob","transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(knob_x),")"].join(''),"onPointerDown":(cljs.core.truth_(active)?on_knob_down:null)});
return obj49498;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.knob_geometry));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49495,G__49496) : helix.core.jsx.call(null,G__49495,G__49496));
})()]});
return obj49486;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49483,G__49484) : helix.core.jsxs.call(null,G__49483,G__49484));
})(),(function (){var G__49499 = app.shared.sidebar.control_panel.slider.value_view;
var G__49500 = helix.impl.props.merge_obj((function (){var obj49502 = ({"active":active,"value":val_in_unit});
return obj49502;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(value_box));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49499,G__49500) : helix.core.jsx.call(null,G__49499,G__49500));
})()]});
return obj49476;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49473,G__49474) : helix.core.jsxs.call(null,G__49473,G__49474));
});
if(goog.DEBUG === true){
var G__49503 = G__49465;
(G__49503.displayName = "app.shared.sidebar.control-panel.slider/slider");

return G__49503;
} else {
return G__49465;
}
})();




//# sourceMappingURL=app.shared.sidebar.control_panel.slider.js.map
