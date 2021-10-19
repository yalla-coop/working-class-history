import { dummyTags } from './dummy-data';

export const getArticleData = () => {
  return {
    name: 'Haitian Revolution',
    date: '10 January 1804',
    year: '1804',
    image: 'haitianRevolution2',
    imageDescription: 'Contemporary depiction of the revolution',
    articleContent:
      'On this day, 1 January 1804, Haiti became an independent republic, following the revolution which had begun 13 years earlier as a rebellion of enslaved people against slavery and French colonialism. Previously known as Saint-Domingue, it was the most profitable colony in the world, generating greater revenue than all of the continental North American colonies combined. This immense wealth was generated by the sweat and blood of enslaved Africans who were being worked to death in their tens of thousands on coffee and sugar plantations. Shortly after the French revolution, which supposedly espoused the ideals of "liberty, equality and fraternity," on August 22, 1791 a slave rebellion erupted, demanding those ideals be realised, and slavery and colonialism abolished.',
    articleContent1:
      "Over the coming years, the rebels successfully defeated the combined armies of the world's biggest colonial powers: France,  Spain and Britain. The 1804 declaration of independence abolished  the colony of Saint-Domingue and reinstated the Indigenous Taino name of Hayti. Europe and the US then promptly ostracised the fledgling republic, causing severe economic hardship. In 1825, France finally agreed to recognise Haiti's independence, provided it slaveowners to the tune of 150 million gold francs ($21 billion today) - a ransom which deeply impoverished the government and was not fully repaid until 1947. The United States only recognised Haitian independence in 1862, but this did not prevent it from invading and occupying it in 1915.",
    infoTitle: 'CLR James, A History of Pan African Revolt,',
    infoLink:
      'https://shop.workingclasshistory.com/products/a-history-of-pan-african-revolt-c-l-r-james',
    sourceTitle:
      '“Haitian independence 1804-5,” Brown University, accessed July 8, 2019,',
    sourceLink: 'https://library.brown.edu/haitihistory/11.html',
    author: 'Working Class History',
    checker: 'Working Class History',
    lastEdited: '15 August 2021',
    peopleTags: dummyTags.people,
    areaTags: dummyTags.area,
    topicTags: dummyTags.topic,
    countryTags: dummyTags.country,
    organisationTags: dummyTags.organisation,
  };
};