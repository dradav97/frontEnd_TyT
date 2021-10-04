<template>
    <div>
      <Header/>
      <h1>Gestion de planes</h1>
      <div class="container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Megabytes</th>
              <th scope="col">Precio Base</th>
              <th scope="col">Precio de instalacion</th>
              <th scope="col">tipo de locacion</th>
              <th scope="col">tipo de servicio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="plan in ListaPlanes" :key="plan.plan_id" v-on:click= "editar(plan.plan_id)">
              <th scope="row">{{ plan.plan_id }}</th>
              <td>{{ plan.name }}</td>
              <td>{{ plan.megabytes }}</td>
              <td>{{ plan.basic_price }}</td>
              <td>{{ plan.install_price }}</td>
              <td>{{ plan.location_type }}</td>
              <td>{{ plan.service_type }}</td>
            </tr>

          </tbody>
        </table>
      </div>

      <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'Dashboard',
  data () {
    return {
      ListaPlanes: null,
      pagina: ''
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    editar (id) {
      this.$router.push('/editPlanAdmin/}' + id)
    }
  },
  mounted: function () {
    const direction = 'http://localhost:3000/api/plan' + this.pagina
    axios.get(direction).then(data => {
      this.ListaPlanes = data.data.body
    })
  }
}
</script>

<style scoped>

</style>
