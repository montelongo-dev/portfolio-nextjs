// export async function getStaticProps() {
//   const res = await fetch("http://localhost:1337/home");
//   const home = await res.json();

//   console.log("TEST ---", test);

//   return {
//     props: { home },
//   };
// }

// export default function Test() {
//   async function getStaticProps() {
//     const res = await fetch("http://localhost:1337/home");
//     const home = await res.json();

//     console.log("TEST ---", test);

//     return {
//       props: { home },
//     };
//   }
// }

// export async function getPreviewPostBySlug(slug) {
//     const data = await fetchAPI(
//       `
//     query PostBySlug($where: JSON) {
//       posts(where: $where) {
//         slug
//       }
//     }
//     `,
//       {
//         variables: {
//           where: {
//             slug,
//           },
//         },
//       }
//     );
//     return data?.posts[0];
//   }
