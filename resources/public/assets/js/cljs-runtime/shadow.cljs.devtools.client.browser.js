goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41707 = arguments.length;
var i__5770__auto___41708 = (0);
while(true){
if((i__5770__auto___41708 < len__5769__auto___41707)){
args__5775__auto__.push((arguments[i__5770__auto___41708]));

var G__41709 = (i__5770__auto___41708 + (1));
i__5770__auto___41708 = G__41709;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40909){
var G__40910 = cljs.core.first(seq40909);
var seq40909__$1 = cljs.core.next(seq40909);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40910,seq40909__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40948 = cljs.core.seq(sources);
var chunk__40949 = null;
var count__40950 = (0);
var i__40951 = (0);
while(true){
if((i__40951 < count__40950)){
var map__40979 = chunk__40949.cljs$core$IIndexed$_nth$arity$2(null,i__40951);
var map__40979__$1 = cljs.core.__destructure_map(map__40979);
var src = map__40979__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40979__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40979__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40979__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40979__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40980){var e_41714 = e40980;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41714);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41714.message)].join('')));
}

var G__41716 = seq__40948;
var G__41717 = chunk__40949;
var G__41718 = count__40950;
var G__41719 = (i__40951 + (1));
seq__40948 = G__41716;
chunk__40949 = G__41717;
count__40950 = G__41718;
i__40951 = G__41719;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40948);
if(temp__5804__auto__){
var seq__40948__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40948__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40948__$1);
var G__41722 = cljs.core.chunk_rest(seq__40948__$1);
var G__41723 = c__5568__auto__;
var G__41724 = cljs.core.count(c__5568__auto__);
var G__41725 = (0);
seq__40948 = G__41722;
chunk__40949 = G__41723;
count__40950 = G__41724;
i__40951 = G__41725;
continue;
} else {
var map__40985 = cljs.core.first(seq__40948__$1);
var map__40985__$1 = cljs.core.__destructure_map(map__40985);
var src = map__40985__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40985__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40986){var e_41729 = e40986;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41729);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41729.message)].join('')));
}

var G__41730 = cljs.core.next(seq__40948__$1);
var G__41731 = null;
var G__41732 = (0);
var G__41733 = (0);
seq__40948 = G__41730;
chunk__40949 = G__41731;
count__40950 = G__41732;
i__40951 = G__41733;
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
var seq__40989 = cljs.core.seq(js_requires);
var chunk__40990 = null;
var count__40991 = (0);
var i__40992 = (0);
while(true){
if((i__40992 < count__40991)){
var js_ns = chunk__40990.cljs$core$IIndexed$_nth$arity$2(null,i__40992);
var require_str_41736 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41736);


var G__41737 = seq__40989;
var G__41738 = chunk__40990;
var G__41739 = count__40991;
var G__41740 = (i__40992 + (1));
seq__40989 = G__41737;
chunk__40990 = G__41738;
count__40991 = G__41739;
i__40992 = G__41740;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40989);
if(temp__5804__auto__){
var seq__40989__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40989__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40989__$1);
var G__41744 = cljs.core.chunk_rest(seq__40989__$1);
var G__41745 = c__5568__auto__;
var G__41746 = cljs.core.count(c__5568__auto__);
var G__41747 = (0);
seq__40989 = G__41744;
chunk__40990 = G__41745;
count__40991 = G__41746;
i__40992 = G__41747;
continue;
} else {
var js_ns = cljs.core.first(seq__40989__$1);
var require_str_41748 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41748);


