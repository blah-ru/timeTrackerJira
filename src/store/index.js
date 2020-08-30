import { configure } from 'mobx';
import deviceStore from './device';
import TracksStore from "~/store/tracks";
import dbStore from "~/store/dbStore"
import * as IndexedDB from '~/api/IndexedDB'


class RootStore{
    constructor(){
        this.api = {
            IndexedDB
        };

        this.dbStore = new dbStore(this);
        this.TracksStore = new TracksStore(this);
        this.device     = new deviceStore(this);
    }
}

export default new RootStore();