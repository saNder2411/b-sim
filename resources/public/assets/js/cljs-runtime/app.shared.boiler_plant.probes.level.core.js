goog.provide('app.shared.boiler_plant.probes.level.core');

app.shared.boiler_plant.probes.level.core.probe_level = (function (){var G__51293 = (function app$shared$boiler_plant$probes$level$core$probe_level_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__51294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__51297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51294,(0),null);
var map__51297__$1 = cljs.core.__destructure_map(map__51297);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51297__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var hotspot_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51297__$1,new cljs.core.Keyword(null,"hotspot-id","hotspot-id",1928616945));

var left_orientation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"level-low-probe-I")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"level-low-probe-II")));
var G__51298 = "g";
var G__51299 = (function (){var obj51301 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", 186)"].join(''),"children":[(function (){var G__51302 = app.shared.boiler_plant.probes.level.highlighting_bg.probe_level_highlighting;
var G__51303 = (function (){var obj51305 = ({"hotspot-id":hotspot_id});
return obj51305;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51302,G__51303) : helix.core.jsx.call(null,G__51302,G__51303));
})(),((left_orientation)?(function (){var G__51306 = helix.core.Fragment;
var G__51307 = ({"children": [(function (){var G__51308 = "polygon";
var G__51309 = (function (){var obj51311 = ({"fill":"#b9b9ba","points":"49.197 95.472 55.716 95.472 55.716 93.19 56.857 89.93 56.857 42.177 48.056 42.177 48.056 89.93 49.197 93.19"});
return obj51311;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51308,G__51309) : helix.core.jsx.call(null,G__51308,G__51309));
})(),(function (){var G__51312 = "polygon";
var G__51313 = (function (){var obj51315 = ({"fill":"#2a6bb7","points":"46.834 42.747 58.243 42.747 58.243 21.885 46.834 21.885 46.834 16.344 18.638 16.344 18.638 48.614 46.834 48.614"});
return obj51315;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51312,G__51313) : helix.core.jsx.call(null,G__51312,G__51313));
})(),(function (){var G__51316 = "rect";
var G__51317 = (function (){var obj51319 = ({"fill":"#eeefef","x":23.446,"y":23.597,"width":17.439,"height":17.439});
return obj51319;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51316,G__51317) : helix.core.jsx.call(null,G__51316,G__51317));
})(),(function (){var G__51320 = "rect";
var G__51321 = (function (){var obj51323 = ({"fill":"#5e5e5d","x":24.913,"y":30.116,"width":3.341,"height":4.319});
return obj51323;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51320,G__51321) : helix.core.jsx.call(null,G__51320,G__51321));
})(),(function (){var G__51324 = "rect";
var G__51325 = (function (){var obj51327 = ({"fill":"#5e5e5d","x":28.661,"y":30.116,"width":3.341,"height":4.319});
return obj51327;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51324,G__51325) : helix.core.jsx.call(null,G__51324,G__51325));
})(),(function (){var G__51328 = "rect";
var G__51329 = (function (){var obj51331 = ({"fill":"#5e5e5d","x":32.41,"y":30.116,"width":3.341,"height":4.319});
return obj51331;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51328,G__51329) : helix.core.jsx.call(null,G__51328,G__51329));
})(),(function (){var G__51332 = "rect";
var G__51333 = (function (){var obj51335 = ({"fill":"#5e5e5d","x":36.159,"y":30.116,"width":3.341,"height":4.319});
return obj51335;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51332,G__51333) : helix.core.jsx.call(null,G__51332,G__51333));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__51306,G__51307) : helix.core.jsxs.call(null,G__51306,G__51307));
})():(function (){var G__51336 = helix.core.Fragment;
var G__51337 = ({"children": [(function (){var G__51338 = "polygon";
var G__51339 = (function (){var obj51341 = ({"fill":"#b9b9ba","points":"20.024 89.93 21.164 93.19 21.164 95.472 27.684 95.472 27.684 93.19 28.825 89.93 28.825 42.177 20.024 42.177"});
return obj51341;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51338,G__51339) : helix.core.jsx.call(null,G__51338,G__51339));
})(),(function (){var G__51342 = "polygon";
var G__51343 = (function (){var obj51345 = ({"fill":"#2a6bb7","points":"18.638 21.885 18.638 42.747 30.128 42.747 30.128 48.614 58.243 48.614 58.243 16.344 30.128 16.344 30.128 21.885"});
return obj51345;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51342,G__51343) : helix.core.jsx.call(null,G__51342,G__51343));
})(),(function (){var G__51346 = "rect";
var G__51347 = (function (){var obj51349 = ({"fill":"#eeefef","x":35.996,"y":23.597,"width":17.439,"height":17.439});
return obj51349;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51346,G__51347) : helix.core.jsx.call(null,G__51346,G__51347));
})(),(function (){var G__51350 = "rect";
var G__51351 = (function (){var obj51353 = ({"fill":"#5e5e5d","x":37.463,"y":30.116,"width":3.341,"height":4.319});
return obj51353;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51350,G__51351) : helix.core.jsx.call(null,G__51350,G__51351));
})(),(function (){var G__51354 = "rect";
var G__51355 = (function (){var obj51357 = ({"fill":"#5e5e5d","x":41.13,"y":30.116,"width":3.341,"height":4.319});
return obj51357;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51354,G__51355) : helix.core.jsx.call(null,G__51354,G__51355));
})(),(function (){var G__51358 = "rect";
var G__51359 = (function (){var obj51361 = ({"fill":"#5e5e5d","x":44.878,"y":30.116,"width":3.341,"height":4.319});
return obj51361;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51358,G__51359) : helix.core.jsx.call(null,G__51358,G__51359));
})(),(function (){var G__51362 = "rect";
var G__51363 = (function (){var obj51365 = ({"fill":"#5e5e5d","x":48.627,"y":30.116,"width":3.341,"height":4.319});
return obj51365;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51362,G__51363) : helix.core.jsx.call(null,G__51362,G__51363));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__51336,G__51337) : helix.core.jsxs.call(null,G__51336,G__51337));
})())]});
return obj51301;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__51298,G__51299) : helix.core.jsxs.call(null,G__51298,G__51299));
});
if(goog.DEBUG === true){
var G__51366 = G__51293;
(G__51366.displayName = "app.shared.boiler-plant.probes.level.core/probe-level");

return G__51366;
} else {
return G__51293;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.probes.level.core.js.map
