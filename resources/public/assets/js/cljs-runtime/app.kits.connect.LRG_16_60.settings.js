goog.provide('app.kits.connect.LRG_16_60.settings');

app.kits.connect.LRG_16_60.settings.correction_dirty_factor = (function (){var G__46427 = (function app$kits$connect$LRG_16_60$settings$correction_dirty_factor_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__46438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-correction-f","cond-probe-correction-f",1362037938).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),"factor");
var validate_message = ["Initial cell constant value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ","factor"].join('');
var G__46456 = app.shared.components.form.field_row;
var G__46457 = (function (){var obj46461 = ({"label":"CELL CONSTANT","children":[(function (){var G__46463 = app.shared.components.form.input_number;
var G__46464 = helix.impl.props.merge_obj((function (){var obj46468 = ({"value":value,"on-change":(function (p1__46395_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),p1__46395_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__46400_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),p1__46400_SHARP_], null)], null));
}));
})});
return obj46468;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46463,G__46464) : helix.core.jsx.call(null,G__46463,G__46464));
})(),(function (){var G__46493 = app.shared.components.form.select;
var G__46494 = (function (){var obj46498 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"factor",new cljs.core.Keyword(null,"label","label",1718410804),"factor"], null)], null),"value":"factor","on-change":(function (p1__46401_SHARP_){
return cljs.core.identity(p1__46401_SHARP_);
})});
return obj46498;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46493,G__46494) : helix.core.jsx.call(null,G__46493,G__46494));
})()]});
return obj46461;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46456,G__46457) : helix.core.jsxs.call(null,G__46456,G__46457));
});
if(goog.DEBUG === true){
var G__46514 = G__46427;
(G__46514.displayName = "app.kits.connect.LRG-16-60.settings/correction-dirty-factor");

return G__46514;
} else {
return G__46427;
}
})();




app.kits.connect.LRG_16_60.settings.correction_dirty_temp_coeff = (function (){var G__46557 = (function app$kits$connect$LRG_16_60$settings$correction_dirty_temp_coeff_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__46566 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-temperature-coeff","cond-probe-temperature-coeff",1048550902).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),"%/\u00B0C");
var validate_message = ["Initial temperature coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ","%/\u00B0C"].join('');
var G__46588 = app.shared.components.form.field_row;
var G__46589 = (function (){var obj46591 = ({"label":"TEMPERATURE COEFFICIENT","children":[(function (){var G__46596 = app.shared.components.form.input_number;
var G__46597 = helix.impl.props.merge_obj((function (){var obj46599 = ({"value":value,"on-change":(function (p1__46524_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null),p1__46524_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__46528_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null),p1__46528_SHARP_], null)], null));
}));
})});
return obj46599;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46596,G__46597) : helix.core.jsx.call(null,G__46596,G__46597));
})(),(function (){var G__46618 = app.shared.components.form.select;
var G__46619 = (function (){var obj46625 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%/\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"%/\u00B0C"], null)], null),"value":"%/\u00B0C","on-change":(function (p1__46529_SHARP_){
return cljs.core.identity(p1__46529_SHARP_);
})});
return obj46625;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46618,G__46619) : helix.core.jsx.call(null,G__46618,G__46619));
})()]});
return obj46591;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46588,G__46589) : helix.core.jsxs.call(null,G__46588,G__46589));
});
if(goog.DEBUG === true){
var G__46629 = G__46557;
(G__46629.displayName = "app.kits.connect.LRG-16-60.settings/correction-dirty-temp-coeff");

return G__46629;
} else {
return G__46557;
}
})();




app.kits.connect.LRG_16_60.settings.settings_form = (function (){var G__46632 = (function app$kits$connect$LRG_16_60$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__46633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__46636 = helix.core.Fragment;
var G__46637 = ({"children": [(function (){var G__46638 = "div";
var G__46639 = (function (){var obj46641 = ({"className":"divider","style":(function (){var obj46643 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj46643;
})(),"children":"specifications"});
return obj46641;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46638,G__46639) : helix.core.jsx.call(null,G__46638,G__46639));
})(),(function (){var G__46644 = app.kits.connect.LRG_16_60.settings.correction_dirty_factor;
var G__46645 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46644,G__46645) : helix.core.jsx.call(null,G__46644,G__46645));
})(),(function (){var G__46646 = app.kits.connect.LRG_16_60.settings.correction_dirty_temp_coeff;
var G__46647 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46646,G__46647) : helix.core.jsx.call(null,G__46646,G__46647));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46636,G__46637) : helix.core.jsxs.call(null,G__46636,G__46637));
});
if(goog.DEBUG === true){
var G__46648 = G__46632;
(G__46648.displayName = "app.kits.connect.LRG-16-60.settings/settings-form");

return G__46648;
} else {
return G__46632;
}
})();




app.kits.connect.LRG_16_60.settings.LRG_16_60_settings = (function (){var G__46650 = (function app$kits$connect$LRG_16_60$settings$LRG_16_60_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__46651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__46654 = app.shared.components.modal.settings;
var G__46655 = (function (){var obj46657 = ({"title":"Dirty Data Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-LRG-16-60-settings","restore-defaults-LRG-16-60-settings",84434025)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-LRG-16-60-settings","apply-LRG-16-60-settings",-1842022009)], null));
}),"children":(function (){var G__46658 = app.kits.connect.LRG_16_60.settings.settings_form;
var G__46659 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46658,G__46659) : helix.core.jsx.call(null,G__46658,G__46659));
})()});
return obj46657;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46654,G__46655) : helix.core.jsx.call(null,G__46654,G__46655));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__46660 = G__46650;
(G__46660.displayName = "app.kits.connect.LRG-16-60.settings/LRG-16-60-settings");

return G__46660;
} else {
return G__46650;
}
})();




//# sourceMappingURL=app.kits.connect.LRG_16_60.settings.js.map
