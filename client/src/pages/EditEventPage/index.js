import { useReducer, useRef, useEffect } from 'react';
import { useParams } from 'react-router';

import { Typography as T } from '../../components';
import ContributeForm from './ContributeForm';
import { getArticleData } from '../../api-calls/Article';

const initialState = {
  title: '',
  date: null,
  description: '',
  sources: '',
  latitude: '',
  longitude: '',
  geotagInfo: '',
  geotagDescription: '',
  visitorInformation: '',
  authorName: '',
  authorUrl: '',
  email: '',
  httpError: '',
  validationErrs: {},
  loading: false,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}

const EditEventPage = () => {
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const { articleId } = useParams();
  useEffect(() => {
    const articleData = getArticleData({ id: articleId });

    setState({
      ...articleData,
      title: articleData.name,
      description:
        articleData.articleContent +
        '<br /> <br /> <br />' +
        articleData.articleContent1,
      sources: articleData.sourceLink,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleId]);
  return (
    <>
      <T.H1>Edit event</T.H1>
      <ContributeForm
        state={state}
        setState={setState}
        submitAttempt={submitAttempt}
      />
    </>
  );
};

export default EditEventPage;
