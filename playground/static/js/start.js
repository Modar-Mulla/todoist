async function verifyToken() {
  const token = {
    token: localStorage.getItem("todoist_access_token"),
  };
  let response =await fetch("http://127.0.0.1:8000/auth/jwt/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(token),
  });
  let status = response.status;
  if (status == 200) {
    window.location.href = "/inbox";
    
  } else {
    const loadingPage = document.querySelector(".loading");
    document.body.removeChild(loadingPage);
  }
}

verifyToken();
