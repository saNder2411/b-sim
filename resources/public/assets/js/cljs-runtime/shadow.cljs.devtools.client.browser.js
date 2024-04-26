goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37109 = arguments.length;
var i__5770__auto___37110 = (0);
while(true){
if((i__5770__auto___37110 < len__5769__auto___37109)){
args__5775__auto__.push((arguments[i__5770__auto___37110]));

var G__37111 = (i__5770__auto___37110 + (1));
i__5770__auto___37110 = G__37111;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36827){
var G__36828 = cljs.core.first(seq36827);
var seq36827__$1 = cljs.core.next(seq36827);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36828,seq36827__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36829 = cljs.core.seq(sources);
var chunk__36830 = null;
var count__36831 = (0);
var i__36832 = (0);
while(true){
if((i__36832 < count__36831)){
var map__36839 = chunk__36830.cljs$core$IIndexed$_nth$arity$2(null,i__36832);
var map__36839__$1 = cljs.core.__destructure_map(map__36839);
var src = map__36839__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36839__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36839__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36839__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36839__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36840){var e_37112 = e36840;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37112);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37112.message)].join('')));
}

var G__37113 = seq__36829;
var G__37114 = chunk__36830;
var G__37115 = count__36831;
var G__37116 = (i__36832 + (1));
seq__36829 = G__37113;
chunk__36830 = G__37114;
count__36831 = G__37115;
i__36832 = G__37116;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36829);
if(temp__5804__auto__){
var seq__36829__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36829__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36829__$1);
var G__37117 = cljs.core.chunk_rest(seq__36829__$1);
var G__37118 = c__5568__auto__;
var G__37119 = cljs.core.count(c__5568__auto__);
var G__37120 = (0);
seq__36829 = G__37117;
chunk__36830 = G__37118;
count__36831 = G__37119;
i__36832 = G__37120;
continue;
} else {
var map__36841 = cljs.core.first(seq__36829__$1);
var map__36841__$1 = cljs.core.__destructure_map(map__36841);
var src = map__36841__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36841__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36841__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36841__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36841__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36842){var e_37121 = e36842;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37121);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37121.message)].join('')));
}

var G__37122 = cljs.core.next(seq__36829__$1);
var G__37123 = null;
var G__37124 = (0);
var G__37125 = (0);
seq__36829 = G__37122;
chunk__36830 = G__37123;
count__36831 = G__37124;
i__36832 = G__37125;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36843 = cljs.core.seq(js_requires);
var chunk__36844 = null;
var count__36845 = (0);
var i__36846 = (0);
while(true){
if((i__36846 < count__36845)){
var js_ns = chunk__36844.cljs$core$IIndexed$_nth$arity$2(null,i__36846);
var require_str_37126 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37126);


var G__37127 = seq__36843;
var G__37128 = chunk__36844;
var G__37129 = count__36845;
var G__37130 = (i__36846 + (1));
seq__36843 = G__37127;
chunk__36844 = G__37128;
count__36845 = G__37129;
i__36846 = G__37130;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36843);
if(temp__5804__auto__){
var seq__36843__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36843__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36843__$1);
var G__37131 = cljs.core.chunk_rest(seq__36843__$1);
var G__37132 = c__5568__auto__;
var G__37133 = cljs.core.count(c__5568__auto__);
var G__37134 = (0);
seq__36843 = G__37131;
chunk__36844 = G__37132;
count__36845 = G__37133;
i__36846 = G__37134;
continue;
} else {
var js_ns = cljs.core.first(seq__36843__$1);
var require_str_37135 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37135);


