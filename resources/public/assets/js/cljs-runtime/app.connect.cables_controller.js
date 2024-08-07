goog.provide('app.connect.cables_controller');

app.connect.cables_controller.cables_controller = (function (){var G__41000 = (function app$connect$cables_controller$cables_controller_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__41018 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var level_probe_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-probe-id","level-probe-id",1166407835)], null));
var level_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-controller-id","level-controller-id",-527625219)], null));
var cond_controller_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond-controller-id","cond-controller-id",1569041778)], null));
var limiter_high_level_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-high-level-id","limiter-high-level-id",-232796350)], null));
var limiter_low_level_id = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limiter-low-level-id","limiter-low-level-id",-1897584090)], null));
var has_URW_60 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_probe_id,"NRGT 26-2");
var G__41044 = "g";
var G__41045 = (function (){var obj41049 = ({"data-desc":"CablesController","children":[(function (){var G__41052 = "g";
var G__41053 = (function (){var obj41061 = ({"data-desc":"URW-60","children":((has_URW_60)?(function (){var G__41062 = helix.core.Fragment;
var G__41063 = ({"children": [(function (){var G__41066 = "line";
var G__41067 = (function (){var obj41071 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(1128),"y1":(20),"x2":(1128),"y2":(74)});
return obj41071;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41066,G__41067) : helix.core.jsx.call(null,G__41066,G__41067));
})(),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none"))?(function (){var G__41077 = "line";
var G__41078 = (function (){var obj41082 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(1018),"y1":(74),"x2":(1130),"y2":(74)});
return obj41082;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41077,G__41078) : helix.core.jsx.call(null,G__41077,G__41078));
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none"))))?(function (){var G__41090 = "line";
var G__41091 = (function (){var obj41093 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(750),"y1":(74),"x2":(1130),"y2":(74)});
return obj41093;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41090,G__41091) : helix.core.jsx.call(null,G__41090,G__41091));
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none"))))))?(function (){var G__41101 = "line";
var G__41102 = (function (){var obj41106 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(480),"y1":(74),"x2":(1130),"y2":(74)});
return obj41106;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41101,G__41102) : helix.core.jsx.call(null,G__41101,G__41102));
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_low_level_id,"none"))))))))?(function (){var G__41122 = "line";
var G__41124 = (function (){var obj41127 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(210),"y1":(74),"x2":(1130),"y2":(74)});
return obj41127;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41122,G__41124) : helix.core.jsx.call(null,G__41122,G__41124));
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_low_level_id,"none"))))))))?(function (){var G__41137 = helix.core.Fragment;
var G__41138 = ({"children": [(function (){var G__41141 = "line";
var G__41142 = (function (){var obj41146 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(10),"y1":(127),"x2":(1130),"y2":(127)});
return obj41146;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41141,G__41142) : helix.core.jsx.call(null,G__41141,G__41142));
})(),(function (){var G__41147 = "line";
var G__41148 = (function (){var obj41151 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(1128),"y1":(127),"x2":(1128),"y2":(20)});
return obj41151;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41147,G__41148) : helix.core.jsx.call(null,G__41147,G__41148));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41137,G__41138) : helix.core.jsxs.call(null,G__41137,G__41138));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41062,G__41063) : helix.core.jsxs.call(null,G__41062,G__41063));
})():null)});
return obj41061;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41052,G__41053) : helix.core.jsx.call(null,G__41052,G__41053));
})(),(function (){var G__41152 = "g";
var G__41153 = (function (){var obj41155 = ({"data-desc":"Level","children":((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none"))?(function (){var G__41156 = helix.core.Fragment;
var G__41157 = ({"children": [(function (){var G__41159 = "line";
var G__41160 = (function (){var obj41162 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(902),"y1":(20),"x2":(902),"y2":(74)});
return obj41162;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41159,G__41160) : helix.core.jsx.call(null,G__41159,G__41160));
})(),((has_URW_60)?(function (){var G__41163 = "line";
var G__41164 = (function (){var obj41166 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(1020),"y1":(20),"x2":(1020),"y2":(74)});
return obj41166;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41163,G__41164) : helix.core.jsx.call(null,G__41163,G__41164));
})():null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none"))?(function (){var G__41170 = "line";
var G__41171 = (function (){var obj41174 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(750),"y1":(74),"x2":(904),"y2":(74)});
return obj41174;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41170,G__41171) : helix.core.jsx.call(null,G__41170,G__41171));
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none"))))?(function (){var G__41184 = "line";
var G__41185 = (function (){var obj41191 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(480),"y1":(74),"x2":(904),"y2":(74)});
return obj41191;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41184,G__41185) : helix.core.jsx.call(null,G__41184,G__41185));
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_low_level_id,"none"))))))?(function (){var G__41208 = "line";
var G__41209 = (function (){var obj41213 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(210),"y1":(74),"x2":(904),"y2":(74)});
return obj41213;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41208,G__41209) : helix.core.jsx.call(null,G__41208,G__41209));
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_low_level_id,"none"))))))?(function (){var G__41224 = helix.core.Fragment;
var G__41225 = ({"children": [(function (){var G__41228 = "line";
var G__41229 = (function (){var obj41233 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(10),"y1":(127),"x2":(904),"y2":(127)});
return obj41233;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41228,G__41229) : helix.core.jsx.call(null,G__41228,G__41229));
})(),(function (){var G__41240 = "line";
var G__41241 = (function (){var obj41247 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(902),"y1":(127),"x2":(902),"y2":(20)});
return obj41247;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41240,G__41241) : helix.core.jsx.call(null,G__41240,G__41241));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41224,G__41225) : helix.core.jsxs.call(null,G__41224,G__41225));
})():null),(((!(has_URW_60)))?(function (){var G__41276 = helix.core.Fragment;
var G__41277 = ({"children": [(function (){var G__41282 = "line";
var G__41283 = (function (){var obj41289 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(1018),"y1":(20),"x2":(1018),"y2":(187)});
return obj41289;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41282,G__41283) : helix.core.jsx.call(null,G__41282,G__41283));
})(),(function (){var G__41296 = "line";
var G__41297 = (function (){var obj41301 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(1018),"y1":(185),"x2":(910),"y2":(185)});
return obj41301;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41296,G__41297) : helix.core.jsx.call(null,G__41296,G__41297));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41276,G__41277) : helix.core.jsxs.call(null,G__41276,G__41277));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41156,G__41157) : helix.core.jsxs.call(null,G__41156,G__41157));
})():null)});
return obj41155;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41152,G__41153) : helix.core.jsx.call(null,G__41152,G__41153));
})(),(function (){var G__41312 = "g";
var G__41313 = (function (){var obj41319 = ({"data-desc":"Cond","children":((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none"))?(function (){var G__41326 = helix.core.Fragment;
var G__41327 = ({"children": [(function (){var G__41330 = "line";
var G__41331 = (function (){var obj41339 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(632),"y1":(20),"x2":(632),"y2":(74)});
return obj41339;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41330,G__41331) : helix.core.jsx.call(null,G__41330,G__41331));
})(),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none")) || (has_URW_60)))?(function (){var G__41347 = "line";
var G__41349 = (function (){var obj41355 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(752),"y1":(20),"x2":(752),"y2":(74)});
return obj41355;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41347,G__41349) : helix.core.jsx.call(null,G__41347,G__41349));
})():null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none"))?(function (){var G__41360 = "line";
var G__41361 = (function (){var obj41365 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(480),"y1":(74),"x2":(634),"y2":(74)});
return obj41365;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41360,G__41361) : helix.core.jsx.call(null,G__41360,G__41361));
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_low_level_id,"none"))))?(function (){var G__41375 = "line";
var G__41376 = (function (){var obj41378 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(210),"y1":(74),"x2":(634),"y2":(74)});
return obj41378;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41375,G__41376) : helix.core.jsx.call(null,G__41375,G__41376));
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_low_level_id,"none"))))?(function (){var G__41383 = helix.core.Fragment;
var G__41384 = ({"children": [(function (){var G__41389 = "line";
var G__41390 = (function (){var obj41392 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(10),"y1":(127),"x2":(634),"y2":(127)});
return obj41392;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41389,G__41390) : helix.core.jsx.call(null,G__41389,G__41390));
})(),(function (){var G__41397 = "line";
var G__41398 = (function (){var obj41402 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(632),"y1":(127),"x2":(632),"y2":(20)});
return obj41402;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41397,G__41398) : helix.core.jsx.call(null,G__41397,G__41398));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41383,G__41384) : helix.core.jsxs.call(null,G__41383,G__41384));
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none")) && ((!(has_URW_60)))))?(function (){var G__41405 = helix.core.Fragment;
var G__41406 = ({"children": [(function (){var G__41408 = "line";
var G__41409 = (function (){var obj41411 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(752),"y1":(20),"x2":(752),"y2":(129)});
return obj41411;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41408,G__41409) : helix.core.jsx.call(null,G__41408,G__41409));
})(),(function (){var G__41413 = "line";
var G__41414 = (function (){var obj41416 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(752),"y1":(127),"x2":(910),"y2":(127)});
return obj41416;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41413,G__41414) : helix.core.jsx.call(null,G__41413,G__41414));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41405,G__41406) : helix.core.jsxs.call(null,G__41405,G__41406));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41326,G__41327) : helix.core.jsxs.call(null,G__41326,G__41327));
})():null)});
return obj41319;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41312,G__41313) : helix.core.jsx.call(null,G__41312,G__41313));
})(),(function (){var G__41417 = "g";
var G__41418 = (function (){var obj41420 = ({"data-desc":"PumpLimiter","children":((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none"))?(function (){var G__41422 = helix.core.Fragment;
var G__41423 = ({"children": [(function (){var G__41424 = "line";
var G__41425 = (function (){var obj41430 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(362),"y1":(20),"x2":(362),"y2":(74)});
return obj41430;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41424,G__41425) : helix.core.jsx.call(null,G__41424,G__41425));
})(),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none")) || (has_URW_60)))))?(function (){var G__41436 = "line";
var G__41437 = (function (){var obj41441 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(482),"y1":(20),"x2":(482),"y2":(74)});
return obj41441;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41436,G__41437) : helix.core.jsx.call(null,G__41436,G__41437));
})():null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_low_level_id,"none"))?(function (){var G__41446 = "line";
var G__41447 = (function (){var obj41449 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(210),"y1":(74),"x2":(364),"y2":(74)});
return obj41449;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41446,G__41447) : helix.core.jsx.call(null,G__41446,G__41447));
})():null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_low_level_id,"none"))?(function (){var G__41456 = helix.core.Fragment;
var G__41457 = ({"children": [(function (){var G__41462 = "line";
var G__41463 = (function (){var obj41467 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(10),"y1":(127),"x2":(364),"y2":(127)});
return obj41467;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41462,G__41463) : helix.core.jsx.call(null,G__41462,G__41463));
})(),(function (){var G__41472 = "line";
var G__41473 = (function (){var obj41481 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(362),"y1":(127),"x2":(362),"y2":(20)});
return obj41481;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41472,G__41473) : helix.core.jsx.call(null,G__41472,G__41473));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41456,G__41457) : helix.core.jsxs.call(null,G__41456,G__41457));
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none")) && ((!(has_URW_60)))))))?(function (){var G__41507 = helix.core.Fragment;
var G__41508 = ({"children": [(function (){var G__41515 = "line";
var G__41516 = (function (){var obj41522 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(482),"y1":(20),"x2":(482),"y2":(129)});
return obj41522;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41515,G__41516) : helix.core.jsx.call(null,G__41515,G__41516));
})(),(function (){var G__41529 = "line";
var G__41530 = (function (){var obj41534 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(482),"y1":(127),"x2":(910),"y2":(127)});
return obj41534;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41529,G__41530) : helix.core.jsx.call(null,G__41529,G__41530));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41507,G__41508) : helix.core.jsxs.call(null,G__41507,G__41508));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41422,G__41423) : helix.core.jsxs.call(null,G__41422,G__41423));
})():null)});
return obj41420;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41417,G__41418) : helix.core.jsx.call(null,G__41417,G__41418));
})(),(function (){var G__41549 = "g";
var G__41550 = (function (){var obj41556 = ({"data-desc":"BurnerLimiter","children":((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_low_level_id,"none"))?(function (){var G__41558 = helix.core.Fragment;
var G__41559 = ({"children": [(function (){var G__41561 = "line";
var G__41562 = (function (){var obj41564 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(10),"y1":(127),"x2":(94),"y2":(127)});
return obj41564;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41561,G__41562) : helix.core.jsx.call(null,G__41561,G__41562));
})(),(function (){var G__41566 = "line";
var G__41567 = (function (){var obj41569 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(92),"y1":(127),"x2":(92),"y2":(20)});
return obj41569;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41566,G__41567) : helix.core.jsx.call(null,G__41566,G__41567));
})(),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none")) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none")) || (has_URW_60)))))))?(function (){var G__41575 = "line";
var G__41576 = (function (){var obj41578 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(212),"y1":(20),"x2":(212),"y2":(74)});
return obj41578;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41575,G__41576) : helix.core.jsx.call(null,G__41575,G__41576));
})():null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none")) && ((!(has_URW_60)))))))))?(function (){var G__41580 = helix.core.Fragment;
var G__41581 = ({"children": [(function (){var G__41582 = "line";
var G__41583 = (function (){var obj41585 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(212),"y1":(20),"x2":(212),"y2":(129)});
return obj41585;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41582,G__41583) : helix.core.jsx.call(null,G__41582,G__41583));
})(),(function (){var G__41586 = "line";
var G__41587 = (function (){var obj41589 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(212),"y1":(127),"x2":(910),"y2":(127)});
return obj41589;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41586,G__41587) : helix.core.jsx.call(null,G__41586,G__41587));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41580,G__41581) : helix.core.jsxs.call(null,G__41580,G__41581));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41558,G__41559) : helix.core.jsxs.call(null,G__41558,G__41559));
})():null)});
return obj41556;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41549,G__41550) : helix.core.jsx.call(null,G__41549,G__41550));
})(),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_low_level_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(limiter_high_level_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_controller_id,"none")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(level_controller_id,"none")) && ((!(has_URW_60)))))))))))?(function (){var G__41590 = "line";
var G__41591 = (function (){var obj41593 = ({"stroke":"#d03880","strokeWidth":(4),"x1":(10),"y1":(127),"x2":(910),"y2":(127)});
return obj41593;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41590,G__41591) : helix.core.jsx.call(null,G__41590,G__41591));
})():null)]});
return obj41049;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41044,G__41045) : helix.core.jsxs.call(null,G__41044,G__41045));
});
if(goog.DEBUG === true){
var G__41594 = G__41000;
(G__41594.displayName = "app.connect.cables-controller/cables-controller");

return G__41594;
} else {
return G__41000;
}
})();




//# sourceMappingURL=app.connect.cables_controller.js.map
