// define functions containing server side code
// this will only run on the server and never on the client
// code will never be exposed to client so we can use or add credentials

// url will be /api/product-details/

// req - incoming request
// res - sending back a response

// import { connectDatabase, getAllProducts } from '../../components/helpers/dbUtil';

// async function handler(req, res) {
//   let client;

//   client = await connectDatabase();

//   if (req.method === 'GET') {
//     const products = await getAllProducts(client, 'ssc-collection');
//     res.status(200).json();
//   }
// }

// export default handler;


