<script>
import Button from "./Button.vue"

export default {
    components: {
        Button
    },

    data() {
        return {
            username: "",
            email: "",
            passsword: "",
            phoneNumber: "",
            address: ""
        }
    },

    methods: {
        submitReg(){
            this.$emit("register", {
                username: this.username,
                email: this.email,
                password: this.passsword,
                phoneNumber: this.phoneNumber,
                address: this.address,
            })

            this.username = "",
            this.email = "",
            this.passsword = "",
            this.phoneNumber = "",
            this.address = ""
        }
    }
}
</script>

<template>
    <div class="col-lg-5 col-md-8 col-sm-12">
        <form @submit.prevent="submitReg" id="register-form">
            <div>
                <h2>Sign Up</h2>
            </div>
            <div class="form-floating">
                <input v-model="username" type="text" class="form-control" id="floatingName" placeholder="Name" required>
                <label for="floatingName">Username</label>
            </div>
            <div class="form-floating">
                <input v-model="email" type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required>
                <label for="floatingEmail">Email address</label>
            </div>
            <div class="form-floating">
                <input v-model="passsword" type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating">
                <input v-model="phoneNumber" type="number" class="form-control" id="floatingPhone" placeholder="Phone Number">
                <label for="floatingPhone">Phone Number <span class="fst-italic">(Optional)</span></label>
            </div>
            <div class="form-floating">
                <textarea v-model="address" class="form-control" id="floatingAddress" placeholder="Address"></textarea>
                <label for="floatingAddress">Address <span class="fst-italic">(Optional)</span></label>
            </div>

            <Button :class="'w-100 btn-lg btn-primary mt-5'">Sign up</Button>
            
        </form>
    </div>
</template>