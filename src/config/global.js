export default {
  global: {
    componenteFormativo: 'Técnicas y metodologías educativas',
    descripcionCurso:
      'Este material de formación se enfoca en la implementación de técnicas y metodologías educativas que fomenten el desarrollo cognitivo y crítico de los aprendices. A través del estudio de diferentes enfoques pedagógicos, se busca capacitar a los educadores en la creación de ambientes de aprendizaje que estimulen la reflexión, el análisis y la resolución de problemas, promoviendo así un pensamiento autónomo con bases sólidas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Enfoque educativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Modelo pedagógico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Pedagogía',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Teoría de las inteligencias múltiples',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Las inteligencias múltiples',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Identificación de inteligencias múltiples',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Discurso pedagógico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de reglas en el discurso pedagógico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Pasos para elaborar un discurso pedagógico',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'La cognición y el aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Modelos de aprendizaje',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estilos de aprendizaje',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Cognición en la educación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Estrategias cognitivas',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Programación neurolingüística en la educación',
            hash: 't_4_5',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/41310010_CF1_DU.pdf',
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
      tema: '4. La cognición y el aprendizaje',
      referencia:
        'Genius Baby. (2016, 22 octubre). Aprendizaje basado en inteligencias múltiples de Howard Gardner.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DeSTRiVV3yA',
    },
    {
      tema: '4. La cognición y el aprendizaje',
      referencia:
        'Emilio Valcárcel. (2020, 24 diciembre). Teoría de las inteligencias múltiples de Gardner.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=F9YuLBivzcQ',
    },
  ],
  glosario: [
    {
      termino: 'Actitudes',
      significado:
        'Disposición o tendencia de una persona hacia algo, que influye en su comportamiento.',
    },
    {
      termino: 'Adquisición',
      significado:
        'Acto de obtener o adquirir algo, como conocimientos o habilidades.',
    },
    {
      termino: 'Aprendizaje',
      significado:
        'Proceso de adquirir conocimientos, habilidades, valores y actitudes a través de la experiencia, la enseñanza y la práctica.',
    },
    {
      termino: 'Cognición',
      significado:
        'Actividad mental relacionada con el conocimiento, el entendimiento y la toma de decisiones.',
    },
    {
      termino: 'Cognitivo',
      significado:
        'Relacionado con los procesos mentales de conocimiento, como el pensamiento, la memoria y la percepción.',
    },
    {
      termino: 'Conocimientos',
      significado:
        'Información, hechos o principios adquiridos a través de la educación o la experiencia.',
    },
    {
      termino: 'Desarrollo',
      significado:
        'Proceso de crecimiento o progreso en habilidades, conocimientos y competencias.',
    },
    {
      termino: 'Enseñanza',
      significado:
        'Actividad de transmitir conocimientos, habilidades y valores a otras personas.',
    },
    {
      termino: 'Experiencia',
      significado:
        'Conjunto de conocimientos o habilidades adquiridos por la práctica o vivencias a lo largo del tiempo.',
    },
    {
      termino: 'Habilidades',
      significado:
        'Capacidades o destrezas para realizar tareas específicas con éxito.',
    },
    {
      termino: 'Interacción',
      significado:
        'Acción recíproca entre dos o más personas que influye en el comportamiento y el aprendizaje.',
    },
    {
      termino: 'Memorización',
      significado: 'Capacidad de recordar y retener información.',
    },
    {
      termino: 'Proceso',
      significado:
        'Serie de acciones o pasos sistemáticos para lograr un objetivo particular, como el aprendizaje.',
    },
    {
      termino: 'Social',
      significado:
        'Relacionado con las interacciones entre individuos y cómo estas influyen en su desarrollo.',
    },
    {
      termino: 'Valores',
      significado:
        'Creencias y principios que guían el comportamiento y las decisiones de una persona.',
    },
  ],
  referencias: [
    {
      referencia:
        'Psicoactiva. (2018, 11 marzo). El modelo de inteligencias múltiples de Howard Gardner. YouTube.',
      link: 'https://www.youtube.com/watch?v=N7cbzje3Rb4',
    },
    {
      referencia:
        'Gardner, H., & Asensio, M. T. M. N. M. (1998). Inteligencias múltiples. Barcelona: Paidós',
      link: '',
    },
    {
      referencia:
        'Armstrong, T., Rivas, M. P., Gardner, H., & Brizuela, B. (1999). Las inteligencias múltiples en el aula. Buenos Aires: Manantial.',
      link: '',
    },
    {
      referencia:
        'Campbell, L., Campbell, B., & Dickenson, D. (2000). Inteligencias múltiples. Argentina: troquel.',
      link: '',
    },
    {
      referencia:
        'De Castillo, C. R. (2002). Reflexión del docente y pedagogía crítica. Laurus, 8(14), 92-104.',
      link: '',
    },
    {
      referencia:
        'Aguirre, M., Camacho, T., Flórez, T., Gaibao, D., Murcia, G., & Pasive, Y. (2012). Estrategias pedagógicas en el ámbito educativo.',
      link: '',
    },
    {
      referencia:
        'Blogger. (2019, marzo 6). Estilos de aprendizaje. MODELO VAK. En el artículo se menciona a Neil Fleming.',
      link:
        'https://educa5team.blogspot.com/2019/03/estilos-de-aprendizaje.html',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2007). Aprendizajes para mejorar: Guía para la gestión de buenas prácticas (Guía 28).',
      link:
        'http://www.mineducacion.gov.co/1621/articles-124660_archivo_pdf.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). Normograma: Ley 115 de 1994, Ley 1064 de 2006, Ley 1295 de 2009, Ley 1324 de 2009, Decreto 1860 de 1994 y Decreto 1075 de 2015.',
      link: 'https://www.mineducacion.gov.co/portal/Normatividad/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lilian Clarena Franco López',
          cargo: 'Experta temática',
          centro: 'Regional Quindío - Centro Agroindustrial',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
