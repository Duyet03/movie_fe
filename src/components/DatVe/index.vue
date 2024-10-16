<template>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-2 ms-3">
                            <label>Ngày:</label>
                            <input class="form-control" type="date">
                        </div>
                        <div class="col-lg-2 ms-3">
                            <label>Tỉnh thành:</label>
                            <select class="form-control">
                                <option value="0">Hà Nội</option>
                                <option value="1">Đà Nẵng</option>
                                <option value="2">Hồ Chí Minh</option>
                            </select>
                        </div>
                        <div class="col-lg-7 text-end">
                            <button style="width: 200px;" class="btn btn-outline-primary mt-3">Tìm kiếm <i class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="row product-grid">
                        <div class="col-lg-2 col-md-4">
                            <router-link to="/dat-cho">
                                <div class="card" >
                                <div class="card-header text-cente">
                                    Screen03
                                </div>
                                <div class="card-body text-center ">
                                    <b><h4>11:00</h4></b>
                                </div>
                                <div class="card-footer text-center">
                                    80/90 Ghế ngồi
                                </div>
                            </div>
                            </router-link>
                        </div>
                        <div class="col-lg-2 col-md-4">
                            <router-link to="/dat-cho">
                                <div class="card">
                                <div class="card-header text-center">
                                    Screen03
                                </div>
                                <div class="card-body text-center ">
                                    <b><h4>11:30</h4></b>
                                </div>
                                <div class="card-footer text-center">
                                    20/90 Ghế ngồi
                                </div>
                            </div>
                            </router-link>
                        </div>
                        <div class="col-lg-2 col-md-4">
                            <router-link to="/dat-cho">
                                <div class="card">
                                <div class="card-header text-center">
                                    Screen03
                                </div>
                                <div class="card-body text-center ">
                                    <b><h4>12:00</h4></b>
                                </div>
                                <div class="card-footer text-center">
                                    19/90 Ghế ngồi
                                </div>
                            </div>
                            </router-link>
                        </div>
                        <div class="col-lg-2 col-md-4">
                            <router-link to="/dat-cho">
                                <div class="card">
                                <div class="card-header text-center">
                                    Screen03
                                </div>
                                <div class="card-body text-center ">
                                    <b><h4>13:30</h4></b>
                                </div>
                                <div class="card-footer text-center">
                                    30/90 Ghế ngồi
                                </div>
                            </div>
                            </router-link>
                        </div>
                        <div class="col-lg-2 col-md-4">
                            <router-link to="/dat-cho">
                                <div class="card">
                                <div class="card-header text-center">
                                    Screen03
                                </div>
                                <div class="card-body text-center ">
                                    <b><h4>15:00</h4></b>
                                </div>
                                <div class="card-footer text-center">
                                    67/90 Ghế ngồi
                                </div>
                            </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>