import images from '../constants/images';
import icons from '../constants/icons';

const marqueeList = [
  {
    id: 0,
    heading: 'होम',
  },
  {
    id: 1,
    heading: 'वीडियो',
  },
];

// const DrawerList = [
//   {
//     id: 0,
//     name: 'होम',
//   },
//   {
//     id: 1,
//     name: 'वीडियो',
//   },
//   {
//     id: 2,
//     name: 'फोटो',
//   },
//   {
//     id: 3,
//     name: 'ताज़ा ख़बर',
//   },
//   {
//     id: 4,
//     name: 'देश',
//   },
//   {
//     id: 5,
//     name: 'दुनिया',
//   },
//   {
//     id: 6,
//     name: 'राज्य',
//   },
//   {
//     id: 7,
//     name: 'चुनाव',
//   },
//   {
//     id: 8,
//     name: 'मनोरंजन',
//   },
//   {
//     id: 9,
//     name: 'स्पोर्ट्स',
//   },
//   {
//     id: 10,
//     name: 'राजनीति',
//   },
//   {
//     id: 11,
//     name: 'रोचक',
//   },
//   {
//     id: 12,
//     name: 'कृषि समाचार',
//   },
//   {
//     id: 13,
//     name: ' व्यापार',
//   },
//   {
//     id: 14,
//     name: 'शिक्षा',
//   },
// ];
const categories = [
  {
    englishurl: '/',
    id: 1,
    name: 'होम',
    parent: 0,
    count: 0,
  },

  {
    englishurl: 'elections-2023',
    id: 737,
    name: 'चुनाव - 2023',
    parent: 0,
    count: 0,
  },
  {
    englishurl: 'politics',
    id: 45,
    name: 'राजनीति',
    parent: 0,
    count: 0,
  },
  {
    englishurl: 'state/madhya-pradesh',
    id: 24,
    name: 'म. प्र.',
    parent: 0,
    count: 0,
  },
  {
    englishurl: 'state/chhattisgarh',
    id: 728,
    name: 'छत्तीसगढ़',
    parent: 0,
    count: 0,
  },
  {
    englishurl: 'state/rajasthan',
    id: 741,
    name: 'राजस्थान',
    parent: 0,
    count: 0,
  },
  {
    englishurl: 'desh',
    id: 47,
    name: 'देश - दुनिया',
    parent: 0,
    count: 0,
  },
  {
    englishurl: 'world-cup',
    id: 737,
    name: 'वर्ल्डकप - 2023',
    parent: 0,
    count: 0,
  },
  {
    englishurl: 'videos',
    id: 28,
    name: 'वीडियो',
    parent: 0,
    count: 0,
  },
  {
    englishurl: 'gallery',
    id: 735,
    name: 'फोटो',
    parent: 0,
    count: 0,
  },

  // {
  //   englishurl: 'telangana',
  //   id: 737,
  //   name: 'तेलंगाना',
  //   parent: 0,
  //   count: 0,
  // },
  // {
  //   englishurl: 'state',
  //   id: 742,
  //   name: 'राज्य',
  //   parent: 0,
  //   count: 0,
  //   child1: [
  //     'मध्यप्रदेश',
  //     'छत्तीसगढ़ ',
  //     'राजस्थान',
  //     'पंजाब',
  //     'उत्तरप्रदेश',
  //     'बिहार',
  //     'महाराष्ट्र',
  //     'उत्तराखंड',
  //   ],
  // },

  {
    englishurl: 'entertainment',
    id: 4,
    name: 'मनोरंजन',
    parent: 0,
    count: 0,
  },
  {
    englishurl: 'most-read',
    id: 48,
    name: 'सबसे ज्यादा पढ़ी गईं',
    parent: 0,
    count: 0,
  },
];
const BannerHeadingList = [
  {
    id: 0,
    title:
      'आज किस राशि के लोगों को होगा फायदा , किसकी मेहनत होगी सफल और किसे करनी पड़ेगी यात्रा ; पढ़िए आपका राशिफल',
    image: images.banner,
  },
];

