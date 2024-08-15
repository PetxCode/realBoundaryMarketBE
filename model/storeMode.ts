import { model, Types, Document } from "mongoose";
import { Schema } from "mongoose";

interface iStore {
  storeName: string;
  storeUrl?: string;
  storeEmail: string;
  storeSocialMediaAcc?: string;
  category: string;
  storeImg: string;
  storeImgID: string;
  storeDetail?: string;
  products: {}[];
  user: {};
}

interface iStoreData extends iStore, Document {}

const storeModel = new Schema(
  {
    storeName: {
      type: String,
      require: true,
    },
    storeUrl: {
      type: String,
    },
    storeEmail: {
      type: String,
      require: true,
      lowercase: true,
    },
    storeImg: {
      type: String,
    },
    storeImgID: {
      type: String,
    },
    storeDetail: {
      type: String,
    },
    storeSocialMediaAcc: {
      type: String,
    },
    category: {
      type: String,
      require: true,
    },
    products: [
      {
        type: new Types.ObjectId(),
        ref: "products",
      },
    ],
    users: {
      type: new Types.ObjectId(),
      ref: "users",
    },
  },
  { timestamps: true }
);

export default model<iStoreData>("stores", storeModel);
