type listProp = {
  id: number;
  name: string;
  subject: string;
  date: string;
  time: string;
};

type todoCardProp = {
  item: listProp;
};

export { listProp, todoCardProp };
