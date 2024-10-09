<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se expone un esquema que proporciona una visión general de los componentes fundamentales que integran un enfoque educativo. Este enfoque se apoya en diversas áreas clave como las teorías relacionadas con las inteligencias múltiples, el discurso pedagógico, y la cognición y el aprendizaje. Cada uno de estos elementos aborda aspectos esenciales para la educación, desde la identificación de habilidades cognitivas y pedagógicas, hasta el uso de modelos de aprendizaje y estrategias específicas como la programación neurolingüística (PNL).

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El esquema presenta tres áreas principales: teorías sobre las inteligencias múltiples, el discurso pedagógico y la relación entre cognición y aprendizaje. Estos componentes están conectados con el modelo pedagógico y la pedagogía en general. Cada área aborda aspectos esenciales, como la identificación de las distintas inteligencias, las normas y tipos de discurso pedagógico, y los modelos de aprendizaje y estrategias cognitivas, incluyendo la PNL. En conjunto, estos elementos proporcionan una estructura integral para comprender y aplicar prácticas educativas efectivas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
