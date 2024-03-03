  function Fetch(method, url) {
        return new Promise((resolve, reject) => {
          var helper = new XMLHttpRequest();
          helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
              var users = JSON.parse(helper.responseText);
              resolve(users.data);
            }
          };
          helper.open(method, url);
          helper.send();
        });
      }
