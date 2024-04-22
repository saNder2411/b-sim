goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35059){
var map__35065 = p__35059;
var map__35065__$1 = cljs.core.__destructure_map(map__35065);
var m = map__35065__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35065__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35065__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35079_35459 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35080_35460 = null;
var count__35081_35461 = (0);
var i__35082_35462 = (0);
while(true){
if((i__35082_35462 < count__35081_35461)){
var f_35463 = chunk__35080_35460.cljs$core$IIndexed$_nth$arity$2(null,i__35082_35462);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35463], 0));


var G__35466 = seq__35079_35459;
var G__35467 = chunk__35080_35460;
var G__35468 = count__35081_35461;
var G__35469 = (i__35082_35462 + (1));
seq__35079_35459 = G__35466;
chunk__35080_35460 = G__35467;
count__35081_35461 = G__35468;
i__35082_35462 = G__35469;
continue;
} else {
var temp__5804__auto___35470 = cljs.core.seq(seq__35079_35459);
if(temp__5804__auto___35470){
var seq__35079_35471__$1 = temp__5804__auto___35470;
if(cljs.core.chunked_seq_QMARK_(seq__35079_35471__$1)){
var c__5568__auto___35473 = cljs.core.chunk_first(seq__35079_35471__$1);
var G__35474 = cljs.core.chunk_rest(seq__35079_35471__$1);
var G__35475 = c__5568__auto___35473;
var G__35476 = cljs.core.count(c__5568__auto___35473);
var G__35477 = (0);
seq__35079_35459 = G__35474;
chunk__35080_35460 = G__35475;
count__35081_35461 = G__35476;
i__35082_35462 = G__35477;
continue;
} else {
var f_35478 = cljs.core.first(seq__35079_35471__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35478], 0));


var G__35479 = cljs.core.next(seq__35079_35471__$1);
var G__35480 = null;
var G__35481 = (0);
var G__35482 = (0);
seq__35079_35459 = G__35479;
chunk__35080_35460 = G__35480;
count__35081_35461 = G__35481;
i__35082_35462 = G__35482;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35483 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35483], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35483)))?cljs.core.second(arglists_35483):arglists_35483)], 0));
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
var seq__35107_35485 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35108_35486 = null;
var count__35109_35487 = (0);
var i__35110_35488 = (0);
while(true){
if((i__35110_35488 < count__35109_35487)){
var vec__35137_35489 = chunk__35108_35486.cljs$core$IIndexed$_nth$arity$2(null,i__35110_35488);
var name_35490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35137_35489,(0),null);
var map__35140_35491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35137_35489,(1),null);
var map__35140_35492__$1 = cljs.core.__destructure_map(map__35140_35491);
var doc_35493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35140_35492__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35140_35492__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35490], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35494], 0));

if(cljs.core.truth_(doc_35493)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35493], 0));
} else {
}


var G__35496 = seq__35107_35485;
var G__35497 = chunk__35108_35486;
var G__35498 = count__35109_35487;
var G__35499 = (i__35110_35488 + (1));
seq__35107_35485 = G__35496;
chunk__35108_35486 = G__35497;
count__35109_35487 = G__35498;
i__35110_35488 = G__35499;
continue;
} else {
var temp__5804__auto___35500 = cljs.core.seq(seq__35107_35485);
if(temp__5804__auto___35500){
var seq__35107_35501__$1 = temp__5804__auto___35500;
if(cljs.core.chunked_seq_QMARK_(seq__35107_35501__$1)){
var c__5568__auto___35502 = cljs.core.chunk_first(seq__35107_35501__$1);
var G__35503 = cljs.core.chunk_rest(seq__35107_35501__$1);
var G__35504 = c__5568__auto___35502;
var G__35505 = cljs.core.count(c__5568__auto___35502);
var G__35506 = (0);
seq__35107_35485 = G__35503;
chunk__35108_35486 = G__35504;
count__35109_35487 = G__35505;
i__35110_35488 = G__35506;
continue;
} else {
var vec__35147_35508 = cljs.core.first(seq__35107_35501__$1);
var name_35509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147_35508,(0),null);
var map__35150_35510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147_35508,(1),null);
var map__35150_35511__$1 = cljs.core.__destructure_map(map__35150_35510);
var doc_35512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35150_35511__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35150_35511__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35509], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35513], 0));

if(cljs.core.truth_(doc_35512)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35512], 0));
} else {
}


var G__35516 = cljs.core.next(seq__35107_35501__$1);
var G__35517 = null;
var G__35518 = (0);
var G__35519 = (0);
seq__35107_35485 = G__35516;
chunk__35108_35486 = G__35517;
count__35109_35487 = G__35518;
i__35110_35488 = G__35519;
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

var seq__35156 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35157 = null;
var count__35158 = (0);
var i__35159 = (0);
while(true){
if((i__35159 < count__35158)){
var role = chunk__35157.cljs$core$IIndexed$_nth$arity$2(null,i__35159);
var temp__5804__auto___35522__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35522__$1)){
var spec_35523 = temp__5804__auto___35522__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35523)], 0));
} else {
}


