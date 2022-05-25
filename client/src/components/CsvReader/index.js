/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { CSVReader } from 'react-papaparse';
import { createArticle } from '../../api-calls/Article';
import { createUpdateTagsAutomatically } from '../../api-calls/Tag';
import { apiData } from '../../constants/index';

const buttonRef = React.createRef();

const formatKey = (str) =>
  str
    .trim()
    .toLowerCase()
    .replace(' ', '_')
    .replace('/', '_')
    .replace('-', '_');

const CSVReaderComponent = ({ startSend, newArticles, setNewArticles }) => {
  const sendArticle = async (article) => {
    console.log({ article });
    const {
      title,
      year,
      month,
      day,
      time,
      description,
      more_info,
      sources,
      latitude,
      longitude,
      geotag_info,
      geotag_description,
      visitor_info,
      author_name,
      author_url,
      author_email,
      media,
      media_caption,
      media_credit,
      people,
      topics,
      organisations,
      city_area,
      country,
      podcast_url,
      books_url,
      merch_url,
    } = article;

    const { data } = await createArticle({
      title,
      year,
      month,
      day,
      time,
      description,
      more_info,
      sources,
      latitude,
      longitude,
      geotag_info,
      geotag_description,
      visitor_info,
      author_name,
      author_url,
      author_email,
      status: apiData.STATUS.published,
      media,
      media_caption,
      media_credit,
      podcast_url,
      books_url,
      merch_url,
    });

    // if created, now create a tag
    if (data && data.id) {
      createUpdateTagsAutomatically({
        articleId: data.id,
        people: people?.split(','),
        topics: topics?.split(','),
        organisations: organisations?.split(','),
        city: city_area?.split(','),
        country: country?.split(','),
      });
    }
  };

  useEffect(() => {
    if (startSend) {
      for (let i = 0; i < newArticles.length; i++) {
        let currentArr = newArticles[i];
        setTimeout(async () => {
          await sendArticle(currentArr);
        }, i * 1000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startSend]);

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
