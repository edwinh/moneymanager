<template>
  <div class="card-panel blue lighten-5">
    <h3>Edit expense category</h3>
    <div class="row">
      <form @submit.prevent="updateCategory" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" class="validate" v-model="name" autofocus required>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/categories" class="btn grey">Cancel</router-link>
      </form>
    </div>
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
            vm.id = doc.data().id
            vm.name = doc.data().name
          })
        })
      })
  },
  methods: {
    updateCategory () {
      console.log('update category ' + this.id)
      db.collection('categories').where('id', '==', this.id).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.update({
              name: this.name
            })
              .then(() => {
                this.$router.push({name: 'view-category', params: {category_id: this.id}})
              })
          })
        })
    }
  }
}
</script>
