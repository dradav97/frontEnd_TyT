<template>
    <div>
      <Header/>
      <h3>Editar informacion del Contrato</h3>
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

          </div>

          <div class="form-group">
            <button type="button" class="btn btn-primary" v-on:click="edit">Editar</button>
            <button type="button" class="btn btn-danger margen " v-on:click="remove">Eliminar</button>
            <button type="button" class="btn btn-dark margen" v-on:click="exit">Salir</button>
          </div>

        </form>
      </div>

    </div>
</template>
<script>
import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'EditPlanAdmin',
  components: {
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
      }
    }
  },
  methods: {
    edit () {
      const send = {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
      axios.put('http://localhost:3000/api/contract/', this.form, { headers: send })
        .then(data => {
          console.log(data)
          this.$router.push('/adminContract/')
        })
    },
    exit () {
      this.$router.push('/adminContract/')
    },
    remove () {
      const send = {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
      axios.delete('http://localhost:3000/api/contract/' + this.form.contract_id, { headers: send })
        .then(() => {
          this.$router.push('/adminContract/')
        })
    }
  },
  /* form: {
        contract_id: '',
        initial_date: '',
        address: '',
        additional_price: '',
        customer_id: '',
        plan_id: ''
      }
  **/
  mounted: function () {
    this.form.contract_id = this.$route.params.ContractId
    axios.get('http://localhost:3000/api/contract/' + this.form.contract_id)
      .then(data => {
        console.log(data)
        this.form.contract_id = data.data.body[0].contract_id
        this.form.initial_date = data.data.body[0].initial_date
        this.form.address = data.data.body[0].address
        this.form.additional_price = data.data.body[0].additional_price
        this.form.customer_id = data.data.body[0].customer_id
        this.form.plan_id = data.data.body[0].plan_id
        // this.form.token = localStorage.getItem('token')
      })
  }
}
</script>

<style scoped>
.left {
  text-align: left;
}
</style>
