  function ValidateForEmpty(controlID, errorControlID, errorMessage) {
        var refToControlToValidate = document.getElementById(controlID);

        var refToControlToShowErrorMessage =
          document.getElementById(errorControlID);

        if (refToControlToValidate.value == "") {
          refToControlToShowErrorMessage.innerText = errorMessage;
        } else {
          refToControlToShowErrorMessage.innerText = "";
          console.log(refToControlToValidate.value);
        }
      }