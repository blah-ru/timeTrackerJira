import {observable, computed, action} from 'mobx';
import * as indexedDB from '~/api/IndexedDB'
import StoreClass from "~/store/StoreClass";

class dbStore extends StoreClass{
    @observable db;

    constructor(rootStore){
        super(rootStore);
        this.db = null;
    }

    @action open=()=>{
        return new Promise((resolve, reject)=>{
            indexedDB.openDB()
                .then(result=> {
                    this.db = result;
                    resolve();
                });
        })
    }

    @action saveTrack=(value, key)=>indexedDB.put(this.db, 'tracks', value, key)

    @action deleteTrack=(key)=>indexedDB.del(this.db, 'tracks', key)

    @action loadTracks=()=>indexedDB.getAll(this.db, 'tracks')

    @action loadSettings=()=>indexedDB.getAll(this.db, 'settings')

    @action saveSetting=(value, key)=>indexedDB.put(this.db, 'settings', value, key)

    @action getSetting=(key)=>indexedDB.get(this.db, 'settings', key)

    @action loadComments=()=>indexedDB.getAllWithKeys(this.db, 'comments')

    @action saveComment=(value, key)=>indexedDB.put(this.db, 'comments', value, key)

    @action deleteComment=(key)=>indexedDB.del(this.db, 'comments', key)

    @action loadUtzJobTypes=()=>indexedDB.getAllWithKeys(this.db, 'utzJobTypes')

    @action saveUtzJobType=(value, key)=>indexedDB.put(this.db, 'utzJobTypes', value, key)

    @action deleteUtzJobType=(key)=>indexedDB.del(this.db, 'utzJobTypes', key)

    @action exportToJsonString=()=>indexedDB.exportToJsonString(this.db)

    @action clearDatabase=()=>indexedDB.clearDatabase(this.db)

    @action importFromJsonString=(jsonString)=>indexedDB.importFromJsonString(this.db, jsonString)

}

export default dbStore;