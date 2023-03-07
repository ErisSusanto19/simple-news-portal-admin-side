<script>
import Table from "../components/Table.vue"
import Button from "../components/Button.vue"

export default {
    components: {
        Table,
        Button
    },

    props: {
        page: String,
        categories: Array
    },

    methods: {
        changePageAddCat(view, form) {
            this.$emit("changePage", {view, form})
        },

        changePageEditCat(payload){
            // console.log(payload, '<<< from Category');
            this.$emit("changePage", payload)
        },

        deleteCat(id){
            // console.log(id, '<<< from Category');
            this.$emit("deleteCat", id)
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <main class="col-md-12 px-md-4">
                <div class="category mb-2">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-secondary">
                        <h1 class="h2">Category</h1>
                        <Button @click.prevent="changePageAddCat('form-cat', 'addCat')" type="button" class="btn btn-sm btn-outline-primary">
                            <i class="fa-regular fa-square-plus"></i>
                            New Category
                        </Button>
                    </div>
                    <div class="table-responsive">
                        <Table
                        :page="page"
                        :categories="categories"
                        @changePage="changePageEditCat"
                        @deleteCat="deleteCat"
                        />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>