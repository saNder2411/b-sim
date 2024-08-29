goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__27721 = libspec;
var seq__27722 = cljs.core.seq(vec__27721);
var first__27723 = cljs.core.first(seq__27722);
var seq__27722__$1 = cljs.core.next(seq__27722);
var lib = first__27723;
var spec = seq__27722__$1;
var libspec__$1 = vec__27721;
var vec__27724 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27724,(0),null);
var vec__27727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27724,(1),null);
var seq__27728 = cljs.core.seq(vec__27727);
var first__27729 = cljs.core.first(seq__27728);
var seq__27728__$1 = cljs.core.next(seq__27728);
var _ = first__27729;
var first__27729__$1 = cljs.core.first(seq__27728__$1);
var seq__27728__$2 = cljs.core.next(seq__27728__$1);
var alias = first__27729__$1;
var post_spec = seq__27728__$2;
var post = vec__27727;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__27739 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27739,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__27739;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__27742 = cljs.core.seq(new_as_aliases);
var chunk__27743 = null;
var count__27744 = (0);
var i__27745 = (0);
while(true){
if((i__27745 < count__27744)){
var vec__27767 = chunk__27743.cljs$core$IIndexed$_nth$arity$2(null,i__27745);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27767,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27767,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__27808 = seq__27742;
var G__27809 = chunk__27743;
var G__27810 = count__27744;
var G__27811 = (i__27745 + (1));
seq__27742 = G__27808;
chunk__27743 = G__27809;
count__27744 = G__27810;
i__27745 = G__27811;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27742);
if(temp__5804__auto__){
var seq__27742__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27742__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27742__$1);
var G__27812 = cljs.core.chunk_rest(seq__27742__$1);
var G__27813 = c__5568__auto__;
var G__27814 = cljs.core.count(c__5568__auto__);
var G__27815 = (0);
seq__27742 = G__27812;
chunk__27743 = G__27813;
count__27744 = G__27814;
i__27745 = G__27815;
continue;
} else {
var vec__27778 = cljs.core.first(seq__27742__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27778,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27778,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__27816 = cljs.core.next(seq__27742__$1);
var G__27817 = null;
var G__27818 = (0);
var G__27819 = (0);
seq__27742 = G__27816;
chunk__27743 = G__27817;
count__27744 = G__27818;
i__27745 = G__27819;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__27787 = arguments.length;
switch (G__27787) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__27790 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__27790__$1 = cljs.core.__destructure_map(map__27790);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27790__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27790__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__27793 = ret__$1;
var G__27793__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__27793,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__27793);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__27793__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__27793__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27800,p__27801){
var map__27802 = p__27800;
var map__27802__$1 = cljs.core.__destructure_map(map__27802);
var ret__$1 = map__27802__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27802__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__27803 = p__27801;
var seq__27804 = cljs.core.seq(vec__27803);
var first__27805 = cljs.core.first(seq__27804);
var seq__27804__$1 = cljs.core.next(seq__27804);
var spec_key = first__27805;
var libspecs = seq__27804__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__27806 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__27806__$1 = cljs.core.__destructure_map(map__27806);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27806__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__27807 = ret__$1;
var G__27807__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__27807,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__27807);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__27807__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__27807__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
