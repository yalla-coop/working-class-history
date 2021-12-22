import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Skeleton } from 'antd';

import { Typography as T, Grid, Inputs, Tags } from '../../components';

import * as Tag from '../../api-calls/Tag';
import { CATEGORIES } from '../../constants/api-data';

const { Col, Row } = Grid;
const { TagList } = Tags;
const { BasicInput } = Inputs;

const decideCategory = (type) => {
  switch (type) {
    case 'organisations':
      return CATEGORIES.organisation;
    case 'people':
      return CATEGORIES.person;
    case 'areas':
      return CATEGORIES.city_area;
    case 'countries':
      return CATEGORIES.country;
    case 'topics':
      return CATEGORIES.topic;

    default:
      return CATEGORIES.organisation;
  }
};

const CategoryPage = () => {
  const [tags, setTags] = useState([]);
  const [nextData, setNextData] = useState('');
  const [showItems, setShowItems] = useState(100);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageError, setPageError] = useState('');

  const { categoryName } = useParams();

  useEffect(() => {
    const getAllTags = async () => {
      try {
        setLoading(true);
        const { error, data } = await Tag.getTagsByCategory({
          category: decideCategory(categoryName),
        });
        setTags(data.results);
        setNextData(data.next);
        setLoading(false);
        if (error) {
        }
      } catch (error) {
        setPageError(error.message);
      }
    };
    getAllTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = async (value) => {
    setSearch(value);
    try {
      setLoading(true);
      const { error, data } = await Tag.getTagsByCategoryForSearch({
        category: decideCategory(categoryName),
        search: value,
      });
      setTags(data.results);
      setNextData(data.next);
      setLoading(false);
      if (error) {
      }
    } catch (error) {
      setPageError(error.message);
    }
  };

  return (
    <>
      <T.H1>
        {categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1)}
      </T.H1>
      {pageError && (
        <T.P color="error" mt="8">
          {pageError}
        </T.P>
      )}
      <Row>
        <Col w={[4, 12, 8]}>
          <T.P mt="6" color="neutral">
            Lorem ipsum some information about how you can click each tag below
            to discover articles for that specifc
          </T.P>
        </Col>
      </Row>
      <Row mt="8">
        <Col w={[4, 4, 4]}>
          <BasicInput
            label="Search"
            placeholder="search here..."
            value={search}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      {loading ? (
        <Row mt="10" mtT="5">
          <Col w={[4, 12, 12]}>
            <Skeleton key="skeleton" loading={loading} active></Skeleton>
          </Col>
        </Row>
      ) : (
        <TagList
          tagsList={tags}
          mt="10"
          mtT="5"
          nextData={nextData}
          setNextData={setNextData}
          setTags={setTags}
          setLoading={setLoading}
          setPageError={setPageError}
          showItems={showItems}
          setShowItems={setShowItems}
        />
      )}
    </>
  );
};

export default CategoryPage;
