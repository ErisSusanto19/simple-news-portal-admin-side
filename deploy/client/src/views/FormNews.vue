<script>
import Form from "../components/Form.vue"
export default {
    components: {
        Form
    },

    props: {
        page: String,
        form: String,
        categories: Array,
        singleNews: Object
    },

    methods: {
        changePage(payload) {
            // console.log(payload, '<<< from FormNews');
            this.$emit("changePage", payload)
        },

        addNews(payload){
            // console.log(payload, '<<< from form News');
            this.$emit("addNews", payload)
        },
        
        editNews(payload){
            // console.log(payload, '<<< from form News');
            this.$emit("editNews", payload)
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <main class="col-md-12 px-md-4">
                <!-- New Post -->
                <div v-if="form === 'addNews'" class="new-post mb-2">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-secondary">
                        <h1 class="h2">New Post</h1>
                    </div>
                    <div class="col-md-4 col-lg-6 mx-auto">
                        <Form 
                        :page="page"
                        :categories="categories"
                        :singleNews="singleNews"
                        @changePage="changePage"
                        @submitForm="addNews"
                        />
                        <!-- <form class="needs-validation" novalidate>
                            <div class="row">
                                <div class="col-12">
                                    <label for="title" class="form-label">Title</label>
                                    <input type="text" class="form-control" placeholder="" value="" required>
                                </div>
                    
                                <div class="col-12">
                                    <label for="category" class="form-label">Category</label>
                                    <select class="form-select" placeholder="Username" required>
                                        <option value="" selected disabled>-- Select Category --</option>
                                        <option value="">Ok</option>
                                        <option value="">Yup</option>
                                    </select>
                                </div>
                    
                                <div class="col-12">
                                    <label for="content" class="form-label">Content</label>
                                    <input type="text" class="form-control" placeholder="" required>
                                </div>
                    
                                <div class="col-12">
                                    <label for="image" class="form-label">Image URL</label>
                                    <input type="text" class="form-control" id="address" placeholder="" required>
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
                <!-- End New Post -->

                <!-- Edit Post -->
                <div v-if="form === 'editNews'" class="edit-post mb-2">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-secondary">
                        <h1 class="h2">Edit Post</h1>
                    </div>
                    <div class="col-md-4 col-lg-6 mx-auto">
                        <Form
                        :page="page"
                        :categories="categories"
                        :singleNews="singleNews"
                        @changePage="changePage"
                        @submitForm="editNews"
                        />
                        <!-- <form class="needs-validation" novalidate>
                            <div class="row">
                                <div class="col-12">
                                    <label for="title" class="form-label">Title</label>
                                    <input type="text" class="form-control" placeholder="" value="" required>
                                </div>
                    
                                <div class="col-12">
                                    <label for="category" class="form-label">Category</label>
                                    <select class="form-select" placeholder="Username" required>
                                        <option value="" selected disabled>-- Select Category --</option>
                                        <option value="">Ok</option>
                                        <option value="">Yup</option>
                                    </select>
                                </div>
                    
                                <div class="col-12">
                                    <label for="content" class="form-label">Content</label>
                                    <input type="text" class="form-control" placeholder="" required>
                                </div>
                    
                                <div class="col-12">
                                    <label for="image" class="form-label">Image URL</label>
                                    <input type="text" class="form-control" id="address" placeholder="" required>
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
                <!-- End Edit Post -->
            </main>
        </div>
    </div>
</template>