var G__37136 = cljs.core.next(seq__36843__$1);
var G__37137 = null;
var G__37138 = (0);
var G__37139 = (0);
seq__36843 = G__37136;
chunk__36844 = G__37137;
count__36845 = G__37138;
i__36846 = G__37139;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36848){
var map__36849 = p__36848;
var map__36849__$1 = cljs.core.__destructure_map(map__36849);
var msg = map__36849__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36849__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36849__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36850(s__36851){
return (new cljs.core.LazySeq(null,(function (){
var s__36851__$1 = s__36851;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__36851__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__36856 = cljs.core.first(xs__6360__auto__);
var map__36856__$1 = cljs.core.__destructure_map(map__36856);
var src = map__36856__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36856__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36856__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__36851__$1,map__36856,map__36856__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36849,map__36849__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36850_$_iter__36852(s__36853){
return (new cljs.core.LazySeq(null,((function (s__36851__$1,map__36856,map__36856__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36849,map__36849__$1,msg,info,reload_info){
return (function (){
var s__36853__$1 = s__36853;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__36853__$1);
if(temp__5804__auto____$1){
var s__36853__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36853__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__36853__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__36855 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__36854 = (0);
while(true){
if((i__36854 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__36854);
cljs.core.chunk_append(b__36855,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37140 = (i__36854 + (1));
i__36854 = G__37140;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36855),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36850_$_iter__36852(cljs.core.chunk_rest(s__36853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36855),null);
}
} else {
var warning = cljs.core.first(s__36853__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36850_$_iter__36852(cljs.core.rest(s__36853__$2)));
}
} else {
return null;
}
break;
}
});})(s__36851__$1,map__36856,map__36856__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36849,map__36849__$1,msg,info,reload_info))
,null,null));
});})(s__36851__$1,map__36856,map__36856__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__36849,map__36849__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36850(cljs.core.rest(s__36851__$1)));
} else {
var G__37141 = cljs.core.rest(s__36851__$1);
s__36851__$1 = G__37141;
continue;
}
} else {
var G__37142 = cljs.core.rest(s__36851__$1);
s__36851__$1 = G__37142;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36857_37143 = cljs.core.seq(warnings);
var chunk__36858_37144 = null;
var count__36859_37145 = (0);
var i__36860_37146 = (0);
while(true){
if((i__36860_37146 < count__36859_37145)){
var map__36863_37147 = chunk__36858_37144.cljs$core$IIndexed$_nth$arity$2(null,i__36860_37146);
var map__36863_37148__$1 = cljs.core.__destructure_map(map__36863_37147);
var w_37149 = map__36863_37148__$1;
var msg_37150__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36863_37148__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36863_37148__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36863_37148__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36863_37148__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37153)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37151),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37152),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37150__$1)].join(''));


var G__37154 = seq__36857_37143;
var G__37155 = chunk__36858_37144;
var G__37156 = count__36859_37145;
var G__37157 = (i__36860_37146 + (1));
seq__36857_37143 = G__37154;
chunk__36858_37144 = G__37155;
count__36859_37145 = G__37156;
i__36860_37146 = G__37157;
continue;
} else {
var temp__5804__auto___37158 = cljs.core.seq(seq__36857_37143);
if(temp__5804__auto___37158){
var seq__36857_37159__$1 = temp__5804__auto___37158;
if(cljs.core.chunked_seq_QMARK_(seq__36857_37159__$1)){
var c__5568__auto___37160 = cljs.core.chunk_first(seq__36857_37159__$1);
var G__37161 = cljs.core.chunk_rest(seq__36857_37159__$1);
var G__37162 = c__5568__auto___37160;
var G__37163 = cljs.core.count(c__5568__auto___37160);
var G__37164 = (0);
seq__36857_37143 = G__37161;
chunk__36858_37144 = G__37162;
count__36859_37145 = G__37163;
i__36860_37146 = G__37164;
continue;
} else {
var map__36864_37165 = cljs.core.first(seq__36857_37159__$1);
var map__36864_37166__$1 = cljs.core.__destructure_map(map__36864_37165);
var w_37167 = map__36864_37166__$1;
var msg_37168__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36864_37166__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36864_37166__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37170 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36864_37166__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36864_37166__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37171)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37169),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37170),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37168__$1)].join(''));


