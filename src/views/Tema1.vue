<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Cliente


    .bg_img_01
      .row.justify-content-center.mb-4
        .col-lg-10.mb-4
          .bloque-texto-c.clr--mint.p-4
            i.fas.fa-quote-right
            p.mb-2 Es una persona o entidad que compra los bienes y servicios que ofrece una empresa. La palabra cliente también puede ser utilizada como sinónimo de comprador. El cliente puede comprar un producto y luego consumirlo o simplemente comprarlo para que lo disfrute otra persona
            h6 - Economipedia, 2020.



      .row.justify-content-center
        .col-lg-10.mb-4
          p Para las empresas el cliente es una persona física que a través de transacciones financieras o de trueque obtiene productos y/o servicios de cualquier tipo (muebles, gastronomía, tecnología, decoración, bienes inmuebles, etc.). Cliente es equivalente a consumidor o comprador y se clasifican en activos o inactivos, teniendo en cuenta si realiza compras de manera habitual o por el contrario sus compras son poco frecuentes, si son clientes satisfechos o insatisfechos. Los vendedores o especialistas en marketing deben asegurarse de tener en cuenta las expectativas de cada cliente y sus posibles necesidades.

        .col-lg-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_01.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 De acuerdo con esto, el cliente se hace trascendental para cualquier negocio porque desde el punto de vista del marketing lo que busca un consumidor es conseguir una reciprocidad de valor entre los mercados y sus empresas. Por lo tanto, lo que significa para una empresa hacer un buen uso del marketing es proporcionar a los clientes productos que pueden satisfacer sus necesidades, a cambio de una ganancia. Por tal razón, la mejor forma de obtener ganancias para una organización es a través de la satisfacción del cliente. Por tal motivo, los esfuerzos de marketing son encaminados a alcanzar que el cliente esté satisfecho, ya que de esta forma las empresas consiguen mantenerse dentro de un mercado objetivo logrando el éxito de comercialización, una empresa sin clientes difícilmente podrá subsistir.

          p.text-center.mt-5 La mejor forma para que las empresas obtengan ganancias es por medio de los clientes satisfechos.

      separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.1 Tipos de cliente

    p.mb-4 Una de las mejores formas de hacer publicidad para una marca es que la hagan los mismos clientes que ya tienen la marca, ese es sin duda el sueño de todos los dueños de las empresas, los clientes haciendo publicidad gratis, y esto se debe en gran parte a que para un desconocido tendrá mucho más valor la recomendación de un amigo a o que este observe en una publicidad que vea en la televisión o por cualquier otro medio. Por esto, existe la idea de llegar a tal punto de lealtad que los propios clientes publiciten las marcas. Para lograr este fenómeno es necesario que primero conozca los tipos de clientes que existen en marketing y partiendo de ello, poder planificar una estrategia de lealtad orientada al consumidor, teniendo en cuenta que todos los clientes no son iguales.

    .crd.crd--grad_03.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0
          p Los clientes se diferencian de acuerdo con la segmentación del mercado y a los comportamientos de compra, de esta manera se pueden diferenciar los compradores frecuentes y los compradores no frecuentes, con esta información base se podrán direccionar acciones de marketing, con el fin de conocer la percepción del cliente sobre el producto y si lo tienen o no, es decir, si se desea que usuarios nuevos compren los productos o servicios la estrategia estará encaminada a realizar promociones, con el propósito de aumentar las ventas a dichos usuarios específicos.

        .col-lg-4.col-8
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/t1/t1_02.svg", alt="alt")

    p.mb-5 En el entorno del marketing existen cinco tipos de clientes, esta segmentación permite identificar la lealtad hacia una marca, producto o servicio y las conductas de compra, es decir, compradores versus no compradores, en este aparte se hará referencia a cada tipo de cliente, algunas características principales y cuál sería la estrategia de la marca, producto o servicio para llevarlo a un próximo nivel:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center.align-items-center(titulo="Prospectos (no clientes)")
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/t1/t1_03.png', alt='')
        .col-lg-8
          p.mb-0 Personas que no han adquirido el producto o servicio ofertado, y son importantes para un entorno comercial, porque hacen parte importante de un público objetivo de una marca. En este punto ya se cuenta con una breve estrategia cliente-producto-producto-cliente, en este momento están en el proceso de decisión, es decir, de realizar una compra, se puede decir que el cliente prospecto hace parte de un público frío.

      .row.justify-content-center.align-items-center(titulo="Interesados")
        .col-lg-4.col-8.mb-4
          figure
            img(src='@/assets/curso/temas/t1/t1_04.png', alt='')
        .col-lg-8
          p Tienen visto algún producto pero no han tomado acción de compra, en este momento la estrategia a utilizar debe ser sutil y atractiva para que el posible comprador haga el proceso de compra si así lo desea, de igual forma, se podrá seguir trabajando con personas interesadas a través de diferentes contenidos, los cuales pueden ser  días puntuales de promoción o fechas especiales como navidad, #[em cyber monday] o #[em black friday], en este escenario una gran cantidad de interesados se convertirán en compradores.

      .row.justify-content-center.align-items-center(titulo="Compradores")
        .col-lg-4.col-8.mb-4
          figure
            img(src='@/assets/curso/temas/t1/t1_05.png', alt='')
        .col-lg-8
          p En este escenario el cliente ya ha realizado una compra, aquí es muy importante que este cliente no solo sea momentáneo, es decir, qué estrategia se utilizará para que sea un consumidor frecuente. Tenga en cuenta que cuando un comprador realiza una compra, este no garantiza algún tipo de compromiso, ni fidelidad a una marca, aquí se observará claramente el nuevo modelo de marketing en acción, lo que traduce que el proceso no concluye con una compra por parte de un cliente.

      .row.justify-content-center.align-items-center(titulo="Clientes")
        .col-lg-4.col-8.mb-4
          figure
            img(src='@/assets/curso/temas/t1/t1_06.png', alt='')
        .col-lg-8
          p Se pueden describir por la frecuencia de las compras realizadas, esto no quiere decir que tenga algún tipo de lealtad a la marca, puesto que un cliente podrá comprar en un mismo sitio de manera frecuente por motivos de cercanía, gusto o comodidad; en este escenario es vital la atención y servicio al cliente por parte del vendedor, buscando que este cliente se convierta en un cliente leal.

      .row.justify-content-center.align-items-center(titulo="Leales")
        .col-lg-4.col-8.mb-4
          figure
            img(src='@/assets/curso/temas/t1/t1_07.png', alt='')
        .col-lg-8
          p Son el objetivo número uno de cualquier negocio, ya que estos no solo hacen compras regulares, sino que también tienen una serie de cualidades que los hacen considerablemente valiosos. Este tipo de cliente tiene un compromiso grande con la marca. Un cliente leal es un influenciador positivo del mercado a favor de la marca.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.2 Asesoría y seguimiento al cliente

    p.mb-5 La asesoría es parte fundamental dentro de la estructura de una organización, puesto que es aquí es donde se hacen grandes esfuerzos para cautivar clientes y mantenerlos satisfechos de acuerdo con la gestión que se les dé en el momento de resolver alguna inquietud o queja, no es una tarea sencilla, por el contrario, es bastante compleja para un operador, puesto que en el día a día se podrá topar con diversos tipos de clientes. La importancia del servicio y asesoría al cliente en una empresa le permitirá aumentar las ventas, los ingresos, la satisfacción del cliente, la interacción con la marca, la credibilidad de la compañía, la fidelidad del cliente y la conservación de los clientes, de igual forma es una estrategia de relación entre cliente-empresa, se encarga de ser el punto de contacto de los todos los clientes y estará en capacidad de generar una atención oportuna.

    .row.justify-content-center.mb-5
      .col-lg-10
        .crd.crd--blue.p-4
          .row.justify-content-center
            .col-auto
              figure
                img(src="@/assets/curso/recursos/square_01.svg", alt="alt").img30
            .col
              p.mb-0 El papel de un asesor de clientes radica en informar a los clientes potenciales sobre los productos y servicios de la empresa. El principal objetivo se basa en influir de forma positiva en un grupo de personas para iniciar una acción de compra. El proceso está basado en un servicio al cliente, el cual debe ser excepcional o cuando los asesores de clientes sienten que tienen información valiosa para compartir con su audiencia.

    p.mb-5.text-center La asesoría es mucho más que una llamada, es una experiencia de servicio como se ve en la siguiente infografía:

    .row.justify-content-center.mb-5
      .col-lg-8
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t1/t1_08.svg', alt='')

          .crd.crd--yellow.crd--rad.p-3(x="6%" y="86%" numero="+")
            .h5.mb-2 Escucha
            p Es activo con escuchar al cliente en su totalidad a pesar de ser historias repetitivas porque para él o ella es importante.

          .crd.crd--yellow.crd--rad.p-3(x="12%" y="57%" numero="+")
            .h5.mb-2 Relaciona
            p Hace relación rápida de lo que le está contando el cliente.

          .crd.crd--yellow.crd--rad.p-3(x="23%" y="40%" numero="+")
            .h5.mb-2 Identifica
            p Entiende y dimensiona la situación e identifica de inmediato el paso a seguir.

          .crd.crd--yellow.crd--rad.p-3(x="34%" y="29.27%" numero="+")
            .h5.mb-2 Empatiza
            p Se pone por un momento en los zapatos del cliente para entenderlo mejor y hacerlo sentir valioso.

          .crd.crd--yellow.crd--rad.p-3(x="48.75%" y="23.71%" numero="+")
            .h5.mb-2 Indaga
            p Hace todas las preguntas que sean necesarias relacionadas con la situación trabajada, sus posibles causas e hipótesis de solución.

          .crd.crd--yellow.crd--rad.p-3(x="63%" y="29.27%" numero="+")
            .h5.mb-2 Informa
            p Da la solución de inmediato o remite el caso al siguiente nivel con el propósito de buscar solución, para este último caso se propone una fecha estimada.

          .crd.crd--yellow.crd--rad.p-3(x="85.75%" y="57.31%" numero="+")
            .h5.mb-2 Responde
            p Da una respuesta al cliente que puede ser final o momentánea.

          .crd.crd--yellow.crd--rad.p-3(x="74.87%" y="40.41%" numero="+")
            .h5.mb-2 Soluciona
            p Da la solución de inmediato o remite el caso al siguiente nivel con el propósito de buscar solución, para este último caso se propone una fecha estimada.

          .crd.crd--yellow.crd--rad.p-3(x="92%" y="86%" numero="+")
            .h5.mb-2 Sirve
            p Deja claro a lo largo de todos los procesos que el cliente es su razón de ser y por eso la empresa se encuentra a su servicio.


    .bg_img_02
      p.mb-5 El seguimiento al cliente es un proceso importante al momento de hacer un filtro de ventas, dado que es el momento en el que se puede tomar una decisión de compra mostrándose como la mejor opción. El inconveniente mayor que afrontan las empresas con el seguimiento de clientes es la falta de coherencia, porque no existe un proceso o una estrategia para llegar allí, entonces, la mayoría de las empresas se dan por vencidas y terminan esperando que los clientes regresen a ellas.

      .row.justify-content-center.mb-5
        .col-lg-10
          .cajon.cjn--purpura(data-aos="zoom-in").p-4.mb-4
            p.mb-0 A continuación se presentan dos tipos de seguimiento que ayudan de manera importante a la gestión de estos seguimientos, sin llegar a ser extenuantes, ni molestos para los clientes o los asesores:


      .titulo-quinto.color-primario(data-aos="zoom-in")
        h5 Tipos de seguimiento a clientes

      p.mb-5 El seguimiento al cliente (llamado en algunos casos remarketing) es recordarle a las personas que mostraron algún interés en la marca y se encuentran interesados en que la empresa piensa en ellos y desea establecer una relación viable para las dos partes.

      .row.justify-content-center.mb-5
        .col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
          .crd.crd--yellow.text-center.fullHeight.p-4
            figure.mb-3
              img(src="@/assets/curso/temas/t1/t1_09.svg", alt="alt", style="max-width:196px;").img195.m-auto
            h5.mb-3 Seguimiento tipo 1

        .col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
          .crd.crd--yellow.text-center.fullHeight.p-4
            figure.mb-3
              img(src="@/assets/curso/temas/t1/t1_10.svg", alt="alt", style="max-width:196px;").img195.m-auto
            h5.mb-3 Seguimiento tipo 2

      .row.mb-4(data-aos="fade-in")
        .col-auto
          figure
            img(src="@/assets/curso/recursos/square_08.svg", alt="alt").img40
        .col-lg-auto.col
          .cstm_title
            h3 Seguimiento tipo 1

      p.mb-5 Hace referencia al cómo concluir la primera venta de un cliente; pero antes de tener claro este paso se requiere hacer un seguimiento que permita demostrar que conoce muy bien las necesidades y las respuestas a todas las preguntas que los clientes tengan.

      p.mb-5 Para realizar un seguimiento adecuado es importante tener en cuenta lo siguiente:

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t1/t1_11.svg', alt='Recomendaciones para realizar un seguimiento adecuado a clientes.')

      div.bg_img_03(x="17.8%" y="68.7%" tooltip="Diseñe contenido" numero="+")
        .row.justify-content-center.align-items-center.mb-0
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_12.svg", alt="alt")

          .col-9
            h4 Diseñe contenido
            p Los clientes por lo general buscan información antes de realizar una compra, siendo esto una tendencia constante y diaria. Por esta razón, es fundamental la creación de contenidos digitales, teniendo como referencia casos de éxito, blogs o cualquier otro formato que permita tener claridad del público objetivo a abordar. Lo más probable es que cada cliente tenga que aclarar dudas antes de tomar una decisión de compra, y a través del contenido digital podrá apoyarlo de la mejor manera.


      div(x="38.8%" y="68.7%" tooltip="Revise los comentarios" numero="+")
        h5 titulo
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

      div(x="60%" y="68.7%" tooltip="Cree el <i>leed magnets</i>" numero="+")
        h5 titulo
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus


      div(x="81%" y="68.7%" tooltip="Cree el <i>leed magnets</i>" numero="+")
        h5 titulo
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

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
