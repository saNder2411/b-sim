goog.provide('app.ui.shared.sidebar.control_panel.slider.core');
app.ui.shared.sidebar.control_panel.slider.core.track_length = (90);
app.ui.shared.sidebar.control_panel.slider.core.track_geometry = (function app$ui$shared$sidebar$control_panel$slider$core$track_geometry(width){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),3.25,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),3.5,new cljs.core.Keyword(null,"rx","rx",1627208482),1.75,new cljs.core.Keyword(null,"ry","ry",-334598563),1.75], null);
});
app.ui.shared.sidebar.control_panel.slider.core.knob_geometry = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(5),new cljs.core.Keyword(null,"cy","cy",755331060),(5),new cljs.core.Keyword(null,"r","r",-471384190),(5)], null);
app.ui.shared.sidebar.control_panel.slider.core.value_box_geometry = (function app$ui$shared$sidebar$control_panel$slider$core$value_box_geometry(x,width){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"rx","rx",1627208482),(5),new cljs.core.Keyword(null,"ry","ry",-334598563),(5)], null);
});

app.ui.shared.sidebar.control_panel.slider.core.value_view = (function (){var G__28903 = (function app$ui$shared$sidebar$control_panel$slider$core$value_view_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__28914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28911,(0),null);
var map__28914__$1 = cljs.core.__destructure_map(map__28914);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28914__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28914__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28914__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28914__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28914__$1,new cljs.core.Keyword(null,"value","value",305978217));
var fraction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28914__$1,new cljs.core.Keyword(null,"fraction","fraction",107940680));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28914__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28914__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var parsed_value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fraction,(0)))?(value | (0)):cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,["~,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fraction),"f"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
var G__28951 = "g";
var G__28952 = (function (){var obj28956 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") scale(3.134)"].join(''),"opacity":(cljs.core.truth_(active)?(1):0.25),"children":[(function (){var G__28966 = "rect";
var G__28967 = helix.impl.props.merge_obj((function (){var obj28985 = ({"fill":fill});
return obj28985;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.ui.shared.sidebar.control_panel.slider.core.value_box_geometry(x,width)));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28966,G__28967) : helix.core.jsx.call(null,G__28966,G__28967));
})(),(function (){var G__29004 = "text";
var G__29005 = (function (){var obj29009 = ({"x":(x + 31.8),"y":5.714,"fontSize":(7),"fill":"#eee","dominantBaseline":"middle","textAnchor":"end","children":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parsed_value)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('')});
return obj29009;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29004,G__29005) : helix.core.jsx.call(null,G__29004,G__29005));
})()]});
return obj28956;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28951,G__28952) : helix.core.jsxs.call(null,G__28951,G__28952));
});
if(goog.DEBUG === true){
var G__29031 = G__28903;
(G__29031.displayName = "app.ui.shared.sidebar.control-panel.slider.core/value-view");

return G__29031;
} else {
return G__28903;
}
})();




app.ui.shared.sidebar.control_panel.slider.core.slider = (function (){var G__29108 = (function app$ui$shared$sidebar$control_panel$slider$core$slider_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29111,(0),null);
var map__29114__$1 = cljs.core.__destructure_map(map__29114);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"value-box","value-box",-219577407));
var v__PERCENT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"v-%","v-%",-207714715));
var next_v__PERCENT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"next-v-%","next-v-%",1746130955));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"title","title",636505583));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var max_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29114__$1,new cljs.core.Keyword(null,"max-val","max-val",-1492247884));

var vec__29119 = app.ui.shared.sidebar.control_panel.slider.hook.use_slider(max_val,next_v__PERCENT_,app.ui.shared.sidebar.control_panel.slider.core.track_length,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(app.ui.shared.sidebar.control_panel.slider.core.knob_geometry),(function (p1__29089_SHARP_){
return console.log("effect-send",cljs.core.first(p1__29089_SHARP_),cljs.core.second(p1__29089_SHARP_));
}));
var knob_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(0),null);
var track_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(1),null);
var fill_track_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(2),null);
var knob_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(3),null);
var value__PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(4),null);
var val_in_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(5),null);
var on_knob_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(6),null);
var on_track_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(7),null);
var on_fill_track_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(8),null);
var G__29148 = "g";
var G__29149 = (function (){var obj29157 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"," scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),")"].join(''),"children":[(cljs.core.truth_(title)?(function (){var G__29200 = "text";
var G__29201 = (function (){var obj29203 = ({"x":(0),"y":(-8),"className":"slider-title","fontSize":(20),"children":title});
return obj29203;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29200,G__29201) : helix.core.jsx.call(null,G__29200,G__29201));
})():null),(function (){var G__29211 = app.ui.shared.sidebar.control_panel.slider.core.value_view;
var G__29212 = helix.impl.props.merge_obj((function (){var obj29216 = ({"active":active,"value":val_in_unit});
return obj29216;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(value_box));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29211,G__29212) : helix.core.jsx.call(null,G__29211,G__29212));
})(),(function (){var G__29218 = "g";
var G__29219 = (function (){var obj29221 = ({"transform":"scale(3.134)","opacity":(cljs.core.truth_(active)?(1):0.25),"children":[(function (){var G__29223 = "rect";
var G__29224 = helix.impl.props.merge_obj((function (){var obj29226 = ({"ref":track_ref,"fill":"#6f7684","onPointerDown":(cljs.core.truth_(active)?on_track_down:null)});
return obj29226;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.ui.shared.sidebar.control_panel.slider.core.track_geometry((100))));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29223,G__29224) : helix.core.jsx.call(null,G__29223,G__29224));
})(),(function (){var G__29228 = "rect";
var G__29229 = helix.impl.props.merge_obj((function (){var obj29232 = ({"ref":fill_track_ref,"fill":"#1cb0ea","onPointerDown":(cljs.core.truth_(active)?on_fill_track_down:null)});
return obj29232;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.ui.shared.sidebar.control_panel.slider.core.track_geometry(value__PERCENT_)));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29228,G__29229) : helix.core.jsx.call(null,G__29228,G__29229));
})(),(function (){var G__29234 = "circle";
var G__29235 = helix.impl.props.merge_obj((function (){var obj29237 = ({"ref":knob_ref,"className":"slider-knob","transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(knob_x),")"].join(''),"onPointerDown":(cljs.core.truth_(active)?on_knob_down:null)});
return obj29237;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.ui.shared.sidebar.control_panel.slider.core.knob_geometry));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29234,G__29235) : helix.core.jsx.call(null,G__29234,G__29235));
})()]});
return obj29221;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29218,G__29219) : helix.core.jsxs.call(null,G__29218,G__29219));
})()]});
return obj29157;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29148,G__29149) : helix.core.jsxs.call(null,G__29148,G__29149));
});
if(goog.DEBUG === true){
var G__29243 = G__29108;
(G__29243.displayName = "app.ui.shared.sidebar.control-panel.slider.core/slider");

return G__29243;
} else {
return G__29108;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.slider.core.js.map
