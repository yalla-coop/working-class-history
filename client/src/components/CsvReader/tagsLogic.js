// const TagsArr = (arr) => {
//   const cleanArr = arr.map(
//     ({ id, people, topics, organisations, city_area, country }) => {
//       return { id, people, topics, organisations, country, city_area };
//     }
//   );
//   let tags = [];
//   cleanArr.forEach((item) => {
//     if (item.people) {
//       item.people.split(',').forEach((t) => {
//         const tagName = t.trim();
//         if (tagName) {
//           const isDuplicate = tags.findIndex((tag) => tag.title === tagName);
//           if (isDuplicate > -1 && tags[isDuplicate].category === 'people') {
//             tags[isDuplicate].articlesId = [
//               ...tags[isDuplicate].articlesId,
//               item.id,
//             ];
//           } else {
//             let tagData = {
//               id: tags.length + 1,
//               title: tagName,
//               category: 'people',
//               articlesId: [item.id],
//             };
//             tags.push(tagData);
//           }
//         }
//       });
//     }

//     if (item.topics) {
//       item.topics.split(',').forEach((t) => {
//         const tagName = t.trim();
//         if (tagName) {
//           const isDuplicate = tags.findIndex((tag) => tag.title === tagName);
//           if (isDuplicate > -1 && tags[isDuplicate].category === 'topics') {
//             tags[isDuplicate].articlesId = [
//               ...tags[isDuplicate].articlesId,
//               item.id,
//             ];
//           } else {
//             let tagData = {
//               id: tags.length + 1,
//               title: tagName,
//               category: 'topics',
//               articlesId: [item.id],
//             };
//             tags.push(tagData);
//           }
//         }
//       });
//     }

//     if (item.organisations) {
//       item.organisations.split(',').forEach((t) => {
//         const tagName = t.trim();
//         if (tagName) {
//           const isDuplicate = tags.findIndex((tag) => tag.title === tagName);
//           if (
//             isDuplicate > -1 &&
//             tags[isDuplicate].category === 'organisations'
//           ) {
//             tags[isDuplicate].articlesId = [
//               ...tags[isDuplicate].articlesId,
//               item.id,
//             ];
//           } else {
//             let tagData = {
//               id: tags.length + 1,
//               title: tagName,
//               category: 'organisations',
//               articlesId: [item.id],
//             };
//             tags.push(tagData);
//           }
//         }
//       });
//     }

//     if (item.city_area) {
//       item.city_area.split(',').forEach((t) => {
//         const tagName = t.trim();
//         if (tagName) {
//           const isDuplicate = tags.findIndex((tag) => tag.title === tagName);
//           if (isDuplicate > -1 && tags[isDuplicate].category === 'city_area') {
//             tags[isDuplicate].articlesId = [
//               ...tags[isDuplicate].articlesId,
//               item.id,
//             ];
//           } else {
//             let tagData = {
//               id: tags.length + 1,
//               title: tagName,
//               category: 'city_area',
//               articlesId: [item.id],
//             };
//             tags.push(tagData);
//           }
//         }
//       });
//     }

//     if (item.country) {
//       item.country.split(',').forEach((t) => {
//         const tagName = t.trim();
//         if (tagName) {
//           const isDuplicate = tags.findIndex((tag) => tag.title === tagName);
//           if (isDuplicate > -1 && tags[isDuplicate].category === 'country') {
//             tags[isDuplicate].articlesId = [
//               ...tags[isDuplicate].articlesId,
//               item.id,
//             ];
//           } else {
//             let tagData = {
//               id: tags.length + 1,
//               title: tagName,
//               category: 'country',
//               articlesId: [item.id],
//             };
//             tags.push(tagData);
//           }
//         }
//       });
//     }
//   });
//   // console.log({tags});
//   return tags;
// };
