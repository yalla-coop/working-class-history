import { useReducer, useRef, useEffect } from 'react';
import { getYear, format } from 'date-fns';
import { useParams } from 'react-router';

import { Typography as T } from '../../components';
import ContributeForm from './ContributeForm';
import { getArticleById } from '../../api-calls/Article';

const initialState = {
  title: '',
  date: null,
  description: '',
  moreInfo: '',
  sources: '',
  latitude: '',
  longitude: '',
  geotagInfo: '',
  geotagDescription: '',
  visitorInformation: '',
  authorName: '',
  authorUrl: '',
  email: '',
  pageError: '',
  validationErrs: {},
  loading: false,
};

function reducer(state, newState) {
  if (newState.date) {
    const year = getYear(newState.date);
    const month = newState.date.getMonth() + 1;
    const day = newState.date.getDate();
    const time = format(newState.date.getTime(), 'HH:mm');
    return { ...state, year, month, day, time, ...newState };
  }
  return { ...state, ...newState };
}

const EditEventPage = () => {
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const { articleId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setState({ loading: true });
        const { error, data } = await getArticleById({ id: articleId });
        setState({
          title: data.title,
          description: data.description,
          moreInfo: data.more_info,
          sources: data.sources,
          latitude: data.latitude,
          longitude: data.longitude,
          geotagInfo: data.geotag_info,
          geotagDescription: data.geotag_description,
          visitorInformation: data.visitor_info,
          authorName: data.author_name,
          authorUrl: data.author_url,
          email: data.author_email,
          year: data.year,
          month: data.month,
          day: data.day,
          time: data.time,
        });
        // setLoading(false);
        setState({ loading: false });

        if (error) {
          setState({ pageError: error.message });
        }
      } catch (error) {
        setState({ pageError: error.message });
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <T.H1>Edit event</T.H1>
      <ContributeForm
        state={state}
        setState={setState}
        submitAttempt={submitAttempt}
        articleId={articleId}
      />
    </>
  );
};

export default EditEventPage;
