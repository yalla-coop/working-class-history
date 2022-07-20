import { Typography as T, Grid, Tags } from '../../components';
import * as S from './style';
import { GENERAL } from '../../constants/nav-routes';

const { Col, Row } = Grid;
const { Category } = Tags;

const IndexPage = () => {
  return (
    <>
      <T.H1>Index</T.H1>
      <Row>
        <Col w={[4, 12, 8]}>
          <T.P mt="6" color="neutral">
            Click each tag below to discover articles for that specifc category.
          </T.P>
        </Col>
      </Row>
      <S.CategoriesWrapper mt="6">
        <Category
          shape="square"
          shapeColor="primaryMain"
          title="Topics"
          to={GENERAL.CATEGORY.replace(':categoryName', 'topics')}
        />
        <Category
          shape="circle"
          shapeColor="tertiaryMain"
          title="People"
          to={GENERAL.CATEGORY.replace(':categoryName', 'people')}
          mt="7"
        />
        <Category
          shape="triangle"
          shapeColor="neutral"
          title="Organisations"
          to={GENERAL.CATEGORY.replace(':categoryName', 'organisations')}
          mt="7"
        />
        <Category
          shape="square"
          shapeColor="primaryMain"
          title="City/areas"
          to={GENERAL.CATEGORY.replace(':categoryName', 'areas')}
          mt="7"
        />
        <Category
          shape="circle"
          shapeColor="tertiaryMain"
          title="Countries"
          to={GENERAL.CATEGORY.replace(':categoryName', 'countries')}
          mt="7"
        />
      </S.CategoriesWrapper>
    </>
  );
};

export default IndexPage;
