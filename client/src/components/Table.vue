<script>
import TableRow from "./TableRow.vue"
export default {
    components: {
        TableRow
    },

    props: {
        role: String,
        page: String,
        news: Array,
        categories: Array,
        histories: Array
    },

    methods: {
        changePage(payload) {
            // console.log(payload, '<<< from Table');
            this.$emit("changePage", payload)
        },

        updateNewsStatus(payload){
            this.$emit("updateNewsStatus", payload)
        },

        deleteCat(id){
            // console.log(id, '<<< from Table');
            this.$emit("deleteCat", id)
        }
    }
}
</script>

<template>
    <div class="table-responsive">
        <table class="table table-striped table-sm align-middle">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th v-if="page === 'news'" scope="col">Title</th>
                    <th v-if="page === 'news'" scope="col" width="180">Image</th>
                    <th v-if="page === 'news'" scope="col">Content</th>
                    <th v-if="page === 'news'" scope="col">Category</th>
                    <th v-if="page === 'news'" scope="col">Author</th>
                    <th v-if="page === 'news'" scope="col">Status</th>
                    <th v-if="page === 'category'" scope="col">Name</th>
                    <th v-if="page === 'category' || page === 'news'" scope="col" width="50px"></th>
                    <th v-if="page === 'category'" scope="col" width="50px"></th>
                    <th v-if="page === 'history'" scope="col">Title News</th>
                    <th v-if="page === 'history'" scope="col">Description</th>
                    <th v-if="page === 'history'" scope="col">Created At</th>
                    <th v-if="page === 'history'" scope="col">Updated By</th>
                </tr> 
            </thead>
            <tbody>
                <TableRow v-if="page === 'news'"
                v-for="(info, idx) in news" :key="idx" :queue="idx+1" :info="info"
                :role="role"
                :page="page"
                @changePage="changePage"
                @updateNewsStatus="updateNewsStatus"
                />

                <TableRow v-if="page === 'category'"
                v-for="(category, idx) in categories" :key="idx" :queue="idx+1" :category="category"
                :page="page"
                @changePage="changePage"
                @deleteCat="deleteCat"
                />

                <TableRow v-if="page === 'history'"
                v-for="(history, idx) in histories" :key="idx" :queue="idx+1" :history="history"
                :page="page"
                />
            </tbody>
        </table>
    </div>
</template>