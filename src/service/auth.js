import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";

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
}

export default Auth;