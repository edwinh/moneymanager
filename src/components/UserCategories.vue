<template>
  <div class="user-categories">
    <ul class="collection">
      <li class="collection-item">
        <label><input type="checkbox" />
          <span>Café</span>
        </label>
      </li>
      <li class="collection-item">
        <label><input type="checkbox" />
          <span>Kappers</span>
        </label></li>
      <li class="collection-item">
        <label><input type="checkbox" />
          <span>Restaurant</span>
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
export default {
  name: 'user-categories',
  data () {
    return {
    }
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
