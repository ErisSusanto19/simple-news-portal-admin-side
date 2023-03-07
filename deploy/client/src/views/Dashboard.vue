<script>
export default {
    props: {
        news: Array,
        categories: Array
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <main class="col-md-12 px-md-4">
                <div class="dashboard mb-2">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-secondary">
                        <h1 class="h2">Dashboard</h1>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow">
                                <div class="card-header py-3">
                                    <h4 class="my-0 fw-normal">News</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">{{ news.length }}</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow">
                                <div class="card-header py-3">
                                    <h4 class="my-0 fw-normal">Categories</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">{{ categories.length }}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
