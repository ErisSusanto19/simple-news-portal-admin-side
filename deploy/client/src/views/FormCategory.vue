<script>
import Form from "../components/Form.vue"

export default {
    components: {
        Form
    },

    props: {
        page: String,
        form: String,
        category: Object
    },

    methods: {
        changePage(payload) {
            // console.log(payload, '<<< from FormCategory');
            this.$emit("changePage", payload)
        },

        addCat(payload){
            this.$emit("addCat", payload)
        },

        editCat(payload){
            // console.log(payload, '<<< from FormCategory');
            this.$emit("editCat", payload)
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <main class="col-md-12 px-md-4">
                <!-- New Category -->
            <div v-if="form === 'addCat'" class="new-category mb-2">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-secondary">
                    <h1 class="h2">New Category</h1>
                </div>
                <div class="col-md-4 col-lg-6 mx-auto">
                    <Form 
                    :page="page"
                    @submitForm="addCat"
                    @changePage="changePage"
                    />
                    <!-- <form class="needs-validation" novalidate>
                      <div class="row">
                        <div class="col-12">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" placeholder="" value="" required>
                        </div>
                        <hr class="my-4">
                        <div class="col-6">
                            <button class="w-100 btn btn-outline-secondary btn-lg">Cancel</button>
                        </div>
                          
                        <div class="col-6">
                            <button class="w-100 btn btn-primary btn-lg" type="submit">Submit</button>
                        </div>
                      </div>
                    </form> -->
                </div>
            </div>
            <!-- End New Category -->

            <!-- Edit Category -->
            <div v-if="form === 'editCat'" class="edit-category mb-2">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-secondary">
                    <h1 class="h2">Edit Category</h1>
                </div>
                <div class="col-md-4 col-lg-6 mx-auto">
                    <Form
                    :page="page"
                    @changePage="changePage"
                    :category="category"
                    @submitForm="editCat"
                    />
                    <!-- <form class="needs-validation" novalidate>
                      <div class="row">
                        <div class="col-12">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" placeholder="" value="" required>
                        </div>
                        <hr class="my-4">
                        <div class="col-6">
                            <button class="w-100 btn btn-outline-secondary btn-lg">Cancel</button>
                        </div>
                          
                        <div class="col-6">
                            <button class="w-100 btn btn-primary btn-lg" type="submit">Submit</button>
                        </div>
                      </div>
                    </form> -->
                </div>
            </div>
            <!-- End Edit Category -->
            </main>
        </div>
    </div>
</template>