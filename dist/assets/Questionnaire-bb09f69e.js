var e=(e,s,t)=>new Promise((a,l)=>{var r=e=>{try{n(t.next(e))}catch(s){l(s)}},i=e=>{try{n(t.throw(e))}catch(s){l(s)}},n=e=>e.done?a(e.value):Promise.resolve(e.value).then(r,i);n((t=t.apply(e,s)).next())});import{s,j as t,G as a}from"./auth-3ab59eff.js";import{r as l}from"./react-vendor-99be060c.js";import{Q as r}from"./ui-vendor-9705a4a1.js";import{T as i}from"./TestCard-4e5c662a.js";import{P as n}from"./admin-168d579d.js";import"./utils-vendor-4d1206d7.js";import"./index-23a57a03.js";const o=()=>{const[o,c]=l.useState([]),[d,x]=l.useState(null),[m,b]=l.useState(""),[u,g]=l.useState(!1),[p,f]=l.useState([]),[h,j]=l.useState(!1),[N,v]=l.useState("E");l.useEffect(()=>{y()},[]),l.useEffect(()=>{d&&C(d.id)},[d]);const y=()=>e(void 0,null,function*(){try{g(!0);const{data:e,error:t}=yield s.from("pacientes").select("\n          id,\n          nombre,\n          apellido,\n          documento,\n          email,\n          telefono,\n          genero,\n          fecha_nacimiento\n        ").order("nombre",{ascending:!0});if(t)throw t;c(e||[])}catch(e){r.error("Error al cargar la lista de pacientes")}finally{g(!1)}}),C=t=>e(void 0,null,function*(){try{j(!0);const{data:e,error:a}=yield s.from("resultados").select("\n          *,\n          aptitudes:aptitud_id (\n            codigo,\n            nombre,\n            descripcion\n          )\n        ").eq("paciente_id",t).order("created_at",{ascending:!1});if(a)throw a;f(e||[])}catch(e){r.error("Error al cargar los resultados del paciente")}finally{j(!1)}}),w=o.filter(e=>e.nombre.toLowerCase().includes(m.toLowerCase())||e.apellido.toLowerCase().includes(m.toLowerCase())||e.documento&&e.documento.toLowerCase().includes(m.toLowerCase())),E={E:{code:"E",name:"Nivel E (Escolar)",subtitle:"Estudiantes Básicos",description:"Tests diseñados para estudiantes de educación básica y media",icon:"fas fa-graduation-cap",color:"green",bgClass:"bg-green-50",borderClass:"border-green-200",textClass:"text-green-700",iconBg:"bg-green-100",available:!0},M:{code:"M",name:"Nivel M (Media)",subtitle:"Media Vocacional",description:"Tests para estudiantes de educación media vocacional y técnica",icon:"fas fa-tools",color:"blue",bgClass:"bg-blue-50",borderClass:"border-blue-200",textClass:"text-blue-700",iconBg:"bg-blue-100",available:!1},S:{code:"S",name:"Nivel S (Superior)",subtitle:"Selección Laboral",description:"Tests para selección de personal y evaluación profesional",icon:"fas fa-briefcase",color:"purple",bgClass:"bg-purple-50",borderClass:"border-purple-200",textClass:"text-purple-700",iconBg:"bg-purple-100",available:!1}},k={E:[{id:"verbal",title:"Aptitud Verbal",description:"Evaluación de analogías verbales y comprensión de relaciones entre conceptos",time:12,questions:32,iconClass:"fas fa-comments",bgClass:"bg-blue-100",textClass:"text-blue-600",buttonColor:"blue",abbreviation:"V"},{id:"espacial",title:"Aptitud Espacial",description:"Razonamiento espacial con cubos y redes geométricas",time:15,questions:28,iconClass:"fas fa-cube",bgClass:"bg-indigo-100",textClass:"text-indigo-600",buttonColor:"indigo",abbreviation:"E"},{id:"atencion",title:"Atención",description:"Rapidez y precisión en la localización de símbolos específicos",time:8,questions:80,iconClass:"fas fa-eye",bgClass:"bg-red-100",textClass:"text-red-600",buttonColor:"red",abbreviation:"A"},{id:"razonamiento",title:"Razonamiento",description:"Continuar series lógicas de figuras y patrones",time:20,questions:32,iconClass:"fas fa-puzzle-piece",bgClass:"bg-amber-100",textClass:"text-amber-600",buttonColor:"amber",abbreviation:"R"},{id:"numerico",title:"Aptitud Numérica",description:"Resolución de igualdades, series numéricas y análisis de datos",time:20,questions:30,iconClass:"fas fa-calculator",bgClass:"bg-teal-100",textClass:"text-teal-600",buttonColor:"teal",abbreviation:"N"},{id:"mecanico",title:"Aptitud Mecánica",description:"Comprensión de principios físicos y mecánicos básicos",time:12,questions:28,iconClass:"fas fa-cogs",bgClass:"bg-slate-100",textClass:"text-slate-600",buttonColor:"slate",abbreviation:"M"},{id:"ortografia",title:"Ortografía",description:"Identificación de palabras con errores ortográficos",time:10,questions:32,iconClass:"fas fa-spell-check",bgClass:"bg-green-100",textClass:"text-green-600",buttonColor:"green",abbreviation:"O"}],M:[],S:[]};return t.jsxs("div",{children:[t.jsx(n,{title:"Cuestionario de Evaluación",subtitle:"Selecciona un paciente para ver sus resultados y aplicar nuevos tests",icon:a}),t.jsxs("div",{className:"container mx-auto px-4 py-8",children:[t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:[t.jsx("i",{className:"fas fa-layer-group mr-2 text-indigo-600"}),"Seleccionar Nivel de Evaluación"]}),t.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto"}),t.jsx("p",{className:"text-gray-600 mt-4",children:"Elige el nivel educativo apropiado para la evaluación del paciente"})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto",children:Object.values(E).map(e=>t.jsxs("div",{onClick:()=>e.available&&v(e.code),className:"relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 "+(N===e.code?`${e.borderClass} ${e.bgClass} shadow-lg ring-2 ring-${e.color}-300`:e.available?`border-gray-200 bg-white hover:${e.bgClass} hover:${e.borderClass} shadow-md`:"border-gray-200 bg-gray-50 cursor-not-allowed opacity-60"),children:[t.jsx("div",{className:"absolute top-3 right-3",children:e.available?t.jsxs("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800",children:[t.jsx("i",{className:"fas fa-check-circle mr-1"}),"Disponible"]}):t.jsxs("span",{className:"inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800",children:[t.jsx("i",{className:"fas fa-clock mr-1"}),"En desarrollo"]})}),t.jsx("div",{className:`inline-flex items-center justify-center w-16 h-16 ${e.iconBg} rounded-full mb-4`,children:t.jsx("i",{className:`${e.icon} text-2xl ${e.textClass}`})}),t.jsxs("div",{className:"text-center",children:[t.jsxs("h3",{className:`text-lg font-bold mb-1 ${N===e.code?e.textClass:"text-gray-900"}`,children:["📗 ",e.name]}),t.jsx("p",{className:`text-sm font-medium mb-2 ${N===e.code?e.textClass:"text-gray-600"}`,children:e.subtitle}),t.jsx("p",{className:`text-sm ${N===e.code?e.textClass:"text-gray-500"}`,children:e.description})]}),N===e.code&&t.jsx("div",{className:"absolute inset-0 rounded-xl border-2 border-transparent",children:t.jsx("div",{className:`absolute top-2 left-2 w-6 h-6 ${e.iconBg} rounded-full flex items-center justify-center`,children:t.jsx("i",{className:`fas fa-check text-sm ${e.textClass}`})})}),!e.available&&t.jsx("div",{className:"mt-4 p-3 bg-gray-100 rounded-lg",children:t.jsxs("p",{className:"text-xs text-gray-600 text-center",children:[t.jsx("i",{className:"fas fa-info-circle mr-1"}),"Este nivel estará disponible próximamente"]})})]},e.code))}),N&&t.jsx("div",{className:"mt-6 max-w-3xl mx-auto",children:t.jsx("div",{className:`p-4 rounded-lg ${E[N].bgClass} ${E[N].borderClass} border`,children:t.jsxs("div",{className:"flex items-center justify-center",children:[t.jsx("div",{className:`w-8 h-8 ${E[N].iconBg} rounded-full flex items-center justify-center mr-3`,children:t.jsx("i",{className:`${E[N].icon} ${E[N].textClass}`})}),t.jsxs("div",{className:"text-center",children:[t.jsxs("p",{className:`font-medium ${E[N].textClass}`,children:["Nivel seleccionado: ",E[N].name]}),t.jsxs("p",{className:`text-sm ${E[N].textClass} opacity-80`,children:[k[N].length," tests disponibles para este nivel"]})]})]})})})]}),t.jsxs("div",{className:"bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8",children:[t.jsxs("h2",{className:"text-xl font-semibold text-gray-800 mb-4",children:[t.jsx("i",{className:"fas fa-search mr-2 text-blue-600"}),"Buscar Paciente"]}),t.jsxs("div",{className:"relative",children:[t.jsx("input",{type:"text",placeholder:"Buscar por nombre, apellido o documento...",value:m,onChange:e=>b(e.target.value),className:"w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),t.jsx("i",{className:"fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),d&&t.jsx("button",{onClick:()=>{x(null),b(""),f([])},className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:t.jsx("i",{className:"fas fa-times"})})]}),m&&!d&&t.jsx("div",{className:"mt-4 max-h-60 overflow-y-auto border border-gray-200 rounded-lg",children:u?t.jsxs("div",{className:"p-4 text-center",children:[t.jsx("i",{className:"fas fa-spinner fa-spin mr-2"}),"Cargando pacientes..."]}):w.length>0?w.map(e=>t.jsx("div",{onClick:()=>(e=>{x(e),b(`${e.nombre} ${e.apellido}`)})(e),className:"p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:[t.jsxs("p",{className:"font-medium text-gray-900",children:[e.nombre," ",e.apellido]}),t.jsxs("p",{className:"text-sm text-gray-500",children:[e.documento&&`Doc: ${e.documento}`,e.email&&` • ${e.email}`]})]}),t.jsx("i",{className:"fas fa-chevron-right text-gray-400"})]})},e.id)):t.jsx("div",{className:"p-4 text-center text-gray-500",children:"No se encontraron pacientes que coincidan con la búsqueda"})})]}),d&&t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:[t.jsx("i",{className:"fas fa-user-check mr-2 text-green-600"}),"Paciente Seleccionado"]}),t.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto"})]}),t.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-5xl mx-auto",children:[t.jsx("div",{className:"flex items-center justify-center mb-6",children:t.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg",children:"masculino"===d.genero?t.jsx("i",{className:"fas fa-mars text-white text-xl"}):"femenino"===d.genero?t.jsx("i",{className:"fas fa-venus text-white text-xl"}):t.jsx("i",{className:"fas fa-user text-white text-xl"})})}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[t.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100",children:[t.jsx("label",{className:"block text-sm font-medium text-blue-700 mb-2",children:"Nombre Completo"}),t.jsxs("p",{className:"text-lg font-semibold text-gray-900",children:[d.nombre," ",d.apellido]})]}),d.documento&&t.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100",children:[t.jsx("label",{className:"block text-sm font-medium text-green-700 mb-2",children:"Documento"}),t.jsx("p",{className:"text-lg font-semibold text-gray-900",children:d.documento})]}),d.email&&t.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-100",children:[t.jsx("label",{className:"block text-sm font-medium text-purple-700 mb-2",children:"Email"}),t.jsx("p",{className:"text-lg font-semibold text-gray-900 truncate",children:d.email})]}),d.genero&&t.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border border-pink-100",children:[t.jsx("label",{className:"block text-sm font-medium text-pink-700 mb-2",children:"Género"}),t.jsx("p",{className:"text-lg font-semibold text-gray-900 capitalize",children:d.genero})]}),d.fecha_nacimiento&&t.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-100",children:[t.jsx("label",{className:"block text-sm font-medium text-orange-700 mb-2",children:"Fecha de Nacimiento"}),t.jsx("p",{className:"text-lg font-semibold text-gray-900",children:new Date(d.fecha_nacimiento).toLocaleDateString("es-ES")})]}),t.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border border-teal-100",children:[t.jsx("label",{className:"block text-sm font-medium text-teal-700 mb-2",children:"Estado"}),t.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800",children:[t.jsx("i",{className:"fas fa-check-circle mr-1"}),"Activo"]})]})]})]})]}),d&&t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:[t.jsx("i",{className:"fas fa-chart-bar mr-2 text-purple-600"}),"Resultados de Tests Aplicados"]}),t.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto"})]}),t.jsx("div",{className:"bg-white rounded-xl shadow-lg border border-gray-100 max-w-6xl mx-auto overflow-hidden",children:h?t.jsxs("div",{className:"text-center py-12",children:[t.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4",children:t.jsx("i",{className:"fas fa-spinner fa-spin text-purple-600 text-xl"})}),t.jsx("p",{className:"text-gray-600 font-medium",children:"Cargando resultados..."})]}):p.length>0?t.jsxs("div",{className:"p-6",children:[t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg",children:[t.jsx("div",{className:"text-2xl font-bold text-blue-600",children:p.length}),t.jsx("div",{className:"text-sm text-blue-700",children:"Tests Completados"})]}),t.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg",children:[t.jsx("div",{className:"text-2xl font-bold text-green-600",children:Math.round(p.reduce((e,s)=>e+(s.puntaje_directo||0),0)/p.length)}),t.jsx("div",{className:"text-sm text-green-700",children:"Promedio PD"})]}),t.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg",children:[t.jsx("div",{className:"text-2xl font-bold text-purple-600",children:new Date(Math.max(...p.map(e=>new Date(e.created_at)))).toLocaleDateString("es-ES")}),t.jsx("div",{className:"text-sm text-purple-700",children:"Último Test"})]})]}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[t.jsx("thead",{className:"bg-gradient-to-r from-gray-50 to-gray-100",children:t.jsxs("tr",{children:[t.jsxs("th",{className:"px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider",children:[t.jsx("i",{className:"fas fa-clipboard-list mr-1"}),"Test"]}),t.jsxs("th",{className:"px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider",children:[t.jsx("i",{className:"fas fa-bullseye mr-1"}),"Puntaje Directo (PD)"]}),t.jsxs("th",{className:"px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider",children:[t.jsx("i",{className:"fas fa-percentage mr-1"}),"Percentil (PC)"]}),t.jsxs("th",{className:"px-6 py-4 text-center text-xs font-bold text-gray-700 uppercase tracking-wider",children:[t.jsx("i",{className:"fas fa-calendar mr-1"}),"Fecha"]})]})}),t.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:p.map((e,s)=>{var a,l,r,i,n,o,c,d,x;return t.jsxs("tr",{className:"hover:bg-gray-50 transition-colors "+(s%2==0?"bg-white":"bg-gray-25"),children:[t.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-center",children:t.jsxs("div",{className:"flex items-center justify-center",children:[t.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mr-2 "+("V"===(null==(a=e.aptitudes)?void 0:a.codigo)?"bg-blue-100 text-blue-800":"E"===(null==(l=e.aptitudes)?void 0:l.codigo)?"bg-indigo-100 text-indigo-800":"A"===(null==(r=e.aptitudes)?void 0:r.codigo)?"bg-red-100 text-red-800":"R"===(null==(i=e.aptitudes)?void 0:i.codigo)?"bg-amber-100 text-amber-800":"N"===(null==(n=e.aptitudes)?void 0:n.codigo)?"bg-teal-100 text-teal-800":"M"===(null==(o=e.aptitudes)?void 0:o.codigo)?"bg-slate-100 text-slate-800":"O"===(null==(c=e.aptitudes)?void 0:c.codigo)?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"),children:(null==(d=e.aptitudes)?void 0:d.codigo)||"N/A"}),t.jsx("div",{className:"text-sm font-medium text-gray-900",children:(null==(x=e.aptitudes)?void 0:x.nombre)||"N/A"})]})}),t.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-center",children:t.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-800",children:e.puntaje_directo||"N/A"})}),t.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-center",children:t.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800",children:e.percentil||"Pendiente"})}),t.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-center text-sm text-gray-600",children:new Date(e.created_at).toLocaleDateString("es-ES",{day:"2-digit",month:"short",year:"numeric"})})]},e.id)})})]})})]}):t.jsxs("div",{className:"text-center py-12",children:[t.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4",children:t.jsx("i",{className:"fas fa-clipboard-check text-3xl text-gray-400"})}),t.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Sin resultados registrados"}),t.jsx("p",{className:"text-gray-500 mb-4",children:"Este paciente no tiene resultados de tests registrados"}),t.jsx("p",{className:"text-sm text-gray-400",children:"Aplica tests usando las opciones de abajo"})]})})]}),t.jsxs("div",{className:"mb-8",children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:[t.jsx("i",{className:"fas fa-clipboard-list mr-2 text-blue-600"}),"Tests Disponibles - ",E[N].name]}),t.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"}),t.jsx("p",{className:"text-gray-600 mt-4",children:E[N].description})]}),!d&&t.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 max-w-4xl mx-auto",children:t.jsxs("div",{className:"flex items-center justify-center",children:[t.jsx("i",{className:"fas fa-info-circle text-yellow-600 mr-2"}),t.jsx("p",{className:"text-yellow-800",children:"Selecciona un paciente para poder aplicar los tests y guardar los resultados"})]})}),!E[N].available&&t.jsx("div",{className:"bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6 max-w-4xl mx-auto",children:t.jsxs("div",{className:"text-center",children:[t.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4",children:t.jsx("i",{className:"fas fa-tools text-orange-600 text-2xl"})}),t.jsx("h3",{className:"text-lg font-semibold text-orange-800 mb-2",children:"Nivel en Desarrollo"}),t.jsxs("p",{className:"text-orange-700 mb-4",children:["Los tests para ",E[N].name," están actualmente en desarrollo."]}),t.jsx("p",{className:"text-sm text-orange-600",children:"Por favor, selecciona el Nivel E (Escolar) que está completamente disponible."})]})}),E[N].available&&t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr max-w-7xl mx-auto",children:k[N].map(e=>t.jsx(i,{test:e,iconClass:e.iconClass,bgClass:e.bgClass,textClass:e.textClass,buttonColor:e.buttonColor,abbreviation:e.abbreviation,showButton:!!d,disabled:!d,patientId:null==d?void 0:d.id,level:N},e.id))})]})]})]})};export{o as default};
