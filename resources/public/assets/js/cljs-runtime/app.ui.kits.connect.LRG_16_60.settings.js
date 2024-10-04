goog.provide('app.ui.kits.connect.LRG_16_60.settings');

app.ui.kits.connect.LRG_16_60.settings.correction_dirty_factor = (function (){var G__40777 = (function app$ui$kits$connect$LRG_16_60$settings$correction_dirty_factor_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40784 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-correction-f","cond-probe-correction-f",1362037938).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),"factor");
var validate_message = ["Initial cell constant value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ","factor"].join('');
var G__40813 = app.ui.shared.components.form.field_row;
var G__40814 = (function (){var obj40817 = ({"label":"CELL CONSTANT","children":[(function (){var G__40819 = app.ui.shared.components.form.input_number;
var G__40820 = helix.impl.props.merge_obj((function (){var obj40864 = ({"value":value,"on-change":(function (p1__40744_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-60","change","LRG-16-60/change",1150022472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),p1__40744_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40749_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-60","change","LRG-16-60/change",1150022472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),p1__40749_SHARP_], null)], null));
}));
})});
return obj40864;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40819,G__40820) : helix.core.jsx.call(null,G__40819,G__40820));
})(),(function (){var G__40893 = app.ui.shared.components.form.select;
var G__40894 = (function (){var obj40898 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"factor",new cljs.core.Keyword(null,"label","label",1718410804),"factor"], null)], null),"value":"factor","on-change":(function (p1__40752_SHARP_){
return cljs.core.identity(p1__40752_SHARP_);
})});
return obj40898;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40893,G__40894) : helix.core.jsx.call(null,G__40893,G__40894));
})()]});
return obj40817;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40813,G__40814) : helix.core.jsxs.call(null,G__40813,G__40814));
});
if(goog.DEBUG === true){
var G__40910 = G__40777;
(G__40910.displayName = "app.ui.kits.connect.LRG-16-60.settings/correction-dirty-factor");

return G__40910;
} else {
return G__40777;
}
})();




app.ui.kits.connect.LRG_16_60.settings.correction_dirty_temp_coeff = (function (){var G__40966 = (function app$ui$kits$connect$LRG_16_60$settings$correction_dirty_temp_coeff_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41011 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-temperature-coeff","cond-probe-temperature-coeff",1048550902).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),"%/\u00B0C");
var validate_message = ["Initial temperature coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ","%/\u00B0C"].join('');
var G__41032 = app.ui.shared.components.form.field_row;
var G__41033 = (function (){var obj41040 = ({"label":"TEMPERATURE COEFFICIENT","children":[(function (){var G__41048 = app.ui.shared.components.form.input_number;
var G__41049 = helix.impl.props.merge_obj((function (){var obj41057 = ({"value":value,"on-change":(function (p1__40928_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-60","change","LRG-16-60/change",1150022472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null),p1__40928_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40929_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-60","change","LRG-16-60/change",1150022472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null),p1__40929_SHARP_], null)], null));
}));
})});
return obj41057;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41048,G__41049) : helix.core.jsx.call(null,G__41048,G__41049));
})(),(function (){var G__41085 = app.ui.shared.components.form.select;
var G__41087 = (function (){var obj41100 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%/\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"%/\u00B0C"], null)], null),"value":"%/\u00B0C","on-change":(function (p1__40932_SHARP_){
return cljs.core.identity(p1__40932_SHARP_);
})});
return obj41100;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41085,G__41087) : helix.core.jsx.call(null,G__41085,G__41087));
})()]});
return obj41040;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41032,G__41033) : helix.core.jsxs.call(null,G__41032,G__41033));
});
if(goog.DEBUG === true){
var G__41119 = G__40966;
(G__41119.displayName = "app.ui.kits.connect.LRG-16-60.settings/correction-dirty-temp-coeff");

return G__41119;
} else {
return G__40966;
}
})();




app.ui.kits.connect.LRG_16_60.settings.settings_form = (function (){var G__41146 = (function app$ui$kits$connect$LRG_16_60$settings$settings_form_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41157 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__41164 = helix.core.Fragment;
var G__41165 = ({"children": [(function (){var G__41169 = "div";
var G__41170 = (function (){var obj41177 = ({"className":"divider","style":(function (){var obj41185 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj41185;
})(),"children":"specifications"});
return obj41177;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41169,G__41170) : helix.core.jsx.call(null,G__41169,G__41170));
})(),(function (){var G__41194 = app.ui.kits.connect.LRG_16_60.settings.correction_dirty_factor;
var G__41195 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41194,G__41195) : helix.core.jsx.call(null,G__41194,G__41195));
})(),(function (){var G__41200 = app.ui.kits.connect.LRG_16_60.settings.correction_dirty_temp_coeff;
var G__41201 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41200,G__41201) : helix.core.jsx.call(null,G__41200,G__41201));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41164,G__41165) : helix.core.jsxs.call(null,G__41164,G__41165));
});
if(goog.DEBUG === true){
var G__41210 = G__41146;
(G__41210.displayName = "app.ui.kits.connect.LRG-16-60.settings/settings-form");

return G__41210;
} else {
return G__41146;
}
})();




app.ui.kits.connect.LRG_16_60.settings.LRG_16_60_settings = (function (){var G__41235 = (function app$ui$kits$connect$LRG_16_60$settings$LRG_16_60_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41240 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__41246 = app.ui.shared.components.modal.settings;
var G__41247 = (function (){var obj41254 = ({"title":"Dirty Data Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-60","restore-defaults-settings","LRG-16-60/restore-defaults-settings",-1850633711)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-60","apply-settings","LRG-16-60/apply-settings",739284280)], null));
}),"children":(function (){var G__41289 = app.ui.kits.connect.LRG_16_60.settings.settings_form;
var G__41290 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41289,G__41290) : helix.core.jsx.call(null,G__41289,G__41290));
})()});
return obj41254;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41246,G__41247) : helix.core.jsx.call(null,G__41246,G__41247));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__41299 = G__41235;
(G__41299.displayName = "app.ui.kits.connect.LRG-16-60.settings/LRG-16-60-settings");

return G__41299;
} else {
return G__41235;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRG_16_60.settings.js.map
