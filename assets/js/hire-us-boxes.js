$('#opt-1,#opt-2,#opt-3,#opt-4,#opt-5,#opt-6').change(function() {

    if ($('#opt-1').prop('checked') === true) {
      licSelect = true;
      $('#opt-2,#opt-3,#opt-4,#opt-5,#opt-6').attr("disabled", true);
    } else {
      licSelect = false;
      if (licSelect === false) {
        $('#opt-2,#opt-3,#opt-4,#opt-5,#opt-6').removeAttr("disabled");
      }
  
    }
  
  
    if ($('#opt-2').prop('checked') === true) {
      licSelect = true;
      $('#opt-1,#opt-3,#opt-4,#opt-5,#opt-6').attr("disabled", true);
  
    } else {
      if (licSelect === false) {
        $('#opt-1,#opt-3,#opt-4,#opt-5,#opt-6').removeAttr("disabled");
      }
    }
  
    if ($('#opt-3').prop('checked') === true) {
      licSelect = true;
      $('#opt-1,#opt-2,#opt-4,#opt-5,#opt-6').attr("disabled", true);
    } else {
      if (licSelect === false) {
        $('#opt-1,#opt-2,#opt-4,#opt-5,#opt-6').removeAttr("disabled");
      }
  
    }
  
    if ($('#opt-4').prop('checked') === true) {
      licSelect = true;
      $('#opt-1,#opt-2,#opt-3,#opt-5,#opt-6').attr("disabled", true);
  
    } else {
      if (licSelect === false) {
        $('#opt-1,#opt-2,#opt-3,#opt-5,#opt-6').removeAttr("disabled");
      }
    }

    if ($('#opt-5').prop('checked') === true) {
        licSelect = true;
        $('#opt-1,#opt-2,#opt-3,#opt-4,#opt-6').attr("disabled", true);
    
      } else {
        if (licSelect === false) {
          $('#opt-1,#opt-2,#opt-3,#opt-4,#opt-6').removeAttr("disabled");
        }
      }

      if ($('#opt-6').prop('checked') === true) {
        licSelect = true;
        $('#opt-1,#opt-2,#opt-3,#opt-4,#opt-5').attr("disabled", true);
    
      } else {
        if (licSelect === false) {
          $('#opt-1,#opt-2,#opt-3,#opt-4,#opt-5').removeAttr("disabled");
        }
      }


  
  });
  