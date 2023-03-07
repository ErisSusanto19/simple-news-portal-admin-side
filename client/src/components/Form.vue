<script>
import Button from "./Button.vue"

export default {
    components: {
        Button
    },

    props: {
        page: String,
        categories: Array,
        singleNews: Object,
        category: Object
    },

    data() {
        return {
            title: "",
            content: "",
            imgUrl: "",
            categoryId: "",
            name: ""
        }
    },

    created(){
        if(this.singleNews){
            this.title = this.singleNews.title,
            this.content = this.singleNews.content,
            this.imgUrl = this.singleNews.imgUrl,
            this.categoryId = this.singleNews.categoryId

            if(this.categoryId === undefined){
                this.categoryId = ""
            }
        }

        if(this.category){
            this.name = this.category.name
        }
    },

    methods: {
        changePage(payload){
            if(payload.view === 'form-cat'){
                payload.view = 'category'
            }

            if(payload.view === 'form-news'){
                payload.view = 'news'
            }
            // console.log(payload, '<<< from Form');
            this.$emit('changePage', payload)
        },

        submitForm(){
            let payload = {
                title: this.title,
                content: this.content,
                imgUrl: this.imgUrl,
                categoryId: this.categoryId,
                name: this.name
            }
            // console.log(payload, '<<< from form');

            if(this.singleNews){
                payload.newsId = this.singleNews.id
            }

            if(this.category){
                payload.categoryId = this.category.id
            }

            this.$emit('submitForm', payload)

            this.title = ""
            this.content = ""
            this.imgUrl = ""
            this.categoryId = ""
            this.name = ""
        }
    }
}
</script>

<template>
    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
        <div class="row">
            <div v-if="page === 'form-news'" class="col-12">
                <label for="title" class="form-label">Title</label>
                <input v-model="title" type="text" class="form-control" id="title-input" placeholder="" required>
            </div>
    
            <div v-if="page === 'form-news'" class="col-12">
                <label for="category" class="form-label">Category</label>
                <select v-model="categoryId" class="form-select" id="category-input" required>
                    <option value="" selected disabled>-- Select Category --</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>
            </div>
    
            <div v-if="page === 'form-news'" class="col-12">
                <label for="content" class="form-label">Content</label>
                <input v-model="content" type="text" class="form-control" id="content-input" placeholder="" required>
            </div>
    
            <div v-if="page === 'form-news'" class="col-12">
                <label for="image" class="form-label">Image URL</label>
                <input v-model="imgUrl" type="text" class="form-control" id="image-input" placeholder="" required>
            </div>

            <div v-if="page === 'form-cat'" class="col-12">
                <label for="name" class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control" placeholder="" required>
            </div>
    
            <hr class="my-4">
    
            <div class="col-6">
                <Button @click="changePage({view: page, cancel: 'cancel', form: ''})" type="button" class="w-100 btn-outline-secondary btn-lg">Cancel</Button>
            </div>
            
            <div class="col-6">
                <Button :class="'w-100 btn-primary btn-lg'" :type="'submit'">Submit</Button>
            </div>
        </div>
    </form>
</template>