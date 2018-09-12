<template>
  <div class="view-category">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Category</h4></li>
      <li class="collection-item">Name: {{name}}</li>
    </ul>
    <router-link to="/categories" class="btn grey">Back</router-link>
    <router-link v-if="id" v-bind:to="{name: 'edit-category', params: {category_id: id}}" class="btn red">Edit</router-link>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'view-category',
  data () {
    return {
      id: null,
      name: null
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to)
    db.collection('categories').where('id', '==', to.params.category_id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.id = doc.data().id
            vm.name = doc.data().name
          })
        })
      })
  }
}
</script>
