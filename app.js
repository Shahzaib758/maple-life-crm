// Header Section

// Notification Section
function activeNotification() {
    const active_notification = document.querySelector('.notification-box');
    const user_box = document.querySelector('.user-box');

    const isActive = user_box.classList.contains('user-box-active');
    if (isActive) {
        user_box.classList.remove('user-box-active');
    }

    active_notification.classList.toggle('notification-box-active');

}

// User Section
function userActive() {
    const user_box = document.querySelector('.user-box');
    const notification = document.querySelector('.notification-box');

    const isActive = notification.classList.contains('notification-box-active');
    if (isActive) {
        notification.classList.remove('notification-box-active');
    }

    user_box.classList.toggle('user-box-active')
}

function changeBtn(content_Name) {
    let add_company_btn = document.querySelector('.add-company-btn');
    let add_employee_btn = document.querySelector('.add-employee-btn');
    let download_btn = document.querySelector('.download-btn');
    let edit_btn = document.querySelector('.edit-btn');

    // Filter Fields
    let filter_fields = document.querySelectorAll('.filter-fields > select');

    filter_fields.forEach(element => {
        element.style.display = 'none';
    })


    // Year Month Fields
    let year_month_fields = document.querySelector('.year-month-fields');
    year_month_fields.style.display = 'none';

    add_company_btn.style.display = "none";
    add_employee_btn.style.display = "none";
    download_btn.style.display = "none";
    edit_btn.style.display = "none";

    if (content_Name === 'Company') {
        add_company_btn.style.display = "block";
        filter_fields[0].style.display = 'block';

    }
    else if (content_Name === 'Employees') {
        add_employee_btn.style.display = "block";
        filter_fields[1].style.display = 'block';
    }
    else if (content_Name === 'Billing') {
        download_btn.style.display = "block";
        filter_fields[2].style.display = 'block';
        year_month_fields.style.display = 'flex';
    }
    else if (content_Name === 'Resources') {
        edit_btn.style.display = "block";
        filter_fields[3].style.display = 'block';
    }
}

function changeSideBtn(content_Name) {
    let company_btns = document.getElementsByClassName('company-tab-btn');
    let employee_btns = document.getElementsByClassName('employee-tab-btn');
    let news_btns = document.getElementsByClassName('news-letter-tab-btn');
    let sideBarBtn = document.getElementsByClassName('active-side-bar');

    company_btns[0].style.display = "none";
    employee_btns[0].style.display = "none";
    news_btns[0].style.display = "none";

    sideBarBtn[0].style.pointerEvents = 'all';

    if (content_Name === 'Company') {
        company_btns[0].style.display = "flex";
    }

    else if (content_Name === 'Employees') {
        employee_btns[0].style.display = "flex";
    }

    else if (content_Name === 'Billing') {
        sideBarBtn[0].style.pointerEvents = 'none';
    }

    else if (content_Name === 'Resources') {
        news_btns[0].style.display = "flex";
    }
}

// Main Tabs
function openMainTabContent(e, content_Name) {
    changeBtn(content_Name);
    changeSideBtn(content_Name);

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabscontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-main-tab", "");
    }
    document.getElementById(content_Name).style.display = "block";
    e.target.className += " active-main-tab"
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Side Section on Click
// Active Side section
function activeSideBar(e) {
    const sideBar = document.querySelector(".side-section");
    e.target.classList.toggle('change-btn-style');
    sideBar.classList.toggle('side-section-active');

    const tablinks_text = document.querySelectorAll('.tablinks-text');

    for (let i = 0; i < tablinks_text.length; i++) {
        tablinks_text[i].classList.toggle('hidden')
    }
}

// Modals
// Add New Company Modal
const open_company_modal = document.querySelector('.add-company-btn');
const add_company = document.querySelector('.add-company-modal');
const close_company_modal = document.querySelector('.close-company-model');

open_company_modal.addEventListener('click', function () {
    add_company.classList.add('active-modal');
})

close_company_modal.addEventListener('click', () => {
    add_company.classList.remove('active-modal');
})

