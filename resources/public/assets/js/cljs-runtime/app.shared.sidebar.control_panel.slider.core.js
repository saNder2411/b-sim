goog.provide('app.shared.sidebar.control_panel.slider.core');
app.shared.sidebar.control_panel.slider.core.track_length = (90);
app.shared.sidebar.control_panel.slider.core.track_geometry = (function app$shared$sidebar$control_panel$slider$core$track_geometry(width){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),3.25,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),3.5,new cljs.core.Keyword(null,"rx","rx",1627208482),1.75,new cljs.core.Keyword(null,"ry","ry",-334598563),1.75], null);
});
app.shared.sidebar.control_panel.slider.core.knob_geometry = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(5),new cljs.core.Keyword(null,"cy","cy",755331060),(5),new cljs.core.Keyword(null,"r","r",-471384190),(5)], null);
app.shared.sidebar.control_panel.slider.core.value_box_geometry = (function app$shared$sidebar$control_panel$slider$core$value_box_geometry(x,width){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"rx","rx",1627208482),(5),new cljs.core.Keyword(null,"ry","ry",-334598563),(5)], null);
});

app.shared.sidebar.control_panel.slider.core.value_view = (function (){var G__49659 = (function app$shared$sidebar$control_panel$slider$core$value_view_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49665 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__49668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49665,(0),null);
var map__49668__$1 = cljs.core.__destructure_map(map__49668);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"value","value",305978217));
var fraction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"fraction","fraction",107940680));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var G__49684 = "g";
var G__49685 = (function (){var obj49691 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") scale(3.134)"].join(''),"opacity":(cljs.core.truth_(active)?(1):0.25),"children":[(function (){var G__49703 = "rect";
var G__49704 = helix.impl.props.merge_obj((function (){var obj49708 = ({"fill":fill});
return obj49708;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.core.value_box_geometry(x,width)));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49703,G__49704) : helix.core.jsx.call(null,G__49703,G__49704));
})(),(function (){var G__49724 = "text";
var G__49725 = (function (){var obj49730 = ({"x":(x + 31.8),"y":5.714,"fontSize":(7),"fill":"#eee","dominantBaseline":"middle","textAnchor":"end","children":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,["~,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fraction),"f"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('')});
return obj49730;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49724,G__49725) : helix.core.jsx.call(null,G__49724,G__49725));
})()]});
return obj49691;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49684,G__49685) : helix.core.jsxs.call(null,G__49684,G__49685));
});
if(goog.DEBUG === true){
var G__49759 = G__49659;
(G__49759.displayName = "app.shared.sidebar.control-panel.slider.core/value-view");

return G__49759;
} else {
return G__49659;
}
})();




app.shared.sidebar.control_panel.slider.core.slider = (function (){var G__49773 = (function app$shared$sidebar$control_panel$slider$core$slider_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__49778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49775,(0),null);
var map__49778__$1 = cljs.core.__destructure_map(map__49778);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49778__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49778__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49778__$1,new cljs.core.Keyword(null,"title","title",636505583));
var max_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49778__$1,new cljs.core.Keyword(null,"max-val","max-val",-1492247884));
var v__PERCENT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49778__$1,new cljs.core.Keyword(null,"v-%","v-%",-207714715));
var next_v__PERCENT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49778__$1,new cljs.core.Keyword(null,"next-v-%","next-v-%",1746130955));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49778__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var value_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49778__$1,new cljs.core.Keyword(null,"value-box","value-box",-219577407));

var vec__49782 = app.shared.sidebar.control_panel.slider.hook.use_slider(max_val,next_v__PERCENT_,app.shared.sidebar.control_panel.slider.core.track_length,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.core.knob_geometry),(function (p1__49765_SHARP_){
return console.log("effect-send",cljs.core.first(p1__49765_SHARP_),cljs.core.second(p1__49765_SHARP_));
}));
var knob_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49782,(0),null);
var track_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49782,(1),null);
var fill_track_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49782,(2),null);
var knob_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49782,(3),null);
var value__PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49782,(4),null);
var val_in_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49782,(5),null);
var on_knob_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49782,(6),null);
var on_track_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49782,(7),null);
var on_fill_track_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49782,(8),null);
var G__49788 = "g";
var G__49789 = (function (){var obj49792 = ({"style":(function (){var obj49794 = ({"transform":helix.impl.props.__GT_js(["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join(''))});
return obj49794;
})(),"children":[(cljs.core.truth_(title)?(function (){var G__49797 = "text";
var G__49798 = (function (){var obj49800 = ({"x":(0),"y":(-8),"className":"slider-title","fontSize":(20),"children":title});
return obj49800;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49797,G__49798) : helix.core.jsx.call(null,G__49797,G__49798));
})():null),(function (){var G__49802 = "g";
var G__49803 = (function (){var obj49805 = ({"transform":"scale(3.134)","opacity":(cljs.core.truth_(active)?(1):0.25),"children":[(function (){var G__49806 = "rect";
var G__49807 = helix.impl.props.merge_obj((function (){var obj49811 = ({"ref":track_ref,"fill":"#6f7684","onPointerDown":(cljs.core.truth_(active)?on_track_down:null)});
return obj49811;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.core.track_geometry((100))));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49806,G__49807) : helix.core.jsx.call(null,G__49806,G__49807));
})(),(function (){var G__49814 = "rect";
var G__49815 = helix.impl.props.merge_obj((function (){var obj49819 = ({"ref":fill_track_ref,"fill":"#1cb0ea","onPointerDown":(cljs.core.truth_(active)?on_fill_track_down:null)});
return obj49819;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.core.track_geometry(value__PERCENT_)));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49814,G__49815) : helix.core.jsx.call(null,G__49814,G__49815));
})(),(function (){var G__49827 = "circle";
var G__49828 = helix.impl.props.merge_obj((function (){var obj49834 = ({"ref":knob_ref,"className":"slider-knob","transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(knob_x),")"].join(''),"onPointerDown":(cljs.core.truth_(active)?on_knob_down:null)});
return obj49834;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.core.knob_geometry));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49827,G__49828) : helix.core.jsx.call(null,G__49827,G__49828));
})()]});
return obj49805;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49802,G__49803) : helix.core.jsxs.call(null,G__49802,G__49803));
})(),(function (){var G__49845 = app.shared.sidebar.control_panel.slider.core.value_view;
var G__49846 = helix.impl.props.merge_obj((function (){var obj49852 = ({"active":active,"value":val_in_unit});
return obj49852;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(value_box));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49845,G__49846) : helix.core.jsx.call(null,G__49845,G__49846));
})()]});
return obj49792;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49788,G__49789) : helix.core.jsxs.call(null,G__49788,G__49789));
});
if(goog.DEBUG === true){
var G__49865 = G__49773;
(G__49865.displayName = "app.shared.sidebar.control-panel.slider.core/slider");

return G__49865;
} else {
return G__49773;
}
})();




//# sourceMappingURL=app.shared.sidebar.control_panel.slider.core.js.map
