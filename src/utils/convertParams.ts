const convertParams = (
  datas?: { [key: string]: any },
  params?: { [key: string]: any },
): { [key: string]: any } => {
  const newDatas: { [key: string]: any } = {};

  if (datas && params) {
    Object.keys(params).forEach(paramKey => {
      Object.keys(datas).forEach(dataKey => {
        const regExp = new RegExp(`{{params.${paramKey}}}`, 'gi');
        const result = datas[dataKey].replace(regExp, params[paramKey]);
        if (result.localeCompare(datas[dataKey]) !== 0) {
          newDatas[dataKey] = result;
        }
      });
    });
  }

  return newDatas;
};

export default convertParams;
