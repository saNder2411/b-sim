goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38686 = arguments.length;
var i__5770__auto___38687 = (0);
while(true){
if((i__5770__auto___38687 < len__5769__auto___38686)){
args__5775__auto__.push((arguments[i__5770__auto___38687]));

var G__38689 = (i__5770__auto___38687 + (1));
i__5770__auto___38687 = G__38689;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37961){
var G__37962 = cljs.core.first(seq37961);
var seq37961__$1 = cljs.core.next(seq37961);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37962,seq37961__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37971 = cljs.core.seq(sources);
var chunk__37972 = null;
var count__37973 = (0);
var i__37974 = (0);
while(true){
if((i__37974 < count__37973)){
var map__37983 = chunk__37972.cljs$core$IIndexed$_nth$arity$2(null,i__37974);
var map__37983__$1 = cljs.core.__destructure_map(map__37983);
var src = map__37983__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37983__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37986){var e_38697 = e37986;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38697);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38697.message)].join('')));
}

var G__38699 = seq__37971;
var G__38701 = chunk__37972;
var G__38702 = count__37973;
var G__38703 = (i__37974 + (1));
seq__37971 = G__38699;
chunk__37972 = G__38701;
count__37973 = G__38702;
i__37974 = G__38703;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37971);
if(temp__5804__auto__){
var seq__37971__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37971__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37971__$1);
var G__38704 = cljs.core.chunk_rest(seq__37971__$1);
var G__38705 = c__5568__auto__;
var G__38706 = cljs.core.count(c__5568__auto__);
var G__38707 = (0);
seq__37971 = G__38704;
chunk__37972 = G__38705;
count__37973 = G__38706;
i__37974 = G__38707;
continue;
} else {
var map__37987 = cljs.core.first(seq__37971__$1);
var map__37987__$1 = cljs.core.__destructure_map(map__37987);
var src = map__37987__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37988){var e_38709 = e37988;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38709);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38709.message)].join('')));
}

var G__38712 = cljs.core.next(seq__37971__$1);
var G__38713 = null;
var G__38714 = (0);
var G__38715 = (0);
seq__37971 = G__38712;
chunk__37972 = G__38713;
count__37973 = G__38714;
i__37974 = G__38715;
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
var seq__37991 = cljs.core.seq(js_requires);
var chunk__37992 = null;
var count__37993 = (0);
var i__37994 = (0);
while(true){
if((i__37994 < count__37993)){
var js_ns = chunk__37992.cljs$core$IIndexed$_nth$arity$2(null,i__37994);
var require_str_38719 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38719);


var G__38720 = seq__37991;
var G__38721 = chunk__37992;
var G__38722 = count__37993;
var G__38723 = (i__37994 + (1));
seq__37991 = G__38720;
chunk__37992 = G__38721;
count__37993 = G__38722;
i__37994 = G__38723;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37991);
if(temp__5804__auto__){
var seq__37991__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37991__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37991__$1);
var G__38726 = cljs.core.chunk_rest(seq__37991__$1);
var G__38727 = c__5568__auto__;
var G__38728 = cljs.core.count(c__5568__auto__);
var G__38729 = (0);
seq__37991 = G__38726;
chunk__37992 = G__38727;
count__37993 = G__38728;
i__37994 = G__38729;
continue;
} else {
var js_ns = cljs.core.first(seq__37991__$1);
var require_str_38731 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38731);