var G__41749 = cljs.core.next(seq__40989__$1);
var G__41750 = null;
var G__41751 = (0);
var G__41752 = (0);
seq__40989 = G__41749;
chunk__40990 = G__41750;
count__40991 = G__41751;
i__40992 = G__41752;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40995){
var map__40999 = p__40995;
var map__40999__$1 = cljs.core.__destructure_map(map__40999);
var msg = map__40999__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40999__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40999__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41000(s__41001){
return (new cljs.core.LazySeq(null,(function (){
var s__41001__$1 = s__41001;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41001__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__41006 = cljs.core.first(xs__6360__auto__);
var map__41006__$1 = cljs.core.__destructure_map(map__41006);
var src = map__41006__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__41001__$1,map__41006,map__41006__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40999,map__40999__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41000_$_iter__41002(s__41003){
return (new cljs.core.LazySeq(null,((function (s__41001__$1,map__41006,map__41006__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40999,map__40999__$1,msg,info,reload_info){
return (function (){
var s__41003__$1 = s__41003;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__41003__$1);
if(temp__5804__auto____$1){
var s__41003__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41003__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41003__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41005 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41004 = (0);
while(true){
if((i__41004 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__41004);
cljs.core.chunk_append(b__41005,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41760 = (i__41004 + (1));
i__41004 = G__41760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41005),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41000_$_iter__41002(cljs.core.chunk_rest(s__41003__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41005),null);
}
} else {
var warning = cljs.core.first(s__41003__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41000_$_iter__41002(cljs.core.rest(s__41003__$2)));
}
} else {
return null;
}
break;
}
});})(s__41001__$1,map__41006,map__41006__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40999,map__40999__$1,msg,info,reload_info))
,null,null));
});})(s__41001__$1,map__41006,map__41006__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__40999,map__40999__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41000(cljs.core.rest(s__41001__$1)));
} else {
var G__41764 = cljs.core.rest(s__41001__$1);
s__41001__$1 = G__41764;
continue;
}
} else {
var G__41765 = cljs.core.rest(s__41001__$1);
s__41001__$1 = G__41765;
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
var seq__41007_41767 = cljs.core.seq(warnings);
var chunk__41008_41768 = null;
var count__41009_41769 = (0);
var i__41010_41770 = (0);
while(true){
if((i__41010_41770 < count__41009_41769)){
var map__41013_41771 = chunk__41008_41768.cljs$core$IIndexed$_nth$arity$2(null,i__41010_41770);
var map__41013_41772__$1 = cljs.core.__destructure_map(map__41013_41771);
var w_41773 = map__41013_41772__$1;
var msg_41774__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41013_41772__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41013_41772__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41013_41772__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41013_41772__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41777)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41775),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41776),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41774__$1)].join(''));


var G__41779 = seq__41007_41767;
var G__41780 = chunk__41008_41768;
var G__41781 = count__41009_41769;
var G__41782 = (i__41010_41770 + (1));
seq__41007_41767 = G__41779;
chunk__41008_41768 = G__41780;
count__41009_41769 = G__41781;
i__41010_41770 = G__41782;
continue;
} else {
var temp__5804__auto___41785 = cljs.core.seq(seq__41007_41767);
if(temp__5804__auto___41785){
var seq__41007_41786__$1 = temp__5804__auto___41785;
if(cljs.core.chunked_seq_QMARK_(seq__41007_41786__$1)){
var c__5568__auto___41787 = cljs.core.chunk_first(seq__41007_41786__$1);
var G__41788 = cljs.core.chunk_rest(seq__41007_41786__$1);
var G__41789 = c__5568__auto___41787;
var G__41790 = cljs.core.count(c__5568__auto___41787);
var G__41791 = (0);
seq__41007_41767 = G__41788;
chunk__41008_41768 = G__41789;
count__41009_41769 = G__41790;
i__41010_41770 = G__41791;
continue;
} else {
var map__41016_41793 = cljs.core.first(seq__41007_41786__$1);
var map__41016_41794__$1 = cljs.core.__destructure_map(map__41016_41793);
var w_41795 = map__41016_41794__$1;
var msg_41796__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41016_41794__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41016_41794__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41016_41794__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41016_41794__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41799)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41797),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41798),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41796__$1)].join(''));


