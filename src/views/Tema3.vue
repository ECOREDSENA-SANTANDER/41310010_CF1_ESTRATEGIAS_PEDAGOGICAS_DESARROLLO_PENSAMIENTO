<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Discurso Pedagógico
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-down')
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/BG.png')})`}")
        img(src='@/assets/curso/temas/t3/img1.png', alt='')
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 El discurso pedagógico se entiende como el conjunto de comunicaciones y prácticas empleadas en la educación para transmitir conocimientos y valores, estructurando así el proceso de enseñanza y aprendizaje. Este enfoque permite a las instituciones educativas contar con herramientas fundamentales para guiar la interacción educativa.

    .row.align-items-center.tit-tercer2.mb-4(data-aos='fade-right')
      .col-md-auto.col-2
        img(src='@/assets/curso/temas/t1/tit-terc2.svg', alt='')
      .col-md-auto.col-10
        h3.mb-0.pe-4 Interacción verbal en el contexto educativo

    .row.justify-content-center.align-items-end.mb-3
      .col-lg-3.col-md-6.col-8.mb-3.mb-lg-0(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/img2.png', alt='')
      .col-lg-9(data-aos='fade-left')
        p Hace referencia al intercambio comunicativo entre el docente y el estudiante dentro de un entorno formal de clase, este contexto genera un tipo de discurso específico, influenciado por las situaciones y momentos particulares de la comunicación educativa; las condiciones en las que se emplea este discurso determinan su naturaleza, de manera similar a cómo el contexto influye en la comunicación en una consulta médica.
        .cajon.color-primario.bg-2.p-4
          p.mb-0 Los discursos institucionales, académicos, planificados y públicos, comúnmente denominados pedagógicos, emergen cuando el estatus de los participantes establece una jerarquía de voces. La intención del discurso pedagógico es formular textos y prácticas que han sido recontextualizados, convirtiéndose en un principio de contextualización dentro del proceso educativo.


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Tipos de reglas en el discurso pedagógico

    .row.justify-content-center
      .col-lg-8.mb-3.mb-lg-0(data-aos='fade-right')
        p Según la teoría de Basil Bernstein, citada por Rosales (1998), existen tres tipos de reglas que rigen el discurso pedagógico:
        AcordionA.tema3.mb-5(tipo="a" clase-tarjeta="tarjeta color-acento-contenido")
          .row.justify-content-center(titulo="Reglas de distribución")
            .col-lg-11
              p Estas reglas codifican el poder a través del principio de clasificación. Incluyen tres funciones principales: proporcionar información, obtener información y dar instrucciones.
          .row.justify-content-center(titulo="Regla de recontextualización")
            .col-lg-11
              p Es una regla de comunicación especializada que guía el proceso educativo.
          .row.justify-content-center(titulo="Regla de evaluación")
            .col-lg-11
              p Establece la relación entre el discurso institucional y el discurso regulativo, mediante la traducción y especialización del tiempo, el texto y el espacio.
      .col-lg-4.col-md-6.mb-3.mb-lg-0.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/img3.png', alt='')


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Pasos para elaborar un discurso pedagógico

    p.mb-4 A continuación, se describen los pasos requeridos para el proceso de elaboración de un discurso pedagógico: 

    .bgi-2.tarjeta.p-4.p-lg-5.mb-5(data-aos="fade-down")
      .tarjeta.tarjeta--blanca.p-4
        PasosB.color-acento-contenido
          .row.justify-content-center.align-items-center(titulo="Paso 1")
            .col-lg-1.col-md-2.col-5.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t3/ico1.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 #[b Selección de contenidos conceptuales y actividades:] identificar los conceptos clave y las actividades relacionadas con ellos.
          .row.justify-content-center.align-items-center(titulo="Paso 2")
            .col-lg-1.col-md-2.col-5.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t3/ico2.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 #[b Selección de actividades y experiencias:] escoger experiencias y actividades que aborden los conceptos seleccionados.
          .row.justify-content-center.align-items-center(titulo="Paso 3")
            .col-lg-1.col-md-2.col-5.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t3/ico3.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 #[b Introducción:] su objetivo es captar la atención del auditorio, disipar resistencias, ganar simpatías, y establecer el tema. La introducción señaliza el comienzo del discurso y fija el interés del receptor.
          .row.justify-content-center.align-items-center(titulo="Paso 4")
            .col-lg-1.col-md-2.col-5.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t3/ico4.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 #[b Planteamiento del problema:] es una enunciación clara y breve del tema que se va a tratar, acompañada de una indagación previa para identificar posibles problemáticas y resistencias que puedan surgir durante el proceso de aprendizaje.
          .row.justify-content-center.align-items-center(titulo="Paso 5")
            .col-lg-1.col-md-2.col-5.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t3/ico5.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 #[b División:] consiste en enumerar las partes que compondrán el discurso. Tras la introducción, el docente debe desglosar las secciones del tema que va a explicar.
          .row.justify-content-center.align-items-center(titulo="Paso 6")
            .col-lg-1.col-md-2.col-5.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t3/ico6.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 #[b Narración:] es el desarrollo o exposición del discurso, donde se presentan los hechos necesarios para apoyar la conclusión. Si el tema tiene subdivisiones, es esencial seguir un orden lógico.
          .row.justify-content-center.align-items-center(titulo="Paso 7")
            .col-lg-1.col-md-2.col-5.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t3/ico7.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 #[b Argumentación:] esta parte incluye las pruebas que respaldan la posición expuesta en el discurso.
          .row.justify-content-center.align-items-center(titulo="Paso 8")
            .col-lg-1.col-md-2.col-5.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t3/ico8.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 #[b Conclusión:] es la síntesis final del discurso, considerando las implicaciones de lo expuesto.

    .row.bgc-6.align-items-center.py-4.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 2.
              span Estructura del discurso pedagógico
            figure
              img(src='@/assets/curso/temas/t3/fig2.svg', alt='La imagen presenta un esquema sobre la estructura del discurso pedagógico. Este discurso se divide en dos ramas principales: instrucciones y regulación. Las instrucciones se subdividen en categorías y, a su vez, estas derivan en transmisiones y adquirientes. Por otro lado, el aspecto regulativo se subdivide en la práctica, que conduce hacia una combinación de instrucciones y regulación.')  
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/img4.png', alt='')



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
