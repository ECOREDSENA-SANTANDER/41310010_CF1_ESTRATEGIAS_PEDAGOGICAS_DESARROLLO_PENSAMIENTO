<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Discurso Pedagógico
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade-down')
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/BG.png')})`}")
        img(src='@/assets/curso/temas/t3/img1.png', alt='')
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 El discurso pedagógico se entiende como el conjunto de comunicaciones y prácticas empleadas en la educación para transmitir conocimientos y valores, estructurando así el proceso de enseñanza y aprendizaje. Este enfoque permite a las instituciones educativas contar con herramientas fundamentales para guiar la interacción educativa.

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
