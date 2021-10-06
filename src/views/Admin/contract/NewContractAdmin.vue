<template>
    <div>
      <Header/>
      <h3>Nuevo Contrato</h3>
      <br>
      <div class="container">

        <form action="" left>
          <div class="form-group left row g-3 ">
          </div>

          <div class="form-group left row g-3 ">
            <div class="col-md-4  mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.customer_id">
              <label for="floatingInput">Cliente</label>
            </div>
            <div class="col-md-4  mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.plan_id">
              <label for="floatingInput">Plan</label>
            </div>
            <div class="col-md-4 mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.initial_date">
              <label for="floatingInput">Fecha de inicio</label>
            </div>

            <div class="col-md-4 mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.address">
              <label for="floatingInput">Direccion</label>
            </div>
            <div class="col-md-4  mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"  v-model="form.additional_price">
              <label for="floatingInput">Precio adicional</label>
            </div>
            <div>
              <div>Beast:</div>
                <v-selectize :options="options" v-model="selected" placeholder="Select a person"/>
              <div>Current Value: {{ selected }}</div>
            </div>

          </div>

          <div class="form-group">
              <button type="button" class="btn btn-primary" v-on:click="save()">Guardar</button>
              <button type="button" class="btn btn-dark margen" v-on:click="exit()">Salir</button>
          </div>

        </form>
      </div>

    </div>
</template>
<script>
import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'
import axios from 'axios'
import VSelectize from '@isneezy/vue-selectize'

export default {
  name: 'NewContractAdmin',
  components: {
    VSelectize,
    Header
    // Footer
  },
  data: function () {
    return {
      form: {
        contract_id: '',
        initial_date: '',
        address: '',
        additional_price: '',
        customer_id: '',
        plan_id: ''
      },
      options: ['Chuck Testa', 'Nikola Tesla', 'Sage Cattabriga-Alosa'],
      selected: null
    }
  },
  methods: {
    save () {
      this.form.location_type = this.selectedLocation
      this.form.service_type = this.selectedService
      axios.post('http://localhost:3000/api/contract/', this.form)
      this.$router.push('/adminContract/')
    },
    exit () {
      this.$router.push('/adminContract/')
    }
  }
}
</script>

<style scoped>
.left {
  text-align: left;
}
</style>