var G__37172 = cljs.core.next(seq__36857_37159__$1);
var G__37173 = null;
var G__37174 = (0);
var G__37175 = (0);
seq__36857_37143 = G__37172;
chunk__36858_37144 = G__37173;
count__36859_37145 = G__37174;
i__36860_37146 = G__37175;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36847_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36847_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36865){
var map__36866 = p__36865;
var map__36866__$1 = cljs.core.__destructure_map(map__36866);
var msg = map__36866__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36866__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36866__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36867 = cljs.core.seq(updates);
var chunk__36869 = null;
var count__36870 = (0);
var i__36871 = (0);
while(true){
if((i__36871 < count__36870)){
var path = chunk__36869.cljs$core$IIndexed$_nth$arity$2(null,i__36871);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36981_37176 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36985_37177 = null;
var count__36986_37178 = (0);
var i__36987_37179 = (0);
while(true){
if((i__36987_37179 < count__36986_37178)){
var node_37180 = chunk__36985_37177.cljs$core$IIndexed$_nth$arity$2(null,i__36987_37179);
if(cljs.core.not(node_37180.shadow$old)){
var path_match_37181 = shadow.cljs.devtools.client.browser.match_paths(node_37180.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37181)){
var new_link_37182 = (function (){var G__37013 = node_37180.cloneNode(true);
G__37013.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37181),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37013;
})();
(node_37180.shadow$old = true);

(new_link_37182.onload = ((function (seq__36981_37176,chunk__36985_37177,count__36986_37178,i__36987_37179,seq__36867,chunk__36869,count__36870,i__36871,new_link_37182,path_match_37181,node_37180,path,map__36866,map__36866__$1,msg,updates,reload_info){
return (function (e){
var seq__37014_37183 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37016_37184 = null;
var count__37017_37185 = (0);
var i__37018_37186 = (0);
while(true){
if((i__37018_37186 < count__37017_37185)){
var map__37022_37187 = chunk__37016_37184.cljs$core$IIndexed$_nth$arity$2(null,i__37018_37186);
var map__37022_37188__$1 = cljs.core.__destructure_map(map__37022_37187);
var task_37189 = map__37022_37188__$1;
var fn_str_37190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37022_37188__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37022_37188__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37192 = goog.getObjectByName(fn_str_37190,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37191)].join(''));

(fn_obj_37192.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37192.cljs$core$IFn$_invoke$arity$2(path,new_link_37182) : fn_obj_37192.call(null,path,new_link_37182));


var G__37193 = seq__37014_37183;
var G__37194 = chunk__37016_37184;
var G__37195 = count__37017_37185;
var G__37196 = (i__37018_37186 + (1));
seq__37014_37183 = G__37193;
chunk__37016_37184 = G__37194;
count__37017_37185 = G__37195;
i__37018_37186 = G__37196;
continue;
} else {
var temp__5804__auto___37197 = cljs.core.seq(seq__37014_37183);
if(temp__5804__auto___37197){
var seq__37014_37198__$1 = temp__5804__auto___37197;
if(cljs.core.chunked_seq_QMARK_(seq__37014_37198__$1)){
var c__5568__auto___37199 = cljs.core.chunk_first(seq__37014_37198__$1);
var G__37200 = cljs.core.chunk_rest(seq__37014_37198__$1);
var G__37201 = c__5568__auto___37199;
var G__37202 = cljs.core.count(c__5568__auto___37199);
var G__37203 = (0);
seq__37014_37183 = G__37200;
chunk__37016_37184 = G__37201;
count__37017_37185 = G__37202;
i__37018_37186 = G__37203;
continue;
} else {
var map__37023_37204 = cljs.core.first(seq__37014_37198__$1);
var map__37023_37205__$1 = cljs.core.__destructure_map(map__37023_37204);
var task_37206 = map__37023_37205__$1;
var fn_str_37207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37023_37205__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37023_37205__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37209 = goog.getObjectByName(fn_str_37207,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37208)].join(''));

(fn_obj_37209.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37209.cljs$core$IFn$_invoke$arity$2(path,new_link_37182) : fn_obj_37209.call(null,path,new_link_37182));


var G__37210 = cljs.core.next(seq__37014_37198__$1);
var G__37211 = null;
var G__37212 = (0);
var G__37213 = (0);
seq__37014_37183 = G__37210;
chunk__37016_37184 = G__37211;
count__37017_37185 = G__37212;
i__37018_37186 = G__37213;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37180);
});})(seq__36981_37176,chunk__36985_37177,count__36986_37178,i__36987_37179,seq__36867,chunk__36869,count__36870,i__36871,new_link_37182,path_match_37181,node_37180,path,map__36866,map__36866__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37181], 0));

goog.dom.insertSiblingAfter(new_link_37182,node_37180);


var G__37214 = seq__36981_37176;
var G__37215 = chunk__36985_37177;
var G__37216 = count__36986_37178;
var G__37217 = (i__36987_37179 + (1));
seq__36981_37176 = G__37214;
chunk__36985_37177 = G__37215;
count__36986_37178 = G__37216;
i__36987_37179 = G__37217;
continue;
} else {
var G__37218 = seq__36981_37176;
var G__37219 = chunk__36985_37177;
var G__37220 = count__36986_37178;
var G__37221 = (i__36987_37179 + (1));
seq__36981_37176 = G__37218;
chunk__36985_37177 = G__37219;
count__36986_37178 = G__37220;
i__36987_37179 = G__37221;
continue;
}
} else {
var G__37222 = seq__36981_37176;
var G__37223 = chunk__36985_37177;
var G__37224 = count__36986_37178;
var G__37225 = (i__36987_37179 + (1));
seq__36981_37176 = G__37222;
chunk__36985_37177 = G__37223;
count__36986_37178 = G__37224;
i__36987_37179 = G__37225;
continue;
}
} else {
var temp__5804__auto___37226 = cljs.core.seq(seq__36981_37176);
if(temp__5804__auto___37226){
var seq__36981_37227__$1 = temp__5804__auto___37226;
if(cljs.core.chunked_seq_QMARK_(seq__36981_37227__$1)){
var c__5568__auto___37228 = cljs.core.chunk_first(seq__36981_37227__$1);
var G__37229 = cljs.core.chunk_rest(seq__36981_37227__$1);
var G__37230 = c__5568__auto___37228;
var G__37231 = cljs.core.count(c__5568__auto___37228);
var G__37232 = (0);
seq__36981_37176 = G__37229;
chunk__36985_37177 = G__37230;
count__36986_37178 = G__37231;
i__36987_37179 = G__37232;
continue;
} else {
var node_37233 = cljs.core.first(seq__36981_37227__$1);
if(cljs.core.not(node_37233.shadow$old)){
var path_match_37234 = shadow.cljs.devtools.client.browser.match_paths(node_37233.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37234)){
var new_link_37235 = (function (){var G__37024 = node_37233.cloneNode(true);
G__37024.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37234),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37024;
})();
(node_37233.shadow$old = true);

(new_link_37235.onload = ((function (seq__36981_37176,chunk__36985_37177,count__36986_37178,i__36987_37179,seq__36867,chunk__36869,count__36870,i__36871,new_link_37235,path_match_37234,node_37233,seq__36981_37227__$1,temp__5804__auto___37226,path,map__36866,map__36866__$1,msg,updates,reload_info){
return (function (e){
var seq__37025_37236 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37027_37237 = null;
var count__37028_37238 = (0);
var i__37029_37239 = (0);
while(true){
if((i__37029_37239 < count__37028_37238)){
var map__37033_37240 = chunk__37027_37237.cljs$core$IIndexed$_nth$arity$2(null,i__37029_37239);
var map__37033_37241__$1 = cljs.core.__destructure_map(map__37033_37240);
var task_37242 = map__37033_37241__$1;
var fn_str_37243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37033_37241__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37033_37241__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37245 = goog.getObjectByName(fn_str_37243,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37244)].join(''));

(fn_obj_37245.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37245.cljs$core$IFn$_invoke$arity$2(path,new_link_37235) : fn_obj_37245.call(null,path,new_link_37235));


var G__37246 = seq__37025_37236;
var G__37247 = chunk__37027_37237;
var G__37248 = count__37028_37238;
var G__37249 = (i__37029_37239 + (1));
seq__37025_37236 = G__37246;
chunk__37027_37237 = G__37247;
count__37028_37238 = G__37248;
i__37029_37239 = G__37249;
continue;
} else {
var temp__5804__auto___37250__$1 = cljs.core.seq(seq__37025_37236);
if(temp__5804__auto___37250__$1){
var seq__37025_37251__$1 = temp__5804__auto___37250__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37025_37251__$1)){
var c__5568__auto___37252 = cljs.core.chunk_first(seq__37025_37251__$1);
var G__37253 = cljs.core.chunk_rest(seq__37025_37251__$1);
var G__37254 = c__5568__auto___37252;
var G__37255 = cljs.core.count(c__5568__auto___37252);
var G__37256 = (0);
seq__37025_37236 = G__37253;
chunk__37027_37237 = G__37254;
count__37028_37238 = G__37255;
i__37029_37239 = G__37256;
continue;
} else {
var map__37034_37257 = cljs.core.first(seq__37025_37251__$1);
var map__37034_37258__$1 = cljs.core.__destructure_map(map__37034_37257);
var task_37259 = map__37034_37258__$1;
var fn_str_37260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37034_37258__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37034_37258__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37262 = goog.getObjectByName(fn_str_37260,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37261)].join(''));

(fn_obj_37262.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37262.cljs$core$IFn$_invoke$arity$2(path,new_link_37235) : fn_obj_37262.call(null,path,new_link_37235));


var G__37263 = cljs.core.next(seq__37025_37251__$1);
var G__37264 = null;
var G__37265 = (0);
var G__37266 = (0);
seq__37025_37236 = G__37263;
chunk__37027_37237 = G__37264;
count__37028_37238 = G__37265;
i__37029_37239 = G__37266;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37233);
});})(seq__36981_37176,chunk__36985_37177,count__36986_37178,i__36987_37179,seq__36867,chunk__36869,count__36870,i__36871,new_link_37235,path_match_37234,node_37233,seq__36981_37227__$1,temp__5804__auto___37226,path,map__36866,map__36866__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37234], 0));

goog.dom.insertSiblingAfter(new_link_37235,node_37233);


var G__37267 = cljs.core.next(seq__36981_37227__$1);
var G__37268 = null;
var G__37269 = (0);
var G__37270 = (0);
seq__36981_37176 = G__37267;
chunk__36985_37177 = G__37268;
count__36986_37178 = G__37269;
i__36987_37179 = G__37270;
continue;
} else {
var G__37271 = cljs.core.next(seq__36981_37227__$1);
var G__37272 = null;
var G__37273 = (0);
var G__37274 = (0);
seq__36981_37176 = G__37271;
chunk__36985_37177 = G__37272;
count__36986_37178 = G__37273;
i__36987_37179 = G__37274;
continue;
}
} else {
var G__37275 = cljs.core.next(seq__36981_37227__$1);
var G__37276 = null;
var G__37277 = (0);
var G__37278 = (0);
seq__36981_37176 = G__37275;
chunk__36985_37177 = G__37276;
count__36986_37178 = G__37277;
i__36987_37179 = G__37278;
continue;
}
}
} else {
}
}
break;
}


