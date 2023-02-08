function border(elementId) {
    document.getElementById("th_btn_1").classList.remove('th_btn_active');
    document.getElementById("th_btn_2").classList.remove('th_btn_active');
    document.getElementById("th_btn_3").classList.remove('th_btn_active');
    document.getElementById("th_btn_4").classList.remove('th_btn_active');
    document.getElementById(elementId).classList.add('th_btn_active');
}