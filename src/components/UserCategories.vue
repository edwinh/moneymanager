<template>
  <div class="user-categories">
    <ul class="collection">
      <li v-for="category in categories" v-bind:key="category.id" class="collection-item">
        <label><input type="checkbox" />
          <span>{{category.name}}</span>
        </label>
      </li>
    </ul>

    <div class="arrows">
      <button type="submit" class="btn green"><i class="fa fa-angle-double-right fa-2x"></i></button>
      <button type="submit" class="btn blue"><i class="fa fa-angle-double-left fa-2x"></i></button>
    </div>

    <ul class="collection">
      <li v-for="usercategory in usercategories" v-bind:key="usercategory.id" class="collection-item">
        <label><input type="checkbox" />
          <span>{{usercategory.name}}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'user-categories',
  data () {
    return {
      categories: [],
      usercategories: []
    }
  },
  created () {
    // Create vars for references to collections
    var catRefs = db.collection('categories')
    var usercatRefs = db.collection('usercategories')
    catRefs.orderBy('name').get()
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
    usercatRefs.where('email', '==', 'edwinhoogervorst@gmail.com').get()
      .then(
        querySnapshot => {
          querySnapshot.forEach(doc => {
            catRefs.where('id', '==', doc.data().category_id).get()
              .then(
                querySnapshot => {
                  querySnapshot.forEach(doc => {
                    const data = {
                      'id': doc.data().id,
                      'name': doc.data().name
                    }
                    this.usercategories.push(data)
                  })
                }
              )
          })
        }
      )
  }
}
</script>

<style scoped>
  .user-categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .arrows {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