// Add New Employee Modal
const open_employee_modal = document.querySelector('.add-employee-btn');
const add_employee = document.querySelector('.add-employee-modal');
const close_employee_modal = document.querySelector('.close-employee-model');

open_employee_modal.addEventListener('click', function () {
    add_employee.classList.add('active-modal');
})

close_employee_modal.addEventListener('click', () => {
    add_employee.classList.remove('active-modal');
})

// Employee Detail Modal
const open_employee_detail_modal = document.querySelectorAll('.employee-detail-btn');
const add_employee_detail = document.querySelector('.employee-detail-modal');
const close_employee_detail_modal = document.querySelector('.close-detail-model');

open_employee_detail_modal.forEach(Element => {
    Element.addEventListener('click', function () {
        add_employee_detail.classList.add('active-modal');
    })
})

close_employee_detail_modal.addEventListener('click', () => {
    add_employee_detail.classList.remove('active-modal');
})

// (Add Company, New Employee, Employee Dtails )Tabs
function openSubTab(e, content, tabLinkClass, tabContentClass) {
    var i, tabContent, tablinks;
    tabContent = document.getElementsByClassName(tabContentClass);
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName(tabLinkClass);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].children[1].classList.remove('active')
    }
    document.getElementById(content).style.display = "block";
    e.path[1].childNodes[3].classList.add("active");
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen-1").click();
document.getElementById("defaultOpen-2").click();
document.getElementById("defaultOpen-3").click();

// Global Accordion
const Accordion = () => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}
Accordion();

function activeSendEmailButton() {
    const btn = document.querySelector('#acc-active');
    btn.classList.toggle('s-e-btn-active');
}

// Enable Edit and Disable Edit

let input_field = document.getElementsByClassName('input-field');
let decision_button = document.getElementsByClassName('employee-detail-decision-button');
let edit_btn = document.getElementsByClassName('edit-action-section');

function enableEdit() {
    let i;
    for (i = 0; i < input_field.length; i++) {
        input_field[i].style.pointerEvents = 'all';
        input_field[i].style.border = '1px solid #ccc';

        // if any field is empty
        if (!input_field[i].value && !(input_field[i].tagName === 'BUTTON')) {
            input_field[i].style.border = '1px solid red';
        }
    }
    decision_button[0].style.display = 'flex';
    edit_btn[0].style.display = 'none'
}

function disableEdit() {
    let i;
    for (i = 0; i < input_field.length; i++) {
        input_field[i].style.pointerEvents = 'none';
        input_field[i].style.border = 'none';
    }
    decision_button[0].style.display = 'none';
    edit_btn[0].style.display = 'flex'

}

let counter = 1;
let file = false;

function goToImport2(e) {
    console.log(e.files[0].name);
    file = true;
    document.getElementById('nextForImport').click();
}

function changeDivForward() {
    if (counter === 1 && file) {
        document.getElementById('import1').classList.add('hide')
        document.getElementById('import2').classList.remove('hide')
        document.getElementById('point2').classList.add('bg-green')
        document.querySelector('.green-bar-1').style.width = "100%"
        ++counter;
    } else if (counter === 2) {
        document.getElementById('import2').classList.add('hide')
        document.getElementById('import3').classList.remove('hide')
        document.getElementById('point3').classList.add('bg-green')
        document.querySelector('.green-bar-2').style.width = "100%"
        ++counter;
    }
}


// Open And Close Import Employee Section
function HideUpload() {
    document.getElementById('activity-section').style.display = 'flex';
    document.getElementById('side-section').classList.toggle('side-section-active')
    document.getElementById('Employees').style.display = 'block';
    document.getElementById('upload').classList.remove('show-upload-modal');
}

function OpenUpload() {
    document.getElementById('activity-section').style.display = 'none';
    document.getElementById('side-section').classList.toggle('side-section-active')
    document.getElementById('Employees').style.display = 'none';
    document.getElementById('upload').classList.add('show-upload-modal');
}