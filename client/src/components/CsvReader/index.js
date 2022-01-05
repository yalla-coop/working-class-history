/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { CSVReader } from 'react-papaparse';
import { createArticle } from '../../api-calls/Article';
import { apiData } from '../../constants/index';

const buttonRef = React.createRef();

const formatKey = (str) =>
  str
    .trim()
    .toLowerCase()
    .replace(' ', '_')
    .replace('/', '_')
    .replace('-', '_');

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

const CSVReaderComponent = ({ startSend, newArticles, setNewArticles }) => {
  const sendArticle = (article) => {
    console.log({ article });
    const {
      title,
      year,
      month,
      day,
      time,
      text,
      more_information,
      sources,
      latitude,
      longitude,
      geo_tag_info,
      geo_tag_description,
      visitor_information,
      author,
      author_url,
      media,
      media_caption,
      media_credit,
    } = article;
    console.log({ article });
    createArticle({
      title,
      year,
      month,
      day,
      time,
      description: text,
      more_info: more_information,
      preview_text: title,
      sources,
      latitude,
      longitude,
      geotag_info: geo_tag_info,
      geotag_description: geo_tag_description,
      visitor_info: visitor_information,
      author_name: author,
      author_url,
      author_email: author_url,
      status: apiData.STATUS.pending,
      media,
      media_caption,
      media_credit,
    });
  };
  useEffect(() => {
    if (startSend) {
      for (let i = 0; i < newArticles.length; i++) {
        let currentArr = newArticles[i];
        setTimeout(() => {
          sendArticle(currentArr);
        }, i * 1000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newArticles.length, startSend]);

  const handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  const handleOnFileLoad = (data) => {
    const keys = data[0].data;
    let arr = [];
    data.forEach((item, i) => {
      if (i === 0) return;

      const itemData = item.data;
      const itemObj = {};
      itemObj.id = i;

      keys.forEach((k, index) => {
        const formattedKey = formatKey(k);
        itemObj[formattedKey] = itemData[index];
      });
      arr.push(itemObj);
    });
    console.log('##########');
    console.log(arr);
    setNewArticles(arr);
    // TagsArr(arr);
    console.log('######');
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log('---------------------------');
    console.log(err);
    console.log('---------------------------');
  };

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };

  const handleRemoveFile = (e) => {
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };
  return (
    <>
      <h5>upload the CSV file that contain the new articles</h5>
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={handleOnError}
        noClick
        noDrag
        onRemoveFile={handleOnRemoveFile}
      >
        {({ file }) => (
          <aside
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 10,
            }}
          >
            <button
              type="button"
              onClick={handleOpenDialog}
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                width: '40%',
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              Browse file
            </button>
            <div
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#ccc',
                height: 45,
                lineHeight: 2.5,
                marginTop: 5,
                marginBottom: 5,
                paddingLeft: 13,
                paddingTop: 3,
                width: '60%',
              }}
            >
              {file && file.name}
            </div>
            <button
              style={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 20,
                paddingRight: 20,
              }}
              onClick={handleRemoveFile}
            >
              Remove
            </button>
          </aside>
        )}
      </CSVReader>
    </>
  );
};

export default CSVReaderComponent;
