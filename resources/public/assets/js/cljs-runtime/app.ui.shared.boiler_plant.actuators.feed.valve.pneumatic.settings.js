goog.provide('app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings');

app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.mode_hud_settings = (function (){var G__39704 = (function app$ui$shared$boiler_plant$actuators$feed$valve$pneumatic$settings$mode_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39720 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39744 = app.ui.shared.components.form.field_row;
var G__39745 = (function (){var obj39752 = ({"label":"CONTROL MODE","children":[(function (){var G__39761 = app.ui.shared.components.form.select;
var G__39762 = (function (){var obj39771 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__39684_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39684_SHARP_], null)], null));
})});
return obj39771;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39761,G__39762) : helix.core.jsx.call(null,G__39761,G__39762));
})(),(function (){var G__39789 = app.ui.shared.components.form.checkbox;
var G__39790 = (function (){var obj39799 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39799;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39789,G__39790) : helix.core.jsx.call(null,G__39789,G__39790));
})()]});
return obj39752;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39744,G__39745) : helix.core.jsxs.call(null,G__39744,G__39745));
});
if(goog.DEBUG === true){
var G__39820 = G__39704;
(G__39820.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.pneumatic.settings/mode-hud-settings");

return G__39820;
} else {
return G__39704;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.damper_hud_settings = (function (){var G__39848 = (function app$ui$shared$boiler_plant$actuators$feed$valve$pneumatic$settings$damper_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39883 = app.ui.shared.components.form.field_row;
var G__39884 = (function (){var obj39886 = ({"label":"VALVE STATE","children":[(function (){var G__39892 = app.ui.shared.components.form.select;
var G__39893 = (function (){var obj39901 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__39825_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39825_SHARP_], null)], null));
})});
return obj39901;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39892,G__39893) : helix.core.jsx.call(null,G__39892,G__39893));
})(),(function (){var G__39910 = app.ui.shared.components.form.checkbox;
var G__39911 = (function (){var obj39914 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39914;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39910,G__39911) : helix.core.jsx.call(null,G__39910,G__39911));
})()]});
return obj39886;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39883,G__39884) : helix.core.jsxs.call(null,G__39883,G__39884));
});
if(goog.DEBUG === true){
var G__39925 = G__39848;
(G__39925.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.pneumatic.settings/damper-hud-settings");

return G__39925;
} else {
return G__39848;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.flow_rate_hud_settings = (function (){var G__39960 = (function app$ui$shared$boiler_plant$actuators$feed$valve$pneumatic$settings$flow_rate_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39971 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39982 = app.ui.shared.components.form.field_row;
var G__39983 = (function (){var obj39987 = ({"label":"FLOW-RATE","children":[(function (){var G__39993 = app.ui.shared.components.form.select;
var G__39994 = (function (){var obj40000 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__39939_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39939_SHARP_], null)], null));
})});
return obj40000;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39993,G__39994) : helix.core.jsx.call(null,G__39993,G__39994));
})(),(function (){var G__40010 = app.ui.shared.components.form.checkbox;
var G__40011 = (function (){var obj40015 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj40015;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40010,G__40011) : helix.core.jsx.call(null,G__40010,G__40011));
})()]});
return obj39987;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39982,G__39983) : helix.core.jsxs.call(null,G__39982,G__39983));
});
if(goog.DEBUG === true){
var G__40028 = G__39960;
(G__40028.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.pneumatic.settings/flow-rate-hud-settings");

return G__40028;
} else {
return G__39960;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.damper_init_value = (function (){var G__40104 = (function app$ui$shared$boiler_plant$actuators$feed$valve$pneumatic$settings$damper_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-position","feed-water-elect-valve-position",1487608942).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve position value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__40141 = app.ui.shared.components.form.field_row;
var G__40142 = (function (){var obj40145 = ({"label":"VALVE POSITION","children":[(function (){var G__40147 = app.ui.shared.components.form.input_number;
var G__40148 = helix.impl.props.merge_obj((function (){var obj40154 = ({"value":value,"on-change":(function (p1__40072_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__40072_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40075_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__40075_SHARP_], null)], null));
}));
})});
return obj40154;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40147,G__40148) : helix.core.jsx.call(null,G__40147,G__40148));
})(),(function (){var G__40181 = app.ui.shared.components.form.select;
var G__40182 = (function (){var obj40186 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__40078_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__40078_SHARP_], null)], null));
})});
return obj40186;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40181,G__40182) : helix.core.jsx.call(null,G__40181,G__40182));
})()]});
return obj40145;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40141,G__40142) : helix.core.jsxs.call(null,G__40141,G__40142));
});
if(goog.DEBUG === true){
var G__40220 = G__40104;
(G__40220.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.pneumatic.settings/damper-init-value");

return G__40220;
} else {
return G__40104;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.flow_rate_init_max_value = (function (){var G__40274 = (function app$ui$shared$boiler_plant$actuators$feed$valve$pneumatic$settings$flow_rate_init_max_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","flow-rate-converted-max-value","feed-pneumatic-valve/flow-rate-converted-max-value",994222453)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-flow-rate","feed-water-elect-valve-flow-rate",997798988).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__40320 = app.ui.shared.components.form.field_row;
var G__40321 = (function (){var obj40326 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__40338 = app.ui.shared.components.form.input_number;
var G__40339 = helix.impl.props.merge_obj((function (){var obj40365 = ({"value":converted_value,"on-change":(function (p1__40231_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change-flow-rate-max-value","feed-pneumatic-valve/change-flow-rate-max-value",-1730329342),p1__40231_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40235_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change-flow-rate-max-value","feed-pneumatic-valve/change-flow-rate-max-value",-1730329342),p1__40235_SHARP_], null));
}));
})});
return obj40365;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40338,G__40339) : helix.core.jsx.call(null,G__40338,G__40339));
})(),(function (){var G__40409 = app.ui.shared.components.form.select;
var G__40410 = (function (){var obj40419 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__40240_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","change","feed-pneumatic-valve/change",1663679226),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__40240_SHARP_], null)], null));
})});
return obj40419;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40409,G__40410) : helix.core.jsx.call(null,G__40409,G__40410));
})()]});
return obj40326;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40320,G__40321) : helix.core.jsxs.call(null,G__40320,G__40321));
});
if(goog.DEBUG === true){
var G__40461 = G__40274;
(G__40461.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.pneumatic.settings/flow-rate-init-max-value");

return G__40461;
} else {
return G__40274;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.settings_form = (function (){var G__40518 = (function app$ui$shared$boiler_plant$actuators$feed$valve$pneumatic$settings$settings_form_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__40545 = helix.core.Fragment;
var G__40546 = ({"children": [(function (){var G__40551 = "div";
var G__40552 = (function (){var obj40561 = ({"className":"divider","style":(function (){var obj40564 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj40564;
})(),"children":"head-up-display"});
return obj40561;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40551,G__40552) : helix.core.jsx.call(null,G__40551,G__40552));
})(),(function (){var G__40581 = app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.mode_hud_settings;
var G__40582 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40581,G__40582) : helix.core.jsx.call(null,G__40581,G__40582));
})(),(function (){var G__40627 = app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.damper_hud_settings;
var G__40628 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40627,G__40628) : helix.core.jsx.call(null,G__40627,G__40628));
})(),(function (){var G__40637 = app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.flow_rate_hud_settings;
var G__40638 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40637,G__40638) : helix.core.jsx.call(null,G__40637,G__40638));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__40648 = helix.core.Fragment;
var G__40649 = ({"children": [(function (){var G__40651 = "div";
var G__40652 = (function (){var obj40660 = ({"className":"divider","children":"simulation start values"});
return obj40660;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40651,G__40652) : helix.core.jsx.call(null,G__40651,G__40652));
})(),(function (){var G__40668 = app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.damper_init_value;
var G__40669 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40668,G__40669) : helix.core.jsx.call(null,G__40668,G__40669));
})(),(function (){var G__40676 = "div";
var G__40677 = (function (){var obj40679 = ({"className":"divider","children":"specifications"});
return obj40679;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40676,G__40677) : helix.core.jsx.call(null,G__40676,G__40677));
})(),(function (){var G__40683 = app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.flow_rate_init_max_value;
var G__40684 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40683,G__40684) : helix.core.jsx.call(null,G__40683,G__40684));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40648,G__40649) : helix.core.jsxs.call(null,G__40648,G__40649));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40545,G__40546) : helix.core.jsxs.call(null,G__40545,G__40546));
});
if(goog.DEBUG === true){
var G__40798 = G__40518;
(G__40798.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.pneumatic.settings/settings-form");

return G__40798;
} else {
return G__40518;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.feed_pneumatic_valve_settings = (function (){var G__40846 = (function app$ui$shared$boiler_plant$actuators$feed$valve$pneumatic$settings$feed_pneumatic_valve_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pneumatic-valve","pneumatic-valve",356782633),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__40875 = app.ui.shared.components.modal.settings;
var G__40876 = (function (){var obj40879 = ({"title":"Feedwater Pneumatic Valve Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","restore-defaults-settings","feed-pneumatic-valve/restore-defaults-settings",802142795)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pneumatic-valve","apply-settings","feed-pneumatic-valve/apply-settings",225619074)], null));
}),"children":(function (){var G__40891 = app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.settings_form;
var G__40892 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40891,G__40892) : helix.core.jsx.call(null,G__40891,G__40892));
})()});
return obj40879;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40875,G__40876) : helix.core.jsx.call(null,G__40875,G__40876));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40902 = G__40846;
(G__40902.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.pneumatic.settings/feed-pneumatic-valve-settings");

return G__40902;
} else {
return G__40846;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.feed.valve.pneumatic.settings.js.map
