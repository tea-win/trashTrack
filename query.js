const { Connection, Request } = require("tedious");


// self.server = 'trashusers.database.windows.net'
// 		self.database = 'userData'
// 		self.username = 'rootAdmin'
// 		self.password = 'A!123456'
// 		self.driver= '{ODBC Driver 17 for SQL Server}'

// Create connection to database
const config = {
  authentication: {
    options: {

        
      userName: "username", // update me
      password: "password" // update me
    },
    type: "default"
  },
  server: "trashusers.database.windows.net", // update me
  options: {
    database: "your_database", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT TOP 20 pc.Name as CategoryName,
                   p.name as ProductName
     FROM [SalesLT].[ProductCategory] pc
     JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);

    });


  });

  connection.execSql(request);
}