export function getAuthForm () {
    return `
    <form class="auth-form">
    <div class="mui-textfield mui-textfield--float-label">
        <input type="email" id="email" class="email" required>
        <label for="email">Email</label>
    </div>
    <div class="mui-textfield mui-textfield--float-label">
    <input type="password" id="password" class="password" required>
    <label for="email">Пароль</label>
    </div>
    <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary">Войти</button>
    </form>
    `
}

export const authWithEmailAndPassword = (email, password) => {
    const apiKey = 'AIzaSyDyXWSvsDXK3R5UdtiXMlZynH77PYCdsEA'
    return fetch (`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,{
    method: 'POST',
    body: JSON.stringify ({
        email: email, password: password,
        returnSecureToken: true
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => data.idToken)
}