goog.provide('app.ui.kits.connect.LRG_16_61.settings');

app.ui.kits.connect.LRG_16_61.settings.correction_dirty_factor = (function (){var G__32686 = (function app$ui$kits$connect$LRG_16_61$settings$correction_dirty_factor_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61",new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-correction-f","cond-probe-correction-f",1362037938).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),"factor");
var validate_message = ["Initial cell constant value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ","factor"].join('');
var G__32706 = app.ui.shared.components.form.field_row;
var G__32707 = (function (){var obj32709 = ({"label":"CELL CONSTANT","children":[(function (){var G__32712 = app.ui.shared.components.form.input_number;
var G__32713 = helix.impl.props.merge_obj((function (){var obj32715 = ({"value":value,"on-change":(function (p1__32673_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),p1__32673_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__32674_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),p1__32674_SHARP_], null)], null));
}));
})});
return obj32715;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32712,G__32713) : helix.core.jsx.call(null,G__32712,G__32713));
})(),(function (){var G__32716 = app.ui.shared.components.form.select;
var G__32717 = (function (){var obj32719 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"factor",new cljs.core.Keyword(null,"label","label",1718410804),"factor"], null)], null),"value":"factor","on-change":(function (p1__32675_SHARP_){
return cljs.core.identity(p1__32675_SHARP_);
})});
return obj32719;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32716,G__32717) : helix.core.jsx.call(null,G__32716,G__32717));
})()]});
return obj32709;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32706,G__32707) : helix.core.jsxs.call(null,G__32706,G__32707));
});
if(goog.DEBUG === true){
var G__32720 = G__32686;
(G__32720.displayName = "app.ui.kits.connect.LRG-16-61.settings/correction-dirty-factor");

return G__32720;
} else {
return G__32686;
}
})();




app.ui.kits.connect.LRG_16_61.settings.correction_dirty_temp_coeff = (function (){var G__32726 = (function app$ui$kits$connect$LRG_16_61$settings$correction_dirty_temp_coeff_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61",new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-temperature-coeff","cond-probe-temperature-coeff",1048550902).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),"%/\u00B0C");
var validate_message = ["Initial temperature coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ","%/\u00B0C"].join('');
var G__32730 = app.ui.shared.components.form.field_row;
var G__32731 = (function (){var obj32733 = ({"label":"TEMPERATURE COEFFICIENT","children":[(function (){var G__32735 = app.ui.shared.components.form.input_number;
var G__32736 = helix.impl.props.merge_obj((function (){var obj32738 = ({"value":value,"on-change":(function (p1__32721_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null),p1__32721_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__32722_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null),p1__32722_SHARP_], null)], null));
}));
})});
return obj32738;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32735,G__32736) : helix.core.jsx.call(null,G__32735,G__32736));
})(),(function (){var G__32743 = app.ui.shared.components.form.select;
var G__32744 = (function (){var obj32746 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%/\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"%/\u00B0C"], null)], null),"value":"%/\u00B0C","on-change":(function (p1__32723_SHARP_){
return cljs.core.identity(p1__32723_SHARP_);
})});
return obj32746;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32743,G__32744) : helix.core.jsx.call(null,G__32743,G__32744));
})()]});
return obj32733;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32730,G__32731) : helix.core.jsxs.call(null,G__32730,G__32731));
});
if(goog.DEBUG === true){
var G__32751 = G__32726;
(G__32751.displayName = "app.ui.kits.connect.LRG-16-61.settings/correction-dirty-temp-coeff");

return G__32751;
} else {
return G__32726;
}
})();




app.ui.kits.connect.LRG_16_61.settings.settings_form = (function (){var G__32753 = (function app$ui$kits$connect$LRG_16_61$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__32757 = helix.core.Fragment;
var G__32758 = ({"children": [(function (){var G__32761 = "div";
var G__32762 = (function (){var obj32764 = ({"className":"divider","style":(function (){var obj32766 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj32766;
})(),"children":"specifications"});
return obj32764;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32761,G__32762) : helix.core.jsx.call(null,G__32761,G__32762));
})(),(function (){var G__32768 = app.ui.kits.connect.LRG_16_61.settings.correction_dirty_factor;
var G__32769 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32768,G__32769) : helix.core.jsx.call(null,G__32768,G__32769));
})(),(function (){var G__32770 = app.ui.kits.connect.LRG_16_61.settings.correction_dirty_temp_coeff;
var G__32771 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32770,G__32771) : helix.core.jsx.call(null,G__32770,G__32771));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32757,G__32758) : helix.core.jsxs.call(null,G__32757,G__32758));
});
if(goog.DEBUG === true){
var G__32772 = G__32753;
(G__32772.displayName = "app.ui.kits.connect.LRG-16-61.settings/settings-form");

return G__32772;
} else {
return G__32753;
}
})();




app.ui.kits.connect.LRG_16_61.settings.LRG_16_61_settings = (function (){var G__32774 = (function app$ui$kits$connect$LRG_16_61$settings$LRG_16_61_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__32778 = app.ui.shared.components.modal.settings;
var G__32779 = (function (){var obj32781 = ({"title":"Dirty Data Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-LRG-16-61-settings","restore-defaults-LRG-16-61-settings",-2093759401)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-LRG-16-61-settings","apply-LRG-16-61-settings",-1423821348)], null));
}),"children":(function (){var G__32782 = app.ui.kits.connect.LRG_16_61.settings.settings_form;
var G__32783 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32782,G__32783) : helix.core.jsx.call(null,G__32782,G__32783));
})()});
return obj32781;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32778,G__32779) : helix.core.jsx.call(null,G__32778,G__32779));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__32784 = G__32774;
(G__32784.displayName = "app.ui.kits.connect.LRG-16-61.settings/LRG-16-61-settings");

return G__32784;
} else {
return G__32774;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRG_16_61.settings.js.map
