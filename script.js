function run() {
        let htmlcode = document.getElementById("html-code").value;
        let CssCode = document.getElementById("Css-code").value;
        let jsCode = document.getElementById("JS-code").value;
        let output = document.getElementById("output");

        output.contentDocument.body.innerHTML =
          htmlcode + "<style>" + CssCode + "</style>";

        output.contentWindow.eval(jsCode);
      }