const MoreNewList = [
  {
    id: 0,
    title: 'बॉलीवुड में 70 के दशक में धूम मचाने वाली एक्ट्रेसेस आज बॉलीवुड की ',
    image: images.banner5,
    content:
      'पॉजिटिव- आज दिन सामान्य रहेगा। आपके कार्य संपूर्ण हो जाएंगे, लेकिन उसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .',
  },
  {
    id: 1,
    title:
      'बॉलीवुड में 70 के दशक में धूम मचाने वाली एक्ट्रेसेस आज बॉलीवुडफिल्मों में',
    image: images.banner,
    content:
      'कोई पारिवारिक मसला पॉजिटिव- आज दिन सामान्य रहेगा। आपके कार्य संपूर्ण हो जाएंगे, लेकिन उसके लिए बहुत अधिक मेहनत करनी होगी।  ',
  },
  {
    id: 2,
    title: 'धूम मचाने वाली एक्ट्रेसेस आज बॉलीवुड की हिट फिल्मों में',
    image: images.banner4,
    content:
      'पॉजिटिव- आज दिन सामान्य रहेगा। आपके कार्य संपूर्ण हो जाएंगे, लेकिन उसके लिए बहुत अधिक मेहनत करनी होगी। कोई  ',
  },
  {
    id: 3,
    title: 'बॉलीवुड में 70 के दशक में धूम मचाने वाली एक्ट्रेसेस आज बॉलीवुड',
    image: images.banner3,
    content:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .',
  },
  {
    id: 4,
    title: 'बॉलीवुड में 70 के दशक में धूम मचाने वाली एक्ट्रेसेस आज बॉलीवुड की ',
    image: images.banner2,
    content:
      'आपके कार्य संपूर्ण हो जाएंगे,पॉजिटिव- आज दिन सामान्य रहेगा।  लेकिन उसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .',
  },
];

const NewUpdateFourImageList = [
  {
    image: images.banner2,
  },
  {
    image: images.banner4,
  },
  {
    image: images.banner5,
  },
  {
    image: images.banner,
  },
];
const JobListCartdata = [
  {
    id: 0,
    image: images.banner,
    salary: '44500-86004',
    title: 'अदाकारा हेमा',
    qualification: 'B.Tech/BE/M.tech',
    jobtype: 'Private',
  },
  {
    id: 1,
    image: images.banner5,
    salary: '44500-86004',
    title: 'दिग्गज अदाकारा ',
    qualification: 'B.Tech/BE/M.tech',
    jobtype: 'Private',
  },
  {
    id: 2,
    image: images.banner,
    salary: '44500-86004',
    title: ' अदाकारा हेमा',
    qualification: 'B.Tech/BE/M.tech',
    jobtype: 'Govt',
  },
  {
    id: 3,
    image: images.banner4,
    salary: '44500-86004',
    title: 'दिग्गज अदाकारा हेमा',
    qualification: 'B.Tech/BE/M.tech',
    jobtype: 'Private',
  },
  {
    id: 4,
    image: images.banner,
    salary: '44500-86004',
    title: 'दिग्गज  हेमा',
    qualification: 'B.Tech/BE/M.tech',
    jobtype: 'Private',
  },
  {
    id: 5,
    image: images.banner3,
    salary: '44500-86004',
    title: 'दिग्गज अदाकारा हेमा',
    qualification: 'B.Tech/BE/M.tech',
    jobtype: 'Private',
  },
  {
    id: 6,
    image: images.banner,
    salary: '44500-86004',
    title: 'दिग्गज अदाकारा ',
    qualification: 'B.Tech/BE/M.tech',
    jobtype: 'Private',
  },
  {
    id: 7,
    image: images.banner2,
    salary: '44500-86004',
    title: ' अदाकारा हेमा',
    qualification: 'B.Tech/BE/M.tech',
    jobtype: 'Private',
  },
  {
    id: 8,
    image: images.banner,
    salary: '44500-86004',
    title: 'दिग्गज  हेमा',
    qualification: 'B.Tech/BE/M.tech',
    jobtype: 'Private',
  },
];

