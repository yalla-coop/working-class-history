import ArticlesSection from '.';
import Layout from '../Layout';
export default {
  title: 'Common Components/ArticlesSection',
  component: ArticlesSection,
};

const Template = (args) => (
  <Layout>
    <div style={{ width: '100%', background: 'red', height: '80vh' }}></div>
    <ArticlesSection {...args} />
  </Layout>
);

export const Default = Template.bind({});
Default.args = {
  articles: [
    {
      date: 'August 17, 2021',
      title: 'Arequipa general strike against forced labour',
      content:
        'In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it !!!TEST!!! In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it',
      id: '2',
    },
    {
      date: 'August 17, 2021',
      title: 'Arequipa general strike against forced labour',
      content:
        'In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it !!!TEST!!! In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it',
      id: '1',
    },
    {
      date: 'August 17, 2021',
      title: 'Arequipa general strike against forced labour',
      content:
        'In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it !!!TEST!!! In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it',
      id: '3',
    },
    {
      date: 'August 17, 2021',
      title: 'Arequipa general strike against forced labour',
      content:
        'In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it !!!TEST!!! In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it',
      id: '4',
    },
    {
      date: 'August 17, 2021',
      title: 'Arequipa general strike against forced labour',
      content:
        'In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it !!!TEST!!! In December 1925, a three-day general strike broke out in Arequipa, Peru, against "Conscripción Vial": forced conscription to road building for anyone who could not afford to pay a fee to get out of it',
      id: '5',
    },
  ],
};
