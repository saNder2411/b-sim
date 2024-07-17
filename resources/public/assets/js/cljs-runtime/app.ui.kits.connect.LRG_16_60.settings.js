goog.provide('app.ui.kits.connect.LRG_16_60.settings');

app.ui.kits.connect.LRG_16_60.settings.correction_dirty_factor = (function (){var G__32527 = (function app$ui$kits$connect$LRG_16_60$settings$correction_dirty_factor_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-correction-f","cond-probe-correction-f",1362037938).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),"factor");
var validate_message = ["Initial cell constant value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ","factor"].join('');
var G__32542 = app.ui.shared.components.form.field_row;
var G__32543 = (function (){var obj32545 = ({"label":"CELL CONSTANT","children":[(function (){var G__32546 = app.ui.shared.components.form.input_number;
var G__32547 = helix.impl.props.merge_obj((function (){var obj32551 = ({"value":value,"on-change":(function (p1__32506_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),p1__32506_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__32509_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),p1__32509_SHARP_], null)], null));
}));
})});
return obj32551;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32546,G__32547) : helix.core.jsx.call(null,G__32546,G__32547));
})(),(function (){var G__32572 = app.ui.shared.components.form.select;
var G__32573 = (function (){var obj32577 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"factor",new cljs.core.Keyword(null,"label","label",1718410804),"factor"], null)], null),"value":"factor","on-change":(function (p1__32514_SHARP_){
return cljs.core.identity(p1__32514_SHARP_);
})});
return obj32577;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32572,G__32573) : helix.core.jsx.call(null,G__32572,G__32573));
})()]});
return obj32545;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32542,G__32543) : helix.core.jsxs.call(null,G__32542,G__32543));
});
if(goog.DEBUG === true){
var G__32590 = G__32527;
(G__32590.displayName = "app.ui.kits.connect.LRG-16-60.settings/correction-dirty-factor");

return G__32590;
} else {
return G__32527;
}
})();




app.ui.kits.connect.LRG_16_60.settings.correction_dirty_temp_coeff = (function (){var G__32617 = (function app$ui$kits$connect$LRG_16_60$settings$correction_dirty_temp_coeff_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-temperature-coeff","cond-probe-temperature-coeff",1048550902).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),"%/\u00B0C");
var validate_message = ["Initial temperature coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ","%/\u00B0C"].join('');
var G__32628 = app.ui.shared.components.form.field_row;
var G__32629 = (function (){var obj32631 = ({"label":"TEMPERATURE COEFFICIENT","children":[(function (){var G__32633 = app.ui.shared.components.form.input_number;
var G__32634 = helix.impl.props.merge_obj((function (){var obj32636 = ({"value":value,"on-change":(function (p1__32598_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null),p1__32598_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__32599_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null),p1__32599_SHARP_], null)], null));
}));
})});
return obj32636;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32633,G__32634) : helix.core.jsx.call(null,G__32633,G__32634));
})(),(function (){var G__32639 = app.ui.shared.components.form.select;
var G__32640 = (function (){var obj32645 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%/\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"%/\u00B0C"], null)], null),"value":"%/\u00B0C","on-change":(function (p1__32600_SHARP_){
return cljs.core.identity(p1__32600_SHARP_);
})});
return obj32645;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32639,G__32640) : helix.core.jsx.call(null,G__32639,G__32640));
})()]});
return obj32631;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32628,G__32629) : helix.core.jsxs.call(null,G__32628,G__32629));
});
if(goog.DEBUG === true){
var G__32650 = G__32617;
(G__32650.displayName = "app.ui.kits.connect.LRG-16-60.settings/correction-dirty-temp-coeff");

return G__32650;
} else {
return G__32617;
}
})();




app.ui.kits.connect.LRG_16_60.settings.settings_form = (function (){var G__32654 = (function app$ui$kits$connect$LRG_16_60$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__32659 = helix.core.Fragment;
var G__32660 = ({"children": [(function (){var G__32661 = "div";
var G__32662 = (function (){var obj32664 = ({"className":"divider","style":(function (){var obj32666 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj32666;
})(),"children":"specifications"});
return obj32664;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32661,G__32662) : helix.core.jsx.call(null,G__32661,G__32662));
})(),(function (){var G__32667 = app.ui.kits.connect.LRG_16_60.settings.correction_dirty_factor;
var G__32668 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32667,G__32668) : helix.core.jsx.call(null,G__32667,G__32668));
})(),(function (){var G__32670 = app.ui.kits.connect.LRG_16_60.settings.correction_dirty_temp_coeff;
var G__32671 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32670,G__32671) : helix.core.jsx.call(null,G__32670,G__32671));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32659,G__32660) : helix.core.jsxs.call(null,G__32659,G__32660));
});
if(goog.DEBUG === true){
var G__32672 = G__32654;
(G__32672.displayName = "app.ui.kits.connect.LRG-16-60.settings/settings-form");

return G__32672;
} else {
return G__32654;
}
})();




app.ui.kits.connect.LRG_16_60.settings.LRG_16_60_settings = (function (){var G__32679 = (function app$ui$kits$connect$LRG_16_60$settings$LRG_16_60_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__32684 = app.ui.shared.components.modal.settings;
var G__32685 = (function (){var obj32688 = ({"title":"Dirty Data Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-LRG-16-60-settings","restore-defaults-LRG-16-60-settings",84434025)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-LRG-16-60-settings","apply-LRG-16-60-settings",-1842022009)], null));
}),"children":(function (){var G__32697 = app.ui.kits.connect.LRG_16_60.settings.settings_form;
var G__32698 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32697,G__32698) : helix.core.jsx.call(null,G__32697,G__32698));
})()});
return obj32688;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32684,G__32685) : helix.core.jsx.call(null,G__32684,G__32685));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__32705 = G__32679;
(G__32705.displayName = "app.ui.kits.connect.LRG-16-60.settings/LRG-16-60-settings");

return G__32705;
} else {
return G__32679;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRG_16_60.settings.js.map
