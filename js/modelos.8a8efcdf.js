(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modelos"],{"2b5d":function(t,e,i){"use strict";i("7db0"),i("c975"),i("fb6a"),i("a434"),i("b0c0"),i("d3b7"),i("25f0"),i("8a79");var n=i("5530"),s=(i("2bfd"),i("b974")),a=(i("4de4"),i("d81d"),i("45fc"),i("498a"),i("8654")),o=i("d9f7"),r=i("80d2"),l=Object(n["a"])(Object(n["a"])({},s["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),c=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,i){return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:function(){return l}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var i=Object(r["r"])(e,t.itemText),n=null!=i?String(i):"";return t.filter(e,String(t.internalSearch),n)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=s["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(n["a"])(Object(n["a"])({},l),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=s["a"].options.computed.listData.call(this);return t.props=Object(n["a"])(Object(n["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var i=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){i.internalSearch&&(1===t.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===r["x"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r["x"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r["x"].backspace&&t!==r["x"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var i=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===i){var n=this.selectedItems.length,s=t!==n-1?t:t-1,a=this.selectedItems[s];a?this.selectItem(e):this.setValue(this.multiple?[]:void 0),this.selectedIndex=s}else this.selectedIndex=i}},clearableCallback:function(){this.internalSearch=void 0,s["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.data=Object(o["a"])(t.data,{attrs:{"aria-activedescendant":Object(r["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["p"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=s["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,i=e.value;e.value&&this.activateMenu(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;s["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){s["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){s["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],i=this.getText(e);t.clipboardData.setData("text/plain",i),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}});e["a"]=c.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return s["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=c.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var i=this,a=s["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(a.componentOptions.listeners=Object(n["a"])(Object(n["a"])({},a.componentOptions.listeners),{},{dblclick:function(){i.editingIndex=e,i.internalSearch=i.getText(t),i.selectedIndex=-1}})),a},onChipInput:function(t){s["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&c.options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;s["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===r["x"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===r["x"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();c.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():c.options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){s["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var i=this.internalValue.slice();i.splice(e,1),this.setValue(i)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(t){if(this.multiple&&!this.searchIsDirty){var e=t.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");e&&-1===this.findExistingIndex(e)&&(t.preventDefault(),s["a"].options.methods.selectItem.call(this,e))}}}})},"2bfd":function(t,e,i){},"4bd4":function(t,e,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var n=i("5530"),s=i("58df"),a=i("7e2b"),o=i("3206");e["a"]=Object(s["a"])(a["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"748c":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("d4ec"),s=i("262e"),a=i("2caf"),o=i("ade3"),r=i("de4f"),l=function(t){Object(s["a"])(i,t);var e=Object(a["a"])(i);function i(){return Object(n["a"])(this,i),e.apply(this,arguments)}return i}(r["a"]);Object(o["a"])(l,"resource","/modelos")},"8a79":function(t,e,i){"use strict";var n=i("23e7"),s=i("06cf").f,a=i("50c4"),o=i("5a34"),r=i("1d80"),l=i("ab13"),c=i("c430"),u="".endsWith,d=Math.min,h=l("endsWith"),f=!c&&!h&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!f&&!h},{endsWith:function(t){var e=String(r(this));o(t);var i=arguments.length>1?arguments[1]:void 0,n=a(e.length),s=void 0===i?n:d(a(i),n),l=String(t);return u?u.call(e,l,s):e.slice(s-l.length,s)===l}})},d344:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.lModelo,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Cadastro de Modelos")]),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",s,!1),n),[t._v("Novo Item")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-combobox",{attrs:{items:t.lMarca,"item-text":"nomeMarca",label:"Marcas",outlined:"",required:"",rules:t.modeloRulesMarca},model:{value:t.editedItem.marca,callback:function(e){t.$set(t.editedItem,"marca",e)},expression:"editedItem.marca"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-text-field",{attrs:{label:"Modelo",outlined:"",required:"",counter:20,rules:t.modeloRulesNome},model:{value:t.editedItem.nomeModelo,callback:function(e){t.$set(t.editedItem,"nomeModelo",e)},expression:"editedItem.nomeModelo"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancelar")]),i("v-btn",{attrs:{disabled:!t.valid,color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Salvar")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v("mdi-pencil")]),i("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v("mdi-delete")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Resetar")])]},proxy:!0}])})},s=[],a=(i("c975"),i("a434"),i("ac1f"),i("841c"),i("748c")),o=i("f0b9"),r=a["a"].build(),l=o["a"].build(),c={novo:"Novo Modelo",edicao:"Edição de Modelo",exclusao:"Deseja mesmo remover este Modelo?"},u={name:"lModelo",components:{},data:function(){return{dialog:!1,valid:!0,modeloRulesMarca:[function(t){return!!t||"Preenchimento Necessário"}],modeloRulesNome:[function(t){return!!t||"Preenchimento Necessário"},function(t){return t&&t.length<=20&&t.length>=3||"O campo deve ter pelo menos 3 e no maximo 20 letras"}],headers:[{text:"ID",value:"id"},{text:"Nome",value:"nomeModelo"},{text:"Marca",value:"marca.nomeMarca"},{text:"Ações",align:"end",value:"actions",sortable:!1}],lModelo:[],lMarca:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?c.novo:c.edicao}},watch:{dialog:function(t){t||this.close()}},created:function(){this.fetchRecords(),this.fetchRecordsMarca()},methods:{fetchRecords:function(){r.search({}).then(this.fetchRecodsSuccess)},fetchRecordsMarca:function(){l.search({}).then(this.fetchRecodsSuccessMarca)},fetchRecodsSuccess:function(t){Array.isArray(t.rows)?this.lModelo=t.rows:this.lModelo=[]},fetchRecodsSuccessMarca:function(t){Array.isArray(t.rows)?this.lMarca=t.rows:this.lMarca=[]},editItem:function(t){this.editedIndex=this.lModelo.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this.lModelo.indexOf(t);confirm(c.exclusao)&&r.destroy(t).then(this.lModelo.splice(e,1))},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){var t=this;this.editedIndex>-1?(console.log(this.editedItem),r.update(this.editedItem).then(Object.assign(this.lModelo[this.editedIndex],this.editedItem))):r.create(this.editedItem).then((function(e){return t.lModelo.push(e)})),this.close()}}},d=u,h=i("2877"),f=i("6544"),m=i.n(f),p=i("8336"),v=i("b0af"),I=i("99d9"),g=i("62ad"),b=i("2b5d"),x=i("a523"),S=i("8fea"),y=i("169a"),V=i("4bd4"),D=i("132d"),M=i("0fd9"),w=i("2fa4"),C=i("8654"),O=i("71d9"),j=i("2a7f"),T=Object(h["a"])(d,n,s,!1,null,null,null);e["default"]=T.exports;m()(T,{VBtn:p["a"],VCard:v["a"],VCardActions:I["a"],VCardText:I["b"],VCardTitle:I["c"],VCol:g["a"],VCombobox:b["a"],VContainer:x["a"],VDataTable:S["a"],VDialog:y["a"],VForm:V["a"],VIcon:D["a"],VRow:M["a"],VSpacer:w["a"],VTextField:C["a"],VToolbar:O["a"],VToolbarTitle:j["a"]})},f0b9:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("d4ec"),s=i("262e"),a=i("2caf"),o=i("ade3"),r=i("de4f"),l=function(t){Object(s["a"])(i,t);var e=Object(a["a"])(i);function i(){return Object(n["a"])(this,i),e.apply(this,arguments)}return i}(r["a"]);Object(o["a"])(l,"resource","/marcas")}}]);
//# sourceMappingURL=modelos.8a8efcdf.js.map