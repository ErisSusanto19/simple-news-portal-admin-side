<script>
import Table from "../components/Table.vue"
import Button from "../components/Button.vue"
export default {
    components: {
        Table,
        Button
    },

    props: {
        role: String,
        news: Array,
        page: String
    },

    methods: {
        changePageAdd(view, form){
            this.$emit('changePage', {view, form})
        },

        changePageEdit(payload){
            // console.log(payload, '<<< from news');
            this.$emit('changePage', payload)
        },

        updateNewsStatus(payload){
            this.$emit("updateNewsStatus", payload)
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <main class="col-md-12 px-md-4">
                <div class="news mb-2">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-secondary">
                        <h1 class="h2">News</h1>
                        <Button @click.prevent="changePageAdd('form-news', 'addNews')" :class="'btn btn-sm btn-outline-primary'">
                            <i class="fa-regular fa-square-plus"></i>
                            New Post
                        </Button>
                    </div>
                    <div class="table-responsive">
                        <Table
                        :role="role"
                        :page="page"
                        :news="news"
                        @changePage="changePageEdit"
                        @updateNewsStatus="updateNewsStatus"
                        />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>