document.getElementById('editStudent').addEventListener('click', function() {
    let studentNames = prompt("輸入學生姓名，一行一個名字：").split('\n');
    let studentContainer = document.getElementById('students');
    studentContainer.innerHTML = '';
    studentNames.forEach(name => {
        let button = document.createElement('button');
        button.textContent = name;
        button.classList.add('student-button');
        button.addEventListener('click', function() {
            document.querySelectorAll('.student-button').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
        studentContainer.appendChild(button);
    });
});

document.getElementById('editAssignment').addEventListener('click', function() {
    let assignmentNames = prompt("輸入作業名稱，一行一個名稱：").split('\n');
    let assignmentContainer = document.getElementById('assignments');
    assignmentContainer.innerHTML = '';
    assignmentNames.forEach(name => {
        let button = document.createElement('button');
        button.textContent = name;
        button.classList.add('assignment-button');
        button.addEventListener('click', function() {
            document.querySelectorAll('.assignment-button').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
        assignmentContainer.appendChild(button);
    });
});

document.querySelectorAll('.status-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.status-button').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

document.getElementById('saveToTemp').addEventListener('click', function() {
    let selectedStudent = document.querySelector('.student-button.selected');
    let selectedAssignment = document.querySelector('.assignment-button.selected');
    let selectedStatus = document.querySelector('.status-button.selected');

    if (selectedStudent && selectedAssignment && selectedStatus) {
        let tempStorage = document.getElementById('tempStorage');
        let resultText = `${selectedStudent.textContent} - ${selectedAssignment.textContent} - ${selectedStatus.textContent}`;
        let resultItem = document.createElement('div');
        resultItem.textContent = resultText;
        tempStorage.appendChild(resultItem);
    } else {
        alert("請確認已選擇學生、作業和狀態。");
    }
});

document.getElementById('clearTemp').addEventListener('click', function() {
    document.getElementById('tempStorage').innerHTML = '';
});
