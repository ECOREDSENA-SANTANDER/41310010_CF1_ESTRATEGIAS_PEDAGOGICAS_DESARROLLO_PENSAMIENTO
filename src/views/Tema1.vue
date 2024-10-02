<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Enfoque educativo

    .row.justify-content-center.align-items-center
      .col-lg-3.col-8.col-md-6.mb-3.mb-lg-0(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/img1.png', alt='')
      .col-lg-9(data-aos='fade-left')
        p El enfoque educativo basado en las inteligencias múltiples propone adaptar las técnicas y metodologías educativas para atender la diversidad de formas en que los estudiantes aprenden, reconociendo que cada individuo posee una combinación única de inteligencias. Este enfoque sugiere utilizar estrategias variadas como el uso de actividades prácticas para la inteligencia corporal-kinestésica, debates o escritura para la inteligencia lingüística, y experimentos para la lógico-matemática, entre otras. 
        p Al integrar estas metodologías, los docentes pueden personalizar la enseñanza, fomentando un aprendizaje más efectivo y motivador, al alinearse con las fortalezas cognitivas y estilos de aprendizaje de cada estudiante.


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Modelo pedagógico

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade-down')
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/BG.png')})`}")
        img(src='@/assets/curso/temas/t1/img2.png', alt='')
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 Un modelo pedagógico es una representación de una realidad, la cual puede manifestarse como una imagen, una práctica o un conjunto de relaciones que facilitan una mejor comprensión de esa realidad. En este sentido, el modelo pedagógico refleja las dinámicas predominantes en el proceso de enseñanza, donde el ser humano interactúa con la sociedad y se ve inmerso en diversas situaciones de carácter psicológico, sociológico y antropológico.

    p.text-center.mb-4(data-aos='fade') Este enfoque permite responder a preguntas como:

    .row.bgc-1.align-items-center.pt-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .row.justify-content-evenly(data-aos='fade-down')
            .col-lg-3.col-md-6.mb-3.mb-lg-0
              .cajon-img1
                img(src='@/assets/curso/temas/t1/pregunta1.png', alt='¿Para qué?')
            .col-lg-3.col-md-6.mb-3.mb-lg-0
              .cajon-img1
                img(src='@/assets/curso/temas/t1/pregunta2.png', alt='¿Cuándo?')
            .col-lg-3.col-md-6.mb-3.mb-lg-0
              .cajon-img1
                img(src='@/assets/curso/temas/t1/pregunta3.png', alt='¿Con qué?')

    .row.align-items-center.tit-tercer1.mb-4(data-aos='fade-right')
      .col-md-auto.col-2
        img(src='@/assets/curso/temas/t1/tit-terc1.svg', alt='')
      .col-md-auto.col-10
        h3.mb-0 Aspectos relevantes de modelo pedagógico

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-4.p-lg-5
        .row.align-items-center.mb-4
          .col-3
            img(src='@/assets/curso/temas/t1/tarj1-ico1.svg', alt='')
          .col-9
            h4.mb-0 Relación y propósito
        p.mb-0 Encapsula la visión educativa de los estudiantes, describiendo la relación y el propósito inherente entre la enseñanza y el aprendizaje. En este marco, la enseñanza fomenta una interacción recíproca entre el aula, la escuela, la sociedad, y los vínculos de los individuos con el conocimiento y la cultura.
      .col-md.tarjeta.color-acento-contenido.p-4.p-lg-5
        .row.align-items-center.mb-4
          .col-3
            img(src='@/assets/curso/temas/t1/tarj1-ico2.svg', alt='')
          .col-9
            h4.mb-0 Coherencia y estructura
        .mb-0p Se integra con las acciones educativas, organizando la coherencia entre los participantes y las representaciones que los inspiran. Así, actúa como un catalizador en el proceso de enseñanza-aprendizaje, sirviendo como una herramienta clave para estructurar la búsqueda de nuevos conocimientos dentro del ámbito pedagógico.
      
    .row.bgc-2.align-items-center.py-4.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        
        .row.justify-content-center
          .col-lg-8.mb-5
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 1.
              span Modelos pedagógicos
            figure
              img(src='@/assets/curso/temas/t1/fig1.png', alt='La imagen describe un modelo pedagógico centrado en la relación entre varias dimensiones clave. En el centro se ubica el “modelo pedagógico”, rodeado por cuatro áreas principales que lo estructuran: la dimensión pedagógica, enseñar a aprender, la estructura de conocimientos y la coherencia en las acciones. Estos elementos contribuyen exponen los enfoques educativos, poniendo énfasis en la organización del conocimiento y la implementación coherente de las acciones pedagógicas.')  
      
    .row.align-items-center.tit-tercer2.mb-4(data-aos='fade-right')
      .col-md-auto.col-2
        img(src='@/assets/curso/temas/t1/tit-terc2.svg', alt='')
      .col-md-auto.col-10
        h3.mb-0.pe-4 Principales modelos pedagógicos

    p.mb-4 A lo largo de la historia, se han desarrollado diversos modelos pedagógicos, entre los cuales se destacan los siguientes:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-1" data-aos='fade-down')
      .row(titulo="Modelo tradicional")
        .col-md-3.mb-4.mb-md-0
          img.w-75.m-auto(src='@/assets/curso/temas/t1/acor-img1.png', alt='')
        .col-md-9
          p En este enfoque, el maestro es el principal transmisor de información y contenidos, y es quien planifica el trabajo en clase. Los estudiantes adoptan un rol pasivo en el proceso de formación.
          p Este modelo es considerado represivo, ya que se centra en la formación del carácter mediante una relación vertical entre maestro y alumno.
      .row(titulo="Modelo romántico")
        .col-md-3.mb-4.mb-md-0
          img.w-75.m-auto(src='@/assets/curso/temas/t1/acor-img2.png', alt='')
        .col-md-9
          p Este modelo se enfoca en la dimensión interna del estudiante, quien se convierte en el eje central del proceso educativo. La clase se desarrolla en un ambiente flexible, con el objetivo de fomentar el desarrollo natural del estudiante. El maestro actúa como un facilitador que promueve la libre expresión del estudiante.
          p “En este modelo, el desarrollo natural del niño se convierte en la meta y a la vez, en el método de la educación. Se plantea que lo más importante para el desarrollo del niño es su interioridad, que se convierte en el eje central y el método de la educación” (Gómez y Polanía, 2008).
      .row(titulo="Modelo conductista")
        .col-md-3.mb-4.mb-md-0
          img.w-75.m-auto(src='@/assets/curso/temas/t1/acor-img7.png', alt='')
        .col-md-9
          p Según Gómez y Polanía (2008), este modelo se caracteriza por la fijación y control de los objetivos de aprendizaje, y por la transmisión segmentada de saberes técnicos, con el propósito de modelar la conducta del estudiante. El proceso de aprendizaje se basa en el “adiestramiento experimental mediante refuerzos”. En este contexto, el maestro actúa como mediador y el estudiante como receptor de la programación, acumulando aprendizajes específicos.
      .row(titulo="Modelo desarrollista")
        .col-md-3.mb-4.mb-md-0
          img.w-75.m-auto(src='@/assets/curso/temas/t1/acor-img3.png', alt='')
        .col-md-9
          p En este enfoque, el maestro crea un ambiente estimulante que facilita al estudiante el acceso progresivo y secuencial a estructuras cognitivas superiores, de acuerdo con sus necesidades. El maestro se desempeña como facilitador, mientras que el estudiante es responsable de construir sus propios contenidos de aprendizaje.
      .row(titulo="Modelo socialista")
        .col-md-3.mb-4.mb-md-0
          img.w-75.m-auto(src='@/assets/curso/temas/t1/acor-img4.png', alt='')
        .col-md-9
          p En este modelo, el maestro educa con el objetivo de desarrollar plenamente al individuo en el contexto de una sociedad socialista. Según McLaren (1999), “la pedagogía social examina las instituciones educativas tanto en su medio histórico como en su medio social, considerando que forman parte del entramado social y político de la sociedad dominante.” Se enfatiza el trabajo en grupo y el método educativo se basa en la ciencia, con un desarrollo progresivo, secuencial y mediado por lo científico.
      .row(titulo="Modelo constructivista")
        .col-md-3.mb-4.mb-md-0
          img.w-75.m-auto(src='@/assets/curso/temas/t1/acor-img5.png', alt='')
        .col-md-9
          p Este enfoque postula que el conocimiento es construido por el propio estudiante. La escuela promueve una actividad mental constructiva, reconociendo al estudiante como un ser único inmerso en un contexto social específico que lo influye. En este modelo, los docentes deben considerar las siguientes preguntas: ¿qué tipo de sujeto se desea formar?, ¿qué tipo de escuela se necesita?, ¿para qué tipo de sociedad? La clase se organiza en torno a tres elementos fundamentales: una esencia, una tendencia y una estructura de funcionamiento.
      .row(titulo="Modelo flexible")
        .col-md-3.mb-4.mb-md-0
          img.w-75.m-auto(src='@/assets/curso/temas/t1/acor-img6.png', alt='')
        .col-md-9
          p Este enfoque incluye propuestas educativas diseñadas para atender a poblaciones diversas o en condiciones de vulnerabilidad. Los modelos flexibles cuentan con una propuesta pedagógica y didáctica coherente con los contenidos. El Ministerio de Educación Nacional (MEN) promueve varios modelos basados en este enfoque, según lo publicado en MEN (2010):
          ul.lista-ul--color.fa-ul.color-adicional-1
            li
              i.fas.fa-check-circle
              | Aceleración del aprendizaje.
            li
              i.fas.fa-check-circle
              | Escuela nueva.
            li
              i.fas.fa-check-circle
              | Post primaria.
            li
              i.fas.fa-check-circle
              | Telesecundaria.
            li
              i.fas.fa-check-circle
              | NEE o barreras de aprendizaje.


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Pedagogía

    p.mb-4 Según Gómez (2001), “la pedagogía es una actividad humana sistemática que guía las acciones educativas y formativas, en la cual se establecen los principios, métodos, prácticas, formas de pensamiento y modelos que constituyen sus elementos fundamentales.”

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-3.col-md-6.col-7.mb-3.mb-lg-0(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/img3.png', alt='')
      .col-lg-9(data-aos='fade-left')
        p La pedagogía, en su sentido más amplio, es una disciplina que abarca el estudio de los métodos y principios que guían el proceso educativo en sus diversas formas, más allá de la simple transmisión de conocimientos, la pedagogía tiene como finalidad principal estructurar y orientar las acciones educativas y formativas de manera sistemática, de tal forma que se optimicen los procesos de enseñanza-aprendizaje.
        .cajon.color-primario.bg-2.p-4
          p.mb-0 A través de esta organización consciente y deliberada, busca generar una comprensión profunda del acto educativo, donde la interacción entre educador y educando se fundamenta en principios éticos y metodológicos claros. Estos principios permiten no solo transmitir contenidos, sino también formar individuos críticos, autónomos y capaces de interactuar de manera efectiva en su entorno social.

    p.mb-4 Además, la pedagogía se enriquece con una cultura particular, construida a lo largo del tiempo por medio de la experiencia, la reflexión y la investigación sobre las mejores prácticas educativas; esta cultura pedagógica no es homogénea, sino que incluye una diversidad de enfoques y modelos que responden a diferentes contextos y necesidades educativas. 
      span.fw-bold Cada enfoque pedagógico aporta una visión particular de cómo debe desarrollarse el proceso de enseñanza, 
      | lo que contribuye a la profesionalización de los docentes, por tanto, la pedagogía, no solo busca la eficiencia en el acto de enseñar, sino también el desarrollo continuo del docente como un profesional capaz de adaptar y transformar su práctica en función de los desafíos educativos contemporáneos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-right')
        .bg-1.p-4.mb-4
          p.mb-0 Las técnicas y metodologías educativas están estrechamente vinculadas con la teoría de las inteligencias múltiples, ya que esta propone que los estudiantes tienen diferentes formas de aprender y procesar la información. Al reconocer estas diferencias, los educadores pueden aplicar enfoques pedagógicos más diversificados, utilizando estrategias que se adapten a las distintas inteligencias, como actividades prácticas para la inteligencia kinestésica, debates y lecturas para la lingüística, o proyectos visuales para la espacial.
        .row.align-items-center.mb-4
          .col-auto
            img(src='@/assets/curso/temas/t1/tarj1-ico1.svg', alt='')
          .col-lg-10.col-md-9.col-8
            p.mb-0 Esto fomenta un aprendizaje más inclusivo y personalizado, permitiendo que cada alumno desarrolle su potencial a través de métodos que se alineen con sus fortalezas cognitivas.
      .col-lg-4.col-md-6.mb-3.mb-lg-0.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/img4.png', alt='')


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