const HeadingScrollList = [
  {
    id: 0,
    text: 'होम',
  },
  {
    id: 1,
    text: 'वीडियो',
  },
  {
    id: 2,
    text: 'फोटो',
  },
  {
    id: 3,
    text: 'ताज़ा ख़बर',
  },
  {
    id: 4,
    text: 'देश',
  },
  {
    id: 5,
    text: 'दुनिया',
  },
  {
    id: 6,
    text: 'राज्य',
  },
  {
    id: 7,
    text: 'चुनाव',
  },
  {
    id: 8,
    text: 'मनोरंजन',
  },
  {
    id: 9,
    text: 'स्पोर्ट्स',
  },
  {
    id: 10,
    text: 'राजनीति',
  },
  {
    id: 11,
    text: 'रोचक',
  },
  {
    id: 12,
    text: 'कृषि समाचार',
  },
  {
    id: 13,
    text: ' व्यापार',
  },
  {
    id: 14,
    text: 'शिक्षा',
  },
  {
    id: 15,
    text: 'स्वास्थ्य',
  },
  {
    id: 16,
    text: 'मोटिवेशन',
  },
  {
    id: 17,
    text: 'धर्म-ज्योतिष',
  },
  {
    id: 18,
    text: 'क्राइम',
  },
  {
    id: 19,
    text: 'विचार-मंथन',
  },
];

const SearchKey = [
  {
    id: 0,
    text: 'स्वागतम्',
  },
  {
    id: 1,
    text: 'नमस्ते',
  },
  {
    id: 2,
    text: 'धन्यवाद',
  },
  {
    id: 3,
    text: 'शायद',
  },
  {
    id: 4,
    text: 'माफ़ कीजिये',
  },
  {
    id: 5,
    text: 'क्षमा कीजिय!',
  },
  {
    id: 6,
    text: 'तपाई  कस्तो',
  },
  {
    id: 7,
    text: 'आप कैसे हैं',
  },
  {
    id: 8,
    text: 'कृपया प्रतीक्षा करें',
  },
  {
    id: 9,
    text: 'स्पोर्ट्स',
  },
  {
    id: 10,
    text: 'राजनीति',
  },
  {
    id: 11,
    text: 'रोचक',
  },
  {
    id: 12,
    text: 'कृषि समाचार',
  },
  {
    id: 13,
    text: ' व्यापार शिक्षा स्वास्थ्य',
  },
  {
    id: 14,
    text: 'शिक्षा',
  },
  {
    id: 15,
    text: 'स्वास्थ्य',
  },
  {
    id: 16,
    text: 'मोटिवेशन',
  },
];
const PhotosList = [
  {
    id: 0,
    images: images.banner3,
    content: 'देश के कई राज्यों में इस समय आई फ्लू के केस बढ़ रहे हैं.',
  },
  {
    id: 1,
    images: images.banner4,
    content:
      'तेजी से बढ़ रहे Eye Flu के मामले.. दिल्ली-एनसीआर में स्थिति ज्यादा खराब है..',
  },
  {
    id: 2,
    images: images.banner5,
    content: 'देश के कई राज्यों में इस समय आई फ्लू के केस बढ़ रहे हैं.',
  },
  {
    id: 3,
    images: images.banner,
    content: 'अपने आप को सुरक्षित रखने का उपाय.',
  },
];

const Classifieddata = [
  {
    id: 0,
    image: images.banner,
    salary: '44500',
    title: 'अदाकारा हेमा',
    subtitle: 'B.Tech/BE/M.tech',
  },
  {
    id: 1,
    image: images.banner,
    salary: '44500',
    title: 'अदाकारा हेमा',
    subtitle: 'B.Tech/BE/M.tech',
  },
  {
    id: 2,
    image: images.banner,
    salary: '44500',
    title: 'अदाकारा हेमा',
    subtitle: 'B.Tech/BE/M.tech',
  },
  {
    id: 3,
    image: images.banner,
    salary: '44500',
    title: 'अदाकारा हेमा',
    subtitle: 'B.Tech/BE/M.tech',
  },
];

export default {
  // DrawerList,
  categories,
  marqueeList,
  BannerHeadingList,
  MoreNewList,
  NewUpdateFourImageList,
  JobListCartdata,
  HeadingScrollList,
  SearchKey,
  PhotosList,
  Classifieddata,
};
