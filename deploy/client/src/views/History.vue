<script>
import Table from "../components/Table.vue"

export default {
    components: {
        Table
    },

    props: {
        page: String,
        histories: Array
    },

    methods: {
        fetchHistories(){
            this.$emit("fetchHistories")
        }
    },

    created(){
        this.fetchHistories()
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <main class="col-md-12 px-md-4">
                <div class="history mb-2">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-secondary">
                        <h1 class="h2">Logs</h1>
                    </div>
                    <div class="table-responsive">
                        <Table
                        :page="page"
                        :histories="histories"
                        />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>