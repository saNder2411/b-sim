goog.provide('app.shared.components.limiter_led_diagnosis');

app.shared.components.limiter_led_diagnosis.limiter_led_diagnosis = (function (){var G__28759 = (function app$shared$components$limiter_led_diagnosis$limiter_led_diagnosis_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28769 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__28772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28769,(0),null);
var map__28772__$1 = cljs.core.__destructure_map(map__28772);
var led_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28772__$1,new cljs.core.Keyword(null,"led-path","led-path",-704844767));
var label_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28772__$1,new cljs.core.Keyword(null,"label-path","label-path",-1669364967));
var yellow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28772__$1,new cljs.core.Keyword(null,"yellow","yellow",-881035449));
var yellow_pulse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28772__$1,new cljs.core.Keyword(null,"yellow-pulse","yellow-pulse",-500666186));

var class$ = (function (){var G__28785 = "led-default";
var G__28785__$1 = (cljs.core.truth_(yellow)?[G__28785," led-yellow"].join(''):G__28785);
if(cljs.core.truth_(yellow_pulse)){
return [G__28785__$1," led-yellow-pulse"].join('');
} else {
return G__28785__$1;
}
})();
var G__28798 = helix.core.Fragment;
var G__28799 = ({"children": [(function (){var G__28808 = "path";
var G__28809 = (function (){var obj28813 = ({"className":helix.impl.props.normalize_class(class$),"d":led_path});
return obj28813;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28808,G__28809) : helix.core.jsx.call(null,G__28808,G__28809));
})(),(function (){var G__28824 = "path";
var G__28825 = (function (){var obj28829 = ({"fill":"#151616","fillRule":"evenodd","d":label_path});
return obj28829;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28824,G__28825) : helix.core.jsx.call(null,G__28824,G__28825));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28798,G__28799) : helix.core.jsxs.call(null,G__28798,G__28799));
});
if(goog.DEBUG === true){
var G__28838 = G__28759;
(G__28838.displayName = "app.shared.components.limiter-led-diagnosis/limiter-led-diagnosis");

return G__28838;
} else {
return G__28759;
}
})();




//# sourceMappingURL=app.shared.components.limiter_led_diagnosis.js.map
