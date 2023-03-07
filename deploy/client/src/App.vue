<script>
import Navbar from "./components/Navbar.vue"
import Gate from "./views/Gate.vue"
import Dashboard from "./views/Dashboard.vue"
import News from "./views/News.vue"
import FormNews from "./views/FormNews.vue"
import Category from "./views/Category.vue"
import FormCategory from "./views/FormCategory.vue"
import History from "./views/History.vue"
import axios from "axios"
import Swal from "sweetalert2"


export default {
  components: {
    Navbar,
    Gate,
    Dashboard,
    News,
    FormNews,
    Category,
    FormCategory,
    History
  },

  data() {
    return {
      // baseURL: "http://localhost:3000",
      baseURL: "https://simplenewsportal-production.up.railway.app",
      isLogin: false,
      page: "dashboard",
      username: "",
      role: "",
      news: [],
      form: "",
      categories: [],
      singleNews: {},
      category: {},
      histories: []
    }
  },

  created(){
    this.checkAuth()
  },

  methods: {
    checkAuth(){
      if(localStorage.access_token){
        this.username = localStorage.name
        this.role = localStorage.role
        this.isLogin = true,
        this.page = "dashboard"
        this.fetchNews()
        this.fetchCategories()
        this.fetchHistories()
      } else{
        this.isLogin = false
      }
    },

    changePage(payload){
      // console.log(payload, '<<< from app');
      if(payload.view){
        this.page = payload.view
      }

      if(payload.form){
        this.form = payload.form
      } else {
        this.form = ""
      }

      if(payload.newsId){
        this.fetchNewsById(payload.newsId)
      }

      if(payload.categoryId){
        // console.log(payload.categoryId, '<<< from app');
        this.fetchCategoryById(payload.categoryId)
      }

      if(payload.cancel){
        this.singleNews = {}
      }

    },

    logout(){
      Swal.fire({
        title: 'Are you sure want to quit?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, quit now!'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear()
            this.page = "dashboard"
            this.checkAuth()

            // google.accounts.id.disableAutoSelect()
        }
      })
    },

    async register(payload) {
      try {
        // console.log(payload, "<< from App");
        const { username, email, password, phoneNumber, address } = payload
        const { data } = await axios({
          method: "post",
          url: this.baseURL + "/register",
          data: { username, email, password, phoneNumber, address }
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.email} successfully registered`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async login(payload) {
      try {
        const { email, password } = payload
        const { data } = await axios({
          method: "post",
          url: this.baseURL + "/login",
          data: { email, password }
        })
        // console.log(data);
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("name", data.name)
        localStorage.setItem("role", data.role)
        this.username = data.name
        this.role = data.role
        this.isLogin = true
        this.fetchNews()
        this.fetchCategories()
        
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Welcome ${data.name}`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        // console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async googleSignIn(response){
      try {
        const { credential } = response
        const { data } = await axios({
          method: "post",
          url: this.baseURL + "/google-sign-in",
          headers: { "google-oauth-token": credential }
        })
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("name", data.name)
        localStorage.setItem("role", data.role)
        this.username = data.name
        this.role = data.role
        this.isLogin = true
        this.fetchNews()
        this.fetchCategories()

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Welcome ${data.name}`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async fetchNews(){
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseURL + "/news",
          headers: {access_token: localStorage.access_token}
        })
        this.news = data
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async addNews(payload){
      try {
        const { title, content, imgUrl, categoryId } = payload
        const { data } = await axios({
          method: "post",
          url: this.baseURL + "/news",
          headers: { access_token: localStorage.access_token },
          data: { title, content, imgUrl, categoryId }
        })
        this.page = "news"
        this.fetchNews()
        this.fetchHistories()

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `New post with id ${data.id} created`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async fetchNewsById(id){
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseURL + "/news/" + id,
          headers: { access_token: localStorage.access_token }
        })
        this.singleNews = data
        this.page = "form-news"
        this.form = "editNews"
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async editNews(payload){
      try {
        const {newsId, title, content, imgUrl, categoryId } = payload
        const { data } = await axios({
          method: "put",
          url: this.baseURL + "/news/" + newsId,
          headers: { access_token: localStorage.access_token },
          data: {title, content, imgUrl, categoryId }
        })
        // console.log(data);
        this.singleNews = {}
        this.page = "news"
        this.fetchNews()
        this.fetchHistories()

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async updateNewsStatus(payload){
      try {
        const { id, status } = payload
        const { data } = await axios({
          method: 'patch',
          url: this.baseURL + "/news/" + id,
          headers: { access_token: localStorage.access_token },
          data: { status }
        })
        // console.log(data);
        this.page = "news"
        this.fetchNews()
        this.fetchHistories()

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async fetchCategories(){
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseURL + "/categories",
          headers: { access_token: localStorage.access_token }
        })
        this.categories = data
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async addCat(payload){
      try {
        const { name } = payload
        const { data } = await axios({
          method: "post",
          url: this.baseURL + "/categories",
          headers: { access_token: localStorage.access_token },
          data: { name }
        })
        this.page = "category"
        this.fetchCategories()

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `New category with id ${data.id} created`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async fetchCategoryById(id){
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseURL + "/categories/" + id,
          headers: { access_token: localStorage.access_token }
        })
        // console.log(data);
        this.category = data
        this.page = "form-cat"
        this.form = "editCat"
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    async editCat(payload){
      try {
        const { categoryId, name } = payload
        const { data } = await axios({
          method: "put",
          url: this.baseURL + "/categories/" + categoryId,
          headers: { access_token: localStorage.access_token },
          data: { name }
        })
        // console.log(data);
        this.category = {}
        this.page = "category"
        this.fetchCategories()
        this.fetchNews()

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },

    deleteCat(id){
      // console.log(id, '<<< from App');
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            method: "delete",
            url: this.baseURL + "/categories/" + id,
            headers: { access_token: localStorage.access_token },
          })
            .then((data) => {
              // console.log(data);
              this.page = "category";
              this.fetchCategories();
              this.fetchNews()
              Swal.fire("Deleted!", data.data.message, "success");
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.response.data,
                // footer: '<a href="">Why do I have this issue?</a>'
              });
            });
        }
      });
    },

    async fetchHistories(){
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseURL + "/histories",
          headers: { access_token: localStorage.access_token }
        })
        // console.log(data);
        this.histories = data
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data,
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }
  }
}
</script>

<template>
  <Navbar
  :isLogin="isLogin"
  :username="username"
  :page="page"
  @changePage="changePage"
  @logout="logout"
  />

  <Gate
  v-if="!isLogin"
  @login="login"
  @register="register"
  @googleSignIn="googleSignIn"
  />

  <Dashboard
  v-if="isLogin && page === 'dashboard'"
  :news="news"
  :categories="categories"
  />

  <News 
  v-else-if="isLogin && page === 'news'"
  :role="role"
  :page="page"
  :news="news"
  @changePage="changePage"
  @updateNewsStatus="updateNewsStatus"
  />

  <FormNews
  v-else-if="isLogin && page === 'form-news'"
  :page="page"
  :form="form"
  :categories="categories"
  @changePage="changePage"
  @addNews="addNews"
  :singleNews="singleNews"
  @editNews="editNews"
  />

  <Category
  v-else-if="isLogin && page === 'category'"
  :page="page"
  :categories="categories"
  @changePage="changePage"
  @deleteCat="deleteCat"
  />

  <FormCategory
  v-else-if="isLogin && page === 'form-cat'"
  :page="page"
  :form="form"
  @addCat="addCat"
  @changePage="changePage"
  :category="category"
  @editCat="editCat"
  />

  <History
  v-else-if="isLogin && page === 'history'"
  :page="page"
  :histories="histories"
  @fetchHistories="fetchHistories"
  />
</template>