var G__37279 = seq__36867;
var G__37280 = chunk__36869;
var G__37281 = count__36870;
var G__37282 = (i__36871 + (1));
seq__36867 = G__37279;
chunk__36869 = G__37280;
count__36870 = G__37281;
i__36871 = G__37282;
continue;
} else {
var G__37283 = seq__36867;
var G__37284 = chunk__36869;
var G__37285 = count__36870;
var G__37286 = (i__36871 + (1));
seq__36867 = G__37283;
chunk__36869 = G__37284;
count__36870 = G__37285;
i__36871 = G__37286;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36867);
if(temp__5804__auto__){
var seq__36867__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36867__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36867__$1);
var G__37287 = cljs.core.chunk_rest(seq__36867__$1);
var G__37288 = c__5568__auto__;
var G__37289 = cljs.core.count(c__5568__auto__);
var G__37290 = (0);
seq__36867 = G__37287;
chunk__36869 = G__37288;
count__36870 = G__37289;
i__36871 = G__37290;
continue;
} else {
var path = cljs.core.first(seq__36867__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37035_37291 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37039_37292 = null;
var count__37040_37293 = (0);
var i__37041_37294 = (0);
while(true){
if((i__37041_37294 < count__37040_37293)){
var node_37295 = chunk__37039_37292.cljs$core$IIndexed$_nth$arity$2(null,i__37041_37294);
if(cljs.core.not(node_37295.shadow$old)){
var path_match_37296 = shadow.cljs.devtools.client.browser.match_paths(node_37295.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37296)){
var new_link_37297 = (function (){var G__37067 = node_37295.cloneNode(true);
G__37067.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37296),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37067;
})();
(node_37295.shadow$old = true);

(new_link_37297.onload = ((function (seq__37035_37291,chunk__37039_37292,count__37040_37293,i__37041_37294,seq__36867,chunk__36869,count__36870,i__36871,new_link_37297,path_match_37296,node_37295,path,seq__36867__$1,temp__5804__auto__,map__36866,map__36866__$1,msg,updates,reload_info){
return (function (e){
var seq__37068_37298 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37070_37299 = null;
var count__37071_37300 = (0);
var i__37072_37301 = (0);
while(true){
if((i__37072_37301 < count__37071_37300)){
var map__37076_37302 = chunk__37070_37299.cljs$core$IIndexed$_nth$arity$2(null,i__37072_37301);
var map__37076_37303__$1 = cljs.core.__destructure_map(map__37076_37302);
var task_37304 = map__37076_37303__$1;
var fn_str_37305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37076_37303__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37076_37303__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37307 = goog.getObjectByName(fn_str_37305,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37306)].join(''));

(fn_obj_37307.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37307.cljs$core$IFn$_invoke$arity$2(path,new_link_37297) : fn_obj_37307.call(null,path,new_link_37297));


var G__37308 = seq__37068_37298;
var G__37309 = chunk__37070_37299;
var G__37310 = count__37071_37300;
var G__37311 = (i__37072_37301 + (1));
seq__37068_37298 = G__37308;
chunk__37070_37299 = G__37309;
count__37071_37300 = G__37310;
i__37072_37301 = G__37311;
continue;
} else {
var temp__5804__auto___37312__$1 = cljs.core.seq(seq__37068_37298);
if(temp__5804__auto___37312__$1){
var seq__37068_37313__$1 = temp__5804__auto___37312__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37068_37313__$1)){
var c__5568__auto___37314 = cljs.core.chunk_first(seq__37068_37313__$1);
var G__37315 = cljs.core.chunk_rest(seq__37068_37313__$1);
var G__37316 = c__5568__auto___37314;
var G__37317 = cljs.core.count(c__5568__auto___37314);
var G__37318 = (0);
seq__37068_37298 = G__37315;
chunk__37070_37299 = G__37316;
count__37071_37300 = G__37317;
i__37072_37301 = G__37318;
continue;
} else {
var map__37077_37319 = cljs.core.first(seq__37068_37313__$1);
var map__37077_37320__$1 = cljs.core.__destructure_map(map__37077_37319);
var task_37321 = map__37077_37320__$1;
var fn_str_37322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077_37320__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077_37320__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37324 = goog.getObjectByName(fn_str_37322,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37323)].join(''));

(fn_obj_37324.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37324.cljs$core$IFn$_invoke$arity$2(path,new_link_37297) : fn_obj_37324.call(null,path,new_link_37297));


var G__37325 = cljs.core.next(seq__37068_37313__$1);
var G__37326 = null;
var G__37327 = (0);
var G__37328 = (0);
seq__37068_37298 = G__37325;
chunk__37070_37299 = G__37326;
count__37071_37300 = G__37327;
i__37072_37301 = G__37328;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37295);
});})(seq__37035_37291,chunk__37039_37292,count__37040_37293,i__37041_37294,seq__36867,chunk__36869,count__36870,i__36871,new_link_37297,path_match_37296,node_37295,path,seq__36867__$1,temp__5804__auto__,map__36866,map__36866__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37296], 0));

goog.dom.insertSiblingAfter(new_link_37297,node_37295);


var G__37329 = seq__37035_37291;
var G__37330 = chunk__37039_37292;
var G__37331 = count__37040_37293;
var G__37332 = (i__37041_37294 + (1));
seq__37035_37291 = G__37329;
chunk__37039_37292 = G__37330;
count__37040_37293 = G__37331;
i__37041_37294 = G__37332;
continue;
} else {
var G__37333 = seq__37035_37291;
var G__37334 = chunk__37039_37292;
var G__37335 = count__37040_37293;
var G__37336 = (i__37041_37294 + (1));
seq__37035_37291 = G__37333;
chunk__37039_37292 = G__37334;
count__37040_37293 = G__37335;
i__37041_37294 = G__37336;
continue;
}
} else {
var G__37337 = seq__37035_37291;
var G__37338 = chunk__37039_37292;
var G__37339 = count__37040_37293;
var G__37340 = (i__37041_37294 + (1));
seq__37035_37291 = G__37337;
chunk__37039_37292 = G__37338;
count__37040_37293 = G__37339;
i__37041_37294 = G__37340;
continue;
}
} else {
var temp__5804__auto___37341__$1 = cljs.core.seq(seq__37035_37291);
if(temp__5804__auto___37341__$1){
var seq__37035_37342__$1 = temp__5804__auto___37341__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37035_37342__$1)){
var c__5568__auto___37343 = cljs.core.chunk_first(seq__37035_37342__$1);
var G__37344 = cljs.core.chunk_rest(seq__37035_37342__$1);
var G__37345 = c__5568__auto___37343;
var G__37346 = cljs.core.count(c__5568__auto___37343);
var G__37347 = (0);
seq__37035_37291 = G__37344;
chunk__37039_37292 = G__37345;
count__37040_37293 = G__37346;
i__37041_37294 = G__37347;
continue;
} else {
var node_37348 = cljs.core.first(seq__37035_37342__$1);
if(cljs.core.not(node_37348.shadow$old)){
var path_match_37349 = shadow.cljs.devtools.client.browser.match_paths(node_37348.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37349)){
var new_link_37350 = (function (){var G__37078 = node_37348.cloneNode(true);
G__37078.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37349),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37078;
})();
(node_37348.shadow$old = true);

(new_link_37350.onload = ((function (seq__37035_37291,chunk__37039_37292,count__37040_37293,i__37041_37294,seq__36867,chunk__36869,count__36870,i__36871,new_link_37350,path_match_37349,node_37348,seq__37035_37342__$1,temp__5804__auto___37341__$1,path,seq__36867__$1,temp__5804__auto__,map__36866,map__36866__$1,msg,updates,reload_info){
return (function (e){
var seq__37079_37351 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37081_37352 = null;
var count__37082_37353 = (0);
var i__37083_37354 = (0);
while(true){
if((i__37083_37354 < count__37082_37353)){
var map__37087_37355 = chunk__37081_37352.cljs$core$IIndexed$_nth$arity$2(null,i__37083_37354);
var map__37087_37356__$1 = cljs.core.__destructure_map(map__37087_37355);
var task_37357 = map__37087_37356__$1;
var fn_str_37358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37087_37356__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37087_37356__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37360 = goog.getObjectByName(fn_str_37358,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37359)].join(''));

(fn_obj_37360.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37360.cljs$core$IFn$_invoke$arity$2(path,new_link_37350) : fn_obj_37360.call(null,path,new_link_37350));


var G__37361 = seq__37079_37351;
var G__37362 = chunk__37081_37352;
var G__37363 = count__37082_37353;
var G__37364 = (i__37083_37354 + (1));
seq__37079_37351 = G__37361;
chunk__37081_37352 = G__37362;
count__37082_37353 = G__37363;
i__37083_37354 = G__37364;
continue;
} else {
var temp__5804__auto___37365__$2 = cljs.core.seq(seq__37079_37351);
if(temp__5804__auto___37365__$2){
var seq__37079_37366__$1 = temp__5804__auto___37365__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37079_37366__$1)){
var c__5568__auto___37367 = cljs.core.chunk_first(seq__37079_37366__$1);
var G__37368 = cljs.core.chunk_rest(seq__37079_37366__$1);
var G__37369 = c__5568__auto___37367;
var G__37370 = cljs.core.count(c__5568__auto___37367);
var G__37371 = (0);
seq__37079_37351 = G__37368;
chunk__37081_37352 = G__37369;
count__37082_37353 = G__37370;
i__37083_37354 = G__37371;
continue;
} else {
var map__37088_37372 = cljs.core.first(seq__37079_37366__$1);
var map__37088_37373__$1 = cljs.core.__destructure_map(map__37088_37372);
var task_37374 = map__37088_37373__$1;
var fn_str_37375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37088_37373__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37088_37373__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37377 = goog.getObjectByName(fn_str_37375,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37376)].join(''));

(fn_obj_37377.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37377.cljs$core$IFn$_invoke$arity$2(path,new_link_37350) : fn_obj_37377.call(null,path,new_link_37350));


var G__37378 = cljs.core.next(seq__37079_37366__$1);
var G__37379 = null;
var G__37380 = (0);
var G__37381 = (0);
seq__37079_37351 = G__37378;
chunk__37081_37352 = G__37379;
count__37082_37353 = G__37380;
i__37083_37354 = G__37381;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37348);
});})(seq__37035_37291,chunk__37039_37292,count__37040_37293,i__37041_37294,seq__36867,chunk__36869,count__36870,i__36871,new_link_37350,path_match_37349,node_37348,seq__37035_37342__$1,temp__5804__auto___37341__$1,path,seq__36867__$1,temp__5804__auto__,map__36866,map__36866__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37349], 0));

