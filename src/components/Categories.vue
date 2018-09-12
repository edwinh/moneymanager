<template>
  <div class="categories">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Categories</h4></li>
      <li v-for="categorie in categories" v-bind:key="categorie.id" class="collection-item">{{categorie.name}}
        <router-link>
          <i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'categories',
  data () {
    return {
      categories: [
        {
          'id': 1,
          'name': 'cat1'
        },
        {
          'id': 2,
          'name': 'cat2'
        },
        {
          'id': 3,
          'name': 'cat3'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .fa {
    float: right;
  }
</style>
