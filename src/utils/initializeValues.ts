type DataProps = { [key: string]: any };

const introspection = (data: DataProps): DataProps => {
  const tmpData: DataProps = {};

  if (data.datas) {
    data.datas.forEach((tmp: DataProps) => {
      const result = introspection(tmp);
      Object.keys(result).forEach(temp => {
        // temp est un objet -> on doit iterer sur les key
        if ('object' === typeof temp) {
          Object.keys(temp).forEach(key => {
            tmpData[key] = temp[key];
          });
        } else {
          tmpData[temp] = result[temp];
        }
      });
    });
  }

  if (data.name) {
    if ('array' === data.componentType) {
      if (Object.keys(tmpData).length > 0) {
        return {
          [data.name]: [tmpData],
        };
      }

      return {
        [data.name]: [undefined !== data.defaultValue ? data.defaultValue : ''],
      };
    }

    if (Object.keys(tmpData).length > 0) {
      return {
        [data.name]: tmpData,
      };
    }

    return {
      [data.name]: undefined !== data.defaultValue ? data.defaultValue : '',
    };
  }

  return tmpData;
};

export default (data: DataProps | DataProps[]): DataProps => {
  const value: DataProps = {};
  let newData = data;
  if (!Array.isArray(data)) {
    newData = [data];
  }

  newData.map(introspection).forEach((result: DataProps) => {
    Object.keys(result).forEach(temp => {
      // temp est un objet -> on doit iterer sur les key

      value[temp] = undefined !== result[temp] ? result[temp] : '';

      // if ('object' === typeof temp) {
      //   Object.keys(temp).forEach(key => {
      //     value[key] = '';
      //   });
      // } else {
      //   value[temp] = '';
      // }
    });
  });

  return value;
};
