goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34931){
var map__34932 = p__34931;
var map__34932__$1 = cljs.core.__destructure_map(map__34932);
var m = map__34932__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34932__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34932__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34951_35300 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34952_35301 = null;
var count__34953_35302 = (0);
var i__34954_35303 = (0);
while(true){
if((i__34954_35303 < count__34953_35302)){
var f_35304 = chunk__34952_35301.cljs$core$IIndexed$_nth$arity$2(null,i__34954_35303);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35304], 0));


var G__35305 = seq__34951_35300;
var G__35306 = chunk__34952_35301;
var G__35307 = count__34953_35302;
var G__35308 = (i__34954_35303 + (1));
seq__34951_35300 = G__35305;
chunk__34952_35301 = G__35306;
count__34953_35302 = G__35307;
i__34954_35303 = G__35308;
continue;
} else {
var temp__5804__auto___35309 = cljs.core.seq(seq__34951_35300);
if(temp__5804__auto___35309){
var seq__34951_35311__$1 = temp__5804__auto___35309;
if(cljs.core.chunked_seq_QMARK_(seq__34951_35311__$1)){
var c__5568__auto___35312 = cljs.core.chunk_first(seq__34951_35311__$1);
var G__35313 = cljs.core.chunk_rest(seq__34951_35311__$1);
var G__35314 = c__5568__auto___35312;
var G__35315 = cljs.core.count(c__5568__auto___35312);
var G__35316 = (0);
seq__34951_35300 = G__35313;
chunk__34952_35301 = G__35314;
count__34953_35302 = G__35315;
i__34954_35303 = G__35316;
continue;
} else {
var f_35317 = cljs.core.first(seq__34951_35311__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35317], 0));


var G__35319 = cljs.core.next(seq__34951_35311__$1);
var G__35320 = null;
var G__35321 = (0);
var G__35322 = (0);
seq__34951_35300 = G__35319;
chunk__34952_35301 = G__35320;
count__34953_35302 = G__35321;
i__34954_35303 = G__35322;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35324 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35324], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35324)))?cljs.core.second(arglists_35324):arglists_35324)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34975_35327 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34976_35328 = null;
var count__34977_35329 = (0);
var i__34978_35330 = (0);
while(true){
if((i__34978_35330 < count__34977_35329)){
var vec__35000_35332 = chunk__34976_35328.cljs$core$IIndexed$_nth$arity$2(null,i__34978_35330);
var name_35333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35000_35332,(0),null);
var map__35003_35334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35000_35332,(1),null);
var map__35003_35335__$1 = cljs.core.__destructure_map(map__35003_35334);
var doc_35336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35003_35335__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35003_35335__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35333], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35337], 0));

if(cljs.core.truth_(doc_35336)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35336], 0));
} else {
}


var G__35339 = seq__34975_35327;
var G__35340 = chunk__34976_35328;
var G__35341 = count__34977_35329;
var G__35342 = (i__34978_35330 + (1));
seq__34975_35327 = G__35339;
chunk__34976_35328 = G__35340;
count__34977_35329 = G__35341;
i__34978_35330 = G__35342;
continue;
} else {
var temp__5804__auto___35343 = cljs.core.seq(seq__34975_35327);
if(temp__5804__auto___35343){
var seq__34975_35345__$1 = temp__5804__auto___35343;
if(cljs.core.chunked_seq_QMARK_(seq__34975_35345__$1)){
var c__5568__auto___35346 = cljs.core.chunk_first(seq__34975_35345__$1);
var G__35347 = cljs.core.chunk_rest(seq__34975_35345__$1);
var G__35348 = c__5568__auto___35346;
var G__35349 = cljs.core.count(c__5568__auto___35346);
var G__35350 = (0);
seq__34975_35327 = G__35347;
chunk__34976_35328 = G__35348;
count__34977_35329 = G__35349;
i__34978_35330 = G__35350;
continue;
} else {
var vec__35009_35351 = cljs.core.first(seq__34975_35345__$1);
var name_35352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35009_35351,(0),null);
var map__35012_35353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35009_35351,(1),null);
var map__35012_35354__$1 = cljs.core.__destructure_map(map__35012_35353);
var doc_35355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35012_35354__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35012_35354__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35352], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35356], 0));

if(cljs.core.truth_(doc_35355)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35355], 0));
} else {
}


var G__35359 = cljs.core.next(seq__34975_35345__$1);
var G__35360 = null;
var G__35361 = (0);
var G__35362 = (0);
seq__34975_35327 = G__35359;
chunk__34976_35328 = G__35360;
count__34977_35329 = G__35361;
i__34978_35330 = G__35362;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35018 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35019 = null;
var count__35020 = (0);
var i__35021 = (0);
while(true){
if((i__35021 < count__35020)){
var role = chunk__35019.cljs$core$IIndexed$_nth$arity$2(null,i__35021);
var temp__5804__auto___35371__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35371__$1)){
var spec_35373 = temp__5804__auto___35371__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35373)], 0));
} else {
}


var G__35375 = seq__35018;
var G__35376 = chunk__35019;
var G__35377 = count__35020;
var G__35378 = (i__35021 + (1));
seq__35018 = G__35375;
chunk__35019 = G__35376;
count__35020 = G__35377;
i__35021 = G__35378;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__35018);
if(temp__5804__auto____$1){
var seq__35018__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35018__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35018__$1);
var G__35379 = cljs.core.chunk_rest(seq__35018__$1);
var G__35380 = c__5568__auto__;
var G__35381 = cljs.core.count(c__5568__auto__);
var G__35382 = (0);
seq__35018 = G__35379;
chunk__35019 = G__35380;
count__35020 = G__35381;
i__35021 = G__35382;
continue;
} else {
var role = cljs.core.first(seq__35018__$1);
var temp__5804__auto___35383__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35383__$2)){
var spec_35384 = temp__5804__auto___35383__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35384)], 0));
} else {
}


