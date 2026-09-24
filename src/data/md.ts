// Todo el contenido del sitio sale de aquí (fuente: "MD — Identidad Corporativa", sep 2026).
// Los datos de contacto vacíos no se muestran; al llenarlos aparecen solos en el sitio.

export const marca = {
  nombre: "MD",
  nombreLargo: "Mercadeo Digital",
  slogan: "Tu negocio, en modo digital.",
  alternativas: ["Automatiza. Crece. Domina.", "Estrategia que se mide."],
  descripcion:
    "Agencia de transformación digital: marketing, páginas web, bots, automatización, datos y consejería de negocio para que emprendedores y pymes vendan más y trabajen menos.",
  modalidad: "100 % digital, con atención remota y reuniones presenciales bajo cita.",
  respuesta: "Respondemos en menos de 24 horas hábiles.",
};

/** Llena estos campos para que aparezcan en el encabezado, pie y contacto. */
export const contacto = {
  whatsapp: "", // solo dígitos con lada de país, p. ej. "5215512345678"
  correo: "", // p. ej. "hola@tudominio.com"
  instagram: "", // URL completa
  linkedin: "",
  tiktok: "",
};

export const whatsappUrl = (texto: string) =>
  `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(texto)}`;

export const navegacion = [
  { href: "/servicios", etiqueta: "Servicios" },
  { href: "/paquetes", etiqueta: "Paquetes" },
  { href: "/metodo", etiqueta: "Método 360" },
  { href: "/para-quien", etiqueta: "Para quién" },
  { href: "/nosotros", etiqueta: "Nosotros" },
];

export type Servicio = {
  slug: string;
  nombre: string;
  codigo: string;
  resumen: string;
  gancho: string;
  incluye: string[];
  entregable: string;
  paraQuien: string;
  preguntas: { p: string; r: string }[];
};

