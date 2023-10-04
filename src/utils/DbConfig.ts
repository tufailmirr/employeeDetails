export const DBConfig = {
    name: "MyDB",
    version: 1,
    objectStoresMeta: [
      {
        store: "employee",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [ 
          { name: "name", keypath: "name", options: { unique: false },  },
          { name: "role", keypath: "role", options: { unique: false },   },
          { name: "fromDate", keypath: "fromDate", options: { unique: false } },
          { name: "toDate", keypath: "toDate", options: { unique: false }  },
        ],
      },
    ],
  };