<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-md-0.pb-0
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Teoría de las inteligencias múltiples
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade-down')
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/BG.png')})`}")
        img(src='@/assets/curso/temas/t2/img1.png', alt='')
      .bloque-texto-g__texto.p-4.p-lg-5
        p La teoría de las inteligencias múltiples, desarrollada por Howard Gardner en 1983, es un modelo que desafía la visión tradicional de la inteligencia como una capacidad única y general. Según Gardner, la inteligencia humana no es monolítica, sino que se manifiesta en diferentes formas o “inteligencias”, cada una con sus propias características y formas de desarrollo.
        br
        br
        p.mb-0 El principal objetivo de esta teoría es reconocer y valorar la diversidad de habilidades y talentos en las personas, lo que implica un enfoque educativo que no se centre únicamente en las capacidades lógico-matemáticas o lingüísticas, tradicionalmente privilegiadas en la educación formal; en su lugar, Gardner aboga por un modelo educativo inclusivo que promueva el desarrollo equilibrado de todas las inteligencias, permitiendo a cada individuo desplegar su potencial en los ámbitos donde se destaca.
    
    p Este enfoque tiene una implicación práctica significativa en el ámbito educativo, ya que sugiere la necesidad de adaptar las estrategias de enseñanza a las fortalezas individuales de los estudiantes, facilitando el aprendizaje a través de múltiples vías; además, fomenta un ambiente de aprendizaje más equitativo y motivador, en el que cada estudiante puede sobresalir según su perfil de inteligencias. Al ser un enfoque flexible y versátil, la teoría de Gardner es fácilmente aplicable en contextos educativos diversos y ha tenido un impacto considerable en la innovación pedagógica a nivel mundial.


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Las inteligencias múltiples
     
    .row.align-items-center.mb-4
      .col-lg-11.col-md-10(data-aos='fade-right')
        p El término “inteligencias múltiples” fue acuñado por el psicólogo Howard Gardner en 1983. Su teoría propone la existencia de 
          span.fw-bold ocho inteligencias distintas e independientes, 
          | que pueden interactuar y potenciarse entre sí. Cada una de estas inteligencias se desarrolla según cómo se activen y fortalezcan los hemisferios cerebrales en los seres humanos.
      .col-lg-1.col-md-2.d-none.d-md-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t2/icono1.svg', alt='')
    
    .row.align-items-center.tit-tercer2.mb-4(data-aos='fade-right')
      .col-md-auto.col-2
        img(src='@/assets/curso/temas/t1/tit-terc2.svg', alt='')
      .col-md-auto.col-10
        h3.mb-0.pe-4 Tipos de inteligencias

    .row.bgc-4.align-items-center.pt-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          ImagenInfografica.color-acento-botones.mb-4(data-aos="fade-down")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t2/infografica.svg', alt='')

            .tarjeta.bg-3.p-3(x="13.5%" y="38%" numero="+")
              h4.mb-3 Inteligencia intrapersonal
              p.mb-0 Comprende las habilidades personales y la capacidad para la introspección. Esta inteligencia permite al individuo comprenderse a sí mismo.

            .tarjeta.bg-3.p-3(x="37.5%" y="38%" numero="+")
              h4.mb-3 Inteligencia interpersonal
              p.mb-0 Incluye habilidades de liderazgo, la capacidad para cultivar relaciones, mantener amistades y resolver conflictos. Es la inteligencia que permite al individuo comprender a los demás, y generalmente se desarrolla mejor a través de la interacción social.

            .tarjeta.bg-3.p-3(x="61.7%" y="38%" numero="+")
              h4.mb-3 Inteligencia verbal - lingüística
              p.mb-0 Es la capacidad de resolver problemas mediante el uso de símbolos verbales. Esta inteligencia permite al individuo construir un modelo mental del mundo a través de letras y palabras.
            
            .tarjeta.bg-3.p-3(x="85.5%" y="38%" numero="+")
              h4.mb-3 Inteligencia musical
              p.mb-0 Es la sensibilidad hacia la música y los sonidos en general. Es característica de los músicos, quienes utilizan esta inteligencia a través de sonidos y vibraciones.
            
            .tarjeta.bg-3.p-3(x="13.5%" y="88%" numero="+")
              h4.mb-3 Inteligencia lógico-matemática
              p.mb-0 Es la capacidad para realizar actividades que requieren pensamiento conceptual y abstracto. Permite al individuo formar un modelo mental del mundo basado en la lógica y los números.
            
            .tarjeta.bg-3.p-3(x="39.5%" y="88%" numero="+")
              h4.mb-3 Inteligencia kinestésica
              p.mb-0 Es la habilidad para comunicarse efectivamente mediante el lenguaje corporal, como en el caso de los bailarines de #[em ballet]. Esta inteligencia permite al individuo utilizar su cuerpo para realizar actividades o resolver problemas.
            
            .tarjeta.bg-3.p-3(x="63%" y="88%" numero="+")
              h4.mb-3 Inteligencia espacial
              p.mb-0 Es la capacidad para manejar formas y tener una buena percepción del entorno y del espacio. El pensamiento se orienta a través de imágenes, siendo característica de artistas y arquitectos.
            
            .tarjeta.bg-3.p-3(x="86.5%" y="88%" numero="+")
              h4.mb-3 Inteligencia naturalista
              p.mb-0 Es la habilidad para interactuar con el entorno y comprender el mundo natural. Esta inteligencia se manifiesta en la capacidad de distinguir, clasificar y utilizar elementos del medio ambiente, ya sea urbano o rural, como objetos, animales, plantas y minerales.
    
    p Existen indicadores que permiten identificar la inteligencia predominante en un individuo, así como las competencias que requieren fortalecimiento, para ello es necesaria la aplicación de estrategias pedagógicas y didácticas que fomenten el desarrollo de habilidades y destrezas en áreas específicas. 
    
    p En la siguiente tabla, se presenta cómo aprenden mejor los estudiantes, en qué se destacan y qué les gusta, según los diferentes tipos de inteligencias múltiples:


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Identificación de inteligencias múltiples
    
    p.mb-4 La identificación de inteligencias múltiples es el proceso de reconocer las diferentes formas en que las personas aprenden y procesan información, basado en la teoría de Howard Gardner, que propone que la inteligencia no es única, sino que se manifiesta en distintas áreas. Este enfoque permite adaptar la enseñanza a las fortalezas y preferencias cognitivas de cada individuo, promoviendo un aprendizaje más personalizado y efectivo.

    
    .row.bgc-4.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center(data-aos="fade-down")

          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Áreas de las inteligencias múltiples
            
            .tabla-a.color-acento-contenido.mb-4
              table(alt="La tabla presentada describe las diferentes áreas de las inteligencias múltiples y sus principales características. Cada tipo de inteligencia se relaciona con habilidades específicas, como la capacidad para trabajar de manera autónoma, las destrezas sociales, la facilidad con las palabras, el disfrute de la música, la capacidad para percibir patrones y relaciones lógicas, la preferencia por el aprendizaje activo, y el interés por la naturaleza. Estas inteligencias destacan diversas formas de procesar información y de interactuar con el entorno, fomentando habilidades tanto individuales como grupales, y enfocándose en aspectos creativos, analíticos y físicos.")
                thead
                  tr.bg-color-acento-contenido
                    th.text-start #[b Inteligencia]
                    th.text-start Características
                tbody
                  tr.bg-4
                    td #[b Intrapersonal]
                    td 
                      ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                        li
                          i.fas.fa-check-circle
                          | Trabaja de manera individual.
                        li.mb-0
                          i.fas.fa-check-circle
                          | Escucha y observa detalladamente a otros.
                  tr.bg-5
                    td #[b Interpersonal]
                    td 
                      ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                        li.mb-0
                          i.fas.fa-check-circle
                          | Le gusta estar con gente y socializar.
                  tr.bg-4
                    td #[b Verbal - lingüística]
                    td 
                      ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                        li
                          i.fas.fa-check-circle
                          | Habilidad para escribir textos.
                        li.mb-0
                          i.fas.fa-check-circle
                          | Juega con palabras.
                  tr.bg-5
                    td #[b Musical]
                    td 
                      ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                        li
                          i.fas.fa-check-circle
                          | Sensibilidad a los sonidos.
                        li.mb-0
                          i.fas.fa-check-circle
                          | Disfruta la música.
                  tr.bg-4
                    td #[b Lógico-matemática]
                    td 
                      ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                        li
                          i.fas.fa-check-circle
                          | Percibe modelos y relaciones.
                        li
                          i.fas.fa-check-circle
                          | Utiliza números y secuencias.
                        li.mb-0
                          i.fas.fa-check-circle
                          | Piensa conceptual y abstractamente.
                  tr.bg-5
                    td #[b Kinestésica]
                    td 
                      ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                        li
                          i.fas.fa-check-circle
                          | Aprende haciendo.
                        li.mb-0
                          i.fas.fa-check-circle
                          | Siempre está en movimiento.
                  tr.bg-4
                    td #[b Espacial]
                    td 
                      ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                        li
                          i.fas.fa-check-circle
                          | Ve todo.
                        li
                          i.fas.fa-check-circle
                          | Conocimiento a través de imágenes.
                        li.mb-0
                          i.fas.fa-check-circle
                          | Encuentra patrones, diseños y texturas.
                  tr.bg-5
                    td #[b Naturalista]
                    td 
                      ul.lista-ul--color.fa-ul.color-adicional-1.mb-0
                        li.mb-0
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
