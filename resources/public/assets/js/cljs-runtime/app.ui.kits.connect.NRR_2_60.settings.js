goog.provide('app.ui.kits.connect.NRR_2_60.settings');

app.ui.kits.connect.NRR_2_60.settings.actuator_type_init_value = (function (){var G__35583 = (function app$ui$kits$connect$NRR_2_60$settings$actuator_type_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__35592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var actuator_type = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null)], null));
var G__35599 = app.ui.shared.components.form.field_row;
var G__35600 = (function (){var obj35606 = ({"label":"FEEDWATER ACTUATOR","children":(function (){var G__35611 = app.ui.shared.components.form.select;
var G__35612 = (function (){var obj35618 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"electric-valve",new cljs.core.Keyword(null,"label","label",1718410804),"Electric Valve"], null)], null),"value":cljs.core.name(actuator_type),"on-change":(function (p1__35577_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actuator-type","actuator-type",1305418364)], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__35577_SHARP_)], null)], null));
})});
return obj35618;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35611,G__35612) : helix.core.jsx.call(null,G__35611,G__35612));
})()});
return obj35606;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35599,G__35600) : helix.core.jsx.call(null,G__35599,G__35600));
});
if(goog.DEBUG === true){
var G__35621 = G__35583;
(G__35621.displayName = "app.ui.kits.connect.NRR-2-60.settings/actuator-type-init-value");

return G__35621;
} else {
return G__35583;
}
})();




app.ui.kits.connect.NRR_2_60.settings.settings_form = (function (){var G__35624 = (function app$ui$kits$connect$NRR_2_60$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__35626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__35633 = helix.core.Fragment;
var G__35634 = ({"children": [(function (){var G__35637 = "div";
var G__35638 = (function (){var obj35643 = ({"className":"divider","style":(function (){var obj35647 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj35647;
})(),"children":"specifications"});
return obj35643;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35637,G__35638) : helix.core.jsx.call(null,G__35637,G__35638));
})(),(function (){var G__35657 = app.ui.kits.connect.NRR_2_60.settings.actuator_type_init_value;
var G__35658 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35657,G__35658) : helix.core.jsx.call(null,G__35657,G__35658));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__35633,G__35634) : helix.core.jsxs.call(null,G__35633,G__35634));
});
if(goog.DEBUG === true){
var G__35666 = G__35624;
(G__35666.displayName = "app.ui.kits.connect.NRR-2-60.settings/settings-form");

return G__35666;
} else {
return G__35624;
}
})();




app.ui.kits.connect.NRR_2_60.settings.NRR_2_60_settings = (function (){var G__35673 = (function app$ui$kits$connect$NRR_2_60$settings$NRR_2_60_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__35678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
if(cljs.core.truth_((function (){var and__5043__auto__ = show_settings;
if(cljs.core.truth_(and__5043__auto__)){
return show_settings_form_sim_start_values;
} else {
return and__5043__auto__;
}
})())){
var G__35683 = app.ui.shared.components.modal.settings;
var G__35685 = (function (){var obj35692 = ({"title":"NRR 2-60 Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-NRR-2-60-settings","restore-defaults-NRR-2-60-settings",-33142366)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-NRR-2-60-settings","apply-NRR-2-60-settings",1367952058)], null));
}),"children":(function (){var G__35694 = app.ui.kits.connect.NRR_2_60.settings.settings_form;
var G__35696 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35694,G__35696) : helix.core.jsx.call(null,G__35694,G__35696));
})()});
return obj35692;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35683,G__35685) : helix.core.jsx.call(null,G__35683,G__35685));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__35702 = G__35673;
(G__35702.displayName = "app.ui.kits.connect.NRR-2-60.settings/NRR-2-60-settings");

return G__35702;
} else {
return G__35673;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_60.settings.js.map
