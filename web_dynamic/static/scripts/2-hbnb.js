$(document).ready(function(){
    const url = 'http://0.0.0.0:5001/api/v1/status/';
    $.get(url, function (response) {
      if (response.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });

    let amenities_id = {};
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            amenities_id[$(this).data('id')] = $(this).data('name');
        }
        else if($(this).prop("checked") == false){
            delete amenities_id[$(this).attr('data-id')];;
        }
        $('.amenities H4').text(Object.values(amenities).join(', '));
    });
});
