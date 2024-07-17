goog.provide('app.ui.shared.components.modal');

app.ui.shared.components.modal.info = (function (){var G__28676 = (function app$ui$shared$components$modal$info_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info-show","modal-info-show",-922250939)], null));
var map__28682 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null));
var map__28682__$1 = cljs.core.__destructure_map(map__28682);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28682__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28682__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_close = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null));
});
if(cljs.core.truth_(show)){
var G__28700 = "div";
var G__28701 = (function (){var obj28713 = ({"className":"modal-overlay","onClick":on_close,"children":(function (){var G__28725 = "div";
var G__28726 = (function (){var obj28730 = ({"className":"modal-card","style":(function (){var obj28736 = ({"width":helix.impl.props.__GT_js("44%")});
return obj28736;
})(),"children":[(function (){var G__28743 = "header";
var G__28744 = (function (){var obj28750 = ({"className":"modal-card-head","children":(function (){var G__28762 = "p";
var G__28763 = (function (){var obj28771 = ({"className":"modal-card-title","children":title});
return obj28771;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28762,G__28763) : helix.core.jsx.call(null,G__28762,G__28763));
})()});
return obj28750;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28743,G__28744) : helix.core.jsx.call(null,G__28743,G__28744));
})(),(function (){var G__28793 = "section";
var G__28794 = (function (){var obj28799 = ({"className":"modal-card-body","children":(function (){var G__28803 = "div";
var G__28804 = (function (){var obj28806 = ({"className":"media","children":(function (){var G__28817 = "div";
var G__28818 = (function (){var obj28820 = ({"className":"media-content","children":(function (){var G__28821 = "p";
var G__28822 = (function (){var obj28826 = ({"children":text});
return obj28826;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28821,G__28822) : helix.core.jsx.call(null,G__28821,G__28822));
})()});
return obj28820;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28817,G__28818) : helix.core.jsx.call(null,G__28817,G__28818));
})()});
return obj28806;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28803,G__28804) : helix.core.jsx.call(null,G__28803,G__28804));
})()});
return obj28799;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28793,G__28794) : helix.core.jsx.call(null,G__28793,G__28794));
})(),(function (){var G__28836 = "footer";
var G__28837 = (function (){var obj28841 = ({"className":"modal-card-foot","children":(function (){var G__28846 = "button";
var G__28847 = (function (){var obj28849 = ({"className":"button is-info","onClick":on_close,"children":"OK"});
return obj28849;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28846,G__28847) : helix.core.jsx.call(null,G__28846,G__28847));
})()});
return obj28841;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28836,G__28837) : helix.core.jsx.call(null,G__28836,G__28837));
})()]});
return obj28730;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__28725,G__28726) : helix.core.jsxs.call(null,G__28725,G__28726));
})()});
return obj28713;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28700,G__28701) : helix.core.jsx.call(null,G__28700,G__28701));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__28864 = G__28676;
(G__28864.displayName = "app.ui.shared.components.modal/info");

return G__28864;
} else {
return G__28676;
}
})();




app.ui.shared.components.modal.settings = (function (){var G__28893 = (function app$ui$shared$components$modal$settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28899 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__28902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28899,(0),null);
var map__28902__$1 = cljs.core.__destructure_map(map__28902);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28902__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28902__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28902__$1,new cljs.core.Keyword(null,"on-default","on-default",-1285252222));
var on_done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28902__$1,new cljs.core.Keyword(null,"on-done","on-done",-699252077));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28902__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__29020 = "div";
var G__29021 = (function (){var obj29028 = ({"className":"modal","children":[(function (){var G__29034 = "div";
var G__29035 = (function (){var obj29037 = ({"className":"modal-background"});
return obj29037;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29034,G__29035) : helix.core.jsx.call(null,G__29034,G__29035));
})(),(function (){var G__29065 = "div";
var G__29066 = (function (){var obj29072 = ({"className":"modal-card","style":(function (){var obj29076 = ({"width":helix.impl.props.__GT_js((480))});
return obj29076;
})(),"children":[(function (){var G__29128 = "header";
var G__29129 = (function (){var obj29133 = ({"className":"modal-card-head","children":[(function (){var G__29134 = "p";
var G__29135 = (function (){var obj29137 = ({"className":"modal-card-title","children":title});
return obj29137;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29134,G__29135) : helix.core.jsx.call(null,G__29134,G__29135));
})(),(cljs.core.truth_(on_close)?(function (){var G__29142 = "button";
var G__29143 = (function (){var obj29145 = ({"className":"delete is-medium","onClick":on_close});
return obj29145;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29142,G__29143) : helix.core.jsx.call(null,G__29142,G__29143));
})():null)]});
return obj29133;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29128,G__29129) : helix.core.jsxs.call(null,G__29128,G__29129));
})(),(function (){var G__29150 = "section";
var G__29151 = (function (){var obj29155 = ({"className":"modal-card-body","children":children});
return obj29155;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29150,G__29151) : helix.core.jsx.call(null,G__29150,G__29151));
})(),(function (){var G__29162 = "footer";
var G__29163 = (function (){var obj29168 = ({"className":"modal-card-foot","style":(function (){var obj29178 = ({"display":helix.impl.props.__GT_js("flex"),"justifyContent":helix.impl.props.__GT_js("space-between"),"alignItems":helix.impl.props.__GT_js("center")});
return obj29178;
})(),"children":[(function (){var G__29188 = "button";
var G__29189 = (function (){var obj29191 = ({"className":"button","onClick":on_default,"children":"Restore Defaults"});
return obj29191;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29188,G__29189) : helix.core.jsx.call(null,G__29188,G__29189));
})(),(function (){var G__29192 = "button";
var G__29193 = (function (){var obj29197 = ({"className":"button primary","onClick":on_done,"children":"Done"});
return obj29197;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29192,G__29193) : helix.core.jsx.call(null,G__29192,G__29193));
})()]});
return obj29168;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29162,G__29163) : helix.core.jsxs.call(null,G__29162,G__29163));
})()]});
return obj29072;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29065,G__29066) : helix.core.jsxs.call(null,G__29065,G__29066));
})()]});
return obj29028;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29020,G__29021) : helix.core.jsxs.call(null,G__29020,G__29021));
});
if(goog.DEBUG === true){
var G__29208 = G__28893;
(G__29208.displayName = "app.ui.shared.components.modal/settings");

return G__29208;
} else {
return G__28893;
}
})();




//# sourceMappingURL=app.ui.shared.components.modal.js.map
