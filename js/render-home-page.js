function renderHomePage() {
    document.getElementById("body").innerHTML =
     `
     <div class="wrapper">
                <div class="wrapper_home">
                 <div class="nav">
                 
                 </div>
                 <header class="header">
                     <div class="logo">
                         <img src="images/RIKKEI_ACADEMY_LOGO.e997e6f7.png" alt="">
                     </div>
                     <div class="content">
                         <h4>Để nông dân biết Code</h4>
                     </div>
                     <div class="title-1">
                         <span>HỆ THỐNG QUẢN LÝ SINH VIÊN RIKKEI</span>
                     </div>
                     <div class="nav">
                        <a href="#" onclick="logout()">Đăng xuất</a>
                      </div>
                     <div class="title">
                         <span id="acc"></span>
                     </div>
                 </header>
                 <div class="content">
                     <div class="siderbar">
                             <table>
                                 <tr>
                                     <td><a href="#" onclick="rendermainbody()" id="dashboard">Bảng điều khiển</a></td>
                                 </tr>
                                 
                                 <tr>
                                     <td><a href="#"onclick="renderCourseManagement()">Quản lý lớp học</a></td>
                                 </tr>
                                 <tr>
                                     <td><a href="#">Quản lý khóa học</a></td>
                                 </tr>
                                 <tr>
                                     <td><a href="#">Quản lý sinh viên</a></td>
                                 </tr>
                                 <tr>
                                     <td><a href="#">Quản lý tài khoản</a></td>
                                 </tr>
                             </table>
                     </div>
                     <div class="main" id="main-body">
         
                     </div>
                 </div>
                 <footer class="footer">
                     <address class="address">Copyright Rikkei Academy @2023</address>
         
                 </footer>
             </div>`
}
renderHomePage();
