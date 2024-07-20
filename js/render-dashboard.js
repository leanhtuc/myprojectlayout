function rendermainbody() {
    document.getElementById("main-body").innerHTML =
                    `
                        <table>
                            <tr>
                                <th colspan="2">Thống kê khóa học</th>
                                
                            </tr>
                            <tr>
                                <td>Số khóa học:</td>
                                <td>5</td>
                            </tr>
                           <tr>
                            <th colspan="2">Số khóa học</th>
                           
                           </tr>
                           <tr>
                            <td>Số lớp học</td>
                            <td>20</td>
                           </tr>
                           <tr>
                            <td>Số lớp đang hoạt động</td>
                            <td>10</td>
                           </tr>
                           <tr>
                            <td>Số lớp đã kết thúc</td>
                            <td>4</td>
                           </tr>
                           <tr>
                            <td>Số lớp đang chờ</td>
                            <td>6</td>
                           </tr>
                           <tr>
                            <th colspan="2">Thống kê sinh viên</th>
                           
                           </tr>
                           <tr>
                            <td>Tổng số SV</td>
                            <td>1000</td>
                           </tr>
                           <tr>
                            <td>Số SV chờ lớp</td>
                            <td>200</td>
                           </tr>
                           <tr>
                            <td>Số SV đang học</td>
                            <td>600</td>
                           </tr>
                           <tr>
                            <td>Số SV bảo lưu/đình chỉ</td>
                            <td>50</td>
                           </tr>
                           <tr>
                            <td>Số SV tốt nghiệp</td>
                            <td>150</td>
                           </tr>    
                        </table>`
}
rendermainbody();