export const servicios: Servicio[] = [
  {
    slug: "web",
    nombre: "MD Web",
    codigo: "01",
    resumen: "Landing pages, sitios corporativos y tiendas en línea rápidos y listos para Google.",
    gancho: "Tu sitio abre rápido, se ve profesional y aparece cuando te buscan.",
    incluye: [
      "Landing pages para campañas",
      "Sitios corporativos",
      "Tiendas en línea",
      "SEO técnico",
      "Hosting y dominio",
      "Mantenimiento mensual",
    ],
    entregable: "Sitio publicado, rápido y optimizado para Google",
    paraQuien: "Emprendedores sin presencia profesional, marcas personales y comercios que quieren vender en línea.",
    preguntas: [
      { p: "¿El dominio queda a mi nombre?", r: "Sí. Dominio, hosting, código y accesos quedan a tu nombre desde el primer día." },
      { p: "¿Puedo editar el contenido después?", r: "Sí. Te entregamos el sitio con una forma sencilla de actualizar textos e imágenes, o lo hacemos por ti en el plan de mantenimiento." },
      { p: "¿Incluye tienda en línea?", r: "Si vendes productos, montamos la tienda con catálogo, pagos y envíos. Lo definimos en el diagnóstico." },
    ],
  },
  {
    slug: "bots",
    nombre: "MD Bots",
    codigo: "02",
    resumen: "Chatbots con IA para WhatsApp, Instagram, Messenger y web que responden, agendan y venden.",
    gancho: "Ningún cliente se queda esperando: tu bot contesta a cualquier hora.",
    incluye: [
      "Bot para WhatsApp Business",
      "Bots para Instagram y Messenger",
      "Chat para tu sitio web",
      "Respuestas con IA en lenguaje natural",
      "Agenda de citas automática",
      "Conexión con tu CRM",
    ],
    entregable: "Bot activo 24/7 conectado al CRM",
    paraQuien: "Clínicas, despachos, inmobiliarias y academias que pierden clientes por no responder a tiempo.",
    preguntas: [
      { p: "¿El bot suena como robot?", r: "No. Usamos IA que entiende lenguaje natural y lo entrenamos con la información y el tono de tu negocio." },
      { p: "¿Qué pasa si el cliente quiere hablar con una persona?", r: "El bot detecta el caso y pasa la conversación a tu equipo con todo el contexto." },
      { p: "¿Puedo ver cómo funciona antes?", r: "Sí. Nuestro propio WhatsApp lo atiende el bot de MD: escríbenos y pruébalo." },
    ],
  },
  {
    slug: "social",
    nombre: "MD Social",
    codigo: "03",
    resumen: "Estrategia, contenido, community management y pauta en Meta, TikTok y Google.",
    gancho: "Publicar con plan, no cuando hay tiempo.",
    incluye: [
      "Estrategia de contenido",
      "Calendario mensual",
      "Diseño y copies",
      "Community management",
      "Pauta en Meta y TikTok",
      "Campañas en Google",
    ],
    entregable: "Crecimiento de comunidad y leads mensuales",
    paraQuien: "Marcas personales y negocios que venden por redes y necesitan constancia y autoridad.",
    preguntas: [
      { p: "¿Quién aprueba las publicaciones?", r: "Tú. Te enviamos el calendario del mes para aprobarlo antes de publicar." },
      { p: "¿El presupuesto de pauta está incluido?", r: "La gestión sí; la inversión en anuncios se paga directo a la plataforma, desde tu propia cuenta." },
    ],
  },
  {
    slug: "automatiza",
    nombre: "MD Automatiza",
    codigo: "04",
    resumen: "Flujos con n8n, Make o Zapier para CRM, facturación, correos, formularios y recordatorios.",
    gancho: "Las tareas repetitivas se hacen solas mientras tú atiendes el negocio.",
    incluye: [
      "Integración de CRM",
      "Facturación automática",
      "Correos y seguimientos",
      "Formularios conectados",
      "Recordatorios a clientes",
      "Integraciones entre apps",
    ],
    entregable: "Procesos que corren solos, horas ahorradas",
    paraQuien: "Comercios y empresas con procesos manuales: copiar datos, mandar recordatorios, pasar pedidos a Excel.",
    preguntas: [
      { p: "¿Qué herramientas usan?", r: "n8n, Make o Zapier, según tu volumen y presupuesto. Te recomendamos la que convenga en el diagnóstico." },
      { p: "¿Tengo que cambiar mis programas?", r: "Normalmente no. Conectamos lo que ya usas; solo proponemos cambios si te ahorran dinero o tiempo." },
    ],
  },
  {
    slug: "data",
    nombre: "MD Data",
    codigo: "05",
    resumen: "Dashboards de productividad y ventas en Looker Studio o Power BI, con reportes automáticos.",
    gancho: "Decide con datos, no con corazonadas.",
    incluye: [
      "Dashboard de ventas",
      "Tablero de productividad",
      "KPIs definidos contigo",
      "Looker Studio o Power BI",
      "Reportes automáticos",
      "Reporte mensual comentado",
    ],
    entregable: "Tablero en tiempo real + reporte mensual",
    paraQuien: "Empresas de 10 a 100 empleados que necesitan control de productividad y ventas.",
    preguntas: [
      { p: "¿De dónde salen los datos?", r: "De lo que ya usas: tu CRM, tienda, hojas de cálculo, redes y pauta. Los conectamos para que el tablero se actualice solo." },
      { p: "¿Necesito saber de análisis?", r: "No. Cada mes te explicamos qué pasó y qué conviene hacer después, en lenguaje claro." },
    ],
  },
  {
    slug: "consulting",
    nombre: "MD Consulting",
    codigo: "06",
    resumen: "Diagnóstico digital, plan de negocio, embudos de venta, precios y acompañamiento estratégico.",
    gancho: "Un socio que te dice qué hacer después, con números.",
    incluye: [
      "Diagnóstico digital",
      "Plan de negocio",
      "Embudos de venta",
      "Estrategia de precios",
      "Acompañamiento mensual",
      "Hoja de ruta a 90 días",
    ],
    entregable: "Hoja de ruta de crecimiento a 90 días",
    paraQuien: "Dueños de negocio que quieren crecer con orden y tomar decisiones de precio, embudo y crecimiento con datos.",
    preguntas: [
      { p: "¿Es solo técnica?", r: "No. Acompañamos decisiones de negocio: precios, embudo de ventas y prioridades de crecimiento." },
      { p: "¿Cuánto dura?", r: "El diagnóstico entrega una hoja de ruta a 90 días. Después puedes seguir con acompañamiento mensual." },
    ],
  },
];

