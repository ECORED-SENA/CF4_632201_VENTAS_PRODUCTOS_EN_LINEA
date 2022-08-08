export default {
  global: {
    componenteFormativo: 'El cliente y las ventas en línea',
    descripcionCurso:
      'Las ventas en línea están hoy por hoy al alcance de todos lo seres humanos, es un fenómeno en crecimiento dado que los diferentes mercados requieren consumidores que son el eje de todo el comercio, los clientes son la base fundamental para que una empresa salga adelante; es el momento de conocer la diversidad del mercado y sus consumidores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/float1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de cliente',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Asesoría al cliente',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Seguimiento al cliente ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Criterios de percepción del cliente',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Resolución de conflictos',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Técnicas de resolución de conflictos',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Solicitudes de los clientes',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Trámites y respuestas a clientes',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Marketing</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Marketing relacional',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estrategias de marketing',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Postventa digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: ' Proceso de postventa digital',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Procedimientos de postventa digital',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Niveles de cumplimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Medición de entregas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Manejo de entregas',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Seguimiento de entregas',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tipos de cliente',
      referencia:
        'Marketing co-creador. (2016). ¿Conoces a los tipos de clientes?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tJcEDs4kyoc',
    },
    {
      tema: 'Resolución de conflictos',
      referencia: 'Jara, E. (2016). Manejo de conflictos [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FWfvNwAtMvs',
    },
    {
      tema: '<em>Marketing</em>',
      referencia:
        'Cyberclick - Marketing digital. (2021). Qué es el marketing relacional. Cómo aplicar en tu empresa [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pyV1HBy3ybY',
    },
    {
      tema: 'Niveles de cumplimiento',
      referencia:
        'Fabricando. (2021). Cómo se hacen los envíos de Amazon en 1 día. Cómo funcionan los envíos de Amazon Prime [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=X4P_g7XS1vY',
    },
  ],
  glosario: [
    {
      termino: 'Asesoría',
      significado:
        'El servicio de atención al cliente es aquel utilizado por una empresa o institución para establecer una conexión con sus clientes, con vista a mejorar la calidad de sus productos , en caso de ser un establecimiento comercial, el cuidado que se le brinda al consumidor al ser atendido por el personal.',
    },
    {
      termino: 'Cliente',
      significado:
        'Es una persona o entidad que compra los bienes y servicios que ofrece una empresa.',
    },
    {
      termino: 'Cliente leal',
      significado:
        'Es uno de los principales elementos que eleva la competitividad de una marca. Es aquel usuario que maximiza la utilización de un determinado producto y/o servicio, volviéndose indispensable para la empresa.',
    },
    {
      termino: 'Comprador',
      significado:
        'Es una gestión 360º de ventas, marketing, atención al cliente y todos los puntos de contacto.',
    },
    {
      termino: 'CRM',
      significado:
        '<em>Customer Relationship Management</em> se refiere al conjunto de prácticas, estrategias de negocio y tecnologías enfocadas en la relación con el cliente, es una gestión 360º de ventas, <em>marketing</em>, atención al cliente y todos los puntos de contacto.',
    },
    {
      termino: '<em>Cross selling</em>',
      significado:
        'El término venta cruzada comprende la venta relacionada de productos o servicios complementarios, basados en los intereses del cliente en uno de los productos de su empresa o bien en la compra de uno de estos.',
    },
    {
      termino: 'Fidelización de un cliente',
      significado:
        'Consiste en retener clientes ganados, que continúan comprando sus productos o servicios gracias a las experiencias positivas que han tenido con su empresa. Para esto, es necesario un conjunto de interacciones satisfactorias, que desarrollarán una relación de confianza con la clientela a largo plazo.',
    },
    {
      termino: '<em>Influencer</em>',
      significado:
        'Usuario de redes sociales con numerosos seguidores que tienen un alto nivel de persuasión en las personas. Los especialistas de marketing colaboran con ellos para lograr un alcance más cercano y amigable con su público objetivo, con base en recomendaciones o el uso de productos o servicios.',
    },
    {
      termino: '<em>Lead</em> calificado para ventas',
      significado:
        'Es un <em>lead</em> nutrido que el área de marketing comparte al área de ventas, pues tiene altas probabilidades de realizar una compra.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'Es el término utilizado para referirse al conjunto de técnicas o estrategias utilizadas para estudiar el comportamiento de los mercados, la gestión comercial de las empresas y  las necesidades de los consumidores.',
    },
    {
      termino: 'Postventa',
      significado:
        'Es la parte de la atención al cliente que reúne todas las estrategias pensadas para mejorar la experiencia después de la compra y mantener una relación duradera con los clientes, siempre correspondiendo a sus expectativas y necesidades.',
    },
    {
      termino: 'Producto',
      significado:
        'Para la economía se define como el resultado que se obtiene del proceso de producción dentro de una empresa.',
    },
    {
      termino: 'Resolución de conflictos',
      significado:
        'Es el conjunto de conocimientos y habilidades para comprender e intervenir en solucionar de forma pacífica los problemas que en cualquier ámbito social surjan.',
    },
    {
      termino: 'Target',
      significado: 'Público o cliente ideal.',
    },
    {
      termino: 'VIP',
      significado:
        'Persona que recibe un trato especial en ciertos lugares públicos por ser famosa o socialmente relevante.',
    },
  ],
  referencias: [
    {
      referencia:
        'Botín, R. (2022). Servicio postventa: 8 estrategias y ejemplos infalibles. Shopify',
      link:
        'https://www.shopify.com.mx/blog/17011080-lo-que-debes-saber-sobre-el-servicio-post-venta',
    },
    {
      referencia:
        'Convinze. (2018). Tráfico web: conceptos básicos de marketing digital. Convinze. ',
      link:
        'https://convinze.es/trafico-web-conceptos-basicos-marketing-digital/',
    },
    {
      referencia:
        'Csizmadia, A. (2020).  Conflict resolution tips for handling & resolving conflicts with clients. LiveAgent. ',
      link:
        'https://www.liveagent.com/blog/conflict-resolution-tips-for-handling-resolving-conflicts-with-clients/',
    },
    {
      referencia:
        'Da Silva, D. (2021). Percepción del consumidor: ¿cómo te ven tus clientes? Zendesk. ',
      link: 'https://www.zendesk.com.mx/blog/percepcion-del-consumidor/',
    },
    {
      referencia:
        'Da Silva, D. (2021). Servicio postventa: cuáles son sus fases y 3 ejemplos de servicio postventa para que los puedas aplicar dentro de tu empresa. Zendesk.',
      link: 'https://www.zendesk.com.mx/blog/ejemplos-servicio-postventa/',
    },
    {
      referencia: 'DATACRM. (2021). Postventa: la guía definitiva. DATACRM. ',
      link: 'https://www.datacrm.com/blog/que-es-postventa/',
    },
    {
      referencia: 'Economipedia. (2020). Cliente. Economipedia.',
      link: 'https://economipedia.com/definiciones/cliente.html',
    },
    {
      referencia:
        'Gutiérrez, P. (s.f). Cómo hacer seguimiento al cliente (métodos y automatizaciones).',
      link: 'https://www.linkportnet.com/blog/seguimiento-al-cliente/',
    },
    {
      referencia: 'Melara, M. (2020). ¿Qué es la percepción del cliente?',
      link:
        'https://marlonmelara.com/que-es-la-percepcion-del-cliente/#:~:text=La%20percepci%C3%B3n%20del%20cliente%20define%20cu%C3%A1nto%20vende%20un,se%20generan%20una%20percepci%C3%B3n%20negativa%20sobre%20la%20marca',
    },
    {
      referencia:
        'Moya, P. (s.f,). ¿Qué es la capacidad de respuesta en el servicio al cliente? Gestionar fácil.',
      link:
        'https://www.gestionar-facil.com/que-es-la-capacidad-de-respuesta-en-el-servicio-al-cliente',
    },
    {
      referencia:
        'Nardi, G. (2020). ¿Cuáles son los tipos de clientes que existen en marketing? Desnudando el marketing.',
      link: 'https://desnudandoelmarketing.com/tipos-de-clientes-en-marketing/',
    },
    {
      referencia:
        'Sordo, A. (2022). Guía completa para crear una estrategia de marketing digital efectiva. HubSpot. ',
      link:
        'https://blog.hubspot.es/marketing/guia-completa-estrategia-marketing-digital',
    },
    {
      referencia:
        'Toranzo, J. (2022). Marketing relacional: qué es y estrategias más importantes. Esan',
      link:
        'https://www.esan.edu.pe/conexion-esan/marketing-relacional-que-es-y-estrategias-mas-importantes',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lizeth Karina Manchego',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
