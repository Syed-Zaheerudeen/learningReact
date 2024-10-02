import { Client, Storage, ID } from "appwrite";
import conf from "../envConfig/conf.js";

class BucketServices {

    client;
    buckets;

    constructor() {
        this.client = new Client()
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.projectId);

        this.buckets = new Storage(this.client);
    }

    async uploadFile(file) {
          try {
            return await this.buckets.createFile(
               conf.bucketId,
                ID.unique(), 
                file, 
            );
          } catch (error) {
            console.log(error);
          }
    }

    async deleteFile(fileId) {
        try {
            await this.buckets.deleteFile(
                conf.bucketId, 
                fileId
            );
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getfile(fileId) {
        return this.buckets.getFilePreview(
            conf.bucketId,
            fileId,
        );
    }

}


export default new BucketServices();