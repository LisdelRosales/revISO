// ISO 9001:2015 - Estructura de cláusulas y requisitos
// Extraído desde: Lista de verificacion 9001-2015.xls
// Total: 28 requisitos principales con 271 puntos de verificación

export interface VerificationPoint {
  id: string;
  text: string;
}

export interface Requirement {
  id: string;
  clause: string;
  title: string;
  description: string;
  category: string;
  verificationPoints?: VerificationPoint[];
}

export const iso9001Requirements: Requirement[] = [
  {
    id: "4.1",
    clause: "4.1",
    title: "COMPRENSIÓN DE LA ORGANIZACIÓN Y DE SU CONTEXTO",
    description: "Están determinadas las cuestiones externas e internas que son pertinentes para su propósito y su dirección estratégica y que afectan a su capacidad para lograr los resultados previstos de su SGC",
    category: "Contexto de la organización",
    verificationPoints: [
      {
        id: "4.1",
        text: "Se realiza el seguimiento y la revisión de la información sobre estas cuestiones externas e internas"
      },
    ],
  },
  {
    id: "4.2",
    clause: "4.2",
    title: "COMPRENSIÓN DE LAS NECESIDADES Y EXPECTATIVAS DE LAS PARTES INTERESADAS",
    description: "Se realiza el seguimiento y la revisión de la información sobre estas partes interesadas y sus requisitos pertinentes",
    category: "Contexto de la organización",
    verificationPoints: [
      {
        id: "4.2.a",
        text: "Estan determinadas las partes interesadas que son pertinentes al SGC"
      },
      {
        id: "4.2.b",
        text: "Están determinados los requisitos pertinentes de estas partes interesadas para el SGC"
      },
    ],
  },
  {
    id: "4.3",
    clause: "4.3",
    title: "DETERMINACIÓN DEL ALCANCE DEL SISTEMA DE GESTIÓN DE CALIDAD",
    description: "Están determinados los límites y la aplicabilidad del SGC para establecer su alcance",
    category: "Contexto de la organización",
    verificationPoints: [
      {
        id: "4.3.a",
        text: "Están determinadas las cuestiones externas e internas indicadas en el apartado 4.1"
      },
      {
        id: "4.3.b",
        text: "Están determinados los requisitos de las partes interesadas pertinentes indicados en el apartado 4.2."
      },
      {
        id: "4.3.c",
        text: "Están determinados los productos y servicios de la organización"
      },
      {
        id: "4.3",
        text: "Se aplican todos los requisitos de esta Norma Internacional si son aplicables dentro del alcance determinado de su SGC"
      },
      {
        id: "4.3",
        text: "El alcance del SGC de la organización esta disponible y se mantiene como información documentada"
      },
      {
        id: "4.3",
        text: "Se establecien los tipos de productos y servicios cubiertos, y se proporcionó la justificación para cualquier requisito de esta Norma Internacional que la organización determine que no es aplicable para el alcance de su SGC"
      },
    ],
  },
  {
    id: "4.4",
    clause: "4.4",
    title: "SGC Y SUS PROCESOS",
    description: "Se establece, implementa, mantiene y mejora continuamente un SGC, incluidos los procesos necesarios y sus interacciones",
    category: "Contexto de la organización",
    verificationPoints: [
      {
        id: "4.4.1",
        text: "Se establece, implementa, mantiene y mejora continuamente un SGC, incluidos los procesos necesarios y sus interacciones"
      },
      {
        id: "4.4.1.a",
        text: "Se determinan las entradas requeridas y las salidas esperados de estos procesos"
      },
      {
        id: "4.4.1.b",
        text: "Se determina la secuencia e interaccion de estos procesos"
      },
      {
        id: "4.4.1.c",
        text: "Se determina y aplican los criterios y los métodos (incluyendo el seguimiento, la medición y los indicadores del desempeño relacionados) necesarios para asegurarse la operación eficaz y el control de estos procesos"
      },
      {
        id: "4.4.1.d",
        text: "Se determinan los recursos necesarios para estos procesos y se aseguró de su disponibilidad;"
      },
      {
        id: "4.4.1.e",
        text: "Se asignan responsabilidades y autoridades para estos procesos"
      },
      {
        id: "4.4.1.f",
        text: "Se abordan lo riesgos y oportunidades determinados de acuerdo con los requisitos del apartado 6.1"
      },
      {
        id: "4.4.1g",
        text: "Se valoran estos procesos e implementan cualquier cambio necesario para asegurarse de que estos procesos logran los resultados previstos"
      },
      {
        id: "4.4.1.h",
        text: "Se mejoraron los procesos y el SGC"
      },
      {
        id: "4.4.2.a",
        text: "Se mantiene la infomación documentada para apoyar la operación de sus procesos"
      },
      {
        id: "4.4.2.b",
        text: "Se conserva la información documentada para tener la confianza de que los procesos se realizan según lo planificado"
      },
    ],
  },
  {
    id: "5.1",
    clause: "5.1",
    title: "LIDERAZGO Y COMPROMISO",
    description: "Se asume la rendición de cuentas de la eficacia del SGC",
    category: "Liderazgo",
    verificationPoints: [
      {
        id: "5.1.1.a",
        text: "Se asume la rendición de cuentas de la eficacia del SGC"
      },
      {
        id: "5.1.1.b",
        text: "Se asegura que se establezcan para el SGC a política de la calidad y los objetivos de la calidad y que éstos son compatibles con el contexto y la dirección estratégica de la organización"
      },
      {
        id: "5.1.1.c",
        text: "Se asegura la integración de los requisitos del SGC en los procesos de negocio de la organización"
      },
      {
        id: "5.1.1.d",
        text: "Se promueve el uso del enfoque basado en procesos y el pensamiento basado en riesgos"
      },
      {
        id: "5.1.1.e",
        text: "Se aseguran que los recursos necesarios para el SGC estén disponibles"
      },
      {
        id: "5.1.1.f",
        text: "Se comunica la importancia de una gestión de la calidad eficaz y conforme con los requisitos del SGC"
      },
      {
        id: "5.1.1.g",
        text: "Se asegura que el SGC logre los resulrados previstos"
      },
      {
        id: "5.1.1.h",
        text: "Se comprometen, dirigien y apoyan a las personas, para contribuir a la eficacia del SGC"
      },
      {
        id: "5.1.1.i",
        text: "Se promueve la mejora"
      },
      {
        id: "5.1.1.j",
        text: "Se apoyan otros roles pertinentes de la dirección, para demostrar su liderazgo aplicado a sus áreas de responsabilidad"
      },
      {
        id: "5.1.2.a",
        text: "La alta dirección demuestra liderazgo y compromiso con respecto al enfoque al cliente asegurándose que se determinan, se comprenden y se cumplen de manera coherente los requisitos del cliente y los legales y reglamentarios aplicables."
      },
      {
        id: "5.1.2.b",
        text: "Se determinan y se tratan los riesgos y oportunidades que pueden afectar a la conformidad de los productos y los servicios y a la capacidad de aumentar la satisfacción del cliente."
      },
    ],
  },
  {
    id: "5.2",
    clause: "5.2",
    title: "POLÍTICA",
    description: "Se establece, implementa y mantiene una política de la calidad apropiada al propósito y al contexto de la organización y apoya su dirección estratégica.",
    category: "Liderazgo",
    verificationPoints: [
      {
        id: "5.2.1.a",
        text: "Se establece, implementa y mantiene una política de la calidad apropiada al propósito y al contexto de la organización y apoya su dirección estratégica."
      },
      {
        id: "5.2.1.b",
        text: "Se establece, implementa y mantiene una política e calidad que proporciona un marco de referencia para el establecimiento de los objetivos de la calidad"
      },
      {
        id: "5.2.1.c",
        text: "Se establece, implementa y mantiene una política de calidad que incluye el compromiso de cumplir con los requisitos aplicables"
      },
      {
        id: "5.2.1.d",
        text: "Se establece, implementa y mantiene una política de calidad que incluye el compromiso de mejora continua del SGC"
      },
      {
        id: "5.2.2.a",
        text: "La política de calidad está disponible y se mantiene como información documentada"
      },
      {
        id: "5.2.2.b",
        text: "La política de calidad se comunica, entiende y aplica dentro de la organización"
      },
      {
        id: "5.2.2.c",
        text: "La política de calidad está disponible para las partes interesadas pertinenentes, según corresponda"
      },
    ],
  },
  {
    id: "5.3",
    clause: "5.3",
    title: "ROLES, RESPONSABILIDADES Y AUTORIDADES EN LA ORGANIZACIÓN",
    description: "La alta dirección se asegura que las responsabilidades y autoridades para los roles pertinentes se asignan, comunican y entienden dentro de la organización",
    category: "Liderazgo",
    verificationPoints: [
      {
        id: "5.3.a",
        text: "La alta dirección asigna la responsabilidad y autoridad  para asegurar que el  SGC es conforme con los requisitos de esta Norma Internacional;"
      },
      {
        id: "5.3.b",
        text: "La  alta dirección asigna la responsbilidad y autoridad para asegurar que los procesos están dando las salidas previstas"
      },
      {
        id: "5.3.c",
        text: "La alta dirección asigna responsabilidad y autoridad para informar a la alta dirección sobre el desempeño del SGC y sobre las oportunidades de mejora (véase 10.1)"
      },
      {
        id: "5.3.d",
        text: "La alta dirección asigna responsabilidad y autoridad para asegurar que se promueva el enfoque al cliente a través de la organización"
      },
      {
        id: "5.3.e",
        text: "La alta dirección asigna responsabilidad y autoridad para asegurar que la integridad del SGC se mantiene cuando se planifican e implementan cambios en el SGC"
      },
    ],
  },
  {
    id: "6.1",
    clause: "6.1",
    title: "ACCIONES PARA ABORDAR RIESGOS Y OPORTUNIDADES",
    description: "Al planificar  el SGC, la organización considera las cuestiones referidas en el apartado 4.1 y los requisitos referidos en el apartado 4.2, y determina los riesgos y oportunidades que es necesario abordar con el fin de asegurar que el SGC pueda lograr sus resultados previstos",
    category: "Planificación",
    verificationPoints: [
      {
        id: "6.1.1.a",
        text: "Al planificar  el SGC, la organización considera las cuestiones referidas en el apartado 4.1 y los requisitos referidos en el apartado 4.2, y determina los riesgos y oportunidades que es necesario abordar con el fin de asegurar que el SGC pueda lograr sus resultados previstos"
      },
      {
        id: "6.1.1.b",
        text: "Al planificar  el SGC, la organización considera las cuestiones referidas en el apartado 4.1 y los requisitos referidos en el apartado 4.2, y determina los riesgos y oportunidades que es necesario abordar con el fin de aumentar los efectos deseables"
      },
      {
        id: "6.1.1.c",
        text: "Al planificar  el SGC, la organización considera las cuestiones referidas en el apartado 4.1 y los requisitos referidos en el apartado 4.2, y determina los riesgos y oportunidades que es necesario abordar con el fin de prevenir o reducir efectos no deseados"
      },
      {
        id: "6.1.1.d",
        text: "Al planificar  el SGC, la organización considera las cuestiones referidas en el apartado 4.1 y los requisitos referidos en el apartado 4.2, y determina los riesgos y oportunidades que es necesario abordar con el fin de lograr la mejora"
      },
      {
        id: "6.1.2.a",
        text: "La organización planifica las acciones para abordar estos riesgos y oportunidades"
      },
      {
        id: "6.1.2.b.1",
        text: "La organización planifica la manera de integrar e implementar las acciones en sus procesos del SGC"
      },
      {
        id: "6.1.2.b.2",
        text: "La organización planifica la manera de evaluar la eficacia de estas acciones"
      },
      {
        id: "6.1.1",
        text: "Las acciones tomadas para aborar los riesgos y oportunidades son proporcionales al impacto potencial en la conformidad de los productos y los servicios"
      },
    ],
  },
  {
    id: "6.2",
    clause: "6.2",
    title: "OBJETIVOS DE LA CALIDAD Y PLANIFICACIÓN PARA LOGRARLOS",
    description: "La organización establece los objetivos de la calidad para las funciones, niveles y procesos pertinentes necesarios para el SGC",
    category: "Planificación",
    verificationPoints: [
      {
        id: "6.2.1",
        text: "La organización establece los objetivos de la calidad para las funciones, niveles y procesos pertinentes necesarios para el SGC"
      },
      {
        id: "6.2.1.a",
        text: "Los objetivos de calidad son coherentes con la política de calidad"
      },
      {
        id: "6.2.1.b",
        text: "Los objetivos de calidad son medibles"
      },
      {
        id: "6.2.1.c",
        text: "Los objetivos de calidad tienen en cuenta los requisitos aplicables"
      },
      {
        id: "6.2.1.d",
        text: "Los objetivos de calidad son pertinentes para la conformidad de los productos y servicios y para el aumento de la satisfacción del cliente"
      },
      {
        id: "6.2.1.e",
        text: "Los objetivos de calidad son objeto de seguimiento"
      },
      {
        id: "6.2.1.f",
        text: "Los objetivos de calidad se comunican"
      },
      {
        id: "6.2.1.g",
        text: "Los objetivos de calidad se actualizan, según corresponda"
      },
      {
        id: "6.2.2.a",
        text: "Al planificar como lograr los objetivos de la calidad, la organización determina que se va a hacer"
      },
      {
        id: "6.2.2.d",
        text: "Al planificar como lograr los objetivos de la calidad, la organización determina cuando se finalizará"
      },
      {
        id: "6.2.2.e",
        text: "Al planificar como lograr los objetivos de la calidad, la organización determina como se evaluarán los resultados"
      },
    ],
  },
  {
    id: "6.3",
    clause: "6.3",
    title: "PLANIFICACIÓN DE LOS CAMBIOS",
    description: "Cuando la organización determina la necesidad de cambios en el SGC, estos cambios se llevan a cabo de manera planificada y sistemática",
    category: "Planificación",
    verificationPoints: [
      {
        id: "6.3.a",
        text: "La organización considera el propósito de los cambios y sus potenciales consecuencias"
      },
      {
        id: "6.3.b",
        text: "La organización considera la integridad del SGC"
      },
      {
        id: "6.3.c",
        text: "La organización considera la disponibilidad de recursos"
      },
      {
        id: "6.3.d",
        text: "La organización considera la asignación o reasignación de responsabilidades y autoridades"
      },
    ],
  },
  {
    id: "7.1",
    clause: "7.1",
    title: "RECURSOS",
    description: "La organización determina y proporciona los recursos necesarios para el establecimiento, implementación, mantenimiento y mejora continua del SGC",
    category: "Apoyo",
    verificationPoints: [
      {
        id: "7.1.1",
        text: "La organización determina y proporciona los recursos necesarios para el establecimiento, implementación, mantenimiento y mejora continua del SGC"
      },
      {
        id: "7.1.1.a",
        text: "La organización considera las capacidades y limitaciones de los recursos internos existentes"
      },
      {
        id: "7.1.1.b",
        text: "La organización considera qué se necesita obtener de los proveedores externos"
      },
      {
        id: "7.1.2",
        text: "La organización determina y proporciona las personas necesarias para implementación eficaz de su SGC y  para la operación y control de sus procesos"
      },
      {
        id: "7.1.3",
        text: "La organización determina, proporciona y mantiene la infraestructura necesaria para que la operación de sus procesos logre la conformidad de los productos y servicios"
      },
      {
        id: "7.1.4",
        text: "La organización determina, proporciona y mantiene el ambiente necesario para la operación de sus procesos y para lograr la conformidad de los productos y servicios"
      },
      {
        id: "7.1.5.1",
        text: "La organización determina y proporciona los recursos necesarios para asegurarse de la validez y fiabilidad de los resultados cuando el seguimiento o la medición se utilizan para verificar la conformidad de los productos y servicios con los requisitos"
      },
      {
        id: "7.1.5.1.a",
        text: "La organización se asegura de que los recursos proporcionados son adecuados para el tipo específico de actividades de seguimiento y medición realizadas"
      },
      {
        id: "7.1.5.1.b",
        text: "La organización se asegura de que los recursos proporcionados se mantienen para asegurarse de la adecuación continua para su propósito"
      },
      {
        id: "7.1.5.2.a",
        text: "Cuando la trazabilidad de las mediciones es un requisito, o es considerada por la organización como parte esencial de proporcionar confianza en la validez de los resultados de la medición, el equipo de medición verifica o calibra, o ambas, a intervalos especificados, o antes de su utilización, comparando con patrones de medición trazables a patrones de medición internacionales o nacionales; cuando no existan tales patrones, se conservar como información documentada la base utilizada para la calibración o la verificación"
      },
      {
        id: "7.1.5.2.b",
        text: "Cuando la trazabilidad de las mediciones es un requisito, o es considerada por la organización como parte esencial de proporcionar confianza en la validez de los resultados de la medición, el equipo de medición se identifica para determinar su estado"
      },
      {
        id: "7.1.5.2.c",
        text: "Cuando la trazabilidad de las mediciones es un requisito, o es considerada por la organización como parte esencial de proporcionar confianza en la validez de los resultados de la medición, el equipo de medición se proteger contra ajustes, daño o deterioro que pudieran invalidar el estado de calibración y los posteriores resultados de la medición"
      },
      {
        id: "7.1.5.2",
        text: "La organización determina si la validez de los resultados de medición previos se ha visto afectada de manera adversa cuando el equipo de medición se considera no apto para su propósito previsto, y toma las acciones adecuadas cuando sea necesario"
      },
      {
        id: "7.1.6",
        text: "La organización determina los conocimientos necesarios para la operación de sus procesos y para lograr la conformidad de los productos y servicios."
      },
    ],
  },
  {
    id: "7.2",
    clause: "7.2",
    title: "COMPETENCIA",
    description: "Se determina la competencia necesaria de las personas que realizan, bajo su control, un trabajo que afecta al desempeño y eficacia del sistema de gestión de la calidad",
    category: "Apoyo",
    verificationPoints: [
      {
        id: "7.2.a",
        text: "Se determina la competencia necesaria de las personas que realizan, bajo su control, un trabajo que afecta al desempeño y eficacia del sistema de gestión de la calidad"
      },
      {
        id: "7.2.b",
        text: "Se asegura de que estas personas son competentes, basándose en la educación, formación o experiencia adecuadas"
      },
      {
        id: "7.2.c",
        text: "Cuando es aplicable, se toman acciones para adquirir la competencia necesaria y evaluar la eficacia de las acciones tomadas"
      },
      {
        id: "7.2.d",
        text: "Se conserva la información documentada apropiada, como evidencia de la competencia"
      },
    ],
  },
  {
    id: "7.3",
    clause: "7.3",
    title: "TOMA DE CONCIENCIA",
    description: "Se asegura de que las personas pertinentes que realizan el trabajo bajo el control de la organización toman conciencia de la política de calidad.",
    category: "Apoyo",
    verificationPoints: [
      {
        id: "7.3.a",
        text: "Se asegura de que las personas pertinentes que realizan el trabajo bajo el control de la organización toman conciencia de la política de calidad."
      },
      {
        id: "7.3.b",
        text: "Se asegura de que las personas pertinentes que realizan el trabajo bajo el control de la organización toman conciencia de los objetivos de calidad pertinentes"
      },
      {
        id: "7.3.c",
        text: "Se asegura de que las personas pertinentes que realizan el trabajo bajo el control de la organización toman conciencia de su contribución a la eficacia del  SGC, incluyendo los beneficios de una mejora del desempeño"
      },
      {
        id: "7.3.d",
        text: "Se asegura de que las personas pertinentes que realizan el trabajo bajo el control de la organización toman conciencia de las implicaciones de no cumplir con los requisitos del SGC"
      },
    ],
  },
  {
    id: "7.4",
    clause: "7.4",
    title: "COMUNICACIÓN",
    description: "Están determinanadas las comunicaciones internas y externas pertinentes al SGC que incluyen qué comunicar",
    category: "Apoyo",
    verificationPoints: [
      {
        id: "7.4.a",
        text: "Están determinanadas las comunicaciones internas y externas pertinentes al SGC que incluyen qué comunicar"
      },
      {
        id: "7.4.b",
        text: "Están determinanadas las comunicaciones internas y externas pertinentes al SGC que incluyen cuándo comunicar"
      },
      {
        id: "7.4.c",
        text: "Están determinanadas las comunicaciones internas y externas pertinentes al SGC que incluyen a quién comunicar"
      },
      {
        id: "7.4.d",
        text: "Están determinanadas las comunicaciones internas y externas pertinentes al SGC que incluyen cómo comunicar"
      },
      {
        id: "7.4.e",
        text: "Están determinanadas las comunicaciones internas y externas pertinentes al SGC que incluyen  quién comunica"
      },
    ],
  },
  {
    id: "7.5",
    clause: "7.5",
    title: "INFORMACIÓN DOCUMENTADA",
    description: "El SGC incluye la información documentada requerida por la Norma Internacionl ISO 9001",
    category: "Apoyo",
    verificationPoints: [
      {
        id: "7.5.1.a",
        text: "El SGC incluye la información documentada requerida por la Norma Internacionl ISO 9001"
      },
      {
        id: "7.5.1.b",
        text: "El SGC incluye la información documentada que se determina como necesaria para la eficacia del SGC"
      },
      {
        id: "7.5.2.a",
        text: "Cuando se crea y actualiza información documentada, se asegura que la identificación y descripción (por ejemplo, título, fecha, autor o número de referencia) sean apropiadas"
      },
      {
        id: "7.5.2.b",
        text: "Cuando se crea y actualiza información documentada, se asegura que el formato (por ejemplo, idioma, versión del software, gráficos) y sus medios de soporte (por ejemplo, papel, electrónico) sean apropiados"
      },
      {
        id: "7.5.2.c",
        text: "Cuando se crea y actualiza información documentada, se asegura que  la revisión y aprobación con respecto a la idoneidad y adecuación sean adecuadas"
      },
      {
        id: "7.5.3.1.a",
        text: "La información documentada requerida por el SGC y por la Norma Internacional ISO 9001  se  controla para asegurar que esté disponible y adecuada para su uso, dónde y cuándo se necesite"
      },
      {
        id: "7.5.3.1.b",
        text: "La información documentada requerida por el SGC y por la Norma Internacional ISO 9001  se  controla para asegurar que esté protegida adecuadamente (por ejemplo, contra pérdida de la confidencialidad, uso inadecuado, o pérdida de integridad)"
      },
      {
        id: "7.5.3.2.a",
        text: "Para el control de la información documentada, la organización trata la distribución, acceso, recuperación y uso (según corresponda)"
      },
      {
        id: "7.5.3.2.b",
        text: "Para el control de la información documentada, la organización trata el almacenamiento y preservación, incluida la preservación de la legibilidad  (según corresponda)"
      },
      {
        id: "7.5.3.2.c",
        text: "Para el control de la información documentada, la organización trata el control de cambios (por ejemplo, control de versión) (segun corresponda)"
      },
      {
        id: "7.5.3.2.d",
        text: "Para el control de la información documentada, la organización trata la conservación y disposición (según corresponda)"
      },
      {
        id: "7.5.3.2",
        text: "La información documentada de origen externo, que la organización determina como necesaria para la planificación y operación del SGC se Identifica según sea adecuado y controlado"
      },
    ],
  },
  {
    id: "8.1",
    clause: "8.1",
    title: "PLANIFICACIÓN Y CONTROL OPERACIONAL",
    description: "El elemento de salida de esta planificación es adecuado para las operaciones de la organización.",
    category: "Operación",
    verificationPoints: [
      {
        id: "8.1.a",
        text: "La organización  planifica, implementa y controla los procesos (véase 4.4) necesarios para cumplir los requisitos para la producción de productos y prestación de servicios, y para implementar las acciones determinadas en el capítulo 6, mediante la determinación de los requisitos para los productos y servicios"
      },
      {
        id: "8.1.b1",
        text: "La organización  planifica, implementa y controla los procesos (véase 4.4) necesarios para cumplir los requisitos para la producción de productos y prestación de servicios, y para implementar las acciones determinadas en el capítulo 6, mediante  el establecimiento de criterios para los procesos"
      },
      {
        id: "8.1.b.2",
        text: "La organización  planifica, implementa y controla los procesos (véase 4.4) necesarios para cumplir los requisitos para la producción de productos y prestación de servicios, y para implementar las acciones determinadas en el capítulo 6, mediante  el establecimiento de criterios para la aceptación de los productos y servicios"
      },
      {
        id: "8.1.c",
        text: "La organización  planifica, implementa y controla los procesos (véase 4.4) necesarios para cumplir los requisitos para la producción de productos y prestación de servicios, y para implementar las acciones determinadas en el capítulo 6, mediante la determinación de los recursos necesarios para lograr la conformidad para los requisitos de los productos y servicios"
      },
      {
        id: "8.1.d",
        text: "La organización  planifica, implementa y controla los procesos (véase 4.4) necesarios para cumplir los requisitos para la producción de productos y prestación de servicios, y para implementar las acciones determinadas en el capítulo 6, mediante la implementación del control de los procesos de acuerdo con los criterios"
      },
      {
        id: "8.1.e.1",
        text: "La organización  planifica, implementa y controla los procesos (véase 4.4) necesarios para cumplir los requisitos para la producción de productos y prestación de servicios, y para implementar las acciones determinadas en el capítulo 6, mediante la determinación y almacenaje de la información documentada en la medida necesaria para confiar en que los procesos se llevan a cabo según lo planificado"
      },
      {
        id: "8.1.e.2",
        text: "La organización  planifica, implementa y controla los procesos (véase 4.4) necesarios para cumplir los requisitos para la producción de productos y prestación de servicios, y para implementar las acciones determinadas en el capítulo 6, mediante la determinación y almacenaje de la información documentada en la medida necesaria para demostrar la conformidad de los productos y servicios con sus requisitos"
      },
      {
        id: "8.1",
        text: "La organización controla los cambios planificados y revisa las consecuencias de los cambios no previstos, tomando acciones para mitigar cualquier efecto adverso, cuando sea necesario."
      },
      {
        id: "8.1",
        text: "La organización se asegura que los procesos contratados externamente estén controlados (véase 8.4)"
      },
    ],
  },
  {
    id: "8.2",
    clause: "8.2",
    title: "REQUISITOS PARA LOS PRODUCTOS Y SERVICIOS",
    description: "La comunicación con el cliente incluye el proporcionar la información relativa a los productos y servicios",
    category: "Operación",
    verificationPoints: [
      {
        id: "8.2.1.a",
        text: "La comunicación con el cliente incluye el proporcionar la información relativa a los productos y servicios"
      },
      {
        id: "8.2.1.b",
        text: "La comunicación con el cliente incluye la atención de las consultas, los contratos o los pedidos, incluyendo los cambios"
      },
      {
        id: "8.2.1.c",
        text: "La comunicación con el cliente incluye obtener la retroalimentación de los clientes relativa a los productos y servicios, incluyendo las quejas de los clientes"
      },
      {
        id: "8.2.1.d",
        text: "La comunicación con el cliente incluye manipular o controlar las propiedades del cliente"
      },
      {
        id: "8.2.1.e",
        text: "La comunicación con el cliente incluye establecer los requisitos específicos para las acciones de contingencia, cuando sea pertinente"
      },
      {
        id: "8.2.2.a.1",
        text: "Cuando determina los requisitos para los productos y servicios que se van a ofrecer a los clientes, la organización se asegura que los requisitos para los productos y servicios se definen, incluyendo cualquier requisito legal y reglamentario aplicable"
      },
      {
        id: "8.2.2.a.2",
        text: "Cuando determina los requisitos para los productos y servicios que se van a ofrecer a los clientes, la organización se asegura que los requisitos para los productos y servicios se definen, incluyendo aquellos considerados necesarios para la organización"
      },
      {
        id: "8.2.2.b",
        text: "Cuando determina los requisitos para los productos y servicios que se van a ofrecer a los clientes, la organización se asegura la organización puede cumplir las reclamaciones de los productos y servicios que ofrece"
      },
      {
        id: "8.2.3.1",
        text: "La organización se asegura que tiene la capacidad de cumplir los requisitos para los productos y servicios que se van a ofrecer a los clientes"
      },
      {
        id: "8.2.3.1.a",
        text: "La organización  llevara cabo una revisión antes de comprometerse a suministrar productos y servicios a un cliente, para incluir los requisitos especificados por el cliente, incluyendo los requisitos para las actividades de entrega y las posteriores a la misma"
      },
      {
        id: "8.2.3.1.b",
        text: "La organización  llevara cabo una revisión antes de comprometerse a suministrar productos y servicios a un cliente, para incluir los requisitos no establecidos por el cliente, pero necesarios para el uso especificado o para el uso previsto, cuando sea conocido"
      },
      {
        id: "8.2.3.1.c",
        text: "La organización  llevara cabo una revisión antes de comprometerse a suministrar productos y servicios a un cliente, para incluir los resquisitos especificados por la organización"
      },
      {
        id: "8.2.3.1.d",
        text: "La organización  llevara cabo una revisión antes de comprometerse a suministrar productos y servicios a un cliente, para incluir los requisitos legales y reglamentarios adicionales aplicables a los productos y servicios"
      },
      {
        id: "8.2.3.1.e",
        text: "La organización  llevara cabo una revisión antes de comprometerse a suministrar productos y servicios a un cliente, para incluir las diferencias existentes entre los requisitos de contrato o pedido y los expresados previamente"
      },
      {
        id: "8.2.3.2.a",
        text: "La organización conserva la información documentada, cuando sea aplicable sobre los resultados de la revisión"
      },
      {
        id: "8.2.3.2.b",
        text: "La organización conserva la información documentada, cuando sea aplicable sobre cualquier requisito nuevo para los productos y servicios"
      },
      {
        id: "8.2.4",
        text: "La organización se asegura que la información documentada pertinente es modificada, y que las personas correspondientes son conscientes de los requisitos modificados, cuando se cambien los requisitos para los productos y servicios"
      },
    ],
  },
  {
    id: "8.3",
    clause: "8.3",
    title: "DISEÑO Y DESARROLLO DE LOS PRODUCTOS Y SERVICIOS",
    description: "La organización establece, implementa y mantiene un proceso de diseño y desarrollo adecuado para asegurarse de la posterior producción de productos y prestación de servicios.",
    category: "Operación",
    verificationPoints: [
      {
        id: "8.3.1",
        text: "La organización establece, implementa y mantiene un proceso de diseño y desarrollo adecuado para asegurarse de la posterior producción de productos y prestación de servicios."
      },
      {
        id: "8.3.2.a",
        text: "Al determinar las etapas y controles para el diseño y desarrollo, la organización considera la naturaleza, duración y complejidad de las actividades de diseño y desarrollo"
      },
      {
        id: "8.3.2.b",
        text: "Al determinar las etapas y controles para el diseño y desarrollo, la organización considera las etapas del proceso requeridas, incluyendo las revisiones del diseño y desarrollo aplicables"
      },
      {
        id: "8.3.2.c",
        text: "Al determinar las etapas y controles para el diseño y desarrollo, la organización considera las actividades requeridas de verificación y validación del diseño y desarrollo"
      },
      {
        id: "8.3.2.d",
        text: "Al determinar las etapas y controles para el diseño y desarrollo, la organización considera las responsabilidades y autoridades involucradas en el proceso de diseño y desarrollo"
      },
      {
        id: "8.3.2.e",
        text: "Al determinar las etapas y controles para el diseño y desarrollo, la organización considera las necesidades de recursos internos y externos para el diseño y desarrollo de los productos y servicios"
      },
      {
        id: "8.3.2.f",
        text: "Al determinar las etapas y controles para el diseño y desarrollo, la organización considera la necesidad de controlar las interfaces entre las personas implicadas en el proceso de diseño y desarrollo"
      },
      {
        id: "8.3.2.g",
        text: "Al determinar las etapas y controles para el diseño y desarrollo, la organización considera la necesidad de la participación activa de los clientes y usuarios en el proceso de diseño y desarrollo"
      },
      {
        id: "8.3.2.h",
        text: "Al determinar las etapas y controles para el diseño y desarrollo, la organización considera los requisitos para la posterior producción de productos y prestación de servicios"
      },
      {
        id: "8.3.2.i",
        text: "Al determinar las etapas y controles para el diseño y desarrollo, la organización considera el nivel de control del proceso de diseño y desarrollo esperado por los clientes y otras partes interesadas pertinentes"
      },
      {
        id: "8.3.2.j",
        text: "Al determinar las etapas y controles para el diseño y desarrollo, la organización consider la información documentada necesaria para demostrar que se han cumplido los requisitos del diseño y desarrollo"
      },
      {
        id: "8.3.3",
        text: "La organización determina los requisitos esenciales para los tipos específicos de productos y servicios que se van a diseñar y desarrollar"
      },
      {
        id: "8.3.3.a",
        text: "La organización considera los requisitos funcionales y de desempeño"
      },
      {
        id: "8.3.3.b",
        text: "La organización considera  la información proveniente de actividades de diseño y desarrollo previas similares"
      },
      {
        id: "8.3.3.c",
        text: "La organización considera los requisitos legales y reglamentarios"
      },
      {
        id: "8.3.3.d",
        text: "La organización considera normas o códigos de prácticas que la organización se ha comprometido a implementar"
      },
      {
        id: "8.3.3.e",
        text: "La organización considera  las consecuencias potenciales del fracaso debido a la naturaleza de los productos y servicios"
      },
      {
        id: "8.3.4.a",
        text: "La organización aplica controles al proceso de diseño y desarrollo para asegurarse que los resultados a lograr están definidos"
      },
      {
        id: "8.3.4.b",
        text: "La organización aplica controles al proceso de diseño y desarrollo para asegurarse que las revisiones se realizan para evaluar la capacidad de los resultados del diseño y desarrollo de cumplir los requisitos"
      },
      {
        id: "8.3.4.c",
        text: "La organización aplica controles al proceso de diseño y desarrollo para asegurarse que se realizan actividades de verificación para asegurarse de que las salidas del diseño y desarrollo cumplen los requisitos de las entradas"
      },
      {
        id: "8.3.4.d",
        text: "La organización aplica controles al proceso de diseño y desarrollo para asegurarse que se se realizan actividades de validación para asegurarse de que los productos y servicios resultantes satisfacen los requisitos para su aplicación especificada o uso previsto"
      },
      {
        id: "8.3.4.e",
        text: "La organización aplica controles al proceso de diseño y desarrollo para asegurarse que se toma cualquier acción necesaria sobre los problemas determinados durante las revisiones, o las actividades de verificación y validación"
      },
      {
        id: "8.3.4.f",
        text: "La organización aplica controles al proceso de diseño y desarrollo para asegurarse que se conserva la información documentada de estas actividades"
      },
      {
        id: "8.3.5.a",
        text: "La organización asegura que las salidas del diseño y desarrollo cumplen los requisitos de las entradas"
      },
      {
        id: "8.3.5.b",
        text: "La organización asegura que las salidas del diseño y desarrollo son adecuadas para los procesos posteriores para la provisión de productos y servicios"
      },
      {
        id: "8.3.5.c",
        text: "La organización asegura que las salidas del diseño y desarrollo incluyen o hacen referencia a los requisitos de seguimiento y medición, cuando sea adecuado, y a los criterios de aceptación"
      },
      {
        id: "8.3.5.d",
        text: "La organización asegura que las salidas del diseño y desarrollo especifican las características de los productos y servicios que son esenciales para su propósito previsto y su uso seguro y correcto"
      },
      {
        id: "8.3.6",
        text: "La organización identifica, revisa y controla los cambios hechos durante el diseño y desarrollo de los productos y servicios o posteriormente, en la medida necesaria para asegurar de que no haya un impacto adverso en la conformidad con los requisitos."
      },
      {
        id: "8.3.6.a",
        text: "Se conserva la información documentada sobre los cambios del diseño y desarrollo"
      },
      {
        id: "8.3.6.b",
        text: "Se conserva la información documentada sobre los resultados de las revisiones"
      },
      {
        id: "8.3.6.c",
        text: "Se conserva la información documentada de la autorización de los cambios"
      },
      {
        id: "8.3.6.d",
        text: "Se conserva la información documentada de las acciones tomadas para prevenir los impactos adversos"
      },
    ],
  },
  {
    id: "8.4",
    clause: "8.4",
    title: "CONTROL DE PROCESOS, PRODUCTOS Y SERVICIOS SUMINISTRADOS EXTERNAMENTE",
    description: "La organización se asegura de que los procesos, productos y servicios suministrados externamente son conformes a los requisitos",
    category: "Operación",
    verificationPoints: [
      {
        id: "8.4.1",
        text: "La organización se asegura de que los procesos, productos y servicios suministrados externamente son conformes a los requisitos"
      },
      {
        id: "8.4.1.a",
        text: "La organización determina los controles a aplicar a los procesos, productos y servicios suministrados externamente cuando los productos y servicios de proveedores externos están destinados a incorporarse dentro de los propios productos y servicios de la organización"
      },
      {
        id: "8.4.1.b",
        text: "La organización determina los controles a aplicar a los procesos, productos y servicios suministrados externamente cuando  los productos y servicios son proporcionados directamente a los clientes por proveedores externos en nombre de la organización"
      },
      {
        id: "8.4.1.c",
        text: "La organización determina los controles a aplicar a los procesos, productos y servicios suministrados externamente cuando un proceso, o una parte de un proceso, es proporcionado por un proveedor externo como resultado de una decisión de la organización"
      },
      {
        id: "8.4.2",
        text: "La organización se asegura de que los procesos, productos y servicios suministrados externamente no afectan de manera adversa a la capacidad de la organización de entregar productos y servicios conformes de manera coherente a sus clientes"
      },
      {
        id: "8.4.2.a",
        text: "La organización se asegura de que los procesos suministrados externamente permanecen dentro del control  de su SGC"
      },
      {
        id: "8.4.2.b",
        text: "La organización define los controles que pretende aplicar a un proveedor externo y los que pretende aplicar a las salidas resultantes"
      },
      {
        id: "8.4.2.c.1",
        text: "La organización tiene en consideración el impacto potencial de los procesos, productos y servicios suministrados externamente en la capacidad de la organización de cumplir regularmente los requisitos del cliente y los legales y reglamentarios aplicables."
      },
      {
        id: "8.4.2.c.2",
        text: "La organización tiene en consideración la eficacia de los controles aplicados por el proveedor externo"
      },
      {
        id: "8.4.2.d",
        text: "La organización determina la verificación, u otras actividades, necesarias para asegurarse de que los procesos, productos y servicios suministrados externamente cumplen los requisitos"
      },
      {
        id: "8.4.3",
        text: "La organización se asegura de la adecuación de los requisitos antes de su comunicación al proveedor externo"
      },
      {
        id: "8.4.3.a",
        text: "La organización comunica a los proveedores externos sus requisitos para los procesos, productos y servicios a proporcionar"
      },
      {
        id: "8.4.3.b.1",
        text: "La organización comunica a los proveedores externos sus requisitos para  la aprobación de productos y servicios"
      },
      {
        id: "8.4.3.b.2",
        text: "La organización comunica a los proveedores externos sus requisitos para  la aprobación de métodos, procesos y equipo"
      },
      {
        id: "8.4.3.b.3",
        text: "La organización comunica a los proveedores externos sus requisitos para  la liberación de productos y servicios"
      },
      {
        id: "8.4.3.c",
        text: "La organización comunica a los proveedores externos sus requisitos para  la competencia, incluyendo cualquier calificación de las personas requerida"
      },
      {
        id: "8.4.3.d",
        text: "La organización comunica a los proveedores externos sus requisitos para las interacciones del proveedor externo con la organización"
      },
      {
        id: "8.4.3.e",
        text: "La organización comunica a los proveedores externos sus requisitos para el control y el seguimiento del desempeño del proveedor externo a aplicar por la organización"
      },
      {
        id: "8.4.3.f",
        text: "La organización comunica a los proveedores externos sus requisitos para las actividades de verificación o validación que la organización, o su cliente, pretenden llevar a cabo en las instalaciones del proveedor externo"
      },
    ],
  },
  {
    id: "8.5",
    clause: "8.5",
    title: "PRODUCCIÓN Y PROVISIÓN DEL SERVICIO",
    description: "La organización implementa la producción y prestación del servicio bajo condiciones controladas",
    category: "Operación",
    verificationPoints: [
      {
        id: "8.5.1",
        text: "La organización implementa la producción y prestación del servicio bajo condiciones controladas"
      },
      {
        id: "8.5.1.a.1",
        text: "Las condiciones controladas incluyen, cuando se aplicable, la disponibilidad de información documentada que define las características de los productos a producir, los servicios a prestar, o las actividades a desempeñar."
      },
      {
        id: "8.5.1.a.2",
        text: "Las condiciones controladas incluyen, cuando se aplicable, la disponibilidad de información documentada que define los resultados a alcanzar."
      },
      {
        id: "8.5.1.b",
        text: "Las condiciones controladas incluyen, cuando se aplicable, la disponibilidad y el uso de los recursos de seguimiento y medición adecuados"
      },
      {
        id: "8.5.1.c",
        text: "Las condiciones controladas incluyen, cuando se aplicable, la implementación de actividades de seguimiento y medición en las etapas apropiadas para verificar que se cumplen los criterios para el control de los procesos o las salidas, y los criterios de aceptación para los productos y servicios"
      },
      {
        id: "8.5.1.d",
        text: "Las condiciones controladas incluyen, cuando se aplicable, el uso de la infraestructura y el ambiente adecuados para la operación de los procesos"
      },
      {
        id: "8.5.1.e",
        text: "Las condiciones controladas incluyen, cuando se aplicable, la designación de personas competentes, incluyendo cualquier calificación requerida"
      },
      {
        id: "8.5.1.f",
        text: "Las condiciones controladas incluyen, cuando se aplicable,  la validación y revalidación periódica de la capacidad para alcanzar los resultados planificados de los procesos de producción y de prestación del servicio, donde el elemento de salida resultante no pueda verificarse mediante actividades de seguimiento o medición posteriores"
      },
      {
        id: "8.5.1.g",
        text: "Las condiciones controladas incluyen, cuando se aplicable, la implementación de acciones para prevenir los errores humanos"
      },
      {
        id: "8.5.1.h",
        text: "Las condiciones controladas incluyen, cuando se aplicable, la implementación de actividades de liberación, entrega y posteriores a la entrega"
      },
      {
        id: "8.5.2",
        text: "La organización utiliza los medios adecuados para identificar las salidas cuando sea necesario para asegurar la conformidad de los productos y servicios"
      },
      {
        id: "8.5.3",
        text: "La organización cuida la propiedad perteneciente a los clientes o a proveedores externos mientras esté bajo el control de la organización o esté siendo utilizado por la misma. La organización identifica, verifica, protege y salvaguarda la propiedad de los clientes o de los proveedores externos suministrada para su utilización o incorporación dentro de los productos y servicios"
      },
      {
        id: "8.5.4",
        text: "La organización preserva las salidas durante la producción y prestación del servicio, en la medida necesaria para asegurarse de la conformidad con los requisitos"
      },
      {
        id: "8.5.5",
        text: "La organización cumple los requisitos para las actividades posteriores a la entrega asociadas con los productos y servicios"
      },
      {
        id: "8.5.5.a",
        text: "Al determinar el alcance de las actividades posteriores a la entrega que se requieren, la organización considera  los requisitos legales y reglamentarios"
      },
      {
        id: "8.5.5.b",
        text: "Al determinar el alcance de las actividades posteriores a la entrega que se requieren, la organización considera ) las potenciales consecuencias no deseadas asociadas con sus productos y servicios"
      },
      {
        id: "8.5.5.c",
        text: "Al determinar el alcance de las actividades posteriores a la entrega que se requieren, la organización considera la naturaleza, el uso y la vida prevista de sus productos y servicios"
      },
      {
        id: "8.5.5.d",
        text: "Al determinar el alcance de las actividades posteriores a la entrega que se requieren, la organización considera los requisitos del cliente"
      },
      {
        id: "8.5.5.e",
        text: "Al determinar el alcance de las actividades posteriores a la entrega que se requieren, la organización considera la rretroalimentación del cliente"
      },
      {
        id: "8.5.6",
        text: "La organización revisa y controla los cambios para la producción o la prestación del servicio, en la medida necesaria para asegurarse de la conformidad continua con los requisitos especificados"
      },
    ],
  },
  {
    id: "8.6",
    clause: "8.6",
    title: "LIBERACIÓN DE LOS PRODUCTOS Y SERVICIOS",
    description: "La organización implementa las disposiciones planificadas, en las etapas adecuadas, para verificar que se cumplen los requisitos de los productos y servicios",
    category: "Operación",
    verificationPoints: [
      {
        id: "8.6",
        text: "La liberación de los productos y servicios al cliente no se lleva a cabo hasta que se han completado satisfactoriamente las disposiciones planificadas, a menos que sea aprobado de otra manera por una autoridad pertinente y, cuando sea aplicable, por el cliente"
      },
      {
        id: "8.6.a",
        text: "La organización conserva la información documentada sobre la liberación de los productos y servicios. La información documentada  incluye evidencia de la conformidad con los criterios de aceptación"
      },
      {
        id: "8.6.b",
        text: "La organización conserva la información documentada sobre la liberación de los productos y servicios. La información documentada incluye trazabilidad a las personas que han autorizado la liberación"
      },
    ],
  },
  {
    id: "8.7",
    clause: "8.7",
    title: "CONTROL DE LAS SALIDAS NO CONFORMES",
    description: "1 La organización se asegura que las salidas que no sean conformes con sus requisitos se identifican y se controlan para prevenir su uso o entrega no intencional",
    category: "Operación",
    verificationPoints: [
      {
        id: "8.7.1",
        text: "1 La organización se asegura que las salidas que no sean conformes con sus requisitos se identifican y se controlan para prevenir su uso o entrega no intencional"
      },
      {
        id: "8.7.1.a",
        text: "La organización trata las salidas no conformes con: corrección"
      },
      {
        id: "8.7.1.b",
        text: "La organización trata las salidas no conformes con: separación, contención, devolución o suspensión de la provisión de productos y servicios"
      },
      {
        id: "8.7.1.c",
        text: "La organización trata las salidas no conformes informando al cliente"
      },
      {
        id: "8.7.1.d",
        text: "La organización trata las salidas no conformes con la obtención de autorización para su aceptación bajo concesión"
      },
      {
        id: "8.7.2.a",
        text: "Se mantiene información documentada que describe la no conformidad"
      },
      {
        id: "8.7.2.b",
        text: "Se mantiene información documentada que describa las aaciones tomadas"
      },
      {
        id: "8.7.2.c",
        text: "Se mantiene  información documentada que describe las concesiones obtenidas"
      },
      {
        id: "8.7.2.d",
        text: "Se mantiene información documentada que identifica la autirdad que ha decidido la aacción con respecto a la no conformidad"
      },
    ],
  },
  {
    id: "9.1",
    clause: "9.1",
    title: "SEGUIMIENTO, MEDICIÓN, ANÁLISIS Y EVALUACIÓN",
    description: "La organización determina a qué es necesario hacer seguimiento y qué es necesario medir",
    category: "Evaluación del desempeño",
    verificationPoints: [
      {
        id: "9.1.1.a",
        text: "La organización determina a qué es necesario hacer seguimiento y qué es necesario medir"
      },
      {
        id: "9.1.1.b",
        text: "La organización determina los métodos de seguimiento, medición, análisis y evaluación necesarios para asegurar resultados válidos"
      },
      {
        id: "9.1.1.c",
        text: "La organización determina cuándo se deben llevar a cabo el seguimiento y la medición"
      },
      {
        id: "9.1.1.d",
        text: "La organización determina cuándo se deben analizar y evaluar los resultados del seguimiento y la medición"
      },
      {
        id: "9.1.1",
        text: "La organización evalua el desempeño y la eficacia del SGC"
      },
      {
        id: "9.1.2",
        text: "La organización realiza el seguimiento de las percepciones de los clientes del grado en que se cumplen sus necesidades y expectativas. Se determinan los métodos para obtener, realizar el seguimiento y revisar esta información"
      },
      {
        id: "9.1.3",
        text: "La organización analiza y evalua los datos y la información apropiados originados por el seguimiento y la medición"
      },
      {
        id: "9.1.3.a",
        text: "Los resultados de los analisis se utilizan para evaluar la conformidad de los productos y servicios"
      },
      {
        id: "9.1.3.b",
        text: "Los resultados del analisis se utilizan para evaluar el grado de satisfacción del cliente"
      },
      {
        id: "9.1.3.c",
        text: "Los resultados del análisis se utilizan para evaluar el desempeño y la eficacia del SGC"
      },
      {
        id: "9.1.3.d",
        text: "Los resultados del análisis se utilizan para evaluar si lo planificado se ha implementado de forma eficaz"
      },
      {
        id: "9.1.3.e",
        text: "Los resultados de los análisis se utilizan para evaluar la eficacia de las acciones tomadas para abordar los riesgos y oportunidades"
      },
      {
        id: "9.1.3.f",
        text: "Los resultados de los análisis se utilizan para evaluar el desempeño de los proveedores externos"
      },
      {
        id: "9.1.3.g",
        text: "Los resultados de los análisis se utilizan para evaluar la necesidad de mejoras en el SGC"
      },
    ],
  },
  {
    id: "9.2",
    clause: "9.2",
    title: "AUDITORÍA INTERNA",
    description: "La organización lleva a cabo auditorías internas a intervalos planificados para proporcionar información acerca de si el SGC cumple los requisitos propios de la organización para su SGC",
    category: "Evaluación del desempeño",
    verificationPoints: [
      {
        id: "9.2.1.a.1",
        text: "La organización lleva a cabo auditorías internas a intervalos planificados para proporcionar información acerca de si el SGC cumple los requisitos propios de la organización para su SGC"
      },
      {
        id: "9.2.1.a.2",
        text: "La organización lleva a cabo auditorías internas a intervalos planificados para proporcionar información acerca de si el SGC cumple los requisitos de la Norma Internacional ISO 9001"
      },
      {
        id: "9.2.1.b",
        text: "La organización lleva a cabo auditorías internas a intervalos planificados para proporcionar información acerca de si el SGC está implementado y mantenido eficazmente"
      },
      {
        id: "9.2.2.a",
        text: "Se planifica, establece, implementa y mantiene uno o varios programas de auditoría que incluyen la frecuencia, los métodos, las responsabilidades, los requisitos de planificación y la elaboración de informes, que tienen en consideración la importancia de los procesos involucrados, los cambios que afecten a la organización y los resultados de las auditorías previas"
      },
      {
        id: "9.2.2.b",
        text: "Para cada auditoría,  se definen los criterios de la auditoría y el alcance de cada auditoría"
      },
      {
        id: "9.2.2.c",
        text: "Se seleccionan los auditores y  se lleva a cabo auditorías para asegurarse de la objetividad y la imparcialidad del proceso de auditoría"
      },
      {
        id: "9.2.2.d",
        text: "Se aseguran de que los resultados de las auditorías se informan a la dirección pertinente"
      },
      {
        id: "9.2.2.e",
        text: "Se realizan las correcciones y  se toman las acciones correctivas adecuadas sin demora injustificada"
      },
      {
        id: "9.2.2.f",
        text: "Se conserva la información documentada como evidencia de la implementación del programa de auditoría y los resultados de la auditoría"
      },
    ],
  },
  {
    id: "9.3",
    clause: "9.3",
    title: "REVISIÓN POR LA DIRECCIÓN",
    description: "La alta dirección revisa el  SGC de la organización a intervalos planificados, para asegurarse de su idoneidad, adecuación, eficacia y alineación con la dirección estratégica de la organización continuas",
    category: "Evaluación del desempeño",
    verificationPoints: [
      {
        id: "9.3.1",
        text: "La alta dirección revisa el  SGC de la organización a intervalos planificados, para asegurarse de su idoneidad, adecuación, eficacia y alineación con la dirección estratégica de la organización continuas"
      },
      {
        id: "9.3.2.a",
        text: "La revisión por la dirección se planificar y lleva a cabo incluyendo consideraciones sobre el estado de las acciones desde revisiones por la dirección previas"
      },
      {
        id: "9.3.2.b",
        text: "La revisión por la dirección se planificar y lleva a cabo incluyendo los cambios en las cuestiones externas e internas que sean pertinentes al sistema de gestión de la calidad"
      },
      {
        id: "9.3.2.c.1",
        text: "La revisión por la dirección se planificar y lleva a cabo incluyendo la información sobre el desempeño y la eficacia del SGC, incluidas las tendencias relativas a la satisfacción del cliente y la retroalimentación de las partes interesadas pertinentes"
      },
      {
        id: "9.3.2.c.2",
        text: "La revisión por la dirección se planificar y lleva a cabo incluyendo la información sobre el desempeño y la eficacia del SGC, incluidas las tendencias relativas a el grado en que se han cumplido los objetivos de la calidad"
      },
      {
        id: "9.3.2.c.3",
        text: "La revisión por la dirección se planificar y lleva a cabo incluyendo la información sobre el desempeño y la eficacia del SGC, incluidas las tendencias relativas a el desempeño de los procesos y conformidad de los productos y servicios"
      },
      {
        id: "9.3.2.c.4",
        text: "La revisión por la dirección se planificar y lleva a cabo incluyendo la información sobre el desempeño y la eficacia del SGC, incluidas las tendencias relativas a no conformidades y acciones correctivas"
      },
      {
        id: "9.3.2.c.5",
        text: "La revisión por la dirección se planificar y lleva a cabo incluyendo la información sobre el desempeño y la eficacia del SGC, incluidas las tendencias relativas a resultados de seguimiento y medición"
      },
      {
        id: "9.3.2.c.6",
        text: "La revisión por la dirección se planificar y lleva a cabo incluyendo la información sobre el desempeño y la eficacia del SGC, incluidas las tendencias relativas a  resultados de las auditorías"
      },
      {
        id: "9.3.2.c.7",
        text: "La revisión por la dirección se planificar y lleva a cabo incluyendo la información sobre el desempeño y la eficacia del SGC, incluidas las tendencias relativas al desempeño de los proveedores externos"
      },
      {
        id: "9.3.2.d",
        text: "La revisión por la dirección se planificar y lleva a cabo incluyendo  la adecuación de los recursos"
      },
      {
        id: "9.3.2.e",
        text: "La revisión por la dirección se planificar y lleva a cabo incluyendo la eficacia de las acciones tomadas para abordar los riesgos y las oportunidades"
      },
      {
        id: "9.3.2.f",
        text: "La revisión por la dirección se planificar y lleva a cabo incluyendo las oportunidades de mejora"
      },
      {
        id: "9.3.3.a",
        text: "Las salidas de la revisión por la dirección incluyen las decisiones y acciones relacionadas con las oportunidades de mejora"
      },
      {
        id: "9.3.3.b",
        text: "Las salidas de la revisión por la dirección incluyen cualquier necesidad de cmbio en el SGC"
      },
      {
        id: "9.3.3.c",
        text: "Las salidas de la revisión por la dirección incluyen las necesidades de recursos"
      },
      {
        id: "9.3.3",
        text: "La organización conserva información documentada como evidencia de los resultados de las revisiones por la dirección"
      },
    ],
  },
  {
    id: "10.1",
    clause: "10.1",
    title: "MEJORA - GENERALIDADES",
    description: "La organización determina y selecciona las oportunidades de mejora e implementar cualquier acción necesaria para cumplir los requisitos del cliente y aumentar la satisfacción del cliente",
    category: "Mejora",
    verificationPoints: [
      {
        id: "10.1.a",
        text: "Las oportunidades de mejora incluyen mejorar los productos y servicios para cumplir los requisitos, así como tratar las necesidades y expectativas futuras;"
      },
      {
        id: "10.1.b",
        text: "Las oportunidades de mejora incluyen corregir, prevenir o reducir los efectos indeseados"
      },
      {
        id: "10.1.c",
        text: "Las oportunidades de mejora incluyen mejorar el desempeño y la eficacia del SGC"
      },
    ],
  },
  {
    id: "10.2",
    clause: "10.2",
    title: "NO CONFORMIDAD Y ACCIÓN CORRECTIVA",
    description: "Cuando ocurre una no conformidad, incluida cualquiera originada por quejas, la organización reacciona ante la no conformidad y, cuando sea aplicable, toma acciones para controlarla y corregirla",
    category: "Mejora",
    verificationPoints: [
      {
        id: "10.2.1.a.1",
        text: "Cuando ocurre una no conformidad, incluida cualquiera originada por quejas, la organización reacciona ante la no conformidad y, cuando sea aplicable, toma acciones para controlarla y corregirla"
      },
      {
        id: "10.2.1.a.2",
        text: "Cuando ocurre una no conformidad, incluida cualquiera originada por quejas, la organización reacciona ante la no conformidad y, cuando sea aplicable, hace frente a las consecuencias"
      },
      {
        id: "10.2.1.b.1",
        text: "Cuando ocurre una no conformidad, incluida cualquiera originada por quejas, la organización evalua la necesidad de acciones para eliminar las causas de la no conformidad, con el fin de que no vuelva a ocurrir ni ocurra en otra parte, mediante la revisión y el análisis de la no conformidad"
      },
      {
        id: "10.2.1.b.2",
        text: "Cuando ocurre una no conformidad, incluida cualquiera originada por quejas, la organización evalua la necesidad de acciones para eliminar las causas de la no conformidad, con el fin de que no vuelva a ocurrir ni ocurra en otra parte, mediante la determinación de las causas de la no conformidad"
      },
      {
        id: "10.2.1.b.3",
        text: "Cuando ocurre una no conformidad, incluida cualquiera originada por quejas, la organización evalua la necesidad de acciones para eliminar las causas de la no conformidad, con el fin de que no vuelva a ocurrir ni ocurra en otra parte, mediante, la determinación de si existen no conformidades siilares, o que potencialmente podrían ocurrir"
      },
      {
        id: "10.2.1.c",
        text: "Cuando ocurre una no conformidad, incluida cualquiera originada por quejas, la organización implementa cualquier acción necesaria"
      },
      {
        id: "10.2.1.d",
        text: "Cuando ocurre una no conformidad, incluida cualquiera originada por quejas, la organización revisa la eficacia de cualquier acción correctiiva tomada"
      },
      {
        id: "10.2.1.e",
        text: "Cuando ocurre una no conformidad, incluida cualquiera originada por quejas, la organización, si es necesario, actualizar los riesgos y oportunidades determinados durante la planificación"
      },
      {
        id: "10.2.1.f",
        text: "Cuando ocurre una no conformidad, incluida cualquiera originada por quejas, la organización, si es necesario, hace cambios al SGC"
      },
      {
        id: "10.2.1",
        text: "Las acciones correctivas son adecuadas a los efectos de las no conformidades encontradas"
      },
      {
        id: "10.2.2.a",
        text: "La organización conserva información documentada como evidencia de la naturaleza de las no conformidades y cualquier acción posterior tomada"
      },
      {
        id: "10.2.2.b",
        text: "La organización conserva información documentada como evidencia de los resultados de cualquier acción correctiva"
      },
    ],
  },
  {
    id: "10.3",
    clause: "10.3",
    title: "MEJORA CONTINUA",
    description: "La organización mejora continuamente la idoneidad, adecuación y eficacia del SGC",
    category: "Mejora",
    verificationPoints: [
      {
        id: "10.3",
        text: "La organización considerarlos resultados del análisis y la evaluación, y las salidas de la revisión por la dirección, para determinar si hay necesidades u oportunidades que deben tratarse como parte de la mejora continua."
      },
    ],
  },
];

export type RequirementStatus = "pendiente" | "en_revision" | "aprobado" | "falta_info";

export const statusLabels: Record<RequirementStatus, string> = {
  pendiente: "Pendiente",
  en_revision: "En Revisión",
  aprobado: "Aprobado",
  falta_info: "Falta Información"
};

export const statusColors: Record<RequirementStatus, string> = {
  pendiente: "bg-gray-500",
  en_revision: "bg-blue-500",
  aprobado: "bg-green-500",
  falta_info: "bg-yellow-500"
};