export const servicioPorSlug = (slug: string) => servicios.find((s) => s.slug === slug);

export const paquetes = [
  {
    id: "arranque",
    nombre: "Arranque Digital",
    lema: "Para salir al mundo digital con buena cara.",
    unidades: ["web", "social"],
    incluye: ["Landing o sitio web", "Redes sociales con estrategia", "Diseño y copies", "Reporte mensual"],
    ideal: "Emprendedores y marcas personales",
  },
  {
    id: "ventas",
    nombre: "Ventas 24/7",
    lema: "Para que ningún cliente se quede sin respuesta.",
    unidades: ["bots", "automatiza"],
    incluye: ["Bot con IA para WhatsApp", "Automatización de seguimientos", "CRM configurado", "Agenda automática"],
    ideal: "Pymes de servicios y comercios",
    destacado: true,
  },
  {
    id: "socio",
    nombre: "Socio MD",
    lema: "Todo incluido, con consejería mensual.",
    unidades: ["web", "bots", "social", "automatiza", "data", "consulting"],
    incluye: ["Las seis unidades de MD", "Dashboard de productividad", "Consejería estratégica mensual", "Un solo equipo y un solo contacto"],
    ideal: "Empresas en crecimiento",
  },
];

export const fases = [
  { n: 1, nombre: "Diagnóstico", detalle: "Auditoría digital", texto: "Revisamos tu sitio, redes, procesos y números para saber dónde estás y qué te está costando clientes.", entregable: "Informe de auditoría digital" },
  { n: 2, nombre: "Idea y diseño", detalle: "Propuesta y prototipo", texto: "Diseñamos la solución y te mostramos un prototipo antes de construir, con cotización desglosada.", entregable: "Propuesta y prototipo aprobado" },
  { n: 3, nombre: "Montaje", detalle: "Desarrollo e integración", texto: "Construimos el sitio, el bot o la automatización y lo conectamos con las herramientas que ya usas.", entregable: "Solución integrada en ambiente de pruebas" },
  { n: 4, nombre: "Ejecución", detalle: "Lanzamiento y pruebas", texto: "Lanzamos, probamos con clientes reales y corregimos lo necesario en los primeros días.", entregable: "Lanzamiento en producción" },
  { n: 5, nombre: "Medición", detalle: "Dashboard y mejora", texto: "Medimos resultados en tu tablero y decidimos qué ajustar. Luego el ciclo vuelve a empezar.", entregable: "Tablero de KPIs y reporte" },
];

export const valores = [
  { nombre: "Resultados medibles", texto: "Todo proyecto tiene KPIs y un reporte; si no se mide, no se entrega." },
  { nombre: "Transparencia", texto: "Cotizaciones desglosadas, sin costos ocultos; el cliente es dueño de sus accesos y datos." },
  { nombre: "Innovación constante", texto: "Adoptamos IA, automatización y nuevas plataformas antes que la competencia." },
  { nombre: "Cercanía", texto: "Hablamos claro, sin tecnicismos, y respondemos en menos de 24 horas hábiles." },
  { nombre: "Responsabilidad", texto: "Cumplimos plazos y cuidamos la privacidad y seguridad de la información." },
  { nombre: "Mejora continua", texto: "Optimizamos campañas, bots y procesos mes a mes con base en datos." },
];