var G__41801 = cljs.core.next(seq__41007_41786__$1);
var G__41802 = null;
var G__41803 = (0);
var G__41804 = (0);
seq__41007_41767 = G__41801;
chunk__41008_41768 = G__41802;
count__41009_41769 = G__41803;
i__41010_41770 = G__41804;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40994_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40994_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41042){
var map__41043 = p__41042;
var map__41043__$1 = cljs.core.__destructure_map(map__41043);
var msg = map__41043__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41043__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41043__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__41044 = cljs.core.seq(updates);
var chunk__41046 = null;
var count__41047 = (0);
var i__41048 = (0);
while(true){
if((i__41048 < count__41047)){
var path = chunk__41046.cljs$core$IIndexed$_nth$arity$2(null,i__41048);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41286_41809 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41290_41810 = null;
var count__41291_41811 = (0);
var i__41292_41812 = (0);
while(true){
if((i__41292_41812 < count__41291_41811)){
var node_41814 = chunk__41290_41810.cljs$core$IIndexed$_nth$arity$2(null,i__41292_41812);
if(cljs.core.not(node_41814.shadow$old)){
var path_match_41815 = shadow.cljs.devtools.client.browser.match_paths(node_41814.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41815)){
var new_link_41816 = (function (){var G__41330 = node_41814.cloneNode(true);
G__41330.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41815),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41330;
})();
(node_41814.shadow$old = true);

(new_link_41816.onload = ((function (seq__41286_41809,chunk__41290_41810,count__41291_41811,i__41292_41812,seq__41044,chunk__41046,count__41047,i__41048,new_link_41816,path_match_41815,node_41814,path,map__41043,map__41043__$1,msg,updates,reload_info){
return (function (e){
var seq__41331_41817 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41333_41818 = null;
var count__41334_41819 = (0);
var i__41335_41820 = (0);
while(true){
if((i__41335_41820 < count__41334_41819)){
var map__41339_41821 = chunk__41333_41818.cljs$core$IIndexed$_nth$arity$2(null,i__41335_41820);
var map__41339_41822__$1 = cljs.core.__destructure_map(map__41339_41821);
var task_41823 = map__41339_41822__$1;
var fn_str_41824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41339_41822__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41339_41822__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41826 = goog.getObjectByName(fn_str_41824,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41825)].join(''));

(fn_obj_41826.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41826.cljs$core$IFn$_invoke$arity$2(path,new_link_41816) : fn_obj_41826.call(null,path,new_link_41816));


var G__41828 = seq__41331_41817;
var G__41829 = chunk__41333_41818;
var G__41830 = count__41334_41819;
var G__41831 = (i__41335_41820 + (1));
seq__41331_41817 = G__41828;
chunk__41333_41818 = G__41829;
count__41334_41819 = G__41830;
i__41335_41820 = G__41831;
continue;
} else {
var temp__5804__auto___41833 = cljs.core.seq(seq__41331_41817);
if(temp__5804__auto___41833){
var seq__41331_41834__$1 = temp__5804__auto___41833;
if(cljs.core.chunked_seq_QMARK_(seq__41331_41834__$1)){
var c__5568__auto___41835 = cljs.core.chunk_first(seq__41331_41834__$1);
var G__41836 = cljs.core.chunk_rest(seq__41331_41834__$1);
var G__41837 = c__5568__auto___41835;
var G__41838 = cljs.core.count(c__5568__auto___41835);
var G__41839 = (0);
seq__41331_41817 = G__41836;
chunk__41333_41818 = G__41837;
count__41334_41819 = G__41838;
i__41335_41820 = G__41839;
continue;
} else {
var map__41340_41841 = cljs.core.first(seq__41331_41834__$1);
var map__41340_41842__$1 = cljs.core.__destructure_map(map__41340_41841);
var task_41843 = map__41340_41842__$1;
var fn_str_41844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41340_41842__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41340_41842__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41846 = goog.getObjectByName(fn_str_41844,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41845)].join(''));

(fn_obj_41846.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41846.cljs$core$IFn$_invoke$arity$2(path,new_link_41816) : fn_obj_41846.call(null,path,new_link_41816));


var G__41847 = cljs.core.next(seq__41331_41834__$1);
var G__41848 = null;
var G__41849 = (0);
var G__41850 = (0);
seq__41331_41817 = G__41847;
chunk__41333_41818 = G__41848;
count__41334_41819 = G__41849;
i__41335_41820 = G__41850;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41814);
});})(seq__41286_41809,chunk__41290_41810,count__41291_41811,i__41292_41812,seq__41044,chunk__41046,count__41047,i__41048,new_link_41816,path_match_41815,node_41814,path,map__41043,map__41043__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41815], 0));

goog.dom.insertSiblingAfter(new_link_41816,node_41814);


var G__41854 = seq__41286_41809;
var G__41855 = chunk__41290_41810;
var G__41856 = count__41291_41811;
var G__41857 = (i__41292_41812 + (1));
seq__41286_41809 = G__41854;
chunk__41290_41810 = G__41855;
count__41291_41811 = G__41856;
i__41292_41812 = G__41857;
continue;
} else {
var G__41858 = seq__41286_41809;
var G__41859 = chunk__41290_41810;
var G__41860 = count__41291_41811;
var G__41861 = (i__41292_41812 + (1));
seq__41286_41809 = G__41858;
chunk__41290_41810 = G__41859;
count__41291_41811 = G__41860;
i__41292_41812 = G__41861;
continue;
}
} else {
var G__41862 = seq__41286_41809;
var G__41863 = chunk__41290_41810;
var G__41864 = count__41291_41811;
var G__41865 = (i__41292_41812 + (1));
seq__41286_41809 = G__41862;
chunk__41290_41810 = G__41863;
count__41291_41811 = G__41864;
i__41292_41812 = G__41865;
continue;
}
} else {
var temp__5804__auto___41866 = cljs.core.seq(seq__41286_41809);
if(temp__5804__auto___41866){
var seq__41286_41867__$1 = temp__5804__auto___41866;
if(cljs.core.chunked_seq_QMARK_(seq__41286_41867__$1)){
var c__5568__auto___41868 = cljs.core.chunk_first(seq__41286_41867__$1);
var G__41869 = cljs.core.chunk_rest(seq__41286_41867__$1);
var G__41870 = c__5568__auto___41868;
var G__41871 = cljs.core.count(c__5568__auto___41868);
var G__41872 = (0);
seq__41286_41809 = G__41869;
chunk__41290_41810 = G__41870;
count__41291_41811 = G__41871;
i__41292_41812 = G__41872;
continue;
} else {
var node_41873 = cljs.core.first(seq__41286_41867__$1);
if(cljs.core.not(node_41873.shadow$old)){
var path_match_41874 = shadow.cljs.devtools.client.browser.match_paths(node_41873.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41874)){
var new_link_41875 = (function (){var G__41342 = node_41873.cloneNode(true);
G__41342.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41874),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41342;
})();
(node_41873.shadow$old = true);

(new_link_41875.onload = ((function (seq__41286_41809,chunk__41290_41810,count__41291_41811,i__41292_41812,seq__41044,chunk__41046,count__41047,i__41048,new_link_41875,path_match_41874,node_41873,seq__41286_41867__$1,temp__5804__auto___41866,path,map__41043,map__41043__$1,msg,updates,reload_info){
return (function (e){
var seq__41343_41876 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41345_41877 = null;
var count__41346_41878 = (0);
var i__41347_41879 = (0);
while(true){
if((i__41347_41879 < count__41346_41878)){
var map__41351_41880 = chunk__41345_41877.cljs$core$IIndexed$_nth$arity$2(null,i__41347_41879);
var map__41351_41881__$1 = cljs.core.__destructure_map(map__41351_41880);
var task_41882 = map__41351_41881__$1;
var fn_str_41883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351_41881__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41351_41881__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41885 = goog.getObjectByName(fn_str_41883,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41884)].join(''));

(fn_obj_41885.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41885.cljs$core$IFn$_invoke$arity$2(path,new_link_41875) : fn_obj_41885.call(null,path,new_link_41875));


var G__41886 = seq__41343_41876;
var G__41887 = chunk__41345_41877;
var G__41888 = count__41346_41878;
var G__41889 = (i__41347_41879 + (1));
seq__41343_41876 = G__41886;
chunk__41345_41877 = G__41887;
count__41346_41878 = G__41888;
i__41347_41879 = G__41889;
continue;
} else {
var temp__5804__auto___41890__$1 = cljs.core.seq(seq__41343_41876);
if(temp__5804__auto___41890__$1){
var seq__41343_41891__$1 = temp__5804__auto___41890__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41343_41891__$1)){
var c__5568__auto___41892 = cljs.core.chunk_first(seq__41343_41891__$1);
var G__41893 = cljs.core.chunk_rest(seq__41343_41891__$1);
var G__41894 = c__5568__auto___41892;
var G__41895 = cljs.core.count(c__5568__auto___41892);
var G__41896 = (0);
seq__41343_41876 = G__41893;
chunk__41345_41877 = G__41894;
count__41346_41878 = G__41895;
i__41347_41879 = G__41896;
continue;
} else {
var map__41354_41897 = cljs.core.first(seq__41343_41891__$1);
var map__41354_41898__$1 = cljs.core.__destructure_map(map__41354_41897);
var task_41899 = map__41354_41898__$1;
var fn_str_41900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41354_41898__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41354_41898__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41902 = goog.getObjectByName(fn_str_41900,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41901)].join(''));

(fn_obj_41902.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41902.cljs$core$IFn$_invoke$arity$2(path,new_link_41875) : fn_obj_41902.call(null,path,new_link_41875));


var G__41903 = cljs.core.next(seq__41343_41891__$1);
var G__41904 = null;
var G__41905 = (0);
var G__41906 = (0);
seq__41343_41876 = G__41903;
chunk__41345_41877 = G__41904;
count__41346_41878 = G__41905;
i__41347_41879 = G__41906;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41873);
});})(seq__41286_41809,chunk__41290_41810,count__41291_41811,i__41292_41812,seq__41044,chunk__41046,count__41047,i__41048,new_link_41875,path_match_41874,node_41873,seq__41286_41867__$1,temp__5804__auto___41866,path,map__41043,map__41043__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41874], 0));

goog.dom.insertSiblingAfter(new_link_41875,node_41873);


var G__41907 = cljs.core.next(seq__41286_41867__$1);
var G__41908 = null;
var G__41909 = (0);
var G__41910 = (0);
seq__41286_41809 = G__41907;
chunk__41290_41810 = G__41908;
count__41291_41811 = G__41909;
i__41292_41812 = G__41910;
continue;
} else {
var G__41911 = cljs.core.next(seq__41286_41867__$1);
var G__41912 = null;
var G__41913 = (0);
var G__41914 = (0);
seq__41286_41809 = G__41911;
chunk__41290_41810 = G__41912;
count__41291_41811 = G__41913;
i__41292_41812 = G__41914;
continue;
}
} else {
var G__41915 = cljs.core.next(seq__41286_41867__$1);
var G__41916 = null;
var G__41917 = (0);
var G__41918 = (0);
seq__41286_41809 = G__41915;
chunk__41290_41810 = G__41916;
count__41291_41811 = G__41917;
i__41292_41812 = G__41918;
continue;
}
}
} else {
}
}
break;
}


