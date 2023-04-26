window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });

const createInnerHtml = () => {

const headerHtml =
       `<th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>`;

let innerHtml = `${headerHtml}`;
let empPayrollList = createEmployeePayrollJSON();

for(const empPayrollData of empPayrollList){
innerHtml = `${innerHtml}
      <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
        <img name="${empPayrollData._id}" onclick="remove(this)" src="Images/delete.png"  alt="delete">
        <img name="${empPayrollData._id}" onclick="update(this)" src="Images/Update1.png"  alt="edit">
        </td>
    </tr>`;
}
document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
      {
        _name: 'Narayan Mahadevan',
        _gender: 'Male',
        _department: [
          'HR',
          'Finance'
        ],
        _salary: 500000,
        _startDate: '29 Oct 2019',
        _note: '',
        _id: new Date().getTime(),
        _profilePic: 'Images/Ellipse -8.png'
      },
      {
        _name: 'Anjali Rawke',
        _gender: 'Female',
        _department: [
          'Engineering'
        ],
        _salary: 5000000,
        _startDate: '30 Sept 2022',
        _note: '',
        _id: new Date().getTime() + 1,
        _profilePic: "Images/Profile1.png"
      }
    ];
    return employeePayrollListLocal;
  }
  const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
  }