<template>
  <div class="newcategory">
    <h3>Add new expense category</h3>
    <div class="row">
      <form @submit.prevent="saveCategory" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" class="validate" placeholder="Name" v-model="name" required>
            <label class="label">Category name</label>
          </div>
        </div>
        <button type="submit" class="button is-link">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'new-category',
  data () {
    return {
      id: null,
      name: null
    }
  },
  methods: {
    saveCategory () {
      db.collection('categories').add({
        id: this.generateUUID(),
        name: this.name
      })
        .then(function (docRef) {
          console.log('Document written with ID: ' + docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
      this.name = ''
    },
    generateUUID () {
      let d = new Date().getTime()
      let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
      })
      return uuid
    }
  }
}
</script>
