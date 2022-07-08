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


      p #[br]
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
