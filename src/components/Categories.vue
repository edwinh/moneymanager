<template>
  <div class="categories">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Expense categories</h4></li>
      <li v-for="categorie in categories" v-bind:key="categorie.id" class="collection-item">{{categorie.name}}
        <router-link class="secondary-content" v-bind:to="{name: 'view-category', params: {category_id: categorie.id}}">
          <i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'categories',
  data () {
    return {
      categories: []
    }
  },
  created () {
    db.collection('categories').orderBy('name').get()
      .then(
        querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              'id': doc.data().id,
              'name': doc.data().name
            }
            this.categories.push(data)
          })
        }
      )
      .catch(function (error) {
        console.error('Error fetching document: ', error)
      })
  }
}
</script>

<style scoped>
  .fa {
    float: right;
  }
</style>
