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

class home{
  render()
  {
     return `<h1>Welcome Home</h1>`;
  }
}

function contact() {
        return `<h1>Contact Us Here!</h1>`;
      }

      
      function about() {
        return `<h1>About Us!</h1>`;
      }

       function NotFound() {
        return `<h1>Not Found!</h1>`;
      }