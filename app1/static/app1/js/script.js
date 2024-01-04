$(document).ready(function () {
    $('#signup-form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: '{% url "signup" %}',
            data: $(this).serialize(),
            success: function (data) {
                if (data.success) {
                    // Đăng ký thành công, thực hiện các hành động bạn muốn ở đây
                    alert('Đăng ký thành công!');
                } else {
                    // Xử lý lỗi và hiển thị cho người dùng
                    alert('Đăng ký không thành công. Lỗi: ' + JSON.stringify(data.errors));
                }
            }
        });
    });
});