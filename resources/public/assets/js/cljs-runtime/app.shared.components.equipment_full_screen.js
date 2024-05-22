goog.provide('app.shared.components.equipment_full_screen');

app.shared.components.equipment_full_screen.equipment_full_screen = (function (){var G__31200 = (function app$shared$components$equipment_full_screen$equipment_full_screen_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__31204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201,(0),null);
var map__31204__$1 = cljs.core.__destructure_map(map__31204);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31204__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31204__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31204__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var class$ = (cljs.core.truth_(show)?"full-screen-mask":"hide");
var on_mask_click = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("full-screen-mask",e.target.id)){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
});
var G__31205 = "div";
var G__31206 = (function (){var obj31208 = ({"className":helix.impl.props.normalize_class(class$),"id":"full-screen-mask","onClick":on_mask_click,"children":(function (){var G__31209 = "div";
var G__31210 = (function (){var obj31212 = ({"style":(function (){var obj31214 = ({"margin":helix.impl.props.__GT_js("auto")});
return obj31214;
})(),"children":children});
return obj31212;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31209,G__31210) : helix.core.jsx.call(null,G__31209,G__31210));
})()});
return obj31208;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31205,G__31206) : helix.core.jsx.call(null,G__31205,G__31206));
});
if(goog.DEBUG === true){
var G__31215 = G__31200;
(G__31215.displayName = "app.shared.components.equipment-full-screen/equipment-full-screen");

return G__31215;
} else {
return G__31200;
}
})();




//# sourceMappingURL=app.shared.components.equipment_full_screen.js.map
