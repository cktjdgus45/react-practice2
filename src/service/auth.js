import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

class Auth {
    constructor() {
        this.auth = getAuth();
        this.provider = '';
    }
    login(text) {
        switch (text) {
            case 'Google':
                this.provider = new GoogleAuthProvider();
                return this.socialLogin();
            case 'Github':
                this.provider = new GithubAuthProvider();
                return this.socialLogin();

            default:
                throw Error('unexpected auth provider');
        }
    }
    async socialLogin() {
        return await signInWithPopup(this.auth, this.provider)
    }
    logout() {
        signOut(this.auth)
            .then(() => console.log('logout success!'))
            .catch((e) => console.log(e));
    }
    observeAuthState() {
        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                console.log(user);
                return user;
            } else {
                console.log('user signed out!')
            }
        })
    }
}

export default Auth;