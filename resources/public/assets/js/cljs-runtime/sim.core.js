goog.provide('sim.core');
sim.core.simulation = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"run?","run?",752622859),false,new cljs.core.Keyword(null,"loop-n","loop-n",-325091171),(0)], null));
sim.core.sim_loop = (function sim$core$sim_loop(sim__$1){
var c__27896__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27897__auto__ = (function (){var switch__27290__auto__ = (function (state_35931){
var state_val_35932 = (state_35931[(1)]);
if((state_val_35932 === (1))){
var state_35931__$1 = state_35931;
var statearr_35938_35986 = state_35931__$1;
(statearr_35938_35986[(2)] = null);

(statearr_35938_35986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (2))){
var inst_35910 = cljs.core.deref(sim__$1);
var inst_35911 = new cljs.core.Keyword(null,"run?","run?",752622859).cljs$core$IFn$_invoke$arity$1(inst_35910);
var state_35931__$1 = state_35931;
if(cljs.core.truth_(inst_35911)){
var statearr_35939_35987 = state_35931__$1;
(statearr_35939_35987[(1)] = (4));

} else {
var statearr_35940_35988 = state_35931__$1;
(statearr_35940_35988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (3))){
var inst_35929 = (state_35931[(2)]);
var state_35931__$1 = state_35931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35931__$1,inst_35929);
} else {
if((state_val_35932 === (4))){
var inst_35913 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sim__$1,cljs.core.update,new cljs.core.Keyword(null,"loop-n","loop-n",-325091171),cljs.core.inc);
var inst_35918 = cljs.core.deref(sim__$1);
var inst_35919 = new cljs.core.Keyword(null,"loop-n","loop-n",-325091171).cljs$core$IFn$_invoke$arity$1(inst_35918);
var inst_35920 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["loop #",inst_35919], 0));
var inst_35921 = cljs.core.async.timeout((1000));
var state_35931__$1 = (function (){var statearr_35947 = state_35931;
(statearr_35947[(7)] = inst_35913);

(statearr_35947[(8)] = inst_35920);

return statearr_35947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35931__$1,(7),inst_35921);
} else {
if((state_val_35932 === (5))){
var state_35931__$1 = state_35931;
var statearr_35948_35991 = state_35931__$1;
(statearr_35948_35991[(2)] = null);

(statearr_35948_35991[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (6))){
var inst_35927 = (state_35931[(2)]);
var state_35931__$1 = state_35931;
var statearr_35953_35993 = state_35931__$1;
(statearr_35953_35993[(2)] = inst_35927);

(statearr_35953_35993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35932 === (7))){
var inst_35923 = (state_35931[(2)]);
var state_35931__$1 = (function (){var statearr_35954 = state_35931;
(statearr_35954[(9)] = inst_35923);

return statearr_35954;
})();
var statearr_35955_35996 = state_35931__$1;
(statearr_35955_35996[(2)] = null);

(statearr_35955_35996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var sim$core$sim_loop_$_state_machine__27291__auto__ = null;
var sim$core$sim_loop_$_state_machine__27291__auto____0 = (function (){
var statearr_35957 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35957[(0)] = sim$core$sim_loop_$_state_machine__27291__auto__);

(statearr_35957[(1)] = (1));

return statearr_35957;
});
var sim$core$sim_loop_$_state_machine__27291__auto____1 = (function (state_35931){
while(true){
var ret_value__27292__auto__ = (function (){try{while(true){
var result__27293__auto__ = switch__27290__auto__(state_35931);
if(cljs.core.keyword_identical_QMARK_(result__27293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27293__auto__;
}
break;
}
}catch (e35959){var ex__27294__auto__ = e35959;
var statearr_35961_36000 = state_35931;
(statearr_35961_36000[(2)] = ex__27294__auto__);


if(cljs.core.seq((state_35931[(4)]))){
var statearr_35963_36001 = state_35931;
(statearr_35963_36001[(1)] = cljs.core.first((state_35931[(4)])));

} else {
throw ex__27294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36002 = state_35931;
state_35931 = G__36002;
continue;
} else {
return ret_value__27292__auto__;
}
break;
}
});
sim$core$sim_loop_$_state_machine__27291__auto__ = function(state_35931){
switch(arguments.length){
case 0:
return sim$core$sim_loop_$_state_machine__27291__auto____0.call(this);
case 1:
return sim$core$sim_loop_$_state_machine__27291__auto____1.call(this,state_35931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sim$core$sim_loop_$_state_machine__27291__auto__.cljs$core$IFn$_invoke$arity$0 = sim$core$sim_loop_$_state_machine__27291__auto____0;
sim$core$sim_loop_$_state_machine__27291__auto__.cljs$core$IFn$_invoke$arity$1 = sim$core$sim_loop_$_state_machine__27291__auto____1;
return sim$core$sim_loop_$_state_machine__27291__auto__;
})()
})();
var state__27898__auto__ = (function (){var statearr_35968 = f__27897__auto__();
(statearr_35968[(6)] = c__27896__auto__);

return statearr_35968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27898__auto__);
}));

return c__27896__auto__;
});
sim.core.run_sim = (function sim$core$run_sim(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sim.core.simulation,cljs.core.assoc,new cljs.core.Keyword(null,"run?","run?",752622859),true);

return sim.core.sim_loop(sim.core.simulation);
});
sim.core.stop_sim = (function sim$core$stop_sim(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sim.core.simulation,cljs.core.assoc,new cljs.core.Keyword(null,"run?","run?",752622859),false);
});
sim.core.reset_sim = (function sim$core$reset_sim(){
return cljs.core.reset_BANG_(sim.core.simulation,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"run?","run?",752622859),false,new cljs.core.Keyword(null,"loop-n","loop-n",-325091171),(0)], null));
});

//# sourceMappingURL=sim.core.js.map
