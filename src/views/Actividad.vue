<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario" />
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Técnicas y metodologías educativas',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Validar el conocimiento adquirido sobre las técnicas y metodologías educativas a utilizar en el proceso.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'El modelo pedagógico tradicional promueve un rol activo del estudiante.',
          imagen: require('@/assets/curso/temas/ad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Muy bien hecho! Ha captado con claridad los principios clave de las metodologías pedagógicas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El modelo romántico se enfoca en la libre expresión y el desarrollo natural del estudiante.',
          imagen: require('@/assets/curso/temas/ad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien hecho! Ha captado con claridad los principios clave de las metodologías pedagógicas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'La teoría de las inteligencias múltiples sugiere que todos los estudiantes aprenden de la misma manera.',
          imagen: require('@/assets/curso/temas/ad/3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Muy bien hecho! Ha captado con claridad los principios clave de las metodologías pedagógicas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'La pedagogía es una disciplina que solo se enfoca en la transmisión de conocimientos.',
          imagen: require('@/assets/curso/temas/ad/4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Muy bien hecho! Ha captado con claridad los principios clave de las metodologías pedagógicas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'El modelo conductista se basa en la idea de que el aprendizaje es el resultado de la acumulación de experiencias reforzadas.',
          imagen: require('@/assets/curso/temas/ad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien hecho! Ha captado con claridad los principios clave de las metodologías pedagógicas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'El modelo constructivista considera que el conocimiento es construido por el estudiante de manera individual, sin influencia social.',
          imagen: require('@/assets/curso/temas/ad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Muy bien hecho! Ha captado con claridad los principios clave de las metodologías pedagógicas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'En el modelo socialista, la educación está orientada hacia el desarrollo individual en el marco de una sociedad socialista.',
          imagen: require('@/assets/curso/temas/ad/3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien hecho! Ha captado con claridad los principios clave de las metodologías pedagógicas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Las estrategias cognitivas como la organización y la repetición son herramientas útiles para mejorar el aprendizaje.',
          imagen: require('@/assets/curso/temas/ad/4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien hecho! Ha captado con claridad los principios clave de las metodologías pedagógicas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El aprendizaje kinestésico es característico de personas que aprenden mejor cuando se encuentran en movimiento o realizando actividades físicas.',
          imagen: require('@/assets/curso/temas/ad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien hecho! Ha captado con claridad los principios clave de las metodologías pedagógicas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'El modelo piagetiano sostiene que el crecimiento intelectual depende de la cronología de los estudiantes.',
          imagen: require('@/assets/curso/temas/ad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Muy bien hecho! Ha captado con claridad los principios clave de las metodologías pedagógicas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
