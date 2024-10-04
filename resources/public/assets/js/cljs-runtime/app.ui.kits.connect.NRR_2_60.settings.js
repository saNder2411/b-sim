goog.provide('app.ui.kits.connect.NRR_2_60.settings');

app.ui.kits.connect.NRR_2_60.settings.actuator_type_init_value = (function (){var G__40174 = (function app$ui$kits$connect$NRR_2_60$settings$actuator_type_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var actuator_type = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null)], null));
var G__40198 = app.ui.shared.components.form.field_row;
var G__40199 = (function (){var obj40203 = ({"label":"FEEDWATER ACTUATOR","children":(function (){var G__40213 = app.ui.shared.components.form.select;
var G__40214 = (function (){var obj40222 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"electric-valve",new cljs.core.Keyword(null,"label","label",1718410804),"Electric Valve"], null)], null),"value":cljs.core.name(actuator_type),"on-change":(function (p1__40149_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60","change","NRR-2-60/change",-443288122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__40149_SHARP_)], null)], null));
})});
return obj40222;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40213,G__40214) : helix.core.jsx.call(null,G__40213,G__40214));
})()});
return obj40203;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40198,G__40199) : helix.core.jsx.call(null,G__40198,G__40199));
});
if(goog.DEBUG === true){
var G__40319 = G__40174;
(G__40319.displayName = "app.ui.kits.connect.NRR-2-60.settings/actuator-type-init-value");

return G__40319;
} else {
return G__40174;
}
})();




app.ui.kits.connect.NRR_2_60.settings.settings_form = (function (){var G__40456 = (function app$ui$kits$connect$NRR_2_60$settings$settings_form_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__40498 = helix.core.Fragment;
var G__40499 = ({"children": [(function (){var G__40503 = "div";
var G__40504 = (function (){var obj40512 = ({"className":"divider","style":(function (){var obj40521 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj40521;
})(),"children":"specifications"});
return obj40512;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40503,G__40504) : helix.core.jsx.call(null,G__40503,G__40504));
})(),(function (){var G__40536 = app.ui.kits.connect.NRR_2_60.settings.actuator_type_init_value;
var G__40537 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40536,G__40537) : helix.core.jsx.call(null,G__40536,G__40537));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40498,G__40499) : helix.core.jsxs.call(null,G__40498,G__40499));
});
if(goog.DEBUG === true){
var G__40553 = G__40456;
(G__40553.displayName = "app.ui.kits.connect.NRR-2-60.settings/settings-form");

return G__40553;
} else {
return G__40456;
}
})();




app.ui.kits.connect.NRR_2_60.settings.NRR_2_60_settings = (function (){var G__40596 = (function app$ui$kits$connect$NRR_2_60$settings$NRR_2_60_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
if(cljs.core.truth_((function (){var and__5043__auto__ = show_settings;
if(cljs.core.truth_(and__5043__auto__)){
return show_settings_form_sim_start_values;
} else {
return and__5043__auto__;
}
})())){
var G__40623 = app.ui.shared.components.modal.settings;
var G__40624 = (function (){var obj40631 = ({"title":"NRR 2-60 Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60","restore-defaults-settings","NRR-2-60/restore-defaults-settings",-1367765121)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-60","apply-settings","NRR-2-60/apply-settings",-1962370634)], null));
}),"children":(function (){var G__40644 = app.ui.kits.connect.NRR_2_60.settings.settings_form;
var G__40645 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40644,G__40645) : helix.core.jsx.call(null,G__40644,G__40645));
})()});
return obj40631;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40623,G__40624) : helix.core.jsx.call(null,G__40623,G__40624));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40656 = G__40596;
(G__40656.displayName = "app.ui.kits.connect.NRR-2-60.settings/NRR-2-60-settings");

return G__40656;
} else {
return G__40596;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_60.settings.js.map
