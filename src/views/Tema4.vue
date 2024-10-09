<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 La cognición y el aprendizaje

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-3.col-md-5.col-8.mb-3.mb-lg-0(data-aos='fade-right')
        img(src='@/assets/curso/temas/t4/img1.png', alt='')
      .col-lg-9(data-aos='fade-left')
        p La cognición y el aprendizaje se abordan desde diversas perspectivas, integrando teorías de Piaget, Bruner y Vygotsky, junto con elementos de la programación neurolingüística. A través de la relación del individuo con su entorno, se configuran distintas formas de aprendizaje, como lo expuso Howard Gardner en su “Teoría de las Inteligencias Múltiples” en 1983, donde identificó ocho estilos de aprendizaje. Independientemente del enfoque, la capacidad creativa es crucial en la cognición, ya que permite alcanzar nuevos niveles de información y orden en los procesos cognitivos, lo que es fundamental para entender cómo las personas desarrollan su pensamiento y su aprendizaje.
        .cajon.color-primario.bg-2.p-4
          p.mb-0 La educación, como proceso de adquisición de conocimientos, habilidades, valores y actitudes, es influenciada por estos modelos teóricos. Bruner subraya la necesidad de que cada generación redefine sus metas educativas, enfatizando la calidad y la formación de ciudadanos preparados para la democracia. Vygotsky, por su parte, destaca el aprendizaje como un mecanismo esencial para el desarrollo, con un fuerte énfasis en el contexto y la interacción social.

    p.mb-4 Mientras que el enfoque educativo tradicional se centra en la presentación y repetición, una enseñanza activa, que promueva la aplicación práctica, resulta en aprendizajes más profundos y significativos.

    .row.bgc-3.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
          .col-12
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 3.
              span Enseñanza activa
            figure
              img(src='@/assets/curso/temas/t4/figu3.png', alt='El esquema representa el concepto de “aprendizaje” dentro de la enseñanza activa, destacando dos aspectos principales. Por un lado, se resalta el desarrollo de conocimientos, habilidades, valores y actitudes mediante la enseñanza y la experiencia. Por otro, se menciona que el aprendizaje es un mecanismo clave para el desarrollo cognitivo y social, lo que permite entender mejor los procesos involucrados en el crecimiento personal y académico.')  


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Modelos de aprendizaje

    p.mb-5 Los modelos de aprendizaje son enfoques teóricos que describen cómo las personas adquieren, procesan y retienen conocimientos y habilidades. Estos modelos guían la enseñanza y pueden variar según las teorías cognitivas, conductuales, constructivistas, entre otras, adaptándose a diferentes estilos y necesidades educativas.

    .row.align-items-center.tit-tercer2.mb-4(data-aos='fade-right')
      .col-md-auto.col-2
        img(src='@/assets/curso/temas/t1/tit-terc2.svg', alt='')
      .col-md-auto.col-10
        h3.mb-0.pe-4 Principales modelos de aprendizaje
    
    p.mb-4 Son muchos los modelos que existen sobre los estilos de aprendizaje, pero los que a continuación se relacionan han tenido mayor relevancia en las ciencias pedagógicas y didácticas del siglo XX:

    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-10
        ImagenInfografica.color-acento-botones(data-aos="fade-down")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t4/infografica1.svg', alt='')

            .tarjeta.bg-3.p-3(x="7.5%" y="57%" numero="+")
              h4.mb-3 Cognitiva
              p Esta teoría parte de los enfoques teóricos provenientes de las ciencias cognitivas, por lo que fijaba su interés en procesos cognitivos complejos como el pensamiento, el lenguaje, la formación de conceptos, la solución de problemas y el procesamiento de la información. De allí, que el énfasis de esta teoría es localizado en el estimular el procesamiento mental.
              p.mb-0 El aprendizaje en los estudiantes parte de lo que ellos saben y se busca reconocer cómo lo adquieren. A diferencia del conductismo, el estudiante es un participante activo en el aula. Por ello, los pensamientos, costumbres, creencias, actitudes y valores tienden a influir en el proceso de aprendizaje.
            .tarjeta.bg-3.p-3(x="24%" y="91%" numero="+")
              h4.mb-3 Conductista
              p.mb-0 Se enfoca en repetir el patrón de una conducta, y de tal manera, terminan siendo ejecutados de manera mecánica. El conductismo estudia el comportamiento que se puede observar y considera que todo estímulo se complementa con una respuesta.
            .tarjeta.bg-3.p-3(x="50%" y="104%" numero="+")
              h4.mb-3 Humanista
              p.mb-0 Parte del precepto de que los individuos son únicos, con patrones de percepción individuales y estilos de vida personalizados. Por ello, se centra en el desarrollo de la personalidad basándose en la individualidad de cada estudiante. Teniendo en cuenta lo anterior, esta teoría reconoce que el aprendizaje original provoca cambios en el comportamiento a partir del contacto con la realidad.              
            .tarjeta.bg-3.p-3(x="77%" y="91%" numero="+")
              h4.mb-3 Piagetiana
              p.mb-0 El teórico Jean Piaget propone una teoría del aprendizaje interaccionista, la cual parte del crecimiento intelectual del sujeto. En esta teoría, la experiencia activa de él es la fuente de desarrollo intelectual, porque toda actividad humana se filtra en el pensamiento. Para Piaget el pensamiento y la inteligencia son conceptos recíprocos, porque pensar requiere usar activamente la inteligencia y ésta implica utilizar los instrumentos por los que una persona piensa. Además, rechaza que exista una edad fija para cada estadio, porque se trata más de estructuras del pensamiento que de cronología.
            .tarjeta.bg-3.p-3(x="93%" y="57%" numero="+")
              h4.mb-3 Sociocultural
              p.mb-0 Para esta teoría, el aprendizaje es adquirido desde la socialización, ya que se considera que el hombre es una construcción social, más que biológica, porque el desarrollo de cualquier individuo está ligado con su interactuar en el contexto social, histórico y cultural.
    

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2  Estilos de aprendizaje

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-down')
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/BG.png')})`}")
        img(src='@/assets/curso/temas/t4/img2.png', alt='')
      .bloque-texto-g__texto.p-4.p-lg-5
        p La referencia de los estilos de aprendizaje y del conocimiento sobre cómo funcionan éstos en la dinámica del aula, le ayudarán a los profesores a interpretar las actuaciones y las formas de aprender y aprehender de sus estudiantes para llevar a cabo procesos de formación significativos.
        br
        br 
        p.mb-0 En este sentido, son diversas las teorías de orden constructivista y conectivista que dan relevancia al cerebro como gestor y núcleo del proceso de aprendizaje que tienen los seres humanos. Al respecto, la Secretaría de Educación Pública de México (2004), se pronunció mediante la publicación del Manual de estilos de aprendizaje, el cual contiene algunos cuestionarios útiles, que al aplicarlos a los estudiantes les permiten a los docentes conocer sus estilos de aprendizaje.

    .row.align-items-center.tit-tercer1.mb-4(data-aos='fade-right')
      .col-md-auto.col-2
        img(src='@/assets/curso/temas/t1/tit-terc1.svg', alt='')
      .col-md-auto.col-10
        h3.mb-0 Tipos de conocimiento utilizados en el aprendizaje

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-9.mb-3.mb-lg-0(data-aos='fade-right')
        p Brown, Favell y Wellman, citados en Díaz y Hernández (1999), afirman que la ejecución de las estrategias de aprendizaje ocurre asociada con otros tipos de recursos y procesos cognitivos de que dispone cualquier aprendiz. De igual manera, diversos autores concuerdan con la necesidad de distinguir entre varios tipos de conocimiento apropiados y utilizados durante el aprendizaje.
        .cajon.color-primario.bg-2.p-4
          p.mb-0 Los siguientes tipos de conocimiento interactúan en formas intrincadas y complejas cuando el estudiante utiliza las estrategias de aprendizaje. Si bien se ha puesto al descubierto, por medio de estudios realizados en estos temas, la naturaleza de algunas de las relaciones existentes entre dichos tipos de conocimiento, es evidente que aún hace falta más información para comprender todo el cuadro de relaciones posibles entre éstos.
      .col-lg-3.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t4/img3.png', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-6.col-7.mb-3.mb-lg-0(data-aos='fade-right')
        img(src='@/assets/curso/temas/t4/img4.png', alt='')
      .col-lg-8(data-aos='fade-left')
        .tarjeta.bgi-1.p-4
          SlyderA
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 Procesos cognitivos básicos
                  p Se refieren a todas aquellas operaciones y procesos involucrados en el procesamiento de la información, como atención, percepción, codificación, almacenaje y mnémicos, recuperación, entre otros.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 Base de conocimientos
                  p Se refiere al bagaje de hechos, conceptos y principios que posee el individuo, el cual está organizado en forma de un reticulado jerárquico (constituido por esquemas). Usualmente, se denomina conocimientos previos.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 Conocimiento estratégico
                  p Tiene que ver directamente con lo que en este material de formación se denominan estrategias de aprendizaje. Brown de manera acertada lo describe con el nombre de saber cómo conocer.
            .row.justify-content-center
              .col-md-11
                .tarjeta.tarjeta--blanca.p-5
                  h4 Conocimiento metacognitivo
                  p Se refiere al conocimiento que poseen los individuos sobre qué y cómo se sabe, así como al conocimiento que poseen las personas sobre los procesos y operaciones cognitivas cuando se aprende, se recuerda o se solucionan problemas.


    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3  Cognición en la educación

    p La cognición, un proceso central en el desarrollo humano, abarca funciones como la atención, percepción, memoria e inteligencia, y se analiza desde diversas disciplinas, incluyendo la psicología, la ingeniería, la lingüística y la educación. Este enfoque interdisciplinar permite entender cómo los individuos conocen, interpretan y toman decisiones en su interacción con el mundo.

    .row.bgc-3.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-12
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 4.
              span Cognición y educación
          .col-lg-10    
            figure
              img(src='@/assets/curso/temas/t4/fig4.svg', alt='El diagrama ilustra una serie de engranajes interrelacionados que representan diferentes aspectos clave en los procesos educativos. Estos incluyen el proceso educativo en sí, el desarrollo humano, la interacción con padres y adultos, la orientación hacia el contexto escolar y la resolución de la información. Todos estos elementos están interconectados, reflejando cómo diversos factores participan en la construcción del aprendizaje, tanto en el entorno escolar como en la interacción con la familia y la sociedad.')  

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-down')
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/BG.png')})`}")
        img(src='@/assets/curso/temas/t4/img5.png', alt='')
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 La psicología ha aportado valiosas perspectivas al proceso educativo, subrayando la importancia de comprender cómo los estudiantes aprenden, memorizan y elaboran conceptos. La investigación ha demostrado que la simple presentación de información no garantiza el aprendizaje; es crucial conectar con los conocimientos previos del estudiante y considerar el entorno social. El éxito en el desarrollo de competencias cognitivas depende de la capacidad del educador para integrar estos enfoques en la enseñanza, facilitando así un aprendizaje más profundo y duradero.

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-3.col-md-6.col-7.mb-3.mb-lg-0(data-aos='fade-right')
        img(src='@/assets/curso/temas/t4/img6.png', alt='')
      .col-lg-9(data-aos='fade-left')
        p Es crucial considerar que una reforma educativa requiere que los docentes evalúen de manera específica los logros cognitivos de sus estudiantes. Sin embargo, también es fundamental que los docentes reflexionen sobre sus propias concepciones de cognición, desarrollo cognitivo y la evaluación de estas dimensiones en su práctica profesional. Este autoanálisis les permitirá identificar las mejores prácticas pedagógicas para fomentar el desarrollo del pensamiento en sus alumnos.
        .cajon.color-primario.bg-2.p-4
          p.mb-0 Capacidades cognitivas como la atención, la memoria, el lenguaje, las funciones ejecutivas, la percepción y la lectoescritura, entre otras, pueden ser estimuladas y potenciadas mediante ejercicios y técnicas específicas. Al hacerlo, no solo se mejora la calidad educativa, sino también la calidad de vida en general.


    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.4  Estrategias cognitivas

    p Las estrategias cognitivas en el ámbito pedagógico son técnicas o procedimientos que los estudiantes utilizan para procesar, organizar, comprender y retener la información de manera más efectiva. Estas estrategias permiten a los alumnos desarrollar su capacidad de aprender de forma autónoma, facilitando la adquisición de conocimientos, la resolución de problemas y la toma de decisiones.

    .row.bgc-5.align-items-center.pt-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        
        .row.justify-content-center.align-items-end.mb-4
          .col-lg-5.col-md-6.col-7.mb-3.mb-lg-0(data-aos='fade-right')
            img(src='@/assets/curso/temas/t4/img7.png', alt='')
          .col-lg-5(data-aos='fade-left')
            .cajon.color-acento-contenido.p-4.mb-4
              p.mb-0 En pedagogía, estas estrategias son esenciales porque no solo ayudan a los estudiantes a comprender y memorizar el contenido, sino que también promueven un aprendizaje más profundo y significativo. Algunas de las estrategias cognitivas más comunes incluyen:
            ol.lista-ol--cuadro.lista-ol--separador.fa-ul
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Repetición y práctica: revisión constante de la información para consolidar el aprendizaje.
              li
                .lista-ol--cuadro__vineta
                  span 2
                | Organización: clasificación y estructuración de la información mediante esquemas, diagramas o resúmenes.
              li
                .lista-ol--cuadro__vineta
                  span 3
                | Elaboración: relación de la nueva información con conocimientos previos, lo que permite darle un sentido más amplio y significativo.
              li
                .lista-ol--cuadro__vineta
                  span 4
                | Imaginación visual: creación de imágenes mentales para facilitar la retención y comprensión.
              li
                .lista-ol--cuadro__vineta
                  span 5
                | Metacognición: reflexión sobre el propio proceso de aprendizaje, identificando qué métodos son más eficaces y ajustando estrategias cuando es necesario.

        p Estas estrategias son enseñadas por educadores para fomentar la independencia en el aprendizaje y para ayudar a los estudiantes a enfrentar desafíos académicos de manera más efectiva.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 5.
      span Estrategias cognitivas
    figure
      img(src='@/assets/curso/temas/t4/fig5.svg', alt='El diagrama presentado detalla las estrategias cognitivas, desglosadas en diversas categorías. Estas incluyen instrumentos socioculturales, técnicas, operaciones y actividades, procedimientos, y un propósito determinado. Además, se consideran aspectos flexibles y se dividen en públicas o privadas. Cada uno de estos elementos contribuye al marco general de las estrategias cognitivas, que abarcan un amplio rango de aplicaciones según el contexto y los objetivos establecidos.')  


    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.5  Programación neurolingüística en la educación

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade-down')
      .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t1/BG.png')})`}")
        img(src='@/assets/curso/temas/t4/img8.png', alt='')
      .bloque-texto-g__texto.p-4.p-lg-5
        p.mb-0 La Programación Neurolingüística (PNL) se ha convertido en una herramienta valiosa en el ámbito educativo, ya que permite a los docentes mejorar su desempeño en el aula mediante el desarrollo de habilidades y técnicas que optimizan la comunicación interpersonal, pues al ampliar la perspectiva del docente, la PNL facilita no solo su crecimiento personal, sino también la creación de un entorno de aprendizaje más efectivo y motivador. Esta metodología se centra en comprender cómo las personas perciben el mundo a través de sus propios “mapas de realidad”, es decir, las representaciones internas que construyen a partir de sus experiencias, imágenes mentales, sonidos, sensaciones y recuerdos; al conocer mejor estas percepciones, los educadores pueden adaptar sus enfoques para fomentar un aprendizaje más profundo y significativo.

    p Según Pérez (2012), la PNL, basada en los avances científicos sobre el funcionamiento del cerebro, permite descubrir las representaciones cognitivas y emocionales de los individuos, ya que, en el aula, esto se traduce en una mayor apertura hacia la expresión de emociones y acciones relacionadas con ellas, lo que enriquece el proceso educativo. Al incorporar la PNL en el contexto pedagógico, los docentes pueden ayudar a los estudiantes a gestionar mejor sus emociones y a potenciar su capacidad de aprendizaje, creando un espacio donde el desarrollo emocional y cognitivo se entrelacen de manera armónica.


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
