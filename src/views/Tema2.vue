<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span.text-white 2
      h1 Marketing
    .bg_grad_05
      p.mb-5.pt-5 El marketing digital o marketing online hace referencia a todas aquellas operaciones y estrategias comerciales y publicitarias que se desarrollan en los medios y canales de Internet, tal como se muestra a continuación:
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        p.px-2.py-3(style="background-color: #DEF2F4") Como el #[em(style="background-color: #ECE5F7") marketing] es un gran ecosistema y no trabaja solo la parte digital se integran los siguientes conceptos para complementar la tarea de hacer visible una empresa.
    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-in")
      h2 2.1  #[em Marketing] relacional

    p.mb-5 #[span(style="background-color: #ECE5F7;") “Es el conjunto de estrategias de construcción y diseminación de marca, prospección, fidelización y creación de autoridad en el mercado. El objetivo del marketing relacional es conquistar y fidelizar a los clientes, además de convertirlos en defensores y promotores de la marca” Lipinski (2020).] Hace referencia a un conjunto de métodos utilizados para construir relaciones estratégicas a largo plazo con los clientes; dicha correlación se fundamenta en el objetivo de retener a los clientes y expandir un negocio. Lo importante de esta relación es que está en capacidad de beneficiar tanto a la empresa como al cliente, con el fin de fortalecerla. 

    .d-flex.flex-wrap.mb-5(style="background-color: #DEF2F4")
      img.col-lg-4.mb-4.mb-lg-0(src="@/assets/curso/temas/t2/t2_01.png")
      .col-lg-7.ps-lg-4.d-flex.flex-wrap.align-content-center
        p Se podrá brindar un valor agregado con el cual se genere familiaridad entre los consumidores, el marketing relacional no se enfoca en el producto, por el contrario, prioriza por encima de todo al cliente, porque no se trata solo de cerrar una venta, sino que va más allá de eso, siendo esta una forma de atraer con facilidad clientes a una empresa. 
        p.mb-0 El objetivo principal del #[em marketing] relacional es alcanzar la lealtad del cliente a través de que él se sienta satisfecho en todo sentido, debido a que contar con un cliente fiel será determinante para optimizar los resultados de una empresa, de igual forma conocer muy bien a sus clientes le permitirá conocer información importante con la cual pueda estructurar las diversas estrategias de #[em marketing] para la empresa.

    p A continuación se enuncian algunas ventajas del #[em(style="background-color: #ECE5F7") marketing] relacional, las cuales podrá poner práctica al momento de buscar, enamorar y potencializar clientes:
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
