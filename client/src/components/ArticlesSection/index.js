import * as S from './style';
import { Row, Col } from '../Grid';
import TextSection from '..//TextSection';

const ArticlesSection = ({ articles }) => {
  return (
    <S.Wrapper>
      <Row>
        {articles.map((article) => (
          <Col w={[4, 6, 6]} key={article?.id} mt="11" mtM="8">
            <TextSection {...article} />
          </Col>
        ))}
      </Row>
      <S.ShapesWrapper>
        <S.Block top="35%" color="primaryMain" />
        {articles.length > 3 && <S.Block top="65%" color="tertiaryMain" />}
      </S.ShapesWrapper>
    </S.Wrapper>
  );
};

export default ArticlesSection;