var G__35389 = cljs.core.next(seq__35018__$1);
var G__35390 = null;
var G__35391 = (0);
var G__35392 = (0);
seq__35018 = G__35389;
chunk__35019 = G__35390;
count__35020 = G__35391;
i__35021 = G__35392;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35395 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35396 = cljs.core.ex_cause(t);
via = G__35395;
t = G__35396;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35163 = datafied_throwable;
var map__35163__$1 = cljs.core.__destructure_map(map__35163);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35163__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35163__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35163__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35165 = cljs.core.last(via);
var map__35165__$1 = cljs.core.__destructure_map(map__35165);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35165__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35165__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35165__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35166 = data;
var map__35166__$1 = cljs.core.__destructure_map(map__35166);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35166__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35166__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35166__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35167 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35167__$1 = cljs.core.__destructure_map(map__35167);
var top_data = map__35167__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35167__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35172 = phase;
var G__35172__$1 = (((G__35172 instanceof cljs.core.Keyword))?G__35172.fqn:null);
switch (G__35172__$1) {
case "read-source":
var map__35174 = data;
var map__35174__$1 = cljs.core.__destructure_map(map__35174);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35174__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35174__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35176 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35176__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35176,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35176);
var G__35176__$2 = (cljs.core.truth_((function (){var fexpr__35178 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35178.cljs$core$IFn$_invoke$arity$1 ? fexpr__35178.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35178.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35176__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35176__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35176__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35176__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35182 = top_data;
var G__35182__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35182,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35182);
var G__35182__$2 = (cljs.core.truth_((function (){var fexpr__35184 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35184.cljs$core$IFn$_invoke$arity$1 ? fexpr__35184.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35184.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35182__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35182__$1);
var G__35182__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35182__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35182__$2);
var G__35182__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35182__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35182__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35182__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35182__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35191 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35191,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35191,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35191,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35191,(3),null);
var G__35194 = top_data;
var G__35194__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35194,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35194);
var G__35194__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35194__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35194__$1);
var G__35194__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35194__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35194__$2);
var G__35194__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35194__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35194__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35194__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35194__$4;
}

break;
case "execution":
var vec__35198 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35198,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35198,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35198,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35198,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35153_SHARP_){
var or__5045__auto__ = (p1__35153_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__35202 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35202.cljs$core$IFn$_invoke$arity$1 ? fexpr__35202.cljs$core$IFn$_invoke$arity$1(p1__35153_SHARP_) : fexpr__35202.call(null,p1__35153_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__35203 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35203__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35203,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35203);
var G__35203__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35203__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35203__$1);
var G__35203__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35203__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35203__$2);
var G__35203__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35203__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35203__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35203__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35203__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35172__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35216){
var map__35217 = p__35216;
var map__35217__$1 = cljs.core.__destructure_map(map__35217);
var triage_data = map__35217__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35217__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35217__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35217__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35217__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35217__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35217__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35217__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35217__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35233 = phase;
var G__35233__$1 = (((G__35233 instanceof cljs.core.Keyword))?G__35233.fqn:null);
switch (G__35233__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35234 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35235 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35236 = loc;
var G__35237 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35244_35435 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35245_35436 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35246_35437 = true;
var _STAR_print_fn_STAR__temp_val__35247_35438 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35246_35437);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35247_35438);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35204_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35204_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35245_35436);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35244_35435);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35234,G__35235,G__35236,G__35237) : format.call(null,G__35234,G__35235,G__35236,G__35237));

break;
case "macroexpansion":
var G__35253 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35254 = cause_type;
var G__35255 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35256 = loc;
var G__35257 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35253,G__35254,G__35255,G__35256,G__35257) : format.call(null,G__35253,G__35254,G__35255,G__35256,G__35257));

break;
case "compile-syntax-check":
var G__35258 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35259 = cause_type;
var G__35260 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35261 = loc;
var G__35262 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35258,G__35259,G__35260,G__35261,G__35262) : format.call(null,G__35258,G__35259,G__35260,G__35261,G__35262));

break;
case "compilation":
var G__35264 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35265 = cause_type;
var G__35266 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35267 = loc;
var G__35268 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35264,G__35265,G__35266,G__35267,G__35268) : format.call(null,G__35264,G__35265,G__35266,G__35267,G__35268));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35271 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35272 = symbol;
var G__35273 = loc;
var G__35274 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35275_35459 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35276_35460 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35277_35461 = true;
var _STAR_print_fn_STAR__temp_val__35278_35462 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35277_35461);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35278_35462);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35210_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35210_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35276_35460);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35275_35459);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35271,G__35272,G__35273,G__35274) : format.call(null,G__35271,G__35272,G__35273,G__35274));
} else {
var G__35289 = "Execution error%s at %s(%s).\n%s\n";
var G__35291 = cause_type;
var G__35292 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35293 = loc;
var G__35294 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35289,G__35291,G__35292,G__35293,G__35294) : format.call(null,G__35289,G__35291,G__35292,G__35293,G__35294));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35233__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
