(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["feedbacks"],{"7f95":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.feedbacks,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Cadastro de FeedBacks")]),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,o=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),i),[e._v("Novo Item")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Ordem De Serviço",outlined:""},model:{value:e.editedItem.ordem,callback:function(t){e.$set(e.editedItem,"ordem",t)},expression:"editedItem.ordem"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{label:"Comentário",outlined:""},model:{value:e.editedItem.comentario,callback:function(t){e.$set(e.editedItem,"comentario",t)},expression:"editedItem.comentario"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-select",{attrs:{items:e.satisfacaos,"item-text":"nome",label:"Satisfação",outlined:""},model:{value:e.editedItem.satisfacao,callback:function(t){e.$set(e.editedItem,"satisfacao",t)},expression:"editedItem.satisfacao"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Salvar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v("mdi-pencil")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v("mdi-delete")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Resetar")])]},proxy:!0}])})},o=[],s=(a("c975"),a("a434"),{data:function(){return{dialog:!1,headers:[{text:"ID",value:"id"},{text:"Ordem de Serviço",align:"start",value:"ordem"},{text:"Satisfação",align:"start",value:"satisfacao"},{text:"Ações",value:"actions",sortable:!1}],feedbacks:[],satisfacaos:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?"Cadastrar FeedBack:":"Editar FeedBack:"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.satisfacaos=[{id:1,nome:"Ruim"},{id:2,nome:"Bom"},{id:3,nome:"Muito Bom"},{id:4,nome:"Ótimo"},{id:5,nome:"Exelente"}],this.feedbacks=[{id:1,ordem:"1234567",comentario:"Ficou Muito Bom!",satisfacao:"Muito Bom"},{id:2,ordem:"456789",comentario:"Parabens Muito Bom!",satisfacao:"Ótimo"},{id:3,ordem:"4567849",comentario:"Ficou Muito Bom!",satisfacao:"Exelente"},{id:4,ordem:"456897",comentario:"Top demais",satisfacao:"Bom"},{id:5,ordem:"225489",comentario:"massa, muito top",satisfacao:"Muito Bom"}]},editItem:function(e){this.editedIndex=this.feedbacks.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.feedbacks.indexOf(e);confirm("Você tem certeza que deseja apagar este item?")&&this.feedbacks.splice(t,1)},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.feedbacks[this.editedIndex],this.editedItem):this.feedbacks.push(this.editedItem),this.close()}}}),d=s,n=a("2877"),c=a("6544"),r=a.n(c),l=a("8336"),m=a("b0af"),f=a("99d9"),u=a("62ad"),v=a("a523"),b=a("8fea"),x=a("169a"),h=a("132d"),k=a("0fd9"),p=a("b974"),I=a("2fa4"),V=a("8654"),g=a("71d9"),_=a("2a7f"),C=Object(n["a"])(d,i,o,!1,null,null,null);t["default"]=C.exports;r()(C,{VBtn:l["a"],VCard:m["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:u["a"],VContainer:v["a"],VDataTable:b["a"],VDialog:x["a"],VIcon:h["a"],VRow:k["a"],VSelect:p["a"],VSpacer:I["a"],VTextField:V["a"],VToolbar:g["a"],VToolbarTitle:_["a"]})}}]);
//# sourceMappingURL=feedbacks.8d55f542.js.map