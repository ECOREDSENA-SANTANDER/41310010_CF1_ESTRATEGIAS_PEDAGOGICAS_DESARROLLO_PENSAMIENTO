<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 La cognición y el aprendizaje

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-3.col-md-6.mb-3.mb-lg-0(data-aos='fade-right')
        img(src='@/assets/curso/temas/t4/img1.png', alt='')
      .col-lg-9(data-aos='fade-left')
        p La cognición y el aprendizaje se abordan desde diversas perspectivas, integrando teorías de Piaget, Bruner y Vygotsky, junto con elementos de la programación neurolingüística. A través de la relación del individuo con su entorno, se configuran distintas formas de aprendizaje, como lo expuso Howard Gardner en su “Teoría de las Inteligencias Múltiples” en 1983, donde identificó ocho estilos de aprendizaje. Independientemente del enfoque, la capacidad creativa es crucial en la cognición, ya que permite alcanzar nuevos niveles de información y orden en los procesos cognitivos, lo que es fundamental para entender cómo las personas desarrollan su pensamiento y su aprendizaje.
        .cajon.color-primario.bg-2.p-4
          p.mb-0 La educación, como proceso de adquisición de conocimientos, habilidades, valores y actitudes, es influenciada por estos modelos teóricos. Bruner subraya la necesidad de que cada generación redefine sus metas educativas, enfatizando la calidad y la formación de ciudadanos preparados para la democracia. Vygotsky, por su parte, destaca el aprendizaje como un mecanismo esencial para el desarrollo, con un fuerte énfasis en el contexto y la interacción social.

    p.mb-4 Mientras que el enfoque educativo tradicional se centra en la presentación y repetición, una enseñanza activa, que promueva la aplicación práctica, resulta en aprendizajes más profundos y significativos.

    .row.bgc-3.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3.
            span Enseñanza activa
          figure
            img(src='@/assets/curso/temas/t4/fig3.png', alt='El esquema representa el concepto de “aprendizaje” dentro de la enseñanza activa, destacando dos aspectos principales. Por un lado, se resalta el desarrollo de conocimientos, habilidades, valores y actitudes mediante la enseñanza y la experiencia. Por otro, se menciona que el aprendizaje es un mecanismo clave para el desarrollo cognitivo y social, lo que permite entender mejor los procesos involucrados en el crecimiento personal y académico.')  


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Modelos de aprendizaje

    p.mb-4 Los modelos de aprendizaje son enfoques teóricos que describen cómo las personas adquieren, procesan y retienen conocimientos y habilidades. Estos modelos guían la enseñanza y pueden variar según las teorías cognitivas, conductuales, constructivistas, entre otras, adaptándose a diferentes estilos y necesidades educativas.



    


</template>

<script>
export default {
  name: 'Tema4',
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
