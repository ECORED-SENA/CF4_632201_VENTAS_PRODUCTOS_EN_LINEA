<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
       span.text-white 4
      h1 Niveles de cumplimiento

    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t4/t4_01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
              br
              br
              | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure.


    separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1  Medición de entregas


    p.mb-4 Una de las maneras con la que se cuenta para garantizar que los servicios y/o productos que llegan al cliente cumplen con la calidad y los requisitos establecidos, es la de realizar un control continuo de cada uno de los procesos que intervienen en la empresa y que hacen posible que el cliente obtenga el producto y/servicios deseados. Un sistema de medición hace énfasis en el conjunto de actividades destinadas a medir, evaluar, ajustar y estar al tanto de todas las actividades de una empresa. El objetivo del sistema de medición es mostrar el camino correcto para que la empresa alcance las metas establecidas. Es importante que un sistema de medición cuente con algunos parámetros para dar óptimos resultados, los cuales podrían ser:


    .crd.crd--blue.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/t4/t4_02.svg", alt="Figura decorativa")
            .col-lg-7
              ul.fa-ul.mb-0
                li
                  i.fa-li.fas.fa-circle.blt_01
                  | Cuál es el objetivo de medir los tiempos de entrega.
                li
                  i.fa-li.fas.fa-circle.blt_01
                  | Identifique cuáles son los problemas y oportunidades de la entrega.
                li
                  i.fa-li.fas.fa-circle.blt_01
                  | Delegue quién es el encargado de hacer las entregas.
                li
                  i.fa-li.fas.fa-circle.blt_01
                  | Mida el comportamiento a satisfacción del cliente.
                li
                  i.fa-li.fas.fa-circle.blt_01
                  | Determine los medios de transporte de entrega.
                li
                  i.fa-li.fas.fa-circle.blt_01
                  | Tenga claro los tiempos de entrega y los canales de comunicación de sus clientes.

    p.mb-5 La esencia de un sistema de medición es entender, orientar y comunicar todas las acciones y estrategias de una empresa, para este caso enfocados en el proceso de entrega de un producto, no requiere tener un sistema base, simplemente cree su sistema personal y adecúelo a la empresa, y pregúntese lo siguiente:

    SlyderF.mb-5(columnas="col-lg-4")(data-aos="fade-in")

      .crd.crd--yellow.bg-crd--yellow.crd--rad.fullHeight.p-4
        .content
          p.text-center ¿Cómo va a realizar las entregas de su producto, cuál será el indicador que le brinde una información precisa de los tiempos de entrega y satisfacción de un cliente?

      .crd.crd--blue.bg-crd--blue.crd--rad.fullHeight.p-4
        .content
          p.text-center ¿Cómo va a realizar las entregas de su producto, cuál será el indicador que le brinde una información precisa de los tiempos de entrega y satisfacción de un cliente?

      .crd.crd--mint.bg-crd--mint.crd--rad.fullHeight.p-4
        .content
          p.text-center Determine cada cuánto realizar un seguimiento o monitoreo de las entregas de los productos, recuerde que cada error es una opción de mejora.

      .crd.crd--yellow.bg-crd--yellow.crd--rad.fullHeight.p-4
        .content
          p.text-center ¿Quién es el responsable de hacer el proceso de entrega y seguimiento de los productos?

      .crd.crd--blue.bg-crd--blue.crd--rad.fullHeight.p-4
        .content
          p.text-center ¿Qué espera con este tipo de estrategia de medición, cuál es la meta, puede definirlo en cantidad y calidad de entregas, tiempos de entrega o satisfacción del cliente?

      .crd.crd--mint.bg-crd--mint.crd--rad.fullHeight.p-4
        .content
          p.text-center Estratégicamente qué hará con los resultados (#[strong esta es la parte más importante del proceso]).


      .crd.crd--yellow.bg-crd--yellow.crd--rad.fullHeight.p-4
        .content
          p.text-center Registre toda la información pertinente de cada cliente, el pedido, el recorrido y la entrega.

      .crd.crd--blue.bg-crd--blue.crd--rad.fullHeight.p-4
        .content
          p.text-center En primer momento diseñe pocos indicadores, la experiencia le dará más opciones para medir lo que desee medir con resultados objetivos.

      .crd.crd--mint.bg-crd--mint.crd--rad.fullHeight.p-4
        .content
          p.text-center Posterior a esto, identifique un indicador integral, el cual le arroje la información que necesita para beneficio de su empresa.

    p.mb-4 Un buen sistema de gestión, que incluya medición y control debe estar orientado al futuro, considerar las dimensiones significativas de una actividad con objetivos múltiples. Tenga en cuenta que un mayor control y seguimiento de la gestión no siempre es económicamente deseable.

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

<style lang="sass">
.tarjeta.color-acento-botones--borde
  background-color: #FDF3E1;
  color: #12263F;
  border: solid 4px #EEAC3A;

.slyder-a__tipo-b .slyder-a__btn--atrs, .slyder-a__tipo-b .slyder-a__btn--sigt
  background-color: #eeac3a;

.slyder-f__btn i
  color: #eeac3a;

.bg-crd--yellow
  background-image: url("../assets/curso/temas/t4/cajon_yellow.svg")
  background-size: cover
  background-position: left top
  background-repeat: no-repeat
  border-radius: 0px !important
  width: 326px
  height: 203px

.bg-crd--mint
  background-image: url("../assets/curso/temas/t4/cajon_green.svg")
  background-size: cover
  background-position: left top
  background-repeat: no-repeat
  border-radius: 0px !important
  width: 326px
  height: 203px

.bg-crd--blue
  background-image: url("../assets/curso/temas/t4/cajon_blue.svg") !important
  background-size: cover !important
  background-position: left top !important
  background-repeat: no-repeat !important
  border-radius: 0px !important
  width: 326px
  height: 203px
</style>