var G__41919 = seq__41044;
var G__41920 = chunk__41046;
var G__41921 = count__41047;
var G__41922 = (i__41048 + (1));
seq__41044 = G__41919;
chunk__41046 = G__41920;
count__41047 = G__41921;
i__41048 = G__41922;
continue;
} else {
var G__41923 = seq__41044;
var G__41924 = chunk__41046;
var G__41925 = count__41047;
var G__41926 = (i__41048 + (1));
seq__41044 = G__41923;
chunk__41046 = G__41924;
count__41047 = G__41925;
i__41048 = G__41926;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41044);
if(temp__5804__auto__){
var seq__41044__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41044__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41044__$1);
var G__41927 = cljs.core.chunk_rest(seq__41044__$1);
var G__41928 = c__5568__auto__;
var G__41929 = cljs.core.count(c__5568__auto__);
var G__41930 = (0);
seq__41044 = G__41927;
chunk__41046 = G__41928;
count__41047 = G__41929;
i__41048 = G__41930;
continue;
} else {
var path = cljs.core.first(seq__41044__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41356_41931 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41360_41932 = null;
var count__41361_41933 = (0);
var i__41362_41934 = (0);
while(true){
if((i__41362_41934 < count__41361_41933)){
var node_41935 = chunk__41360_41932.cljs$core$IIndexed$_nth$arity$2(null,i__41362_41934);
if(cljs.core.not(node_41935.shadow$old)){
var path_match_41937 = shadow.cljs.devtools.client.browser.match_paths(node_41935.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41937)){
var new_link_41940 = (function (){var G__41404 = node_41935.cloneNode(true);
G__41404.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41937),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41404;
})();
(node_41935.shadow$old = true);

(new_link_41940.onload = ((function (seq__41356_41931,chunk__41360_41932,count__41361_41933,i__41362_41934,seq__41044,chunk__41046,count__41047,i__41048,new_link_41940,path_match_41937,node_41935,path,seq__41044__$1,temp__5804__auto__,map__41043,map__41043__$1,msg,updates,reload_info){
return (function (e){
var seq__41405_41941 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41407_41942 = null;
var count__41408_41943 = (0);
var i__41409_41944 = (0);
while(true){
if((i__41409_41944 < count__41408_41943)){
var map__41477_41945 = chunk__41407_41942.cljs$core$IIndexed$_nth$arity$2(null,i__41409_41944);
var map__41477_41946__$1 = cljs.core.__destructure_map(map__41477_41945);
var task_41947 = map__41477_41946__$1;
var fn_str_41948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41477_41946__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41477_41946__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41952 = goog.getObjectByName(fn_str_41948,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41949)].join(''));

(fn_obj_41952.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41952.cljs$core$IFn$_invoke$arity$2(path,new_link_41940) : fn_obj_41952.call(null,path,new_link_41940));


var G__41953 = seq__41405_41941;
var G__41954 = chunk__41407_41942;
var G__41955 = count__41408_41943;
var G__41956 = (i__41409_41944 + (1));
seq__41405_41941 = G__41953;
chunk__41407_41942 = G__41954;
count__41408_41943 = G__41955;
i__41409_41944 = G__41956;
continue;
} else {
var temp__5804__auto___41957__$1 = cljs.core.seq(seq__41405_41941);
if(temp__5804__auto___41957__$1){
var seq__41405_41958__$1 = temp__5804__auto___41957__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41405_41958__$1)){
var c__5568__auto___41959 = cljs.core.chunk_first(seq__41405_41958__$1);
var G__41960 = cljs.core.chunk_rest(seq__41405_41958__$1);
var G__41961 = c__5568__auto___41959;
var G__41962 = cljs.core.count(c__5568__auto___41959);
var G__41963 = (0);
seq__41405_41941 = G__41960;
chunk__41407_41942 = G__41961;
count__41408_41943 = G__41962;
i__41409_41944 = G__41963;
continue;
} else {
var map__41495_41965 = cljs.core.first(seq__41405_41958__$1);
var map__41495_41966__$1 = cljs.core.__destructure_map(map__41495_41965);
var task_41967 = map__41495_41966__$1;
var fn_str_41968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41495_41966__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41495_41966__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41972 = goog.getObjectByName(fn_str_41968,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41969)].join(''));

(fn_obj_41972.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41972.cljs$core$IFn$_invoke$arity$2(path,new_link_41940) : fn_obj_41972.call(null,path,new_link_41940));


var G__41973 = cljs.core.next(seq__41405_41958__$1);
var G__41974 = null;
var G__41975 = (0);
var G__41976 = (0);
seq__41405_41941 = G__41973;
chunk__41407_41942 = G__41974;
count__41408_41943 = G__41975;
i__41409_41944 = G__41976;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41935);
});})(seq__41356_41931,chunk__41360_41932,count__41361_41933,i__41362_41934,seq__41044,chunk__41046,count__41047,i__41048,new_link_41940,path_match_41937,node_41935,path,seq__41044__$1,temp__5804__auto__,map__41043,map__41043__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41937], 0));

goog.dom.insertSiblingAfter(new_link_41940,node_41935);


var G__41977 = seq__41356_41931;
var G__41978 = chunk__41360_41932;
var G__41979 = count__41361_41933;
var G__41980 = (i__41362_41934 + (1));
seq__41356_41931 = G__41977;
chunk__41360_41932 = G__41978;
count__41361_41933 = G__41979;
i__41362_41934 = G__41980;
continue;
} else {
var G__41981 = seq__41356_41931;
var G__41982 = chunk__41360_41932;
var G__41983 = count__41361_41933;
var G__41984 = (i__41362_41934 + (1));
seq__41356_41931 = G__41981;
chunk__41360_41932 = G__41982;
count__41361_41933 = G__41983;
i__41362_41934 = G__41984;
continue;
}
} else {
var G__41985 = seq__41356_41931;
var G__41986 = chunk__41360_41932;
var G__41987 = count__41361_41933;
var G__41988 = (i__41362_41934 + (1));
seq__41356_41931 = G__41985;
chunk__41360_41932 = G__41986;
count__41361_41933 = G__41987;
i__41362_41934 = G__41988;
continue;
}
} else {
var temp__5804__auto___41989__$1 = cljs.core.seq(seq__41356_41931);
if(temp__5804__auto___41989__$1){
var seq__41356_41990__$1 = temp__5804__auto___41989__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41356_41990__$1)){
var c__5568__auto___41991 = cljs.core.chunk_first(seq__41356_41990__$1);
var G__41994 = cljs.core.chunk_rest(seq__41356_41990__$1);
var G__41995 = c__5568__auto___41991;
var G__41996 = cljs.core.count(c__5568__auto___41991);
var G__41997 = (0);
seq__41356_41931 = G__41994;
chunk__41360_41932 = G__41995;
count__41361_41933 = G__41996;
i__41362_41934 = G__41997;
continue;
} else {
var node_41998 = cljs.core.first(seq__41356_41990__$1);
if(cljs.core.not(node_41998.shadow$old)){
var path_match_42000 = shadow.cljs.devtools.client.browser.match_paths(node_41998.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42000)){
var new_link_42001 = (function (){var G__41518 = node_41998.cloneNode(true);
G__41518.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42000),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41518;
})();
(node_41998.shadow$old = true);

(new_link_42001.onload = ((function (seq__41356_41931,chunk__41360_41932,count__41361_41933,i__41362_41934,seq__41044,chunk__41046,count__41047,i__41048,new_link_42001,path_match_42000,node_41998,seq__41356_41990__$1,temp__5804__auto___41989__$1,path,seq__41044__$1,temp__5804__auto__,map__41043,map__41043__$1,msg,updates,reload_info){
return (function (e){
var seq__41524_42003 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41526_42004 = null;
var count__41527_42005 = (0);
var i__41528_42006 = (0);
while(true){
if((i__41528_42006 < count__41527_42005)){
var map__41554_42008 = chunk__41526_42004.cljs$core$IIndexed$_nth$arity$2(null,i__41528_42006);
var map__41554_42009__$1 = cljs.core.__destructure_map(map__41554_42008);
var task_42010 = map__41554_42009__$1;
var fn_str_42011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41554_42009__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41554_42009__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42014 = goog.getObjectByName(fn_str_42011,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42012)].join(''));

(fn_obj_42014.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42014.cljs$core$IFn$_invoke$arity$2(path,new_link_42001) : fn_obj_42014.call(null,path,new_link_42001));


var G__42015 = seq__41524_42003;
var G__42016 = chunk__41526_42004;
var G__42017 = count__41527_42005;
var G__42018 = (i__41528_42006 + (1));
seq__41524_42003 = G__42015;
chunk__41526_42004 = G__42016;
count__41527_42005 = G__42017;
i__41528_42006 = G__42018;
continue;
} else {
var temp__5804__auto___42019__$2 = cljs.core.seq(seq__41524_42003);
if(temp__5804__auto___42019__$2){
var seq__41524_42020__$1 = temp__5804__auto___42019__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41524_42020__$1)){
var c__5568__auto___42021 = cljs.core.chunk_first(seq__41524_42020__$1);
var G__42022 = cljs.core.chunk_rest(seq__41524_42020__$1);
var G__42023 = c__5568__auto___42021;
var G__42024 = cljs.core.count(c__5568__auto___42021);
var G__42025 = (0);
seq__41524_42003 = G__42022;
chunk__41526_42004 = G__42023;
count__41527_42005 = G__42024;
i__41528_42006 = G__42025;
continue;
} else {
var map__41557_42026 = cljs.core.first(seq__41524_42020__$1);
var map__41557_42027__$1 = cljs.core.__destructure_map(map__41557_42026);
var task_42028 = map__41557_42027__$1;
var fn_str_42029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41557_42027__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41557_42027__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42031 = goog.getObjectByName(fn_str_42029,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42030)].join(''));

(fn_obj_42031.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42031.cljs$core$IFn$_invoke$arity$2(path,new_link_42001) : fn_obj_42031.call(null,path,new_link_42001));


var G__42032 = cljs.core.next(seq__41524_42020__$1);
var G__42033 = null;
var G__42034 = (0);
var G__42035 = (0);
seq__41524_42003 = G__42032;
chunk__41526_42004 = G__42033;
count__41527_42005 = G__42034;
i__41528_42006 = G__42035;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41998);
});})(seq__41356_41931,chunk__41360_41932,count__41361_41933,i__41362_41934,seq__41044,chunk__41046,count__41047,i__41048,new_link_42001,path_match_42000,node_41998,seq__41356_41990__$1,temp__5804__auto___41989__$1,path,seq__41044__$1,temp__5804__auto__,map__41043,map__41043__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42000], 0));

