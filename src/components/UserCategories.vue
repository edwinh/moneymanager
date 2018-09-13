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
      <button type="submit" v-on:click="addCategory" class="btn green"><i class="fa fa-angle-double-right fa-2x"></i></button>
      <button type="submit" v-on:click="removeCategory" class="btn blue"><i class="fa fa-angle-double-left fa-2x"></i></button>
    </div>

    <ul class="collection">
      <li class="collection-item">
        <label><input type="checkbox" />
          <span>Supermarkt</span>
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