goog.dom.insertSiblingAfter(new_link_37350,node_37348);


var G__37382 = cljs.core.next(seq__37035_37342__$1);
var G__37383 = null;
var G__37384 = (0);
var G__37385 = (0);
seq__37035_37291 = G__37382;
chunk__37039_37292 = G__37383;
count__37040_37293 = G__37384;
i__37041_37294 = G__37385;
continue;
} else {
var G__37386 = cljs.core.next(seq__37035_37342__$1);
var G__37387 = null;
var G__37388 = (0);
var G__37389 = (0);
seq__37035_37291 = G__37386;
chunk__37039_37292 = G__37387;
count__37040_37293 = G__37388;
i__37041_37294 = G__37389;
continue;
}
} else {
var G__37390 = cljs.core.next(seq__37035_37342__$1);
var G__37391 = null;
var G__37392 = (0);
var G__37393 = (0);
seq__37035_37291 = G__37390;
chunk__37039_37292 = G__37391;
count__37040_37293 = G__37392;
i__37041_37294 = G__37393;
continue;
}
}
} else {
}
}
break;
}


var G__37394 = cljs.core.next(seq__36867__$1);
var G__37395 = null;
var G__37396 = (0);
var G__37397 = (0);
seq__36867 = G__37394;
chunk__36869 = G__37395;
count__36870 = G__37396;
i__36871 = G__37397;
continue;
} else {
var G__37398 = cljs.core.next(seq__36867__$1);
var G__37399 = null;
var G__37400 = (0);
var G__37401 = (0);
seq__36867 = G__37398;
chunk__36869 = G__37399;
count__36870 = G__37400;
i__36871 = G__37401;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37089){
var map__37090 = p__37089;
var map__37090__$1 = cljs.core.__destructure_map(map__37090);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37090__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37091){
var map__37092 = p__37091;
var map__37092__$1 = cljs.core.__destructure_map(map__37092);
var _ = map__37092__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37092__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37093,done,error){
var map__37094 = p__37093;
var map__37094__$1 = cljs.core.__destructure_map(map__37094);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37094__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37095,done,error){
var map__37096 = p__37095;
var map__37096__$1 = cljs.core.__destructure_map(map__37096);
var msg = map__37096__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37096__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37096__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37096__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37097){
var map__37098 = p__37097;
var map__37098__$1 = cljs.core.__destructure_map(map__37098);
var src = map__37098__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37098__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37099 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37099) : done.call(null,G__37099));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37100){
var map__37101 = p__37100;
var map__37101__$1 = cljs.core.__destructure_map(map__37101);
var msg__$1 = map__37101__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37101__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37102){var ex = e37102;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37103){
var map__37104 = p__37103;
var map__37104__$1 = cljs.core.__destructure_map(map__37104);
var env = map__37104__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37104__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37105){
var map__37106 = p__37105;
var map__37106__$1 = cljs.core.__destructure_map(map__37106);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37106__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37106__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37107){
var map__37108 = p__37107;
var map__37108__$1 = cljs.core.__destructure_map(map__37108);
var svc = map__37108__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37108__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
