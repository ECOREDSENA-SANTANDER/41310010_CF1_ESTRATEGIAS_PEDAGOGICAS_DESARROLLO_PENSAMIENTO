<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Teoría de las inteligencias múltiples
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade-down')
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/BG.png')})`}")
        img(src='@/assets/curso/temas/t2/img1.png', alt='')
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-4 La Teoría de las Inteligencias Múltiples, desarrollada por Howard Gardner en 1983, es un modelo que desafía la visión tradicional de la inteligencia como una capacidad única y general. Según Gardner, la inteligencia humana no es monolítica, sino que se manifiesta en diferentes formas o “inteligencias”, cada una con sus propias características y formas de desarrollo.
        p El principal objetivo de esta teoría es reconocer y valorar la diversidad de habilidades y talentos en las personas, lo que implica un enfoque educativo que no se centre únicamente en las capacidades lógico-matemáticas o lingüísticas, tradicionalmente privilegiadas en la educación formal; en su lugar, Gardner aboga por un modelo educativo inclusivo que promueva el desarrollo equilibrado de todas las inteligencias, permitiendo a cada individuo desplegar su potencial en los ámbitos donde se destaca.
    
    p.mb-4 Este enfoque tiene una implicación práctica significativa en el ámbito educativo, ya que sugiere la necesidad de adaptar las estrategias de enseñanza a las fortalezas individuales de los estudiantes, facilitando el aprendizaje a través de múltiples vías; además, fomenta un ambiente de aprendizaje más equitativo y motivador, en el que cada estudiante puede sobresalir según su perfil de inteligencias. Al ser un enfoque flexible y versátil, la teoría de Gardner es fácilmente aplicable en contextos educativos diversos y ha tenido un impacto considerable en la innovación pedagógica a nivel mundial.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Las inteligencias múltiples
     
    .row.mb-4
      .col-lg-11
        p El término “inteligencias múltiples” fue acuñado por el psicólogo Howard Gardner en 1983. Su teoría propone la existencia de 
        span.text-dest.fw-bold ocho inteligencias distintas e independientes, 
        | que pueden interactuar y potenciarse entre sí. Cada una de estas inteligencias se desarrolla según cómo se activen y fortalezcan los hemisferios cerebrales en los seres humanos.
      .col-lg-1
        img(src='@/assets/curso/temas/t2/icono1.svg', alt='')
    
    .row.align-items-center.tit-tercer2.mb-4(data-aos='fade-right')
      .col-md-auto.col-2
        img(src='@/assets/curso/temas/t1/tit-terc2.svg', alt='')
      .col-md-auto.col-10
        h3.mb-0.pe-4 Tipos de inteligencias
    
    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t2/infografica.svg', alt='')

      div(x="20%" y="20%" tooltip="Inteligencia intrapersonals" numero="1")
        h5 Inteligencia intrapersonal
        p Comprende las habilidades personales y la capacidad para la introspección. Esta inteligencia permite al individuo comprenderse a sí mismo.

      div(x="50%" y="50%" tooltip="Inteligencia interpersonal")
        .h5.mb-2 Inteligencia interpersonal
        p Incluye habilidades de liderazgo, la capacidad para cultivar relaciones, mantener amistades y resolver conflictos. Es la inteligencia que permite al individuo comprender a los demás, y generalmente se desarrolla mejor a través de la interacción social.

      div(x="70%" y="70%" tooltip="Inteligencia verbal - lingüística")
        .h5.mb-2 Inteligencia verbal - lingüística
        p Es la capacidad de resolver problemas mediante el uso de símbolos verbales. Esta inteligencia permite al individuo construir un modelo mental del mundo a través de letras y palabras.
      
      div(x="30%" y="30%" tooltip="Inteligencia musical")
        .h5.mb-2 Inteligencia musical
        p Es la sensibilidad hacia la música y los sonidos en general. Es característica de los músicos, quienes utilizan esta inteligencia a través de sonidos y vibraciones.
      
      div(x="40%" y="40%" tooltip="Inteligencia lógico-matemática")
        .h5.mb-2 Inteligencia lógico-matemática
        p Es la capacidad para realizar actividades que requieren pensamiento conceptual y abstracto. Permite al individuo formar un modelo mental del mundo basado en la lógica y los números.
      
      div(x="60%" y="60%" tooltip="Inteligencia kinestésica")
        .h5.mb-2 Inteligencia kinestésica
        p Es la habilidad para comunicarse efectivamente mediante el lenguaje corporal, como en el caso de los bailarines de ballet . Esta inteligencia permite al individuo utilizar su cuerpo para realizar actividades o resolver problemas.
      
      div(x="65%" y="65%" tooltip="Inteligencia espacial")
        .h5.mb-2 Inteligencia espacial
        p Es la capacidad para manejar formas y tener una buena percepción del entorno y del espacio. El pensamiento se orienta a través de imágenes, siendo característica de artistas y arquitectos.
      
      div(x="75%" y="75%" tooltip="Inteligencia naturalista")
        .h5.mb-2 Inteligencia naturalista
        p Es la habilidad para interactuar con el entorno y comprender el mundo natural. Esta inteligencia se manifiesta en la capacidad de distinguir, clasificar y utilizar elementos del medio ambiente, ya sea urbano o rural, como objetos, animales, plantas y minerales.
    
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Identificación de inteligencias múltiples
    
    p.mb-4 La identificación de inteligencias múltiples es el proceso de reconocer las diferentes formas en que las personas aprenden y procesan información, basado en la teoría de Howard Gardner, que propone que la inteligencia no es única, sino que se manifiesta en distintas áreas. Este enfoque permite adaptar la enseñanza a las fortalezas y preferencias cognitivas de cada individuo, promoviendo un aprendizaje más personalizado y efectivo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Áreas de las inteligencias múltiples
        
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th #[b Inteligencia]
                th Características
            tbody
              tr
                td #[b Intrapersonal]
                td 
                  ul.lista-ul--color.fa-ul.color-adicional-1
                    li
                      i.fas.fa-check-circle
                      | Trabaja de manera individual.
                    li
                      i.fas.fa-check-circle
                      | Escucha y observa detalladamente a otros.
              tr
                td #[b Interpersonal]
                td 
                  ul.lista-ul--color.fa-ul.color-adicional-1
                    li
                      i.fas.fa-check-circle
                      | Le gusta estar con gente y socializar.
              tr
                td #[b Verbal - lingüística]
                td 
                  ul.lista-ul--color.fa-ul.color-adicional-1
                    li
                      i.fas.fa-check-circle
                      | Habilidad para escribir textos.
                    li
                      i.fas.fa-check-circle
                      | Juega con palabras.
              tr
                td #[b Musical]
                td 
                  ul.lista-ul--color.fa-ul.color-adicional-1
                    li
                      i.fas.fa-check-circle
                      | Sensibilidad a los sonidos.
                    li
                      i.fas.fa-check-circle
                      | Disfruta la música.
              tr
                td #[b Lógico-matemática]
                td 
                  ul.lista-ul--color.fa-ul.color-adicional-1
                    li
                      i.fas.fa-check-circle
                      | Percibe modelos y relaciones.
                    li
                      i.fas.fa-check-circle
                      | Utiliza números y secuencias.
                    li
                      i.fas.fa-check-circle
                      | Piensa conceptual y abstractamente.
              tr
                td #[b Kinestésica]
                td 
                  ul.lista-ul--color.fa-ul.color-adicional-1
                    li
                      i.fas.fa-check-circle
                      | Aprende haciendo.
                    li
                      i.fas.fa-check-circle
                      | Siempre está en movimiento.
              tr
                td #[b Espacial]
                td 
                  ul.lista-ul--color.fa-ul.color-adicional-1
                    li
                      i.fas.fa-check-circle
                      | Ve todo.
                    li
                      i.fas.fa-check-circle
                      | Conocimiento a través de imágenes.
                    li
                      i.fas.fa-check-circle
                      | Encuentra patrones, diseños y texturas.
              tr
                td #[b Naturalista]
                td 
                  ul.lista-ul--color.fa-ul.color-adicional-1
                    li
                      i.fas.fa-check-circle
                      | Conoce y le gusta el medioambiente.
              


</template>

<script>
export default {
  name: 'Tema2',
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
