<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-container>
                <b-navbar-brand>Navbar</b-navbar-brand>
            </b-container>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown :to="{name: 'AdminPlan'}" text="Planes" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-container>
                    <b-nav-item-dropdown text="| Usuario Admin" activate right>
                        <b-dropdown-item-button>Cerrar Secion</b-dropdown-item-button>
                    </b-nav-item-dropdown>
                </b-container>
            </b-navbar-nav>

        </b-navbar>
    </div>
</template>

<style scoped>
    #hola{
        background-color:aqua !important;
    }
</style>

<script>
export default {
  name: 'Header'
}
</script>
