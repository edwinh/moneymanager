<template>
  <div class="edit-category">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Category</h4></li>
      <li class="collection-item">Name: {{name}}</li>
    </ul>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'edit-category',
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
            vm.id = doc.id
            vm.name = doc.data().name
          })
        })
      })
  }
}
</script>
