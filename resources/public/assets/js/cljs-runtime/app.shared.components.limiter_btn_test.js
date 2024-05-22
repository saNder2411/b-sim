goog.provide('app.shared.components.limiter_btn_test');

app.shared.components.limiter_btn_test.limiter_btn_test = (function (){var G__28752 = (function app$shared$components$limiter_btn_test$limiter_btn_test_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__28768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28765,(0),null);
var map__28768__$1 = cljs.core.__destructure_map(map__28768);
var btn_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,new cljs.core.Keyword(null,"btn-path","btn-path",2114496188));
var label_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,new cljs.core.Keyword(null,"label-path","label-path",-1669364967));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var on_mouse_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var on_mouse_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28768__$1,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320));

var class$ = (function (){var G__28783 = "";
if(cljs.core.truth_(active)){
return [G__28783,"start-test-btn"].join('');
} else {
return G__28783;
}
})();
var G__28788 = helix.core.Fragment;
var G__28789 = ({"children": [(function (){var G__28800 = "path";
var G__28801 = (function (){var obj28807 = ({"className":helix.impl.props.normalize_class(class$),"fill":"#0084bc","d":btn_path,"onMouseDown":(cljs.core.truth_(active)?on_mouse_down:null),"onMouseUp":(cljs.core.truth_(active)?on_mouse_up:null)});
return obj28807;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28800,G__28801) : helix.core.jsx.call(null,G__28800,G__28801));
})(),(function (){var G__28826 = "path";
var G__28827 = (function (){var obj28831 = ({"fill":"#e5e6e4","pointerEvents":"none","d":label_path});
return obj28831;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28826,G__28827) : helix.core.jsx.call(null,G__28826,G__28827));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28788,G__28789) : helix.core.jsxs.call(null,G__28788,G__28789));
});
if(goog.DEBUG === true){
var G__28837 = G__28752;
(G__28837.displayName = "app.shared.components.limiter-btn-test/limiter-btn-test");

return G__28837;
} else {
return G__28752;
}
})();




//# sourceMappingURL=app.shared.components.limiter_btn_test.js.map
