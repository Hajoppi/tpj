<template>
  <div class="week">
    <event class="week__event">
      <h2 slot="title">Klubi-ilta La 2.11.</h2>
      <p slot="description">GAYY ja Otaniemen jalostajat aloittavat teekkariperinneviikon Klubi-illala Smökissä</p>
    </event>
    <event class="week__event">
      <h2 slot="title">Fuksien juhlasitsit Ma 4.11.</h2>
      <p slot="description">Fuksien syksyn suurimmat juhlat. Tervetuloa fuksi</p>
    </event>
    <event class="week__event">
      <h2 slot="title">KV Tapahtuma Ti 5.11.</h2>
      <p slot="description">KVTMK järjestää hienon tapahtuman</p>
    </event>
        <event class="week__event">
      <h2 slot="title">Laulukilpailusitsit Ti 5.11.</h2>
      <p slot="description">Lukkaritoimikunta järjestää perinteisit Laulukilpailusitsit</p>
    </event>
    <event class="week__event">
      <h2 slot="title">Polin Approt Ke 6.11.</h2>
      <p slot="description">IE:n Polin Approt valloitavat taas Itäisen Satamakaupungin</p>
    </event>
    <event class="week__event">
      <h2 slot="title">Perinnepäivä To 6.11.</h2>
      <p slot="description">Polyteekkarimuseo ja Lukkarit järjestävät tapahtumia</p>
    </event>
    <event class="week__event">
      <h2 slot="title">Teekariperinnejuhla Pe 7.11.</h2>
      <p slot="description">Viikko huipentuu suureen juhlaan</p>
    </event>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */
import Event from '/src/components/Event';
export default {
/**
 * The name of the page.
 */
  name: 'week',
  /**
   * The components that the page can use.
   */
  data() {
    return {
    }
  },
  components: {
    Event,
  },
};
</script>