var G__38733 = cljs.core.next(seq__37991__$1);
var G__38734 = null;
var G__38735 = (0);
var G__38736 = (0);
seq__37991 = G__38733;
chunk__37992 = G__38734;
count__37993 = G__38735;
i__37994 = G__38736;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37999){
var map__38000 = p__37999;
var map__38000__$1 = cljs.core.__destructure_map(map__38000);
var msg = map__38000__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38011(s__38012){
return (new cljs.core.LazySeq(null,(function (){
var s__38012__$1 = s__38012;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38012__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38036 = cljs.core.first(xs__6360__auto__);
var map__38036__$1 = cljs.core.__destructure_map(map__38036);
var src = map__38036__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38036__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38036__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38012__$1,map__38036,map__38036__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38000,map__38000__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38011_$_iter__38013(s__38014){
return (new cljs.core.LazySeq(null,((function (s__38012__$1,map__38036,map__38036__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38000,map__38000__$1,msg,info,reload_info){
return (function (){
var s__38014__$1 = s__38014;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38014__$1);
if(temp__5804__auto____$1){
var s__38014__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38014__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38014__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38016 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38015 = (0);
while(true){
if((i__38015 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38015);
cljs.core.chunk_append(b__38016,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38742 = (i__38015 + (1));
i__38015 = G__38742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38016),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38011_$_iter__38013(cljs.core.chunk_rest(s__38014__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38016),null);
}
} else {
var warning = cljs.core.first(s__38014__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38011_$_iter__38013(cljs.core.rest(s__38014__$2)));
}
} else {
return null;
}
break;
}
});})(s__38012__$1,map__38036,map__38036__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38000,map__38000__$1,msg,info,reload_info))
,null,null));
});})(s__38012__$1,map__38036,map__38036__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38000,map__38000__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38011(cljs.core.rest(s__38012__$1)));
} else {
var G__38743 = cljs.core.rest(s__38012__$1);
s__38012__$1 = G__38743;
continue;
}
} else {
var G__38744 = cljs.core.rest(s__38012__$1);
s__38012__$1 = G__38744;
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
var seq__38057_38745 = cljs.core.seq(warnings);
var chunk__38058_38746 = null;
var count__38059_38747 = (0);
var i__38060_38748 = (0);
while(true){
if((i__38060_38748 < count__38059_38747)){
var map__38063_38749 = chunk__38058_38746.cljs$core$IIndexed$_nth$arity$2(null,i__38060_38748);
var map__38063_38750__$1 = cljs.core.__destructure_map(map__38063_38749);
var w_38751 = map__38063_38750__$1;
var msg_38752__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38063_38750__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38063_38750__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38063_38750__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38063_38750__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38755)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38753),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38754),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38752__$1)].join(''));


var G__38757 = seq__38057_38745;
var G__38758 = chunk__38058_38746;
var G__38759 = count__38059_38747;
var G__38760 = (i__38060_38748 + (1));
seq__38057_38745 = G__38757;
chunk__38058_38746 = G__38758;
count__38059_38747 = G__38759;
i__38060_38748 = G__38760;
continue;
} else {
var temp__5804__auto___38761 = cljs.core.seq(seq__38057_38745);
if(temp__5804__auto___38761){
var seq__38057_38762__$1 = temp__5804__auto___38761;
if(cljs.core.chunked_seq_QMARK_(seq__38057_38762__$1)){
var c__5568__auto___38763 = cljs.core.chunk_first(seq__38057_38762__$1);
var G__38764 = cljs.core.chunk_rest(seq__38057_38762__$1);
var G__38765 = c__5568__auto___38763;
var G__38766 = cljs.core.count(c__5568__auto___38763);
var G__38767 = (0);
seq__38057_38745 = G__38764;
chunk__38058_38746 = G__38765;
count__38059_38747 = G__38766;
i__38060_38748 = G__38767;
continue;
} else {
var map__38064_38768 = cljs.core.first(seq__38057_38762__$1);
var map__38064_38769__$1 = cljs.core.__destructure_map(map__38064_38768);
var w_38770 = map__38064_38769__$1;
var msg_38771__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38064_38769__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38064_38769__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38064_38769__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38064_38769__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38774)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38772),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38773),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38771__$1)].join(''));


