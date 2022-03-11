import { getDatabase, ref, set, get, child } from "firebase/database";

class DB {
    constructor() {
        this.db = getDatabase();
        this.data = '';
    }

    writeUserData(uid) {
        set(ref(this.db, 'users/' + uid), {
            uid
        });
    }
    writeCardData(id, name, company, title, email, message, tema, profile) {
        set(ref(this.db, 'cards/' + id), {
            id,
            name,
            company,
            title,
            email,
            message,
            tema,
            profile,
        });
    }
    readData(url, setData) {
        setData = setData || {};
        const dbRef = ref(getDatabase());
        get(child(dbRef, url)).then((snapshot) => {
            if (snapshot.exists()) {
                setData && setData(Object.values(snapshot.val()));
            } else {
                console.log("No data available");
                setData('');
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    removeData(url, id) {
        set(ref(this.db, url + id),
            null
        );
    }
}


export default DB;