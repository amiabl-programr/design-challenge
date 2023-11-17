import fetch from "node-fetch";

exports.handler = async (event, callback) => {
  let res = await fetch("https://gqkuommdmfzmwkzdewma.supabase.co/rest/v1/steam?select=*", {
    headers: {
      apikey: `${process.env.REACT_APP_SUPABASE_KEY}`,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_AUTH}`,
    },
  });
  let data = await res.json();

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data),
  })
  //   return 
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network error")
  //       }
  //       return res.json()
  //     })
  //     .then((data) => {
  //       return {

  //         statusCode: 200,
  //         body: JSON.stringify(data)
  //       }

  //     });
  console.log(event);
};
// // return data;