goog.dom.insertSiblingAfter(new_link_42001,node_41998);


var G__42036 = cljs.core.next(seq__41356_41990__$1);
var G__42037 = null;
var G__42038 = (0);
var G__42039 = (0);
seq__41356_41931 = G__42036;
chunk__41360_41932 = G__42037;
count__41361_41933 = G__42038;
i__41362_41934 = G__42039;
continue;
} else {
var G__42040 = cljs.core.next(seq__41356_41990__$1);
var G__42041 = null;
var G__42042 = (0);
var G__42043 = (0);
seq__41356_41931 = G__42040;
chunk__41360_41932 = G__42041;
count__41361_41933 = G__42042;
i__41362_41934 = G__42043;
continue;
}
} else {
var G__42044 = cljs.core.next(seq__41356_41990__$1);
var G__42045 = null;
var G__42046 = (0);
var G__42047 = (0);
seq__41356_41931 = G__42044;
chunk__41360_41932 = G__42045;
count__41361_41933 = G__42046;
i__41362_41934 = G__42047;
continue;
}
}
} else {
}
}
break;
}


var G__42048 = cljs.core.next(seq__41044__$1);
var G__42049 = null;
var G__42050 = (0);
var G__42051 = (0);
seq__41044 = G__42048;
chunk__41046 = G__42049;
count__41047 = G__42050;
i__41048 = G__42051;
continue;
} else {
var G__42052 = cljs.core.next(seq__41044__$1);
var G__42053 = null;
var G__42054 = (0);
var G__42055 = (0);
seq__41044 = G__42052;
chunk__41046 = G__42053;
count__41047 = G__42054;
i__41048 = G__42055;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__41567){
var map__41568 = p__41567;
var map__41568__$1 = cljs.core.__destructure_map(map__41568);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41568__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__41605){
var map__41606 = p__41605;
var map__41606__$1 = cljs.core.__destructure_map(map__41606);
var _ = map__41606__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41606__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41616,done,error){
var map__41617 = p__41616;
var map__41617__$1 = cljs.core.__destructure_map(map__41617);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41617__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41627,done,error){
var map__41628 = p__41627;
var map__41628__$1 = cljs.core.__destructure_map(map__41628);
var msg = map__41628__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41628__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41628__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41628__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41631){
var map__41632 = p__41631;
var map__41632__$1 = cljs.core.__destructure_map(map__41632);
var src = map__41632__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41632__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41642 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41642) : done.call(null,G__41642));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41644){
var map__41646 = p__41644;
var map__41646__$1 = cljs.core.__destructure_map(map__41646);
var msg__$1 = map__41646__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41646__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e41649){var ex = e41649;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41659){
var map__41661 = p__41659;
var map__41661__$1 = cljs.core.__destructure_map(map__41661);
var env = map__41661__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41661__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41694){
var map__41695 = p__41694;
var map__41695__$1 = cljs.core.__destructure_map(map__41695);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41695__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41695__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__41697){
var map__41699 = p__41697;
var map__41699__$1 = cljs.core.__destructure_map(map__41699);
var svc = map__41699__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41699__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
