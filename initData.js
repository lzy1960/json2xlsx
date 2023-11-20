const fs = require('fs');
const { initData, dataPath } = require('./utils');

if (fs.existsSync(dataPath)) {
  // 如果存在则删除文件夹
  fs.rmSync(dataPath, { recursive: true });
  console.log(`清理旧的 ${dataPath} 文件夹`);
}
// 检查文件夹是否存在
if (!fs.existsSync(dataPath)) {
  // 如果不存在则创建文件夹
  fs.mkdirSync(dataPath);
  console.log(`新的文件夹 ${dataPath} 创建成功`);
}

initData();