var G__38777 = cljs.core.next(seq__38057_38762__$1);
var G__38778 = null;
var G__38779 = (0);
var G__38780 = (0);
seq__38057_38745 = G__38777;
chunk__38058_38746 = G__38778;
count__38059_38747 = G__38779;
i__38060_38748 = G__38780;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37998_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37998_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38070){
var map__38071 = p__38070;
var map__38071__$1 = cljs.core.__destructure_map(map__38071);
var msg = map__38071__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38071__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38071__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38073 = cljs.core.seq(updates);
var chunk__38075 = null;
var count__38076 = (0);
var i__38077 = (0);
while(true){
if((i__38077 < count__38076)){
var path = chunk__38075.cljs$core$IIndexed$_nth$arity$2(null,i__38077);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38343_38788 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38347_38789 = null;
var count__38348_38790 = (0);
var i__38349_38791 = (0);
while(true){
if((i__38349_38791 < count__38348_38790)){
var node_38792 = chunk__38347_38789.cljs$core$IIndexed$_nth$arity$2(null,i__38349_38791);
if(cljs.core.not(node_38792.shadow$old)){
var path_match_38793 = shadow.cljs.devtools.client.browser.match_paths(node_38792.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38793)){
var new_link_38794 = (function (){var G__38406 = node_38792.cloneNode(true);
G__38406.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38793),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38406;
})();
(node_38792.shadow$old = true);

(new_link_38794.onload = ((function (seq__38343_38788,chunk__38347_38789,count__38348_38790,i__38349_38791,seq__38073,chunk__38075,count__38076,i__38077,new_link_38794,path_match_38793,node_38792,path,map__38071,map__38071__$1,msg,updates,reload_info){
return (function (e){
var seq__38407_38796 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38409_38797 = null;
var count__38410_38798 = (0);
var i__38411_38799 = (0);
while(true){
if((i__38411_38799 < count__38410_38798)){
var map__38424_38800 = chunk__38409_38797.cljs$core$IIndexed$_nth$arity$2(null,i__38411_38799);
var map__38424_38801__$1 = cljs.core.__destructure_map(map__38424_38800);
var task_38802 = map__38424_38801__$1;
var fn_str_38803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38424_38801__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38424_38801__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38805 = goog.getObjectByName(fn_str_38803,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38804)].join(''));

(fn_obj_38805.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38805.cljs$core$IFn$_invoke$arity$2(path,new_link_38794) : fn_obj_38805.call(null,path,new_link_38794));


var G__38806 = seq__38407_38796;
var G__38807 = chunk__38409_38797;
var G__38808 = count__38410_38798;
var G__38809 = (i__38411_38799 + (1));
seq__38407_38796 = G__38806;
chunk__38409_38797 = G__38807;
count__38410_38798 = G__38808;
i__38411_38799 = G__38809;
continue;
} else {
var temp__5804__auto___38810 = cljs.core.seq(seq__38407_38796);
if(temp__5804__auto___38810){
var seq__38407_38811__$1 = temp__5804__auto___38810;
if(cljs.core.chunked_seq_QMARK_(seq__38407_38811__$1)){
var c__5568__auto___38812 = cljs.core.chunk_first(seq__38407_38811__$1);
var G__38813 = cljs.core.chunk_rest(seq__38407_38811__$1);
var G__38814 = c__5568__auto___38812;
var G__38815 = cljs.core.count(c__5568__auto___38812);
var G__38816 = (0);
seq__38407_38796 = G__38813;
chunk__38409_38797 = G__38814;
count__38410_38798 = G__38815;
i__38411_38799 = G__38816;
continue;
} else {
var map__38430_38817 = cljs.core.first(seq__38407_38811__$1);
var map__38430_38818__$1 = cljs.core.__destructure_map(map__38430_38817);
var task_38819 = map__38430_38818__$1;
var fn_str_38820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38430_38818__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38430_38818__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38822 = goog.getObjectByName(fn_str_38820,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38821)].join(''));

(fn_obj_38822.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38822.cljs$core$IFn$_invoke$arity$2(path,new_link_38794) : fn_obj_38822.call(null,path,new_link_38794));


var G__38823 = cljs.core.next(seq__38407_38811__$1);
var G__38824 = null;
var G__38825 = (0);
var G__38826 = (0);
seq__38407_38796 = G__38823;
chunk__38409_38797 = G__38824;
count__38410_38798 = G__38825;
i__38411_38799 = G__38826;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38792);
});})(seq__38343_38788,chunk__38347_38789,count__38348_38790,i__38349_38791,seq__38073,chunk__38075,count__38076,i__38077,new_link_38794,path_match_38793,node_38792,path,map__38071,map__38071__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38793], 0));

goog.dom.insertSiblingAfter(new_link_38794,node_38792);


var G__38829 = seq__38343_38788;
var G__38830 = chunk__38347_38789;
var G__38831 = count__38348_38790;
var G__38832 = (i__38349_38791 + (1));
seq__38343_38788 = G__38829;
chunk__38347_38789 = G__38830;
count__38348_38790 = G__38831;
i__38349_38791 = G__38832;
continue;
} else {
var G__38834 = seq__38343_38788;
var G__38835 = chunk__38347_38789;
var G__38837 = count__38348_38790;
var G__38838 = (i__38349_38791 + (1));
seq__38343_38788 = G__38834;
chunk__38347_38789 = G__38835;
count__38348_38790 = G__38837;
i__38349_38791 = G__38838;
continue;
}
} else {
var G__38839 = seq__38343_38788;
var G__38840 = chunk__38347_38789;
var G__38841 = count__38348_38790;
var G__38842 = (i__38349_38791 + (1));
seq__38343_38788 = G__38839;
chunk__38347_38789 = G__38840;
count__38348_38790 = G__38841;
i__38349_38791 = G__38842;
continue;
}
} else {
var temp__5804__auto___38843 = cljs.core.seq(seq__38343_38788);
if(temp__5804__auto___38843){
var seq__38343_38844__$1 = temp__5804__auto___38843;
if(cljs.core.chunked_seq_QMARK_(seq__38343_38844__$1)){
var c__5568__auto___38845 = cljs.core.chunk_first(seq__38343_38844__$1);
var G__38846 = cljs.core.chunk_rest(seq__38343_38844__$1);
var G__38847 = c__5568__auto___38845;
var G__38848 = cljs.core.count(c__5568__auto___38845);
var G__38849 = (0);
seq__38343_38788 = G__38846;
chunk__38347_38789 = G__38847;
count__38348_38790 = G__38848;
i__38349_38791 = G__38849;
continue;
} else {
var node_38850 = cljs.core.first(seq__38343_38844__$1);
if(cljs.core.not(node_38850.shadow$old)){
var path_match_38851 = shadow.cljs.devtools.client.browser.match_paths(node_38850.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38851)){
var new_link_38853 = (function (){var G__38436 = node_38850.cloneNode(true);
G__38436.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38851),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38436;
})();
(node_38850.shadow$old = true);

(new_link_38853.onload = ((function (seq__38343_38788,chunk__38347_38789,count__38348_38790,i__38349_38791,seq__38073,chunk__38075,count__38076,i__38077,new_link_38853,path_match_38851,node_38850,seq__38343_38844__$1,temp__5804__auto___38843,path,map__38071,map__38071__$1,msg,updates,reload_info){
return (function (e){
var seq__38437_38856 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38439_38857 = null;
var count__38440_38858 = (0);
var i__38441_38859 = (0);
while(true){
if((i__38441_38859 < count__38440_38858)){
var map__38451_38862 = chunk__38439_38857.cljs$core$IIndexed$_nth$arity$2(null,i__38441_38859);
var map__38451_38863__$1 = cljs.core.__destructure_map(map__38451_38862);
var task_38864 = map__38451_38863__$1;
var fn_str_38865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38451_38863__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38451_38863__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38867 = goog.getObjectByName(fn_str_38865,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38866)].join(''));

(fn_obj_38867.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38867.cljs$core$IFn$_invoke$arity$2(path,new_link_38853) : fn_obj_38867.call(null,path,new_link_38853));


var G__38868 = seq__38437_38856;
var G__38869 = chunk__38439_38857;
var G__38870 = count__38440_38858;
var G__38871 = (i__38441_38859 + (1));
seq__38437_38856 = G__38868;
chunk__38439_38857 = G__38869;
count__38440_38858 = G__38870;
i__38441_38859 = G__38871;
continue;
} else {
var temp__5804__auto___38872__$1 = cljs.core.seq(seq__38437_38856);
if(temp__5804__auto___38872__$1){
var seq__38437_38873__$1 = temp__5804__auto___38872__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38437_38873__$1)){
var c__5568__auto___38874 = cljs.core.chunk_first(seq__38437_38873__$1);
var G__38875 = cljs.core.chunk_rest(seq__38437_38873__$1);
var G__38876 = c__5568__auto___38874;
var G__38877 = cljs.core.count(c__5568__auto___38874);
var G__38878 = (0);
seq__38437_38856 = G__38875;
chunk__38439_38857 = G__38876;
count__38440_38858 = G__38877;
i__38441_38859 = G__38878;
continue;
} else {
var map__38456_38879 = cljs.core.first(seq__38437_38873__$1);
var map__38456_38880__$1 = cljs.core.__destructure_map(map__38456_38879);
var task_38881 = map__38456_38880__$1;
var fn_str_38882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38456_38880__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38456_38880__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38884 = goog.getObjectByName(fn_str_38882,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38883)].join(''));

(fn_obj_38884.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38884.cljs$core$IFn$_invoke$arity$2(path,new_link_38853) : fn_obj_38884.call(null,path,new_link_38853));


var G__38886 = cljs.core.next(seq__38437_38873__$1);
var G__38887 = null;
var G__38888 = (0);
var G__38889 = (0);
seq__38437_38856 = G__38886;
chunk__38439_38857 = G__38887;
count__38440_38858 = G__38888;
i__38441_38859 = G__38889;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38850);
});})(seq__38343_38788,chunk__38347_38789,count__38348_38790,i__38349_38791,seq__38073,chunk__38075,count__38076,i__38077,new_link_38853,path_match_38851,node_38850,seq__38343_38844__$1,temp__5804__auto___38843,path,map__38071,map__38071__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38851], 0));

goog.dom.insertSiblingAfter(new_link_38853,node_38850);


var G__38890 = cljs.core.next(seq__38343_38844__$1);
var G__38891 = null;
var G__38892 = (0);
var G__38893 = (0);
seq__38343_38788 = G__38890;
chunk__38347_38789 = G__38891;
count__38348_38790 = G__38892;
i__38349_38791 = G__38893;
continue;
} else {
var G__38894 = cljs.core.next(seq__38343_38844__$1);
var G__38895 = null;
var G__38896 = (0);
var G__38897 = (0);
seq__38343_38788 = G__38894;
chunk__38347_38789 = G__38895;
count__38348_38790 = G__38896;
i__38349_38791 = G__38897;
continue;
}
} else {
var G__38898 = cljs.core.next(seq__38343_38844__$1);
var G__38899 = null;
var G__38900 = (0);
var G__38901 = (0);
seq__38343_38788 = G__38898;
chunk__38347_38789 = G__38899;
count__38348_38790 = G__38900;
i__38349_38791 = G__38901;
continue;
}
}
} else {
}
}
break;
}


