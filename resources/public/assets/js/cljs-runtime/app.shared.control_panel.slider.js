goog.provide('app.shared.control_panel.slider');
app.shared.control_panel.slider.track_length = (90);
app.shared.control_panel.slider.track_geometry = (function app$shared$control_panel$slider$track_geometry(width){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),3.25,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),3.5,new cljs.core.Keyword(null,"rx","rx",1627208482),1.75,new cljs.core.Keyword(null,"ry","ry",-334598563),1.75], null);
});
app.shared.control_panel.slider.knob_geometry = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(5),new cljs.core.Keyword(null,"cy","cy",755331060),(5),new cljs.core.Keyword(null,"r","r",-471384190),(5)], null);
app.shared.control_panel.slider.value_box_geometry = (function app$shared$control_panel$slider$value_box_geometry(x,width){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"rx","rx",1627208482),(5),new cljs.core.Keyword(null,"ry","ry",-334598563),(5)], null);
});

app.shared.control_panel.slider.value_view = (function (){var G__43457 = (function app$shared$control_panel$slider$value_view_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__43458 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);
var map__43461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43458,(0),null);
var map__43461__$1 = cljs.core.__destructure_map(map__43461);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43461__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43461__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43461__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43461__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43461__$1,new cljs.core.Keyword(null,"value","value",305978217));
var fraction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43461__$1,new cljs.core.Keyword(null,"fraction","fraction",107940680));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43461__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43461__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var G__43462 = "g";
var G__43463 = (function (){var obj43465 = ({"transform":["translate(380,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") scale(3.134)"].join(''),"opacity":(cljs.core.truth_(active)?(1):0.25),"children":[(function (){var G__43466 = "rect";
var G__43467 = helix.impl.props.merge_obj((function (){var obj43469 = ({"fill":fill});
return obj43469;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.control_panel.slider.value_box_geometry(x,width)));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43466,G__43467) : helix.core.jsx.call(null,G__43466,G__43467));
})(),(function (){var G__43470 = "text";
var G__43471 = (function (){var obj43473 = ({"x":(x + 2.3),"y":5.714,"fontSize":(7),"fill":"#eee","dominantBaseline":"middle","children":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,["~,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fraction),"f"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('')});
return obj43473;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43470,G__43471) : helix.core.jsx.call(null,G__43470,G__43471));
})()]});
return obj43465;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43462,G__43463) : helix.core.jsxs.call(null,G__43462,G__43463));
});
if(goog.DEBUG === true){
var G__43474 = G__43457;
(G__43474.displayName = "app.shared.control-panel.slider/value-view");

return G__43474;
} else {
return G__43457;
}
})();




app.shared.control_panel.slider.slider = (function (){var G__43477 = (function app$shared$control_panel$slider$slider_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__43478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);
var map__43481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43478,(0),null);
var map__43481__$1 = cljs.core.__destructure_map(map__43481);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43481__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43481__$1,new cljs.core.Keyword(null,"title","title",636505583));
var max_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43481__$1,new cljs.core.Keyword(null,"max-val","max-val",-1492247884));
var v__PERCENT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43481__$1,new cljs.core.Keyword(null,"v-%","v-%",-207714715));
var next_v__PERCENT_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43481__$1,new cljs.core.Keyword(null,"next-v-%","next-v-%",1746130955));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43481__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var value_box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43481__$1,new cljs.core.Keyword(null,"value-box","value-box",-219577407));

var vec__43482 = app.shared.control_panel.slider_hook.use_slider(max_val,next_v__PERCENT_,app.shared.control_panel.slider.track_length,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(app.shared.control_panel.slider.knob_geometry),(function (p1__43475_SHARP_){
return console.log("effect-send",cljs.core.first(p1__43475_SHARP_),cljs.core.second(p1__43475_SHARP_));
}));
var knob_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43482,(0),null);
var track_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43482,(1),null);
var fill_track_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43482,(2),null);
var knob_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43482,(3),null);
var value__PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43482,(4),null);
var val_in_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43482,(5),null);
var on_knob_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43482,(6),null);
var on_track_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43482,(7),null);
var on_fill_track_down = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43482,(8),null);
var G__43485 = "g";
var G__43486 = (function (){var obj43488 = ({"children":[(cljs.core.truth_(title)?(function (){var G__43489 = "text";
var G__43490 = (function (){var obj43492 = ({"className":"slider-title","transform":["translate(67,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y - (10))),") scale(3.134)"].join(''),"fontSize":(6),"children":title});
return obj43492;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43489,G__43490) : helix.core.jsx.call(null,G__43489,G__43490));
})():null),(function (){var G__43493 = "g";
var G__43494 = (function (){var obj43496 = ({"transform":["translate(67,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),") scale(3.134)"].join(''),"opacity":(cljs.core.truth_(active)?(1):0.25),"children":[(function (){var G__43497 = "rect";
var G__43498 = helix.impl.props.merge_obj((function (){var obj43500 = ({"ref":track_ref,"fill":"#6f7684","onPointerDown":(cljs.core.truth_(active)?on_track_down:null)});
return obj43500;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.control_panel.slider.track_geometry((100))));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43497,G__43498) : helix.core.jsx.call(null,G__43497,G__43498));
})(),(function (){var G__43501 = "rect";
var G__43502 = helix.impl.props.merge_obj((function (){var obj43504 = ({"ref":fill_track_ref,"fill":"#1cb0ea","onPointerDown":(cljs.core.truth_(active)?on_fill_track_down:null)});
return obj43504;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.control_panel.slider.track_geometry(value__PERCENT_)));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43501,G__43502) : helix.core.jsx.call(null,G__43501,G__43502));
})(),(function (){var G__43505 = "circle";
var G__43506 = helix.impl.props.merge_obj((function (){var obj43508 = ({"ref":knob_ref,"className":"slider-knob","transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(knob_x),")"].join(''),"onPointerDown":(cljs.core.truth_(active)?on_knob_down:null)});
return obj43508;
})(),helix.impl.props._dom_props.cljs$core$IFn$_invoke$arity$1(app.shared.control_panel.slider.knob_geometry));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43505,G__43506) : helix.core.jsx.call(null,G__43505,G__43506));
})()]});
return obj43496;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43493,G__43494) : helix.core.jsxs.call(null,G__43493,G__43494));
})(),(function (){var G__43509 = app.shared.control_panel.slider.value_view;
var G__43510 = helix.impl.props.merge_obj((function (){var obj43512 = ({"y":y,"active":active,"value":val_in_unit});
return obj43512;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(value_box));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43509,G__43510) : helix.core.jsx.call(null,G__43509,G__43510));
})()]});
return obj43488;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43485,G__43486) : helix.core.jsxs.call(null,G__43485,G__43486));
});
if(goog.DEBUG === true){
var G__43513 = G__43477;
(G__43513.displayName = "app.shared.control-panel.slider/slider");

return G__43513;
} else {
return G__43477;
}
})();




//# sourceMappingURL=app.shared.control_panel.slider.js.map
