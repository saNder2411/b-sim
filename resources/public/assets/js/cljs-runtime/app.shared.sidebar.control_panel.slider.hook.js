goog.provide('app.shared.sidebar.control_panel.slider.hook');
app.shared.sidebar.control_panel.slider.hook.use_slider = (function app$shared$sidebar$control_panel$slider$hook$use_slider(max_val,next_v__PERCENT_,t_length,knob_r,msg_handler){
var knob_ref = helix.hooks.use_ref(null);
var track_ref = helix.hooks.use_ref(null);
var fill_track_ref = helix.hooks.use_ref(null);
var init_knob_x = ((t_length / (100)) * next_v__PERCENT_);
var vec__49564 = helix.hooks.use_state(init_knob_x);
var knob_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49564,(0),null);
var set_knob_x_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49564,(1),null);
var vec__49567 = helix.hooks.use_state(next_v__PERCENT_);
var value__PERCENT_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49567,(0),null);
var set_value__PERCENT__BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49567,(1),null);
var vec__49570 = helix.hooks.use_state(false);
var send_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49570,(0),null);
var set_send_message_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49570,(1),null);
var val_in_unit = ((knob_x * max_val) / t_length);
var on_knob_move = (function (e){
e.preventDefault();

var left_edge_client = (cljs.core.deref(track_ref).getBoundingClientRect().left + knob_r);
var right_edge_client = (cljs.core.deref(track_ref).getBoundingClientRect().right - knob_r);
var length_by_client = (right_edge_client - left_edge_client);
var svg_factor = (t_length / length_by_client);
var next_x = ((e.clientX - left_edge_client) * svg_factor);
var next_knob_x = (((next_x < (0)))?(0):(((next_x > t_length))?t_length:next_x
));
(set_knob_x_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_knob_x_BANG_.cljs$core$IFn$_invoke$arity$1(next_knob_x) : set_knob_x_BANG_.call(null,next_knob_x));

var G__49627 = ((next_knob_x / t_length) * (100));
return (set_value__PERCENT__BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value__PERCENT__BANG_.cljs$core$IFn$_invoke$arity$1(G__49627) : set_value__PERCENT__BANG_.call(null,G__49627));
});
var on_knob_up = (function (_){
(set_send_message_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_send_message_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_send_message_BANG_.call(null,true));

(cljs.core.deref(knob_ref).onpointermove = null);

return (cljs.core.deref(knob_ref).onpointerup = null);
});
var on_knob_down = (function (e){
e.preventDefault();

cljs.core.deref(knob_ref).setPointerCapture(e.pointerId);

(cljs.core.deref(knob_ref).onpointermove = on_knob_move);

return (cljs.core.deref(knob_ref).onpointerup = on_knob_up);
});
var on_track_down = (function (e){
on_knob_move(e);

on_knob_up(e);

return (cljs.core.deref(track_ref).onpointerdown = null);
});
var on_fill_track_down = (function (e){
on_knob_move(e);

on_knob_up(e);

return (cljs.core.deref(fill_track_ref).onpointerdown = null);
});
var G__49640_49647 = helix.hooks.wrap_fx((function (){
if(cljs.core.truth_(send_message)){
var G__49642_49649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value__PERCENT_,val_in_unit], null);
(msg_handler.cljs$core$IFn$_invoke$arity$1 ? msg_handler.cljs$core$IFn$_invoke$arity$1(G__49642_49649) : msg_handler.call(null,G__49642_49649));

return (set_send_message_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_send_message_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_send_message_BANG_.call(null,false));
} else {
return null;
}
}));
var G__49641_49648 = [value__PERCENT_,val_in_unit,send_message];
(helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2 ? helix.hooks.raw_use_effect.cljs$core$IFn$_invoke$arity$2(G__49640_49647,G__49641_49648) : helix.hooks.raw_use_effect.call(null,G__49640_49647,G__49641_49648));

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [knob_ref,track_ref,fill_track_ref,knob_x,value__PERCENT_,val_in_unit,on_knob_down,on_track_down,on_fill_track_down], null);
});

//# sourceMappingURL=app.shared.sidebar.control_panel.slider.hook.js.map