export const diferenciadores = [
  { titulo: "Todo en un solo lugar", texto: "Web, bots, redes, automatización, datos y estrategia sin coordinar cinco agencias." },
  { titulo: "IA aplicada de verdad", texto: "Bots que entienden lenguaje natural y automatizaciones que ahorran horas reales." },
  { titulo: "Tablero de productividad incluido", texto: "Ves en gráficas qué se hizo y qué resultado dio." },
  { titulo: "Precios transparentes y escalables", texto: "Planes desde emprendedores hasta empresas medianas." },
  { titulo: "Consejería de negocio, no solo técnica", texto: "Te acompañamos en decisiones de precio, embudo y crecimiento." },
  { titulo: "Eres dueño de todo", texto: "Dominio, cuentas, código y datos quedan a tu nombre." },
];

export const segmentos = [
  { id: "emprendedor", nombre: "Emprendedores", perfil: "Negocio de 0 a 2 años que vende por redes", dolor: "No tienes presencia profesional ni tiempo", entrada: "Landing + redes básicas", servicios: ["web", "social"] },
  { id: "servicios", nombre: "Pymes de servicios", perfil: "Clínicas, despachos, inmobiliarias, academias", dolor: "Pierdes clientes por no responder rápido", entrada: "Bot de WhatsApp + agenda", servicios: ["bots", "automatiza"] },
  { id: "comercio", nombre: "Comercios y e-commerce", perfil: "Tiendas físicas o en línea", dolor: "Ventas estancadas y procesos manuales", entrada: "Tienda en línea + automatización", servicios: ["web", "automatiza"] },
  { id: "empresa", nombre: "Empresas en crecimiento", perfil: "De 10 a 100 empleados", dolor: "Falta de datos y control de productividad", entrada: "Dashboards + consultoría", servicios: ["data", "consulting"] },
  { id: "marca", nombre: "Marcas personales", perfil: "Coaches, creadores, profesionistas", dolor: "Poca autoridad digital", entrada: "Web personal + contenido", servicios: ["web", "social"] },
];

export const nosotros = {
  quienes:
    "MD es una agencia de transformación digital que ayuda a emprendedores, pymes y marcas a vender más y trabajar menos gracias a la tecnología. Unimos marketing digital, desarrollo web, bots conversacionales y automatización de procesos con consejería de negocios, para que cada peso invertido en lo digital tenga un retorno medible.",
  socio:
    "No somos solo proveedores de servicios: somos el socio digital de nuestros clientes. Diagnosticamos, diseñamos, implementamos y medimos, con reportes claros y gráficas de productividad que muestran el avance real del negocio.",
  mision:
    "Impulsar el crecimiento de negocios y marcas mediante soluciones digitales integrales —marketing, páginas web, bots, automatizaciones y consejería estratégica— que aumenten sus ventas, optimicen su tiempo y conviertan sus datos en decisiones.",
  vision:
    "Ser en 2030 la agencia de referencia en Latinoamérica para pymes que buscan digitalizarse, reconocida por resultados medibles, tecnología de vanguardia e inteligencia artificial aplicada al día a día de cada negocio.",
  proposito:
    "Que ningún negocio se quede atrás por falta de tecnología: hacer accesible la automatización y la inteligencia artificial para cualquier emprendedor.",
};

export const areas = [
  { nombre: "Dirección general", texto: "Estrategia y consejería" },
  { nombre: "Comercial", texto: "Ventas y cuentas" },
  { nombre: "Marketing", texto: "Redes, contenido y pauta" },
  { nombre: "Tecnología", texto: "Web, bots y automatización" },
  { nombre: "Datos", texto: "Dashboards y KPIs" },
];
