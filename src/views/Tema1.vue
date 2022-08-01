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
        .row.justify-content-center.align-items-center.mb-0
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_13.svg", alt="alt")

          .col-9
            h4 Revise los comentarios
            p A cada instante miles de personas preguntan y comentan en redes sociales sobre sus necesidades y experiencias. Algunos solicitan recomendaciones de empresas y otros critican a sus proveedores actuales, ahí está la oportunidad de saber qué requiere su público objetivo.


      div(x="60%" y="68.7%" tooltip="Cree el <i>leed magnets</i>" numero="+")
        .row.justify-content-center.align-items-center.mb-0
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_14.svg", alt="alt")

          .col-9
            h4 Cree el #[em lead magnets]
            p Cree la base de datos de potenciales clientes por intermedio de (lead magnets), los cuales hacen referencia a las ofertas que se hacen a los clientes a cambio de las direcciones de correo electrónico o números de teléfono celular, en este sentido se pueden crear plantillas de Excel que contengan todos los datos necesarios de los clientes, por lo general son regalos para conseguir datos a cambio.


      div(x="81%" y="68.7%" tooltip="Realice campaña por mensaje" numero="+")
        .row.justify-content-center.align-items-center.mb-0
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_15.svg", alt="alt")

          .col-9
            h4 Realice campaña por mensaje
            p Con los datos de los clientes se pueden enviar mensajes al correo o al teléfono de la persona con promociones o información de valor de la empresa para meterlos en el proceso de ventas mediante el envío de 1 o 2 correos electrónicos masivos al mes, se podrá hacer un seguimiento continuo de clientes, el objetivo principal es ser la primera opción (top of mind) para los clientes.

    .row.mb-4(data-aos="fade-in")
      .col-auto
        figure
          img(src="@/assets/curso/recursos/square_08.svg", alt="alt").img40
      .col-lg-auto.col
        .cstm_title
          h3 Seguimiento tipo 2

    p.mb-5 Este tipo de seguimiento hace referencia a #[strong vender más al mismo cliente] al momento de que este realicé la primera compra, se da inicio a seguir cada paso dentro la plataforma de compras, con el fin de fomentar ventas con ingresos periódicos.

    p.mb-5 Para realizar un seguimiento adecuado es importante tener en cuenta lo siguiente:

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t1/t1_16.svg', alt='Recomendaciones para realizar un seguimiento adecuado a clientes.')


      div.bg_img_03(x="29.4%" y="68.7%" tooltip="Descuentos exclusivos" numero="+")
        .row.justify-content-center.align-items-center.mb-0
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_17.svg", alt="alt")

          .col-9
            h4 Descuentos exclusivos
            p Se trata de hacer un seguimiento comercial a los clientes exclusivos y de aquellos clientes que han dejado de comprar por algún motivo, para los clientes VIP podrá enviarles descuentos y promociones premiando su fidelidad en la marca o servicio, y para aquellos que no han realizado compras de forma frecuente se podrán contactar y se les puede ofrecer un pequeño descuento, con el fin de fomentar nuevamente la compra de algún producto o servicio.


      div(x="50.5%" y="68.7%" tooltip="Revise los comentarios" numero="+")
        .row.justify-content-center.align-items-center.mb-0
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_18.svg", alt="alt")

          .col-9
            h4 #[em Cross selling]
            p.mb-5 Más conocido como venta cruzada, hace referencia al escenario de intentar la venta de un producto que pueda ser complemento de una compra por parte un cliente.
            p.mb-5 Señor usuario #[strong ¿desea adicionar a su pedido gaseosa y papas?], de igual forma se puede hablar de upselling, que hace referencia de intentar la venta de un producto que pueda ser complemento; pero que este aumenta el valor del producto, es decir,  #[strong ¿le gustaría agrandar sus papas por solo $1.000)?]
            p.mb-5 Su vehículo nuevo requiere un gran seguro, se tienen estas opciones…


      div(x="71.6%" y="68.7%" tooltip="Cree el <i>leed magnets</i>" numero="+")
        .row.justify-content-center.align-items-center.mb-0
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_19.svg", alt="alt")

          .col-9
            h4 Fechas relevantes
            p Si se conocen ciertas fechas importantes del cliente es fácil contactarlo cuando se cumpla un aniversario o un tiempo específico que pueda contactarlo. Tenga en cuenta fechas especiales para los clientes (cumpleaños, día de la madre, día del padre, entre otros), es muy importante referenciar cuándo fue la fecha de la última compra del cliente, de esta forma podrá contactarlo fácilmente por intermedio de un correo electrónico SMS.


    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.3 Criterios de percepción del cliente

    p.mb-5 Las percepciones de los clientes son juicios subjetivos que se forman después de experimentar un servicio o producto, por eso algunas personas también la definen como experiencia o servicio percibido, debido a que incluye todas las experiencias directas o indirectas que ha tenido un cliente. Se puede decir que la percepción del cliente es el efecto de la comparación entre la expectativa y la realidad.

    .row.justify-content-center.mb-5
      .col-lg-10
        .crd.crd--purple(data-aos="zoom-in").p-4
          .row.justify-content-center.align-items-center
            .col-lg-4.col-8
              figure
                img(src="@/assets/curso/temas/t1/t1_20.png", alt="alt")

            .col-lg-8.mb-5.mb-lg-0
              p Tenga en cuenta que todo proceso de la percepción de un cliente inicia el momento en el que un consumidor observa y obtiene información de un producto o servicio determinado, el proceso no se detiene puesto que el consumidor empieza a fundar una opinión acerca del servicio o producto.

              .crd.crd--whiteA
                p.text-center.mb-0 #[strong ¿Cómo se pueden generar percepciones para los clientes de forma positiva?]

    p.mb-4 A continuación se pueden ver 4 realidades:

    .row.justify-content-center(data-aos="fade-in").mb-5
      .col-lg-10
        .hr--line
        .row.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_21.svg", alt="alt")
          .col
             h5 Cree relaciones rápidas y de confianza
             p.mb-0  Elimine todo proceso o comunicación que pueda truncar una relación verdadera con un cliente, en la medida de lo posible siempre facilite que las compras no presenten inconvenientes y que los canales de comunicación sean los adecuados.
        .hr--line
        .row.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_22.svg", alt="alt")
          .col
            h5 Servicio al cliente
            p.mb-0 Esté presto a dar respuesta oportuna a cualquier solicitud por parte de un cliente, tenga en cuenta el trato adecuado para él, de igual forma, establezca límites acerca de lo que se puede esperar del producto o servicio.
        .hr--line
        .row.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_23.svg", alt="alt")
          .col
            h5 No haga promesas falsas
            p.mb-0  Asegúrese de que el producto o servicio que ofrece cumple con las condiciones, características adecuadas y propias del mismo, esto con el fin de no perder credibilidad ante sus clientes actuales y prospectos.
        .hr--line
        .row.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/t1/t1_24.svg", alt="alt")
          .col
            h5 Recopilar información de las percepciones del cliente
            p Esto hace énfasis en lo que esté circulando en las redes sociales de acuerdo con su producto o servicio, preste atención porque esto es un feedback y opción de mejora, de igual forma, podrá generar encuestas para obtener la información de primera mano para determinar el estado actual de su servicio, marca o producto.
            p.mb-0 La percepción del consumidor hace referencia a las sensaciones internas causadas por impresiones materiales que se producen en los sentidos corporales. Por tanto, la expresión percepción del consumidor hace referencia a la imagen inconsciente que los clientes crean sobre una marca, servicio o producto a partir de sensaciones y estímulos asociados a una organización.
        .hr--line


    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_25.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La percepción del consumidor se centra en las interacciones, las cuales pueden ser directas o indirectas con la empresa. Cabe resaltar que la gran mayoría de las acciones de una compañía pueden afectar la percepción de un cliente, haciendo referencia a la forma en que se ubican los diferentes productos en una tienda física, de igual forma, los colores, olores, logotipo y muy importante, los descuentos, la atención al cliente, etc… En algunos casos en el sector de comidas (restaurantes) utilizan colores con que visualmente pueden estimular a las personas (amarillo, naranja, rojo), estos colores pueden generar impacto en sus clientes y en la empresa, generando una percepción agradable como estrategia de la experiencia con el cliente.

    p.mb-5.text-center Algunas empresas desarrollan ciertas estrategias de percepción de los clientes a través de:

    .bg_grad_03
      .row.justify-content-center.mb-5.pt-4
        .col-lg-11
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/t1/t1_26.svg", alt="alt")
            .col-lg-8
              .row.align-items-center.mb-2
                .col-auto.pe-0
                  figure
                    img(src="@/assets/curso/recursos/vineta_01.svg", alt="alt", style="width: 13px;")
                .col-lg-8
                  p.mb-0 La constante reproducción de anuncios publicitarios.

              .row.align-items-center.mb-2
                .col-auto.pe-0
                  figure
                    img(src="@/assets/curso/recursos/vineta_01.svg", alt="alt", style="width: 13px;")
                .col-lg-10
                  p.m-0 La interacción con los clientes y el servicio personalizado.

              .row.align-items-center.mb-2
                .col-auto.pe-0
                  figure
                    img(src="@/assets/curso/recursos/vineta_01.svg", alt="alt", style="width: 13px;")
                .col-lg-10
                  p.mb-0 La visualización del logotipo y eslogan de la empresa, producto o servicio.


              .row.align-items-center.mb-2
                .col-auto.pe-0
                  figure
                    img(src="@/assets/curso/recursos/vineta_01.svg", alt="alt", style="width: 13px;")
                .col-lg-10
                  p.m-0 Estar al tanto de las reseñas de los clientes en las redes sociales.


              .row.align-items-center.mb-2
                .col-auto.pe-0
                  figure
                    img(src="@/assets/curso/recursos/vineta_01.svg", alt="alt", style="width: 13px;")
                .col-lg-10
                  p.mb-0 La recepción de notificaciones vía SMS.


              .row.align-items-center
                .col-auto.pe-0
                  figure
                    img(src="@/assets/curso/recursos/vineta_01.svg", alt="alt", style="width: 13px;")
                .col-lg-10
                  p.m-0 Seguimiento de los clientes en la #[em postventa].

          .row.justify-content-center.align-items-center
            .col-lg-10
              .crd.crd--whiteA
                p.text-center.mb-0 De igual forma, la percepción de los clientes se podrá evidenciar teniendo en cuenta:


      .row.justify-content-center.mb-5
        .col-lg-11

          .row.justify-content-center.align-items-center
            .col-lg-8
              ul.fa-ul.mb-0
                li
                  i.fa-li.fas.fa-circle.blt_01
                  | La experiencia personal de un cliente al momento de realizar una compra y usar el producto, bien o servicio.

                .hr--line

                li
                  i.fa-li.fas.fa-circle.blt_01
                  | A los influenciadores, porque casi un 60% de los usuarios de las redes sociales han comprado algún producto que es referenciado por un “influencer”, teniendo en cuenta que este da confianza y credibilidad de un producto, recomendándolo a los clientes, los cuales no dudan en hacer una compra por estos medios.

                .hr--line

                li
                  i.fa-li.fas.fa-circle.blt_01
                  | Los comentarios positivos de los clientes, que en un 95% se toman el tiempo de leer las reseñas de otros consumidores antes de hacer una compra, demostrando que las opiniones de terceros son factores importantes para precisar la percepción del consumidor.

            .col-lg-4
              figure
                img(src="@/assets/curso/temas/t1/t1_27.svg", alt="alt")


    p.mb-5 Medir la percepción del cliente es muy importante en el sector empresarial debido a que esa es la realidad de lo que el mercado sabe de su marca, bien o servicio. Hoy en día existen diversas técnicas que le ayudarán a monitorear las actividades comerciales de sus clientes, además, medir las percepciones de los consumidores sobre su producto suministra un valioso recurso de información, especialmente datos sobre cómo los consumidores interactúan con su marca y qué reacciones tienen sobre ella.
    .mb-5.py-3.bg_grad_03
      .d-flex.flex-wrap.col-xl-10.mx-auto.mb-4(style="background-color: #DEF2F4")
        .col-lg-4.d-flex.align-items-center
          figure
            img.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/t1/t1_28.svg", style="max-width: 295px", alt="alt")
        .col-lg-8.p-3
          p Tenga en cuenta las siguientes recomendaciones para realizar la medición de percepción de usuarios de acuerdo con los productos que oferte:
          .row.align-items-center.mb-2
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/recursos/vineta_01.svg", alt="alt", style="width: 13px;")
            .col-lg-10
              p.mb-0 Analice el tráfico de su sitio web.
          .row.align-items-center.mb-2
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/recursos/vineta_01.svg", alt="alt", style="width: 13px;")
            .col-lg-10
              p.mb-0 Cuántos clientes descargan sus contenidos y con qué frecuencia.
          .row.align-items-center.mb-2
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/recursos/vineta_01.svg", alt="alt", style="width: 13px;")
            .col-lg-10
              p.mb-0 Cuántas visitas recibe el sitio web y con qué frecuencia.
          .row.align-items-center.mb-2
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/recursos/vineta_01.svg", alt="alt", style="width: 13px;")
            .col-lg-10
              p.mb-0 Cuántos de los usuarios tiene registrados en la base de datos para que puedan recibir correos electrónicos, cuál es la página más frecuentada en su sitio web.
          .row.align-items-center.mb-2
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/recursos/vineta_01.svg", alt="alt", style="width: 13px;")
            .col-lg-10
              p.mb-0 Tenga presente cada comentario en línea que realicen los clientes.
      p.w-100.mb-5 De esta forma podrá tener un mejor panorama sobre cómo se comportan los diferentes usuarios de un sitio web, identificando los posibles cambios de percepción del producto y del mercado, para ello puede configurar las alertas de Google, estas le avisarán en tiempo real si le hacen reseñas de su producto o servicio, y así sabrá si la reseña que realizan los consumidores es positiva o negativa, para que de esta manera pueda tomar acción y determinar nuevas estrategias de percepción del cliente frente a sus productos.

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.4  Resolución de conflictos

    .row.justify-content-center.mb-4
      .mb-4
        .bloque-texto-c.clr--mint.p-4
          i.fas.fa-quote-right
          p.mb-2 Los conflictos son situaciones cotidianas del ser humano, muchas veces se generan por diferencias de pensamiento o ideas, o por la necesidad de poder o de obtener mayores beneficios que otros. En general las decisiones de las personas son quienes generan los conflictos; pero como casi todo en la vida tiene una solución, un conflicto también puede ser solucionado si las partes involucradas así lo permiten y se ponen en el lugar del otro o por medio del diálogo logran llegar a acuerdos que beneficien a todas las partes.
          h6 - Resolución de conflictos, 2022.

    .bg-t1-edit
      p.mb-5 Conozca las causas más frecuentes que pueden generar un conflicto durante la atención de un cliente; pero recuerde que no son las únicas, pueden ser muchas más:

    .bg-t1-edit--2.mb-5
      img.img-bg(src="@/assets/curso/temas/t1/t1_29.svg")
      .mb-5.col-xl-10.mx-auto.position-relative(style="background-color: #FFFFFF; background: linear-gradient(-90deg, #FDF3E1, #FDF3E1, #FDF3E1, #FDF3E1, #FDF3E1, #FFFFFF)")
        SlyderB.p-3.mb-5(:datos="datosSlyder")
      p.position-relative.mb-5 Tenga presente cada una de las situaciones descritas y dé prioridad de respuesta a cualquier solicitud independientemente del requerimiento, esto le evitará cualquier tipo de dificultad con sus clientes y sus prospectos de clientes. Dentro del escenario empresarial se encontrará con diversidad de tipos de clientes, en este aparte se mencionarán aquellos que tienen una conducta compleja, haciendo que los procesos de interacción con ellos no sean de fácil tratamiento.

      SlyderA.p-3.p-xl-4(tipo="b" style="border-radius: 30px; background-size: cover" :style="{'background-image': `url(${require('@/assets/curso/temas/t1/bg-t1.jpg')})`}")
        .d-flex.flex-wrap.col-lg-10.col-xl-9.mx-auto
          .col-md-5.col-xl-4
            figure
              img(src="@/assets/curso/temas/t1/t1_30.svg")
          .col-md-7.col-xl-8.mb-4.mb-md-0.ps-xl-4.d-flex.flex-wrap.align-content-center
            h4.p-1(style="background-color: #DEF2F4") Cliente desinteresado
            p Son bastante exigentes con cualquier tipo de requerimiento, se quejan fácilmente cuando un producto o servicio es defectuoso o cuando el vendedor pasa por encima de los acuerdos pactados se tornan agresivos en cómo se expresan. No cuentan con una escucha generosa y por el contrario no dejan hablar a la otra persona, y la mayoría de las veces descubren que el error fue cometido por el vendedor. Buscan una solución rápida a sus necesidades. Por lo general este cliente termina la negociación, rompe la relación existente y agrega una mala reputación al vendedor y al proveedor sin encontrar una salida a la negociación.

        .d-flex.flex-wrap.col-lg-10.col-xl-9.mx-auto
          .col-md-5.col-xl-4
            figure
              img(src="@/assets/curso/temas/t1/t1_31.svg")
          .col-md-7.col-xl-8.mb-4.mb-md-0.ps-xl-4.d-flex.flex-wrap.align-content-center
            h4.p-1(style="background-color: #DEF2F4") Clientes silenciosos
            p Estos clientes dan la precepción de ser de manejo fácil, pero a menudo son más difíciles que los clientes agresivos, porque solo tratan con aquellos que puedan sentir algún tipo de confianza. Son bastante introvertidos, esto puede deberse a una falta de personalidad o desconfianza natural hacia las personas nuevas que conoce.

        .d-flex.flex-wrap.col-lg-10.col-xl-9.mx-auto
          .col-md-5.col-xl-4
            figure
              img(src="@/assets/curso/temas/t1/t1_32.svg")
          .col-md-7.col-xl-8.mb-4.mb-md-0.ps-xl-4.d-flex.flex-wrap.align-content-center
            h4.p-1(style="background-color: #DEF2F4") Clientes silenciosos
            p Estos clientes dan la precepción de ser de manejo fácil, pero a menudo son más difíciles que los clientes agresivos, porque solo tratan con aquellos que puedan sentir algún tipo de confianza. Son bastante introvertidos, esto puede deberse a una falta de personalidad o desconfianza natural hacia las personas nuevas que conoce.

        .d-flex.flex-wrap.col-lg-10.col-xl-9.mx-auto
          .col-md-5.col-xl-4
            figure
              img(src="@/assets/curso/temas/t1/t1_33.svg")
          .col-md-7.col-xl-8.mb-4.mb-md-0.ps-xl-4.d-flex.flex-wrap.align-content-center
            h4.p-1(style="background-color: #DEF2F4") Cliente quejoso
            p No encuentra ninguna cualidad piensa que todo está mal, se queja de los precios y sus costos, critican el servicio dejando claro que es muy malo, generalmente no le gusta nada de lo que en ese momento se puede estar ofreciendo. Los vendedores en el afán de no crear polémicas y darles la razón suelen aceptar cualquier petición o queja sin distinguir entre clientes legítimos y exagerados.

        .d-flex.flex-wrap.col-lg-10.col-xl-9.mx-auto
          .col-md-5.col-xl-4
            figure
              img(src="@/assets/curso/temas/t1/t1_34.svg")
          .col-md-7.col-xl-8.mb-4.mb-md-0.ps-xl-4.d-flex.flex-wrap.align-content-center
            h4.p-1(style="background-color: #DEF2F4") Cliente prepotente
            p Por lo general cuentan con un alto nivel de superioridad, tienen la verdad absoluta, no les importa generar un problema con el fin de agredir y humillar a los vendedores (verbalmente), ellos creen que son los conocedores del negocio, creen tener el manejo de la negociación y que el vendedor es simplemente un intermediario.
    p.mb-5 Conociendo esta información se recomienda tener una buena disposición al momento de ofrecer sus productos o servicios, sea resiliente, tenga escucha activa, generosa y sobretodo no pierda la calma fácilmente.
    separador

    .bg-t1-edit--2
      img.img-bg(src="@/assets/curso/temas/t1/bg-t1-2.svg")
      #t_1_5.titulo-segundo.position-relative.color-acento-contenido(data-aos="fade-in")
        h2 1.5  Técnicas de resolución de conflictos

      p.mb-4.position-relative Prepararse de la mejor forma posible al momento de reunirse con los clientes difíciles (en especial de los que manejan un temperamento alto y no cuentan con la paciencia necesaria al momento de los reclamos), con ellos es difícil entablar un tema de concertación o negociación, para lo cual es muy importante contar con personas especializadas (vendedores) que tengan un alto nivel de conocimiento de las diversas variables que influyen en una negociación sea en persona o en línea. Esta característica le dará la posibilidad de contar con una persona responsable, confiada y con destrezas de negociación, que no se intimide por el carácter de un cliente y que puede darle respuesta oportuna a cualquier requerimiento enrutando de la mejor forma la negociación.
      .col-xl-10.mx-auto.mb-5
        p.mb-0.position-relative.p-3(style="background-color: #DEF2F4") A continuación se plasmarán 7 técnicas de negociación y resolución de conflictos con clientes que no son de fácil manejo:
        LineaTiempoB.position-relative.p-4(:datos="datosLineaTiempoB" style="background-color: white;")
      p.mb-5 De acuerdo con estas estrategias de intervención con los clientes tenga presente que el manejo y resolución de conflictos es una destreza que debe conocer toda persona que esté encargada del área de atención al cliente, apóyese en softwares especializados en atención al cliente y registro de datos, porque hay muchas herramientas con las cuales podrá gestionar las relaciones con el usuario y los productos.
      Separador

    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.6  Solicitudes de los clientes

    .d-flex.flex-wrap.mb-5
      .col-md-9.pe-md-3.order-2.order-md-1
        p Todo cliente desea ser atendido rápidamente y con calidad, por tal motivo, la capacidad de dar respuesta oportuna del servicio al cliente es un requisito importante. Las pequeñas empresas dan respuesta de forma inmediata brindando soluciones efectivas a las consultas de los clientes y de los prospectos, lo que permite que ganen confianza y lealtad en el mercado objetivo. Esto es definitivamente una ventaja competitiva.
        p Para esto es importante conocer y aplicar prácticas, con el fin de mejorar la capacidad de respuesta a las diversas solicitudes de los clientes.
      .col.order-1.order-md-2.mb-4.mb-md-0
        figure
          img.mx-auto(src="@/assets/curso/temas/t1/t1_35.svg")
    .d-flex.flex-wrap.mb-5(style="background-color: #ECE5F7")
      .col-xl-4.mb-4.mb-xl-0
        figure
          img.mx-auto(src="@/assets/curso/temas/t1/t1_36.png")
      .col-xl-8.p-3.px-xl-4
        p.mb-0 #[span(style="color: #43A99B") ●] Adopte una capacidad de respuesta rápida y objetiva en el servicio al cliente, esto se liga directamente al tiempo (inmediatez) y a la solución efectiva que la empresa le ofrezca a los clientes, desde el momento en que hace un requerimiento hasta finalizar la atención; cabe resaltar que la respuesta siempre debe ser satisfactoria, no lo olvide (tiempo - solución).
        p.mb-0 #[span(style="color: #43A99B") ●] Tenga en cuenta que si un cliente se comunica con su negocio, plantea una situación o queja y no cuenta con una respuesta de forma rápida y objetiva podrá perder el cliente, dejando una reseña negativa del producto o servicio, lo cual no le servirá mucho dentro de su estrategia de comercialización.
        p #[span(style="color: #43A99B") ●] Su enfoque y capacidad de respuesta a una solicitud de un cliente debe contar con tres pilares importantes, los cuales son:

        .p-3.p-xl-4.d-flex.flex-wrap(style="background-color: #FFFFFF")
          .col
            figure
              img.mx-auto(src="@/assets/curso/temas/t1/d-1.svg" style="max-width: 35px")
          .col-md-11.ps-md-4
            p - Dé una respuesta rápida y oportuna a la solicitud.
              br
              |- Sea preciso con el cliente. es decir, facilítele exactamente lo que este desea.
              br
              |- Sea empático, sea cordial, hágalo sentir parte de su empresa y compréndalo.
    p.mb-5 De igual forma, es importante potencializar los canales de atención al cliente y la capacidad que estos tienen para dar respuesta de forma oportuna y efectiva (las redes sociales, chats, correos electrónicos y el teléfono), por ello la importancia de dicha capacidad de respuesta, los clientes representan el todo en una empresa, si ellos se encuentran satisfechos, tranquilos y contentos, este lazo comercial no se romperá, no descuide este escenario, porque con la mínima falta de atención, respuesta oportuna o inconformismo hará que los clientes dejen de contar con sus servicios y productos.

    .col-xl-10.mx-auto.mb-5.p-3.p-xl-4(style="background-color: #DEF2F4")
      p.text-center Recuerde que todo cliente independientemente del tipo de compra requiere ser atendido de forma oportuna; en algún momento de su experiencia como empresario o microempresario pregúntese:
      .p-3.p-xl-4.d-flex.flex-wrap(style="background-color: #FFFFFF")
        .col
          figure
            img.mx-auto(src="@/assets/curso/temas/t1/d-2.svg" style="max-width: 99px")
        .col-md-11.ps-md-4
          p #[span(style="color: #8C5BE1") ●] ¿De qué forma está dando respuesta a las solicitudes de los clientes?
            br
            |#[span(style="color: #8C5BE1") ●] ¿Está al tanto de que los clientes realizan esfuerzos innecesarios al momento de solicitar una respuesta?
            br
            |#[span(style="color: #8C5BE1") ●] ¿Qué tanto tiempo tarda en dar respuesta oportuna y efectiva a los clientes?

    p.mb-5 Este tipo de preguntas le permitirán generar una autoevaluación sobre cómo está en la relación con los clientes y le permitirá crear estrategias clave para gestionar la capacidad de respuesta a los mismos, dicho esto considere que la rapidez y precisión en una solicitud le generará una atención de calidad de la empresa.
    Separador

    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 1.7  Trámites y respuestas a clientes

    p.mb-5 El trámite de respuestas o peticiones de los clientes se enfoca en el desarrollo de procesos al interior de la empresa, en la que se pregunta si es necesario que el cliente tenga la razón, es por eso que para presentar este contenido se responderá la pregunta:
    .d-flex.justify-content-center.mb-5
      h4.py-2.px-4.px-md-5(style="background-color: #DEF2F4") ¿el cliente siempre tiene la razón?

    p.mb-5 La atención al cliente es el compromiso de toda empresa que realiza actividades con un determinado número de personas, la respuesta a un requerimiento de un cliente es una comunicación que debe argumentarse y redactarse de forma cuidadosa para brindarle al cliente la respuesta requerida, asumiendo la responsabilidad por el incumplimiento de la empresa y explicando la razón del evento o situación que llevó a que un cliente emitiera un reclamo, de esta forma la empresa podrá hacerle saber al cliente que su petición está siendo atendida y de igual forma, notificarle qué acciones se están tomando con el fin de dar pronta respuesta a su respectiva reclamación.

    .col-lg-10.mx-auto
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_37.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Un reclamo no del todo puede ser malo, debido a que de esta forma se podrá identificar en qué se está fallando al momento de prestar un servicio, tenga presente que las reclamaciones van a llegar en cualquier momento, este escenario se presta para que se pueda construir una mejor relación con el cliente, porque se podrá generar una comunicación efectiva. Dicho escenario de comunicación se da al momento de que un cliente radica una solicitud y termina al momento en el que la empresa emite una respuesta concreta y precisa dicho requerimiento, por eso la importancia de dar respuesta a las quejas de los clientes.

      p.mt-5 En este aparte se hablará de los puntos importantes al momento de realizar una respuesta de alguna reclamación por parte de un cliente. Se recomienda contar con un equipo de personas capacitadas para dar respuesta a cualquier tipo de queja o situación desde el área de atención al cliente.

    .mb-5.py-3.bg_grad_04
      p.mb-5 Antes de responder, pase la queja al departamento que tenga la responsabilidad de solucionar el problema, de esa manera, cuando se dé la respuesta, ya tendrá información necesaria que presentar con respecto a la solución, en caso de que este proceso se tarde se puede dar una respuesta rápida para anunciar que se va a investigar la situación; pero no olvide dar una respuesta concreta una vez la tenga, haciendo referencia a si dicha respuesta depende de un departamento especializado o no. A continuación se hace referencia del paso a paso para facilitar el entendimiento:
      .d-flex.flex-wrap.mb-5
        SlyderA.slidera-edit.position-relative.col-xl-8.order-2.order-xl-1.mb-auto.p-3(tipo="b" style="border-radius: 30px; background-color: white")
          .py-3.py-4.position-relative
            p.ps-xl-4.col-xl-7.mx-auto.mb-0.position-relative(style="z-index: 1") Dar respuesta de forma rápida al reclamo recibido, tenga en cuenta qué canales utilizará para emitir la respuesta, tenga en cuenta que por lo general que quien presenta la queja no está en disposición de esperar, no será paciente; sin embargo, demuestre que está priorizando la inconformidad, recuerde que esta es una gran oportunidad de fidelización.
            img(src="@/assets/curso/temas/t1/slide-1.svg" style="position: absolute; top: -1rem; left: 0; z-index: 0;")

          .py-3.py-4.position-relative
            p.ps-xl-4.col-xl-7.mx-auto.mb-0.position-relative(style="z-index: 1") Para el cliente es importante sentir que su solicitud, queja o reclamo, está siendo bien atendido, de la forma más personalizada posible, escúchelo o léalo detenidamente, si le llama por su nombre este entenderá que está conectado con la situación, es una manera de que el cliente se sienta de una u otra forma tranquila y el percibirá que comprende la situación y que buscara la solución de forma oportuna.
            img(src="@/assets/curso/temas/t1/slide-2.svg" style="position: absolute; top: -1rem; left: 0; z-index: 0;")

          .py-3.py-4.position-relative
            p.ps-xl-4.col-xl-7.mx-auto.mb-0.position-relative(style="z-index: 1") Evite a toda costa un diálogo confrontativo, sea neutro al momento de dar una respuesta, no se trata de quién gana, se trata de un ganar-ganar para las dos partes, dele el lugar que merece como cliente y hágale saber de manera amable la respuesta objetiva de acuerdo con la petición, tenga presente que si no existe validez en la solicitud argumente con criterio que es inviable una solución al caso.
            img(src="@/assets/curso/temas/t1/slide-3.svg" style="position: absolute; top: -1rem; left: 0; z-index: 0;")

          .py-3.py-4.position-relative
            p.ps-xl-4.col-xl-7.mx-auto.mb-0.position-relative(style="z-index: 1")  Tenga la capacidad de ofrecer disculpas, explique brevemente lo sucedido, esto refleja que se tomó el tiempo necesario para estudiar el caso, con el fin de que este no se vuelva a presentar, posiblemente aquel cliente que está inconforme cambie su percepción y solo por el hecho de ser escuchado sentirá que de una u otra forma el asunto podrá ser solucionado.
            img(src="@/assets/curso/temas/t1/slide-4.svg" style="position: absolute; top: -1rem; left: 0; z-index: 0;")

          .py-3.py-4.position-relative
            p.ps-xl-4.col-xl-7.mx-auto.mb-0.position-relative(style="z-index: 1")  Solucione el problema, es significativo ponerse desde el punto de vista del cliente. Un cliente puede argumentar que la solución que se le da al caso no es suficiente, entonces hágalo partícipe de la decisión y pregúntele cómo quiere ser compensado, esto no lo tome como que el cliente ganó, simplemente se presentó así la situación y cree estrategias de mejora.
            img(src="@/assets/curso/temas/t1/slide-5.svg" style="position: absolute; top: -1rem; left: 0; z-index: 0;")

          .py-3.py-4.position-relative
            p.ps-xl-4.col-xl-7.mx-auto.mb-0.position-relative(style="z-index: 1")  Ofrezca un beneficio a su cliente por las molestias ocasionadas, puede ser descuentos, bonos, regalos o en su defecto un servicio que normalmente tenga cobro brindárselo de forma gratuita.
            img(src="@/assets/curso/temas/t1/slide-6.svg" style="position: absolute; top: -1rem; left: 0; z-index: 0;")

          .py-3.py-4.position-relative
            p.ps-xl-4.col-xl-7.mx-auto.mb-0.position-relative(style="z-index: 1") Por último, haga el seguimiento hasta que esté seguro de que el reclamo está cerrado de forma correcta y que el cliente tiene clara la respuesta, de esta forma cerciórese de que el cliente está notificado de la respuesta a su solicitud, independientemente del medio por el cual se dé la respuesta, precise las opciones y cambios necesarios para que este tipo de cosas no se vuelvan a presentar.
            img(src="@/assets/curso/temas/t1/slide-7.svg" style="position: absolute; top: -1rem; left: 0; z-index: 0;")

        .col-xl-4.order-1.order-xl-2
          figure
            img.mx-auto(src="@/assets/curso/temas/t1/t1_38.png")

      .col-xl-8.mx-auto.d-flex.align-items-center.p-3(style="background-color: #ECE5F7; border-radius: 20px;")
        img.me-3.mr-md-4(src="@/assets/curso/temas/t1/advertencia.svg" style="max-width: 59px")
        p.fw-bold.mb-0 Tenga muy presente que la buena atención y respuesta oportuna es buen marketing.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Mala interpretación o falta de entendimiento, por lo general un conflicto se da al momento de que un cliente no entiende fácilmente las instrucciones de uso de un artículo (un ejemplo claro podría ser la instalación de un software, esto fácilmente colmará la paciencia de un cliente), o cuando no está de acuerdo con alguna cláusula de un contrato.',
        imagen: require('@/assets/curso/temas/t1/img-1.jpg'),
      },
      {
        titulo: '',
        texto:
          'Inconvenientes con los precios, en muchas ocasiones los clientes no siempre están de acuerdo con los precios, ya que puede presentarse que no hay una lectura clara de un acuerdo, la consecuencia de esto es que los clientes se sientan engañados afectando la credibilidad del producto y por ende, la imagen de la empresa.',
        imagen: require('@/assets/curso/temas/t1/img-2.jpg'),
      },
      {
        titulo: '',
        texto:
          'Al momento de quebrar la confianza y no cumplir con las promesas que se les hace a los clientes.',
        imagen: require('@/assets/curso/temas/t1/img-3.jpg'),
      },
      {
        titulo: '',
        texto:
          'Incumplimiento en la entrega de productos, esto puede generar retardos de quien entrega el producto, así que tenga presente si su producto va a ser enviado, hágalo con tiempo y con compañías especializadas en entregas o hágalo personalmente.',
        imagen: require('@/assets/curso/temas/t1/img-4.jpg'),
      },
      {
        titulo: '',
        texto:
          'Los productos no cuenten con la calidad esperada por parte de un cliente, es decir, que no coincida con lo que se oferta, tenga mucho cuidado porque los clientes podrán dar críticas a sus productos generando una mala reputación y por ende, la pérdida de clientes.',
        imagen: require('@/assets/curso/temas/t1/img-5.jpg'),
      },
      {
        titulo: '',
        texto:
          'No tener los suficientes canales de respuesta inmediata para los clientes, esto hace referencia números de teléfono que no operen de manera precisa, correos electrónicos que no se responden a tiempo, chats sin respuesta, entre otros, preste bastante atención a este tipo de situaciones.',
        imagen: require('@/assets/curso/temas/t1/img-6.jpg'),
      },
      {
        titulo: '',
        texto:
          'Cuando los representantes de ventas no cuentan con una capacitación adecuada al momento de solicitar algún tipo de información concreta y no se tiene respuesta oportuna, su carácter o tono de voz no son los adecuados.',
        imagen: require('@/assets/curso/temas/t1/img-7.jpg'),
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: 'Escuche',
        texto:
          'Escuche al cliente y no reaccione de inmediato al posible conflicto, porque el cliente podría ponerse a la defensiva. Por lo general a los clientes no les importa quién es el culpable, y requieren una respuesta rápida y proactiva con el fin de solucionar el inconveniente.',
        icono: require('@/assets/curso/temas/t1/l-1.svg'),
      },
      {
        titulo: 'Nada personal',
        texto:
          'Permita que el cliente argumente la dificultad, porque lo que desea es expresarse, escucharle y darle el espacio necesario hará que la intensidad de la comunicación baje, no tome los comentarios de forma personal y cuando sea su momento de hablar, hágalo con prudencia y respeto ante todo.',
        icono: require('@/assets/curso/temas/t1/l-2.svg'),
      },
      {
        titulo: 'Pregunte',
        texto:
          'Realice preguntas concretas al cliente (cuál es el inconveniente presentado y cómo puedo ayudarle a dar pronta solución), puesto que esté en medio de su enojo, él no sabrá expresar su disgusto.',
        icono: require('@/assets/curso/temas/t1/l-3.svg'),
      },
      {
        titulo: 'Traza',
        texto:
          'Es muy importante utilizar un sistema de atención al cliente (#[em software]), el cual le permita dar respuesta inmediata a una solicitud, mientras recibe la queja vía telefónica simplemente observando la ficha técnica del cliente, la cual le permitirá saber si es la primera queja que realiza, si está comunicado con el área adecuada para dar respuesta a su solicitud y, cuándo y cómo realizó la compra.',
        icono: require('@/assets/curso/temas/t1/l-4.svg'),
      },
      {
        titulo: 'Lenguaje adecuado',
        texto:
          'Sea coherente de acuerdo con su política de canales escritos, haciendo referencia a si la atención del cliente es en línea o por intermedio de chats o redes sociales. Tenga mucho cuidado en la forma en que escribe, con el fin de no dar por sentado nada, puesto que en este espacio se desconoce la expresión facial o corporal del cliente, por ello sea cauteloso al momento de hacer una respuesta escrita.',
        icono: require('@/assets/curso/temas/t1/l-5.svg'),
      },
      {
        titulo: 'Tono adecuado',
        texto:
          'Durante todo el periodo de la conversación mantenga un tono verbal adecuado (tono medio), que transmita tranquilidad y escuche al cliente, de esta forma podrá ganarse su confianza y esto permitirá que la conversación se dé en calma y equilibrio.',
        icono: require('@/assets/curso/temas/t1/l-6.svg'),
      },
      {
        titulo: 'Resuelva',
        texto:
          'Maneje una comunicación empática (en primera medida podría ser un buen día, gracias por comunicarse con nosotros), independientemente del estado de enojo del cliente, agradecer desde el inicio de la comunicación posiblemente hará que este pueda bajarle el tono al cliente y se dé el reclamo de una forma diferente, de igual forma, no asuma e interprete que sabe todo por lo que puede estar transitando el cliente, asegúrese de comprender bien el inconveniente y de esta forma resolverlo.',
        icono: require('@/assets/curso/temas/t1/l-7.svg'),
      },
    ],
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
.bg-t1-edit
  position: relative
  p
    position: relative
    z-index: 1
  &::before
    content: ''
    position: absolute
    z-index: 0
    left: 10%
    top: 0
    width: 40%
    height: 100%
    background-color: #ECE5F7
.bg-t1-edit--2
  padding-top: 2rem
  .img-bg
    position: absolute
    left: 0
    width: calc(100% + 6rem)
  .slyder-a__btn--sigt, .slyder-a__btn--atrs
    background-color: #EEAC3A
.slidera-edit
  .horizontal-scroll
    overflow-y: visible
  .slyder-a__btn--sigt, .slyder-a__btn--atrs
    background-color: #EEAC3A
  .slyder-a__tipo-b
    margin-top: 0 !important
</style>
