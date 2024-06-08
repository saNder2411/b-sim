goog.provide('app.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),window.innerWidth,window.innerHeight], null));
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.root !== 'undefined')){
} else {
app.core.root = module$node_modules$react_dom$client.createRoot(goog.dom.getElement("app"));
}
app.core.render = (function app$core$render(){
return app.core.root.render((function (){var G__29303 = app.app.app;
var G__29304 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29303,G__29304) : helix.core.jsx.call(null,G__29303,G__29304));
})());
});
app.core.clear_cache_and_render_BANG_ = (function app$core$clear_cache_and_render_BANG_(){
refx.alpha.clear_subscription_cache_BANG_();

return app.core.render();
});
app.core.init = (function app$core$init(){
return app.core.render();
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
