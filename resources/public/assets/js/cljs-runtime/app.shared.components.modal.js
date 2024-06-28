goog.provide('app.shared.components.modal');

app.shared.components.modal.info = (function (){var G__67806 = (function app$shared$components$modal$info_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67807 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info-show","modal-info-show",-922250939)], null));
var map__67810 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal-info","modal-info",1282904358)], null));
var map__67810__$1 = cljs.core.__destructure_map(map__67810);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67810__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67810__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_close = (function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null));
});
if(cljs.core.truth_(show)){
var G__67811 = "div";
var G__67812 = (function (){var obj67814 = ({"className":"modal-overlay","onClick":on_close,"children":(function (){var G__67815 = "div";
var G__67816 = (function (){var obj67818 = ({"className":"modal-card","style":(function (){var obj67820 = ({"width":helix.impl.props.__GT_js("44%")});
return obj67820;
})(),"children":[(function (){var G__67821 = "header";
var G__67822 = (function (){var obj67824 = ({"className":"modal-card-head","children":(function (){var G__67825 = "p";
var G__67826 = (function (){var obj67828 = ({"className":"modal-card-title","children":title});
return obj67828;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67825,G__67826) : helix.core.jsx.call(null,G__67825,G__67826));
})()});
return obj67824;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67821,G__67822) : helix.core.jsx.call(null,G__67821,G__67822));
})(),(function (){var G__67829 = "section";
var G__67830 = (function (){var obj67832 = ({"className":"modal-card-body","children":(function (){var G__67833 = "div";
var G__67834 = (function (){var obj67836 = ({"className":"media","children":(function (){var G__67837 = "div";
var G__67838 = (function (){var obj67840 = ({"className":"media-content","children":(function (){var G__67841 = "p";
var G__67842 = (function (){var obj67844 = ({"style":(function (){var obj67846 = ({"color":helix.impl.props.__GT_js("#fff")});
return obj67846;
})(),"children":text});
return obj67844;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67841,G__67842) : helix.core.jsx.call(null,G__67841,G__67842));
})()});
return obj67840;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67837,G__67838) : helix.core.jsx.call(null,G__67837,G__67838));
})()});
return obj67836;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67833,G__67834) : helix.core.jsx.call(null,G__67833,G__67834));
})()});
return obj67832;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67829,G__67830) : helix.core.jsx.call(null,G__67829,G__67830));
})(),(function (){var G__67847 = "footer";
var G__67848 = (function (){var obj67850 = ({"className":"modal-card-foot","children":(function (){var G__67851 = "button";
var G__67852 = (function (){var obj67854 = ({"className":"button is-info","onClick":on_close,"children":"OK"});
return obj67854;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67851,G__67852) : helix.core.jsx.call(null,G__67851,G__67852));
})()});
return obj67850;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67847,G__67848) : helix.core.jsx.call(null,G__67847,G__67848));
})()]});
return obj67818;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67815,G__67816) : helix.core.jsxs.call(null,G__67815,G__67816));
})()});
return obj67814;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67811,G__67812) : helix.core.jsx.call(null,G__67811,G__67812));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__67855 = G__67806;
(G__67855.displayName = "app.shared.components.modal/info");

return G__67855;
} else {
return G__67806;
}
})();




app.shared.components.modal.settings = (function (){var G__67857 = (function app$shared$components$modal$settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__67861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67858,(0),null);
var map__67861__$1 = cljs.core.__destructure_map(map__67861);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67861__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67861__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67861__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var on_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67861__$1,new cljs.core.Keyword(null,"on-default","on-default",-1285252222));
var on_apply = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67861__$1,new cljs.core.Keyword(null,"on-apply","on-apply",-1897056081));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67861__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__67862 = "div";
var G__67863 = (function (){var obj67865 = ({"className":"modal","children":[(function (){var G__67866 = "div";
var G__67867 = (function (){var obj67869 = ({"className":"modal-background"});
return obj67869;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67866,G__67867) : helix.core.jsx.call(null,G__67866,G__67867));
})(),(function (){var G__67870 = "div";
var G__67871 = (function (){var obj67873 = ({"className":"modal-card","style":(function (){var obj67875 = ({"width":helix.impl.props.__GT_js((480))});
return obj67875;
})(),"children":[(function (){var G__67876 = "header";
var G__67877 = (function (){var obj67879 = ({"className":"modal-card-head","children":[(function (){var G__67880 = "p";
var G__67881 = (function (){var obj67883 = ({"className":"modal-card-title","children":title});
return obj67883;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67880,G__67881) : helix.core.jsx.call(null,G__67880,G__67881));
})(),(function (){var G__67884 = "button";
var G__67885 = (function (){var obj67887 = ({"className":"delete is-medium","onClick":on_close});
return obj67887;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67884,G__67885) : helix.core.jsx.call(null,G__67884,G__67885));
})()]});
return obj67879;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67876,G__67877) : helix.core.jsxs.call(null,G__67876,G__67877));
})(),(function (){var G__67888 = "section";
var G__67889 = (function (){var obj67891 = ({"className":"modal-card-body","children":children});
return obj67891;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67888,G__67889) : helix.core.jsx.call(null,G__67888,G__67889));
})(),(function (){var G__67892 = "footer";
var G__67893 = (function (){var obj67895 = ({"className":"modal-card-foot","children":[(function (){var G__67896 = "button";
var G__67897 = (function (){var obj67899 = ({"className":"button is-info","onClick":on_apply,"children":"Apply"});
return obj67899;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67896,G__67897) : helix.core.jsx.call(null,G__67896,G__67897));
})(),(function (){var G__67900 = "button";
var G__67901 = (function (){var obj67903 = ({"className":"button is-info is-outlined","onClick":on_cancel,"children":"Cancel"});
return obj67903;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67900,G__67901) : helix.core.jsx.call(null,G__67900,G__67901));
})(),(function (){var G__67904 = "button";
var G__67905 = (function (){var obj67907 = ({"className":"button is-info is-outlined","onClick":on_default,"children":"Default"});
return obj67907;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67904,G__67905) : helix.core.jsx.call(null,G__67904,G__67905));
})()]});
return obj67895;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67892,G__67893) : helix.core.jsxs.call(null,G__67892,G__67893));
})()]});
return obj67873;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67870,G__67871) : helix.core.jsxs.call(null,G__67870,G__67871));
})()]});
return obj67865;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67862,G__67863) : helix.core.jsxs.call(null,G__67862,G__67863));
});
if(goog.DEBUG === true){
var G__67908 = G__67857;
(G__67908.displayName = "app.shared.components.modal/settings");

return G__67908;
} else {
return G__67857;
}
})();




//# sourceMappingURL=app.shared.components.modal.js.map