var G__38902 = seq__38073;
var G__38903 = chunk__38075;
var G__38904 = count__38076;
var G__38905 = (i__38077 + (1));
seq__38073 = G__38902;
chunk__38075 = G__38903;
count__38076 = G__38904;
i__38077 = G__38905;
continue;
} else {
var G__38906 = seq__38073;
var G__38907 = chunk__38075;
var G__38908 = count__38076;
var G__38909 = (i__38077 + (1));
seq__38073 = G__38906;
chunk__38075 = G__38907;
count__38076 = G__38908;
i__38077 = G__38909;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38073);
if(temp__5804__auto__){
var seq__38073__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38073__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38073__$1);
var G__38910 = cljs.core.chunk_rest(seq__38073__$1);
var G__38911 = c__5568__auto__;
var G__38912 = cljs.core.count(c__5568__auto__);
var G__38913 = (0);
seq__38073 = G__38910;
chunk__38075 = G__38911;
count__38076 = G__38912;
i__38077 = G__38913;
continue;
} else {
var path = cljs.core.first(seq__38073__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38465_38914 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38469_38915 = null;
var count__38470_38916 = (0);
var i__38471_38917 = (0);
while(true){
if((i__38471_38917 < count__38470_38916)){
var node_38919 = chunk__38469_38915.cljs$core$IIndexed$_nth$arity$2(null,i__38471_38917);
if(cljs.core.not(node_38919.shadow$old)){
var path_match_38921 = shadow.cljs.devtools.client.browser.match_paths(node_38919.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38921)){
var new_link_38922 = (function (){var G__38539 = node_38919.cloneNode(true);
G__38539.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38921),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38539;
})();
(node_38919.shadow$old = true);

(new_link_38922.onload = ((function (seq__38465_38914,chunk__38469_38915,count__38470_38916,i__38471_38917,seq__38073,chunk__38075,count__38076,i__38077,new_link_38922,path_match_38921,node_38919,path,seq__38073__$1,temp__5804__auto__,map__38071,map__38071__$1,msg,updates,reload_info){
return (function (e){
var seq__38541_38925 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38543_38926 = null;
var count__38544_38927 = (0);
var i__38545_38928 = (0);
while(true){
if((i__38545_38928 < count__38544_38927)){
var map__38556_38929 = chunk__38543_38926.cljs$core$IIndexed$_nth$arity$2(null,i__38545_38928);
var map__38556_38930__$1 = cljs.core.__destructure_map(map__38556_38929);
var task_38931 = map__38556_38930__$1;
var fn_str_38932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38556_38930__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38556_38930__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38934 = goog.getObjectByName(fn_str_38932,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38933)].join(''));

(fn_obj_38934.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38934.cljs$core$IFn$_invoke$arity$2(path,new_link_38922) : fn_obj_38934.call(null,path,new_link_38922));


var G__38935 = seq__38541_38925;
var G__38936 = chunk__38543_38926;
var G__38937 = count__38544_38927;
var G__38938 = (i__38545_38928 + (1));
seq__38541_38925 = G__38935;
chunk__38543_38926 = G__38936;
count__38544_38927 = G__38937;
i__38545_38928 = G__38938;
continue;
} else {
var temp__5804__auto___38939__$1 = cljs.core.seq(seq__38541_38925);
if(temp__5804__auto___38939__$1){
var seq__38541_38941__$1 = temp__5804__auto___38939__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38541_38941__$1)){
var c__5568__auto___38942 = cljs.core.chunk_first(seq__38541_38941__$1);
var G__38943 = cljs.core.chunk_rest(seq__38541_38941__$1);
var G__38944 = c__5568__auto___38942;
var G__38945 = cljs.core.count(c__5568__auto___38942);
var G__38946 = (0);
seq__38541_38925 = G__38943;
chunk__38543_38926 = G__38944;
count__38544_38927 = G__38945;
i__38545_38928 = G__38946;
continue;
} else {
var map__38564_38947 = cljs.core.first(seq__38541_38941__$1);
var map__38564_38948__$1 = cljs.core.__destructure_map(map__38564_38947);
var task_38949 = map__38564_38948__$1;
var fn_str_38950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38564_38948__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38564_38948__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38952 = goog.getObjectByName(fn_str_38950,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38951)].join(''));

(fn_obj_38952.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38952.cljs$core$IFn$_invoke$arity$2(path,new_link_38922) : fn_obj_38952.call(null,path,new_link_38922));


var G__38953 = cljs.core.next(seq__38541_38941__$1);
var G__38954 = null;
var G__38955 = (0);
var G__38956 = (0);
seq__38541_38925 = G__38953;
chunk__38543_38926 = G__38954;
count__38544_38927 = G__38955;
i__38545_38928 = G__38956;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38919);
});})(seq__38465_38914,chunk__38469_38915,count__38470_38916,i__38471_38917,seq__38073,chunk__38075,count__38076,i__38077,new_link_38922,path_match_38921,node_38919,path,seq__38073__$1,temp__5804__auto__,map__38071,map__38071__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38921], 0));

goog.dom.insertSiblingAfter(new_link_38922,node_38919);


var G__38959 = seq__38465_38914;
var G__38960 = chunk__38469_38915;
var G__38961 = count__38470_38916;
var G__38962 = (i__38471_38917 + (1));
seq__38465_38914 = G__38959;
chunk__38469_38915 = G__38960;
count__38470_38916 = G__38961;
i__38471_38917 = G__38962;
continue;
} else {
var G__38963 = seq__38465_38914;
var G__38964 = chunk__38469_38915;
var G__38965 = count__38470_38916;
var G__38966 = (i__38471_38917 + (1));
seq__38465_38914 = G__38963;
chunk__38469_38915 = G__38964;
count__38470_38916 = G__38965;
i__38471_38917 = G__38966;
continue;
}
} else {
var G__38967 = seq__38465_38914;
var G__38968 = chunk__38469_38915;
var G__38969 = count__38470_38916;
var G__38970 = (i__38471_38917 + (1));
seq__38465_38914 = G__38967;
chunk__38469_38915 = G__38968;
count__38470_38916 = G__38969;
i__38471_38917 = G__38970;
continue;
}
} else {
var temp__5804__auto___38973__$1 = cljs.core.seq(seq__38465_38914);
if(temp__5804__auto___38973__$1){
var seq__38465_38974__$1 = temp__5804__auto___38973__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38465_38974__$1)){
var c__5568__auto___38975 = cljs.core.chunk_first(seq__38465_38974__$1);
var G__38976 = cljs.core.chunk_rest(seq__38465_38974__$1);
var G__38977 = c__5568__auto___38975;
var G__38978 = cljs.core.count(c__5568__auto___38975);
var G__38979 = (0);
seq__38465_38914 = G__38976;
chunk__38469_38915 = G__38977;
count__38470_38916 = G__38978;
i__38471_38917 = G__38979;
continue;
} else {
var node_38980 = cljs.core.first(seq__38465_38974__$1);
if(cljs.core.not(node_38980.shadow$old)){
var path_match_38981 = shadow.cljs.devtools.client.browser.match_paths(node_38980.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38981)){
var new_link_38982 = (function (){var G__38575 = node_38980.cloneNode(true);
G__38575.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38981),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38575;
})();
(node_38980.shadow$old = true);

(new_link_38982.onload = ((function (seq__38465_38914,chunk__38469_38915,count__38470_38916,i__38471_38917,seq__38073,chunk__38075,count__38076,i__38077,new_link_38982,path_match_38981,node_38980,seq__38465_38974__$1,temp__5804__auto___38973__$1,path,seq__38073__$1,temp__5804__auto__,map__38071,map__38071__$1,msg,updates,reload_info){
return (function (e){
var seq__38577_38984 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38579_38985 = null;
var count__38580_38986 = (0);
var i__38581_38987 = (0);
while(true){
if((i__38581_38987 < count__38580_38986)){
var map__38595_38988 = chunk__38579_38985.cljs$core$IIndexed$_nth$arity$2(null,i__38581_38987);
var map__38595_38989__$1 = cljs.core.__destructure_map(map__38595_38988);
var task_38990 = map__38595_38989__$1;
var fn_str_38991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38595_38989__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38595_38989__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38994 = goog.getObjectByName(fn_str_38991,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38992)].join(''));

(fn_obj_38994.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38994.cljs$core$IFn$_invoke$arity$2(path,new_link_38982) : fn_obj_38994.call(null,path,new_link_38982));


var G__38996 = seq__38577_38984;
var G__38997 = chunk__38579_38985;
var G__38998 = count__38580_38986;
var G__38999 = (i__38581_38987 + (1));
seq__38577_38984 = G__38996;
chunk__38579_38985 = G__38997;
count__38580_38986 = G__38998;
i__38581_38987 = G__38999;
continue;
} else {
var temp__5804__auto___39000__$2 = cljs.core.seq(seq__38577_38984);
if(temp__5804__auto___39000__$2){
var seq__38577_39003__$1 = temp__5804__auto___39000__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38577_39003__$1)){
var c__5568__auto___39004 = cljs.core.chunk_first(seq__38577_39003__$1);
var G__39005 = cljs.core.chunk_rest(seq__38577_39003__$1);
var G__39006 = c__5568__auto___39004;
var G__39007 = cljs.core.count(c__5568__auto___39004);
var G__39008 = (0);
seq__38577_38984 = G__39005;
chunk__38579_38985 = G__39006;
count__38580_38986 = G__39007;
i__38581_38987 = G__39008;
continue;
} else {
var map__38603_39009 = cljs.core.first(seq__38577_39003__$1);
var map__38603_39010__$1 = cljs.core.__destructure_map(map__38603_39009);
var task_39011 = map__38603_39010__$1;
var fn_str_39012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38603_39010__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38603_39010__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39014 = goog.getObjectByName(fn_str_39012,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39013)].join(''));

(fn_obj_39014.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39014.cljs$core$IFn$_invoke$arity$2(path,new_link_38982) : fn_obj_39014.call(null,path,new_link_38982));


var G__39015 = cljs.core.next(seq__38577_39003__$1);
var G__39016 = null;
var G__39017 = (0);
var G__39018 = (0);
seq__38577_38984 = G__39015;
chunk__38579_38985 = G__39016;
count__38580_38986 = G__39017;
i__38581_38987 = G__39018;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38980);
});})(seq__38465_38914,chunk__38469_38915,count__38470_38916,i__38471_38917,seq__38073,chunk__38075,count__38076,i__38077,new_link_38982,path_match_38981,node_38980,seq__38465_38974__$1,temp__5804__auto___38973__$1,path,seq__38073__$1,temp__5804__auto__,map__38071,map__38071__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38981], 0));

