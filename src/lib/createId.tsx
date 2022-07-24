let id = 0;
const createId = ():number => { // 声明返回一个number
  id += 1;
  return id;
};
export {createId};