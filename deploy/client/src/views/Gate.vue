<script>
import Register from "../components/Register.vue"
import Login from "../components/Login.vue"
export default {
  components: {
    Register,
    Login
  },

  methods: {
    login(payload){
      this.$emit("login", payload)
    },

    register(payload){
      this.$emit("register", payload)
    },

    googleSignIn(response){
      // console.log(response, '<<< from Gate');
      this.$emit("googleSignIn", response)
    }
  }
}
</script>

<template>
  <div class="container" id="login-gate-section">
    <div class="col">
      <div class="text-center mt-5">
        <h1>Welcome</h1>
        <p>By sign-in to your account, you can explore more information. If you don't have account yet, you have to sign-up first, then continue signing in.</p>
      </div>
      <div class="d-flex flex-row justify-content-evenly mb-3">

        <Register 
        @register="register"
        />

        <Login 
        @login="login"
        @googleSignIn="googleSignIn"
        />

      </div>
    </div>
  </div>
</template>

<style>
  .form-floating:focus-within {
    z-index: 2;
  }
</style>
