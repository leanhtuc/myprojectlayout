function rendermodalAddcourse() {
    document.getElementById("main-body").innerHTML =
    `<div id="myModal" class="modal">
        <div class="modal-content">
            <h3>Modal-Thêm mới khóa học</h3>
            <span class="close">&times;</span>
            <form action="" class="form">
                <div class="form_modal-row">
                    <label class="form_modal__label" for="name">Mã khóa học</label>
                    <input class="form_modal__input" type="text" id="CourseCode" placeholder="Nhập mã khóa học">
                </div>
                <div class="form_modal-row">
                    <label class="form_modal__label" for="">Tên khóa học</label>
                    <input class="form_modal__input" type="text" id="CourseName" placeholder="Nhập tên khóa học">
                </div>
                <div class="form_modal-row">
                    <label class="form_modal__label" for="">Thời gian</label>
                    <input class="form_modal__input" type="text" id="CourseTime" placeholder="Nhập thời gian khóa học">
                </div>
                <div class="form_modal-row">
                    <label class="form_modal__label" for="">Trạng thái</label>
                    <div class="check-status">
                        <div class="online">
                            <input  type="radio" name="status" value="1"> Hoạt động
                        </div>
                       <div class="offline">
                        <input  type="radio" name="status" value="0" checked="checked"> Không hoạt động
                       </div>
                       
                    </div>
                </div>
            </form>
            <div class="addBtn">
                <button class="addBtn_add"><a href="">Thêm mới</a></button>
                <button class="addBtn_close"><a href="">Đóng</a></button>
            </div>
        </div>

    </div>`
}
rendermodalAddcourse();






