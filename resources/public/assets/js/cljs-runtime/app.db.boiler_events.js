goog.provide('app.db.boiler_events');
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-water-level","change-boiler-water-level",273919073),(function (p__44474,p__44475){
var map__44477 = p__44474;
var map__44477__$1 = cljs.core.__destructure_map(map__44477);
var db = map__44477__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44477__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__44478 = p__44475;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44478,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44478,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),(function (p__44484,p__44485){
var map__44486 = p__44484;
var map__44486__$1 = cljs.core.__destructure_map(map__44486);
var db = map__44486__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44486__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__44487 = p__44485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44487,(0),null);
var vec__44490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44487,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44490,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44490,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),(function (p__44505,p__44506){
var map__44508 = p__44505;
var map__44508__$1 = cljs.core.__destructure_map(map__44508);
var db = map__44508__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44508__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__44509 = p__44506;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44509,(0),null);
var vec__44512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44509,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44512,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44512,(1),null);
return cljs.core.assoc_in(db,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662)], null),path),value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-settings-form-pressure-value","change-boiler-settings-form-pressure-value",1354508668),(function (p__44520,p__44521){
var map__44523 = p__44520;
var map__44523__$1 = cljs.core.__destructure_map(map__44523);
var db = map__44523__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44523__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__44524 = p__44521;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44524,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44524,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__44530 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"psi")){
return (G__44530 * 0.06894744825494);
} else {
return G__44530;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));
refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change-boiler-settings-form-conductivity-value","change-boiler-settings-form-conductivity-value",733480725),(function (p__44538,p__44539){
var map__44542 = p__44538;
var map__44542__$1 = cljs.core.__destructure_map(map__44542);
var db = map__44542__$1;
var kit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44542__$1,new cljs.core.Keyword(null,"kit","kit",-1785767367));
var vec__44543 = p__44539;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44543,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44543,(1),null);
var kit_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kit);
var unit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null));
var converted_value = (function (){var G__44550 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,"ppm")){
return (G__44550 * (2));
} else {
return G__44550;
}
})();
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [kit_kw,new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"value","value",305978217)], null),converted_value);
}));

//# sourceMappingURL=app.db.boiler_events.js.map
