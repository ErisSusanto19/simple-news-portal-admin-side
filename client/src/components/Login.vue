<script>
import Button from "./Button.vue"

export default {
    components: {
        Button
    },
    
    data() {
        return {
            email: "",
            passsword: ""
        }
    },

    methods: {
        submitLogin(){
            this.$emit("login", {
                email: this.email,
                password: this.passsword
            })

            this.email = "",
            this.passsword = ""
        },

        googleSignIn(response){
            // console.log(response, '<<< from login');
            this.$emit("googleSignIn", response)
        }
    }
}
</script>

<template>
    <div class="col-lg-5 col-md-8 col-sm-12">
        <form @submit.prevent="submitLogin" id="login-form">
            <div>
                <h2>Log In</h2>
            </div>
            <div class="form-floating">
                <input v-model="email" type="email" class="form-control" id="floatingEmailLog" placeholder="name@example.com" required>
                <label for="floatingEmailLog">Email address</label>
            </div>
            <div class="form-floating">
                <input v-model="passsword" type="password" class="form-control" id="floatingPasswordLog" placeholder="Password" required>
                <label for="floatingPasswordLog">Password</label>
            </div>

            <Button :class="'w-100 btn-lg btn-primary mt-5'">Log in</Button>

        </form>
        <div class="text-center my-3">
            <label for="">or Sign in with</label>
        </div>
        <div class="d-flex justify-content-center">
            <GoogleLogin :callback="googleSignIn"/>
        </div>
    </div>
</template>