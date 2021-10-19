import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Typography as T, Grid, Inputs, Tags } from '../../components';
import { getCategoryData } from '../../api-calls/Category';

const { Col, Row } = Grid;
const { TagList } = Tags;
const { BasicInput } = Inputs;

const CategoryPage = () => {
  const [data, setData] = useState({});
  const [filteredTags, setFilteredTags] = useState([]);
  const [search, setSearch] = useState('');
  const { categoryName } = useParams();

  useEffect(() => {
    let categoryData = getCategoryData();
    setData(categoryData);
  }, []);

  const handleChange = (value) => {
    const filteredData =
      data.tags &&
      data.tags.filter((tag) =>
        tag.label.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    setSearch(value);
    setFilteredTags(filteredData);
  };

  return (
    <>
      <T.H1>{categoryName}</T.H1>
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
            label="test"
            placeholder="search here..."
            value={search}
            handleChange={handleChange}
          />
        </Col>
      </Row>
      <TagList
        tagsList={filteredTags.length ? filteredTags : data.tags}
        mt="10"
      />
    </>
  );
};

export default CategoryPage;
