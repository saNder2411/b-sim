goog.provide('app.shared.sidebar.control_panel.slider.core');
app.shared.sidebar.control_panel.slider.core.track_length = (90);
app.shared.sidebar.control_panel.slider.core.track_geometry = (function app$shared$sidebar$control_panel$slider$core$track_geometry(width){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),3.25,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),3.5,new cljs.core.Keyword(null,"rx","rx",1627208482),1.75,new cljs.core.Keyword(null,"ry","ry",-334598563),1.75], null);
});
app.shared.sidebar.control_panel.slider.core.knob_geometry = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(5),new cljs.core.Keyword(null,"cy","cy",755331060),(5),new cljs.core.Keyword(null,"r","r",-471384190),(5)], null);
app.shared.sidebar.control_panel.slider.core.value_box_geometry = (function app$shared$sidebar$control_panel$slider$core$value_box_geometry(x,width){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"rx","rx",1627208482),(5),new cljs.core.Keyword(null,"ry","ry",-334598563),(5)], null);
});

app.shared.sidebar.control_panel.slider.core.value_view = (function (){var G__33684 = (function app$shared$sidebar$control_panel$slider$core$value_view_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__33688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33685,(0),null);
var map__33688__$1 = cljs.core.__destructure_map(map__33688);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33688__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33688__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33688__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33688__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33688__$1,new cljs.core.Keyword(null,"value","value",305978217));
var fraction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33688__$1,new cljs.core.Keyword(null,"fraction","fraction",107940680));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33688__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33688__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var parsed_value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fraction,(0)))?(value | (0)):cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,["~,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fraction),"f"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
var G__33689 = "g";
var G__33690 = (function (){var obj33692 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") scale(3.134)"].join(''),"opacity":(cljs.core.truth_(active)?(1):0.25),"children":[(function (){var G__33693 = "rect";
var G__33694 = helix.impl.props.merge_obj((function (){var obj33696 = ({"fill":fill});
return obj33696;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.core.value_box_geometry(x,width)));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33693,G__33694) : helix.core.jsx.call(null,G__33693,G__33694));
})(),(function (){var G__33697 = "text";
var G__33698 = (function (){var obj33700 = ({"x":(x + 31.8),"y":5.714,"fontSize":(7),"fill":"#eee","dominantBaseline":"middle","textAnchor":"end","children":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parsed_value)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('')});
return obj33700;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33697,G__33698) : helix.core.jsx.call(null,G__33697,G__33698));
})()]});
return obj33692;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33689,G__33690) : helix.core.jsxs.call(null,G__33689,G__33690));
});
if(goog.DEBUG === true){
var G__33701 = G__33684;
(G__33701.displayName = "app.shared.sidebar.control-panel.slider.core/value-view");

return G__33701;
} else {
return G__33684;
}
})();




app.shared.sidebar.control_panel.slider.core.slider = (function (){var G__33704 = (function app$shared$sidebar$control_panel$slider$core$slider_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33705 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__33708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33705,(0),null);
var map__33708__$1 = cljs.core.__destructure_map(map__33708);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,new cljs.core.Keyword(null,"value-box","value-box",-219577407));
var v__PERCENT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,new cljs.core.Keyword(null,"v-%","v-%",-207714715));
var next_v__PERCENT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,new cljs.core.Keyword(null,"next-v-%","next-v-%",1746130955));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,new cljs.core.Keyword(null,"title","title",636505583));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var max_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,new cljs.core.Keyword(null,"max-val","max-val",-1492247884));

var vec__33709 = app.shared.sidebar.control_panel.slider.hook.use_slider(max_val,next_v__PERCENT_,app.shared.sidebar.control_panel.slider.core.track_length,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.core.knob_geometry),(function (p1__33702_SHARP_){
return console.log("effect-send",cljs.core.first(p1__33702_SHARP_),cljs.core.second(p1__33702_SHARP_));
}));
var knob_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33709,(0),null);
var track_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33709,(1),null);
var fill_track_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33709,(2),null);
var knob_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33709,(3),null);
var value__PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33709,(4),null);
var val_in_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33709,(5),null);
var on_knob_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33709,(6),null);
var on_track_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33709,(7),null);
var on_fill_track_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33709,(8),null);
var G__33712 = "g";
var G__33713 = (function (){var obj33715 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"," scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),")"].join(''),"children":[(cljs.core.truth_(title)?(function (){var G__33716 = "text";
var G__33717 = (function (){var obj33719 = ({"x":(0),"y":(-8),"className":"slider-title","fontSize":(20),"children":title});
return obj33719;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33716,G__33717) : helix.core.jsx.call(null,G__33716,G__33717));
})():null),(function (){var G__33720 = app.shared.sidebar.control_panel.slider.core.value_view;
var G__33721 = helix.impl.props.merge_obj((function (){var obj33723 = ({"active":active,"value":val_in_unit});
return obj33723;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(value_box));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33720,G__33721) : helix.core.jsx.call(null,G__33720,G__33721));
})(),(function (){var G__33724 = "g";
var G__33725 = (function (){var obj33727 = ({"transform":"scale(3.134)","opacity":(cljs.core.truth_(active)?(1):0.25),"children":[(function (){var G__33728 = "rect";
var G__33729 = helix.impl.props.merge_obj((function (){var obj33731 = ({"ref":track_ref,"fill":"#6f7684","onPointerDown":(cljs.core.truth_(active)?on_track_down:null)});
return obj33731;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.core.track_geometry((100))));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33728,G__33729) : helix.core.jsx.call(null,G__33728,G__33729));
})(),(function (){var G__33732 = "rect";
var G__33733 = helix.impl.props.merge_obj((function (){var obj33735 = ({"ref":fill_track_ref,"fill":"#1cb0ea","onPointerDown":(cljs.core.truth_(active)?on_fill_track_down:null)});
return obj33735;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.core.track_geometry(value__PERCENT_)));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33732,G__33733) : helix.core.jsx.call(null,G__33732,G__33733));
})(),(function (){var G__33736 = "circle";
var G__33737 = helix.impl.props.merge_obj((function (){var obj33739 = ({"ref":knob_ref,"className":"slider-knob","transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(knob_x),")"].join(''),"onPointerDown":(cljs.core.truth_(active)?on_knob_down:null)});
return obj33739;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.sidebar.control_panel.slider.core.knob_geometry));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33736,G__33737) : helix.core.jsx.call(null,G__33736,G__33737));
})()]});
return obj33727;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33724,G__33725) : helix.core.jsxs.call(null,G__33724,G__33725));
})()]});
return obj33715;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33712,G__33713) : helix.core.jsxs.call(null,G__33712,G__33713));
});
if(goog.DEBUG === true){
var G__33740 = G__33704;
(G__33740.displayName = "app.shared.sidebar.control-panel.slider.core/slider");

return G__33740;
} else {
return G__33704;
}
})();




//# sourceMappingURL=app.shared.sidebar.control_panel.slider.core.js.map
