$(document).ready(function () {
    var i= 1;
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });
    function kiemTraName() {
        var re = /^([A-Z])([a-z]+)(\s[A-Z][a-z]+)*/;
        if ($("#txtName").val()=="") {
            $("#tbName").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtName").val())) {
            $("#tbName").html("* Nhập tên theo mẫu : Nguyen Van A");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#txtName").blur(kiemTraName);
    function kiemTraAo() {
        var re =/^[0-9]*$/;
        if ($("#txtAo").val()=="") {
            $("#tbAo").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtAo").val())) {
            $("#tbAo").html("* Số áo không hợp lệ ");
            return false;
        }
        $("#txtAo").html("*");
        return true;
    }
    $("#txtAo").blur(kiemTraAo);

    function kiemTraClb() {
        var re = /([A-Z][a-z]+)((\s[A-Z][a-z]+)|(\s\d)+)+/;
        if ($("#txtClb").val()=="") {
            $("#tbClb").html("* bắt buộc nhập");
            return false
        }
        if (!re.test($("#txtClb").val())) {
            $("#tbClb").html("* Nhập tên theo mẫu : Ha Noi");
            return false;
        }
        $("#tbClb").html("*");
        return true;
    }
    $("#txtClb").blur(kiemTraClb);

    function kiemTraNgay() {
        if ($("#txtNgay").val=="") {
            $("#tbNgay").html("* bắt buộc nhập");
            return false;
        }
        var today = new Date();
        var day = new Date($("#txtNgay").val());
        today= today.setDate(today.getDate() + 30);
        if (today>day) {
            $("#tbNgay").html("Phãi sau ngày hiện tại 30 ngày");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    }
    $("#txtNgay").blur(kiemTraNgay);

    function kiemTraSDT() {
        var re =/^0[0-9]{2}-[0-9]{3}-[0-9]{4}$/;
        if ($("#txtSDT").val()=="") {
            $("#tbSDT").html("* bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtSDT").val())) {
            $("#tbSDT").html("* Nhập số phone theo mẫu : 0XX-XXX-XXXX");
            return false;
        }
        $("#txtSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(kiemTraSDT);

    $("#btnSave").click(function () {
        if (!kiemTraName() || !kiemTraAo() || !kiemTraClb() || !kiemTraNgay() || !kiemTraSDT) {
          $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin ")
          return false;
        }
        var ten = $("#txtName").val();
        var ao = $("#txtAo").val();
        var clb = $("#txtClb").val();
        var ngay = $("#txtNgay").val();
        var sdt = $("#txtSDT").val();
        var anh = $("#txtAnh").val().substring(12);
        var them = "<tr><td>" + (i++) + "</td><td>" + ten + "</td><td>" + ao + "</td><td>" + clb + 
        "</td><td>" + ngay + "</td><td>" + sdt + "</td><td>" + anh + "</td></tr>"
        $("table tbody").append(them);
        $("#myModal").modal("hide");
        return true;
    })
})