var G__35527 = seq__35156;
var G__35528 = chunk__35157;
var G__35529 = count__35158;
var G__35530 = (i__35159 + (1));
seq__35156 = G__35527;
chunk__35157 = G__35528;
count__35158 = G__35529;
i__35159 = G__35530;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__35156);
if(temp__5804__auto____$1){
var seq__35156__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35156__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35156__$1);
var G__35535 = cljs.core.chunk_rest(seq__35156__$1);
var G__35536 = c__5568__auto__;
var G__35537 = cljs.core.count(c__5568__auto__);
var G__35538 = (0);
seq__35156 = G__35535;
chunk__35157 = G__35536;
count__35158 = G__35537;
i__35159 = G__35538;
continue;
} else {
var role = cljs.core.first(seq__35156__$1);
var temp__5804__auto___35539__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35539__$2)){
var spec_35541 = temp__5804__auto___35539__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35541)], 0));
} else {
}


var G__35542 = cljs.core.next(seq__35156__$1);
var G__35543 = null;
var G__35544 = (0);
var G__35545 = (0);
seq__35156 = G__35542;
chunk__35157 = G__35543;
count__35158 = G__35544;
i__35159 = G__35545;
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
var G__35550 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35551 = cljs.core.ex_cause(t);
via = G__35550;
t = G__35551;
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
var map__35278 = datafied_throwable;
var map__35278__$1 = cljs.core.__destructure_map(map__35278);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35278__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35278__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35278__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35280 = cljs.core.last(via);
var map__35280__$1 = cljs.core.__destructure_map(map__35280);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35280__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35281 = data;
var map__35281__$1 = cljs.core.__destructure_map(map__35281);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35281__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35281__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35281__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35282 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35282__$1 = cljs.core.__destructure_map(map__35282);
var top_data = map__35282__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35282__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35303 = phase;
var G__35303__$1 = (((G__35303 instanceof cljs.core.Keyword))?G__35303.fqn:null);
switch (G__35303__$1) {
case "read-source":
var map__35312 = data;
var map__35312__$1 = cljs.core.__destructure_map(map__35312);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35312__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35312__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35316 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35316__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35316,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35316);
var G__35316__$2 = (cljs.core.truth_((function (){var fexpr__35319 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35319.cljs$core$IFn$_invoke$arity$1 ? fexpr__35319.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35319.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35316__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35316__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35316__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35316__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35323 = top_data;
var G__35323__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35323,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35323);
var G__35323__$2 = (cljs.core.truth_((function (){var fexpr__35327 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35327.cljs$core$IFn$_invoke$arity$1 ? fexpr__35327.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35327.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35323__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35323__$1);
var G__35323__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35323__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35323__$2);
var G__35323__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35323__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35323__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35323__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35323__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35336 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35336,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35336,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35336,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35336,(3),null);
var G__35339 = top_data;
var G__35339__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35339,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35339);
var G__35339__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35339__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35339__$1);
var G__35339__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35339__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35339__$2);
var G__35339__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35339__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35339__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35339__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35339__$4;
}

break;
case "execution":
var vec__35348 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35348,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35269_SHARP_){
var or__5045__auto__ = (p1__35269_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__35353 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35353.cljs$core$IFn$_invoke$arity$1 ? fexpr__35353.cljs$core$IFn$_invoke$arity$1(p1__35269_SHARP_) : fexpr__35353.call(null,p1__35269_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__35355 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35355__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35355,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35355);
var G__35355__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35355__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35355__$1);
var G__35355__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35355__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35355__$2);
var G__35355__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35355__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35355__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35355__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35355__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35303__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35372){
var map__35373 = p__35372;
var map__35373__$1 = cljs.core.__destructure_map(map__35373);
var triage_data = map__35373__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35373__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35373__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35373__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35373__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35373__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35373__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35373__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35373__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35379 = phase;
var G__35379__$1 = (((G__35379 instanceof cljs.core.Keyword))?G__35379.fqn:null);
switch (G__35379__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35381 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35382 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35383 = loc;
var G__35384 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35389_35573 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35390_35574 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35391_35575 = true;
var _STAR_print_fn_STAR__temp_val__35392_35576 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35391_35575);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35392_35576);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35365_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35365_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35390_35574);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35389_35573);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35381,G__35382,G__35383,G__35384) : format.call(null,G__35381,G__35382,G__35383,G__35384));

break;
case "macroexpansion":
var G__35404 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35405 = cause_type;
var G__35406 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35407 = loc;
var G__35408 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35404,G__35405,G__35406,G__35407,G__35408) : format.call(null,G__35404,G__35405,G__35406,G__35407,G__35408));

break;
case "compile-syntax-check":
var G__35409 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35410 = cause_type;
var G__35411 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35412 = loc;
var G__35413 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35409,G__35410,G__35411,G__35412,G__35413) : format.call(null,G__35409,G__35410,G__35411,G__35412,G__35413));

break;
case "compilation":
var G__35419 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35420 = cause_type;
var G__35421 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35422 = loc;
var G__35423 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35419,G__35420,G__35421,G__35422,G__35423) : format.call(null,G__35419,G__35420,G__35421,G__35422,G__35423));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35424 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35425 = symbol;
var G__35426 = loc;
var G__35427 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35430_35582 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35431_35583 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35432_35584 = true;
var _STAR_print_fn_STAR__temp_val__35433_35585 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35432_35584);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35433_35585);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35369_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35369_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35431_35583);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35430_35582);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35424,G__35425,G__35426,G__35427) : format.call(null,G__35424,G__35425,G__35426,G__35427));
} else {
var G__35438 = "Execution error%s at %s(%s).\n%s\n";
var G__35439 = cause_type;
var G__35440 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35441 = loc;
var G__35442 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35438,G__35439,G__35440,G__35441,G__35442) : format.call(null,G__35438,G__35439,G__35440,G__35441,G__35442));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35379__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
