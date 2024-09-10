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
      h2 1.1  Modelo pedagógico

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


    .row.align-items-center.tit-tercer2.mb-4(data-aos='fade-right')
      .col-md-auto.col-2
        img(src='@/assets/curso/temas/t1/tit-terc2.svg', alt='')
      .col-md-auto.col-10
        h3.mb-0.pe-4 Principales modelos pedagógicos

      


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
