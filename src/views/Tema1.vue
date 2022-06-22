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
