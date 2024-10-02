import { Client, Databases, Query } from "appwrite";
import conf from "../envConfig/conf";

class DBServices {
  client;
  databases;

  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.projectId);

    this.databases = new Databases(this.client);
  }

  async createPost({ title, slug, content, image, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.collectionsId,
        slug,
        {
          title,
          slug,
          content,
          image,
          status,
          userId,
        } // data
      );
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost(slug, { title, content, image, status }) {
    try {
      return await this.databases.updateDocument(
        conf.databaseId,
        conf.collectionsId,
        slug,
        {
          title,
          content,
          image,
          status,
        } // data
      );
    } catch (error) {
      console.log(error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.databaseId,
        conf.collectionsId,
        slug
      );

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.databaseId,
        conf.collectionsId,
        slug
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getAllPosts() {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.collectionsId,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log(error);
    }
  }
}


export default new DBServices();