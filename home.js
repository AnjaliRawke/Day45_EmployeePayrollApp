window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});

// Template literal ES6 feature
const createInnerHtml=() => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
          <td><img class="profile" src="Images/Ellipse -8.png" alt=""></td>
          <td>Narayan Mahadevan</td>
          <td>Male</td>
          <td><div class="dept-label">HR</div>
              <div class="dept-label">Finance</div></td>
          <td>3000000</td>
          <td>1 Nov 2020</td>  
          <td>
              <img name="1" onclick="remove(this)" src="Images/delete.png" alt="delete">
              <img name="1" onclick="update(this)" src="Images/Update1.png" alt="edit">
          </td>  
        </tr>
        `;
        document.querySelector('#table-display').innerHTML=innerHtml;
}