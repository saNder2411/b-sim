goog.provide('app.connect.NRR_2_60.settings');

app.connect.NRR_2_60.settings.actuator_type_init_value = (function (){var G__34082 = (function app$connect$NRR_2_60$settings$actuator_type_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var actuator_type = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null)], null));
var G__34086 = app.shared.components.form.field_row;
var G__34087 = (function (){var obj34089 = ({"label":"FEEDWATER ACTUATOR","children":(function (){var G__34090 = app.shared.components.form.select;
var G__34091 = (function (){var obj34093 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ELECTRIC_VALVE",new cljs.core.Keyword(null,"label","label",1718410804),"Electric Valve"], null)], null),"value":actuator_type,"on-change":(function (p1__34080_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null),p1__34080_SHARP_], null)], null));
})});
return obj34093;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34090,G__34091) : helix.core.jsx.call(null,G__34090,G__34091));
})()});
return obj34089;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34086,G__34087) : helix.core.jsx.call(null,G__34086,G__34087));
});
if(goog.DEBUG === true){
var G__34094 = G__34082;
(G__34094.displayName = "app.connect.NRR-2-60.settings/actuator-type-init-value");

return G__34094;
} else {
return G__34082;
}
})();




app.connect.NRR_2_60.settings.settings_form = (function (){var G__34096 = (function app$connect$NRR_2_60$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34097 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__34100 = helix.core.Fragment;
var G__34101 = ({"children": [(function (){var G__34102 = "div";
var G__34103 = (function (){var obj34105 = ({"className":"divider","children":"simulation start values"});
return obj34105;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34102,G__34103) : helix.core.jsx.call(null,G__34102,G__34103));
})(),(function (){var G__34106 = app.connect.NRR_2_60.settings.actuator_type_init_value;
var G__34107 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34106,G__34107) : helix.core.jsx.call(null,G__34106,G__34107));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34100,G__34101) : helix.core.jsxs.call(null,G__34100,G__34101));
});
if(goog.DEBUG === true){
var G__34108 = G__34096;
(G__34108.displayName = "app.connect.NRR-2-60.settings/settings-form");

return G__34108;
} else {
return G__34096;
}
})();




app.connect.NRR_2_60.settings.NRR_2_60_settings = (function (){var G__34110 = (function app$connect$NRR_2_60$settings$NRR_2_60_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
if(cljs.core.truth_((function (){var and__5043__auto__ = show_settings;
if(cljs.core.truth_(and__5043__auto__)){
return show_settings_form_sim_start_values;
} else {
return and__5043__auto__;
}
})())){
var G__34114 = app.shared.components.modal.settings;
var G__34115 = (function (){var obj34117 = ({"title":"NRR 2-60 Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-NRR-2-60-settings","restore-defaults-NRR-2-60-settings",-33142366)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-NRR-2-60-settings","apply-NRR-2-60-settings",1367952058)], null));
}),"children":(function (){var G__34118 = app.connect.NRR_2_60.settings.settings_form;
var G__34119 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34118,G__34119) : helix.core.jsx.call(null,G__34118,G__34119));
})()});
return obj34117;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34114,G__34115) : helix.core.jsx.call(null,G__34114,G__34115));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__34120 = G__34110;
(G__34120.displayName = "app.connect.NRR-2-60.settings/NRR-2-60-settings");

return G__34120;
} else {
return G__34110;
}
})();




//# sourceMappingURL=app.connect.NRR_2_60.settings.js.map
