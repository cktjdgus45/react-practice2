import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import DB from './database';

class Auth {
    constructor() {
        this.auth = getAuth();
        this.provider = '';
        this.db = new DB();
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
    logout(uid) {
        signOut(this.auth)
            .then(() => this.db.removeData('users/', uid))
            .catch((e) => console.log(e));
    }
    observeAuthState() {
        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                console.log('user signed in!');
                this.db.writeUserData(user.uid);
            } else {
                console.log('user signed out!');
            }
        })
    }
}

export default Auth;