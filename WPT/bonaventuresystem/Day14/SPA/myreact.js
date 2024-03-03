  function LoadUI(pageName) {
        var refToContainer = document.getElementById("root");
        var content = "";
        switch (pageName) {
          case "home":
            var obj = new home();
            content = obj.render();
            break;
          case "about":
            content = about();
            break;
          case "contact":
            content = contact();
            break;
          default:
            content = NotFound();
        }
        refToContainer.innerHTML = content;
      }