const fs = require('fs');
const path = require('path');

const XLSX = require('xlsx');
const { dataPath } = require('./utils');
// 创建一个工作簿
const workbook = XLSX.utils.book_new();

// 读取数据，然后保存为 Excel 文件
fs.readdir(dataPath, (err, files) => {
  if (err) {
    console.error(`读取文件夹失败，请将json数据存入 ${dataPath} 文件夹`);
    return;
  }
  files.forEach(file => {
    const filePath = path.join(dataPath, file);

    const data = fs.readFileSync(filePath, 'utf8');
    saveData(JSON.parse(data), file.split('.')[0]);
  })
  console.log('数据已保存为 Excel 文件');
});

/**
 * 保存数据为 Excel 文件
 */
function saveData(data, fileName) {
  // 将 JSON 数据转换为工作表
  const worksheet = XLSX.utils.json_to_sheet(data);

  // 将工作表添加到工作簿中
  XLSX.utils.book_append_sheet(workbook, worksheet, fileName);

  // 将工作簿保存为 Excel 文件
  XLSX.writeFile(workbook, 'output.xlsx');
}