goog.dom.insertSiblingAfter(new_link_38982,node_38980);


var G__39019 = cljs.core.next(seq__38465_38974__$1);
var G__39020 = null;
var G__39021 = (0);
var G__39022 = (0);
seq__38465_38914 = G__39019;
chunk__38469_38915 = G__39020;
count__38470_38916 = G__39021;
i__38471_38917 = G__39022;
continue;
} else {
var G__39024 = cljs.core.next(seq__38465_38974__$1);
var G__39025 = null;
var G__39026 = (0);
var G__39027 = (0);
seq__38465_38914 = G__39024;
chunk__38469_38915 = G__39025;
count__38470_38916 = G__39026;
i__38471_38917 = G__39027;
continue;
}
} else {
var G__39028 = cljs.core.next(seq__38465_38974__$1);
var G__39029 = null;
var G__39030 = (0);
var G__39031 = (0);
seq__38465_38914 = G__39028;
chunk__38469_38915 = G__39029;
count__38470_38916 = G__39030;
i__38471_38917 = G__39031;
continue;
}
}
} else {
}
}
break;
}


var G__39032 = cljs.core.next(seq__38073__$1);
var G__39033 = null;
var G__39034 = (0);
var G__39035 = (0);
seq__38073 = G__39032;
chunk__38075 = G__39033;
count__38076 = G__39034;
i__38077 = G__39035;
continue;
} else {
var G__39036 = cljs.core.next(seq__38073__$1);
var G__39037 = null;
var G__39038 = (0);
var G__39039 = (0);
seq__38073 = G__39036;
chunk__38075 = G__39037;
count__38076 = G__39038;
i__38077 = G__39039;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38614){
var map__38617 = p__38614;
var map__38617__$1 = cljs.core.__destructure_map(map__38617);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38617__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38633){
var map__38634 = p__38633;
var map__38634__$1 = cljs.core.__destructure_map(map__38634);
var _ = map__38634__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38636,done,error){
var map__38637 = p__38636;
var map__38637__$1 = cljs.core.__destructure_map(map__38637);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38637__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38642,done,error){
var map__38643 = p__38642;
var map__38643__$1 = cljs.core.__destructure_map(map__38643);
var msg = map__38643__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38644){
var map__38645 = p__38644;
var map__38645__$1 = cljs.core.__destructure_map(map__38645);
var src = map__38645__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38645__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38646 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38646) : done.call(null,G__38646));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38648){
var map__38649 = p__38648;
var map__38649__$1 = cljs.core.__destructure_map(map__38649);
var msg__$1 = map__38649__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38649__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38652){var ex = e38652;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38654){
var map__38656 = p__38654;
var map__38656__$1 = cljs.core.__destructure_map(map__38656);
var env = map__38656__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38656__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38670){
var map__38671 = p__38670;
var map__38671__$1 = cljs.core.__destructure_map(map__38671);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38671__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38671__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__38675){
var map__38676 = p__38675;
var map__38676__$1 = cljs.core.__destructure_map(map__38676);
var svc = map__38676__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38676__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
