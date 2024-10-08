var signUpForm = document.getElementById("SignUpForm");
var postForm = document.getElementById("PostForm");

const profilePhotoImg = document.getElementById("profilePhotoImg");
const profilePhotoInput = document.getElementById("profilePhotoInput");




signUpForm.addEventListener('submit', function (e) {
  e.preventDefault();
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Account created successfully!",
    showConfirmButton: false,
    timer: 2000,
  });
  postForm.classList.remove("hidden");
  signUpForm.classList.add("hidden");
  profilePhotoImg.classList.remove("hidden");

});


profilePhotoImg.addEventListener("click", () => {
  profilePhotoInput.click();
});

profilePhotoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    profilePhotoImg.src = reader.result;
  };
  reader.readAsDataURL(file);
});
