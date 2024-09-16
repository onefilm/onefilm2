const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Login Form
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Mencegah reload halaman
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === "" || password === "") {
        alert("Email dan Password harus diisi");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Login berhasil
        alert(`Selamat datang ${userCredential.user.email}`);
        window.location.href = 'home.html';  // Mengarahkan ke home.html setelah login
    })
    .catch((error) => {
        alert(error.message);
    });
});

// Sign-up Form
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Mencegah reload halaman
    const username = document.getElementById('signupUsername').value; // Ambil username
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (username === "" || email === "" || password === "") {
        alert("Username, Email, dan Password harus diisi");
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Akun berhasil dibuat
        const user = userCredential.user;

        // Simpan username ke profile user
        return user.updateProfile({
            displayName: username
        }).then(() => {
            // Simpan informasi pengguna ke Realtime Database
            return firebase.database().ref('users/' + user.uid).set({
                username: username,
                email: email
            });
        }).then(() => {
            alert(`Akun berhasil dibuat untuk: ${user.email} dengan username ${user.displayName}`);
            window.location.href = 'home.html';  // Arahkan ke halaman home setelah berhasil
        });
    })
    .catch((error) => {
        alert(error.message);
    });
});