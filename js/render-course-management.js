function renderCourseManagement() {
    document.getElementById("main-body").innerHTML =
    `<div id="courseManagement" class="course">
        <h2> QUẢN LÝ KHÓA HỌC</h2>
        <div class="container-1">
            <div class="form-group">
                <button id="openModal" onclick="openModal()"> Thêm mới </button>
            </div>
            <div class="search">
                <input type="text" placeholder="Nhập từ khóa học tìm kiếm">
                <button><a href=""> Tìm kiếm</a></button>
            </div>
            <div class="arrange">
                <label for="#">Sắp xếp</label>
                <select name="" id="list">
                    <option value="">Lựa chọn</option>
                    <option value="">Lựa chọn 1</option>
                    <option value="">Lựa chọn 2</option>
                    <option value="">Lựa chọn 3</option>
                    <option value="">Lựa chọn 4</option>
                </select>
            </div>
            </form>
        </div>
        <div class="container-2">
            <div>
                <table class="table-default-1">
                    <tr>
                        <th>STT</th>
                        <th>Mã khóa học</th>
                        <th>Tên khóa học</th>
                        <th>Thời gian (giờ) </th>
                        <th>Trạng thái </th>
                        <th>Hành động</th>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                   
                </table>
            </div>
            
    </div>
    <div class="container-3">
        <div  class="table-default-2">
            <table>
                <tr>
                   <td><a href="">Prev</a></td>
                    <td><a href="">1</a></td>
                    <td><a href="">2</a></td>
                    <td><a href="">....</a></td>
                    <td><a href="">999 </a></td>
                    <td><a href="">Next</a></td>
                </tr>
            </table>
        </div>
       
    </div>
        

    </div>`
}
renderCourseManagement()
function openModal(){
    var modal = document.getElementById("myModal");
    
    // nhận nút mở Modal
    var btn = document.getElementById("openModal");
    
    // lấy phần tử để đóng Modal
    var btn = document.getElementsByClassName("addBtn_close")[0];
    
    // khi người dùng nhấn vào nút _>> mở Modal
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // khi nhấn vào dấu X đóng Modal lại
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}
