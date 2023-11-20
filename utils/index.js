/**
 * 存放数据的文件夹
 */
const dataPath = 'data';

/**
 * 根据指定的格式生成单份json数据
 */
function generateRandomData(count = 1000) {
  const data = [];
  const cities = ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Miami'];

  for (let i = 0; i < count; i++) {
    const randomAge = Math.floor(Math.random() * 50) + 20; // 随机年龄在 20 到 70 之间
    const randomCity = cities[Math.floor(Math.random() * cities.length)]; // 随机选取城市

    const person = {
      Name: `Person ${i + 1}`,
      Age: randomAge,
      City: randomCity,
      Random: Math.random(),
    };

    data.push(person);
  }

  return data;
}

/**
 * 随机生成多份json数据，默认为5
 */
function initData(count = 5) {
  const fs = require('fs');
  for (let i = 1; i <= count; i++) {
    const data = generateRandomData(1000);
    fs.writeFileSync(`data/data${i}.json`, JSON.stringify(data));
  }
}

module.exports = {
  dataPath,
  generateRandomData,
  initData,
}
