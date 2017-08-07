$(function(){
    var $file = $('#file');
    var $imgUrl = $('#img-url');
    var $preview = $('#preview');
    var $title = $('#title');
    var $upload = $('#login-btn');

    $file.change(function() {
        var file = this.files[0];

        if (file) {
            var reader = new FileReader();
            reader.onload = function(event) {
                $preview.attr('src', event.target.result);
                $preview.show();
            }
            reader.readAsDataURL(file);
            $imgUrl.attr('disabled', 'disabled');
        } else {
            $preview.attr('src', '');  
            $imgUrl.removeAttr('disabled');
        }
    });

    $imgUrl.change(function() {
        if($imgUrl.val()) {
            $file.attr('disabled', 'disabled');
            $preview.attr('src', $imgUrl.val());
            $preview.show();
        } else {
            $preview.attr('src', '');  
            $file.removeAttr('disabled');
        }
    });
    
    $title.change(function() {
        enableUpload();
    })

    var enableUpload = () => {
        if($title.val() && $imgUrl.val() !== null || $title.val() && $file.val() !== null) {
            $upload.removeAttr('disabled');
        }
    }
})