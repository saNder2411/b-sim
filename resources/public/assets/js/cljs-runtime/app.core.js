goog.provide('app.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
refx.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null));
app.core.render = (function app$core$render(){
var root = module$node_modules$react_dom$client.createRoot(goog.dom.getElement("app"));
return root.render((function (){var G__28439 = app.views.t_app;
var G__28440 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28439,G__28440) : helix.core.jsx.call(null,G__28439,G__28440));
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
