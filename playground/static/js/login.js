const NAVBAR = `  <nav class="navbar">
<div class="container">
  <a href="#" class="navbar-brand fs-3"><svg height="32" width="127" xmlns="http://www.w3.org/2000/svg"
      class="VaTmTfAskY3Qi32pPFXh7">
      <mask id="td-logo-wordmark_svg__a" fill="#fff">
        <path d="M0 0h32.042v32H0z" fill-rule="evenodd"></path>
      </mask>
      <g fill="none" fill-rule="evenodd">
        <path
          d="M54.778 19.281c0 .518.087 1.02.26 1.499a3.757 3.757 0 001.977 2.167c.473.222 1.01.333 1.61.333.599 0 1.136-.111 1.609-.333a3.808 3.808 0 001.214-.888c.335-.37.59-.796.763-1.28.17-.478.257-.98.257-1.498a4.45 4.45 0 00-.257-1.5 3.807 3.807 0 00-.763-1.278 3.814 3.814 0 00-1.214-.888 3.754 3.754 0 00-1.61-.335c-.598 0-1.136.113-1.609.335a3.767 3.767 0 00-1.978 2.165 4.44 4.44 0 00-.259 1.501m-3.204.16c0-1.062.189-2.026.567-2.892a6.73 6.73 0 011.533-2.221 6.757 6.757 0 012.29-1.426 7.912 7.912 0 012.82-.502c.993 0 1.933.168 2.817.502a6.79 6.79 0 012.293 1.426 6.759 6.759 0 011.533 2.221c.377.866.566 1.83.566 2.892s-.189 2.026-.566 2.892a6.76 6.76 0 01-1.533 2.221 6.75 6.75 0 01-2.293 1.424 7.853 7.853 0 01-2.817.502 7.863 7.863 0 01-2.82-.502 6.717 6.717 
          0 01-2.29-1.424 6.73 6.73 0 01-1.533-2.221c-.378-.866-.567-1.83-.567-2.892m19.225-.16c0 .518.087 1.02.26 1.499a3.76 3.76 0 001.977 2.167c.473.222 1.01.333 1.61.333.599 0 1.136-.111 1.609-.333a3.796 3.796 0 001.213-.888 3.77 3.77 0 00.764-1.28c.17-.478.257-.98.257-1.498a4.45 4.45 0 00-.257-1.5 3.798 3.798 0 00-.764-1.278 3.802 3.802 0 00-1.213-.888 3.753 3.753 0 00-1.61-.335c-.599 0-1.136.113-1.609.335a3.771 3.771 0 00-1.977 2.165c-.173.482-.26.984-.26 1.501zm8.041 4.57h-.056c-.483.807-1.13 1.394-1.948 1.76a6.403 6.403 0 01-2.644.549c-1.04 0-1.962-.177-2.77-.535a6.198 6.198 0 01-2.074-1.472 6.26 6.26 0 01-1.309-2.2 8.122 8.122 0 01-.444-2.721c0-.971.156-1.88.474-2.723a6.76 6.76 0 011.32-2.2 6.112 6.112 0 012.046-1.47 6.324 6.324 0 012.616-.537c.632 0 1.19.065 1.672.192.483.13.908.293 1.28.497.371.202.687.416.947.645.258.23.474.454.639.673h.084V7.038c0-.33.264-.718.728-.718h1.887c.436 0 .726.362.726.718v18.074c0 .46-.394.719-.726.719H79.57a.733.733 0 01-.73-.718zm8.621-4.57c0 .518.087 1.02.26 1.499a3.752 3.752 0 001.978 2.167c.472.222 1.01.333 1.609.333s1.136-.111 1.609-.333a3.801 3.801 0 001.214-.888c.335-.37.59-.796.763-1.28.171-.478.257-.98.257-1.498a4.45 
          4.45 0 00-.257-1.5 3.802 3.802 0 00-.763-1.278 3.807 3.807 0 00-1.214-.888 3.754 3.754 0 00-1.61-.335c-.598 0-1.136.113-1.608.335a3.763 3.763 0 00-1.978 2.165c-.173.482-.26.984-.26 1.501m-3.204.16c0-1.062.189-2.026.567-2.892a6.73 6.73 0 011.533-2.221 6.757 6.757 0 012.29-1.426 7.912 7.912 0 012.82-.502c.993 0 1.933.168 2.816.502a6.79 6.79 0 012.293 1.426 6.759 6.759 0 011.533 2.221c.378.866.567 1.83.567 2.892s-.19 2.026-.567 2.892a6.76 6.76 0 01-1.533 2.221 6.75 6.75 0 01-2.293 1.424 7.853 7.853 0 01-2.816.502 7.862 7.862 0 01-2.82-.502 6.717 6.717 0 01-2.29-1.424 6.73 6.73 0 01-1.533-2.221c-.378-.866-.567-1.83-.567-2.892M100.278 7.92c0-.516.194-.963.581-1.347.39-.382.88-.573 1.474-.573.595 0 1.096.182 1.501.547.405.364.61.822.61 1.373s-.205 1.009-.61 1.373c-.405.365-.906.547-1.5.547-.595 0-1.085-.191-1.475-.575-.387-.382-.58-.829-.58-1.345m13.756 8.531c-.329 0-.571-.253-.613-.363-.274-.73-1.148-1.005-1.854-1.005-1.113 0-1.986.524-1.986 1.425 0 .872.845 1.05 1.367 1.21.573.177 1.668.42 2.271.564a7.297 7.297 0 011.719.643c1.752.924 2.001 2.378 2.001 3.254 0 3.23-3.15 4.301-5.336 4.301-1.686 0-4.853-.26-5.548-3.525-.068-.317.21-.806.718-.806h1.82c.36 0 .601.266.671.474.235.657.979 1.152 2.233 1.152 1.346 0 2.142-.542 2.142-1.263 0-.466-.26-.882-.6-1.115-1.021-.704-3.545-.783-4.915-1.524-.525-.283-1.842-.932-1.842-3.142 0-3.046 2.726-4.331 5.12-4.331 3.532 0 4.828 2.267 4.974 3.107.081.464-.175.944-.688.944zm3.226-1.826V13.25c0-.329.262-.723.728-.723h1.799V9.149c0-.361.249-.581.437-.662l1.921-.827c.562-.227 1.016.229 1.016.668v4.199h2.977c.46 0 .734.395.734.723v1.377c0 .4-.362.725-.733.725h-2.978v5.821c0 .665-.019 1.185.239 1.57.236.352.583.482 1.278.482.2 0 .377-.033.527-.083a.723.723 0 01.883.319c.22.418.47.878.647 1.208a.735.735 0 01-.316.995c-.571.274-1.362.496-2.447.496-.899 0-1.408-.097-1.977-.291a3.405 3.405 0 01-1.441-1.003c-.33-.396-.493-.928-.614-1.519-.124-.59-.153-1.308-.153-2.085v-5.91h-1.794c-.47 0-.733-.402-.733-.727m-75.94 0V13.25c0-.329.255-.723.71-.723h2.001V9.149c0-.361.242-.581.426-.662l1.87-.827c.548-.227.99.229.99.668v4.199h2.9c.448 0 .715.395.715.723v1.377a.743.743 0 01-.714.725h-2.9v5.821c0 .665-.019 1.185.232 1.57.23.352.568.482 1.245.482.194 
          0 .367-.033.514-.083a.697.697 0 01.86.319c.213.418.458.878.63 1.208.188.362.036.826-.309.995-.556.274-1.326.496-2.382.496-.876 0-1.372-.097-1.926-.291a3.32 3.32 0 01-1.404-1.003c-.321-.396-.48-.928-.598-1.519-.12-.59-.149-1.308-.149-2.085v-5.91h-1.997c-.459 0-.715-.402-.715-.727m60.296 11.215h1.81c.384 0 .697-.32.697-.713V13.433a.707.707 0 
          00-.696-.713h-1.811a.707.707 0 00-.697.713v11.694c0 .392.313.713.697.713"
          fill="#e44332"></path>
        <path
          d="M4.005 0A4.014 4.014 0 000 4v24c0 2.2 1.802 4 4.005 4h24.032c2.203 0 4.005-1.8 4.005-4V4c0-2.2-1.802-4-4.005-4z"
          fill="#e44332" mask="url(#td-logo-wordmark_svg__a)"></path>
        <g fill="#fff">
          <path
            d="M6.792 15.157l12.865-7.479c.275-.16.289-.653-.02-.83-.308-.178-.893-.514-1.111-.643a1.004 1.004 0 00-.991.012c-.154.09-10.433 6.06-10.776 6.256-.412.236-.92.24-1.33 0L0 9.287v2.708c1.321.778 4.607 2.71 5.403 3.165.475.27.93.264 1.389-.003">
          </path>
          <path
            d="M6.792 20.277l12.865-7.479c.275-.16.289-.653-.02-.83-.308-.178-.893-.514-1.111-.643a1.004 1.004 0 00-.991.012c-.154.09-10.433 6.06-10.776 6.256-.412.236-.92.24-1.33 0L0 14.407v2.708c1.321.778 4.607 2.71 5.403 3.165.475.27.93.264 1.389-.003">
          </path>
          <path
            d="M6.792 25.717l12.865-7.479c.275-.16.289-.653-.02-.83-.308-.178-.893-.514-1.111-.643a1.004 1.004 0 00-.991.012c-.154.09-10.433 6.06-10.776 6.256-.412.236-.92.24-1.33 0L0 19.847v2.708c1.321.778 4.607 2.71 5.403 3.165.475.27.93.264 1.389-.003">
          </path>
        </g>
      </g>
    </svg></a>
</div>
</nav>`;
const LOGIN_FORM = ` <main>
<div class="container d-flex align-items-center">
  <div class="form-container w-50 d-flex flex-column">
    <h1 class="mb-5">Log In</h1>
    <form action="POST" class="d-flex flex-column">
      <div class="input-field d-flex flex-column">
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email...">
      </div>
      <div class="password">
        <div class="password-field">
          <span class="d-flex">
            <label for="password">
              <span>Password</span>
            </label>
          </span>
          <div class="d-flex justify-content-between">
            <input id="password" type="password" placeholder="Enter your password...">
            <button type="button">
              <i class="far fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
      <input type="submit" class="primary-btn" value="Log in">
      <span class="signup" href="signup.html">Dont have an account? <a href="/signup">Sign up</a></span>
    </form>
  </div>
  <img src=/static/playground/imgs/146cee1560ccce6fd533995fcd90e295.png alt="screens" class="d-block img-fluid w-50">
</div>
</main>`;
async function verifyToken() {
  const token = {
    token: localStorage.getItem("todoist_access_token"),
  };
  let response = await fetch("http://127.0.0.1:8000/auth/jwt/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(token),
  });
  let status = response.status;
  if (status !== 200) {
    document.body.insertAdjacentHTML("afterbegin", NAVBAR);
    document.querySelector("nav").insertAdjacentHTML("afterend", LOGIN_FORM);

    // Consts
    const passwordInputCon = document.querySelector(".password");
    const passwordInput = document.getElementById("password");
    const emailInputCon = document.querySelector(".input-field:nth-child(1)");
    const emailInput = document.getElementById("email");
    const visiblityToggle = document.querySelector(".fa-eye");
    const loginBtn = document.querySelector("[type=submit]");

    // functions
    function switchVisiblity() {
      if (passwordInput.type == "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    }

    function validateEmail(mail) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }
      return false;
    }

    function validatePassword(password) {
      if (password == "") {
        let error = "Fill the password please!";
        return [false, error];
      }

      if (password.length < 8) {
        let error = "Password length must be at least 8 characters";
        return [false, error];
      } else {
        return [true];
      }
    }

    async function generateToken(username, password) {
      let data = { username: username, password: password };
      let getTokenResponse = await fetch(
        "http://127.0.0.1:8000/auth/jwt/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      let token = await getTokenResponse.json();
      localStorage.setItem("todoist_access_token", token["access"]);
    }

    async function login() {
      let data = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      let loginResponse = await fetch("http://127.0.0.1:8000/validate-creds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return loginResponse;
    }

    function showInvalidEmailAlert() {
      let invalidEmailAlert = document.createElement("p");
      invalidEmailAlert.classList.add("error-message");
      invalidEmailAlert.textContent = "Please input a valid email";
      emailInputCon.append(invalidEmailAlert);
      setTimeout(() => {
        let errorMessage = document.querySelector(".error-message");
        emailInputCon.removeChild(errorMessage);
      }, 2000);
    }

    function showInvalidPassAlert(message){
      let invalidPasswordAlert = document.createElement("p");
      invalidPasswordAlert.classList.add("error-message");
      invalidPasswordAlert.textContent=message;
      passwordInputCon.append(invalidPasswordAlert);
      setTimeout(() => {
        let errorMessage = document.querySelector(".error-message");
        passwordInputCon.removeChild(errorMessage);
      }, 2000);
    }
    
    function showInvalidCredsAlert(){
      let errorAlert = document.createElement("p");
      errorAlert.classList.add("error-message");
      errorAlert.textContent =
              "You have entered wrong email or password !";
            passwordInputCon.append(errorAlert);
            setTimeout(() => {
              let errorMessage = document.querySelector(".error-message");
              passwordInputCon.removeChild(errorMessage);
            }, 2000);
    }

    // Events
    visiblityToggle.addEventListener("click", switchVisiblity);

    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!validateEmail(email.value)) {
        showInvalidEmailAlert();
      } else if (!validatePassword(passwordInput.value)[0]) {
        showInvalidPassAlert(validatePassword(passwordInput.value)[1]);     
      } else {
        let response = login();
        response = response.then(async (response) => {
          if (response.status == 404 || response.status == 406) {
            showInvalidCredsAlert();                      
          } else {
            try {
              let username = await response.json();
              username = username["username"];
              await generateToken(username, passwordInput.value);
              window.location.href = "http://127.0.0.1:8000/inbox";
            } catch (e) {
              console.log(e);
            }
          }
        });
      }
    });
  } else {
    window.location.href = "http://127.0.0.1:8000/inbox";
  }
}

verifyToken();
