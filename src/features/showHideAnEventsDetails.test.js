import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showOrHideAnEventsDetails.feature');

defineFeature(feature, test => {

});
