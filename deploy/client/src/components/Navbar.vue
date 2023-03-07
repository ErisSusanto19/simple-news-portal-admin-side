<script>
export default {
    props: {
      isLogin: Boolean,
      username: String,
      page: String
    },

    methods: {
      changePage(view){
        this.$emit('changePage', {view})
      },

      logout(){
        this.$emit
      }
    }
}
</script>

<template>
  <nav class="navbar navbar-dark sticky-top navbar-expand-lg bg-dark shadow">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="https://cdn.pixabay.com/photo/2012/04/14/14/30/newspaper-34126__480.png" alt="" width="50"><span class="ms-2">News Portal</span></a>
      <button v-show="isLogin" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="isLogin" class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="me-auto"></div>
        <ul class="navbar-nav mb-2 mb-md-0">
          <li class="nav-item">
            <a 
              @click.prevent="changePage('dashboard')"
              class="nav-link" 
              href="#"
            >
            Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a
              @click.prevent="changePage('news')"
              class="nav-link"
              href="#"
            >
            News
            </a>
          </li>
          <li class="nav-item">
            <a 
              @click.prevent="changePage('category')"
              class="nav-link" 
              href="#"
            >
            Category
            </a>
          </li>
          <li class="nav-item">
            <a
              @click.prevent="changePage('history')"
              class="nav-link" 
              href="#"
            >
              Logs
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Hai, <span>{{ username }}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <a @click.prevent="$emit('logout')" class="dropdown-item" href="#">
                  <i class="fa-solid fa-right-from-bracket"></i><i class="fa-solid fa-person-running"></i>  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>