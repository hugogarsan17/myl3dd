export type BlogSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: BlogSection[];
  keyTakeaways: string[];
  conclusion: string[];
};

const posts: BlogPost[] = [
  {
    slug: "eventos-hibridos",
    title: "Cómo planificar un evento híbrido con éxito",
    description:
      "Checklist técnico, guion y coordinación para combinar asistentes presenciales y online sin perder calidad audiovisual.",
    category: "Eventos corporativos",
    readTime: "6 min de lectura",
    date: "2024-03-12",
    excerpt:
      "Analizamos los elementos esenciales para sincronizar producción audiovisual, streaming y participación de la audiencia en eventos híbridos de gran escala.",
    heroEyebrow: "Eventos corporativos",
    heroTitle: "Cómo planificar un evento híbrido con éxito",
    heroSubtitle:
      "Integra realización multicámara, plataformas de streaming y dinamización remota con un plan de producción coordinado.",
    sections: [
      {
        title: "Define objetivos y guioniza la experiencia",
        paragraphs: [
          "Empieza identificando qué métricas validarán el éxito del evento: número de conexiones concurrentes, nivel de interacción o leads generados. Con esa brújula podrás guionizar un recorrido coherente para los dos públicos.",
          "Diseña un rundown que sincronice los bloques presenciales con los segmentos digitales. Incluye transiciones específicas para la audiencia remota —cápsulas de vídeo, entrevistas o gráficos— que eviten tiempos muertos mientras hay cambios de escena en sala.",
        ],
        bullets: [
          "Define anfitriones para cada audiencia (presentador en sala y host digital).",
          "Reserva momentos exclusivos para networking virtual (salas paralelas o breakouts moderados).",
          "Prepara mensajes de contingencia ante posibles retrasos o incidencias técnicas.",
        ],
      },
      {
        title: "Asegura la fiabilidad del streaming",
        paragraphs: [
          "Selecciona una plataforma que soporte la escala prevista y ofrezca opciones de interacción: Q&A moderado, encuestas en directo o traducción simultánea si la audiencia es internacional.",
          "Trabaja con enlaces de internet dedicados con redundancia. Configura codificadores por duplicado y rutas alternativas de audio para garantizar continuidad en caso de fallo.",
        ],
        bullets: [
          "Evalúa bitrate óptimo según la calidad de cámara y la capacidad de descarga del público.",
          "Integra señal limpia (clean feed) para las versiones internacionales del evento.",
          "Incluye pruebas de estrés con invitados reales al menos 72 horas antes.",
        ],
      },
      {
        title: "Coordina al equipo audiovisual",
        paragraphs: [
          "Un evento híbrido requiere un director técnico que gestione cámaras, grafismos, microfonía y mezcla en vivo, además de un stage manager que sincronice ponentes y tiempos.",
          "Agrupa la producción en un único intercom para que todos los roles compartan cue. Documenta la asignación de responsabilidades por bloque y genera un plan de backups para micrófonos, ordenadores y monitores.",
        ],
      },
      {
        title: "Impulsa la participación",
        paragraphs: [
          "Ofrece incentivos a quienes participen en dinámicas interactivas: sorteos, acceso a material descargable o sesiones de consultoría. Utiliza paneles LED o displays en sala para reflejar preguntas del público remoto y fomentar que los asistentes presenciales también respondan.",
          "Tras el evento, automatiza un flujo de nurturing con el resumen en vídeo, métricas y CTA personalizados según la asistencia (en sala vs. online).",
        ],
      },
    ],
    keyTakeaways: [
      "Un guion sincronizado evita fricciones entre las audiencias presencial y remota.",
      "La redundancia en red y codificadores es imprescindible para garantizar el directo.",
      "La interacción debe planificarse igual que el contenido para mantener la atención.",
    ],
    conclusion: [
      "Una producción híbrida impecable nace de la preparación minuciosa y de la coordinación entre equipos técnicos, speakers y responsables de contenidos.",
      "Si necesitas acompañamiento, podemos analizar el proyecto y coordinar los recursos técnicos y profesionales especializados que requiera.",
    ],
  },
  {
    slug: "pantallas-led-vs-lcd",
    title: "Pantallas LED vs. LCD: cuál es la mejor opción para tu espacio comercial",
    description:
      "Comparamos tecnologías, costes operativos y mantenimiento para ayudarte a elegir la solución de digital signage que mejor encaja con tu negocio.",
    category: "Cartelería digital",
    readTime: "5 min de lectura",
    date: "2024-02-26",
    excerpt:
      "Te explicamos cuándo apostar por paneles LED, qué ventajas ofrecen frente a LCD y cómo calcular el retorno de inversión de tu circuito de pantallas.",
    heroEyebrow: "Cartelería digital",
    heroTitle: "Pantallas LED vs. LCD: cuál es la mejor opción",
    heroSubtitle:
      "Compara brillo, mantenimiento y escalabilidad para seleccionar la tecnología que maximiza el impacto en tienda.",
    sections: [
      {
        title: "Nivel de brillo y visibilidad",
        paragraphs: [
          "El brillo disponible varía según fabricante y modelo. Para escaparates con luz solar suele estudiarse una pantalla LED o un monitor de alto brillo; en interiores controlados pueden bastar niveles inferiores.",
          "Si tu retail cuenta con ventanales o superficies acristaladas, los LED mantienen la legibilidad sin necesidad de filtros adicionales, algo que incrementa el coste en soluciones LCD.",
        ],
      },
      {
        title: "Formato y escalabilidad",
        paragraphs: [
          "Los módulos LED permiten superficies personalizadas y formas creativas sin marcos visibles. En LCD estarás limitado a formatos estandarizados (16:9, 32:9) o videowalls con biseles.",
          "Evalúa la distancia de visionado: para distancias cortas (menos de 2 metros) necesitarás un pitch inferior a 1.9 mm para preservar nitidez. En LCD la densidad de píxeles ya viene determinada de fábrica.",
        ],
      },
      {
        title: "Costes de operación",
        paragraphs: [
          "El consumo y la vida útil dependen del modelo, el brillo configurado, las horas de uso y el mantenimiento. Conviene comparar las fichas técnicas y condiciones de garantía de los equipos preseleccionados.",
          "En mantenimiento preventivo, los LED permiten sustituir solo el módulo afectado, mientras que en LCD hay que reemplazar la pantalla completa en caso de avería grave.",
        ],
      },
      {
        title: "Calcula el retorno de inversión",
        paragraphs: [
          "Define objetivos concretos: incremento de tráfico a zonas calientes, ventas vinculadas a promociones o reducción de costes en material impreso. Asocia cada indicador a un contenido o campaña concreta.",
          "Integra analítica en tu CMS de cartelería digital para medir impactos y combinar datos con tu POS. Así podrás ajustar creatividades y decidir cuándo escalar la solución a nuevas tiendas.",
        ],
      },
    ],
    keyTakeaways: [
      "El brillo y la visibilidad hacen que el LED sea imbatible en escaparates expuestos a luz natural.",
      "La modularidad LED permite diseños a medida y reduce tiempos de sustitución frente a LCD.",
      "Medir objetivos comerciales es clave para demostrar el ROI y planificar ampliaciones.",
    ],
    conclusion: [
      "No existe una solución única: analiza el entorno, los objetivos comerciales y el presupuesto de operación antes de elegir.",
      "Podemos acompañarte en un estudio comparativo y coordinar suministro, configuración e instalación con los proveedores y especialistas que requiera el proyecto.",
    ],
  },
  {
    slug: "caso-exito-museo-inmersivo",
    title: "Ejemplo conceptual: cómo diseñar una experiencia audiovisual inmersiva para un museo",
    description:
      "Ejemplo conceptual para plantear pantallas LED, audio y elementos interactivos en un espacio museístico.",
    category: "Cultura y ocio",
    readTime: "7 min de lectura",
    date: "2024-01-30",
    excerpt:
      "Un caso de uso conceptual para explicar cómo plantear la visualización, el sonido y los contenidos de una sala audiovisual para museo.",
    heroEyebrow: "EJEMPLO CONCEPTUAL / CASO DE USO",
    heroTitle: "Ejemplo conceptual: cómo diseñar una experiencia audiovisual inmersiva para un museo",
    heroSubtitle:
      "Este contenido presenta un ejemplo conceptual de cómo podría plantearse una solución audiovisual para un espacio museístico. No corresponde a una instalación realizada por MYL3D ni representa resultados obtenidos por un cliente real.",
    sections: [
      {
        title: "Planteamiento del ejemplo",
        paragraphs: [
          "Imaginemos un museo que quiere renovar una sala permanente y presentar su contenido de una forma más visual sin perder rigor divulgativo.",
          "Una posible propuesta sería un recorrido con pantallas LED de gran formato, sonido localizado y módulos interactivos. La configuración final dependería del espacio, el contenido, el presupuesto y los requisitos de accesibilidad.",
        ],
      },
      {
        title: "Diseño técnico",
        paragraphs: [
          "El diseño podría utilizar un videowall LED curvo con una distancia entre píxeles adecuada a la proximidad del visitante. Un sistema de gestión de contenidos permitiría organizar grafismos, vídeo y señalización contextual.",
          "El audio podría distribuirse por zonas y coordinarse con sensores de presencia. Estas decisiones deben validarse mediante un estudio técnico del recinto.",
        ],
      },
      {
        title: "Contenidos y narrativa",
        paragraphs: [
          "Los contenidos podrían combinar archivos históricos, recreaciones y elementos interactivos para ofrecer distintos niveles de lectura.",
          "La propuesta también debería contemplar subtítulos, audioguías y alternativas de interacción para mejorar la accesibilidad.",
        ],
      },
      {
        title: "Criterios de evaluación",
        paragraphs: [
          "Al tratarse de un ejemplo conceptual, no existen resultados de una instalación ni métricas atribuibles a MYL3D.",
          "En un proyecto real convendría valorar la legibilidad, la facilidad de actualización, la accesibilidad, el mantenimiento y la respuesta del público.",
        ],
      },
    ],
    keyTakeaways: [
      "El diseño inmersivo debe responder a objetivos claros del espacio cultural.",
      "La coordinación entre tecnología, narrativa y accesibilidad debería formar parte del planteamiento.",
      "Un sistema de gestión de contenidos podría facilitar la actualización de las piezas audiovisuales.",
    ],
    conclusion: [
      "Este ejemplo muestra las decisiones que conviene estudiar antes de definir una instalación audiovisual para un museo.",
      "MYL3D puede analizar las necesidades del espacio y coordinar una propuesta con fabricantes, distribuidores, técnicos e instaladores especializados según los requisitos del proyecto.",
    ],
  },
  {
    slug: "guia-carteleria-digital-retail",
    title: "Guía rápida para implantar cartelería digital en retail",
    description:
      "Pasos clave para definir objetivos, elegir hardware y establecer un plan de contenidos que incremente las ventas en tienda.",
    category: "Retail",
    readTime: "8 min de lectura",
    date: "2023-12-12",
    excerpt:
      "Incluimos checklist de despliegue, recomendaciones de tamaños de pantalla según superficie y métricas para evaluar el éxito de la instalación.",
    heroEyebrow: "Retail",
    heroTitle: "Guía rápida para implantar cartelería digital en retail",
    heroSubtitle:
      "Planifica tecnología, contenidos y operación para convertir tu circuito de pantallas en un aliado comercial.",
    sections: [
      {
        title: "Analiza tu punto de venta",
        paragraphs: [
          "Mide flujos de personas, zonas calientes y tiempos de espera. Identifica qué mensajes necesitan tus clientes en cada momento: bienvenida, soporte a la venta, fidelización o servicios complementarios.",
          "Elige ubicaciones donde las pantallas no compitan con la luz natural ni generen reflejos. Prioriza alturas entre 1,6 y 2 metros para mantener legibilidad.",
        ],
      },
      {
        title: "Selecciona hardware escalable",
        paragraphs: [
          "Para escaparates y zonas de alto brillo, apuesta por LED de pitch fino. En interior, los displays LCD profesionales son una alternativa rentable si necesitas formatos estándar.",
          "Integra reproductores con administración remota, monitorización de estado y alertas automáticas. Así podrás detectar fallos antes de que el cliente los perciba.",
        ],
      },
      {
        title: "Diseña una estrategia de contenidos",
        paragraphs: [
          "Crea plantillas adaptadas a campañas tácticas (promociones, lanzamientos) y contenidos evergreen (valores de marca, servicios recurrentes).",
          "Planifica un calendario editorial y define responsables para producción creativa, revisión legal y publicación.",
        ],
        bullets: [
          "Estructura cada pieza con jerarquía visual clara: titular, argumento y CTA.",
          "Respeta un máximo de 6-8 segundos por loop para no saturar la atención.",
          "Adapta tipografías y tamaños para distancias de lectura de 2 a 5 metros.",
        ],
      },
      {
        title: "Mide y optimiza",
        paragraphs: [
          "Configura dashboards que combinen datos de ventas, tráfico en tienda y métricas del CMS. Analiza qué mensajes impulsan tickets promedio más altos o reducen las colas.",
          "Experimenta con pruebas A/B en creatividades y ajusta la frecuencia de emisión para maximizar resultados.",
        ],
      },
    ],
    keyTakeaways: [
      "La ubicación y el flujo de clientes determinan la eficacia de la cartelería digital.",
      "Un hardware administrable a distancia evita interrupciones en la operación diaria.",
      "La estrategia de contenidos debe medirse igual que cualquier campaña de marketing.",
    ],
    conclusion: [
      "La cartelería digital es un proyecto continuo que requiere coordinación entre marketing, operaciones y tecnología.",
      "Con un partner especializado podrás acelerar el despliegue, formar a tu equipo y asegurar un retorno de inversión sostenido.",
    ],
  },
  {
    slug: "contenido-3d-pantallas-led",
    title: "Cómo producir contenido 3D para pantallas LED gigantes",
    description:
      "Buenas prácticas para desarrollar visuales volumétricos que aprovechen la profundidad de las pantallas LED de última generación.",
    category: "Producción audiovisual",
    readTime: "9 min de lectura",
    date: "2023-11-03",
    excerpt:
      "Revisamos herramientas, pipeline creativo y recomendaciones técnicas para evitar distorsiones y optimizar tiempos de render.",
    heroEyebrow: "Producción audiovisual",
    heroTitle: "Cómo producir contenido 3D para pantallas LED gigantes",
    heroSubtitle:
      "Domina el pipeline creativo para crear ilusiones anamórficas y efectos volumétricos convincentes.",
    sections: [
      {
        title: "Planifica pensando en la perspectiva",
        paragraphs: [
          "Las ilusiones anamórficas requieren definir un punto de vista privilegiado. Diseña el storyboard ubicando al espectador principal y adapta la cámara virtual a esa posición.",
          "Genera maquetas del espacio y del soporte LED para alinear proporciones y evitar deformaciones en directo.",
        ],
      },
      {
        title: "Configura el pipeline 3D",
        paragraphs: [
          "Trabaja con software que permita render en tiempo real (Unreal Engine, Notch) si necesitas actualizaciones rápidas. Para piezas prerenderizadas, asegúrate de que el motor soporta resoluciones personalizadas sin artefactos.",
          "Establece un flujo de trabajo colaborativo entre modelado, shading, animación y composición. Versiona cada etapa y guarda presets de iluminación específicos para el entorno LED.",
        ],
      },
      {
        title: "Optimiza la exportación",
        paragraphs: [
          "Elige codecs sin compresión visible (ProRes, DNxHR) y ajusta la velocidad de fotogramas a la frecuencia de refresco del panel. Si trabajas en tiempo real, calibra la sincronización con el sistema de control del LED.",
          "Realiza pruebas en escala 1:1 para validar la perspectiva y corrige posibles ghosting o banding aplicando dithering y ajustes de gamma.",
        ],
      },
      {
        title: "Producción en directo",
        paragraphs: [
          "Coordina al equipo de contenido con el operador de pantallas. Define protocolos de carga, repetición y emergencia en caso de fallo del servidor.",
          "Documenta la configuración final (curvas de color, brillo, ángulos) para garantizar la repetición del efecto en futuras activaciones.",
        ],
      },
    ],
    keyTakeaways: [
      "El punto de vista determina la credibilidad de la ilusión 3D en pantallas LED.",
      "Un pipeline bien organizado reduce tiempos de producción y errores de exportación.",
      "Las pruebas a escala real son imprescindibles antes de cualquier estreno público.",
    ],
    conclusion: [
      "La espectacularidad de un contenido 3D depende tanto de la idea creativa como del rigor técnico en su ejecución.",
      "Podemos ayudarte a plantear los contenidos y coordinar la configuración técnica necesaria para el evento.",
    ],
  },
  {
    slug: "checklist-pantallas-led-ferias",
    title: "Checklist técnico para ferias y congresos con pantallas LED",
    description:
      "Todo lo que debes revisar antes de abrir puertas: estructura, electricidad, redundancia de señal y planes de contingencia.",
    category: "Eventos",
    readTime: "6 min de lectura",
    date: "2023-09-14",
    excerpt:
      "Compartimos la metodología que emplea MyL3d para asegurar despliegues fiables en entornos de alto tráfico y montajes express.",
    heroEyebrow: "Eventos",
    heroTitle: "Checklist técnico para ferias y congresos con pantallas LED",
    heroSubtitle:
      "Controla estructura, señal y operación para asegurar un montaje impecable incluso con tiempos ajustados.",
    sections: [
      {
        title: "Estructura y seguridad",
        paragraphs: [
          "Verifica la resistencia de trusses, soportes y anclajes según el peso total del equipo LED. Comprueba certificados y carga máxima admisible.",
          "Incluye protecciones físicas (barandillas, covers) para evitar accesos no autorizados a la parte trasera de la pantalla.",
        ],
      },
      {
        title: "Electricidad y distribución",
        paragraphs: [
          "Dimensiona la potencia necesaria y solicita acometidas con margen del 20 %. Distribuye la carga en varias líneas y protege con magnetotérmicos y diferenciales adecuados.",
          "Utiliza cableado ignífugo y ordena el recorrido para evitar cruces con pasillos de público. Señaliza cualquier punto de conexión visible.",
        ],
      },
      {
        title: "Señal y redundancia",
        paragraphs: [
          "Implementa líneas de señal duplicadas y procesadores redundantes. Configura un reproductor de respaldo con contenido en loop por si falla el principal.",
          "Documenta el direccionamiento de paneles y la asignación de puertos para acelerar sustituciones en caso de incidente.",
        ],
      },
      {
        title: "Operación durante el evento",
        paragraphs: [
          "Establece turnos de supervisión y un check cada X horas para revisar temperatura, brillo y posibles módulos con anomalías.",
          "Define un canal directo con el organizador para coordinar cambios de contenido o mensajes de emergencia sin demoras.",
        ],
      },
    ],
    keyTakeaways: [
      "Revisar la estructura y los anclajes es prioritario para cumplir normativa y evitar riesgos.",
      "La redundancia en energía y señal evita apagones en momentos críticos.",
      "Una operación proactiva durante la feria permite reaccionar antes de que el público detecte incidencias.",
    ],
    conclusion: [
      "Los eventos de alto tránsito requieren planificación técnica, seguridad y una coordinación clara entre los profesionales implicados.",
      "MYL3D puede estudiar el montaje LED y coordinar el suministro y la instalación con técnicos especializados según la escala y los requisitos del evento.",
    ],
  },
];

export const blogPosts = posts;

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPosts(limit = 3): BlogPost[] {
  return blogPosts.slice(0, limit);
}
