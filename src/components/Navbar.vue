<template>
  <nav>
    <div class="nav-wrapper blue">
      <div class="container">
        <router-link to="/" class="left brand-logo">MM</router-link>
        <ul class="right">
            <!-- <li class="email">{{currentUser}}</li> -->
            <li><router-link to="/">Dashboard</router-link></li>
            <li><router-link to="/categories">Categories</router-link></li>
            <li><router-link to="/expenses">Expenses</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
            <li><button class="btn black">Logout</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>
