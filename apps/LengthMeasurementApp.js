import React from 'react';
import { QuizContainer } from '../components/containers';
import { StyleSheet, Text, View } from 'react-native';
import { TextAsk, TextAskWithResult, ImageAsk, FillInBlank, ImageWithFillIn } from '../components/quiz-ask';
import { SelectValues, SelectOne } from '../components/user-inputs';

import { Provider } from 'mobx-react';
import {observable, decorate, action, computed} from "mobx";

export default class LengthMeasurementApp extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  @observable data = [
    {
      ask: {
        type: ImageWithFillIn,
        image: require('../assets/images/length-measurement/1.png'),
        content: `Đoạn màu đen dài bao nhiêu? ____`
      },
      value: [
        '50mm'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: '50mm', value: '50mm'},
          {text: '40mm', value: '40mm'},
          {text: '30cm', value: '30cm'},
          {text: '50cm', value: '50cm'}
        ]
      }
    }, {
      ask: {
        type: ImageWithFillIn,
        image: require('../assets/images/length-measurement/2.jpg'),
        content: `Đoạn màu vàng dài bao nhiêu? ____`
      },
      value: [
        '55mm'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: '55mm', value: '55mm'},
          {text: '50mm', value: '50mm'},
          {text: '60mm', value: '60mm'},
          {text: '5m', value: '5m'}
        ]
      }
    }, {
      ask: {
        type: ImageWithFillIn,
        image: require('../assets/images/length-measurement/3.jpg'),
        content: `Xe máy của ba có chiều cao là ? ____`
      },
      value: [
        '1m'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: '1m', value: '1m'},
          {text: '1km', value: '1km'},
          {text: '5m', value: '5m'},
          {text: '1mm', value: '1mm'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `3m = 300 ___`
      },
      value: [
        'cm'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mm', value: 'mm'},
          {text: 'cm', value: 'cm'},
          {text: 'km', value: 'km'},
          {text: 'dm', value: 'dm'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `3000 mm = ___ m`
      },
      value: [
        ' 3 '
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: ' 3 ', value: ' 3 '},
          {text: '30', value: '30'},
          {text: '300', value: '300'},
          {text: ' 1 ', value: ' 1 '}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `5 km = ___ m`
      },
      value: [
        '5000'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: '5000', value: '5000'},
          {text: '1000', value: '1000'},
          {text: ' 50 ', value: '50'},
          {text: '100', value: '100'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `8 m = ___ dm`
      },
      value: [
        '80'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: ' 80 ', value: '80'},
          {text: '800', value: '800'},
          {text: ' 10 ', value: '10'},
          {text: '100', value: '100'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `30 dm = ___ m`
      },
      value: [
        '3'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: ' 3 ', value: '3'},
          {text: '30', value: '30'},
          {text: ' 10 ', value: '10'},
          {text: '100', value: '100'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `2 m = ___ mm`
      },
      value: [
        '2000'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: '2000', value: '2000'},
          {text: '200', value: '200'},
          {text: ' 10 ', value: '10'},
          {text: '1000', value: '1000'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `7 cm = ___ mm`
      },
      value: [
        '70'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: '700', value: '700'},
          {text: '70', value: '70'},
          {text: ' 10 ', value: '10'},
          {text: '1000', value: '1000'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `300 mm = 3 __`
      },
      value: [
        'dm'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: ' cm ', value: 'cm'},
          {text: ' dm ', value: 'dm'},
          {text: '  m  ', value: 'm'},
          {text: ' km ', value: 'km'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `30 mm = 3 __`
      },
      value: [
        'cm'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: ' cm ', value: 'cm'},
          {text: ' dm ', value: 'dm'},
          {text: '  m  ', value: 'm'},
          {text: ' km ', value: 'km'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `30 cm = 3 __`
      },
      value: [
        'dm'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: ' cm ', value: 'cm'},
          {text: ' dm ', value: 'dm'},
          {text: '  m  ', value: 'm'},
          {text: ' km ', value: 'km'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `2 cm = ____`
      },
      value: [
        '20 mm'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: '20 mm', value: '20 mm'},
          {text: '20 m', value: '20 m'},
          {text: '200 m', value: '200 m'},
          {text: ' 2 km ', value: '2 km'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `1 dm = ____`
      },
      value: [
        '10 cm'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: '10 cm', value: '10 cm'},
          {text: '10 m', value: '10 m'},
          {text: '100 m', value: '100 m'},
          {text: ' 100 km ', value: '100 km'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `1 dm = ____`
      },
      value: [
        '100 mm'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: '100 mm', value: '100 mm'},
          {text: '10 m', value: '10 m'},
          {text: '100 cm', value: '100 cm'},
          {text: ' 100 km ', value: '100 km'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `3 m = ____`
      },
      value: [
        '30 dm'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: '30 dm', value: '30 dm'},
          {text: '3 mm', value: '3 mm'},
          {text: '3 cm', value: '3 cm'},
          {text: ' 100 km ', value: '100 km'}
        ]
      }
    }, {
      ask: {
        type: ImageWithFillIn,
        image: require('../assets/images/length-measurement/4.jpg'),
        content: `Đoạn đường này dài 3 ___`
      },
      value: [
        'mét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `Đoạn đường từ nhà bà nội, đến nhà bà ngoại dài 8 ____`
      },
      value: [
        'kilomét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `Khi nghĩ đến chiều dài đoạn đường rất xa, thì ta nghĩ tới đơn vị tính là ____`
      },
      value: [
        'kilomét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `Khi nghĩ đến chiều dài của ngôi nhà, hay cột điện, hay cột cờ thì ta nghĩ đến ____`
      },
      value: [
        'mét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `Khi nghĩ đến chiều dài con kiến thì ta nghĩ đến ____`
      },
      value: [
        'milimét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `Khi nghĩ đến chiều dài cây thước kẻ thì ta nghĩ đến ____`
      },
      value: [
        'centimét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }, {
      ask: {
        type: FillInBlank,
        content: `Một cây thước kẻ dài 20 ____`
      },
      value: [
        'centimét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }, {
      ask: {
        type: ImageWithFillIn,
        image: require('../assets/images/length-measurement/5.jpg'),
        content: `Chiều dài một đốt ngón tay là 2 ___`
      },
      value: [
        'centimét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }, {
      ask: {
        type: ImageWithFillIn,
        image: require('../assets/images/length-measurement/6.jpg'),
        content: `Chiều dài một gang tay người lớn xấp xỉ 20 ___`
      },
      value: [
        'centimét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }, {
      ask: {
        type: ImageWithFillIn,
        image: require('../assets/images/length-measurement/6.jpg'),
        content: `Chiều dài một gang tay người lớn xấp xỉ 2 ___`
      },
      value: [
        'decimét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }, {
      ask: {
        type: ImageWithFillIn,
        image: require('../assets/images/length-measurement/7.jpg'),
        content: `Viên gạch lát nền nhà em dài 5 ___`
      },
      value: [
        'decimét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }, {
      ask: {
        type: ImageWithFillIn,
        image: require('../assets/images/length-measurement/7.jpg'),
        content: `Viên gạch lát nền nhà em dài 50 ___`
      },
      value: [
        'centimét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }, {
      ask: {
        type: ImageWithFillIn,
        image: require('../assets/images/length-measurement/8.jpg'),
        content: `Cánh cửa nhà em dài 2 ___`
      },
      value: [
        'mét'
      ],
      input: {
        type: SelectValues,
        answers: [
          {text: 'mét', value: 'mét'},
          {text: 'centimét', value: 'centimét'},
          {text: 'milimét', value: 'milimét'},
          {text: 'kilomét', value: 'kilomét'},
          {text: 'decimét', value: 'decimét'}
        ]
      }
    }
  ];

  render() {
    return (
      <Provider appData={{data: this.data}}>
        <View style={styles.container}>
          <QuizContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
